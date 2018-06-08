import React, {PureComponent} from 'react'
import Definition from 'components/smart/Parameters/Definition'

const styles = {
    aside: {
        height: "100vh",
        width: "200px",
        backgroundColor: "#99b575",
        position: "fixed !important",
        zIndex: "1",
        overflow: "auto",
        left: "0",
        top: "0"
    }
}

class Parameters extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <aside>
                <Definition/>
            </aside>
        )
    }
}

export default Parameters