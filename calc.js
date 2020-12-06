function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function factorial(x) {
    let z = 1;
    for (i = 1; i <= x; i++) {
        z *= i;
    }
    return z;
}

function power(x, y) {
    return Math.pow(x, y);
}

function postiveNegative(x) {
    return x * -1;
}

function operate(x, o, y) {
    switch (o) {
        case '+': return add(x, y); break;
        case '-': return subtract(x, y); break;
        case '*': return multiply(x, y); break;
        case "/": return divide(x, y); break;
        case '^': return power(x, y); break;
        case '!': return factorial(x); break;
    }
}
let textUpDisplay='';
let textDownDisplay='';
let formulaTxt='0';
let formulaNo=[];
let opb=false;

const upDisplay = document.querySelector('.up');
const downDisplay = document.querySelector('.down');

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    formulaTxt='0';
    formulaNo=[0,0];
    upDisplay.textContent = '';
    downDisplay.textContent = formulaTxt;
});

// const powerBtn = document.querySelector('#p');
// powerBtn.addEventListener('click', () => {
//     if (parseFloat(formulaTxt) != NaN) {
//         formulaTxt = formulaTxt + '^';
//         downDisplay.textContent = '';
//         upDisplay.textContent=formulaTxt;
//     }
// });

const num = document.querySelectorAll('.no');
num.forEach((n) => {
    n.addEventListener('click', () => {
        if(formulaTxt=='0'){
            formulaTxt='';
            downDisplay.textContent=formulaTxt;
        }
        textDownDisplay=formulaTxt;
        formulaTxt=n.getAttribute('id');
        downDisplay.textContent+=formulaTxt;
        formulaTxt=textDownDisplay+formulaTxt;
        opb=false;
    });
});

const ops=document.querySelectorAll('.op');
ops.forEach((n)=>{
    n.addEventListener('click',()=>{
        let o=n.getAttribute('data-op');
        if(opb) {

        } else{  
        formulaTxt=formulaTxt+String.fromCharCode(n.getAttribute('data-op'));
        upDisplay.textContent=formulaTxt;
        downDisplay.textContent='';
        opb=true;
        }
    });
});

const backSpace=document.querySelector('.delete_btn');
backSpace.addEventListener('click',()=>{
    formulaTxt=formulaTxt.substring(0,formulaTxt.length-1);
    if(formulaTxt.length>=1){
    formulaNo=parseFloat(formulaTxt);
    
}else{
    formulaTxt='0';
    formulaNo=0;
    
    }
    downDisplay.textContent=formulaTxt;
    upDisplay.textContent=formulaTxt;
});

const equals=document.querySelector('#equals');
equals.addEventListener('click',()=>{
    let res;
    let oprators;
    let nums=[];
    let s=formulaTxt.search('[^0-9]');
    oprators=searchOps(formulaTxt);
    nums[0]=parseFloat(formulaTxt.slice(0,s));
    nums[1]=parseFloat(formulaTxt.slice(s+1,formulaTxt.length));
    res=operate(nums[0],oprators,nums[1]);
    upDisplay.textContent=formulaTxt;
    downDisplay.textContent=res;
    formulaTxt='';
});

const pn=document.querySelector('.np');
pn.addEventListener('click',()=>{
    formulaTxt=postiveNegative(parseFloat(formulaTxt));
    upDisplay.textContent=formulaTxt;
    downDisplay.textContent=formulaTxt;
});

function searchOps(x){
    let y=x.search('[^0-9]');
    let z=x.slice(y,y+1);
    return z;
}

function opsLook(x){
    let z=0;
    if(x.search(String.fromCharCode(43))>-1)z=1;
    else
    if(x.search(String.fromCharCode(45))>-1)z=1;
    else
    if(x.search(String.fromCharCode(47))>-1)z=1;
    else
    if(x.search(String.fromCharCode(42))>-1)z=1;
    else
    if(x.search(String.fromCharCode(94))>-1)z=1;
    else
    if(x.search(String.fromCharCode(33))>-1)z=1;

    return z;
}