function openNav(){
    document.getElementById("mynav").style.left="0%";
}
function closeNav(){
    document.getElementById("mynav").style.left="-100%";
}

var num = 1;
        function slide(n){
            if(n){
                if(num == 5)num = 1;
                num++;
            }
            else{
                if(num == 1)num = 5;;
                num--;
            }
           document.getElementById("slide1").classList.add('animate__fadeOutLeft')
        }