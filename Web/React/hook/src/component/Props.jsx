import React from 'react'
import './props.css'

const arr = [
    {id: 1, title: '1조', name:'aaa'},
    {id: 2, title: '2조', name:'bbb'},
    {id: 3, title: '3조', name:'ccc'},
    {id: 4, title: '4조', name:'ddd'},
]
const List = (props) =>{
    let title = [];
    for(let i in props.arr){
        title.push(<li>{props.arr[i].title}, {props.arr[i].name}</li>)
    }
    return(title);
}

let content = null;
content = <List arr ={arr}></List>

const Props = () => {

  return (
    <div className='container'>
        <ul>
            {content}
        </ul>
    </div>
  )
}

export default Props