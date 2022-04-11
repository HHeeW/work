function navFunc(){
    var x = document.getElementsByClassName("topnav")[0];
    if(x.className == "topnav"){
        x.className += " submenu";
    }else{
        x.className = "topnav";
    }
}

document.getElementById("myDom").innerHTML = "Hello world"

var allp = document.getElementsByTagName('p');
alert(allp.length);