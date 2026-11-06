/* Exodus Erlebnis-Finder 1.4.0 · Quelltext · Stand 2026-11-06 */
const EXF_CSS="\n/* Exodus CI (aus exodus-hn.de, 01.11.2026): \u00dcberschriften Amarante in Petrol #00A59E, Text bahnschrift-semicondensed\n   (300/700) in #E0E0E0, Kn\u00f6pfe in Gold #AE8F53 mit eckigen Kanten, dunkler petrolfarbener Grund.\n   Layout: Vollbild-Overlay, Frage \u2192 gro\u00dfe Bildkacheln (am Handy Wisch-Karussell) \u2192 Ergebnis mit Live-Preis */\n:host{\n  --bg:#081315; --bg-deep:#030A0C; --panel:#0D1D20; --panel-2:#12282C; --line:#1E393D;\n  --fg:#E0E0E0; --muted:#9BB0AF; --teal:#00A59E; --teal-hi:#2CC2BA; --dark:#031012;\n  --gold:#AE8F53; --gold-hi:#C4A66B; --warn:#E39A5B;\n  --accent:var(--teal); --accent-ink:var(--dark); --ok:var(--teal);\n  --display:'Amarante',Georgia,'Times New Roman',serif;\n  --body:'bahnschrift-semicondensed','Bahnschrift SemiCondensed','Bahnschrift','Barlow Semi Condensed','Arial Narrow',sans-serif;\n  color-scheme:dark;\n}\n*{box-sizing:border-box}\n.exf-root{background:radial-gradient(ellipse 90% 60% at 50% -12%,rgba(0,165,158,.14),transparent 70%),var(--bg);background-attachment:fixed;color:var(--fg);font-family:var(--body);font-weight:300;font-size:17px;line-height:1.45;-webkit-font-smoothing:antialiased;text-align:left;min-height:100%}\n.exf-root h1,.exf-root h2,.exf-root h3,.exf-root p{letter-spacing:normal;text-transform:none}\nb,strong{font-weight:700}\n.art{position:relative;overflow:hidden}\n.art img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\nbutton{font:inherit;color:inherit}\na{color:var(--teal-hi)}\n:focus-visible{outline:2px solid var(--teal-hi);outline-offset:3px}\n.shell{min-height:100%;display:flex;flex-direction:column;padding-block:18px 28px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));max-width:1320px;margin:0 auto}\n/* Kopfzeile wie die Website-Navigation: dunkel, petrolfarbene Linie */\n.bar{display:flex;align-items:center;gap:16px;padding-bottom:14px;border-bottom:1px solid var(--teal)}\n.brand{font-family:var(--body);font-weight:700;font-size:24px;letter-spacing:.22em;text-transform:uppercase;color:var(--teal)}\n.brand small{font-weight:300;font-size:15px;letter-spacing:.02em;text-transform:none;color:var(--muted);margin-left:10px}\n.proto{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);border:1px solid var(--gold);padding:3px 10px}\n.spacer{flex:1}\n.iconbtn{width:46px;height:46px;border-radius:50%;border:1px solid var(--line);background:transparent;display:grid;place-items:center;cursor:pointer;flex-shrink:0;color:var(--fg)}\n.iconbtn:hover{border-color:var(--teal);color:var(--teal)}\n.iconbtn[disabled]{opacity:.3;cursor:default}\n.progress{display:flex;gap:6px;margin-top:16px}\n.progress i{flex:1;height:3px;background:var(--line)}\n.progress i.on{background:var(--teal)}\n/* Frage: Amarante in Petrol mit der Doppellinie der Website */\n.q{margin-top:clamp(20px,4vh,44px);display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center}\n.q h1{font-family:var(--display);font-weight:400;font-size:clamp(36px,5.6vw,62px);line-height:1.05;margin:0;color:var(--teal);text-wrap:balance}\n.q h1::after{content:\"\";display:block;width:min(300px,70vw);height:11px;margin:14px auto 2px;\n  background:linear-gradient(var(--teal),var(--teal)) top center/100% 2px no-repeat,linear-gradient(var(--teal),var(--teal)) bottom center/56% 2px no-repeat}\n.q p{margin:0;color:var(--muted);font-size:19px}\n.chips-sum{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-top:6px}\n.chip{font-size:14px;padding:4px 12px;background:var(--panel);border:1px solid var(--line);color:#C9D6D5}\n.stage{margin-top:clamp(20px,4vh,40px);flex:1;display:flex;flex-direction:column}\n/* Kacheln */\n.tiles{display:grid;gap:18px;grid-template-columns:repeat(var(--cols,3),minmax(0,1fr))}\n.tile{position:relative;display:flex;flex-direction:column;text-align:left;border:1px solid var(--line);background:var(--panel);border-radius:4px;overflow:hidden;cursor:pointer;padding:0;transition:transform .15s ease,border-color .15s ease,box-shadow .15s ease}\n.tile:hover{border-color:var(--teal);transform:translateY(-2px)}\n.tile.sel{border-color:var(--teal);box-shadow:0 0 0 1px var(--teal)}\n.tile .art{height:clamp(120px,19vh,210px);display:grid;place-items:center;background:var(--tint,var(--panel-2));color:var(--ink,#00A59E);border-bottom:1px solid var(--line)}\n.tiles[style*=\"--cols:2\"] .tile .art{height:clamp(170px,30vh,320px)}\n.tile .art.em{height:clamp(120px,16vh,160px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:radial-gradient(ellipse at 50% 55%,rgba(0,165,158,.13),transparent 70%),var(--bg-deep);color:#2E4D51}\n.tile .art.em svg{width:40px}\n.emb{display:flex;align-items:flex-end;gap:10px}\n.tile .emb>span{color:#2E4D51}.tile .emb>span.on{color:var(--gold)}\n.tiles.emblem .tile .art.em{height:clamp(130px,17vh,170px)}\n.tiles.emblem .tile .art.em svg{width:46px}\n.tiles.emblem .emb.meter{height:56px}.tiles.emblem .emb.meter i{width:14px}\n.emb-and{font-family:var(--display);font-size:26px;color:var(--muted)!important;align-self:center}\n.emb.meter{gap:6px;height:48px}.emb.meter i{display:block;width:12px;background:#24423F}.emb.meter i.on{background:var(--teal)}.emb.meter.hot i.on{background:var(--gold)}\n.emb-num{font-family:var(--display);font-size:40px;line-height:1;color:var(--teal);min-width:84px;height:84px;padding:0 10px;border:2px solid var(--teal);border-radius:42px;display:grid;place-items:center}\n.emb-medal{width:76px;height:76px;border-radius:50%;background:var(--teal);color:var(--dark);display:grid;place-items:center}\n.emb-cap{font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}\n.teaser .shell{min-height:0;padding-block:8px 24px}.teaser .q{margin-top:0}\n.tile .art svg{width:clamp(56px,7vw,84px);height:auto}\n.tile .txt{padding:14px 18px 18px;display:flex;flex-direction:column;gap:4px}\n.tile b{font-family:var(--display);font-weight:400;font-size:26px;line-height:1.1;color:var(--teal)}\n.tile span{color:var(--muted);font-size:16px}\n.tile .tag{position:absolute;top:12px;left:12px;z-index:1;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;background:var(--gold);color:var(--dark)}\n.tiles.compact .tile .art{height:auto;padding:22px 0}\n.tiles.compact .tile b{font-size:30px;text-align:center}\n.tiles.compact .tile .txt{align-items:center;text-align:center}\n.dots{display:none;justify-content:center;gap:7px;margin-top:14px}\n.dots i{width:8px;height:8px;border-radius:4px;background:var(--line);transition:width .2s}\n.dots i.on{width:22px;background:var(--teal)}\n.swipehint{display:none;text-align:center;color:var(--muted);font-size:15px;margin-top:8px}\n@media (max-width:700px){\n  .tiles:not(.keepgrid){display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:12px;margin-inline:-16px;padding-inline:16px;scrollbar-width:none}\n  .tiles:not(.keepgrid)::-webkit-scrollbar{display:none}\n  .tiles:not(.keepgrid) .tile{flex:0 0 80%;scroll-snap-align:center}\n  .tiles:not(.keepgrid) .tile .art{height:42vh;max-height:330px}\n  .tiles:not(.keepgrid) ~ .dots{display:flex}\n  .tiles:not(.keepgrid) ~ .swipehint{display:block}\n  .tiles.keepgrid{grid-template-columns:repeat(2,minmax(0,1fr))}\n  .tiles.emblem{grid-template-columns:minmax(0,1fr);gap:10px}\n  .tiles.emblem .tile{flex-direction:row;align-items:stretch}\n  .tiles.emblem .tile .art.em{width:116px;height:auto;min-height:104px;flex-shrink:0;border-bottom:0;border-right:1px solid var(--line);gap:6px}\n  .tiles.emblem .tile .art.em svg{width:30px}.tiles.emblem .emb-num{min-width:60px;height:60px;font-size:30px}.tiles.emblem .emb-medal{width:56px;height:56px}\n  .tiles.emblem .tile .txt{justify-content:center}\n  .q p{font-size:17px}\n  .brand small{display:none}\n}\n/* Personenzahl */\n.sizer{max-width:640px;margin:0 auto;width:100%;display:flex;flex-direction:column;gap:22px}\n.stepper{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 18px;border-radius:4px;background:var(--panel);border:1px solid var(--line)}\n.stepper .lbl b{display:block;font-size:20px}\n.stepper .lbl span{color:var(--muted);font-size:15px}\n.stepper .ctl{display:flex;align-items:center;gap:14px}\n.stepper .val{font-weight:700;font-size:40px;min-width:2.2ch;text-align:center;color:var(--teal);font-variant-numeric:tabular-nums}\n.big{text-align:center;font-weight:700;font-size:clamp(80px,14vw,140px);line-height:1;color:var(--teal);font-variant-numeric:tabular-nums}\n.big small{display:block;font-weight:300;font-size:19px;color:var(--muted);margin-top:6px}\ninput[type=range]{width:100%;accent-color:var(--teal);height:32px}\n.quick{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}\n.pill{min-height:44px;padding:0 18px;border:1px solid var(--line);background:transparent;cursor:pointer;font-size:16px;color:var(--fg)}\n.pill:hover{border-color:var(--teal)}\n.pill .dthumb{width:46px;height:30px;object-fit:cover;margin:0 10px 0 -8px;vertical-align:middle;border-radius:2px}\n.pill:has(.dthumb){display:inline-flex;align-items:center;min-height:48px}\n.pill.sel{border-color:var(--teal);background:rgba(0,165,158,.14);color:#fff}\n/* Standard-Knopf: goldene Kontur wie \"Jetzt buchen\" auf der Website */\n.cta{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:54px;padding:0 30px;border-radius:0;background:transparent;color:var(--fg);border:2px solid var(--gold);font-weight:700;font-size:19px;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;text-decoration:none}\n.cta:hover{background:rgba(174,143,83,.14);color:#fff}\n.cta[disabled]{opacity:.6;cursor:default}\n/* Ticket-Form nur f\u00fcr den Schritt in den Shop (wie \"Ticket buchen\" in der Navigation) */\n.cta.ticket{background:var(--gold);color:var(--dark);border:0;min-height:56px;padding:0 34px;font-size:20px;\n  -webkit-mask:radial-gradient(circle 7px at 0 50%,#0000 97%,#000) left/51% 100% no-repeat,radial-gradient(circle 7px at 100% 50%,#0000 97%,#000) right/51% 100% no-repeat;\n          mask:radial-gradient(circle 7px at 0 50%,#0000 97%,#000) left/51% 100% no-repeat,radial-gradient(circle 7px at 100% 50%,#0000 97%,#000) right/51% 100% no-repeat}\n.cta.ticket:hover{background:var(--gold-hi);color:var(--dark)}\n/* Zur\u00fcckhaltender Knopf */\n.cta.ghost{border:1px solid var(--line);font-weight:300;text-transform:none;letter-spacing:0;font-size:17px}\n.cta.ghost:hover{border-color:var(--teal);background:transparent}\n.foot{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:28px;flex-wrap:wrap}\n.note{font-size:15px;color:var(--muted)}\n.inline-note{display:flex;gap:10px;align-items:flex-start;padding:12px 14px;background:rgba(174,143,83,.1);border:1px solid rgba(174,143,83,.45);font-size:16px;max-width:640px;margin:18px auto 0}\n.inline-note svg{color:var(--gold);flex-shrink:0}\n/* Ergebnis */\n.res{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:24px;align-items:start}\n@media (max-width:960px){.res{grid-template-columns:minmax(0,1fr)}}\n.eyebrow{font-size:14px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}\n.eyebrow.gold{color:var(--gold)}\n.fav{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);border-radius:4px;overflow:hidden;background:var(--panel);border:1px solid var(--line)}\n.res-eyebrow{margin-bottom:10px}\n@media (max-width:700px){.fav{grid-template-columns:minmax(0,1fr)}}\n.fav .art{min-height:260px;display:grid;place-items:center;background:var(--tint);color:var(--ink)}\n.fav .art svg{width:110px;height:auto}\n.fav .body{padding:24px;display:flex;flex-direction:column;gap:14px;min-width:0}\n.fav h2{font-family:var(--display);font-weight:400;font-size:clamp(32px,3.8vw,46px);line-height:1.05;margin:0;color:var(--teal);text-wrap:balance}\n.fav .kind{color:var(--muted);font-size:16px}\n.fav p{margin:0;color:var(--fg)}\n.why{display:flex;flex-direction:column;gap:8px;margin:0;padding:0;list-style:none}\n.why li{display:flex;gap:10px;align-items:center}\n.why svg{color:var(--teal);flex-shrink:0}\n.facts{display:flex;flex-wrap:wrap;gap:6px}\n.fact{font-size:14px;padding:4px 10px;border:1px solid var(--line);background:var(--panel-2)}\n.price{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-top:auto}\n.price b{font-size:48px;line-height:1;color:#fff;font-variant-numeric:tabular-nums}\n.price span{color:var(--muted);font-size:16px}\n.cond{font-size:15px;color:var(--gold)}\n.alts{display:flex;flex-direction:column;gap:10px;margin-top:14px}\n.alt{display:flex;gap:16px;align-items:center;padding:12px 16px 12px 12px;border-radius:4px;background:var(--panel);border:1px solid var(--line);text-align:left;cursor:pointer;color:var(--fg);width:100%}\n.alt:hover{border-color:var(--teal)}\n.alt small{display:block;color:var(--muted);font-size:14px}\n.alt b{display:block;font-family:var(--display);font-weight:400;font-size:20px;line-height:1.15;color:var(--teal)}\n.alt-txt{flex:1;min-width:0}\n.alt-price{font-weight:700;font-size:21px;color:#fff;white-space:nowrap;font-variant-numeric:tabular-nums}\n/* Raumposter: im Favoriten gro\u00df nebeneinander, in der Liste klein */\n.poster{position:relative;overflow:hidden;min-width:0;display:grid;place-items:center;aspect-ratio:5/7;background:var(--tint,var(--panel-2));color:var(--ink,#00A59E);border:1px solid var(--line)}\n.poster img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.posters-sm{display:flex;gap:6px;flex-shrink:0}\n.posters-sm .poster{width:54px}\n.fav .art .posters{display:flex;gap:12px;justify-content:center;align-items:center;width:100%;height:100%;padding:24px 20px}\n/* Poster nie beschneiden: immer ganz zeigen, bei wenig Platz kleiner */\n.fav .art .posters .poster{flex:1 1 0;min-width:0;max-width:180px;box-shadow:0 10px 26px rgba(0,0,0,.55)}\n.fav .art .posters.n1 .poster{flex:0 1 auto;width:min(100%,260px);max-width:none}\n.fav .art:has(.posters){background:radial-gradient(ellipse at 50% 40%,rgba(0,165,158,.16),transparent 70%),var(--bg-deep)}\n@media (max-width:700px){.fav .art .posters.n1 .poster{width:min(62%,220px)}.fav .art{min-height:0}}\n.fav .art{grid-template-columns:minmax(0,1fr)}\n.fav .art .poster svg,.posters-sm .poster svg{width:40%;height:auto}\n@media (max-width:560px){.posters-sm{gap:0}.posters-sm .poster{width:40px;box-shadow:-3px 0 8px rgba(0,0,0,.5)}.posters-sm .poster+.poster{margin-left:-22px}.alt{gap:12px}.alt b{font-size:18px}.alt-price{font-size:17px}}\n.side{display:flex;flex-direction:column;gap:14px}\n.box{padding:18px;border-radius:4px;background:var(--panel);border:1px solid var(--line);display:flex;flex-direction:column;gap:12px}\n.box h3{margin:0;font-size:14px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}\n.extra{display:flex;align-items:center;gap:14px}\n.extra .ico{width:48px;height:48px;border-radius:50%;background:var(--teal);color:var(--dark);display:grid;place-items:center;flex-shrink:0}\n.extra .t{flex:1;min-width:0}\n.extra .t b{display:block}\n.extra .t span{font-size:15px;color:var(--muted)}\n.badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#031012;background:var(--gold);padding:2px 6px;margin-left:6px;vertical-align:2px}\n.extra .t .badge{color:#031012;font-size:11px}\n.mini-step{display:flex;align-items:center;gap:8px}\n.mini-step button{width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:transparent;cursor:pointer;font-size:20px;color:var(--fg)}\n.mini-step button:hover{border-color:var(--teal)}\n.mini-step output{min-width:2ch;text-align:center;font-weight:700;font-variant-numeric:tabular-nums}\n.sum{display:flex;justify-content:space-between;align-items:baseline;gap:10px}\n.sum b{font-size:42px;color:#fff;font-variant-numeric:tabular-nums}\n.hints{display:flex;flex-direction:column;gap:8px;margin:0;padding:0;list-style:none;font-size:15px;color:#CFD9D8}\n.hints li{display:flex;gap:8px}\n.hints li::before{content:\"\";width:6px;height:6px;background:var(--gold);margin-top:8px;flex-shrink:0;transform:rotate(45deg)}\n.contact{font-size:16px}\n.contact .sel{user-select:all;font-weight:700}\n.loc{font-size:16px;color:#CFD9D8}\n.loc b{color:var(--fg)}\n.empty{max-width:560px;margin:40px auto;text-align:center;display:flex;flex-direction:column;gap:14px;align-items:center}\n.launch{flex:1;display:grid;place-items:center;text-align:center}\n.launch h1{font-family:var(--display);font-weight:400;font-size:clamp(44px,7vw,80px);margin:0 0 10px;line-height:1;color:var(--teal)}\n.launch p{color:var(--muted);margin:0 0 26px;font-size:19px}\n@media (max-width:960px){.stickybar{position:sticky;bottom:0;margin-inline:-16px;padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px));background:var(--bg-deep);border:0;border-top:1px solid var(--teal);border-radius:0;z-index:5}}\n.avail{display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:10px 12px;border:1px solid var(--teal);background:rgba(0,165,158,.08);font-size:15px}\n.avail span{margin-right:4px}\n.avail .slot{padding:2px 8px;background:var(--teal);color:var(--dark);font-weight:700;font-variant-numeric:tabular-nums}\n.avail small{flex-basis:100%;color:var(--muted)}\n.avail.warn{border-color:var(--warn);background:rgba(227,154,91,.08);color:#F1C9A6}\n.avail.phone{border-color:var(--gold);background:rgba(174,143,83,.1)}\n.avail.phone .slot{background:var(--gold)}\n.alt em.tel{font-style:normal;color:var(--gold-hi)}\n.alt em.bad{font-style:normal;color:var(--warn)}\n.datein{min-height:46px;border:1px solid var(--line);background:var(--bg-deep);color:var(--fg);font:inherit;font-weight:700;padding:8px 10px;border-radius:2px;color-scheme:dark}\n.datein:focus{border-color:var(--teal);outline:none}\n.reqform{display:flex;flex-direction:column;gap:8px}\n.reqform label{font-size:15px;font-weight:700;margin-top:4px}\n.reqform .opt{font-weight:300;color:var(--muted)}\n.reqform input,.reqform textarea{width:100%;min-height:46px;border-radius:2px;border:1px solid var(--line);background:var(--bg-deep);color:var(--fg);font:inherit;padding:10px 12px}\n.reqform input:focus,.reqform textarea:focus{border-color:var(--teal);outline:none}\n.reqform textarea{resize:vertical}\n.err{color:var(--warn);font-size:15px}\n.who{font-size:18px;font-weight:700;color:var(--fg)}\n.price .who{font-size:18px;color:var(--fg)}\n#handoff{position:fixed;right:max(16px,env(safe-area-inset-right,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));width:min(380px,calc(100vw - 32px));max-height:70vh;overflow:auto;z-index:2147483000;background:var(--panel);color:var(--fg);border:1px solid var(--teal);border-radius:4px;box-shadow:0 18px 50px rgba(0,0,0,.55);padding:18px;font-family:var(--body);font-weight:300;font-size:16px}\n#handoff .hd-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px}\n#handoff h3{margin:0;font-family:var(--display);font-weight:400;font-size:26px;color:var(--teal)}\n#handoff .hd-note{margin:0 0 12px;color:var(--muted);font-size:15px}\n#handoff .hd-note.warn{color:var(--warn)}\n#handoff ol{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:10px}\n#handoff li{display:flex;gap:10px;align-items:flex-start}\n#handoff .st{width:26px;height:26px;border-radius:13px;display:grid;place-items:center;font-size:13px;font-weight:700;background:var(--panel-2);border:1px solid var(--line);flex-shrink:0}\n#handoff .st.done,#handoff .st.auto{background:var(--teal);border-color:var(--teal);color:var(--dark)}\n#handoff .st.fail{background:var(--warn);border-color:var(--warn);color:var(--dark)}\n.vat{font-size:15px;font-weight:300;color:var(--muted)}\n.captcha{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:3px;background:#F9F9F9;color:#222;font-size:14px;margin-top:6px;max-width:300px}\n.captcha .cbox{width:24px;height:24px;border:2px solid #C1C1C1;border-radius:3px;background:#fff}\n.captcha small{margin-left:auto;font-size:10px;color:#555}\n.sent{display:flex;flex-direction:column;gap:8px}\n.sent p{margin:0;color:#CFD9D8}\n.sent summary{cursor:pointer;color:var(--teal-hi)}\n.sent pre{white-space:pre-wrap;font:14px/1.5 var(--body);background:var(--bg-deep);padding:10px;margin:8px 0 0}\n@media (prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}\n";

/* ===================== DATEN (aus Exodus_Finder_Vorlage_version_1 + Chat 22.10.2026) ===================== */
const STAFFEL={1:111,2:111,3:111,4:144,5:170,6:192,7:224};
const ROOMS=[
 {id:'ER1',name:'Kapitän Flynn und der Schatz der Poseidon',short:'Kapitän Flynn',kind:'in',rec:5,age:15,diff:3,grusel:2,strobe:true,
  fit:{freunde:3,familie:1,kgb:0,schule:1,firma:3,jga:3},icon:'ship',tint:'#0F2629',ink:'#00A59E',
  text:'Ihr seid die Crew von Kapitän Flynn und entert das verschollene Schiff, auf dem der legendäre Schatz der Poseidon liegt.',
  why:['Mehrfach ausgezeichneter Raum','Ideal für 5 Leute','Für ehrgeizige Einsteiger']},
 {id:'ER2',name:'Endzeit – Kampf ums Überleben',short:'Endzeit',kind:'in',rec:4,age:15,diff:4,grusel:3,strobe:true,levels:true,
  fit:{freunde:3,familie:0,kgb:0,schule:1,firma:3,jga:3},icon:'bunker',tint:'#0F2629',ink:'#00A59E',
  text:'Eine nukleare Explosion verdunkelt den Himmel. Ihr flieht in einen alten Bunker, doch auch der scheint nicht sicher.',
  why:['Preisgekrönter Raum','Zwei Schwierigkeitsstufen','Atmosphärisch, ohne Horror']},
 {id:'ER3',name:'Leonardo da Vinci und das Elixier der Macht',short:'Leonardo da Vinci',kind:'in',rec:4,age:13,diff:1,grusel:1,strobe:false,
  fit:{freunde:3,familie:3,kgb:3,schule:1,firma:3,jga:1},icon:'gear',tint:'#0F2629',ink:'#00A59E',
  text:'Der tragische Tod da Vincis ruft seine Erben zusammen. Doch die Inquisition will das Elixier der Macht für sich.',
  why:['Anfängerfreundlich','Familiengeeignet','Ohne Krabbeln']},
 {id:'ER4',name:'Das Zombielabor',short:'Zombielabor',kind:'in',rec:3,age:14,diff:2,grusel:2,strobe:true,
  fit:{freunde:3,familie:1,kgb:1,schule:1,firma:3,jga:3},icon:'flask',tint:'#0F2629',ink:'#00A59E',
  text:'Nur wenige sind infiziert, doch wer es ist, verwandelt sich. Euch bleibt nur die Suche nach dem Gegenmittel.',
  why:['Escape Room alter Schule','Anfängerfreundlich','Ohne Krabbeln']}
];
const TOURS=[
 {id:'OT1',name:'Operation Mindfall',short:'Operation Mindfall',kind:'out',age:16,diff:3,grusel:1,
  fit:{freunde:3,familie:1,kgb:1,schule:3,firma:3,jga:3},icon:'target',tint:'#1C1A12',ink:'#AE8F53',
  text:'Ein Konzern will mit einem Virus den Willen der Menschen steuern. Als Agenten von W.I.S.E. rettet ihr Heilbronn.',
  why:['Agenten-Mission quer durch die Stadt','Mittelschwer, gut für gemischte Gruppen','Von 3 bis 250 Spielern']},
 {id:'OT2',name:'Blackout',short:'Blackout',kind:'out',age:16,diff:4,grusel:1,
  fit:{freunde:3,familie:0,kgb:0,schule:3,firma:3,jga:1},icon:'bolt',tint:'#1C1A12',ink:'#AE8F53',
  text:'Hacker haben das Stromnetz lahmgelegt, die Stadt läuft auf Notstrom. Stoppt sie, bevor der große Blackout kommt.',
  why:['Unsere kniffligste Outdoor-Tour','Für Gruppen mit Rätselerfahrung','Von 3 bis 250 Spielern']},
 {id:'OT3',name:'Das Magische Portal',short:'Magisches Portal',kind:'out',age:12,diff:1,grusel:1,
  fit:{freunde:0,familie:3,kgb:3,schule:3,firma:0,jga:0},icon:'portal',tint:'#1C1A12',ink:'#AE8F53',
  text:'Ein Zauber hat den Portalwächter niedergestreckt. Findet die magischen Kristalle und schließt das Portal wieder.',
  why:['Ideal für Einsteiger und Kinder','Fantasy statt Grusel','Perfekt für Familien und Geburtstage']}
];
const PAIRS=[['ER1','ER4'],['ER2','ER3']];
const LOCS=[
 {id:'hn',name:'Heilbronn Innenstadt',tours:['OT1','OT2','OT3'],meet:n=>n<=12?'Kaiserstraße 9':'Rathausplatz Heilbronn',park:'Parkhaus Experimenta',eat:'Innenstadt, z. B. Pier 58, Burgerheart, Lehners Wirtshaus'},
 {id:'sin',name:'Sinsheim',tours:['OT1','OT2','OT3'],meet:()=>'Parkplatz Ziegelgasse 10',open:'all'},
 {id:'nsu',name:'Neckarsulm',tours:['OT1','OT2','OT3'],meet:()=>'Eingang Stadtpark am ZOB',open:'all'},
 {id:'sha',name:'Schwäbisch Hall',tours:['OT1','OT2','OT3'],meet:()=>'Qmediko-Zentrum, Weilerwiese 5',open:'all'},
 {id:'stf',name:'Burg Stettenfels',tours:['OT1','OT2'],meet:()=>'Parkplatz Burg Stettenfels',eat:'Biergarten Burg Stettenfels',open:'firma'},
 {id:'hw',name:'Heuchelberger Warte',tours:['OT1','OT2'],meet:()=>'Parkplatz Heuchelberger Warte',eat:'Heuchelberger Warte',open:'firma'}
];
const GROUPS={freunde:'Freunde & Kleingruppe',familie:'Familie mit Kindern',kgb:'Kindergeburtstag',schule:'Schulklasse',firma:'Firma & Team',jga:'JGA & Geburtstag'};
const eur=v=>(Math.round(v*100)/100).toLocaleString('de-DE',{minimumFractionDigits:v%1?2:0,maximumFractionDigits:2})+' €';

/* ===================== LOGIK ===================== */
const S={mode:null,group:null,n:4,adults:2,kids:3,age:null,klasse:null,io:null,exp:null,thrill:null,day:null,loc:null,pick:0,bw:0,drinks:0,req:{name:'',mail:'',tel:'',msg:''},sent:false,reqErr:null,shift:0,short:false,
  g:{type:null,persons:2,amount:null,pack:null,design:null,exit:false}};

const family=s=>s.group==='familie'||s.group==='kgb';
function total(s){return family(s)?s.adults+s.kids:s.n}
function age(s){ // jüngstes Kind (Familie/KGB) bzw. Schätzung aus Klassenstufe
  if(family(s)) return s.age==null?16:s.age;
  if(s.group==='schule') return s.klasse==='5-7'?11:s.klasse==='8'?13:15;
  return 18;
}
function tourOK(t,s){
  const g=s.group,a=age(s);
  if(!t.fit[g]) return false;
  if(t.id==='OT1'){
    if(g==='familie') return s.adults>=2||a>=16;          // ab 2 Erwachsenen auch mit Jüngeren
    if(g==='kgb') return a>=14;                            // Annahme: ältere Geburtstagskinder
    if(g==='schule') return s.klasse!=='5-7';              // ab Klasse 8 (vereinfachte Route)
  }
  if(t.id==='OT2'&&g==='schule') return s.klasse==='9+';
  return true;
}
function roomOK(r,s){
  const g=s.group,a=age(s);
  if(!r.fit[g]) return false;
  if(g==='kgb'&&a<r.age) return false;                    // Mindestalter gilt für Kindergeburtstage
  if(g==='familie'&&a<13&&r.id!=='ER3') return false;     // Regel 3: unter 13 nur Leonardo
  if(g==='schule'&&s.klasse!=='9+') return false;
  return true;
}
function split(n,k){const b=Math.floor(n/k),r=n%k;return Array.from({length:k},(_,i)=>b+(i<r?1:0))}
function combos(arr,k){if(k===0)return[[]];if(arr.length<k)return[];const[h,...t]=arr;return[...combos(t,k-1).map(c=>[h,...c]),...combos(t,k)]}
function indoorOptions(s){
  const n=total(s),g=s.group;
  if(n<2) return [];
  if(g==='kgb'&&!(s.kids<=5&&s.adults<=1)) return [];     // Regel 1: max 5 Kinder + 1 Erwachsener
  if(g==='schule'&&(s.klasse!=='9+'||n<4)) return [];
  const rooms=ROOMS.filter(r=>roomOK(r,s));
  if(n<=6) return rooms.map(r=>({type:'in',rooms:[r],sizes:[n]}));
  let k=Math.ceil(n/6),winter=false;
  if(n>24){ if(g==='firma'&&n<=28&&isWinter(s.date)){k=4;winter=true} else return []; }
  if(g==='schule'&&n<4*k) return [];
  if(rooms.length<k) return [];
  const sizes=winter?split(n,4):split(n,k);
  const out=combos(rooms,k).map(rs=>({type:'in',rooms:rs,sizes,winter,seven:n===7&&g!=='schule'&&!(g==='firma'&&s.day==='momi')}));
  // Firmen am Schließtag (Mo–Mi), 7/13/19 Personen: eine Gruppe spielt zu siebt -> ein Raum weniger.
  // Wird nie Favorit, steht aber immer als erste Alternative da.
  if(g==='firma'&&s.day==='momi'&&!winter&&n%6===1&&n<=19){const k2=k-1,sz=[7,...Array(k2-1).fill(6)];
    combos(rooms,k2).forEach(rs=>out.push({type:'in',rooms:rs,sizes:sz,compact:true}));}
  return out;
}
function eligibleLocs(s){
  const n=total(s),g=s.group;
  return LOCS.filter(l=>{
    if(l.id==='hn') return true;
    if(l.open==='firma') return g==='firma'&&n>=12;
    if(g==='firma') return n>=12;
    return n>=20 && g!=='kgb';
  });
}
function outdoorOptions(s,loc){
  const n=total(s);
  if(s.group==='schule'&&n<12) return [];
  const L=LOCS.find(l=>l.id===(loc||'hn'));
  return TOURS.filter(t=>tourOK(t,s)&&L.tours.includes(t.id)).map(t=>({type:'out',tour:t}));
}
function ioState(s){
  const i=indoorOptions(s).length>0,o=outdoorOptions(s).length>0||eligibleLocs(s).some(l=>outdoorOptions(s,l.id).length);
  return {i,o,ask:i&&o,forced:i&&!o?'in':!i&&o?'out':null};
}
function effIO(s){const st=ioState(s);return st.forced||(st.ask?(s.io||'egal'):'none')}
function needOrt(s){const io=effIO(s);return (io==='out'||io==='egal')&&eligibleLocs(s).length>1}

function itemScore(x,s){
  const g=s.group;let sc=x.fit[g]*2;
  if(s.exp){const tgt={first:1.5,some:3,pro:4}[s.exp];sc-=Math.abs(x.diff-tgt)*1.2;
    if(s.exp==='pro'&&(x.id==='ER2'||x.id==='OT2')) sc+=2;
    if(s.exp==='first'&&['OT1','ER3','ER4'].includes(x.id)) sc+=1;}
  if(s.thrill==='calm') sc-=(x.grusel-1)*0.8;
  if(s.thrill==='spicy') sc+=(x.grusel-1)*0.8;
  const a=age(s);
  if(g==='kgb'){ if(x.id==='OT3') sc+=4; }
  if(g==='familie'&&a<13){ if(x.id==='OT3') sc+=2; if(x.id==='ER3') sc+=1; }
  if(g==='schule'){
    if(s.klasse==='5-7'&&x.id==='OT3') sc+=4;
    if(s.klasse==='8'){ if(x.id==='OT1') sc+=4; if(x.id==='OT3') sc+=1; }
    if(s.klasse==='9+'&&(x.id==='OT1'||x.id==='OT2')) sc+=2;
  }
  return sc;
}
function score(c,s){
  const n=total(s);
  if(c.type==='out'){let sc=itemScore(c.tour,s);if(n>12)sc+=1;return sc}
  let sc=c.rooms.reduce((a,r)=>a+itemScore(r,s),0)/c.rooms.length;
  if(c.rooms.length===1) sc-=Math.abs(n-c.rooms[0].rec)*0.3;
  if(c.rooms.length===2&&PAIRS.some(p=>p.every(id=>c.rooms.some(r=>r.id===id)))) sc+=2;
  if(c.winter) sc-=3;
  if(c.compact) sc-=3;
  return sc;
}
function candidates(s){
  const io=effIO(s),loc=s.loc||'hn';let c=[];
  if(io==='in'||io==='egal') c.push(...indoorOptions(s));
  if(io==='out'||io==='egal') c.push(...outdoorOptions(s,loc));
  const sorted=c.map(x=>{const y={...x,score:score(x,s)};annotateAvail(y,s);if(y.av&&y.av.full)y.score-=20;else if(y.av&&y.av.phoneOnly)y.score-=6;else if(y.av&&y.av.best&&y.av.best.span>45)y.score-=2;return y}).sort((a,b)=>b.score-a.score);
  const cp=sorted.find(x=>x.compact);if(!cp) return sorted;
  const rest=sorted.filter(x=>!x.compact);rest.splice(Math.min(1,rest.length),0,cp);return rest;
}
/* Termin: ISO-Datum (JJJJ-MM-TT) -> Wochentags-Gruppe und Hilfen */
const pad2=x=>String(x).padStart(2,'0');
function isoToday(){const d=new Date();return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`}
const dateObj=iso=>new Date(iso+'T12:00:00');
function dayOf(iso){const w=dateObj(iso).getDay();return w===0?'so':w===6?'sa':w>=4?'dofr':'momi'}
function fmtDate(iso){return dateObj(iso).toLocaleDateString('de-DE',{weekday:'short',day:'2-digit',month:'2-digit',year:'numeric'})}
const daysUntil=iso=>Math.round((dateObj(iso)-dateObj(isoToday()))/864e5);
const isWinter=iso=>!iso||[10,11,0,1].includes(dateObj(iso).getMonth());
/* Freie Termine (aus dem Shop gelesen, s.avail = {date, missing, map:{Produktname:[{t,state}]}}) */
const toMin=t=>+t.slice(0,2)*60+ +t.slice(3,5);
function annotateAvail(c,s){const A=s.avail;if(!A||A.date!==s.date||A.missing)return;
  const items=c.type==='out'?[c.tour]:c.rooms,get=x=>A.map[QB[x.id]]||[];
  const free=items.map(x=>get(x).filter(z=>z.state==='free').map(z=>z.t)),phone=items.map(x=>get(x).filter(z=>z.state==='phone').map(z=>z.t));
  // "use": online freie Zeiten, sonst die nur telefonisch buchbaren
  const use=items.map((x,i)=>free[i].length?free[i]:phone[i]);
  c.av={lists:free,phone,use,full:use.some(l=>!l.length)};
  c.av.phoneOnly=!c.av.full&&free.some(l=>!l.length);
  if(items.length>1&&!c.av.full){let best=null;(function rec(i,acc){if(i===use.length){const m=acc.map(toMin),sp=Math.max(...m)-Math.min(...m);if(!best||sp<best.span)best={span:sp,times:acc.slice()};return}
    for(const t of use[i]){acc.push(t);rec(i+1,acc);acc.pop()}})(0,[]);c.av.best=best}
}
const stdOut=n=>n<=3?90:90+30*(n-3);
function pricing(c,s){
  const n=total(s),g=s.group,day=s.day,loc=s.loc||'hn';
  const r={base:0,lines:[],tariff:'Standardpreis',cond:null,request:false,notes:[]};
  if(c.type==='in'){
    const k=c.rooms.length,sevens=c.sizes.filter(z=>z>6).length;
    if(g==='schule'){r.base=28*n;r.tariff='Schulklassentarif';r.lines.push(`${n} Schüler × 28 €`);r.request=true}
    else if(g==='firma'&&day==='momi'){r.base=k*192+29.5+sevens*32;r.tariff='Firmen-Sonderöffnung Mo–Mi';
      r.lines.push(`${k} × 192 € pro Raum`,'+ 29,50 € Sonderöffnung (einmalig)');if(sevens)r.lines.push(`+ ${sevens} × 32 € für die 7. Person`)}
    else{r.base=c.sizes.reduce((a,z)=>a+STAFFEL[Math.max(2,z)],0);if(k>1)r.lines.push(c.sizes.map(z=>`${z} P. = ${eur(STAFFEL[z])}`).join(' · '))}
    if(c.winter){r.request=true;r.notes.push('Über 24 Personen drinnen geht nur als Teamevent von November bis Februar, mit je 7 Personen pro Raum. Für das Spielerlebnis empfehlen wir das nicht.')}
    if(g==='firma'&&k>1&&['dofr','so','open'].includes(day)){r.shiftable=true;const sh=Math.min(s.shift||0,k-1);if(sh){r.shift=sh;r.request=true}}
    if(c.compact){r.request=true;r.notes.unshift(`Sonderlösung für Firmen: Eine Gruppe spielt zu siebt in einem Raum. So braucht ihr ${k===1?'einen Raum':k+' Räume'} statt ${k+1} und spart rund ${eur(192-32)}. Zu siebt wird es im Raum etwas enger.`)}
    if(g==='firma'&&day==='momi') r.request=true; // Schließtag: Tarif trägt das Team nach der Anfrage von Hand ein
    if(c.seven) r.notes.push('Ihr wollt alle in einen Raum? In Ausnahmen geht eine 7. Person für 32 € Aufpreis. Wir empfehlen zwei Räume.');
    const pair=k===2&&PAIRS.some(p=>p.every(id=>c.rooms.some(x=>x.id===id)));
    if(k>=3) r.notes.push(g==='firma'&&day==='momi'?'Bei der Sonderöffnung legen wir die Startzeiten für euch fest: zwei Wellen mit etwa 15 Minuten Abstand.'
      :r.shiftable?(r.shift?'Mit Slot-Verschiebung startet ihr in zwei Wellen mit nur etwa 15 Minuten Abstand. Im Warteraum ist Platz für 12 Personen.'
        :'Ohne Slot-Verschiebung starten die Räume zu ihren festen Startzeiten, teils 30 bis 45 Minuten versetzt. Mit Verschiebung sind es nur etwa 15 Minuten.')
      :'Die Räume starten zu ihren festen Startzeiten, teils 30 Minuten oder mehr versetzt. Im Warteraum ist Platz für 12 Personen.');
    else if(k===2) r.notes.push(pair||(g==='firma'&&day==='momi')?'Beide Räume starten gemeinsam, die Startzeiten liegen direkt beieinander.'
      :r.shiftable?'Diese beiden Räume starten zu unterschiedlichen Zeiten. Mit einer Slot-Verschiebung startet ihr gemeinsam.'
      :'Diese beiden Räume starten zu unterschiedlichen Zeiten. Gemeinsam starten Kapitän Flynn + Zombielabor oder Endzeit + Leonardo.');
    if(day==='momi'&&g!=='firma'&&g!=='schule') r.notes.push('Montag bis Mittwoch sind die Escape Rooms geschlossen (außer für Firmen und Schulklassen).');
    if(age(s)<16&&g!=='schule') r.notes.push('Unter 16 nur mit erwachsener Begleitung.');
    if(c.rooms.some(x=>x.levels)) r.notes.push(s.exp==='first'?'Endzeit spielt ihr in der Anfänger-Variante. Der Finder wählt im Shop den passenden Anfänger-Tarif vor.':'Endzeit spielt ihr in der normalen, schweren Variante. Der Finder wählt im Shop den passenden Tarif vor.');
    r.notes.push(s.date&&daysUntil(s.date)===0?'Für heute ruft bitte kurz an, ob es noch klappt: 07131 / 124 06 84.':'Buchbar bis 5 Stunden vorher.');
    return r;
  }
  const t=c.tour,tid=t.id;
  if(loc!=='hn'){
    r.request=true;
    if(g==='firma'){r.base=360+30*Math.max(0,n-12);r.tariff='Firmentarif außerhalb Heilbronn';r.lines.push('360 € inkl. 12 Personen'+(n>12?`, + ${n-12} × 30 €`:''))}
    else if(g==='schule'){r.base=28*n;r.tariff='Schulklassentarif';r.lines.push(`${n} Schüler × 28 €`)}
    else{r.base=stdOut(n);r.tariff='Großgruppe ab 20 Personen'}
  } else if(g==='schule'){r.base=28*n;r.tariff='Schulklassentarif';r.lines.push(`${n} Schüler × 28 €`);r.request=true;
  } else if(g==='familie'&&['OT1','OT3'].includes(tid)&&s.adults<=2&&s.kids>=2&&n>=4&&n<=6){
    dayTariff(r,99,stdOut(n),day,'Familientarif','Bis zu 2 Erwachsene mit ihren Kindern, 4 bis 6 Personen');
  } else if(g==='kgb'&&['OT1','OT3'].includes(tid)){
    const teams=s.kids<=8?1:s.kids<=12?2:3,free=Math.min(s.adults,teams),p=n-free;
    if(p<=15){dayTariff(r,159+20*Math.max(0,p-8),stdOut(n),day,'Kindergeburtstagstarif',`159 € inkl. 8 Kinder${p>8?`, + ${p-8} × 20 €`:''}${free?`, ${free} Begleitperson${free>1?'en':''} gratis`:''}`)}
    else{r.base=stdOut(n);r.notes.push('Der Kindergeburtstagstarif gilt bis 15 Personen.')}
    r.notes.push(`Jede Spielgruppe braucht eine erwachsene Begleitperson, sie spielt kostenlos mit. Bei ${s.kids} Kindern sind das ${teams}.`);
    r.notes.push('Die Geburtstags-Rallye dauert 1,5 bis 2 Stunden.');
  } else {r.base=stdOut(n);if(n>3)r.lines.push(`90 € inkl. 3 Personen, + ${n-3} × 30 €`)}
  if(loc==='hn'&&n>30){r.request=true;r.notes.push('Ab 31 Personen stimmen wir die Tour persönlich mit euch ab.')}
  if(g==='familie'&&tid==='OT1'&&age(s)<16) r.notes.push('Mit mindestens 2 Erwachsenen klappt Mindfall auch mit Jüngeren: Die kniffligsten Stellen lösen die Großen.');
  if(g==='kgb'&&age(s)<12) r.notes.push('Für Kinder unter 12 bitte mit erwachsener Begleitung.');
  if(g==='schule'&&s.klasse==='8'&&tid==='OT1') r.notes.push('Für Schulklassen nutzen wir eine vereinfachte Route.');
  if(g==='firma'&&n>=30) r.notes.push(`Ab 30 Personen bauen wir euch auch eine eigene Route im Umkreis von 50 km (ab 1.499 € inkl. 30 Personen, auf Anfrage).`);
  if(g!=='kgb') r.notes.push('Die Short-Tour ist eine Stunde kürzer und kostet gleich viel.');
  if(s.date){if(dateObj(s.date).getDay()===1&&!(g==='firma'&&loc!=='hn')&&g!=='schule') r.notes.push('Montags finden keine Outdoor-Touren statt. Wählt bitte einen anderen Tag oder fragt bei uns an.');}
  else if(day==='momi'&&!(g==='firma'&&loc!=='hn')&&g!=='schule') r.notes.push('Outdoor-Touren starten ab Dienstag.');
  if(s.date&&n>24&&daysUntil(s.date)<2){r.request=true;r.notes.push('Ab 25 Personen brauchen wir mindestens 48 Stunden Vorlauf. Für diesen Termin stimmen wir uns kurz mit euch ab.')}
  r.notes.push(s.date&&daysUntil(s.date)===0?'Für heute ruft bitte kurz an, ob es noch klappt: 07131 / 124 06 84.':n>24?'Ab 25 Personen bitte mindestens 48 Stunden vorher buchen.':'Buchbar bis 10 Stunden vorher.');
  return r;
}
function dayTariff(r,special,std,day,name,line){
  if(day==='dofr'||day==='so'){r.base=special;r.tariff=name;r.lines.push(line)}
  else if(day==='sa'||day==='momi'){r.base=std;r.notes.push(`Der ${name} (${eur(special)}) gilt nur Donnerstag, Freitag und Sonntag.`)}
  else{r.base=special;r.tariff=name;r.lines.push(line);r.cond=`Gilt Do, Fr und So. An anderen Tagen ${eur(std)}.`}
}

/* Symbole (Strichzeichnungen) */
const ICON={
 users:'<circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9" r="2.6"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6M15 14.3c3 .1 6 2 6 5.7"/>',
 family:'<circle cx="7" cy="6" r="2.4"/><circle cx="17" cy="6" r="2.4"/><circle cx="12" cy="12.5" r="1.8"/><path d="M3 21v-5a4 4 0 0 1 8 0M13 21v-5a4 4 0 0 1 8 0M9.6 21v-2a2.4 2.4 0 0 1 4.8 0v2"/>',
 cake:'<path d="M4 21h16v-8H4zM4 16c2 1.4 4 1.4 5.3 0 1.4 1.4 4 1.4 5.4 0 1.3 1.4 3.3 1.4 5.3 0M8 13V9M12 13V9M16 13V9M8 6.5a1 1 0 0 0 0-2.5M12 6.5a1 1 0 0 0 0-2.5M16 6.5a1 1 0 0 0 0-2.5"/>',
 school:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>',
 case:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
 glass:'<path d="M7 3h10l-1 7a4 4 0 0 1-8 0zM12 14v6M8 21h8"/>',
 door:'<path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18"/><circle cx="15" cy="12" r="1"/>',
 tree:'<path d="M3 20l6-10 4 6 3-4 5 8z"/><circle cx="17" cy="6" r="2"/>',
 both:'<path d="M4 7h11l-3-3M20 17H9l3 3"/>',
 star:'<path d="M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.3 6.8 19l1-5.8L3.6 9.1l5.8-.8z"/>',
 puzzle:'<path d="M10 4a2 2 0 1 1 4 0v2h4v4h-2a2 2 0 1 0 0 4h2v4h-4v-2a2 2 0 1 0-4 0v2H6v-4h2a2 2 0 1 0 0-4H6V6h4z"/>',
 trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M9 17h6v4H9z"/>',
 leaf:'<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19l8-8"/>',
 pulse:'<path d="M3 12h4l2-6 4 12 2-6h6"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 pin:'<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
 gift:'<rect x="3" y="9" width="18" height="12" rx="1"/><path d="M2 9h20M12 9v12M12 9c-2-4-7-4-6-1s6 1 6 1zM12 9c2-4 7-4 6-1s-6 1-6 1z"/>',
 play:'<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5.5 3.5-5.5 3.5z"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
 card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h10M7 14h6"/>',
 popup:'<path d="M3 19h18M5 19l7-12 7 12M9 19l3-5 3 5"/>',
 ship:'<path d="M3 16l2 4h14l2-4zM12 3v13M12 4l6 9h-6M12 6l-5 7h5"/>',
 box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
 bunker:'<circle cx="12" cy="12" r="2"/><path d="M12 10V4a8 8 0 0 0-6.9 4zM10.3 13l-5.2 3a8 8 0 0 0 13.8 0l-5.2-3M12 4a8 8 0 0 1 6.9 4L12 10"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1"/>',
 flask:'<path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
 bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
 portal:'<ellipse cx="12" cy="12" rx="6" ry="9"/><ellipse cx="12" cy="12" rx="2.5" ry="5"/><path d="M3 4l2 2M21 4l-2 2M3 20l2-2M21 20l-2-2"/>',
 check:'<path d="M5 12l5 5 9-10"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2"/>',
 back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 wagon:'<path d="M3 8h13l-1.5 8h-10zM16 10h4M6.5 19.5a1.5 1.5 0 1 0 0-.1M13.5 19.5a1.5 1.5 0 1 0 0-.1"/>',
 drink:'<path d="M7 3h10l-1.5 18h-7zM7.5 9h9"/>'
};
/* Produktnamen im QuinBook-Shop */
const QB={ER1:'Kapitän Flynn und der Schatz der Poseidon',ER2:'Endzeit - Kampf ums Überleben',ER3:'Leonardo da Vinci und das Elixier der Macht',ER4:'Das Zombielabor',
  OT1:'Operation Mindfall',OT2:'Blackout',OT3:'Das magische Portal'};

/* ===================== UI ===================== */
if(typeof document!=='undefined'){
/* ===================== EINBINDUNG (Webflow / Vorschau) =====================
   Konfiguration kommt aus window.EXODUS_FINDER (optional, vor diesem Script setzen):
   { images:{ 'gruppe-freunde':'https://…jpg', … },  // Bilder überschreiben/ergänzen
     useShopImages:true,                               // Raum-/Tourbilder aus QuinBook nutzen
     inline:false }                                    // true = ohne Overlay (nur Vorschau) */
const CFG=window.EXODUS_FINDER||{};
const SHOP_IMG={
  'er1-flynn':'https://cdn.quinbook.com/metadata/8a40c32ecae55cf60d55d20f2b7fcbe5.jpg',
  'er2-endzeit':'https://cdn.quinbook.com/metadata/ce1a6ec5efbde33beda633856c677f9a.jpg',
  'er3-leonardo':'https://cdn.quinbook.com/metadata/76a1f23680950b798960ca03ffaf9449.jpg',
  'er4-zombielabor':'https://cdn.quinbook.com/metadata/afb0ed24bbd71c41fd078bcb80bcf4dd.jpg',
  'ot1-mindfall':'https://cdn.quinbook.com/metadata/7409e642521f1b78e8a5bf7e5f797ebd.jpg',
  'ot2-blackout':'https://cdn.quinbook.com/metadata/4dd7ed6ea12fc4b377edc5b9d500ac0d.jpg',
  'ot3-portal':'https://cdn.quinbook.com/metadata/7d9f314a24b1387713db6128e53bf5ce.jpg'};
/* Bilder aus dem GitHub-Repository (Ordner img/ neben dieser Datei); eigene Links in CFG.images haben Vorrang */
const REPO_IMG=['er1-flynn','er2-endzeit','er3-leonardo','er4-zombielabor','ot1-mindfall','ot2-blackout','ot3-portal','pack-ship',
  'hc-klassik','hc-geburtstag','hc-hochzeit','hc-ostern','hc-weihnachten','pop-feuerwerk','pop-katze','pop-gaensebluemchen','pop-geschenkbox',
  'spielen','verschenken','gruppe-freunde','gruppe-familie','gruppe-kindergeburtstag','gruppe-schulklasse','gruppe-firma','gruppe-jga','drinnen','draussen'];
const IMG_BASE=CFG.imgBase||((document.currentScript&&document.currentScript.src)||'').replace(/[^/]*$/,'')+(document.currentScript&&document.currentScript.src?'img/':'');
const IMG=Object.assign({},CFG.useShopImages===false?{}:SHOP_IMG,IMG_BASE?Object.fromEntries(REPO_IMG.map(k=>[k,IMG_BASE+k+'.webp'])):{},
  Object.fromEntries(Object.entries(CFG.images||{}).filter(([k,v])=>v)));
const DESIGN_IMG={hc:{Klassik:'hc-klassik',Geburtstag:'hc-geburtstag',Weihnachten:'hc-weihnachten',Hochzeit:'hc-hochzeit',Ostern:'hc-ostern'},
  pop:{'Geburtstagsfeuerwerk mit Musik':'pop-feuerwerk',Geburtstagskatze:'pop-katze','Gänseblümchen':'pop-gaensebluemchen',Geschenkbox:'pop-geschenkbox'},ship:{'':'pack-ship'}};
const IMGKEY={ER1:'er1-flynn',ER2:'er2-endzeit',ER3:'er3-leonardo',ER4:'er4-zombielabor',OT1:'ot1-mindfall',OT2:'ot2-blackout',OT3:'ot3-portal'};
const imgTag=key=>{const u=key&&IMG[key];return u?`<img src="${String(u).replace(/"/g,'&quot;')}" alt="" loading="lazy" decoding="async" onerror="this.remove()">`:''};
const CSS=EXF_CSS;
/* Schriften: auf exodus-hn.de liefert Webflow "Amarante" und "bahnschrift-semicondensed" selbst.
   Nur wenn sie fehlen (z. B. Vorschau), werden Amarante + Barlow Semi Condensed (Ersatz) von Google geladen. */
if(![...document.fonts].some(f=>/amarante/i.test(f.family))&&!document.querySelector('link[href*="family=Amarante"]')){const l=document.createElement('link');l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Amarante&family=Barlow+Semi+Condensed:wght@300;400;700&display=swap';document.head.appendChild(l);}
let host=document.getElementById('exodus-finder');
if(!host){host=document.createElement('div');host.id='exodus-finder';document.body.appendChild(host);}
if(!CFG.inline){Object.assign(host.style,{position:'fixed',inset:'0',zIndex:'2147482000',display:'none'});
  host.setAttribute('role','dialog');host.setAttribute('aria-modal','true');host.setAttribute('aria-label','Erlebnis-Finder');}
const shadow=host.attachShadow({mode:'open'});
shadow.innerHTML=`<style>${CSS}</style><div class="exf-root" id="scroller" tabindex="-1" style="${CFG.inline?'':'height:100%;overflow-y:auto;overscroll-behavior:contain'}"><div class="shell" id="app"></div></div>`;
const $id=id=>shadow.getElementById(id);
const app=$id('app'),scroller=$id('scroller');
let panelShadow=null;
function panelRoot(){if(panelShadow)return panelShadow;const h=document.createElement('div');h.id='exodus-finder-panel';document.body.appendChild(h);
  panelShadow=h.attachShadow({mode:'open'});panelShadow.innerHTML=`<style>${CSS}</style>`;return panelShadow}
let isOpen=!!CFG.inline;
/* Google Analytics 4: Ereignisse über das gtag/dataLayer der Website. Keine Namen, Mails oder Telefonnummern. */
function track(name,params){const p=Object.assign({finder_version:'1.4.0'},params||{});
  try{if(typeof window.gtag==='function')window.gtag('event',name,p);else if(Array.isArray(window.dataLayer))window.dataLayer.push(Object.assign({event:name},p))}catch(e){}
  if(CFG.debug)console.log('[Exodus-Finder]',name,p)}
function openFinder(arg,src){track('finder_open',{source:src||(arg==='gutschein'?'gutschein_knopf':'knopf')});
  if(arg==='gutschein'){S.mode='gift';S.g.type='wert';cur='gsize'}
  else if(!cur||cur==='launch') cur='mode';
  if(!CFG.inline){host.style.display='block';document.documentElement.style.overflow='hidden'}
  isOpen=true;render();scroller.scrollTop=0;scroller.focus({preventScroll:true});
}
function hideOverlay(){if(CFG.inline)return;host.style.display='none';document.documentElement.style.overflow='';isOpen=false}
function closeFinder(){track('finder_close',{step:cur,step_number:steps().indexOf(cur)+1,mode:S.mode||''});if(CFG.inline){go('mode');return}hideOverlay()}
/* Einstieg direkt auf der Seite: <div data-finder-teaser></div> zeigt die erste Frage "Was habt ihr vor?".
   Ein Klick öffnet den Finder bei der nächsten Frage. */
function mountTeasers(){document.querySelectorAll('[data-finder-teaser]').forEach(el=>{if(el.shadowRoot)return;const sr=el.attachShadow({mode:'open'});
  sr.innerHTML=`<style>${CSS}</style><div class="exf-root teaser"><div class="shell">${q('Was habt ihr vor?','Tippt einfach auf das passende Bild.')}${tilesHTML([
    {act:'mode',img:'spielen',val:'play',label:'Selbst spielen',sub:'Escape Room oder Outdoor-Tour finden',icon:'play',t:TINTS.a},
    {act:'mode',img:'verschenken',val:'gift',label:'Verschenken',sub:'Wertgutschein mit schöner Verpackung',icon:'gift',t:TINTS.c}],2)}</div></div>`;
  sr.addEventListener('click',e=>{const b=e.target.closest('[data-act=mode]');if(!b)return;const v=b.dataset.val;
    track('finder_open',{source:'teaser'});track('finder_answer',{question:'mode',answer:v});
    S.mode=v;S.pick=0;if(v==='gift')S.g.type='wert';cur=v==='gift'?'gsize':'group';
    if(!CFG.inline){host.style.display='block';document.documentElement.style.overflow='hidden'}isOpen=true;render();scroller.scrollTop=0;
    track('finder_step',{step:cur,step_number:2,mode:S.mode})})})}
function BOOT(){
  mountTeasers();
  document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-finder-open]');if(!t)return;e.preventDefault();openFinder(t.getAttribute('data-finder-open'))});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&isOpen&&!CFG.inline)closeFinder()});
  window.ExodusFinder={open:openFinder,close:closeFinder};
  if(CFG.inline){cur='mode';render()}
  else if(/^#(finder|erlebnis-finder)$/.test(location.hash)) openFinder();
}

const ic=(n,w=24,sw=1.6)=>`<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;

/* Embleme statt Fotos für einfache Fragen: Schlösser = Rätsel-Level, Balken = Spannung, Zahl = Klassenstufe */
const emLocks=(n,cap)=>`<div class="emb">${[0,1,2].map(i=>`<span class="${i<n?'on':''}">${ic('lock',40,1.7)}</span>`).join('')}</div><div class="emb-cap">${cap}</div>`;
const emMeter=(n,hot,cap)=>`<div class="emb meter${hot?' hot':''}">${[1,2,3,4,5].map(i=>`<i class="${i<=n?'on':''}" style="height:${8+i*8}px"></i>`).join('')}</div><div class="emb-cap">${cap}</div>`;
const emNum=(t,cap)=>`<div class="emb-num">${t}</div><div class="emb-cap">${cap}</div>`;
const emMedal=(icn,cap)=>`<div class="emb-medal">${ic(icn,40,1.7)}</div>${cap?`<div class="emb-cap">${cap}</div>`:''}`;
const TINTS={a:['#0F2629','#00A59E'],b:['#122C30','#3CC4BD'],c:['#1C1A12','#AE8F53'],d:['#0F2629','#00A59E'],e:['#1C1A12','#C4A66B'],f:['#11201F','#8FB9B6']};
const tile=(o)=>`<button class="tile${o.sel?' sel':''}" data-act="${o.act}" data-val="${o.val}" style="--tint:${o.t[0]};--ink:${o.t[1]}">
  ${o.tag?`<span class="tag">${o.tag}</span>`:''}${o.em&&!(o.img&&IMG[o.img])?`<div class="art em">${o.em}</div>`:`<div class="art">${ic(o.icon,80,1.3)}${imgTag(o.img)}</div>`}<div class="txt"><b>${o.label}</b>${o.sub?`<span>${o.sub}</span>`:''}</div></button>`;

let cur='launch';
function steps(){
  if(S.mode==='gift') return ['mode','gsize','gpack',...(S.g.pack&&S.g.pack!=='pdf'?['gextra']:[]),'gresult'];
  const L=['mode','group','size'];
  if(!S.group) return L;
  if(family(S)) L.push('age');
  if(S.group==='schule') L.push('klasse');
  L.push('date');
  if(ioState(S).ask) L.push('io');
  if(!['kgb','schule'].includes(S.group)) L.push('exp');
  // Nervenkitzel trennt nur zwischen Escape Rooms (Touren sind alle gleich entspannt) – daher nur fragen, wenn drinnen in Frage kommt
  if(!['kgb','schule'].includes(S.group)&&!(S.group==='familie'&&age(S)<13)&&effIO(S)!=='out'&&indoorOptions(S).length>1) L.push('thrill');
  if(['familie','kgb','firma'].includes(S.group)&&!S.date) L.push('day');
  if(needOrt(S)) L.push('ort');
  L.push('result');return L;
}
function go(step){cur=step;render();if(scroller)scroller.scrollTop=0;if(step!=='launch')track('finder_step',{step,step_number:steps().indexOf(step)+1,mode:S.mode||''})}
function next(){const L=steps();go(L[L.indexOf(cur)+1]||L[L.length-1])}
function back(){const L=steps();const i=L.indexOf(cur);i>0?go(L[i-1]):closeFinder()}

function frame(inner,opts={}){
  const L=steps(),i=L.indexOf(cur),tot=L.length-1;
  const prog=cur==='launch'?'':`<div class="progress" aria-label="Schritt ${i+1} von ${L.length}">${L.slice(0,-1).map((_,k)=>`<i class="${k<=i?'on':''}"></i>`).join('')}${S.mode?'':'<i></i><i></i><i></i><i></i>'}</div>`;
  return `<div class="bar">
    <button class="iconbtn" data-act="back" aria-label="Zurück" ${cur==='launch'?'disabled':''}>${ic('back',20,2)}</button>
    <div class="brand">EXODUS<small>Erlebnis-Finder</small></div>${CFG.inline?'<span class="proto">Prototyp</span>':''}<div class="spacer"></div>
    ${cur!=='launch'?`<button class="iconbtn" data-act="close" aria-label="Finder schließen">${ic('x',20,2)}</button>`:''}
  </div>${prog}${inner}`;
}
function q(title,sub,chips){return `<div class="q"><h1>${title}</h1>${sub?`<p>${sub}</p>`:''}${chips?`<div class="chips-sum">${chips}</div>`:''}</div>`}
function summaryChips(){
  const c=[];if(S.group)c.push(GROUPS[S.group]);if(S.group&&cur!=='size')c.push(`${total(S)} Personen`);
  if(family(S)&&S.age!=null&&!['age','size'].includes(cur))c.push(S.age<12?'Jüngstes Kind unter 12':`Jüngstes Kind ${S.age}${S.age>=16?'+':''}`);
  if(S.klasse&&S.group==='schule'&&cur!=='klasse')c.push({'5-7':'Klasse 5–7','8':'Klasse 8','9+':'Klasse 9+'}[S.klasse]);
  if(S.date&&cur!=='date')c.push(fmtDate(S.date));
  return c.map(t=>`<span class="chip">${t}</span>`).join('');
}
function tilesHTML(items,cols,extra=''){
  return `<div class="stage"><div class="tiles ${extra}" style="--cols:${cols}">${items.map(tile).join('')}</div>
  <div class="dots">${items.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div><div class="swipehint">Wischen zum Blättern, Tippen zum Auswählen</div></div>`;
}

const V={
 launch(){return frame(`<div class="launch"><div><h1>Was passt zu uns?</h1><p>In wenigen Klicks zum passenden Escape Room oder zur Outdoor-Tour.</p>
   <button class="cta" data-act="start">Finder starten ${ic('arrow',20,2.4)}</button></div></div>`)},
 mode(){return frame(q('Was habt ihr vor?','Tippt einfach auf das passende Bild.')+tilesHTML([
   {act:'mode',img:'spielen',val:'play',label:'Selbst spielen',sub:'Escape Room oder Outdoor-Tour finden',icon:'play',t:TINTS.a,sel:S.mode==='play'},
   {act:'mode',img:'verschenken',val:'gift',label:'Verschenken',sub:'Wertgutschein mit schöner Verpackung',icon:'gift',t:TINTS.c,sel:S.mode==='gift'}],2))},
 group(){const g=[['freunde','Freunde & Kleingruppe','2 bis 6 Leute, einfach Spaß haben','users',TINTS.a],['familie','Familie mit Kindern','Groß und Klein gemeinsam','family',TINTS.d],
   ['kgb','Kindergeburtstag','Weltretten für Kids','cake',TINTS.e],['schule','Schulklasse','Wandertag, Klassenausflug','school',TINTS.b],
   ['firma','Firma & Team','Teamevent, Weihnachtsfeier','case',TINTS.f],['jga','JGA & Geburtstag','Erwachsene, die feiern wollen','glass',TINTS.c]];
   return frame(q('Wer kommt mit?','Tippt auf das Bild, das am besten passt.')+tilesHTML(g.map(([v,l,s,i,t])=>({act:'group',img:'gruppe-'+{freunde:'freunde',familie:'familie',kgb:'kindergeburtstag',schule:'schulklasse',firma:'firma',jga:'jga'}[v],val:v,label:l,sub:s,icon:i,t,sel:S.group===v})),3))},
 size(){
   if(family(S)){const k=S.group==='kgb';
     return frame(q(k?'Wie viele feiern mit?':'Wer ist dabei?',k?'Geburtstagskind mitgezählt.':'Erwachsene und Kinder getrennt, dann passt der Tarif.',summaryChips())+
     `<div class="stage"><div class="sizer">${stepper('kids','Kinder',k?'bis einschließlich 16 Jahre':'unter 18 Jahren',S.kids)}${stepper('adults','Erwachsene',k?'Begleitpersonen, eine pro Spielgruppe':'ab 18 Jahren',S.adults)}</div>
     <div class="foot" style="justify-content:center"><button class="cta" data-act="next">Weiter ${ic('arrow',20,2.4)}</button></div></div>`)}
   const sch=S.group==='schule',min=sch?4:2;if(S.n<min)S.n=min;
   const quick=sch?[12,20,25,30,50,100]:[2,4,6,8,12,20,30,50,100];
   return frame(q(sch?'Wie viele Schüler kommen?':'Wie viele seid ihr?',sch?'Lehrkräfte bitte nicht mitzählen.':'Auch Großgruppen bis 250 Personen sind möglich.',summaryChips())+
   `<div class="stage"><div class="sizer"><div class="big" aria-live="polite"><span id="nval">${S.n}</span><small>${sch?'Schüler':'Personen'}</small></div>
   <div class="stepper" style="padding:10px 14px"><button class="iconbtn" data-act="n-" aria-label="Eine Person weniger">−</button>
   <label for="nrange" class="note" style="flex:1;text-align:center">Regler ziehen oder tippen</label><button class="iconbtn" data-act="n+" aria-label="Eine Person mehr">+</button></div>
   <input type="range" id="nrange" min="${min}" max="250" value="${S.n}" aria-label="Anzahl Personen">
   <div class="quick">${quick.map(v=>`<button class="pill${S.n===v?' sel':''}" data-act="nset" data-val="${v}">${v}</button>`).join('')}</div></div>
   <div class="foot" style="justify-content:center"><button class="cta" data-act="next">Weiter ${ic('arrow',20,2.4)}</button></div></div>`)},
 age(){const a=[[11,'unter 12'],[12,'12'],[13,'13'],[14,'14'],[15,'15'],[16,'16+']];
   return frame(q('Wie alt ist das jüngste Kind?',S.group==='kgb'?'Danach richten sich die passenden Räume und Touren.':'Damit es für alle gut lösbar bleibt.',summaryChips())+
   `<div class="stage"><div class="tiles compact keepgrid" style="--cols:6">${a.map(([v,l])=>tile({act:'age',val:v,label:l,sub:v===16?'Jahre':'Jahre',icon:v<12?'cake':v<16?'star':'users',t:TINTS.d,sel:S.age===v})).join('')}</div></div>`)},
 klasse(){return frame(q('Welche Klassenstufe?','Danach wählen wir Tour und Schwierigkeit.',summaryChips())+tilesHTML([
   {act:'klasse',img:'klasse-5-7',val:'5-7',label:'Klasse 5 bis 7',em:emNum('5–7','Klasse'),sub:'Einsteigerfreundliche Fantasy-Tour',icon:'portal',t:TINTS.b,sel:S.klasse==='5-7'},
   {act:'klasse',img:'klasse-8',val:'8',label:'Klasse 8',em:emNum('8','Klasse'),sub:'Agenten-Tour mit vereinfachter Route',icon:'target',t:TINTS.a,sel:S.klasse==='8'},
   {act:'klasse',img:'klasse-9',val:'9+',label:'Ab Klasse 9',em:emNum('9+','Klasse'),sub:'Outdoor oder Escape Room bis 24 Schüler',icon:'trophy',t:TINTS.c,sel:S.klasse==='9+'}],3,'keepgrid emblem'))},
 date(){const t=isoToday();
   return frame(q('Steht euer Termin schon fest?','Dann zeigen wir euch die passenden Tarife und wählen das Datum im Shop schon vor.',summaryChips())+
   `<div class="stage"><div class="sizer"><div class="stepper"><div class="lbl"><label for="dpick"><b>Euer Wunschtermin</b></label><span>${S.date?fmtDate(S.date):'Datum auswählen'}</span></div>
   <div class="ctl"><input id="dpick" class="datein" type="date" min="${t}" value="${S.date||''}"></div></div>
   <div class="foot" style="justify-content:center"><button class="cta" data-act="dateok" ${S.date?'':'disabled'}>Weiter ${ic('arrow',20,2.4)}</button>
   <button class="cta ghost" data-act="dateopen">Steht noch nicht fest</button></div></div></div>`)},
 io(){return frame(q('Drinnen oder draußen?','',summaryChips())+tilesHTML([
   {act:'io',img:'drinnen',val:'in',label:'Drinnen · Escape Room',sub:'Mit Live-Schauspielern, bei jedem Wetter',icon:'door',t:TINTS.c,sel:S.io==='in'},
   {act:'io',img:'draussen',val:'out',label:'Draußen · Outdoor-Tour',sub:'Mit iPad und ActionPack auf Rätseljagd',icon:'tree',t:TINTS.d,sel:S.io==='out'},
   {act:'io',img:'egal',val:'egal',label:'Egal',sub:'Zeigt uns, was am besten passt',em:`<div class="emb"><span class="on">${ic('door',40,1.6)}</span><span class="emb-and">&amp;</span><span class="on">${ic('tree',40,1.6)}</span></div><div class="emb-cap">Beides möglich</div>`,icon:'both',t:TINTS.f,sel:S.io==='egal'}],3))},
 exp(){return frame(q('Schon mal gespielt?','',summaryChips())+tilesHTML([
   {act:'exp',img:'erfahrung-erstes-mal',val:'first',label:'Unser erstes Mal',sub:'Reinschnuppern und Spaß haben',em:emLocks(1,'Einsteiger'),icon:'star',t:TINTS.a,sel:S.exp==='first'},
   {act:'exp',img:'erfahrung-ein-paar-mal',val:'some',label:'Ein paar Mal',sub:'Wir wissen, wie es läuft',em:emLocks(2,'Fortgeschritten'),icon:'puzzle',t:TINTS.d,sel:S.exp==='some'},
   {act:'exp',img:'erfahrung-profis',val:'pro',label:'Wir sind Profis',sub:'Gebt uns das Schwerste',em:emLocks(3,'Profi'),icon:'trophy',t:TINTS.c,sel:S.exp==='pro'}],3,'keepgrid emblem'))},
 thrill(){return frame(q('Wie viel Nervenkitzel?','',summaryChips())+tilesHTML([
   {act:'thrill',img:'spannung-entspannt',val:'calm',label:'Lieber entspannt',sub:'Rätseln ohne Herzklopfen',em:emMeter(2,false,'Spannung'),icon:'leaf',t:TINTS.d,sel:S.thrill==='calm'},
   {act:'thrill',img:'spannung-spannend',val:'spicy',label:'Gern spannend',sub:'Atmosphäre darf unter die Haut gehen',em:emMeter(5,true,'Spannung'),icon:'pulse',t:TINTS.e,sel:S.thrill==='spicy'}],2,'keepgrid emblem'))},
 day(){const d=[['momi','Mo bis Mi',momiSub()],['dofr','Do oder Fr',''],['sa','Samstag',''],['so','Sonntag',''],['open','Noch offen','Wir zeigen beide Preise']];
   return frame(q('Wann wollt ihr kommen?','Manche Tarife gelten nur an bestimmten Tagen.',summaryChips())+
   `<div class="stage"><div class="tiles compact keepgrid" style="--cols:5">${d.map(([v,l,s])=>tile({act:'day',val:v,label:l,sub:s,icon:'cal',t:TINTS.f,sel:S.day===v})).join('')}</div></div>`)},
 ort(){const L=eligibleLocs(S);
   return frame(q('Wo soll es losgehen?','Die Outdoor-Touren gibt es an mehreren Orten.',summaryChips())+tilesHTML(L.map((l,i)=>({act:'ort',img:'ort-'+l.id,val:l.id,label:l.name,
     sub:l.id==='hn'?'Start am Escape-Room-Standort':`Treffpunkt: ${l.meet(total(S))}`,icon:'pin',t:Object.values(TINTS)[i%6],sel:S.loc===l.id})),Math.min(3,L.length)))},
 result(){
   const C=candidates(S);
   if(!C.length) return frame(q('Da sprechen wir lieber persönlich','')+`<div class="empty"><p>Für diese Kombination haben wir kein Standardangebot. Ruft uns an, wir finden eine Lösung.</p>${contact()}<button class="cta ghost" data-act="restart">Neu starten</button></div>`);
   if(S.pick>=C.length)S.pick=0;
   const fav=C[S.pick],alts=C.filter((_,i)=>i!==S.pick).slice(0,4),P=pricing(fav,S);
   const st=ioState(S);let forced='';
   if(st.forced==='out'&&S.group!=='schule'&&total(S)>24) forced='Ab 25 Personen geht es nach draußen. Drinnen spielen höchstens 24 Personen parallel.';
   else if(st.forced==='out'&&S.group==='kgb') forced='Drinnen geht ein Kindergeburtstag mit bis zu 5 Kindern ab 13 Jahren und einem Erwachsenen.';
   else if(st.forced==='out'&&S.group==='schule') forced='Escape Rooms gibt es für Schulklassen ab Klasse 9 und bis 24 Schüler.';
   else if(st.forced==='in'&&S.group==='schule') forced='Outdoor-Touren für Schulklassen gibt es ab 12 Schülern.';
   const isOut=fav.type==='out',n=total(S);
   const it=isOut?fav.tour:fav.rooms[0];
   const title=isOut?fav.tour.name:fav.rooms.map(r=>fav.rooms.length>1?r.short:r.name).join(' + ');
   const loc=LOCS.find(l=>l.id===(S.loc||'hn'));
   let why=isOut?fav.tour.why:fav.rooms.length===1?fav.rooms[0].why:[`${fav.rooms.length} Räume parallel: ${fav.sizes.join(' + ')} Personen`,...fav.rooms[0].why.slice(0,2)];
   if(fav.compact) why=[`${fav.rooms.length===1?'Ein Raum':fav.rooms.length+' Räume'} statt ${fav.rooms.length+1}: eine Gruppe spielt zu siebt`,...(fav.rooms.length>1?[`Aufteilung: ${fav.sizes.join(' + ')} Personen`]:[]),...fav.rooms[0].why.slice(0,1)];
   const facts=isOut?[`ab ${fav.tour.age} J.${fav.tour.id!=='OT3'?' (mit Erwachsenen jünger)':''}`,(S.short||S.group==='kgb')?'1,5–2 Std.':'2–3 Std.','barrierefrei',loc.name]
     :[`ab ${Math.min(...fav.rooms.map(r=>r.age))} J.`,'60 Min.','mit Schauspielern','klimatisiert',...(fav.rooms.some(r=>r.strobe)?['Stroboskop-Effekte']:[]),'Kaiserstraße 9'];
   const extrasTotal=(isOut?S.bw*12.9:S.drinks*2.5)+(P.shift||0)*39.5;
   const sumTotal=P.base+extrasTotal;
   const recBW=S.group==='jga'||n>=8;
   const extras=isOut?`<div class="extra"><div class="ico">${ic('wagon',26)}</div><div class="t"><b>Bollerwagen${recBW?'<span class="badge">Empfohlen</span>':''}</b><span>Für euer Gepäck · 12,90 € pro Wagen</span></div>
       <div class="mini-step"><button data-act="bw-" aria-label="Einen Bollerwagen weniger">−</button><output>${S.bw}</output><button data-act="bw+" aria-label="Einen Bollerwagen mehr">+</button></div></div>`
     :`<div class="extra"><div class="ico">${ic('drink',26)}</div><div class="t"><b>Getränke vorab<span class="badge">Rabatt</span></b><span>2,50 € pro Getränk</span></div>
       <div class="mini-step"><button data-act="dr-" aria-label="Ein Getränk weniger">−</button><output>${S.drinks}</output><button data-act="dr+" aria-label="Ein Getränk mehr">+</button></div></div>
       ${S.drinks!==n?`<button class="pill" data-act="drn">Eins pro Person (${n})</button>`:''}${shiftHTML(P,fav)}`;
   const ctaHTML=fav.av&&fav.av.phoneOnly&&!P.request?`<a class="cta" href="tel:+4971311240684" style="width:100%">Anrufen: 07131 / 124 06 84</a><div class="note" style="text-align:center">Online ist dieser Termin ausgebucht, telefonisch tragen wir euch noch ein.</div>`:P.request?requestForm()
     :`<button class="cta ticket" data-act="handoff" style="width:100%">Termin wählen ${ic('arrow',20,2.4)}</button><div class="note" style="text-align:center">Unsicher? <span class="sel">07131 / 124 06 84</span></div>`;
   return frame(q('Euer Erlebnis','',summaryChips()+(S.io&&ioState(S).ask?`<span class="chip">${{in:'Drinnen',out:'Draußen',egal:'Drinnen oder draußen'}[S.io]}</span>`:'')+`<button class="pill" data-act="restart" style="min-height:30px;font-size:13px">Ändern</button>`)+
   (forced?`<div class="inline-note">${ic('pin',18)}<span>${forced}</span></div>`:'')+
   `<div class="stage"><div class="eyebrow gold res-eyebrow">${S.pick===0?'Passt am besten zu euch':'Eure Auswahl'}</div><div class="res"><div>
     <article class="fav"><div class="art" style="--tint:${it.tint};--ink:${it.ink}"><div class="posters n${isOut?1:fav.rooms.length}">${(isOut?[fav.tour]:fav.rooms).map(r=>poster(r,40)).join('')}</div></div>
       <div class="body"><div class="kind">${isOut?`Outdoor-Tour · ${loc.name}`:fav.rooms.length>1?`${fav.rooms.length} Escape Rooms · Heilbronn`:'Escape Room · Heilbronn'}</div>
       <h2>${title}</h2><p>${isOut?fav.tour.text:fav.rooms.length===1?fav.rooms[0].text:'Ihr teilt euch auf und spielt parallel. Danach vergleicht ihr, welches Team schneller war.'}</p>
       <ul class="why">${why.map(w=>`<li>${ic('check',20,2.6)}${w}</li>`).join('')}</ul>${availHTML(fav)}
       <div class="facts">${facts.map(f=>`<span class="fact">${f}</span>`).join('')}</div>
       ${isOut&&S.group!=='kgb'?`<div class="quick" style="justify-content:flex-start" role="group" aria-label="Tourlänge"><button class="pill${!S.short?' sel':''}" data-act="short" data-val="0" aria-pressed="${!S.short}">Standard-Tour · 2–3 Std.</button><button class="pill${S.short?' sel':''}" data-act="short" data-val="1" aria-pressed="${!!S.short}">Short-Tour · 1,5–2 Std.</button></div>`:''}
       <div class="price"><b>${eur(P.base)}</b><span class="who">für ${peopleLabel()} · ${P.tariff}</span></div>
       ${P.lines.length?`<div class="note">${P.lines.join('<br>')}</div>`:''}${P.cond?`<div class="cond">${P.cond}</div>`:''}</div></article>
     ${alts.length?`<div class="eyebrow" style="margin-top:22px">Auch passend</div><div class="alts">${alts.map(a=>{const its=a.type==='out'?[a.tour]:a.rooms;const nm=a.type==='out'?a.tour.name:a.rooms.map(r=>r.short).join(' + ');const pa=pricing(a,S);
       const meta=a.compact?`Mit 7. Person · ${a.rooms.length===1?'1 Raum':a.rooms.length+' Räume'} statt ${a.rooms.length+1}`:a.type==='out'?`Outdoor-Tour · ${(LOCS.find(l=>l.id===(S.loc||'hn'))||LOCS[0]).name}`:a.rooms.length>1?`${a.rooms.length} Escape Rooms · ${a.sizes.join(' + ')} Personen`:'Escape Room · Heilbronn';
       return `<button class="alt" data-act="pick" data-val="${C.indexOf(a)}"><span class="posters-sm">${its.map(x=>poster(x,24)).join('')}</span><span class="alt-txt"><small>${meta}${a.av?(a.av.full?' · <em class="bad">an dem Tag ausgebucht</em>':a.av.phoneOnly?' · <em class="tel">nur noch telefonisch</em>':' · noch frei'):''}</small><b>${nm}</b></span><span class="alt-price">${eur(pa.base)}</span></button>`}).join('')}</div>`:''}
   </div>
   <aside class="side">
     ${isOut?`<div class="box"><h3>Treffpunkt</h3><div class="loc"><b>${loc.name}</b> · ${loc.meet(n)}${loc.park?`<br>Parken: ${loc.park}`:''}${loc.eat?`<br>Einkehr: ${loc.eat}`:''}</div>${eligibleLocs(S).length>1?`<button class="pill" data-act="goto" data-val="ort">Ort ändern</button>`:''}</div>`:''}
     <div class="box"><h3>Macht's noch besser</h3>${extras}</div>
     ${P.notes.length?`<div class="box"><h3>Gut zu wissen</h3><ul class="hints">${P.notes.map(h=>`<li>${h}</li>`).join('')}</ul></div>`:''}
     <div class="box${P.request?'':' stickybar'}"><div class="sum"><span>Gesamt</span><b>${eur(sumTotal)} <small class="vat">(inkl. MwSt.)</small></b></div><div class="who">für ${peopleLabel()} · ${P.tariff}</div>${extrasTotal?`<div class="note">inkl. Extras ${eur(extrasTotal)}</div>`:''}${ctaHTML}</div>
   </aside></div></div>`)},
 gtype(){return frame(q('Was möchtest du verschenken?','Erlebnisse gibt es als Gutschein, der sich schön verpacken lässt.')+tilesHTML([
   {act:'gtype',val:'erlebnis',label:'Escape-Room-Erlebnis',sub:'Raum und Spieleranzahl stehen schon fest',icon:'door',t:TINTS.c,sel:S.g.type==='erlebnis'},
   {act:'gtype',val:'wert',label:'Wertgutschein',sub:'Frei einlösbar, auch für Outdoor-Touren',icon:'card',t:TINTS.a,sel:S.g.type==='wert'}],2))},
 gsize(){
   if(S.g.type==='erlebnis') return frame(q('Für wie viele Personen?','Der Preis richtet sich nach der Gruppengröße.')+
     `<div class="stage"><div class="tiles compact keepgrid" style="--cols:5">${[2,3,4,5,6].map(p=>tile({act:'gpersons',val:p,label:`${p} Pers.`,sub:eur(STAFFEL[p]),icon:'users',t:TINTS.c,sel:S.g.persons===p})).join('')}</div></div>`);
   const am=[[50,'Kleines Dankeschön'],[75,'Gutes Polster'],[111,'Escape Room zu zweit'],[144,'Escape Room zu viert'],[150,'Outdoor-Tour für 5'],[170,'Escape Room zu fünft'],[192,'Escape Room zu sechst'],[250,'Großes Geschenk']];
   return frame(q('Welcher Betrag?','Mit Beispielen, was man damit erleben kann.')+
     `<div class="stage"><div class="tiles compact keepgrid" style="--cols:4">${am.map(([v,s])=>tile({act:'gamount',val:v,label:eur(v),sub:s,icon:'card',t:TINTS.a,sel:S.g.amount===v})).join('')}</div>
     <div class="stepper" style="max-width:640px;margin:18px auto 0;width:100%"><div class="lbl"><label for="gcustom"><b>Eigener Betrag</b></label><span>Von 10 bis 500 €, auf den Cent genau</span></div><div class="ctl"><input id="gcustom" type="text" inputmode="decimal" value="${!S.g.amount||am.some(x=>x[0]===S.g.amount)?'':S.g.amount}" placeholder="z. B. 75" style="width:110px;min-height:46px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--fg);font:inherit;font-size:20px;padding:0 12px"><button class="cta" data-act="gcustom" style="min-height:46px;padding:0 20px">Weiter</button></div></div></div>`)},
 gpack(){const it=[
   {act:'gpack',img:'gutschein-pdf',em:emMedal('mail','Sofort per E-Mail'),val:'pdf',label:'PDF per E-Mail',sub:'Sofort da, zum Selbstausdrucken',icon:'mail',t:TINTS.f},
   {act:'gpack',val:'hc',img:'hc-klassik',label:'Hardcover-Karte',sub:'4,80 € · per Post · 5 Designs',icon:'card',t:TINTS.a},
   {act:'gpack',val:'pop',img:'pop-feuerwerk',label:'Pop-up-Karte',sub:'ab 9,90 € · 3D-Motiv · 4 Designs',icon:'popup',t:TINTS.e}];
   if(S.g.type==='wert') it.push({act:'gpack',val:'ship',img:'pack-ship',label:'Piratenschiff-Rätsel',sub:'12,90 € · Bastelbogen mit Mini-Rätsel',icon:'ship',t:TINTS.c,tag:'Beliebt'});
   it.forEach(x=>x.sel=S.g.pack===x.val);
   return frame(q('Wie soll der Gutschein ankommen?','')+tilesHTML(it,it.length))},
 gextra(){return frame(q('Noch ein Rätselspiel dazu?','Für alle, die schon vor dem Termin knobeln wollen.')+tilesHTML([
   {act:'gexit',img:'exit-game',val:'1',label:'Ja, ein Exit-Game',sub:'EXIT – Das Spiel von Kosmos · 14,99 €',icon:'box',t:TINTS.b,sel:S.g.exit===true},
   {act:'gexit',img:'gutschein-pur',em:emMedal('gift','Nur der Gutschein'),val:'0',label:'Nein danke',sub:'Nur der Gutschein',icon:'gift',t:TINTS.f,sel:S.g.exit===false&&cur!=='gextra'}],2))},
 gresult(){
   const G=S.g,val=G.type==='erlebnis'?STAFFEL[G.persons]:G.amount||0;
   const packs={pdf:['PDF per E-Mail',0,[]],hc:['Hardcover-Karte',4.8,['Klassik','Geburtstag','Weihnachten','Hochzeit','Ostern']],
     pop:['Pop-up-Karte',9.9,['Geburtstagsfeuerwerk mit Musik','Geburtstagskatze','Gänseblümchen','Geschenkbox']],ship:['Piratenschiff-Rätsel',12.9,[]]};
   const [pn,pp0,designs]=packs[G.pack||'pdf'];
   if(designs.length&&!designs.includes(G.design))G.design=designs[0];
   const pp=G.pack==='pop'&&G.design==='Geburtstagsfeuerwerk mit Musik'?11.9:pp0;
   const exitP=G.exit?14.99:0,shipX=G.exit&&(G.pack||'pdf')==='pdf'?4.8:0;
   const tot=val+pp+exitP+shipX;
   return frame(q('Dein Geschenk','')+`<div class="stage"><div class="res"><div>
     <article class="fav"><div class="art" style="--tint:${TINTS.c[0]};--ink:${TINTS.c[1]}">${ic(G.pack==='ship'?'ship':G.pack==='pop'?'popup':'gift',110,1.2)}${imgTag(G.pack==='ship'?'pack-ship':(DESIGN_IMG[G.pack]||{})[G.design])}</div>
     <div class="body"><div class="kind">${G.type==='erlebnis'?'Erlebnisgutschein':'Wertgutschein'}</div>
     <h2>${G.type==='erlebnis'?`Escape Room für ${G.persons}`:`${eur(val)} Wertgutschein`}</h2>
     <p>${G.type==='erlebnis'?'Raum und Termin wählt ihr bei der Bestellung.':'Einlösbar für alle Escape Rooms und Outdoor-Touren.'}</p>
     <ul class="why"><li>${ic('check',20,2.6)}${pn}${pp?` (${eur(pp)})`:''}</li>${G.exit?`<li>${ic('check',20,2.6)}EXIT – Das Spiel von Kosmos (14,99 €)</li>`:''}${shipX?`<li>${ic('check',20,2.6)}Versand für das Exit-Game (4,80 €)</li>`:''}</ul>
     ${designs.length?`<div class="eyebrow">Design</div><div class="quick" style="justify-content:flex-start">${designs.map(d=>`<button class="pill${G.design===d?' sel':''}" data-act="gdesign" data-val="${d}">${IMG[(DESIGN_IMG[G.pack]||{})[d]]?`<img class="dthumb" src="${IMG[DESIGN_IMG[G.pack][d]]}" alt="" loading="lazy">`:''}${d}${G.pack==='pop'&&d==='Geburtstagsfeuerwerk mit Musik'?' · 11,90 €':''}</button>`).join('')}</div>`:''}
     </div></article></div>
     <aside class="side"><div class="box stickybar"><div class="sum"><span>Gesamt</span><b>${eur(tot)} <small class="vat">(inkl. MwSt.)</small></b></div>${G.exit?`<div class="note">inkl. Exit-Game${shipX?' und Versand':''}</div>`:''}
     <button class="cta ticket" data-act="handoff" style="width:100%">In den Warenkorb ${ic('arrow',20,2.4)}</button>
     <button class="pill" data-act="restart">Doch selbst spielen?</button></div></aside></div></div>`)}
};
function shiftHTML(P,fav){
  if(!P.shiftable) return '';
  const k=fav.rooms.length,pair=k===2&&PAIRS.some(p=>p.every(id=>fav.rooms.some(r=>r.id===id)));
  return `<div class="extra" style="margin-top:6px"><div class="ico">${ic('cal',26)}</div><div class="t"><b>Alle gleichzeitig starten${k>=3||!pair?'<span class="badge">Empfohlen</span>':''}</b>
    <span>Wir verschieben Slots aus ihrer Standard-Startzeit, damit ihr nicht 30 bis 45 Minuten auf den nächsten Raum wartet. 39,50 € pro Slot, auf Anfrage und nur, wenn der Slot frei ist.</span></div>
    <div class="mini-step"><button data-act="sh-" aria-label="Eine Slot-Verschiebung weniger">−</button><output>${P.shift||0}</output><button data-act="sh+" aria-label="Eine Slot-Verschiebung mehr">+</button></div></div>`;
}
/* ===================== QUINBOOK-ÜBERGABE =====================
   Der Finder sucht den QuinBook-Shop auf derselben Seite (<div id="venuedoo">, legt shop.js selbst an).
   Gutscheine: legt Gutschein + Verpackung (+ Exit-Game) selbst in den Warenkorb und öffnet ihn.
   Escape Rooms / Touren: scrollt zum Shop, markiert das Angebot und zeigt einen Spickzettel.
   Alle Produkte werden über ihren Namen im Shop gefunden – Namen in QuinBook daher nicht ändern
   (oder hier mitändern). Klappt ein Schritt nicht, zeigt der Spickzettel den Rest zum Selbermachen. */

const QB_FIXED_VOUCHERS=[15,30,50,75,111,144,170,192,250];   // "Gutschein für X€"
const QB_INDIVIDUAL='individueller Gutscheinwert';
const QB_EXIT='EXIT – Das Spiel';                             // intern SKU 90313, muss im Shop sichtbar geschaltet werden
// SKU-Nummern (für eine spätere Server-Anbindung über die QuinBook-API; die Shop-Übergabe nutzt die Namen)
const QB_SKU={'EXIT – Das Spiel':90313,'Hardcover Upgrade - Geburtstag':169395,'Hardcover Upgrade - Hochzeit':169404,'Hardcover Upgrade - Klassik':169407,
  'Hardcover Upgrade - Ostern':169401,'Hardcover Upgrade - Weihnachten':169398,'Pop-Up Karte - Gänseblümchen':187710,'Pop-Up Karte - Geburtstagsfeuerwerk mit Musik':187713,
  'Pop-Up Karte - Geburtstagskatze':194484,'Pop-Up Karte - Geschenkbox':187716,'Gutschein für 111€':215124,'Gutschein für 144€':215127,'Gutschein für 15€':215112,'individueller Gutscheinwert':215109};
const qbVoucher=v=>Number.isInteger(v)&&QB_FIXED_VOUCHERS.includes(v)?`Gutschein für ${v}€`:QB_INDIVIDUAL;
const qbPack=G=>G.pack==='hc'?`Hardcover Upgrade - ${G.design}`:G.pack==='pop'?`Pop-Up Karte - ${G.design}`:G.pack==='ship'?'Piratenschiff Gutschein-Box':null;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function waitFor(fn,ms=5000){return new Promise((res,rej)=>{const t0=Date.now();(function poll(){let v;try{v=fn()}catch(e){}if(v)return res(v);if(Date.now()-t0>ms)return rej(new Error('timeout'));setTimeout(poll,150)})()})}
/* Der QuinBook-Shop rendert in ein geschlossenes Shadow-DOM in <div id="venuedoo">. Der kleine Head-Code
   (webflow-einbindung.html, Teil A) merkt sich dieses Shadow-DOM in window.__exfShopRoot, bevor shop.js startet. */
const qbHost=()=>document.getElementById('venuedoo');
const qbRoot=()=>window.__exfShopRoot||(qbHost()&&qbHost().shadowRoot)||qbHost();
const qbText=()=>{const r=qbRoot();if(!r)return '';return r.textContent!=null?r.textContent:[...r.childNodes].map(n=>n.textContent||'').join('')};
const qbById=id=>{const r=qbRoot();return (r&&r.getElementById?r.getElementById(id):null)||document.getElementById(id)};
const qbOpenDialog=()=>{const sel='[role="dialog"][data-state="open"]';const r=qbRoot();return (r&&r.querySelector(sel))||document.querySelector(sel)};
function qbCartCount(){const b=qbRoot()?.querySelector('button[aria-label^="WARENKORB"]');const m=b&&b.getAttribute('aria-label').match(/\((\d+)\)/);return m?+m[1]:0}
function qbFindImg(name){return [...(qbRoot()?.querySelectorAll('img')||[])].find(i=>(i.alt||'').trim().toLowerCase()===name.toLowerCase())}
function setReactValue(el,v){const d=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),'value');d.set.call(el,v);
  el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new FocusEvent('focusout',{bubbles:true}))}
async function qbAdd(step){
  const img=qbFindImg(step.product);const btn=img&&img.closest('button');if(!btn)throw new Error('Produkt nicht gefunden: '+step.product);
  const before=qbCartCount();btn.click();
  const dlg=await waitFor(qbOpenDialog,5000);
  if(step.amount!=null){const inp=await waitFor(()=>dlg.querySelector('input[aria-label="Voucher amount"]'),3000);
    setReactValue(inp,String(step.amount).replace('.',','));await sleep(350);}
  const add=[...dlg.querySelectorAll('button')].find(b=>b.textContent.trim()==='In den Warenkorb');if(!add)throw new Error('Knopf fehlt');
  add.click();
  await waitFor(()=>qbCartCount()>before,6000);
  await sleep(300);const still=qbOpenDialog();if(still)still.querySelector('[data-slot="dialog-close"]')?.click();
}
function handoffPlan(){
  if(S.mode==='gift'){const G=S.g,v=G.amount,prod=qbVoucher(v),pk=qbPack(G),st=[];
    st.push({auto:true,product:prod,amount:prod===QB_INDIVIDUAL?v:null,label:prod===QB_INDIVIDUAL?`„${prod}“ mit ${eur(v)} in den Warenkorb`:`„${prod}“ in den Warenkorb`});
    if(pk) st.push({auto:true,product:pk,label:`„${pk}“ in den Warenkorb`});
    if(G.exit) st.push({auto:true,product:QB_EXIT,label:`„${QB_EXIT}“ in den Warenkorb`});
    st.push({auto:false,label:'Warenkorb prüfen und auf „Buchung abschließen“ tippen'});
    return {kind:'gift',steps:st};}
  const f=candidates(S)[S.pick],P=pricing(f,S),items=f.type==='out'?[f.tour]:f.rooms,st=[];
  const dayTxt={dofr:' (Donnerstag oder Freitag)',so:' (Sonntag)',sa:' (Samstag)',momi:' (Montag bis Mittwoch)'}[S.day]||'';
  st.push(S.date?{auto:false,date:S.date,label:`Datum ${fmtDate(S.date)} im Shop auswählen`}:{auto:false,label:`Oben im Shop euer Datum wählen${dayTxt}`});
  items.forEach((x,i)=>{const kgbT=S.group==='kgb'&&f.type==='out'&&P.tariff==='Kindergeburtstagstarif';
    const size=items.length>1?f.sizes[i]:kgbT?Math.max(6,S.kids+Math.max(0,S.adults-(S.kids<=8?1:S.kids<=12?2:3))):total(S);
    st.push({auto:false,highlight:QB[x.id],room:QB[x.id],size,tariff:P.tariff,anf:x.levels?S.exp==='first':null,short:f.type==='out'?!!S.short:null,band:f.type==='out'?(size<=12?'bis':'ab'):null,
      label:`Bei „${QB[x.id]}“ eine freie Uhrzeit antippen${f.av&&!f.av.full&&!f.av.phoneOnly?` (z. B. ${f.av.best?f.av.best.times[i]:f.av.use[0][0]})`:''}. Tarif und ${size} Teilnehmer wählt der Finder vor, ihr tippt auf „In den Warenkorb“.`})});
  if(f.type==='out'&&S.bw) st.push({auto:false,upsell:'bw',label:`Danach zeigt der Shop „Unsere Empfehlungen“: Der Finder trägt ${S.bw} Bollerwagen ein, ihr tippt auf „Weiter“`});
  if(f.type==='in'&&S.drinks) st.push({auto:false,upsell:'drinks',label:`Danach zeigt der Shop „Unsere Empfehlungen“: Der Finder trägt ${S.drinks} Softgetränke ein, ihr tippt auf „Weiter“`});
  st.push({auto:false,label:'Auf „Buchung abschließen“ tippen und bezahlen'});
  return {kind:'play',steps:st.filter(s=>s.label)};
}
async function runHandoff(){
  const plan=handoffPlan(),root=qbRoot();
  S.handoff={plan,preview:!root};renderPanel();if(!root)return;
  document.body.classList.add('finder-handoff');hideOverlay();
  qbHost().scrollIntoView({behavior:'smooth',block:'start'});
  if(plan.kind==='play'){const ds=plan.steps.find(x=>x.date);if(ds){ds.state='run';renderPanel();ds.state=await qbSelectDate(ds.date).catch(()=>false)?'done':'open';renderPanel()}
    plan.steps.forEach(s=>{if(!s.highlight)return;const img=qbFindImg(s.highlight),card=img&&img.parentElement&&img.parentElement.parentElement;
      if(card){card.style.outline='3px solid #59AEFF';card.style.outlineOffset='4px';card.style.borderRadius='12px'}else s.missing=true});renderPanel();startSlotAssist(plan);return;}
  await waitFor(()=>qbFindImg(plan.steps[0].product),8000).catch(()=>{});
  for(const s of plan.steps.filter(x=>x.auto)){s.state='run';renderPanel();
    try{await qbAdd(s);s.state='done'}catch(e){s.state='fail';renderPanel();return}renderPanel();}
  qbRoot().querySelector('button[aria-label^="WARENKORB"]')?.click();
  plan.steps[plan.steps.length-1].state='now';renderPanel();
}
/* Slot-Fenster: sobald der Gast bei einem empfohlenen Angebot eine Uhrzeit antippt, wählt der Finder
   den passenden Tarif (Akkordeon) und die Teilnehmerzahl ("N Teilnehmer") vor. In den Warenkorb legt der Gast selbst. */
const TARIFF_KW={'Familientarif':/famil/i,'Kindergeburtstagstarif':/geburtstag|kinder/i,'Schulklassentarif':/schul|klasse/i,
  'Firmen-Sonderöffnung Mo–Mi':/firm|unternehm|team|sonder/i,'Firmentarif außerhalb Heilbronn':/firm|unternehm|team/i};
const ANY_KW=/famil|geburtstag|kinder|schul|klasse|firm|unternehm|team|sonder/i;
async function qbPreselect(dlg,step){
  const trigs=[...dlg.querySelectorAll('[data-slot="accordion-trigger"]')];let region=dlg;
  if(trigs.length){const nm=t=>t.textContent.trim(),kw=TARIFF_KW[step.tariff];
    let cand=kw?trigs.filter(t=>kw.test(nm(t))):trigs.filter(t=>!ANY_KW.test(nm(t)));
    if(!kw&&!cand.length) cand=trigs;
    // Endzeit: "Anfänger-…-Tarif" für Erstspieler, sonst der normale (schwere) Tarif
    if(step.anf!=null){const a=cand.filter(t=>/anf(ä|ae)nger/i.test(nm(t))===step.anf);if(a.length)cand=a;}
    // Touren: "Gruppen bis 12 Spieler" / "Gruppen ab 13 Spieler" und Standard- vs. Short-Tour
    if(step.band){const b=cand.filter(t=>(step.band==='bis'?/bis\s*12/i:/ab\s*13/i).test(nm(t)));if(b.length)cand=b;}
    if(step.short!=null){const sh=cand.filter(t=>/short/i.test(nm(t))===step.short);if(sh.length)cand=sh;}
    const trig=cand[0];
    if(!trig) return false;
    if(trig.getAttribute('aria-expanded')!=='true'){trig.click();await sleep(350)}
    region=qbById(trig.getAttribute('aria-controls'))||dlg;}
  const findN=()=>[...region.querySelectorAll('button')].find(b=>{const m=b.textContent.match(/^\s*(\d+)\s*Teilnehmer/);return m&&+m[1]===step.size});
  let btn=await waitFor(findN,1500).catch(()=>null);
  if(btn&&btn.offsetParent===null) btn=null; // liegt im zugeklappten Bereich
  // größere Gruppen stecken hinter "Mehr anzeigen"
  if(!btn){const more=[...region.querySelectorAll('button')].find(b=>/mehr anzeigen/i.test(b.textContent)&&b.getAttribute('aria-expanded')==='false');
    if(more){more.click();btn=await waitFor(findN,2500).catch(()=>null)}}
  if(!btn) return false;
  if(btn.getAttribute('aria-pressed')!=='true') btn.click();
  const add=[...dlg.querySelectorAll('button')].find(b=>b.textContent.trim()==='In den Warenkorb');
  if(add){add.style.outline='3px solid #59AEFF';add.style.outlineOffset='2px'}
  return true;
}
/* Upselling-Fenster "Unsere Empfehlung(en) passend zu deinem Erlebnis" nach "In den Warenkorb":
   Softgetränke bzw. Bollerwagen in der gewählten Menge eintragen – nur einmal pro Buchung. */
async function qbUpsell(dlg,plan){
  plan.upsellDone=plan.upsellDone||{};
  const wants=[{key:'drinks',re:/getr(ä|ae)nk/i,qty:S.drinks},{key:'bw',re:/bollerwagen/i,qty:S.bw}];
  for(const h of dlg.querySelectorAll('h4')){
    const w=wants.find(x=>x.re.test(h.textContent));if(!w||!w.qty||plan.upsellDone[w.key])continue;
    const box=h.parentElement&&h.parentElement.parentElement,inp=box&&box.querySelector('input');if(!inp)continue;
    const plus=inp.nextElementSibling;
    for(let i=+inp.value||0;i<w.qty&&plus;i++){plus.click();await sleep(120)}
    if(+inp.value!==w.qty) setReactValue(inp,String(w.qty));
    plan.upsellDone[w.key]=true;
    const st=plan.steps.find(s=>s.upsell===w.key);if(st)st.state='pre';
  }
  const weiter=[...dlg.querySelectorAll('button')].find(b=>b.textContent.trim()==='Weiter');
  if(weiter){weiter.style.outline='3px solid #59AEFF';weiter.style.outlineOffset='2px'}
}
/* Datum im Shop anklicken: Kachel mit Wochentag / Tag / Monat suchen, sonst erst den Monatsknopf */
const MON3=['jan','feb','mär','apr','mai','jun','jul','aug','sep','okt','nov','dez'];
function qbDateTile(iso){const d=dateObj(iso),dd=pad2(d.getDate()),m3=MON3[d.getMonth()];
  return [...(qbRoot()?.querySelectorAll('div')||[])].find(el=>{const k=el.children;return k.length>=3&&k.length<=4&&k[1].textContent.trim()===dd&&k[2].textContent.trim().toLowerCase().startsWith(m3)&&k[0].textContent.trim().length<=4})}
async function qbSelectDate(iso){
  const d=dateObj(iso),want=`${pad2(d.getDate())}.${pad2(d.getMonth()+1)}.${d.getFullYear()}`,ok=()=>qbText().includes('Buchung für '+want);
  if(ok())return true;
  let tile=await waitFor(()=>qbDateTile(iso),4000).catch(()=>null);
  if(!tile){const m=[...qbRoot().querySelectorAll('button')].find(b=>b.textContent.trim().toLowerCase().startsWith(MON3[d.getMonth()]));
    if(m){m.click();tile=await waitFor(()=>qbDateTile(iso),4000).catch(()=>null)}}
  if(!tile)return false;
  tile.click();return !!(await waitFor(ok,4000).catch(()=>false));
}
function qbSlots(name){const img=qbFindImg(name),card=img&&img.parentElement&&img.parentElement.parentElement;if(!card)return null;
  return [...card.querySelectorAll('button')].map(b=>{const t=(b.textContent||'').trim();if(!/^\d\d:\d\d$/.test(t))return null;
    const bg=((b.getAttribute('style')||'').match(/--slot-bg:\s*([^;]+)/)||[])[1]||'',h=parseFloat(bg);
    // 177 = frei (Petrol), 156 = nur telefonisch (Grün), "0 0% 0% / 0.20" = belegt
    return {t,state:b.disabled||bg.includes('/')||!h?'booked':h>=150&&h<170?'phone':'free'}}).filter(Boolean)}
async function qbCheckDay(iso){
  const ok=await qbSelectDate(iso).catch(()=>false);if(!ok)return {date:iso,missing:true,map:{}};
  await sleep(700);const map={};Object.values(QB).forEach(n=>{map[n]=qbSlots(n)});return {date:iso,map};
}
function availHTML(c){
  if(!S.date||!qbRoot())return '';const d=fmtDate(S.date);
  if(S.availBusy)return `<div class="avail">Wir prüfen die freien Termine am ${d} …</div>`;
  const A=S.avail;if(!A||A.date!==S.date)return '';
  if(A.missing)return `<div class="avail warn">Für den ${d} ist online noch nichts buchbar. Fragt gern bei uns an.</div>`;
  if(!c.av)return '';const items=c.type==='out'?[c.tour]:c.rooms,tel='07131 / 124 06 84';
  if(c.av.full)return `<div class="avail warn">Am ${d} leider ausgebucht. Schaut euch die Alternativen an oder wählt einen anderen Tag.</div>`;
  const slots=items.length===1?c.av.use[0].map(t=>`<b class="slot">${t}</b>`).join(''):items.map((x,i)=>`<b class="slot">${x.short} ${c.av.best.times[i]}</b>`).join('');
  if(c.av.phoneOnly)return `<div class="avail phone"><span>Am ${d} online ausgebucht, telefonisch noch möglich:</span>${slots}<small>Ruft uns an, dann tragen wir euch ein: ${tel}</small></div>`;
  return `<div class="avail"><span>Am ${d} ${items.length===1?'noch frei':'passt zusammen'}:</span>${slots}${items.length>1&&c.av.best.span>45?'<small>Die Startzeiten liegen etwas auseinander. Ruft gern an, ob wir sie angleichen können.</small>':''}</div>`;
}
function startSlotAssist(plan){
  const iv=setInterval(async()=>{
    if(!S.handoff||S.handoff.plan!==plan){clearInterval(iv);return}
    const rooms=plan.steps.filter(s=>s.room);
    rooms.forEach(s=>{if((s.state==='pre'||s.state==='open')&&qbCartCount()>s.before){s.state='done';renderPanel()}});
    if(rooms.every(s=>s.state==='done')&&plan.steps[plan.steps.length-1].state!=='now'){plan.steps[plan.steps.length-1].state='now';renderPanel()}
    const dlg=qbOpenDialog();if(!dlg||dlg.dataset.finder)return;
    const title=(dlg.querySelector('[data-slot="dialog-title"]')?.textContent||'').trim().toLowerCase();
    if(/empfehlung/.test(title)){dlg.dataset.finder='1';await qbUpsell(dlg,plan).catch(()=>{});renderPanel();return}
    const step=rooms.find(s=>s.room.toLowerCase()===title&&s.state!=='done');if(!step)return;
    dlg.dataset.finder='1';step.before=qbCartCount();
    const ok=await qbPreselect(dlg,step).catch(()=>false);step.state=ok?'pre':'open';renderPanel();
  },400);
}
function renderPanel(){
  const pr=panelRoot();let el=pr.getElementById('handoff');
  if(!S.handoff){if(el)el.remove();document.body.classList.remove('finder-handoff');return}
  if(!el){el=document.createElement('aside');el.id='handoff';el.className='exf-root';el.setAttribute('aria-live','polite');pr.appendChild(el);
    el.addEventListener('click',e=>{const b=e.target.closest('[data-hd]');if(!b)return;const back=b.dataset.hd==='back';S.handoff=null;renderPanel();if(back)openFinder();})}
  const {plan,preview}=S.handoff;let n=0;
  const failed=plan.steps.some(s=>s.state==='fail');
  el.innerHTML=`<div class="hd-head"><h3>So geht's weiter</h3><button class="iconbtn" data-hd="close" aria-label="Spickzettel schließen">${ic('x',18,2)}</button></div>
   ${preview?`<p class="hd-note"><b>Vorschau:</b> Auf exodus-hn.de öffnet sich jetzt euer QuinBook-Shop.${plan.kind==='gift'?' Die grünen Schritte erledigt der Finder dort selbst.':' Das gewählte Angebot wird im Shop blau markiert.'}</p>`:''}
   ${failed?`<p class="hd-note warn">Das hat nicht automatisch geklappt. Macht die offenen Schritte bitte selbst im Shop.</p>`:''}
   <ol>${plan.steps.map(s=>{n++;const cls=s.state==='done'?'done':s.state==='fail'?'fail':(s.state==='pre'||(preview&&s.auto))?'auto':'';
     const mark=s.state==='done'?'✓':s.state==='fail'?'!':s.state==='run'?'…':n;
     return `<li><span class="st ${cls}">${mark}</span><span>${esc(s.label)}${s.missing?' <small>(im Shop nicht gefunden)</small>':''}${s.state==='pre'?' <small>(vorausgewählt)</small>':''}${s.state==='open'?(s.date?' <small>(bitte selbst auswählen)</small>':' <small>(bitte Tarif und Personen selbst wählen)</small>'):''}</span></li>`}).join('')}</ol>
   <button class="pill" data-hd="back" style="margin-top:12px">Zurück zum Finder</button>`;
}
function poster(x,s){return `<span class="poster" style="--tint:${x.tint};--ink:${x.ink}">${ic(x.icon,s,1.4)}${imgTag(IMGKEY[x.id])}</span>`}
function peopleLabel(){const n=total(S);
  if(family(S)) return `${n} Personen (${S.kids} ${S.kids===1?'Kind':'Kinder'}, ${S.adults} ${S.adults===1?'Erwachsener':'Erwachsene'})`;
  if(S.group==='schule') return `${n} Schüler`;
  return `${n} Personen`;}
function momiSub(){const io=effIO(S),g=S.group;
  if(io==='in') return g==='firma'?'Escape Rooms als Sonderöffnung':'Escape Rooms geschlossen';
  if(io==='out') return g==='firma'&&total(S)>=12?'Outdoor in Heilbronn ab Di, außerhalb täglich':'Outdoor-Touren ab Dienstag';
  return g==='firma'?'Escape Rooms als Sonderöffnung, Outdoor ab Di':'Outdoor-Touren ab Dienstag';}
/* ---------- Anfrage über verstecktes Webflow-Formular ---------- */
const WEBFLOW_FORM_ID='finder-anfrage'; // ID des Webflow-Formulars (Form-Element, nicht der Form Block)
let wfHome=null;
function wfWrap(){const f=document.getElementById(WEBFLOW_FORM_ID);return f?(f.closest('.w-form')||f.parentElement):null}
function parkForm(){}
function fillHidden(){const f=document.getElementById(WEBFLOW_FORM_ID);if(!f||!$id('rq-slot'))return;const d=requestData();
  ['Angebot','Anfrage'].forEach(k=>{const el=f.querySelector(`[name="${k}"]`);if(el)el.value=d[k]})}
function placeForm(){const w=wfWrap();if(!w||!$id('rq-slot'))return;if(w.parentElement!==host){host.appendChild(w)}w.setAttribute('slot','form');w.style.display='block';fillHidden()}
// vor dem Absenden (Capture-Phase, also vor Webflows eigenem Handler) die versteckten Felder aktualisieren
document.addEventListener('submit',e=>{if(e.target.id===WEBFLOW_FORM_ID){try{fillHidden()}catch(err){}}},true);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function requestData(){
  const C=candidates(S),f=C[S.pick],P=pricing(f,S),isOut=f.type==='out';
  const nm=isOut?f.tour.name:f.rooms.map(r=>r.short).join(' + ');
  const lines=[`Angebot: ${nm}`,
    `Gruppe: ${GROUPS[S.group]}, ${total(S)} Personen`+(S.group==='schule'&&S.klasse?`, Klasse ${S.klasse}`:'')+(family(S)?` (${S.adults} Erwachsene, ${S.kids} Kinder, jüngstes Kind ${S.age<12?'unter 12':S.age})`:''),
    isOut?`Ort: ${LOCS.find(l=>l.id===(S.loc||'hn')).name} · ${S.short?'Short-Tour':'Standard-Tour'}`:`Räume: ${f.rooms.map((r,i)=>`${r.short} (${f.sizes[i]} P.)`).join(', ')}`,
    S.date?`Wunschtermin: ${fmtDate(S.date)}`:S.day?`Wunschtage: ${{momi:'Mo–Mi',dofr:'Do/Fr',sa:'Samstag',so:'Sonntag',open:'noch offen'}[S.day]}`:null,
    `Tarif laut Finder: ${P.tariff}, ${eur(P.base)}`,
    isOut&&S.bw?`Bollerwagen: ${S.bw}`:null, !isOut&&S.drinks?`Getränke vorab: ${S.drinks}`:null,
    P.shift?`Gleichzeitiger Start: ${P.shift} Slot-Verschiebung${P.shift>1?'en':''} à 39,50 € (bitte Verfügbarkeit prüfen)`:null,
    S.req.msg?`Nachricht: ${S.req.msg}`:null].filter(Boolean);
  return {Name:S.req.name.trim(),Email:S.req.mail.trim(),Telefon:S.req.tel.trim(),Angebot:nm,Anfrage:lines.join('\n')};
}
function sendViaWebflow(data){return new Promise(res=>{
  const form=document.getElementById(WEBFLOW_FORM_ID);if(!form){res('preview');return}
  Object.entries(data).forEach(([k,v])=>{const el=form.querySelector(`[name="${k}"]`);if(el)el.value=v});
  const wrap=form.parentElement,done=wrap.querySelector('.w-form-done'),fail=wrap.querySelector('.w-form-fail'),t0=Date.now();
  const vis=el=>el&&getComputedStyle(el).display!=='none';
  const iv=setInterval(()=>{if(vis(done)){clearInterval(iv);res('ok')}else if(vis(fail)||Date.now()-t0>15000){clearInterval(iv);res('fail')}},300);
  form.requestSubmit?form.requestSubmit():form.querySelector('[type=submit]').click();
})}
function requestForm(){
  if(wfWrap()) return '<div id="rq-slot"><slot name="form"></slot></div>'; // echtes Webflow-Formular wird hier eingesetzt
  if(S.sent==='preview') return `<div class="sent"><b>Vorschau</b><p>Auf exodus-hn.de geht diese Anfrage über euer Webflow-Formular direkt in euer Postfach. Hier im Prototyp wird nichts verschickt.</p>
    <details><summary>So kommt sie bei euch an</summary><pre>${esc(Object.entries(requestData()).filter(([k])=>k!=='Anfrage').map(([k,v])=>`${k}: ${v||'–'}`).join('\n')+'\n\n'+requestData().Anfrage)}</pre></details>
    <button class="pill" data-act="unsend">Zurück zum Formular</button></div>`;
  if(S.sent==='ok') return `<div class="sent"><b>Danke, eure Anfrage ist bei uns.</b><p>Wir melden uns so schnell wie möglich bei euch.</p></div>`;
  const r=S.req;
  return `<form id="reqform" class="reqform" novalidate>
    <div class="note"><b style="color:var(--gold)">Vorschau:</b> Auf exodus-hn.de steht hier euer Webflow-Formular. Für diese Gruppe stimmen wir den Termin persönlich ab, eure Auswahl schicken wir automatisch mit.</div>
    <label for="rq-name">Name</label><input id="rq-name" autocomplete="name" value="${esc(r.name)}">
    <label for="rq-mail">E-Mail</label><input id="rq-mail" type="email" autocomplete="email" value="${esc(r.mail)}">
    <label for="rq-tel">Handynummer</label><input id="rq-tel" type="tel" autocomplete="tel" value="${esc(r.tel)}">
    <label for="rq-msg">Wunschtermin oder Nachricht <span class="opt">(optional)</span></label><textarea id="rq-msg" rows="2">${esc(r.msg)}</textarea>
    <div class="captcha" aria-hidden="true"><span class="cbox"></span>Ich bin kein Roboter<small>reCAPTCHA</small></div>
    <div class="err" role="alert" ${S.reqErr?'':'hidden'}>${esc(S.reqErr)}</div>
    <button class="cta" type="submit" style="width:100%">Anfrage schicken</button>
    <div class="note" style="text-align:center">E-Mail oder Handynummer genügt.</div></form>`;
}
function stepper(key,label,sub,val){return `<div class="stepper"><div class="lbl"><b>${label}</b><span>${sub}</span></div><div class="ctl">
  <button class="iconbtn" data-act="${key}-" aria-label="${label} weniger">−</button><span class="val">${val}</span><button class="iconbtn" data-act="${key}+" aria-label="${label} mehr">+</button></div></div>`}
function contact(){return `<div class="contact">Telefon <span class="sel">07131 / 124 06 84</span> · <span class="sel">info@exodus-hn.de</span></div>`}

function requestText(){
  const C=candidates(S),f=C[S.pick],P=pricing(f,S);
  const nm=f.type==='out'?f.tour.name:f.rooms.map(r=>r.short).join(' + ');
  return `Hallo Exodus-Team,\n\nwir interessieren uns für: ${nm}\nGruppe: ${GROUPS[S.group]}, ${total(S)} Personen${S.klasse&&S.group==='schule'?`, Klasse ${S.klasse}`:''}\n${f.type==='out'?`Ort: ${LOCS.find(l=>l.id===(S.loc||'hn')).name}\n`:''}Tarif laut Finder: ${P.tariff}, ${eur(P.base)}\nWunschtermin: \n\nViele Grüße`;
}

/* app, host, scroller werden in mount() gesetzt */
function recName(c){return !c?'':c.type==='out'?c.tour.short:c.rooms.map(r=>r.short).join(' + ')}
let lastResultKey='';
function render(){parkForm();app.innerHTML=(V[cur]||V.launch)();bindDots();placeForm();
  if(cur==='result'&&S.mode==='play'){const C=candidates(S),c=C[S.pick],key=JSON.stringify([S.group,total(S),S.io,S.exp,S.thrill,S.day,S.date,S.loc,S.pick]);
    if(c&&key!==lastResultKey){lastResultKey=key;const P=pricing(c,S);track('finder_result',{group:S.group,persons:total(S),io:effIO(S),date_known:S.date?'ja':'nein',
      recommendation:recName(c),value:P.base,currency:'EUR',tariff:P.tariff,booking:P.request?'anfrage':'shop',availability:c.av?(c.av.full?'ausgebucht':c.av.phoneOnly?'telefonisch':'frei'):'unbekannt'})}}
  if(cur==='gresult'){const key='g'+JSON.stringify(S.g);if(key!==lastResultKey){lastResultKey=key;track('finder_result',{mode:'gift',value:S.g.amount||0,currency:'EUR',packaging:S.g.pack||'pdf'})}}
  if(cur==='result'&&S.mode==='play'&&S.date&&qbRoot()&&!S.availBusy&&(!S.avail||S.avail.date!==S.date)){
    S.availBusy=true;qbCheckDay(S.date).catch(()=>null).then(a=>{S.avail=a;S.availBusy=false;S.pick=0;if(cur==='result')render()})}}
function bindDots(){
  const t=app.querySelector('.tiles:not(.keepgrid)'),d=app.querySelectorAll('.dots i');if(!t||!d.length)return;
  t.addEventListener('scroll',()=>{const i=Math.round(t.scrollLeft/(t.scrollWidth/d.length));d.forEach((x,k)=>x.classList.toggle('on',k===Math.min(i,d.length-1)))},{passive:true});
}
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
app.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,v=b.dataset.val;
  if(['mode','group','age','klasse','io','exp','thrill','day','ort','gpack','gexit','gamount','gpersons','gdesign','short'].includes(a))track('finder_answer',{question:a,answer:String(v)});
  if(a==='next'&&cur==='size')track('finder_answer',{question:'personen',answer:String(total(S))});
  if(a==='dateok'&&S.date)track('finder_answer',{question:'termin',answer:'bekannt',days_ahead:daysUntil(S.date)});
  if(a==='dateopen')track('finder_answer',{question:'termin',answer:'offen'});
  if(a==='pick'){const c=candidates(S)[+v];if(c)track('finder_alternative',{recommendation:recName(c)})}
  const set=(k,val)=>{S[k]=val;S.pick=0;next()};
  switch(a){
    case 'start':go('mode');break; case 'back':back();break; case 'close':closeFinder();break;
    case 'restart':Object.assign(S,{mode:'play',group:null,io:null,exp:null,thrill:null,day:null,loc:null,age:null,klasse:null,pick:0,bw:0,drinks:0,shift:0,sent:false,reqErr:null,handoff:null});renderPanel();go('group');break;
    case 'next':next();break;
    case 'mode':S.mode=v;S.pick=0;if(v==='gift')S.g.type='wert';next();break;
    case 'group':S.group=v;S.io=null;S.loc=null;if(v==='kgb'){S.kids=8;S.adults=1}else if(v==='familie'){S.kids=2;S.adults=2}else if(v==='schule'){S.n=25}else if(v==='firma'){S.n=12}else S.n=4;S.pick=0;next();break;
    case 'age':set('age',+v);break; case 'klasse':set('klasse',v);break;
    case 'io':set('io',v);break; case 'exp':set('exp',v);break; case 'thrill':set('thrill',v);break;
    case 'day':set('day',v);break;
    case 'dateok':if(S.date){S.day=dayOf(S.date);S.pick=0;next()}break;
    case 'dateopen':S.date=null;S.day=null;S.pick=0;next();break; case 'ort':set('loc',v);break;
    case 'n-':case 'n+':S.n=clamp(S.n+(a==='n+'?1:-1),S.group==='schule'?4:2,250);render();break;
    case 'nset':S.n=+v;render();break;
    case 'kids-':case 'kids+':S.kids=clamp(S.kids+(a==='kids+'?1:-1),1,30);render();break;
    case 'adults-':case 'adults+':S.adults=clamp(S.adults+(a==='adults+'?1:-1),1,10);render();break;
    case 'unsend':S.sent=false;render();break;
    case 'handoff':{if(S.mode==='gift')track('finder_handoff',{type:'gutschein',value:S.g.amount||0,currency:'EUR',packaging:S.g.pack||'pdf'});
      else{const c=candidates(S)[S.pick],P=pricing(c,S);track('finder_handoff',{type:'shop',recommendation:recName(c),value:P.base,currency:'EUR',tariff:P.tariff})}
      runHandoff();break;}
    case 'short':S.short=v==='1';render();break;
    case 'sh-':case 'sh+':{const f=candidates(S)[S.pick],k=f&&f.rooms?f.rooms.length:1;S.shift=clamp((S.shift||0)+(a==='sh+'?1:-1),0,k-1);render();break;}
    case 'pick':S.sent=false;S.shift=0;S.pick=+v;S.bw=0;S.drinks=0;render();if(scroller)scroller.scrollTo({top:0,behavior:'smooth'});break;
    case 'goto':go(v);break;
    case 'bw-':case 'bw+':S.bw=clamp(S.bw+(a==='bw+'?1:-1),0,3);render();break;
    case 'dr-':case 'dr+':S.drinks=clamp(S.drinks+(a==='dr+'?1:-1),0,99);render();break;
    case 'drn':S.drinks=total(S);render();break;
    case 'copy':{const t=requestText();const done=()=>{b.textContent='Kopiert';};
      try{navigator.clipboard.writeText(t).then(done,()=>{b.textContent='Kopieren nicht möglich';})}catch(err){b.textContent='Kopieren nicht möglich'}break;}
    case 'gtype':S.g.type=v;S.g.pack=null;next();break;
    case 'gpersons':S.g.persons=+v;next();break; case 'gamount':S.g.amount=+v;next();break;
    case 'gcustom':{const el=$id('gcustom'),x=Math.round(parseFloat(el.value.replace(',','.'))*100)/100;if(x>=10&&x<=500){S.g.amount=x;next()}else{el.style.borderColor='var(--warn)';el.focus()}break;}
    case 'gpack':S.g.pack=v;S.g.design=null;if(v==='pdf')S.g.exit=false;next();break;
    case 'gexit':S.g.exit=v==='1';next();break;
    case 'gdesign':S.g.design=v;render();break;
  }
});
app.addEventListener('input',e=>{const m={'rq-name':'name','rq-mail':'mail','rq-tel':'tel','rq-msg':'msg'}[e.target.id];if(m)S.req[m]=e.target.value});
app.addEventListener('submit',async e=>{
  if(e.target.id!=='reqform')return;e.preventDefault();const r=S.req;
  if(!r.name.trim()){S.reqErr='Bitte gebt einen Namen an.';render();$id('rq-name')?.focus();return}
  const mailOk=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.mail.trim()),telOk=r.tel.replace(/\D/g,'').length>=6;
  if(!mailOk&&!telOk){S.reqErr='Bitte gebt eine gültige E-Mail-Adresse oder Handynummer an, damit wir euch erreichen.';render();return}
  S.reqErr=null;const btn=e.target.querySelector('[type=submit]');btn.disabled=true;btn.textContent='Wird gesendet …';
  const res=await sendViaWebflow(requestData());
  if(res==='fail'){S.reqErr='Das hat nicht geklappt. Bitte versucht es noch einmal oder ruft uns an: 07131 / 124 06 84.';render();return}
  S.sent=res;render();if(res==='ok'){const c=candidates(S)[S.pick];track('finder_request',{recommendation:recName(c),group:S.group,persons:total(S)})}
});
app.addEventListener('change',e=>{if(e.target.id==='dpick'){const v=e.target.value;S.date=v&&v>=isoToday()?v:null;render()}});
app.addEventListener('input',e=>{if(e.target.id==='nrange'){S.n=+e.target.value;const o=$id('nval');if(o)o.textContent=S.n;app.querySelectorAll('[data-act=nset]').forEach(p=>p.classList.toggle('sel',+p.dataset.val===S.n))}});
BOOT();
}
