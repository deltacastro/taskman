import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Principal</Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className='nav-link' to='/cuentas'>Cuentas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/proveedores'>Proveedores</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/servicios'>Servicios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/sitios'>Sitios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/clientes'>Clientes</Link>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Header
