import axios from 'axios'
import React, { Component } from 'React'

class Index extends Comoponent {
    constructor(props) {
        super(props)

    }

    render() {
        <div className='container py-4'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-header'>
                            Lista de cuentas
                        </div>
                        <div className='card-body'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
