import React from 'react'
import Code from './code'
import Login from './login'
import Register from './register'

export default function Index() {
  return (
    <div>
      <Login />
      <Register />
      <Code />
    </div>
  )
}
