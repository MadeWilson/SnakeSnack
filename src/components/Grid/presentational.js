import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Cell from 'components/Cell'

const styles = {
    row: {display: "flex"}
}

class Grid extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="grid-container">
                {
                    Array(this.props.rows)
                        .fill(true)
                        .map((foo, x) => (
                            <div key={`rows-${x}`} style={styles.row}>
                                {Array(this.props.columns)
                                    .fill(true)
                                    .map((bar, y) =>
                                        <Cell key={`cell-${y}`}/>
                                    )
                                }
                            </div>
                        ))
                }
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