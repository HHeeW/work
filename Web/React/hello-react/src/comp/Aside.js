import React, { Component } from 'react';
import './aside.css'

class Aside extends Component {
    render(){
        let list = [];
        let data = this.props.data;
        //for(let i = 0; i < data.length; i++)
        for(let i in data){
            console.log(data[i].title);
            list.push(<li><a href={'/content/'+data[i].id}>{data[i].title} </a></li>);
        }
       return (
        <aside>
           <nav>
              <ul>
                {list} 
              </ul>
           </nav>
        </aside>
       );
    }
  }

  
  export default Aside;