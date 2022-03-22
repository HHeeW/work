//메이플 스토리

//초보자
class Beginner{
    constructor(name, hp, mp, exp){
        this.name = name; //이름
        this.hp = hp;  //체력
        this.mp = mp;  //마나
        this.exp = exp;  //경험치
    }

    //일반공격
    attack(monster){
        document.getElementById("infoName").innerHTML = ("몬스터를 공격합니다.");
        this.hp -= 2;
        if(monster.hp < 1){
            this.exp += 10;
        }else{
            monster.hp -= 5;
        }
    }
    info(){
        let talk;
        let talk2 = true;
        if(this.hp < 1){
            return '캐릭터가 사망했습니다.';
        }
        if(this.mp < 1){
            talk2 =  flase;
            '마나가 부족합니다.'
        }else{
            `이름 : ${this.naem}, 체력 : ${this.hp}, 마나 : ${this.mp}, 경험치 : ${this.exp}`
        }
    }
}

//전사
class Soldier extends Beginner{
    constructor (name, hp, mp, exp){
        super(name, hp, mp, exp);
    }

    //전사공격
    attack(monster){ //오버라이딩
        monster.hp -= 5;
    }
}
//검전사
class SwordSoldier extends Soldier{
    constructor (name, hp, mp, exp){
        super(name, hp, mp, exp);
    }
    //일반공격
    attack(monster){ //오버라이딩
        monster.hp -= 10;
    }

    //마법공격
    powerStrike(monster){
        monster.hp -= 13;
        this.mp = -2;
    }
}

//몬스터
class Monster{
    constructor(name, hp, mp, exp){
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.exp = exp;
    }

    //몬스터공격
    attack(Beginner){
        Beginner.hp -= 3; //캐릭터에게 데미지 3를 준다.
    }
}

//전사 클래스 생성
let soldier = new Soldier("메이플전사", 100, 100 ,0);
document.getElementById("infoName").innerHTML = ("전사의 정보");
document.getElementById("info").innerHTML = (`이름 : ${soldier.name}, 체력 : ${soldier.hp}, 마나 : ${soldier.mp}, 경험치 : ${soldier.exp}`);

//몬스터 클래스 생성
let greenSnail = new Monster("초록달팽이", 10, 0, 10);
document.getElementById("infoName").innerHTML = ("몬스터의 정보");
document.getElementById("info").innerHTML = (`이름 : ${greenSnail.name}, 체력 : ${greenSnail.hp}, 마나 : ${greenSnail.mp}, 경험치 : ${greenSnail.exp}`);

//검전사 클래스 생성
let swordsoldier = new SwordSoldier("메이플검전사", 150, 120 ,0);
document.getElementById("infoName").innerHTML = ("검전사의 정보");
document.getElementById("info").innerHTML = (`이름 : ${swordsoldier.name}, 체력 : ${swordsoldier.hp}, 마나 : ${swordsoldier.mp}, 경험치 : ${swordsoldier.exp}`);


//전사의 몬스터 공격
document.getElementById("attack").addEventListener("click",function(){   
    soldier.attack(greenSnail);
    document.getElementById("infoName").innerHTML = ("몬스터의 정보");
    if(greenSnail.hp < 1){
        document.getElementById("info").innerHTML = ("몬스터가 사망했습니다.");
    }else{
        document.getElementById("info").innerHTML = (`이름 : ${greenSnail.name}, 체력 : ${greenSnail.hp}, 마나 : ${greenSnail.mp}, 경험치 : ${greenSnail.exp}`);
    }
});
//몬스터의 전사 공격
document.getElementById("gattck").addEventListener("click",function(){ 
    greenSnail.attack(soldier);
    document.getElementById("infoName").innerHTML = ("전사의 정보");
    if(soldier.hp < 1){
        document.getElementById("info").innerHTML = ("전사가 사망했습니다.");
    }else{
        document.getElementById("info").innerHTML = (`이름 : ${soldier.name}, 체력 : ${soldier.hp}, 마나 : ${soldier.mp}, 경험치 : ${soldier.exp}`);
    }
});
//검전사의 몬스터 공격
document.getElementById("sattack").addEventListener("click",function(){   
    swordsoldier.attack(greenSnail);
    document.getElementById("infoName").innerHTML = ("몬스터의 정보");
    if(greenSnail.hp < 1){
        document.getElementById("info").innerHTML = ("몬스터가 사망했습니다.");
    }else{
        document.getElementById("info").innerHTML = (`이름 : ${greenSnail.name}, 체력 : ${greenSnail.hp}, 마나 : ${greenSnail.mp}, 경험치 : ${greenSnail.exp}`);
    }
});