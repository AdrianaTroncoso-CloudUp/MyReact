import './App.css';


//*Componentes
import Home from './pages/Home';
import TodoItems from './components/TodoItems'

const todoList = [{
  id:1, 
  text: dasdasdasd,
  done: false
},{
  id:2, 
  text: dasdasdasd,
  done: true
}]

function App() {
  return (
    <div className="App">
      <Home/>
      {
        todoList.map(item =>{
          <TodoItems 
          id={item.id}
          text={item.text}
          done={item.done}
          />
        })
      }
    </div>
  );
}

export default App;
