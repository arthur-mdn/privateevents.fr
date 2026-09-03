import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';

const AnniversairePage = lazy(() =>
  import('./pages/AnniversairePage.jsx').then((m) => ({ default: m.AnniversairePage })),
);
const AProposPage = lazy(() =>
  import('./pages/AProposPage.jsx').then((m) => ({ default: m.AProposPage })),
);
const AvisPage = lazy(() =>
  import('./pages/AvisPage.jsx').then((m) => ({ default: m.AvisPage })),
);
const EntreprisePage = lazy(() =>
  import('./pages/EntreprisePage.jsx').then((m) => ({ default: m.EntreprisePage })),
);
const MariagePage = lazy(() =>
  import('./pages/MariagePage.jsx').then((m) => ({ default: m.MariagePage })),
);
const MentionsLegalesPage = lazy(() =>
  import('./pages/MentionsLegalesPage.jsx').then((m) => ({ default: m.MentionsLegalesPage })),
);
const MonEvenementPage = lazy(() =>
  import('./pages/MonEvenementPage.jsx').then((m) => ({ default: m.MonEvenementPage })),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage.jsx').then((m) => ({ default: m.NotFoundPage })),
);
const PolitiqueConfidentialitePage = lazy(() =>
  import('./pages/PolitiqueConfidentialitePage.jsx').then((m) => ({
    default: m.PolitiqueConfidentialitePage,
  })),
);
const PrestationsPage = lazy(() =>
  import('./pages/PrestationsPage.jsx').then((m) => ({ default: m.PrestationsPage })),
);
const RealisationsPage = lazy(() =>
  import('./pages/RealisationsPage.jsx').then((m) => ({ default: m.RealisationsPage })),
);
const SoireePriveePage = lazy(() =>
  import('./pages/SoireePriveePage.jsx').then((m) => ({ default: m.SoireePriveePage })),
);

function RouteFallback() {
  return (
    <main id="contenu-principal" className="section" aria-busy="true">
      <p className="lead">Chargement…</p>
    </main>
  );
}

function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mariage" element={<MariagePage />} />
        <Route path="/anniversaire" element={<AnniversairePage />} />
        <Route path="/soiree-privee" element={<SoireePriveePage />} />
        <Route path="/entreprise" element={<EntreprisePage />} />
        <Route path="/prestations" element={<PrestationsPage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/avis" element={<AvisPage />} />
        <Route path="/a-propos" element={<AProposPage />} />
        <Route path="/mon-evenement" element={<MonEvenementPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialitePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
