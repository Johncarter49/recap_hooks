import React, { Component } from 'react';

export default class Classbased extends Component {
    //   constructor(props){
    //      super(props);
    //      this.state = {
    //          count:0
    //       }
    //   }
    state = {
        count: 0
    }

    increment = () => {
        this.setState({count: this.state.count +1})
    }

    decrement = ()=>{
        this.setState({count: this.state.count - 1})
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
                <h2>{this.props.name}-{this.props.surname}</h2>
            </div>
        )
    }
}
