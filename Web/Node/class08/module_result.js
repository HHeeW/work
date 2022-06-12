const user = require('./module_ex2');
const user3 = require('./module_ex3')
function showUser(){
    return user3().name;
}
console.log(showUser());

const pritUser = require('./module_ex4').pritUser;
pritUser();

const user05 = require('./module_ex5');
user.printUser();