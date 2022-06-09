/* NodeJs 12 샘플 코드 */

var request = require('request');

var url = 'http://apis.data.go.kr/B552584/EvCharger/getChargerStatus';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=deTn%2FKwNMakxW5MC72DSoHlSAfl%2FeJQe%2Bdtq6473%2BN8DdZUnNbR0e1UWIY8FOg6PMko21V9giTHQ4JsMyrFPuQ%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('period') + '=' + encodeURIComponent('5'); /* */
queryParams += '&' + encodeURIComponent('zcode') + '=' + encodeURIComponent('11'); /* */


    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        console.log('Status', response.statusCode);
        console.log('Headers', JSON.stringify(response.headers));
        console.log('Reponse received', body);
    });



// /* Javascript 샘플 코드 */

// var xhr = new XMLHttpRequest();
// var url = 'http://apis.data.go.kr/B552584/EvCharger/getChargerStatus'; /*URL*/
// var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'deTn%2FKwNMakxW5MC72DSoHlSAfl%2FeJQe%2Bdtq6473%2BN8DdZUnNbR0e1UWIY8FOg6PMko21V9giTHQ4JsMyrFPuQ%3D%3D'; /*Service Key*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
// queryParams += '&' + encodeURIComponent('period') + '=' + encodeURIComponent('5'); /**/
// queryParams += '&' + encodeURIComponent('zcode') + '=' + encodeURIComponent('11'); /**/
// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

// xhr.send('');