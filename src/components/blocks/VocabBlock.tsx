interface VocabBlockProps {
  words: { en: string; ja: string; note?: string }[];
}

export const VocabBlock = ({ words }: VocabBlockProps) => {
  return (
    <div className="block-vocab">
      {words.map((word) => (
        <section className="block-vocab__item" key={word.en}>
          <div className="block-vocab__head">
            <span className="block-vocab__en">{word.en}</span>
            <span className="block-vocab__ja">{word.ja}</span>
          </div>
          {word.note && <p className="block-vocab__note">{word.note}</p>}
        </section>
      ))}
    </div>
  );
};
