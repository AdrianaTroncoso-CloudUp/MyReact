//Dependencias
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/core/Menu'
import  { IconButton } from '@material-ui/core' 

//*Componentes

export default class Navbar extends Component {
    render(){
        return(
            <div>
                <Grid xs='12'>
                    <Appbar position='static'>
                        <Toolbar>
                            <IconButton>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant='h5'>
                                Navbar
                            </Typography>
                        </Toolbar>
                    </Appbar>

                </Grid>
            </div>
        )
    }
}