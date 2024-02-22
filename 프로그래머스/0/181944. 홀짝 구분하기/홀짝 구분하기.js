const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    console.log(line % 2 === 0 ? `${line} is even` : `${line} is odd`)
}).on('close', function () {
    n = Number(input[0]);
});