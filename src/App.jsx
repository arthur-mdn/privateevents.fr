import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import { AvisPage } from './pages/AvisPage.jsx';
import { MariagePage } from './pages/MariagePage.jsx';
import { MonEvenementPage } from './pages/MonEvenementPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { RealisationsPage } from './pages/RealisationsPage.jsx';
import { RoutePlaceholder } from './pages/RoutePlaceholder.jsx';
import { placeholderRoutes } from './seo/siteMeta.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mariage" element={<MariagePage />} />
      <Route path="/mon-evenement" element={<MonEvenementPage />} />
      <Route path="/avis" element={<AvisPage />} />
      <Route path="/realisations" element={<RealisationsPage />} />
      {placeholderRoutes.map(({ path, heading }) => (
        <Route
          key={path}
          path={path}
          element={<RoutePlaceholder path={path} heading={heading} />}
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
