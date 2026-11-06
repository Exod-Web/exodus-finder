# Exodus Erlebnis-Finder

Erlebnis-Finder für exodus-hn.de (Webflow). Eingebunden über jsDelivr mit festem Commit-Stand:

    https://cdn.jsdelivr.net/gh/Exod-Web/exodus-finder@7597895dedda07203bf558c692c015ef03e2bfaa/exodus-finder.min.js

- `exodus-finder.min.js` – die Datei, die Webflow lädt
- `exodus-finder.js` – lesbarer Quelltext
- `webflow-einbindung.html` – Code für Webflow (Teil A in den Head, Teil B vor </body>)

Aktueller Stand: 1.4.3 (Terminfrage, freie Termine aus dem QuinBook-Shop, Poster und Gutschein-Bilder aus img/, Poster-Liste, 7. Person für Firmen am Schließtag).

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
