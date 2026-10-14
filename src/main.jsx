import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
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
