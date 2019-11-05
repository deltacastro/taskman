import axios from 'axios'
import React, { Component } from 'react'
import CardLt from '../../components/card/cardLt'
import StdInput from '../../components/input/stdInput'
import BtnGuardar from '../../components/button/btnGuardar'
import StdSelect from '../../components/select/stdSelect'

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cliente_id: '0',
            sitio_principal_id: '',
            nombre: '',
            url: '',
            data: {
                clientes: []
            },
            errors: []
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleNewSitio = this.handleNewServicio.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    componentDidMount() {
        axios.get('/api/clientes/lista')
            .then(response => {
                this.setState({
                    data: {
                        clientes: response.data
                    }
                })
            }).catch(error => {
                console.log(error)
            })
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleNewServicio(event) {
        event.preventDefault()
        const { history } = this.props
        const sitio = {
            cliente_id: this.state.cliente_id,
            sitio_principal_id: this.state.sitio_principal_id,
            nombre: this.state.nombre,
            url: this.state.url,
        }

        axios.post('/api/sitios/store', servicio)
            .then(response => {
                history.push('/sitios')
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
        const { clientes } = this.state.data
        return (
            <CardLt header="Agregar nuevo sitio">
                <form onSubmit={this.handleNewServicio}>
                    <StdInput
                        labelName='Nombre del sitio'
                        inputId='nombre'
                        inputName='nombre'
                        cstmClass=''
                        inputValue={this.state.nombre}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('nombre') ? true : false}
                        renderError={this.renderErrorFor('nombre')}
                    />
                    <StdInput
                        labelName='URL'
                        inputId='url'
                        inputName='url'
                        cstmClass=''
                        inputValue={this.state.url}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('url') ? true : false}
                        renderError={this.renderErrorFor('url')}
                    />
                    <StdSelect
                        selectId='cliente_id'
                        selectName='cliente_id'
                        cstmName=''
                        selectValue='0'
                        selectLabel='Clientes'
                        selectOnChange={this.handleFieldChange}
                    >
                        {clientes.map(cliente => (
                            <option value={cliente.id}>{cliente.nombre}</option>
                        ))}
                    </StdSelect>
                    <BtnGuardar />
                </form>
            </CardLt>
        )
    }
}

export default Create
