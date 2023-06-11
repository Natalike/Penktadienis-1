console.clear();
const arSvieciaSaule = false;
const arLyja = false;

if (arSvieciaSaule == true) {
    if (arLyja == true) {
        console.log('Lyja...');
    } else {
        console.log('Nelyja...');
    }
} else {
    if (arLyja == true) {
        console.log('Lyja nkaslk...');
    } else {
        console.log('Nelyja ne hjsa...');
    }
}

const diena = 2;
let kokiaDiena = '';

if (diena == 1) {
    kokiaDiena = 'pirma';
} else if (diena == 2) {
    kokiaDiena = 'antra';
} else if (diena == 3) {
    kokiaDiena = 'trecia';  
} else if (diena == 4) {
    kokiaDiena = 'ketvirta';
}

console.log(kokiaDiena);

const penki = 5;
const five = '5';

if (penki == five) {
    console.log('Taip');
} else {
    console.log('Ne');
}

console.log('---------');

function arPilnametis (amzius) {
    if (amzius >= 18) {
        return true;
    }
        return false;
}

console.log(arPilnametis(99), '-->', true);
console.log(arPilnametis(9), '-->', false);
console.log(arPilnametis(18), '-->', true);
console.log(arPilnametis(17), '-->', false);