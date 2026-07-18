import { Link } from 'react-router-dom';
import { rewards, RANK_LABEL } from '../content/rewards';
import { useCollection } from '../lib/collectionStore';
import './CollectionPage.css';

export const CollectionPage = () => {
  const collection = useCollection();
  const ownedCount = rewards.filter((r) => collection[r.id]).length;

  return (
    <div className="collection-page">
      <header className="collection-page__header">
        <h1 className="collection-page__title">コレクション図鑑</h1>
        <p className="collection-page__count">
          {ownedCount} / {rewards.length} 個 集めました
        </p>
        <Link className="collection-page__home" to="/">
          トップへ戻る
        </Link>
      </header>

      <ul className="collection-grid">
        {rewards.map((reward) => {
          const rank = collection[reward.id] ?? null;
          const owned = rank !== null;
          return (
            <li
              className={`collection-card ${owned ? `collection-card--${rank}` : 'collection-card--locked'}`}
              key={reward.id}
            >
              <div className="collection-card__icon-wrap">
                {owned ? (
                  <img className="collection-card__icon" src={reward.icon} alt={reward.name} />
                ) : (
                  <span className="collection-card__lock" aria-hidden="true">
                    🔒
                  </span>
                )}
                {owned && rank && (
                  <span className={`collection-card__medal collection-card__medal--${rank}`}>
                    {RANK_LABEL[rank]}
                  </span>
                )}
              </div>
              <p className="collection-card__name">{owned ? reward.name : '？？？'}</p>
              {owned && reward.description && (
                <p className="collection-card__desc">{reward.description}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
