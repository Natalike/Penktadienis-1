console.clear();

const firstName = 'Natalija';
const lastName = 'Liske';
const birthDay = '1987';
const todayDay = '2023';

const myAge = (todayDay - birthDay);
console.log(myAge);

function intro(firstName, lastName, myAge) {
    return `As esu ${firstName} ${lastName}. Man yra ${myAge} metai.`;
}

const intro1 = intro('Natalija', 'Liske', 36);

console.log(intro1);
