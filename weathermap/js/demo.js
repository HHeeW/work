'use strict';

const url = "https://api.openweathermap.org/data/2.5/weather?q=gimpo-si&appid=edce18bc1a8f5513adb9a29f90946276&lang=kr";
function myweather(){
    fetch(url)
    .then(rs => rs.json())
    .then(data => {
        drawWeather(data);
    });
}
function drawWeather(d){
    let temp = Number(d.main.temp)-273.15;
    temp = temp.toFixed(2);
    
    document.getElementById("description").innerHTML = d.weather[0].description;
    document.getElementById("temp").innerHTML = temp + '&deg;';
    document.getElementById("location").innerHTML = d.name; 
    document.getElementById("img").innerHTML = "https://openweathermap.org/img/wn/"+d.weather[0].icon+"@2x.png"
}

window.onload = () => myweather();