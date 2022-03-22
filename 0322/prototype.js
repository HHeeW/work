//초보자 함수
function Beginner(name, hp, mp, exp){
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.exp = exp;

    this.attack = function(monster){
        monster.hp -= 10;
    }
}
//전사 함수
function Soldier(){
    Soldier.prototype = new Beginner("전사", 100, 50, 0);
}

//몬스터 함수
function Monster(name, hp, mp, exp){
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.exp = exp;

    this.exp = function(monster){
        Beginner.hp -= 10;
    }
}

let soldier = new Soldier();
let monster = new Monster("달팽이", 10, 0, 0);

soldier.attack(monster);
console.log(soldier.name);
console.log(monster.hp);