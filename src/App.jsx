import { useState } from "react";
import { rebootCss } from "./styles/reboot";
import { styled } from "@stitches/react";
import { Box } from "./layouts/Box";
import { List } from "./layouts/List";
import { initialTaskList } from "./utils/mocks";
import Task from "./components/Task"
import TaskForm from "./components/TaskForm";
import { createTask } from "./utils/creators";

const AppGrid = styled(Box, {
  maxWidth: "1000px",
  margin: "3rem auto",
});

rebootCss();

function App() {
  const [activeTaskId, setActiveTaskId] = useState("");
  const [tasks, setTasks] = useState(initialTaskList);

  // Event handlers
  function handleSubmit(event) {
    event.preventDefault();

    const [taskNameInput, taskPomodorosInput] = event.target;

    if (!taskNameInput.value || !taskPomodorosInput.value) return;
    
    const newTask = createTask({
      name: taskNameInput.value,
      totalPomodoros: taskPomodorosInput.value
    })

    setTasks((prev) => [...prev, newTask]);
  }

  function handleExcludeClick({ taskId }) {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  function handleActiveClick({ taskId }) {
    setActiveTaskId(taskId)
  }

  function handleFinishedChange({ taskId }) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isFinished: !task.isFinished } : task
      )
    );
  }

  return (
    <AppGrid>
      <TaskForm onSubmit={handleSubmit} />
      <List>
        {tasks.map(task => (
          <Task
            key={task.id}
            {...task}
            isActive={task.id === activeTaskId}
            onExcludeClick={handleExcludeClick}
            onActiveClick={handleActiveClick}
            onFinishedChange={handleFinishedChange}
          />
        ))}
      </List>
    </AppGrid>
  )
}

export default App
