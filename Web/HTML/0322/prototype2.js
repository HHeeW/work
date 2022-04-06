// function Person(){}

// let chulsu = new Person();
// let sooni = new Person();

// Person.prototype.getType = function(){
//     return '인간';
// }

// Person.prototype.age = 30;
// console.log(chulsu.age);
// console.log(sooni.age);



// //프로토타입에서 추가된 get.Type();을 모두 이용할 수 있다.
// console.log(chulsu.getType());
// console.log(sooni.getType());

// //Shape - 상위클래스
// function Shape(){
//     this.x = 0;
//     this.y = 0;
// };
// Shape.prototype.move = function(x, y){
//     this.x += x;
//     this.y += y;
//     console.log("도형이 움직였습니다.")
// }
// //하위클래스(사각형)
// function Rectangle(){
//     Shape.call(this);
// }

// Rectangle.prototype = Object.create(Shape.prototype);
// console.log(Rectangle.prototype);

// console.log(Rectangle.prototype.__proto__);




//o라는 객체가 있고 property로 a와 b를 갖는다.

let f = function(){
    this.a = 1;
    this.b = 2;
}
let o = new f();

//f 함수에 prototype에 새로운 속성을 추가하자.
f.prototype.b = 3;
f.prototype.c = 4;

console.log(o.a);//1
console.log(o.b);//2
console.log(o.c);//4
//prototype도 b라는 속성을 갖지만 이 값은 사용되지 않는다. prototype shadowing이라 한다.

var oo = {
    a : 2,
    m : function(b){
        return this.a + 1;
    }
}
console.log(oo.m());

let p = Object.create(oo);
console.log(p.a);
p.a = 12;
console.log(p.m());
//p.m이 호출될 때 this 는 p를 가리킨다.
//따라서 o의 함수 m을 상속받으며, this.a를 나타내며 p의 개인 속성 a가 된다