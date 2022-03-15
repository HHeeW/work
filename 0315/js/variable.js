'use strict';
let globalName = '전역변수';
{
    let username = '철수';
    console.log(username);
    username = '민수';
    console.log(username);
}
//글로벌 scope는 app의 시작에서 끝까지 항상 메모리에 탑재되어 있기 떄문에최소한으로 사용하는 것이 좋다.
// 이제부터 변수 선언은 let으로 한다. 
console.log(globalName);

console.log(age);
age = 4;
console.log(age);
var age;
{
    var userage = 25;
    console.log(userage);
}
console.log(userage);

// var hoisting ()
// 1. 호이스팅된다.
// 2.block scope가 되지 않는다.

/*
    constnat : 상수
    const => 변하지 않는 내용
    -암호화
    -메모리 안전 관리
    -실수를 보호
    const myname = '홍길동;

    왠만하면 한번 할당한 값이 변경되지 않는 데아터 타입을 사용하자.
    -보안상
    -스레드들이 동시에 변경하는 것을 막아준다.
    -코드를 변경할 떄 실수를 막는다.
*/
    const weekDat = 7;
/*
    자바스크립트 변수의 종류

    class MAin{
        public static void main(String[] args){
            byte a = 2;
            short b = 12;
            long c = 12;
            int d = 12;
            float e = 1.2f
            double f = 1.2;
        }
    }
    자바스크립트 : 
    single item : number, string, boolean, null, nudefined, symbol
    object let str = {name: '철수', age: 20};
    box container
    function: let str = function(){

    }
    str();
    first-class
*/

const count = 17; //정수형 integer
const siz = 27.12; //decimal number

console.log('값은' + count + '이며 타입은' + typeof count + '입니다.');

console.log(`값은 ${count}이며 타입은 ${typeof count}입니다.`);

//numver 에서 특별히 봐야할 것듯
const infinity = 1 / 0;
const nInfinity = -1 / 0;
const nAn = 'not a number' / 2;
//javascript 표현할 수 있ㄴㄴ 숫자의 최대값 최소값
// -2**53 ~ 2**53;
const bigInt = 123123123123123123123123123123123123123123n;
console.log(infinity);
console.log(nInfinity);
console.log(nAn);
console.log(bigInt);

// string
const char = 'c';
const str = '문자열';
const greeting = '안녕하시오?'+ str;

/*
1.greeting과 type을 출력하라.
2.greeting의 마지막에 '님을 추가하고 타입을 출력하라.
3. 모든 출력 문은 백틱(`)을 이용하라.
*/

console.log(`${greeting}, 타입: ${typeof greeting}`);
const hello = greeting+ ' 님';
console.log(`${hello}, 타입: ${typeof hello}`);

/*
    boolean
    false : 0, null, undefined, NaN, ''
    true : 그외
*/
const tr = true;
const test = 3 < 1;//false
console.log(`${tr}타입은 ${typeof tr}`);
console.log(`${test}, 타입은 ${typeof test}`);

let noting = null;
let x;

//symbol : 객체에 대한 고유 식별자 생성해 주는 것
//create unique identifiers for object

const sb1 = Symbol('id');
const sb2 = Symbol('id');
console.log(sb1 === sb2);
//심볼은 바로 출력할 수 없고 심볼.description 해야한다.
const gsb1 = Symbol.for('id');
const gsb2 = Symbol.for('id');
console.log(gsb1 === gsb2);

console.log(`심볼출력 : ${sb1.description}, 타입: ${typeof sb1}`);

/*
    선언할 때 타입을 결정하지 안혹 런타임으로 실행될 때 타입이 할당된다. dynamic typeing
*/

let text = '안녕하세요?';
console.log(text.charAt(0));
console.log(`value: ${text}, ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);


/* typescript */
const user = {uname: '철수', age: 20, area: '김포'};

user.uname = '민수';
console.log(user.uname);


let sports = '축구';
let music = '재즈';
function get(){
    var sports = '농구';
    let music = '클래식';
    console.log("1:", sports);
    console.log("2:", this.sports);
    console.log("3:", this.music);
}
if(sports){
    let sports = '농구';
    console.log(`블록: ${sports}`);
}
console.log(`글로벌: ${sports}`);
