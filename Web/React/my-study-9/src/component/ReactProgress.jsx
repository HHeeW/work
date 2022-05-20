import React, { Component } from 'react'
import { Progress, Spinner } from 'reactstrap';
class ReactProgress extends Component{
    constructor(props){
        super(props);
        this.state = {progress: 0}
    }

    componentDidMount(){
        this.progress()
    }
    progress =() =>{
        if(this.state.progress !==99){
            setTimeout(function(){
                this.setState({progress: this.state.progress + 1});
                this.progress();
            }.bind(this),50);
        }
    }
    render(){
        return(
            <>
                <Progress color='info' value={this.state.progress}>
                    {this.state.progress}%
                </Progress>
                <br/><br/>
                <Progress bar color='warning' value={"25"}>25%</Progress>
                <Progress bar color='success' value={"35"}>35%</Progress>
                <Progress bar color='primary' value={"45"}>45%</Progress>
                <br/><br/>
                <Spinner color="dark" size="">  Loading...  </Spinner>
            </>
        )
    }
}
export default ReactProgress