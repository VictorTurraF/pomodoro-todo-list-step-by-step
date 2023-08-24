import { useState } from "react";
import Task from "./components/Task"

function App() {
  const [tasks, setTasks] = useState([
    { name: "Inicializar o projeto", actPomodoros: 1, totalPomodoros: 3, isFinished: true },
    { name: "Implementar cabeçalho", actPomodoros: 1, totalPomodoros: 2, isFinished: false },
    { name: "Implementar rodapé", actPomodoros: 1, totalPomodoros: 1, isFinished: false },
  ])

  function handleSubmit(event) {
    event.preventDefault();

    const { target: [taskNameInput, taskPomodorosInput] } = event

    const newTask = {
      name: String(taskNameInput.value),
      actPomodoros: 0,
      totalPomodoros: Number(taskPomodorosInput.value),
      isFinished: false,
    }

    setTasks(prev => [...prev, newTask]);
  }

  return (
    <div>
      <div>Timer</div>
      <div>
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
