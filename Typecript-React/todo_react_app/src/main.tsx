import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Todosprovideer } from './store/todos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Todosprovideer>
    <App />
    </Todosprovideer>
  </StrictMode>,
)
