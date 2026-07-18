import './BeVerbArticle.css';

const BE_FORMS = [
  {
    label: '現在形',
    form: 'am / is / are',
    note: '主語によって形が変わります。',
  },
  {
    label: '過去形',
    form: 'was / were',
    note: '「前は〜だった」をやさしく受け持ちます。',
  },
  {
    label: '基本の役目',
    form: 'つなぐ・言い切る',
    note: '名詞や形容詞、場所と気持ちをふんわり結びます。',
  },
];

const BE_USE_CASES = [
  'I am a student. のように、名詞を結ぶ。',
  'She is happy. のように、気持ちや性質を伝える。',
  'We are in the garden. のように、場所を示す。',
];

export const BeVerbArticle = () => {
  return (
    <article className="be-verb-article" id="be-verb-guide" aria-labelledby="be-verb-title">
      <div className="be-verb-article__eyebrow">解説記事 01</div>
      <h1 id="be-verb-title" className="be-verb-article__title">
        Be動詞の、ふわっと案内
      </h1>
      <p className="be-verb-article__lead">
        Be動詞は「〜です」「〜にいる」「〜である」の気配を受け持つ、小さくて大切な主役です。
        文章の輪郭をやさしく整えてくれます。
      </p>

      <div className="be-verb-article__cards">
        {BE_FORMS.map((item) => (
          <section className="be-verb-card" key={item.label}>
            <p className="be-verb-card__label">{item.label}</p>
            <h2 className="be-verb-card__form">{item.form}</h2>
            <p className="be-verb-card__note">{item.note}</p>
          </section>
        ))}
      </div>

      <section className="be-verb-article__section">
        <h2 className="be-verb-article__section-title">こんなときに使います</h2>
        <ul className="be-verb-article__list">
          {BE_USE_CASES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="be-verb-article__section be-verb-article__section--soft">
        <h2 className="be-verb-article__section-title">覚え方のコツ</h2>
        <p>
          まずは「主語によって am / is / are が変わる」とだけつかんでおくと十分です。
          形を丸ごと暗記するより、文の中で“つなぐお仕事”をしていると見るとやわらかく覚えられます。
        </p>
      </section>
    </article>
  );
};