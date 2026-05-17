/* ============================================================
   PASSÉ COMPOSÉ
   Jede Form: { ppStem, ppEnd }
   Hilfsverb: avoir (alle regulären Verben hier)
   Avoir-Formen: ai, as, a, avons, avez, ont
   ============================================================ */

const SUBJECTS = [
  { label: 'je',          elide: false },
  { label: 'tu',          elide: false },
  { label: 'il / elle',   elide: false },
  { label: 'nous',        elide: false, shared: true },
  { label: 'vous',        elide: false, shared: true },
  { label: 'ils / elles', elide: false },
];

const AVOIR = ['ai', 'as', 'a', 'avons', 'avez', 'ont'];

const VERBS = {
  er: [
    { infinitive: 'parler',     elide: false, ppStem: 'parl',     ppEnd: 'é' },
    { infinitive: 'aimer',      elide: true,  ppStem: 'aim',      ppEnd: 'é' },
    { infinitive: 'habiter',    elide: true,  ppStem: 'habit',    ppEnd: 'é' },
    { infinitive: 'travailler', elide: false, ppStem: 'travaill', ppEnd: 'é' },
    { infinitive: 'écouter',    elide: true,  ppStem: 'écout',    ppEnd: 'é' },
    { infinitive: 'regarder',   elide: false, ppStem: 'regard',   ppEnd: 'é' },
    { infinitive: 'chanter',    elide: false, ppStem: 'chant',    ppEnd: 'é' },
    { infinitive: 'jouer',      elide: false, ppStem: 'jou',      ppEnd: 'é' },
    { infinitive: 'chercher',   elide: false, ppStem: 'cherch',   ppEnd: 'é' },
    { infinitive: 'donner',     elide: false, ppStem: 'donn',     ppEnd: 'é' },
    { infinitive: 'penser',     elide: false, ppStem: 'pens',     ppEnd: 'é' },
    { infinitive: 'porter',     elide: false, ppStem: 'port',     ppEnd: 'é' },
    { infinitive: 'marcher',    elide: false, ppStem: 'march',    ppEnd: 'é' },
    { infinitive: 'danser',     elide: false, ppStem: 'dans',     ppEnd: 'é' },
    { infinitive: 'arriver',    elide: true,  ppStem: 'arriv',    ppEnd: 'é' },
  ],
  ir: [
    { infinitive: 'finir',      elide: false, ppStem: 'fin',      ppEnd: 'i' },
    { infinitive: 'choisir',    elide: false, ppStem: 'chois',    ppEnd: 'i' },
    { infinitive: 'grandir',    elide: false, ppStem: 'grand',    ppEnd: 'i' },
    { infinitive: 'réussir',    elide: true,  ppStem: 'réuss',    ppEnd: 'i' },
    { infinitive: 'remplir',    elide: false, ppStem: 'rempl',    ppEnd: 'i' },
    { infinitive: 'obéir',      elide: true,  ppStem: 'obé',      ppEnd: 'i' },
    { infinitive: 'réfléchir',  elide: false, ppStem: 'réfléch',  ppEnd: 'i' },
    { infinitive: 'agir',       elide: true,  ppStem: 'ag',       ppEnd: 'i' },
    { infinitive: 'bâtir',      elide: false, ppStem: 'bât',      ppEnd: 'i' },
    { infinitive: 'applaudir',  elide: true,  ppStem: 'applaud',  ppEnd: 'i' },
    { infinitive: 'nourrir',    elide: false, ppStem: 'nourr',    ppEnd: 'i' },
    { infinitive: 'punir',      elide: false, ppStem: 'pun',      ppEnd: 'i' },
    { infinitive: 'ralentir',   elide: false, ppStem: 'ralent',   ppEnd: 'i' },
    { infinitive: 'saisir',     elide: false, ppStem: 'sais',     ppEnd: 'i' },
    { infinitive: 'guérir',     elide: false, ppStem: 'guér',     ppEnd: 'i' },
  ],
  re: [
    { infinitive: 'vendre',      elide: false, ppStem: 'vend',      ppEnd: 'u' },
    { infinitive: 'entendre',    elide: true,  ppStem: 'entend',    ppEnd: 'u' },
    { infinitive: 'répondre',    elide: false, ppStem: 'répond',    ppEnd: 'u' },
    { infinitive: 'attendre',    elide: true,  ppStem: 'attend',    ppEnd: 'u' },
    { infinitive: 'perdre',      elide: false, ppStem: 'perd',      ppEnd: 'u' },
    { infinitive: 'rendre',      elide: false, ppStem: 'rend',      ppEnd: 'u' },
    { infinitive: 'descendre',   elide: false, ppStem: 'descend',   ppEnd: 'u' },
    { infinitive: 'défendre',    elide: false, ppStem: 'défend',    ppEnd: 'u' },
    { infinitive: 'confondre',   elide: false, ppStem: 'confond',   ppEnd: 'u' },
    { infinitive: 'fondre',      elide: false, ppStem: 'fond',      ppEnd: 'u' },
    { infinitive: 'mordre',      elide: false, ppStem: 'mord',      ppEnd: 'u' },
    { infinitive: 'tendre',      elide: false, ppStem: 'tend',      ppEnd: 'u' },
    { infinitive: 'tordre',      elide: false, ppStem: 'tord',      ppEnd: 'u' },
    { infinitive: 'correspondre',elide: false, ppStem: 'correspond', ppEnd: 'u' },
    { infinitive: 'répandre',    elide: false, ppStem: 'répand',    ppEnd: 'u' },
  ],
};

/* ============================================================
   RENDER
   ============================================================ */

function buildPronoun(subject, verbElide, index) {
  // j' + avoir = j'ai (elision before vowel)
  if (index === 0 && verbElide) return "j'";
  return subject.label;
}

function renderTable(group, verb) {
  const tbody = document.querySelector(`#table-${group} tbody`);
  tbody.innerHTML = '';

  SUBJECTS.forEach((subject, i) => {
    const isShared = subject.shared === true;
    const tr = document.createElement('tr');
    tr.dataset.rowIndex = i;
    if (isShared) tr.classList.add('shared-row');

    // Elision: j'ai if verb starts with vowel, but "je" before avoir never elides
    // "j'ai" comes from the aux "ai" after elided "j'" → actually je+ai = j'ai always!
    const pronoun = (i === 0) ? "j'" : subject.label;

    const auxForm = AVOIR[i];
    const ppHTML = `<span class="stem">${verb.ppStem}</span><span class="ending">${verb.ppEnd}</span>`;
    const sharedBadge = isShared ? `<span class="shared-badge">=</span>` : '';

    tr.innerHTML = `
      <td class="pronoun">${pronoun}${sharedBadge}</td>
      <td class="aux-cell">${auxForm}</td>
      <td class="word pp-cell">${ppHTML}</td>
    `;

    tr.addEventListener('mouseenter', () => highlightRow(i));
    tr.addEventListener('mouseleave', () => clearHighlights());
    tbody.appendChild(tr);
  });
}

function populateSelect(group) {
  const select = document.getElementById(`select-${group}`);
  VERBS[group].forEach((verb, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = verb.infinitive;
    select.appendChild(opt);
  });
  select.addEventListener('change', (e) => {
    fadeAndRender(group, VERBS[group][+e.target.value]);
  });
}

function fadeAndRender(group, verb) {
  const table = document.getElementById(`table-${group}`);
  table.style.opacity = '0';
  table.style.transform = 'translateY(4px)';
  setTimeout(() => {
    renderTable(group, verb);
    table.style.transition = 'opacity .2s ease, transform .2s ease';
    table.style.opacity = '1';
    table.style.transform = 'translateY(0)';
  }, 120);
}

function highlightRow(index) {
  document.querySelectorAll('.conj-table tbody tr').forEach(tr => {
    if (+tr.dataset.rowIndex === index && !tr.classList.contains('shared-row')) {
      tr.classList.add('row-highlight');
    }
  });
}

function clearHighlights() {
  document.querySelectorAll('.row-highlight').forEach(tr => {
    tr.classList.remove('row-highlight');
  });
}

/* ============================================================
   INIT
   ============================================================ */
['er', 'ir', 're'].forEach(group => {
  populateSelect(group);
  renderTable(group, VERBS[group][0]);
});

/* ============================================================
   ÜBUNGS-FRAGEN (Passé composé)
   Student tippt: "avoir_form + participe" — z.B. "avons parlé"
   ============================================================ */

function buildExerciseQuestions() {
  const questions = [];
  const groupLabels = { er: 'Verben auf -er', ir: 'Verben auf -ir', re: 'Verben auf -re' };
  const groupColors = { er: 'var(--er)', ir: 'var(--ir)', re: 'var(--re)' };

  // je → "j'" weil avoir immer mit Vokal beginnt
  const pronouns = ["j'", 'tu', 'il / elle', 'nous', 'vous', 'ils / elles'];

  Object.entries(VERBS).forEach(([group, verbs]) => {
    verbs.forEach(verb => {
      SUBJECTS.forEach((subject, i) => {
        const auxForm  = AVOIR[i];
        const pp       = verb.ppStem + verb.ppEnd;
        const answer   = auxForm + ' ' + pp;
        const col      = groupColors[group];

        questions.push({
          verb:        verb.infinitive,
          prompt:      'Passé composé — tippe: avoir + participe:',
          pronoun:     pronouns[i],
          answer,
          displayHTML: `<span style="color:var(--aux);font-weight:700">${auxForm}</span> `
                     + `<span style="color:var(--stem-color)">${verb.ppStem}</span>`
                     + `<span style="color:${col};font-weight:700">${verb.ppEnd}</span>`,
          group,
          groupLabel:  groupLabels[group],
        });
      });
    });
  });

  return questions;
}

initExercises(buildExerciseQuestions());
