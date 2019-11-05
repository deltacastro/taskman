import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardLt from '../../components/card/cardLt'
import StdInput from '../../components/input/stdInput'
import BtnGuardar from '../../components/button/btnGuardar'
import StdText from '../../components/text/stdText'
import StdDate from '../../components/input/stdDate'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            descripcion: '',
            registrado_desde: '',
            errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleNewCliente = this.handleNewCliente.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleNewCliente(event) {
        event.preventDefault()

        // OBTENEMOS HISTORIAL DE NAVEGACION
        const { history } = this.props
        const cliente = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            registrado_desde: this.state.registrado_desde
        }

        axios.post('/api/clientes/store', cliente)
            .then(response => {
                history.push('/clientes')
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
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

    render() {
        return (
            <CardLt header="Agregar nuevo cliente">
                <form onSubmit={this.handleNewCliente}>
                    <StdInput
                        labelName='Nombre'
                        inputId='nombre'
                        inputName='nombre'
                        cstmClass=''
                        inputValue={this.state.nombre}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('nombre') ? true : false}
                        renderError={this.renderErrorFor('nombre')}
                    />
                    <StdText
                        labelName='Descripción'
                        taId='descripcion'
                        taName='descripcion'
                        cstmClass=''
                        taValue={this.state.descripcion}
                        taOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('descripcion') ? true : false}
                        renderError={this.renderErrorFor('descripcion')}
                    />
                    <StdDate
                        labelName='Fecha de ingreso'
                        inputId='registrado_desde'
                        inputName='registrado_desde'
                        cstmClass=''
                        inputValue={this.state.ingresado_desde}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('ingresado_desde') ? true : false}
                        renderError={this.renderErrorFor('ingresado_desde')}
                    />
                    <BtnGuardar />
                </form>
            </CardLt>
        )
    }
}

export default Create
