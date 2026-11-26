# Exodus Erlebnis-Finder

Erlebnis-Finder für exodus-hn.de (Webflow). Eingebunden über jsDelivr mit festem Commit-Stand:

    https://cdn.jsdelivr.net/gh/Exod-Web/exodus-finder@7597895dedda07203bf558c692c015ef03e2bfaa/exodus-finder.min.js

- `exodus-finder.min.js` – die Datei, die Webflow lädt
- `exodus-finder.js` – lesbarer Quelltext
- `webflow-einbindung.html` – Code für Webflow (Teil A in den Head, Teil B vor </body>)

Aktueller Stand: 1.7.7 (finder_request beim Webflow-Formular, finder_cart auch bei Buchung durch den Gast; Analytics: Kontext f_… an jedem Ereignis, finder_cart; Direktlinks: freie Termine, sobald der Shop geladen ist; Schulklassen draußen bis Klasse 9: 15 € für Termine 2026, 17 € ab 2027; Bilder per Webflow austauschbar mit data-finder-img; Schulklassen draußen 15 € bis Klasse 9, 20 € ab Klasse 10, S-Bahn statt Parken/Einkehr; Heuchelberger Warte nicht barrierefrei; Schulklassen: Klassenstufe statt Alter, Formularfelder Wunschtermin und Wunschuhrzeit; Burg Stettenfels nur mit „Excaliburs Erben“, Buchung über /excaliburs-erben; Schulklassen ohne Shop-Startzeiten, Wunschuhrzeit per Anfrage; Deutsch und Englisch: Der Finder folgt der Seitensprache, auf /en/ englisch, und wählt im Shop die englische Spielsprache; fest einstellbar mit `lang:'de'|'en'` in window.EXODUS_FINDER. Freie Termine erst lesen, wenn der Shop sie geladen hat. Uhrzeit im Finder wählbar, Termin direkt in den Warenkorb; Spickzettel nur bei Bedarf, am Handy als Leiste; EXIT-Spiel nur, solange es im Shop angeboten wird).

Neue Version: Datei ersetzen, committen und in Webflow die Commit-Kennung im Link austauschen.
Die feste Kennung sorgt dafür, dass jsDelivr sofort die neue Datei ausliefert.

Bilder: Ordner `img/` (WebP). Der Finder lädt sie automatisch neben `exodus-finder.min.js`. Eigene Bild-Links aus Webflow in `window.EXODUS_FINDER.images` haben Vorrang.

## Einstieg auf der Seite
Ein Element mit dem Attribut `data-finder-teaser` (z. B. ein Webflow-Embed `<div data-finder-teaser></div>`) zeigt die erste Frage „Was habt ihr vor?“ direkt auf der Seite. Knöpfe/Links mit `data-finder-open` öffnen den Finder als Vollbild.

## Google Analytics 4
Ereignisse: `finder_open`, `finder_step`, `finder_answer`, `finder_result`, `finder_alternative`, `finder_handoff`, `finder_request`, `finder_close`.
Keine personenbezogenen Daten. Zum Testen `window.EXODUS_FINDER.debug = true` setzen (Ausgabe in der Browser-Konsole).

## Direktlinks in den Finder (ab 1.4.3)

Der Finder lässt sich mit Angaben vorbelegt öffnen, z. B. für Newsletter, Social Media oder KI-Assistenten:

```
https://exodus-hn.de/#finder?gruppe=freunde&personen=4&datum=samstag&art=drinnen
https://exodus-hn.de/#finder?modus=gutschein&betrag=100&verpackung=pdf
```

Alle Parameter sind in `llms.txt` beschrieben. Der Finder startet bei der ersten offenen Frage; sind alle Angaben da, zeigt er direkt die Empfehlung mit freien Uhrzeiten. `#finder` ohne Angaben öffnet den Finder wie bisher am Anfang.

## llms.txt

`llms.txt` beschreibt Angebot und Direktlinks für KI-Assistenten. In Webflow hochladen unter Site settings → SEO → LLMs.txt, danach veröffentlichen. Die Datei liegt dann unter https://exodus-hn.de/llms.txt.

## Eingebettet statt Vollbild (ab 1.5.0)

Steht auf der Seite `<div data-finder-teaser></div>`, läuft der ganze Finder an dieser Stelle mit transparentem Hintergrund; die Seite bleibt normal scrollbar. Knöpfe mit `data-finder-open` und Links auf `#finder` scrollen zum Finder. Optionen in `window.EXODUS_FINDER`: `scrollOffset` (Höhe einer festen Navigation in px, Standard 90), `overlay:true` (alte Vollbild-Variante).

## Bilder über Webflow austauschen

Bilder aus Webflow haben Vorrang vor den Bildern in `img/` auf GitHub. Fehlt ein Bild in Webflow oder lädt es nicht, nimmt der Finder das GitHub-Bild.

Einrichtung (einmalig): Auf der Seite mit dem Finder einen Div Block anlegen (Display: none). Darin für jedes Bild ein Image-Element mit dem Custom Attribute `data-finder-img` = Schlüssel (siehe unten). Austauschen: Bild-Element auswählen, im Asset-Panel ein neues Bild wählen, veröffentlichen.

| Art | Format | Schlüssel |
|---|---|---|
| Bildkacheln (Fragen) | 3:2, z. B. 1200 × 800 | `spielen`, `verschenken`, `gruppe-freunde`, `gruppe-familie`, `gruppe-kindergeburtstag`, `gruppe-schulklasse`, `gruppe-firma`, `gruppe-jga`, `drinnen`, `draussen`, `egal`, `ort-hn`, `ort-sin`, `ort-nsu`, `ort-sha`, `ort-stf`, `ort-hw` |
| Plakate (Räume und Touren) | 5:7, z. B. 750 × 1050 | `er1-flynn`, `er2-endzeit`, `er3-leonardo`, `er4-zombielabor`, `ot1-mindfall`, `ot2-blackout`, `ot3-portal`, `ot4-excalibur` |
| Gutscheine und Verpackungen | 3:2, z. B. 1200 × 800, Motiv mit Rand | `gutschein-pdf`, `hc-klassik`, `hc-geburtstag`, `hc-hochzeit`, `hc-ostern`, `hc-weihnachten`, `pop-feuerwerk`, `pop-katze`, `pop-gaensebluemchen`, `pop-geschenkbox`, `pack-ship`, `exit-game` |
