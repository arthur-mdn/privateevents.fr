import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import { CookieConsentProvider } from './context/CookieConsentContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <CookieConsentProvider>
        <App />
      </CookieConsentProvider>
    </BrowserRouter>
  </HelmetProvider>,
);
