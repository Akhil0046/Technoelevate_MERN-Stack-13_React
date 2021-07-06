import React, { Component } from 'react'
import './add.css'
export default class Add extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            count:0
        }
    }
    increment = ()=>{
        this.setState({count:this.state.count + 1})
    }
    decrement = ()=>{
        this.setState({count:this.state.count - 1})
    }
    reset = ()=>{
        this.setState({count:this.state.count * 0})
    }

    render() {
        return (
            <div id='div'>
              <h2 id='h1'>{this.state.count}</h2>
              <button className='btn1' onClick={this.increment}>+</button>
              <button className='btn2' onClick={this.reset}>reset</button>
              <button className='btn3' onClick={this.decrement}>-</button>
            </div>
        )
    }
}
