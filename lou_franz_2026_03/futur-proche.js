/* ============================================================
   FUTUR PROCHE
   Bildung: aller (konjugiert) + Infinitif (unverändert)
   ============================================================ */

const SUBJECTS = [
  { label: 'je',          elide: false },
  { label: 'tu',          elide: false },
  { label: 'il / elle',   elide: false },
  { label: 'nous',        elide: false, shared: true },
  { label: 'vous',        elide: false, shared: true },
  { label: 'ils / elles', elide: false },
];

const ALLER = ['vais', 'vas', 'va', 'allons', 'allez', 'vont'];

const VERBS = {
  er: [
    { infinitive: 'parler'     },
    { infinitive: 'aimer'      },
    { infinitive: 'habiter'    },
    { infinitive: 'travailler' },
    { infinitive: 'écouter'    },
    { infinitive: 'regarder'   },
    { infinitive: 'chanter'    },
    { infinitive: 'jouer'      },
    { infinitive: 'chercher'   },
    { infinitive: 'arriver'    },
    { infinitive: 'donner'     },
    { infinitive: 'penser'     },
    { infinitive: 'porter'     },
    { infinitive: 'marcher'    },
    { infinitive: 'danser'     },
  ],
  ir: [
    { infinitive: 'finir'      },
    { infinitive: 'choisir'    },
    { infinitive: 'grandir'    },
    { infinitive: 'réussir'    },
    { infinitive: 'remplir'    },
    { infinitive: 'obéir'      },
    { infinitive: 'réfléchir'  },
    { infinitive: 'agir'       },
    { infinitive: 'bâtir'      },
    { infinitive: 'applaudir'  },
    { infinitive: 'nourrir'    },
    { infinitive: 'punir'      },
    { infinitive: 'ralentir'   },
    { infinitive: 'saisir'     },
    { infinitive: 'guérir'     },
  ],
  re: [
    { infinitive: 'vendre'       },
    { infinitive: 'entendre'     },
    { infinitive: 'répondre'     },
    { infinitive: 'attendre'     },
    { infinitive: 'perdre'       },
    { infinitive: 'rendre'       },
    { infinitive: 'descendre'    },
    { infinitive: 'défendre'     },
    { infinitive: 'confondre'    },
    { infinitive: 'fondre'       },
    { infinitive: 'mordre'       },
    { infinitive: 'tendre'       },
    { infinitive: 'tordre'       },
    { infinitive: 'correspondre' },
    { infinitive: 'répandre'     },
  ],
};

/* Unregelmässige Verben als Beispiele für futur proche */
const FP_IRREG_EXAMPLES = [
  { pronoun: 'je',        aller: 'vais',   inf: 'être',    de: 'sein werden' },
  { pronoun: 'tu',        aller: 'vas',    inf: 'avoir',   de: 'haben werden' },
  { pronoun: 'il',        aller: 'va',     inf: 'faire',   de: 'machen werden' },
  { pronoun: 'nous',      aller: 'allons', inf: 'aller',   de: 'gehen werden (!)' },
  { pronoun: 'vous',      aller: 'allez',  inf: 'venir',   de: 'kommen werden' },
  { pronoun: 'ils',       aller: 'vont',   inf: 'pouvoir', de: 'können werden' },
  { pronoun: 'je',        aller: 'vais',   inf: 'vouloir', de: 'wollen werden' },
  { pronoun: 'tu',        aller: 'vas',    inf: 'savoir',  de: 'wissen werden' },
  { pronoun: 'elle',      aller: 'va',     inf: 'prendre', de: 'nehmen werden' },
  { pronoun: 'ils',       aller: 'vont',   inf: 'partir',  de: 'abfahren werden' },
];

/* ============================================================
   RENDER
   ============================================================ */

function renderTable(group, verb) {
  const tbody = document.querySelector(`#table-${group} tbody`);
  tbody.innerHTML = '';

  SUBJECTS.forEach((subject, i) => {
    const isShared = subject.shared === true;
    const tr = document.createElement('tr');
    tr.dataset.rowIndex = i;
    if (isShared) tr.classList.add('shared-row');

    const sharedBadge = isShared ? `<span class="shared-badge">=</span>` : '';

    // Infinitif is shown as a whole in the group's ending color
    const infHTML = `<span class="ending" style="font-size:1rem;font-weight:600">${verb.infinitive}</span>`;

    tr.innerHTML = `
      <td class="pronoun">${subject.label}${sharedBadge}</td>
      <td class="aller-cell">${ALLER[i]}</td>
      <td class="word inf-cell">${infHTML}</td>
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

function renderIrregExamples() {
  const grid = document.getElementById('fp-irreg-grid');
  FP_IRREG_EXAMPLES.forEach(ex => {
    const div = document.createElement('div');
    div.className = 'fp-irreg-item';
    div.innerHTML = `
      <span class="fi-aller">${ex.pronoun} ${ex.aller}</span>
      <span class="fi-inf">${ex.inf}</span>
      <span class="fi-de">${ex.de}</span>
    `;
    grid.appendChild(div);
  });
}

/* ============================================================
   INIT
   ============================================================ */
['er', 'ir', 're'].forEach(group => {
  populateSelect(group);
  renderTable(group, VERBS[group][0]);
});

renderIrregExamples();

/* ============================================================
   ÜBUNGS-FRAGEN (Futur proche)
   Student tippt: "aller_form + infinitif" — z.B. "allons parler"
   ============================================================ */

function buildExerciseQuestions() {
  const questions = [];
  const groupLabels = { er: 'Verben auf -er', ir: 'Verben auf -ir', re: 'Verben auf -re' };
  const groupColors = { er: 'var(--er)', ir: 'var(--ir)', re: 'var(--re)' };

  Object.entries(VERBS).forEach(([group, verbs]) => {
    verbs.forEach(verb => {
      SUBJECTS.forEach((subject, i) => {
        const allerForm = ALLER[i];
        const answer    = allerForm + ' ' + verb.infinitive;
        const col       = groupColors[group];

        questions.push({
          verb:        verb.infinitive,
          prompt:      'Futur proche — tippe: aller + infinitif:',
          pronoun:     subject.label,
          answer,
          displayHTML: `<span style="color:var(--aller);font-weight:700">${allerForm}</span> `
                     + `<span style="color:${col};font-weight:700">${verb.infinitive}</span>`,
          group,
          groupLabel:  groupLabels[group],
        });
      });
    });
  });

  return questions;
}

initExercises(buildExerciseQuestions());
