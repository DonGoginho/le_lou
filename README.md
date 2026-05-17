# le_lou – Französisch-Lernapp

Statische Web-App für den Französischunterricht: Konjugationen (Présent, Passé composé, Futur proche), Übungen und Vokabeltrainer.

🔗 **Live:** [dongoginho.github.io/le_lou](https://dongoginho.github.io/le_lou/)

## Features

- **Présent** – Konjugation der drei regulären Verbgruppen (-er, -ir, -re)
- **Passé composé** – Vergangenheit mit avoir + Partizip
- **Futur proche** – Nahe Zukunft mit aller + Infinitiv
- **Übungs-Engine** – Interaktive Konjugationsübungen pro Zeitform
- **Vokabeltrainer** – Mit Karteikarten-Modus
- Cross-table Highlighting (Hover zeigt gleiche Person in allen Gruppen)
- Farbcodiert nach Verbgruppe (rot/-er, rosa/-ir, orange/-re)

## Zielgruppe

Deutschsprachige Schüler im Französischunterricht.

## Technisch

- Kein Framework, kein Build – reine HTML/CSS/JS Dateien
- Direkt im Browser öffnen oder via GitHub Pages
- GitHub Pages Deployment via `/docs` Ordner (main branch)

## Projektstruktur

```
le_lou/
├── docs/                 ← GitHub Pages Source (LIVE)
│   ├── index.html        ← Présent (Startseite)
│   ├── passe-compose.html
│   ├── futur-proche.html
│   ├── vocis.html        ← Vokabeltrainer
│   ├── style.css
│   ├── app.js
│   ├── passe-compose.js
│   ├── futur-proche.js
│   ├── exercises.js
│   ├── vocis.csv
│   └── vocis/            ← Vokabel-Bilder
├── lou_franz/            ← Arbeitsverzeichnis (Source)
├── index.html            ← Lokaler Redirect zu docs/
└── README.md
```

## Lokal öffnen

`lou_franz/index.html` direkt im Browser öffnen — kein Server nötig.

## Deployment

Änderungen in `lou_franz/` machen, nach `docs/` kopieren, pushen:

```powershell
Copy-Item lou_franz\* docs -Recurse -Force -Exclude ".claude"
git add docs
git commit -m "Update: [Beschreibung]"
git push
```

GitHub Pages aktualisiert automatisch (~1 Minute).
