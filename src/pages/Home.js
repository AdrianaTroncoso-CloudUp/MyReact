//Dependencias
import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'

//*Componentes
import Navbar from '../components/Navbar'
export default class Home extends Component {

    constructor(){
        super()

        this.state ={
            fecha: new Date().toDateString(),
            usuario: 'Visitante'
        }
    }

    cambiarNombre = (e) =>{
        this.setState({
            usuario: 'Ady'
        })
    }

    render() {
        return(
            <div>
                <Navbar/>
                <Paper>
                    <h1>{this.state.fecha}</h1>
                    <h1>{this.state.usuario}</h1>
                    <h1>Home</h1>
                    <button onClick={this.cambiarNombre}>Cambiar Nombre</button>
                </Paper>

            </div>
        )
    }
}