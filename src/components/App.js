import React, {Component} from 'react'
import Grid from 'components/Grid'

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <Grid rows={50} columns={50}/>
            </div>
        )
    }
}

export default App