import {connect} from 'react-redux'
import Definition from 'components/smart/Parameters/Definition/presentational'
import {updateGrid} from "store/ducks/parameter"

const mapStateToProps = (state) => ({
    definitions: state.parameters.definitions,
    activeDefinition: state.parameters.activeDefinition
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (value) => dispatch(updateGrid(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Definition)