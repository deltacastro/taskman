import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardLt from '../../components/card/cardLt'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sitios: []
        }
    }

    componentDidMount() {
        axios.get('/api/sitios/lista')
            .then(response => {
                this.setState({
                    sitios: response.data
                })
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        const { sitios } = this.state

        return (
            <CardLt header="Servicios">
                <Link className='btn btn-primary btn-sm mb-3' to='/servicios/nuevo'>
                    Agregar sitio
                </Link>
                <ul className='list-group list-group-flush'>
                    {sitios.map(sitio => (
                        <Link
                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                            to={`sitios/${sitio.id}/edit`}
                            key={sitio.id}
                        >
                            {sitio.nombre}
                        </Link>
                    ))}
                </ul>
            </CardLt>
        )

    }
}

export default Index
