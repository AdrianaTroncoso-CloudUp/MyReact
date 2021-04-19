import React, {useState} from 'react'
import  useDispatch from 'react-redux'
import guardarTodo from '../features/todoSlice'

function TodoForm(props){
    
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const saveTodo = e =>{
        e.preventDefault();
    
        // props.onSubmit({
        //     id:Math.floor(Math.random() * 10000),
        //     todo: input
        // })

        dispatch(guardarTodo({
            id:Math.floor(Math.random() * 10000),
            text: input,
            done:false
        }))
    }


    return(
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Guarda tu To Do'
                    value={input}
                    onChange={saveTodo}
                    name='text'
                />
            </form>
            <button onClick={handleSubmit}>Agregar Todo</button>
        </div>
    )
}

export default TodoForm