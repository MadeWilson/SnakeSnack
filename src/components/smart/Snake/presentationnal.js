import React, { PureComponent } from 'react'

const styles = {
    snake: {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        border: 'thin solid black'
    }
}

class Snake extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="snake-head" position={this.props.currentPosition} direction={this.props.direction} style={styles.snake}>
            </div>
        )
    }
}

export default Snake