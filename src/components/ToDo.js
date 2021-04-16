import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
// import Button from '@material/core/Button'
import Grid from '@material-ui/core/Grid'

const ToDo = () => {

    const[details, setDetails] = useState()
    const [edit, setEdit] = usestate({
        id: null,
        value:''
    })

    const submitUpdate = value =>{
        setEdit({
        id:null,
        value:''
    })
    }

    return(
        <div>
            <Grid>
                <Card>
                    <Button>
                        Detalles
                    </Button>
                    <CardContent>
                        <Typography>Este es un TODO</Typography>
                    </CardContent>
                    <Button onClick={submitUpdate}>
                    Editar
                    </Button>
                </Card>
            </Grid>    
        </div>            
    )

}

export default ToDo