const input = document.getElementById("input")
const addInput = document.getElementById("btn")
const liList = document.getElementById("list")
// const deleteBtn = Array.from(document.getElementsByClassName("delete"))
// console.log(deleteBtn);

let storeData = localStorage.getItem("data")
console.log(storeData);

if (storeData === null){
    storeData = []
} else {
    storeData = JSON.parse(storeData)
}

addInput.addEventListener("click", () => {
    console.log(input.value);
    storeData.push(input.value)
    console.log(storeData);
    localStorage.setItem("data", JSON.stringify(storeData))
    storeData.forEach(i => {
        const liTag = document.createElement("li")
        liTag.innerHTML = `${i}  <button class="delete">delete</button>`
        liList.appendChild(liTag)
    })
    
    input.value = ""

    deletewrap();

})

function deletewrap () {
    const grabDelete = Array.from(document.getElementsByClassName("delete"))
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