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
  { id: "yumay", label: "Mesón de Furacu confirmat · dilluns 17 · 14:00 · 4 persones", group: "reserves" },
  { id: "muja", label: "MUJA confirmat · dimecres 19 · entrada a les 13:00 · 4 persones", group: "reserves" },
  { id: "cafetin", label: "El Cafetín confirmat · dimecres 19 · 14:00 · 4 persones", group: "reserves" },
  { id: "lagos", label: "Bitllets ALSA comprats · divendres 21 · 12:00 / 16:50", group: "reserves" },
  { id: "puerto", label: "Arribar a La Amistad abans de les 19:45 · terrassa sense reserva", group: "reserves" },
  { id: "piguena", label: "Sidrería Pichote confirmada · dissabte 22 · 14:00 · 4 persones", group: "reserves" },
  { id: "impermeables", label: "Impermeables i capes fines per als quatre", group: "maleta" },
  { id: "bany", label: "Banyadors, tovalloles, gorres i crema solar", group: "maleta" },
  { id: "cesc-muda", label: "Calçat segur i muda seca de Cesc", group: "maleta" },
  { id: "nevera", label: "Motxilla o nevereta refrigerant, quatre acumuladors, botelles, servilletes i manta de pícnic", group: "maleta" },
  { id: "medicacio", label: "Medicació accessible i menjar de Lluís separat i identificat", group: "maleta" },
  { id: "mobils-carregadors", label: "Mòbils i carregadors dels mòbils", group: "maleta" },
  { id: "rellotges-carregadors", label: "Rellotges i carregadors dels rellotges", group: "maleta" },
  { id: "bateries-externes", label: "Bateries externes carregades i cables", group: "maleta" },
  { id: "portatil", label: "Portàtil i carregador", group: "maleta" },
  { id: "manuelles", label: "Dues manuelles de 5 kg per al pla curt de força", group: "maleta" },
  { id: "dia1-picnic", label: "Preparar entrepans, pícnic d’Arévalo i sopar d’arribada", group: "dia" },
  { id: "compra-aviles", label: "Compra principal feta a l’Alimerka de Cristóbal Colón", group: "dia" },
  { id: "dia3-mar", label: "Revisar AEMET, vent i bandera de San Pedro", group: "dia" },
  { id: "dia4-marea", label: "Revisar marea i accés a les petjades 3–4 dies abans", group: "dia" },
  { id: "dia5-meteo", label: "Revisar visibilitat i càmeres dels Lagos el dia anterior", group: "dia" },
  { id: "compra-prestin", label: "Reposició feta a l’Alimerka d’Avilés al final del Dia 4", group: "dia" },
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
    id: "yumay", name: "Mesón de Furacu", detail: "C. Primero de Mayo, 3 · Las Vegas, Corvera d’Astúries",
    phone: "+34984832951", phoneLabel: "984 832 951", web: "https://www.facebook.com/ElmesondeFuracu/", map: maps("Mesón de Furacu Primero de Mayo 3 Asturias"),
    note: "Reserva confirmada · dilluns 17 · 14:00 · 4 persones. Valoració 4,5/5 amb unes 180 opinions.",
  },
  {
    id: "muja", name: "MUJA", detail: "Rasa de San Telmo · Colunga",
    phone: "+34985185860", phoneLabel: "985 185 860", web: "https://www.museojurasicoasturias.com/entradas", map: maps("Museo del Jurásico de Asturias MUJA"),
    note: "Reserva confirmada · dimecres 19 · entrada a les 13:00 · 4 persones. Accés gratuït amb invitació.",
  },
  {
    id: "cafetin", name: "El Cafetín", detail: "C. Matemático Pedrayes, s/n · Llastres",
    phone: "+34679817804", phoneLabel: "679 817 804", web: "https://www.instagram.com/restauranteelcafetin_lastres/", map: maps("Restaurante El Cafetín Lastres Asturias"),
    note: "Reserva confirmada · dimecres 19 · 14:00 · 4 persones. Avisar de les al·lèrgies de Lluís i la contaminació creuada.",
  },
  {
    id: "lagos", name: "Bus Lagos de Covadonga", detail: "Eixida P1 · Estació d’autobusos de Cangas de Onís",
    phone: "+34985848614", phoneLabel: "985 848 614", web: "https://www.buslagoscovadonga.es/", map: maps("Parking P1 Estación de Autobuses Cangas de Onís"),
    note: "Compra confirmada · divendres 21 · P1 12:00 → Lagos 12:50 · tornada 16:50. Total: 25,50 €; P1: 3 €. Arribar 30 minuts abans.",
  },
  {
    id: "puerto", name: "Bar Sidrería La Amistad", detail: "C. Cueto Bajo, 8 · Llanes",
    phone: "+34985400893", phoneLabel: "985 400 893", web: "https://www.llanes.es/es/content/donde-comer-sidreria/bar-sidreria-la-amistad", map: maps("Bar Sidrería La Amistad Llanes"),
    note: "Dijous 20 · terrassa sense reserva i per orde d’arribada. Estar allí obligatòriament a les 19:45.",
  },
  {
    id: "naranco", name: "Santa María del Naranco", detail: "Av. de los Monumentos · Oviedo",
    phone: "+34638260163", phoneLabel: "638 260 163", web: "https://www.santamariadelnaranco.es/", map: maps("Santa María del Naranco Oviedo"),
    note: "Visita conjunta guiada d’uns 40 min; 5 €/persona. Una família no necessita reserva obligatòria.",
  },
  {
    id: "piguena", name: "Sidrería Pichote", detail: "Pl. Gabino Díaz Merchán, s/n · La Florida, Oviedo",
    phone: "+34984282927", phoneLabel: "984 282 927", web: "https://elpichote.com/", map: maps("Sidrería Pichote Oviedo"),
    note: "Reserva confirmada · dissabte 22 · 14:00 · 4 persones. Cachopos, cuina asturiana i opcions sense gluten.",
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
    items: "Pernil salat, 8–10 tomaques fermes, 600–700 g de pernil de pavo, anxoves, café, pa, 1 l de llet, 6 ous, encisam, olives, fideus, caldo de pollastre, servilletes i bosses per als residus. Afegir oli i sal només si El Casal no en té.", taskId: "dia1-picnic",
  },
  {
    id: "aviles", when: "Dl. 17 · 15:35 · Alimerka", note: "Compra principal per als Dies 2–4",
    address: "C. Cristóbal Colón · Avilés · 09:00–21:30 · tel. 984 849 131", map: maps("Alimerka Calle Cristóbal Colón Avilés"), web: "https://www.alimerka.es/area-cliente/localizador-de-supermercados/",
    items: "Salmó i bròcoli per al Dia 3; pollastre i altra carn; encisam, tomaca, olives i formatge fresc; llet, iogurts o formatgets, pa, ous, pavo, pasta, arròs, tonyina, dacsa, fruita compatible, aigua, sucs i crackers simples o de pizza. Caixa prevista: 70–90 €.", taskId: "compra-aviles",
  },
  {
    id: "prestin", when: "Dc. 19 · 20:10 · Alimerka Avilés", note: "Reposició curta per als Dies 5–7",
    address: "C. Cristóbal Colón · Avilés · obert fins a les 21:30", map: maps("Alimerka Calle Cristóbal Colón Avilés"), web: "https://www.alimerka.es/area-cliente/localizador-de-supermercados/",
    items: "Llom per als entrepans dels adults i el sopar; pa, pernil salat, pavo i anxoves; encisam, tomaca, olives i formatge fresc; llet, iogurts o formatgets, fruita compatible, aigua, sucs i crackers. Caixa prevista: 35–50 €.", taskId: "compra-prestin",
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
      { time: "12:50–13:30", title: "Arévalo · pícnic", note: "Adults: truita ben quallada. Lluís: entrepà de pernil salat. Cesc: pavo amb anxova. Afegir olives, lactis, fruita compatible, suc, crackers i aigua.", map: maps("Castillo de Arévalo parking"), tag: "dinar" },
      { time: "13:30–14:35", title: "Passeig mudèjar", note: "2–2,5 km: castell exterior → Plaza de la Villa → San Martín → Plaza del Real → Arco de Alcocer.", map: maps("Plaza de la Villa Arévalo"), tag: "2,5 km" },
      { time: "14:40–14:50", title: "Repostatge · Beroil", note: "Posar 25–30 l abans de tornar a l’A-6; estació oberta 24 h.", map: maps("Beroil Arévalo"), tag: "low-cost" },
      { time: "17:00–17:15", title: "Rioseco de Tapia", note: "Lavabo, aigua, canvi de conductor i últim descans funcional.", map: maps("Área de Servicio Rioseco de Tapia AP-66"), tag: "15 min" },
      { time: "18:45–19:15", title: "Arribada a El Casal", note: "Avisar de l’hora real, descarregar, repartir habitacions i refrigerar el menjar.", map: maps("Apartamentos El Casal Illas"), tag: "arribada" },
      { time: "19:15–19:25", title: "Activació suau · Dia 1", note: "Dues voltes: 10 esquats, 8 flexions inclinades, 12 ponts de glutis i planxa de 20 segons. Només per activar el cos després del cotxe.", tag: "exercici · 8–10 min" },
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
    objective: "Una jornada pròxima i flexible després del viatge: Avilés a peu, dinar confirmat al Mesón de Furacu, compra principal, descans i Salinas a última hora.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/Centro+Niemeyer/Mes%C3%B3n+de+Furacu,+Calle+Primero+de+Mayo,+Asturias/Alimerka+Crist%C3%B3bal+Col%C3%B3n+Avil%C3%A9s/Apartamentos+El+Casal,+Illas/Playa+de+Salinas/Apartamentos+El+Casal,+Illas",
    weather: "Confirmar AEMET i la bandera el mateix dia; Salinas és una platja oberta i amb onatge.",
    schedule: [
      { time: "08:05–08:25", title: "Força A · Dia 2", note: "Dues voltes: 12 esquats amb 2×5 kg, 8–10 flexions, 12 rems, 12 ponts de glutis, 10 press d’espatles i planxa de 25 segons. Descansar 45–60 segons.", tag: "exercici · 18–20 min" },
      { time: "08:30–09:30", title: "Desdejuni a l’apartament", note: "Café i torrades de pa rústic amb tomaca i companatge; preparar motxilles de platja.", tag: "casa" },
      { time: "10:00", title: "Eixida cap a Avilés", note: "Trajecte curt; portar 2 € per si només està disponible el subterrani del Niemeyer.", tag: "25 min" },
      { time: "10:20–11:10", title: "Centro Niemeyer", note: "Plaça exterior, passarel·la sobre la ria i fotografies. La visita guiada és opcional.", map: maps("Centro Niemeyer Avilés"), tag: "gratuït" },
      { time: "11:10–13:35", title: "Avilés històric · 2,5–3 km", note: "Parc del Muelle → Sabugo → plaça d’Espanya → Ferreria → Galiana → parc de Ferrera.", map: maps("Plaza de España Avilés"), tag: "a peu" },
      { time: "13:35–14:00", title: "Trasllat a Las Vegas", note: "Recollir el Tiguan i anar directament a Mesón de Furacu. La reserva és per a quatre.", map: maps("Mesón de Furacu Primero de Mayo 3 Asturias"), tag: "cotxe" },
      { time: "14:00–15:30", title: "Dinar · Mesón de Furacu", note: "Reserva confirmada. Menú del dia i cuina asturiana; avisar de les al·lèrgies de Lluís abans de demanar.", map: maps("Mesón de Furacu Primero de Mayo 3 Asturias"), tag: "confirmat" },
      { time: "15:35–16:05", title: "Compra · Alimerka", note: "Compra principal. Agafar refrigerats al final i posar-los immediatament a la nevereta.", map: maps("Alimerka Calle Cristóbal Colón Avilés"), tag: "30 min" },
      { time: "16:25–18:00", title: "Apartament · descans", note: "Refrigerar compra; coure creïlles, tallar verdura, preparar ensalada i deixar el pollastre condimentat.", map: maps("Apartamentos El Casal Illas"), tag: "pausa" },
      { time: "18:10–18:35", title: "Trajecte a Salinas", note: "Buscar lloc al carrer Pablo Laloux o als aparcaments pròxims al passeig.", map: maps("Calle Pablo Laloux Salinas Asturias"), tag: "25 min" },
      { time: "18:35–20:45", title: "Salinas + Museu de les Àncores", note: "Bany només amb bandera adequada; després, passeig exterior gratuït fins al mirador.", map: maps("Museo de las Anclas Philippe Cousteau Salinas"), tag: "platja" },
      { time: "21:15", title: "Sopar a l’apartament", note: "Adults i Cesc: pollastre, verdura a la planxa i ensalada. Lluís: altra carn a la planxa amb verdura. Preparació final ràpida.", tag: "casa" },
    ],
    walk: "Avilés: 2,5–3 km, pràcticament pla. Amb cansament: plaça d’Espanya → Galiana → parc de Ferrera.",
    parking: "Niemeyer exterior o subterrani (preveure 0–2 €). Alternativa: La Magdalena, gratuït, a uns 10 min a peu del centre.",
    food: "Dinar confirmat al Mesón de Furacu. Sopar: adults i Cesc, pollastre i verdura; Lluís, altra carn a la planxa.",
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
      { time: "08:15–08:23", title: "Mobilitat · Dia 3", note: "Mobilitat de maluc, esquena i espatles, més 2×10 esquats suaus. Sense sessió forta abans de la jornada de costa.", tag: "exercici · 8 min" },
      { time: "08:30–09:00", title: "Desdejuni i nevereta", note: "Torrades i café; preparar entrepans i complements amb la compra del dilluns.", tag: "casa" },
      { time: "09:35", title: "Eixida", note: "Portar impermeables, bany i calçat segur per als miradors.", tag: "eixida" },
      { time: "10:20–10:35", title: "Aparcar a Cudillero", note: "Aparcament del port regulat; arribar prompte perquè s’ompli a l’agost.", map: maps("Parking Puerto Cudillero"), tag: "2,50 €/dia" },
      { time: "10:35–12:40", title: "Cudillero · passeig curt", note: "Port i lletres → plaça de la Marina → Baluarte → El Picu només si Cesc porta bé les escales.", map: maps("Plaza de la Marina Cudillero"), tag: "2 h" },
      { time: "12:40–13:10", title: "Trajecte al cap Vidio", note: "Uns 25–30 min; carretera local en el tram final.", tag: "cotxe" },
      { time: "13:10–14:00", title: "Cap Vidio", note: "Far, penya-segats i entrada de la Iglesiona vista des de dalt. Cesc, sempre agafat.", map: maps("Faro de Cabo Vidio"), tag: "50 min" },
      { time: "14:15–15:10", title: "Pícnic · San Pedro", note: "Adults i Lluís: truita francesa + anxova + tomaca. Cesc: pavo + anxova. Afegir olives, lactis, crackers, fruita adequada i aigua.", map: maps("Playa de San Pedro de la Ribera"), tag: "dinar" },
      { time: "15:10–18:10", title: "Platja de San Pedro", note: "Bany, jocs i descans; té aparcament, lavabos, dutxes i salvament.", map: maps("Playa de San Pedro de la Ribera"), tag: "platja" },
      { time: "18:10–18:30", title: "Dutxes i muda", note: "Berenar curt i valorar el cansament abans d’afegir l’última parada.", tag: "decisió" },
      { time: "18:30–19:35", title: "Platja del Silenci · opcional", note: "Només el mirador. No baixar a l’arena amb Cesc després de tot el dia.", map: maps("Mirador Playa del Silencio"), tag: "opcional" },
      { time: "21:15", title: "Sopar", note: "Adults: salmó a la planxa amb bròcoli i un poc de pa. Lluís i Cesc: fideus amb caldo de pollastre portats de Xaló.", tag: "casa" },
    ],
    walk: "Cudillero: evitar la ruta completa de miradors. Fer dos miradors pròxims; El Picu només si les escales no carreguen Cesc.",
    parking: "Port de Cudillero: zona regulada, tarifa turística publicada de 2,50 €/dia. Cap Vidio i San Pedro: seguir senyalització local.",
    food: "Pícnic personalitzat a San Pedro. Sopar: salmó amb bròcoli per als adults i fideus amb caldo per als xiquets.",
    practical: ["No fer la ruta Entrecabos de 10,2 km", "Cesc sempre agafat als penya-segats", "La Platja del Silenci és el primer que s’elimina", "No cal supermercat"],
    taskIds: ["dia3-mar", "nevera", "bany", "cesc-muda"], contactIds: [],
    planB: "Pluja o vent: Cudillero amb impermeables, reduir miradors i eliminar el Silenci. Bandera roja: pícnic i jocs fora de l’aigua.",
    links: [{ label: "AEMET Cudillero", href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/cudillero-id33021", kind: "web" }, { label: "Turisme Cudillero", href: "https://www.turismocudillero.com/", kind: "web" }],
  },
  {
    id: 4, date: "Dimecres · 19 d’agost", shortDate: "dc. 19", title: "MUJA + Llastres", subtitle: "Dinosaures, poble mariner i Tazones", kind: "costa", icon: "◇", distance: "170–190 km", driving: "2 h 45–3 h 15", budget: "85–115 €", color: "mint",
    objective: "Aprofitar l’entrada confirmada del MUJA a les 13:00, arribar puntuals a El Cafetín a les 14:00 i completar la vesprada entre Llastres i Tazones sense forçar les petjades.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/MUJA/Lastres/El+Cafet%C3%ADn,+Lastres/Tazones/Apartamentos+El+Casal,+Illas",
    weather: "La marea i l’estat del camí manen per a les petjades. Tazones té regulació d’accés i estacionament del 3 d’agost al 20 de setembre de 2026.",
    schedule: [
      { time: "08:45–08:53", title: "Descans actiu · Dia 4", note: "Cinc a huit minuts d’estiraments suaus. Hui no hi ha força: els passejos de Llastres i Tazones completen l’activitat.", tag: "exercici · 5–8 min" },
      { time: "09:00–09:40", title: "Desdejuni i preparació", note: "Invitacions del MUJA descarregades als dos mòbils, impermeables i una bossa lleugera.", tag: "casa" },
      { time: "10:00", title: "Eixida cap al MUJA", note: "Uns 85–95 min. No cal matinar, però convé protegir el marge abans de la franja reservada.", tag: "eixida" },
      { time: "11:30–11:45", title: "Arribada i aparcament", note: "Aparcament gratuït del museu; localitzar l’accés i comprovar les quatre invitacions.", map: maps("Museo del Jurásico de Asturias MUJA"), tag: "gratuït" },
      { time: "11:45–12:40", title: "Jardí exterior", note: "Reproduccions de dinosaures a escala real, vistes de la costa i fotografies. Fer ara l’exterior perquè l’entrada interior és a les 13:00.", map: maps("Jardines del MUJA Asturias"), tag: "55 min" },
      { time: "12:40–12:55", title: "Preparar l’entrada", note: "Lavabo, aigua i estar a la porta amb antelació. Només es pot accedir en la franja indicada en l’entrada.", tag: "reserva" },
      { time: "13:00–13:40", title: "MUJA", note: "Entrada confirmada per als quatre. Visita interior concentrada: Triàsic, Juràssic, Cretaci i peces essencials. A les 13:40 cal eixir cap al restaurant.", map: maps("Museo del Jurásico de Asturias MUJA"), tag: "confirmat" },
      { time: "13:40–14:00", title: "Trajecte a El Cafetín", note: "Eixida directa a Llastres i aparcament pròxim. No afegir cap parada entre el museu i el restaurant.", map: maps("Restaurante El Cafetín Lastres"), tag: "20 min" },
      { time: "14:00–15:30", title: "Dinar · El Cafetín", note: "Reserva confirmada per als quatre. Avisar de les al·lèrgies de Lluís abans de demanar.", map: maps("Restaurante El Cafetín Lastres"), tag: "confirmat" },
      { time: "15:30–17:00", title: "Llastres · passeig", note: "Port → carrerons → mirador de San Roque, ajustant l’ordre a l’aparcament i a les costeres.", map: maps("Mirador de San Roque Lastres"), tag: "1 h 30" },
      { time: "17:00–17:50", title: "Trajecte a Tazones", note: "Uns 45–50 min. Seguir la senyalització del nou accés regulat.", tag: "cotxe" },
      { time: "17:50–19:25", title: "Tazones", note: "Port, barris de San Miguel i San Roque, Casa de les Conquilles i passeig mariner.", map: maps("Parking Municipal Tazones"), tag: "1 h 35" },
      { time: "19:25–19:50", title: "Petjades · només si és segur", note: "Només amb marea baixa, camí sec i energia suficient. És la primera activitat que s’elimina si hi ha retard.", map: maps("Huellas de dinosaurio Tazones"), tag: "opcional" },
      { time: "19:50–20:40", title: "Trajecte a Avilés", note: "Eixida puntual per arribar al supermercat amb marge abans del tancament.", tag: "cotxe" },
      { time: "20:40–21:05", title: "Reposició · Alimerka Avilés", note: "Compra curta per als pícnics i sopars dels Dies 5–7. Llista tancada i refrigerats al final.", map: maps("Alimerka Calle Cristóbal Colón Avilés"), tag: "25 min" },
      { time: "21:30", title: "Sopar lleuger", note: "Ensalada amb encisam, tomaca i olives; companatge, pa i iogurt. Sense cogombre.", tag: "casa" },
    ],
    walk: "Llastres té costeres: prioritzar San Roque i el port. Tazones és curt i agradable, però les petjades no formen part del pla obligatori.",
    parking: "MUJA gratuït. Llastres: aparcar fora del nucli estret. Tazones: aparcament municipal regulat en les vostres dates; comprovar cartells i pagar en arribar.",
    food: "Dinar a El Cafetín. Sopar lleuger amb ensalada d’encisam, tomaca i olives, pa, companatge i iogurt; sense cogombre.",
    practical: ["MUJA: entrada confirmada a les 13:00", "El Cafetín: reserva confirmada a les 14:00", "Visita interior del MUJA reduïda a 40 minuts", "Tazones té regulació nova en agost de 2026", "No forçar les petjades"],
    taskIds: ["muja", "cafetin", "dia4-marea", "compra-prestin", "impermeables"], contactIds: ["muja", "cafetin"],
    planB: "Pluja: més temps a l’interior del MUJA i passejos mínims. Sense marea/camí segur: Tazones mariner i tornada directa, sense petjades.",
    links: [{ label: "Entrades MUJA", href: "https://www.museojurasicoasturias.com/entradas", kind: "web" }, { label: "Turisme Tazones", href: "https://www.turismovillaviciosa.es/playa/puerto-de-tazones/villaviciosa", kind: "web" }, { label: "AEMET Colunga", href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/colunga-id33019", kind: "web" }],
  },
  {
    id: 5, date: "Dijous · 20 d’agost", shortDate: "dj. 20", title: "Ribadesella + Llanes", subtitle: "Cuevas del Mar i sopar a La Amistad", kind: "costa", icon: "≋", distance: "240–250 km", driving: "3 h 15–3 h 40", budget: "95–125 €", color: "sky",
    objective: "Fer el dia de costa amb ritme familiar: Ribadesella al matí, pícnic i platja a Cuevas del Mar, i acabar a Llanes arribant puntuals a La Amistad.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/Ribadesella/Playa+de+Cuevas+del+Mar/Llanes/Bar+Sidrer%C3%ADa+La+Amistad,+Llanes/Apartamentos+El+Casal,+Illas",
    weather: "La previsió actual marca tronades i pluja possible. Revisar AEMET, radar i bandera abans d’eixir; si hi ha tempesta, substituir la platja per Tito Bustillo.",
    schedule: [
      { time: "07:45–08:05", title: "Força B · Dia 5", note: "Dues voltes: 12 pesos morts romanesos amb 2×5 kg, 8–10 flexions, 12 rems, 10 esquats, 12 curls de bíceps i planxa de 25–30 segons.", tag: "exercici · 18–20 min" },
      { time: "08:15–08:50", title: "Desdejuni i nevereta", note: "Café i torrades; carregar l’ensalada de pasta ben freda, aigua, impermeables i muda de Cesc.", tag: "casa" },
      { time: "09:00", title: "Eixida", note: "Trajecte per l’A-8 fins a Ribadesella. No afegir parades per mantindre l’hora de Llanes.", tag: "eixida" },
      { time: "10:20–10:30", title: "Aparcar a Ribadesella", note: "Campu Les Rolles o zona de l’estació d’autobusos; començar el passeig des d’allí.", map: maps("Parking Campu Les Rolles Ribadesella"), tag: "parking" },
      { time: "10:30–12:05", title: "Ribadesella · 2,5–3 km", note: "Plaça Nueva → nucli antic → passeig de la Grúa → port → pont del Sella. Santa Marina només fins al primer tram.", map: maps("Paseo de la Grúa Ribadesella"), tag: "1 h 35" },
      { time: "12:05–12:30", title: "Trajecte a Cuevas del Mar", note: "Uns 13 km; seguir l’accés rodat fins a l’aparcament de la platja.", tag: "25 min" },
      { time: "12:30–12:45", title: "Arribada i bandera", note: "Aparcar, lavabo, revisar bandera i triar una zona segura lluny de les roques si estan mullades.", map: maps("Playa de Cuevas del Mar"), tag: "decisió" },
      { time: "12:45–13:25", title: "Pícnic · Cuevas del Mar", note: "Ensalada de pasta amb tonyina, dacsa, olives, ou i tomaca; lactis, fruita compatible, suc, crackers i aigua. Portar servilletes, quatre bols, quatre forquetes i motxilla refrigerant.", tag: "dinar" },
      { time: "13:25–16:30", title: "Cuevas del Mar", note: "Bany i descans només amb bandera adequada. Cesc, sempre acompanyat entre els arcs i les formacions.", map: maps("Playa de Cuevas del Mar"), tag: "platja" },
      { time: "16:30–17:20", title: "Muda i trajecte a Llanes", note: "Dutxa, roba seca i eixida sense retard; són uns 18 km fins a Llanes.", tag: "50 min" },
      { time: "17:20–19:35", title: "Llanes", note: "San Pedro → Sablón → muralla i basílica → carrer Major → port → Cubos de la Memoria. Tornar cap al restaurant a les 19:35.", map: maps("Parking El Sablón Llanes"), tag: "passeig" },
      { time: "19:45–21:00", title: "Sopar · La Amistad", note: "Estar allí obligatòriament a les 19:45. La terrassa no admet reserves: funciona per orde d’arribada i llista d’espera.", map: maps("Bar Sidrería La Amistad Llanes"), tag: "sense reserva" },
      { time: "21:00–22:30", title: "Tornada", note: "Eixida directa a La Callezuela. No programar compra ni cap altra parada.", tag: "1 h 30" },
    ],
    walk: "Ribadesella: 2,5–3 km pràcticament plans. Llanes: recorregut lineal curt des d’El Sablón fins als Cubos i retorn a Cueto Bajo.",
    parking: "Ribadesella: Campu Les Rolles. Cuevas del Mar: aparcament de platja. Llanes: primer El Sablón; alternatives La Talá o IES Alfonso IX.",
    food: "Pícnic d’ensalada de pasta a Cuevas del Mar. Sopar a Bar Sidrería La Amistad, terrassa sense reserva.",
    practical: ["La Amistad: 19:45 obligatori", "350–400 g de pasta seca per als quatre", "Portar bols i quatre forquetes", "No cal supermercat"],
    taskIds: ["puerto", "dia6-pasta", "dia6-marea", "bany", "cesc-muda"], contactIds: ["puerto"],
    planB: "Tronada o pluja persistent: Ribadesella + Centre d’Art Rupestre Tito Bustillo + Llanes. Mantindre La Amistad a les 19:45 i eliminar la platja.",
    links: [{ label: "AEMET Llanes", href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/llanes-id33036", kind: "web" }, { label: "Tito Bustillo", href: "https://www.centrotitobustillo.com/", kind: "web" }],
  },
  {
    id: 6, date: "Divendres · 21 d’agost", shortDate: "dv. 21", title: "Lagos de Covadonga", subtitle: "Bitllets confirmats, ruta curta i santuari", kind: "natura", icon: "△", distance: "200–220 km", driving: "3 h 10–3 h 40", budget: "55–75 €", color: "green",
    objective: "Aprofitar el millor dia previst per a la muntanya i els bitllets ja comprats: pujar sense matinada extrema, fer la ruta curta al ritme de Cesc i visitar Covadonga en baixar.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/Parking+P1+Cangas+de+On%C3%ADs/Lagos+de+Covadonga/Santuario+de+Covadonga/Apartamentos+El+Casal,+Illas",
    weather: "Divendres és ara la finestra més favorable per als Lagos: núvols i clarianes, sense la tronada forta prevista dijous. Revisar càmeres i AEMET el dijous de vesprada i el mateix matí.",
    schedule: [
      { time: "08:30–09:05", title: "Desdejuni i nevereta", note: "Café i torrades; bitllets accessibles als dos mòbils, pícnic, 4–5 l d’aigua, impermeables i capa fina.", tag: "casa" },
      { time: "09:15", title: "Eixida", note: "Trajecte directe fins a Cangas. El marge és suficient sense haver d’eixir abans de les 7:15.", tag: "eixida" },
      { time: "10:45–11:00", title: "P1 Cangas de Onís", note: "Aparcar (3 €), lavabo i localitzar la línia groga. No canviar de parada: el bitllet ix del P1.", map: maps("Parking P1 Estación de Autobuses Cangas de Onís"), tag: "P1" },
      { time: "11:00–11:30", title: "Cangas · passeig molt curt", note: "Pont medieval i centre immediat. Tornar al P1 sense falta a les 11:30; si aparcar costa, eliminar este passeig.", map: maps("Puente Romano Cangas de Onís"), tag: "opcional" },
      { time: "11:30–11:55", title: "Embarcament", note: "Presentar els bitllets al mòbil; no cal imprimir. Poden demanar documentació pels descomptes infantils.", tag: "confirmat" },
      { time: "12:00–12:50", title: "Bus P1 → Lagos", note: "Hora comprada i no modificable si arribeu tard. Confirmar amb el conductor el punt exacte de recollida de la tornada.", tag: "bitllets" },
      { time: "12:50–13:10", title: "Arribada als Lagos", note: "Orientar-se, posar capa si cal i decidir el sentit de la ruta segons la boira i el vent.", map: maps("Lagos de Covadonga Parking Enol"), tag: "1.100 m" },
      { time: "13:10–13:45", title: "Pícnic als Lagos", note: "Adults: entrepà de llom. Lluís: pernil salat. Cesc: pavo + anxova. Afegir olives, lactis, fruita compatible, suc, crackers i aigua; tot dins de la motxilla refrigerant amb servilletes.", tag: "dinar" },
      { time: "13:45–16:10", title: "Ruta curta familiar", note: "Enol → Entrelagos → Ercina → mines de Buferrera → Pedro Pidal, ajustant el bucle al punt de tornada. No fer la circular llarga.", map: maps("Centro de Visitantes Pedro Pidal"), tag: "3 km" },
      { time: "16:10–16:40", title: "Tornar a la parada", note: "Lavabo, recompte de motxilles i estar a la parada amb marge. Autobús de tornada a les 16:50.", tag: "marge" },
      { time: "16:50–17:20", title: "Baixada a Covadonga", note: "Tots els autobusos d’esta franja paren a Covadonga. Baixar al Real Sitio amb les quatre motxilles.", tag: "inclòs" },
      { time: "17:20–18:35", title: "Covadonga", note: "Basílica, Santa Cova, explanada i fotografies. Mantindre un ritme tranquil després de la ruta.", map: maps("Santuario de Covadonga"), tag: "1 h 15" },
      { time: "18:35–19:05", title: "Llançadora Covadonga → P1", note: "Inclosa i amb servei fins a les 19:30. Agafar-la davant de la basílica.", tag: "gratuïta" },
      { time: "19:10–20:45", title: "Tornada a l’apartament", note: "Eixida directa, sense supermercat. Si hi ha retard, sopar immediat en arribar.", tag: "1 h 35" },
      { time: "20:50–20:55", title: "Estiraments · Dia 6", note: "Cinc minuts molt suaus de cames, maluc i esquena després de la ruta. La caminada dels Lagos ja compta com a entrenament.", tag: "recuperació · 5 min" },
      { time: "21:00", title: "Sopar", note: "Llom a la planxa, arròs blanc i ensalada. Dutxes i descans.", tag: "casa" },
    ],
    walk: "Ruta curta d’uns 3 km i 2 h–2 h 25 amb parades. Evitar la circular llarga de 5 km i retallar Buferrera si Cesc està cansat.",
    parking: "P1 Estació d’Autobusos: 3 €/dia i unes 400 places. Arribar amb una hora de marge respecte al bus per absorbir trànsit i aparcament.",
    food: "Pícnic d’entrepans als Lagos: llom per als adults, pernil salat per a Lluís i pavo amb anxova per a Cesc. Sopar de llom, arròs i ensalada.",
    practical: ["Compra confirmada: 25,50 €", "P1 12:00 → Lagos 12:50", "Tornada 16:50 → Covadonga → P1", "Bitllet al mòbil i documentació accessible"],
    taskIds: ["lagos", "dia5-meteo", "impermeables", "nevera"], contactIds: ["lagos"],
    planB: "Boira o ruixats febles: mantindre el viatge i reduir la ruta a Enol, Entrelagos i Ercina. Amb avís advers fort, valorar la modificació completa dels bitllets almenys 2 h abans; no improvisar una ruta exposada.",
    links: [{ label: "Servei oficial del bus", href: "https://www.buslagoscovadonga.es/", kind: "web" }, { label: "AEMET Cangas", href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/cangas-de-onis-cangues-d-onis-cangas-de-onis-id33012", kind: "web" }],
  },
  {
    id: 7, date: "Dissabte · 22 d’agost", shortDate: "ds. 22", title: "Oviedo + Naranco", subtitle: "Preromànic, centre històric i sidreria", kind: "ciutat", icon: "⌂", distance: "65–75 km", driving: "1 h 35–1 h 55", budget: "108–139 €", color: "violet",
    objective: "Últim dia complet amb poca carretera: monuments preromànics, centre històric, dinar asturià i tornada prompte per fer maletes.",
    map: "https://www.google.com/maps/dir/Apartamentos+El+Casal,+Illas/Santa+Mar%C3%ADa+del+Naranco/Parking+Salesas/Sidrer%C3%ADa+Pichote,+Oviedo/Parking+Salesas/Apartamentos+El+Casal,+Illas",
    weather: "Si plou al matí, començar pel centre i Museu de Belles Arts; passar el Naranco a la franja de vesprada si millora.",
    schedule: [
      { time: "07:55–08:17", title: "Força C · Dia 7", note: "Tres voltes: 12 esquats, 8–12 flexions, 12 pesos morts romanesos, 12 rems, 10 press d’espatles, 15 ponts de glutis i planxa de 30 segons.", tag: "exercici · 20–22 min" },
      { time: "08:30–09:00", title: "Desdejuni", note: "Café i torrades; motxilla lleugera amb aigua, impermeables i capa fina.", tag: "casa" },
      { time: "09:15", title: "Eixida", note: "Trajecte curt fins al Monte Naranco.", tag: "eixida" },
      { time: "09:50", title: "Aparcament del Naranco", note: "Aparcament gratuït davant dels monuments. Entrades a Santa María.", map: maps("Parking Santa María del Naranco"), tag: "gratuït" },
      { time: "10:00–11:10", title: "Santa María + San Miguel", note: "Visita conjunta guiada d’uns 40 min; no cal reserva individual obligatòria.", map: maps("Santa María del Naranco Oviedo"), tag: "5 €/persona" },
      { time: "11:10–11:35", title: "Miradors", note: "Crist amb el Tiguan només amb cel clar i sense retard.", map: maps("Monumento al Sagrado Corazón Monte Naranco"), tag: "opcional" },
      { time: "11:40–12:05", title: "Baixada a Oviedo", note: "Aparcar a Salesas, General Elorza 75; uns 10–12 min a peu de Gascona.", map: maps("Parking Salesas Oviedo"), tag: "9,50 €" },
      { time: "12:15–13:15", title: "Centre històric", note: "Catedral i Alfonso II → Trascorrales → Constitució → El Fontán. A les 13:15, tornar cap al cotxe.", map: maps("Catedral de Oviedo"), tag: "a peu" },
      { time: "13:15–13:50", title: "Tornar al cotxe i anar a Pichote", note: "Recollir el Tiguan en Salesas i conduir fins a La Florida. Arribar cinc o deu minuts abans de la reserva.", map: maps("Sidrería Pichote Oviedo"), tag: "cotxe" },
      { time: "14:00–15:30", title: "Dinar · Sidrería Pichote", note: "Reserva confirmada per als quatre. Cuina asturiana i cachopos; avisar de les al·lèrgies de Lluís abans de demanar.", map: maps("Sidrería Pichote Oviedo"), tag: "confirmat" },
      { time: "15:30–15:55", title: "Tornada al centre", note: "Conduir de nou a Salesas per reprendre el passeig sense deixar el cotxe lluny del final de la ruta.", map: maps("Parking Salesas Oviedo"), tag: "cotxe" },
      { time: "16:00–17:40", title: "Oviedo a peu", note: "El Fontán → Ajuntament → Campo de San Francisco i Mafalda → Escandalera → Uría.", map: maps("Estatua de Mafalda Oviedo"), tag: "passeig" },
      { time: "18:30–19:00", title: "Apartament", note: "Descans, dutxes, maletes i deixar a mà només roba i pícnic del Dia 8.", tag: "organitzar" },
      { time: "20:30", title: "Sopar", note: "Ensalada completa amb encisam, tomaca, olives i formatge fresc; pa i companatge si fa falta. Última nit sense cuina complicada.", tag: "casa" },
    ],
    walk: "Centre: Catedral → Trascorrales → Ajuntament → El Fontán → Campo de San Francisco → Escandalera → Uría.",
    parking: "Naranco gratuït. Oviedo: Parking Salesas, General Elorza 75; tarifa màxima prevista de 9,50 €.",
    food: "Dinar confirmat a Sidrería Pichote a les 14:00. Sopar d’ensalada completa amb encisam, tomaca, olives i formatge fresc.",
    practical: ["Pichote: reserva confirmada a les 14:00", "Naranco: 5 €/persona", "Famílies: reserva no obligatòria", "Catedral: 16 € per als dos adults si entreu", "Preparar maletes en tornar"],
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
      { time: "06:35–06:43", title: "Mobilitat suau · Dia 8", note: "Mobilitat general i 2×12 esquats suaus. Res intens abans del trajecte llarg de tornada.", tag: "exercici · 8 min" },
      { time: "06:45", title: "Últim repàs", note: "Dutxes, habitacions, banys, endolls i objectes dels xiquets.", tag: "casa" },
      { time: "07:00", title: "Desdejuni", note: "Torrades i café; pa amb tomaca o companatge per a Lluís i Cesc.", tag: "casa" },
      { time: "07:30", title: "Carregar i claus", note: "Nevereta al final, baixar fem i acordar l’entrega de claus.", tag: "30 min" },
      { time: "07:45", title: "Eixida", note: "Tiguan repostat des del dissabte i bossa accessible dins de l’habitacle.", map: maps("Apartamentos El Casal Illas"), tag: "eixida" },
      { time: "09:30–09:50", title: "Zona de Lleó", note: "Café, lavabo i estirar les cames; parada curta.", map: maps("Área de servicio León A-66"), tag: "20 min" },
      { time: "12:00–12:45", title: "Medina del Campo / Rueda", note: "Pícnic de tornada: Josep, Cati i Lluís, pavo amb tomaca; Cesc, pavo amb anxova. Afegir olives, lactis, fruita compatible, suc, crackers i aigua. Descans màxim de 45 minuts.", map: maps("Área de servicio Medina del Campo A-6"), tag: "dinar" },
      { time: "14:30", title: "Abans de Madrid · opcional", note: "Només si els xiquets ho necessiten o hi ha retenció.", tag: "opcional" },
      { time: "17:00–17:25", title: "Honrubia · Moya", note: "Cafeteria, lavabos, aparcament gratuït i servei 24 h.", map: maps("Hotel Restaurante Moya Honrubia"), tag: "25 min" },
      { time: "19:30–20:15", title: "Arribada a Xaló", note: "Descarregar només l’essencial i deixar la resta per a l’endemà.", map: maps("Xaló Alicante"), tag: "arribada" },
      { time: "20:15", title: "Sopar fàcil", note: "Pizzes congelades i ensalada que hauran quedat preparades a Xaló.", tag: "casa" },
    ],
    walk: "No hi ha visites previstes. En cada parada, lavabo i 5–10 minuts caminant abans de continuar.",
    parking: "Parades en àrees de servei. Peatges AP-66 i AP-6: aproximadament 31,90 €.",
    food: "Pícnic a Medina del Campo / Rueda; café o berenar a Honrubia; sopar preparat a Xaló.",
    practical: ["Repostar dissabte", "Bossa accessible de Cesc", "No superar 2–2,5 h seguides", "Adaptar les parades al trànsit real"],
    taskIds: ["dia7-maletes", "dia8-cotxe", "dia8-picnic", "casal-arribada"], contactIds: ["casal"],
    planB: "Les hores són orientatives. Afegir una parada si hi ha cansament; eliminar només les parades opcionals, mai un descans necessari.",
    links: [{ label: "Trànsit DGT", href: "https://www.dgt.es/conoce-el-estado-del-trafico/informacion-e-incidencias-de-trafico/", kind: "web" }],
  },
];
