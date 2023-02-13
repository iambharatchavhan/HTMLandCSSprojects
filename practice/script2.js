const parent = document.querySelector("#details");
const input = document.querySelector("#textData");
const btn = document.querySelector("#tbnAdd");
console.log(btn);
 
let lsData;

btn.addEventListener('click', () => {
    
        const inputData = input.value;
      const  lsDataGet = localStorage.getItem("theNewKey");
        if( lsDataGet){
            lsData = JSON.parse(lsDataGet)
        }
        else{
            lsData = [];
        }
        lsData.push(inputData);
        localStorage.setItem('theNewKey',JSON.stringify(lsData))
        input.value = " "
 
})

function getDataFrom() {
    
}