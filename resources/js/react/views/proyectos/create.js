import axios from 'axios'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import StdInput from '../../components/input/stdInput'
import BtnGuardar from '../../components/button/btnGuardar'
import StdSelect from '../../components/select/stdSelect'
import CardLt from '../../components/card/cardLt'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleNewProyecto = this.handleNewProyecto.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    componentDidMount() {

    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleNewProyecto(event) {
        event.preventDefault()
        const { history } = this.props
        const proyecto = {

        }

    }

    hasErrorFor(field) {
        return !!this.state.errors[field]
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className="invalid-feedback">
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    render () {
        return (
            <CardLt header="Agregar proyecto">
                <form onSubmit={this.handleNewProyecto}>
                    <StdInput
                        labelName='Nombre del sitio'
                        inputId='nombre'
                        inputName='nombre'
                        cstmClass=''
                        inputValue={this.state.nombre}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('nombre') ? true : false}
                        renderError={this.renderErrorFor('nombre')}
                    >

                    </StdInput>
                </form>
            </CardLt>
        )
    }
}

export default Create
