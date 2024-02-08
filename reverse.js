const numbers = [23, 235, 345, 467, 45]
// numbers.reverse();
// console.log(numbers);

const revNumber = []
for (const num of numbers) {
    revNumber.unshift(num);
}
// console.log(revNumber);

let n = [];
for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i];
    n.unshift(x);
}
// console.log(n);
const revRev = []
for(let i = numbers.length-1; i>0; i--){
    // console.log(numbers[i]);
    revRev.push(numbers[i]);
}
console.log(revRev);