/* ============================================================
   exercises.js — Gemeinsame Übungs-Engine
   Wird VOR dem Seiten-JS geladen.
   Das Seiten-JS ruft am Ende initExercises(questions) auf.
   ============================================================ */

function initExercises(questions) {

  const fab     = document.getElementById('exercise-fab');
  const section = document.getElementById('exercise-section');
  const backBtn = document.getElementById('ex-back');
  const checkBtn= document.getElementById('ex-check');
  const nextBtn = document.getElementById('ex-next');
  const input   = document.getElementById('ex-input');

  let history = [];   // letzte 10 Antworten: true/false
  let currentQ = null;

  /* ── Toggle ── */
  function enterMode() {
    document.querySelector('main').classList.add('ex-hidden');
    section.classList.remove('ex-hidden');
    fab.textContent = '← Erklärungen';
    history = [];
    showNext();
  }

  function exitMode() {
    document.querySelector('main').classList.remove('ex-hidden');
    section.classList.add('ex-hidden');
    fab.textContent = '✏ Üben';
  }

  fab.addEventListener('click',    () => section.classList.contains('ex-hidden') ? enterMode() : exitMode());
  backBtn.addEventListener('click', exitMode);

  /* ── Frage anzeigen ── */
  function showNext() {
    currentQ = questions[Math.floor(Math.random() * questions.length)];

    input.value = '';
    input.className = 'ex-input';
    input.disabled = false;
    checkBtn.disabled = false;
    nextBtn.classList.add('ex-hidden');

    const fb = document.getElementById('ex-feedback');
    fb.innerHTML = '';
    fb.className = 'ex-feedback';

    document.getElementById('ex-verb').textContent        = currentQ.verb;
    document.getElementById('ex-prompt').textContent      = currentQ.prompt;
    document.getElementById('ex-pronoun').textContent     = currentQ.pronoun;

    const badge = document.getElementById('ex-group-badge');
    badge.textContent = currentQ.groupLabel;
    badge.className   = `ex-group-badge group-${currentQ.group}`;

    updateScore();
    input.focus();
  }

  /* ── Antwort prüfen ── */
  function normalize(s) {
    return s.trim().toLowerCase().replace(/\s+/g, ' ');
  }

  function check() {
    if (!currentQ || checkBtn.disabled) return;
    const isOk = normalize(input.value) === normalize(currentQ.answer);

    history.push(isOk);
    if (history.length > 10) history.shift();

    input.disabled = true;
    checkBtn.disabled = true;
    input.classList.add(isOk ? 'correct' : 'wrong');

    const fb = document.getElementById('ex-feedback');
    fb.className = `ex-feedback ${isOk ? 'correct' : 'wrong'}`;
    fb.innerHTML = isOk
      ? `✓ Richtig! <div class="ex-answer-display">${currentQ.displayHTML}</div>`
      : `✗ Richtig wäre: <div class="ex-answer-display">${currentQ.displayHTML}</div>`;

    nextBtn.classList.remove('ex-hidden');
    updateScore();
  }

  /* ── Score ── */
  function updateScore() {
    const c = history.filter(Boolean).length;
    document.getElementById('ex-score-text').textContent = `${c} / ${history.length}`;
    document.getElementById('ex-score-dots').innerHTML =
      history.map(h => `<div class="score-dot ${h ? 'correct' : 'wrong'}"></div>`).join('');
  }

  /* ── Events ── */
  checkBtn.addEventListener('click', check);
  nextBtn.addEventListener('click',  showNext);
  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    nextBtn.classList.contains('ex-hidden') ? check() : showNext();
  });
}
