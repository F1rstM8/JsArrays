console.log("--- ЗАВДАННЯ 1 ---");
const myStuff = [42, "Привіт", true, "JavaScript", 100];
for (let i = 0; i < myStuff.length; i++) {
  console.log(myStuff[i]);
}
console.log("--- ЗАВДАННЯ 2 ---");
const numbers = [10, 15, 22, 33, 40, 5, 8];

console.log("\n--- Парні числа  ---");

numbers.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});
console.log("--- ЗАВДАННЯ 3 ---");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = arr1.concat(arr2);
console.log(result);
console.log("--- ЗАВДАННЯ 4 ---");
const arr4 = [6, 5, 4];
arr4.reverse();
console.log(arr4);
console.log("--- ЗАВДАННЯ 5 ---");
const arr5 = [1, 2, 3];
arr5.push(4, 5, 6);
console.log(arr5);
console.log("--- ЗАВДАННЯ 6 ---");
const arr6 = [7, 8, 9];
arr6.unshift(1, 2, 3);
console.log(arr6);
console.log("--- ЗАВДАННЯ 7 ---");
const arr7 = ['aaa', 'bbb', 'ccc'];
const firstElement = arr7.shift();
console.log("Видалений елемент: " + firstElement);
console.log("Масив після видалення: ", arr7);
console.log("--- ЗАВДАННЯ 8 ---");
const arr8 = ['aaa', 'bbb', 'ccc'];
const lastElement = arr8.pop();
console.log("Видалений елемент: " + lastElement);
console.log("Масив після видалення: ", arr8);
console.log("--- ЗАВДАННЯ 9 ---");
const arr9 = [9, 10, 11, 12, 13];
const newArr = arr9.slice(1, 5);
console.log(newArr);
console.log("--- ЗАВДАННЯ 10 ---");
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 2);
console.log(arr10);
console.log("--- ЗАВДАННЯ 11 ---");
const arr11 = [1, 2, 3, 4, 5];
const newArr11 = arr11.slice(2);
console.log(newArr11);
console.log("--- ЗАВДАННЯ 12 ---");
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'w', 'trtr');
arr12.pop();
arr12.push('vvv', 'a', 'hello');
console.log(arr12);
console.log("--- ЗАВДАННЯ 13 (з *) ---");
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function countVowels(str, vowelsArray) {
  return str
    .toLowerCase()            
    .split('')                
    .filter(char => vowelsArray.includes(char)) 
    .length;                  
}


console.log(countVowels('hello to you', vowels)); 
console.log(countVowels('lorem ipsum dolor sit amet', vowels)); 
