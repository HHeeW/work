var now = new Date();
var m = now.getMonth();
var date = now.getDate();
var day = now.getDay();
var month = new Array('01','02','03','04','05','06','07','08','09','10','11','12');
var week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
document.getElementById('month').innerHTML = month;
document.getElementById('date').innerHTML = date;
document.getElementById('day').innerHTML = week[day];

var info = month[m] + "월 " + day + "일 " + now.getHours() + ":" + now.getMinutes();
document.getElementById('info').innerHTML = info;