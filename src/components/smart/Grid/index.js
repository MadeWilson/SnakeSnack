import {connect} from 'react-redux'
import Grid from 'components/smart/Grid/presentational'
import {newFrameStart} from "store/ducks/timer"
import {snackMove} from "store/ducks/snake"

const mapStateToProps = (state) => ({
    parameters: {
        definitions: state.parameters.definitions,
        activeDefinition: state.parameters.activeDefinition
    },
    timer: {
        intervalId: state.timer.intervalId,
        currentCount: state.timer.currentCount
    }
})

const mapDispatchToProps = (dispatch) => ({
    snackMove: () => dispatch(snackMove())
})

export default connect(mapStateToProps, mapDispatchToProps)(Grid)