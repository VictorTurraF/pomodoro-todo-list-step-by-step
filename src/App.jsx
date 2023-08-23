import Task from "./components/Task"

function App() {
  return (
    <div>
      <div>Timer</div>
      <div>
        <button>Adicionar tarefa</button>
        <div>
          <Task name="Inicializar o projeto" actPomodoros={1} totalPomodoros={3} isFinished />
          <Task name="Implementar cabeçalho" actPomodoros={2} totalPomodoros={4} />
        </div>
      </div>
    </div>
  )
}

export default App
