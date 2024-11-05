import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1>Better when Redux...LoL</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App