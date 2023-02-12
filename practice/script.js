const parentEl = document.querySelector("#child")
const delBtn = document.querySelector("#addStudentBtn")
const theInput = document.querySelector("#theInput")

let lsData;

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
// console.log( lsText)  null --false value
//! Now apply condition if null return for first time
if (lsText){
    lsData =JSON.parse(lsText) //^ give me values original array 
    //  console.log("if");

}else{
   lsData = [];
//    console.log("else");

}
// console.log(data);
lsData.push(inputTextValue); //^ if else null the push value to the empty array then else not be executed
// console.log(data);
localStorage.setItem('myKey', JSON.stringify(lsData));
theInput.value =""
showOnDom  ();

})


// ^ function create value show dom madhe
 function showOnDom(){
    //* variable declare karu local storage madhun data fetch karayla 
    const lsValueGet = localStorage.getItem('myKey');
    // console.log(lsValueGet);
    //* same jasa value store kela hota click madhe tashi condition laval lagen 
    if(lsValueGet){
       lsData = JSON.parse(lsValueGet)
    }
    else{
        lsData = [];
    }
    //^Now here we have to create and populate tha element on dom
    //^ let create dum variable for avoiding repetation of popup elements 
    let html = "";

    //^ need forech for many elements created

//    lsData.forEach(e => {
//         html  += ` <li> ${e}  <button id="deletebtn">X</button></li>`
//     });
lsData.forEach(element => {
    html  += ` <li> ${element}  <button id="deletebtn">X</button></li>`
});
 //? have apply  innerhtml  parent and override dummy 
   parentEl.innerHTML = html; 

   

 }

showOnDom()
// showOnDom()
