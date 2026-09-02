import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { RoutePlaceholder } from './pages/RoutePlaceholder.jsx';
import { placeholderRoutes } from './seo/siteMeta.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
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
