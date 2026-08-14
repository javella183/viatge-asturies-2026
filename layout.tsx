:root{--font-geist-sans:Arial,sans-serif;--font-geist-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;--ink:#123b35;--deep:#0b3f38;--green:#0f7464;--lime:#d9ed89;--cream:#f7f5ed;--paper:#fffdf8;--muted:#6b7e78;--line:#d9e2dc;--shadow:0 18px 55px rgba(11,63,56,.12)}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:Arial,var(--font-geist-sans),sans-serif}button,a{font:inherit}button{color:inherit}a{text-decoration:none;color:inherit}.topbar{height:72px;position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(20px,5vw,76px);background:rgba(247,245,237,.9);backdrop-filter:blur(18px);border-bottom:1px solid rgba(18,59,53,.08)}.brand{display:flex;align-items:center;gap:10px;font-size:14px;letter-spacing:.13em}.brand-mark{display:grid;place-items:center;width:34px;height:34px;border-radius:50% 50% 44% 44%;background:var(--deep);color:var(--lime);font-family:Georgia,serif;font-style:italic;font-size:19px}.brand b{color:var(--green)}.main-nav{display:flex;align-items:center;gap:30px}.main-nav button{border:0;background:none;cursor:pointer;font-size:13px;font-weight:700}.main-nav button:hover{color:var(--green)}.menu-toggle{display:none;border:0;background:none;font-size:24px}.hero{min-height:660px;position:relative;overflow:hidden;background:var(--deep);color:white;display:grid;grid-template-columns:minmax(0,1.25fr) minmax(300px,.75fr);align-items:center;gap:7vw;padding:90px clamp(24px,7vw,110px) 110px}.hero:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.09) 1px,transparent 1px);background-size:22px 22px;mask-image:linear-gradient(to bottom,black,transparent 80%)}.hero-glow{position:absolute;border-radius:50%;filter:blur(2px)}.glow-one{width:430px;height:430px;background:#1f8f72;opacity:.36;right:8%;top:-180px}.glow-two{width:300px;height:300px;background:#bddf5c;opacity:.14;left:45%;bottom:-180px}.mountain{position:absolute;bottom:-175px;transform:rotate(45deg);border-radius:50px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.06)}.mountain-a{width:650px;height:650px;right:-40px}.mountain-b{width:450px;height:450px;right:340px;bottom:-265px}.hero-content,.trip-card{position:relative;z-index:2}.eyebrow,.kicker{font-size:11px;font-weight:800;letter-spacing:.2em}.eyebrow{color:var(--lime);margin-bottom:24px}.hero h1{font-family:Georgia,"Times New Roman",serif;font-size:clamp(56px,7.5vw,105px);font-weight:400;line-height:.91;letter-spacing:-.055em;margin:0;max-width:780px}.hero h1 em{color:var(--lime);font-weight:400}.hero-lead{font-size:18px;line-height:1.65;max-width:610px;color:#d3e3de;margin:30px 0 34px}.hero-actions{display:flex;gap:12px;flex-wrap:wrap}.primary,.secondary{min-height:50px;padding:0 22px;border-radius:4px;border:1px solid rgba(255,255,255,.2);display:inline-flex;align-items:center;gap:18px;font-size:13px;font-weight:800;cursor:pointer}.primary{background:var(--lime);color:var(--deep);border-color:var(--lime)}.primary:hover{background:white}.secondary{background:transparent;color:white}.secondary:hover{border-color:white}.trip-card{background:rgba(255,255,255,.96);color:var(--ink);padding:30px;border-radius:8px;box-shadow:0 30px 80px rgba(0,0,0,.24);transform:rotate(1.2deg);max-width:390px}.trip-card-top{display:flex;align-items:center;justify-content:space-between;padding-bottom:22px;border-bottom:1px solid var(--line)}.trip-card-top span{font-size:10px;letter-spacing:.16em;font-weight:800;color:var(--muted)}.trip-card-top b{font-family:Georgia,serif;font-size:28px;color:var(--green)}.trip-route{display:flex;gap:16px;align-items:center;margin:25px 0}.trip-route div{display:flex;flex-direction:column;gap:5px}.trip-route small{font-size:9px;letter-spacing:.15em;color:var(--muted)}.trip-route strong{font-family:Georgia,serif;font-size:23px}.route-dot{width:17px;height:17px;border-radius:50%;border:4px solid white;box-shadow:0 0 0 2px var(--green);background:var(--green)}.route-dot.end{background:var(--lime);box-shadow:0 0 0 2px #7fa02b}.route-line{height:50px;margin:-18px 0 -18px 8px;border-left:1px dashed #9eb2ab;display:flex;align-items:center}.route-line span{margin-left:15px;font-size:10px;color:var(--muted)}.trip-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding-top:22px;border-top:1px solid var(--line)}.trip-meta div{text-align:center;border-right:1px solid var(--line)}.trip-meta div:last-child{border:0}.trip-meta span{font-family:Georgia,serif;font-size:23px;display:block}.trip-meta small{font-size:8px;letter-spacing:.12em;color:var(--muted)}.quick-strip{max-width:1200px;margin:-35px auto 0;position:relative;z-index:3;display:grid;grid-template-columns:repeat(4,1fr);background:var(--paper);box-shadow:var(--shadow);border-radius:6px;padding:22px 10px}.quick-strip>div{display:flex;align-items:center;gap:14px;padding:8px 24px;border-right:1px solid var(--line)}.quick-strip>div:last-child{border:0}.quick-strip>div>span{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#edf4ef;color:var(--green);font-family:Georgia,serif;font-weight:bold}.quick-strip p{display:flex;flex-direction:column;gap:4px;margin:0}.quick-strip small{font-size:8px;letter-spacing:.14em;color:var(--muted);font-weight:800}.quick-strip strong{font-size:13px}.section{max-width:1200px;margin:0 auto;padding:100px 24px}.section-heading,.filter-row{display:flex;justify-content:space-between;align-items:end;gap:40px}.section-heading>p{max-width:440px;color:var(--muted);line-height:1.7}.kicker{color:var(--green);margin:0 0 13px}.section h2,.base-banner h2{font-family:Georgia,serif;font-size:clamp(38px,5vw,62px);font-weight:400;line-height:1.04;letter-spacing:-.035em;margin:0}.route-rail{display:grid;grid-template-columns:repeat(8,1fr);margin-top:54px;border-top:1px solid #b9c7c1}.route-rail button{position:relative;text-align:left;border:0;background:none;padding:25px 8px 8px;cursor:pointer;color:var(--muted)}.route-rail button:before{content:"";position:absolute;width:11px;height:11px;background:var(--cream);border:2px solid #9aafa7;border-radius:50%;top:-7px;left:8px}.route-rail button.active:before,.route-rail button:hover:before{background:var(--green);border-color:var(--green);box-shadow:0 0 0 5px rgba(15,116,100,.12)}.route-rail span{font-family:Georgia,serif;font-size:24px;display:block;color:var(--ink)}.route-rail small{font-size:9px;letter-spacing:.1em;text-transform:uppercase}.route-rail strong{font-size:10px;display:block;margin-top:7px;color:var(--ink)}.planner{padding-top:35px;scroll-margin-top:70px}.tabbar{position:sticky;top:72px;z-index:20;display:flex;gap:6px;padding:7px;background:#e8ebe3;border-radius:7px;margin-bottom:38px;overflow:auto}.tabbar button{flex:1;border:0;background:transparent;border-radius:5px;padding:13px 16px;min-width:max-content;font-size:12px;font-weight:800;cursor:pointer}.tabbar button.active{background:var(--paper);box-shadow:0 2px 9px rgba(11,63,56,.09);color:var(--green)}.tab-panel{animation:fade .35s ease}@keyframes fade{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}.filter-row h2{font-size:45px}.filters{display:flex;gap:4px;background:#e8ebe3;padding:4px;border-radius:5px}.filters button{border:0;background:transparent;padding:9px 13px;border-radius:4px;font-size:11px;font-weight:800;cursor:pointer}.filters button.active{background:var(--deep);color:white}.day-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;margin:34px 0 22px}.day-card{text-align:left;border:1px solid var(--line);border-radius:7px;background:var(--paper);padding:19px;cursor:pointer;min-height:210px;transition:.2s ease;box-shadow:0 3px 0 transparent}.day-card:hover,.day-card.selected{transform:translateY(-4px);box-shadow:var(--shadow);border-color:transparent}.day-card.selected{outline:2px solid var(--green)}.day-card-top{display:flex;align-items:center;justify-content:space-between}.day-card-top span{font-size:9px;font-weight:900;letter-spacing:.15em}.day-card-top i{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#edf4ef;color:var(--green);font-style:normal;font-size:18px}.day-card>small{display:block;color:var(--muted);font-size:10px;margin-top:25px}.day-card h3{font-family:Georgia,serif;font-weight:400;font-size:23px;margin:7px 0 5px}.day-card p{font-size:11px;color:var(--muted);line-height:1.45;margin:0}.day-stats{display:flex;gap:13px;margin-top:18px;font-size:9px;font-weight:800;color:var(--green)}.day-detail{background:var(--paper);border-radius:8px;border:1px solid var(--line);box-shadow:var(--shadow);overflow:hidden}.detail-head{position:relative;display:flex;align-items:center;gap:25px;padding:35px 40px;background:var(--deep);color:white}.detail-number{font-family:Georgia,serif;font-size:70px;color:var(--lime);line-height:1}.detail-head p{margin:0 0 5px;color:#bcd2cb;font-size:10px;letter-spacing:.14em;text-transform:uppercase}.detail-head h2{font-size:40px}.detail-head>div>span{display:block;margin-top:7px;color:#cfe0db;font-size:13px}.map-button{margin-left:auto;padding:13px 17px;border:1px solid rgba(255,255,255,.35);border-radius:4px;font-size:11px;font-weight:800;white-space:nowrap}.map-button:hover{background:white;color:var(--deep)}.detail-facts{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--line)}.detail-facts div{padding:18px 30px;border-right:1px solid var(--line)}.detail-facts div:last-child{border:0}.detail-facts small{display:block;color:var(--muted);font-size:8px;letter-spacing:.15em;font-weight:900;margin-bottom:6px}.detail-facts strong{font-family:Georgia,serif;font-size:20px;font-weight:400}.detail-columns{display:grid;grid-template-columns:1.25fr .75fr;gap:50px;padding:45px 40px}.timeline h3{font-family:Georgia,serif;font-size:25px;margin:0 0 30px}.timeline-item{display:grid;grid-template-columns:54px 14px 1fr;gap:14px;position:relative;min-height:78px}.timeline-item time{font-size:11px;font-weight:900;color:var(--green);padding-top:2px}.timeline-item:after{content:"";position:absolute;left:74px;top:15px;bottom:-2px;border-left:1px solid var(--line)}.timeline-item:last-child:after{display:none}.timeline-dot{width:10px;height:10px;border:2px solid var(--green);background:white;border-radius:50%;z-index:1}.timeline-item strong{font-size:13px}.timeline-item p{font-size:11px;line-height:1.5;color:var(--muted);margin:5px 0 0}.day-aside{display:flex;flex-direction:column;gap:12px}.info-card{background:#f1f4ed;padding:22px;border-radius:5px}.info-card>span{font-size:9px;letter-spacing:.16em;font-weight:900;color:var(--green)}.info-card p,.info-card li{font-size:11px;line-height:1.6;color:#536b64}.info-card ul{padding-left:16px;margin:12px 0 0}.food-card{background:#e2ef9b}.food-card p{color:var(--deep)}.planb{border-left:3px solid #d99d56;background:#fff4e5}.day-switch{display:flex;align-items:center;justify-content:space-between;padding:15px 40px;border-top:1px solid var(--line)}.day-switch button{border:0;background:none;font-size:10px;font-weight:800;cursor:pointer}.day-switch button:disabled{opacity:.3}.day-switch span{font-family:var(--font-geist-mono);font-size:10px;color:var(--muted)}.simple-panel{background:var(--paper);padding:clamp(28px,5vw,65px);border:1px solid var(--line);border-radius:8px}.panel-intro{max-width:720px}.panel-intro h2{font-size:50px}.panel-intro>p:last-child{color:var(--muted);line-height:1.7}.shopping-list{margin-top:45px;border-top:1px solid var(--line)}.shopping-list article{display:grid;grid-template-columns:70px 1fr;gap:20px;padding:27px 0;border-bottom:1px solid var(--line)}.shopping-index{font-family:Georgia,serif;font-size:34px;color:#a8b9b2}.shopping-list small{color:var(--green);font-size:9px;letter-spacing:.12em;font-weight:800}.shopping-list h3{font-family:Georgia,serif;font-size:24px;margin:5px 0 8px}.shopping-list p{margin:0;color:var(--muted);font-size:12px;line-height:1.65}.menu-bank{margin-top:35px;padding:30px;background:var(--deep);color:white;border-radius:6px}.menu-bank h3{font-family:Georgia,serif;font-size:25px;margin:0 0 20px}.menu-bank div{display:flex;flex-wrap:wrap;gap:8px}.menu-bank span{font-size:10px;border:1px solid rgba(255,255,255,.24);border-radius:20px;padding:9px 13px}.allergy-note{display:grid;grid-template-columns:160px 1fr;gap:20px;margin-top:16px;background:#fff1dc;border-left:3px solid #d98e45;padding:20px}.allergy-note b{font-size:11px;text-transform:uppercase;letter-spacing:.1em}.allergy-note p{margin:0;font-size:11px;line-height:1.6;color:#705c45}.check-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}.check-grid section{border:1px solid var(--line);border-radius:6px;padding:22px}.check-head{display:flex;align-items:center;gap:12px;margin-bottom:15px}.check-head>span{width:30px;height:30px;background:#edf4ef;border-radius:50%;display:grid;place-items:center;color:var(--green)}.check-head h3{font-family:Georgia,serif;font-size:20px;margin:0}.check-item{width:100%;display:flex;gap:10px;align-items:flex-start;text-align:left;border:0;background:none;padding:9px 0;cursor:pointer;font-size:11px;line-height:1.4}.checkbox{flex:0 0 18px;width:18px;height:18px;border:1px solid #9bb0a8;border-radius:3px;display:grid;place-items:center;color:white;font-size:11px}.check-item.checked{color:#96a39e;text-decoration:line-through}.check-item.checked .checkbox{background:var(--green);border-color:var(--green)}.reservation-table{margin-top:40px;border-top:1px solid var(--line)}.table-row{display:grid;grid-template-columns:1.7fr .7fr .5fr;align-items:center;gap:15px;padding:18px 8px;border-bottom:1px solid var(--line);font-size:12px}.table-row.table-head{font-size:8px;letter-spacing:.14em;color:var(--muted);font-weight:900}.status{width:max-content;padding:7px 9px;border-radius:20px;font-size:9px;font-weight:800}.status.confirmed{background:#ddefc8;color:#39723b}.status.pending{background:#fff0d4;color:#97651a}.contact-card{display:flex;align-items:center;justify-content:space-between;margin-top:30px;padding:25px 30px;background:var(--deep);color:white;border-radius:6px}.contact-card small{font-size:8px;letter-spacing:.14em;color:var(--lime)}.contact-card h3{font-family:Georgia,serif;font-size:24px;margin:6px 0}.contact-card p{font-size:11px;color:#bfd2cc;margin:0}.contact-card a{background:var(--lime);color:var(--deep);padding:14px 18px;border-radius:4px;font-weight:900}.budget-hero{display:flex;align-items:center;justify-content:space-between;margin-top:40px;background:var(--deep);color:white;border-radius:7px;padding:40px 50px}.budget-hero small{font-size:9px;color:var(--lime);letter-spacing:.16em;font-weight:900}.budget-hero strong{display:block;font-family:Georgia,serif;font-size:52px;font-weight:400;margin:7px 0}.budget-hero p{color:#c8dad4;font-size:11px}.budget-ring{width:150px;height:150px;border:18px solid rgba(255,255,255,.12);border-top-color:var(--lime);border-right-color:var(--lime);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center}.budget-ring span{font-family:Georgia,serif;font-size:24px}.budget-ring small{font-size:7px;color:white}.budget-bars{display:grid;gap:22px;margin-top:38px}.budget-bars label{display:flex;justify-content:space-between;font-size:12px;margin-bottom:8px}.budget-bars i{height:7px;background:#e3e8e0;display:block;border-radius:10px;overflow:hidden}.budget-bars em{display:block;height:100%;background:var(--green);border-radius:10px}.budget-note{margin-top:30px;padding:18px;background:#f0f4ec;color:var(--muted);font-size:11px;line-height:1.6}.base-banner{margin-top:35px;background:#cfe37d;display:flex;justify-content:space-between;align-items:end;gap:40px;padding:80px clamp(24px,8vw,130px)}.base-banner>div{max-width:800px}.base-banner h2{color:var(--deep)}.base-banner p:not(.kicker){max-width:680px;line-height:1.7;color:#38574f}.base-banner a{border-bottom:1px solid var(--deep);padding-bottom:5px;font-size:12px;font-weight:900;white-space:nowrap}footer{display:flex;align-items:center;justify-content:space-between;padding:38px clamp(24px,6vw,90px);background:var(--deep);color:white}footer p,footer a{font-size:11px;color:#b8cdc6}.mobile-nav{display:none}
@media(max-width:900px){.hero{grid-template-columns:1fr;padding-top:70px}.trip-card{max-width:none;transform:none}.quick-strip{margin:0;border-radius:0;grid-template-columns:repeat(2,1fr)}.quick-strip>div:nth-child(2){border-right:0}.quick-strip>div:nth-child(-n+2){border-bottom:1px solid var(--line)}.day-grid{grid-template-columns:repeat(2,1fr)}.route-rail{overflow:auto;display:flex}.route-rail button{min-width:125px}.detail-columns{grid-template-columns:1fr}.check-grid{grid-template-columns:1fr}.main-nav{display:none}.menu-toggle{display:block}.main-nav.open{display:flex;position:absolute;top:72px;left:0;right:0;background:var(--paper);padding:20px;flex-direction:column;box-shadow:var(--shadow)}}
@media(max-width:600px){body{padding-bottom:67px}.topbar{height:61px;padding:0 18px}.brand{font-size:11px}.brand-mark{width:30px;height:30px}.hero{min-height:auto;padding:70px 20px 55px;gap:45px}.hero h1{font-size:55px}.hero-lead{font-size:15px}.trip-card{padding:24px}.quick-strip{grid-template-columns:1fr 1fr}.quick-strip>div{padding:11px 14px;gap:8px}.quick-strip>div>span{display:none}.quick-strip strong{font-size:10px}.section{padding:68px 18px}.section-heading{display:block}.section-heading>p{font-size:12px}.route-rail{margin-top:35px}.planner{padding-top:20px}.tabbar{top:61px;margin-bottom:25px}.tabbar button{padding:11px 13px}.filter-row{display:block}.filters{margin-top:20px;overflow:auto}.filter-row h2{font-size:38px}.day-grid{grid-template-columns:1fr 1fr;gap:8px}.day-card{padding:14px;min-height:190px}.day-card h3{font-size:19px}.day-card p{font-size:10px}.day-stats{display:block}.day-stats span{display:block;margin-top:5px}.detail-head{padding:24px 20px;display:grid;grid-template-columns:50px 1fr}.detail-number{font-size:50px}.detail-head h2{font-size:30px}.map-button{grid-column:1/-1;margin:4px 0 0;text-align:center}.detail-facts div{padding:15px 10px}.detail-facts strong{font-size:14px}.detail-columns{padding:30px 20px;gap:25px}.day-switch{padding:15px 20px}.simple-panel{padding:30px 20px}.panel-intro h2{font-size:40px}.shopping-list article{grid-template-columns:46px 1fr}.shopping-index{font-size:25px}.allergy-note{grid-template-columns:1fr}.reservation-table{overflow:auto}.table-row{grid-template-columns:minmax(190px,1.7fr) 110px 80px;min-width:430px}.contact-card{align-items:flex-start;gap:20px;flex-direction:column}.budget-hero{padding:28px 22px}.budget-hero strong{font-size:36px}.budget-ring{width:100px;height:100px;border-width:12px}.budget-ring span{font-size:18px}.base-banner{padding:60px 20px;display:block}.base-banner h2{font-size:42px}.base-banner a{display:inline-block;margin-top:18px}footer{display:block;text-align:center}footer .brand{justify-content:center}footer p{margin:18px 0}.mobile-nav{position:fixed;z-index:60;bottom:0;left:0;right:0;height:67px;background:rgba(255,253,248,.96);backdrop-filter:blur(15px);border-top:1px solid var(--line);display:grid;grid-template-columns:repeat(4,1fr);padding-bottom:env(safe-area-inset-bottom)}.mobile-nav button{border:0;background:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-size:8px;font-weight:800;color:var(--muted)}.mobile-nav button span{font-size:17px}.mobile-nav button.active{color:var(--green)}}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;animation:none!important;transition:none!important}}

/* Actualització global 14/08: itinerari ampliat i bitllets privats */
.ticket-panel{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:28px;padding:24px 30px;background:#e9f7f3;border-bottom:1px solid #b9d7ce}
.ticket-panel>div:first-child>span{display:block;color:var(--green);font-size:10px;font-weight:900;letter-spacing:.13em}
.ticket-panel h3{font-family:Georgia,serif;font-size:27px;font-weight:400;margin:7px 0}
.ticket-panel p{max-width:780px;color:#45635a;font-size:13px;line-height:1.65;margin:0}
.ticket-email-note{display:flex;max-width:350px;flex-direction:column;gap:5px;padding:15px 17px;border:1px solid #8bb4a7;border-radius:7px;background:white;color:var(--green)}
.ticket-email-note small{font-size:10px;font-weight:900;letter-spacing:.12em}
.ticket-email-note strong{font-size:14px}
.ticket-email-note span{color:#45635a;font-size:12px;line-height:1.5}
.reservation-private-note{margin:12px 0 0;padding:10px 12px;border-radius:5px;background:#e9f7f3;color:#31564d;font-size:12px;line-height:1.5}
.reservation-actions button{border:1px solid #8bb4a7;border-radius:5px;background:white;color:var(--green);padding:11px 13px;font:inherit;font-size:12px;font-weight:900;cursor:pointer}
.day-highlights{padding:34px 40px;border-bottom:1px solid var(--line);background:#fffdf8}
.highlights-heading{display:grid;grid-template-columns:160px minmax(0,1fr);gap:2px 28px;align-items:end;margin-bottom:20px}
.highlights-heading .kicker{grid-row:1/3;align-self:center}
.highlights-heading h3{font-family:Georgia,serif;font-size:29px;font-weight:400;margin:0}
.highlights-heading>p:last-child{font-size:13px;line-height:1.6;color:var(--muted);margin:5px 0 0}
.highlights-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.highlights-grid article{display:grid;grid-template-rows:150px 1fr;overflow:hidden;border:1px solid var(--line);border-radius:7px;background:white}
.highlights-grid img{width:100%;height:100%;object-fit:cover}
.highlights-grid article>div{padding:16px;display:flex;flex-direction:column}
.highlights-grid small{color:var(--green);font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.07em}
.highlights-grid h4{font-family:Georgia,serif;font-size:21px;font-weight:400;margin:7px 0}
.highlights-grid p{font-size:13px;line-height:1.58;color:var(--muted);margin:0 0 14px}
.highlights-grid article>div>div{display:flex;gap:7px;flex-wrap:wrap;margin-top:auto}
.highlights-grid a{padding:8px 9px;border-radius:4px;background:#edf4ef;color:var(--green);font-size:11px;font-weight:900}
.status.walkin{background:#e7efff;color:#365f9a}

@media(max-width:900px){
  .highlights-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}

@media(max-width:600px){
  .ticket-panel{grid-template-columns:1fr;padding:22px 20px;gap:18px}
  .ticket-panel h3{font-size:24px}
  .ticket-panel p{font-size:15px}
  .ticket-email-note{max-width:none}
  .ticket-email-note strong{font-size:15px}
  .ticket-email-note span,.reservation-private-note{font-size:14px}
  .reservation-actions button{font-size:14px;padding:12px}
  .day-highlights{padding:28px 20px}
  .highlights-heading{display:block}
  .highlights-heading h3{font-size:27px;margin-top:5px}
  .highlights-heading>p:last-child{font-size:15px}
  .highlights-grid{grid-template-columns:1fr}
  .highlights-grid article{grid-template-rows:180px 1fr}
  .highlights-grid small{font-size:11px}
  .highlights-grid h4{font-size:23px}
  .highlights-grid p{font-size:15px}
  .highlights-grid a{font-size:13px}
}

/* Guia operativa v2 */
.quick-strip>a,.quick-strip>div,.quick-strip>button{display:flex;align-items:center;gap:14px;padding:8px 24px;border:0;border-right:1px solid var(--line);background:transparent;text-align:left;color:inherit;cursor:pointer}
.quick-strip>a:last-child,.quick-strip>div:last-child,.quick-strip>button:last-child{border-right:0}
.quick-strip>a>span,.quick-strip>div>span,.quick-strip>button>span{width:38px;height:38px;flex:0 0 38px;border-radius:50%;display:grid;place-items:center;background:#edf4ef;color:var(--green);font-family:Georgia,serif;font-weight:bold}
.quick-strip>a:hover,.quick-strip>button:hover{background:#f3f7ef}
.trip-progress{margin:0 0 22px;padding:15px 0 20px;border-top:1px solid var(--line)}
.trip-progress>div,.progress-summary>span{display:flex;justify-content:space-between;gap:15px;font-size:10px;font-weight:800;color:var(--muted)}
.trip-progress i,.progress-summary i{display:block;height:6px;margin-top:9px;background:#e2e8e1;border-radius:8px;overflow:hidden}
.trip-progress em,.progress-summary em{display:block;height:100%;background:var(--green);border-radius:8px;transition:width .25s ease}
.day-brief{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--line);background:#f8faf5}
.day-brief>div{padding:22px 30px;border-right:1px solid var(--line)}
.day-brief>div:last-child{border:0}
.day-brief small{font-size:8px;letter-spacing:.15em;font-weight:900;color:var(--green)}
.day-brief p{font-size:12px;line-height:1.65;margin:8px 0 0;color:#4e6961}
.day-brief .weather-brief{background:#fff6e8}
.timeline-item{grid-template-columns:78px 14px 1fr;min-height:94px}
.timeline-item:after{left:98px}
.timeline-copy>div{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.timeline-copy em{font-style:normal;font-size:8px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;background:#e7f0ea;color:var(--green);padding:4px 7px;border-radius:20px}
.timeline-copy>a{display:inline-block;margin-top:8px;font-size:9px;font-weight:900;color:var(--green);border-bottom:1px solid #9ab7ae;padding-bottom:2px}
.info-card p{font-size:11px;line-height:1.65;color:#536b64;margin:10px 0 0}
.resource-row{display:flex;gap:7px;flex-wrap:wrap}
.resource-row a,.store-actions a{padding:9px 11px;background:#e8f1ea;color:var(--green);border-radius:4px;font-size:9px;font-weight:900}
.day-actions,.day-contacts{padding:35px 40px;border-top:1px solid var(--line);background:#fbfcf8}
.day-contacts{background:#f3f5ef}
.subheading{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:20px}
.subheading h3{font-family:Georgia,serif;font-size:28px;font-weight:400;margin:0}
.subheading>span{width:46px;height:46px;border-radius:50%;display:grid;place-items:center;background:var(--deep);color:white;font-size:11px;font-weight:900}
.inline-checks{display:grid;grid-template-columns:repeat(2,1fr);gap:7px 20px}
.check-item.compact{padding:9px 12px;border:1px solid var(--line);background:white;border-radius:5px;align-items:center}
.check-item.compact.checked{background:#eef5e6;border-color:#c9ddb8}
.places-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.place-card{display:flex;flex-direction:column;justify-content:space-between;gap:18px;background:white;border:1px solid var(--line);border-radius:7px;padding:22px;min-width:0}
.place-copy>small{font-size:8px;letter-spacing:.15em;font-weight:900;color:var(--green)}
.place-copy h3{font-family:Georgia,serif;font-size:22px;font-weight:400;margin:6px 0}
.place-copy p{font-size:10px;color:var(--muted);margin:0;line-height:1.5}
.place-copy em{display:block;font-style:normal;font-size:10px;line-height:1.5;color:#536b64;margin-top:9px}
.place-actions,.reservation-actions,.store-actions,.base-links{display:flex;gap:7px;flex-wrap:wrap}
.place-actions a,.reservation-actions a{padding:9px 10px;border:1px solid var(--line);border-radius:4px;font-size:9px;font-weight:900;background:#f8faf5}
.place-actions .call-action,.reservation-actions .call-action{background:var(--lime);border-color:var(--lime);color:var(--deep)}
.store-list{display:grid;gap:14px;margin-top:40px}
.store-card{display:grid;grid-template-columns:70px 1fr;gap:20px;border:1px solid var(--line);border-radius:7px;padding:26px;background:#fcfdf9}
.store-main>small{font-size:9px;letter-spacing:.12em;font-weight:900;color:var(--green)}
.store-main h3{font-family:Georgia,serif;font-size:26px;font-weight:400;margin:6px 0}
.store-main address{font-style:normal;font-size:10px;font-weight:800;color:#48635b;margin-bottom:12px}
.store-main>p{font-size:11px;line-height:1.7;color:var(--muted);margin:0 0 15px}
.store-main>.check-item{margin-top:14px}
.list-intro{display:flex;align-items:end;justify-content:space-between;gap:35px;max-width:none}
.list-intro>div{max-width:720px}
.pending-toggle{border:1px solid var(--line);border-radius:5px;background:white;padding:12px 15px;font-size:10px;font-weight:900;cursor:pointer;white-space:nowrap}
.pending-toggle.active{background:var(--deep);color:white}
.progress-summary{max-width:600px;margin-top:30px}
.check-grid.four{grid-template-columns:repeat(2,1fr)}
.check-head>div p{font-size:9px;color:var(--muted);margin:4px 0 0;line-height:1.4}
.empty-state{font-size:11px;color:var(--green);background:#eef5e6;padding:13px;border-radius:4px}
.reservation-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:38px}
.reservation-card{border:1px solid var(--line);border-radius:7px;background:#fffdf8;padding:22px;transition:.2s ease}
.reservation-card.done{background:#f2f7eb;border-color:#cadfba}
.reservation-top{display:flex;justify-content:space-between;align-items:center;gap:10px}
.reservation-top>b{font-size:10px;color:var(--muted)}
.reservation-card h3{font-family:Georgia,serif;font-size:23px;font-weight:400;margin:17px 0 5px}
.reservation-card>p{font-size:10px;color:var(--muted);margin:0 0 15px}
.reservation-card>.check-item{margin-top:14px}
.contact-section{margin-top:55px}
.emergency-card{margin-top:16px;display:grid;grid-template-columns:auto auto 1fr auto;align-items:center;gap:20px;background:var(--deep);color:white;padding:24px 28px;border-radius:7px}
.emergency-card>span{font-size:9px;color:var(--lime);font-weight:900;letter-spacing:.14em}
.emergency-card strong{font-family:Georgia,serif;font-size:34px;color:var(--lime)}
.emergency-card p{font-size:10px;line-height:1.5;color:#c9d9d4;margin:0}
.emergency-card a{padding:12px 14px;background:var(--lime);color:var(--deep);border-radius:4px;font-size:10px;font-weight:900}
.day-budget-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:28px}
.day-budget-grid button{border:1px solid var(--line);background:white;border-radius:5px;padding:16px;text-align:left;cursor:pointer}
.day-budget-grid button:hover{border-color:var(--green)}
.day-budget-grid span,.day-budget-grid small{display:block;font-size:8px;color:var(--muted)}
.day-budget-grid strong{display:block;font-family:Georgia,serif;font-size:19px;margin:5px 0}
.base-banner{align-items:start}
.base-banner>div{max-width:950px}
.base-links{margin-top:22px}
.base-links a{border:1px solid rgba(11,63,56,.3);border-radius:4px;padding:10px 12px;margin:0}

@media(max-width:900px){
  .quick-strip>a,.quick-strip>div,.quick-strip>button{border-bottom:1px solid var(--line)}
  .quick-strip>a:nth-child(2),.quick-strip>div:nth-child(2),.quick-strip>button:nth-child(2){border-right:0}
  .day-brief{grid-template-columns:1fr}
  .day-brief>div{border-right:0;border-bottom:1px solid var(--line)}
  .inline-checks,.places-grid,.reservation-cards{grid-template-columns:1fr}
  .day-budget-grid{grid-template-columns:repeat(2,1fr)}
}

@media(max-width:600px){
  .quick-strip>a,.quick-strip>div,.quick-strip>button{padding:11px 14px;gap:8px;min-width:0}
  .quick-strip>a>span,.quick-strip>div>span,.quick-strip>button>span{display:none}
  .quick-strip p{min-width:0}
  .quick-strip strong{font-size:9px;white-space:normal}
  .timeline-item{grid-template-columns:64px 12px 1fr;gap:10px;min-height:104px}
  .timeline-item:after{left:80px}
  .timeline-item time{font-size:9px}
  .day-brief>div{padding:18px 20px}
  .day-actions,.day-contacts{padding:28px 20px}
  .subheading{align-items:center}
  .subheading h3{font-size:23px}
  .store-card{grid-template-columns:42px 1fr;padding:18px;gap:10px}
  .list-intro{display:block}
  .pending-toggle{margin-top:18px}
  .check-grid.four{grid-template-columns:1fr}
  .reservation-cards{grid-template-columns:1fr}
  .emergency-card{grid-template-columns:auto 1fr;gap:10px 18px}
  .emergency-card p{grid-column:1/-1}
  .emergency-card a{grid-column:1/-1;text-align:center}
  .day-budget-grid{grid-template-columns:repeat(2,1fr)}
  .mobile-nav{grid-template-columns:repeat(5,1fr)}
  .mobile-nav button{font-size:7px}
  .mobile-nav button span{font-size:15px}
}

/* Aparcaments pròxims */
.parking-card{display:flex!important;align-items:center;gap:12px;margin:16px 0 4px;padding:13px!important;border:1px solid #a9c5bc;border-radius:6px!important;background:#eef6f1!important;color:var(--deep)!important}
.parking-icon{width:34px;height:34px;flex:0 0 34px;display:grid;place-items:center;border-radius:6px;background:#1768a5;color:white;font-family:Arial,sans-serif;font-size:22px;font-weight:900}
.parking-card>span:last-child{display:flex;flex-direction:column;gap:2px;min-width:0}
.parking-card small{font-size:8px;letter-spacing:.12em;font-weight:900;color:#527169}
.parking-card b{font-size:12px}
.parking-card em{font-size:10px;font-style:normal;color:var(--green)}

/* Compra per supermercat */
.store-with-list{align-items:start}
.store-with-list .shopping-index{font-size:23px}
.store-actions button{border:1px solid #aac0b7;border-radius:4px;background:#eef5f0;color:var(--green);padding:9px 10px;font-size:10px;font-weight:900;cursor:pointer}
.store-shopping{margin:18px 0;padding:15px;border:1px solid var(--line);border-radius:6px;background:#fff}
.store-shopping .shopping-group-head{padding-bottom:9px}
.store-shopping .shopping-group-head h4{display:flex;align-items:center;gap:7px;margin:0;font-family:Georgia,serif;font-size:18px;font-weight:400}
.store-shopping .shopping-group-head b{min-width:34px;padding:7px;border-radius:20px;background:#edf4ef;color:var(--green);text-align:center;font-size:10px}
.basket-emoji{margin-right:7px}

/* Pagaments i tiquets */
.expense-form{grid-template-columns:repeat(4,minmax(0,1fr))}
.expense-form .note-field{grid-column:span 2}
.expense-form .receipt-field{grid-column:span 1}
.receipt-field input[type="file"]{height:auto;padding:10px;background:white;font-size:10px}
.receipt-field small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--green);font-size:9px}
.expense-list article{grid-template-columns:46px minmax(0,1fr) auto auto auto}
.expense-meta{display:flex;gap:6px;flex-wrap:wrap;margin:6px 0}
.expense-meta span{padding:4px 7px;border-radius:20px;background:#edf4ef;color:#34594f;font-size:8px;font-weight:800}
.receipt-thumb{width:60px;height:60px;position:relative;overflow:hidden;border:1px solid var(--line);border-radius:5px;background:#f2f4ef}
.receipt-thumb img{width:100%;height:100%;object-fit:cover}
.receipt-thumb span{position:absolute;left:0;right:0;bottom:0;padding:3px;background:rgba(8,50,44,.82);color:#fff;text-align:center;font-size:7px;font-weight:900}
.expense-actions label{width:32px;height:32px;display:grid;place-items:center;border:1px solid var(--line);border-radius:4px;background:white;color:var(--muted);cursor:pointer;font-size:14px}

@media(max-width:900px){
  .expense-form{grid-template-columns:repeat(2,minmax(0,1fr))}
  .expense-form .note-field{grid-column:span 1}
}

@media(max-width:600px){
  .parking-card small{font-size:10px}
  .parking-card b{font-size:14px}
  .parking-card em{font-size:12px}
  .store-card{grid-template-columns:43px 1fr}
  .store-shopping{margin-left:-52px;padding:12px}
  .store-actions button{font-size:12px}
  .expense-form{grid-template-columns:1fr}
  .expense-form .note-field,.expense-form .receipt-field{grid-column:auto}
  .receipt-field input[type="file"]{font-size:13px}
  .expense-list article{grid-template-columns:42px minmax(0,1fr) auto}
  .receipt-thumb{grid-column:2/3;width:86px;height:70px}
  .expense-list article>strong{grid-column:3;grid-row:1/3;align-self:start;margin-top:12px}
  .expense-actions{grid-column:2/4!important}
  .expense-meta span{font-size:10px}
}

/* Llegibilitat mòbil i contrast reforçat */
:root{--muted:#4b625b;--line:#c8d3cd}
.hero-lead{color:#e1ece8}
.detail-head p,.detail-head>div>span{color:#d7e7e2}
.contact-card p,.budget-hero p,footer p,footer a{color:#d0dfda}
.check-item.checked{color:#62766f}

@media(max-width:600px){
  body{font-size:16px;line-height:1.55}
  .brand{font-size:12px}
  .hero-lead{font-size:17px;line-height:1.65}
  .primary,.secondary{font-size:14px}
  .eyebrow,.kicker{font-size:12px;line-height:1.45}
  .trip-card-top span{font-size:12px}
  .trip-route small{font-size:11px}
  .route-line span{font-size:12px}
  .trip-meta small{font-size:10px}
  .quick-strip small{font-size:10px}
  .quick-strip strong{font-size:12px;line-height:1.35}
  .section-heading>p,.panel-intro>p:last-child{font-size:15px;line-height:1.65}
  .route-rail small{font-size:11px}
  .route-rail strong{font-size:12px;line-height:1.35}
  .tabbar button{font-size:14px}
  .filters button{font-size:13px}
  .day-card-top span{font-size:11px}
  .day-card>small{font-size:12px}
  .day-card p{font-size:13px;line-height:1.5}
  .day-stats{font-size:11px}
  .detail-head p{font-size:12px}
  .detail-head>div>span{font-size:15px;line-height:1.45}
  .map-button{font-size:13px}
  .detail-facts small{font-size:10px}
  .detail-facts strong{font-size:16px}
  .day-brief small,.info-card>span{font-size:11px}
  .day-brief p{font-size:15px;line-height:1.65}
  .timeline h3{font-size:27px}
  .timeline-item time{font-size:12px}
  .timeline-item strong{font-size:15px}
  .timeline-item p{font-size:14px;line-height:1.6}
  .timeline-copy em{font-size:10px}
  .timeline-copy>a{font-size:12px}
  .info-card p,.info-card li{font-size:14px;line-height:1.65;color:#3f5951}
  .resource-row a,.store-actions a{font-size:12px}
  .day-switch button,.day-switch span{font-size:12px}
  .shopping-list small,.store-main>small{font-size:11px}
  .shopping-list p,.store-main>p{font-size:14px}
  .store-main address{font-size:12px}
  .menu-bank span{font-size:13px}
  .allergy-note b{font-size:12px}
  .allergy-note p{font-size:14px}
  .check-head>div p{font-size:12px}
  .check-item{font-size:14px;line-height:1.5}
  .pending-toggle{font-size:12px}
  .empty-state{font-size:14px}
  .place-copy>small{font-size:10px}
  .place-copy p,.place-copy em{font-size:13px;line-height:1.55}
  .place-actions a,.reservation-actions a{font-size:12px}
  .reservation-top>b,.reservation-card>p{font-size:12px}
  .status{font-size:11px}
  .emergency-card>span{font-size:11px}
  .emergency-card p{font-size:13px}
  .emergency-card a{font-size:12px}
  .day-budget-grid span,.day-budget-grid small{font-size:11px}
  .budget-bars label{font-size:14px}
  .budget-note{font-size:14px}
  .base-banner p:not(.kicker){font-size:15px}
  .base-banner a{font-size:14px}
  footer p,footer a{font-size:13px}
  .mobile-nav button{font-size:10px}
  .mobile-nav button span{font-size:18px}
}

/* Control local: despeses, llistes i compra editable */
.add-form{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:30px 0 38px;padding:22px;background:#f1f4ed;border:1px solid var(--line);border-radius:7px}
.add-form label{display:flex;flex-direction:column;gap:7px;min-width:0}
.add-form label>span{font-size:9px;letter-spacing:.12em;font-weight:900;color:var(--green)}
.add-form input,.add-form select{width:100%;height:45px;border:1px solid #abbdb5;border-radius:5px;background:white;color:var(--ink);padding:0 12px;font-size:13px;outline:none}
.add-form input:focus,.add-form select:focus{border-color:var(--green);box-shadow:0 0 0 3px rgba(15,116,100,.12)}
.form-primary{align-self:end;min-height:45px;border:0;border-radius:5px;background:var(--deep);color:white;padding:0 18px;font-size:11px;font-weight:900;cursor:pointer}
.form-primary:hover{background:var(--green)}
.shopping-add{grid-template-columns:1.35fr 1fr 1fr auto}
.shopping-groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-bottom:55px}
.shopping-groups>section,.summary-card{border:1px solid var(--line);border-radius:7px;background:#fffdf8;padding:20px}
.shopping-group-head,.summary-title{display:flex;align-items:center;justify-content:space-between;gap:15px;padding-bottom:12px;border-bottom:1px solid var(--line)}
.shopping-group-head h3,.summary-title h3{font-family:Georgia,serif;font-size:21px;font-weight:400;margin:0}
.shopping-group-head span,.summary-title span{display:grid;place-items:center;min-width:30px;height:30px;padding:0 7px;border-radius:20px;background:#edf4ef;color:var(--green);font-size:10px;font-weight:900}
.managed-item,.managed-check-row{display:flex;align-items:center;gap:8px;border-bottom:1px solid #e2e8e4}
.managed-item:last-child,.managed-check-row:last-child{border-bottom:0}
.managed-item.done{color:#38534b;background:#edf4cf;border-left:4px solid var(--green);padding-left:6px}
.managed-toggle{flex:1;display:flex;align-items:center;gap:10px;min-width:0;border:0;background:none;text-align:left;padding:13px 4px;cursor:pointer}
.managed-toggle>b{font-size:13px}
.managed-toggle>span:last-child{display:flex;flex-direction:column;gap:3px;min-width:0}
.managed-toggle small{font-size:10px;color:var(--muted)}
.managed-item.done .managed-toggle b,
.managed-item.done .managed-toggle small{
  text-decoration:line-through;
  text-decoration-thickness:2px;
  text-decoration-color:#48665c;
}
.item-actions{display:flex;gap:4px;flex:0 0 auto}
.item-actions button,.edit-mini,.delete-mini{width:32px;height:32px;border:1px solid var(--line);border-radius:4px;background:white;color:var(--muted);cursor:pointer;font-size:15px}
.item-actions button:hover,.edit-mini:hover{border-color:var(--green);color:var(--green)}
.item-actions button:last-child:hover,.delete-mini:hover{border-color:#b94b42;color:#b94b42}
.store-heading{margin:20px 0 0}
.compact-stores{margin-top:20px}
.task-add{grid-template-columns:2fr 1fr auto;margin-bottom:28px}
.managed-check-row .check-item{flex:1;min-width:0}
.managed-check-row .edit-mini,.managed-check-row .delete-mini{flex:0 0 29px;width:29px;height:29px;font-size:13px}

.control-panel{padding-top:55px}
.control-summary{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:12px;margin:40px 0;background:var(--deep);color:white;border-radius:8px;padding:24px}
.budget-editor,.control-stat{min-height:130px;padding:20px;border:1px solid rgba(255,255,255,.15);border-radius:6px;background:rgba(255,255,255,.05)}
.budget-editor>label,.control-stat>small{display:block;font-size:9px;letter-spacing:.14em;font-weight:900;color:var(--lime)}
.budget-editor>div{display:flex;align-items:center;gap:7px;margin:12px 0 7px}
.budget-editor input{width:150px;max-width:80%;border:0;border-bottom:1px solid rgba(255,255,255,.45);background:transparent;color:white;font-family:Georgia,serif;font-size:37px;outline:none}
.budget-editor>div span{font-family:Georgia,serif;font-size:28px;color:var(--lime)}
.budget-editor>small,.control-stat>span{font-size:10px;color:#c9dad5}
.control-stat strong{display:block;font-family:Georgia,serif;font-size:31px;font-weight:400;margin:15px 0 7px}
.control-stat.over{background:#643d34;border-color:#97675b}
.budget-progress{grid-column:1/-1;display:grid;grid-template-columns:1fr auto;align-items:center;gap:18px}
.budget-progress i{height:11px;background:rgba(255,255,255,.15);border-radius:20px;overflow:hidden}
.budget-progress em{display:block;height:100%;background:var(--lime);border-radius:20px;transition:width .25s ease}
.budget-progress>span{display:flex;align-items:baseline;gap:8px;white-space:nowrap}
.budget-progress b{font-family:Georgia,serif;font-size:22px;color:var(--lime)}
.budget-progress small{font-size:9px;color:#d4e2de}
.expense-entry{padding:28px 0 8px;border-bottom:1px solid var(--line)}
.expense-form{grid-template-columns:.7fr 1.5fr 1.1fr .75fr}
.expense-form .note-field{grid-column:1/4}
.expense-form .form-primary{grid-column:4}
.control-grids{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:42px 0}
.summary-row{width:100%;display:flex;align-items:center;justify-content:space-between;gap:15px;padding:12px 2px;border:0;border-bottom:1px solid #e2e8e4;background:transparent;text-align:left;font-size:11px}
.summary-row:last-child{border-bottom:0}
.summary-row span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#4b625b}
.summary-row b{white-space:nowrap;font-size:11px}
.day-row{cursor:pointer}
.day-row:hover span{color:var(--green)}
.expense-history{margin-top:45px}
.expense-history>.subheading>strong{font-family:Georgia,serif;font-size:28px;color:var(--green)}
.expense-list{border-top:1px solid var(--line)}
.expense-list article{display:grid;grid-template-columns:46px 1fr auto auto;align-items:center;gap:16px;padding:16px 5px;border-bottom:1px solid var(--line)}
.expense-day{width:42px;height:42px;border-radius:50%;background:#edf4ef;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--green)}
.expense-day small{font-size:7px;font-weight:900}
.expense-day b{font-family:Georgia,serif;font-size:18px}
.expense-copy{min-width:0}
.expense-copy>small{font-size:8px;letter-spacing:.1em;font-weight:900;color:var(--green)}
.expense-copy h4{font-size:13px;margin:3px 0}
.expense-copy p{font-size:10px;color:var(--muted);margin:0}
.expense-list article>strong{font-family:Georgia,serif;font-size:18px;white-space:nowrap}
.data-tools{display:flex;align-items:center;justify-content:space-between;gap:35px;margin-top:45px;padding:28px;background:#edf3e8;border-left:4px solid var(--green);border-radius:5px}
.data-tools>div:first-child{max-width:600px}
.data-tools h3{font-family:Georgia,serif;font-size:25px;font-weight:400;margin:4px 0 8px}
.data-tools p:not(.kicker){font-size:11px;line-height:1.6;color:var(--muted);margin:0}
.tool-actions{display:flex;gap:7px;flex-wrap:wrap;justify-content:flex-end}
.tool-actions button{min-height:41px;border:1px solid #9db1a8;border-radius:4px;background:white;padding:0 13px;font-size:10px;font-weight:900;cursor:pointer}
.tool-actions button:first-child{background:var(--deep);border-color:var(--deep);color:white}

@media(max-width:900px){
  .add-form,.shopping-add,.expense-form{grid-template-columns:repeat(2,minmax(0,1fr))}
  .form-primary,.expense-form .form-primary{grid-column:auto}
  .expense-form .note-field{grid-column:1/2}
  .control-summary{grid-template-columns:1fr 1fr}
  .budget-editor{grid-column:1/-1}
  .data-tools{align-items:flex-start;flex-direction:column}
  .tool-actions{justify-content:flex-start}
}

@media(max-width:600px){
  .control-panel{padding-top:30px}
  .add-form,.shopping-add,.task-add,.expense-form{grid-template-columns:1fr;padding:16px;margin:22px 0 30px}
  .expense-form .note-field,.expense-form .form-primary{grid-column:auto}
  .add-form label>span{font-size:11px}
  .add-form input,.add-form select{font-size:16px;height:49px}
  .form-primary{min-height:49px;font-size:13px}
  .shopping-groups,.control-grids{grid-template-columns:1fr}
  .shopping-groups>section{padding:16px}
  .managed-toggle b{font-size:15px}
  .managed-toggle small{font-size:12px}
  .control-summary{grid-template-columns:1fr;padding:16px;margin:28px 0}
  .budget-editor,.control-stat{grid-column:auto;min-height:auto}
  .budget-progress{grid-template-columns:1fr;gap:8px}
  .budget-progress>span{justify-content:space-between}
  .budget-progress small{font-size:11px}
  .summary-row,.summary-row b{font-size:13px}
  .expense-list article{grid-template-columns:42px minmax(0,1fr) auto;gap:10px}
  .expense-list article>.item-actions{grid-column:2/4;justify-content:flex-end}
  .expense-copy>small{font-size:10px}
  .expense-copy h4{font-size:15px}
  .expense-copy p{font-size:12px}
  .expense-list article>strong{font-size:17px}
  .data-tools{padding:22px 18px}
  .data-tools p:not(.kicker){font-size:13px}
  .tool-actions{width:100%}
  .tool-actions button{flex:1 1 140px;font-size:12px}
}

/* Fitxes de visita, ressenyes i alternatives */
.day-detail{scroll-margin-top:145px}
.timeline-links{display:flex;gap:8px;flex-wrap:wrap;margin-top:9px}
.timeline-links a{display:inline-flex;align-items:center;min-height:32px;padding:6px 9px;border:1px solid #b8c8c1;border-radius:4px;background:#f8faf5;color:var(--green);font-size:10px;font-weight:900}
.timeline-links .review-action,.place-actions .review-action,.reservation-actions .review-action{background:#fff4d8;border-color:#e5c970;color:#735713}
.timeline-alternative{margin-top:11px;padding:12px 14px;border-left:3px solid #d99d56;border-radius:4px;background:#fff5e8;display:flex;flex-direction:column;gap:4px}
.timeline-alternative>span,.restaurant-alternative>small{font-size:8px;letter-spacing:.12em;font-weight:900;color:#8b642c}
.timeline-alternative>strong{font-family:Georgia,serif;font-size:16px;font-weight:400}
.timeline-alternative>small{font-size:10px;color:var(--muted)}
.timeline-alternative>div,.restaurant-alternative>div{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}
.timeline-alternative a,.restaurant-alternative a{padding:7px 8px;border:1px solid #ddc49c;border-radius:4px;background:white;color:#6a573c;font-size:9px;font-weight:900}
.visit-details{margin:12px 0 22px;border:1px solid #cbd8d2;border-radius:6px;background:#f6f8f3;overflow:hidden}
.visit-details summary{list-style:none;display:flex;align-items:center;gap:10px;padding:11px 13px;cursor:pointer;color:var(--green);font-size:10px;font-weight:900}
.visit-details summary::-webkit-details-marker{display:none}
.plus-icon{width:25px;height:25px;flex:0 0 25px;border-radius:50%;display:grid;place-items:center;background:var(--deep);color:white;font-size:18px;line-height:1;transition:transform .2s ease}
.visit-details[open] .plus-icon{transform:rotate(45deg)}
.visit-card{border-top:1px solid #cbd8d2}
.visit-card>img{display:block;width:100%;height:220px;object-fit:cover;background:#dfe7e2}
.visit-card>div{padding:15px}
.visit-card>div>p{margin:0;color:#3f5951;font-size:12px;line-height:1.65}
.visit-card>div>div{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}
.visit-card a{padding:8px 10px;border-radius:4px;background:#e5eee8;color:var(--green);font-size:9px;font-weight:900}
.restaurant-alternative{padding:14px;border:1px solid #efd4ac;border-radius:5px;background:#fff7eb;display:flex;flex-direction:column;gap:5px}
.restaurant-alternative>strong{font-family:Georgia,serif;font-size:18px;font-weight:400}
.restaurant-alternative>span{font-size:10px;color:var(--muted)}

@media(max-width:600px){
  .day-detail{scroll-margin-top:125px}
  .timeline-links a{font-size:12px;min-height:38px}
  .timeline-alternative>span,.restaurant-alternative>small{font-size:10px}
  .timeline-alternative>strong{font-size:19px}
  .timeline-alternative>small,.restaurant-alternative>span{font-size:12px}
  .timeline-alternative a,.restaurant-alternative a{font-size:11px;padding:8px 9px}
  .visit-details summary{font-size:13px;padding:12px}
  .visit-card>img{height:190px}
  .visit-card>div>p{font-size:14px;line-height:1.65}
  .visit-card a{font-size:11px;padding:9px 10px}
}

/* Previsió visual i galeria local de llocs */
.route-rail span em{font-family:system-ui,sans-serif;font-style:normal;font-size:16px;margin-left:7px;vertical-align:2px}
.weather-pill{display:flex!important;align-items:center;gap:6px;min-height:34px;padding:4px 8px;border-radius:20px;background:#eef4ef;letter-spacing:0!important}
.weather-pill b{font-size:18px;line-height:1}
.weather-pill small{font-size:9px;color:var(--deep);font-weight:900;letter-spacing:0;white-space:nowrap}
.day-weather-copy{margin-top:10px;padding-top:9px;border-top:1px solid var(--line);color:#3f5951;font-size:10px;font-weight:700;line-height:1.35}
.forecast-notice{display:flex;align-items:center;gap:12px;margin:25px 0 -16px;padding:13px 16px;border:1px solid #efd4ac;border-radius:6px;background:#fff6e8;color:#69583f}
.forecast-notice>span{width:31px;height:31px;flex:0 0 31px;display:grid;place-items:center;border-radius:50%;background:#f3d9aa;font-size:16px}
.forecast-notice p{margin:0;font-size:11px;line-height:1.5}
.detail-weather{margin-left:auto;display:flex;align-items:center;gap:10px;padding:9px 12px;border:1px solid rgba(255,255,255,.22);border-radius:6px;background:rgba(255,255,255,.07);white-space:nowrap}
.detail-weather>span{font-size:27px!important;line-height:1;margin:0!important;color:inherit!important}
.detail-weather>div{display:flex;flex-direction:column;gap:2px}
.detail-weather small{font-size:7px;letter-spacing:.12em;color:#cfe0db;font-weight:900}
.detail-weather strong{font-family:Georgia,serif;font-size:17px;font-weight:400;color:white}
.detail-head>.map-button{margin-left:0}
.weather-current{display:flex;align-items:center;gap:13px}
.weather-current>span{font-size:31px;line-height:1}
.weather-current>div{min-width:0}
.weather-current strong{display:block;margin-top:5px;font-family:Georgia,serif;font-size:22px;font-weight:400;color:var(--deep)}
.weather-current p{margin-top:3px}
.weather-advice{padding-top:12px;border-top:1px solid #ead6b5}
.visit-media{position:relative;display:grid;place-items:center;width:100%;height:220px;background:linear-gradient(135deg,#dfe7e2,#edf2e7);overflow:hidden}
.visit-media>img{display:block;width:100%;height:100%;object-fit:cover}
.visit-media>span{display:none;padding:20px;color:#4b625b;font-size:12px;font-weight:800;text-align:center}
.visit-media.image-missing>span{display:block}

@media(max-width:600px){
  .forecast-notice{margin:20px 0 -10px;padding:12px}
  .forecast-notice p{font-size:13px}
  .weather-pill{padding:4px 7px}
  .weather-pill small{font-size:10px}
  .day-weather-copy{font-size:12px}
  .detail-weather{grid-column:1/-1;margin:2px 0 0;justify-content:center}
  .detail-head>.map-button{grid-column:1/-1}
  .visit-media{height:190px}
}

/* Àlbum familiar local i missions fotogràfiques */
.photo-mission{margin:12px 0 25px;padding:15px;border:1px dashed #b9c8c0;border-radius:7px;background:#fbfaf2}
.photo-mission.completed{border-style:solid;border-color:#a9c990;background:#f3f8ec}
.photo-mission-head{display:grid;grid-template-columns:38px 1fr;gap:11px;align-items:start}
.photo-mission-icon{width:36px;height:36px;display:grid;place-items:center;border-radius:50%;background:#e6efe8;color:var(--green);font-size:17px;font-weight:900}
.photo-mission.completed .photo-mission-icon{background:var(--green);color:white}
.photo-mission-head small{display:block;font-size:8px;letter-spacing:.13em;font-weight:900;color:var(--green)}
.photo-mission-head strong{display:block;margin:3px 0;font-family:Georgia,serif;font-size:17px;font-weight:400;color:var(--deep)}
.photo-mission-head p{margin:0!important;font-size:11px!important;line-height:1.5!important;color:#50665f!important}
.memory-preview{display:grid;grid-template-columns:105px 1fr;gap:13px;margin:14px 0 0;padding:9px;border-radius:6px;background:white;border:1px solid #d7e0db}
.memory-preview img{width:105px;height:82px;object-fit:cover;border-radius:4px}
.memory-preview figcaption{display:flex;flex-direction:column;justify-content:center;gap:4px;min-width:0}
.memory-preview figcaption b{font-size:11px;color:var(--deep)}
.memory-preview figcaption span{font-size:10px;color:var(--muted);line-height:1.4}
.memory-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}
.memory-actions label,.memory-actions button,.memory-actions a{display:inline-flex;align-items:center;justify-content:center;min-height:36px;margin:0;padding:8px 10px;border:1px solid #b8c8c1;border-radius:4px;background:white;color:var(--green);font-family:inherit;font-size:9px;font-weight:900;cursor:pointer}
.memory-actions .memory-primary{border-color:var(--deep);background:var(--deep);color:white}
.memory-actions .memory-primary.disabled{opacity:.55;pointer-events:none}
.memory-actions .memory-delete{color:#a13e36}
.day-album{margin:25px 0 0;padding:28px;border-top:1px solid var(--line);background:#f7f3e7}
.album-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:30px}
.album-heading h3{margin:4px 0 7px;font-family:Georgia,serif;font-size:28px;font-weight:400;color:var(--deep)}
.album-heading p:not(.kicker){margin:0;color:var(--muted);font-size:11px}
.album-heading>span{display:flex;align-items:baseline;gap:5px;white-space:nowrap;color:var(--green);font-size:12px;font-weight:900}
.album-heading>span b{font-family:Georgia,serif;font-size:30px;font-weight:400}
.album-progress{display:grid;grid-template-columns:1fr auto;align-items:center;gap:14px;margin:20px 0}
.album-progress i{height:8px;border-radius:20px;background:#dce5dc;overflow:hidden}
.album-progress em{display:block;height:100%;border-radius:20px;background:var(--green);transition:width .25s ease}
.album-progress small{font-size:9px;color:var(--muted);font-weight:800}
.day-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.day-gallery figure{margin:0;border-radius:6px;overflow:hidden;background:white;border:1px solid var(--line)}
.day-gallery img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}
.day-gallery figcaption{display:flex;flex-direction:column;gap:2px;padding:10px}
.day-gallery figcaption b{font-size:10px;color:var(--green)}
.day-gallery figcaption span{font-size:10px;color:var(--deep)}
.day-gallery figcaption small{margin-top:3px;font-size:9px;line-height:1.4;color:var(--muted)}
.album-empty{display:flex;align-items:center;gap:13px;padding:17px;border:1px dashed #b9c8c0;border-radius:6px;background:rgba(255,255,255,.55)}
.album-empty span{font-size:25px}
.album-empty p{margin:0;font-size:11px;line-height:1.5;color:var(--muted)}

@media(max-width:600px){
  .photo-mission{padding:14px;margin-bottom:22px}
  .photo-mission-head small{font-size:10px}
  .photo-mission-head strong{font-size:20px}
  .photo-mission-head p{font-size:14px!important}
  .memory-preview{grid-template-columns:88px 1fr}
  .memory-preview img{width:88px;height:76px}
  .memory-preview figcaption b{font-size:13px}
  .memory-preview figcaption span{font-size:12px}
  .memory-actions label,.memory-actions button,.memory-actions a{flex:1 1 135px;min-height:43px;font-size:11px;text-align:center}
  .day-album{padding:24px 18px}
  .album-heading{gap:15px}
  .album-heading h3{font-size:25px}
  .album-heading p:not(.kicker){font-size:13px;line-height:1.5}
  .album-progress{grid-template-columns:1fr;margin:16px 0}
  .album-progress small{font-size:11px}
  .day-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}
  .day-gallery figcaption b,.day-gallery figcaption span{font-size:12px}
  .day-gallery figcaption small,.album-empty p{font-size:12px}
}

/* Identitat visual de la família Avellà-Ferrer */
.brand-mark{
  width:40px;height:40px;flex:0 0 40px;border-radius:13px;
  border:1px solid rgba(217,237,137,.55);
  box-shadow:inset 0 0 0 4px var(--deep),inset 0 0 0 5px rgba(217,237,137,.22);
  font-family:Georgia,"Times New Roman",serif;font-size:15px;font-style:normal;font-weight:700;letter-spacing:-.07em;
}
.hero{
  min-height:780px;grid-template-columns:minmax(0,1.05fr) minmax(440px,.95fr);
  grid-template-areas:"content visual" "card visual";grid-template-rows:auto auto;
  align-items:start;gap:28px clamp(30px,4.5vw,78px);padding-top:78px;padding-bottom:105px;
}
.hero-content{grid-area:content;max-width:760px}
.hero h1.family-title{max-width:760px;font-size:clamp(58px,6.7vw,96px);line-height:.88;letter-spacing:-.06em}
.family-title>span:first-child{
  display:block;margin:0 0 .38em .1em;color:#e5efeb;font-family:Arial,sans-serif;
  font-size:.23em;font-weight:800;letter-spacing:.22em;line-height:1;text-transform:uppercase;
}
.family-title em{display:block;white-space:nowrap}
.family-title>span:last-child{display:block;margin-top:.18em;color:white;font-size:.61em;letter-spacing:-.035em;line-height:1}
.hero-season{
  display:inline-flex;align-items:center;margin:22px 0 0;padding:8px 13px;
  border:1px solid rgba(217,237,137,.45);border-radius:999px;color:var(--lime);
  font-size:12px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;
}
.hero-lead{max-width:575px;margin-top:24px}
.hero-visual{grid-area:visual;position:relative;z-index:2;width:100%;min-height:610px;align-self:stretch}
.hero-family{position:absolute;inset:-5px -35px 5px -20px;display:flex;align-items:flex-end;justify-content:center}
.family-monogram{
  position:absolute;z-index:0;top:8px;right:1%;width:min(30vw,390px);height:min(30vw,390px);
  border:1px solid rgba(217,237,137,.34);border-radius:50%;display:grid;place-items:center;
  color:rgba(217,237,137,.1);font-family:Georgia,"Times New Roman",serif;
  font-size:clamp(90px,12vw,170px);font-weight:700;letter-spacing:-.11em;line-height:1;
  box-shadow:0 0 0 22px rgba(217,237,137,.025),0 0 0 45px rgba(217,237,137,.018);
}
.family-portrait{
  position:relative;z-index:2;display:block;width:min(650px,115%);max-width:none;max-height:585px;
  object-fit:contain;object-position:center bottom;filter:drop-shadow(0 24px 30px rgba(0,0,0,.32));
}
.family-nameplate{
  position:absolute;z-index:5;right:0;bottom:11px;display:flex;flex-direction:column;gap:4px;
  min-width:230px;padding:12px 16px;border:1px solid rgba(255,255,255,.24);border-radius:5px;
  background:rgba(11,63,56,.86);backdrop-filter:blur(12px);box-shadow:0 14px 35px rgba(0,0,0,.2);
}
.family-nameplate b{color:var(--lime);font-family:Georgia,serif;font-size:16px;font-weight:400}
.family-nameplate span{color:#e0ebe7;font-size:9px;font-weight:800;letter-spacing:.08em}
.hero>.trip-card{
  grid-area:card;position:relative;z-index:6;width:min(100%,390px);margin:0;padding:20px;transform:rotate(-.5deg);
}
.hero>.trip-card .trip-card-top{padding-bottom:14px}
.hero>.trip-card .trip-card-top b{font-size:23px}
.hero>.trip-card .trip-route{margin:16px 0}
.hero>.trip-card .trip-route strong{font-size:18px}
.hero>.trip-card .route-line{height:34px;margin:-13px 0 -13px 8px}
.hero>.trip-card .trip-progress{margin-bottom:14px;padding-bottom:14px}
.hero>.trip-card .trip-meta{padding-top:14px}
.hero>.trip-card .trip-meta span{font-size:19px}

@media(max-width:1100px){
  .hero{grid-template-columns:minmax(0,1fr) minmax(390px,.9fr);gap:28px;padding-left:42px;padding-right:42px}
  .hero h1.family-title{font-size:clamp(54px,6.2vw,76px)}
  .hero-family{inset:10px -25px 5px -35px}
}

@media(max-width:900px){
  .hero{grid-template-columns:1fr;grid-template-areas:"content" "visual" "card";gap:25px;padding:70px clamp(24px,8vw,72px) 70px}
  .hero-content{max-width:720px}
  .hero h1.family-title{font-size:clamp(62px,10.2vw,92px)}
  .hero-visual{min-height:590px;max-width:730px;margin:0 auto}
  .hero-family{inset:0 -10px 0}
  .family-monogram{width:390px;height:390px;right:8%}
  .hero>.trip-card{width:100%;max-width:730px;margin:0 auto;transform:none}
}

@media(max-width:600px){
  .brand-mark{width:34px;height:34px;flex-basis:34px;border-radius:11px;font-size:13px}
  .brand>span:last-child{max-width:170px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .hero{display:grid;gap:28px;padding:50px 18px 58px}
  .hero h1.family-title{font-size:clamp(49px,15.2vw,68px)}
  .family-title em{white-space:normal}
  .family-title>span:first-child{font-size:.28em}
  .family-title>span:last-child{font-size:.62em}
  .hero-season{margin-top:17px;font-size:10px}
  .hero-lead{margin-top:20px}
  .hero-visual{min-height:0;max-width:none;margin-top:0}
  .hero-family{position:relative;inset:auto;min-height:325px;overflow:hidden;border-radius:8px;background:rgba(255,255,255,.025)}
  .family-monogram{top:18px;right:-18px;width:245px;height:245px;font-size:102px}
  .family-portrait{position:absolute;bottom:0;left:50%;width:440px;max-width:none;max-height:330px;transform:translateX(-50%)}
  .family-nameplate{right:8px;bottom:8px;min-width:0;padding:10px 12px}
  .family-nameplate b{font-size:14px}
  .family-nameplate span{font-size:8px}
  .hero>.trip-card{width:100%;max-width:none;margin:0;padding:22px;transform:none}
  .hero>.trip-card .trip-route strong{font-size:20px}
}

/* Ajustos finals de les noves funcions locals */
.expense-form{grid-template-columns:repeat(4,minmax(0,1fr))}
.expense-form .note-field{grid-column:span 2}
.expense-form .receipt-field{grid-column:span 1}
.expense-form .form-primary{grid-column:auto}
.expense-list article{grid-template-columns:46px minmax(0,1fr) auto auto auto}

@media(max-width:900px){
  .expense-form{grid-template-columns:repeat(2,minmax(0,1fr))}
  .expense-form .note-field,.expense-form .receipt-field,.expense-form .form-primary{grid-column:auto}
}

@media(max-width:600px){
  .expense-form{grid-template-columns:1fr}
  .expense-list article{grid-template-columns:42px minmax(0,1fr) auto}
  .receipt-thumb{grid-column:2/3;width:86px;height:70px}
  .expense-list article>strong{grid-column:3;grid-row:1/3;align-self:start;margin-top:12px}
  .expense-list article>.expense-actions{grid-column:2/4;justify-content:flex-end}
}

/* Fitxa de l'allotjament */
.main-nav button,.main-nav a{border:0;background:none;cursor:pointer;font-size:13px;font-weight:700}
.main-nav button:hover,.main-nav a:hover{color:var(--green)}
.lodging-section{scroll-margin-top:72px;padding-top:82px}
.lodging-heading{display:flex;align-items:end;justify-content:space-between;gap:35px;margin-bottom:30px}
.lodging-heading>div:first-child{max-width:720px}
.lodging-heading h2{font-family:Georgia,serif;font-size:clamp(40px,5vw,62px);font-weight:400;line-height:1.04;letter-spacing:-.035em;margin:0}
.lodging-heading>div:first-child>p:last-child{max-width:640px;margin:18px 0 0;color:var(--muted);font-size:14px;line-height:1.7}
.lodging-booking{flex:0 0 auto;display:flex;flex-direction:column;gap:6px;padding:18px 22px;border-radius:7px;background:var(--deep);color:white;box-shadow:var(--shadow)}
.lodging-booking small{color:var(--lime);font-size:8px;font-weight:900;letter-spacing:.15em}
.lodging-booking strong{font-family:Georgia,serif;font-size:20px;font-weight:400}
.lodging-booking span{font-size:11px;color:#d3e3de}
.lodging-feature{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(320px,.85fr);overflow:hidden;border:1px solid var(--line);border-radius:9px;background:var(--paper);box-shadow:var(--shadow)}
.lodging-photo{position:relative;min-height:430px;margin:0;background:#dfe9e1;overflow:hidden}
.lodging-photo img{width:100%;height:100%;position:absolute;inset:0;display:block;object-fit:cover}
.lodging-photo:after{content:"";position:absolute;inset:auto 0 0;height:32%;background:linear-gradient(transparent,rgba(7,39,34,.72));pointer-events:none}
.lodging-photo figcaption{position:absolute;z-index:2;left:22px;right:22px;bottom:18px;display:flex;justify-content:space-between;gap:18px;color:#fff;font-size:10px;font-weight:800}
.lodging-photo figcaption a{color:var(--lime);white-space:nowrap}
.lodging-summary{display:flex;flex-direction:column;justify-content:center;padding:34px}
.lodging-intro{margin:0 0 24px;font-family:Georgia,serif;font-size:21px;line-height:1.55;color:var(--deep)}
.lodging-highlights{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.lodging-highlights span{display:flex;align-items:center;gap:8px;padding:11px 12px;border:1px solid var(--line);border-radius:5px;background:#f4f6f0;font-size:11px;color:#46635a}
.lodging-highlights b{color:var(--ink)}
.lodging-actions{display:flex;flex-wrap:wrap;gap:9px;margin-top:25px}
.lodging-actions a{min-height:42px;display:inline-flex;align-items:center;padding:0 13px;border:1px solid #aebeb7;border-radius:4px;color:var(--green);font-size:10px;font-weight:900}
.lodging-actions .lodging-primary{border-color:var(--lime);color:var(--deep)}
.lodging-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:16px}
.lodging-card{padding:25px;border:1px solid var(--line);border-radius:7px;background:var(--paper)}
.lodging-card>span{font-size:8px;font-weight:900;letter-spacing:.14em;color:var(--green)}
.lodging-card h3{margin:8px 0 18px;font-family:Georgia,serif;font-size:24px;font-weight:400;color:var(--deep)}
.lodging-card ul{margin:0;padding-left:18px}
.lodging-card li,.lodging-card p{margin:8px 0;color:#50675f;font-size:11px;line-height:1.55}
.lodging-card.confirmed{border-top:4px solid var(--green)}
.lodging-card.pending-card{border-top:4px solid #d79b51;background:#fffaf1}
.lodging-card.layout-card{border-top:4px solid #6e9ab7}
.lodging-note{padding:13px;border-left:3px solid #6e9ab7;background:#eef4f7}
.lodging-card .check-item{margin-top:17px;padding-top:14px;border-top:1px solid rgba(92,106,98,.18)}
.lodging-practical{display:grid;grid-template-columns:42px 1fr;align-items:start;gap:14px;margin-top:16px;padding:20px 23px;border-radius:6px;background:#edf3e8}
.lodging-practical>span{width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:var(--deep);color:var(--lime);font-weight:900}
.lodging-practical p{margin:0;color:#405c53;font-size:12px;line-height:1.65}

@media(max-width:900px){
  .lodging-heading{align-items:start}
  .lodging-feature{grid-template-columns:1fr}
  .lodging-photo{min-height:400px}
  .lodging-grid{grid-template-columns:1fr 1fr}
  .lodging-card.pending-card{grid-column:1/-1}
}

@media(max-width:600px){
  .lodging-section{padding-top:58px}
  .lodging-heading{display:block}
  .lodging-heading>div:first-child>p:last-child{font-size:15px}
  .lodging-booking{margin-top:20px}
  .lodging-photo{min-height:260px}
  .lodging-photo figcaption{display:block;left:14px;right:14px;bottom:13px;font-size:10px}
  .lodging-photo figcaption a{display:block;margin-top:5px}
  .lodging-summary{padding:22px 18px}
  .lodging-intro{font-size:19px}
  .lodging-highlights{grid-template-columns:1fr}
  .lodging-highlights span{font-size:13px}
  .lodging-actions a{flex:1 1 135px;justify-content:center;min-height:45px;font-size:12px}
  .lodging-grid{grid-template-columns:1fr}
  .lodging-card.pending-card{grid-column:auto}
  .lodging-card li,.lodging-card p{font-size:14px;line-height:1.6}
  .lodging-card>span{font-size:10px}
  .lodging-practical{grid-template-columns:1fr}
  .lodging-practical p{font-size:14px}
}

/* Llegibilitat ampliada i mapa familiar final */
body{font-size:16px;line-height:1.58}
.brand{font-size:16px}.main-nav button,.main-nav a{font-size:16px}
.hero-lead{font-size:21px}.primary,.secondary{font-size:16px}
.quick-strip small{font-size:11px}.quick-strip strong{font-size:16px}
.section-heading>p,.panel-intro>p:last-child{font-size:17px}
.route-rail small{font-size:12px}.route-rail strong{font-size:13px}
.tabbar button{font-size:15px}.filters button{font-size:14px}
.day-card-top span{font-size:12px}.day-card>small{font-size:13px}.day-card h3{font-size:28px}.day-card p{font-size:15px}.day-stats{font-size:12px}
.detail-head p{font-size:13px}.detail-head>div>span{font-size:17px}
.detail-facts small{font-size:11px}.detail-facts strong{font-size:23px}
.timeline-item time{font-size:14px}.timeline-item strong{font-size:16px}.timeline-item p{font-size:15px}
.info-card>span{font-size:12px}.info-card p,.info-card li{font-size:15px}
.day-switch button{font-size:14px}
.shopping-list small{font-size:12px}.shopping-list h3{font-size:28px}.shopping-list p{font-size:15px}
.managed-toggle b{font-size:15px}.managed-toggle small{font-size:12px}
.menu-bank span{font-size:14px}.allergy-note b,.allergy-note p{font-size:14px}
.check-item{font-size:15px}.table-row{font-size:15px}.table-row.table-head{font-size:11px}
.contact-card small{font-size:11px}.contact-card p{font-size:15px}
.budget-hero p,.budget-note{font-size:15px}
.lodging-highlights span{font-size:14px}.lodging-card li,.lodging-card p{font-size:15px}.lodging-practical p{font-size:15px}
footer p,footer a{font-size:14px}

.route-map-banner{position:relative;min-height:clamp(650px,56vw,940px);overflow:hidden;background:#e7e2d5}
.route-map-figure{position:absolute;inset:0;margin:0}
.route-map-figure img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}
.route-map-figure:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent 42%,rgba(247,245,237,.06) 55%,rgba(247,245,237,.44) 100%);pointer-events:none}
.route-map-figure figcaption{position:absolute;z-index:2;left:clamp(20px,4vw,65px);bottom:28px;padding:9px 13px;border-radius:4px;background:rgba(11,63,56,.88);color:white;font-size:13px;font-weight:800}
.route-map-copy{position:absolute;z-index:3;right:clamp(22px,5vw,82px);bottom:clamp(40px,6vw,88px);width:min(47%,720px);padding:clamp(24px,3vw,42px);border:1px solid rgba(18,59,53,.12);border-radius:10px;background:rgba(255,253,248,.91);backdrop-filter:blur(10px);box-shadow:0 25px 70px rgba(11,63,56,.18)}
.route-map-copy h2{margin:0;font-family:Georgia,serif;font-size:clamp(38px,4vw,62px);font-weight:400;line-height:1.02;letter-spacing:-.035em;color:var(--deep)}
.route-map-copy>p:not(.kicker){max-width:650px;margin:17px 0 0;color:#48625a;font-size:16px;line-height:1.65}
.route-map-stops{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:23px}
.route-map-stops button{display:grid;grid-template-columns:27px auto 1fr;align-items:center;gap:7px;min-height:48px;padding:8px 10px;border:1px solid #ccd8d1;border-radius:6px;background:rgba(255,255,255,.78);text-align:left;cursor:pointer;transition:.2s ease}
.route-map-stops button:hover{border-color:var(--green);background:white;transform:translateY(-2px)}
.route-map-stops button span{font-size:18px}.route-map-stops button b{font-size:12px;color:var(--green);white-space:nowrap}.route-map-stops button small{font-size:11px;line-height:1.3;color:var(--deep)}

@media(max-width:900px){
  .route-map-banner{min-height:0;padding:0;background:#f0ece1}
  .route-map-figure{position:relative;aspect-ratio:16/9}
  .route-map-figure:after{background:linear-gradient(0deg,rgba(11,63,56,.22),transparent 38%)}
  .route-map-figure figcaption{left:20px;bottom:18px}
  .route-map-copy{position:relative;right:auto;bottom:auto;width:auto;margin:-2px 18px 38px;padding:30px 26px;background:var(--paper)}
}

@media(max-width:600px){
  body{font-size:16px;line-height:1.6}
  .brand{font-size:12px}.main-nav button,.main-nav a{font-size:16px}
  .hero-lead{font-size:18px;line-height:1.72}.primary,.secondary{font-size:15px}
  .quick-strip small{font-size:11px}.quick-strip strong{font-size:13px}
  .section-heading>p,.panel-intro>p:last-child{font-size:16px;line-height:1.72}
  .route-rail small{font-size:12px}.route-rail strong{font-size:13px}
  .tabbar button,.filters button{font-size:15px}
  .day-card{min-height:230px}.day-card-top span{font-size:12px}.day-card>small{font-size:13px}.day-card h3{font-size:23px}.day-card p{font-size:14px;line-height:1.58}.day-stats{font-size:12px}
  .detail-head p{font-size:12px}.detail-head>div>span{font-size:16px}
  .detail-facts small{font-size:10px}.detail-facts strong{font-size:17px}
  .timeline-item time{font-size:14px}.timeline-item strong{font-size:17px}.timeline-item p{font-size:16px;line-height:1.62}
  .info-card>span{font-size:12px}.info-card p,.info-card li{font-size:16px;line-height:1.68}
  .day-switch button{font-size:14px}
  .shopping-list small{font-size:12px}.shopping-list h3{font-size:26px}.shopping-list p{font-size:16px}
  .managed-toggle b{font-size:16px}.managed-toggle small{font-size:13px}
  .menu-bank span{font-size:14px}.allergy-note b,.allergy-note p{font-size:15px}
  .check-item{font-size:16px}.table-row{font-size:15px}.contact-card p{font-size:16px}
  .budget-hero p,.budget-note{font-size:15px}
  input,select,textarea{font-size:16px}
  footer p,footer a{font-size:14px}
  .mobile-nav button{font-size:11px}.mobile-nav button span{font-size:20px}
  .route-map-figure{aspect-ratio:1.35/1}.route-map-figure img{object-position:35% center}
  .route-map-figure figcaption{left:12px;bottom:12px;font-size:11px}
  .route-map-copy{margin:0;padding:34px 18px 42px;border:0;border-radius:0;box-shadow:none}
  .route-map-copy h2{font-size:42px}.route-map-copy>p:not(.kicker){font-size:15px}
  .route-map-stops{grid-template-columns:1fr;gap:7px}
  .route-map-stops button{grid-template-columns:29px 48px 1fr;min-height:55px;padding:10px 12px}
  .route-map-stops button span{font-size:20px}.route-map-stops button b{font-size:13px}.route-map-stops button small{font-size:13px}
}

/* Estat completat visible en totes les llistes */
.check-item.checked{
  color:#38534b;
  background:#edf4cf;
  border-radius:6px;
  padding-left:8px;
  padding-right:8px;
  text-decoration:line-through;
  text-decoration-thickness:2px;
  text-decoration-color:#48665c;
}
.check-item.checked .checkbox,
.managed-item.done .checkbox{
  background:var(--green);
  border-color:var(--green);
  box-shadow:0 0 0 3px rgba(15,116,100,.13);
}

/* Cos de text semblant al del xat en ordinador i mòbil */
.section-heading>p,.panel-intro>p:last-child,
.timeline-item p,.info-card p,.info-card li,
.shopping-list p,.lodging-card li,.lodging-card p,
.lodging-practical p,.contact-card p,.budget-note,
.managed-toggle b,.check-item{
  font-size:16px;
}
.managed-toggle small{font-size:14px}
.add-form input,.add-form select,.add-form textarea{font-size:16px}

@media(max-width:600px){
  .day-card p{font-size:15px}
  .section-heading>p,.panel-intro>p:last-child,
  .timeline-item p,.info-card p,.info-card li,
  .shopping-list p,.lodging-card li,.lodging-card p,
  .lodging-practical p,.contact-card p,.budget-note,
  .managed-toggle b,.check-item{
    font-size:16px;
  }
  .managed-toggle small{font-size:14px}
}

/* Infografies diàries i navegació precisa */
html{scroll-padding-top:82px}
#inici,#allotjament,#infografies,#ruta,#planner,.day-detail{scroll-margin-top:82px}
.main-nav{gap:clamp(12px,1.8vw,26px)}
.main-nav button,.main-nav a{white-space:nowrap}

.infographic-section{padding-top:86px;padding-bottom:88px}
.infographic-heading>p{max-width:520px}
.infographic-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin-top:42px}
.infographic-card{min-width:0;padding:0;overflow:hidden;border:1px solid var(--line);border-radius:9px;background:var(--paper);text-align:left;cursor:pointer;box-shadow:0 8px 28px rgba(11,63,56,.08);transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease}
.infographic-card:hover{transform:translateY(-5px);border-color:rgba(15,116,100,.38);box-shadow:0 20px 42px rgba(11,63,56,.15)}
.infographic-card:focus-visible,.infographic-button:focus-visible,.infographic-close:focus-visible,.infographic-modal-nav button:focus-visible{outline:3px solid var(--lime);outline-offset:3px}
.infographic-preview{position:relative;display:block;aspect-ratio:4/5;overflow:hidden;background:linear-gradient(145deg,#dbe8df,#f1f4ed)}
.infographic-preview img{display:block;width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform .35s ease}
.infographic-card:hover .infographic-preview img{transform:scale(1.025)}
.infographic-preview:after{content:"";position:absolute;inset:auto 0 0;height:40%;background:linear-gradient(transparent,rgba(7,39,34,.72));pointer-events:none}
.infographic-preview>b{position:absolute;z-index:2;left:14px;bottom:13px;padding:7px 9px;border-radius:4px;background:var(--lime);color:var(--deep);font-size:10px;letter-spacing:.14em}
.infographic-pending{display:none;position:absolute;inset:0;place-items:center;padding:25px;text-align:center;color:#557067;font-size:13px;font-weight:800}
.infographic-preview.image-pending .infographic-pending{display:grid}
.infographic-copy{display:flex;min-height:178px;flex-direction:column;padding:18px}
.infographic-copy small{color:var(--green);font-size:10px;font-weight:900;letter-spacing:.09em;text-transform:uppercase}
.infographic-copy strong{margin-top:8px;font-family:Georgia,serif;font-size:23px;font-weight:400;line-height:1.13;color:var(--deep)}
.infographic-copy em{margin-top:8px;color:var(--muted);font-size:13px;font-style:normal;line-height:1.5}
.infographic-copy>span{margin-top:auto;padding-top:15px;color:var(--green);font-size:11px;font-weight:900}

.detail-actions{margin-left:auto;display:flex;flex-direction:column;gap:8px;align-items:stretch}
.detail-actions .map-button{margin-left:0;text-align:center}
.infographic-button{min-height:43px;padding:0 16px;border:1px solid var(--lime);border-radius:4px;background:var(--lime);color:var(--deep);font-size:11px;font-weight:900;white-space:nowrap;cursor:pointer}
.infographic-button:hover{background:white;border-color:white}

.infographic-modal{position:fixed;z-index:200;inset:0;display:grid;place-items:center;padding:20px;background:rgba(4,23,20,.88);backdrop-filter:blur(10px)}
.infographic-modal-panel{width:min(96vw,1500px);height:min(94dvh,1050px);display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:12px;background:#0b2723;color:white;box-shadow:0 35px 100px rgba(0,0,0,.48)}
.infographic-modal-header{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:17px 22px;border-bottom:1px solid rgba(255,255,255,.14);background:#0b3f38}
.infographic-modal-header small{display:block;color:var(--lime);font-size:10px;font-weight:900;letter-spacing:.13em;text-transform:uppercase}
.infographic-modal-header h2{margin:4px 0 0;font-family:Georgia,serif;font-size:clamp(24px,3vw,38px);font-weight:400;line-height:1.05}
.infographic-close{width:46px;height:46px;flex:0 0 46px;border:1px solid rgba(255,255,255,.28);border-radius:50%;background:rgba(255,255,255,.07);color:white;font-size:30px;line-height:1;cursor:pointer}
.infographic-close:hover{background:white;color:var(--deep)}
.infographic-modal-media{flex:1;min-height:0;display:grid;place-items:center;padding:14px;background:#071d1a}
.infographic-modal-media img{display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;box-shadow:0 10px 45px rgba(0,0,0,.35)}
.infographic-modal-nav{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:18px;padding:12px 18px;border-top:1px solid rgba(255,255,255,.13);background:#0b3f38}
.infographic-modal-nav button{min-height:42px;padding:0 15px;border:1px solid rgba(255,255,255,.26);border-radius:4px;background:transparent;color:white;font-size:12px;font-weight:800;cursor:pointer}
.infographic-modal-nav button:last-child{justify-self:end}
.infographic-modal-nav button:hover{border-color:var(--lime);color:var(--lime)}
.infographic-modal-nav span{color:#c9ddd7;font-size:12px;font-weight:800}

@media(max-width:1050px){
  .infographic-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .infographic-preview{aspect-ratio:16/10}
  .infographic-copy{min-height:150px}
  .detail-head{flex-wrap:wrap}
  .detail-actions{flex:1 0 100%;margin-left:0;display:grid;grid-template-columns:1fr 1fr}
}

@media(min-width:901px) and (max-width:1150px){
  .topbar{padding-left:24px;padding-right:24px}
  .brand{font-size:12px}
  .main-nav{gap:10px}
  .main-nav button,.main-nav a{font-size:13px}
}

@media(max-width:900px){
  .main-nav.open{max-height:calc(100dvh - 72px);overflow:auto;gap:4px;padding:12px 20px}
  .main-nav.open button,.main-nav.open a{width:100%;padding:12px;text-align:left;border-bottom:1px solid var(--line)}
  .detail-actions{grid-column:1/-1;margin-left:0;display:grid;grid-template-columns:1fr 1fr}
}

@media(max-width:600px){
  html{scroll-padding-top:70px}
  #inici,#allotjament,#infografies,#ruta,#planner,.day-detail{scroll-margin-top:70px}
  .infographic-section{padding-top:58px;padding-bottom:64px}
  .infographic-grid{grid-template-columns:1fr;gap:13px;margin-top:30px}
  .infographic-card{display:grid;grid-template-columns:118px minmax(0,1fr);min-height:174px}
  .infographic-preview{height:100%;min-height:174px;aspect-ratio:auto}
  .infographic-preview>b{left:9px;bottom:9px;font-size:9px}
  .infographic-copy{min-height:174px;padding:16px 14px}
  .infographic-copy strong{font-size:21px}
  .infographic-copy em{font-size:13px}
  .infographic-copy>span{font-size:10px}
  .detail-actions{display:grid;grid-template-columns:1fr;gap:8px}
  .detail-actions .map-button,.infographic-button{width:100%;min-height:46px}
  .infographic-modal{padding:0}
  .infographic-modal-panel{width:100%;height:100dvh;border:0;border-radius:0}
  .infographic-modal-header{padding:12px 14px}
  .infographic-modal-header small{font-size:8px}
  .infographic-modal-header h2{font-size:23px}
  .infographic-close{width:42px;height:42px;flex-basis:42px}
  .infographic-modal-media{padding:7px}
  .infographic-modal-nav{gap:8px;padding:9px 10px calc(9px + env(safe-area-inset-bottom))}
  .infographic-modal-nav button{padding:0 10px;font-size:11px}
}

/* Organització diària dels menjars */
.meals-panel{background:linear-gradient(180deg,#fffdf8,#f6f3e9)}
.meals-intro{max-width:820px}
.meal-summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:38px 0 18px}
.meal-summary article{display:grid;grid-template-columns:46px 1fr;align-items:start;gap:12px;padding:18px;border:1px solid #d4ddd6;border-radius:8px;background:white}
.meal-summary article>span{width:44px;height:44px;display:grid;place-items:center;border-radius:50%;background:#edf4cf;font-size:22px}
.meal-summary small{display:block;color:var(--green);font-size:9px;font-weight:900;letter-spacing:.12em}
.meal-summary strong{display:block;margin-top:4px;font-family:Georgia,serif;font-size:24px;font-weight:400;color:var(--deep)}
.meal-summary p{margin:5px 0 0;color:var(--muted);font-size:12px;line-height:1.45}
.picnic-essentials{display:grid;grid-template-columns:minmax(260px,.78fr) minmax(0,1.22fr);gap:30px;margin:18px 0 32px;padding:28px;border-radius:9px;background:var(--deep);color:white}
.picnic-essentials h3{margin:0;font-family:Georgia,serif;font-size:30px;font-weight:400}
.picnic-essentials p:not(.kicker){margin:12px 0 0;color:#c9ddd7;line-height:1.65}
.picnic-essentials ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px 18px;margin:0;padding:0;list-style:none}
.picnic-essentials li{position:relative;padding:10px 10px 10px 30px;border:1px solid rgba(255,255,255,.14);border-radius:5px;background:rgba(255,255,255,.06);font-size:13px;line-height:1.4}
.picnic-essentials li:before{content:"✓";position:absolute;left:11px;color:var(--lime);font-weight:900}
.meal-day-list{display:grid;gap:16px}
.meal-day-card{overflow:hidden;border:1px solid var(--line);border-radius:9px;background:white;box-shadow:0 8px 28px rgba(11,63,56,.07)}
.meal-day-card>header{display:flex;align-items:center;gap:16px;padding:18px 22px;background:#eef3e9;border-bottom:1px solid var(--line)}
.meal-day-card>header>span{width:50px;height:50px;display:grid;place-items:center;border-radius:50%;background:var(--deep);color:var(--lime);font-family:Georgia,serif;font-size:23px}
.meal-day-card>header small{display:block;color:var(--green);font-size:9px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}
.meal-day-card>header h3{margin:3px 0 0;font-family:Georgia,serif;font-size:27px;font-weight:400;color:var(--deep)}
.meal-entry-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
.meal-entry{position:relative;min-width:0;padding:20px 22px 23px;border-right:1px solid var(--line)}
.meal-entry:last-child{border-right:0}
.meal-entry:before{content:"";position:absolute;left:0;right:0;top:0;height:4px;background:#809a8f}
.meal-entry.picnic:before{background:#d79b51}.meal-entry.fora:before{background:#6e9ab7}.meal-entry.casa:before{background:var(--green)}
.meal-entry-top{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
.meal-entry-top>span{font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--green)}
.meal-entry-top>em{padding:5px 7px;border-radius:20px;background:#edf1ec;color:#526860;font-size:9px;font-style:normal;font-weight:800}
.meal-entry-top>b{padding:5px 7px;border-radius:20px;background:#ddefc8;color:#39723b;font-size:9px}
.meal-entry time{display:block;margin-top:17px;color:var(--green);font-size:12px;font-weight:900}
.meal-entry h4{margin:4px 0 9px;font-family:Georgia,serif;font-size:22px;font-weight:400;line-height:1.15;color:var(--deep)}
.meal-entry>p{margin:0;color:#405a52;font-size:14px;line-height:1.55}
.meal-entry>small{display:block;margin-top:14px;padding-top:12px;border-top:1px solid var(--line);color:var(--muted);font-size:12px;line-height:1.55}
.meal-entry>small b{color:#6f5737}
.meal-shopping-link{display:flex;align-items:center;justify-content:space-between;gap:26px;margin-top:28px;padding:25px 28px;border-radius:8px;background:#e2ef9b;color:var(--deep)}
.meal-shopping-link h3{margin:0;font-family:Georgia,serif;font-size:27px;font-weight:400}
.meal-shopping-link p:not(.kicker){margin:8px 0 0;color:#40594f}
.meal-shopping-link button,.meal-menu-bank button{flex:0 0 auto;min-height:45px;padding:0 16px;border:1px solid var(--deep);border-radius:4px;background:var(--deep);color:white;font-size:12px;font-weight:900;cursor:pointer}
.meal-menu-bank p{max-width:640px;color:#c9ddd7;line-height:1.6}
.meal-menu-bank button{margin-top:5px;background:var(--lime);border-color:var(--lime);color:var(--deep)}

/* Les infografies són horitzontals 4:3 */
.infographic-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.infographic-preview{aspect-ratio:4/3}
.infographic-preview img{object-fit:cover}

@media(max-width:1100px){
  .main-nav{display:none}
  .menu-toggle{display:block}
  .main-nav.open{display:flex;position:absolute;top:72px;left:0;right:0;max-height:calc(100dvh - 72px);overflow:auto;gap:4px;padding:12px 20px;background:var(--paper);flex-direction:column;box-shadow:var(--shadow)}
  .main-nav.open button,.main-nav.open a{width:100%;padding:12px;text-align:left;border-bottom:1px solid var(--line)}
  .meal-summary{grid-template-columns:repeat(2,minmax(0,1fr))}
}

@media(max-width:760px){
  .meal-entry-grid{grid-template-columns:1fr}
  .meal-entry{border-right:0;border-bottom:1px solid var(--line)}
  .meal-entry:last-child{border-bottom:0}
  .picnic-essentials{grid-template-columns:1fr}
}

@media(max-width:600px){
  .infographic-card{display:block;min-height:0}
  .infographic-preview{height:auto;min-height:0;aspect-ratio:4/3}
  .infographic-copy{min-height:158px}
  .meal-summary{grid-template-columns:1fr;gap:8px;margin-top:28px}
  .meal-summary article{padding:15px}
  .picnic-essentials{gap:20px;padding:22px 18px}
  .picnic-essentials ul{grid-template-columns:1fr}
  .meal-day-card>header{padding:15px}
  .meal-day-card>header>span{width:43px;height:43px;font-size:20px}
  .meal-day-card>header h3{font-size:23px}
  .meal-entry{padding:18px}
  .meal-entry>p{font-size:15px}
  .meal-entry>small{font-size:13px}
  .meal-shopping-link{display:block;padding:22px 18px}
  .meal-shopping-link button{width:100%;margin-top:18px}
  .mobile-nav{grid-template-columns:repeat(6,1fr)}
  .mobile-nav button{font-size:9px}
  .mobile-nav button span{font-size:18px}
}
