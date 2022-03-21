'user strict';

//arrow function

const add = function(a, b){
    return a + b;
}

//화살표 함수로 만들어 보세요.
/* 화살표 함수에서는 function을 사용하지 않습니다. 바로() 써주시면 됩니다.
    ()다음에 화살표를 만들고 코드를 작성한다. 만약 return을 써야 할 경우에는
    {}를 만들어 주어도 됩니다.
*/

const add2 = (a, b) => { return a + b};

(function hello(){
    console.log("반갑습니다.");
})();

//calcultae 함수를 만들어 보자. command, a, b 세가지를 매개변수로 받아서 더하기, 빼기, 곱하기, 나누기, 나머지를 계산해 주는 함수를 만들어 보자.

function calcultae(command, a, b){
    switch(command){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        default:
            throw Error('계산 명령이 틀렸습니다.');
    }
}
console.log(calcultae('+', 20, 5));

//Javascript class
//1. 클래스의 필수 가족 (생성자와 메소드)
 class Person{
     //생성자
     constructor(name, age){
         //field(속성)
         this.name = name;
         this.age = age;
     }
 }
 const chulsu = new Person('a', 30);
 const sooni = new Person('b', 28)
 console.log(`이름 : ${chulsu.name}, 나이 : ${chulsu.age}`);
 console.log(`이름 : ${sooni.name}, 나이 : ${sooni.age}`);

 class Jeans{
     constructor(name, color, price){
         this.name = name;
         this.color = color;
         this.price = price;
     }
     showPrice(){
         console.log(`이 ${this.name}의 가격은 ${this.price}이고 색깔은 ${this.color}입니다.`)
     }
 }
 const myjean = new Jeans("Lee", "white blue", "200,000원");
 myjean.showPrice();

 class Chair{
     constructor(color, height, size, price){
         this.color = color;
         this.height = height;
         this.size = size;
         this.price = price;
     }
     showchair(){
         console.log(`의자의 색깔은 ${this.color}이고 앉은 높이는 ${this.height}이며 크기는 ${this.size}이다 가격은 ${this.price}입니다.`)
     }
 }
 const mychair = new Chair("green", "100cm", "23", "134,000");
 mychair.showchair();

 //2.getter 와 setter의 이용
 //커피자판기를 만들자 300원 이상을 누르면 밀크커피가 나오고 300원 미만을 누르면 모자라요.

 class CoffeeMachine{
     constructor(money){
         this.coffee = '맥심';
         this.sugar = '설탕';
         this.cream = '크림';
         this.money = money;
     }

     get money(){
        return this._money;
     }

     set money(value){
         this._money = (value > 299) ? makeCoffee() : console.log('돈이 모자라요. 다시 넣으시던가.');  
     }

     makeCoffee(){
         console.log(`1.${this.coffee}를 넣습니다.`);
         console.log(`2.${this.sugar}를 넣습니다.`);
         console.log(`3.${this.cream}을 넣습나다`);
         console.log(`잘 저어 줍니다.`);
         console.log(`커피가 나왔습니다. 맛있게 드세요`);
     }
 }
 const a = new CoffeeMachine(150);
 a.money;
//  const b = new CoffeeMachine(300);
//  b.money;

class Shape{
    constructor(width, height, color){
        this. width = width;
        this.height = height;
        this.color - color;
    }

    draw(){
        console.log(`drawing ${this.color} color`);
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}//상속
class Triangle extends Shape{
    draw(){
        console.log('삼각형'); //재정의 된 메소드
        super.draw(); // 부모 메소드에 있는 것을 가져옴
    }
    getArea(){ //오버라이딩 (다형성)
        return (this.width * this.height)/2;
    }
    toString(){
        return `이 ${this.color}색의 삼각형은 object의 상속을 받습니다.`
    }
}
const myReact = new Rectangle(20, 20, '파랑');
myReact.draw();
console.log(myReact.getArea());
const myTri = new Triangle(20, 20, '빨강');
myTri.draw();
console.log(myTri.getArea());
console.log(myTri.toString)

myTri.toString();
//클라스의 타입체킹 instanceOf
console.log(myReact instanceof Rectangle); //T
console.log(myTri instanceof Rectangle); //F
console.log(myTri instanceof Triangle); //T
console.log(myTri instanceof Shape); //T
console.log(myTri instanceof Object); //T

//자바스크립트에서 다양한 객체 생성 방법
