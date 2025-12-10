let money = Number(require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim());

if(money === 0) console.log(1);
else if(money < 0) console.log(32);
else {
    let count = 0;
    while(money > 0){
        count++;
        money >>= 1;
    }
    console.log(count);
}