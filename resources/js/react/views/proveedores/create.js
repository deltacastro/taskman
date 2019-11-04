import axios from 'axios'
import React, { Component } from 'react'
import CardLt from '../../components/card/cardLt'
import StdInput from '../../components/input/stdInput'
import BtnGuardar from '../../components/button/btnGuardar'


class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: '',
            searchService: '',
            errors: [],
            proveedores: [],
            servicios: [],
            checkedServices: [],
            selectedServ: {}
        }

        this.hanldeClick = this.hanldeClick.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleNewProveedor = this.handleNewProveedor.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
        this.toggleActiveFor = this.toggleActiveFor.bind(this)
    }

    componentDidMount() {
        axios.get('/api/proveedores/lista').then(response => {
            this.setState({
                proveedores: response.data.proveedores,
                servicios: response.data.servicios
            })
        })
    }

    toggleActiveFor(serviceId) {

        return this.state.selectedServ[serviceId] == 'active' ? '' : 'active'
    }

    hanldeClick(servicioId) {
        console.log(servicioId)

        const { checkedServices, selectedServ } = this.state
        let updatedServices = ''

        if (this.toggleActiveFor(servicioId) == 'active') {
            console.log('activo')

            updatedServices = checkedServices.concat([servicioId])
        } else {
            console.log('no activo')

            updatedServices = checkedServices.filter((value, index, arr) => {
                return value != servicioId
            })

            console.log(updatedServices)

        }

        this.setState({
            checkedServices: updatedServices,
            selectedServ: Object.assign(selectedServ, {
                [servicioId]: this.toggleActiveFor(servicioId)
            })
        })

        console.log(this.state.checkedServices)
        console.log(this.state.selectedServ)

    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleNewProveedor(event) {
        event.preventDefault()

        // SE OBTIENE EL HISTORIAL DE NAVEGACION
        const { history } = this.props
        const proveedor = {
            nombre: this.state.nombre,
            servicios: this.state.checkedServices
        }

        axios.post('/api/proveedores/store', proveedor)
            .then(response => {
                history.push('/proveedores')
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
        const { servicios } = this.state
        return (
            <CardLt header="Agregar nuevo proveedor">
                <form onSubmit={this.handleNewProveedor}>
                    <StdInput
                        labelName='Nombre del proveedor'
                        inputId='nombre'
                        inputName='nombre'
                        cstmClass=''
                        inputValue={this.state.nombre}
                        inputOnChange={this.handleFieldChange}
                        hasError={this.hasErrorFor('nombre') ? true : false}
                        renderError={this.renderErrorFor('nombre')}
                    />
                    <div className='col-12 px-0 pb-3'>
                        <div className='col-12 px-0'>
                            <p>Lista</p>
                            <ul className="list-group list-group-flush">
                                {servicios.map(servicio => (
                                    <li
                                        key={servicio.id}
                                        onClick={this.hanldeClick.bind(this, servicio.id)}
                                        href="#"
                                        className={`list-group-item list-group-item-action ${this.state.selectedServ[servicio.id] ? this.state.selectedServ[servicio.id] : '' }`}
                                    >
                                        {servicio.nombre}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <BtnGuardar />
                </form>
            </CardLt>
        )
    }
}

export default Create
