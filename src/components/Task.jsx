function Task({
  name = "",
  totalPomodoros = 0,
  actPomodoros = 0,
  isFinished = false,
  isActive = false,
}) {
  return (
    <div>
      <input type="checkbox" name="isTaskFinished" id="" checked={isFinished} />
      <span>{name}</span>
      <span>{actPomodoros}/{totalPomodoros}</span>
      <button>Excluir</button>
    </div>
  )
}

export default Task