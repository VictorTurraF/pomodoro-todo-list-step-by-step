import React from 'react'
import { Input } from '../layouts/Input'
import { Button } from '../layouts/Button'
import { styled } from '@stitches/react'

const Form = styled("form", {
  display: "grid",
  gap: '.5rem',
  gridTemplateColumns: "1fr 11rem 160px",
  marginBottom: "1rem"
})

function TaskForm(props) {
  return (
    <Form {...props}>
      <Input type="text" placeholder="Nome da tarefa" />
      <Input type="number" placeholder="Total de pomodoros" />
      <Button type="submit">Adicionar tarefa</Button>
    </Form>
  )
}

export default TaskForm