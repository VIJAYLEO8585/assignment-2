 //Task 1:FizzBuzz Problem
 for (let i = 1; i <= 100; i++){
  if ( i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(i);
  }
}
    

    
//Task 2:Find Prime Numbers
let n1=50;

for (let num=2; num <= n1 ; num++){
let prime = true;
//check the number is only divisible for 1 and itself
for(let i=2; i<num; i++){
    if(num % i ===0){
        prime = false;
    }
}
 // If num is not divisible by any number other than 1 and itself, it is prime
 if (prime)
 console.log(num)
}




//Task 3:  Sum of Even and Odd Numbers
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let SumEven = 0;
let SumOdd = 0;

for (let i = 0; i < Array.length; i++) {
  if (Array[i] % 2 === 0) {
    SumEven =SumEven+ Array[i];
  } else {
    SumOdd = SumOdd+Array[i];
  }
}
console.log("Sum of Even Numbers:", SumEven);
console.log("Sum of Odd Numbers:", SumOdd);





//Task 4: Number of Vowels and Consonants in a String
let str = "hello it's my Assignment 2";
let vowels = "aeiouAEIOU"; 
let vowelCount = 0;
let consonantCount = 0;

for (let i=0; i<str.length; i++) {
  let char = str[i].toLowerCase(); 
  if (vowels.includes(char)) {
    vowelCount++;
  } else if (char >= 'a' && char <= 'z') {  
    consonantCount++;
  }
}

console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);





//Task 5: Find Factorial of a Number
let n = 5;
let factorial = 1;
for(i=1;i<=n;i++){
    factorial=factorial*i
}
console.log("The Factorial" ,n+":", factorial)





//Task 6: Merge Two Arrays Using Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2]; 
  }
  let mergedArray = mergeArrays(arr1, arr2);
  console.log(mergedArray);

  



//Task 7:Sum of Numbers Using Rest Operator
function sumAll(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4, 5)); 
console.log(sumAll(10, 20,90));        
console.log(sumAll(7, 8, 9));        




//Task 8: Copy an Array Using Spread Operator
function copyArray(arr){
  return[...arr]
}
let originalArray=[10,20,30,40]

let copiedArray=copyArray(originalArray)
console.log(copiedArray)




//Task 9: Combine Two Objects Using Spread Operator
let obj1 = { name: "Alice", age: 25 };
let obj2 = { age: 30, city: "New York" };

function combinObjects(obj1, obj2) {
  return {...obj1, ...obj2}; 
}
let combinedObjects= combinObjects(obj1, obj2);
console.log(combinedObjects);





//Task 10: Iterate Over Object Properties
function printObjectProperties(obj) {
  for (let key in obj) {
      console.log(key + ": " + obj[key]);
  }
}
let student = { name: "John", age: 20, grade: "A" };
printObjectProperties(student);
