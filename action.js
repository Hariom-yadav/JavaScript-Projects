let counter = 0;
const counterValue = document.getElementById('number');
const incriment = document.getElementById('incrimentbtn');
const decriment = document.getElementById('decrimentbtn');
// incriment function

incriment.addEventListener('click',function(){
    counter += 1 ;
    counterValue.innerHTML = counter;
});

// decriment function
decriment.addEventListener('click',function(){
    counter -= 1 ;
    counterValue.innerHTML = counter;
});

console.log("hello");







// const countValue= document.querySelector('#number');

// function Increment() {
   
//     let value = parseInt(countValue.textContents);

//     value = value+1;
//     countValue.textContents = value;

// };
// function decrement() {
//     let value = parseInt(countValue.textContents);

//     value = value-1;
//     countValue.textContents= value;

// };
// console.log("hello");