import Task from "./Task"

import './List.css'

function List({ tasks, deleteTask, updateTask }) {
  return (
    <article className="list">
      <h2 className="tasksH2">Tareas</h2>
      <div className="list-div">
        {tasks.map((task, index) => <Task key={task.id} index={index + 1} task={task} deleteTask={deleteTask} updateTask={updateTask} />)}
      </div>
    </article>
  )
}

export default List

