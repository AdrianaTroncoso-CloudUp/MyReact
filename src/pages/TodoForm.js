import React, {useState} from 'react'

function TodoForm(props){
    

    const [input,setInput] = useState('')

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();
    
        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            todo: input
        })
    }


    return(
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Guarda tu To Do'
                    value={input}
                    onChange={handleChange}
                    name='text'
                />
            </form>
            <button onClick={handleSubmit}>Agregar Todo</button>
        </div>
    )
}

export default TodoForm