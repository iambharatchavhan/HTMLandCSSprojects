const main = document.getElementById("main");
const brtColor = document.getElementById("btnColor");
// const colors = document.getElementById("lable");


brtColor.addEventListener("click", function() {
    let color = getRandomColor();
    main.style.backgroundColor = color;
    brtColor.innerText = color;

  });
  
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    
    }
    return color;
  }