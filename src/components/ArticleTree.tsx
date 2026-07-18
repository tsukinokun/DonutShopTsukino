import { Link } from 'react-router-dom';
import type { ContentNode } from '../content/types';
import './ArticleTree.css';

interface ArticleTreeProps {
  nodes: ContentNode[];
  depth?: number;
  variant?: 'cards' | 'compact';
  onNavigate?: () => void;
}

export const ArticleTree = ({
  nodes,
  depth = 0,
  variant = 'cards',
  onNavigate,
}: ArticleTreeProps) => {
  return (
    <div className={`article-tree article-tree--${variant}`} data-depth={depth}>
      {nodes.map((node) => {
        if (node.kind === 'category') {
          return (
            <section className="article-tree__group" key={node.id}>
              <h2 className="article-tree__category" style={{ marginLeft: depth * 12 }}>
                {node.title}
              </h2>
              {node.description && variant === 'cards' && (
                <p className="article-tree__category-desc">{node.description}</p>
              )}
              <ArticleTree
                nodes={node.children}
                depth={depth + 1}
                variant={variant}
                onNavigate={onNavigate}
              />
            </section>
          );
        }

        if (variant === 'compact') {
          return (
            <Link
              className="article-tree__link"
              to={`/articles/${node.slug}`}
              key={node.id}
              onClick={onNavigate}
              style={{ marginLeft: depth * 12 }}
            >
              {node.title}
            </Link>
          );
        }

        return (
          <Link
            className="article-tree__card"
            to={`/articles/${node.slug}`}
            key={node.id}
            onClick={onNavigate}
          >
            <span className="article-tree__card-title">{node.title}</span>
            {node.summary && <span className="article-tree__card-summary">{node.summary}</span>}
          </Link>
        );
      })}
    </div>
  );
};
