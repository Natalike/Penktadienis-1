console.clear();

//FOR

function count(nuo, iki, daliklis) {
    let kiekis = 0;

    for (let i=nuo; i<=iki; i++) {
        if (i % daliklis === 0) {
            kiekis++;
        }
    }
    return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`;
}

console.log(count(0, 11, 3));
console.log(count(0, 11, 5));
console.log(count(0, 11, 7));
console.log(count(0, 10, 5));
console.log(count(0, 10, 2));
console.log(count(0, 10, 10));