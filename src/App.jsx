import { useState } from "react";
import Task from "./components/Task"
import { rebootCss } from "./styles/reboot";
import { Ul } from "./layouts/Ul";
import { styled } from "@stitches/react";
import { Box } from "./layouts/Box";

const AppGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "4fr 6fr",
  gridGap: "2rem",
  maxWidth: "1000px",
  margin: "3rem auto",
});

rebootCss();

function App() {
  const [activeTaskId, setActiveTaskId] = useState();
  const [tasks, setTasks] = useState([
    { id: self.crypto.randomUUID(), name: "Inicializar o projeto", actPomodoros: 1, totalPomodoros: 3, isFinished: true },
    { id: self.crypto.randomUUID(), name: "Implementar cabeçalho", actPomodoros: 0, totalPomodoros: 2, isFinished: false },
    { id: self.crypto.randomUUID(), name: "Implementar rodapé", actPomodoros: 0, totalPomodoros: 1, isFinished: false },
  ])

  function handleSubmit(event) {
    event.preventDefault();

    const { target: [taskNameInput, taskPomodorosInput] } = event

    const newTask = {
      id: self.crypto.randomUUID(),
      name: String(taskNameInput.value),
      actPomodoros: 0,
      totalPomodoros: Number(taskPomodorosInput.value),
      isFinished: false,
    }

    setTasks(prev => [...prev, newTask]);
  }

  function handleExcludeClick({ taskId }) {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  function handleActiveClick({ taskId }) {
    setActiveTaskId(taskId)
  }

  function handleFinishedChange({ taskId }) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            isFinished: !task.isFinished,
          };
        }
        return task;
      });
    });
  }

  return (
    <AppGrid>
      <Box>Timer</Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome da tarefa" />
          <input type="number" placeholder="Total de pomodoros" />
          <button type="submit">Adicionar tarefa</button>
        </form>
        <hr/>
        <Ul>
          {tasks.map(task => (
            <Task
              id={task.id}
              key={task.id}
              name={task.name}
              actPomodoros={task.actPomodoros}
              totalPomodoros={task.totalPomodoros}

              isFinished={task.isFinished}
              isActive={task.id === activeTaskId}

              onExcludeClick={handleExcludeClick}
              onActiveClick={handleActiveClick}
              onFinishedChange={handleFinishedChange}
            />
          ))}
        </Ul>
      </Box>
    </AppGrid>
  )
}

export default App
