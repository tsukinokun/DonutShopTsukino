import { useState } from 'react';
import logo from '../assets/images/logo.png';
import './Header.css';

const MENU_ITEMS = ['メニュー1', 'メニュー2', 'メニュー3'];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = 'site-navigation';

  return (
    <header className="site-header">
      <img className="site-header__logo" src={logo} alt="ロゴ" />
      <button 
        type="button"
        className="site-header__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        ≡
      </button>

      {isOpen && (
        <nav id={menuId} className="site-header__menu" aria-label="サイトメニュー">
          <ul className="site-header__menu-list">
            {MENU_ITEMS.map((item) => (
              <li key={item} className="site-header__menu-item">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};