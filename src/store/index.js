import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as parameters from 'store/ducks/parameter'
import * as snake from 'store/ducks/snake'
import * as timer from 'store/ducks/timer'

const reducer = combineReducers({
    parameters: parameters.default,
    timer: timer.default,
    snake: snake.default,
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store