import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './src/app';

const root = createRoot(document.getElementById('app'));
root.render(
    <Router>
        <App />
    </Router>
);
