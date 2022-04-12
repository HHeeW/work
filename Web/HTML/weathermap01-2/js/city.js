'use strict';


function county(c){
    switch(c){
        case "Gimpo-si":
            return "김포시";
        case "Seoul":
            return "서울"
        case "Busan":
            return "부산";
        case "Gangwon-do":
            return '강원도'
        case "Chuncheon":
            return "춘천";
        case "Chuncheon-si":
            return "춘천시";
        case "Jeju":
            return "제주";
        case "Jeju-do":
            return "제주도";
        case "Yongsan":
            return "용산";
        case "Sindaebang-dong":
            return "신대방 1동";
        default:
            return c;
    }
}