import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Counter } from './components/Counter'
import CardGrid from './components/CardGrid/CardGrid'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardGrid/>
    {/* <Counter/> */}
  </StrictMode>
)
