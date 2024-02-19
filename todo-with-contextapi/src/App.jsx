import React, { useEffect, useState } from 'react'
import { TodoProvider } from './Component/Context/Context'
import TodoForm from './Component/TodoForm'
import TodoItem from './Component/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [ { id: Date.now(), ...todo }  , ...prevTodo])
  }

  const updateTodo = (id, todo) => {
    setTodos(() => todos.map(prevTodo => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos(() => todos.filter(prevTodo => prevTodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos(() => todos.map(prevTodo => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  return (
    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, toggleComplete, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            < TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
