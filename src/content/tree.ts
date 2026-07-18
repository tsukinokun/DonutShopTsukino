import type { ContentNode } from './types';

// コンテンツツリー（Composite）。category=内部ノード / article=葉。
// 記事は導入→概念→例文→確認テスト→総括の5セクション。
export const contentTree: ContentNode[] = [
  {
    kind: 'category',
    id: 'cat-basics',
    title: '基本のことば',
    description: '英文法の土台になる、やさしい単元。',
    children: [
      {
        kind: 'article',
        id: 'art-be-verb',
        slug: 'be-verb',
        title: 'Be動詞の、ふわっと案内',
        summary: '「〜です」「〜にいる」を受け持つ小さな主役、Be動詞のはなし。',
        rewardId: 'reward-be-verb',
        sections: {
          intro: [
            {
              type: 'text',
              text: 'Be動詞は「〜です」「〜にいる」「〜である」の気配を受け持つ、小さくて大切な主役です。文章の輪郭をやさしく整えてくれます。',
            },
            {
              type: 'passage',
              lines: [
                { speakerId: 'tsukino', text: 'いらっしゃい。今日は Be動詞のドーナツを焼いたよ。' },
                { speakerId: 'guest', text: 'Be動詞…？ なんだかむずかしそう。' },
                { speakerId: 'tsukino', text: 'だいじょうぶ。「つなぐ」お仕事をする子、っておぼえてね。' },
              ],
            },
          ],
          concept: [
            {
              type: 'text',
              text: 'Be動詞は主語によって形が変わります。まずは形の一覧を見てみましょう。',
            },
            {
              type: 'cards',
              cards: [
                { label: '現在形', title: 'am / is / are', note: '主語によって形が変わります。' },
                { label: '過去形', title: 'was / were', note: '「前は〜だった」をやさしく受け持ちます。' },
                { label: '基本の役目', title: 'つなぐ・言い切る', note: '名詞や形容詞、場所と気持ちをふんわり結びます。' },
              ],
            },
            {
              type: 'heading',
              text: 'こんなときに使います',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'I am a student. のように、名詞を結ぶ。',
                'She is happy. のように、気持ちや性質を伝える。',
                'We are in the garden. のように、場所を示す。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'example', en: 'I am a student.', ja: 'わたしは学生です。', speakable: true },
            { type: 'example', en: 'She is happy.', ja: '彼女はうれしい。', speakable: true },
            { type: 'example', en: 'We are in the garden.', ja: 'わたしたちは庭にいます。', speakable: true },
            { type: 'example', en: 'He was a teacher.', ja: '彼は先生でした。', speakable: true },
          ],
          quiz: [
            {
              type: 'text',
              text: 'それでは確認テストです。全問正解で金、半分以上で銀、1問正解で銅のドーナツがもらえます。',
            },
          ],
          summary: [
            {
              type: 'text',
              text: 'まずは「主語によって am / is / are が変わる」とだけつかんでおくと十分です。形を丸ごと暗記するより、文の中で“つなぐお仕事”をしていると見るとやわらかく覚えられます。',
            },
            {
              type: 'passage',
              lines: [
                { speakerId: 'guest', text: 'なんだか、ちょっと仲よくなれた気がする。' },
                { speakerId: 'tsukino', text: 'その調子。またドーナツ、焼いて待ってるね。' },
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: 'I ___ a student. の空欄に入るのは？',
              choices: ['am', 'is', 'are', 'be'],
              answerIndex: 0,
              explanation: '主語が I のときは am を使います。',
            },
            {
              id: 'q2',
              prompt: 'She ___ happy. の空欄に入るのは？',
              choices: ['am', 'is', 'are', 'were'],
              answerIndex: 1,
              explanation: '主語が三人称単数（She）のときは is を使います。',
            },
            {
              id: 'q3',
              prompt: 'We ___ in the garden. の空欄に入るのは？',
              choices: ['am', 'is', 'are', 'was'],
              answerIndex: 2,
              explanation: '主語が We（複数）のときは are を使います。',
            },
            {
              id: 'q4',
              prompt: 'He ___ a teacher.（過去） の空欄に入るのは？',
              choices: ['is', 'are', 'was', 'were'],
              answerIndex: 2,
              explanation: '主語が He の過去形は was です。',
            },
          ],
        },
      },
    ],
  },
];
