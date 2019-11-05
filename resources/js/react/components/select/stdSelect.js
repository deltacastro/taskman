import React, { Component } from 'react'

class StdSelect extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const classError = this.props.hasError ? 'is-invalid' : ''
        return (
            <div className='form-group'>
                <label htmlFor={this.props.inputId}>{this.props.labelName}</label>
                <select
                    id={this.props.selectId}
                    name={this.props.selectName}
                    className={`custom-select ${this.props.cstmClass} ${classError}`}
                    value={this.props.selectValue}
                    onChange={this.props.selectOnChange}
                >
                    <option disabled value='0'>Seleccione una opción</option>
                    {this.props.children}
                </select>
                {this.props.renderError}
            </div>
        )
    }
}

export default StdSelect
