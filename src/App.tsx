import type { CSSProperties } from 'react';

import './App.css';
import { Header } from './components/Header';
import bgImage from './assets/images/background.png';
import { LogoHero } from './components/LogoHero';

function App() {
  const appStyle = {
    '--app-background-image': `url(${bgImage})`,
  } as CSSProperties;

  return (
    <div className="app-shell" style={appStyle}>
      <Header />
      <main className="app-main">
        <LogoHero />
      </main>
    </div>
  );
}

export default App;