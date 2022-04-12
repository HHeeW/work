'use strict';

let myLat = 0, myLng = 0;
const search = document.getElementsByClassName("search")[0];
const searchBox = document.getElementsByClassName("searchBox")[0];

search.addEventListener("click", function(){
   searchBox.classList.add("active");
   document.getElementById("search").focus();
});

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
   const url = "https://api.openweathermap.org/data/2.5/onecall";
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

   let sunriseTime = new Date(rs.daily[0].sunrise*1000);
   let sunsetTime = new Date(rs.daily[0].sunset*1000);
   let sunrise = `${sunriseTime.getHours()}시${sunriseTime.getMinutes()}분`;
   let sunset = `${sunsetTime.getHours()}시${sunsetTime.getMinutes()}분`;
   let nowTime = new Date(rs.hourly[0].dt*1000);  //<-- 유닉스타임을 시간으로 변환하는 방법
   let nowDate = nowTime.getFullYear() + "년 " + (parseInt(nowTime.getMonth()) + 1) +"월 " + nowTime.getDate() + "일 ";

    console.log("도시명", county(rs.timezone.split("/")[1]));
    console.log("시간", nowDate);
    console.log("아이콘", rs.daily[0].weather[0].icon);
    console.log("온도", rs.daily[0].temp);
    console.log("현재온도", rs.daily[0].temp.day);
    console.log("최고온도", rs.daily[0].temp.max);
    console.log("최저온도", rs.daily[0].temp.min);
    console.log("설명", rs.daily[0].weather[0].description);
    console.log("해뜨는 시간", sunrise);
    console.log("해지는 시간", sunset);
    console.log("바람세기", rs.daily[0].wind_speed);
    console.log("바람방향", rs.daily[0].wind_deg);
    console.log("습도", rs.daily[0].humidity);
    console.log("구름", rs.daily[0].clouds);
    console.log("체감온도", rs.daily[0].feels_like.day);
    
    document.getElementById("city").innerHTML =  county(rs.timezone.split("/")[1]);
    document.getElementById("now_Time").innerHTML = nowDate;
    document.getElementById("icon").src =  "images/design/"+ rs.daily[0].weather[0].icon +".svg";
    document.getElementById("nowtemp").innerHTML = Math.round(rs.daily[0].temp.day) + "&deg;";
    document.getElementById("maxtemp").innerHTML = Math.round(rs.daily[0].temp.max) + "&deg;";
    document.getElementById("mintemp").innerHTML = Math.round(rs.daily[0].temp.min) + "&deg;";
    document.getElementById("desc").innerHTML = rs.daily[0].weather[0].description;
    document.getElementById("sunrise").innerHTML = sunrise;
    document.getElementById("sunset").innerHTML = sunset;
    document.getElementById("wind").innerHTML = rs.daily[0].wind_speed + "m/s";
    document.getElementById("humidity").innerHTML = rs.daily[0].humidity + "%";
    document.getElementById("clouds").innerHTML = rs.daily[0].clouds;
    document.getElementById("feels_like").innerHTML = rs.daily[0].feels_like.day  + "&deg;";

   
    
   
   let html = "";
   for(let i in rs.hourly){
      let getTime = new Date(rs.hourly[i].dt*1000);  //<-- 유닉스타임을 시간으로 변환하는 방법
      let dayHours = (getTime.getHours() >12) ? `PM ${getTime.getHours()-12}`:`AM ${getTime.getHours()}`;
      let getDate = getTime.getDate() + "일 " + dayHours + "시";
         html += `
            <li class="swiper-slide">
               <div class="dayweather">
                  <p class="daydate">${getDate}</p>
                  <div class="img-Box">
                     <img src="images/design/${rs.hourly[i].weather[0].icon}.svg" alt="01d">
                  </div>
                  <p class="daytemp">${Math.round(rs.hourly[i].temp)}&deg;</p>
                  <p class="daydesc">${rs.hourly[i].weather[0].description}</p>
               </div>
            </li>
            `;
   }
   document.getElementById("swiper").innerHTML = html;
   
   // let htmldaily = '';
   // for(let i in rs.daily){
   //    let getTime = new Date(rs.daily[i].dt*1000);  //<-- 유닉스타임을 시간으로 변환하는 방법
   //    let dayHours = (getTime.getHours() >12) ? `PM ${getTime.getHours()-12}`:`AM ${getTime.getHours()}`;
   //    let getDate = getTime.getDate() + "일 " + dayHours + "시";
   //    htmldaily += `
   //          <li class="swiper-slide">
   //             <div class="dayweather">
   //                <p class="daydate">${getDate}</p>
   //                <div class="img-Box">
   //                   <img src="images/design/${rs.hourly[i].weather[0].icon}.svg" alt="01d">
   //                </div>
   //                <p class="daytemp">${Math.round(rs.hourly[i].temp)}&deg;</p>
   //                <p class="daydesc">${rs.hourly[i].weather[0].description}</p>
   //             </div>
   //          </li>
   //          `;
   // }
   // document.getElementById("daily").innerHTML = htmldaily;
   });
}
