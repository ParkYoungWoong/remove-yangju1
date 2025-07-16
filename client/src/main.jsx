import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootEl = document.querySelector('#root')
const app = createRoot(rootEl)
app.render(<App />)
