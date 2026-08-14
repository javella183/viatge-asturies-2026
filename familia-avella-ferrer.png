"use client";

import { useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { contacts, days, maps, shops, tasks, type Contact } from "./trip-data";
import {
  blobToDataUrl,
  clearPhotoMemories,
  clearReceipts,
  compressPhoto,
  dataUrlToBlob,
  deletePhotoMemory,
  deleteReceipt,
  getAllPhotoMemories,
  getAllReceipts,
  putPhotoMemory,
  putReceipt,
  type StoredPhotoMemory,
  type StoredReceipt,
} from "./photo-memory";

type TabKey = "itinerari" | "menjars" | "compres" | "maleta" | "reserves" | "control";
type CheckedState = Record<string, boolean>;

type Expense = {
  id: string;
  day: number;
  concept: string;
  category: string;
  amount: number;
  note: string;
  paymentMethod: string;
  paidBy: string;
  createdAt: string;
};

type CustomTask = { id: string; label: string; group: string };
type ShoppingItem = { id: string; label: string; quantity: string; group: string; checked: boolean };
type PhotoMemory = StoredPhotoMemory & { url: string };
type ReceiptPhoto = StoredReceipt & { url: string };
type PhotoMission = { people: string; prompt: string };

const STORAGE = {
  checked: "asturies-checklist-v2",
  expenses: "asturies-expenses-v1",
  budget: "asturies-budget-v1",
  customTasks: "asturies-custom-tasks-v1",
  taskLabels: "asturies-task-labels-v1",
  shopping: "asturies-shopping-v1",
  shoppingSchema: "asturies-shopping-schema-v5",
};

const categories = [
  "Allotjament", "Gasolina", "Supermercat", "Menjar fora",
  "Entrades i activitats", "Aparcament i peatges", "Capritxos", "Altres i imprevistos",
];

const paymentMethods = ["Per indicar", "Efectiu", "Targeta", "Targeta de dèbit", "Targeta de crèdit"];
const payers = ["Per indicar", "Josep", "Cati"];
const homeFoodGroup = "Menjar per a agafar de casa";
const restockGroup = "Reposició Alimerka Avilés";
const shoppingGroups = [homeFoodGroup, "Alimerka Avilés", restockGroup, "Desdejunis", "Pícnics", "Sopars", "Altres"];
const shopGroupById: Record<string, string> = { xalo: homeFoodGroup, aviles: "Alimerka Avilés", prestin: restockGroup };

const initialExpenses: Expense[] = [
  { id: "allotjament-el-casal", day: 1, concept: "Apartamentos El Casal", category: "Allotjament", amount: 725, note: "7 nits", paymentMethod: "Per indicar", paidBy: "Per indicar", createdAt: "2026-08-09T12:00:00.000Z" },
  { id: "bus-lagos-covadonga", day: 6, concept: "Reserva bus Lagos de Covadonga", category: "Entrades i activitats", amount: 25.5, note: "Bitllets comprats · P1 12:00 / tornada 16:50", paymentMethod: "Targeta", paidBy: "Josep", createdAt: "2026-08-14T12:00:00.000Z" },
];

const initialShopping: ShoppingItem[] = [
  { id: "shop-cafe", label: "Café", quantity: "per a 8 dies", group: homeFoodGroup, checked: false },
  { id: "shop-pernil", label: "Pernil salat", quantity: "1 paquet", group: homeFoodGroup, checked: false },
  { id: "shop-pavo", label: "Pernil de pavo", quantity: "600–700 g", group: homeFoodGroup, checked: false },
  { id: "shop-anxoves", label: "Anxoves", quantity: "2 llandes o pots", group: homeFoodGroup, checked: false },
  { id: "shop-tomaques-casa", label: "Tomaques fermes", quantity: "8–10 unitats", group: homeFoodGroup, checked: false },
  { id: "shop-pa-casa", label: "Pa", quantity: "per al trajecte i primer desdejuni", group: homeFoodGroup, checked: false },
  { id: "shop-llet-casa", label: "Llet", quantity: "1 litre", group: homeFoodGroup, checked: false },
  { id: "shop-ous-casa", label: "Ous", quantity: "6 unitats", group: homeFoodGroup, checked: false },
  { id: "shop-ensalada-casa", label: "Encisam i olives", quantity: "per al sopar d’arribada", group: homeFoodGroup, checked: false },
  { id: "shop-fideus-casa", label: "Fideus i caldo de pollastre", quantity: "sopar dels xiquets · portar de Xaló", group: homeFoodGroup, checked: false },
  { id: "shop-servilletes-casa", label: "Servilletes i bosses per a residus", quantity: "per als cinc pícnics", group: homeFoodGroup, checked: false },
  { id: "shop-oli-casa", label: "Oli d’oliva i sal", quantity: "només si El Casal no en té", group: homeFoodGroup, checked: false },
  { id: "shop-pa", label: "Pa per a congelar", quantity: "segons espai", group: "Alimerka Avilés", checked: false },
  { id: "shop-llet", label: "Llet", quantity: "2–3 litres", group: "Alimerka Avilés", checked: false },
  { id: "shop-tomaca", label: "Tomaca, encisam i olives", quantity: "per a ensalades", group: "Alimerka Avilés", checked: false },
  { id: "shop-pollastre", label: "Pit de pollastre i altra carn", quantity: "sopar Dia 2", group: "Alimerka Avilés", checked: false },
  { id: "shop-pasta", label: "Pasta, tonyina, dacsa i ous", quantity: "pícnic del Dia 5", group: "Alimerka Avilés", checked: false },
  { id: "shop-aigua", label: "Aigua", quantity: "garrafes i botelles", group: "Alimerka Avilés", checked: false },
  { id: "shop-salmo", label: "Salmó", quantity: "4 racions · sopar Dia 3", group: "Alimerka Avilés", checked: false },
  { id: "shop-brocoli", label: "Bròcoli", quantity: "2 peces o bosses · sopar Dia 3", group: "Alimerka Avilés", checked: false },
  { id: "shop-iogurts", label: "Iogurts o formatgets", quantity: "complements refrigerats dels pícnics", group: "Alimerka Avilés", checked: false },
  { id: "shop-fruita", label: "Fruita compatible amb Lluís", quantity: "peces fàcils de portar i repartir", group: "Alimerka Avilés", checked: false },
  { id: "shop-sucs", label: "Sucs individuals", quantity: "per a pícnics i trajectes", group: "Alimerka Avilés", checked: false },
  { id: "shop-crackers", label: "Crackers simples o de pizza", quantity: "snacks per als pícnics", group: "Alimerka Avilés", checked: false },
  { id: "shop-arros", label: "Arròs", quantity: "sopar del Dia 6", group: "Alimerka Avilés", checked: false },
  { id: "shop-formatge-fresc", label: "Formatge fresc", quantity: "ensalada completa Dia 7", group: restockGroup, checked: false },
  { id: "shop-llom", label: "Llom", quantity: "entrepans i sopar dels Lagos", group: restockGroup, checked: false },
  { id: "shop-pa-reposicio", label: "Pa, pernil salat, pavo i anxoves", quantity: "pícnic dels Lagos", group: restockGroup, checked: false },
  { id: "shop-snacks-reposicio", label: "Reposar aigua, fruita, iogurts, sucs i crackers", quantity: "Dies 5–8", group: restockGroup, checked: false },
  { id: "breakfast-day1", label: "Dia 1 · Desdejuni a Cafestore Albacete", quantity: "café, torrades i lavabos · 07:50", group: "Desdejunis", checked: false },
  { id: "breakfast-apartment", label: "Dies 2–7 · Desdejuni a El Casal", quantity: "café, llet, pa rústic, tomaca i companatge", group: "Desdejunis", checked: false },
  { id: "breakfast-day8", label: "Dia 8 · Desdejuni abans de carregar", quantity: "torrades, café i pa amb tomaca o companatge per als xiquets", group: "Desdejunis", checked: false },
  { id: "picnic-day1", label: "Dia 1 · Arévalo", quantity: "adults: truita; Lluís: pernil salat; Cesc: pavo + anxova", group: "Pícnics", checked: false },
  { id: "picnic-day3", label: "Dia 3 · San Pedro de la Ribera", quantity: "adults i Lluís: truita + anxova + tomaca; Cesc: pavo + anxova", group: "Pícnics", checked: false },
  { id: "picnic-day5", label: "Dia 5 · Cuevas del Mar", quantity: "ensalada de pasta amb tonyina, dacsa, olives, ou i tomaca", group: "Pícnics", checked: false },
  { id: "picnic-day6", label: "Dia 6 · Lagos de Covadonga", quantity: "adults: llom; Lluís: pernil salat; Cesc: pavo + anxova", group: "Pícnics", checked: false },
  { id: "picnic-day8", label: "Dia 8 · Medina del Campo / Rueda", quantity: "Josep, Cati i Lluís: pavo + tomaca; Cesc: pavo + anxova", group: "Pícnics", checked: false },
  { id: "picnic-kit", label: "Kit comú de cada pícnic", quantity: "motxilla refrigerant, acumuladors, aigua, servilletes, fruita, lactis, suc i crackers", group: "Pícnics", checked: false },
  { id: "dinner-day1", label: "Dia 1 · Sopar d’arribada", quantity: "ensalada, truita francesa, pavo a la planxa i pa", group: "Sopars", checked: false },
  { id: "dinner-day2", label: "Dia 2 · Sopar a El Casal", quantity: "pollastre i verdura; per a Lluís, altra carn a la planxa", group: "Sopars", checked: false },
  { id: "dinner-day3", label: "Dia 3 · Sopar a El Casal", quantity: "adults: salmó + bròcoli; xiquets: fideus amb caldo", group: "Sopars", checked: false },
  { id: "dinner-day4", label: "Dia 4 · Sopar lleuger", quantity: "ensalada sense cogombre, companatge, pa i iogurt", group: "Sopars", checked: false },
  { id: "dinner-day5", label: "Dia 5 · Sopar a La Amistad", quantity: "arribar a les 19:45 · terrassa sense reserva", group: "Sopars", checked: false },
  { id: "dinner-day6", label: "Dia 6 · Sopar a El Casal", quantity: "llom a la planxa, arròs blanc i ensalada", group: "Sopars", checked: false },
  { id: "dinner-day7", label: "Dia 7 · Sopar a El Casal", quantity: "ensalada completa amb tomaca, olives i formatge fresc", group: "Sopars", checked: false },
  { id: "dinner-day8", label: "Dia 8 · Sopar a Xaló", quantity: "pizzes congelades i ensalada deixades preparades", group: "Sopars", checked: false },
];

const taskById = Object.fromEntries(tasks.map((task) => [task.id, task]));
const contactById = Object.fromEntries(contacts.map((contact) => [contact.id, contact]));
const confirmedTaskIds = new Set(["yumay", "muja", "cafetin", "lagos", "piguena"]);

const checklistGroups = [
  { key: "abans", title: "Abans d’eixir", icon: "✓", description: "Casa, cotxe i informació accessible." },
  { key: "reserves", title: "Reserves", icon: "◎", description: "Telefonades, invitacions i bitllets." },
  { key: "maleta", title: "Maleta familiar", icon: "▣", description: "El que ha d’anar sí o sí al Tiguan." },
  { key: "dia", title: "Preparació dels dies", icon: "→", description: "Compres, oratge, pícnics i tornada." },
] as const;

const reservationRows = [
  { taskId: "casal-arribada", contactId: "casal", title: "El Casal · allotjament", date: "16–23/08 · avisar arribada", cost: "725 €", state: "confirmed" },
  { taskId: "yumay", contactId: "yumay", title: "Mesón de Furacu", date: "17/08 · 14:00 · 4 persones", cost: "Confirmat", state: "confirmed" },
  { taskId: "muja", contactId: "muja", title: "Entrades MUJA", date: "19/08 · 13:00 · 4 persones", cost: "Gratuït dimecres", state: "confirmed" },
  { taskId: "cafetin", contactId: "cafetin", title: "El Cafetín", date: "19/08 · 14:00 · 4 persones", cost: "Confirmat", state: "confirmed" },
  { taskId: "puerto", contactId: "puerto", title: "La Amistad · terrassa", date: "20/08 · estar a les 19:45", cost: "Sense reserva", state: "walkin" },
  { taskId: "lagos", contactId: "lagos", title: "Bus Lagos des de P1", date: "21/08 · 12:00 / 16:50", cost: "25,50 € · comprat", state: "confirmed" },
  { taskId: "piguena", contactId: "piguena", title: "Sidrería Pichote", date: "22/08 · 14:00 · 4 persones", cost: "Confirmat", state: "confirmed" },
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
    name: "La Viñuca",
    detail: "Avilés · alternativa només si hi haguera una incidència amb la reserva",
    map: maps("La Viñuca Avilés"),
    reviews: maps("La Viñuca Avilés ressenyes"),
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
    name: "Sidrería Restaurant El Puerto",
    detail: "C. Marqués de Canillejas, 1 · Llanes · alternativa si La Amistad està completa",
    phone: "+34684610679",
    phoneLabel: "684 610 679",
    map: maps("Sidrería Restaurante El Puerto Llanes"),
    reviews: maps("Sidrería Restaurante El Puerto Llanes ressenyes"),
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
  "Dinar · Mesón de Furacu": { reviews: maps("Mesón de Furacu ressenyes"), alternativeId: "yumay" },
  "Dinar · El Cafetín": { reviews: maps("Restaurante El Cafetín Lastres ressenyes"), alternativeId: "cafetin" },
  "Sopar · La Amistad": { reviews: maps("Bar Sidrería La Amistad Llanes ressenyes"), alternativeId: "puerto" },
  "Dinar · Sidrería Pichote": { reviews: maps("Sidrería Pichote Oviedo ressenyes"), alternativeId: "piguena" },
  "Honrubia · Moya": { reviews: maps("Hotel Restaurante Moya Honrubia ressenyes") },
};

type MealEntry = {
  moment: "Desdejuni" | "Dinar" | "Sopar";
  time: string;
  kind: "casa" | "picnic" | "fora";
  kindLabel: string;
  place: string;
  menu: string;
  note: string;
  confirmed?: boolean;
};

const mealPlanByDay: Array<{ day: number; date: string; title: string; meals: MealEntry[] }> = [
  { day: 1, date: "Dg. 16", title: "Xaló → Astúries", meals: [
    { moment: "Desdejuni", time: "07:50", kind: "fora", kindLabel: "Fora", place: "Cafestore Albacete", menu: "Café i torrades.", note: "Parada funcional amb lavabos abans de continuar." },
    { moment: "Dinar", time: "12:50", kind: "picnic", kindLabel: "Pícnic", place: "Arévalo", menu: "Adults: truita; Lluís: pernil salat; Cesc: pavo amb anxova. Olives, lactis, fruita compatible i aigua.", note: "Motxilla refrigerant, acumuladors, servilletes i bossa per als residus." },
    { moment: "Sopar", time: "19:30", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Ensalada, truita francesa, pavo a la planxa i pa.", note: "Portar-ho de Xaló agrupat en una bossa accessible." },
  ] },
  { day: 2, date: "Dl. 17", title: "Avilés + Salinas", meals: [
    { moment: "Desdejuni", time: "08:30", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Café, llet i torrades de pa rústic amb tomaca i companatge.", note: "Preparar també les motxilles de platja." },
    { moment: "Dinar", time: "14:00", kind: "fora", kindLabel: "Restaurant", place: "Mesón de Furacu", menu: "Menú del dia i cuina asturiana.", note: "Reserva confirmada per als quatre; avisar de les al·lèrgies de Lluís.", confirmed: true },
    { moment: "Sopar", time: "21:15", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Adults i Cesc: pollastre i verdura; Lluís: altra carn a la planxa.", note: "Deixar la preparació avançada abans d’anar a Salinas." },
  ] },
  { day: 3, date: "Dt. 18", title: "Cudillero + cap Vidio", meals: [
    { moment: "Desdejuni", time: "08:30", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Café, llet i torrades amb tomaca o companatge.", note: "Preparar els entrepans abans d’eixir." },
    { moment: "Dinar", time: "14:15", kind: "picnic", kindLabel: "Pícnic", place: "San Pedro de la Ribera", menu: "Adults i Lluís: truita + anxova + tomaca; Cesc: pavo + anxova. Olives, lactis, fruita, suc i crackers.", note: "Truita ben quallada; portar aigua, servilletes i motxilla refrigerant." },
    { moment: "Sopar", time: "21:15", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Adults: salmó a la planxa amb bròcoli. Lluís i Cesc: fideus amb caldo de pollastre.", note: "Els fideus i el caldo es porten de Xaló." },
  ] },
  { day: 4, date: "Dc. 19", title: "MUJA + Llastres", meals: [
    { moment: "Desdejuni", time: "09:00", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Café, llet i torrades amb tomaca o companatge.", note: "Dia sense pícnic; portar només aigua i un snack menut." },
    { moment: "Dinar", time: "14:00", kind: "fora", kindLabel: "Restaurant", place: "El Cafetín · Llastres", menu: "Dinar reservat després del MUJA.", note: "Reserva confirmada per als quatre; eixir del museu a les 13:40.", confirmed: true },
    { moment: "Sopar", time: "21:30", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Ensalada d’encisam, tomaca i olives, companatge, pa i iogurt.", note: "Sopar lleuger i sense cogombre després de la reposició." },
  ] },
  { day: 5, date: "Dj. 20", title: "Ribadesella + Llanes", meals: [
    { moment: "Desdejuni", time: "08:15", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Café i torrades.", note: "Carregar l’ensalada de pasta completament freda." },
    { moment: "Dinar", time: "12:45", kind: "picnic", kindLabel: "Pícnic", place: "Cuevas del Mar", menu: "Ensalada de pasta amb tonyina, dacsa, olives, ou i tomaca; lactis, fruita, suc i crackers.", note: "Motxilla refrigerant, aigua, servilletes, quatre bols i quatre forquetes." },
    { moment: "Sopar", time: "19:45", kind: "fora", kindLabel: "Fora", place: "Bar Sidrería La Amistad · Llanes", menu: "Sopar de cuina asturiana.", note: "Terrassa sense reserva: arribar obligatòriament a les 19:45." },
  ] },
  { day: 6, date: "Dv. 21", title: "Lagos de Covadonga", meals: [
    { moment: "Desdejuni", time: "08:30", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Café, llet i torrades.", note: "Revisar bitllets, pícnic i acumuladors abans d’eixir." },
    { moment: "Dinar", time: "13:10", kind: "picnic", kindLabel: "Pícnic", place: "Lagos de Covadonga", menu: "Adults: entrepà de llom; Lluís: pernil salat; Cesc: pavo + anxova. Olives, lactis, fruita, suc i crackers.", note: "Portar 4–5 l d’aigua, servilletes i motxilla refrigerant." },
    { moment: "Sopar", time: "21:00", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Llom a la planxa, arròs blanc i ensalada.", note: "Sopar ràpid després de les dutxes." },
  ] },
  { day: 7, date: "Ds. 22", title: "Oviedo + Naranco", meals: [
    { moment: "Desdejuni", time: "08:30", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Café, llet i torrades amb tomaca o companatge.", note: "Motxilla lleugera; no cal nevereta gran." },
    { moment: "Dinar", time: "14:00", kind: "fora", kindLabel: "Restaurant", place: "Sidrería Pichote · Oviedo", menu: "Cuina asturiana i cachopos.", note: "Reserva confirmada per als quatre; avisar de les al·lèrgies de Lluís.", confirmed: true },
    { moment: "Sopar", time: "20:30", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Ensalada completa amb encisam, tomaca, olives i formatge fresc.", note: "Sopar senzill mentre s’acaben les maletes." },
  ] },
  { day: 8, date: "Dg. 23", title: "Astúries → Xaló", meals: [
    { moment: "Desdejuni", time: "07:00", kind: "casa", kindLabel: "A casa", place: "El Casal", menu: "Torrades i café; pa amb tomaca o companatge per a Lluís i Cesc.", note: "Carregar la motxilla refrigerant al final." },
    { moment: "Dinar", time: "12:00", kind: "picnic", kindLabel: "Pícnic", place: "Medina del Campo / Rueda", menu: "Josep, Cati i Lluís: pavo + tomaca; Cesc: pavo + anxova. Olives, lactis, fruita, suc, crackers i aigua.", note: "Parada màxima de 45 minuts, amb servilletes i bossa per als residus." },
    { moment: "Sopar", time: "20:15", kind: "casa", kindLabel: "A casa", place: "Xaló", menu: "Pizzes congelades i ensalada.", note: "Deixar-ho preparat a casa abans del viatge." },
  ] },
];

type Forecast = { icon: string; temp: string; summary: string };

// Previsió orientativa consultada el 14 d'agost de 2026. Es manté separada de
// les decisions d'oratge del pla perquè siga molt fàcil actualitzar-la abans d'eixir.
const forecastByDay: Record<number, Forecast> = {
  1: { icon: "⛈️", temp: "24° / 19°", summary: "Molt nuvolós, pluja ocasional i possible tronada a l’arribada" },
  2: { icon: "☁️", temp: "25° / 18°", summary: "Molt nuvolós i humit; jornada urbana viable" },
  3: { icon: "⛅", temp: "26° / 19°", summary: "Núvols i clarianes: millor dia per a la costa occidental" },
  4: { icon: "🌦️", temp: "25° / 20°", summary: "Plugim de matí i cel principalment cobert" },
  5: { icon: "⛈️", temp: "23° / 18°", summary: "Tronades i pluja possibles; platja condicionada a radar i bandera" },
  6: { icon: "☁️", temp: "23° / 19°", summary: "Majoritàriament nuvolós: millor finestra actual per als Lagos" },
  7: { icon: "🌦️", temp: "24° / 15°", summary: "Ruixats de matí i molts núvols; Oviedo és el pla més flexible" },
  8: { icon: "🌦️", temp: "29° / 16°", summary: "Pluja possible a l’eixida i més calor conforme avance la tornada" },
};

type VisitDetails = {
  description: string;
  image: string;
  imageAlt: string;
  source: string;
};

const commonsSource = (filename: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
const placeImage = (filename: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/places/${filename}`;
const familyCutout = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/family/familia-avella-ferrer.png`;
const routeMapImage = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/mapa-ruta-avella-ferrer.png`;
const infographicImage = (day: number) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/infografies/dia-${day}.webp`;
const elCasalImage = placeImage("el-casal.jpg");
const elCasalBooking = "https://www.booking.com/hotel/es/apartamentos-el-casal.es.html";
const elCasalTourism = "https://www.turismoasturias.es/organiza-tu-viaje/donde-dormir/turismo-rural/apartamentos-rurales/el-casal";

const routeMapStops = [
  { day: 1, label: "Xaló · Arévalo · La Callezuela" },
  { day: 2, label: "Avilés" },
  { day: 3, label: "Cudillero · Cap Vidio" },
  { day: 4, label: "MUJA · Llastres · Tazones" },
  { day: 5, label: "Ribadesella · Cuevas del Mar · Llanes" },
  { day: 6, label: "Lagos · Covadonga · Cangas" },
  { day: 7, label: "Oviedo · Naranco" },
  { day: 8, label: "Astúries · Xaló" },
];

const infographicItems = days.map((day) => ({
  day: day.id,
  date: day.date,
  title: day.title,
  subtitle: day.subtitle,
  image: infographicImage(day.id),
}));

const visitDetailsByTitle: Record<string, VisitDetails> = {
  "Arribada a El Casal": {
    description: "El Casal és un antic caseriu restaurat l’any 2015, situat en un entorn rural tranquil de La Callezuela. La finca té piscina exterior, jardí, parc infantil, barbacoa, futbolí, taules exteriors i aparcament; serà la nostra base durant les set nits.",
    image: elCasalImage, imageAlt: "Apartamentos rurals El Casal a La Callezuela, Illas", source: elCasalTourism,
  },
  "Passeig mudèjar": {
    description: "La Plaça de la Villa concentra l’essència mudèjar d’Arévalo: porxos, façanes de rajola i les esglésies de Santa María i San Martín. És un passeig curt i molt visual per a estirar les cames sense convertir la parada en una visita llarga.",
    image: placeImage("arevalo.jpg"), imageAlt: "Plaça de la Villa d’Arévalo", source: commonsSource("Arévalo-Plaza de la Villa-y San Martín.JPG"),
  },
  "Centro Niemeyer": {
    description: "El conjunt d’Óscar Niemeyer és la imatge contemporània d’Avilés. La plaça exterior permet vore la cúpula, la torre i l’auditori sense necessitat de comprar entrada; la passarel·la sobre la ria completa les millors perspectives.",
    image: placeImage("niemeyer.jpg"), imageAlt: "Centre Niemeyer al costat de la ria d’Avilés", source: commonsSource("Aviles - Centro Cultural Internacional Oscar Niemeyer 21.jpg"),
  },
  "Cudillero · passeig curt": {
    description: "Cudillero forma un amfiteatre de cases de colors al voltant del port. La ruta proposada passa per la plaça de la Marina i dos miradors pròxims, evitant les escales més llargues si Cesc ja està cansat.",
    image: placeImage("cudillero.jpg"), imageAlt: "Cases de colors de Cudillero", source: commonsSource("Cudillero Asturias.jpg"),
  },
  "Cap Vidio": {
    description: "Un dels grans balcons de la costa occidental, amb penya-segats que superen els huitanta metres. El far i les vistes són accessibles amb un passeig curt, però cal mantindre Cesc sempre agafat i no acostar-se a la vora.",
    image: placeImage("cabo-vidio.jpg"), imageAlt: "Penya-segats i far del cap Vidio", source: commonsSource("Cabo y faro de Vidío.jpg"),
  },
  "Platja de San Pedro": {
    description: "Platja ampla amb zona recreativa i serveis, pensada com la parada tranquil·la del dia. És adequada per al pícnic i el descans; el bany dependrà sempre de la bandera i de les indicacions de salvament.",
    image: placeImage("san-pedro.jpg"), imageAlt: "Platja de San Pedro de la Ribera", source: commonsSource("Playa de San Pedro de La Ribera.JPG"),
  },
  "MUJA": {
    description: "El Museu del Juràssic d’Astúries té forma de gran petjada tridàctila. Dins recorre el Triàsic, Juràssic i Cretaci; fora, els xiquets trobaran reproduccions de dinosaures a escala real amb vista a la costa.",
    image: placeImage("muja.jpg"), imageAlt: "Entrada del Museu del Juràssic d’Astúries", source: commonsSource("Museo del Jurásico de Asturias.jpg"),
  },
  "Llastres · passeig": {
    description: "Llastres baixa en costera cap al port entre carrerons i cases marineres. El mirador de San Roque dona la vista panoràmica més completa; després convé baixar només el necessari per arribar al dinar sense presses.",
    image: placeImage("lastres.jpg"), imageAlt: "Vista de Llastres des del mirador de San Roque", source: commonsSource("Lastres of Asturias, Spain at daybreak.jpg"),
  },
  "Tazones": {
    description: "Xicotet port mariner lligat a l’arribada de Carles V a Espanya. El més agradable és passejar pels barris de San Miguel i San Roque, buscar la Casa de les Conquilles i acabar al moll.",
    image: placeImage("tazones.jpg"), imageAlt: "Poble mariner de Tazones", source: commonsSource("Tazones Asturias.jpg"),
  },
  "Ruta curta familiar": {
    description: "La ruta uneix els llacs Ercina i Enol amb miradors, antigues mines i prats de muntanya. Són uns tres quilòmetres, però convé reservar temps per a parar, fer fotos i caminar al ritme de Cesc.",
    image: placeImage("lagos.jpg"), imageAlt: "Llacs de Covadonga i muntanyes", source: commonsSource("Lagos de Covadonga.jpg"),
  },
  "Cuevas del Mar": {
    description: "La platja destaca pels grans arcs de roca calcària modelats per la mar. Amb marea baixa es veuen millor les formes, però les roques poden relliscar: Cesc ha d’anar sempre acompanyat.",
    image: placeImage("cuevas-del-mar.jpg"), imageAlt: "Arcs de roca a la platja de Cuevas del Mar", source: commonsSource("Playa cuevas del mar 3.jpg"),
  },
  "Llanes": {
    description: "El passeig concentra la muralla, el nucli històric, el port i els Cubos de la Memoria. El tram des del Sablón fins al port és curt i deixa el restaurant a mà per acabar el dia sense tornar a moure el cotxe.",
    image: placeImage("llanes.jpg"), imageAlt: "Port de Llanes", source: commonsSource("Llanes - Puerto 1.jpg"),
  },
  "Santa María + San Miguel": {
    description: "Santa María del Naranco i San Miguel de Lillo són les peces més representatives del preromànic asturià. Estan molt pròximes entre si i la visita guiada ajuda a entendre per què són Patrimoni Mundial.",
    image: placeImage("naranco.jpg"), imageAlt: "Santa María del Naranco a Oviedo", source: commonsSource("Santa María del Naranco, Oviedo.jpg"),
  },
  "Avilés històric · 2,5–3 km": {
    description: "El centre històric d’Avilés és còmode per a recórrer en família. Els carrers porticats de Galiana i Rivero, la plaça d’Espanya i el parc de Ferrera formen una ruta pràcticament plana, amb moltes opcions per a parar.",
    image: placeImage("aviles.jpg"), imageAlt: "Porxos del carrer Galiana d’Avilés", source: commonsSource("Calle Galiana Avilés 01.JPG"),
  },
  "Salinas + Museu de les Àncores": {
    description: "La platja de Salinas té un passeig marítim llarg i obert. Des de la Peñona, el Museu de les Àncores mostra peces navals a l’aire lliure i ofereix una bona panoràmica del litoral sense pagar entrada.",
    image: placeImage("salinas.jpg"), imageAlt: "Museu de les Àncores i platja de Salinas", source: commonsSource("Museo de Anclas, Salinas, Castrillón.jpg"),
  },
  "Platja del Silenci · opcional": {
    description: "Una cala en forma de petxina protegida per penya-segats. En este itinerari es proposa únicament el mirador superior: la baixada és pronunciada i no compensa fer-la al final d’una jornada llarga amb Cesc.",
    image: placeImage("silencio.jpg"), imageAlt: "Vista superior de la Platja del Silenci", source: commonsSource("Beach playa de silencio.jpg"),
  },
  "Jardí exterior": {
    description: "Els jardins del MUJA són una extensió molt atractiva del museu: reproduccions de dinosaures a escala real, espai per a caminar i vista oberta cap a la costa. És una parada ideal per a les fotos dels xiquets.",
    image: placeImage("muja.jpg"), imageAlt: "Edifici del MUJA envoltat de zona verda", source: commonsSource("Museo del Jurásico de Asturias.jpg"),
  },
  "Buferrera": {
    description: "L’antiga zona minera de Buferrera conserva túnels, vagonetes i trinxeres integrades en el paisatge dels Picos de Europa. És l’inici més interessant de la ruta familiar cap als llacs.",
    image: placeImage("buferrera.jpg"), imageAlt: "Antigues mines de Buferrera als Lagos de Covadonga", source: commonsSource("Minas de Buferrera (Lagos de Covadonga, Picos de Europa, Asturias, España) 01.JPG"),
  },
  "Covadonga": {
    description: "El santuari combina la basílica, la Santa Cova i la cascada en un espai compacte però amb desnivells. Amb una hora ben organitzada es poden vore els punts principals sense presses abans de tornar a Cangas.",
    image: placeImage("covadonga.jpg"), imageAlt: "Basílica de Covadonga", source: commonsSource("Covadonga, basilica 01.jpg"),
  },
  "Cangas de Onís": {
    description: "El pont medieval, conegut popularment com a pont romà, és la imatge més característica de Cangas de Onís. Des d’allí el passeig fins al centre i les botigues és curt i senzill.",
    image: placeImage("cangas.jpg"), imageAlt: "Pont de Cangas de Onís sobre el riu Sella", source: commonsSource("Roman bridge - Cangas de Onís, Spain - July 23, 2024 01.jpg"),
  },
  "Ribadesella · 2,5–3 km": {
    description: "La ruta familiar uneix el passeig de la Grua, el port i el centre amb vistes a la desembocadura del Sella. Si hi ha energia, es pot allargar cap al passeig de Santa Marina; si no, el tram urbà ja és complet.",
    image: placeImage("ribadesella.jpg"), imageAlt: "Ribadesella i la desembocadura del Sella", source: commonsSource("Ribadesella (Asturias) 01.jpg"),
  },
  "Centre històric": {
    description: "El cor d’Oviedo concentra la catedral, la plaça d’Alfons II, el mercat del Fontán i carrers per als vianants. És una ruta fàcil d’escurçar o ampliar segons l’oratge i el cansament.",
    image: placeImage("oviedo.jpg"), imageAlt: "Catedral de San Salvador d’Oviedo", source: commonsSource("Catedral de Oviedo 07.jpg"),
  },
  "Oviedo a peu": {
    description: "Després de dinar, el millor és un passeig lliure pel Fontán, l’Ajuntament i les escultures del centre. Tot queda pròxim i permet acabar la jornada amb gelat o café sense tornar al cotxe.",
    image: placeImage("oviedo.jpg"), imageAlt: "Catedral i centre històric d’Oviedo", source: commonsSource("Catedral de Oviedo 07.jpg"),
  },
  "Medina del Campo / Rueda": {
    description: "La parada de tornada permet dinar i estirar les cames en una zona amb serveis. Si aneu bé de temps, l’exterior del castell de la Mota és una visita curta i vistosa abans de continuar cap a Madrid.",
    image: placeImage("medina.jpg"), imageAlt: "Castell de la Mota a Medina del Campo", source: commonsSource("Castillo de La Mota, en Medina del Campo (6972495918).jpg"),
  },
};

type ParkingDetails = { name: string; cost: string; map: string };

const parkingByTitle: Record<string, ParkingDetails> = {
  "Arribada a El Casal": { name: "Aparcament privat d’El Casal", cost: "Inclòs", map: maps("Apartamentos El Casal Illas Asturias") },
  "Passeig mudèjar": { name: "Aparcament del Castell d’Arévalo", cost: "Gratuït", map: maps("Aparcamiento Castillo de Arévalo") },
  "Centro Niemeyer": { name: "Aparcament del Centro Niemeyer", cost: "0–2 € orientatiu", map: maps("Parking Centro Niemeyer Avilés") },
  "Avilés històric · 2,5–3 km": { name: "Aparcament de La Magdalena", cost: "Gratuït · uns 10 min a peu", map: maps("Aparcamiento La Magdalena Avilés") },
  "Salinas + Museu de les Àncores": { name: "Zona de Pablo Laloux / La Peñona", cost: "Gratuït al carrer", map: maps("Parking Museo de las Anclas Salinas Asturias") },
  "Cudillero · passeig curt": { name: "Aparcament del Port de Cudillero", cost: "2,50 € al dia orientatiu", map: maps("Parking Puerto Cudillero") },
  "Cap Vidio": { name: "Aparcament del Far de Vidio", cost: "Gratuït", map: maps("Parking Faro Cabo Vidio") },
  "Platja de San Pedro": { name: "Aparcament de San Pedro de la Ribera", cost: "Gratuït habitualment", map: maps("Parking Playa San Pedro de la Ribera") },
  "Platja del Silenci · opcional": { name: "Aparcament del mirador", cost: "0–3 € orientatiu", map: maps("Parking Mirador Playa del Silencio") },
  "MUJA": { name: "Aparcament del MUJA", cost: "Gratuït", map: maps("Parking Museo Jurásico Asturias MUJA") },
  "Jardí exterior": { name: "Aparcament del MUJA", cost: "Gratuït", map: maps("Parking Museo Jurásico Asturias MUJA") },
  "Llastres · passeig": { name: "Aparcament del mirador de San Roque", cost: "Gratuït habitualment", map: maps("Parking Mirador San Roque Lastres") },
  "Tazones": { name: "Aparcament municipal de Tazones", cost: "3–5 € orientatiu en temporada", map: maps("Parking Municipal Tazones") },
  "Buferrera": { name: "P1 Cangas de Onís + bus", cost: "3 € al dia + bitllet de bus", map: maps("Parking P1 Estación Autobuses Cangas de Onís") },
  "Ruta curta familiar": { name: "P1 Cangas de Onís + bus", cost: "3 € al dia + bitllet de bus", map: maps("Parking P1 Estación Autobuses Cangas de Onís") },
  "Covadonga": { name: "P1 Cangas de Onís", cost: "Cotxe estacionat allí · trajecte amb bus", map: maps("Parking P1 Estación Autobuses Cangas de Onís") },
  "Cangas de Onís": { name: "P1 Estació d’Autobusos", cost: "3 € al dia", map: maps("Parking P1 Estación Autobuses Cangas de Onís") },
  "Cuevas del Mar": { name: "Aparcament de Cuevas del Mar", cost: "3–5 € orientatiu en temporada", map: maps("Parking Playa Cuevas del Mar") },
  "Ribadesella · 2,5–3 km": { name: "Campu Les Rolles", cost: "Gratuït habitualment", map: maps("Parking Campu Les Rolles Ribadesella") },
  "Llanes": { name: "Aparcament d’El Sablón", cost: "0–5 € segons zona i horari", map: maps("Parking El Sablón Llanes") },
  "Santa María + San Miguel": { name: "Aparcament del Naranco", cost: "Gratuït", map: maps("Parking Santa María del Naranco") },
  "Centre històric": { name: "Parking Salesas", cost: "Fins a 9,50 € orientatiu", map: maps("Parking Salesas Oviedo General Elorza 75") },
  "Oviedo a peu": { name: "Parking Salesas", cost: "Fins a 9,50 € orientatiu", map: maps("Parking Salesas Oviedo General Elorza 75") },
  "Medina del Campo / Rueda": { name: "Aparcament del Castell de la Mota", cost: "Gratuït", map: maps("Parking Castillo de la Mota Medina del Campo") },
};

const photoMissionByTitle: Record<string, PhotoMission> = {
  "Passeig mudèjar": { people: "Tota la família", prompt: "Una primera foto de viatge entre els porxos de la plaça de la Villa." },
  "Centro Niemeyer": { people: "Josep i Cati", prompt: "Una foto de parella amb les formes blanques del Niemeyer al fons." },
  "Avilés històric · 2,5–3 km": { people: "Cesc", prompt: "Cesc baix dels porxos de Galiana, com si explorara la ciutat." },
  "Salinas + Museu de les Àncores": { people: "Cesc i Lluís", prompt: "Els germans junts amb la mar o una àncora al fons." },
  "Cudillero · passeig curt": { people: "Tota la família", prompt: "La foto familiar imprescindible amb l’amfiteatre de cases de colors." },
  "Cap Vidio": { people: "Josep i Cati", prompt: "Una foto de parella amb el far, mantenint una distància segura del penya-segat." },
  "Platja de San Pedro": { people: "Cesc i Lluís", prompt: "Una foto espontània dels dos germans jugant a la platja." },
  "Platja del Silenci · opcional": { people: "Lluís", prompt: "Lluís davant de la panoràmica de la cala des del mirador." },
  "MUJA": { people: "Cesc", prompt: "Cesc davant de l’edifici amb forma de petjada de dinosaure." },
  "Jardí exterior": { people: "Cesc i Lluís", prompt: "Els dos germans imitant el dinosaure més gran que trobeu." },
  "Llastres · passeig": { people: "Tota la família", prompt: "Una foto familiar amb el poble i la costa des del mirador de San Roque." },
  "Tazones": { people: "Cesc i Lluís", prompt: "Els germans al port o buscant la Casa de les Conquilles." },
  "Buferrera": { people: "Lluís", prompt: "Lluís com a explorador entre el paisatge de l’antiga mina." },
  "Ruta curta familiar": { people: "Tota la família", prompt: "La gran foto del viatge amb un dels llacs de Covadonga al fons." },
  "Covadonga": { people: "Josep i Cati", prompt: "Una foto de parella davant de la basílica o la Santa Cova." },
  "Cangas de Onís": { people: "Cesc i Lluís", prompt: "Els germans junts amb el pont i la creu al fons." },
  "Cuevas del Mar": { people: "Cesc", prompt: "Cesc descobrint un dels arcs de roca, sempre en una zona segura." },
  "Ribadesella · 2,5–3 km": { people: "Tota la família", prompt: "Una foto familiar al passeig amb la desembocadura del Sella." },
  "Llanes": { people: "Josep i Cati", prompt: "Una foto de parella al port o davant dels Cubos de la Memoria." },
  "Santa María + San Miguel": { people: "Tota la família", prompt: "Una foto familiar davant de Santa María del Naranco." },
  "Centre històric": { people: "Lluís", prompt: "Lluís davant de la catedral o amb una de les escultures d’Oviedo." },
  "Oviedo a peu": { people: "Cesc i Lluís", prompt: "Una foto divertida dels germans al Fontán o amb Mafalda." },
  "Medina del Campo / Rueda": { people: "Tota la família", prompt: "L’última foto del viatge per acomiadar l’aventura abans de tornar a Xaló." },
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
        <small>ALTERNATIVA SI HI HA UNA INCIDÈNCIA</small>
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

function PhotoMissionCard({
  day,
  placeTitle,
  mission,
  memory,
  busy,
  onPhoto,
  onNote,
  onDelete,
}: {
  day: number;
  placeTitle: string;
  mission: PhotoMission;
  memory?: PhotoMemory;
  busy: boolean;
  onPhoto: (file: File) => void;
  onNote: () => void;
  onDelete: () => void;
}) {
  const inputId = `memory-${day}-${placeTitle.replace(/[^a-z0-9]/gi, "-")}`;
  const selectPhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) onPhoto(file);
    event.target.value = "";
  };
  return (
    <section className={`photo-mission ${memory ? "completed" : ""}`}>
      <div className="photo-mission-head">
        <span className="photo-mission-icon">{memory ? "✓" : "📷"}</span>
        <div><small>{memory ? "RECORD GUARDAT" : "MISSIÓ FOTOGRÀFICA"}</small><strong>{mission.people}</strong><p>{mission.prompt}</p></div>
      </div>
      {memory && <figure className="memory-preview"><img src={memory.url} alt={`Record familiar a ${placeTitle}`} /><figcaption><b>{placeTitle}</b>{memory.note ? <span>{memory.note}</span> : <span>Sense nota encara</span>}</figcaption></figure>}
      <div className="memory-actions">
        <label className={`memory-primary ${busy ? "disabled" : ""}`} htmlFor={`${inputId}-camera`}>{busy ? "Preparant…" : memory ? "📷 Repetir foto" : "📷 Fer la foto"}</label>
        <input id={`${inputId}-camera`} type="file" accept="image/*" capture="environment" onChange={selectPhoto} disabled={busy} hidden />
        <label className="memory-secondary" htmlFor={`${inputId}-gallery`}>▧ {memory ? "Canviar des de galeria" : "Triar de la galeria"}</label>
        <input id={`${inputId}-gallery`} type="file" accept="image/*" onChange={selectPhoto} disabled={busy} hidden />
        {memory && <><button type="button" onClick={onNote}>✎ Nota</button><a href={memory.url} download={`asturies-dia-${day}-${placeTitle}.jpg`}>↓ Guardar</a><button type="button" className="memory-delete" onClick={onDelete}>× Eliminar</button></>}
      </div>
    </section>
  );
}

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);
  const [filter, setFilter] = useState("tots");
  const [tab, setTab] = useState<TabKey>("itinerari");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openInfographicDay, setOpenInfographicDay] = useState<number | null>(null);
  const [checked, setChecked] = useState<CheckedState>({});
  const [onlyPending, setOnlyPending] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budgetTotal, setBudgetTotal] = useState(1690);
  const [customTasks, setCustomTasks] = useState<CustomTask[]>([]);
  const [taskLabels, setTaskLabels] = useState<Record<string, string>>({});
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);
  const [photoMemories, setPhotoMemories] = useState<PhotoMemory[]>([]);
  const [receipts, setReceipts] = useState<ReceiptPhoto[]>([]);
  const [photoBusy, setPhotoBusy] = useState<string | null>(null);
  const [photoStatus, setPhotoStatus] = useState("Carregant l’àlbum local…");
  const [expenseForm, setExpenseForm] = useState({ day: "1", concept: "", category: "Supermercat", amount: "", note: "", paymentMethod: "Targeta de dèbit", paidBy: "Josep" });
  const [receiptDraft, setReceiptDraft] = useState<File | null>(null);
  const [newTask, setNewTask] = useState({ label: "", group: "dia" });
  const [newShopping, setNewShopping] = useState({ label: "", quantity: "", group: "Alimerka Avilés" });
  const restoreInput = useRef<HTMLInputElement>(null);
  const receiptDraftInput = useRef<HTMLInputElement>(null);
  const photoMemoriesRef = useRef<PhotoMemory[]>([]);
  const receiptsRef = useRef<ReceiptPhoto[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      let stored: CheckedState = {};
      try { stored = JSON.parse(localStorage.getItem("asturies-checklist-v2") || "{}"); } catch { stored = {}; }
      for (const [legacyId, taskIds] of Object.entries(legacyTaskMap)) {
        if (localStorage.getItem(`asturies-${legacyId}`) === "1") taskIds.forEach((id) => { stored[id] = true; });
      }
      confirmedTaskIds.forEach((id) => { stored[id] = true; });
      setChecked(stored);
      localStorage.setItem(STORAGE.checked, JSON.stringify(stored));
      try {
        const savedExpenses = JSON.parse(localStorage.getItem(STORAGE.expenses) || "null") || initialExpenses;
        const normalizedExpenses = savedExpenses.map((expense: Expense) => ({ ...expense, paymentMethod: expense.paymentMethod || "Per indicar", paidBy: expense.paidBy || "Per indicar" }));
        const existingExpenseIds = new Set(normalizedExpenses.map((expense: Expense) => expense.id));
        setExpenses([...initialExpenses.filter((expense) => !existingExpenseIds.has(expense.id)), ...normalizedExpenses]);
      } catch { setExpenses(initialExpenses); }
      const savedBudget = Number(localStorage.getItem(STORAGE.budget));
      if (savedBudget > 0) setBudgetTotal(savedBudget);
      try { setCustomTasks(JSON.parse(localStorage.getItem(STORAGE.customTasks) || "[]")); } catch { setCustomTasks([]); }
      try { setTaskLabels(JSON.parse(localStorage.getItem(STORAGE.taskLabels) || "{}")); } catch { setTaskLabels({}); }
      try {
        const savedShopping = JSON.parse(localStorage.getItem(STORAGE.shopping) || "null") || initialShopping;
        let migratedShopping = savedShopping
          .filter((item: ShoppingItem) => !["shop-cogombre", "shop-fideus"].includes(item.id) && !/(cacau|cogombre|pepino)/i.test(item.label))
          .map((item: ShoppingItem) => ({
            ...item,
            label: item.label.replace(/pernil serrà/gi, "Pernil salat").replace(/titot/gi, "pavo"),
            group: item.group === "Compra principal" ? "Alimerka Avilés" : item.group === "Des de Xaló" ? homeFoodGroup : item.group,
          }));
        if (localStorage.getItem(STORAGE.shoppingSchema) !== "5") {
          const defaultShoppingById = Object.fromEntries(initialShopping.map((item) => [item.id, item]));
          migratedShopping = migratedShopping.map((item: ShoppingItem) => ({
            ...(defaultShoppingById[item.id] || item),
            checked: item.checked,
            group: item.group === "Alimerka El Prestín" ? restockGroup : defaultShoppingById[item.id]?.group || item.group,
          }));
          const existingIds = new Set(migratedShopping.map((item: ShoppingItem) => item.id));
          migratedShopping = [...migratedShopping, ...initialShopping.filter((item) => !existingIds.has(item.id))];
          localStorage.setItem(STORAGE.shoppingSchema, "5");
        }
        setShoppingItems(migratedShopping);
      } catch { setShoppingItems(initialShopping); }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let active = true;
    getAllReceipts().then((stored) => {
      if (!active) return;
      const loaded = stored.map((receipt) => ({ ...receipt, url: URL.createObjectURL(receipt.blob) }));
      receiptsRef.current = loaded;
      setReceipts(loaded);
    }).catch(() => undefined);
    return () => {
      active = false;
      receiptsRef.current.forEach((receipt) => URL.revokeObjectURL(receipt.url));
    };
  }, []);

  useEffect(() => {
    let active = true;
    getAllPhotoMemories().then((stored) => {
      if (!active) return;
      const loaded = stored.map((memory) => ({ ...memory, url: URL.createObjectURL(memory.blob) }));
      photoMemoriesRef.current = loaded;
      setPhotoMemories(loaded);
      setPhotoStatus(loaded.length ? `${loaded.length} records guardats en este dispositiu` : "Encara no hi ha fotos guardades");
    }).catch(() => {
      if (active) setPhotoStatus("Este navegador no permet obrir l’àlbum local.");
    });
    return () => {
      active = false;
      photoMemoriesRef.current.forEach((memory) => URL.revokeObjectURL(memory.url));
    };
  }, []);

  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE.expenses, JSON.stringify(expenses)); }, [expenses, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE.budget, String(budgetTotal)); }, [budgetTotal, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE.customTasks, JSON.stringify(customTasks)); }, [customTasks, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE.taskLabels, JSON.stringify(taskLabels)); }, [taskLabels, hydrated]);
  useEffect(() => { if (hydrated) localStorage.setItem(STORAGE.shopping, JSON.stringify(shoppingItems)); }, [shoppingItems, hydrated]);

  useEffect(() => {
    if (openInfographicDay === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenInfographicDay(null);
      if (event.key === "ArrowLeft") setOpenInfographicDay((day) => day === null ? null : day === 1 ? days.length : day - 1);
      if (event.key === "ArrowRight") setOpenInfographicDay((day) => day === null ? null : day === days.length ? 1 : day + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openInfographicDay]);

  const replacePhotoState = (stored: StoredPhotoMemory) => {
    const nextMemory = { ...stored, url: URL.createObjectURL(stored.blob) };
    setPhotoMemories((current) => {
      const previous = current.find((memory) => memory.id === stored.id);
      if (previous) URL.revokeObjectURL(previous.url);
      const next = [nextMemory, ...current.filter((memory) => memory.id !== stored.id)];
      photoMemoriesRef.current = next;
      setPhotoStatus(`${next.length} records guardats en este dispositiu`);
      return next;
    });
  };

  const savePhoto = async (day: number, placeTitle: string, mission: PhotoMission, file: File) => {
    const id = `day-${day}-${placeTitle}`;
    setPhotoBusy(id);
    try {
      const previous = photoMemories.find((memory) => memory.id === id);
      const blob = await compressPhoto(file);
      const stored: StoredPhotoMemory = {
        id, day, placeTitle, people: mission.people, prompt: mission.prompt,
        note: previous?.note || "", createdAt: new Date().toISOString(), blob,
      };
      await putPhotoMemory(stored);
      replacePhotoState(stored);
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "No s’ha pogut guardar la fotografia.");
    } finally {
      setPhotoBusy(null);
    }
  };

  const editPhotoNote = async (memory: PhotoMemory) => {
    const note = window.prompt("Escriu una frase per recordar este moment", memory.note)?.trim();
    if (note === undefined) return;
    const { url: _url, ...storedMemory } = memory;
    const stored: StoredPhotoMemory = { ...storedMemory, note };
    await putPhotoMemory(stored);
    replacePhotoState(stored);
  };

  const removePhoto = async (memory: PhotoMemory) => {
    if (!window.confirm("Vols eliminar este record del dispositiu?")) return;
    await deletePhotoMemory(memory.id);
    setPhotoMemories((current) => {
      URL.revokeObjectURL(memory.url);
      const next = current.filter((item) => item.id !== memory.id);
      photoMemoriesRef.current = next;
      setPhotoStatus(next.length ? `${next.length} records guardats en este dispositiu` : "Encara no hi ha fotos guardades");
      return next;
    });
  };

  const toggleTask = (id: string) => {
    setChecked((current) => {
      const next = { ...current, [id]: !current[id] };
      localStorage.setItem(STORAGE.checked, JSON.stringify(next));
      return next;
    });
  };

  const makeId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const saveReceipt = async (expenseId: string, file: File) => {
    const id = `receipt-${expenseId}`;
    const blob = await compressPhoto(file);
    const stored: StoredReceipt = { id, expenseId, createdAt: new Date().toISOString(), blob };
    await putReceipt(stored);
    const nextReceipt: ReceiptPhoto = { ...stored, url: URL.createObjectURL(blob) };
    setReceipts((current) => {
      const previous = current.find((receipt) => receipt.id === id);
      if (previous) URL.revokeObjectURL(previous.url);
      const next = [nextReceipt, ...current.filter((receipt) => receipt.id !== id)];
      receiptsRef.current = next;
      return next;
    });
  };

  const removeReceipt = async (receipt: ReceiptPhoto) => {
    if (!window.confirm("Vols eliminar la foto del tiquet?")) return;
    await deleteReceipt(receipt.id);
    URL.revokeObjectURL(receipt.url);
    setReceipts((current) => {
      const next = current.filter((item) => item.id !== receipt.id);
      receiptsRef.current = next;
      return next;
    });
  };

  const addExpense = async (event: FormEvent) => {
    event.preventDefault();
    const amount = Number(expenseForm.amount.replace(",", "."));
    if (!expenseForm.concept.trim() || !Number.isFinite(amount) || amount <= 0) return;
    const expenseId = makeId("expense");
    setExpenses((current) => [{
      id: expenseId, day: Number(expenseForm.day), concept: expenseForm.concept.trim(),
      category: expenseForm.category, amount, note: expenseForm.note.trim(), paymentMethod: expenseForm.paymentMethod,
      paidBy: expenseForm.paidBy, createdAt: new Date().toISOString(),
    }, ...current]);
    if (receiptDraft) {
      try { await saveReceipt(expenseId, receiptDraft); }
      catch { window.alert("La despesa s’ha guardat, però no s’ha pogut guardar la foto del tiquet."); }
    }
    setExpenseForm((current) => ({ ...current, concept: "", amount: "", note: "" }));
    setReceiptDraft(null);
    if (receiptDraftInput.current) receiptDraftInput.current.value = "";
  };

  const editExpense = (expense: Expense) => {
    const concept = window.prompt("Concepte de la despesa", expense.concept)?.trim();
    if (!concept) return;
    const amountText = window.prompt("Import en euros", String(expense.amount).replace(".", ","));
    if (!amountText) return;
    const amount = Number(amountText.replace(",", "."));
    if (!Number.isFinite(amount) || amount <= 0) return;
    const paymentMethod = window.prompt("Forma de pagament: Efectiu, Targeta, Targeta de dèbit o Targeta de crèdit", expense.paymentMethod) || expense.paymentMethod;
    const paidBy = window.prompt("Qui ha pagat: Josep o Cati", expense.paidBy) || expense.paidBy;
    setExpenses((current) => current.map((item) => item.id === expense.id ? { ...item, concept, amount, paymentMethod, paidBy } : item));
  };

  const deleteExpense = async (id: string) => {
    if (!window.confirm("Vols eliminar esta despesa?")) return;
    const receipt = receipts.find((item) => item.expenseId === id);
    if (receipt) {
      await deleteReceipt(receipt.id);
      URL.revokeObjectURL(receipt.url);
      setReceipts((current) => {
        const next = current.filter((item) => item.expenseId !== id);
        receiptsRef.current = next;
        return next;
      });
    }
    setExpenses((current) => current.filter((item) => item.id !== id));
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
  const openInfographic = openInfographicDay === null ? null : infographicItems.find((item) => item.day === openInfographicDay) || null;
  const completedReservations = reservationRows.filter((row) => row.state === "confirmed" || checked[row.taskId]).length;
  const completedTasks = [...tasks, ...customTasks].filter((task) => checked[task.id]).length;
  const allTaskCount = tasks.length + customTasks.length;
  const spent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remaining = budgetTotal - spent;
  const budgetPercent = budgetTotal > 0 ? Math.min(100, Math.round((spent / budgetTotal) * 100)) : 0;
  const expenseByCategory = categories.map((category) => ({ category, total: expenses.filter((expense) => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0) })).filter((item) => item.total > 0);
  const expenseByDay = days.map((day) => ({ day, total: expenses.filter((expense) => expense.day === day.id).reduce((sum, expense) => sum + expense.amount, 0) }));
  const expenseByPayer = payers.map((payer) => ({ payer, total: expenses.filter((expense) => expense.paidBy === payer).reduce((sum, expense) => sum + expense.amount, 0) }));
  const expenseByMethod = paymentMethods.map((method) => ({ method, total: expenses.filter((expense) => expense.paymentMethod === method).reduce((sum, expense) => sum + expense.amount, 0) })).filter((item) => item.total > 0);
  const pendingShopping = shoppingItems.filter((item) => !item.checked).length;
  const selectedMissionCount = selected.schedule.filter((item) => photoMissionByTitle[item.title]).length;
  const selectedDayMemories = photoMemories.filter((memory) => memory.day === selected.id);
  const totalMissionCount = days.reduce((total, day) => total + day.schedule.filter((item) => photoMissionByTitle[item.title]).length, 0);
  const photoMegabytes = photoMemories.reduce((total, memory) => total + memory.blob.size, 0) / 1024 / 1024;
  const receiptMegabytes = receipts.reduce((total, receipt) => total + receipt.blob.size, 0) / 1024 / 1024;
  const selectedHighlights = selected.schedule
    .filter((item) => Boolean(visitDetailsByTitle[item.title]))
    .map((item) => ({ item, visit: visitDetailsByTitle[item.title], parking: parkingByTitle[item.title] }))
    .slice(0, 5);

  const download = (filename: string, content: string, type: string) => {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const backupData = async () => {
    try {
      const photos = await Promise.all(photoMemories.map(async ({ url: _url, blob, ...memory }) => ({ ...memory, dataUrl: await blobToDataUrl(blob) })));
      const savedReceipts = await Promise.all(receipts.map(async ({ url: _url, blob, ...receipt }) => ({ ...receipt, dataUrl: await blobToDataUrl(blob) })));
      download("asturies-2026-copia-amb-fotos.json", JSON.stringify({ version: 4, savedAt: new Date().toISOString(), checked, expenses, budgetTotal, customTasks, taskLabels, shoppingItems, photos, receipts: savedReceipts }, null, 2), "application/json");
    } catch { window.alert("No s’ha pogut preparar la còpia amb les fotografies."); }
  };

  const exportCsv = () => {
    const escape = (value: string | number) => `"${String(value).replaceAll('"', '""')}"`;
    const rows = [["Dia", "Concepte", "Categoria", "Import", "Forma de pagament", "Pagat per", "Tiquet", "Nota"], ...expenses.map((expense) => [expense.day, expense.concept, expense.category, expense.amount.toFixed(2), expense.paymentMethod, expense.paidBy, receipts.some((receipt) => receipt.expenseId === expense.id) ? "Sí" : "No", expense.note])];
    download("despeses-asturies-2026.csv", `\uFEFF${rows.map((row) => row.map(escape).join(";")).join("\n")}`, "text/csv;charset=utf-8");
  };

  const restoreData = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (!data || !Array.isArray(data.expenses) || !Array.isArray(data.shoppingItems)) throw new Error("invalid");
        setChecked(data.checked || {});
        setExpenses(data.expenses.map((expense: Expense) => ({ ...expense, paymentMethod: expense.paymentMethod || "Per indicar", paidBy: expense.paidBy || "Per indicar" })));
        setBudgetTotal(Number(data.budgetTotal) || 1690);
        setCustomTasks(Array.isArray(data.customTasks) ? data.customTasks : []);
        setTaskLabels(data.taskLabels || {});
        setShoppingItems(data.shoppingItems);
        if (Array.isArray(data.photos)) {
          await clearPhotoMemories();
          photoMemoriesRef.current.forEach((memory) => URL.revokeObjectURL(memory.url));
          const restored: PhotoMemory[] = [];
          for (const item of data.photos) {
            if (!item?.id || !item?.dataUrl) continue;
            const stored: StoredPhotoMemory = {
              id: String(item.id), day: Number(item.day), placeTitle: String(item.placeTitle || "Record del viatge"),
              people: String(item.people || "Família"), prompt: String(item.prompt || ""), note: String(item.note || ""),
              createdAt: String(item.createdAt || new Date().toISOString()), blob: await dataUrlToBlob(String(item.dataUrl)),
            };
            await putPhotoMemory(stored);
            restored.push({ ...stored, url: URL.createObjectURL(stored.blob) });
          }
          photoMemoriesRef.current = restored;
          setPhotoMemories(restored);
          setPhotoStatus(restored.length ? `${restored.length} records restaurats` : "Encara no hi ha fotos guardades");
        }
        if (Array.isArray(data.receipts)) {
          await clearReceipts();
          receiptsRef.current.forEach((receipt) => URL.revokeObjectURL(receipt.url));
          const restoredReceipts: ReceiptPhoto[] = [];
          for (const item of data.receipts) {
            if (!item?.id || !item?.expenseId || !item?.dataUrl) continue;
            const stored: StoredReceipt = {
              id: String(item.id), expenseId: String(item.expenseId),
              createdAt: String(item.createdAt || new Date().toISOString()), blob: await dataUrlToBlob(String(item.dataUrl)),
            };
            await putReceipt(stored);
            restoredReceipts.push({ ...stored, url: URL.createObjectURL(stored.blob) });
          }
          receiptsRef.current = restoredReceipts;
          setReceipts(restoredReceipts);
        }
        window.alert("Còpia restaurada correctament, incloses les fotografies disponibles.");
      } catch { window.alert("No s’ha pogut restaurar: el fitxer no és una còpia vàlida."); }
      event.target.value = "";
    };
    reader.readAsText(file);
  };

  const scrollToSection = (id: string, includePlannerTabs = false, delay = 60) => {
    setMenuOpen(false);
    window.setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const headerHeight = document.querySelector<HTMLElement>(".topbar")?.offsetHeight || 0;
      const tabbarHeight = includePlannerTabs ? (document.querySelector<HTMLElement>(".tabbar")?.offsetHeight || 0) : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - tabbarHeight - 10;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }, delay);
  };

  const jump = (nextTab: TabKey) => {
    setTab(nextTab);
    scrollToSection("planner", false, 50);
  };

  const chooseDay = (id: number) => {
    setActiveDay(id);
    setTab("itinerari");
    scrollToSection(`itinerari-dia-${id}`, true, 90);
  };

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inici" aria-label="Inici" onClick={(event) => { event.preventDefault(); scrollToSection("inici"); }}><span className="brand-mark">AF</span><span>AVELLÀ-FERRER <b>2026</b></span></a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <button onClick={() => scrollToSection("allotjament")}>Allotjament</button><button onClick={() => scrollToSection("infografies")}>Infografies</button><button onClick={() => jump("itinerari")}>Itinerari</button><button onClick={() => jump("menjars")}>Menjars</button><button onClick={() => jump("compres")}>Compres</button><button onClick={() => jump("maleta")}>Llistes</button><button onClick={() => jump("reserves")}>Reserves</button><button onClick={() => jump("control")}>Control</button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Obrir menú">{menuOpen ? "×" : "☰"}</button>
      </header>

      <section className="hero" id="inici">
        <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/><div className="mountain mountain-a"/><div className="mountain mountain-b"/>
        <div className="hero-content">
          <p className="eyebrow">EL NOSTRE VIATGE FAMILIAR</p>
          <h1 className="family-title"><span>Els</span><em>Avellà-Ferrer</em><span>en Astúries</span></h1>
          <p className="hero-season">(estiu 2026)</p>
          <p className="hero-lead">Tot el viatge al mòbil: horaris, rutes, restaurants, compres, llistes i despeses guardades automàticament en este dispositiu.</p>
          <div className="hero-actions"><button className="primary" onClick={() => jump("itinerari")}>Començar la guia <span>↓</span></button><button className="secondary" onClick={() => jump("reserves")}>{reservationRows.length - completedReservations} gestions pendents ↗</button></div>
        </div>
        <div className="hero-visual">
          <div className="hero-family">
            <span className="family-monogram" aria-hidden="true">AF</span>
            <img className="family-portrait" src={familyCutout} alt="Josep, Cati, Lluís i Cesc, la família Avellà-Ferrer"/>
            <div className="family-nameplate"><b>La nostra aventura</b><span>Josep · Cati · Lluís · Cesc</span></div>
          </div>
        </div>
        <aside className="trip-card">
          <div className="trip-card-top"><span>COMENÇA EL</span><b>16·08</b></div>
          <div className="trip-route"><span className="route-dot start"/><div><small>EIXIDA · 16 AGO</small><strong>Xaló</strong></div></div><div className="route-line"><span>930 km</span></div><div className="trip-route"><span className="route-dot end"/><div><small>BASE · 7 NITS</small><strong>La Callezuela</strong></div></div>
          <div className="trip-progress"><div><span>Preparació</span><b>{completedTasks}/{allTaskCount}</b></div><i><em style={{ width: `${Math.round((completedTasks / Math.max(1, allTaskCount)) * 100)}%` }}/></i></div>
          <div className="trip-meta"><div><span>8</span><small>DIES</small></div><div><span>4</span><small>VIATGERS</small></div><div><span>7,3</span><small>L/100 KM</small></div></div>
        </aside>
      </section>

      <section className="quick-strip">
        <button onClick={() => scrollToSection("allotjament")}><span>⌂</span><p><small>EL NOSTRE ALLOTJAMENT</small><strong>Descobrir El Casal ↓</strong></p></button>
        <button onClick={() => scrollToSection("infografies")}><span>▧</span><p><small>NOVA SECCIÓ VISUAL</small><strong>Infografies de cada dia ↓</strong></p></button>
        <a href="tel:+34699862203"><span>☎</span><p><small>EL CASAL</small><strong>699 862 203</strong></p></a>
        <button onClick={() => jump("control")}><span>€</span><p><small>DESPESES</small><strong>{spent.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} € de {budgetTotal.toLocaleString("ca-ES")} €</strong></p></button>
      </section>

      <section className="section lodging-section" id="allotjament">
        <div className="lodging-heading">
          <div><p className="kicker">LA NOSTRA CASA A ASTÚRIES</p><h2>Apartamentos El Casal</h2><p>Un antic caseriu restaurat a La Callezuela, en plena natura però ben situat per a les rutes d’Avilés, la costa i el centre d’Astúries.</p></div>
          <div className="lodging-booking"><small>RESERVA FAMILIAR</small><strong>16–23 d’agost · 7 nits</strong><span>725 € confirmats</span></div>
        </div>
        <div className="lodging-feature">
          <figure className="lodging-photo"><img src={elCasalImage} alt="Exterior dels Apartamentos El Casal a Illas" loading="lazy"/><figcaption>El Casal · Barbachedo, 6 · La Callezuela <a href={elCasalTourism} target="_blank" rel="noreferrer">Font de la foto ↗</a></figcaption></figure>
          <div className="lodging-summary">
            <p className="lodging-intro">La finca conserva un hórreo de més de 200 anys, amb la recepció a la part superior i una zona exterior amb taules, jocs i futbolí davall. El conjunt té tres apartaments i està obert tot l’any.</p>
            <div className="lodging-highlights">
              <span>🏊 <b>Piscina exterior</b></span><span>🛝 <b>Jardí i parc infantil</b></span><span>🔥 <b>Barbacoa i taules</b></span><span>🅿️ <b>Aparcament inclòs</b></span><span>📶 <b>Wifi</b></span><span>🧺 <b>Rentadora</b></span>
            </div>
            <div className="lodging-actions"><a className="primary lodging-primary" href={contactById.casal.map} target="_blank" rel="noreferrer">Com arribar · Maps ↗</a><a href="tel:+34699862203">☎ 699 862 203</a><a href={contactById.casal.web} target="_blank" rel="noreferrer">Web oficial ↗</a><a href={elCasalBooking} target="_blank" rel="noreferrer">Veure en Booking ↗</a></div>
          </div>
        </div>
        <div className="lodging-grid">
          <article className="lodging-card confirmed"><span>✓ CONFIRMAT EN LA FITXA OFICIAL</span><h3>Què trobarem</h3><ul><li>Cuina amb menatge complet</li><li>Rentadora i rentavaixella</li><li>Roba de llit, calefacció i televisió</li><li>Wifi i accés a internet</li><li>Piscina, jardí, barbacoa i mobles d’exterior</li><li>Parc infantil, futbolí i jocs</li><li>Aparcament en l’allotjament</li><li>Possibilitat de bressol, que convé sol·licitar abans</li></ul></article>
          <article className="lodging-card layout-card"><span>⌂ DISTRIBUCIÓ</span><h3>Quin apartament tenim?</h3><p><b>Trasgu</b> té una habitació amb dos llits de 105 cm, sofà llit doble, bany gran, terrassa privada i solàrium.</p><p><b>Xana i Cuélebre</b> són lofts oberts amb dos llits de 105 cm i sofà llit doble; poden comunicar-se entre si.</p><p className="lodging-note">La fitxa que ens has passat no identifica clarament la unitat reservada. Cal confirmar el nom de l’apartament i la distribució exacta per a Josep, Cati, Lluís i Cesc.</p></article>
          <article className="lodging-card pending-card"><span>? ENCARA PER CONFIRMAR</span><h3>Què hem de preguntar</h3><ul><li>Tipus de cafetera i si necessita càpsules o filtres</li><li>Si hi ha oli, sal i productes bàsics de cuina</li><li>Tovalloles de bany i tovalloles específiques de piscina</li><li>Gel, xampú, paper higiènic i productes de neteja</li><li>Mida del frigorífic i espai real de congelador</li><li>Horari i dates d’obertura de la piscina</li><li>Ús de la barbacoa i si cal portar carbó</li><li>Hora d’entrada, entrega de claus i hora d’eixida</li></ul><TaskCheck id="casal-cuina" label={taskLabels["casal-cuina"]} checked={!!checked["casal-cuina"]} onToggle={toggleTask} compact/></article>
        </div>
        <div className="lodging-practical"><span>ⓘ</span><p><b>Important per a la família:</b> és un allotjament rural i no un nucli comercial; per això convé arribar amb el sopar del primer dia i els desdejunis inicials. El transport públic figura a menys de 500 m, però per a la compra i les excursions continuarem depenent del Tiguan. Amb Cesc, supervisió constant en la piscina i les zones exteriors.</p></div>
      </section>

      <section className="section infographic-section" id="infografies" aria-labelledby="infographic-title">
        <div className="section-heading infographic-heading">
          <div><p className="kicker">LA GUIA VISUAL DEL VIATGE</p><h2 id="infographic-title">Infografies de cada dia.</h2></div>
          <p>Obri cada làmina a pantalla completa per descobrir les curiositats, els llocs i les claus de la jornada. També podràs entrar directament des de l’itinerari de cada dia.</p>
        </div>
        <div className="infographic-grid">
          {infographicItems.map((item) => <button type="button" className="infographic-card" key={item.day} onClick={() => setOpenInfographicDay(item.day)} aria-label={`Obrir la infografia del dia ${item.day}: ${item.title}`}>
            <span className="infographic-preview">
              <img src={item.image} alt={`Infografia del dia ${item.day}: ${item.title}`} loading="lazy" onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.parentElement?.classList.add("image-pending"); }}/>
              <span className="infographic-pending">Infografia pendent d’incorporar</span>
              <b>DIA {String(item.day).padStart(2, "0")}</b>
            </span>
            <span className="infographic-copy"><small>{item.date}</small><strong>{item.title}</strong><em>{item.subtitle}</em><span>Veure a pantalla completa ↗</span></span>
          </button>)}
        </div>
      </section>

      <section className="section route-section" id="ruta">
        <div className="section-heading"><div><p className="kicker">LA RUTA D’UN PRIMER COLP D’ULL</p><h2>Un viatge, huit jornades.</h2></div><p>Prem qualsevol dia per obrir el pla complet, els llocs exactes, la preparació i les alternatives.</p></div>
        <div className="route-rail">{days.map((day) => <button key={day.id} onClick={() => chooseDay(day.id)} className={activeDay === day.id ? "active" : ""}><span>{day.id}<em title={forecastByDay[day.id].summary}>{forecastByDay[day.id].icon}</em></span><small>{day.shortDate}</small><strong>{day.title.split("+")[0]}</strong></button>)}</div>
      </section>

      <section className="section planner" id="planner">
        <div className="tabbar" role="tablist" aria-label="Seccions de la guia">
          {([['itinerari','Itinerari'],['menjars','Menjars'],['compres','Compra'],['maleta','Llistes'],['reserves','Reserves'],['control','Control €']] as [TabKey,string][]).map(([key,label]) => <button key={key} onClick={() => jump(key)} className={tab === key ? "active" : ""} role="tab">{label}</button>)}
        </div>

        {tab === "itinerari" && <div className="tab-panel">
          <div className="filter-row"><div><p className="kicker">ITINERARI DETALLAT</p><h2>Tria la jornada</h2></div><div className="filters">{[['tots','Tots'],['costa','Costa'],['natura','Natura'],['ciutat','Ciutat'],['ruta','Carretera']].map(([key,label]) => <button key={key} onClick={() => setFilter(key)} className={filter === key ? "active" : ""}>{label}</button>)}</div></div>
          <div className="forecast-notice"><span>◷</span><p><strong>Previsió actualitzada el 14 d’agost.</strong> Divendres 21 és ara la millor finestra per als Lagos; dijous 20 cal revisar radar i bandera abans de mantindre la platja.</p></div>
          <div className="day-grid">{filteredDays.map((day) => { const forecast = forecastByDay[day.id]; return <button key={day.id} className={`day-card ${day.color} ${activeDay === day.id ? "selected" : ""}`} onClick={() => chooseDay(day.id)}><div className="day-card-top"><span>DIA {day.id}</span><span className="weather-pill" title={forecast.summary}><b>{forecast.icon}</b><small>{forecast.temp}</small></span></div><small>{day.date}</small><h3>{day.title}</h3><p>{day.subtitle}</p><div className="day-weather-copy">{forecast.summary}</div><div className="day-stats"><span>{day.distance}</span><span>{day.budget}</span></div></button>; })}</div>

          <article className={`day-detail ${selected.color}`} id={`itinerari-dia-${selected.id}`}>
            <div className="detail-head"><div className="detail-number">{String(selected.id).padStart(2,"0")}</div><div><p>{selected.date}</p><h2>{selected.title}</h2><span>{selected.subtitle}</span></div><div className="detail-weather" title={forecastByDay[selected.id].summary}><span>{forecastByDay[selected.id].icon}</span><div><small>PREVISIÓ 14/08</small><strong>{forecastByDay[selected.id].temp}</strong></div></div><div className="detail-actions"><button type="button" className="infographic-button" onClick={() => setOpenInfographicDay(selected.id)}>▧ Infografia del dia</button><a href={selected.map} target="_blank" rel="noreferrer" className="map-button">Ruta completa en Maps ↗</a></div></div>
            <div className="detail-facts"><div><small>DISTÀNCIA</small><strong>{selected.distance}</strong></div><div><small>CONDUCCIÓ</small><strong>{selected.driving}</strong></div><div><small>PRESSUPOST</small><strong>{selected.budget}</strong></div></div>
            <div className="day-brief"><div><small>OBJECTIU REAL DEL DIA</small><p>{selected.objective}</p></div><div className="weather-brief"><div className="weather-current"><span>{forecastByDay[selected.id].icon}</span><div><small>PREVISIÓ ACTUAL · 14/08</small><strong>{forecastByDay[selected.id].temp}</strong><p>{forecastByDay[selected.id].summary}</p></div></div><p className="weather-advice"><b>Decisió del dia:</b> {selected.weather}</p></div></div>
            {selected.id === 6 && <section className="ticket-panel"><div><span>🎟️ BITLLETS COMPRATS</span><h3>P1 12:00 → Lagos · tornada 16:50</h3><p>Divendres 21 · 4 viatgers · 25,50 €. Presentar al mòbil; no cal imprimir. El PDF amb els codis i la documentació no està publicat en la web.</p></div><div className="ticket-email-note"><small>ON ESTÀ EL PDF</small><strong>Gmail · josepavella@gmail.com</strong><span>Correu «Gracias por comprar en Alsa» del 14/08/2026 · obrir l’adjunt des del mòbil.</span></div></section>}
            {selectedHighlights.length > 0 && <section className="day-highlights"><div className="highlights-heading"><p className="kicker">QUÈ VEUREM</p><h3>Els punts que donen sentit al dia</h3><p>Una vista ràpida abans d’obrir l’horari: què és cada lloc, quant de temps li dedicarem i on convé aparcar.</p></div><div className="highlights-grid">{selectedHighlights.map(({ item, visit, parking }) => <article key={`${selected.id}-${item.title}`}><img src={visit.image} alt={visit.imageAlt} loading="lazy"/><div><small>{item.time} · {item.tag || "visita"}</small><h4>{item.title}</h4><p>{visit.description}</p><div>{item.map && <a href={item.map} target="_blank" rel="noreferrer">Ubicació ↗</a>}{parking && <a href={parking.map} target="_blank" rel="noreferrer">🅿 {parking.cost} ↗</a>}</div></div></article>)}</div></section>}
            <div className="detail-columns">
              <div className="timeline"><h3>Horari pas a pas</h3>{selected.schedule.map((item, index) => {
                const visit = visitDetailsByTitle[item.title];
                const parking = parkingByTitle[item.title];
                const foodStop = foodStopsByTitle[item.title];
                const alternative = foodStop?.alternativeId ? restaurantAlternatives[foodStop.alternativeId] : undefined;
                const photoMission = photoMissionByTitle[item.title];
                const photoMemory = photoMemories.find((memory) => memory.id === `day-${selected.id}-${item.title}`);
                return <div className="timeline-item" key={`${selected.id}-${index}`}><time>{item.time}</time><span className="timeline-dot"/><div className="timeline-copy"><div><strong>{item.title}</strong>{item.tag && <em>{item.tag}</em>}</div><p>{item.note}</p><div className="timeline-links">{item.map && <a href={item.map} target="_blank" rel="noreferrer">Obrir ubicació ↗</a>}{foodStop && <a className="review-action" href={foodStop.reviews} target="_blank" rel="noreferrer">★ Ressenyes Google ↗</a>}</div>
                  {alternative && <div className="timeline-alternative"><span>Alternativa si hi ha una incidència</span><strong>{alternative.name}</strong><small>{alternative.detail}</small><div>{alternative.phone && <a href={`tel:${alternative.phone}`}>☎ {alternative.phoneLabel}</a>}<a href={alternative.map} target="_blank" rel="noreferrer">Maps ↗</a><a href={alternative.reviews} target="_blank" rel="noreferrer">Ressenyes ↗</a></div></div>}
                  {visit && <details className="visit-details"><summary><span className="plus-icon">+</span><span>Veure descripció, foto i aparcament</span></summary><div className="visit-card"><div className="visit-media"><img src={visit.image} alt={visit.imageAlt} loading="lazy" onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.parentElement?.classList.add("image-missing"); }}/><span>📍 Fotografia temporalment no disponible</span></div><div><p>{visit.description}</p>{parking && <a className="parking-card" href={parking.map} target="_blank" rel="noreferrer"><span className="parking-icon">P</span><span><small>APARCAMENT PRÒXIM</small><b>{parking.name}</b><em>{parking.cost} · obrir ruta ↗</em></span></a>}<div>{item.map && <a href={item.map} target="_blank" rel="noreferrer">Obrir lloc en Maps ↗</a>}<a href={visit.source} target="_blank" rel="noreferrer">Font de la foto ↗</a></div></div></div></details>}
                  {photoMission && <PhotoMissionCard day={selected.id} placeTitle={item.title} mission={photoMission} memory={photoMemory} busy={photoBusy === `day-${selected.id}-${item.title}`} onPhoto={(file) => savePhoto(selected.id, item.title, photoMission, file)} onNote={() => photoMemory && editPhotoNote(photoMemory)} onDelete={() => photoMemory && removePhoto(photoMemory)} />}
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
            <section className="day-album">
              <div className="album-heading"><div><p className="kicker">ÀLBUM FAMILIAR DEL DIA</p><h3>Records que no volem oblidar</h3><p>{photoStatus}. Les fotos només es guarden en este navegador.</p></div><span><b>{selectedDayMemories.length}</b> / {selectedMissionCount}</span></div>
              <div className="album-progress"><i><em style={{ width: `${selectedMissionCount ? Math.min(100, Math.round((selectedDayMemories.length / selectedMissionCount) * 100)) : 0}%` }}/></i><small>{selectedDayMemories.length === selectedMissionCount && selectedMissionCount > 0 ? "Missions del dia completades ✓" : `${Math.max(0, selectedMissionCount - selectedDayMemories.length)} fotos pendents`}</small></div>
              {selectedDayMemories.length > 0 ? <div className="day-gallery">{selectedDayMemories.map((memory) => <figure key={memory.id}><img src={memory.url} alt={`Record de ${memory.people} a ${memory.placeTitle}`} loading="lazy"/><figcaption><b>{memory.people}</b><span>{memory.placeTitle}</span>{memory.note && <small>{memory.note}</small>}</figcaption></figure>)}</div> : <div className="album-empty"><span>📷</span><p>Quan completeu la primera missió fotogràfica del dia, el record apareixerà ací.</p></div>}
            </section>
            <section className="day-actions"><div className="subheading"><div><p className="kicker">PREPARACIÓ GUARDADA</p><h3>Marca ací o en «Llistes»</h3></div><span>{selected.taskIds.filter((id) => checked[id]).length}/{selected.taskIds.length}</span></div><div className="inline-checks">{selected.taskIds.map((id) => <TaskCheck key={id} id={id} label={taskLabels[id]} checked={!!checked[id]} onToggle={toggleTask} compact/>)}</div></section>
            {selected.contactIds.length > 0 && <section className="day-contacts"><p className="kicker">TELÈFONS I ENLLAÇOS DEL DIA</p><div className="places-grid">{selected.contactIds.map((id) => <ContactCard key={id} contact={contactById[id]} small/>)}</div></section>}
            <div className="day-switch"><button disabled={selected.id === 1} onClick={() => chooseDay(selected.id - 1)}>← Dia anterior</button><span>{selected.id} / 8</span><button disabled={selected.id === 8} onClick={() => chooseDay(selected.id + 1)}>Dia següent →</button></div>
          </article>
        </div>}

        {tab === "menjars" && <div className="tab-panel simple-panel meals-panel">
          <div className="panel-intro meals-intro"><p className="kicker">MENJARS DEL VIATGE</p><h2>Què menjarem cada dia.</h2><p>Desdejunis, cinc pícnics, restaurants i sopars reunits en un únic lloc. Cada fitxa indica l’hora, el lloc, el tipus de menjar i què cal recordar abans d’eixir.</p></div>
          <div className="meal-summary">
            <article><span>🥪</span><div><small>PÍCNICS</small><strong>5 dies</strong><p>Dies 1, 3, 5, 6 i 8</p></div></article>
            <article><span>🍽️</span><div><small>MENJARS FORA</small><strong>5 parades</strong><p>Cafestore, Furacu, Cafetín, La Amistad i Pichote</p></div></article>
            <article><span>🏠</span><div><small>SOPARS A CASA</small><strong>7 dies</strong><p>Només el Dia 5 sopem fora</p></div></article>
            <article><span>☕</span><div><small>DESDEJUNIS</small><strong>8 dies</strong><p>Dia 1 fora; la resta a El Casal</p></div></article>
          </div>
          <section className="picnic-essentials">
            <div><p className="kicker">KIT FIX DE PÍCNIC</p><h3>El que no pot faltar en cap motxilla</h3><p>Preparar la part refrigerada l’última i mantindre sempre separat i identificat el menjar de Lluís.</p></div>
            <ul><li>Motxilla o nevereta refrigerant</li><li>Quatre acumuladors de fred</li><li>Aigua suficient per als quatre</li><li>Servilletes i bosses per als residus</li><li>Fruita compatible amb Lluís</li><li>Iogurts o formatgets</li><li>Sucs individuals</li><li>Olives i crackers simples o de pizza</li><li>Medicació accessible</li></ul>
          </section>
          <div className="meal-day-list">
            {mealPlanByDay.map((day) => <article className="meal-day-card" key={day.day}>
              <header><span>{String(day.day).padStart(2, "0")}</span><div><small>{day.date}</small><h3>{day.title}</h3></div></header>
              <div className="meal-entry-grid">{day.meals.map((meal) => <section className={`meal-entry ${meal.kind}`} key={`${day.day}-${meal.moment}`}>
                <div className="meal-entry-top"><span>{meal.moment}</span><em>{meal.kindLabel}</em>{meal.confirmed && <b>✓ Confirmat</b>}</div>
                <time>{meal.time}</time><h4>{meal.place}</h4><p>{meal.menu}</p><small><b>A tindre en compte:</b> {meal.note}</small>
              </section>)}</div>
            </article>)}
          </div>
          <div className="meal-shopping-link"><div><p className="kicker">PREPARACIÓ I COMPRA</p><h3>Tot està connectat amb les llistes</h3><p>Els ingredients, snacks, desdejunis i sopars apareixen també com a elements marcables en «Compra».</p></div><button type="button" onClick={() => jump("compres")}>Obrir les llistes de compra →</button></div>
        </div>}

        {tab === "compres" && <div className="tab-panel simple-panel">
          <div className="panel-intro"><p className="kicker">COMPRA I PREPARACIÓ</p><h2>De Xaló a cada pícnic.</h2><p>Queden {pendingShopping} elements pendents. Les llistes separen què portem de casa, què comprem a Avilés i què hem de preparar per als desdejunis, pícnics i sopars.</p></div>
          <form className="add-form shopping-add" id="shopping-add-form" onSubmit={addShoppingItem}>
            <label><span>Producte</span><input value={newShopping.label} onChange={(event) => setNewShopping((current) => ({ ...current, label: event.target.value }))} placeholder="Ex. ous o salmó" required/></label>
            <label><span>Quantitat o nota</span><input value={newShopping.quantity} onChange={(event) => setNewShopping((current) => ({ ...current, quantity: event.target.value }))} placeholder="Ex. 2 paquets"/></label>
            <label><span>Grup</span><select value={newShopping.group} onChange={(event) => setNewShopping((current) => ({ ...current, group: event.target.value }))}>{shoppingGroups.map((group) => <option key={group}>{group}</option>)}</select></label>
            <button className="form-primary" type="submit">+ Afegir</button>
          </form>
          <div className="subheading store-heading"><div><p className="kicker">MENJAR I SUPERMERCATS</p><h3>Què agafem de casa i què comprem allí</h3></div></div>
          <div className="store-list compact-stores">{shops.map((shop, index) => { const group = shopGroupById[shop.id]; const items = shoppingItems.filter((item) => item.group === group); const isHomeFood = shop.id === "xalo"; return <article className="store-card store-with-list" key={shop.id}><div className="shopping-index">{isHomeFood ? "🏠" : "🛒"}</div><div className="store-main"><small>{isHomeFood ? "MENJAR DE CASA" : `COMPRA ${String(index).padStart(2, "0")}`} · {shop.note}</small><h3>{shop.when}</h3><address>{shop.address}</address><p>{shop.items}</p><div className="store-actions"><a href={shop.map} target="_blank" rel="noreferrer">Google Maps ↗</a>{shop.web && <a href={shop.web} target="_blank" rel="noreferrer">Fitxa i horari ↗</a>}<button onClick={() => { setNewShopping((current) => ({ ...current, group })); document.getElementById("shopping-add-form")?.scrollIntoView({ behavior: "smooth", block: "center" }); }}>+ {isHomeFood ? "Afegir menjar de casa" : "Afegir a esta compra"}</button></div><div className="store-shopping"><div className="shopping-group-head"><h4><span>{isHomeFood ? "🏠" : "🛒"}</span> {isHomeFood ? "Preparat per a carregar" : "Dins de la cistella"}</h4><b>{items.filter((item) => item.checked).length}/{items.length}</b></div>{items.length ? items.map((item) => <div className={`managed-item ${item.checked ? "done" : ""}`} key={item.id}><button className="managed-toggle" onClick={() => toggleShopping(item.id)} aria-label={`${item.checked ? "Desmarcar" : "Marcar"} ${item.label}`}><span className="checkbox">{item.checked ? "✓" : ""}</span><span><b>{item.label}</b>{item.quantity && <small>{item.quantity}</small>}</span></button><div className="item-actions"><button onClick={() => editShopping(item)} aria-label={`Editar ${item.label}`}>✎</button><button onClick={() => deleteShopping(item.id)} aria-label={`Eliminar ${item.label}`}>×</button></div></div>) : <p className="empty-state">Encara no hi ha aliments en esta llista.</p>}</div><TaskCheck id={shop.taskId} label={taskLabels[shop.taskId]} checked={!!checked[shop.taskId]} onToggle={toggleTask} compact/></div></article>; })}</div>
          <div className="subheading store-heading"><div><p className="kicker">ALTRES LLISTES</p><h3>Desdejunis, pícnics i sopars</h3></div></div>
          <div className="shopping-groups">{shoppingGroups.filter((group) => !Object.values(shopGroupById).includes(group)).map((group) => { const items = shoppingItems.filter((item) => item.group === group); if (!items.length) return null; return <section key={group}><div className="shopping-group-head"><h3><span className="basket-emoji">🛒</span>{group}</h3><span>{items.filter((item) => item.checked).length}/{items.length}</span></div>{items.map((item) => <div className={`managed-item ${item.checked ? "done" : ""}`} key={item.id}><button className="managed-toggle" onClick={() => toggleShopping(item.id)} aria-label={`${item.checked ? "Desmarcar" : "Marcar"} ${item.label}`}><span className="checkbox">{item.checked ? "✓" : ""}</span><span><b>{item.label}</b>{item.quantity && <small>{item.quantity}</small>}</span></button><div className="item-actions"><button onClick={() => editShopping(item)} aria-label={`Editar ${item.label}`}>✎</button><button onClick={() => deleteShopping(item.id)} aria-label={`Eliminar ${item.label}`}>×</button></div></div>)}</section>; })}</div>
          <div className="menu-bank meal-menu-bank"><h3>Els menús, explicats dia per dia</h3><p>La nova secció «Menjars» reunix lloc, hora, tipus de menjar, menú i preparació de cada jornada.</p><button type="button" onClick={() => jump("menjars")}>Veure tots els menjars →</button></div>
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
          <div className="reservation-cards">{reservationRows.map((row) => { const contact = contactById[row.contactId]; const fixedConfirmed = row.state === "confirmed"; const done = fixedConfirmed || !!checked[row.taskId]; const statusLabel = fixedConfirmed ? "Confirmada" : row.state === "walkin" ? "Sense reserva" : done ? "Completada" : "Pendent"; const statusClass = fixedConfirmed || done ? "confirmed" : row.state === "walkin" ? "walkin" : "pending"; return <article className={`reservation-card ${done ? "done" : ""}`} key={row.taskId}><div className="reservation-top"><span className={`status ${statusClass}`}>{statusLabel}</span><b>{row.cost}</b></div><h3>{row.title}</h3><p>{row.date}</p><div className="reservation-actions">{contact.phone && <a href={`tel:${contact.phone}`} className="call-action">☎ {contact.phoneLabel}</a>}<a href={contact.map} target="_blank" rel="noreferrer">Maps ↗</a>{restaurantIds.has(contact.id) && <a className="review-action" href={maps(`${contact.name} ressenyes`)} target="_blank" rel="noreferrer">★ Ressenyes</a>}{contact.web && <a href={contact.web} target="_blank" rel="noreferrer">Web ↗</a>}</div>{row.contactId === "lagos" && <p className="reservation-private-note">🎟️ PDF no publicat · Gmail de Josep · correu del 14/08/2026</p>}{!fixedConfirmed && <TaskCheck id={row.taskId} label={taskLabels[row.taskId]} checked={!!checked[row.taskId]} onToggle={toggleTask} compact/>}</article>; })}</div>
          <div className="contact-section"><div className="subheading"><div><p className="kicker">ALTRES CONTACTES ÚTILS</p><h3>Base i necessitats familiars</h3></div></div><div className="places-grid">{["chigre","farmacia","naranco"].map((id) => <ContactCard key={id} contact={contactById[id]} small/>)}</div></div>
          <div className="emergency-card"><span>URGÈNCIES</span><strong>112</strong><p>Per a assistència urgent sanitària, salvament o emergència. En platja, respectar sempre bandera i socorrisme.</p><a href="tel:112">Telefonar al 112</a></div>
        </div>}

        {tab === "control" && <div className="tab-panel simple-panel control-panel">
          <div className="panel-intro"><p className="kicker">CONTROL DEL VIATGE</p><h2>Pressupost i despeses reals.</h2><p>Ja estan introduïts l’apartament de 725 € i els bitllets del bus dels Lagos, pagats amb targeta. Afegix cada pagament i veuràs al moment quant queda disponible.</p></div>

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
              <label><span>Forma de pagament</span><select value={expenseForm.paymentMethod} onChange={(event) => setExpenseForm((current) => ({ ...current, paymentMethod: event.target.value }))}>{paymentMethods.map((method) => <option key={method}>{method}</option>)}</select></label>
              <label><span>Qui paga</span><select value={expenseForm.paidBy} onChange={(event) => setExpenseForm((current) => ({ ...current, paidBy: event.target.value }))}>{payers.map((payer) => <option key={payer}>{payer}</option>)}</select></label>
              <label className="note-field"><span>Nota opcional</span><input value={expenseForm.note} onChange={(event) => setExpenseForm((current) => ({ ...current, note: event.target.value }))} placeholder="Ex. inclou sopar"/></label>
              <label className="receipt-field"><span>Foto del tiquet · opcional</span><input ref={receiptDraftInput} type="file" accept="image/*" capture="environment" onChange={(event) => setReceiptDraft(event.target.files?.[0] || null)}/>{receiptDraft && <small>📎 {receiptDraft.name}</small>}</label>
              <button className="form-primary" type="submit">+ Guardar despesa</button>
            </form>
          </section>

          <div className="control-grids">
            <section className="summary-card"><div className="summary-title"><h3>Per categoria</h3><span>{expenseByCategory.length}</span></div>{expenseByCategory.length ? expenseByCategory.map((item) => <div className="summary-row" key={item.category}><span>{item.category}</span><b>{item.total.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} €</b></div>) : <p className="empty-state">Encara no hi ha despeses.</p>}</section>
            <section className="summary-card"><div className="summary-title"><h3>Per dia</h3><span>8</span></div>{expenseByDay.map(({ day, total }) => <button className="summary-row day-row" key={day.id} onClick={() => { setExpenseForm((current) => ({ ...current, day: String(day.id) })); }}><span>Dia {day.id} · {day.title}</span><b>{total.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} €</b></button>)}</section>
            <section className="summary-card"><div className="summary-title"><h3>Qui ha pagat</h3><span>{expenseByPayer.length}</span></div>{expenseByPayer.map((item) => <div className="summary-row" key={item.payer}><span>{item.payer}</span><b>{item.total.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} €</b></div>)}</section>
            <section className="summary-card"><div className="summary-title"><h3>Forma de pagament</h3><span>{expenseByMethod.length}</span></div>{expenseByMethod.length ? expenseByMethod.map((item) => <div className="summary-row" key={item.method}><span>{item.method}</span><b>{item.total.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} €</b></div>) : <p className="empty-state">Encara no hi ha despeses.</p>}</section>
          </div>

          <section className="expense-history">
            <div className="subheading"><div><p className="kicker">HISTORIAL</p><h3>Totes les despeses</h3></div><strong>{spent.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} €</strong></div>
            <div className="expense-list">{expenses.length ? expenses.map((expense) => { const receipt = receipts.find((item) => item.expenseId === expense.id); return <article key={expense.id}><div className="expense-day"><small>DIA</small><b>{expense.day}</b></div><div className="expense-copy"><small>{expense.category}</small><h4>{expense.concept}</h4><div className="expense-meta"><span>{expense.paymentMethod}</span><span>Pagat per {expense.paidBy}</span></div>{expense.note && <p>{expense.note}</p>}</div>{receipt && <a className="receipt-thumb" href={receipt.url} target="_blank" rel="noreferrer" title="Obrir foto del tiquet"><img src={receipt.url} alt={`Tiquet de ${expense.concept}`}/><span>🧾 Tiquet</span></a>}<strong>{expense.amount.toLocaleString("ca-ES", { minimumFractionDigits: 2 })} €</strong><div className="item-actions expense-actions"><label title={receipt ? "Canviar foto del tiquet" : "Afegir foto del tiquet"}>🧾<input type="file" accept="image/*" capture="environment" onChange={(event) => { const file = event.target.files?.[0]; if (file) saveReceipt(expense.id, file).catch(() => window.alert("No s’ha pogut guardar el tiquet.")); event.target.value = ""; }} hidden/></label>{receipt && <button onClick={() => removeReceipt(receipt)} aria-label={`Eliminar tiquet de ${expense.concept}`}>⌫</button>}<button onClick={() => editExpense(expense)} aria-label={`Editar ${expense.concept}`}>✎</button><button onClick={() => deleteExpense(expense.id)} aria-label={`Eliminar ${expense.concept}`}>×</button></div></article>; }) : <p className="empty-state">Encara no has registrat cap despesa.</p>}</div>
          </section>

          <section className="data-tools"><div><p className="kicker">SEGURETAT DE LES DADES</p><h3>Còpia completa, també de les fotos</h3><p>Les dades viuen en este navegador. La còpia inclou despeses, llistes, {receipts.length} tiquets ({receiptMegabytes.toFixed(1)} MB) i els {photoMemories.length} records familiars ({photoMegabytes.toFixed(1)} MB) de {totalMissionCount} missions possibles. El PDF dels bitllets no s’inclou.</p></div><div className="tool-actions"><button onClick={backupData}>Guardar còpia amb fotos</button><button onClick={() => restoreInput.current?.click()}>Restaurar dades</button><button onClick={exportCsv}>Exportar despeses CSV</button><input ref={restoreInput} type="file" accept="application/json,.json" onChange={restoreData} hidden/></div></section>
        </div>}
      </section>

      <section className="route-map-banner" aria-labelledby="route-map-title">
        <figure className="route-map-figure">
          <img src={routeMapImage} alt="Mapa il·lustrat del viatge familiar des de Xaló fins a Astúries amb el Volkswagen Tiguan" loading="lazy"/>
          <figcaption>La ruta dels Avellà-Ferrer · Estiu 2026</figcaption>
        </figure>
        <div className="route-map-copy">
          <p className="kicker">EL NOSTRE MAPA DE RECORDS</p>
          <h2 id="route-map-title">Huit dies, una ruta en família.</h2>
          <p>Prem una xinxeta per tornar directament a l’itinerari d’eixe dia i veure les visites, els aparcaments i les missions fotogràfiques.</p>
          <div className="route-map-stops">
            {routeMapStops.map((stop) => <button key={stop.day} onClick={() => chooseDay(stop.day)}><span>📍</span><b>Dia {stop.day}</b><small>{stop.label}</small></button>)}
          </div>
        </div>
      </section>

      {openInfographic && <div className="infographic-modal" role="dialog" aria-modal="true" aria-labelledby="infographic-modal-title" onClick={() => setOpenInfographicDay(null)}>
        <div className="infographic-modal-panel" onClick={(event) => event.stopPropagation()}>
          <header className="infographic-modal-header"><div><small>DIA {openInfographic.day} · {openInfographic.date}</small><h2 id="infographic-modal-title">{openInfographic.title}</h2></div><button type="button" className="infographic-close" onClick={() => setOpenInfographicDay(null)} aria-label="Tancar la infografia">×</button></header>
          <div className="infographic-modal-media"><img src={openInfographic.image} alt={`Infografia completa del dia ${openInfographic.day}: ${openInfographic.title}`}/></div>
          <nav className="infographic-modal-nav" aria-label="Canviar d’infografia"><button type="button" onClick={() => setOpenInfographicDay(openInfographic.day === 1 ? infographicItems.length : openInfographic.day - 1)}>← Dia anterior</button><span>{openInfographic.day} / {infographicItems.length}</span><button type="button" onClick={() => setOpenInfographicDay(openInfographic.day === infographicItems.length ? 1 : openInfographic.day + 1)}>Dia següent →</button></nav>
        </div>
      </div>}

      <footer><div className="brand"><span className="brand-mark">AF</span><span>AVELLÀ-FERRER <b>2026</b></span></div><p>Josep, Cati, Lluís i Cesc · 16–23 d’agost</p><a href="#inici" onClick={(event) => { event.preventDefault(); scrollToSection("inici"); }}>Tornar amunt ↑</a></footer>

      <nav className="mobile-nav"><button onClick={() => jump("itinerari")} className={tab === "itinerari" ? "active" : ""}><span>⌖</span>Ruta</button><button onClick={() => jump("menjars")} className={tab === "menjars" ? "active" : ""}><span>🍴</span>Menjar</button><button onClick={() => jump("compres")} className={tab === "compres" ? "active" : ""}><span>▤</span>Compra</button><button onClick={() => jump("maleta")} className={tab === "maleta" ? "active" : ""}><span>✓</span>Llistes</button><button onClick={() => jump("reserves")} className={tab === "reserves" ? "active" : ""}><span>☎</span>Reserves</button><button onClick={() => jump("control")} className={tab === "control" ? "active" : ""}><span>€</span>Control</button></nav>
    </main>
  );
}
