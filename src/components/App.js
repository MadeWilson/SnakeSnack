import React, {Component} from 'react'
import Grid from 'components/smart/Grid'
import Parameters from 'components/smart/Parameters'

const styles = {
    app: {
        position: "relative",
        minHeight: "100vp",
        top: "0px",
    },
}

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app" style={styles.app}>
                <Parameters/>
                <main>
                    <Grid rows={48} columns={84}/>
                </main>
            </div>
        )
    }
}

export default App