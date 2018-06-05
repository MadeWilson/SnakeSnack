import React, {PureComponent} from 'react'

class Button extends PureComponent {

    constructor(props){
        super(props)
        this.state= {
            count: 0,
            label: 'Click-me !'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log('Click !')
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {`You clicked me ${this.state.count}`}
            </button>
        )
    }

}

export default Button