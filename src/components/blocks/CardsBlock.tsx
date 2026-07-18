interface CardsBlockProps {
  cards: { label: string; title: string; note: string }[];
}

export const CardsBlock = ({ cards }: CardsBlockProps) => {
  return (
    <div className="block-cards">
      {cards.map((card) => (
        <section className="block-card" key={card.label + card.title}>
          <p className="block-card__label">{card.label}</p>
          <h3 className="block-card__title">{card.title}</h3>
          <p className="block-card__note">{card.note}</p>
        </section>
      ))}
    </div>
  );
};
