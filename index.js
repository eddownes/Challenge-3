function copyAndSortNumbers(numbers) {
    return numbers.concat().sort();
}

/* Do not modify code below this line */

const original = [1, 7, 3, 5];
const sortedCopy = copyAndSortNumbers(original);

console.log(original, '<-- should be [1, 7, 3, 5]');
console.log(sortedCopy, '<-- should be [1, 3, 5, 7]');