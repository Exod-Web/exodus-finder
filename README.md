# Exodus Erlebnis-Finder

Erlebnis-Finder für exodus-hn.de (Webflow). Eingebunden über jsDelivr mit festem Commit-Stand:

    https://cdn.jsdelivr.net/gh/Exod-Web/exodus-finder@7597895dedda07203bf558c692c015ef03e2bfaa/exodus-finder.min.js

- `exodus-finder.min.js` – die Datei, die Webflow lädt
- `exodus-finder.js` – lesbarer Quelltext
- `webflow-einbindung.html` – Code für Webflow (Teil A in den Head, Teil B vor </body>)

Aktueller Stand: 1.3.0 (Terminfrage, freie Termine aus dem QuinBook-Shop, Poster und Gutschein-Bilder aus img/, Poster-Liste, 7. Person für Firmen am Schließtag).

Neue Version: Datei ersetzen, committen und in Webflow die Commit-Kennung im Link austauschen.
Die feste Kennung sorgt dafür, dass jsDelivr sofort die neue Datei ausliefert.

Bilder: Ordner `img/` (WebP). Der Finder lädt sie automatisch neben `exodus-finder.min.js`. Eigene Bild-Links aus Webflow in `window.EXODUS_FINDER.images` haben Vorrang.
