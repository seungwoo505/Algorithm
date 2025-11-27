const N = Number(require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim());
const answer = [];

for(let n = 1; n <= N; n++){
    let star = "";
    let reverse = "";
    for(let s = 1; s <= n; s++){
        star = star + "*";
        reverse = "*" + reverse;
    }

    for(let r = 1; r <= N - n; r++){
        star = star + " ";
        reverse = " " + reverse;
    }

    answer.push(star + reverse);
}

for(let n = N - 1; n > 0; n--){
    let star = "";
    let reverse = "";
    for(let s = 1; s <= n; s++){
        star = star + "*";
        reverse = "*" + reverse;
    }

    for(let r = 1; r <= N - n; r++){
        star = star + " ";
        reverse = " " + reverse;
    }

    answer.push(star + reverse);
}

console.log(answer.join("\n"));