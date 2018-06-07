import React from 'react'
import ReactDome from 'react-dom'
import { Provider } from 'react-redux'
import App from 'components/App'
import store from 'store'

ReactDome.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#mount')
)