import React from 'react'
import HBox from './HBox';

import List from './MenuList.json';
const HList = (props) => {
    let pay = [];
    let list = [];
    list.push(List.TeaList[0])
    list.push(List.coffeeList[0])
    console.log(list)
    for(let i in list){
        pay[i] = <HBox 
            id = {i}
            title = {list[i].title}
            url = {list[i].url}
            price = {5000}
            desc = {list[i].desc}
        />
    }

  return pay
}

export default HList