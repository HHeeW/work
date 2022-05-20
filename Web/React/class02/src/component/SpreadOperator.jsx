import React, { Component } from 'react'

export default class SpreadOperator extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){
        //javascript Array
        let varArray1=['num1', 'num2'];
        let varArray2=['num3', 'num4'];
        let sumArray=[varArray1[0],varArray1[1],varArray2[0],varArray2[1],];
        console.log('1. sumVarArray'+ sumArray);

        let sumArr = [...varArray1,...varArray2];
        console.log('2.sumArr'+sumArr);

        var obj1 = {key1: 'val1', key2: 'val2'};
        var obj2 = {key3: 'key3', key4: 'val4'};

        var sumObj = object.assign({}, obj1, obj2)
        console.log('subObj : ' + JSON.stringify(sumObj));
        
    }
  render() {
    return (
      <div>SpreadOperator</div>
    )
  }
}
