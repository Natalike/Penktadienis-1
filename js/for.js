console.clear();

/*const pazymiai = [10, 5, 7, 5, 6, 3];

console.log(pazymiai[0]);
console.log(pazymiai[4]);
console.log('viso:', pazymiai.length);

let pazymiuSuma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    console.log(i, pazymiai, pazymiai[i]);
    pazymiuSuma += pazymiai[i];
}

const pazymiuKiekis = pazymiai.length;
const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log(`Pazymiu vidurkis yra ${pazymiuVidurkis}.`);

console.clear();

const dictionary = ['Labas', 'rytas', 'sakau', 'tau', 'mano', 'mielas', 'mieste', 'Ka', 'tu', 'Ka', 'vakare'];

console.log(dictionary);

//kiek yra zodziu, kurie trumpesniu nei labas?
//kiek yra zodziu, kurie ilgesni nei labas?
//kiek yra zodziu, kurie tokio pat ilgio kaip labas?
//pavyzdinis zodis yra kintamas

let trumpi = 0;
let toksPat = 0;
let ilgi = 0;

const zodis = 'Labas';
const ilgis = zodis.length;

for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];
    if (word.length === ilgis) {
        toksPat++;
    }
    else if (word.length < ilgis) {
        trumpi++;
    }
    else if (word.length > ilgis) {
        ilgi++;
    }
}

console.log(`Trumpesniu zodziu:`, trumpi);
console.log(`Tokio pat ilgio zodziu:`, toksPat);
console.log(`Ilgesniu zodziu:`, ilgi);
*/

console.clear();

const masyvas1 = [1, 1, 1];
const masyvas2 = [1, 2, 2, 3];
const masyvas3 = [5, 4, 3, 2, 1];
const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];

function sumaIntervale(nuo, iki) {
    let suma = 0;

    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }

    return suma;
}

console.log(0, 3, '->', 6, ':', sumaIntervale(0, 3));
console.log(0, 4, '->', 10, ':', sumaIntervale(0, 4));