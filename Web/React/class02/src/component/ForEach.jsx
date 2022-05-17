import React, { Component } from 'react'

export default class ForEach extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        let thisArray = ['사과', '바나나', '귤', '수박', '참외'];
        for(let i =0; i < thisArray.length; i++){
            console.log(thisArray[i])
        }
        for(let fruite of thisArray){
            console.log(fruite);
        }

        for(let fruite in thisArray){
            console.log(fruite);
        }
    }
  render() {
    return (
      <div>ForEach</div>
    )
  }
}
