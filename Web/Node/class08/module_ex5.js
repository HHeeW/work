const module_ex3 = require("./module_ex3");
const user = require("./module_ex2");

function User(id, name){
    this.id = id;
    this.name = name;
}
User.prototype.getUser = function(){
    return {id: this.id, name: this.name}
}
User.prototype.group = {id: ' work01', name: '홍길동'};
User.prototype.printUser = function(){
    console.log(`유저의 이름은 ${this.name}입니다. 아이디는 ${this.id}입니다.`)
}
module.exports = new ('work03', '홍이동');