import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { ArticleTree } from './ArticleTree';
import { contentTree } from '../content/tree';
import './Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = 'site-navigation';
  const close = () => setIsOpen(false);

  return (
    <header className="site-header">
      <Link className="site-header__logo-link" to="/" onClick={close}>
        <img className="site-header__logo" src={logo} alt="ドーナツショップ つきの。" />
      </Link>
      <button
        type="button"
        className="site-header__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label="メニューを開閉"
      >
        ≡
      </button>

      {isOpen && (
        <nav id={menuId} className="site-header__menu" aria-label="サイトメニュー">
          <Link className="site-header__menu-primary" to="/" onClick={close}>
            ホーム
          </Link>
          <Link className="site-header__menu-primary" to="/collection" onClick={close}>
            コレクション図鑑
          </Link>
          <div className="site-header__menu-divider" />
          <p className="site-header__menu-heading">記事一覧</p>
          <ArticleTree nodes={contentTree} variant="compact" onNavigate={close} />
          <div className="site-header__menu-divider" />
          <p className="site-header__menu-heading">作者紹介</p>
          <a
            className="site-header__menu-primary"
            href="https://tsukinokun.github.io/Tsukino-Night-Lab/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Tsukino Night Lab
          </a>
        </nav>
      )}
    </header>
  );
};
