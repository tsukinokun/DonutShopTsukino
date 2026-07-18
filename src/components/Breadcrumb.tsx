import { Link } from 'react-router-dom';
import type { Crumb } from '../lib/contentIndex';
import './Breadcrumb.css';

interface BreadcrumbProps {
  crumbs: Crumb[];
}

// ホーム > 全祖先カテゴリ > 記事。ホームのみリンク、中間カテゴリは非リンク、末尾は現在記事。
export const Breadcrumb = ({ crumbs }: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb" aria-label="パンくず">
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link className="breadcrumb__link" to="/">
            ホーム
          </Link>
        </li>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li className="breadcrumb__item" key={index}>
              <span className="breadcrumb__sep" aria-hidden="true">
                ›
              </span>
              {isLast ? (
                <span className="breadcrumb__current" aria-current="page">
                  {crumb.title}
                </span>
              ) : (
                <span className="breadcrumb__text">{crumb.title}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
