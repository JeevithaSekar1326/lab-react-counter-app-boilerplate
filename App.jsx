import React,{Component}from 'react';
import './App.css';
class CounterApp extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    increaseCount=()=>{
        this.setState({count:this.state.count+1});
    };
    decreaseCount=()=>{
        this.setState({count:this.state.count-1})
    };
    resetCount=()=>{
        this.setState({count:0});
    };
    render(){
        return(
            <div className="counter-app">
            <h1>CounterApp</h1>
            <div className="counter">{this.state.count}</div>
            <div className="buttons">
            <button onClick={this.increaseCount}>Increase</button>
            <button onClick={this.decreaseCount}>Decrease</button>
            <button onClick={this.resetCount}>Reset</button>
            </div>
            </div>
        );
        }
    }
export default CounterApp;