import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardLt from '../../components/card/cardLt'

class Index extends Component {
    constructor() {
        super()
        this.state = {
            cuentas: []
        }
    }

    componentDidMount() {
        axios.get('/api/cuentas/lista').then(response => {
            this.setState({
                cuentas: response.data
            })
        })
    }

    render() {
        const { cuentas } = this.state
        return (
            <CardLt header="Mis cuentas">
                <Link className='btn btn-primary btn-sm mb-3' to='/cuentas/nuevo'>
                    Crear nueva cuenta
                </Link>
                <ul className='list-group list-group-flush'>
                    {cuentas.map(cuenta => (
                        <Link
                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                            to={`cuentas/${cuenta.id}/edit`}
                            key={cuenta.id}
                        >
                            {cuenta.propietario}
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
