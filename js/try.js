console.clear();

function suma(pirmasSkaicius, antrasSkaicius, treciasSkaicius, ketvirtasSkaicius) {
    return pirmasSkaicius + antrasSkaicius + treciasSkaicius + ketvirtasSkaicius;
}

const s1 = suma (7, 10, 25, 25);
const s2 = suma (15, -7);

console.log(s1);
console.log(s2);

function pirmaRaide(vardas) {
    return vardas[0] + vardas[4] + vardas[2];
}

const r1 = pirmaRaide ('Elyte');
const r2 = pirmaRaide ('Aldona');
const r3 = pirmaRaide ('Genute');

console.log('Pirmos raides:', r1, r2, r3);



function kazkas(tekstas) {
    return tekstas[2] + tekstas[0] + tekstas[1];
}

const a1 = kazkas ('Vienetas');
const a2 = kazkas ('Dvejetas');
const a3= kazkas ('Trejetas');

console.log('kazkas:', a1, a2, a3);



function dogs(names) {
    return names;
}

const one = dogs('Kulka');
const antras = dogs('Kyra');
const trecias = dogs('Co co');

console.log('Vardai:', one, antras, trecias);



function inicialai(vardas, pavarde) {
    return `${vardas[0]}.${pavarde[0]}.`;
}

const ini1 = inicialai('Chuck', 'Norris');
const ini2 = inicialai('Pamela', 'Anderson');

console.log('Inicialas 1:', ini1);
console.log('Inicialas 2:', ini2);


function tekstas(vardas, metai) {
    return vardas, metai;
}

const name1 = ('Jonas');
const age1 = ('99');
const name2 = ('Maryte');
const age2 = ('82');
const name3 = ('Petras');
const age3 = ('50');
const name4 = ('Ona');
const age4 = ('25');

console.log('Sveiki mano vardas', name1, 'ir man', age1, 'metai!');
console.log('Sveiki mano vardas', name2, 'ir man', age2, 'metai!');
console.log('Sveiki mano vardas', name3, 'ir man', age3, 'metai!');
console.log('Sveiki mano vardas', name4, 'ir man', age4, 'metai!');

function intro(name, age) {
    return `Sveiki mano vardas ${name} ir man ${age} metai!`;
}

const intro1 = intro('Jonas', 99);
const intro2 = intro('Maryte', 82);
const intro3 = intro('Petras', 50);
const intro4 = intro('Ona', 25);

console.log(intro1);
console.log(intro2);
console.log(intro3);
console.log(intro4);