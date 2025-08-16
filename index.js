            // Answer to the question no 1

function findMax(numbers) {
  return Math.max(...numbers);
}
console.log(findMax([3, 7, 2, 9, 5])); 

            // Answer to the question no 2
 function countWords(str) {
  return str.split(/\s+/).length;
}
console.log(countWords("Hello world"));       
           
            // Answer to the question no 3

function calculateDifference(a, b) {
 return a - b;
}
console.log(calculateDifference(15, 5)); 

            // Answer to the question no 4

function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 

            // Answer to the question no 5

function sortArrayDescending(numbers) {
  return [...numbers].sort((a, b) => b - a);
}
console.log(sortArrayDescending([5, 3, 8, 1, 2]));

            // Answer to the question no 6

  function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(1900)); 


            // Answer to the question no 7

           function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));      

            // Answer to the question no 8

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));