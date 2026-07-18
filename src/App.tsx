import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

import './App.css';
import { Header } from './components/Header';
import bgImage from './assets/images/background.png';
import { LogoHero } from './components/LogoHero';
import { BeVerbArticle } from './components/BeVerbArticle';

const ARTICLE_HASH = '#be-verb-guide';

function getCurrentHash() {
  return window.location.hash;
}

function App() {
  const [hash, setHash] = useState(() => getCurrentHash());
  const appStyle = {
    '--app-background-image': `url(${bgImage})`,
  } as CSSProperties;

  const isBeVerbPage = hash === ARTICLE_HASH;

  useEffect(() => {
    const handleHashChange = () => {
      setHash(getCurrentHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isBeVerbPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isBeVerbPage]);

  return (
    <div className="app-shell" style={appStyle}>
      <Header />
      <main className={isBeVerbPage ? 'app-main app-main--article' : 'app-main'}>
        {isBeVerbPage ? (
          <section className="article-page" aria-label="Be動詞のふわっと案内">
            <a className="article-page__back" href="#top">
              トップへ戻る
            </a>
            <BeVerbArticle />
          </section>
        ) : (
          <section className="hero-section" aria-label="トップ">
            <LogoHero />
            <a className="hero-link" href={ARTICLE_HASH}>
              Be動詞のふわっと案内へ
            </a>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;