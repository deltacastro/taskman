import axios from 'axios'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import CardLt from '../../components/card/cardLt'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            proveedores: []
        }
    }

    componentDidMount() {
        axios.get('/api/proveedores/lista').then(response => {
            this.setState({
                proveedores: response.data.proveedores
            })
        })
    }

    render() {
        const { proveedores } = this.state
        return(
            <CardLt header="Mis proveedores">
                <Link className='btn btn-primary btn-sm mb-3' to='/proveedores/nuevo'>
                    Agregar proveedor
                </Link>
                <ul className='list-group list-group-flush'>
                    {proveedores.map(proveedor => (
                        <Link
                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                            to={`proveedores/${proveedor.id}/edit`}
                            key={proveedor.id}
                        >
                            {proveedor.nombre}
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
