'use strict';

let myLat = 0, myLng = 0;
const search = document.getElementsByClassName("search")[0];
const searchBox = document.getElementsByClassName("searchBox")[0];

search.addEventListener("click", function(){
   searchBox.classList.add("active");
   document.getElementById("search").focus();
});

document.getElementById("search").addEventListener("blur", function(){
   searchBox.classList.remove("active");
});

//위치값 받아오기
if(navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position){
       myLat = position.coords.latitude;
       myLng = position.coords.longitude;
       getWeather(myLat, myLng, '');
   });
}

function getWeather(lat, lon, city){
   const url = "https://api.openweathermap.org/data/2.5/forecast";
   const apikey = "edce18bc1a8f5513adb9a29f90946276";
   let mydata;
   if(city == '') {
      mydata = {
         lat: lat,
         lon: lon,
         appid: apikey,
         units: 'metric',
         lang: 'kr'
      }
   }else{
     mydata = {
        q: city,
        appid: apikey,
        units: 'metric',
        lang: 'kr'
     }
   }
   
   let params = Object.keys(mydata).map(key => key + '=' + mydata[key]).join('&');
   console.log(params);

   fetch(`${url}?${params}`)
   .then( reson => reson.json())
   .then( rs => {
      console.log(rs);
      /*
       1.도시명 2.시간 3.아이콘 4.현재온도 
      5.최고온도. 최저온도 6.설명 
      7.해뜨는 시간 8.해지는 시간 9.바람 
      10.습도 11.구름 12.체감온도
      */

    console.log("도시명", county(rs.city.name));
     //console.log("시간")
    console.log("아이콘", rs.list[0].weather[0].icon);
    console.log("현재온도", rs.list[0].main.temp);
    console.log("최저온도", rs.list[0].main.temp_min);
    console.log("최고온도", rs.list[0].main.temp_max);
    console.log("설명", rs.list[0].weather[0].description);
    console.log("해뜨는 시간", new Date(rs.city.sunrise*1000));
    console.log("해지는 시간", new Date(rs.city.sunset*1000));
    console.log("바람세기", rs.list[0].wind.speed);
    console.log("바람방향", rs.list[0].wind.deg);
    console.log("습도", rs.list[0].main.humidity);
    console.log("구름", rs.list[0].clouds.all);
    console.log("체감온도", rs.list[0].main.feels_like);
    

   //   const myClass = document.getElementsByClassName;
   //   const myId = document.getElementById;

   //   myClass('city-title')[0].innerHTML = `${rs.city.name}`;
   });
}
