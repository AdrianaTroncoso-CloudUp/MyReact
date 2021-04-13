import React from 'react'
import { 
    BrowswerRouter as Router,
    Switch,
    Route,
    Link } from "react-router"

    import Home from './home'
    import Documentation from './Documentation'

    function Ejemplo(){
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Documentation">Documentation</Link>
                        </li>
                    </ul>
                </div>
            </Router>
        )
    }