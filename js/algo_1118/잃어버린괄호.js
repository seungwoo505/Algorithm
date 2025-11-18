let answer = "";
for(const num of require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim().split('-')){
    let plus = 0;
    for(const n of num.split("+").map(Number)){
        plus += n;
    }

    answer = answer === "" ? plus : answer - plus;
}

console.log(answer);