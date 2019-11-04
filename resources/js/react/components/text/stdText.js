import React, { Component } from 'react'

class StdText extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const classError = this.props.hasError ? 'is-invalid' : ''
        return (
            <div className='form-group'>
                <label htmlFor={this.props.inputId}>{this.props.labelName}</label>
                <textarea
                    id={this.props.taId}
                    name={this.props.taName}
                    className={`form-control ${this.props.cstmClass} ${classError}`}
                    value={this.props.taValue}
                    onChange={this.props.taOnChange}
                />
                {this.props.renderError}
            </div>
        )
    }
}

export default StdText
