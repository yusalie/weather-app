function search(){
    let city_name = document.getElementById("city-name");
    let city = document.getElementById("city").value;
    let info = document.getElementById("info")
    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=487b6dde33fb04a235fb31c96b03e84c")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    city_name.innerHTML = `${json.city.name}`;
    info.innerHTML = `<div id="weather">
    ${parseInt(json.list[0].main.temp-273.15)}°C
    <img id="weather-icon" src=http://openweathermap.org/img/w/${json.list[0].weather[0].icon +".png"}>
    <p>${json.list[0].weather[0].description}</p>
    </div>`;
  });
}
