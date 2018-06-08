import { createStore, combineReducers } from 'redux'
import * as parameters from 'store/ducks/parameter'

const reducer = combineReducers({
    parameters: parameters.default
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store