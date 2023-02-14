let theH1 = document.getElementsByClassName('theH1')[0];

const theDate = new Date()
// console.log( theDate.getDate());
// console.log( theDate.getDay());
// console.log( theDate.getMonth() + 1);
// console.log( theDate.getFullYear());
// console.log( theDate.getHours());
// console.log( theDate.getMinutes());
// console.log( theDate.getSeconds());


let fullDate =`The date : ${theDate.getDate()}/${(theDate.getMonth() + 1)}/${theDate.getFullYear()}  TheTime: ${theDate.getHours()}:${theDate.getMinutes()}:${theDate.getSeconds()}  `
console.log(fullDate);
theH1.innerHTML = fullDate;