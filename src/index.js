import React from 'react'
import {render} from 'react-dom'
import Button from 'components/Button'

render(
    <div>
        <h1>Hello Anthony !</h1>
        <Button/>
    </div>,
    document.querySelector('#mount')
)