import './LogoHero.css';
import logoImage from '../assets/images/logo.png';

export const LogoHero = () => {
  return (
    <div className="logo-ellipse">
      <img src={logoImage} alt="ドーナツショップ つきの。" className="logo-mark" />
    </div>
  );
};