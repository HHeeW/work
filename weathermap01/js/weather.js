'use strict';

const url = "https://api.openweathermap.org/data/2.5/weather?q=gimpo-si&units=metric&appid=edce18bc1a8f5513adb9a29f90946276&lang=kr";

function myweather(){
    fetch(url)
    .then(rs => rs.json())
    .then(data => {
        drawWeather(data);
    });
    console.log(url);
}
function drawWeather(d){
    //let temp = Math.round(Number(d.main.temp)-273.15);
    
    document.getElementById("description").innerHTML = d.weather[0].description;
    document.getElementById("temp").innerHTML = Math.round(d.main.temp) + '&deg;';
    document.getElementById("max_temp").innerHTML = Math.round(d.main.temp_max) + '&deg; /';
    document.getElementById("min_temp").innerHTML = Math.round(d.main.temp_min) + '&deg;';
    document.getElementById("feels_like").innerHTML = '체감온도 '+Math.round(d.main.feels_like) + '&deg;';
    document.getElementById("location").innerHTML = d.name; 
    document.getElementById("img").src = "https://openweathermap.org/img/wn/"+d.weather[0].icon+"@2x.png"
    document.getElementById("humidity").innerHTML = d.main.humidity +'%';
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition);
    }else{
        geo.innerHTML = "당신의; 웹브라우저는 위치기반 서비스를 허용하지 않네요";
    }
}
function showposition(posiiton){
    let lat = posiiton.coords.latitude;
    let lon = posiiton.coords.longitude;
    //let txt = `당신의 현재 위치는 위도 : ${lat}, 경도 : ${lon}입니다`;
    const allweather = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=metric&appid=edce18bc1a8f5513adb9a29f90946276&lang=kr"
    //console.log(txt);
    //console.log(allweather);
    fetch(allweather)
    .then(rs => rs.json())
    .then(data => {
        timeWeather(data);
    });
}

function timeWeather(all){
    let all_time = document.getElementsByClassName("all_time");
    let time_weather = document.getElementsByClassName("time_weather");
    let time_temp = document.getElementsByClassName("time_temp");


    all_time[0].innerHTML = all.hourly[0].dt;
    time_weather[0].src = "https://openweathermap.org/img/wn/"+all.hourly[0].weather[0].icon+"@2x.png";
    time_temp[0].innerHTML = Math.round(all.hourly[0].temp) + '&deg;';
}




window.onload = () => myweather();
window. addEventListener= ('load', getLocation());