import { Link, useParams } from 'react-router-dom';
import { getArticleBySlug, getBreadcrumb } from '../lib/contentIndex';
import { Breadcrumb } from '../components/Breadcrumb';
import { BlockRenderer } from '../components/blocks/BlockRenderer';
import { Quiz } from '../components/Quiz';
import { SECTION_LABELS, SECTION_ORDER } from '../content/types';
import './ArticlePage.css';

export const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="article-page">
        <div className="article-not-found">
          <h1>記事が見つかりませんでした</h1>
          <Link className="article-page__home" to="/">
            トップへ戻る
          </Link>
        </div>
      </div>
    );
  }

  const crumbs = getBreadcrumb(article.slug);

  return (
    <div className="article-page">
      <Breadcrumb crumbs={crumbs} />

      <article className="article" aria-labelledby="article-title">
        <h1 id="article-title" className="article__title">
          {article.title}
        </h1>
        {article.summary && <p className="article__summary">{article.summary}</p>}

        {SECTION_ORDER.map((key) => {
          const blocks = article.sections[key];
          return (
            <section className="article__section" key={key} aria-label={SECTION_LABELS[key]}>
              <div className="article__section-label">{SECTION_LABELS[key]}</div>
              {blocks.length > 0 && <BlockRenderer blocks={blocks} />}
              {key === 'quiz' && <Quiz quiz={article.quiz} rewardId={article.rewardId} />}
            </section>
          );
        })}
      </article>

      <Link className="article-page__home" to="/">
        トップへ戻る
      </Link>
    </div>
  );
};
