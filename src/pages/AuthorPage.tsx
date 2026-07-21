import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './AuthorPage.css';

export const AuthorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="author-page">
      <Helmet>
        <title>作者紹介 | ドーナツショップ つきの。</title>
        <meta name="description" content="ドーナツショップ つきの。の作者紹介。Tsukino Night Lab について。" />
        <link rel="canonical" href="https://tsukinokun.github.io/DonutShopTsukino/author" />
        <meta property="og:title" content="作者紹介 | ドーナツショップ つきの。" />
        <meta property="og:description" content="ドーナツショップ つきの。の作者紹介。Tsukino Night Lab について。" />
        <meta property="og:url" content="https://tsukinokun.github.io/DonutShopTsukino/author" />
        <meta property="og:image" content="https://tsukinokun.github.io/DonutShopTsukino/ogp-image.png" />
      </Helmet>
      <div className="author-page__card">
        <h1 className="author-page__title">作者紹介</h1>
        <p className="author-page__name">Tsukino Night Lab</p>
        <p className="author-page__desc">
          英語の文法をドーナツ作りに例えて学べるインタラクティブな学習アプリを作成しています。
        </p>
        <a
          className="author-page__link"
          href="https://tsukinokun.github.io/Tsukino-Night-Lab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tsukino Night Lab を訪れる
        </a>
        <Link className="author-page__back" to="/">
          トップへ戻る
        </Link>
      </div>
    </div>
  );
};
