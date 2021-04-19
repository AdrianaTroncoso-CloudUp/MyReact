import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import classes from '*.module.css'

const useStyles = makeStyles({
    cardbonita:{
        background: 'black'
    }
})

const TodoItems = ([id, text, done]) => {
    return(
        <div>
            <Card className={classes.cardbonita}>
                <h1>TO DO</h1>
                <p>{id}</p>
                <p>{text}</p>
                <p>{done}</p>
            </Card>
        </div>
    )
}

export default TodoItems