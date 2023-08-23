import Task from "./components/Task"

function App() {

  const tasks = [
    { name: "Inicializar o projeto", actPomodoros: 1, totalPomodoros: 3, isFinished: true },
    { name: "Implementar cabeçalho", actPomodoros: 2, totalPomodoros: 4, isFinished: false },
  ]

  return (
    <div>
      <div>Timer</div>
      <div>
        <button>Adicionar tarefa</button>
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
