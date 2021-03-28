import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { getDircetion } from './localization/index'

document.getElementsByTagName('body')[0].setAttribute('dir', getDircetion())
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
