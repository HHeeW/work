var now = new Date();
var month = now.getMonth() + 1;
var date = now.getDate();
var day = now.getDay();
var week = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
document.getElementById('month').innerHTML = month;
document.getElementById('date').innerHTML = date;
document.getElementById('day').innerHTML = week[day];