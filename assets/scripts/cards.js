const obj2 = {
    'url':'http://api.openweathermap.org/data/2.5/forecast?q=',
   'api_key':'487b6dde33fb04a235fb31c96b03e84c'
  }

function cards(){
    let city = document.getElementById("city").value;
    let card_info = document.getElementById("weather-cards")
    fetch(obj2.url+city+"&appid="+obj2.api_key)
  .then((response) => response.json())
  .then((json) => {
    console.log(json.list[5].weather);
        card_info.innerHTML = `
        <div class="card rounded my-5 shadow-lg">
            <img id="weather-icon" src=http://openweathermap.org/img/w/${json.list[5].weather[0].icon +".png"}>
            <div class="card-body" id="card0">
            ${parseInt(json.list[5].main.temp-273.15)}°C   
            <p>${json.list[5].weather[0].description}</p>
            <p>${json.list[5].dt_txt.split(' ')[0]}</p>
            </div>
        </div>
        <div class="card rounded my-5 shadow-lg">
            <img id="weather-icon" src=http://openweathermap.org/img/w/${json.list[10].weather[0].icon +".png"}>
            <div class="card-body" id="card1">
                ${parseInt(json.list[15].main.temp-273.15)}°C   
                <p>${json.list[15].weather[0].description}</p>
                <p>${json.list[15].dt_txt.split(' ')[0]}</p>
            </div>
        </div>
        <div class="card rounded my-5 shadow-lg">
            <img id="weather-icon" src=http://openweathermap.org/img/w/${json.list[15].weather[0].icon +".png"}>
            <div class="card-body" id="card2">
            ${parseInt(json.list[25].main.temp-273.15)}°C   
            <p>${json.list[25].weather[0].description}</p>
            <p>${json.list[25].dt_txt.split(' ')[0]}</p>
            </div>
        </div>
        <div class="card rounded my-5 shadow-lg">
            <img id="weather-icon" src=http://openweathermap.org/img/w/${json.list[20].weather[0].icon +".png"}>
            <div class="card-body" id="card3">
                ${parseInt(json.list[35].main.temp-273.15)}°C   
                <p>${json.list[35].weather[0].description}</p>
                <p>${json.list[35].dt_txt.split(' ')[0]}</p>
            </div>
        </div>
        <div class="card rounded my-5 shadow-lg">
            <img id="weather-icon" src=http://openweathermap.org/img/w/${json.list[25].weather[0].icon +".png"}>
            <div class="card-body" id="card4">
            ${parseInt(json.list[37].main.temp-273.15)}°C   
            <p>${json.list[37].weather[0].description}</p>
            <p>${json.list[37].dt_txt.split(' ')[0]}</p>
            </div>
        </div>`;
        
        
  });
}
