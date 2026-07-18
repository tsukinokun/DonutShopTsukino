import type { CSSProperties } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import bgImage from './assets/images/background.png';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { CollectionPage } from './pages/CollectionPage';

function App() {
  const appStyle = {
    '--app-background-image': `url(${bgImage})`,
  } as CSSProperties;

  return (
    <div className="app-shell" style={appStyle}>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
