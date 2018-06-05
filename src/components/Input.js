import React, { Component } from 'react'

class Input extends Component{
    constructor(props) {
        super(props)
        console.log(props)
    }

    handleChange(e) {
        console.log(e)
        console.log(e.target.value)
    }

    render() {
        return (
            <input type="text" onChange={this.handleChange}/>
        )
    }
}

export default Input