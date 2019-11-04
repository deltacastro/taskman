import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardLt from '../../components/card/cardLt'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicios: []
        }
    }

    componentDidMount() {
        axios.get('/api/servicios/lista')
            .then(response => {
                this.setState({
                    servicios: response.data
                })
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        const { servicios } = this.state

        return (
            <CardLt header="Servicios">
                <Link className='btn btn-primary btn-sm mb-3' to='/servicios/nuevo'>
                    Agregar servicio
                </Link>
                <ul className='list-group list-group-flush'>
                    {servicios.map(servicio => (
                        <Link
                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                            to={`servicios/${servicio.id}/edit`}
                            key={servicio.id}
                        >
                            {servicio.nombre}
                        </Link>
                    ))}
                </ul>
            </CardLt>
        )

    }
}

export default Index
