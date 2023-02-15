// const theHead = document.getElementsByClassName("price")[0];
const jokes = document.querySelector('#joke')
const punchs = document.querySelector('#punch')
const cat = document.querySelector('#category')
const btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
    const request = new XMLHttpRequest();
    request.open('GET', `https://official-joke-api.appspot.com/random_joke`);

    request.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText)
            console.log(data);
          const punch = data.punchline;
          const joke = data.setup;
          const type = data.type;
               
          jokes.innerHTML = `<h2 id="joke">${joke}</h2>`
          punchs.innerHTML = `<h2 id="punch">${punch}</h2>`
          cat.innerHTML = `Category: ${type}`
         

        }
      
      
    }
  request.send();
})

