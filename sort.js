const persons = ['rakib', 'nokib', 'sakib', 'akib', 'fahim']
const i = persons.sort();
console.log(i);

const id = [2, 4, 6, 5, 1, 3]
const n = id.sort();
console.log(n);

const idSecond = [2, 4, 16, 45, 1, 23]
const x = idSecond.sort(function (a, b) { return a - b })
console.log(x);
const y = idSecond.sort(function (a, b) { return b - a })
console.log(x);
