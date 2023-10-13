const numbers = [5, 1, 3, 7, 2, 6, 4];

numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers); // Output will be [7, 6, 5, 4, 3, 2, 1] in descending order
