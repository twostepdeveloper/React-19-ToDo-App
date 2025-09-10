import { useEffect, useState } from "react";

function AddToDo({ onAddToDo, onEditToDo, editedTodo }) {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim()) return;
        if (editedTodo) {
            onEditToDo(todo, editedTodo.index);
        } else {
            onAddToDo(todo);
        }
        setTodo("");
    };
    useEffect(() => {
        if (editedTodo) {
            setTodo(editedTodo.text);
        }
    }, [editedTodo]);
    return (
        <>
            <div className="card p-3 shadow-sm">
                <form onSubmit={handleSubmit} className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your todo..."
                        value={todo}
                        onChange={(event) => setTodo(event.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                        {editedTodo ? "Update" : "Add"}
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddToDo;
