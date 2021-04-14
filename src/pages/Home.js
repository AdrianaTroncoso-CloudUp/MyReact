//Dependencias
import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'

//*Componentes
import Navbar from '../components/Navbar'
export default class Home extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <Paper>
                    <h1>Home</h1>
                    {
                    // Date().toLocaleDateString()
                    
                    new Date().toLocaleDateString()
                }
                </Paper>

            </div>
        )
    }
}