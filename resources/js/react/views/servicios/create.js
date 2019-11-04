import axios from 'axios'
import React, { Component } from 'react'
import CardLt from '../../components/card/cardLt'
import StdInput from '../../components/input/stdInput'
import BtnGuardar from '../../components/button/btnGuardar'
import StdText from '../../components/text/stdText'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            descripcion: '',
            errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleNewServicio = this.handleNewServicio.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleNewServicio(event) {
        event.preventDefault()
        const { history } = this.props
        const servicio = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion
        }

        axios.post('/api/servicios/store', servicio)
            .then(response => {
                history.push('/servicios')
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
            <CardLt header="Agregar nuevo servicio">
                <form onSubmit={this.handleNewServicio}>
                    <StdInput
                        labelName='Nombre del servicio'
                        inputId='nombre'
                        inputName='nombre'
                        cstmClass=''
                        inputValue={this.state.nombre}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('nombre') ? true : false}
                        renderError={this.renderErrorFor('nombre')}
                    />
                    <StdText
                        labelName='Descripción del servicio'
                        taId='descripcion'
                        taName='descripcion'
                        cstmClass=''
                        taValue={this.state.descripcion}
                        taOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('descripcion') ? true : false}
                        renderError={this.renderErrorFor('descripcion')}
                    />
                    <BtnGuardar />
                </form>
            </CardLt>
        )
    }
}

export default Create
