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
        id: 'art-pronoun',
        slug: 'pronoun',
        title: '人称代名詞',
        summary: '「私」「あなた」「彼」…文の主役を示す、人称代名詞のはなし。',
        rewardId: 'reward-pronoun',
        sections: {
          intro: [
            {
              type: 'text',
              text: '人称代名詞は「誰について話しているか」を示す言葉です。名前を何度もくりかえさなくてすむ、小さくて便利な主役です。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: 'この記事では「人称代名詞」を扱います。人称代名詞は、文の中で「誰について話しているか」を示す代名詞です。',
            },
            {
              type: 'heading',
              text: '日本語と英語の対応表',
              level: 2,
            },
            {
              type: 'text',
              text: 'まずは、日本語と英語のことばの対応を表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['日本語', '英語（主格）', '意味・使い方'],
              rows: [
                ['私', 'I', '話し手自身'],
                ['あなた', 'you', '聞き手（単数・複数どちらも）'],
                ['彼', 'he', '男性を指す第三人称'],
                ['彼女', 'she', '女性を指す第三人称'],
                ['それ', 'it', '物や動物など'],
                ['私たち', 'we', '話し手を含む複数'],
                ['彼ら', 'they', '複数（人・物とも）'],
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'I（自分）' },
            { type: 'example', en: 'I am happy.', ja: '私、うれしいです。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'You（相手）' },
            { type: 'example', en: 'You are kind.', ja: 'あなた、やさしいですね。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'It（ドーナツ1個）' },
            { type: 'example', en: 'It is sweet.', ja: 'それ、甘いですよ。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'They（ドーナツたち）' },
            { type: 'example', en: 'They are good.', ja: 'それら、美味しいですよ。', speakable: true, speaker: 'tsukino' },
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
              text: 'この記事でおぼえたことを、項目ごとにおさらいしましょう。',
            },
            {
              type: 'list',
              items: [
                '人称代名詞の主格は7つ：I（私）・you（あなた）・he（彼）・she（彼女）・it（それ）・we（私たち）・they（彼ら）。',
                'Be動詞と組み合わせて使う：I am happy. / You are kind. / It is sweet. / They are good.',
                'I と you は主語でも目的語でも形が変わらない（格変化しない）。',
              ],
            },
            {
              type: 'text',
              text: '主語と目的語で形が変わるルールは、次のステップでゆっくりやっていきます。',
            },
          ],
        },
        quiz: {
            questions: [
              {
                id: 'q1',
                prompt: '「私」を表す主格の人称代名詞は？',
                choices: ['me', 'I', 'my', 'mine'],
                answerIndex: 1,
                explanation: '話し手自身は I です。',
              },
              {
                id: 'q2',
                prompt: '「あなた」を表す人称代名詞はどれ？',
                choices: ['he', 'you', 'it', 'they'],
                answerIndex: 1,
                explanation: '相手は you です。単数・複数どちらも you です。',
              },
              {
                id: 'q3',
                prompt: '「彼」を表す主格の人称代名詞は？',
                choices: ['he', 'she', 'it', 'we'],
                answerIndex: 0,
                explanation: '男性を指す第三人称は he です（対応表の「彼」）。',
              },
              {
                id: 'q4',
                prompt: '「それら」を表す人称代名詞は？',
                choices: ['it', 'they', 'she', 'I'],
                answerIndex: 1,
                explanation: '複数は they です。例文の "They are good." で使われています。',
              },
            ],
          },
        },
      {
        kind: 'article',
        id: 'art-be-verb',
        slug: 'be-verb',
        title: 'Be動詞',
        summary: '「〜です」「〜にいる」を受け持つ小さな主役、Be動詞のはなし。',
        rewardId: 'reward-be-verb',
        sections: {
          intro: [
            {
              type: 'text',
              text: 'Be動詞は「〜です」「〜にいる」「〜である」の気配を受け持つ、小さくて大切な主役です。文章の輪郭をやさしく整えてくれます。',
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
