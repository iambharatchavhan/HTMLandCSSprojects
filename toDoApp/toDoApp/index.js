
const inputEl = document.querySelector('#input')
const btnAdd = document.querySelector('#btnAdd')
const theDiv = document.querySelector('.items')
let dataValue;
// Storing data in the local storage

// function Empty (){
//   if 
// }





btnAdd.addEventListener('click', () => {

  const InputText = inputEl.value
  if (InputText){
  const text = localStorage.getItem('data'); // initially it is null
  if (text) {
    dataValue = JSON.parse(text); // [] // ['ATUL']

  } else {
    dataValue = [];
  }
  console.log(dataValue)
  dataValue.push(InputText)
  localStorage.setItem('data', JSON.stringify(dataValue))
  inputEl.value = "";
  
}
else{
  Swal.fire("What’s cookin’, good lookin’?", "Please Add any Task!");
}
showTodoList()
})


// Show todo list on DOM

function showTodoList() {
  const text = localStorage.getItem('data');
  if (text) {
    dataValue = JSON.parse(text);

  } else {
    dataValue = [];
  }
  let html = "";
  dataValue.forEach(elem => {
    html += `
    <li>${elem}  <i class="fa-solid fa-circle-check mark"></i>
    <i class="fa-solid fa-circle-xmark delete"></i></li> 
    `
  });

  theDiv.innerHTML = html;

  const crossBtn = Array.from(document.getElementsByClassName('delete'));
  crossBtn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      dataValue.splice(index, 1);
      localStorage.setItem('data', JSON.stringify(dataValue))
      showTodoList();
    })
  })
 
  const checkBtn = Array.from(document.getElementsByClassName('mark'));
  checkBtn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
    elem.parentElement.classList.toggle('done')
    })
  })

}




showTodoList()
































/*
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
