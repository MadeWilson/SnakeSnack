import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Cell from 'components/smart/Cell/index'

const styles = {
    row: {display: "flex"}
}

class Grid extends PureComponent {

    constructor(props) {
        super(props)
        this.handleDimension = this.handleDimension.bind(this)
        this.handleDimension()
    }

    handleDimension() {
        this.props.definitions.map((value) => {
            if (value.id == this.props.activeDefinition) {
                this.dimension = ({"rows": value.height, "columns": value.width})
            }
        })
    }

    render() {
        this.handleDimension()
        return (
            <div className="grid-container">
                {
                    Array(this.dimension.rows)
                        .fill(true)
                        .map((foo, x) => (
                            <div key={`rows-${x}`} style={styles.row}>
                                {Array(this.dimension.columns)
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