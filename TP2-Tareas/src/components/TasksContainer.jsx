import Form from "./Form"
import List from "./List"

import './TasksContainer.css'

function TasksContainer({ tasks, addTask, deleteTask, updateTask }) {
  return (
    <section className="tasksContainer">
      <h1>INGRESÁ TU TAREA</h1>
      <Form addTask={addTask} />
      <h2 className="tasksH2">Tareas</h2>
      <List deleteTask={deleteTask} updateTask={updateTask} tasks={tasks} />
    </section>
  )
}

export default TasksContainer