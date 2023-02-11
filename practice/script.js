const parent = document.querySelector("#child")
const delBtn = document.querySelector("#addStudentBtn")
const theInput = document.querySelector("#theInput")

let data;

// console.log(parent);
// console.log(delBtn);
// console.log(theInput);
//^ The very first we have to grab values of input when we click buttun 
delBtn.addEventListener('click', ()=>{
 //^ saved values of input in the variable 
 const inputTextValue = theInput.value;
 
 // we create variable wich tring to fetch values from local storage
 const lsText = localStorage.getItem('myKey')
//^  we tried to fetch the values from localStorage initioly not found so it gives us NULL 



})