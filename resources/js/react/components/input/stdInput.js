import React, { Component } from 'react'

class StdInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const classError = this.props.hasError ? 'is-invalid' : ''
        return (
            <div className='form-group'>
                <label htmlFor={this.props.inputId}>{this.props.labelName}</label>
                <input
                    id={this.props.inputId}
                    name={this.props.inputName}
                    className={`form-control ${this.props.cstmClass} ${classError}`}
                    value={this.props.inputValue}
                    onChange={this.props.inputOnChange}
                    type='text'
                    />
                {this.props.renderError}
            </div>
        )
    }
}

export default StdInput
