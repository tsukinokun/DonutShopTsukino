import { Link } from 'react-router-dom';
import type { ContentNode } from '../content/types';
import { getReward, RANK_LABEL } from '../content/rewards';
import { useCollection } from '../lib/collectionStore';
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
  const collection = useCollection();
  return (
    <div className={`article-tree article-tree--${variant}`} data-depth={depth}>
      {nodes.map((node) => {
        if (node.kind === 'category') {
          return (
            <section className="article-tree__group" key={node.id}>
              <div
                className="article-tree__category-panel"
                style={{ marginLeft: depth * 12 }}
              >
                <div className="article-tree__category-head">
                  <h2 className="article-tree__category">{node.title}</h2>
                  {node.description && variant === 'cards' && (
                    <p className="article-tree__category-desc">{node.description}</p>
                  )}
                </div>
                <ArticleTree
                  nodes={node.children}
                  depth={depth + 1}
                  variant={variant}
                  onNavigate={onNavigate}
                />
              </div>
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

        const reward = getReward(node.rewardId);
        const rank = collection[node.rewardId] ?? null;
        return (
          <Link
            className="article-tree__card"
            to={`/articles/${node.slug}`}
            key={node.id}
            onClick={onNavigate}
          >
            <div className="article-tree__card-body">
              <span className="article-tree__card-title">{node.title}</span>
              {node.summary && <span className="article-tree__card-summary">{node.summary}</span>}
            </div>
            {reward && (
              <div className="article-tree__card-media">
                <img
                  className={`article-tree__card-icon${rank ? '' : ' article-tree__card-icon--locked'}`}
                  src={reward.icon}
                  alt={reward.name}
                />
                {rank && (
                  <span className={`article-tree__card-rank article-tree__card-rank--${rank}`}>
                    {RANK_LABEL[rank]}
                  </span>
                )}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
};


