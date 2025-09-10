import { useState } from "react";
import AddToDo from "./AddTodo";
import { ToDoList } from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const onAddToDo = (newTodo) => {
    //child event
    setTodos([...todos, newTodo]);
  };
  const onEditToDo = (updatedTodo, index) => {
    // child event
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
    setEditedTodo(null);

  }

  const onEdit = (index) => {
    const editedText = todos.at(index);
    setEditedTodo({ text: editedText, index: index });
  }
  const onDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setEditedTodo(null);
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h1 className="text-center text-primary mb-4">Todo App</h1>

        {/* Add Todo */}
        <AddToDo
          onAddToDo={onAddToDo}
          onEditToDo={onEditToDo}
          editedTodo={editedTodo} />

        {/* Todo List */}
        <ToDoList 
        todos={todos}
        onEditToDo={onEdit}
        onDeleteToDo={onDelete}
        />
      </div>
    </div>
  );
}

export default App;
