import { LogoHero } from '../components/LogoHero';
import { ArticleTree } from '../components/ArticleTree';
import { contentTree } from '../content/tree';
import { Link } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section" aria-label="トップ">
        <LogoHero />
        <Link className="hero-link" to="/collection">
          コレクション図鑑を見る
        </Link>
      </section>

      <section className="home-articles" aria-label="記事一覧">
        <h1 className="home-articles__title">まなびのメニュー</h1>
        <ArticleTree nodes={contentTree} variant="cards" />
      </section>
    </div>
  );
};
