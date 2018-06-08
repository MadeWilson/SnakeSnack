import {connect} from 'react-redux'
import Cell from 'components/smart/Cell/presentational'

const mapStateToProps = (state) => ({
    snake: {
        currentPosition: state.snake.currentPosition,
        direction: state.snake.direction
    }
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Cell)