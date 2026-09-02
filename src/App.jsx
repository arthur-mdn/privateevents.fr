import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import { AnniversairePage } from './pages/AnniversairePage.jsx';
import { AProposPage } from './pages/AProposPage.jsx';
import { AvisPage } from './pages/AvisPage.jsx';
import { EntreprisePage } from './pages/EntreprisePage.jsx';
import { MariagePage } from './pages/MariagePage.jsx';
import { MentionsLegalesPage } from './pages/MentionsLegalesPage.jsx';
import { MonEvenementPage } from './pages/MonEvenementPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { PolitiqueConfidentialitePage } from './pages/PolitiqueConfidentialitePage.jsx';
import { PrestationsPage } from './pages/PrestationsPage.jsx';
import { RealisationsPage } from './pages/RealisationsPage.jsx';
import { SoireePriveePage } from './pages/SoireePriveePage.jsx';

function App() {
  return (
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
  );
}

export default App;
