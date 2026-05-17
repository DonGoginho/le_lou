# Vocis aktualisieren – Anleitung

## Übersicht

Vokabeln werden in `vocis.csv` gespeichert und von `vocis.html` automatisch geladen.

## CSV-Format

Die Datei `lou_franz/vocis.csv` hat 3 Spalten:

```csv
lernziel,französisch,deutsch
```

| Spalte | Inhalt |
|--------|--------|
| `lernziel` | Nummer des Lernziels (1, 2, 3, 4, 5 …) – wird als Filter-Button angezeigt |
| `französisch` | Französisches Wort oder Satz |
| `deutsch` | Deutsche Übersetzung |

### Beispiele

```csv
1,un anniversaire,ein Geburtstag
1,changer de couleur,die Farbe wechseln
4,"En moyenne, un chat vit 15 ans.","Im Durchschnitt lebt eine Katze 15 Jahre."
5,voler,"fliegen, stehlen"
```

**Wichtig:** Kommas innerhalb eines Eintrags → den ganzen Eintrag in Anführungszeichen setzen.

## Neue Vokabeln hinzufügen

### Option A: Manuell in der CSV

1. Öffne `lou_franz/vocis.csv`
2. Füge neue Zeilen am Ende hinzu:
   ```csv
   6,le mot nouveau,das neue Wort
   6,une phrase,ein Satz
   ```
3. Speichern

### Option B: Mit Claude Code (empfohlen)

```
cd G:\sszsim\_tmp\le_lou
```

Dann z.B.:

> „Füge folgende Vocis für Lernziel 6 hinzu: [Liste oder Foto]"

Oder mit Foto:

> „Hier ist ein Foto der neuen Voci-Seite. Extrahiere alle Vokabeln und füge sie als Lernziel 6 zur vocis.csv hinzu."

Claude erkennt das Format automatisch und aktualisiert die CSV.

### Option C: Aus Foto extrahieren (wie bisher gemacht)

Die Bilder der Voci-Seiten liegen in `lou_franz/vocis/`:
```
vocis/seite1.jpeg  → Lernziel 1
vocis/seite2.jpeg  → Lernziel 2
vocis/seite3.jpeg  → Lernziel 3
vocis/seite4.jpg   → Lernziel 4+5
```

Neues Bild hinzufügen:
1. Foto in `lou_franz/vocis/` speichern (z.B. `seite5.jpg`)
2. Claude Code bitten: „Extrahiere die Vocis aus vocis/seite5.jpg als Lernziel 6"

## Nach Änderungen: Live-Seite aktualisieren

```powershell
cd G:\sszsim\_tmp\le_lou

# 1. Dateien nach docs kopieren
Copy-Item lou_franz\vocis.csv docs\vocis.csv -Force
Copy-Item lou_franz\vocis\* docs\vocis\ -Force

# 2. Committen und pushen
git add docs/vocis.csv docs/vocis/
git commit -m "Vocis: Lernziel [N] hinzugefügt ([Anzahl] neue Vokabeln)"
git push
```

Die Live-Seite aktualisiert sich automatisch (~1 Minute).

## Lernziel-Filter (Buttons in der App)

Die Filter-Buttons (LZ1, LZ2, LZ3 …) werden **automatisch** aus der CSV generiert. Wenn du ein neues Lernziel (z.B. 6) in der CSV verwendest, erscheint der Button automatisch.

**Farben der Buttons** (in `vocis.html` definiert):
- LZ1 → rot (--er)
- LZ2 → rosa (--ir)
- LZ3 → orange (--re)
- LZ4 → blau (--aux)
- LZ5 → teal (--aller)
- LZ6+ → standard (--stem-color)

Falls ein neues Lernziel eine eigene Farbe braucht, muss in `vocis.html` eine CSS-Klasse `.lz6.active { ... }` ergänzt werden.

## Modi in der Voci-App

Die App hat drei Modi (über Tabs umschaltbar):
1. **Tabelle** – Alle Vocis als sortierbare Liste
2. **Karteikarten** – Einzelne Karten zum Durchblättern (klick = umdrehen)
3. **Abfrage** – Interaktiver Test (Eingabefeld)

Alle drei Modi nutzen dieselbe `vocis.csv` als Datenquelle.

## Zusammenfassung Workflow

```
Neues Foto → lou_franz/vocis/ ablegen
          → Claude: "Extrahiere Vocis als LZ [N]"
          → vocis.csv wird ergänzt
          → Copy nach docs/
          → git add, commit, push
          → Live in ~1 Min.
```
