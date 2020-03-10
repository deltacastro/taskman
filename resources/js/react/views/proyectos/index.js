import axios from 'axios'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import CardLt from '../../components/card/cardLt'

class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            proyectos: []
        }
    }

    componentDidMount() {
        axios.get('/api/proyectos/lista')
            .then(response => {
                this.setState({
                    proyectos: response.data
                })
            }).catch(errpr => {
                console.log(error)
            })
    }

    render () {
        const { proyectos } = this.state
        return(
            <CardLt header="Lista de proyectos">
                <Link className="btn btn-primaru btn-sm mb-3" to="/proyectos/nuevo">
                    Nuevo Proyecto
                </Link>
                <ul className="list-group list-group-flush">
                    {
                        proyectos.map(proyecto => (
                            <Link
                                className="list-group-item list-group-item-action d-flex justify-content-between align-item-center"
                                to={`proyectos/${proyecto.id}/edit`}
                                key={proyecto.id}
                            >
                                {proyecto.nombre}
                            </Link>
                        ))
                    }
                </ul>
            </CardLt>
        )
    }
}

export default Index
