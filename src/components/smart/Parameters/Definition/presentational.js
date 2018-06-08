import React, {PureComponent} from 'react'

class Definition extends PureComponent {

    constructor(props) {
        super(props)
        this.handleDefinitionChange = this.handleDefinitionChange.bind(this)
    }

    handleDefinitionChange(e) {
        this.props.onChange(e.target.value)
    }

    render() {
        return(
            <label>Definition
                <select value={this.props.activeDefinition} onChange={this.handleDefinitionChange}>
                    {this.props.definitions.map((value, index) => {
                        return (<option key={`option-${index}`} value={value.id}>{value.label}</option>)
                    })}
                </select>
            </label>
        )
    }

}

export default Definition