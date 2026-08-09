export type ActionLink = { label: string; href: string; kind?: "map" | "web" | "call" };

export type ScheduleItem = {
  time: string;
  title: string;
  note: string;
  map?: string;
  tag?: string;
};

export type Day = {
  id: number;
  date: string;
  shortDate: string;
  title: string;
  subtitle: string;
  objective: string;
  kind: "ruta" | "ciutat" | "costa" | "natura";
  icon: string;
  distance: string;
  driving: string;
  budget: string;
  color: string;
  map: string;
  weather: string;
  schedule: ScheduleItem[];
  walk: string;
  parking: string;
  food: string;
  practical: string[];
  taskIds: string[];
  contactIds: string[];
  planB: string;
  links: ActionLink[];
};

export type Task = { id: string; label: string; group: "abans" | "reserves" | "maleta" | "dia" };

export type Contact = {
  id: string;
  name: string;
  detail: string;
  phone?: string;
  phoneLabel?: string;
  web?: string;
  map: string;
  note?: string;
};

export const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const tasks: Task[] = [
  { id: "casal-arribada", label: "Avisar El Casal de l’arribada i acordar l’entrega de claus", group: "reserves" },
  { id: "casal-cuina", label: "Confirmar amb El Casal: cafetera, oli, sal, congelador, tovalloles de piscina, productes de bany i horari de la piscina", group: "abans" },
  { id: "tigu-revisio", label: "Revisar Tiguan: pneumàtics, oli, refrigerant i líquid dels eixugaparabrises", group: "abans" },
  { id: "v16-docs", label: "Carregar balisa V-16, DNI, targetes sanitàries i documentació", group: "abans" },
  { id: "rutes-offline", label: "Descarregar rutes, reserves i captures als dos mòbils", group: "abans" },
  { id: "yumay", label: "Reservar Yumay · dilluns 17 · 14:00", group: "reserves" },
  { id: "muja", label: "Retirar invitacions gratuïtes del MUJA · dimecres 19", group: "reserves" },
  { id: "cafetin", label: "Reservar El Cafetín · dimecres 19 · 14:15 i consultar al·lèrgies", group: "reserves" },
  { id: "lagos", label: "Comprar bus als Lagos des de P1 · dijous 20 · 08:30–09:00", group: "reserves" },
  { id: "puerto", label: "Reservar El Puerto · divendres 21 · 20:00", group: "reserves" },
  { id: "piguena", label: "Reservar El Pigüeña · dissabte 22 · 13:45", group: "reserves" },
  { id: "impermeables", label: "Impermeables i capes fines per als quatre", group: "maleta" },
  { id: "bany", label: "Banyadors, tovalloles, gorres i crema solar", group: "maleta" },
  { id: "cesc-muda", label: "Calçat segur i muda seca de Cesc", group: "maleta" },
  { id: "nevera", label: "Nevereta, quatre acumuladors, botelles i manta de pícnic", group: "maleta" },
  { id: "medicacio", label: "Medicació accessible i menjar de Lluís separat i identificat", group: "maleta" },
  { id: "mobils-carregadors", label: "Mòbils i carregadors dels mòbils", group: "maleta" },
  { id: "rellotges-carregadors", label: "Rellotges i carregadors dels rellotges", group: "maleta" },
  { id: "bateries-externes", label: "Bateries externes carregades i cables", group: "maleta" },
  { id: "portatil", label: "Portàtil i carregador", group: "maleta" },
  { id: "dia1-picnic", label: "Preparar entrepans, pícnic d’Arévalo i sopar d’arribada", group: "dia" },
  { id: "compra-aviles", label: "Compra principal feta a l’Alimerka de Cristóbal Colón", group: "dia" },
  { id: "dia3-mar", label: "Revisar AEMET, vent i bandera de San Pedro", group: "dia" },
  { id: "dia4-marea", label: "Revisar marea i accés a les petjades 3–4 dies abans", group: "dia" },
  { id: "dia5-meteo", label: "Revisar visibilitat i càmeres dels Lagos el dia anterior", group: "dia" },
  { id: "compra-prestin", label: "Reposició feta a l’Alimerka d’El Prestín", group: "dia" },
  { id: "dia6-pasta", label: "Preparar i refredar l’ensalada de pasta la nit anterior", group: "dia" },
  { id: "dia6-marea", label: "Revisar bandera i marees de Cuevas del Mar", group: "dia" },
  { id: "dia7-oratge", label: "Decidir ordre Naranco/Oviedo segons l’oratge", group: "dia" },
  { id: "dia7-maletes", label: "Preparar maletes i deixar fora només el necessari del Dia 8", group: "dia" },
  { id: "dia8-cotxe", label: "Repostar el Tiguan dissabte i comprovar pressions", group: "dia" },
  { id: "dia8-picnic", label: "Preparar pícnic de tornada i bossa accessible de Cesc", group: "dia" },
];

export const contacts: Contact[] = [
  {
    id: "casal", name: "Apartamentos El Casal", detail: "Camí Barbachedo, 6 · La Callezuela (Illas)",
    phone: "+34699862203", phoneLabel: "699 862 203", web: "https://apartamentoselcasal.com/", map: maps("Apartamentos El Casal Illas Asturias"),
    note: "Allotjament confirmat · 725 € · avisar si canvia l’hora d’arribada.",
  },
  {
    id: "yumay", name: "Sidreria Yumay", detail: "C. Rafael Suárez, 7 · Villalegre, Avilés",
    phone: "+34985570826", phoneLabel: "985 570 826", web: "https://www.sidreriayumay.com/", map: maps("Sidrería Yumay Avilés"),
    note: "Dilluns 17 · 14:00 · aparcament privat · preguntar per plats senzills i traces.",
  },
  {
    id: "muja", name: "MUJA", detail: "Rasa de San Telmo · Colunga",
    phone: "+34985185860", phoneLabel: "985 185 860", web: "https://www.museojurasicoasturias.com/entradas", map: maps("Museo del Jurásico de Asturias MUJA"),
    note: "Dimecres 19: accés gratuït; retirar invitació en línia. Audioguia/activitats, a banda.",
  },
  {
    id: "cafetin", name: "El Cafetín", detail: "C. Matemático Pedrayes, s/n · Llastres",
    phone: "+34679817804", phoneLabel: "679 817 804", web: "https://www.instagram.com/restauranteelcafetin_lastres/", map: maps("Restaurante El Cafetín Lastres Asturias"),
    note: "Dimecres 19 · 14:15 · confirmar al·lèrgies de Lluís i contaminació creuada.",
  },
  {
    id: "lagos", name: "Bus Lagos de Covadonga", detail: "Eixida P1 · Estació d’autobusos de Cangas de Onís",
    phone: "+34985848614", phoneLabel: "985 848 614", web: "https://www.buslagoscovadonga.es/", map: maps("Parking P1 Estación de Autobuses Cangas de Onís"),
    note: "2 adults + 2 xiquets: 25 €; aparcament P1: 3 €. Arribar 20 minuts abans.",
  },
  {
    id: "puerto", name: "Sidrería Restaurant El Puerto", detail: "C. Marqués de Canillejas, 1 · Llanes",
    phone: "+34684610679", phoneLabel: "684 610 679", web: "https://cometellanes.com/", map: maps("Sidrería Restaurante El Puerto Llanes"),
    note: "Divendres 21 · 20:00 · davant del port · pressupost familiar 55–70 €.",
  },
  {
    id: "naranco", name: "Santa María del Naranco", detail: "Av. de los Monumentos · Oviedo",
    phone: "+34638260163", phoneLabel: "638 260 163", web: "https://www.santamariadelnaranco.es/", map: maps("Santa María del Naranco Oviedo"),
    note: "Visita conjunta guiada d’uns 40 min; 5 €/persona. Una família no necessita reserva obligatòria.",
  },
  {
    id: "piguena", name: "Sidrería El Pigüeña", detail: "C. Gascona, 2 · Oviedo",
    phone: "+34684628994", phoneLabel: "684 628 994", web: "https://elpiguena.com/", map: maps("Sidrería El Pigüeña Gascona Oviedo"),
    note: "Dissabte 22 · 13:45 · menú de migdia i carta asturiana.",
  },
  {
    id: "chigre", name: "El Chigre de Illas", detail: "La Callezuela · opció pròxima",
    phone: "+34985506140", phoneLabel: "985 506 140", map: maps("El Chigre de Illas La Callezuela"),
    note: "Útil per a prendre alguna cosa o menjar; no confiar-hi per al desdejuni matinal.",
  },
  {
    id: "farmacia", name: "Farmàcia d’Illas", detail: "La Laguna · desplaçament en cotxe",
    phone: "+34985506267", phoneLabel: "985 506 267", map: maps("Farmacia La Laguna Illas Asturias"),
    note: "Per a urgències, 112. Mantindre la medicació de Lluís sempre accessible.",
  },
];

export const shops = [
  {
    id: "xalo", when: "Abans d’eixir · Xaló", note: "Sopar del Dia 1 + primers desdejunis",
    address: "Compra de casa · carregar dissabte 15", map: maps("Xaló Alicante"), web: "",
    items: "Pernil salat, 8–10 tomaques fermes, 600–700 g de pernil de pavo, anxoves, café, pa, 1 l de llet, 6 ous, encisam i olives. Afegir oli i sal només si El Casal no en té.", taskId: "dia1-picnic",
  },
  {
    id: "aviles", when: "Dl. 17 · 15:35 · Alimerka", note: "Compra principal per als Dies 2–4",
    address: "C. Cristóbal Colón · Avilés · 09:00–21:30 · tel. 984 849 131", map: maps("Alimerka Calle Cristóbal Colón Avilés"), web: "https://www.alimerka.es/area-cliente/localizador-de-supermercados/",
    items: "800 g de pollastre; 2 carabassetes; 2 pimentons; 1,5 kg de creïlles; encisam, tomaca, cogombre i olives; 4 l de llet; 8 iogurts; 2–3 barres o fogasses; 12 ous; companatge; pasta, arròs, tomaca, tonyina; 12 l d’aigua i ingredients dels pícnics. Caixa prevista: 65–85 €.", taskId: "compra-aviles",
  },
  {
    id: "prestin", when: "Dj. 20 · 17:55 · Alimerka", note: "Reposició per als Dies 5–7",
    address: "Parcel·la 211, El Prestín · Parres · 09:00–21:30 · aparcament de 135 places", map: maps("Alimerka El Prestín Parres Asturias"), web: "https://www.alimerka.es/supermercado/cangas-de-onis-prestin/",
    items: "700–800 g de llom; pa; encisam, tomaques, cogombre, carabasseta i pimentó; llet i iogurts; 300–400 g de pavo; aigua i crackers; pasta curta, tonyina, dacsa, olives i ous per al Dia 6; pizzes congelades i ensalada per al Dia 7. Caixa prevista: 50–65 €.", taskId: "compra-prestin",
  },
];

export const days: Day[] = [
  {
    id: 1, date: "Diumenge · 16 d’agost", shortDate: "dg. 16", title: "Xaló → Astúries", subtitle: "Arévalo i arribada a La Callezuela", kind: "ruta", icon: "↗", distance: "930–950 km", driving: "9 h 30–10 h", budget: "195–220 €", color: "amber",
    objective: "Fer el trajecte llarg amb parades útils, un pícnic tranquil a Arévalo i el sopar resolt abans d’arribar.",
    map: "https://www.google.com/maps/dir/Xal%C3%B3/Cafestore+Albacete/Belinch%C3%B3n/Ar%C3%A9valo/Rioseco+de+Tapia/Apartamentos+El+Casal,+Illas",
    weather: "Revisar DGT abans d’eixir: coincideix amb el final de l’operació especial del 15 d’agost.",
    schedule: [
      { time: "05:30", title: "Eixida de Xaló", note: "Depòsit ple; nevereta, sopar i medicació carregats al final.", map: maps("Xaló Alicante"), tag: "eixida" },
      { time: "07:50–08:20", title: "Desdejuni · Cafestore Albacete", note: "Café i torrades. Lavabos, canviador, aparcament i botiga; A-31, km 70,05.", map: maps("Cafestore Albacete A-31 km 70"), tag: "30 min" },
      { time: "10:15–10:35", title: "Belinchón · descans", note: "Entrepans portats de casa i estirar les cames abans de Madrid.", map: maps("Área de Servicio Belinchón La Pausa"), tag: "20 min" },
      { time: "12:50–13:30", title: "Arévalo · pícnic", note: "Zona verda pròxima al castell; truita ben quallada, empanada, pa, lactis i aigua.", map: maps("Castillo de Arévalo parking"), tag: "dinar" },
      { time: "13:30–14:35", title: "Passeig mudèjar", note: "2–2,5 km: castell exterior → Plaza de la Villa → San Martín → Plaza del Real → Arco de Alcocer.", map: maps("Plaza de la Villa Arévalo"), tag: "2,5 km" },
      { time: "14:40–14:50", title: "Repostatge · Beroil", note: "Posar 25–30 l abans de tornar a l’A-6; estació oberta 24 h.", map: maps("Beroil Arévalo"), tag: "low-cost" },
      { time: "17:00–17:15", title: "Rioseco de Tapia", note: "Lavabo, aigua, canvi de conductor i últim descans funcional.", map: maps("Área de Servicio Rioseco de Tapia AP-66"), tag: "15 min" },
      { time: "18:45–19:15", title: "Arribada a El Casal", note: "Avisar de l’hora real, descarregar, repartir habitacions i refrigerar el menjar.", map: maps("Apartamentos El Casal Illas"), tag: "arribada" },
      { time: "19:30–20:15", title: "Sopar d’arribada", note: "Ensalada, truita francesa, pernil de pavo a la planxa i pa; tot agrupat en una bossa accessible.", tag: "apartament" },
    ],
    walk: "Arévalo: recorregut circular curt de 2–2,5 km. El castell es veu per fora; entrar només si sobra temps i energia.",
    parking: "Aparcar prop del castell d’Arévalo. Pressupost 0 €. Si hi ha més d’una hora de retard, mantindre només el pícnic.",
    food: "Desdejuni fora; entrepà a Belinchón; pícnic a Arévalo; sopar preparat des de Xaló.",
    practical: ["Portar 5–6 l d’aigua", "Quatre acumuladors de fred", "No eliminar l’última parada si hi ha cansament", "Peatges previstos: AP-6 + AP-66, uns 31,90 €"],
    taskIds: ["casal-arribada", "tigu-revisio", "v16-docs", "rutes-offline", "dia1-picnic"], contactIds: ["casal"],
    planB: "Retard de 30–60 min: pícnic de 30 min i passeig de 35–40 min. Retard superior: Arévalo només per a menjar i descansar.",
    links: [{ label: "Trànsit DGT", href: "https://www.dgt.es/conoce-el-estado-del-trafico/informacion-e-incidencias-de-trafico/", kind: "web" }],
  },
  {
    id: 2, date: "Dilluns · 17 d’agost", shortDate: "dl. 17", title: "Avilés + Salinas", subtitle: "Arquitectura, primer dinar asturià i platja", kind: "ciutat", icon: "◫", distance: "55–65 km", driving: "1 h 20–1 h 40", budget: "70–95 €", color: "blue",
    objective: "Una jornada pròxima i flexible després del viatge: Avilés a peu, dinar a Yumay, compra principal, descans i Salinas a última hora.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/Centro+Niemeyer/Sidrer%C3%ADa+Yumay/Alimerka+Crist%C3%B3bal+Col%C3%B3n+Avil%C3%A9s/Apartamentos+El+Casal,+Illas/Playa+de+Salinas/Apartamentos+El+Casal,+Illas",
    weather: "Confirmar AEMET i la bandera el mateix dia; Salinas és una platja oberta i amb onatge.",
    schedule: [
      { time: "08:30–09:30", title: "Desdejuni a l’apartament", note: "Café i torrades de pa rústic amb tomaca i companatge; preparar motxilles de platja.", tag: "casa" },
      { time: "10:00", title: "Eixida cap a Avilés", note: "Trajecte curt; portar 2 € per si només està disponible el subterrani del Niemeyer.", tag: "25 min" },
      { time: "10:20–11:10", title: "Centro Niemeyer", note: "Plaça exterior, passarel·la sobre la ria i fotografies. La visita guiada és opcional.", map: maps("Centro Niemeyer Avilés"), tag: "gratuït" },
      { time: "11:10–13:35", title: "Avilés històric · 2,5–3 km", note: "Parc del Muelle → Sabugo → plaça d’Espanya → Ferreria → Galiana → parc de Ferrera.", map: maps("Plaza de España Avilés"), tag: "a peu" },
      { time: "13:35–14:00", title: "Trasllat a Villalegre", note: "Recollir el Tiguan i anar directament a Yumay; té aparcament privat.", map: maps("Sidrería Yumay Avilés"), tag: "cotxe" },
      { time: "14:00–15:30", title: "Dinar · Sidreria Yumay", note: "Menú/carta curta. Pressupost 45–60 €; preguntar per plats senzills i traces.", map: maps("Sidrería Yumay Avilés"), tag: "reserva" },
      { time: "15:35–16:05", title: "Compra · Alimerka", note: "Compra principal. Agafar refrigerats al final i posar-los immediatament a la nevereta.", map: maps("Alimerka Calle Cristóbal Colón Avilés"), tag: "30 min" },
      { time: "16:25–18:00", title: "Apartament · descans", note: "Refrigerar compra; coure creïlles, tallar verdura, preparar ensalada i deixar el pollastre condimentat.", map: maps("Apartamentos El Casal Illas"), tag: "pausa" },
      { time: "18:10–18:35", title: "Trajecte a Salinas", note: "Buscar lloc al carrer Pablo Laloux o als aparcaments pròxims al passeig.", map: maps("Calle Pablo Laloux Salinas Asturias"), tag: "25 min" },
      { time: "18:35–20:45", title: "Salinas + Museu de les Àncores", note: "Bany només amb bandera adequada; després, passeig exterior gratuït fins al mirador.", map: maps("Museo de las Anclas Philippe Cousteau Salinas"), tag: "platja" },
      { time: "21:15", title: "Sopar a l’apartament", note: "Pollastre i verdura a la planxa, ensalada i creïlles al vapor; preparació final ràpida.", tag: "casa" },
    ],
    walk: "Avilés: 2,5–3 km, pràcticament pla. Amb cansament: plaça d’Espanya → Galiana → parc de Ferrera.",
    parking: "Niemeyer exterior o subterrani (preveure 0–2 €). Alternativa: La Magdalena, gratuït, a uns 10 min a peu del centre.",
    food: "Dinar a Yumay. Sopar: pollastre, carabasseta i pimentó, ensalada i creïlles al vapor.",
    practical: ["Compra principal de 65–85 €", "Preparar el sopar abans d’anar a Salinas", "Muda seca de Cesc", "Posta de sol aproximada cap a les 21:24"],
    taskIds: ["yumay", "compra-aviles", "bany", "cesc-muda"], contactIds: ["yumay"],
    planB: "Pluja: visita guiada o exposicions del Niemeyer i sense Salinas. Bandera roja: passeig marítim i Museu de les Àncores, sense bany.",
    links: [{ label: "Centro Niemeyer", href: "https://www.centroniemeyer.es/", kind: "web" }, { label: "AEMET Avilés", href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/aviles-id33004", kind: "web" }],
  },
  {
    id: 3, date: "Dimarts · 18 d’agost", shortDate: "dt. 18", title: "Cudillero + cap Vidio", subtitle: "Costa occidental i San Pedro de la Ribera", kind: "costa", icon: "≈", distance: "135–145 km", driving: "2 h 35–3 h", budget: "48–64 €", color: "cyan",
    objective: "Combinar un poble mariner, penya-segats i una vesprada de platja, deixant la parada més exigent com a opcional.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/Cudillero/Cabo+Vidio/Playa+de+San+Pedro+de+la+Ribera/Playa+del+Silencio/Apartamentos+El+Casal,+Illas",
    weather: "Revisar vent i bandera abans d’eixir. El bany sempre depén del socorrisme.",
    schedule: [
      { time: "08:30–09:00", title: "Desdejuni i nevereta", note: "Torrades i café; preparar entrepans i complements amb la compra del dilluns.", tag: "casa" },
      { time: "09:35", title: "Eixida", note: "Portar impermeables, bany i calçat segur per als miradors.", tag: "eixida" },
      { time: "10:20–10:35", title: "Aparcar a Cudillero", note: "Aparcament del port regulat; arribar prompte perquè s’ompli a l’agost.", map: maps("Parking Puerto Cudillero"), tag: "2,50 €/dia" },
      { time: "10:35–12:40", title: "Cudillero · passeig curt", note: "Port i lletres → plaça de la Marina → Baluarte → El Picu només si Cesc porta bé les escales.", map: maps("Plaza de la Marina Cudillero"), tag: "2 h" },
      { time: "12:40–13:10", title: "Trajecte al cap Vidio", note: "Uns 25–30 min; carretera local en el tram final.", tag: "cotxe" },
      { time: "13:10–14:00", title: "Cap Vidio", note: "Far, penya-segats i entrada de la Iglesiona vista des de dalt. Cesc, sempre agafat.", map: maps("Faro de Cabo Vidio"), tag: "50 min" },
      { time: "14:15–15:10", title: "Pícnic · San Pedro", note: "Àrea recreativa: entrepans, olives, lactis, fruita adequada, crackers i aigua.", map: maps("Playa de San Pedro de la Ribera"), tag: "dinar" },
      { time: "15:10–18:10", title: "Platja de San Pedro", note: "Bany, jocs i descans; té aparcament, lavabos, dutxes i salvament.", map: maps("Playa de San Pedro de la Ribera"), tag: "platja" },
      { time: "18:10–18:30", title: "Dutxes i muda", note: "Berenar curt i valorar el cansament abans d’afegir l’última parada.", tag: "decisió" },
      { time: "18:30–19:35", title: "Platja del Silenci · opcional", note: "Només el mirador. No baixar a l’arena amb Cesc després de tot el dia.", map: maps("Mirador Playa del Silencio"), tag: "opcional" },
      { time: "21:15", title: "Sopar", note: "Pasta amb tomaca i tonyina, ensalada, pa i iogurt. Preparació: uns 20 min.", tag: "casa" },
    ],
    walk: "Cudillero: evitar la ruta completa de miradors. Fer dos miradors pròxims; El Picu només si les escales no carreguen Cesc.",
    parking: "Port de Cudillero: zona regulada, tarifa turística publicada de 2,50 €/dia. Cap Vidio i San Pedro: seguir senyalització local.",
    food: "Pícnic d’entrepans a San Pedro. Sopar ràpid de pasta, tomaca, tonyina i ensalada.",
    practical: ["No fer la ruta Entrecabos de 10,2 km", "Cesc sempre agafat als penya-segats", "La Platja del Silenci és el primer que s’elimina", "No cal supermercat"],
    taskIds: ["dia3-mar", "nevera", "bany", "cesc-muda"], contactIds: [],
    planB: "Pluja o vent: Cudillero amb impermeables, reduir miradors i eliminar el Silenci. Bandera roja: pícnic i jocs fora de l’aigua.",
    links: [{ label: "AEMET Cudillero", href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/cudillero-id33021", kind: "web" }, { label: "Turisme Cudillero", href: "https://www.turismocudillero.com/", kind: "web" }],
  },
  {
    id: 4, date: "Dimecres · 19 d’agost", shortDate: "dc. 19", title: "MUJA + Llastres", subtitle: "Dinosaures, poble mariner i Tazones", kind: "costa", icon: "◇", distance: "170–190 km", driving: "2 h 45–3 h 15", budget: "85–115 €", color: "mint",
    objective: "Aprofitar l’entrada gratuïta del dimecres al MUJA, dinar amb vista al Cantàbric i acabar en Tazones sense forçar les petjades.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/MUJA/Lastres/El+Cafet%C3%ADn,+Lastres/Tazones/Apartamentos+El+Casal,+Illas",
    weather: "La marea i l’estat del camí manen per a les petjades. Tazones té regulació d’accés i estacionament del 3 d’agost al 20 de setembre de 2026.",
    schedule: [
      { time: "07:15–08:00", title: "Desdejuni i preparació", note: "Invitacions del MUJA descarregades, impermeables i una bossa lleugera.", tag: "casa" },
      { time: "08:20", title: "Eixida cap al MUJA", note: "Uns 85–95 min; marge per aparcar i entrar sense presses.", tag: "eixida" },
      { time: "09:50–10:10", title: "Arribada i aparcament", note: "Aparcament gratuït del museu; mostrar invitacions al mòbil.", map: maps("Museo del Jurásico de Asturias MUJA"), tag: "gratuït" },
      { time: "10:10–12:25", title: "MUJA", note: "Exposició permanent per lliure i jardins amb reproduccions a escala real. Audioguia opcional.", map: maps("Museo del Jurásico de Asturias MUJA"), tag: "2 h 15" },
      { time: "12:25–12:45", title: "Jardí exterior", note: "Últimes fotografies i lavabo abans d’eixir cap a Llastres.", tag: "20 min" },
      { time: "12:45–13:05", title: "Trajecte a Llastres", note: "Aparcar abans d’entrar en els carrers estrets del nucli.", map: maps("Parking Lastres Asturias"), tag: "20 min" },
      { time: "13:05–14:05", title: "Llastres · passeig", note: "Mirador de San Roque → carrerons → port, ajustant l’ordre a l’aparcament.", map: maps("Mirador de San Roque Lastres"), tag: "1 h" },
      { time: "14:15–15:45", title: "Dinar · El Cafetín", note: "Reserva per als quatre. Confirmar al·lèrgies de Lluís i contaminació creuada.", map: maps("Restaurante El Cafetín Lastres"), tag: "reserva" },
      { time: "15:45–16:45", title: "Trajecte a Tazones", note: "Uns 45–55 min. Seguir la senyalització del nou accés regulat.", tag: "cotxe" },
      { time: "16:45–18:45", title: "Tazones", note: "Port, barris de San Miguel i San Roque, Casa de les Conquilles i passeig mariner.", map: maps("Parking Municipal Tazones"), tag: "2 h" },
      { time: "19:00", title: "Petjades · només si és segur", note: "Fer-les únicament amb marea i camí favorables; si hi ha dubtes, tornar.", map: maps("Huellas de dinosaurio Tazones"), tag: "opcional" },
      { time: "21:00", title: "Sopar lleuger", note: "Aprofitament de la compra: ensalada completa, companatge, pa i iogurt.", tag: "casa" },
    ],
    walk: "Llastres té costeres: prioritzar San Roque i el port. Tazones és curt i agradable, però les petjades no formen part del pla obligatori.",
    parking: "MUJA gratuït. Llastres: aparcar fora del nucli estret. Tazones: aparcament municipal regulat en les vostres dates; comprovar cartells i pagar en arribar.",
    food: "Dinar a El Cafetín. Sopar lleuger amb ensalada, pa, companatge i iogurt.",
    practical: ["Dimecres: MUJA gratuït amb invitació en línia", "Misión Dinotiempo és opcional i de pagament", "Tazones té regulació nova en agost de 2026", "No forçar les petjades"],
    taskIds: ["muja", "cafetin", "dia4-marea", "impermeables"], contactIds: ["muja", "cafetin"],
    planB: "Pluja: més temps a l’interior del MUJA i passejos mínims. Sense marea/camí segur: Tazones mariner i tornada directa, sense petjades.",
    links: [{ label: "Entrades MUJA", href: "https://www.museojurasicoasturias.com/entradas", kind: "web" }, { label: "Turisme Tazones", href: "https://www.turismovillaviciosa.es/playa/puerto-de-tazones/villaviciosa", kind: "web" }, { label: "AEMET Colunga", href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/colunga-id33019", kind: "web" }],
  },
  {
    id: 5, date: "Dijous · 20 d’agost", shortDate: "dj. 20", title: "Lagos de Covadonga", subtitle: "Picos de Europa, santuari i Cangas", kind: "natura", icon: "△", distance: "200–220 km", driving: "3 h 10–3 h 40", budget: "84–99 €", color: "green",
    objective: "Viure el paisatge més emblemàtic de Picos amb una ruta curta assumible per a Cesc i acabar a Covadonga i Cangas.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/Parking+P1+Cangas+de+On%C3%ADs/Santuario+de+Covadonga/Cangas+de+On%C3%ADs/Alimerka+El+Prest%C3%ADn/Apartamentos+El+Casal,+Illas",
    weather: "La visibilitat és més important que la temperatura. Revisar AEMET i càmeres dimarts 18 i dimecres 19.",
    schedule: [
      { time: "06:10–06:35", title: "Desdejuni i nevereta", note: "Café, torrades i pícnic preparat; bitllets i captures en els dos mòbils.", tag: "casa" },
      { time: "06:40", title: "Eixida", note: "Trajecte llarg fins a Cangas; no parar si no és necessari.", tag: "eixida" },
      { time: "08:10–08:25", title: "P1 Cangas de Onís", note: "Aparcar (3 €), lavabo i línia groga. Arribar 20 min abans del bus.", map: maps("Parking P1 Estación de Autobuses Cangas de Onís"), tag: "P1" },
      { time: "08:30–09:00", title: "Bus als Lagos", note: "Pujar a l’hora exacta reservada. El bitllet familiar costa 25 €.", tag: "reserva" },
      { time: "09:10–09:40", title: "Buferrera", note: "Abric lleuger, crema solar, orientació i inici de la ruta curta.", map: maps("Buferrera Lagos de Covadonga"), tag: "1.100 m" },
      { time: "10:00–12:15", title: "Ruta curta familiar", note: "Pedro Pidal → mirador del Príncep → mines → Ercina → Entrelagos → Enol → Buferrera.", map: maps("Centro de Visitantes Pedro Pidal"), tag: "3 km" },
      { time: "12:15–13:00", title: "Pícnic", note: "Zona recreativa; 4–5 l d’aigua. No beure de fonts no controlades.", tag: "dinar" },
      { time: "13:15–14:00", title: "Baixada a Covadonga", note: "Usar l’hora reservada; el retorn permet baixar al Real Sitio.", tag: "bus" },
      { time: "14:00–15:25", title: "Covadonga", note: "Santa Cova, basílica, explanada i fotografies sense presses.", map: maps("Santuario de Covadonga"), tag: "1 h 25" },
      { time: "15:30–16:00", title: "Llançadora fins a P1", note: "Inclosa en el bitllet dels Lagos; parada davant de la basílica.", tag: "inclosa" },
      { time: "16:00–17:50", title: "Cangas de Onís", note: "Pont medieval, centre, capella de Santa Cruz i berenar controlat.", map: maps("Puente Romano Cangas de Onís"), tag: "passeig" },
      { time: "17:55–18:25", title: "Reposició · El Prestín", note: "Compra curta per al sopar, Dia 6 i Dia 7; refrigerats dins de la nevereta.", map: maps("Alimerka El Prestín Parres Asturias"), tag: "30 min" },
      { time: "20:30", title: "Sopar", note: "Llom a la planxa, arròs blanc i ensalada. Dutxes i descans prompte.", tag: "casa" },
    ],
    walk: "Ruta curta PR-PNPE 2: uns 3 km i 1 h en moviment; amb parades, 2–2 h 15. No fer la circular llarga de 5 km.",
    parking: "P1 Estació d’Autobusos: 3 €/dia i unes 400 places. En dies forts, aparcar pot retardar-se; arribar amb marge real.",
    food: "Pícnic als Lagos. Sopar de llom, arròs i ensalada. Compra de reposició de 50–65 €.",
    practical: ["Bus: 9 € adult i 3,50 € xiquet de 4–11 anys", "Estada mínima als Lagos: 2 h 30", "Calçat adherent i capa fina", "Cesc sempre prop d’un adult amb pedra o boira"],
    taskIds: ["lagos", "dia5-meteo", "compra-prestin", "impermeables", "nevera"], contactIds: ["lagos"],
    planB: "Boira o ruixats febles: ruta curta i Centre Pedro Pidal. Pluja persistent/vent: intercanviar amb Oviedo abans que escassegen bitllets.",
    links: [{ label: "Comprar bus", href: "https://www.buslagoscovadonga.es/", kind: "web" }, { label: "AEMET Cangas", href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/cangas-de-onis-id33012", kind: "web" }],
  },
  {
    id: 6, date: "Divendres · 21 d’agost", shortDate: "dv. 21", title: "Ribadesella + Llanes", subtitle: "Cuevas del Mar i sopar fora", kind: "costa", icon: "≋", distance: "240–250 km", driving: "3 h 15–3 h 40", budget: "105–134 €", color: "sky",
    objective: "Un matí còmode a Ribadesella, pícnic i platja en Cuevas del Mar i un final especial passejant i sopant a Llanes.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/Ribadesella/Playa+de+Cuevas+del+Mar/Llanes/Sidrer%C3%ADa+El+Puerto,+Llanes/Apartamentos+El+Casal,+Illas",
    weather: "Revisar AEMET, bandera i marees. Les roques de Cuevas del Mar rellisquen quan estan mullades.",
    schedule: [
      { time: "08:15–09:15", title: "Desdejuni i nevereta", note: "Café i torrades; carregar l’ensalada de pasta ben freda i en recipient hermètic.", tag: "casa" },
      { time: "09:30", title: "Eixida", note: "Trajecte per l’A-8 fins a Ribadesella.", tag: "eixida" },
      { time: "10:50–11:05", title: "Aparcar a Ribadesella", note: "Campu Les Rolles o prop de l’estació d’autobusos.", map: maps("Parking Campu Les Rolles Ribadesella"), tag: "parking" },
      { time: "11:05–12:45", title: "Ribadesella · 2,5–3 km", note: "Plaça Nueva → nucli antic → port i Grúa → pont del Sella → primer tram de Santa Marina.", map: maps("Paseo de la Grúa Ribadesella"), tag: "a peu" },
      { time: "12:45–13:10", title: "Trajecte a Cuevas del Mar", note: "Uns 13 km; seguir l’accés rodat fins a l’aparcament de la platja.", tag: "25 min" },
      { time: "13:10–13:35", title: "Instal·lar-se", note: "Aparcar, lavabo, comprovar bandera i triar una zona segura.", map: maps("Playa de Cuevas del Mar"), tag: "platja" },
      { time: "13:35–14:15", title: "Pícnic", note: "Ensalada de pasta amb tonyina, dacsa, olives, ou i tomaca; lactis, crackers i aigua.", tag: "dinar" },
      { time: "14:15–17:00", title: "Cuevas del Mar", note: "Bany, arcs i coves entre roques. Cesc sempre acompanyat entre les formacions.", map: maps("Playa de Cuevas del Mar"), tag: "2 h 45" },
      { time: "17:00–17:25", title: "Dutxes i muda", note: "Berenar curt abans dels 18 km fins a Llanes.", tag: "25 min" },
      { time: "17:50–20:00", title: "Llanes", note: "San Pedro → Sablón → muralla i basílica → carrer Major → port → Cubos de la Memoria.", map: maps("Parking El Sablón Llanes"), tag: "passeig" },
      { time: "20:00–21:15", title: "Sopar · El Puerto", note: "Taula reservada davant del port; cuina asturiana, peix, racions i cachopos.", map: maps("Sidrería Restaurante El Puerto Llanes"), tag: "reserva" },
      { time: "21:20–22:50", title: "Tornada", note: "Eixida directa a La Callezuela i descans.", tag: "1 h 30" },
    ],
    walk: "Ribadesella: no pujar a l’ermita de la Guía. Llanes: recorregut lineal curt des d’El Sablón fins als Cubos.",
    parking: "Ribadesella: Campu Les Rolles. Llanes: primer El Sablón; si està complet, La Talá o zona IES Alfonso IX.",
    food: "Pícnic d’ensalada de pasta a Cuevas del Mar. Sopar a El Puerto, 55–70 €.",
    practical: ["350–400 g de pasta seca per als quatre", "Portar bols i quatre forquetes", "No cal supermercat", "Muda seca de Cesc"],
    taskIds: ["puerto", "dia6-pasta", "dia6-marea", "bany", "cesc-muda"], contactIds: ["puerto"],
    planB: "Pluja: Ribadesella + Centre d’Art Rupestre Tito Bustillo + Llanes. Cesc pot entrar al centre, però no a la cova original (mínim 7 anys).",
    links: [{ label: "AEMET Llanes", href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/llanes-id33036", kind: "web" }, { label: "Tito Bustillo", href: "https://www.centrotitobustillo.com/", kind: "web" }],
  },
  {
    id: 7, date: "Dissabte · 22 d’agost", shortDate: "ds. 22", title: "Oviedo + Naranco", subtitle: "Preromànic, centre històric i sidreria", kind: "ciutat", icon: "⌂", distance: "65–75 km", driving: "1 h 35–1 h 55", budget: "108–139 €", color: "violet",
    objective: "Últim dia complet amb poca carretera: monuments preromànics, centre històric, dinar asturià i tornada prompte per fer maletes.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/Santa+Mar%C3%ADa+del+Naranco/Parking+Salesas/Sidrer%C3%ADa+El+Pig%C3%BCe%C3%B1a/Apartamentos+El+Casal,+Illas",
    weather: "Si plou al matí, començar pel centre i Museu de Belles Arts; passar el Naranco a la franja de vesprada si millora.",
    schedule: [
      { time: "08:30–09:00", title: "Desdejuni", note: "Café i torrades; motxilla lleugera amb aigua, impermeables i capa fina.", tag: "casa" },
      { time: "09:15", title: "Eixida", note: "Trajecte curt fins al Monte Naranco.", tag: "eixida" },
      { time: "09:50", title: "Aparcament del Naranco", note: "Aparcament gratuït davant dels monuments. Entrades a Santa María.", map: maps("Parking Santa María del Naranco"), tag: "gratuït" },
      { time: "10:00–11:10", title: "Santa María + San Miguel", note: "Visita conjunta guiada d’uns 40 min; no cal reserva individual obligatòria.", map: maps("Santa María del Naranco Oviedo"), tag: "5 €/persona" },
      { time: "11:10–11:35", title: "Miradors", note: "Crist amb el Tiguan només amb cel clar i sense retard.", map: maps("Monumento al Sagrado Corazón Monte Naranco"), tag: "opcional" },
      { time: "11:40–12:05", title: "Baixada a Oviedo", note: "Aparcar a Salesas, General Elorza 75; uns 10–12 min a peu de Gascona.", map: maps("Parking Salesas Oviedo"), tag: "9,50 €" },
      { time: "12:15–13:30", title: "Centre històric", note: "Catedral i Alfonso II → Trascorrales → Constitució → El Fontán.", map: maps("Catedral de Oviedo"), tag: "a peu" },
      { time: "13:45–15:15", title: "Dinar · El Pigüeña", note: "Reserva al carrer Gascona 2. Menú de migdia i carta asturiana.", map: maps("Sidrería El Pigüeña Gascona Oviedo"), tag: "reserva" },
      { time: "15:20–17:30", title: "Oviedo a peu", note: "El Fontán → Ajuntament → Campo de San Francisco i Mafalda → Escandalera → Uría.", map: maps("Estatua de Mafalda Oviedo"), tag: "passeig" },
      { time: "18:30–19:00", title: "Apartament", note: "Descans, dutxes, maletes i deixar a mà només roba i pícnic del Dia 8.", tag: "organitzar" },
      { time: "20:30", title: "Sopar", note: "Pizzes congelades amb ensalada; última nit sense compra ni cuina complicada.", tag: "casa" },
    ],
    walk: "Centre: Catedral → Trascorrales → Ajuntament → El Fontán → Campo de San Francisco → Escandalera → Uría.",
    parking: "Naranco gratuït. Oviedo: Parking Salesas, General Elorza 75; tarifa màxima prevista de 9,50 €.",
    food: "Dinar a El Pigüeña. Sopar fàcil de pizzes congelades i ensalada.",
    practical: ["Naranco: 5 €/persona", "Famílies: reserva no obligatòria", "Catedral: 16 € per als dos adults si entreu", "Preparar maletes en tornar"],
    taskIds: ["piguena", "dia7-oratge", "dia7-maletes", "impermeables"], contactIds: ["naranco", "piguena"],
    planB: "Pluja: Catedral + Museu de Belles Arts (gratuït) + dinar. Naranco a partir de les 15:30 si millora; sense Crist si continua tapat.",
    links: [{ label: "Visita Naranco", href: "https://www.santamariadelnaranco.es/", kind: "web" }, { label: "AEMET Oviedo", href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/oviedo-id33044", kind: "web" }],
  },
  {
    id: 8, date: "Diumenge · 23 d’agost", shortDate: "dg. 23", title: "Astúries → Xaló", subtitle: "Tornada amb pícnic i parades curtes", kind: "ruta", icon: "↙", distance: "900–930 km", driving: "9 h 30–10 h", budget: "135–150 €", color: "coral",
    objective: "Tornar amb parades cada dues hores aproximadament, sense visites i prioritzant arribar segurs i amb el mínim cansament.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/Le%C3%B3n/Medina+del+Campo/Honrubia/Xal%C3%B3",
    weather: "Consultar DGT abans d’eixir, especialment accessos a Madrid i arribada a la costa valenciana.",
    schedule: [
      { time: "06:45", title: "Últim repàs", note: "Dutxes, habitacions, banys, endolls i objectes dels xiquets.", tag: "casa" },
      { time: "07:00", title: "Desdejuni", note: "Torrades i café; pa amb tomaca o companatge per a Lluís i Cesc.", tag: "casa" },
      { time: "07:30", title: "Carregar i claus", note: "Nevereta al final, baixar fem i acordar l’entrega de claus.", tag: "30 min" },
      { time: "07:45", title: "Eixida", note: "Tiguan repostat des del dissabte i bossa accessible dins de l’habitacle.", map: maps("Apartamentos El Casal Illas"), tag: "eixida" },
      { time: "09:30–09:50", title: "Zona de Lleó", note: "Café, lavabo i estirar les cames; parada curta.", map: maps("Área de servicio León A-66"), tag: "20 min" },
      { time: "12:00–12:45", title: "Medina del Campo / Rueda", note: "Pícnic de tornada i descans sense superar 45 minuts.", map: maps("Área de servicio Medina del Campo A-6"), tag: "dinar" },
      { time: "14:30", title: "Abans de Madrid · opcional", note: "Només si els xiquets ho necessiten o hi ha retenció.", tag: "opcional" },
      { time: "17:00–17:25", title: "Honrubia · Moya", note: "Cafeteria, lavabos, aparcament gratuït i servei 24 h.", map: maps("Hotel Restaurante Moya Honrubia"), tag: "25 min" },
      { time: "19:30–20:15", title: "Arribada a Xaló", note: "Descarregar només l’essencial i deixar la resta per a l’endemà.", map: maps("Xaló Alicante"), tag: "arribada" },
      { time: "20:15", title: "Sopar fàcil", note: "Pizzes congelades i ensalada que hauran quedat preparades a Xaló.", tag: "casa" },
    ],
    walk: "No hi ha visites previstes. En cada parada, lavabo i 5–10 minuts caminant abans de continuar.",
    parking: "Parades en àrees de servei. Peatges AP-66 i AP-6: aproximadament 31,90 €.",
    food: "Pícnic en ruta; café/berenar a Honrubia; sopar preparat a Xaló.",
    practical: ["Repostar dissabte", "Bossa accessible de Cesc", "No superar 2–2,5 h seguides", "Adaptar les parades al trànsit real"],
    taskIds: ["dia7-maletes", "dia8-cotxe", "dia8-picnic", "casal-arribada"], contactIds: ["casal"],
    planB: "Les hores són orientatives. Afegir una parada si hi ha cansament; eliminar només les parades opcionals, mai un descans necessari.",
    links: [{ label: "Trànsit DGT", href: "https://www.dgt.es/conoce-el-estado-del-trafico/informacion-e-incidencias-de-trafico/", kind: "web" }],
  },
];
