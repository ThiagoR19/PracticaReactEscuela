import Task from "./Task"

import './List.css'

function List({ tasks, deleteTask, updateTask }) {
  return (
    <div className="list">
      {tasks.map((task, index) => <Task name={task.name} category={task.category} key={task.id} index={index + 1} description={task.description} defaultPriority={task.priority} defaultState={task.state} deleteTask={deleteTask} id={task.id} updateTask={updateTask} />)}
    </div>
  )
}

export default List