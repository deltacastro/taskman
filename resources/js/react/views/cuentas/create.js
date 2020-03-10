import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardLt from '../../components/card/cardLt'
import StdInput from '../../components/input/stdInput'
import BtnGuardar from '../../components/button/btnGuardar'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            propietario: '',
            usuario: '',
            password: '',
            correo: '',
            telefono: '',
            errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleNewCuenta = this.handleNewCuenta.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleNewCuenta(event) {
        event.preventDefault()

        // OBTENEMOS HISTORIAL DE NAVEGACION
        const { history } = this.props
        const cuenta = {
            propietario: this.state.propietario,
            usuario: this.state.usuario,
            password: this.state.password,
            correo: this.state.correo,
            telefono: this.state.telefono,
        }

        axios.post('/api/cuentas/store', cuenta)
            .then(response => {
                history.push('/cuentas')
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
            <CardLt header="Agregar nueva cuenta">
                <form onSubmit={this.handleNewCuenta}>
                    <StdInput
                        labelName='Propietario'
                        inputId='propietario'
                        inputName='propietario'
                        cstmClass=''
                        inputValue={this.state.propietario}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('propietario') ? true : false}
                        renderError={this.renderErrorFor('propietario')}
                    />
                    <StdInput
                        labelName='Usuario'
                        inputId='usuario'
                        inputName='usuario'
                        cstmClass=''
                        inputValue={this.state.usuario}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('usuario') ? true : false}
                        renderError={this.renderErrorFor('usuario')}
                    />
                    <StdInput
                        labelName='Constraseña'
                        inputId='password'
                        inputName='password'
                        cstmClass=''
                        inputValue={this.state.password}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('password') ? true : false}
                        renderError={this.renderErrorFor('password')}
                    />
                    <StdInput
                        labelName='Correo'
                        inputId='correo'
                        inputName='correo'
                        cstmClass=''
                        inputValue={this.state.correo}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('correo') ? true : false}
                        renderError={this.renderErrorFor('correo')}
                    />
                    <StdInput
                        labelName='Teléfono'
                        inputId='telefono'
                        inputName='telefono'
                        cstmClass=''
                        inputValue={this.state.telefono}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('telefono') ? true : false}
                        renderError={this.renderErrorFor('telefono')}
                    />
                    <BtnGuardar />
                </form>
            </CardLt>
        )
    }
}
export default Create
