import Task from "./Task"

import './List.css'

function List({ tasks, eliminar }) {
  console.log(tasks)
  return (
    <div className="list">
      {tasks.map((task, index) => <Task name={task.name} category={task.category} key={task.id} index={index + 1} description={task.description} defaultPriority={task.priority} defaultState={task.state} eliminar={eliminar} id={task.id} />)}
    </div>
  )
}

export default List