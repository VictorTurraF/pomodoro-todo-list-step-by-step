function Task({
  id = "",
  name = "",
  totalPomodoros = 0,
  actPomodoros = 0,
  isFinished = false,
  isActive = false,
  onExcludeClick = () => {},
  onFinishedChange = () => {}
}) {
  function handleExcludeClick(event) {
    onExcludeClick({ event, taskId: id })
  }

  return (
    <div>
      <input 
        id={id}
        type="checkbox" 
        name="isTaskFinished" 
        onChange={onFinishedChange}
        checked={isFinished}
      />
      <span>{name}</span>
      <span>{actPomodoros}/{totalPomodoros}</span>
      <button onClick={handleExcludeClick}>Excluir</button>
    </div>
  )
}

export default Task