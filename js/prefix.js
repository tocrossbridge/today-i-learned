'use strict';

const fs = require('fs');

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
 * Complete the 'findCompletePrefixes' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY names
 *  2. STRING_ARRAY query
 */

function findCompletePrefixes(names, query) {
    // Write your code here
    let found = {};
    names.forEach(function (a, i) {
        let p = 0,
            pos = query.indexOf(a);
        while (~pos) { // equal to pos !== -1
            found[pos] = i;
            p = pos + a.length;
            pos = query.indexOf(a, p);
        }
    });
    return Object.keys(found)
        .map(Number)
        .sort(function (a, b) { return a - b; })
        .map(function (k) { return found[k]; });
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const namesCount = parseInt(readLine().trim(), 10);

    let names = [];

    for (let i = 0; i < namesCount; i++) {
        const namesItem = readLine();
        names.push(namesItem);
    }

    const queryCount = parseInt(readLine().trim(), 10);

    let query = [];

    for (let i = 0; i < queryCount; i++) {
        const queryItem = readLine();
        query.push(queryItem);
    }

    const result = findCompletePrefixes(names, query);

    ws.write(result.join('\n') + '\n');

    ws.end();
}


https://stackoverflow.com/questions/35572718/extracting-index-from-an-array-that-contains-each-word-in-the-string