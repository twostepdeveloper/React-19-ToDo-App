

export function ToDoList({todos,onEditToDo,onDeleteToDo}) {
    return (
        <>
            <div className="card mt-4 shadow-sm">
                <div className="card-header bg-light fw-bold">My To Do List</div>
                <ul className="list-group list-group-flush">
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            {/* Todo Text */}
                            <span>{todo}</span>

                            {/* Action Buttons */}
                            <div className="d-flex gap-2">
                                <button className="btn btn-warning btn-sm" onClick={() => onEditToDo(index)}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => onDeleteToDo(index)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}