
// const theData = {
//     "time": {
//     "updated": "Feb 14, 2023 15:43:00 UTC",
//     "updatedISO": "2023-02-14T15:43:00+00:00",
//     "updateduk": "Feb 14, 2023 at 15:43 GMT"
//     },
//     "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
//     "chartName": "Bitcoin",
//     "bpi": {
//     "USD": {
//     "code": "USD",
//     "symbol": "&#36;",
//     "rate": "21,975.0557",
//     "description": "United States Dollar",
//     "rate_float": 21975.0557
//     },
//     "GBP": {
//     "code": "GBP",
//     "symbol": "&pound;",
//     "rate": "18,362.1807",
//     "description": "British Pound Sterling",
//     "rate_float": 18362.1807
//     },
//     "EUR": {
//     "code": "EUR",
//     "symbol": "&euro;",
//     "rate": "21,406.9126",
//     "description": "Euro",
//     "rate_float": 21406.9126
//     }
//     }
//     }
//     console.log(theData.bpi.EUR.rate);
//     console.log(theData.chartName);
//     console.log(theData.bpi);
  











const theHead = document.getElementsByClassName("price")[0];


const request = new XMLHttpRequest();
    request.open('GET', `https://api.coindesk.com/v1/bpi/currentprice.json`);

    request.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText)
            console.log(data);
            // Exception in case of China
            // let data2 = JSON.parse(this);
            // console.log(data2)  
            const time = data.bpi.EUR.symbol;
            console.log(time);

            theHead.innerHTML = time;
        }
      
      
    }
  request.send();





  /**
   
function getCountry(country = 'india') {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

    request.onload = function () {
        if (this.status === 200) {
            let [data] = JSON.parse(this.responseText)
            // Exception in case of China
            if (country.toLowerCase() === 'china') {
                data = JSON.parse(this.responseText)[2]
            }

            const flag = data.flags.png;
            const countryName = data.name.official;
            const capitals = data.capital;
            let capitalList = "";

            capitals.forEach(capital => {
                capitalList += capital + ", "
            });
            capitalList = capitalList.slice(0, -2)

            const region = data.region;
            const population = (data.population / 1000000).toFixed(1)
            const languages = data.languages;
            let languageList = "";
            for (let x in languages) {
                languageList += languages[x] + ", "
            }
            languageList = languageList.slice(0, -2)
            const area = (data.area / 1000000).toFixed(2) + " Million sq.km"
            const currencyObj = data.currencies;
            let currency = "";
            for (let i in currencyObj) {
                currency = currencyObj[i].name
            }
            card.innerHTML = `
            <img src="${flag}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${countryName}</h5>
            
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Capital :<strong> ${capitalList} </strong></li>
            <li class="list-group-item">Region :<strong> ${region} </strong> </li>
            <li class="list-group-item">Population : <strong> ${population} M </strong> </li>
            <li class="list-group-item">Languages : <strong> ${languageList} </strong></li>
            <li class="list-group-item">Area : <strong> ${area} </strong>  </li>
            <li class="list-group-item">Currency : <strong> ${currency} </strong>  </li>
            
        </ul>
            `
        } else {
            card.innerHTML = `
            <img src="./error.png"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title errorText">Request Failed or Country Name does not exist. Please Try Again!</h5>
            
        </div>
       `

        }
    }
    card.addEventListener('animationend', () => {
        card.classList.remove('x')
    })
    request.send();
}


getCountry();
 
   */