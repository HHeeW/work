import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const title = "나의 학습 목록";
    return (
        <div className="header">
            <h1 className="header text-center my-5">{title}</h1>
        </div>
    )
  }
}
