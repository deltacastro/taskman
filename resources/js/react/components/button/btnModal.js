import React, { Component } from 'react'

class BtnModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className={`btn btn-primary ${this.props.cstmClass}`}>
                Guardar
            </button>
        )
    }
}

export default BtnModal
