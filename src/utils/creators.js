export function createTask({ name = "", totalPomodoros }) {
  return {
    id: self.crypto.randomUUID(),
    name: String(name),
    actPomodoros: 0,
    totalPomodoros: Number(totalPomodoros),
    isFinished: false,
  };
}