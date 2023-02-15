const img = document.querySelector('#theImg')
const theBtn = document.querySelector('#btnLoad')

theBtn.addEventListener('click',function(){

    const request = new XMLHttpRequest();
    request.open('GET', `https://meme-api.com/gimme`);
    
    request.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText)
            // console.log(data);
            const source = data.url;
            // console.log(source);
       
             img.innerHTML = `<img src="${source}" alt="" id="theImg">`;
        }
    
    }
    request.send();

})

