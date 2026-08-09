"use client";

import { useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { contacts, days, maps, shops, tasks, type Contact } from "./trip-data";

type TabKey = "itinerari" | "compres" | "maleta" | "reserves" | "control";
type CheckedState = Record<string, boolean>;

type Expense = {
  id: string;
  day: number;
  concept: string;
  category: string;
  amount: number;
  note: string;
  createdAt: string;
};

type CustomTask = { id: string; label: string; group: string };
type ShoppingItem = { id: string; label: string; quantity: string; group: string; checked: boolean };

const STORAGE = {
  checked: "asturies-checklist-v2",
  expenses: "asturies-expenses-v1",
  budget: "asturies-budget-v1",
  customTasks: "asturies-custom-tasks-v1",
  taskLabels: "asturies-task-labels-v1",
  shopping: "asturies-shopping-v1",
};

const categories = [
  "Allotjament", "Gasolina", "Supermercat", "Menjar fora",
  "Entrades i activitats", "Aparcament i peatges", "Capritxos", "Altres i imprevistos",
];

const shoppingGroups = ["Des de Xaló", "Compra principal", "Desdejunis", "Pícnics", "Sopars", "Altres"];

const initialExpenses: Expense[] = [
  { id: "allotjament-el-casal", day: 1, concept: "Apartamentos El Casal", category: "Allotjament", amount: 725, note: "7 nits", createdAt: "2026-08-09T12:00:00.000Z" },
];

const initialShopping: ShoppingItem[] = [
  { id: "shop-cafe", label: "Café", quantity: "per a 8 dies", group: "Des de Xaló", checked: false },
  { id: "shop-pernil", label: "Pernil serrà", quantity: "1 paquet", group: "Des de Xaló", checked: false },
  { id: "shop-pa", label: "Pa per a congelar", quantity: "segons espai", group: "Compra principal", checked: false },
  { id: "shop-llet", label: "Llet", quantity: "2–3 litres", group: "Compra principal", checked: false },
  { id: "shop-tomaca", label: "Tomaca, encisam i olives", quantity: "per a ensalades", group: "Compra principal", checked: false },
  { id: "shop-pollastre", label: "Pit de pollastre i altra carn", quantity: "2 menjars", group: "Sopars", checked: false },
  { id: "shop-pasta", label: "Pasta i tonyina", quantity: "per a pícnic", group: "Pícnics", checked: false },
  { id: "shop-aigua", label: "Aigua", quantity: "garrafes i botelles", group: "Compra principal", checked: false },
];

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

type RestaurantAlternative = {
  name: string;
  detail: string;
  phone?: string;
  phoneLabel?: string;
  map: string;
  reviews: string;
};

const restaurantIds = new Set(["yumay", "cafetin", "puerto", "piguena", "chigre"]);

const restaurantAlternatives: Record<string, RestaurantAlternative> = {
  yumay: {
    name: "Casa Tataguyo",
    detail: "Plaça del Carbayedo, 6 · Avilés",
    phone: "+34985564815",
    phoneLabel: "985 564 815",
    map: maps("Casa Tataguyo Avilés"),
    reviews: maps("Casa Tataguyo Avilés ressenyes"),
  },
  cafetin: {
    name: "El Barrigón de Bertín",
    detail: "C. San José · Llastres",
    phone: "+34985850445",
    phoneLabel: "985 850 445",
    map: maps("El Barrigón de Bertín Lastres"),
    reviews: maps("El Barrigón de Bertín Lastres ressenyes"),
  },
  puerto: {
    name: "Sidrería Bar Matute",
    detail: "C. Marqués de Canillejas, 4 · Llanes",
    phone: "+34985401896",
    phoneLabel: "985 401 896",
    map: maps("Sidrería Bar Matute Llanes"),
    reviews: maps("Sidrería Bar Matute Llanes ressenyes"),
  },
  piguena: {
    name: "Sidrería La Manzana",
    detail: "C. Gascona, 20 · Oviedo",
    phone: "+34985081919",
    phoneLabel: "985 081 919",
    map: maps("Sidrería La Manzana Oviedo"),
    reviews: maps("Sidrería La Manzana Oviedo ressenyes"),
  },
};

const foodStopsByTitle: Record<string, { reviews: string; alternativeId?: string }> = {
  "Desdejuni · Cafestore Albacete": { reviews: maps("Cafestore Albacete A-31 ressenyes") },
  "Dinar · Sidreria Yumay": { reviews: maps("Sidrería Yumay Avilés ressenyes"), alternativeId: "yumay" },
  "Dinar · El Cafetín": { reviews: maps("Restaurante El Cafetín Lastres ressenyes"), alternativeId: "cafetin" },
  "Sopar · El Puerto": { reviews: maps("Sidrería Restaurante El Puerto Llanes ressenyes"), alternativeId: "puerto" },
  "Dinar · El Pigüeña": { reviews: maps("Sidrería El Pigüeña Oviedo ressenyes"), alternativeId: "piguena" },
  "Honrubia · Moya": { reviews: maps("Hotel Restaurante Moya Honrubia ressenyes") },
};

type VisitDetails = {
  description: string;
  image: string;
  imageAlt: string;
  source: string;
};

const commonsImage = (filename: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=1200`;
const commonsSource = (filename: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;

const visitDetailsByTitle: Record<string, VisitDetails> = {
  "Passeig mudèjar": {
    description: "La Plaça de la Villa concentra l’essència mudèjar d’Arévalo: porxos, façanes de rajola i les esglésies de Santa María i San Martín. És un passeig curt i molt visual per a estirar les cames sense convertir la parada en una visita llarga.",
    image: commonsImage("Arévalo-Plaza de la Villa -Santa María la Mayor.JPG"), imageAlt: "Plaça de la Villa d’Arévalo", source: commonsSource("Arévalo-Plaza de la Villa -Santa María la Mayor.JPG"),
  },
  "Centro Niemeyer": {
    description: "El conjunt d’Óscar Niemeyer és la imatge contemporània d’Avilés. La plaça exterior permet vore la cúpula, la torre i l’auditori sense necessitat de comprar entrada; la passarel·la sobre la ria completa les millors perspectives.",
    image: commonsImage("Centro cultural Niemeyer - Ría de Avilés.jpg"), imageAlt: "Centre Niemeyer al costat de la ria d’Avilés", source: commonsSource("Centro cultural Niemeyer - Ría de Avilés.jpg"),
  },
  "Cudillero · passeig curt": {
    description: "Cudillero forma un amfiteatre de cases de colors al voltant del port. La ruta proposada passa per la plaça de la Marina i dos miradors pròxims, evitant les escales més llargues si Cesc ja està cansat.",
    image: commonsImage("Cudillero Asturias.jpg"), imageAlt: "Cases de colors de Cudillero", source: commonsSource("Cudillero Asturias.jpg"),
  },
  "Cap Vidio": {
    description: "Un dels grans balcons de la costa occidental, amb penya-segats que superen els huitanta metres. El far i les vistes són accessibles amb un passeig curt, però cal mantindre Cesc sempre agafat i no acostar-se a la vora.",
    image: commonsImage("Cabo Vidio 2.jpg"), imageAlt: "Penya-segats del cap Vidio", source: commonsSource("Cabo Vidio 2.jpg"),
  },
  "Platja de San Pedro": {
    description: "Platja ampla amb zona recreativa i serveis, pensada com la parada tranquil·la del dia. És adequada per al pícnic i el descans; el bany dependrà sempre de la bandera i de les indicacions de salvament.",
    image: commonsImage("Playa de San Pedro de La Ribera.JPG"), imageAlt: "Platja de San Pedro de la Ribera", source: commonsSource("Playa de San Pedro de La Ribera.JPG"),
  },
  "MUJA": {
    description: "El Museu del Juràssic d’Astúries té forma de gran petjada tridàctila. Dins recorre el Triàsic, Juràssic i Cretaci; fora, els xiquets trobaran reproduccions de dinosaures a escala real amb vista a la costa.",
    image: "https://www.museojurasicoasturias.com/documents/3175063/0/MUJA.jpg/3ef2b678-0ced-5c39-3c3c-24113ad1fccf?t=1756449929281", imageAlt: "Entrada del Museu del Juràssic d’Astúries", source: "https://www.museojurasicoasturias.com/",
  },
  "Llastres · passeig": {
    description: "Llastres baixa en costera cap al port entre carrerons i cases marineres. El mirador de San Roque dona la vista panoràmica més completa; després convé baixar només el necessari per arribar al dinar sense presses.",
    image: commonsImage("Lastres of Asturias, Spain at daybreak.jpg"), imageAlt: "Vista de Llastres des del mirador de San Roque", source: commonsSource("Lastres of Asturias, Spain at daybreak.jpg"),
  },
  "Tazones": {
    description: "Xicotet port mariner lligat a l’arribada de Carles V a Espanya. El més agradable és passejar pels barris de San Miguel i San Roque, buscar la Casa de les Conquilles i acabar al moll.",
    image: commonsImage("Tazones Asturias.jpg"), imageAlt: "Poble mariner de Tazones", source: commonsSource("Tazones Asturias.jpg"),
  },
  "Ruta curta familiar": {
    description: "La ruta uneix els llacs Ercina i Enol amb miradors, antigues mines i prats de muntanya. Són uns tres quilòmetres, però convé reservar temps per a parar, fer fotos i caminar al ritme de Cesc.",
    image: commonsImage("Vistas lagos de covadonga 04.jpg"), imageAlt: "Llac Ercina als Lagos de Covadonga", source: commonsSource("Vistas lagos de covadonga 04.jpg"),
  },
  "Cuevas del Mar": {
    description: "La platja destaca pels grans arcs de roca calcària modelats per la mar. Amb marea baixa es veuen millor les formes, però les roques poden relliscar: Cesc ha d’anar sempre acompanyat.",
    image: commonsImage("Playa cuevas del mar 3.jpg"), imageAlt: "Arcs de roca a la platja de Cuevas del Mar", source: commonsSource("Playa cuevas del mar 3.jpg"),
  },
  "Llanes": {
    description: "El passeig concentra la muralla, el nucli històric, el port i els Cubos de la Memoria. El tram des del Sablón fins al port és curt i deixa el restaurant a mà per acabar el dia sense tornar a moure el cotxe.",
    image: commonsImage("Llanes - Puerto 1.jpg"), imageAlt: "Port de Llanes", source: commonsSource("Llanes - Puerto 1.jpg"),
  },
  "Santa María + San Miguel": {
    description: "Santa María del Naranco i San Miguel de Lillo són les peces més representatives del preromànic asturià. Estan molt pròximes entre si i la visita guiada ajuda a entendre per què són Patrimoni Mundial.",
    image: commonsImage("Santa María del Naranco, Oviedo.jpg"), imageAlt: "Santa María del Naranco a Oviedo", source: commonsSource("Santa María del Naranco, Oviedo.jpg"),
  },
};

const legacyTaskMap: Record<string, string[]> = {
  "0-0": ["casal-arribada"], "0-1": ["casal-cuina"], "0-2": ["tigu-revisio"], "0-3": ["v16-docs"], "0-4": ["rutes-offline"],
  "1-0": ["yumay"], "1-1": ["muja", "cafetin"], "1-2": ["lagos"], "1-3": ["puerto"], "1-4": ["piguena"],
  "2-0": ["impermeables"], "2-1": ["bany"], "2-2": ["cesc-muda"], "2-3": ["nevera"], "2-4": ["medicacio"],
};

function TaskCheck({ id, checked, onToggle, compact = false, label }: { id: string; checked: boolean; onToggle: (id: string) => void; compact?: boolean; label?: string }) {
  const task = taskById[id];
  if (!task && !label) return null;
  return (
    <button className={`check-item ${checked ? "checked" : ""} ${compact ? "compact" : ""}`} onClick={() => onToggle(id)} aria-pressed={checked}>
      <span className="checkbox">{checked ? "✓" : ""}</span><span>{label || task?.label}</span>
    </button>
  );
}

function ContactCard({ contact, small = false }: { contact: Contact; small?: boolean }) {
  const alternative = restaurantAlternatives[contact.id];
  const showReviews = restaurantIds.has(contact.id);
  return (
    <article className={`place-card ${small ? "small" : ""}`}>
      <div className="place-copy"><small>CONTACTE</small><h3>{contact.name}</h3><p>{contact.detail}</p>{contact.note && <em>{contact.note}</em>}</div>
      <div className="place-actions">
        {contact.phone && <a className="call-action" href={`tel:${contact.phone}`}>☎ {contact.phoneLabel}</a>}
        <a href={contact.map} target="_blank" rel="noreferrer">Maps ↗</a>
        {showReviews && <a className="review-action" href={maps(`${contact.name} ressenyes`)} target="_blank" rel="noreferrer">★ Ressenyes Google</a>}
        {contact.web && <a href={contact.web} target="_blank" rel="noreferrer">Web ↗</a>}
      </div>
      {alternative && <div className="restaurant-alternative">
        <small>ALTERNATIVA SI ESTÀ COMPLET</small>
        <strong>{alternative.name}</strong>
        <span>{alternative.detail}</span>
        <div>
          {alternative.phone && <a href={`tel:${alternative.phone}`}>☎ {alternative.phoneLabel}</a>}
          <a href={alternative.map} target="_blank" rel="noreferrer">Maps ↗</a>
          <a href={alternative.reviews} target="_blank" rel="noreferrer">★ Ressenyes</a>
        </div>
      </div>}
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
  const [hydrated, setHydrated] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budgetTotal, setBudgetTotal] = useState(1690);
  const [customTasks, setCustomTasks] = useState<CustomTask[]>([]);
  const [taskLabels, setTaskLabels] = useState<Record<string, string>>({});
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);
  const [expenseForm, setExpenseForm] = useState({ day: "1", concept: "", category: "Supermercat", amount: "", note: "" });
  const [newTask, setNewTask] = useState({ label: "", group: "dia" });
  const [newShopping, setNewShopping] = useState({ label: "", quantity: "", group: "Compra principal" });
  const restoreInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      let stored: CheckedState = {};
      try { stored = JSON.parse(localStorage.getItem("asturies-checklist-v2") || "{}"); } catch { stored = {}; }
      for (const [legacyId, taskIds] of Object.entries(legacyTaskMap)) {
        if (localStorage.getItem(`asturies-${legacyId}`) === "1") taskIds.forEach((id) => { stored[id] = true; });
      }
      setChecked(stored);
      localStorage.setItem(STORAGE.checked, JSON.stringify(stored));
      try { setExpenses(JSON.parse(localStorage.getItem(STORAGE.expenses) || "null") || initialExpenses); } catch { setExpenses(initialExpenses); }
      const savedBudget = Number(localStorage.getItem(STORAGE.budget));
      if (savedBudget > 0) setBudgetTotal(savedBudget);
      try { setCustomTasks(JSON.parse(localStorage.getItem(STORAGE.customTasks) || "[]")); } catch { setCustomTasks([]); }
      try { setTaskLabels(JSON.parse(localStorage.getItem(STORAGE.taskLabels) || "{}")); } catch { setTaskLabels({}); }
      try { setShoppingItems(JSON.parse(localStorage.getItem(STORAGE.shopping) || "null") || initialShopping); } catch { setShoppingItems(initialShopping); }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE.expenses, JSON.stringify(expenses)); }, [expenses, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE.budget, String(budgetTotal)); }, [budgetTotal, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE.customTasks, JSON.stringify(customTasks)); }, [customTasks, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE.taskLabels, JSON.stringify(taskLabels)); }, [taskLabels, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE.shopping, JSON.stringify(shoppingItems)); }, [shoppingItems, hydrated]);

  const toggleTask = (id: string) => {
    setChecked((current) => {
      const next = { ...current, [id]: !current[id] };
      localStorage.setItem(STORAGE.checked, JSON.stringify(next));
      return next;
    });
  };

  const makeId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const addExpense = (event: FormEvent) => {
    event.preventDefault();
    const amount = Number(expenseForm.amount.replace(",", "."));
    if (!expenseForm.concept.trim() || !Number.isFinite(amount) || amount <= 0) return;
    setExpenses((current) => [{
      id: makeId("expense"), day: Number(expenseForm.day), concept: expenseForm.concept.trim(),
      category: expenseForm.category, amount, note: expenseForm.note.trim(), createdAt: new Date().toISOString(),
    }, ...current]);
    setExpenseForm((current) => ({ ...current, concept: "", amount: "", note: "" }));
  };

  const editExpense = (expense: Expense) => {
    const concept = window.prompt("Concepte de la despesa", expense.concept)?.trim();
    if (!concept) return;
    const amountText = window.prompt("Import en euros", String(expense.amount).replace(".", ","));
    if (!amountText) return;
    const amount = Number(amountText.replace(",", "."));
    if (!Number.isFinite(amount) || amount <= 0) return;
    setExpenses((current) => current.map((item) => item.id === expense.id ? { ...item, concept, amount } : item));
  };

  const deleteExpense = (id: string) => {
    if (window.confirm("Vols eliminar esta despesa?")) setExpenses((current) => current.filter((item) => item.id !== id));
  };

  const addCustomTask = (event: FormEvent) => {
    event.preventDefault();
    const label = newTask.label.trim();
    if (!label) return;
    setCustomTasks((current) => [...current, { id: makeId("task"), label, group: newTask.group }]);
    setNewTask((current) => ({ ...current, label: "" }));
  };

  const editTask = (id: string, currentLabel: string, custom: boolean) => {
    const label = window.prompt("Edita el text de la tasca", currentLabel)?.trim();
    if (!label) return;
    if (custom) setCustomTasks((current) => current.map((task) => task.id === id ? { ...task, label } : task));
    else setTaskLabels((current) => ({ ...current, [id]: label }));
  };

  const deleteCustomTask = (id: string) => {
    if (!window.confirm("Vols eliminar esta tasca?")) return;
    setCustomTasks((current) => current.filter((task) => task.id !== id));
    setChecked((current) => { const next = { ...current }; delete next[id]; localStorage.setItem(STORAGE.checked, JSON.stringify(next)); return next; });
  };

  const addShoppingItem = (event: FormEvent) => {
    event.preventDefault();
    const label = newShopping.label.trim();
    if (!label) return;
    setShoppingItems((current) => [...current, { id: makeId("shop"), label, quantity: newShopping.quantity.trim(), group: newShopping.group, checked: false }]);
    setNewShopping((current) => ({ ...current, label: "", quantity: "" }));
  };

  const toggleShopping = (id: string) => setShoppingItems((current) => current.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));
  const editShopping = (item: ShoppingItem) => {
    const label = window.prompt("Edita el producte", item.label)?.trim();
    if (!label) return;
    const quantity = window.prompt("Quantitat o nota", item.quantity) ?? item.quantity;
    setShoppingItems((current) => current.map((currentItem) => currentItem.id === item.id ? { ...currentItem, label, quantity: quantity.trim() } : currentItem));
  };
  const deleteShopping = (id: string) => { if (window.confirm("Vols eliminar este producte?")) setShoppingItems((current) => current.filter((item) => item.id !== id)); };

  const filteredDays = useMemo(() => filter === "tots" ? days : days.filter((day) => day.kind === filter), [filter]);
  const selected = days.find((day) => day.id === activeDay) ?? days[0];
  const completedReservations = reservationRows.filter((row) => checked[row.taskId]).length;
  const completedTasks = [...tasks, ...customTasks].filter((task) => checked[task.id]).length;
  const allTaskCount = tasks.length + customTasks.length;
  const spent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = budgetTotal - spent;
  const budgetPercent = budgetTotal > 0 ? Math.min(100, Math.round((spent / budgetTotal) * 100)) : 0;
  const expenseByCategory = categories.map((category) => ({ category, total: expenses.filter((expense) => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0) })).filter((item) => item.total > 0);
  const expenseByDay = days.map((day) => ({ day, total: expenses.filter((expense) => expense.day === day.id).reduce((sum, expense) => sum + expense.amount, 0) }));
  const pendingShopping = shoppingItems.filter((item) => !item.checked).length;

  const download = (filename: string, content: string, type: string) => {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const backupData = () => download("asturies-2026-copia.json", JSON.stringify({ version: 1, savedAt: new Date().toISOString(), checked, expenses, budgetTotal, customTasks, taskLabels, shoppingItems }, null, 2), "application/json");

  const exportCsv = () => {
    const escape = (value: string | number) => `"${String(value).replaceAll('"', '""')}"`;
    const rows = [["Dia", "Concepte", "Categoria", "Import", "Nota"], ...expenses.map((expense) => [expense.day, expense.concept, expense.category, expense.amount.toFixed(2), expense.note])];
    download("despeses-asturies-2026.csv", `\uFEFF${rows.map((row) => row.map(escape).join(";")).join("\n")}`, "text/csv;charset=utf-8");
  };

  const restoreData = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (!data || !Array.isArray(data.expenses) || !Array.isArray(data.shoppingItems)) throw new Error("invalid");
        setChecked(data.checked || {});
        setExpenses(data.expenses);
        setBudgetTotal(Number(data.budgetTotal) || 1690);
        setCustomTasks(Array.isArray(data.customTasks) ? data.customTasks : []);
        setTaskLabels(data.taskLabels || {});
        setShoppingItems(data.shoppingItems);
        window.alert("Còpia restaurada correctament.");
      } catch { window.alert("No s’ha pogut restaurar: el fitxer no és una còpia vàlida."); }
      event.target.value = "";
    };
    reader.readAsText(file);
  };

  const jump = (nextTab: TabKey) => {
    setTab(nextTab);
    setMenuOpen(false);
    window.setTimeout(() => document.getElementById("planner")?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  };

  const chooseDay = (id: number) => {
    setActiveDay(id);
    setTab("itinerari");
    setMenuOpen(false);
    window.setTimeout(() => document.getElementById(`itinerari-dia-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inici" aria-label="Inici"><span className="brand-mark">A</span><span>ASTÚRIES <b>2026</b></span></a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <button onClick={() => jump("itinerari")}>Itinerari</button><button onClick={() => jump("compres")}>Compres</button><button onClick={() => jump("maleta")}>Llistes</button><button onClick={() => jump("reserves")}>Reserves</button><button onClick={() => jump("control")}>Control</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Obrir menú">{menuOpen ? "×" : "☰"}</button>
      </header>

      <section className="hero" id="inici">
        <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/><div className="mountain mountain-a"/><div className="mountain mountain-b"/>
        <div className="hero-content">
          <p className="eyebrow">GUIA OPERATIVA · FAMÍLIA AVELLÀ</p>
          <h1>Huit dies per a<br/><em>viure Astúries.</em></h1>
          <p className="hero-lead">Tot el viatge al mòbil: horaris, rutes, restaurants, compres, llistes i despeses guardades automàticament en este dispositiu.</p>
          <div className="hero-actions"><button className="primary" onClick={() => jump("itinerari")}>Començar la guia <span>↓</span></button><button className="secondary" onClick={() => jump("reserves")}>{reservationRows.length - completedReservations} reserves pendents ↗</button></div>
        </div>
        <aside className="trip-card">
          <div className="trip-card-top"><span>COMENÇA EL</span><b>16·08</b></div>
          <div className="trip-route"><span className="route-dot start"/><div><small>EIXIDA · 16 AGO</small><strong>Xaló</strong></div></div><div className="route-line"><span>930 km</span></div><div className="trip-route"><span className="route-dot end"/><div><small>BASE · 7 NITS</small><strong>La Callezuela</strong></div></div>
          <div className="trip-progress"><div><span>Preparació</span><b>{completedTasks}/{allTaskCount}</b></div><i><em style={{ width: `${Math.round((completedTasks / Math.max(1, allTaskCount)) * 100)}%` }}/></i></div>
          <div className="trip-meta"><div><span>8</span><small>DIES</small></div><div><span>4</span><small>VIATGERS</small></div><div><span>7,3</span><small>L/100 KM</small></div></div>
        </aside>
      </section>

      <section className="quick-strip">
        <a href={contactById.casal.map} target="_blank" rel="noreferrer"><span>⌂</span><p><small>ALLOTJAMENT · MAPS</small><strong>Apartamentos El Casal ↗</strong></p></a>
        <div><span>◉</span><p><small>DATES</small><strong>16–23 agost 2026</strong></p></div>
        <a href="tel:+34699862203"><span>☎</span><p><small>EL CASAL</small><strong>699 862 203</strong></p></a>
        <button onClick={() => jump("control")}><span>€</span><p><small>DESPESES</small><strong>{spent.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} € de {budgetTotal.toLocaleString("ca-ES")} €</strong></p></button>
      </section>

      <section className="section route-section" id="ruta">
        <div className="section-heading"><div><p className="kicker">LA RUTA D’UN PRIMER COLP D’ULL</p><h2>Un viatge, huit jornades.</h2></div><p>Prem qualsevol dia per obrir el pla complet, els llocs exactes, la preparació i les alternatives.</p></div>
        <div className="route-rail">{days.map((day) => <button key={day.id} onClick={() => chooseDay(day.id)} className={activeDay === day.id ? "active" : ""}><span>{day.id}</span><small>{day.shortDate}</small><strong>{day.title.split("+")[0]}</strong></button>)}</div>
      </section>

      <section className="section planner" id="planner">
        <div className="tabbar" role="tablist" aria-label="Seccions de la guia">
          {([['itinerari','Itinerari'],['compres','Compra'],['maleta','Llistes'],['reserves','Reserves'],['control','Control €']] as [TabKey,string][]).map(([key,label]) => <button key={key} onClick={() => setTab(key)} className={tab === key ? "active" : ""} role="tab">{label}</button>)}
        </div>

        {tab === "itinerari" && <div className="tab-panel">
          <div className="filter-row"><div><p className="kicker">ITINERARI DETALLAT</p><h2>Tria la jornada</h2></div><div className="filters">{[['tots','Tots'],['costa','Costa'],['natura','Natura'],['ciutat','Ciutat'],['ruta','Carretera']].map(([key,label]) => <button key={key} onClick={() => setFilter(key)} className={filter === key ? "active" : ""}>{label}</button>)}</div></div>
          <div className="day-grid">{filteredDays.map((day) => <button key={day.id} className={`day-card ${day.color} ${activeDay === day.id ? "selected" : ""}`} onClick={() => chooseDay(day.id)}><div className="day-card-top"><span>DIA {day.id}</span><i>{day.icon}</i></div><small>{day.date}</small><h3>{day.title}</h3><p>{day.subtitle}</p><div className="day-stats"><span>{day.distance}</span><span>{day.budget}</span></div></button>)}</div>

          <article className={`day-detail ${selected.color}`} id={`itinerari-dia-${selected.id}`}>
            <div className="detail-head"><div className="detail-number">{String(selected.id).padStart(2,"0")}</div><div><p>{selected.date}</p><h2>{selected.title}</h2><span>{selected.subtitle}</span></div><a href={selected.map} target="_blank" rel="noreferrer" className="map-button">Ruta completa en Maps ↗</a></div>
            <div className="detail-facts"><div><small>DISTÀNCIA</small><strong>{selected.distance}</strong></div><div><small>CONDUCCIÓ</small><strong>{selected.driving}</strong></div><div><small>PRESSUPOST</small><strong>{selected.budget}</strong></div></div>
            <div className="day-brief"><div><small>OBJECTIU REAL DEL DIA</small><p>{selected.objective}</p></div><div className="weather-brief"><small>DECISIÓ D’ORATGE</small><p>{selected.weather}</p></div></div>
            <div className="detail-columns">
              <div className="timeline"><h3>Horari pas a pas</h3>{selected.schedule.map((item, index) => {
                const visit = visitDetailsByTitle[item.title];
                const foodStop = foodStopsByTitle[item.title];
                const alternative = foodStop?.alternativeId ? restaurantAlternatives[foodStop.alternativeId] : undefined;
                return <div className="timeline-item" key={`${selected.id}-${index}`}><time>{item.time}</time><span className="timeline-dot"/><div className="timeline-copy"><div><strong>{item.title}</strong>{item.tag && <em>{item.tag}</em>}</div><p>{item.note}</p><div className="timeline-links">{item.map && <a href={item.map} target="_blank" rel="noreferrer">Obrir ubicació ↗</a>}{foodStop && <a className="review-action" href={foodStop.reviews} target="_blank" rel="noreferrer">★ Ressenyes Google ↗</a>}</div>
                  {alternative && <div className="timeline-alternative"><span>Alternativa si està complet</span><strong>{alternative.name}</strong><small>{alternative.detail}</small><div>{alternative.phone && <a href={`tel:${alternative.phone}`}>☎ {alternative.phoneLabel}</a>}<a href={alternative.map} target="_blank" rel="noreferrer">Maps ↗</a><a href={alternative.reviews} target="_blank" rel="noreferrer">Ressenyes ↗</a></div></div>}
                  {visit && <details className="visit-details"><summary><span className="plus-icon">+</span><span>Veure descripció i foto</span></summary><div className="visit-card"><img src={visit.image} alt={visit.imageAlt} loading="lazy"/><div><p>{visit.description}</p><div><a href={item.map} target="_blank" rel="noreferrer">Obrir en Maps ↗</a><a href={visit.source} target="_blank" rel="noreferrer">Font de la foto ↗</a></div></div></div></details>}
                </div></div>;
              })}</div>
              <aside className="day-aside">
                <div className="info-card food-card"><span>MENJARS</span><p>{selected.food}</p></div>
                <div className="info-card"><span>RECORREGUT A PEU</span><p>{selected.walk}</p></div>
                <div className="info-card"><span>APARCAMENT</span><p>{selected.parking}</p></div>
                <div className="info-card"><span>CLAUS PRÀCTIQUES</span><ul>{selected.practical.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="info-card planb"><span>PLA B</span><p>{selected.planB}</p></div>
                <div className="resource-row">{selected.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
              </aside>
            </div>
            <section className="day-actions"><div className="subheading"><div><p className="kicker">PREPARACIÓ GUARDADA</p><h3>Marca ací o en «Llistes»</h3></div><span>{selected.taskIds.filter((id) => checked[id]).length}/{selected.taskIds.length}</span></div><div className="inline-checks">{selected.taskIds.map((id) => <TaskCheck key={id} id={id} label={taskLabels[id]} checked={!!checked[id]} onToggle={toggleTask} compact/>)}</div></section>
            {selected.contactIds.length > 0 && <section className="day-contacts"><p className="kicker">TELÈFONS I ENLLAÇOS DEL DIA</p><div className="places-grid">{selected.contactIds.map((id) => <ContactCard key={id} contact={contactById[id]} small/>)}</div></section>}
            <div className="day-switch"><button disabled={selected.id === 1} onClick={() => chooseDay(selected.id - 1)}>← Dia anterior</button><span>{selected.id} / 8</span><button disabled={selected.id === 8} onClick={() => chooseDay(selected.id + 1)}>Dia següent →</button></div>
          </article>
        </div>}

        {tab === "compres" && <div className="tab-panel simple-panel">
          <div className="panel-intro"><p className="kicker">LLISTA DE LA COMPRA</p><h2>Afegix, marca i compra.</h2><p>Queden {pendingShopping} productes pendents. Qualsevol canvi es guarda automàticament en este dispositiu.</p></div>
          <form className="add-form shopping-add" onSubmit={addShoppingItem}>
            <label><span>Producte</span><input value={newShopping.label} onChange={(event) => setNewShopping((current) => ({ ...current, label: event.target.value }))} placeholder="Ex. ous o salmó" required/></label>
            <label><span>Quantitat o nota</span><input value={newShopping.quantity} onChange={(event) => setNewShopping((current) => ({ ...current, quantity: event.target.value }))} placeholder="Ex. 2 paquets"/></label>
            <label><span>Grup</span><select value={newShopping.group} onChange={(event) => setNewShopping((current) => ({ ...current, group: event.target.value }))}>{shoppingGroups.map((group) => <option key={group}>{group}</option>)}</select></label>
            <button className="form-primary" type="submit">+ Afegir</button>
          </form>
          <div className="shopping-groups">{shoppingGroups.map((group) => { const items = shoppingItems.filter((item) => item.group === group); if (!items.length) return null; return <section key={group}><div className="shopping-group-head"><h3>{group}</h3><span>{items.filter((item) => item.checked).length}/{items.length}</span></div>{items.map((item) => <div className={`managed-item ${item.checked ? "done" : ""}`} key={item.id}><button className="managed-toggle" onClick={() => toggleShopping(item.id)} aria-label={`${item.checked ? "Desmarcar" : "Marcar"} ${item.label}`}><span className="checkbox">{item.checked ? "✓" : ""}</span><span><b>{item.label}</b>{item.quantity && <small>{item.quantity}</small>}</span></button><div className="item-actions"><button onClick={() => editShopping(item)} aria-label={`Editar ${item.label}`}>✎</button><button onClick={() => deleteShopping(item.id)} aria-label={`Eliminar ${item.label}`}>×</button></div></div>)}</section>; })}</div>
          <div className="subheading store-heading"><div><p className="kicker">ON COMPRAR</p><h3>Supermercats i moments previstos</h3></div></div>
          <div className="store-list compact-stores">{shops.map((shop, index) => <article className="store-card" key={shop.id}><div className="shopping-index">0{index+1}</div><div className="store-main"><small>{shop.note}</small><h3>{shop.when}</h3><address>{shop.address}</address><p>{shop.items}</p><div className="store-actions"><a href={shop.map} target="_blank" rel="noreferrer">Google Maps ↗</a>{shop.web && <a href={shop.web} target="_blank" rel="noreferrer">Fitxa i horari ↗</a>}</div><TaskCheck id={shop.taskId} label={taskLabels[shop.taskId]} checked={!!checked[shop.taskId]} onToggle={toggleTask} compact/></div></article>)}</div>
          <div className="menu-bank"><h3>Rotació familiar</h3><div><span>Hamburgueses + ensalada</span><span>Salmó + ensalada</span><span>Pollastre + verdura</span><span>Pizzes congelades</span><span>Llom + arròs</span><span>Pasta + tonyina</span></div></div>
          <div className="allergy-note"><b>Atenció alimentària</b><p>Lluís té al·lèrgia als fruits secs i a diverses fruites. Comproveu ingredients i traces, pregunteu per la contaminació creuada, porteu la medicació accessible i manteniu separat el seu menjar de pícnic.</p></div>
        </div>}

        {tab === "maleta" && <div className="tab-panel simple-panel">
          <div className="panel-intro list-intro"><div><p className="kicker">LLISTES EDITABLES</p><h2>Una marca, en tota la web.</h2><p>Pots afegir noves tasques i editar les que ja hi ha. Tot queda guardat en este dispositiu.</p></div><button className={`pending-toggle ${onlyPending ? "active" : ""}`} onClick={() => setOnlyPending(!onlyPending)}>{onlyPending ? "Mostrar totes" : "Només pendents"}</button></div>
          <div className="progress-summary"><span>{completedTasks} de {allTaskCount} accions completades</span><i><em style={{ width: `${Math.round((completedTasks / Math.max(1, allTaskCount)) * 100)}%` }}/></i></div>
          <form className="add-form task-add" onSubmit={addCustomTask}>
            <label><span>Nova tasca</span><input value={newTask.label} onChange={(event) => setNewTask((current) => ({ ...current, label: event.target.value }))} placeholder="Ex. carregar les tauletes" required/></label>
            <label><span>Llista</span><select value={newTask.group} onChange={(event) => setNewTask((current) => ({ ...current, group: event.target.value }))}>{checklistGroups.map((group) => <option key={group.key} value={group.key}>{group.title}</option>)}</select></label>
            <button className="form-primary" type="submit">+ Afegir</button>
          </form>
          <div className="check-grid four">{checklistGroups.map((group) => {
            const groupTasks = tasks.filter((task) => task.group === group.key && (!onlyPending || !checked[task.id]));
            const groupCustom = customTasks.filter((task) => task.group === group.key && (!onlyPending || !checked[task.id]));
            return <section key={group.key}><div className="check-head"><span>{group.icon}</span><div><h3>{group.title}</h3><p>{group.description}</p></div></div>
              {groupTasks.map((task) => <div className="managed-check-row" key={task.id}><TaskCheck id={task.id} label={taskLabels[task.id]} checked={!!checked[task.id]} onToggle={toggleTask}/><button className="edit-mini" onClick={() => editTask(task.id, taskLabels[task.id] || task.label, false)} aria-label={`Editar ${task.label}`}>✎</button></div>)}
              {groupCustom.map((task) => <div className="managed-check-row" key={task.id}><TaskCheck id={task.id} label={task.label} checked={!!checked[task.id]} onToggle={toggleTask}/><button className="edit-mini" onClick={() => editTask(task.id, task.label, true)} aria-label={`Editar ${task.label}`}>✎</button><button className="delete-mini" onClick={() => deleteCustomTask(task.id)} aria-label={`Eliminar ${task.label}`}>×</button></div>)}
              {!groupTasks.length && !groupCustom.length && <p className="empty-state">Tot completat ✓</p>}
            </section>;
          })}</div>
        </div>}

        {tab === "reserves" && <div className="tab-panel simple-panel">
          <div className="panel-intro"><p className="kicker">RESERVES I CONTACTES</p><h2>Telefonar, reservar i arribar.</h2><p>Cada targeta permet cridar, obrir la ubicació o consultar la web. L’estat està vinculat amb els itineraris i les llistes.</p></div>
          <div className="reservation-cards">{reservationRows.map((row) => { const contact = contactById[row.contactId]; const done = !!checked[row.taskId]; return <article className={`reservation-card ${done ? "done" : ""}`} key={row.taskId}><div className="reservation-top"><span className={`status ${done ? "confirmed" : "pending"}`}>{done ? "Completada" : "Pendent"}</span><b>{row.cost}</b></div><h3>{row.title}</h3><p>{row.date}</p><div className="reservation-actions">{contact.phone && <a href={`tel:${contact.phone}`} className="call-action">☎ {contact.phoneLabel}</a>}<a href={contact.map} target="_blank" rel="noreferrer">Maps ↗</a>{restaurantIds.has(contact.id) && <a className="review-action" href={maps(`${contact.name} ressenyes`)} target="_blank" rel="noreferrer">★ Ressenyes</a>}{contact.web && <a href={contact.web} target="_blank" rel="noreferrer">Web ↗</a>}</div><TaskCheck id={row.taskId} label={taskLabels[row.taskId]} checked={done} onToggle={toggleTask} compact/></article>; })}</div>
          <div className="contact-section"><div className="subheading"><div><p className="kicker">ALTRES CONTACTES ÚTILS</p><h3>Base i necessitats familiars</h3></div></div><div className="places-grid">{["chigre","farmacia","naranco"].map((id) => <ContactCard key={id} contact={contactById[id]} small/>)}</div></div>
          <div className="emergency-card"><span>URGÈNCIES</span><strong>112</strong><p>Per a assistència urgent sanitària, salvament o emergència. En platja, respectar sempre bandera i socorrisme.</p><a href="tel:112">Telefonar al 112</a></div>
        </div>}

        {tab === "control" && <div className="tab-panel simple-panel control-panel">
          <div className="panel-intro"><p className="kicker">CONTROL DEL VIATGE</p><h2>Pressupost i despeses reals.</h2><p>L’apartament de 725 € ja està introduït. Afegix cada pagament i veuràs al moment quant queda disponible.</p></div>

          <section className="control-summary">
            <div className="budget-editor"><label htmlFor="budget-total">PRESSUPOST TOTAL</label><div><input id="budget-total" type="number" min="1" step="10" value={budgetTotal} onChange={(event) => setBudgetTotal(Math.max(0, Number(event.target.value)))} /><span>€</span></div><small>Previsió orientativa: 1.597–1.782 €</small></div>
            <div className="control-stat"><small>GASTAT</small><strong>{spent.toLocaleString("ca-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</strong><span>{expenses.length} moviments</span></div>
            <div className={`control-stat ${remaining < 0 ? "over" : ""}`}><small>{remaining < 0 ? "SUPERAT" : "DISPONIBLE"}</small><strong>{Math.abs(remaining).toLocaleString("ca-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</strong><span>{budgetPercent}% consumit</span></div>
            <div className="budget-progress"><i><em style={{ width: `${budgetPercent}%` }}/></i><span><b>{budgetPercent}%</b><small>{remaining >= 0 ? "Dins del pressupost" : "Pressupost superat"}</small></span></div>
          </section>

          <section className="expense-entry">
            <div className="subheading"><div><p className="kicker">NOVA DESPESA</p><h3>Registra-la en menys d’un minut</h3></div></div>
            <form className="add-form expense-form" onSubmit={addExpense}>
              <label><span>Dia</span><select value={expenseForm.day} onChange={(event) => setExpenseForm((current) => ({ ...current, day: event.target.value }))}>{days.map((day) => <option key={day.id} value={day.id}>Dia {day.id} · {day.shortDate}</option>)}</select></label>
              <label className="concept-field"><span>Concepte</span><input value={expenseForm.concept} onChange={(event) => setExpenseForm((current) => ({ ...current, concept: event.target.value }))} placeholder="Ex. compra Mercadona" required/></label>
              <label><span>Categoria</span><select value={expenseForm.category} onChange={(event) => setExpenseForm((current) => ({ ...current, category: event.target.value }))}>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
              <label><span>Import (€)</span><input inputMode="decimal" value={expenseForm.amount} onChange={(event) => setExpenseForm((current) => ({ ...current, amount: event.target.value }))} placeholder="0,00" required/></label>
              <label className="note-field"><span>Nota opcional</span><input value={expenseForm.note} onChange={(event) => setExpenseForm((current) => ({ ...current, note: event.target.value }))} placeholder="Ex. inclou sopar"/></label>
              <button className="form-primary" type="submit">+ Guardar despesa</button>
            </form>
          </section>

          <div className="control-grids">
            <section className="summary-card"><div className="summary-title"><h3>Per categoria</h3><span>{expenseByCategory.length}</span></div>{expenseByCategory.length ? expenseByCategory.map((item) => <div className="summary-row" key={item.category}><span>{item.category}</span><b>{item.total.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} €</b></div>) : <p className="empty-state">Encara no hi ha despeses.</p>}</section>
            <section className="summary-card"><div className="summary-title"><h3>Per dia</h3><span>8</span></div>{expenseByDay.map(({ day, total }) => <button className="summary-row day-row" key={day.id} onClick={() => { setExpenseForm((current) => ({ ...current, day: String(day.id) })); }}><span>Dia {day.id} · {day.title}</span><b>{total.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} €</b></button>)}</section>
          </div>

          <section className="expense-history">
            <div className="subheading"><div><p className="kicker">HISTORIAL</p><h3>Totes les despeses</h3></div><strong>{spent.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} €</strong></div>
            <div className="expense-list">{expenses.length ? expenses.map((expense) => <article key={expense.id}><div className="expense-day"><small>DIA</small><b>{expense.day}</b></div><div className="expense-copy"><small>{expense.category}</small><h4>{expense.concept}</h4>{expense.note && <p>{expense.note}</p>}</div><strong>{expense.amount.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} €</strong><div className="item-actions"><button onClick={() => editExpense(expense)} aria-label={`Editar ${expense.concept}`}>✎</button><button onClick={() => deleteExpense(expense.id)} aria-label={`Eliminar ${expense.concept}`}>×</button></div></article>) : <p className="empty-state">Encara no has registrat cap despesa.</p>}</div>
          </section>

          <section className="data-tools"><div><p className="kicker">SEGURETAT DE LES DADES</p><h3>Còpia i exportació</h3><p>Les dades viuen en este navegador. Guarda una còpia per si canvies de mòbil o s’esborren les dades del navegador.</p></div><div className="tool-actions"><button onClick={backupData}>Guardar còpia</button><button onClick={() => restoreInput.current?.click()}>Restaurar dades</button><button onClick={exportCsv}>Exportar despeses CSV</button><input ref={restoreInput} type="file" accept="application/json,.json" onChange={restoreData} hidden/></div></section>
        </div>}
      </section>

      <section className="base-banner"><div><p className="kicker">LA NOSTRA BASE</p><h2>La Callezuela no és un nucli comercial.</h2><p>Desdejuneu normalment a casa i planifiqueu el pa i la compra. A peu teniu el centre del poble, Sollovio i trams de la Ruta dels Molins; El Casal té piscina, jardí, zona infantil, futbolí, barbacoa i taules exteriors.</p><div className="base-links"><a href={contactById.casal.map} target="_blank" rel="noreferrer">Allotjament en Maps ↗</a><a href="tel:+34699862203">☎ 699 862 203</a><a href={contactById.chigre.map} target="_blank" rel="noreferrer">El Chigre ↗</a></div></div></section>

      <footer><div className="brand"><span className="brand-mark">A</span><span>ASTÚRIES <b>2026</b></span></div><p>Josep, Caty, Lluís i Cesc · 16–23 d’agost</p><a href="#inici">Tornar amunt ↑</a></footer>

      <nav className="mobile-nav"><button onClick={() => jump("itinerari")} className={tab === "itinerari" ? "active" : ""}><span>⌖</span>Ruta</button><button onClick={() => jump("compres")} className={tab === "compres" ? "active" : ""}><span>▤</span>Compra</button><button onClick={() => jump("maleta")} className={tab === "maleta" ? "active" : ""}><span>✓</span>Llistes</button><button onClick={() => jump("reserves")} className={tab === "reserves" ? "active" : ""}><span>☎</span>Reserves</button><button onClick={() => jump("control")} className={tab === "control" ? "active" : ""}><span>€</span>Control</button></nav>
    </main>
  );
}
