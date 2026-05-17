# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projektbeschreibung

Statische Web-App für den Französischunterricht. Zeigt die Konjugation der drei regulären Verbgruppen (-er, -ir, -re) im Présent de l'indicatif. Zielgruppe: Schüler (deutschsprachig). Kein Build-Schritt, kein Framework — direkt im Browser öffnen.

```
index.html   — Struktur
style.css    — Design (CSS Custom Properties für Gruppenfarben)
app.js       — Daten + Rendering
```

## Dateien

```
index.html          — Présent (Gegenwart)
passe-compose.html  — Passé composé (Vergangenheit)
futur-proche.html   — Futur proche (nahe Zukunft)
style.css           — Gemeinsames Design (alle drei Seiten)
app.js              — Daten + Rendering für Présent
passe-compose.js    — Daten + Rendering für Passé composé
futur-proche.js     — Daten + Rendering für Futur proche
exercises.js        — Gemeinsame Übungs-Engine (alle drei Seiten)
```

## Starten

Einfach `index.html` im Browser öffnen. Kein Server nötig.

## Architektur

### Datenmodell (`app.js`)

Jede konjugierte Form wird als `{ stem, ending }` gespeichert:
- `stem` — der unveränderliche Stamm (wird dunkel dargestellt)
- `ending` — die variable Endung (wird farbig+fett dargestellt)
- Leere Endung `ending: ''` = Nullendung (bei -re, il/elle) → wird als `∅` angezeigt

```js
// Beispiel -er
{ stem: 'parl', ending: 'e' }   // → parle

// Beispiel -ir Plural: Stamm enthält bereits -iss-
{ stem: 'finiss', ending: 'ons' }  // → finissons

// Beispiel -re il/elle (Nullendung)
{ stem: 'vend', ending: '' }    // → vend ∅
```

Das Flag `elide: true` auf einem Verb bewirkt, dass `je` → `j'` wird (z. B. j'aime, j'entends).

### Besondere Zeilen

`SUBJECTS[3]` (nous) und `SUBJECTS[4]` (vous) haben `shared: true` → werden grün hinterlegt und mit einem `=`-Badge versehen, weil ihre Endungen (-ons, -ez) in allen drei Gruppen identisch sind.

### Gruppenfarben (CSS)

```css
--er: #C62828   (dunkelrot)
--ir: #AD1457   (himbeere/rosa)
--re: #E65100   (orange)
--shared: #2E7D32  (grün, für nous/vous-Zeilen)
```

Jede Gruppe hat drei Variablen: `--er`, `--er-light`, `--er-mid` (analog für ir, re).

### Rendering

- `renderTable(group, verb)` — baut die Konjugationstabelle auf
- `populateSelect(group)` — füllt das Dropdown
- `fadeAndRender(group, verb)` — animierter Übergang beim Verbwechsel
- `renderIrregularVerbs()` — rendert die Ausnahmen-Sektion unten
- Hover über eine Zeile hebt die gleiche Zeile in allen drei Tabellen hervor (Cross-table-Highlight)

## Verben hinzufügen

### Reguläres -er Verb
```js
{
  infinitive: 'parler',
  // elide: true,  // nur wenn Stamm mit Vokal beginnt (j'aime etc.)
  forms: [
    { stem: 'parl', ending: 'e'   },  // je
    { stem: 'parl', ending: 'es'  },  // tu
    { stem: 'parl', ending: 'e'   },  // il/elle
    { stem: 'parl', ending: 'ons' },  // nous
    { stem: 'parl', ending: 'ez'  },  // vous
    { stem: 'parl', ending: 'ent' },  // ils/elles
  ],
}
```

### Reguläres -ir Verb (2. Gruppe)
Singular-Stamm = Infinitiv ohne -ir. Plural-Stamm = Singular-Stamm + `iss`.
```js
{ stem: 'fin',    ending: 'is'  },  // je/tu
{ stem: 'fin',    ending: 'it'  },  // il
{ stem: 'finiss', ending: 'ons' },  // nous  ← iss im Stamm!
{ stem: 'finiss', ending: 'ez'  },  // vous
{ stem: 'finiss', ending: 'ent' },  // ils
```

### Reguläres -re Verb
il/elle bekommt `ending: ''` (Nullendung).
```js
{ stem: 'vend', ending: 's'   },  // je/tu
{ stem: 'vend', ending: ''    },  // il/elle ← Nullendung
{ stem: 'vend', ending: 'ons' },  // nous
```

### Unregelmässiges Verb
In `IRREGULAR_VERBS` eintragen — dort werden die Formen vollständig ausgeschrieben (kein stem/ending-Split):
```js
{
  infinitive: 'être',
  meaning: 'sein',          // deutsche Übersetzung
  note: 'Hilfsverb',        // optional: gelber Hinweisbadge
  // elide: true,           // optional: j' statt je
  forms: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
}
```

### Zusätzliche CSS-Variablen (neue Seiten)

```css
--aux:        #1565C0  /* Blau — Hilfsverb avoir/être */
--aller:      #00695C  /* Teal — aller beim futur proche */
```

### Passé composé (`passe-compose.js`)

Datenmodell: `{ infinitive, elide, ppStem, ppEnd }` — alle regulären Verben nehmen `avoir`.
Tabelle hat 3 Spalten: Pronomen | Hilfsverb (avoir) | Partizip Perfekt.
Die avoir-Formen stehen global als `AVOIR[]`.
Partizip-Endungen: -er → `-é`, -ir → `-i`, -re → `-u`.

### Futur proche (`futur-proche.js`)

Datenmodell: `{ infinitive }` — der Infinitif braucht keine Zerlegung.
Tabelle hat 3 Spalten: Pronomen | aller | Infinitif.
Die aller-Formen stehen global als `ALLER[]`.
Der Infinitif wird vollständig in der Gruppenfarbe angezeigt.

### Übungs-Engine (`exercises.js`)

Wird **vor** dem Seiten-JS geladen. Das Seiten-JS ruft am Ende `initExercises(questions)` auf.

```js
// Jede Frage hat diese Felder:
{
  verb:        'parler',           // Infinitiv (oben angezeigt)
  prompt:      'Konjugiere im ...',// Aufgabentext
  pronoun:     'nous',             // links vom Eingabefeld
  answer:      'parlons',          // erwartete Antwort (normalisiert verglichen)
  displayHTML: '...',              // farbig formatierte Antwort für Feedback
  group:       'er',               // für Badge-Farbe
  groupLabel:  'Verben auf -er',   // Badge-Text
}
```

`buildExerciseQuestions()` in jedem Seiten-JS generiert alle möglichen Fragen aus den Verbdaten.

**Toggle:** Floating-Button `✏ Üben` unten rechts. Klick blendet `<main>` aus (Klasse `ex-hidden`) und zeigt `#exercise-section`. `← Erklärungen` kehrt zurück.

## Design-Prinzipien

- Stamm immer in `--stem-color` (#263238), neutral
- Endung immer in der Gruppenfarbe, fett, leicht grösser
- `nous`/`vous`-Zeilen immer grün hinterlegt (Farbe `--shared`)
- Die -ir Plural-Erweiterung `-iss-` ist im Stamm enthalten und in der „Merke dir"-Sektion separat erklärt
- UI-Sprache: **Deutsch** (Schüler sind deutschsprachig); Fachbegriffe auf Französisch bleiben (Présent de l'indicatif, etc.)
