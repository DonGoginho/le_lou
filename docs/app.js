/* ============================================================
   DONNÉES : verbes conjugués au présent de l'indicatif
   Chaque forme = { stem, ending }
   Pour les verbes en -ir au pluriel, le radical inclut déjà -iss-
   Pour -re il/elle : ending est '' (zéro terminaison)
   ============================================================ */

const SUBJECTS = [
  { label: 'je',          elide: false },
  { label: 'tu',          elide: false },
  { label: 'il / elle',   elide: false },
  { label: 'nous',        elide: false, shared: true },
  { label: 'vous',        elide: false, shared: true },
  { label: 'ils / elles', elide: false },
];

// Index 0 = je, 1 = tu, 2 = il/elle, 3 = nous, 4 = vous, 5 = ils/elles

const VERBS = {
  er: [
    {
      infinitive: 'parler',
      forms: [
        { stem: 'parl', ending: 'e'   },
        { stem: 'parl', ending: 'es'  },
        { stem: 'parl', ending: 'e'   },
        { stem: 'parl', ending: 'ons' },
        { stem: 'parl', ending: 'ez'  },
        { stem: 'parl', ending: 'ent' },
      ],
    },
    {
      infinitive: 'aimer',
      elide: true,
      forms: [
        { stem: 'aim', ending: 'e'   },
        { stem: 'aim', ending: 'es'  },
        { stem: 'aim', ending: 'e'   },
        { stem: 'aim', ending: 'ons' },
        { stem: 'aim', ending: 'ez'  },
        { stem: 'aim', ending: 'ent' },
      ],
    },
    {
      infinitive: 'habiter',
      elide: true,
      forms: [
        { stem: 'habit', ending: 'e'   },
        { stem: 'habit', ending: 'es'  },
        { stem: 'habit', ending: 'e'   },
        { stem: 'habit', ending: 'ons' },
        { stem: 'habit', ending: 'ez'  },
        { stem: 'habit', ending: 'ent' },
      ],
    },
    {
      infinitive: 'travailler',
      forms: [
        { stem: 'travaill', ending: 'e'   },
        { stem: 'travaill', ending: 'es'  },
        { stem: 'travaill', ending: 'e'   },
        { stem: 'travaill', ending: 'ons' },
        { stem: 'travaill', ending: 'ez'  },
        { stem: 'travaill', ending: 'ent' },
      ],
    },
    {
      infinitive: 'écouter',
      elide: true,
      forms: [
        { stem: 'écout', ending: 'e'   },
        { stem: 'écout', ending: 'es'  },
        { stem: 'écout', ending: 'e'   },
        { stem: 'écout', ending: 'ons' },
        { stem: 'écout', ending: 'ez'  },
        { stem: 'écout', ending: 'ent' },
      ],
    },
    {
      infinitive: 'regarder',
      forms: [
        { stem: 'regard', ending: 'e'   },
        { stem: 'regard', ending: 'es'  },
        { stem: 'regard', ending: 'e'   },
        { stem: 'regard', ending: 'ons' },
        { stem: 'regard', ending: 'ez'  },
        { stem: 'regard', ending: 'ent' },
      ],
    },
    {
      infinitive: 'chanter',
      forms: [
        { stem: 'chant', ending: 'e'   },
        { stem: 'chant', ending: 'es'  },
        { stem: 'chant', ending: 'e'   },
        { stem: 'chant', ending: 'ons' },
        { stem: 'chant', ending: 'ez'  },
        { stem: 'chant', ending: 'ent' },
      ],
    },
    {
      infinitive: 'jouer',
      forms: [
        { stem: 'jou', ending: 'e'   },
        { stem: 'jou', ending: 'es'  },
        { stem: 'jou', ending: 'e'   },
        { stem: 'jou', ending: 'ons' },
        { stem: 'jou', ending: 'ez'  },
        { stem: 'jou', ending: 'ent' },
      ],
    },
    {
      infinitive: 'chercher',
      forms: [
        { stem: 'cherch', ending: 'e'   },
        { stem: 'cherch', ending: 'es'  },
        { stem: 'cherch', ending: 'e'   },
        { stem: 'cherch', ending: 'ons' },
        { stem: 'cherch', ending: 'ez'  },
        { stem: 'cherch', ending: 'ent' },
      ],
    },
    {
      infinitive: 'arriver',
      elide: true,
      forms: [
        { stem: 'arriv', ending: 'e'   },
        { stem: 'arriv', ending: 'es'  },
        { stem: 'arriv', ending: 'e'   },
        { stem: 'arriv', ending: 'ons' },
        { stem: 'arriv', ending: 'ez'  },
        { stem: 'arriv', ending: 'ent' },
      ],
    },
    {
      infinitive: 'donner',
      forms: [
        { stem: 'donn', ending: 'e'   },
        { stem: 'donn', ending: 'es'  },
        { stem: 'donn', ending: 'e'   },
        { stem: 'donn', ending: 'ons' },
        { stem: 'donn', ending: 'ez'  },
        { stem: 'donn', ending: 'ent' },
      ],
    },
    {
      infinitive: 'penser',
      forms: [
        { stem: 'pens', ending: 'e'   },
        { stem: 'pens', ending: 'es'  },
        { stem: 'pens', ending: 'e'   },
        { stem: 'pens', ending: 'ons' },
        { stem: 'pens', ending: 'ez'  },
        { stem: 'pens', ending: 'ent' },
      ],
    },
    {
      infinitive: 'porter',
      forms: [
        { stem: 'port', ending: 'e'   },
        { stem: 'port', ending: 'es'  },
        { stem: 'port', ending: 'e'   },
        { stem: 'port', ending: 'ons' },
        { stem: 'port', ending: 'ez'  },
        { stem: 'port', ending: 'ent' },
      ],
    },
    {
      infinitive: 'marcher',
      forms: [
        { stem: 'march', ending: 'e'   },
        { stem: 'march', ending: 'es'  },
        { stem: 'march', ending: 'e'   },
        { stem: 'march', ending: 'ons' },
        { stem: 'march', ending: 'ez'  },
        { stem: 'march', ending: 'ent' },
      ],
    },
    {
      infinitive: 'danser',
      forms: [
        { stem: 'dans', ending: 'e'   },
        { stem: 'dans', ending: 'es'  },
        { stem: 'dans', ending: 'e'   },
        { stem: 'dans', ending: 'ons' },
        { stem: 'dans', ending: 'ez'  },
        { stem: 'dans', ending: 'ent' },
      ],
    },
  ],

  ir: [
    {
      infinitive: 'finir',
      forms: [
        { stem: 'fin',    ending: 'is'  },
        { stem: 'fin',    ending: 'is'  },
        { stem: 'fin',    ending: 'it'  },
        { stem: 'finiss', ending: 'ons' },
        { stem: 'finiss', ending: 'ez'  },
        { stem: 'finiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'choisir',
      forms: [
        { stem: 'chois',    ending: 'is'  },
        { stem: 'chois',    ending: 'is'  },
        { stem: 'chois',    ending: 'it'  },
        { stem: 'choisiss', ending: 'ons' },
        { stem: 'choisiss', ending: 'ez'  },
        { stem: 'choisiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'grandir',
      forms: [
        { stem: 'grand',    ending: 'is'  },
        { stem: 'grand',    ending: 'is'  },
        { stem: 'grand',    ending: 'it'  },
        { stem: 'grandiss', ending: 'ons' },
        { stem: 'grandiss', ending: 'ez'  },
        { stem: 'grandiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'réussir',
      elide: true,
      forms: [
        { stem: 'réuss',    ending: 'is'  },
        { stem: 'réuss',    ending: 'is'  },
        { stem: 'réuss',    ending: 'it'  },
        { stem: 'réussiss', ending: 'ons' },
        { stem: 'réussiss', ending: 'ez'  },
        { stem: 'réussiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'remplir',
      forms: [
        { stem: 'rempl',    ending: 'is'  },
        { stem: 'rempl',    ending: 'is'  },
        { stem: 'rempl',    ending: 'it'  },
        { stem: 'rempliss', ending: 'ons' },
        { stem: 'rempliss', ending: 'ez'  },
        { stem: 'rempliss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'obéir',
      elide: true,
      forms: [
        { stem: 'obé',    ending: 'is'  },
        { stem: 'obé',    ending: 'is'  },
        { stem: 'obé',    ending: 'it'  },
        { stem: 'obéiss', ending: 'ons' },
        { stem: 'obéiss', ending: 'ez'  },
        { stem: 'obéiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'réfléchir',
      forms: [
        { stem: 'réfléch',    ending: 'is'  },
        { stem: 'réfléch',    ending: 'is'  },
        { stem: 'réfléch',    ending: 'it'  },
        { stem: 'réfléchiss', ending: 'ons' },
        { stem: 'réfléchiss', ending: 'ez'  },
        { stem: 'réfléchiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'agir',
      elide: true,
      forms: [
        { stem: 'ag',    ending: 'is'  },
        { stem: 'ag',    ending: 'is'  },
        { stem: 'ag',    ending: 'it'  },
        { stem: 'agiss', ending: 'ons' },
        { stem: 'agiss', ending: 'ez'  },
        { stem: 'agiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'bâtir',
      forms: [
        { stem: 'bât',    ending: 'is'  },
        { stem: 'bât',    ending: 'is'  },
        { stem: 'bât',    ending: 'it'  },
        { stem: 'bâtiss', ending: 'ons' },
        { stem: 'bâtiss', ending: 'ez'  },
        { stem: 'bâtiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'applaudir',
      elide: true,
      forms: [
        { stem: 'applaud',    ending: 'is'  },
        { stem: 'applaud',    ending: 'is'  },
        { stem: 'applaud',    ending: 'it'  },
        { stem: 'applaudiss', ending: 'ons' },
        { stem: 'applaudiss', ending: 'ez'  },
        { stem: 'applaudiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'nourrir',
      forms: [
        { stem: 'nourr',    ending: 'is'  },
        { stem: 'nourr',    ending: 'is'  },
        { stem: 'nourr',    ending: 'it'  },
        { stem: 'nourriss', ending: 'ons' },
        { stem: 'nourriss', ending: 'ez'  },
        { stem: 'nourriss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'punir',
      forms: [
        { stem: 'pun',    ending: 'is'  },
        { stem: 'pun',    ending: 'is'  },
        { stem: 'pun',    ending: 'it'  },
        { stem: 'puniss', ending: 'ons' },
        { stem: 'puniss', ending: 'ez'  },
        { stem: 'puniss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'ralentir',
      forms: [
        { stem: 'ralent',    ending: 'is'  },
        { stem: 'ralent',    ending: 'is'  },
        { stem: 'ralent',    ending: 'it'  },
        { stem: 'ralentiss', ending: 'ons' },
        { stem: 'ralentiss', ending: 'ez'  },
        { stem: 'ralentiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'saisir',
      forms: [
        { stem: 'sais',    ending: 'is'  },
        { stem: 'sais',    ending: 'is'  },
        { stem: 'sais',    ending: 'it'  },
        { stem: 'saisiss', ending: 'ons' },
        { stem: 'saisiss', ending: 'ez'  },
        { stem: 'saisiss', ending: 'ent' },
      ],
    },
    {
      infinitive: 'guérir',
      forms: [
        { stem: 'guér',    ending: 'is'  },
        { stem: 'guér',    ending: 'is'  },
        { stem: 'guér',    ending: 'it'  },
        { stem: 'guériss', ending: 'ons' },
        { stem: 'guériss', ending: 'ez'  },
        { stem: 'guériss', ending: 'ent' },
      ],
    },
  ],

  re: [
    {
      infinitive: 'vendre',
      forms: [
        { stem: 'vend', ending: 's'   },
        { stem: 'vend', ending: 's'   },
        { stem: 'vend', ending: ''    },
        { stem: 'vend', ending: 'ons' },
        { stem: 'vend', ending: 'ez'  },
        { stem: 'vend', ending: 'ent' },
      ],
    },
    {
      infinitive: 'entendre',
      elide: true,
      forms: [
        { stem: 'entend', ending: 's'   },
        { stem: 'entend', ending: 's'   },
        { stem: 'entend', ending: ''    },
        { stem: 'entend', ending: 'ons' },
        { stem: 'entend', ending: 'ez'  },
        { stem: 'entend', ending: 'ent' },
      ],
    },
    {
      infinitive: 'répondre',
      forms: [
        { stem: 'répond', ending: 's'   },
        { stem: 'répond', ending: 's'   },
        { stem: 'répond', ending: ''    },
        { stem: 'répond', ending: 'ons' },
        { stem: 'répond', ending: 'ez'  },
        { stem: 'répond', ending: 'ent' },
      ],
    },
    {
      infinitive: 'attendre',
      elide: true,
      forms: [
        { stem: 'attend', ending: 's'   },
        { stem: 'attend', ending: 's'   },
        { stem: 'attend', ending: ''    },
        { stem: 'attend', ending: 'ons' },
        { stem: 'attend', ending: 'ez'  },
        { stem: 'attend', ending: 'ent' },
      ],
    },
    {
      infinitive: 'perdre',
      forms: [
        { stem: 'perd', ending: 's'   },
        { stem: 'perd', ending: 's'   },
        { stem: 'perd', ending: ''    },
        { stem: 'perd', ending: 'ons' },
        { stem: 'perd', ending: 'ez'  },
        { stem: 'perd', ending: 'ent' },
      ],
    },
    {
      infinitive: 'rendre',
      forms: [
        { stem: 'rend', ending: 's'   },
        { stem: 'rend', ending: 's'   },
        { stem: 'rend', ending: ''    },
        { stem: 'rend', ending: 'ons' },
        { stem: 'rend', ending: 'ez'  },
        { stem: 'rend', ending: 'ent' },
      ],
    },
    {
      infinitive: 'descendre',
      forms: [
        { stem: 'descend', ending: 's'   },
        { stem: 'descend', ending: 's'   },
        { stem: 'descend', ending: ''    },
        { stem: 'descend', ending: 'ons' },
        { stem: 'descend', ending: 'ez'  },
        { stem: 'descend', ending: 'ent' },
      ],
    },
    {
      infinitive: 'défendre',
      forms: [
        { stem: 'défend', ending: 's'   },
        { stem: 'défend', ending: 's'   },
        { stem: 'défend', ending: ''    },
        { stem: 'défend', ending: 'ons' },
        { stem: 'défend', ending: 'ez'  },
        { stem: 'défend', ending: 'ent' },
      ],
    },
    {
      infinitive: 'confondre',
      forms: [
        { stem: 'confond', ending: 's'   },
        { stem: 'confond', ending: 's'   },
        { stem: 'confond', ending: ''    },
        { stem: 'confond', ending: 'ons' },
        { stem: 'confond', ending: 'ez'  },
        { stem: 'confond', ending: 'ent' },
      ],
    },
    {
      infinitive: 'fondre',
      forms: [
        { stem: 'fond', ending: 's'   },
        { stem: 'fond', ending: 's'   },
        { stem: 'fond', ending: ''    },
        { stem: 'fond', ending: 'ons' },
        { stem: 'fond', ending: 'ez'  },
        { stem: 'fond', ending: 'ent' },
      ],
    },
    {
      infinitive: 'mordre',
      forms: [
        { stem: 'mord', ending: 's'   },
        { stem: 'mord', ending: 's'   },
        { stem: 'mord', ending: ''    },
        { stem: 'mord', ending: 'ons' },
        { stem: 'mord', ending: 'ez'  },
        { stem: 'mord', ending: 'ent' },
      ],
    },
    {
      infinitive: 'tendre',
      forms: [
        { stem: 'tend', ending: 's'   },
        { stem: 'tend', ending: 's'   },
        { stem: 'tend', ending: ''    },
        { stem: 'tend', ending: 'ons' },
        { stem: 'tend', ending: 'ez'  },
        { stem: 'tend', ending: 'ent' },
      ],
    },
    {
      infinitive: 'tordre',
      forms: [
        { stem: 'tord', ending: 's'   },
        { stem: 'tord', ending: 's'   },
        { stem: 'tord', ending: ''    },
        { stem: 'tord', ending: 'ons' },
        { stem: 'tord', ending: 'ez'  },
        { stem: 'tord', ending: 'ent' },
      ],
    },
    {
      infinitive: 'correspondre',
      forms: [
        { stem: 'correspond', ending: 's'   },
        { stem: 'correspond', ending: 's'   },
        { stem: 'correspond', ending: ''    },
        { stem: 'correspond', ending: 'ons' },
        { stem: 'correspond', ending: 'ez'  },
        { stem: 'correspond', ending: 'ent' },
      ],
    },
    {
      infinitive: 'répandre',
      forms: [
        { stem: 'répand', ending: 's'   },
        { stem: 'répand', ending: 's'   },
        { stem: 'répand', ending: ''    },
        { stem: 'répand', ending: 'ons' },
        { stem: 'répand', ending: 'ez'  },
        { stem: 'répand', ending: 'ent' },
      ],
    },
  ],
};

/* ============================================================
   UNREGELMÄSSIGE VERBEN
   Jede Form ist vollständig ausgeschrieben (kein Stamm/Endung-Split)
   ============================================================ */

const IRREGULAR_VERBS = [
  {
    infinitive: 'être',
    meaning: 'sein',
    note: 'Hilfsverb',
    forms: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
  },
  {
    infinitive: 'avoir',
    meaning: 'haben',
    note: 'Hilfsverb',
    elide: true,
    forms: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
  },
  {
    infinitive: 'faire',
    meaning: 'machen / tun',
    forms: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'],
  },
  {
    infinitive: 'aller',
    meaning: 'gehen',
    note: '-er, aber völlig unregelmässig',
    forms: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'],
  },
  {
    infinitive: 'venir',
    meaning: 'kommen',
    note: '-ir, aber ohne -iss-',
    forms: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'],
  },
  {
    infinitive: 'pouvoir',
    meaning: 'können',
    forms: ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'],
  },
  {
    infinitive: 'vouloir',
    meaning: 'wollen',
    forms: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'],
  },
  {
    infinitive: 'savoir',
    meaning: 'wissen / können',
    forms: ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'],
  },
  {
    infinitive: 'voir',
    meaning: 'sehen',
    forms: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'],
  },
  {
    infinitive: 'devoir',
    meaning: 'müssen / sollen',
    forms: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'],
  },
  {
    infinitive: 'prendre',
    meaning: 'nehmen',
    note: '-re, aber Plural unregelmässig',
    forms: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'],
  },
  {
    infinitive: 'partir',
    meaning: 'abfahren / weggehen',
    note: '-ir, aber ohne -iss-',
    forms: ['pars', 'pars', 'part', 'partons', 'partez', 'partent'],
  },
  {
    infinitive: 'sortir',
    meaning: 'ausgehen / herauskommen',
    note: '-ir, aber ohne -iss-',
    forms: ['sors', 'sors', 'sort', 'sortons', 'sortez', 'sortent'],
  },
  {
    infinitive: 'mettre',
    meaning: 'legen / stellen / setzen',
    forms: ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'],
  },
  {
    infinitive: 'dire',
    meaning: 'sagen',
    note: 'vous dites (nicht: disez!)',
    forms: ['dis', 'dis', 'dit', 'disons', 'dites', 'disent'],
  },
];

/* ============================================================
   RENDER — reguläre Verben
   ============================================================ */

function buildPronoun(subject, verbElide, index) {
  if (index === 0 && verbElide) return "j'";
  return subject.label;
}

function buildWordHTML(form, isZeroEnd) {
  const endingHTML = isZeroEnd
    ? `<span class="ending-zero" title="Keine Endung">∅</span>`
    : `<span class="ending">${form.ending}</span>`;
  return `<span class="stem">${form.stem}</span>${endingHTML}`;
}

function renderTable(group, verb) {
  const tbody = document.querySelector(`#table-${group} tbody`);
  tbody.innerHTML = '';

  SUBJECTS.forEach((subject, i) => {
    const form = verb.forms[i];
    const isShared  = subject.shared === true;
    const isZeroEnd = form.ending === '';

    const tr = document.createElement('tr');
    tr.dataset.rowIndex = i;
    if (isShared) tr.classList.add('shared-row');

    const pronounDisplay = buildPronoun(subject, verb.elide, i);
    const sharedBadge = isShared ? `<span class="shared-badge">=</span>` : '';

    tr.innerHTML = `
      <td class="pronoun">${pronounDisplay}${sharedBadge}</td>
      <td class="word">${buildWordHTML(form, isZeroEnd)}</td>
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
   RENDER — unregelmässige Verben
   ============================================================ */

function renderIrregularVerbs() {
  const container = document.getElementById('irregular-grid');

  IRREGULAR_VERBS.forEach(verb => {
    const card = document.createElement('div');
    card.className = 'irreg-card';

    const rows = SUBJECTS.map((subj, i) => {
      const pronoun = (i === 0 && verb.elide) ? "j'" : subj.label;
      return `<tr><td class="irreg-pronoun">${pronoun}</td><td class="irreg-form">${verb.forms[i]}</td></tr>`;
    }).join('');

    const noteBadge = verb.note
      ? `<span class="irreg-note">${verb.note}</span>`
      : '';

    card.innerHTML = `
      <div class="irreg-header">
        <span class="irreg-inf">${verb.infinitive}</span>
        <span class="irreg-meaning">${verb.meaning}</span>
      </div>
      ${noteBadge}
      <table class="irreg-table"><tbody>${rows}</tbody></table>
    `;

    container.appendChild(card);
  });
}

/* ============================================================
   INIT
   ============================================================ */

['er', 'ir', 're'].forEach(group => {
  populateSelect(group);
  renderTable(group, VERBS[group][0]);
});

renderIrregularVerbs();

/* ============================================================
   ÜBUNGS-FRAGEN (Présent)
   ============================================================ */

function buildExerciseQuestions() {
  const questions = [];
  const groupLabels = { er: 'Verben auf -er', ir: 'Verben auf -ir', re: 'Verben auf -re' };
  const groupColors = { er: 'var(--er)', ir: 'var(--ir)', re: 'var(--re)' };

  Object.entries(VERBS).forEach(([group, verbs]) => {
    verbs.forEach(verb => {
      SUBJECTS.forEach((subject, i) => {
        const form    = verb.forms[i];
        const pronoun = buildPronoun(subject, verb.elide, i);
        const answer  = form.stem + form.ending;
        const col     = groupColors[group];

        const endHTML = form.ending === ''
          ? `<span style="color:#B0BEC5;font-size:.9em">∅</span>`
          : `<span style="color:${col};font-weight:700">${form.ending}</span>`;

        questions.push({
          verb:        verb.infinitive,
          prompt:      'Konjugiere im Présent:',
          pronoun,
          answer,
          displayHTML: `<span style="color:var(--stem-color)">${form.stem}</span>${endHTML}`,
          group,
          groupLabel:  groupLabels[group],
        });
      });
    });
  });

  return questions;
}

initExercises(buildExerciseQuestions());
