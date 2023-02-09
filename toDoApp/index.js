const parent = document.querySelector("#toDocontainer");
const inputEl = document.querySelector("#input");
const btnAdd = document.querySelector("#btnAdd");





const addElTo = (item) =>{
    const theDiv = document.createElement("div");
    theDiv.classList.add("items")
    const createParent = parent.appendChild(theDiv);
    const theLi = document.createElement("li")
    createParent.appendChild( theLi )

    theLi.innerHTML = ` ${item}
    <i class="fa-solid fa-circle-check "></i>
    <i class="fa-solid fa-circle-xmark"></i>`
    
    const mark = document.querySelector(".fa-circle-check");
    const deleteEl = document.querySelector(".fa-circle-xmark");
    mark.addEventListener('click', function(){
            
            theLi.classList.toggle("done");
    })

    deleteEl.addEventListener('click',function(){
        theLi.remove();
    })

}




btnAdd.addEventListener('click', function(){
    
    theText = inputEl.value
    if(theText != ""){
    addElTo(theText);
    console.log("clicked")
    console.log(inputEl.value);
    inputEl.value = "";
}
        
})

