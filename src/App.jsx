import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import "./App.css";
function App(){
  return <center className="todo-container"> 
  <AppName/>
  <AddTodo/>
  <div className="items-contanier">

  <Todoitem1/>
  <Todoitem2/>
  </div>


 
  </center>
  
}
export default App;