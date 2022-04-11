//배열 객체
//날짜 객체
//var 참조변수 = new Array();

// var myInfo = new Array(10, "홍길동", "율도국", "황제");
// var myInfo = [10, "홍길동", "율도국", "황제"];

// var myInfo = new Array();
// myInfo[0] = 10;
// myInfo[1] = "홍길동";
// myInfo[2] = "율도국";
// myInfo[3] = "황제";

// document.write(myInfo[0]);

// var arr=[30, 19, "철수", "영수", " 순이", true, false, "금자", 0, 10, 12, 19, 20];

// 배열의 길이: 배열변수.length;
// document.write("배열의 길이:" + arr.length+"<br><br>")

// for(i = 0; i < arr.length; i++){
//     document.write(arr[i]+"<br>");
// }

// for(n in arr){
//     document.write(arr[n], "<br>")
// }

// var arr1=["김포공항", "고촌", "풍무", "사우", "걸포북변"];
// var arr2=["운양", "장기", "마산", "구래", "양촌"];
// var rs = arr1.join(" -> ");
// document.getElementById("gd1").innerHTML = rs;
// rs = arr1.concat(arr2);
// document.getElementById("gd2").innerHTML = rs;

// //begin : 잘라낼 배열의 시작 index
// // end : 잘라낼배열의 종료 index(end 값은 잘라낼 배열에 포함되지 않는다)
// // end 생략되면, brgin부터 배열의 끝까지 잘라낸다

// rs = arr1.slice(1, 3);
// document.getElementById("gd3").innerHTML = rs;

// arr2.sort(); //가나다순 정렬
// document.getElementById("gd4").innerHTML = arr2;

// arr2.reverse();
// document.getElementById("gd5").innerHTML = arr2;

var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];
//2번 인덱스부터 1개의 데이터를 삭제한 다음 서초, 역삼을 추가
greenArr.splice(2, 1, "서초", "역삼");
document.getElementById("arr1").innerHTML = greenArr;

var dt1 = yellowArr.pop(); //마지막거 잘라내기
document.getElementById("arr2").innerHTML = yellowArr;

var dt2 = yellowArr.shift();//첫번째꺼 잘라내기
document.getElementById("arr3").innerHTML = yellowArr;

yellowArr.push(dt2);
document.getElementById("arr4").innerHTML = yellowArr;

yellowArr.unshift(dt1);
document.getElementById("arr5").innerHTML = yellowArr;