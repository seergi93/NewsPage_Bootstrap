# NewsPage_Bootstrap

Visualitzar : https://rawgit.com/seergi93/NewsPage_Bootstrap/master/index.html

## Especificacions del client:

- La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure.
  - _OK_

- Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot altre diseny és lliure.
  - _OK, He triat que anirà fixada a la part inferior._

- Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime).
  - Els titols son prou llargs
  - Les urls de les imatges estàn als arxius .json.
  - Hi ha descripció de les imatges, incluint un collapse per a la millor lectura del client.
  - Hem falta incluir data i hora.

- Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu.
  - _Totes les notícies están a un mateix format i força agradable a la vista._

1. Realitza la maquetació del projecte. Entrega un breu document amb l'análisi i la planificació al README.md (valen fotos d'esquemes del quadern).

  * El disseny inicial s'aproxima al definitiu, però hi ha canvis de millora.
![Planificació](https://github.com/seergi93/NewsPage_Bootstrap/blob/master/img/pla.jpg)
  * Vaig partir de el projecte de urbinapro, i amb la pàgina oficial de bootstrap 4, he anat fent canvis.

2. Presenta news.html amb 3 notícies (ja escrites al html, no carregar amb js) i emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js.

  * Es compleix.

3. Codifica news.js en jQuery per fer: "botó carregar més notícies" i "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues vegades 1.json, 2.json)

  * Scroll , OK.
  * Botó a carregar totes les noticies.

4. Inclou rss.xml (especificat al tema 6)

  * Inclós

5. Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html (seguir no té sentit, aquesta tasca s'automatitza amb codi de servidor).

 * Fet

6. La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de contenir una imatge i un vídeo de youtube responsive. 

 * Imatge i vídeo responsive

7. Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina. 

 * Fet

