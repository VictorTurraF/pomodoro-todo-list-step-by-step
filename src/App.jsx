import { useState } from "react";
import Task from "./components/Task"

function App() {
  const [taskName, setTaskName] = useState("")
  const [taskPomodoros, setTaskPomodoros] = useState(0)

  const tasks = [
    { name: "Inicializar o projeto", actPomodoros: 1, totalPomodoros: 3, isFinished: true },
    { name: "Implementar cabeçalho", actPomodoros: 2, totalPomodoros: 4, isFinished: false },
  ]

  function handleSubmit(event) {
    event.preventDefault();

    const { target: [taskNameInput, taskPomodorosInput] } = event

    setTaskName(taskNameInput.value);
    setTaskPomodoros(taskPomodorosInput.value)
  }

  return (
    <div>
      <div>Timer</div>
      <div>
        Task name: {taskName} <br/>
        Task pomodoros: {taskPomodoros}

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome da tarefa" />
          <input type="number" placeholder="Total de pomodoros" />
          <button type="submit">Adicionar tarefa</button>
        </form>
        <hr/>
        <div>
          {tasks.map(task => (
            <Task
              name={task.name}
              actPomodoros={task.actPomodoros}
              totalPomodoros={task.totalPomodoros}
              isFinished={task.isFinished}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
