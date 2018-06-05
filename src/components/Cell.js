import React, {PureComponent} from 'react'

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
            <div style={stylize(this.props).cell}></div>
        )
    }
}

export default Cell