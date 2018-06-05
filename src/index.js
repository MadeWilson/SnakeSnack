import React from 'react'
import {render} from 'react-dom'
import Button from 'components/Button'
import Input from 'components/Input'

render(
    <div>
        <h1>Hello Anthony !</h1>
        <Button/>
        <Input name="test"/>
    </div>,
    document.querySelector('#mount')
)