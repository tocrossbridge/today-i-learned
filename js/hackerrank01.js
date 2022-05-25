'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'closestNumbers' function below.
 *
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function closestNumbers(numbers) {
    // Write your code here
    numbers.sort(function(a,b) {
        return a-b
    })
    
    let numbersTest = numbers[1] - numbers[0]
    let pairs = [numbers[0], numbers[1]]
    
    for(let i = 2; i < numbers.length; i++){
        let next = numbers[i]
        let prev = numbers[i-1]
        let diff = next - prev
        
        if(diff < numbersTest){
            numbersTest = diff
            pairs = [prev, next]
        }else if(diff === numbersTest){
            pairs = pairs.concat([`\n${prev} ${next}`])
        }
    }
    
    console.log(pairs.join(' '))
}

function main() {
    const numbersCount = parseInt(readLine().trim(), 10);

    let numbers = [];

    for (let i = 0; i < numbersCount; i++) {
        const numbersItem = parseInt(readLine().trim(), 10);
        numbers.push(numbersItem);
    }

    closestNumbers(numbers);
}
