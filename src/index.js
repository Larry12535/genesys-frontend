import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './Styles/index.css'

import routes from './Routes/Routes'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                {routes.map(({path, exact, component}) => {
                    return <Route 
                        key={path}
                        path={path} 
                        exact={exact} 
                        component={component}
                    />
                })}
                </Switch>
            </BrowserRouter>
        );
    }
}

render(
    <App/>,
    document.getElementById('root')
)