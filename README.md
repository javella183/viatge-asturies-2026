# Els Avellà-Ferrer en Astúries · Estiu 2026

Guia interactiva en valencià del viatge de la família Avellà-Ferrer a Astúries del 16 al 23 d'agost de 2026.

Inclou els itineraris detallats dels huit dies, horaris, rutes i ubicacions de Google Maps, restaurants i telèfons de reserva, supermercats, pressupost, plans alternatius i llistes sincronitzades al mateix dispositiu.

La secció **El nostre allotjament** reuneix la reserva d'Apartamentos El Casal, la ubicació, el telèfon, una fotografia real, l'equipament confirmat i les preguntes pendents per al propietari. La mateixa fitxa apareix també com a desplegable en l'arribada del Dia 1.

## Control local del viatge

La guia incorpora un control de despeses i pressupost, resum per dia, categoria, forma de pagament i persona que paga, llistes editables, una llista de la compra i un àlbum familiar guiat amb 23 missions fotogràfiques. Les dades de text es guarden amb `localStorage` i les fotos, reduïdes automàticament, en `IndexedDB`.

Des de la secció **Control** es pot:

- guardar una còpia de seguretat en format JSON, incloses les fotografies;
- restaurar les dades en un altre navegador;
- exportar les despeses a CSV.

Cada despesa permet indicar efectiu, targeta de dèbit o targeta de crèdit, seleccionar si paga Josep o Caty i adjuntar opcionalment una foto del tiquet. Els tiquets també entren en la còpia de seguretat.

La compra està organitzada per supermercat, amb productes afegibles manualment, marcador de cistella i text ratllat quan el producte ja està dins. Les fitxes dels llocs emblemàtics inclouen un aparcament pròxim, enllaç directe i cost orientatiu.

Les dades no se sincronitzen automàticament entre dispositius.

En cada lloc emblemàtic es pot fer una foto amb la càmera o triar-la de la galeria, afegir una nota, descarregar-la, substituir-la o eliminar-la. Cada jornada mostra el progrés i la seua galeria de records.

## Web publicada

https://javella183.github.io/viatge-asturies-2026/

## Desenvolupament local

```bash
npm install
npm run dev
```

La publicació en GitHub Pages s'actualitza automàticament quan hi ha canvis en la branca `main`.
