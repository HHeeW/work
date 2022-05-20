import React, { Component } from 'react'
/*
    promise를 사용해 파라미터로 2개 함수를 받을 경우 첫 번째 함수는 이행, 두 번째 함수는 거부
    (이행: resolve, 거부:reject)
    거부함수를 실행하면서 강제 에러 발생
    promise동작 중 거부 함수가 실행되면 이행상태가 되지 못하여 then 함수는 실행되지 않는다.
*/
export default class ReactPromoseCatch extends Component {

    componentDidMount(){
        new Promise((resolve, reject) =>{
            reject(Error('Error Info'))
        })
        .then(result => console.log("then: " + result))
        .catch(result => console.log("catch : " + result))
    }
  render() {
    return (
      <div>ReactPromoseCatch</div>
    )
  }
}
