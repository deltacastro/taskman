import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/header/header'
import CuentasIndex from './views/cuentas/index'
import CuentasCreate from './views/cuentas/create'
import ProveedorIndex from './views/proveedores/index'
import ProveedorCreate from './views/proveedores/create'
import ServicioIndex from './views/servicios/index'
import ServicioCreate from './views/servicios/create'
import SitioIndex from './views/sitios/index'
import SitioCreate from './views/sitios/create'
// import ProveedorCreate from './Proveedores/'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        {/* <Route exact path='/' component={ProjectList} /> */}
                        <Route exact path='/cuentas' component={CuentasIndex} />
                        <Route exact path='/cuentas/nuevo' component={CuentasCreate} />
                        <Route exact path='/proveedores' component={ProveedorIndex} />
                        <Route exact path='/proveedores/nuevo' component={ProveedorCreate} />
                        <Route exact path='/servicios' component={ServicioIndex} />
                        <Route exact path='/servicios/nuevo' component={ServicioCreate} />
                        <Route exact path='/sitios' component={SitioCreate} />
                        <Route exact path='/sitios/nuevo' component={SitioCreate} />
                        {/* <Route path='/cuentas/nuevo' component={CuentasIndex} /> */}
                        {/* <Route path='/:id/edit' component={SingleProject} /> */}
                        {/* <Route path='/create' component={NewProject} /> */}
                        {/* <Route path='/:id' component={SingleProject} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
