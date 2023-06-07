const myForm = document.getElementById('main-form');
const testo1Inputfield = document.getElementById('testo1');

myForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Impedisce l'invio del modulo
  const testo1 = testo1Inputfield.value;
  console.log('Prossimo evento:');
  console.log('testo1', testo1);
});

const btn = document.getElementById('click-Me');
btn.addEventListener('click', function(e) {
  e.preventDefault();
  const testo1 = testo1Inputfield.value;
  console.log('Bottone cliccato', e);
  console.log('testo1', testo1);
});

const btnClick = function(e) {
  // console.log('Bottone cliccato!', e);
};












// ---------------------------------------------------------------
// console.log("prova!")

// const myForm = document.getElementById('main-form')
// myForm.addEventListener('submit', function() {
    
// })
// console.log('prova');




// const btnClick = function (e) {
//     // console.log('bottone cliccato!', e);
// }


// let btn = document.getElementById('click-Me')
// btn.addEventListener('click', function (e) {
//  console.log('bottone cliccato', e);
// e.preventDefault()
    
// })

// const testo1Inputfield = document.getElementById('testo1')
// console.log('testo1Inputfield', testo1Inputfield);
// const testo1 = testo1Inputfield.value 
// console.log('prossio evento:');
// console.log('testo1', testo1)

// --------------------------------------------------
// const myForm = document.getElementById('main-form')
// myForm.addEventListener('submit', function() {
    
// })
// console.log('prova');




// const btnClick = function (e) {
//     console.log('bottone cliccato!', e);
// }




// function btnClick(e) {
//     console.log('bottone cliccato', e);

// }
