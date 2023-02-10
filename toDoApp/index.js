const parent = document.querySelector('#toDocontainer')
const inputEl = document.querySelector('#input')
const btnAdd = document.querySelector('#btnAdd')
const theDiv = document.querySelector('.items')

const theData = []

const addElTo = (item) => {
  // const theDiv = document.createElement("div");
  // theDiv.classList.add("items")
  // const createParent = parent.appendChild(theDiv);

  const theLi = document.createElement('li')
  theDiv.appendChild(theLi)

  theLi.innerHTML = ` ${item}
    <i class="fa-solid mark fa-circle-check "></i>
    <i class="fa-solid del fa-circle-xmark"></i>`

  
        const grabDelete = Array.from(document.getElementsByClassName('mark'))
        console.log(grabDelete)
        grabDelete.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            // console.log(e.target);
          e.target.parentElement.classList.toggle("done");

          
          //   console.log(e.target.parentElement)
          })
        })
  



  deleteEl()
 
}

function deleteEl() {
  const grabDelete = Array.from(document.getElementsByClassName('del'))
  // console.log(grabDelete);
  grabDelete.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // console.log(e.target);
      e.target.parentElement.remove()
    })
  })
}



btnAdd.addEventListener('click', function () {
  theText = inputEl.value
  if (theText != '') {
    addElTo(theText)
    // console.log("clicked")
    // console.log(inputEl.value);
    inputEl.value = ''
  }
})

/**
 * 
  function deletewrap () {
      const grabDelete = Array.from(document.getElementsByClassName("del"))
    console.log(grabDelete);
    
    grabDelete.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            console.log(e.target);
            e.target.parentElement.remove()
            storeData.splice(e.target.parentElement, 1)
            console.log(storeData);
            localStorage.setItem("data", JSON.stringify(storeData))
        })
    })
    
}

 */
