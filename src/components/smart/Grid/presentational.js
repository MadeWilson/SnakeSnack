import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Cell from 'components/smart/Cell'

const styles = {
    row: {display: "flex"}
}

class Grid extends PureComponent {

    constructor(props) {
        super(props)
        this.handleDimension = this.handleDimension.bind(this)
        this.handleDimension()
        this.timer = this.timer.bind(this)
    }

    componentDidMount() {
        let intervalId = setInterval(this.timer, 500);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.props.intervalId);
    }

    timer() {
        this.props.newFrame();
        this.props.snackMove();
    }

    handleDimension() {
        this.props.parameters.definitions.map((value) => {
            if (value.id == this.props.parameters.activeDefinition) {
                this.dimension = ({"rows": value.height, "columns": value.width})
            }
        })
    }

    render() {
        this.handleDimension()
        return (
            <div>
                <div>
                    {this.props.timer.currentCount}
                </div>
                <div className="grid-container">
                    {
                        Array(this.dimension.rows)
                            .fill(true)
                            .map((row, y) => (
                                <div key={`rows-${y}`} style={styles.row}>
                                    {Array(this.dimension.columns)
                                        .fill(true)
                                        .map((column, x) =>
                                            <Cell key={`cell-${x}`} coordonate={`${y}-${x}`}/>
                                        )
                                    }
                                </div>
                            ))
                    }
                </div>
            </div>
        )
    }
}

Grid.propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired
}

Grid.defaultProps = {
    row: 50,
    column: 50
}

export default Grid