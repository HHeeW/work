const express = require("express");
const router = express.Router();
const request = require("request");
const converter = require("xml-js");

let url = `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?serviceKey=deTn%2FKwNMakxW5MC72DSoHlSAfl%2FeJQe%2Bdtq6473%2BN8DdZUnNbR0e1UWIY8FOg6PMko21V9giTHQ4JsMyrFPuQ%3D%3D&pageNo=1&numOfRows=10&zcode=11`

router.get("/",(req, res)=>{
    request({
        url: url,
        method: "GET",
    },
    (error, response, body)=>{
        const xmlToJson = converter.xml2json(body);
        res.send(xmlToJson);
    });
});

module.exports = router;