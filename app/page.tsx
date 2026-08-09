"use client";

import { useEffect, useMemo, useState } from "react";
import { contacts, days, shops, tasks, type Contact } from "./trip-data";

type TabKey = "itinerari" | "compres" | "maleta" | "reserves" | "pressupost";
type CheckedState = Record<string, boolean>;

const taskById = Object.fromEntries(tasks.map((task) => [task.id, task]));
const contactById = Object.fromEntries(contacts.map((contact) => [contact.id, contact]));

const checklistGroups = [
  { key: "abans", title: "Abans d’eixir", icon: "✓", description: "Casa, cotxe i informació accessible." },
  { key: "reserves", title: "Reserves", icon: "◎", description: "Telefonades, invitacions i bitllets." },
  { key: "maleta", title: "Maleta familiar", icon: "▣", description: "El que ha d’anar sí o sí al Tiguan." },
  { key: "dia", title: "Preparació dels dies", icon: "→", description: "Compres, oratge, pícnics i tornada." },
] as const;

const reservationRows = [
  { taskId: "casal-arribada", contactId: "casal", title: "El Casal · avisar arribada", date: "16/08 · cap a les 19:00", cost: "725 € confirmats" },
  { taskId: "yumay", contactId: "yumay", title: "Sidreria Yumay", date: "17/08 · 14:00", cost: "45–60 €" },
  { taskId: "muja", contactId: "muja", title: "Invitacions MUJA", date: "19/08 · matí", cost: "Gratuït dimecres" },
  { taskId: "cafetin", contactId: "cafetin", title: "El Cafetín", date: "19/08 · 14:15", cost: "Per confirmar" },
  { taskId: "lagos", contactId: "lagos", title: "Bus Lagos des de P1", date: "20/08 · 08:30–09:00", cost: "25 € + 3 € P1" },
  { taskId: "puerto", contactId: "puerto", title: "Restaurant El Puerto", date: "21/08 · 20:00", cost: "55–70 €" },
  { taskId: "piguena", contactId: "piguena", title: "El Pigüeña", date: "22/08 · 13:45", cost: "48–60 €" },
];

const legacyTaskMap: Record<string, string[]> = {
  "0-0": ["casal-arribada"], "0-1": ["casal-cuina"], "0-2": ["tigu-revisio"], "0-3": ["v16-docs"], "0-4": ["rutes-offline"],
  "1-0": ["yumay"], "1-1": ["muja", "cafetin"], "1-2": ["lagos"], "1-3": ["puerto"], "1-4": ["piguena"],
  "2-0": ["impermeables"], "2-1": ["bany"], "2-2": ["cesc-muda"], "2-3": ["nevera"], "2-4": ["medicacio"],
};

function TaskCheck({ id, checked, onToggle, compact = false }: { id: string; checked: boolean; onToggle: (id: string) => void; compact?: boolean }) {
  const task = taskById[id];
  if (!task) return null;
  return (
    <button className={`check-item ${checked ? "checked" : ""} ${compact ? "compact" : ""}`} onClick={() => onToggle(id)} aria-pressed={checked}>
      <span className="checkbox">{checked ? "✓" : ""}</span><span>{task.label}</span>
    </button>
  );
}

function ContactCard({ contact, small = false }: { contact: Contact; small?: boolean }) {
  return (
    <article className={`place-card ${small ? "small" : ""}`}>
      <div className="place-copy"><small>CONTACTE</small><h3>{contact.name}</h3><p>{contact.detail}</p>{contact.note && <em>{contact.note}</em>}</div>
      <div className="place-actions">
        {contact.phone && <a className="call-action" href={`tel:${contact.phone}`}>☎ {contact.phoneLabel}</a>}
        <a href={contact.map} target="_blank" rel="noreferrer">Maps ↗</a>
        {contact.web && <a href={contact.web} target="_blank" rel="noreferrer">Web ↗</a>}
      </div>
    </article>
  );
}

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);
  const [filter, setFilter] = useState("tots");
  const [tab, setTab] = useState<TabKey>("itinerari");
  const [menuOpen, setMenuOpen] = useState(false);
  const [checked, setChecked] = useState<CheckedState>({});
  const [onlyPending, setOnlyPending] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      let stored: CheckedState = {};
      try { stored = JSON.parse(localStorage.getItem("asturies-checklist-v2") || "{}"); } catch { stored = {}; }
      for (const [legacyId, taskIds] of Object.entries(legacyTaskMap)) {
        if (localStorage.getItem(`asturies-${legacyId}`) === "1") taskIds.forEach((id) => { stored[id] = true; });
      }
      setChecked(stored);
      localStorage.setItem("asturies-checklist-v2", JSON.stringify(stored));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const toggleTask = (id: string) => {
    setChecked((current) => {
      const next = { ...current, [id]: !current[id] };
      localStorage.setItem("asturies-checklist-v2", JSON.stringify(next));
      return next;
    });
  };

  const filteredDays = useMemo(() => filter === "tots" ? days : days.filter((day) => day.kind === filter), [filter]);
  const selected = days.find((day) => day.id === activeDay) ?? days[0];
  const completedReservations = reservationRows.filter((row) => checked[row.taskId]).length;
  const completedTasks = tasks.filter((task) => checked[task.id]).length;

  const jump = (nextTab: TabKey) => {
    setTab(nextTab);
    setMenuOpen(false);
    window.setTimeout(() => document.getElementById("planner")?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  };

  const chooseDay = (id: number) => {
    setActiveDay(id);
    jump("itinerari");
  };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inici" aria-label="Inici"><span className="brand-mark">A</span><span>ASTÚRIES <b>2026</b></span></a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <button onClick={() => jump("itinerari")}>Itinerari</button><button onClick={() => jump("compres")}>Compres</button><button onClick={() => jump("maleta")}>Llistes</button><button onClick={() => jump("reserves")}>Reserves</button><button onClick={() => jump("pressupost")}>Pressupost</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Obrir menú">{menuOpen ? "×" : "☰"}</button>
      </header>

      <section className="hero" id="inici">
        <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/><div className="mountain mountain-a"/><div className="mountain mountain-b"/>
        <div className="hero-content">
          <p className="eyebrow">GUIA OPERATIVA · FAMÍLIA AVELLÀ</p>
          <h1>Huit dies per a<br/><em>viure Astúries.</em></h1>
          <p className="hero-lead">Tot el viatge al mòbil: horaris detallats, aparcaments, rutes, restaurants, compres i gestions sincronitzades per a Josep, Caty, Lluís i Cesc.</p>
          <div className="hero-actions"><button className="primary" onClick={() => jump("itinerari")}>Començar la guia <span>↓</span></button><button className="secondary" onClick={() => jump("reserves")}>{reservationRows.length - completedReservations} reserves pendents ↗</button></div>
        </div>
        <aside className="trip-card">
          <div className="trip-card-top"><span>COMENÇA EL</span><b>16·08</b></div>
          <div className="trip-route"><span className="route-dot start"/><div><small>EIXIDA · 16 AGO</small><strong>Xaló</strong></div></div><div className="route-line"><span>930 km</span></div><div className="trip-route"><span className="route-dot end"/><div><small>BASE · 7 NITS</small><strong>La Callezuela</strong></div></div>
          <div className="trip-progress"><div><span>Preparació</span><b>{completedTasks}/{tasks.length}</b></div><i><em style={{ width: `${Math.round((completedTasks / tasks.length) * 100)}%` }}/></i></div>
          <div className="trip-meta"><div><span>8</span><small>DIES</small></div><div><span>4</span><small>VIATGERS</small></div><div><span>7,3</span><small>L/100 KM</small></div></div>
        </aside>
      </section>

      <section className="quick-strip">
        <a href={contactById.casal.map} target="_blank" rel="noreferrer"><span>⌂</span><p><small>ALLOTJAMENT · MAPS</small><strong>Apartamentos El Casal ↗</strong></p></a>
        <div><span>◉</span><p><small>DATES</small><strong>16–23 agost 2026</strong></p></div>
        <a href="tel:+34699862203"><span>☎</span><p><small>EL CASAL</small><strong>699 862 203</strong></p></a>
        <button onClick={() => jump("reserves")}><span>✓</span><p><small>GESTIONS</small><strong>{completedReservations}/{reservationRows.length} completades</strong></p></button>
      </section>

      <section className="section route-section" id="ruta">
        <div className="section-heading"><div><p className="kicker">LA RUTA D’UN PRIMER COLP D’ULL</p><h2>Un viatge, huit jornades.</h2></div><p>Prem qualsevol dia per obrir el pla complet, els llocs exactes, la preparació i les alternatives.</p></div>
        <div className="route-rail">{days.map((day) => <button key={day.id} onClick={() => chooseDay(day.id)} className={activeDay === day.id ? "active" : ""}><span>{day.id}</span><small>{day.shortDate}</small><strong>{day.title.split("+")[0]}</strong></button>)}</div>
      </section>

      <section className="section planner" id="planner">
        <div className="tabbar" role="tablist" aria-label="Seccions de la guia">
          {([['itinerari','Itinerari'],['compres','Compres'],['maleta','Llistes'],['reserves','Reserves'],['pressupost','Pressupost']] as [TabKey,string][]).map(([key,label]) => <button key={key} onClick={() => setTab(key)} className={tab === key ? "active" : ""} role="tab">{label}</button>)}
        </div>

        {tab === "itinerari" && <div className="tab-panel">
          <div className="filter-row"><div><p className="kicker">ITINERARI DETALLAT</p><h2>Tria la jornada</h2></div><div className="filters">{[['tots','Tots'],['costa','Costa'],['natura','Natura'],['ciutat','Ciutat'],['ruta','Carretera']].map(([key,label]) => <button key={key} onClick={() => setFilter(key)} className={filter === key ? "active" : ""}>{label}</button>)}</div></div>
          <div className="day-grid">{filteredDays.map((day) => <button key={day.id} className={`day-card ${day.color} ${activeDay === day.id ? "selected" : ""}`} onClick={() => setActiveDay(day.id)}><div className="day-card-top"><span>DIA {day.id}</span><i>{day.icon}</i></div><small>{day.date}</small><h3>{day.title}</h3><p>{day.subtitle}</p><div className="day-stats"><span>{day.distance}</span><span>{day.budget}</span></div></button>)}</div>

          <article className={`day-detail ${selected.color}`}>
            <div className="detail-head"><div className="detail-number">{String(selected.id).padStart(2,"0")}</div><div><p>{selected.date}</p><h2>{selected.title}</h2><span>{selected.subtitle}</span></div><a href={selected.map} target="_blank" rel="noreferrer" className="map-button">Ruta completa en Maps ↗</a></div>
            <div className="detail-facts"><div><small>DISTÀNCIA</small><strong>{selected.distance}</strong></div><div><small>CONDUCCIÓ</small><strong>{selected.driving}</strong></div><div><small>PRESSUPOST</small><strong>{selected.budget}</strong></div></div>
            <div className="day-brief"><div><small>OBJECTIU REAL DEL DIA</small><p>{selected.objective}</p></div><div className="weather-brief"><small>DECISIÓ D’ORATGE</small><p>{selected.weather}</p></div></div>
            <div className="detail-columns">
              <div className="timeline"><h3>Horari pas a pas</h3>{selected.schedule.map((item, index) => <div className="timeline-item" key={`${selected.id}-${index}`}><time>{item.time}</time><span className="timeline-dot"/><div className="timeline-copy"><div><strong>{item.title}</strong>{item.tag && <em>{item.tag}</em>}</div><p>{item.note}</p>{item.map && <a href={item.map} target="_blank" rel="noreferrer">Obrir ubicació ↗</a>}</div></div>)}</div>
              <aside className="day-aside">
                <div className="info-card food-card"><span>MENJARS</span><p>{selected.food}</p></div>
                <div className="info-card"><span>RECORREGUT A PEU</span><p>{selected.walk}</p></div>
                <div className="info-card"><span>APARCAMENT</span><p>{selected.parking}</p></div>
                <div className="info-card"><span>CLAUS PRÀCTIQUES</span><ul>{selected.practical.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="info-card planb"><span>PLA B</span><p>{selected.planB}</p></div>
                <div className="resource-row">{selected.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
              </aside>
            </div>
            <section className="day-actions"><div className="subheading"><div><p className="kicker">PREPARACIÓ SINCRONITZADA</p><h3>Marca ací o en «Llistes»</h3></div><span>{selected.taskIds.filter((id) => checked[id]).length}/{selected.taskIds.length}</span></div><div className="inline-checks">{selected.taskIds.map((id) => <TaskCheck key={id} id={id} checked={!!checked[id]} onToggle={toggleTask} compact/>)}</div></section>
            {selected.contactIds.length > 0 && <section className="day-contacts"><p className="kicker">TELÈFONS I ENLLAÇOS DEL DIA</p><div className="places-grid">{selected.contactIds.map((id) => <ContactCard key={id} contact={contactById[id]} small/>)}</div></section>}
            <div className="day-switch"><button disabled={selected.id === 1} onClick={() => setActiveDay(selected.id - 1)}>← Dia anterior</button><span>{selected.id} / 8</span><button disabled={selected.id === 8} onClick={() => setActiveDay(selected.id + 1)}>Dia següent →</button></div>
          </article>
        </div>}

        {tab === "compres" && <div className="tab-panel simple-panel">
          <div className="panel-intro"><p className="kicker">MENJARS I COMPRES</p><h2>Tres moments, llista exacta i Maps.</h2><p>La compra principal és dilluns; dijous només es reposa. Prem «Completada» i la mateixa acció quedarà marcada en el dia corresponent i en totes les llistes.</p></div>
          <div className="store-list">{shops.map((shop, index) => <article className="store-card" key={shop.id}><div className="shopping-index">0{index+1}</div><div className="store-main"><small>{shop.note}</small><h3>{shop.when}</h3><address>{shop.address}</address><p>{shop.items}</p><div className="store-actions"><a href={shop.map} target="_blank" rel="noreferrer">Google Maps ↗</a>{shop.web && <a href={shop.web} target="_blank" rel="noreferrer">Fitxa i horari ↗</a>}</div><TaskCheck id={shop.taskId} checked={!!checked[shop.taskId]} onToggle={toggleTask} compact/></div></article>)}</div>
          <div className="menu-bank"><h3>Rotació familiar</h3><div><span>Hamburgueses + ensalada</span><span>Salmó + ensalada</span><span>Pollastre + verdura</span><span>Pizzes congelades</span><span>Llom + arròs</span><span>Pasta + tonyina</span></div></div>
          <div className="allergy-note"><b>Atenció alimentària</b><p>Lluís té al·lèrgia als fruits secs i a diverses fruites. Comproveu ingredients i traces, pregunteu per la contaminació creuada, porteu la medicació accessible i manteniu separat el seu menjar de pícnic.</p></div>
        </div>}

        {tab === "maleta" && <div className="tab-panel simple-panel">
          <div className="panel-intro list-intro"><div><p className="kicker">LLISTES SINCRONITZADES</p><h2>Una marca, en tota la web.</h2><p>Si completes una reserva dins d’un dia, també apareix feta ací i en «Reserves». Les marques es guarden en este dispositiu.</p></div><button className={`pending-toggle ${onlyPending ? "active" : ""}`} onClick={() => setOnlyPending(!onlyPending)}>{onlyPending ? "Mostrar totes" : "Només pendents"}</button></div>
          <div className="progress-summary"><span>{completedTasks} de {tasks.length} accions completades</span><i><em style={{ width: `${Math.round((completedTasks / tasks.length) * 100)}%` }}/></i></div>
          <div className="check-grid four">{checklistGroups.map((group) => { const groupTasks = tasks.filter((task) => task.group === group.key && (!onlyPending || !checked[task.id])); return <section key={group.key}><div className="check-head"><span>{group.icon}</span><div><h3>{group.title}</h3><p>{group.description}</p></div></div>{groupTasks.length ? groupTasks.map((task) => <TaskCheck id={task.id} key={task.id} checked={!!checked[task.id]} onToggle={toggleTask}/>) : <p className="empty-state">Tot completat ✓</p>}</section>; })}</div>
        </div>}

        {tab === "reserves" && <div className="tab-panel simple-panel">
          <div className="panel-intro"><p className="kicker">RESERVES I CONTACTES</p><h2>Telefonar, reservar i arribar.</h2><p>Cada targeta permet cridar, obrir la ubicació o consultar la web. L’estat està vinculat amb els itineraris i les llistes.</p></div>
          <div className="reservation-cards">{reservationRows.map((row) => { const contact = contactById[row.contactId]; const done = !!checked[row.taskId]; return <article className={`reservation-card ${done ? "done" : ""}`} key={row.taskId}><div className="reservation-top"><span className={`status ${done ? "confirmed" : "pending"}`}>{done ? "Completada" : "Pendent"}</span><b>{row.cost}</b></div><h3>{row.title}</h3><p>{row.date}</p><div className="reservation-actions">{contact.phone && <a href={`tel:${contact.phone}`} className="call-action">☎ {contact.phoneLabel}</a>}<a href={contact.map} target="_blank" rel="noreferrer">Maps ↗</a>{contact.web && <a href={contact.web} target="_blank" rel="noreferrer">Web ↗</a>}</div><TaskCheck id={row.taskId} checked={done} onToggle={toggleTask} compact/></article>; })}</div>
          <div className="contact-section"><div className="subheading"><div><p className="kicker">ALTRES CONTACTES ÚTILS</p><h3>Base i necessitats familiars</h3></div></div><div className="places-grid">{["chigre","farmacia","naranco"].map((id) => <ContactCard key={id} contact={contactById[id]} small/>)}</div></div>
          <div className="emergency-card"><span>URGÈNCIES</span><strong>112</strong><p>Per a assistència urgent sanitària, salvament o emergència. En platja, respectar sempre bandera i socorrisme.</p><a href="tel:112">Telefonar al 112</a></div>
        </div>}

        {tab === "pressupost" && <div className="tab-panel simple-panel">
          <div className="panel-intro"><p className="kicker">PRESSUPOST FAMILIAR</p><h2>Una previsió realista i continguda.</h2><p>Inclou allotjament, trajectes, menjars, activitats, aparcaments i 40 € d’imprevistos.</p></div>
          <div className="budget-hero"><div><small>TOTAL PREVIST</small><strong>1.597–1.782 €</strong><p>per a 4 persones · 8 dies</p></div><div className="budget-ring"><span>725 €</span><small>allotjament</small></div></div>
          <div className="day-budget-grid">{days.map((day) => <button key={day.id} onClick={() => chooseDay(day.id)}><span>Dia {day.id}</span><strong>{day.budget}</strong><small>{day.title} ↗</small></button>)}</div>
          <div className="budget-bars"><div><label><span>Allotjament</span><b>725 €</b></label><i><em style={{width:'46%'}}/></i></div><div><label><span>Dies 1–8</span><b>832–1.017 €</b></label><i><em style={{width:'52%'}}/></i></div><div><label><span>Imprevistos</span><b>40 €</b></label><i><em style={{width:'4%'}}/></i></div></div>
          <p className="budget-note">El Dia 4 baixa lleugerament perquè el dimecres 19 l’accés al MUJA és gratuït amb invitació en línia. Les activitats opcionals i el dinar d’El Cafetín es mantenen com a imports orientatius.</p>
        </div>}
      </section>

      <section className="base-banner"><div><p className="kicker">LA NOSTRA BASE</p><h2>La Callezuela no és un nucli comercial.</h2><p>Desdejuneu normalment a casa i planifiqueu el pa i la compra. A peu teniu el centre del poble, Sollovio i trams de la Ruta dels Molins; El Casal té piscina, jardí, zona infantil, futbolí, barbacoa i taules exteriors.</p><div className="base-links"><a href={contactById.casal.map} target="_blank" rel="noreferrer">Allotjament en Maps ↗</a><a href="tel:+34699862203">☎ 699 862 203</a><a href={contactById.chigre.map} target="_blank" rel="noreferrer">El Chigre ↗</a></div></div></section>

      <footer><div className="brand"><span className="brand-mark">A</span><span>ASTÚRIES <b>2026</b></span></div><p>Josep, Caty, Lluís i Cesc · 16–23 d’agost</p><a href="#inici">Tornar amunt ↑</a></footer>

      <nav className="mobile-nav"><button onClick={() => jump("itinerari")} className={tab === "itinerari" ? "active" : ""}><span>⌖</span>Ruta</button><button onClick={() => jump("compres")} className={tab === "compres" ? "active" : ""}><span>▤</span>Compres</button><button onClick={() => jump("maleta")} className={tab === "maleta" ? "active" : ""}><span>✓</span>Llistes</button><button onClick={() => jump("reserves")} className={tab === "reserves" ? "active" : ""}><span>☎</span>Reserves</button><button onClick={() => jump("pressupost")} className={tab === "pressupost" ? "active" : ""}><span>€</span>Cost</button></nav>
    </main>
  );
}
