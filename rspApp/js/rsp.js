function rsp(e, c){
    if(win >= 50){
        switch(e){
            case 0:
                me='가위';
                img='./images/sc2.png';
            break;
            case 1:
                me='바위';
                img='./images/ro2.png';
            break;
            case 2:
                me='보';
                img='./images/pa2.png';
            break;
        }
        switch(c){
            case 0:
                me='가위';
                img1='./images/sc2.png';
            break;
            case 1:
                me='바위';
                img1='./images/ro2.png';
            break;
            case 2:
                me='보';
                img1='./images/pa2.png';
            break;
        }
    }else{
        switch(e){
            case 0:
                me='가위';
                img='./images/sc.png';
            break;
            case 1:
                me='바위';
                img='./images/ro.png';
            break;
            case 2:
                me='보';
                img='./images/pa.png';
            break;
        }
        switch(c){
            case 0:
                me='가위';
                img1='./images/sc.png';
            break;
            case 1:
                me='바위';
                img1='./images/ro.png';
            break;
            case 2:
                me='보';
                img1='./images/pa.png';
            break;
        }
    }
    
    document.getElementById("me").style.backgroundImage="url("+img+")";
    document.getElementById("com").style.backgroundImage="url("+img1+")";
}