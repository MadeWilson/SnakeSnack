import {connect} from 'react-redux'
import Snake from 'components/smart/Snake/presentationnal'

const mapStateToProps = (state) => ({
    currentPosition: state.snake.currentPosition,
    direction: state.snake.direction
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Snake)