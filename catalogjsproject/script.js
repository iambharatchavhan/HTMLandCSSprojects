//^ first dom project on event listner
const modelOne = document.querySelector("#mainImg");
const btnOne = document.querySelector("#btn-one");
const btnTwo = document.querySelector("#btn-two");
const btnThree = document.querySelector("#btn-three");
const btnFour = document.querySelector("#btn-four");
const prise = document.querySelector("#prise")


btnOne.addEventListener('click',function(){
    modelOne.src = "./imges/img-one.jpg";
    prise.innerHTML="PRISE : 999Rs"
})

btnTwo.addEventListener('click',function(){
    modelOne.src = "./imges/img-two.jpg";
    prise.innerHTML="PRISE : 777Rs"
})
btnThree.addEventListener('click',function(){
    modelOne.src = "./imges/img-three.jpg" ;
    prise.innerHTML="PRISE : 749Rs"
})
btnFour.addEventListener('click',function(){
    modelOne.src = "./imges/img-four.jpg" ;
    prise.innerHTML="PRISE : 876Rs"
})

