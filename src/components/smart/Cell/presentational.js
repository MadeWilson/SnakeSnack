import React, {PureComponent} from 'react'
import Snake from 'components/smart/Snake'

const stylize = (props, state) => ({
    cell: {
        height: '4px',
        width: '4px',
        border: 'thin solid lightgrey'
    }
})

class Cell extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={this.props.coordonate} style={stylize(this.props).cell}>
                {(this.props.coordonate == this.props.snake.currentPosition)? <Snake/> : ""}
            </div>
        )
    }
}

export default Cell