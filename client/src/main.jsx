import { createRoot } from 'react-dom/client'
import './index.css'
import Router from '@/routes/index.jsx'

createRoot(document.querySelector('#root')).render(<Router />)

// http://localhost:5173/about
