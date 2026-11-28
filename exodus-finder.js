/* Exodus Erlebnis-Finder 1.7.8 · Quelltext · Stand 24.11.2026 */
const EXF_CSS="\n/* Exodus CI (aus exodus-hn.de, 01.11.2026): \u00dcberschriften Amarante in Petrol #00A59E, Text bahnschrift-semicondensed\n   (300/700) in #E0E0E0, Kn\u00f6pfe in Gold #AE8F53 mit eckigen Kanten, dunkler petrolfarbener Grund.\n   Layout: Vollbild-Overlay, Frage \u2192 gro\u00dfe Bildkacheln (am Handy Wisch-Karussell) \u2192 Ergebnis mit Live-Preis */\n:host{\n  --bg:#081315; --bg-deep:#030A0C; --panel:#0D1D20; --panel-2:#12282C; --line:#1E393D;\n  --fg:#E0E0E0; --muted:#9BB0AF; --teal:#00A59E; --teal-hi:#2CC2BA; --dark:#031012;\n  --gold:#AE8F53; --gold-hi:#C4A66B; --warn:#E39A5B;\n  --accent:var(--teal); --accent-ink:var(--dark); --ok:var(--teal);\n  --display:'Amarante',Georgia,'Times New Roman',serif;\n  --body:'bahnschrift-semicondensed','Bahnschrift SemiCondensed','Bahnschrift','Barlow Semi Condensed','Arial Narrow',sans-serif;\n  color-scheme:dark;\n}\n*{box-sizing:border-box}\n.exf-root{background:radial-gradient(ellipse 90% 60% at 50% -12%,rgba(0,165,158,.14),transparent 70%),var(--bg);background-attachment:fixed;color:var(--fg);font-family:var(--body);font-weight:300;font-size:17px;line-height:1.45;-webkit-font-smoothing:antialiased;text-align:left;min-height:100%}\n.exf-root h1,.exf-root h2,.exf-root h3,.exf-root p{letter-spacing:normal;text-transform:none}\nb,strong{font-weight:700}\n.art{position:relative;overflow:hidden}\n.art img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\nbutton{font:inherit;color:inherit}\na{color:var(--teal-hi)}\n:focus-visible{outline:2px solid var(--teal-hi);outline-offset:3px}\n.shell{min-height:100%;display:flex;flex-direction:column;padding-block:18px 28px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));max-width:1320px;margin:0 auto}\n/* Kopfzeile wie die Website-Navigation: dunkel, petrolfarbene Linie */\n.bar{display:flex;align-items:center;gap:16px;padding-bottom:14px;border-bottom:1px solid var(--teal)}\n.brand{font-family:var(--body);font-weight:700;font-size:24px;letter-spacing:.22em;text-transform:uppercase;color:var(--teal)}\n.brand small{font-weight:300;font-size:15px;letter-spacing:.02em;text-transform:none;color:var(--muted);margin-left:10px}\n.proto{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);border:1px solid var(--gold);padding:3px 10px}\n.spacer{flex:1}\n.iconbtn{width:46px;height:46px;border-radius:50%;border:1px solid var(--line);background:transparent;display:grid;place-items:center;cursor:pointer;flex-shrink:0;color:var(--fg)}\n.iconbtn:hover{border-color:var(--teal);color:var(--teal)}\n.iconbtn[disabled]{opacity:.3;cursor:default}\n.progress{display:flex;gap:6px;margin-top:16px}\n.progress i{flex:1;height:3px;background:var(--line)}\n.progress i.on{background:var(--teal)}\n/* Frage: Amarante in Petrol mit der Doppellinie der Website */\n.q{margin-top:clamp(20px,4vh,44px);display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center}\n.q h1{font-family:var(--display);font-weight:400;font-size:clamp(36px,5.6vw,62px);line-height:1.05;margin:0;color:var(--teal);text-wrap:balance}\n.q h1::after{content:\"\";display:block;width:min(300px,70vw);height:11px;margin:14px auto 2px;\n  background:linear-gradient(var(--teal),var(--teal)) top center/100% 2px no-repeat,linear-gradient(var(--teal),var(--teal)) bottom center/56% 2px no-repeat}\n.q p{margin:0;color:var(--muted);font-size:19px}\n.chips-sum{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-top:6px}\n.chip{font-size:14px;padding:4px 12px;background:var(--panel);border:1px solid var(--line);color:#C9D6D5}\n.stage{margin-top:clamp(20px,4vh,40px);flex:1;display:flex;flex-direction:column}\n/* Kacheln */\n.tiles{display:grid;gap:18px;grid-template-columns:repeat(var(--cols,3),minmax(0,1fr))}\n.tile{position:relative;display:flex;flex-direction:column;text-align:left;border:1px solid var(--line);background:var(--panel);border-radius:4px;overflow:hidden;cursor:pointer;padding:0;transition:transform .15s ease,border-color .15s ease,box-shadow .15s ease}\n.tile:hover{border-color:var(--teal);transform:translateY(-2px)}\n.tile.sel{border-color:var(--teal);box-shadow:0 0 0 1px var(--teal)}\n.tile .art{height:clamp(120px,19vh,210px);display:grid;place-items:center;background:var(--tint,var(--panel-2));color:var(--ink,#00A59E);border-bottom:1px solid var(--line)}\n.tiles[style*=\"--cols:2\"] .tile .art{height:clamp(170px,30vh,320px)}\n.tile .art.em{height:clamp(120px,16vh,160px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:radial-gradient(ellipse at 50% 55%,rgba(0,165,158,.13),transparent 70%),var(--bg-deep);color:#2E4D51}\n.tile .art.em svg{width:40px}\n.emb{display:flex;align-items:flex-end;gap:10px}\n.tile .emb>span{color:#2E4D51}.tile .emb>span.on{color:var(--gold)}\n.tiles.emblem .tile .art.em{height:clamp(130px,17vh,170px)}\n.tiles.emblem .tile .art.em svg{width:46px}\n.tiles.emblem .emb.meter{height:56px}.tiles.emblem .emb.meter i{width:14px}\n.emb-and{font-family:var(--display);font-size:26px;color:var(--muted)!important;align-self:center}\n.emb.meter{gap:6px;height:48px}.emb.meter i{display:block;width:12px;background:#24423F}.emb.meter i.on{background:var(--teal)}.emb.meter.hot i.on{background:var(--gold)}\n.emb-num{font-family:var(--display);font-size:40px;line-height:1;color:var(--teal);min-width:84px;height:84px;padding:0 10px;border:2px solid var(--teal);border-radius:42px;display:grid;place-items:center}\n.emb-medal{width:76px;height:76px;border-radius:50%;background:var(--teal);color:var(--dark);display:grid;place-items:center}\n.emb-cap{font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}\n.teaser .shell{min-height:0;padding-block:8px 24px}.teaser .q{margin-top:0}\n.tile .art svg{width:clamp(56px,7vw,84px);height:auto}\n.tile .txt{padding:14px 18px 18px;display:flex;flex-direction:column;gap:4px}\n.tile b{font-family:var(--display);font-weight:400;font-size:26px;line-height:1.1;color:var(--teal)}\n.tile span{color:var(--muted);font-size:16px}\n.tile .tag{position:absolute;top:12px;left:12px;z-index:1;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;background:var(--gold);color:var(--dark)}\n.tiles.compact .tile .art{height:auto;padding:22px 0}\n.tiles.compact .tile b{font-size:30px;text-align:center}\n.tiles.compact .tile .txt{align-items:center;text-align:center}\n.dots{display:none;justify-content:center;gap:7px;margin-top:14px}\n.dots i{width:8px;height:8px;border-radius:4px;background:var(--line);transition:width .2s}\n.dots i.on{width:22px;background:var(--teal)}\n.swipehint{display:none;text-align:center;color:var(--muted);font-size:15px;margin-top:8px}\n@media (max-width:700px){\n  .tiles:not(.keepgrid){display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:12px;margin-inline:-16px;padding-inline:16px;scrollbar-width:none}\n  .tiles:not(.keepgrid)::-webkit-scrollbar{display:none}\n  .tiles:not(.keepgrid) .tile{flex:0 0 80%;scroll-snap-align:center}\n  .tiles:not(.keepgrid) .tile .art{height:42vh;max-height:330px}\n  .tiles:not(.keepgrid) ~ .dots{display:flex}\n  .tiles:not(.keepgrid) ~ .swipehint{display:block}\n  .tiles.keepgrid{grid-template-columns:repeat(2,minmax(0,1fr))}\n  .tiles.emblem{grid-template-columns:minmax(0,1fr);gap:10px}\n  .tiles.emblem .tile{flex-direction:row;align-items:stretch}\n  .tiles.emblem .tile .art.em{width:116px;height:auto;min-height:104px;flex-shrink:0;border-bottom:0;border-right:1px solid var(--line);gap:6px}\n  .tiles.emblem .tile .art.em svg{width:30px}.tiles.emblem .emb-num{min-width:60px;height:60px;font-size:30px}.tiles.emblem .emb-medal{width:56px;height:56px}\n  .tiles.emblem .tile .txt{justify-content:center}\n  .q p{font-size:17px}\n  .brand small{display:none}\n}\n/* Personenzahl */\n.sizer{max-width:640px;margin:0 auto;width:100%;display:flex;flex-direction:column;gap:22px}\n.stepper{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 18px;border-radius:4px;background:var(--panel);border:1px solid var(--line)}\n.stepper .lbl b{display:block;font-size:20px}\n.stepper .lbl span{color:var(--muted);font-size:15px}\n.stepper .ctl{display:flex;align-items:center;gap:14px}\n.stepper .val{font-weight:700;font-size:40px;min-width:2.2ch;text-align:center;color:var(--teal);font-variant-numeric:tabular-nums}\n.big{text-align:center;font-weight:700;font-size:clamp(80px,14vw,140px);line-height:1;color:var(--teal);font-variant-numeric:tabular-nums}\n.big small{display:block;font-weight:300;font-size:19px;color:var(--muted);margin-top:6px}\ninput[type=range]{width:100%;accent-color:var(--teal);height:32px}\n.quick{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}\n.pill{min-height:44px;padding:0 18px;border:1px solid var(--line);background:transparent;cursor:pointer;font-size:16px;color:var(--fg)}\n.pill:hover{border-color:var(--teal)}\n.pill .dthumb{width:46px;height:30px;object-fit:cover;margin:0 10px 0 -8px;vertical-align:middle;border-radius:2px}\n.pill:has(.dthumb){display:inline-flex;align-items:center;min-height:48px}\n.pill.sel{border-color:var(--teal);background:rgba(0,165,158,.14);color:#fff}\n/* Standard-Knopf: goldene Kontur wie \"Jetzt buchen\" auf der Website */\n.cta{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:54px;padding:0 30px;border-radius:0;background:transparent;color:var(--fg);border:2px solid var(--gold);font-weight:700;font-size:19px;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;text-decoration:none}\n.cta:hover{background:rgba(174,143,83,.14);color:#fff}\n.cta[disabled]{opacity:.6;cursor:default}\n/* Ticket-Form nur f\u00fcr den Schritt in den Shop (wie \"Ticket buchen\" in der Navigation) */\n.cta.ticket{background:var(--gold);color:var(--dark);border:0;min-height:56px;padding:0 34px;font-size:20px;\n  -webkit-mask:radial-gradient(circle 7px at 0 50%,#0000 97%,#000) left/51% 100% no-repeat,radial-gradient(circle 7px at 100% 50%,#0000 97%,#000) right/51% 100% no-repeat;\n          mask:radial-gradient(circle 7px at 0 50%,#0000 97%,#000) left/51% 100% no-repeat,radial-gradient(circle 7px at 100% 50%,#0000 97%,#000) right/51% 100% no-repeat}\n.cta.ticket:hover{background:var(--gold-hi);color:var(--dark)}\n/* Zur\u00fcckhaltender Knopf */\n.cta.ghost{border:1px solid var(--line);font-weight:300;text-transform:none;letter-spacing:0;font-size:17px}\n.cta.ghost:hover{border-color:var(--teal);background:transparent}\n.foot{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:28px;flex-wrap:wrap}\n.note{font-size:15px;color:var(--muted)}\n.inline-note{display:flex;gap:10px;align-items:flex-start;padding:12px 14px;background:rgba(174,143,83,.1);border:1px solid rgba(174,143,83,.45);font-size:16px;max-width:640px;margin:18px auto 0}\n.inline-note svg{color:var(--gold);flex-shrink:0}\n/* Ergebnis */\n.res{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:24px;align-items:start}\n@media (max-width:960px){.res{grid-template-columns:minmax(0,1fr)}}\n.eyebrow{font-size:14px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}\n.eyebrow.gold{color:var(--gold)}\n.fav{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);border-radius:4px;overflow:hidden;background:var(--panel);border:1px solid var(--line)}\n.res-eyebrow{margin-bottom:10px}\n@media (max-width:700px){.fav{grid-template-columns:minmax(0,1fr)}}\n.fav .art{min-height:260px;display:grid;place-items:center;background:var(--tint);color:var(--ink)}\n.fav .art svg{width:110px;height:auto}\n.fav .body{padding:24px;display:flex;flex-direction:column;gap:14px;min-width:0}\n.fav h2{font-family:var(--display);font-weight:400;font-size:clamp(32px,3.8vw,46px);line-height:1.05;margin:0;color:var(--teal);text-wrap:balance}\n.fav .kind{color:var(--muted);font-size:16px}\n.fav p{margin:0;color:var(--fg)}\n.why{display:flex;flex-direction:column;gap:8px;margin:0;padding:0;list-style:none}\n.why li{display:flex;gap:10px;align-items:center}\n.why svg{color:var(--teal);flex-shrink:0}\n.facts{display:flex;flex-wrap:wrap;gap:6px}\n.fact{font-size:14px;padding:4px 10px;border:1px solid var(--line);background:var(--panel-2)}\n.price{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-top:auto}\n.price b{font-size:48px;line-height:1;color:#fff;font-variant-numeric:tabular-nums}\n.price span{color:var(--muted);font-size:16px}\n.cond{font-size:15px;color:var(--gold)}\n.alts{display:flex;flex-direction:column;gap:10px;margin-top:14px}\n.alt{display:flex;gap:16px;align-items:center;padding:12px 16px 12px 12px;border-radius:4px;background:var(--panel);border:1px solid var(--line);text-align:left;cursor:pointer;color:var(--fg);width:100%}\n.alt:hover{border-color:var(--teal)}\n.alt small{display:block;color:var(--muted);font-size:14px}\n.alt b{display:block;font-family:var(--display);font-weight:400;font-size:20px;line-height:1.15;color:var(--teal)}\n.alt-txt{flex:1;min-width:0}\n.alt-price{font-weight:700;font-size:21px;color:#fff;white-space:nowrap;font-variant-numeric:tabular-nums}\n/* Raumposter: im Favoriten gro\u00df nebeneinander, in der Liste klein */\n.poster{position:relative;overflow:hidden;min-width:0;display:grid;place-items:center;aspect-ratio:5/7;background:var(--tint,var(--panel-2));color:var(--ink,#00A59E);border:1px solid var(--line)}\n.poster img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.posters-sm{display:flex;gap:6px;flex-shrink:0}\n.posters-sm .poster{width:54px}\n.fav .art .posters{display:flex;gap:12px;justify-content:center;align-items:center;width:100%;height:100%;padding:24px 20px}\n/* Poster nie beschneiden: immer ganz zeigen, bei wenig Platz kleiner */\n.fav .art .posters .poster{flex:1 1 0;min-width:0;max-width:180px;box-shadow:0 10px 26px rgba(0,0,0,.55)}\n.fav .art .posters.n1 .poster{flex:0 1 auto;width:min(100%,260px);max-width:none}\n.fav .art:has(.posters){background:radial-gradient(ellipse at 50% 40%,rgba(0,165,158,.16),transparent 70%),var(--bg-deep)}\n@media (max-width:700px){.fav .art .posters.n1 .poster{width:min(62%,220px)}.fav .art{min-height:0}}\n.fav .art{grid-template-columns:minmax(0,1fr)}\n.fav .art .poster svg,.posters-sm .poster svg{width:40%;height:auto}\n@media (max-width:560px){.posters-sm{gap:0}.posters-sm .poster{width:40px;box-shadow:-3px 0 8px rgba(0,0,0,.5)}.posters-sm .poster+.poster{margin-left:-22px}.alt{gap:12px}.alt b{font-size:18px}.alt-price{font-size:17px}}\n.side{display:flex;flex-direction:column;gap:14px}\n.box{padding:18px;border-radius:4px;background:var(--panel);border:1px solid var(--line);display:flex;flex-direction:column;gap:12px}\n.box h3{margin:0;font-size:14px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}\n.extra{display:flex;align-items:center;gap:14px}\n.extra .ico{width:48px;height:48px;border-radius:50%;background:var(--teal);color:var(--dark);display:grid;place-items:center;flex-shrink:0}\n.extra .t{flex:1;min-width:0}\n.extra .t b{display:block}\n.extra .t span{font-size:15px;color:var(--muted)}\n.badge{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#031012;background:var(--gold);padding:2px 6px;margin-left:6px;vertical-align:2px}\n.extra .t .badge{color:#031012;font-size:11px}\n.mini-step{display:flex;align-items:center;gap:8px}\n.mini-step button{width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:transparent;cursor:pointer;font-size:20px;color:var(--fg)}\n.mini-step button:hover{border-color:var(--teal)}\n.mini-step output{min-width:2ch;text-align:center;font-weight:700;font-variant-numeric:tabular-nums}\n.sum{display:flex;justify-content:space-between;align-items:baseline;gap:10px}\n.sum b{font-size:42px;color:#fff;font-variant-numeric:tabular-nums}\n.hints{display:flex;flex-direction:column;gap:8px;margin:0;padding:0;list-style:none;font-size:15px;color:#CFD9D8}\n.hints li{display:flex;gap:8px}\n.hints li::before{content:\"\";width:6px;height:6px;background:var(--gold);margin-top:8px;flex-shrink:0;transform:rotate(45deg)}\n.contact{font-size:16px}\n.contact .sel{user-select:all;font-weight:700}\n.loc{font-size:16px;color:#CFD9D8}\n.loc b{color:var(--fg)}\n.empty{max-width:560px;margin:40px auto;text-align:center;display:flex;flex-direction:column;gap:14px;align-items:center}\n.launch{flex:1;display:grid;place-items:center;text-align:center}\n.launch h1{font-family:var(--display);font-weight:400;font-size:clamp(44px,7vw,80px);margin:0 0 10px;line-height:1;color:var(--teal)}\n.launch p{color:var(--muted);margin:0 0 26px;font-size:19px}\n@media (max-width:960px){.stickybar{position:sticky;bottom:0;margin-inline:-16px;padding:12px 16px calc(12px + env(safe-area-inset-bottom,0px));background:var(--bg-deep);border:0;border-top:1px solid var(--teal);border-radius:0;z-index:5}}\n.avail{display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:10px 12px;border:1px solid var(--teal);background:rgba(0,165,158,.08);font-size:15px}\n.avail span{margin-right:4px}\n.avail .slot{padding:2px 8px;background:var(--teal);color:var(--dark);font-weight:700;font-variant-numeric:tabular-nums}\n.avail small{flex-basis:100%;color:var(--muted)}\n.avail.warn{border-color:var(--warn);background:rgba(227,154,91,.08);color:#F1C9A6}\n.avail.phone{border-color:var(--gold);background:rgba(174,143,83,.1)}\n.avail.phone .slot{background:var(--gold)}\n.alt em.tel{font-style:normal;color:var(--gold-hi)}\n.alt em.bad{font-style:normal;color:var(--warn)}\n.datein{min-height:46px;border:1px solid var(--line);background:var(--bg-deep);color:var(--fg);font:inherit;font-weight:700;padding:8px 10px;border-radius:2px;color-scheme:dark}\n.datein:focus{border-color:var(--teal);outline:none}\n.reqform{display:flex;flex-direction:column;gap:8px}\n.reqform label{font-size:15px;font-weight:700;margin-top:4px}\n.reqform .opt{font-weight:300;color:var(--muted)}\n.reqform input,.reqform textarea{width:100%;min-height:46px;border-radius:2px;border:1px solid var(--line);background:var(--bg-deep);color:var(--fg);font:inherit;padding:10px 12px}\n.reqform input:focus,.reqform textarea:focus{border-color:var(--teal);outline:none}\n.reqform textarea{resize:vertical}\n.err{color:var(--warn);font-size:15px}\n.who{font-size:18px;font-weight:700;color:var(--fg)}\n.price .who{font-size:18px;color:var(--fg)}\n#handoff{position:fixed;right:max(16px,env(safe-area-inset-right,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));width:min(380px,calc(100vw - 32px));max-height:70vh;overflow:auto;z-index:2147483000;background:var(--panel);color:var(--fg);border:1px solid var(--teal);border-radius:4px;box-shadow:0 18px 50px rgba(0,0,0,.55);padding:18px;font-family:var(--body);font-weight:300;font-size:16px}\n#handoff .hd-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px}\n#handoff h3{margin:0;font-family:var(--display);font-weight:400;font-size:26px;color:var(--teal)}\n#handoff .hd-note{margin:0 0 12px;color:var(--muted);font-size:15px}\n#handoff .hd-note.warn{color:var(--warn)}\n#handoff ol{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:10px}\n#handoff li{display:flex;gap:10px;align-items:flex-start}\n#handoff .st{width:26px;height:26px;border-radius:13px;display:grid;place-items:center;font-size:13px;font-weight:700;background:var(--panel-2);border:1px solid var(--line);flex-shrink:0}\n#handoff .st.done,#handoff .st.auto{background:var(--teal);border-color:var(--teal);color:var(--dark)}\n#handoff .st.fail{background:var(--warn);border-color:var(--warn);color:var(--dark)}\n.vat{font-size:15px;font-weight:300;color:var(--muted)}\n.captcha{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:3px;background:#F9F9F9;color:#222;font-size:14px;margin-top:6px;max-width:300px}\n.captcha .cbox{width:24px;height:24px;border:2px solid #C1C1C1;border-radius:3px;background:#fff}\n.captcha small{margin-left:auto;font-size:10px;color:#555}\n.sent{display:flex;flex-direction:column;gap:8px}\n.sent p{margin:0;color:#CFD9D8}\n.sent summary{cursor:pointer;color:var(--teal-hi)}\n.sent pre{white-space:pre-wrap;font:14px/1.5 var(--body);background:var(--bg-deep);padding:10px;margin:8px 0 0}\n@media (prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}\n/* Gutschein-Ergebnis: Bild vollst\u00e4ndig zeigen (nie beschneiden) */\n.fav.gift .art.gift-art{display:flex;align-items:center;justify-content:center;padding:28px 24px;background:radial-gradient(ellipse at 50% 45%,rgba(0,165,158,.16),transparent 70%),var(--bg-deep)}\n.fav.gift .art img.gcard{position:static;inset:auto;width:100%;height:auto;max-height:420px;object-fit:contain;box-shadow:0 12px 30px rgba(0,0,0,.6);border-radius:2px}\n@media (max-width:700px){.fav.gift .art.gift-art{padding:20px 18px}.fav.gift .art img.gcard{max-height:260px;width:auto;max-width:100%}}\n.designs{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px}\n.dsg{display:flex;flex-direction:column;gap:0;padding:0;border:1px solid var(--line);background:transparent;color:var(--fg);cursor:pointer;text-align:left;font:inherit;border-radius:2px;overflow:hidden}\n.dsg:hover{border-color:var(--teal)}\n.dsg.sel{border-color:var(--teal);background:rgba(0,165,158,.14);color:#fff;box-shadow:0 0 0 1px var(--teal)}\n.dsg .dimg{display:block;aspect-ratio:16/10;background:var(--bg-deep)}\n.dsg .dimg img{width:100%;height:100%;object-fit:contain;display:block}\n.dsg .dname{padding:8px 10px;font-size:14px;line-height:1.25}\n.gthumb{width:76px;aspect-ratio:16/10;flex-shrink:0;display:grid;place-items:center;background:var(--bg-deep);border:1px solid var(--line);color:var(--teal);overflow:hidden}\n.gthumb img{width:100%;height:100%;object-fit:contain;display:block}\n@media (max-width:560px){.gthumb{width:62px}.designs{grid-template-columns:repeat(2,minmax(0,1fr))}}\n.extra .ico.pic{background:var(--bg-deep);overflow:hidden;border-radius:4px}\n.extra .ico.pic img{width:100%;height:100%;object-fit:cover}\n.pill.toggle{display:inline-flex;align-items:center;gap:6px;flex-shrink:0;min-height:40px;padding:0 14px}\n.pill.toggle.sel{border-color:var(--gold);background:rgba(174,143,83,.16);color:#fff}\n.fav.gift{grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start}\n.fav.gift .art.gift-art{align-self:stretch;align-items:center}\n@media (max-width:700px){.fav.gift{grid-template-columns:minmax(0,1fr)}.fav.gift .art.gift-art{padding-top:20px;justify-content:center}}\n@media (max-width:440px){.proto{display:none}}\n.dsg .dname{hyphens:manual;overflow-wrap:break-word}\n/* Betragsauswahl: angedeutetes Ticket (nur Umriss in hellem T\u00fcrkis mit Betrag) */\n.tile .art.vart{height:auto;aspect-ratio:2/1;padding:0;display:flex;align-items:center;justify-content:center;container-type:inline-size;\n  background:radial-gradient(ellipse at 50% 50%,rgba(0,165,158,.14),transparent 70%),var(--bg-deep)}\n.vwrap{position:relative;width:70cqw;aspect-ratio:2/1;color:#5FD3CC}\n.tile .art .vwrap svg.vline{position:absolute;inset:0;width:100%;height:100%}\n.vwrap .vamt{position:absolute;left:0;top:0;bottom:0;width:75%;display:flex;align-items:center;justify-content:center;font-family:var(--body);font-weight:700;font-size:10.5cqw;letter-spacing:.01em;color:#5FD3CC;white-space:nowrap;font-variant-numeric:tabular-nums}\n.tile:hover .vwrap,.tile.sel .vwrap{color:#8AE6E0}.tile.sel .vwrap .vamt,.tile:hover .vwrap .vamt{color:#8AE6E0}\n.tiles.vouchers .tile b{font-size:22px;line-height:1.15}\n.tiles.vouchers .tile .txt{align-items:center;text-align:center}\n@media (max-width:700px){.tiles.vouchers{grid-template-columns:repeat(2,minmax(0,1fr))!important}.tiles.vouchers .tile b{font-size:18px}.tiles.vouchers .tile .txt span{font-size:13px}}\n/* Bild-Kacheln: Bilder (3:2) vollst\u00e4ndig zeigen, keine abgeschnittenen K\u00f6pfe */\n.tile .art.photo{height:auto!important;max-height:none!important;aspect-ratio:3/2}\n@media (min-width:701px){\n  .tiles:has(.art.photo){max-width:1080px;margin-inline:auto;width:100%}\n  .tiles[style*=\"--cols:2\"]:has(.art.photo){max-width:860px}\n}\n@media (min-width:701px){\n  .tiles:has(.art.photo):has(.tile:nth-child(4)){max-width:max(900px,min(1080px,calc((100vh - 330px) * 1.9)))}\n  .tiles:has(.art.photo) .tile .art.em{height:auto!important;aspect-ratio:3/2}\n}\n/* Embleme neben Bild-Kacheln doppelt so gro\u00df */\n.tiles:has(.art.photo) .tile .art.em{gap:16px}\n.tiles:has(.art.photo) .tile .art.em svg{width:84px}\n.tiles:has(.art.photo) .tile .art.em .emb{gap:18px;align-items:center}\n.tiles:has(.art.photo) .tile .art.em .emb-and{font-size:30px}\n.tiles:has(.art.photo) .tile .art.em .emb-cap{font-size:17px}\n@media (max-width:700px){.tiles:has(.art.photo) .tile .art.em svg{width:72px}.tiles:has(.art.photo) .tile .art.em .emb-cap{font-size:15px}}\n.tiles:has(.art.photo) .tile .art.em{height:auto!important;max-height:none!important;min-height:0!important;aspect-ratio:3/2}\n/* Schl\u00f6sser bei \"Schon mal gespielt?\" gr\u00f6\u00dfer */\n.tiles.emblem .tile .art.em:has(.locks){height:clamp(170px,24vh,230px);gap:14px}\n.tiles.emblem .tile .art.em .locks{gap:14px}\n.tiles.emblem .tile .art.em .locks svg{width:72px}\n.tiles.emblem .tile .art.em:has(.locks) .emb-cap{font-size:15px}\n@media (max-width:700px){\n  .tiles.emblem .tile .art.em:has(.locks){width:150px;height:auto;min-height:120px;gap:8px}\n  .tiles.emblem .tile .art.em .locks{gap:6px}\n  .tiles.emblem .tile .art.em .locks svg{width:40px}\n  .tiles.emblem .tile .art.em:has(.locks) .emb-cap{font-size:12px}\n}\n@media (max-width:700px){.tiles.emblem .tile .art.em:has(.locks) .emb-cap{font-size:11px;letter-spacing:.08em}}\n/* Ergebnis: Plakate breiter (ohne Verzerren/Beschneiden) */\n.fav:not(.gift){grid-template-columns:minmax(0,1fr) minmax(0,1fr)}\n.fav .art .posters{padding:18px 16px;gap:10px}\n.fav .art .posters .poster{max-width:none}\n.fav .art .posters.n1 .poster{width:100%;max-width:440px}\n@media (max-width:700px){.fav:not(.gift){grid-template-columns:minmax(0,1fr)}.fav .art .posters.n1 .poster{width:min(78%,300px)}.fav .art .posters{padding:16px 12px}}\n/* Spannungsbalken, Klassenstufe und Medaillen gr\u00f6\u00dfer (wie die Schl\u00f6sser) */\n.tiles.emblem .tile .art.em{height:clamp(170px,24vh,230px);gap:14px}\n.tiles.emblem .tile .art.em .emb-cap{font-size:15px}\n.tile .art.em .emb.meter{height:84px;gap:8px}.tile .art.em .emb.meter i{width:20px}\n.tile .art.em .emb-num{min-width:120px;height:120px;border-radius:60px;font-size:58px}\n.tile .art.em .emb-medal{width:112px;height:112px}\n.tile .art.em .emb-medal svg{width:54px}\n.tile .art.em .emb-cap{font-size:15px}\n@media (max-width:700px){\n  .tiles.emblem .tile .art.em{width:150px;height:auto;min-height:120px;gap:8px}\n  .tiles.emblem .tile .art.em .emb-cap{font-size:11px;letter-spacing:.08em}\n  .tiles.emblem .tile .art.em .emb.meter{height:58px;gap:5px}.tiles.emblem .tile .art.em .emb.meter i{width:14px}\n  .tiles.emblem .tile .art.em .emb-num{min-width:78px;height:78px;font-size:38px}\n  .tiles.emblem .tile .art.em .emb-medal{width:74px;height:74px}\n  .tiles.emblem .tile .art.em .emb-medal svg{width:36px}\n  .tiles.emblem .tile .art.em .emb-cap{font-size:11px}\n}\n.loc a.plink{color:var(--fg);text-decoration:underline;text-decoration-color:var(--teal);text-underline-offset:3px}\n.loc a.plink:hover{color:var(--teal)}\n/* 4 R\u00e4ume als Kombi: Plakate 2 \u00d7 2 statt in einer Reihe */\n@media (min-width:701px){.fav .art .posters.n4{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));justify-items:center;align-content:center;gap:12px}\n  .fav .art .posters.n4 .poster{width:100%;max-width:220px}}\n\n/* Eingebettet in die Website: transparenter Hintergrund, keine Vollbildh\u00f6he */\n.exf-root.embedded{background:transparent;min-height:0}\n.embedded .shell{min-height:0;padding-block:8px 32px}\n.embedded .bar{border-bottom:0;padding-bottom:4px}\n.embedded .q{margin-top:8px}\n.pill.restart{min-height:40px;padding:0 16px}\n/* Uhrzeit im Finder w\u00e4hlen */\n.avail.pickable{gap:8px}\n.avail.pickable>span{flex-basis:100%}\n.avail .slot.pick{border:1px solid var(--teal);background:transparent;color:var(--fg);font:inherit;font-weight:700;font-size:16px;min-height:40px;min-width:68px;padding:0 12px;cursor:pointer;font-variant-numeric:tabular-nums}\n.avail .slot.pick:hover{background:rgba(0,165,158,.18)}\n.avail .slot.pick.sel{background:var(--teal);color:var(--dark)}\n.avail .slotrow{flex-basis:100%;display:flex;flex-wrap:wrap;gap:6px;align-items:center}\n.avail .slotrow em{font-style:normal;min-width:82px;color:var(--muted)}\n.avail .slotbest{min-height:38px;font-size:14px}\n/* Spickzettel: auf dem Handy als schmale Leiste unten, aufklappbar */\n#handoff .hd-head .spacer{flex:1}\n#handoff .iconbtn.sm{width:36px;height:36px}\n#handoff.mini{padding:10px 12px}\n#handoff.mini .hd-head{margin:0}\n#handoff .hd-mini{flex:1;min-width:0;text-align:left;background:none;border:0;padding:0;cursor:pointer;color:var(--fg);display:flex;flex-direction:column;gap:2px}\n#handoff .hd-mini b{font-family:var(--display);font-weight:400;font-size:19px;color:var(--teal)}\n#handoff .hd-mini span{font-size:14px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n@media (max-width:700px){#handoff{right:0;left:0;bottom:0;width:auto;border-radius:0;border-width:1px 0 0;max-height:55vh;padding-bottom:calc(14px + env(safe-area-inset-bottom,0px))}}\n#handoff{min-height:0;background-attachment:scroll}\n.note.school-time{display:flex;gap:10px;align-items:flex-start;text-align:left;border:1px solid var(--gold);padding:12px 14px;margin:6px 0 12px;color:var(--fg)}\n.note.school-time svg{flex:none;color:var(--gold);margin-top:2px}\n";

/* ===================== SPRACHE =====================
   Deutsch oder Englisch, je nach Sprache der Seite (<html lang="en"> auf /en/…) oder fest mit window.EXODUS_FINDER={lang:'en'}.
   Texte stehen als tr('Deutsch','English') direkt im Code. Interne Schlüssel (Tarife, Shop-Produkte) bleiben deutsch. */
const LANG=(()=>{try{const c=(typeof window!=='undefined'&&window.EXODUS_FINDER&&window.EXODUS_FINDER.lang)||(typeof document!=='undefined'&&document.documentElement.lang)||'de';return /^en/i.test(c)?'en':'de'}catch(e){return 'de'}})();
const EN=LANG==='en';
const tr=(de,en)=>EN?en:de;
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
  why:['Ideal für Einsteiger und Kinder','Fantasy statt Grusel','Perfekt für Familien und Geburtstage']},
 /* Excaliburs Erben: nur an der Burg Stettenfels, in Kooperation mit der Burg, gebucht wird auf der eigenen Unterseite */
 {id:'OT4',name:'Excaliburs Erben',short:'Excaliburs Erben',kind:'out',age:12,diff:2,grusel:1,external:'/excaliburs-erben',
  fit:{freunde:3,familie:3,kgb:2,schule:0,firma:3,jga:3},icon:'trophy',tint:'#1C1A12',ink:'#AE8F53',
  text:'König Artus ist tot, im Reich herrscht Chaos. Excalibur wartet im Stein auf seinen wahren Erben. Beweist Mut, Köpfchen und Teamgeist und findet den rechtmäßigen Nachfolger.',
  why:['In Kooperation mit der Burg Stettenfels','Für Kleingruppen von 2 bis 6 Spielern','Ohne Zeitdruck, Pause jederzeit möglich']}
];
const PAIRS=[['ER1','ER4'],['ER2','ER3']];
/* Links für Parken/Einkehr: eigene Website eintragen; ohne Eintrag öffnet der Name Google Maps (Route, Öffnungszeiten, Website) */
const PLACE_LINKS={'Pier 58':'','Burgerheart':'','Lehners Wirtshaus':'','Parkhaus Experimenta':'',
  'Biergarten Burg Stettenfels':'https://burg-stettenfels.de/de/index.php','Heuchelberger Warte':''};
const PLACE_TOWN={'Pier 58':'Heilbronn','Burgerheart':'Heilbronn','Lehners Wirtshaus':'Heilbronn','Parkhaus Experimenta':'Heilbronn','Heuchelberger Warte':'Leingarten'};
const LOCS=[
 {id:'hn',name:'Heilbronn Innenstadt',tours:['OT1','OT2','OT3'],meet:n=>n<=12?'Kaiserstraße 9':'Rathausplatz Heilbronn',park:'Parkhaus Experimenta',eat:'Innenstadt, z. B. Pier 58, Burgerheart, Lehners Wirtshaus'},
 {id:'sin',name:'Sinsheim',tours:['OT1','OT2','OT3'],meet:()=>'Parkplatz Ziegelgasse 10',open:'all'},
 {id:'nsu',name:'Neckarsulm',tours:['OT1','OT2','OT3'],meet:()=>'Eingang Stadtpark am ZOB',open:'all'},
 {id:'sha',name:'Schwäbisch Hall',tours:['OT1','OT2','OT3'],meet:()=>'Qmediko-Zentrum, Weilerwiese 5',open:'all'},
 {id:'stf',name:'Burg Stettenfels',tours:['OT4'],meet:()=>'Schirmbar im Biergarten der Burg',park:'Kostenlose Parkplätze an der Burg',eat:'Biergarten Burg Stettenfels',open:'stf'},
 {id:'hw',name:'Heuchelberger Warte',tours:['OT1','OT2'],meet:()=>'Parkplatz Heuchelberger Warte',eat:'Heuchelberger Warte',open:'firma'}
];
const GROUPS={freunde:'Freunde & Kleingruppe',familie:'Familie mit Kindern',kgb:'Kindergeburtstag',schule:'Schulklasse',firma:'Firma & Team',jga:'JGA & Geburtstag'};
const eur=v=>{const x=(Math.round(v*100)/100).toLocaleString(EN?'en-GB':'de-DE',{minimumFractionDigits:v%1?2:0,maximumFractionDigits:2});return EN?'€'+x:x+' €'};
/* Englische Texte für Räume, Touren, Gruppen und Orte */
if(EN){
  const X={
    ER1:{name:'Captain Flynn and the Treasure of the Poseidon',short:'Captain Flynn',text:'You are Captain Flynn’s crew, boarding the lost ship that carries the legendary treasure of the Poseidon.',why:['Multi-award-winning room','Ideal for 5 people','For ambitious beginners']},
    ER2:{name:'End Times – The Battle for Survival',short:'End Times',text:'A nuclear explosion darkens the sky. You flee into an old bunker, but even that does not seem safe.',why:['Award-winning room','Two difficulty levels','Atmospheric, no horror']},
    ER3:{name:'Leonardo da Vinci and the Elixir of Power',short:'Leonardo da Vinci',text:'Da Vinci’s tragic death brings his heirs together. But the Inquisition wants the Elixir of Power for itself.',why:['Beginner-friendly','Great for families','No crawling']},
    ER4:{name:'The Zombie Lab',short:'Zombie Lab',text:'Only a few are infected, but whoever is will turn. Your only hope is to find the antidote.',why:['Old-school escape room','Beginner-friendly','No crawling']},
    OT1:{text:'A corporation wants to control people’s minds with a virus. As agents of W.I.S.E., you save Heilbronn.',why:['Agent mission right across town','Medium difficulty, good for mixed groups','From 3 to 250 players']},
    OT2:{text:'Hackers have taken down the power grid and the city is running on emergency power. Stop them before the big blackout.',why:['Our trickiest outdoor tour','For groups with puzzle experience','From 3 to 250 players']},
    OT4:{text:'King Arthur is dead and the realm is in chaos. Excalibur waits in the stone for its true heir. Prove your courage, wit and teamwork and find the rightful successor.',why:['In cooperation with Burg Stettenfels','For small groups of 2 to 6 players','No time pressure, pause any time']},
    OT3:{name:'The Magic Portal',short:'Magic Portal',text:'A spell has struck down the portal guardian. Find the magic crystals and close the portal again.',why:['Ideal for beginners and kids','Fantasy, not horror','Perfect for families and birthdays']}};
  [...ROOMS,...TOURS].forEach(x=>Object.assign(x,X[x.id]||{}));
  Object.assign(GROUPS,{freunde:'Friends & small group',familie:'Family with kids',kgb:'Kids’ birthday',schule:'School class',firma:'Company & team',jga:'Stag/hen party & birthday'});
  const LX={hn:{name:'Heilbronn city centre',meet:n=>n<=12?'Kaiserstraße 9':'Rathausplatz (town hall square), Heilbronn',eat:'city centre, e.g. Pier 58, Burgerheart, Lehners Wirtshaus'},
    sin:{meet:()=>'Car park Ziegelgasse 10'},nsu:{meet:()=>'Stadtpark entrance at the bus station (ZOB)'},sha:{meet:()=>'Qmediko centre, Weilerwiese 5'},
    stf:{meet:()=>'Schirmbar in the castle beer garden',park:'Free parking at the castle'},hw:{meet:()=>'Heuchelberger Warte car park'}};
  LOCS.forEach(l=>Object.assign(l,LX[l.id]||{}));
}
/* Tarifnamen bleiben intern deutsch (so heißen sie im Shop), angezeigt werden sie übersetzt */
const TARIFF_EN={'Standardpreis':'Standard price','Schulklassentarif':'School class rate','Firmen-Sonderöffnung Mo–Mi':'Company special opening Mon–Wed','Firmentarif außerhalb Heilbronn':'Company rate outside Heilbronn',
  'Großgruppe ab 20 Personen':'Large group rate (20+)','Familientarif':'Family rate','Kindergeburtstagstarif':'Kids’ birthday rate','Preis pro Gruppe':'Price per group'};
const tn=t=>EN&&TARIFF_EN[t]||t;

/* ===================== LOGIK ===================== */
const S={mode:null,group:null,n:4,adults:2,kids:3,age:null,klasse:null,io:null,exp:null,thrill:null,day:null,loc:null,pick:0,bw:0,drinks:0,req:{name:'',mail:'',tel:'',msg:''},sent:false,reqErr:null,shift:0,short:false,slot:null,
  g:{type:null,persons:2,amount:null,pack:null,design:null,exit:false}};

const family=s=>s.group==='familie'||s.group==='kgb';
function total(s){return family(s)?s.adults+s.kids:s.n}
function age(s){ // jüngstes Kind (Familie/KGB) bzw. Schätzung aus Klassenstufe
  if(family(s)) return s.age==null?16:s.age;
  if(s.group==='schule') return s.klasse==='5-7'?11:s.klasse==='8'?13:s.klasse==='9'?15:16;
  return 18;
}
function tourOK(t,s){
  const g=s.group,a=age(s);
  if(!t.fit[g]) return false;
  if(t.id==='OT4') return g!=='schule'&&total(s)<=48&&(!family(s)||age(s)>=12);
  if(t.id==='OT1'){
    if(g==='familie') return s.adults>=2||a>=16;          // ab 2 Erwachsenen auch mit Jüngeren
    if(g==='kgb') return a>=14;                            // Annahme: ältere Geburtstagskinder
    if(g==='schule') return s.klasse!=='5-7';              // ab Klasse 8 (vereinfachte Route)
  }
  if(t.id==='OT2'&&g==='schule') return ['9','10+'].includes(s.klasse);
  return true;
}
function roomOK(r,s){
  const g=s.group,a=age(s);
  if(!r.fit[g]) return false;
  if(g==='kgb'&&a<r.age) return false;                    // Mindestalter gilt für Kindergeburtstage
  if(g==='familie'&&a<13&&r.id!=='ER3') return false;     // Regel 3: unter 13 nur Leonardo
  if(g==='schule'&&!['9','10+'].includes(s.klasse)) return false;
  return true;
}
function split(n,k){const b=Math.floor(n/k),r=n%k;return Array.from({length:k},(_,i)=>b+(i<r?1:0))}
function combos(arr,k){if(k===0)return[[]];if(arr.length<k)return[];const[h,...t]=arr;return[...combos(t,k-1).map(c=>[h,...c]),...combos(t,k)]}
/* Schulklassen: 3–4 Räume unter der Woche brauchen mehr Vorlauf (Spielleiter), bis 2 Räume oder am Wochenende reichen 5 Stunden */
const schoolWeekend=s=>!!s.date&&['sa','so'].includes(dayOf(s.date));
/* Endzeit: Anfänger-Variante für Erstspieler und immer für Schulklassen */
const endzeitEasy=s=>s.group==='schule'||s.exp==='first';
/* Burg Stettenfels und Heuchelberger Warte: nur Short-Tour */
const shortOnly=s=>['stf','hw'].includes(s.loc); // an der Burg gibt es nur Excaliburs Erben (ohne Short-Tour)
const isShort=s=>!!s.short||shortOnly(s);
function indoorOptions(s){
  const n=total(s),g=s.group;
  if(n<2) return [];
  if(s.day==='momi'&&g!=='firma'&&g!=='schule') return []; // Escape Rooms für Privatgruppen nur Do–So
  if(g==='kgb'&&!(s.kids<=5&&s.adults<=1)) return [];     // Regel 1: max 5 Kinder + 1 Erwachsener
  if(g==='schule'&&(!['9','10+'].includes(s.klasse)||n<4)) return [];
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
    if(l.open==='stf') return g!=='schule'&&n>=2&&n<=48&&(!family(s)||age(s)>=12);
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
/* Nervenkitzel nur fragen, wenn "entspannt" und "spannend" zu einer anderen Empfehlung führen */
let _thrKey=null,_thrVal=true;
function thrillMatters(s){const key=JSON.stringify([s.group,s.n,s.adults,s.kids,s.age,s.klasse,s.io,s.exp,s.date,s.day,s.loc]);
  if(key===_thrKey)return _thrVal;
  const fav=t=>{const c=candidates(Object.assign({},s,{thrill:t,pick:0}))[0];return c?(c.rooms?c.rooms.map(r=>r.id).join('+'):c.tour.id+'@'+(c.loc||'')):''};
  _thrKey=key;_thrVal=fav('calm')!==fav('spicy');return _thrVal}
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
    if(['9','10+'].includes(s.klasse)&&(x.id==='OT1'||x.id==='OT2')) sc+=2;
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
function fmtDate(iso){return EN?dateObj(iso).toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short',year:'numeric'}).replace(/,/g,''):dateObj(iso).toLocaleDateString('de-DE',{weekday:'short',day:'2-digit',month:'2-digit',year:'numeric'})}
const daysUntil=iso=>Math.round((dateObj(iso)-dateObj(isoToday()))/864e5);
const isWinter=iso=>!iso||[10,11,0,1].includes(dateObj(iso).getMonth());
/* Freie Termine (aus dem Shop gelesen, s.avail = {date, missing, map:{Produktname:[{t,state}]}}) */
const toMin=t=>+t.slice(0,2)*60+ +t.slice(3,5);
function annotateAvail(c,s){const A=s.avail;if(!A||A.date!==s.date||A.missing)return;
  if(c.type==='in'&&(s.group==='firma'||s.group==='schule')&&s.day==='momi')return;
  if(c.type==='out'&&(s.loc||'hn')!=='hn')return;
  if(s.group==='schule')return; // Schulklassen: Wunschtermin und Uhrzeit per Anfrage, auch vormittags außerhalb der Standard-Startzeiten // der Shop zeigt nur die Startzeiten in Heilbronn // Sonderöffnung: Termin wird persönlich abgestimmt
  const items=c.type==='out'?[c.tour]:c.rooms,get=x=>A.map[QB[x.id]]||[];
  if(items.some(x=>A.map[QB[x.id]]==null))return; // Karte im Shop nicht (rechtzeitig) gefunden: lieber nichts anzeigen als "ausgebucht"
  const free=items.map(x=>get(x).filter(z=>z.state==='free').map(z=>z.t)),phone=items.map(x=>get(x).filter(z=>z.state==='phone').map(z=>z.t));
  // "use": online freie Zeiten, sonst die nur telefonisch buchbaren
  const use=items.map((x,i)=>free[i].length?free[i]:phone[i]);
  c.av={lists:free,phone,use,full:use.some(l=>!l.length)};
  c.av.phoneOnly=!c.av.full&&free.some(l=>!l.length);
  if(items.length>1&&!c.av.full){let best=null;(function rec(i,acc){if(i===use.length){const m=acc.map(toMin),sp=Math.max(...m)-Math.min(...m);if(!best||sp<best.span)best={span:sp,times:acc.slice()};return}
    for(const t of use[i]){acc.push(t);rec(i+1,acc);acc.pop()}})(0,[]);c.av.best=best}
}
const stdOut=n=>n<=3?90:90+30*(n-3);
/* Schulklassen draußen: bis einschließlich Klasse 9 15 € pro Schüler, ab Klasse 10 20 € (drinnen 28 €) */
/* Ab 1.1.2027 kosten Outdoor-Touren für Schulklassen bis Klasse 9 17 € statt 15 € (maßgeblich ist der Spieltag, ohne Datum der heutige Tag) */
function schoolOut(r,n,s){const y27=(s.date||isoToday())>='2027-01-01',p=s.klasse==='10+'?20:(y27?17:15);r.base=p*n;r.tariff='Schulklassentarif';
  r.lines.push(tr(`${n} Schüler × ${p} €`,`${n} pupils × €${p}`));
  if(s.klasse!=='10+'&&!s.date&&!y27)r.cond=tr('Gilt für Termine 2026. Ab 2027 kostet die Tour 17 € pro Schüler.','Applies to dates in 2026. From 2027 the tour costs €17 per pupil.')}
function pricing(c,s){
  const n=total(s),g=s.group,day=s.day,loc=s.loc||'hn';
  const r={base:0,lines:[],tariff:'Standardpreis',cond:null,request:false,notes:[]};
  if(c.type==='in'){
    const k=c.rooms.length,sevens=c.sizes.filter(z=>z>6).length;
    if(g==='schule'){r.base=28*n;r.tariff='Schulklassentarif';r.lines.push(tr(`${n} Schüler × 28 €`,`${n} pupils × €28`));r.request=true}
    else if(g==='firma'&&day==='momi'){r.base=k*192+29.5+sevens*32;r.tariff='Firmen-Sonderöffnung Mo–Mi';
      r.lines.push(tr(`${k} × 192 € pro Raum`,`${k} × €192 per room`),tr('+ 29,50 € Sonderöffnung (einmalig)','+ €29.50 special opening (one-off)'));if(sevens)r.lines.push(tr(`+ ${sevens} × 32 € für die 7. Person`,`+ ${sevens} × €32 for the 7th person`))}
    else{r.base=c.sizes.reduce((a,z)=>a+STAFFEL[Math.max(2,z)],0);if(k>1)r.lines.push(c.sizes.map(z=>`${z} ${tr('P.','p.')} = ${eur(STAFFEL[z])}`).join(' · '))}
    if(c.winter){r.request=true;r.notes.push(tr('Über 24 Personen drinnen geht nur als Teamevent von November bis Februar, mit je 7 Personen pro Raum. Für das Spielerlebnis empfehlen wir das nicht.','More than 24 people indoors is only possible as a team event from November to February, with 7 people per room. We don’t recommend it for the game experience.'))}
    if(g==='firma'&&k>1&&['dofr','so','open'].includes(day)){r.shiftable=true;const sh=Math.min(s.shift||0,k-1);if(sh){r.shift=sh;r.request=true}}
    if(c.compact){r.request=true;r.notes.unshift(tr(`Sonderlösung für Firmen: Eine Gruppe spielt zu siebt in einem Raum. So braucht ihr ${k===1?'einen Raum':k+' Räume'} statt ${k+1} und spart rund ${eur(192-32)}. Zu siebt wird es im Raum etwas enger.`,`Special option for companies: one group plays with seven people in a room. That way you need ${k===1?'one room':k+' rooms'} instead of ${k+1} and save about ${eur(192-32)}. With seven it gets a little tighter in the room.`))}
    if(g==='firma'&&day==='momi') r.request=true; // Schließtag: Tarif trägt das Team nach der Anfrage von Hand ein
    if(c.seven) r.notes.push(tr('Ihr wollt alle in einen Raum? In Ausnahmen geht eine 7. Person für 32 € Aufpreis. Wir empfehlen zwei Räume.','All in one room? In exceptional cases a 7th person can join for an extra €32. We recommend two rooms.'));
    const pair=k===2&&PAIRS.some(p=>p.every(id=>c.rooms.some(x=>x.id===id)));
    if(k>=3) r.notes.push(g==='firma'&&day==='momi'?tr('Bei der Sonderöffnung legen wir die Startzeiten für euch fest: zwei Wellen mit etwa 15 Minuten Abstand.','For the special opening we set the start times for you: two waves about 15 minutes apart.')
      :r.shiftable?(r.shift?tr('Mit Slot-Verschiebung startet ihr in zwei Wellen mit nur etwa 15 Minuten Abstand. Im Warteraum ist Platz für 12 Personen.','With slot shifting you start in two waves only about 15 minutes apart. The waiting room holds 12 people.')
        :tr('Ohne Slot-Verschiebung starten die Räume zu ihren festen Startzeiten, teils 30 bis 45 Minuten versetzt. Mit Verschiebung sind es nur etwa 15 Minuten.','Without slot shifting the rooms start at their fixed times, sometimes 30 to 45 minutes apart. With shifting it is only about 15 minutes.'))
      :tr('Die Räume starten zu ihren festen Startzeiten, teils 30 Minuten oder mehr versetzt. Im Warteraum ist Platz für 12 Personen.','The rooms start at their fixed times, sometimes 30 minutes or more apart. The waiting room holds 12 people.'));
    else if(k===2) r.notes.push(pair||(g==='firma'&&day==='momi')?tr('Beide Räume starten gemeinsam, die Startzeiten liegen direkt beieinander.','Both rooms start together, the start times are right next to each other.')
      :r.shiftable?tr('Diese beiden Räume starten zu unterschiedlichen Zeiten. Mit einer Slot-Verschiebung startet ihr gemeinsam.','These two rooms start at different times. With one slot shift you start together.')
      :tr('Diese beiden Räume starten zu unterschiedlichen Zeiten. Gemeinsam starten Kapitän Flynn + Zombielabor oder Endzeit + Leonardo.','These two rooms start at different times. Captain Flynn + Zombie Lab or End Times + Leonardo start together.'));
    if(day==='momi'&&g!=='firma'&&g!=='schule') r.notes.push(tr('Montag bis Mittwoch sind die Escape Rooms geschlossen (außer für Firmen und Schulklassen).','The escape rooms are closed Monday to Wednesday (except for companies and school classes).'));
    if(age(s)<16&&g!=='schule') r.notes.push(tr('Unter 16 nur mit erwachsener Begleitung.','Under 16s only with an accompanying adult.'));
    if(c.rooms.some(x=>x.levels)) r.notes.push(endzeitEasy(s)?tr('Endzeit spielt ihr in der Anfänger-Variante. Der Finder wählt im Shop den passenden Anfänger-Tarif vor.','You play End Times in the beginner version. The finder preselects the matching beginner rate in the shop.'):tr('Endzeit spielt ihr in der normalen, schweren Variante. Der Finder wählt im Shop den passenden Tarif vor.','You play End Times in the regular, harder version. The finder preselects the matching rate in the shop.'));
    r.notes.push(g==='schule'&&k>2&&!schoolWeekend(s)?tr('Mit 3 oder 4 Räumen gleichzeitig unter der Woche bitte frühzeitig buchen, am besten einige Wochen im Voraus. Dann planen wir genug Spielleiter für euch ein.','With 3 or 4 rooms at the same time on a weekday, please book early, ideally a few weeks ahead, so we can schedule enough game masters for you.')
      :s.date&&daysUntil(s.date)===0?tr('Für heute ruft bitte kurz an, ob es noch klappt: 07131 / 124 06 84.','For today, please give us a quick call to check: +49 7131 124 06 84.'):tr('Buchbar bis 5 Stunden vorher.','Bookable up to 5 hours in advance.'));
    return r;
  }
  const t=c.tour,tid=t.id;
  if(t.external){ // Excaliburs Erben: je Gruppe 60 € für 2 Spieler, jede weitere Person 24 €; Gruppen mit höchstens 6 Spielern
    const k=Math.ceil(n/6),sz=Array.from({length:k},(_,i)=>Math.floor(n/k)+(i<n%k?1:0)),gp=z=>60+24*(z-2);
    r.base=sz.reduce((a,z)=>a+gp(z),0);r.external=true;r.tariff='Preis pro Gruppe';
    r.lines.push(k===1?tr('60 € für 2 Spieler, jede weitere Person 24 €','€60 for 2 players, each additional person €24')
      :tr(`${k} Gruppen (${sz.join(' + ')} Spieler), jede Gruppe einzeln: 60 € für 2 Spieler + 24 € je weitere Person`,`${k} groups (${sz.join(' + ')} players), each billed separately: €60 for 2 players + €24 per additional person`));
    r.notes.push(tr('Gespielt wird am eigenen Smartphone mit Internet, am besten voll aufgeladen. Rechnet mit etwa 2 Stunden, ohne Zeitlimit.','You play on your own smartphone with internet access, ideally fully charged. Allow about 2 hours; there is no time limit.'));
    if(k>1)r.notes.push(tr('Jede Gruppe spielt mit eigenem Spielmaterial. Im Buchungskalender bucht ihr die Gruppen zur selben Startzeit.','Each group plays with its own game material. In the booking calendar, book the groups for the same start time.'));
    r.notes.push(tr('Das Spielmaterial holt ihr an der Schirmbar im Biergarten ab. Ist der Biergarten zu, geht über die Brücke zum Burgtor und wählt am Telefon die 222.','Collect your game material at the Schirmbar in the beer garden. If the beer garden is closed, cross the bridge to the castle gate and dial 222 on the phone.'));
    r.notes.push(tr('Die Strecke ist mehrere Kilometer lang, mit Treppen und Waldwegen. Hunde sind willkommen.','The route is several kilometres long, with stairs and forest paths. Dogs are welcome.'));
    if(EN)r.notes.push('The game is only available in German.');
    return r}
  if(loc!=='hn'){
    r.request=true;
    if(g==='firma'){r.base=360+30*Math.max(0,n-12);r.tariff='Firmentarif außerhalb Heilbronn';r.lines.push(tr('360 € inkl. 12 Personen'+(n>12?`, + ${n-12} × 30 €`:''),'€360 incl. 12 people'+(n>12?`, + ${n-12} × €30`:'')))}
    else if(g==='schule'){schoolOut(r,n,s)}
    else{r.base=stdOut(n);r.tariff='Großgruppe ab 20 Personen'}
  } else if(g==='schule'){schoolOut(r,n,s);r.request=true;
  } else if(g==='familie'&&['OT1','OT3'].includes(tid)&&s.adults<=2&&s.kids>=2&&n>=4&&n<=6){
    dayTariff(r,99,stdOut(n),day,'Familientarif',tr('Bis zu 2 Erwachsene mit ihren Kindern, 4 bis 6 Personen','Up to 2 adults with their children, 4 to 6 people'));
  } else if(g==='kgb'&&['OT1','OT3'].includes(tid)){
    const teams=s.kids<=8?1:s.kids<=12?2:3,free=Math.min(s.adults,teams),p=n-free;
    if(p<=15){dayTariff(r,159+20*Math.max(0,p-8),stdOut(n),day,'Kindergeburtstagstarif',tr(`159 € inkl. 8 Kinder${p>8?`, + ${p-8} × 20 €`:''}${free?`, ${free} Begleitperson${free>1?'en':''} gratis`:''}`,`€159 incl. 8 kids${p>8?`, + ${p-8} × €20`:''}${free?`, ${free} accompanying adult${free>1?'s':''} free`:''}`))}
    else{r.base=stdOut(n);r.notes.push(tr('Der Kindergeburtstagstarif gilt bis 15 Personen.','The kids’ birthday rate applies up to 15 people.'))}
    r.notes.push(tr(`Jede Spielgruppe braucht eine erwachsene Begleitperson, sie spielt kostenlos mit. Bei ${s.kids} Kindern sind das ${teams}.`,`Each team needs an accompanying adult, who plays for free. With ${s.kids} kids that is ${teams}.`));
    r.notes.push(tr('Die Geburtstags-Rallye dauert 1,5 bis 2 Stunden.','The birthday rally takes 1.5 to 2 hours.'));
  } else {r.base=stdOut(n);if(n>3)r.lines.push(tr(`90 € inkl. 3 Personen, + ${n-3} × 30 €`,`€90 incl. 3 people, + ${n-3} × €30`))}
  if(loc==='hn'&&n>30){r.request=true;r.notes.push(tr('Ab 31 Personen stimmen wir die Tour persönlich mit euch ab.','From 31 people we plan the tour with you personally.'))}
  if(g==='familie'&&tid==='OT1'&&age(s)<16) r.notes.push(tr('Mit mindestens 2 Erwachsenen klappt Mindfall auch mit Jüngeren: Die kniffligsten Stellen lösen die Großen.','With at least 2 adults, Mindfall also works with younger kids: the grown-ups solve the trickiest parts.'));
  if(g==='kgb'&&age(s)<12) r.notes.push(tr('Für Kinder unter 12 bitte mit erwachsener Begleitung.','Children under 12 please with an accompanying adult.'));
  if(loc==='hw') r.notes.push(tr('An der Heuchelberger Warte sind die Wege geschottert, die Tour ist dort nicht barrierefrei.','At Heuchelberger Warte the paths are gravel, so the tour is not step-free there.'));
  if(g==='schule'&&s.klasse==='8'&&tid==='OT1') r.notes.push(tr('Für Schulklassen nutzen wir eine vereinfachte Route.','For school classes we use a simplified route.'));
  if(g==='firma'&&n>=30) r.notes.push(tr(`Ab 30 Personen bauen wir euch auch eine eigene Route im Umkreis von 50 km (ab 1.499 € inkl. 30 Personen, auf Anfrage).`,`From 30 people we can also build you a custom route within 50 km (from €1,499 incl. 30 people, on request).`));
  if(shortOnly(s)) r.notes.push(tr(`An der ${LOCS.find(l=>l.id===loc).name} spielt ihr die Short-Tour mit 1,5 bis 2 Stunden.`,`At ${LOCS.find(l=>l.id===loc).name} you play the short tour, 1.5 to 2 hours.`));
  else if(g!=='kgb') r.notes.push(tr('Wenig Zeit? Mit der Short-Tour erlebt ihr dieselbe Mission kompakt in 1,5 bis 2 Stunden.','Short on time? The short tour gives you the same mission in a compact 1.5 to 2 hours.'));
  if(s.date){if(dateObj(s.date).getDay()===1&&!(g==='firma'&&loc!=='hn')&&g!=='schule') r.notes.push(tr('Montags finden keine Outdoor-Touren statt. Wählt bitte einen anderen Tag oder fragt bei uns an.','There are no outdoor tours on Mondays. Please choose another day or send us a request.'));}
  else if(day==='momi'&&!(g==='firma'&&loc!=='hn')&&g!=='schule') r.notes.push(tr('Outdoor-Touren starten ab Dienstag.','Outdoor tours run from Tuesday.'));
  if(s.date&&n>24&&daysUntil(s.date)<2){r.request=true;r.notes.push(tr('Ab 25 Personen brauchen wir mindestens 48 Stunden Vorlauf. Für diesen Termin stimmen wir uns kurz mit euch ab.','From 25 people we need at least 48 hours’ notice. For this date we will quickly check with you.'))}
  r.notes.push(s.date&&daysUntil(s.date)===0?tr('Für heute ruft bitte kurz an, ob es noch klappt: 07131 / 124 06 84.','For today, please give us a quick call to check: +49 7131 124 06 84.'):n>24?tr('Ab 25 Personen bitte mindestens 48 Stunden vorher buchen.','From 25 people, please book at least 48 hours in advance.'):tr('Buchbar bis 10 Stunden vorher.','Bookable up to 10 hours in advance.'));
  return r;
}
function dayTariff(r,special,std,day,name,line){
  if(day==='dofr'||day==='so'){r.base=special;r.tariff=name;r.lines.push(line)}
  else if(day==='sa'||day==='momi'){r.base=std;r.notes.push(tr(`Der ${name} (${eur(special)}) gilt nur Donnerstag, Freitag und Sonntag.`,`The ${tn(name)} (${eur(special)}) only applies on Thursday, Friday and Sunday.`))}
  else{r.base=special;r.tariff=name;r.lines.push(line);r.cond=tr(`Gilt Do, Fr und So. An anderen Tagen ${eur(std)}.`,`Applies Thu, Fri and Sun. Other days ${eur(std)}.`)}
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
 bug:'<ellipse cx="12" cy="14.5" rx="5" ry="6"/><path d="M12 8.5V20.5M9.3 7.6a2.7 2.2 0 0 1 5.4 0M10.3 5.6 8.5 2.8M13.7 5.6l1.8-2.8M7.2 11.5 4 10M16.8 11.5 20 10M7 15H3.5M17 15h3.5M7.6 18.6 5 21M16.4 18.6 19 21"/>',
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
 chev:'<path d="M6 9l6 6 6-6"/>', x:'<path d="M6 6l12 12M18 6L6 18"/>',
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
const REPO_IMG=['er1-flynn','er2-endzeit','er3-leonardo','er4-zombielabor','ot1-mindfall','ot2-blackout','ot3-portal','ot4-excalibur','pack-ship',
  'hc-klassik','hc-geburtstag','hc-hochzeit','hc-ostern','hc-weihnachten','pop-feuerwerk','pop-katze','pop-gaensebluemchen','pop-geschenkbox',
  'spielen','verschenken','gutschein-pdf','gruppe-freunde','gruppe-familie','gruppe-kindergeburtstag','gruppe-schulklasse','gruppe-firma','gruppe-jga','drinnen','draussen'];
const IMG_BASE=CFG.imgBase||((document.currentScript&&document.currentScript.src)||'').replace(/[^/]*$/,'')+(document.currentScript&&document.currentScript.src?'img/':'');
const IMG=Object.assign({},CFG.useShopImages===false?{}:SHOP_IMG,IMG_BASE?Object.fromEntries(REPO_IMG.map(k=>[k,IMG_BASE+k+'.webp'])):{},
  Object.fromEntries(Object.entries(CFG.images||{}).filter(([k,v])=>v)));
/* Bilder aus Webflow (Vorrang vor allem anderen): ein Bild-Element irgendwo auf der Seite mit dem Attribut data-finder-img="schlüssel",
   z. B. in einem versteckten Div. Die Grafikerin tauscht dort nur das Bild aus. Ohne Eintrag gilt das Bild aus GitHub. */
function pageImages(){try{document.querySelectorAll('[data-finder-img]').forEach(el=>{const k=(el.getAttribute('data-finder-img')||'').trim().toLowerCase();
  const im=el.tagName==='IMG'?el:el.querySelector('img');const u=im&&(im.getAttribute('src')||'').trim();if(k&&u&&!/placeholder/i.test(u))IMG[k]=u})}catch(e){}}
pageImages();
const DESIGN_IMG={hc:{Klassik:'hc-klassik',Geburtstag:'hc-geburtstag',Weihnachten:'hc-weihnachten',Hochzeit:'hc-hochzeit',Ostern:'hc-ostern'},
  pop:{'Geburtstagsfeuerwerk mit Musik':'pop-feuerwerk',Geburtstagskatze:'pop-katze','Gänseblümchen':'pop-gaensebluemchen',Geschenkbox:'pop-geschenkbox'},ship:{'':'pack-ship'},pdf:{'':'gutschein-pdf'}};
/* Verpackungen für Gutscheine: Name, Preis, Designs, Kurzinfo */
const GPACKS={pdf:[tr('PDF per E-Mail','PDF by email'),0,[],tr('Sofort da, zum Selbstausdrucken','Instant, print it yourself')],hc:[tr('Hardcover-Karte','Hardcover card'),4.8,['Klassik','Geburtstag','Weihnachten','Hochzeit','Ostern'],tr('Per Post · 5 Designs','By post · 5 designs')],
  pop:[tr('Pop-up-Karte','Pop-up card'),9.9,['Geburtstagsfeuerwerk mit Musik','Geburtstagskatze','Gänseblümchen','Geschenkbox'],tr('Per Post · 3D-Motiv · 4 Designs','By post · 3D motif · 4 designs')],ship:[tr('Piratenschiff-Rätsel','Pirate ship puzzle'),12.9,[],tr('Per Post · Bastelbogen mit Mini-Rätsel','By post · craft sheet with mini puzzle')]};
/* Designnamen bleiben intern deutsch (Produktnamen im Shop) */
const DESIGN_EN={Klassik:'Classic',Geburtstag:'Birthday',Weihnachten:'Christmas',Hochzeit:'Wedding',Ostern:'Easter','Geburtstagsfeuerwerk mit Musik':'Birthday fireworks with music',Geburtstagskatze:'Birthday cat','Gänseblümchen':'Daisy',Geschenkbox:'Gift box'};
const dn=d=>EN&&DESIGN_EN[d]||d;
const gPackImg=(p,d)=>p==='pdf'?'gutschein-pdf':p==='ship'?'pack-ship':(DESIGN_IMG[p]||{})[d||GPACKS[p][2][0]];
const IMGKEY={ER1:'er1-flynn',ER2:'er2-endzeit',ER3:'er3-leonardo',ER4:'er4-zombielabor',OT1:'ot1-mindfall',OT2:'ot2-blackout',OT3:'ot3-portal',OT4:'ot4-excalibur'};
const IMG_FB=IMG_BASE?Object.fromEntries(REPO_IMG.map(k=>[k,IMG_BASE+k+'.webp'])):{};
const imgTag=key=>{const u=key&&IMG[key];if(!u)return '';const q=x=>String(x).replace(/"/g,'&quot;'),fb=IMG_FB[key]&&IMG_FB[key]!==u?IMG_FB[key]:'';
  return `<img src="${q(u)}" alt="" loading="lazy" decoding="async"${fb?` data-fb="${q(fb)}"`:''} onerror="if(this.dataset.fb){this.src=this.dataset.fb;this.removeAttribute('data-fb')}else this.remove()">`};
const CSS=EXF_CSS;
/* Schriften: auf exodus-hn.de liefert Webflow "Amarante" und "bahnschrift-semicondensed" selbst.
   Nur wenn sie fehlen (z. B. Vorschau), werden Amarante + Barlow Semi Condensed (Ersatz) von Google geladen. */
if(![...document.fonts].some(f=>/amarante/i.test(f.family))&&!document.querySelector('link[href*="family=Amarante"]')){const l=document.createElement('link');l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Amarante&family=Barlow+Semi+Condensed:wght@300;400;700&display=swap';document.head.appendChild(l);}
/* Eingebettet: steht auf der Seite ein <div data-finder-teaser></div>, läuft der Finder genau dort, die Seite bleibt scrollbar.
   Mit window.EXODUS_FINDER={overlay:true} öffnet er sich wie früher als Vollbild. */
const EMBED_EL=CFG.overlay?null:document.querySelector('[data-finder-teaser]');
const INLINE=!!(CFG.inline||EMBED_EL);
let host=EMBED_EL||document.getElementById('exodus-finder');
if(!host){host=document.createElement('div');host.id='exodus-finder';document.body.appendChild(host);}
if(EMBED_EL){host.setAttribute('role','region');host.setAttribute('aria-label',tr('Erlebnis-Finder','Experience finder'))}
if(!INLINE){Object.assign(host.style,{position:'fixed',inset:'0',zIndex:'2147482000',display:'none'});
  host.setAttribute('role','dialog');host.setAttribute('aria-modal','true');host.setAttribute('aria-label',tr('Erlebnis-Finder','Experience finder'));}
const shadow=host.attachShadow({mode:'open'});
shadow.innerHTML=`<style>${CSS}</style><div class="exf-root${EMBED_EL?' embedded':''}" id="scroller" tabindex="-1" style="${INLINE?'':'height:100%;overflow-y:auto;overscroll-behavior:contain'}"><div class="shell" id="app"></div></div>`;
const $id=id=>shadow.getElementById(id);
const app=$id('app'),scroller=$id('scroller');
let panelShadow=null;
function panelRoot(){if(panelShadow)return panelShadow;const h=document.createElement('div');h.id='exodus-finder-panel';document.body.appendChild(h);
  panelShadow=h.attachShadow({mode:'open'});panelShadow.innerHTML=`<style>${CSS}</style>`;return panelShadow}
let isOpen=INLINE;
/* Eingebettet: nach einem Schrittwechsel den Anfang des Finders ins Bild holen (Abstand für eine feste Navigation: scrollOffset) */
/* Höhe einer festen Navigation oben automatisch ermitteln (oder fest per scrollOffset) */
function headOffset(){if(CFG.scrollOffset!=null)return CFG.scrollOffset;let b=0;
  try{document.elementsFromPoint(innerWidth/2,4).forEach(el=>{for(let e=el;e&&e!==document.body&&e!==document.documentElement;e=e.parentElement){const st=getComputedStyle(e);
    if(st.position==='fixed'||st.position==='sticky'){const r=e.getBoundingClientRect();if(r.top<=4&&r.height<innerHeight*.4)b=Math.max(b,r.bottom)}}})}catch(e){}
  return Math.round(b)+16}
/* Zum Shop scrollen: Bilder dazwischen laden oft erst beim Scrollen nach (lazy) und schieben den Shop nach unten.
   Daher die Bilder oberhalb vorab laden und nach dem Scrollen so lange nachkorrigieren, bis der Shop ruhig oben steht.
   Scrollt der Gast selbst (Rad, Wischen, Tasten), hört der Finder sofort auf. */
let scrollRun=0;
function scrollToEl(el){const run=++scrollRun,y0=el.getBoundingClientRect().top+scrollY;
  try{document.querySelectorAll('img[loading="lazy"]').forEach(i=>{if(i.getBoundingClientRect().top+scrollY<y0)i.loading='eager'})}catch(e){}
  let user=false;const stop=()=>{user=true};const evs=['wheel','touchstart','keydown'];evs.forEach(n=>addEventListener(n,stop,{passive:true,once:true}));
  const target=()=>Math.max(0,Math.min(scrollY+el.getBoundingClientRect().top-headOffset(),document.documentElement.scrollHeight-innerHeight));
  window.scrollTo({top:target(),behavior:'smooth'});
  let last=-1,calm=0,t0=Date.now();
  (function check(){if(user||run!==scrollRun||Date.now()-t0>6000){evs.forEach(n=>removeEventListener(n,stop));return}
    const y=Math.round(scrollY);
    if(y===last){const d=target()-y;if(Math.abs(d)>6){window.scrollTo({top:target(),behavior:Math.abs(d)>400?'smooth':'auto'});calm=0}else if(++calm>=4){evs.forEach(n=>removeEventListener(n,stop));return}}
    last=y;setTimeout(check,200)})();
}
function toFinder(force){if(!EMBED_EL)return;const r=host.getBoundingClientRect(),off=headOffset();
  if(force||r.top<off-8||r.top>innerHeight*.45)window.scrollTo({top:Math.max(0,scrollY+r.top-off),behavior:'smooth'})}
/* Google Analytics 4: Ereignisse über das gtag/dataLayer der Website. Keine Namen, Mails oder Telefonnummern. */
/* Jedes Ereignis trägt die bisherigen Angaben mit (f_…), damit sich in Analytics zeigen lässt, wer mit welchen Angaben wie weit kommt */
function fctx(){try{const n=S.group?total(S):0,band=!n?'':n<=3?'2-3':n<=6?'4-6':n<=12?'7-12':n<=24?'13-24':n<=50?'25-50':'51+';
  const o={f_lang:LANG,f_mode:S.mode||'',f_group:S.group||'',f_persons:band,f_io:S.io||'',f_exp:S.exp||'',f_date:S.date?(S.date===isoToday()?'heute':'fest'):S.day?'tag:'+S.day:'',
    f_loc:S.loc||'',f_class:S.group==='schule'?(S.klasse||''):'',f_gift:S.mode==='gift'?[S.g.type,S.g.pack].filter(Boolean).join(':'):''};
  return Object.fromEntries(Object.entries(o).filter(([k,v])=>v))}catch(e){return {}}}
function track(name,params){const p=Object.assign({finder_version:'1.7.8'},fctx(),params||{});
  // Die gerade gegebene Antwort gleich mit in den Kontext (z. B. Gruppe schon beim Ereignis „Gruppe gewählt“)
  if(name==='finder_answer'&&p.answer!=null){const k={group:'f_group',io:'f_io',exp:'f_exp',mode:'f_mode',ort:'f_loc',klasse:'f_class'}[p.question];if(k)p[k]=String(p.answer)}
  try{if(typeof window.gtag==='function')window.gtag('event',name,p);else if(Array.isArray(window.dataLayer))window.dataLayer.push(Object.assign({event:name},p))}catch(e){}
  if(CFG.debug)console.log('[Exodus-Finder]',name,p)}
function openFinder(arg,src){track('finder_open',{source:src||(arg==='gutschein'?'gutschein_knopf':'knopf')});
  if(arg==='gutschein'){S.mode='gift';S.g.type='wert';cur='gsize'}
  else if(!cur||cur==='launch') cur='mode';
  if(!INLINE){host.style.display='block';document.documentElement.style.overflow='hidden'}
  isOpen=true;render();scroller.scrollTop=0;if(EMBED_EL)toFinder(true);else scroller.focus({preventScroll:true});
}
function hideOverlay(){if(INLINE)return;if(/^#(finder|erlebnis-finder)/i.test(location.hash))try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}host.style.display='none';document.documentElement.style.overflow='';isOpen=false}
function closeFinder(){track('finder_close',{step:cur,step_number:steps().indexOf(cur)+1,mode:S.mode||''});if(INLINE){go('mode');return}hideOverlay()}
/* Einstieg direkt auf der Seite: <div data-finder-teaser></div> zeigt die erste Frage "Was habt ihr vor?".
   Ein Klick öffnet den Finder bei der nächsten Frage. */
function mountTeasers(){document.querySelectorAll('[data-finder-teaser]').forEach(el=>{if(el.shadowRoot)return;const sr=el.attachShadow({mode:'open'});
  sr.innerHTML=`<style>${CSS}</style><div class="exf-root teaser"><div class="shell">${q(tr('Was habt ihr vor?','What are you planning?'),tr('Tippt einfach auf das passende Bild.','Just tap the picture that fits.'))}${tilesHTML([
    {act:'mode',img:'spielen',val:'play',label:tr('Selbst spielen','Play yourselves'),sub:tr('Escape Room oder Outdoor-Tour finden','Find an escape room or outdoor tour'),icon:'play',t:TINTS.a},
    {act:'mode',img:'verschenken',val:'gift',label:tr('Verschenken','Give as a gift'),sub:tr('Wertgutschein mit schöner Verpackung','Gift voucher, beautifully wrapped'),icon:'gift',t:TINTS.c}],2)}</div></div>`;
  sr.addEventListener('click',e=>{const b=e.target.closest('[data-act=mode]');if(!b)return;const v=b.dataset.val;
    track('finder_open',{source:'teaser'});track('finder_answer',{question:'mode',answer:v});
    S.mode=v;S.pick=0;if(v==='gift')S.g.type='wert';cur=v==='gift'?'gsize':'group';
    if(!INLINE){host.style.display='block';document.documentElement.style.overflow='hidden'}isOpen=true;render();scroller.scrollTop=0;
    track('finder_step',{step:cur,step_number:2,mode:S.mode})})})}
/* Direktlinks in den Finder (für Website, Newsletter, Social Media und KI-Assistenten), z. B.
   #finder?gruppe=freunde&personen=4&datum=2026-11-07&art=drinnen
   #finder?modus=gutschein&betrag=111&verpackung=pdf
   Alle Angaben sind optional. Der Finder startet bei der ersten Frage, die noch offen ist. Beschreibung: llms.txt im Repository. */
const LOC_ALIAS={heilbronn:'hn',hn:'hn',sinsheim:'sin',sin:'sin',neckarsulm:'nsu',nsu:'nsu','schwaebisch-hall':'sha','schwäbisch-hall':'sha',hall:'sha',sha:'sha',stettenfels:'stf','burg-stettenfels':'stf',stf:'stf','heuchelberger-warte':'hw',heuchelberg:'hw',hw:'hw'};
const WD={sonntag:0,montag:1,dienstag:2,mittwoch:3,donnerstag:4,freitag:5,samstag:6};
function parseDeep(h){const m=/^#(?:finder|erlebnis-finder)(?:\?(.*))?$/i.exec(h||'');if(!m)return null;
  const P=new URLSearchParams(m[1]||'');return k=>(P.get(k)||'').trim().toLowerCase().replace(/\s+/g,'-')}
function deepDate(v){const t=isoToday();if(/^\d{4}-\d{2}-\d{2}$/.test(v))return v>=t?v:null;
  const d=new Date();if(v==='heute')return t;if(v==='morgen'){d.setDate(d.getDate()+1)}
  else if(v in WD){d.setDate(d.getDate()+((WD[v]-d.getDay()+7)%7))}else return null;
  return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`}
function applyDeep(g){const done=new Set(['mode']);
  if(g('modus')==='gutschein'){S.mode='gift';S.g.type='wert';
    const b=parseFloat(g('betrag').replace(',','.'));if(b>=10&&b<=500){S.g.amount=Math.round(b*100)/100;done.add('gsize')}
    const v={pdf:'pdf',email:'pdf','e-mail':'pdf',karte:'hc',hardcover:'hc','hardcover-karte':'hc',popup:'pop','pop-up':'pop','pop-up-karte':'pop',schiff:'ship',piratenschiff:'ship'}[g('verpackung')];
    if(v&&done.has('gsize')){S.g.pack=v;S.g.design=null;done.add('gpack');if(v==='pdf')S.g.exit=false}
    if(g('exit')&&done.has('gpack')&&S.g.pack!=='pdf'&&exitOK()){S.g.exit=['1','ja','true'].includes(g('exit'));done.add('gextra')}
  }else{S.mode='play';S.pick=0;
    const G={freunde:'freunde',kleingruppe:'freunde',familie:'familie',kindergeburtstag:'kgb',kgb:'kgb',schule:'schule',schulklasse:'schule',firma:'firma',team:'firma',jga:'jga',geburtstag:'jga'}[g('gruppe')];
    if(G){S.group=G;S.io=null;S.loc=null;if(G==='kgb'){S.kids=8;S.adults=1}else if(G==='familie'){S.kids=2;S.adults=2}else if(G==='schule')S.n=25;else if(G==='firma')S.n=12;else S.n=4;done.add('group');
      const n=parseInt(g('personen')),k=parseInt(g('kinder')),a=parseInt(g('erwachsene'));
      if(family(S)){if(k>0)S.kids=Math.min(30,k);if(a>0)S.adults=Math.min(10,a);if(k>0||a>0)done.add('size')}
      else if(n>0){S.n=Math.max(G==='schule'?4:2,Math.min(250,n));done.add('size')}
      const al=parseInt(g('alter'));if(al>0){S.age=al<12?11:Math.min(16,al);done.add('age')}
      const kl=g('klasse'),kn=parseInt(kl);const K=kl==='5-7'||(kn>=5&&kn<=7)?'5-7':kn===8?'8':kn===9?'9':kn>=10?'10+':null;if(K){S.klasse=K;done.add('klasse')}}
    const dv=g('datum');if(dv==='offen'){S.date=null;done.add('date')}else{const d=deepDate(dv);if(d){S.date=d;S.day=dayOf(d);done.add('date')}}
    const io={drinnen:'in',indoor:'in','escape-room':'in',draussen:'out','draußen':'out',outdoor:'out','outdoor-tour':'out',egal:'egal'}[g('art')];if(io){S.io=io;done.add('io')}
    const ex={neu:'first',einsteiger:'first',erstes:'first',first:'first',etwas:'some','ein-paar-mal':'some',fortgeschritten:'some',some:'some',profi:'pro',profis:'pro',pro:'pro'}[g('erfahrung')];if(ex){S.exp=ex;done.add('exp')}
    const th={entspannt:'calm',calm:'calm',spannend:'spicy',gruselig:'spicy',spicy:'spicy'}[g('spannung')];if(th){S.thrill=th;done.add('thrill')}
    const dy={momi:'momi','mo-mi':'momi',dofr:'dofr','do-fr':'dofr',sa:'sa',samstag:'sa',so:'so',sonntag:'so',offen:'open',open:'open'}[g('tag')];if(dy&&!S.date){S.day=dy;done.add('day')}
    const lc=LOC_ALIAS[g('ort')];if(lc&&S.group&&eligibleLocs(S).some(l=>l.id===lc)){S.loc=lc;done.add('ort')}}
  const L=steps();cur=L.find(s=>!done.has(s))||L[L.length-1];return done.size>1}
function openDeep(){const g=parseDeep(location.hash);if(!g)return false;const keep={mode:S.mode,cur};const any=applyDeep(g);if(!any&&g('modus')!=='gutschein'){S.mode=keep.mode;cur=keep.cur&&keep.cur!=='launch'?keep.cur:'mode'}
  track('finder_open',{source:any?'direktlink':'knopf'});
  if(!INLINE){host.style.display='block';document.documentElement.style.overflow='hidden'}
  isOpen=true;render();if(scroller)scroller.scrollTop=0;toFinder(true);track('finder_step',{step:cur,step_number:steps().indexOf(cur)+1,mode:S.mode||''});return true}
function BOOT(){
  mountTeasers();
  document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-finder-open]');if(!t)return;e.preventDefault();openFinder(t.getAttribute('data-finder-open'))});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&isOpen&&!INLINE)closeFinder()});
  window.ExodusFinder={open:openFinder,close:closeFinder};
  window.addEventListener('hashchange',()=>{openDeep()});
  if(openDeep())return;
  if(INLINE){cur='mode';render()}
}

const ic=(n,w=24,sw=1.6)=>`<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;

/* Embleme statt Fotos für einfache Fragen: Schlösser = Rätsel-Level, Balken = Spannung, Zahl = Klassenstufe */
const emLocks=(n,cap)=>`<div class="emb locks">${[0,1,2].map(i=>`<span class="${i<n?'on':''}">${ic('lock',40,1.7)}</span>`).join('')}</div><div class="emb-cap">${cap}</div>`;
const emMeter=(n,hot,cap)=>`<div class="emb meter${hot?' hot':''}">${[1,2,3,4,5].map(i=>`<i class="${i<=n?'on':''}" style="height:${Math.round((1+i)/6*100)}%"></i>`).join('')}</div><div class="emb-cap">${cap}</div>`;
const emNum=(t,cap)=>`<div class="emb-num">${t}</div><div class="emb-cap">${cap}</div>`;
const emMedal=(icn,cap)=>`<div class="emb-medal">${ic(icn,40,1.7)}</div>${cap?`<div class="emb-cap">${cap}</div>`:''}`;
const TINTS={a:['#0F2629','#00A59E'],b:['#122C30','#3CC4BD'],c:['#1C1A12','#AE8F53'],d:['#0F2629','#00A59E'],e:['#1C1A12','#C4A66B'],f:['#11201F','#8FB9B6']};
const tile=(o)=>`<button class="tile${o.sel?' sel':''}" data-act="${o.act}" data-val="${o.val}" style="--tint:${o.t[0]};--ink:${o.t[1]}">
  ${o.tag?`<span class="tag">${o.tag}</span>`:''}${o.raw?`<div class="art vart">${o.raw}</div>`:o.em&&!(o.img&&IMG[o.img])?`<div class="art em">${o.em}</div>`:`<div class="art${o.img&&IMG[o.img]?' photo':''}">${ic(o.icon,80,1.3)}${imgTag(o.img)}</div>`}<div class="txt"><b>${o.label}</b>${o.sub?`<span>${o.sub}</span>`:''}</div></button>`;

/* Gutschein im Stil des Exodus-Ticket-Gutscheins, mit beliebigem Betrag */
const vAmt=v=>eur(+v);
const voucher=v=>`<div class="vwrap"><svg class="vline" aria-hidden="true" viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M9 4H142A8 8 0 0 0 158 4H191A5 5 0 0 1 196 9V42A8 8 0 0 0 196 58V91A5 5 0 0 1 191 96H158A8 8 0 0 0 142 96H9A5 5 0 0 1 4 91V58A8 8 0 0 0 4 42V9A5 5 0 0 1 9 4Z"/><path d="M150 16V84" stroke-dasharray="4 4" stroke-width="1.6"/></svg><span class="vamt">${vAmt(v)}</span></div>`;
let cur='launch';
function steps(){
  if(S.mode==='gift') return ['mode','gsize','gpack',...(S.g.pack&&S.g.pack!=='pdf'&&exitOK()?['gextra']:[]),'gresult'];
  const L=['mode','group','size'];
  if(!S.group) return L;
  if(family(S)) L.push('age');
  if(S.group==='schule') L.push('klasse');
  L.push('date');
  if(ioState(S).ask) L.push('io');
  if(!['kgb','schule'].includes(S.group)) L.push('exp');
  // Nervenkitzel trennt nur zwischen Escape Rooms (Touren sind alle gleich entspannt) – daher nur fragen, wenn drinnen in Frage kommt
  if(!['kgb','schule'].includes(S.group)&&!(S.group==='familie'&&age(S)<13)&&effIO(S)!=='out'&&indoorOptions(S).length>1&&thrillMatters(S)) L.push('thrill');
  if(['familie','kgb','firma'].includes(S.group)&&!S.date) L.push('day');
  if(needOrt(S)) L.push('ort');
  L.push('result');return L;
}
function go(step){cur=step;render();if(scroller)scroller.scrollTop=0;toFinder();if(step!=='launch')track('finder_step',{step,step_number:steps().indexOf(step)+1,mode:S.mode||''})}
function next(){const L=steps();go(L[L.indexOf(cur)+1]||L[L.length-1])}
function back(){const L=steps();const i=L.indexOf(cur);i>0?go(L[i-1]):closeFinder()}

function frame(inner,opts={}){
  const L=steps(),i=L.indexOf(cur),tot=L.length-1;
  const prog=cur==='launch'?'':`<div class="progress" aria-label="${tr('Schritt','Step')} ${i+1} ${tr('von','of')} ${L.length}">${L.slice(0,-1).map((_,k)=>`<i class="${k<=i?'on':''}"></i>`).join('')}${S.mode?'':'<i></i><i></i><i></i><i></i>'}</div>`;
  if(EMBED_EL) return (cur==='mode'||cur==='launch'?'':`<div class="bar">
    <button class="iconbtn" data-act="back" aria-label="${tr('Zurück','Back')}">${ic('back',20,2)}</button><div class="spacer"></div>
    <button class="iconbtn" data-act="close" aria-label="${tr('Finder zurücksetzen','Reset finder')}">${ic('x',20,2)}</button></div>${prog}`)+inner;
  return `<div class="bar">
    <button class="iconbtn" data-act="back" aria-label="${tr('Zurück','Back')}" ${cur==='launch'?'disabled':''}>${ic('back',20,2)}</button>
    <div class="brand">EXODUS<small>${tr('Erlebnis-Finder','Experience finder')}</small></div>${CFG.inline?'<span class="proto">Prototyp</span>':''}<div class="spacer"></div>
    ${cur!=='launch'?`<button class="iconbtn" data-act="close" aria-label="${tr('Finder schließen','Close finder')}">${ic('x',20,2)}</button>`:''}
  </div>${prog}${inner}`;
}
function q(title,sub,chips){return `<div class="q"><h1>${title}</h1>${sub?`<p>${sub}</p>`:''}${chips?`<div class="chips-sum">${chips}</div>`:''}</div>`}
function summaryChips(){
  const c=[];if(S.group)c.push(GROUPS[S.group]);if(S.group&&cur!=='size')c.push(`${total(S)} ${tr('Personen','people')}`);
  if(family(S)&&S.age!=null&&!['age','size'].includes(cur))c.push(S.age<12?tr('Jüngstes Kind unter 12','Youngest child under 12'):`${tr('Jüngstes Kind','Youngest child')} ${S.age}${S.age>=16?'+':''}`);
  if(S.klasse&&S.group==='schule'&&cur!=='klasse')c.push(tr('Klasse ','Year ')+{'5-7':'5–7','8':'8','9':'9','10+':'10+'}[S.klasse]);
  if(S.date&&cur!=='date')c.push(fmtDate(S.date));
  return c.map(t=>`<span class="chip">${t}</span>`).join('');
}
function tilesHTML(items,cols,extra=''){
  return `<div class="stage"><div class="tiles ${extra}" style="--cols:${cols}">${items.map(tile).join('')}</div>
  <div class="dots">${items.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div><div class="swipehint">${tr('Wischen zum Blättern, Tippen zum Auswählen','Swipe to browse, tap to choose')}</div></div>`;
}

const V={
 launch(){return frame(`<div class="launch"><div><h1>${tr('Was passt zu uns?','What suits us?')}</h1><p>${tr('In wenigen Klicks zum passenden Escape Room oder zur Outdoor-Tour.','Find the right escape room or outdoor tour in a few clicks.')}</p>
   <button class="cta" data-act="start">${tr('Finder starten','Start finder')} ${ic('arrow',20,2.4)}</button></div></div>`)},
 mode(){return frame(q(tr('Was habt ihr vor?','What are you planning?'),tr('Tippt einfach auf das passende Bild.','Just tap the picture that fits.'))+tilesHTML([
   {act:'mode',img:'spielen',val:'play',label:tr('Selbst spielen','Play yourselves'),sub:tr('Escape Room oder Outdoor-Tour finden','Find an escape room or outdoor tour'),icon:'play',t:TINTS.a,sel:S.mode==='play'},
   {act:'mode',img:'verschenken',val:'gift',label:tr('Verschenken','Give as a gift'),sub:tr('Wertgutschein mit schöner Verpackung','Gift voucher, beautifully wrapped'),icon:'gift',t:TINTS.c,sel:S.mode==='gift'}],2))},
 group(){const g=[['freunde',GROUPS.freunde,tr('2 bis 6 Leute, einfach Spaß haben','2 to 6 people, just having fun'),'users',TINTS.a],['familie',GROUPS.familie,tr('Groß und Klein gemeinsam','Young and old together'),'family',TINTS.d],
   ['kgb',GROUPS.kgb,tr('Weltretten für Kids','Saving the world, kids’ edition'),'cake',TINTS.e],['schule',GROUPS.schule,tr('Wandertag, Klassenausflug','School trip, class outing'),'school',TINTS.b],
   ['firma',GROUPS.firma,tr('Teamevent, Weihnachtsfeier','Team event, Christmas party'),'case',TINTS.f],['jga',GROUPS.jga,tr('Erwachsene, die feiern wollen','Grown-ups who want to celebrate'),'glass',TINTS.c]];
   return frame(q(tr('Wer kommt mit?','Who’s coming?'),tr('Tippt auf das Bild, das am besten passt.','Tap the picture that fits best.'))+tilesHTML(g.map(([v,l,s,i,t])=>({act:'group',img:'gruppe-'+{freunde:'freunde',familie:'familie',kgb:'kindergeburtstag',schule:'schulklasse',firma:'firma',jga:'jga'}[v],val:v,label:l,sub:s,icon:i,t,sel:S.group===v})),3))},
 size(){
   if(family(S)){const k=S.group==='kgb';
     return frame(q(k?tr('Wie viele feiern mit?','How many are celebrating?'):tr('Wer ist dabei?','Who’s joining?'),k?tr('Geburtstagskind mitgezählt.','Including the birthday child.'):tr('Erwachsene und Kinder getrennt, dann passt der Tarif.','Adults and kids separately, so the rate is right.'),summaryChips())+
     `<div class="stage"><div class="sizer">${stepper('kids',tr('Kinder','Kids'),k?tr('bis einschließlich 16 Jahre','up to and including 16'):tr('unter 18 Jahren','under 18'),S.kids)}${stepper('adults',tr('Erwachsene','Adults'),k?tr('Begleitpersonen, eine pro Spielgruppe','Accompanying adults, one per team'):tr('ab 18 Jahren','18 and over'),S.adults)}</div>
     <div class="foot" style="justify-content:center"><button class="cta" data-act="next">${tr('Weiter','Next')} ${ic('arrow',20,2.4)}</button></div></div>`)}
   const sch=S.group==='schule',min=sch?4:2;if(S.n<min)S.n=min;
   const quick=sch?[12,20,25,30,50,100]:[2,4,6,8,12,20,30,50,100];
   return frame(q(sch?tr('Wie viele Schüler kommen?','How many pupils are coming?'):tr('Wie viele seid ihr?','How many of you are there?'),sch?tr('Lehrkräfte bitte nicht mitzählen.','Please don’t count teachers.'):tr('Auch Großgruppen bis 250 Personen sind möglich.','Large groups of up to 250 people are possible too.'),summaryChips())+
   `<div class="stage"><div class="sizer"><div class="big" aria-live="polite"><span id="nval">${S.n}</span><small>${sch?tr('Schüler','pupils'):tr('Personen','people')}</small></div>
   <div class="stepper" style="padding:10px 14px"><button class="iconbtn" data-act="n-" aria-label="${tr('Eine Person weniger','One person fewer')}">−</button>
   <label for="nrange" class="note" style="flex:1;text-align:center">${tr('Regler ziehen oder tippen','Drag the slider or tap')}</label><button class="iconbtn" data-act="n+" aria-label="${tr('Eine Person mehr','One person more')}">+</button></div>
   <input type="range" id="nrange" min="${min}" max="250" value="${S.n}" aria-label="${tr('Anzahl Personen','Number of people')}">
   <div class="quick">${quick.map(v=>`<button class="pill${S.n===v?' sel':''}" data-act="nset" data-val="${v}">${v}</button>`).join('')}</div></div>
   <div class="foot" style="justify-content:center"><button class="cta" data-act="next">${tr('Weiter','Next')} ${ic('arrow',20,2.4)}</button></div></div>`)},
 age(){const a=[[11,tr('unter 12','under 12')],[12,'12'],[13,'13'],[14,'14'],[15,'15'],[16,'16+']];
   return frame(q(tr('Wie alt ist das jüngste Kind?','How old is the youngest child?'),S.group==='kgb'?tr('Danach richten sich die passenden Räume und Touren.','This decides which rooms and tours fit.'):tr('Damit es für alle gut lösbar bleibt.','So it stays solvable for everyone.'),summaryChips())+
   `<div class="stage"><div class="tiles compact keepgrid" style="--cols:6">${a.map(([v,l])=>tile({act:'age',val:v,label:l,sub:tr('Jahre','years'),icon:v<12?'cake':v<16?'star':'users',t:TINTS.d,sel:S.age===v})).join('')}</div></div>`)},
 klasse(){return frame(q(tr('Welche Klassenstufe?','Which school year?'),tr('Danach wählen wir Tour und Schwierigkeit.','This decides the tour and difficulty.'),summaryChips())+tilesHTML([
   {act:'klasse',img:'klasse-5-7',val:'5-7',label:tr('Klasse 5 bis 7','Years 5 to 7'),em:emNum('5–7',tr('Klasse','Year')),sub:tr('Einsteigerfreundliche Fantasy-Tour','Beginner-friendly fantasy tour'),icon:'portal',t:TINTS.b,sel:S.klasse==='5-7'},
   {act:'klasse',img:'klasse-8',val:'8',label:tr('Klasse 8','Year 8'),em:emNum('8',tr('Klasse','Year')),sub:tr('Agenten-Tour mit vereinfachter Route','Agent tour with a simplified route'),icon:'target',t:TINTS.a,sel:S.klasse==='8'},
   {act:'klasse',img:'klasse-9',val:'9',label:tr('Klasse 9','Year 9'),em:emNum('9',tr('Klasse','Year')),sub:tr('Outdoor oder Escape Room bis 24 Schüler','Outdoor or escape room for up to 24 pupils'),icon:'trophy',t:TINTS.c,sel:S.klasse==='9'},
   {act:'klasse',img:'klasse-10',val:'10+',label:tr('Ab Klasse 10','Year 10 and up'),em:emNum('10+',tr('Klasse','Year')),sub:tr('Outdoor oder Escape Room bis 24 Schüler','Outdoor or escape room for up to 24 pupils'),icon:'trophy',t:TINTS.d,sel:S.klasse==='10+'}],4,'keepgrid emblem'))},
 date(){const t=isoToday();
   return frame(q(tr('Steht euer Termin schon fest?','Do you already have a date?'),tr('Dann zeigen wir euch die passenden Tarife und wählen das Datum im Shop schon vor.','Then we show you the right rates and preselect the date in the shop.'),summaryChips())+
   `<div class="stage"><div class="sizer"><div class="stepper"><div class="lbl"><label for="dpick">${tr('<b>Euer Wunschtermin</b>','<b>Your preferred date</b>')}</label><span>${S.date?fmtDate(S.date):tr('Datum auswählen','Choose a date')}</span></div>
   <div class="ctl"><input id="dpick" class="datein" type="date" min="${t}" value="${S.date||''}"></div></div>
   <div class="foot" style="justify-content:center"><button class="cta" data-act="dateok" ${S.date?'':'disabled'}>${tr('Weiter','Next')} ${ic('arrow',20,2.4)}</button>
   <button class="cta ghost" data-act="dateopen">${tr('Steht noch nicht fest','Not fixed yet')}</button></div></div></div>`)},
 io(){return frame(q(tr('Drinnen oder draußen?','Indoors or outdoors?'),'',summaryChips())+tilesHTML([
   {act:'io',img:'drinnen',val:'in',label:tr('Drinnen · Escape Room','Indoors · escape room'),sub:tr('Mit Live-Schauspielern, bei jedem Wetter','With live actors, in any weather'),icon:'door',t:TINTS.c,sel:S.io==='in'},
   {act:'io',img:'draussen',val:'out',label:tr('Draußen · Outdoor-Tour','Outdoors · outdoor tour'),sub:tr('Mit iPad und ActionPack auf Rätseljagd','Puzzle hunt with iPad and ActionPack'),icon:'tree',t:TINTS.d,sel:S.io==='out'},
   {act:'io',img:'egal',val:'egal',label:tr('Egal','Either'),sub:tr('Zeigt uns, was am besten passt','Show us what fits best'),em:`<div class="emb"><span class="on">${ic('door',40,1.6)}</span><span class="emb-and">&amp;</span><span class="on">${ic('tree',40,1.6)}</span></div><div class="emb-cap">${tr('Beides möglich','Both possible')}</div>`,icon:'both',t:TINTS.f,sel:S.io==='egal'}],3))},
 exp(){return frame(q(tr('Schon mal gespielt?','Played before?'),'',summaryChips())+tilesHTML([
   {act:'exp',img:'erfahrung-erstes-mal',val:'first',label:tr('Unser erstes Mal','Our first time'),sub:tr('Reinschnuppern und Spaß haben','Try it out and have fun'),em:emLocks(1,tr('Einsteiger','Beginner')),icon:'star',t:TINTS.a,sel:S.exp==='first'},
   {act:'exp',img:'erfahrung-ein-paar-mal',val:'some',label:tr('Ein paar Mal','A few times'),sub:tr('Wir wissen, wie es läuft','We know how it works'),em:emLocks(2,tr('Fortgeschritten','Intermediate')),icon:'puzzle',t:TINTS.d,sel:S.exp==='some'},
   {act:'exp',img:'erfahrung-profis',val:'pro',label:tr('Wir sind Profis','We’re pros'),sub:tr('Gebt uns das Schwerste','Give us the hardest one'),em:emLocks(3,tr('Profi','Expert')),icon:'trophy',t:TINTS.c,sel:S.exp==='pro'}],3,'keepgrid emblem'))},
 thrill(){return frame(q(tr('Wie viel Nervenkitzel?','How much thrill?'),'',summaryChips())+tilesHTML([
   {act:'thrill',img:'spannung-entspannt',val:'calm',label:tr('Lieber entspannt','Rather relaxed'),sub:tr('Rätseln ohne Herzklopfen','Puzzling without a racing heart'),em:emMeter(2,false,tr('Spannung','Thrill')),icon:'leaf',t:TINTS.d,sel:S.thrill==='calm'},
   {act:'thrill',img:'spannung-spannend',val:'spicy',label:tr('Gern spannend','Bring on the thrill'),sub:tr('Atmosphäre darf unter die Haut gehen','Atmosphere can get under your skin'),em:emMeter(5,true,tr('Spannung','Thrill')),icon:'pulse',t:TINTS.e,sel:S.thrill==='spicy'}],2,'keepgrid emblem'))},
 day(){const d=[['momi',tr('Mo bis Mi','Mon to Wed'),momiSub()],['dofr',tr('Do oder Fr','Thu or Fri'),''],['sa',tr('Samstag','Saturday'),''],['so',tr('Sonntag','Sunday'),''],['open',tr('Noch offen','Not decided'),tr('Wir zeigen beide Preise','We show both prices')]];
   return frame(q(tr('Wann wollt ihr kommen?','When do you want to come?'),tr('Manche Tarife gelten nur an bestimmten Tagen.','Some rates only apply on certain days.'),summaryChips())+
   `<div class="stage"><div class="tiles compact keepgrid" style="--cols:5">${d.map(([v,l,s])=>tile({act:'day',val:v,label:l,sub:s,icon:'cal',t:TINTS.f,sel:S.day===v})).join('')}</div></div>`)},
 ort(){const L=eligibleLocs(S);
   return frame(q(tr('Wo soll es losgehen?','Where should it start?'),tr('Die Outdoor-Touren gibt es an mehreren Orten.','The outdoor tours are available in several places.'),summaryChips())+tilesHTML(L.map((l,i)=>({act:'ort',img:'ort-'+l.id,val:l.id,label:l.name,
     sub:l.id==='hn'?tr('Start am Escape-Room-Standort','Start at the escape room venue'):l.id==='stf'?tr('Nur hier: Excaliburs Erben, für Kleingruppen','Only here: Excaliburs Erben, for small groups'):`${tr('Treffpunkt','Meeting point')}: ${l.meet(total(S))}`,icon:'pin',t:Object.values(TINTS)[i%6],sel:S.loc===l.id})),Math.min(3,L.length)))},
 result(){
   const C=candidates(S);
   if(!C.length) return frame(q(tr('Da sprechen wir lieber persönlich','Let’s talk about this personally'),'')+`<div class="empty"><p>${tr('Für diese Kombination haben wir kein Standardangebot. Ruft uns an, wir finden eine Lösung.','We don’t have a standard offer for this combination. Give us a call and we’ll find a solution.')}</p>${contact()}<button class="cta ghost" data-act="restart"${tr('>Neu starten<','>Start over<')}/button></div>`);
   if(S.pick>=C.length)S.pick=0;
   const fav=C[S.pick],alts=C.filter((_,i)=>i!==S.pick).slice(0,4),P=pricing(fav,S);
   const st=ioState(S);let forced='';
   if(st.forced==='out'&&S.day==='momi'&&S.group!=='firma'&&S.group!=='schule'&&indoorOptions(Object.assign({},S,{day:'sa'})).length) forced=tr('Die Escape Rooms sind für Familien, Freunde und Geburtstage von Donnerstag bis Sonntag geöffnet. Von Montag bis Mittwoch empfehlen wir euch eine Outdoor-Tour.','The escape rooms are open for families, friends and birthdays from Thursday to Sunday. From Monday to Wednesday we recommend an outdoor tour.');
   else    if(st.forced==='out'&&S.group!=='schule'&&total(S)>24) forced=tr('Ab 25 Personen geht es nach draußen. Drinnen spielen höchstens 24 Personen parallel.','From 25 people it’s outdoors. Indoors, at most 24 people play at the same time.');
   else if(st.forced==='out'&&S.group==='kgb') forced=tr('Drinnen geht ein Kindergeburtstag mit bis zu 5 Kindern ab 13 Jahren und einem Erwachsenen.','Indoors, a kids’ birthday works with up to 5 kids aged 13+ and one adult.');
   else if(st.forced==='out'&&S.group==='schule') forced=tr('Escape Rooms gibt es für Schulklassen ab Klasse 9 und bis 24 Schüler.','Escape rooms are available for school classes from year 9 and up to 24 pupils.');
   else if(st.forced==='in'&&S.group==='schule') forced=tr('Outdoor-Touren für Schulklassen gibt es ab 12 Schülern.','Outdoor tours for school classes start at 12 pupils.');
   const isOut=fav.type==='out',n=total(S);
   const it=isOut?fav.tour:fav.rooms[0];
   const title=isOut?fav.tour.name:fav.rooms.map(r=>fav.rooms.length>1?r.short:r.name).join(' + ');
   const loc=LOCS.find(l=>l.id===(S.loc||'hn'));
   let why=isOut?fav.tour.why:fav.rooms.length===1?fav.rooms[0].why:[tr(`${fav.rooms.length} Räume parallel: ${fav.sizes.join(' + ')} Personen`,`${fav.rooms.length} rooms in parallel: ${fav.sizes.join(' + ')} people`),...fav.rooms[0].why.slice(0,2)];
   if(fav.compact) why=[tr(`${fav.rooms.length===1?'Ein Raum':fav.rooms.length+' Räume'} statt ${fav.rooms.length+1}: eine Gruppe spielt zu siebt`,`${fav.rooms.length===1?'One room':fav.rooms.length+' rooms'} instead of ${fav.rooms.length+1}: one group plays with seven`),...(fav.rooms.length>1?[tr(`Aufteilung: ${fav.sizes.join(' + ')} Personen`,`Split: ${fav.sizes.join(' + ')} people`)]:[]),...fav.rooms[0].why.slice(0,1)];
   const sch=S.group==='schule',grade=x=>tr(`ab Klasse ${x}`,`year ${x}+`);
   const facts=sch?(isOut?[grade({OT1:8,OT2:9,OT3:5}[fav.tour.id]||5),(isShort(S)?tr('1,5–2 Std.','1.5–2 hrs'):tr('2–3 Std.','2–3 hrs'))]:[grade(9),tr('60 Min.','60 min'),tr('mit Schauspielern','with live actors'),tr('klimatisiert','air-conditioned'),...(fav.rooms.some(r=>r.strobe)?[tr('Stroboskop-Effekte','strobe effects')]:[])])
     :isOut&&fav.tour.external?[tr('ab 12 J.','age 12+'),tr('bis 2 Std.','up to 2 hrs'),tr('am eigenen Smartphone','on your own smartphone'),...(EN?['German only']:[])]:isOut?[tr(`ab ${fav.tour.age} J.${fav.tour.id!=='OT3'?' (mit Erwachsenen jünger)':''}`,`age ${fav.tour.age}+${fav.tour.id!=='OT3'?' (younger with adults)':''}`),(isShort(S)||S.group==='kgb')?tr('1,5–2 Std.','1.5–2 hrs'):tr('2–3 Std.','2–3 hrs'),...(['hw','stf'].includes(S.loc)?[]:[tr('barrierefrei','step-free')])]
     :[tr(`ab ${Math.min(...fav.rooms.map(r=>r.age))} J.`,`age ${Math.min(...fav.rooms.map(r=>r.age))}+`),tr('60 Min.','60 min'),tr('mit Schauspielern','with live actors'),tr('klimatisiert','air-conditioned'),...(fav.rooms.some(r=>r.strobe)?[tr('Stroboskop-Effekte','strobe effects')]:[])];
   const extrasTotal=P.external?0:(isOut?S.bw*12.9:S.drinks*2.5)+(P.shift||0)*39.5;
   const sumTotal=P.base+extrasTotal;
   const recBW=S.group==='jga'||n>=8;
   const extras=isOut?`<div class="extra"><div class="ico">${ic('wagon',26)}</div><div class="t"><b>${tr('Bollerwagen','Handcart')}${recBW?`<span class="badge">${tr('Empfohlen','Recommended')}</span>`:''}</b><span>${tr('Für euer Gepäck · 12,90 € pro Wagen','For your bags · €12.90 per cart')}</span></div>
       <div class="mini-step"><button data-act="bw-" aria-label="${tr('Einen Bollerwagen weniger','One handcart fewer')}">−</button><output>${S.bw}</output><button data-act="bw+" aria-label="${tr('Einen Bollerwagen mehr','One handcart more')}">+</button></div></div>`
     :`<div class="extra"><div class="ico">${ic('drink',26)}</div><div class="t"><b>${tr('Getränke vorab','Drinks in advance')}<span class="badge">${tr('Rabatt','Discount')}</span></b><span>${tr('2,50 € pro Getränk','€2.50 per drink')}</span></div>
       <div class="mini-step"><button data-act="dr-" aria-label="${tr('Ein Getränk weniger','One drink fewer')}">−</button><output>${S.drinks}</output><button data-act="dr+" aria-label="${tr('Ein Getränk mehr','One drink more')}">+</button></div></div>
       ${S.drinks!==n?`<button class="pill" data-act="drn">${tr('Eins pro Person','One per person')} (${n})</button>`:''}${shiftHTML(P,fav)}`;
   const ctaHTML=P.external?`<a class="cta ticket" href="${(EN?'/en':'')+fav.tour.external}" data-act="external" style="width:100%">${tr('Zur Tour und Termine','See the tour and dates')} ${ic('arrow',20,2.4)}</a><div class="note" style="text-align:center">${tr('Excaliburs Erben bucht ihr auf der Seite der Tour im Buchungskalender.','You book Excaliburs Erben in the booking calendar on the tour page.')}</div>`
     :fav.av&&fav.av.phoneOnly&&!P.request?`<a class="cta" href="tel:+4971311240684" style="width:100%">${tr('Anrufen: 07131 / 124 06 84','Call: +49 7131 124 06 84')}</a><div class="note" style="text-align:center">${tr('Online ist dieser Termin ausgebucht, telefonisch tragen wir euch noch ein.','This date is fully booked online, but we can still book you in by phone.')}</div>`:P.request?(S.group==='schule'?`<div class="note school-time">${ic('cal',18)}<span>${wfHasTime()?tr('Schulklassen spielen meist vormittags. Gebt unten euren Wunschtag und eure Wunschuhrzeit an. Wir planen den Termin für euch, auch außerhalb der Startzeiten im Shop.','School classes usually play in the morning. Enter your preferred day and time below. We schedule the date for you, also outside the start times in the shop.'):tr('Schulklassen spielen meist vormittags. Schreibt euren Wunschtag und eure Wunschuhrzeit in die Nachricht. Wir planen den Termin für euch, auch außerhalb der Startzeiten im Shop.','School classes usually play in the morning. Write your preferred day and time in the message. We schedule the date for you, also outside the start times in the shop.')}</span></div>`:'')+requestForm()
     :slotDone(fav)?`<button class="cta ticket" data-act="handoff" style="width:100%">${tr('In den Warenkorb','Add to basket')} ${ic('arrow',20,2.4)}</button><div class="note" style="text-align:center">${fmtDate(S.date)} · ${slotSel(fav).length===1?slotSel(fav)[0]+tr(' Uhr',''):slotSel(fav).map((t,i)=>(isOut?[fav.tour]:fav.rooms)[i].short+' '+t).join(' · ')}<br>${tr('Der Finder legt den Termin in den Warenkorb, bezahlt wird erst dort.','The finder adds the booking to your basket; you only pay there.')}</div>`
     :`<button class="cta ticket" data-act="handoff" style="width:100%">${tr('Termin wählen','Choose a time')} ${ic('arrow',20,2.4)}</button><div class="note" style="text-align:center">${slotPickable(fav)?tr('Tipp: Uhrzeit oben antippen, dann legt der Finder den Termin direkt in den Warenkorb.','Tip: tap a time above and the finder adds the booking straight to your basket.'):`${tr('Unsicher?','Not sure?')} <span class="sel">${tr('07131 / 124 06 84','+49 7131 124 06 84')}</span>`}</div>`;
   return frame(q(tr('Euer Erlebnis','Your experience'),'',summaryChips()+(S.io&&ioState(S).ask?`<span class="chip">${{in:tr('Drinnen','Indoors'),out:tr('Draußen','Outdoors'),egal:tr('Drinnen oder draußen','Indoors or outdoors')}[S.io]}</span>`:'')+`<button class="pill" data-act="restart" style="min-height:30px;font-size:13px">${tr('Ändern','Change')}</button>`)+
   (forced?`<div class="inline-note">${ic('pin',18)}<span>${forced}</span></div>`:'')+
   `<div class="stage"><div class="eyebrow gold res-eyebrow">${S.pick===0?tr('Passt am besten zu euch','Best match for you'):tr('Eure Auswahl','Your choice')}</div><div class="res"><div>
     <article class="fav"><div class="art" style="--tint:${it.tint};--ink:${it.ink}"><div class="posters n${isOut?1:fav.rooms.length}">${(isOut?[fav.tour]:fav.rooms).map(r=>poster(r,40)).join('')}</div></div>
       <div class="body"><div class="kind">${isOut?`${tr('Outdoor-Tour','Outdoor tour')} · ${loc.name}`:fav.rooms.length>1?`${fav.rooms.length} Escape Rooms · Heilbronn`:'Escape Room · Heilbronn'}</div>
       <h2>${title}</h2><p>${isOut?fav.tour.text:fav.rooms.length===1?fav.rooms[0].text:tr('Ihr teilt euch auf und spielt parallel. Danach vergleicht ihr, welches Team schneller war.','You split up and play in parallel. Afterwards you compare which team was faster.')}</p>
       <ul class="why">${why.map(w=>`<li>${ic('check',20,2.6)}${w}</li>`).join('')}</ul>${availHTML(fav)}
       <div class="facts">${facts.map(f=>`<span class="fact">${f}</span>`).join('')}</div>
       ${isOut&&S.group!=='kgb'&&!shortOnly(S)?`<div class="quick" style="justify-content:flex-start" role="group" aria-label="${tr('Tourlänge','Tour length')}"><button class="pill${!S.short?' sel':''}" data-act="short" data-val="0" aria-pressed="${!S.short}">${tr('Standard-Tour · 2–3 Std.','Standard tour · 2–3 hrs')}</button><button class="pill${S.short?' sel':''}" data-act="short" data-val="1" aria-pressed="${!!S.short}">${tr('Short-Tour · 1,5–2 Std.','Short tour · 1.5–2 hrs')}</button></div>`:''}
       <div class="price"><b>${eur(P.base)}</b><span class="who">${tr('für','for')} ${peopleLabel()} · ${tn(P.tariff)}</span></div>
       ${P.lines.length?`<div class="note">${P.lines.join('<br>')}</div>`:''}${P.cond?`<div class="cond">${P.cond}</div>`:''}</div></article>
     ${alts.length?`<div class="eyebrow" style="margin-top:22px">${tr('Auch passend','Also a good fit')}</div><div class="alts">${alts.map(a=>{const its=a.type==='out'?[a.tour]:a.rooms;const nm=a.type==='out'?a.tour.name:a.rooms.map(r=>r.short).join(' + ');const pa=pricing(a,S);
       const meta=a.compact?tr(`Mit 7. Person · ${a.rooms.length===1?'1 Raum':a.rooms.length+' Räume'} statt ${a.rooms.length+1}`,`With a 7th person · ${a.rooms.length===1?'1 room':a.rooms.length+' rooms'} instead of ${a.rooms.length+1}`):a.type==='out'?`${tr('Outdoor-Tour','Outdoor tour')} · ${(LOCS.find(l=>l.id===(S.loc||'hn'))||LOCS[0]).name}`:a.rooms.length>1?`${a.rooms.length} Escape Rooms · ${a.sizes.join(' + ')} ${tr('Personen','people')}`:'Escape Room · Heilbronn';
       return `<button class="alt" data-act="pick" data-val="${C.indexOf(a)}"><span class="posters-sm">${its.map(x=>poster(x,24)).join('')}</span><span class="alt-txt"><small>${meta}${a.av?(a.av.full?` · <em class="bad">${tr('an dem Tag ausgebucht','fully booked that day')}</em>`:a.av.phoneOnly?` · <em class="tel">${tr('nur noch telefonisch','by phone only')}</em>`:tr(' · noch frei',' · available')):''}</small><b>${nm}</b></span><span class="alt-price">${eur(pa.base)}</span></button>`}).join('')}</div>`:''}
   </div>
   <aside class="side">
     ${isOut?`<div class="box"><h3>${tr('Treffpunkt','Meeting point')}</h3><div class="loc"><b>${loc.name}</b> · ${loc.meet(n)}${sch?(loc.id==='hn'?sbahn():''):`${loc.park?`<br>${tr('Parken','Parking')}: ${placeLinks(loc.park)}`:''}${loc.eat?`<br>${tr('Einkehr','Food & drink')}: ${placeLinks(loc.eat)}`:''}`}</div>${eligibleLocs(S).length>1?`<button class="pill" data-act="goto" data-val="ort">${tr('Ort ändern','Change location')}</button>`:''}</div>`
       :(()=>{const h=LOCS[0];return `<div class="box"><h3>${tr('Adresse','Address')}</h3><div class="loc"><b>Exodus Escape Rooms</b> · Kaiserstraße 9, Heilbronn${sch?sbahn():`${h.park?`<br>${tr('Parken','Parking')}: ${placeLinks(h.park)}`:''}${h.eat?`<br>${tr('Einkehr','Food & drink')}: ${placeLinks(h.eat)}`:''}`}</div></div>`})()}
     ${P.external?'':`<div class="box"><h3>${tr('Macht’s noch besser','Make it even better')}</h3>${extras}</div>`}
     ${P.notes.length?`<div class="box">${tr('<h3>Gut zu wissen</h3>','<h3>Good to know</h3>')}<ul class="hints">${P.notes.map(h=>`<li>${h}</li>`).join('')}</ul></div>`:''}
     <div class="box${P.request?'':' stickybar'}"><div class="sum"><span>${tr('Gesamt','Total')}</span><b>${eur(sumTotal)} <small class="vat">${tr('(inkl. MwSt.)','(incl. VAT)')}</small></b></div><div class="who">${tr('für','for')} ${peopleLabel()} · ${tn(P.tariff)}</div>${extrasTotal?`<div class="note">${tr('inkl. Extras','incl. extras')} ${eur(extrasTotal)}</div>`:''}${ctaHTML}</div>
   </aside></div></div>`)},
 gtype(){return frame(q(tr('Was möchtest du verschenken?','What would you like to give?'),tr('Erlebnisse gibt es als Gutschein, der sich schön verpacken lässt.','Experiences come as a voucher that can be beautifully wrapped.'))+tilesHTML([
   {act:'gtype',val:'erlebnis',label:tr('Escape-Room-Erlebnis','Escape room experience'),sub:tr('Raum und Spieleranzahl stehen schon fest','Room and number of players already set'),icon:'door',t:TINTS.c,sel:S.g.type==='erlebnis'},
   {act:'gtype',val:'wert',label:tr('Wertgutschein','Gift voucher'),sub:tr('Frei einlösbar, auch für Outdoor-Touren','Redeemable for anything, including outdoor tours'),icon:'card',t:TINTS.a,sel:S.g.type==='wert'}],2))},
 gsize(){
   if(S.g.type==='erlebnis') return frame(q(tr('Für wie viele Personen?','For how many people?'),tr('Der Preis richtet sich nach der Gruppengröße.','The price depends on the group size.'))+
     `<div class="stage"><div class="tiles compact keepgrid" style="--cols:5">${[2,3,4,5,6].map(p=>tile({act:'gpersons',val:p,label:`${p} ${tr('Pers.','ppl')}`,sub:eur(STAFFEL[p]),icon:'users',t:TINTS.c,sel:S.g.persons===p})).join('')}</div></div>`);
   const am=EN?[[50,'A small thank-you'],[75,'A nice cushion'],[111,'Escape room for two'],[144,'Escape room for four'],[150,'Outdoor tour for 5'],[170,'Escape room for five'],[192,'Escape room for six'],[250,'A big present']]
     :[[50,'Kleines Dankeschön'],[75,'Gutes Polster'],[111,'Escape Room zu zweit'],[144,'Escape Room zu viert'],[150,'Outdoor-Tour für 5'],[170,'Escape Room zu fünft'],[192,'Escape Room zu sechst'],[250,'Großes Geschenk']];
   return frame(q(tr('Welcher Betrag?','Which amount?'),tr('Mit Beispielen, was man damit erleben kann.','With examples of what it gets you.'))+
     `<div class="stage"><div class="tiles vouchers keepgrid" style="--cols:4">${am.map(([v,s])=>tile({act:'gamount',val:v,raw:voucher(v),label:s,icon:'card',t:TINTS.a,sel:S.g.amount===v})).join('')}</div>
     <div class="stepper" style="max-width:640px;margin:18px auto 0;width:100%"><div class="lbl"><label for="gcustom">${tr('<b>Eigener Betrag</b>','<b>Custom amount</b>')}</label><span>${tr('Von 10 bis 500 €, auf den Cent genau','From €10 to €500, to the cent')}</span></div><div class="ctl"><input id="gcustom" type="text" inputmode="decimal" value="${!S.g.amount||am.some(x=>x[0]===S.g.amount)?'':S.g.amount}" placeholder="${tr('z. B. 75','e.g. 75')}" style="width:110px;min-height:46px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--fg);font:inherit;font-size:20px;padding:0 12px"><button class="cta" data-act="gcustom" style="min-height:46px;padding:0 20px">${tr('Weiter','Next')}</button></div></div></div>`)},
 gpack(){const it=[
   {act:'gpack',img:'gutschein-pdf',em:emMedal('mail',tr('Sofort per E-Mail','Instantly by email')),val:'pdf',label:GPACKS.pdf[0],sub:GPACKS.pdf[3],icon:'mail',t:TINTS.f},
   {act:'gpack',val:'hc',img:'hc-klassik',label:GPACKS.hc[0],sub:tr('4,80 € · per Post · 5 Designs','€4.80 · by post · 5 designs'),icon:'card',t:TINTS.a},
   {act:'gpack',val:'pop',img:'pop-feuerwerk',label:GPACKS.pop[0],sub:tr('ab 9,90 € · 3D-Motiv · 4 Designs','from €9.90 · 3D motif · 4 designs'),icon:'popup',t:TINTS.e}];
   if(S.g.type==='wert') it.push({act:'gpack',val:'ship',img:'pack-ship',label:GPACKS.ship[0],sub:tr('12,90 € · Bastelbogen mit Mini-Rätsel','€12.90 · craft sheet with mini puzzle'),icon:'ship',t:TINTS.c,tag:tr('Beliebt','Popular')});
   it.forEach(x=>x.sel=S.g.pack===x.val);
   return frame(q(tr('Wie soll der Gutschein ankommen?','How should the voucher arrive?'),'')+tilesHTML(it,it.length))},
 gextra(){return frame(q(tr('Noch ein Rätselspiel dazu?','Add a puzzle game?'),tr('Für alle, die schon vor dem Termin knobeln wollen.','For everyone who wants to start puzzling before the date.'))+tilesHTML([
   {act:'gexit',img:'exit-game',val:'1',label:tr('Ja, ein Exit-Game','Yes, an exit game'),sub:tr('EXIT – Das Spiel von Kosmos · 14,99 €','EXIT – The Game by Kosmos · €14.99'),icon:'box',t:TINTS.b,sel:S.g.exit===true},
   {act:'gexit',img:'gutschein-pur',em:emMedal('gift',tr('Nur der Gutschein','Just the voucher')),val:'0',label:tr('Nein danke','No thanks'),sub:tr('Nur der Gutschein','Just the voucher'),icon:'gift',t:TINTS.f,sel:S.g.exit===false&&cur!=='gextra'}],2))},
 gresult(){
   const G=S.g,val=G.type==='erlebnis'?STAFFEL[G.persons]:G.amount||0,pk=G.pack||'pdf';
   const [pn,pp0,designs]=GPACKS[pk];
   if(designs.length&&!designs.includes(G.design))G.design=designs[0];
   if(pk==='pdf'||!exitOK())G.exit=false;
   const pp=pk==='pop'&&G.design==='Geburtstagsfeuerwerk mit Musik'?11.9:pp0;
   const exitP=G.exit?14.99:0;
   const tot=val+pp+exitP;
   const mainImg=IMG[gPackImg(pk,G.design)];
   const alts=['hc','pop','ship','pdf'].filter(p=>p!==pk&&(p!=='ship'||G.type==='wert'));
   const exitImg=IMG['exit-game'];
   const extra=pk!=='pdf'&&exitOK()?`<div class="box"><h3>${tr('Macht’s noch besser','Make it even better')}</h3><div class="extra"><div class="ico${exitImg?' pic':''}">${exitImg?`<img src="${exitImg}" alt="" loading="lazy">`:ic('box',26)}</div><div class="t"><b>${tr('EXIT – Das Spiel','EXIT – The Game')}</b><span>${tr('Von Kosmos · 14,99 € · zum Knobeln schon vor dem Termin','By Kosmos · €14.99 · for puzzling before the date')}</span></div>
       <button class="pill toggle${G.exit?' sel':''}" data-act="gexit-t" aria-pressed="${!!G.exit}">${G.exit?ic('check',18,2.6)+tr('Dabei','Added'):tr('Dazu','Add')}</button></div></div>`:'';
   return frame(q(tr('Dein Geschenk','Your gift'),'')+`<div class="stage"><div class="res"><div>
     <article class="fav gift"><div class="art gift-art">${mainImg?`<img class="gcard" src="${mainImg}" alt="" decoding="async">`:ic(pk==='ship'?'ship':pk==='pop'?'popup':pk==='pdf'?'mail':'gift',110,1.2)}</div>
     <div class="body"><div class="kind">${G.type==='erlebnis'?tr('Erlebnisgutschein','Experience voucher'):tr('Wertgutschein','Gift voucher')} · ${pn}</div>
     <h2>${G.type==='erlebnis'?tr(`Escape Room für ${G.persons}`,`Escape room for ${G.persons}`):tr(`${eur(val)} Wertgutschein`,`${eur(val)} gift voucher`)}</h2>
     <p>${G.type==='erlebnis'?tr('Raum und Termin wählt ihr bei der Bestellung.','You choose room and date when ordering.'):tr('Einlösbar für alle Escape Rooms und Outdoor-Touren.','Redeemable for all escape rooms and outdoor tours.')}</p>
     <ul class="why"><li>${ic('check',20,2.6)}${pn}${pp?` (${eur(pp)})`:tr(' (kostenlos)',' (free)')}</li>${G.exit?`<li>${ic('check',20,2.6)}${tr('EXIT – Das Spiel von Kosmos (14,99 €)','EXIT – The Game by Kosmos (€14.99)')}</li>`:''}</ul>
     ${designs.length?`<div class="eyebrow">${tr('Design','Design')}</div><div class="designs">${designs.map(d=>{const u=IMG[(DESIGN_IMG[pk]||{})[d]];return `<button class="dsg${G.design===d?' sel':''}" data-act="gdesign" data-val="${d}" aria-pressed="${G.design===d}" lang="${LANG}">${u?`<span class="dimg"><img src="${u}" alt="" loading="lazy"></span>`:''}<span class="dname">${EN?dn(d):d.replace(/^(Geburtstags|Gänse)/,'$1\u00AD')}</span></button>`}).join('')}</div>`:''}
     </div></article>
     ${alts.length?`<div class="eyebrow" style="margin-top:22px">${tr('Auch passend','Also a good fit')}</div><div class="alts">${alts.map(p=>{const [n,pr,ds,info]=GPACKS[p],u=IMG[gPackImg(p)];
       return `<button class="alt" data-act="gpackalt" data-val="${p}"><span class="gthumb">${u?`<img src="${u}" alt="" loading="lazy">`:ic(p==='pdf'?'mail':p==='ship'?'ship':'gift',22)}</span><span class="alt-txt"><small>${info}</small><b>${n}</b></span><span class="alt-price">${pr?(p==='pop'?tr('ab ','from '):'')+'+ '+eur(pr):tr('kostenlos','free')}</span></button>`}).join('')}</div>`:''}
     </div>
     <aside class="side">${extra}<div class="box stickybar"><div class="sum"><span>${tr('Gesamt','Total')}</span><b>${eur(tot)} <small class="vat">${tr('(inkl. MwSt.)','(incl. VAT)')}</small></b></div>${G.exit?`<div class="note">${tr('inkl. Exit-Game','incl. exit game')}</div>`:''}
     <button class="cta ticket" data-act="handoff" style="width:100%">${tr('In den Warenkorb','Add to basket')} ${ic('arrow',20,2.4)}</button>
     <button class="pill" data-act="restart">${tr('Doch selbst spielen?','Play yourselves instead?')}</button></div></aside></div></div>`)}
};
const sbahn=()=>`<br>${tr('Anreise','Getting there')}: <a class="plink" href="https://maps.app.goo.gl/zdruqbLrrwMfnSi76" target="_blank" rel="noopener" data-place="S-Bahn Heilbronn Rathaus">${tr('S-Bahn-Haltestelle Heilbronn Rathaus','Heilbronn Rathaus tram/S-Bahn stop')}</a>`;
function placeLinks(t){
  return Object.keys(PLACE_LINKS).sort((a,b)=>b.length-a.length).reduce((acc,name)=>acc.replace(new RegExp('(^|[^>\\w])('+name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')(?![^<]*</a>)','g'),(m,pre,nm)=>{
    const u=PLACE_LINKS[name]||'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(name+' '+(PLACE_TOWN[name]||''));
    return `${pre}<a class="plink" href="${u}" target="_blank" rel="noopener" data-place="${name}">${nm}</a>`}),t)}
function shiftHTML(P,fav){
  if(!P.shiftable) return '';
  const k=fav.rooms.length,pair=k===2&&PAIRS.some(p=>p.every(id=>fav.rooms.some(r=>r.id===id)));
  return `<div class="extra" style="margin-top:6px"><div class="ico">${ic('cal',26)}</div><div class="t"><b>${tr('Alle gleichzeitig starten','Everyone starts together')}${k>=3||!pair?`<span class="badge">${tr('Empfohlen','Recommended')}</span>`:''}</b>
    <span>${tr('Wir verschieben Slots aus ihrer Standard-Startzeit, damit ihr nicht 30 bis 45 Minuten auf den nächsten Raum wartet. 39,50 € pro Slot, auf Anfrage und nur, wenn der Slot frei ist.','We move slots from their standard start time so you don’t wait 30 to 45 minutes for the next room. €39.50 per slot, on request and only if the slot is free.')}</span></div>
    <div class="mini-step"><button data-act="sh-" aria-label="${tr('Eine Slot-Verschiebung weniger','One slot shift fewer')}">−</button><output>${P.shift||0}</output><button data-act="sh+" aria-label="${tr('Eine Slot-Verschiebung mehr','One slot shift more')}">+</button></div></div>`;
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
/* QuinBook öffnet seine Fenster in einem eigenen Bereich (<div id="venuedoo-overlay-…">, ebenfalls abgeschirmt).
   Teil A merkt sich alle diese Bereiche in window.__exfRoots. */
const qbRoots=()=>{const a=[];const m=qbRoot();if(m)a.push(m);
  (window.__exfRoots||[]).forEach(([h,r])=>{if(h&&h.isConnected&&/^venuedoo/.test(h.id||'')&&!a.includes(r))a.push(r)});
  document.querySelectorAll('[id^="venuedoo-overlay"]').forEach(h=>{if(h.shadowRoot&&!a.includes(h.shadowRoot))a.push(h.shadowRoot)});return a};
const qbOpenDialog=()=>{const sel='[role="dialog"][data-state="open"]';for(const r of qbRoots()){const d=r.querySelector&&r.querySelector(sel);if(d)return d}return document.querySelector(sel)};
/* Texte im QuinBook-Shop: deutsch oder englisch, je nach Seitensprache */
const QBT={add:/^(In den Warenkorb|Add to basket)$/i,next:/^(Weiter|Next)$/i,more:/mehr anzeigen|show more/i,people:/^\s*(\d+)\s*(Teilnehmer|Participant)/i,rec:/empfehlung|recommendation/i,lang:EN?/^(english|englisch)$/i:/^(deutsch|german)$/i};
/* Englische Produktnamen im Shop (Gutscheine und Karten heißen in beiden Sprachen gleich) */
const QB_EN={'Kapitän Flynn und der Schatz der Poseidon':'Captain Flynn and the Treasure of the Poseidon','Endzeit - Kampf ums Überleben':'End Times - The Battle for Survival',
  'Leonardo da Vinci und das Elixier der Macht':'Leonardo da Vinci and the Elixir of Power','Das magische Portal':'The Magic Portal'};
const qbShow=n=>EN&&QB_EN[n]||n;
const qbNames=n=>[n,QB_EN[n]].filter(Boolean).map(x=>x.toLowerCase());
function qbCartCount(){const b=qbRoot()?.querySelector('button[aria-label^="WARENKORB"],button[aria-label^="SHOPPING"]');const m=b&&b.getAttribute('aria-label').match(/\((\d+)\)/);return m?+m[1]:0}
/* EXIT-Spiel von Kosmos: QuinBook zeigt es nur, solange Spiele auf Lager sind. Ohne Shop auf der Seite (Vorschau) bleibt es sichtbar. */
function qbExitImg(){return [...(qbRoot()?.querySelectorAll('img')||[])].find(i=>/^exit\b/i.test((i.alt||'').trim()))}
function exitOK(){if(CFG.exitGame!=null)return !!CFG.exitGame;return !qbRoot()||!!qbExitImg()}
function qbFindImg(name){const N=qbNames(name);return [...(qbRoot()?.querySelectorAll('img')||[])].find(i=>N.includes((i.alt||'').trim().toLowerCase()))}
function setReactValue(el,v){const d=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),'value');d.set.call(el,v);
  el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new FocusEvent('focusout',{bubbles:true}))}
async function qbAdd(step){
  const img=qbFindImg(step.product);const btn=img&&img.closest('button');if(!btn)throw new Error('Produkt nicht gefunden: '+step.product);
  const before=qbCartCount();btn.click();
  const dlg=await waitFor(qbOpenDialog,5000);
  if(step.amount!=null){const inp=await waitFor(()=>dlg.querySelector('input[aria-label="Voucher amount"]'),3000);
    setReactValue(inp,String(step.amount).replace('.',','));await sleep(350);}
  const add=[...dlg.querySelectorAll('button')].find(b=>QBT.add.test(b.textContent.trim()));if(!add)throw new Error('Knopf fehlt');
  add.click();
  await waitFor(()=>qbCartCount()>before,6000);
  await sleep(300);const still=qbOpenDialog();if(still)still.querySelector('[data-slot="dialog-close"]')?.click();
}
function handoffPlan(){
  if(S.mode==='gift'){const G=S.g,v=G.amount,prod=qbVoucher(v),pk=qbPack(G),st=[];
    st.push({auto:true,product:prod,amount:prod===QB_INDIVIDUAL?v:null,label:prod===QB_INDIVIDUAL?tr(`„${prod}“ mit ${eur(v)} in den Warenkorb`,`“${prod}” with ${eur(v)} into the basket`):tr(`„${prod}“ in den Warenkorb`,`“${prod}” into the basket`)});
    if(pk) st.push({auto:true,product:pk,label:tr(`„${pk}“ in den Warenkorb`,`“${pk}” into the basket`)});
    const ex=qbExitImg();if(G.exit&&ex) st.push({auto:true,product:ex.alt.trim(),label:tr(`„${ex.alt.trim()}“ in den Warenkorb`,`“${ex.alt.trim()}” into the basket`)});
    st.push({auto:false,label:tr('Warenkorb prüfen und auf „Buchung abschließen“ tippen','Check the basket and tap “Complete booking”')});
    return {kind:'gift',steps:st};}
  const f=candidates(S)[S.pick],P=pricing(f,S),items=f.type==='out'?[f.tour]:f.rooms,st=[];
  const dayTxt=(EN?{dofr:' (Thursday or Friday)',so:' (Sunday)',sa:' (Saturday)',momi:' (Monday to Wednesday)'}:{dofr:' (Donnerstag oder Freitag)',so:' (Sonntag)',sa:' (Samstag)',momi:' (Montag bis Mittwoch)'})[S.day]||'';
  const nm=x=>qbShow(QB[x.id]);
  st.push(S.date?{auto:false,date:S.date,label:tr(`Datum ${fmtDate(S.date)} im Shop auswählen`,`Select ${fmtDate(S.date)} in the shop`)}:{auto:false,label:tr(`Oben im Shop euer Datum wählen${dayTxt}`,`Choose your date at the top of the shop${dayTxt}`)});
  const chosen=slotDone(f)?slotSel(f):null;
  items.forEach((x,i)=>{const kgbT=S.group==='kgb'&&f.type==='out'&&P.tariff==='Kindergeburtstagstarif';
    const size=items.length>1?f.sizes[i]:kgbT?Math.max(6,S.kids+Math.max(0,S.adults-(S.kids<=8?1:S.kids<=12?2:3))):total(S);
    if(chosen){st.push({auto:false,time:chosen[i],highlight:QB[x.id],room:QB[x.id],size,tariff:P.tariff,anf:x.levels?endzeitEasy(S):null,short:f.type==='out'?isShort(S):null,band:f.type==='out'?(size<=12?'bis':'ab'):null,
      label:tr(`„${nm(x)}“ um ${chosen[i]} Uhr mit ${size} Teilnehmern in den Warenkorb`,`“${nm(x)}” at ${chosen[i]} with ${size} participants into the basket`)});return}
    st.push({auto:false,highlight:QB[x.id],room:QB[x.id],size,tariff:P.tariff,anf:x.levels?endzeitEasy(S):null,short:f.type==='out'?isShort(S):null,band:f.type==='out'?(size<=12?'bis':'ab'):null,
      label:(()=>{const eg=f.av&&!f.av.full&&!f.av.phoneOnly?(f.av.best?f.av.best.times[i]:f.av.use[0][0]):null;return tr(`Bei „${nm(x)}“ eine freie Uhrzeit antippen${eg?` (z. B. ${eg})`:''}. Tarif und ${size} Teilnehmer wählt der Finder vor, ihr tippt auf „In den Warenkorb“.`,`Tap a free time for “${nm(x)}”${eg?` (e.g. ${eg})`:''}. The finder preselects the rate and ${size} participants, you tap “Add to basket”.`)})()})});
  if(chosen){if(f.type==='out'&&S.bw)st.push({auto:false,upsell:'bw',label:tr(`${S.bw} Bollerwagen dazu`,`plus ${S.bw} handcart${S.bw>1?'s':''}`)});
    if(f.type==='in'&&S.drinks)st.push({auto:false,upsell:'drinks',label:tr(`${S.drinks} Softgetränke dazu`,`plus ${S.drinks} soft drinks`)});
    st.push({auto:false,label:tr('Warenkorb prüfen, auf „Buchung abschließen“ tippen und bezahlen','Check the basket, tap “Complete booking” and pay')});return {kind:'play',auto:true,steps:st}}
  if(f.type==='out'&&S.bw) st.push({auto:false,upsell:'bw',label:tr(`Danach zeigt der Shop „Unsere Empfehlungen“: Der Finder trägt ${S.bw} Bollerwagen ein, ihr tippt auf „Weiter“`,`The shop then shows “Our recommendations”: the finder enters ${S.bw} handcart${S.bw>1?'s':''}, you tap “Next”`)});
  if(f.type==='in'&&S.drinks) st.push({auto:false,upsell:'drinks',label:tr(`Danach zeigt der Shop „Unsere Empfehlungen“: Der Finder trägt ${S.drinks} Softgetränke ein, ihr tippt auf „Weiter“`,`The shop then shows “Our recommendations”: the finder enters ${S.drinks} soft drinks, you tap “Next”`)});
  st.push({auto:false,label:tr('Auf „Buchung abschließen“ tippen und bezahlen','Tap “Complete booking” and pay')});
  return {kind:'play',steps:st.filter(s=>s.label)};
}
/* Analytics: Jede neue Position im QuinBook-Warenkorb nach dem Klick auf Buchen zählt als finder_cart (bis 20 Minuten danach).
   result: im_warenkorb = der Finder hat sie selbst hineingelegt, im_warenkorb_gast = der Gast hat im Shop selbst gebucht */
let cartWatch=0;
function watchCart(plan,silent){const id=++cartWatch,t0=Date.now();let last=qbCartCount();
  (function tick(){if(id!==cartWatch||Date.now()-t0>20*60e3)return;const c=qbCartCount();
    if(c>last){track('finder_cart',{result:S.busy||(S.handoff&&S.handoff.silent)?'im_warenkorb':'im_warenkorb_gast',type:plan.kind,items:c-last})}
    last=c;setTimeout(tick,1000)})()}
async function runHandoff(){
  const plan=handoffPlan(),root=qbRoot();
  // Legt der Finder alles selbst in den Warenkorb, braucht es keinen Spickzettel und kein Scrollen: Fortschritt steht am Knopf, danach öffnet sich der Warenkorb
  const silent=!!root&&INLINE&&(plan.kind==='gift'||plan.auto);
  S.handoff={plan,preview:!root,silent,mini:matchMedia('(max-width:700px)').matches};S.inCart=null;
  if(silent){S.busy=true;render()}else renderPanel();if(!root)return;
  watchCart(plan,silent);
  document.body.classList.add('finder-handoff');hideOverlay();
  if(!silent)scrollToEl(qbHost());
  if(plan.kind==='play'){const ds=plan.steps.find(x=>x.date);if(ds){ds.state='run';renderPanel();ds.state=await qbSelectDate(ds.date).catch(()=>false)?'done':'open';renderPanel()}
    plan.steps.forEach(s=>{if(!s.highlight)return;const img=qbFindImg(s.highlight),card=img&&img.parentElement&&img.parentElement.parentElement;
      if(card){card.style.outline='3px solid #59AEFF';card.style.outlineOffset='4px';card.style.borderRadius='12px'}else s.missing=true});renderPanel();
    if(plan.auto&&plan.steps.find(x=>x.date).state==='done'){await qbAutoBook(plan);return}
    startSlotAssist(plan);return;}
  await waitFor(()=>qbFindImg(plan.steps[0].product),8000).catch(()=>{});
  for(const s of plan.steps.filter(x=>x.auto)){s.state='run';renderPanel();
    try{await qbAdd(s);s.state='done'}catch(e){s.state='fail';needHelp(plan);return}renderPanel();}
  cartDone(plan);
}
/* Alles liegt im Warenkorb: Warenkorb öffnen, im Finder bestätigen */
function cartDone(plan){
  qbRoot().querySelector('button[aria-label^="WARENKORB"],button[aria-label^="SHOPPING"]')?.click();
  plan.steps[plan.steps.length-1].state='now';
  if(S.handoff&&S.handoff.silent){S.busy=false;S.handoff=null;S.inCart=handoffKey();renderPanel();render()}else renderPanel();
}
/* Etwas klappte nicht automatisch: jetzt doch Spickzettel zeigen und zum Shop scrollen */
function needHelp(plan){if(S.handoff&&S.handoff.silent)track('finder_cart',{result:'manuell_weiter',type:plan.kind});if(S.handoff&&S.handoff.silent){S.handoff.silent=false;S.busy=false;render();scrollToEl(qbHost())}renderPanel()}
const handoffKey=()=>S.mode==='gift'?'g'+JSON.stringify(S.g):(()=>{const c=candidates(S)[S.pick];return c?slotKey(c)+JSON.stringify(slotSel(c))+S.bw+'|'+S.drinks:''})();
/* Slot-Fenster: sobald der Gast bei einem empfohlenen Angebot eine Uhrzeit antippt, wählt der Finder
   den passenden Tarif (Akkordeon) und die Teilnehmerzahl ("N Teilnehmer") vor. In den Warenkorb legt der Gast selbst. */
const TARIFF_KW={'Familientarif':/famil/i,'Kindergeburtstagstarif':/geburtstag|kinder/i,'Schulklassentarif':/schul|klasse/i,
  'Firmen-Sonderöffnung Mo–Mi':/firm|unternehm|team|sonder/i,'Firmentarif außerhalb Heilbronn':/firm|unternehm|team/i};
const ANY_KW=/famil|geburtstag|kinder|schul|klasse|firm|unternehm|team|sonder/i;
async function qbPreselect(dlg,step){
  // Spielsprache des Erlebnisses ("Wähle deine Erlebnis-Sprache" / "Choose your event language") passend zur Website
  const lb=[...dlg.querySelectorAll('button')].find(b=>b.offsetParent&&QBT.lang.test(b.textContent.trim()));if(lb){lb.click();await sleep(200)}
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
  const findN=()=>[...region.querySelectorAll('button')].find(b=>{const m=b.textContent.match(QBT.people);return m&&+m[1]===step.size});
  let btn=await waitFor(findN,1500).catch(()=>null);
  if(btn&&btn.offsetParent===null) btn=null; // liegt im zugeklappten Bereich
  // größere Gruppen stecken hinter "Mehr anzeigen"
  if(!btn){const more=[...region.querySelectorAll('button')].find(b=>QBT.more.test(b.textContent)&&b.getAttribute('aria-expanded')==='false');
    if(more){more.click();btn=await waitFor(findN,2500).catch(()=>null)}}
  if(!btn) return false;
  if(btn.getAttribute('aria-pressed')!=='true') btn.click();
  const add=[...dlg.querySelectorAll('button')].find(b=>QBT.add.test(b.textContent.trim()));
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
  const weiter=[...dlg.querySelectorAll('button')].find(b=>QBT.next.test(b.textContent.trim()));
  if(weiter){weiter.style.outline='3px solid #59AEFF';weiter.style.outlineOffset='2px'}
}
/* Datum im Shop anklicken: Kachel mit Wochentag / Tag / Monat suchen, sonst erst den Monatsknopf */
const MON3=['jan','feb','mär','apr','mai','jun','jul','aug','sep','okt','nov','dez'],MON3E=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
const monOK=(t,m)=>{t=t.trim().toLowerCase();return t.startsWith(MON3[m])||t.startsWith(MON3E[m])};
function qbDateTile(iso){const d=dateObj(iso),dd=pad2(d.getDate()),m3=MON3[d.getMonth()];
  const all=[...(qbRoot()?.querySelectorAll('div')||[])].filter(el=>{const k=el.children;return k.length>=3&&k.length<=4&&k[1].textContent.trim()===dd&&monOK(k[2].textContent,d.getMonth())&&k[0].textContent.trim().length<=4});
  return all.find(el=>el.offsetParent)||all[0]}
async function qbSelectDate(iso){
  const d=dateObj(iso),want=`${pad2(d.getDate())}.${pad2(d.getMonth()+1)}.${d.getFullYear()}`,ok=()=>{const t=qbText();return t.includes('Buchung für '+want)||t.includes('Order for '+want)};
  if(ok())return true;
  let tile=await waitFor(()=>qbDateTile(iso),4000).catch(()=>null);
  if(!tile){const m=[...qbRoot().querySelectorAll('button')].find(b=>b.textContent.trim().length<=6&&monOK(b.textContent,d.getMonth()));
    if(m){m.click();tile=await waitFor(()=>qbDateTile(iso),4000).catch(()=>null)}}
  if(!tile)return false;
  tile.click();return !!(await waitFor(ok,4000).catch(()=>false));
}
function qbSlots(name){const img=qbFindImg(name),card=img&&img.parentElement&&img.parentElement.parentElement;if(!card)return null;
  return [...card.querySelectorAll('button')].map(b=>{const t=(b.textContent||'').trim();if(!/^\d\d:\d\d$/.test(t))return null;
    const bg=((b.getAttribute('style')||'').match(/--slot-bg:\s*([^;]+)/)||[])[1]||'',h=parseFloat(bg);
    // 177 = frei (Petrol), 156 = nur telefonisch (Grün), "0 0% 0% / 0.20" = belegt
    return {t,state:b.disabled||bg.includes('/')||!h?'booked':h>=150&&h<170?'phone':'free'}}).filter(Boolean)}
/* Freie Zeiten eines Tages lesen. QuinBook zeigt das neue Datum sofort, die Zeiten kommen erst danach (je nach Verbindung
   deutlich später). Daher warten, bis alle Karten Zeiten haben und sich nichts mehr ändert. */
async function qbCheckDay(iso){
  const ready=await waitFor(()=>Object.values(QB).some(n=>qbFindImg(n)),12000).catch(()=>false);if(!ready)return null; // Shop noch nicht geladen
  const ok=await qbSelectDate(iso).catch(()=>false);if(!ok)return {date:iso,missing:true,map:{}};
  const read=()=>{const m={};Object.values(QB).forEach(n=>{const x=qbSlots(n);m[n]=x&&x.length?x:null});return m};
  let last='',same=0,map={},t0=Date.now();
  while(Date.now()-t0<10000){await sleep(250);map=read();const k=JSON.stringify(map),full=Object.values(map).every(Boolean);
    if(k===last){same++;if((full&&same>=2)||same>=8)break}else{same=0;last=k}}
  return {date:iso,map};
}
/* Uhrzeit schon im Finder wählen: nur bei online freien Zeiten und wenn über den Shop gebucht wird */
const slotKey=c=>[S.date,recName(c),total(S),S.pick].join('|');
function slotPickable(c){return !!(c&&c.av&&!c.av.full&&!c.av.phoneOnly&&S.date&&qbRoot()&&!pricing(c,S).request)}
function slotSel(c){const n=c.type==='out'?1:c.rooms.length,k=slotKey(c);const t=S.slot&&S.slot.k===k?S.slot.t:[];
  return Array.from({length:n},(_,i)=>t[i]&&c.av.use[i].includes(t[i])?t[i]:null)}
const slotDone=c=>slotPickable(c)&&slotSel(c).every(Boolean);
function availHTML(c){
  if(!S.date||!qbRoot())return '';const d=fmtDate(S.date);
  if(S.availBusy)return `<div class="avail">${tr(`Wir prüfen die freien Termine am ${d} …`,`Checking availability on ${d} …`)}</div>`;
  const A=S.avail;if(!A||A.date!==S.date)return '';
  if(A.missing)return `<div class="avail warn">${tr(`Für den ${d} ist online noch nichts buchbar. Fragt gern bei uns an.`,`Nothing is bookable online for ${d} yet. Feel free to send us a request.`)}</div>`;
  if(!c.av)return '';const items=c.type==='out'?[c.tour]:c.rooms,tel=tr('07131 / 124 06 84','+49 7131 124 06 84');
  if(c.av.full)return `<div class="avail warn">${tr(`Am ${d} leider ausgebucht. Schaut euch die Alternativen an oder wählt einen anderen Tag.`,`Sorry, fully booked on ${d}. Have a look at the alternatives or choose another day.`)}</div>`;
  const slots=items.length===1?c.av.use[0].map(t=>`<b class="slot">${t}</b>`).join(''):items.map((x,i)=>`<b class="slot">${x.short} ${c.av.best.times[i]}</b>`).join('');
  if(!c.av.phoneOnly&&slotPickable(c)){const sel=slotSel(c),one=items.length===1;
    const row=(i)=>c.av.use[i].map(t=>`<button class="slot pick${sel[i]===t?' sel':''}" data-act="slot" data-val="${i}|${t}" aria-pressed="${sel[i]===t}">${t}</button>`).join('');
    const best=!one&&c.av.best&&c.av.best.times.some((t,i)=>sel[i]!==t)?`<button class="pill slotbest" data-act="slotbest">${tr('Passende Kombi wählen','Pick the best combination')}: ${items.map((x,i)=>`${x.short} ${c.av.best.times[i]}`).join(' · ')}</button>`:'';
    return `<div class="avail pickable"><span>${tr(`Am ${d} noch frei${one?'':', je Raum eine Zeit'}. Tippt eure Uhrzeit an:`,`Available on ${d}${one?'':', one time per room'}. Tap your time:`)}</span>${one?row(0):items.map((x,i)=>`<div class="slotrow"><em>${x.short}</em>${row(i)}</div>`).join('')}${best}${!one&&c.av.best.span>45?`<small>${tr('Die Startzeiten liegen etwas auseinander. Ruft gern an, ob wir sie angleichen können.','The start times are a little apart. Give us a call and we’ll see if we can align them.')}</small>`:''}</div>`}
  if(c.av.phoneOnly)return `<div class="avail phone"><span>${tr(`Am ${d} online ausgebucht, telefonisch noch möglich:`,`Fully booked online on ${d}, still possible by phone:`)}</span>${slots}<small>${tr('Ruft uns an, dann tragen wir euch ein:','Call us and we’ll book you in:')} ${tel}</small></div>`;
  return `<div class="avail"><span>${tr(`Am ${d} ${items.length===1?'noch frei':'passt zusammen'}:`,`On ${d} ${items.length===1?'available':'this fits together'}:`)}</span>${slots}${items.length>1&&c.av.best.span>45?`<small>${tr('Die Startzeiten liegen etwas auseinander. Ruft gern an, ob wir sie angleichen können.','The start times are a little apart. Give us a call and we’ll see if we can align them.')}</small>`:''}</div>`;
}
/* Gewählte Uhrzeit selbst buchen: Zeit im Shop antippen, Tarif und Teilnehmer wählen, "In den Warenkorb",
   im Empfehlungs-Fenster Bollerwagen/Getränke eintragen und "Weiter". Klappt etwas nicht, übernimmt der Gast ab dort. */
async function qbAutoBook(plan){
  const rooms=plan.steps.filter(s=>s.room),fail=s=>{s.state='fail';renderPanel();startSlotAssist(plan)};
  for(const s of rooms){if(s.state==='done')continue;s.state='run';renderPanel();
    const img=await waitFor(()=>qbFindImg(s.room),4000).catch(()=>null),card=img&&img.parentElement&&img.parentElement.parentElement;
    const tb=card&&await waitFor(()=>[...card.querySelectorAll('button')].find(b=>(b.textContent||'').trim()===s.time&&!b.disabled),3000).catch(()=>null);
    if(!tb){s.label=tr(`Die Uhrzeit ${s.time} bei „${qbShow(s.room)}“ ist gerade weg. Bitte im Shop eine andere wählen.`,`${s.time} for “${qbShow(s.room)}” has just been taken. Please choose another time in the shop.`);return fail(s)}
    const before=qbCartCount();tb.click();
    const dlg=await waitFor(qbOpenDialog,5000).catch(()=>null);if(!dlg)return fail(s);
    dlg.dataset.finder='1';s.before=before;
    const ok=await qbPreselect(dlg,s).catch(()=>false);
    if(!ok){s.state='open';renderPanel();startSlotAssist(plan);return}
    await sleep(300);
    const add=[...dlg.querySelectorAll('button')].find(b=>QBT.add.test(b.textContent.trim()));if(!add||add.disabled){s.state='pre';renderPanel();startSlotAssist(plan);return}
    add.click();
    const t0=Date.now();let up=null,seen=0;
    while(Date.now()-t0<9000){await sleep(250);
      const d=qbOpenDialog(),ti=d?(d.querySelector('[data-slot="dialog-title"]')?.textContent||'').toLowerCase():'';
      if(d&&d!==up&&QBT.rec.test(ti)){up=d;d.dataset.finder='1';await qbUpsell(d,plan).catch(()=>{});await sleep(250);
        const w=[...d.querySelectorAll('button')].find(b=>QBT.next.test(b.textContent.trim()));if(w)w.click();
        plan.steps.filter(x=>x.upsell&&x.state==='pre').forEach(x=>x.state='done');renderPanel();continue}
      if(qbCartCount()>before&&!(d&&QBT.rec.test(ti))){if(!seen)seen=Date.now();else if(Date.now()-seen>900)break}}
    if(qbCartCount()<=before)return fail(s);
    s.state='done';renderPanel();await sleep(400)}
  plan.steps.filter(x=>x.upsell&&x.state!=='done').forEach(x=>x.state='open');
  const still=qbOpenDialog();if(still)still.querySelector('[data-slot="dialog-close"]')?.click();
  await sleep(300);cartDone(plan);
}
function startSlotAssist(plan){needHelp(plan);
  const iv=setInterval(async()=>{
    if(!S.handoff||S.handoff.plan!==plan){clearInterval(iv);return}
    const rooms=plan.steps.filter(s=>s.room);
    rooms.forEach(s=>{if((s.state==='pre'||s.state==='open')&&qbCartCount()>s.before){s.state='done';renderPanel()}});
    if(rooms.every(s=>s.state==='done')&&plan.steps[plan.steps.length-1].state!=='now'){plan.steps[plan.steps.length-1].state='now';renderPanel()}
    const dlg=qbOpenDialog();if(!dlg||dlg.dataset.finder)return;
    const title=(dlg.querySelector('[data-slot="dialog-title"]')?.textContent||'').trim().toLowerCase();
    if(QBT.rec.test(title)){dlg.dataset.finder='1';await qbUpsell(dlg,plan).catch(()=>{});renderPanel();return}
    const step=rooms.find(s=>qbNames(s.room).includes(title)&&s.state!=='done');if(!step)return;
    dlg.dataset.finder='1';step.before=qbCartCount();
    const ok=await qbPreselect(dlg,step).catch(()=>false);step.state=ok?'pre':'open';renderPanel();
  },400);
}
function renderPanel(){
  const pr=panelRoot();let el=pr.getElementById('handoff');
  if(!S.handoff||S.handoff.silent){if(el)el.remove();if(!S.handoff)document.body.classList.remove('finder-handoff');return}
  if(!el){el=document.createElement('aside');el.id='handoff';el.className='exf-root';el.setAttribute('aria-live','polite');pr.appendChild(el);
    el.addEventListener('click',e=>{const b=e.target.closest('[data-hd]');if(!b)return;if(b.dataset.hd==='toggle'){S.handoff.mini=!S.handoff.mini;renderPanel();return}const back=b.dataset.hd==='back';S.handoff=null;renderPanel();if(back)openFinder();})}
  const {plan,preview,mini}=S.handoff;let n=0;
  const failed=plan.steps.some(s=>s.state==='fail');
  el.classList.toggle('mini',!!mini);
  if(mini){const i=plan.steps.findIndex(s=>!['done','pre'].includes(s.state)),cs=plan.steps[i<0?plan.steps.length-1:i];
    el.innerHTML=`<div class="hd-head"><button class="hd-mini" data-hd="toggle" aria-expanded="false"><b>${tr('So geht’s weiter','Next steps')} · ${(i<0?plan.steps.length:i+1)}/${plan.steps.length}</b><span>${failed?tr('Bitte selbst im Shop: ','Please do this in the shop: '):''}${esc(cs.label)}</span></button><button class="iconbtn" data-hd="close" aria-label="${tr('Spickzettel schließen','Close guide')}">${ic('x',16,2)}</button></div>`;return}
  el.innerHTML=`<div class="hd-head"><h3>${tr('So geht’s weiter','Next steps')}</h3><span class="spacer"></span><button class="iconbtn sm" data-hd="toggle" aria-expanded="true" aria-label="${tr('Spickzettel verkleinern','Collapse guide')}">${ic('chev',16,2)}</button><button class="iconbtn" data-hd="close" aria-label="${tr('Spickzettel schließen','Close guide')}">${ic('x',18,2)}</button></div>
   ${preview?`<p class="hd-note"><b>${tr('Vorschau:','Preview:')}</b> ${tr('Auf exodus-hn.de öffnet sich jetzt euer QuinBook-Shop.','On exodus-hn.de your QuinBook shop opens now.')}${plan.kind==='gift'?tr(' Die grünen Schritte erledigt der Finder dort selbst.',' The finder does the green steps there itself.'):tr(' Das gewählte Angebot wird im Shop blau markiert.',' The chosen offer is highlighted in blue in the shop.')}</p>`:''}
   ${failed?`<p class="hd-note warn">${tr('Das hat nicht automatisch geklappt. Macht die offenen Schritte bitte selbst im Shop.','That didn’t work automatically. Please do the open steps yourself in the shop.')}</p>`:''}
   <ol>${plan.steps.map(s=>{n++;const cls=s.state==='done'?'done':s.state==='fail'?'fail':(s.state==='pre'||(preview&&s.auto))?'auto':'';
     const mark=s.state==='done'?'✓':s.state==='fail'?'!':s.state==='run'?'…':n;
     return `<li><span class="st ${cls}">${mark}</span><span>${esc(s.label)}${s.missing?` <small>${tr('(im Shop nicht gefunden)','(not found in the shop)')}</small>`:''}${s.state==='pre'?` <small>${tr('(vorausgewählt)','(preselected)')}</small>`:''}${s.state==='open'?(s.date?` <small>${tr('(bitte selbst auswählen)','(please select yourself)')}</small>`:` <small>${tr('(bitte Tarif und Personen selbst wählen)','(please choose rate and participants yourself)')}</small>`):''}</span></li>`}).join('')}</ol>
   <button class="pill" data-hd="back" style="margin-top:12px"${tr('>Zurück zum Finder<','>Back to the finder<')}/button>`;
}
function poster(x,s){return `<span class="poster" style="--tint:${x.tint};--ink:${x.ink}">${ic(x.icon,s,1.4)}${imgTag(IMGKEY[x.id])}</span>`}
function peopleLabel(){const n=total(S);
  if(family(S)) return tr(`${n} Personen (${S.kids} ${S.kids===1?'Kind':'Kinder'}, ${S.adults} ${S.adults===1?'Erwachsener':'Erwachsene'})`,`${n} people (${S.kids} ${S.kids===1?'child':'children'}, ${S.adults} ${S.adults===1?'adult':'adults'})`);
  if(S.group==='schule') return tr(`${n} Schüler`,`${n} pupils`);
  return tr(`${n} Personen`,`${n} people`);}
function momiSub(){const io=effIO(S),g=S.group;
  if(io==='in') return g==='firma'?tr('Escape Rooms als Sonderöffnung','Escape rooms as a special opening'):tr('Escape Rooms geschlossen','Escape rooms closed');
  if(io==='out') return g==='firma'&&total(S)>=12?tr('Outdoor in Heilbronn ab Di, außerhalb täglich','Outdoor in Heilbronn from Tue, elsewhere daily'):tr('Outdoor-Touren ab Dienstag','Outdoor tours from Tuesday');
  return g==='firma'?tr('Escape Rooms als Sonderöffnung, Outdoor ab Di','Escape rooms as a special opening, outdoor from Tue'):tr('Outdoor-Touren ab Dienstag','Outdoor tours from Tuesday');}
/* ---------- Anfrage über verstecktes Webflow-Formular ---------- */
const WEBFLOW_FORM_ID='finder-anfrage'; // ID des Webflow-Formulars (Form-Element, nicht der Form Block)
let wfHome=null;
function styleWfForm(){if(CFG.styleForm===false||document.getElementById('exf-form-style'))return;const st=document.createElement('style');st.id='exf-form-style';
  // jede Regel für beide Einbau-Arten erzeugen (& = Formular-Block)
  const PRE=['[data-finder-teaser] .w-form','#exodus-finder .w-form'];
  const raw=`&{margin:0;font-family:'bahnschrift-semicondensed','Bahnschrift SemiCondensed','Barlow Semi Condensed',sans-serif;color:#E0E0E0}
& label{display:block;margin:14px 0 6px;font-weight:700;font-size:15px;color:#E0E0E0}
& input[type=date],& input[type=time]{color-scheme:dark;min-height:48px}
& input:not([type=submit]):not([type=checkbox]):not([type=hidden]),& textarea,& select{display:block;width:100%;box-sizing:border-box;margin:0;padding:12px 14px;height:auto;min-height:46px;background:#031012;border:1px solid #1E393D;border-radius:0;color:#fff;font:inherit;font-size:16px;box-shadow:none}
& input:not([type=submit]):focus,& textarea:focus{border-color:#00A59E;outline:2px solid rgba(0,165,158,.35);outline-offset:0}
& input::placeholder,& textarea::placeholder{color:#6F8786}
& input[type=submit]{display:block;width:100%;margin-top:18px;padding:14px 18px;background:#AE8F53;border:0;border-radius:0;color:#031012;font:inherit;font-weight:700;font-size:17px;letter-spacing:.06em;text-transform:uppercase;cursor:pointer}
& input[type=submit]:hover{background:#C4A66B}
& .w-form-done{margin-top:12px;padding:16px;background:transparent;border:1px solid #00A59E;color:#fff;text-align:left}
& .w-form-fail{margin-top:12px;padding:14px;background:transparent;border:1px solid #E39A5B;color:#fff}
& [name="Angebot"],& [name="Anfrage"]{display:none!important}`;
  st.textContent=raw.split('\n').map(l=>{const i=l.indexOf('{');return l.slice(0,i).split(',').flatMap(x=>PRE.map(p=>x.trim().replace('&',p))).join(',')+l.slice(i)}).join('\n');
  document.head.appendChild(st)}
/* Formular finden: über die ID oder an den Feldern "Angebot" und "Anfrage" (falls Webflow eine eigene ID vergeben hat) */
function wfForm(){const f=document.getElementById(WEBFLOW_FORM_ID);if(f&&f.tagName==='FORM')return f;if(f){const i=f.querySelector('form');if(i)return i}
  const a=document.querySelector('form [name="Anfrage"]');return a&&a.form&&a.form.querySelector('[name="Angebot"]')?a.form:null}
function wfWrap(){const f=wfForm();return f?(f.closest('.w-form')||f.parentElement):null}
function parkForm(){}
function fillHidden(){const f=wfForm();if(!f||!$id('rq-slot'))return;const d=requestData();
  ['Angebot','Anfrage'].forEach(k=>{const el=f.querySelector(`[name="${k}"]`);if(el)el.value=d[k]})}
const wfHasTime=()=>{const f=wfForm();return !!(f&&f.querySelector('[name="Wunschtermin"]'))};
function placeForm(){const w=wfWrap();if(!w||!$id('rq-slot'))return;styleWfForm();if(w.parentElement!==host){host.appendChild(w)}w.setAttribute('slot','form');w.style.display='block';
  const f=wfForm(),k=requestData().Anfrage;
  if(w.dataset.sentKey&&w.dataset.sentKey!==k){delete w.dataset.sentKey;try{f.reset()}catch(e){}f.style.display='';w.querySelectorAll('.w-form-done,.w-form-fail').forEach(x=>x.style.display='none')}
  /* Felder Wunschtermin / Wunschuhrzeit im Webflow-Formular: als Datums- und Uhrzeitfeld, Datum aus dem Finder vorbelegt, bei Schulklassen Pflicht */
  const wd=f&&f.querySelector('[name="Wunschtermin"]'),wt=f&&f.querySelector('[name="Wunschuhrzeit"]');
  if(wd){if(wd.type!=='date'){try{wd.type='date'}catch(e){}}wd.min=isoToday();if(S.date&&(!wd.value||wd.dataset.auto===wd.value)){wd.value=S.date;wd.dataset.auto=S.date}wd.required=S.group==='schule'}
  if(wt){if(wt.type!=='time'){try{wt.type='time'}catch(e){}}wt.step=900;wt.required=S.group==='schule'}
  const msg=f&&f.querySelector('textarea');if(msg&&!wd){if(msg.dataset.ph==null)msg.dataset.ph=msg.placeholder||'';
    msg.placeholder=S.group==='schule'?tr('Wunschtag und Uhrzeit, z. B. Dienstag, 9:00 Uhr','Preferred day and time, e.g. Tuesday, 9:00'):msg.dataset.ph}
  fillHidden()}
// vor dem Absenden (Capture-Phase, also vor Webflows eigenem Handler) die versteckten Felder aktualisieren
document.addEventListener('submit',e=>{if(e.target===wfForm()){try{fillHidden();wfWrap().dataset.sentKey=requestData().Anfrage}catch(err){}
  // Analytics: Anfrage zählen, sobald Webflow die Erfolgsmeldung zeigt (reCAPTCHA und Pflichtfelder sind dann bestanden)
  const w=wfWrap(),done=w&&w.querySelector('.w-form-done'),t0=Date.now(),c=candidates(S)[S.pick];
  const iv=setInterval(()=>{if(done&&getComputedStyle(done).display!=='none'){clearInterval(iv);track('finder_request',{recommendation:c?recName(c):'',group:S.group||'',persons:S.group?total(S):0})}
    else if(Date.now()-t0>30000)clearInterval(iv)},400)}},true);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function requestData(){
  const C=candidates(S),f=C[S.pick],P=pricing(f,S),isOut=f.type==='out';
  const nm=isOut?f.tour.name:f.rooms.map(r=>r.short).join(' + ');
  const lines=[`Angebot: ${nm}`,
    `Gruppe: ${GROUPS[S.group]}, ${total(S)} Personen`+(S.group==='schule'&&S.klasse?`, Klasse ${S.klasse}`:'')+(family(S)?` (${S.adults} Erwachsene, ${S.kids} Kinder, jüngstes Kind ${S.age<12?'unter 12':S.age})`:''),
    isOut?`Ort: ${LOCS.find(l=>l.id===(S.loc||'hn')).name} · ${isShort(S)?'Short-Tour':'Standard-Tour'}`:`Räume: ${f.rooms.map((r,i)=>`${r.short} (${f.sizes[i]} P.)`).join(', ')}`,
    S.date?`Wunschtermin: ${fmtDate(S.date)}`:S.day?`Wunschtage: ${{momi:'Mo–Mi',dofr:'Do/Fr',sa:'Samstag',so:'Sonntag',open:'noch offen'}[S.day]}`:null,
    `Tarif laut Finder: ${P.tariff}, ${eur(P.base)}`,
    isOut&&S.bw?`Bollerwagen: ${S.bw}`:null, !isOut&&S.drinks?`Getränke vorab: ${S.drinks}`:null,
    P.shift?`Gleichzeitiger Start: ${P.shift} Slot-Verschiebung${P.shift>1?'en':''} à 39,50 € (bitte Verfügbarkeit prüfen)`:null,
    S.req.msg?`Nachricht: ${S.req.msg}`:null,EN?'Sprache: Englisch (Anfrage über die englische Website, bitte auf Englisch antworten)':null].filter(Boolean);
  return {Name:S.req.name.trim(),Email:S.req.mail.trim(),Telefon:S.req.tel.trim(),Angebot:nm,Anfrage:lines.join('\n')};
}
function sendViaWebflow(data){return new Promise(res=>{
  const form=wfForm();if(!form){res('preview');return}
  Object.entries(data).forEach(([k,v])=>{const el=form.querySelector(`[name="${k}"]`);if(el)el.value=v});
  const wrap=form.parentElement,done=wrap.querySelector('.w-form-done'),fail=wrap.querySelector('.w-form-fail'),t0=Date.now();
  const vis=el=>el&&getComputedStyle(el).display!=='none';
  const iv=setInterval(()=>{if(vis(done)){clearInterval(iv);res('ok')}else if(vis(fail)||Date.now()-t0>15000){clearInterval(iv);res('fail')}},300);
  form.requestSubmit?form.requestSubmit():form.querySelector('[type=submit]').click();
})}
function requestForm(){
  if(wfWrap()) return '<div id="rq-slot"><slot name="form"></slot></div>'; // echtes Webflow-Formular wird hier eingesetzt
  if(S.sent==='preview') return `<div class="sent">${tr('<b>Vorschau</b><p>Auf exodus-hn.de geht diese Anfrage über euer Webflow-Formular direkt in euer Postfach. Hier im Prototyp wird nichts verschickt.</p>','<b>Preview</b><p>On exodus-hn.de this request goes straight to your inbox via your Webflow form. Nothing is sent from this prototype.</p>')}
    <details>${tr('<summary>So kommt sie bei euch an</summary>','<summary>This is how it arrives</summary>')}<pre>${esc(Object.entries(requestData()).filter(([k])=>k!=='Anfrage').map(([k,v])=>`${k}: ${v||'–'}`).join('\n')+'\n\n'+requestData().Anfrage)}</pre></details>
    <button class="pill" data-act="unsend"${tr('>Zurück zum Formular<','>Back to the form<')}/button></div>`;
  if(S.sent==='ok') return `<div class="sent">${tr('<b>Danke, eure Anfrage ist bei uns.</b><p>Wir melden uns so schnell wie möglich bei euch.</p>','<b>Thank you, we have your request.</b><p>We will get back to you as soon as possible.</p>')}</div>`;
  const r=S.req;
  return `<form id="reqform" class="reqform" novalidate>
    <div class="note">${tr('<b style="color:var(--gold)">Vorschau:</b> Auf exodus-hn.de steht hier euer Webflow-Formular. Für diese Gruppe stimmen wir den Termin persönlich ab, eure Auswahl schicken wir automatisch mit.','<b style="color:var(--gold)">Preview:</b> On exodus-hn.de your Webflow form appears here. For this group we arrange the date personally; your selection is sent along automatically.')}</div>
    ${tr('<label for="rq-name">Name</label>','<label for="rq-name">Name</label>')}<input id="rq-name" autocomplete="name" value="${esc(r.name)}">
    ${tr('<label for="rq-mail">E-Mail</label>','<label for="rq-mail">Email</label>')}<input id="rq-mail" type="email" autocomplete="email" value="${esc(r.mail)}">
    ${tr('<label for="rq-tel">Handynummer</label>','<label for="rq-tel">Mobile number</label>')}<input id="rq-tel" type="tel" autocomplete="tel" value="${esc(r.tel)}">
    ${tr('<label for="rq-msg">Wunschtermin oder Nachricht <span class="opt">(optional)</span></label>','<label for="rq-msg">Preferred date or message <span class="opt">(optional)</span></label>')}<textarea id="rq-msg" rows="2">${esc(r.msg)}</textarea>
    <div class="captcha" aria-hidden="true"><span class="cbox"></span>${tr('Ich bin kein Roboter','I’m not a robot')}<small>reCAPTCHA</small></div>
    <div class="err" role="alert" ${S.reqErr?'':'hidden'}>${esc(S.reqErr)}</div>
    <button class="cta" type="submit" style="width:100%"${tr('>Anfrage schicken<','>Send request<')}/button>
    <div class="note" style="text-align:center">${tr('E-Mail oder Handynummer genügt.','Email or mobile number is enough.')}</div></form>`;
}
function stepper(key,label,sub,val){return `<div class="stepper"><div class="lbl"><b>${label}</b><span>${sub}</span></div><div class="ctl">
  <button class="iconbtn" data-act="${key}-" aria-label="${label} ${tr('weniger','fewer')}">−</button><span class="val">${val}</span><button class="iconbtn" data-act="${key}+" aria-label="${label} ${tr('mehr','more')}">+</button></div></div>`}
function contact(){return `<div class="contact">${tr('Telefon','Phone')} <span class="sel">${tr('07131 / 124 06 84','+49 7131 124 06 84')}</span> · <span class="sel">info@exodus-hn.de</span></div>`}

function requestText(){
  const C=candidates(S),f=C[S.pick],P=pricing(f,S);
  const nm=f.type==='out'?f.tour.name:f.rooms.map(r=>r.short).join(' + ');
  return `Hallo Exodus-Team,\n\nwir interessieren uns für: ${nm}\nGruppe: ${GROUPS[S.group]}, ${total(S)} Personen${S.klasse&&S.group==='schule'?`, Klasse ${S.klasse}`:''}\n${f.type==='out'?`Ort: ${LOCS.find(l=>l.id===(S.loc||'hn')).name}\n`:''}Tarif laut Finder: ${P.tariff}, ${eur(P.base)}\nWunschtermin: \n\nViele Grüße`;
}

/* app, host, scroller werden in mount() gesetzt */
function recName(c){return !c?'':c.type==='out'?c.tour.short:c.rooms.map(r=>r.short).join(' + ')}
let lastResultKey='';
function render(){pageImages();parkForm();app.innerHTML=(V[cur]||V.launch)();bindDots();placeForm();
  {const hb=app.querySelector('[data-act="handoff"]');
   if(hb&&S.busy){hb.disabled=true;hb.innerHTML=tr('Wird in den Warenkorb gelegt …','Adding to basket …')}
   else if(hb&&S.inCart&&S.inCart===handoffKey()){hb.dataset.act='opencart';hb.innerHTML=`${tr('Zum Warenkorb','Go to basket')} ${ic('arrow',20,2.4)}`;
     const nt=hb.nextElementSibling&&hb.nextElementSibling.classList.contains('note')?hb.nextElementSibling:null;const msg=`${ic('check',16,2.6)} ${tr('Liegt im Warenkorb. Bezahlt wird dort.','In your basket. You pay there.')}`;
     if(nt)nt.innerHTML=msg;else hb.insertAdjacentHTML('afterend',`<div class="note" style="text-align:center">${msg}</div>`)}}
  if(cur==='result'&&S.mode==='play'){const C=candidates(S),c=C[S.pick],key=JSON.stringify([S.group,total(S),S.io,S.exp,S.thrill,S.day,S.date,S.loc,S.pick]);
    if(c&&key!==lastResultKey){lastResultKey=key;const P=pricing(c,S);track('finder_result',{group:S.group,persons:total(S),io:effIO(S),date_known:S.date?'ja':'nein',
      recommendation:recName(c),value:P.base,currency:'EUR',tariff:P.tariff,booking:P.request?'anfrage':'shop',availability:c.av?(c.av.full?'ausgebucht':c.av.phoneOnly?'telefonisch':'frei'):'unbekannt'})}}
  if(cur==='gresult'){const key='g'+JSON.stringify(S.g);if(key!==lastResultKey){lastResultKey=key;track('finder_result',{mode:'gift',value:S.g.amount||0,currency:'EUR',packaging:S.g.pack||'pdf'})}}
  // Direktlink: Das Ergebnis steht, bevor der QuinBook-Shop auf der Seite ist. Dann jede Sekunde erneut schauen (höchstens 40 s)
  if(cur==='result'&&S.mode==='play'&&S.date&&!qbRoot()&&!S.shopWait&&(S.shopTries=(S.shopTries||0)+1)<=40){S.shopWait=true;setTimeout(()=>{S.shopWait=false;if(cur==='result'&&!qbRoot())render();else if(cur==='result')render()},1000)}
  if(cur==='result'&&S.mode==='play'&&S.date&&qbRoot()&&!S.availBusy&&(!S.avail||S.avail.date!==S.date)){
    S.availBusy=true;qbCheckDay(S.date).catch(()=>null).then(a=>{S.avail=a;S.availBusy=false;S.pick=0;if(cur==='result')render()})}}
function bindDots(){
  const t=app.querySelector('.tiles:not(.keepgrid)'),d=app.querySelectorAll('.dots i');if(!t||!d.length)return;
  t.addEventListener('scroll',()=>{const i=Math.round(t.scrollLeft/(t.scrollWidth/d.length));d.forEach((x,k)=>x.classList.toggle('on',k===Math.min(i,d.length-1)))},{passive:true});
}
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
app.addEventListener('click',e=>{
  const pl=e.target.closest('.plink');if(pl){track('finder_link',{place:pl.dataset.place});return}
  const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,v=b.dataset.val;
  if(['mode','group','age','klasse','io','exp','thrill','day','ort','gpack','gexit','gamount','gpersons','gdesign','short'].includes(a))track('finder_answer',{question:a,answer:String(v)});
  if(a==='external'){track('finder_handoff',{recommendation:'Excaliburs Erben',target:'tour_page'});return}
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
    case 'opencart':qbRoot()?.querySelector('button[aria-label^="WARENKORB"],button[aria-label^="SHOPPING"]')?.click();break;
    case 'slot':{const c=candidates(S)[S.pick];if(!c)break;const [i,t]=v.split('|'),cur2=slotSel(c);cur2[+i]=cur2[+i]===t?null:t;S.slot={k:slotKey(c),t:cur2};
      track('finder_answer',{question:'uhrzeit',answer:t});render();break;}
    case 'slotbest':{const c=candidates(S)[S.pick];if(c&&c.av&&c.av.best){S.slot={k:slotKey(c),t:c.av.best.times.slice()};render()}break;}
    case 'sh-':case 'sh+':{const f=candidates(S)[S.pick],k=f&&f.rooms?f.rooms.length:1;S.shift=clamp((S.shift||0)+(a==='sh+'?1:-1),0,k-1);render();break;}
    case 'pick':S.sent=false;S.shift=0;S.pick=+v;S.bw=0;S.drinks=0;render();if(scroller)scroller.scrollTo({top:0,behavior:'smooth'});break;
    case 'goto':go(v);break;
    case 'bw-':case 'bw+':S.bw=clamp(S.bw+(a==='bw+'?1:-1),0,3);render();break;
    case 'dr-':case 'dr+':S.drinks=clamp(S.drinks+(a==='dr+'?1:-1),0,99);render();break;
    case 'drn':S.drinks=total(S);render();break;
    case 'copy':{const t=requestText();const done=()=>{b.textContent=tr('Kopiert','Copied');};
      try{navigator.clipboard.writeText(t).then(done,()=>{b.textContent=tr('Kopieren nicht möglich','Copying not possible');})}catch(err){b.textContent=tr('Kopieren nicht möglich','Copying not possible')}break;}
    case 'gtype':S.g.type=v;S.g.pack=null;next();break;
    case 'gpersons':S.g.persons=+v;next();break; case 'gamount':S.g.amount=+v;next();break;
    case 'gcustom':{const el=$id('gcustom'),x=Math.round(parseFloat(el.value.replace(',','.'))*100)/100;if(x>=10&&x<=500){S.g.amount=x;next()}else{el.style.borderColor='var(--warn)';el.focus()}break;}
    case 'gpack':S.g.pack=v;S.g.design=null;if(v==='pdf')S.g.exit=false;next();break;
    case 'gexit':S.g.exit=v==='1';next();break;
    case 'gdesign':S.g.design=v;render();break;
    case 'gpackalt':track('finder_alternative',{recommendation:'Verpackung: '+v});S.g.pack=v;S.g.design=null;if(v==='pdf')S.g.exit=false;render();if(scroller)scroller.scrollTo({top:0,behavior:'smooth'});break;
    case 'gexit-t':S.g.exit=!S.g.exit;track('finder_answer',{question:'gexit_ergebnis',answer:S.g.exit?'1':'0'});render();break;
  }
});
app.addEventListener('input',e=>{const m={'rq-name':'name','rq-mail':'mail','rq-tel':'tel','rq-msg':'msg'}[e.target.id];if(m)S.req[m]=e.target.value});
app.addEventListener('submit',async e=>{
  if(e.target.id!=='reqform')return;e.preventDefault();const r=S.req;
  if(!r.name.trim()){S.reqErr=tr('Bitte gebt einen Namen an.','Please enter a name.');render();$id('rq-name')?.focus();return}
  const mailOk=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.mail.trim()),telOk=r.tel.replace(/\D/g,'').length>=6;
  if(!mailOk&&!telOk){S.reqErr=tr('Bitte gebt eine gültige E-Mail-Adresse oder Handynummer an, damit wir euch erreichen.','Please enter a valid email address or mobile number so we can reach you.');render();return}
  S.reqErr=null;const btn=e.target.querySelector('[type=submit]');btn.disabled=true;btn.textContent=tr('Wird gesendet …','Sending …');
  const res=await sendViaWebflow(requestData());
  if(res==='fail'){S.reqErr=tr('Das hat nicht geklappt. Bitte versucht es noch einmal oder ruft uns an: 07131 / 124 06 84.','That didn’t work. Please try again or call us: +49 7131 124 06 84.');render();return}
  S.sent=res;render();if(res==='ok'){const c=candidates(S)[S.pick];track('finder_request',{recommendation:recName(c),group:S.group,persons:total(S)})}
});
app.addEventListener('change',e=>{if(e.target.id==='dpick'){const v=e.target.value;S.date=v&&v>=isoToday()?v:null;render()}});
app.addEventListener('input',e=>{if(e.target.id==='nrange'){S.n=+e.target.value;const o=$id('nval');if(o)o.textContent=S.n;app.querySelectorAll('[data-act=nset]').forEach(p=>p.classList.toggle('sel',+p.dataset.val===S.n))}});
BOOT();
}
