const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

let q = 0;
let count = 1;

const answer = [];

while(true){
    const alphabet = Array.from({ length : 26 }, () => 0);

    const word = input[q++];
    const lost = input[q++];

    if(word === "END" && lost === "END") break;

    if(word.length !== lost.length){
        answer.push(`Case ${count++}: different`);
        continue;
    }

    for(const w of word.split("")){
        alphabet[w.charCodeAt() - 'a'.charCodeAt()]++;
    }

    let collect = true;

    for(const l of lost.split("")){
        const n = l.charCodeAt() - 'a'.charCodeAt();
        if(alphabet[n] > 0) alphabet[n]--;
        else {
            collect = false;
            break;
        }
    }

    answer.push(`Case ${count++}: ${collect ? "same" : "different"}`);
}

console.log(answer.join("\n"));