const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('').map((string) => {
        if (string >= 'a' && string <= 'z'){
            return string.toUpperCase();
        }else if (string >= 'A' && string <= 'Z'){
            return string.toLowerCase();
        }
    }).join('');
    
    console.log(str)
});
