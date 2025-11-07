const fs = require('fs');
const expression = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split("");

const out = [];
const priority = [];

const prec = (ch) => {
    if(ch === '(') return 0;
    if(ch === '+' || ch === '-') return 1;
    if(ch === '*' || ch === '/') return 2;
    return -1; 
}

for(let ch of expression){
    if(ch >= 'A' && ch <= 'Z') out.push(ch); // 알파벳
    else if( ch === '(' ) priority.push('('); // 우선적으로 들어가야함
    else if( ch === ')' ){ // 괄호가 끝났으므로 그 안에 있던 것들부터 우선 처리 시작
        while( priority.length !== 0 && priority[priority.length - 1] !== '(' ) out.push(priority.pop());
        priority.pop(); // ( 제거
    }else{ // 연산자
        while(priority.length !== 0 && prec(priority[priority.length - 1]) >= prec(ch)) out.push(priority.pop());
        priority.push(ch);
    }
}

while(priority.length) out.push(priority.pop());

console.log(out.join(''));