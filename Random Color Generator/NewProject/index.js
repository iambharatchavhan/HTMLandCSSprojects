const main = document.getElementById("main");
const brtColor = document.getElementById("btnColor");
const brtColorTwo = document.getElementById("btnColorTwo");
const colorOne = document.getElementById("colorsOne");
const colorTwo = document.getElementById("colorsTwo");
const simple = document.getElementById("simple")
const gradientColor = document.getElementById("gradient")
// const colors = document.getElementById("lable");


brtColor.addEventListener("click", function() {
    let color = getRandomColor();
    colorOne.style.backgroundColor = color;
    simple.innerText = color;

  });
  
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    
    }
    return color;
  }


// --------------*-------------------------


function getRandomColor2() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}

function setGradient() {
  const color1 = getRandomColor2();
  const color2 = getRandomColor2();
  
  colorTwo.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  gradientColor.innerText = `linear-gradient(to right, ${color1}, ${color2})`;
}






  brtColorTwo.addEventListener('click',function(){
    setGradient();
         
  }) 
