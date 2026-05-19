import Task from "./Task"

import './List.css'

function List({ tasks, deleteTask, updateTask }) {
  return (
    <div className="list">
      {tasks.map((task, index) => <Task key={task.id} index={index + 1} task={task} deleteTask={deleteTask} updateTask={updateTask} />)}
    </div>
  )
}

export default List