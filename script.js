const numDice= document.getElementById('numDice');
const rollButton= document.getElementById('rollButton');
const resultDiv= document.getElementById('result');
rollButton.onclick= function() {
    let num=Number(numDice.value);
    resultDiv.innerHTML= '';
    if (isNaN(num) || num < 1) {
        let p=document.createElement('p');
        p.innerHTML= 'Please enter a valid number of dice (1 or more).';
        resultDiv.appendChild(p);
        return;
    }
    for(let i=0; i<num; i++){
        let roll= Math.floor(Math.random() * 6) + 1;
        let p=document.createElement('p');
        p.innerHTML= 'You rolled a ' + roll + '.';
        resultDiv.appendChild(p);
    }
}
