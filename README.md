# Passo a passo do projeto + conceitos
Esse guia é utilizado nos vídeos de explicação sobre o ReactJS + NextJS

## 1. Inicialização do projeto

Requisitos Node (LTS) + Npm ou Yarn

> O Node é utilizado para fazer o bundling da nossa aplicação.
> O bundling (ou empacotamento) é a transformação do javascript para uma versão compreensível e compatível com o browser

Iniciando com Vite
```bash
$ yarn create vite pomodoro-todo-list-video --template react
```

### Remoção dos arquivos padrão
- src/App.css
- src/index.css
- assets/react.svg
- .eslintrc.cjs

```bash
rm src/App.css
rm src/index.css
rm src/assets/react.svg
rm .eslintrc.cjs
```

### Link do Vídeo
- [React JS Conceitos Basicos + Aplicações + Cases - 28 August 2023](https://www.loom.com/share/e445c5de2a084aeabe3f10924dee818b?sid=f2fb2eb7-c252-4d22-a1c3-ee3430089456)
- [Inicialização de projetos React com Vite JS - 28 August 2023](https://www.loom.com/share/7b77302dd13d492b8da121a43628ae0b?sid=016010ff-e36d-44a2-b475-77d34cf0e919)


## 2. Componentização
O conceito que considero mais simples de compreender e utilizar, e um dos mais fundamentais.

### Adicionando um `.editorconfig`
```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false
```

### Fazendo a estrutura básica da aplicação
```jsx

function App() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Nome da tarefa"/>
        <input type="number" placeholder="Pomodoros estimados"/>
        <button>Adicionar</button>
      </form>
      <ul>
        <li>
          <span><input type="checkbox" /></span>
          <span>Implementar API</span>
          <span>1/3</span>
          <button>Excluir</button>
        </li>
      </ul>
    </div>
  )
}

export default App

```

### Componente de Tarefa

```jsx
import React from 'react'

function Task(props) {
  const { isFinished, name, actPomodoros, totalPomodoros } = props

  return (
    <li>
      <span><input type="checkbox" checked={isFinished} /></span>
      <span>{name}</span>
      <span>{actPomodoros}/{totalPomodoros}</span>
      <button>Excluir</button>
    </li>
  )
}

export default Task
```

### 3. Renderizando listas

Conforme vamos desenvolvendo aplicações web com React, vai ficando cada vez mais comum a utilização de listas para renderizar repetições no layout da nossa interface.

Exemplos onde repetimos UI:
- Menus
- Grids
- Listas (CRUD)

Renderizar listas também exemplica bem os recursos do JSX.


```jsx
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
          <Task name="Inicializar o projeto" actPomodoros={1} totalPomodoros={3} isFinished />
          <Task name="Implementar cabeçalho" actPomodoros={2} totalPomodoros={4} />
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
```

### 4. Gerenciamento de Estado

Adicionar os estados

```jsx
import { useState } from "react";

/* ... */

function App() {

  const [taskName, setTaskName] = useState("")
  const [taskPomodoros, setTaskPomodoros] = useState(0)


  /* ... */

}
```

Adicionar o handler de sumbit

```jsx
function handleSubmit(event) {
  event.preventDefault();

  const { target: [taskNameInput, taskPomodorosInput] } = event

  setTaskName(taskNameInput.value);
  setTaskPomodoros(taskPomodorosInput.value)
}
```

Adicionar JSX

```jsx
return (
    <div>
      Task name: {taskName} <br/>
      Task pomodoros: {taskPomodoros}
      <form>
      {/* ... */}
)
```

#### Explicação

##### Declaração `useState`

`useState` é um React Hook,

React Hooks são utilizados para reutilização de comportamentos dos nossos componentes. 
Tem como padrão funções que iniciam com "use".

`useState` por exemplo pode ser chamado em um componente sempre que eu quiser gerenciar estado.

##### Declaração `onSubmit={handleSumbmit}`

A forma como definimos um callback para o evento de submissão do formulário é muito parecida com o que fazemos na web padrão, porém no JSX tem que ser um pouquinho diferente, são algumas limitações para que o JSX possa funcionar de uma forma mais assertiva visto que o mesmo é um JavaScript.


##### Atualização de estados

Usamos `setTaskName` e `setTaskPomodoros` para disparar as atualização no nosso DOM, sem eles, podemos até alterar as variavei no escopo da função, mas isso não irá atualizar o nosso DOM no momento de executar nossa aplicação.

### 5. Gerenciando listas com estados

#### Removendo as alterações anteriores
- Remoção dos estados
- Remoção do html da exibição

#### Transformar a lista de tasks em um estado
```jsx
  const [tasks, setTasks] = useState([
    { name: "Implementar cabeçalho", actPomodoros: 1, totalPomodoros: 2, isFinished: false },
    { name: "Implementar rodapé", actPomodoros: 1, totalPomodoros: 1, isFinished: false },
  ])
```

#### Ajustar a lógica do submit do formulário
```jsx
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
```

#### Explicar sobre atualização de estado
Embora lista sejam instâncias, mesmo alterando a instância isso não irá refletir alterações no DOM embora a instancia em si mude de fato.

Exemplo
```jsx
function handleSubmit(event) {
  event.preventDefault();

  const { target: [taskNameInput, taskPomodorosInput] } = event

  const newTask = {
    name: String(taskNameInput.value),
    actPomodoros: 0,
    totalPomodoros: Number(taskPomodorosInput.value),
    isFinished: false,
  }

  tasks.push(newTask) // Atualização da instância
  // Issó atualiza tasks no escopo onde ela está presente mas não irá atulizar o DOM
}
```

### 6. Adicionando a funcionalidade de exclusão de items da lista

#### Adicionar uuid aos items da lista

No estado inicial
```jsx
  const [tasks, setTasks] = useState([
    { id: self.crypto.randomUUID(), name: "Inicializar o projeto", actPomodoros: 1, totalPomodoros: 3, isFinished: true },
    { id: self.crypto.randomUUID(), name: "Implementar cabeçalho", actPomodoros: 1, totalPomodoros: 2, isFinished: false },
    { id: self.crypto.randomUUID(), name: "Implementar rodapé", actPomodoros: 1, totalPomodoros: 1, isFinished: false },
  ])
```

E na criação de uma nova task
```jsx
const newTask = {
  id: self.crypto.randomUUID(),
  name: String(taskNameInput.value),
  actPomodoros: 0,
  totalPomodoros: Number(taskPomodorosInput.value),
}
```

Ajuste no componente de task
```jsx
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
      <button>Excluir</button>
      <button onClick={handleExcludeClick}>Excluir</button>
    </div>
  )
}
```

Adição do handler de exclusão
```jsx
  function handleExcludeClick({ taskId }) {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }
```

Versão simplificada do handler
```jsx
  function handleExcludeClick({ taskId }) {
    setTasks(
      function (prev) {

        const newTasks = prev.filter(
          function (task) {
            
            return task.id !== taskId
          } 
        )
        
        return newTasks
      }
    )
  }
```

### 7. Detalhando a funcionalidade de exclusão

Sobre o calback de exclusão `onExcludeClick`
no onClick do botão de exclusão será chamada a função `handleExcludeClick`
esse função irá fazer um _callback_, que é basicamente quando passo uma função como paramentro
para outra função e espero que em determinado momento a função que eu passei seja acionada

Quando handleExcludeClick chama a função `onExcludeClick` como callback, nos subimos a execução
na nossa arvore de componentes e executamos o que definimos anteriormente, nesse caso,
nós passamos para a propriedade `onExcludeClick` uma callback chamado `handleExcludeClick` no nosso `App.jsx`.

Por fim, é executado o que estiver definido nela, nesse caso:
```jsx
setTasks(prev => prev.filter(task => task.id !== taskId))
```

`setTasks` irá performar a atualização de estado,
o callback que passamos irá pegar o estado anterior de tasks, nesse caso, o `prev`.
E irá fazer a filtragem. A filtragem irá gerar uma nova lista que não conterá a task com o id que recebemos pelo parametro, pois a mesma é a que desejamos excluir. Com isso, o retorno do nosso callback (que é a nova lista) será promovida a nova atualização de estado.


### 8. Estilização

Estilização com Stitches

```bash
$ yarn add @stitches/react
```

Passo a passo:
- Definir estilos globais
- Exemplificando um componente estilizado
- Json de schema

### 9. Estilização Detalhamento

- Estilização de componentes
- Variantes de estilo
- Tema

### 10. Controlando tarefa selecionada

Adicionar novo estado
```jsx
  const [activeTaskId, setActiveTaskId] = useState();
```

Adicionar handler de tarefa ativa e prop de callback + prop de flag de ativa
```jsx

{
  /* ... */
  onActiveClick = () => {},
  isActive = false
}

/* ... */

function handleActiveClick(event) {
  const checkboxEl = event.currentTarget.querySelector('input[type=checkbox]')

  if (checkboxEl.contains(event.target) || checkboxEl === event.target) {
    return;
  }

  onActiveClick({ event, taskId: id })
}
```

Adicionar handler de task ativa + passar callback e prop para componente de task
```jsx
  function handleActiveClick({ taskId }) {
    setActiveTaskId(taskId)
  }

  /* ... */

  return (
    <AppGrid>
      {/* ... */}
      <List>
        {tasks.map(task => (
          <Task 
            id={task.id}
            key={task.id}
            name={task.name} 
            actPomodoros={task.actPomodoros} 
            totalPomodoros={task.totalPomodoros} 
            isFinished={task.isFinished}
            onExcludeClick={handleExcludeClick}

            isActive={task.id === activeTaskId}
            onActiveClick={handleActiveClick}
          />
        ))}
        </List>
    </AppGrid>
  )

```


### 11. Controlando tarefas finalizadas

Modificando o componente de tarefas
```jsx
function Task(props) {
  const { 
    /* ... */

    onFinishedChange = () => {}
  } = props

  /* ... */

  function handleFinishedChange(event) {
    onFinishedChange({ event, taskId: id })
  }
  
  return (
    <Row onClick={handleActiveClick} isActive={isActive}>
      <input
        id={id}
        type="checkbox"
        name="isTaskFinished"
        onChange={handleFinishedChange} // Adicionar handler
        checked={isFinished} // Passar flag para estilização
      />
      <DescriptionCol>{name}</DescriptionCol>
      <span>{actPomodoros}/{totalPomodoros}</span>
      <Button onClick={handleExcludeClick}>Excluir</Button>
    </Row>
  )
}

export default Task
```

Adicionando handlers no componente pai (App)
```jsx
function App() {
  /* ... */

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

            onFinishedChange={handleFinishedChange} // Passar handler
          />
        ))}
      </List>
    </AppGrid>
  )
}
```

### 12. Case: Imobiliária Grupo Kaza

Exemplos de gerenciamento de estado:

- Filtro da Home
- Seleções do filtro
- Sessão de simulação de financiamento
- Funcionalidade de favoritos
- Funcionalidade do comparador

Exemplos de componentização
- Links do menu (Efeito Hover)
- Cards de categorias
- Cards de produto
- Cards de Serviços

### 13. Case: Grupo Kaza | Sobre o NextJS

- Diferenças entre ReactJS e NextJS
- Client Side e Server Side
- Exemplos com código

## Vídeos

[Link da pasta do loom com todos os vídeos](https://loom.com/share/folder/029dde17691d493a8761d924e31eeb5f)