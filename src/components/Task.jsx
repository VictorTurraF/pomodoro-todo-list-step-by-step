function Task({
  id = "",
  name = "",
  totalPomodoros = 0,
  actPomodoros = 0,
  isFinished = false,
  isActive = false,
  onExcludeClick = () => {}
}) {
  function handleExcludeClick(event) {
    onExcludeClick({ event, taskId: id })
  }

  return (
    <div>
      <input type="checkbox" name="isTaskFinished" id="" checked={isFinished} />
      <span>{name}</span>
      <span>{actPomodoros}/{totalPomodoros}</span>
      <button onClick={handleExcludeClick}>Excluir</button>
    </div>
  )
}

export default Task