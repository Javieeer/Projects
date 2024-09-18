import { createRoot } from 'react-dom/client'
import App from './src/app.jsx'
import './src/app.css'

const root = createRoot(document.getElementById('app'))
root.render(<App />)