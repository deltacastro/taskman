import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardLt from '../../components/card/cardLt'

class Index extends Component {
    constructor() {
        super()
        this.state = {
            clientes: []
        }
    }

    componentDidMount() {
        axios.get('/api/clientes/lista').then(response => {
            this.setState({
                clientes: response.data
            })
        })
    }

    render() {
        const { clientes } = this.state
        return (
            <CardLt header="Mis clientes">
                <Link className='btn btn-primary btn-sm mb-3' to='/clientes/nuevo'>
                    Agregar nuevo cliente
                </Link>
                <ul className='list-group list-group-flush'>
                    {clientes.map(cliente => (
                        <Link
                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                            to={`clientes/${cliente.id}/edit`}
                            key={cliente.id}
                        >
                            {cliente.nombre}
                            {/* <span className='badge badge-primary badge-pill'>
                                {project.tasks_count}
                            </span> */}
                        </Link>
                    ))}
                </ul>
            </CardLt>
        )
    }
}

export default Index
