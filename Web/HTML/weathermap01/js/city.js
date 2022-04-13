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
        case "Jeju City":
            return "제주도";
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
function searchCity(s){
    switch(s){
        case "김포시":
            return "Gimpo-si";
        case "김포":
            return "Gimpo-si";
        case "서울":
            return "Seoul"
        case "부산":
            return "Busan";
        case "강원도":
            return 'Gangwon-do'
        case "춘천":
            return "Chuncheon";
        case "춘천시":
            return "Chuncheon-si";
        case "제주도":
            return "Jeju City";
        case "제주":
            return "Jeju-do";
        case "용산":
            return "Yongsan";
        case "신대방":
            return "Sindaebang-dong";
        case "신대방동":
            return "Sindaebang-dong";
        case "신대방 1동":
            return "Sindaebang-dong";
        default:
            return s;
    }
}