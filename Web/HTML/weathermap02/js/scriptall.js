'use strict';

let myLat = 0, myLng = 0;
const search = document.getElementsByClassName("search")[0];
const searchBox = document.getElementsByClassName("searchBox")[0];

search.addEventListener("click", function(){
   searchBox.classList.add("active");
   document.getElementById("search").focus();
});

// 검색
document.searchForm.addEventListener("keydown", (e) =>{
   let searchtext='';
   if(e.code ==="Enter"){
      e.preventDefault();
      searchtext = document.getElementById("search").value;
      searchBox.classList.remove("active");
      document.getElementById("search").value ='';
   }
   getWeather('','',searchCity(searchtext));
})

//위치값 받아오기
if(navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position){
       myLat = position.coords.latitude;
       myLng = position.coords.longitude;
       getWeather(myLat, myLng, '');
   });
}
function getWeather(lat, lon, city){
   const url1 = "https://api.openweathermap.org/data/2.5/forecast";
   const url2 = "https://api.openweathermap.org/data/2.5/onecall";

   // const apikey = "edce18bc1a8f5513adb9a29f90946276";
   const apikey = "800656633b707e49d0f3de4b57370855";
   // const apikey = "61817fe9871c5ce196a7b67a92ce3a6b";

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

   fetch(`${url1}?${params}`)
   .then( reson => reson.json())
   .then( rs => {
      console.log(rs);
      /*
       1.도시명 2.시간 3.아이콘 4.현재온도 
      5.최고온도. 최저온도 6.설명 
      7.해뜨는 시간 8.해지는 시간 9.바람 
      10.습도 11.구름 12.체감온도
      */

      let sunriseTime = new Date(rs.city.sunrise*1000);
      let sunsetTime = new Date(rs.city.sunset*1000);
      let sunrise = `${sunriseTime.getHours()}시${sunriseTime.getMinutes()}분`;
      let sunset = `${sunsetTime.getHours()}시${sunsetTime.getMinutes()}분`;
      let nowTime = new Date(rs.list[0].dt*1000);  //<-- 유닉스타임을 시간으로 변환하는 방법
      let nowDate = nowTime.getFullYear() + "년 " + (parseInt(nowTime.getMonth()) + 1) +"월 " + nowTime.getDate() + "일 " + nowTime.getHours() + "시";

      console.log("도시명", county(rs.city.name));
      console.log("시간", nowDate);
      console.log("아이콘", rs.list[0].weather[0].icon);
      console.log("현재온도", rs.list[0].main.temp);
      console.log("최저온도", rs.list[0].main.temp_min);
      console.log("최고온도", rs.list[0].main.temp_max);
      console.log("설명", rs.list[0].weather[0].description);
      console.log("해뜨는 시간", sunrise);
      console.log("해지는 시간", sunset);
      console.log("바람세기", rs.list[0].wind.speed);
      console.log("바람방향", rs.list[0].wind.deg);
      console.log("습도", rs.list[0].main.humidity);
      console.log("구름", rs.list[0].clouds.all);
      console.log("체감온도", rs.list[0].main.feels_like);
      
      document.getElementById("city").innerHTML = county(rs.city.name);
      document.getElementById("now_Time").innerHTML = nowDate;
      document.getElementById("icon").src =  "images/design/"+ rs.list[0].weather[0].icon +".svg";
      document.getElementById("nowtemp").innerHTML = Math.round(rs.list[0].main.temp) + "&deg;";
      document.getElementById("maxtemp").innerHTML = Math.round(rs.list[0].main.temp_max) + "&deg;";
      document.getElementById("mintemp").innerHTML = Math.round(rs.list[0].main.temp_min) + "&deg;";
      document.getElementById("desc").innerHTML = rs.list[0].weather[0].description;
      document.getElementById("sunrise").innerHTML = sunrise;
      document.getElementById("sunset").innerHTML = sunset;
      document.getElementById("wind").innerHTML = rs.list[0].wind.speed + "m/s";
      document.getElementById("humidity").innerHTML = rs.list[0].main.humidity + "%";
      document.getElementById("clouds").innerHTML = rs.list[0].clouds.all;
      document.getElementById("feels_like").innerHTML = rs.list[0].main.feels_like  + "&deg;";

      let html = "";
      for(let i in rs.list){
         let getTime = new Date(rs.list[i].dt*1000);  //<-- 유닉스타임을 시간으로 변환하는 방법
         let dayHours = (getTime.getHours() >12) ? `PM ${getTime.getHours()-12}`:`AM ${getTime.getHours()}`;
         let getDate = getTime.getDate() + "일 " + dayHours + "시";
            html += `
               <li class="swiper-slide">
                  <div class="dayweather">
                     <p class="daydate">${getDate}</p>
                     <div class="img-Box">
                        <img src="images/design/${rs.list[i].weather[0].icon}.svg" alt="01d">
                     </div>
                     <p class="daytemp">${Math.round(rs.list[i].main.temp_max)}&deg;/${Math.round(rs.list[i].main.temp_min)}&deg;</p>
                     <p class="daydesc">${rs.list[i].weather[0].description}</p>
                  </div>
               </li>
               `;
      }
      document.getElementById("swiper").innerHTML = html;
   });
   
   // fetch(`${url2}`)
}
