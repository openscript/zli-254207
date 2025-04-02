function addCoolPerson(people) {
    return [...people, "Chuck Norris"];
}

const coolPeople = ["Jacky Chan", "Jean-Claude Van Damme"];

const newCoolPeople = addCoolPerson(coolPeople);

console.log(coolPeople);
console.log(newCoolPeople);

const veryCoolPeople = newCoolPeople.filter((value) => !value.startsWith("Jacky"));
console.log(veryCoolPeople);


const numbers = [8, 30, 49, 20];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);