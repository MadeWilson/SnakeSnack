import {connect} from 'react-redux'
import Grid from 'components/smart/Grid/presentational'

const mapStateToProps = (state) => ({
    definitions: state.parameters.definitions,
    activeDefinition: state.parameters.activeDefinition
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Grid)