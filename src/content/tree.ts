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
              text: 'Be動詞は主語（誰について話しているか）によって形が変わります。まずは、人称代名詞との対応を表でおぼえましょう。',
            },
            {
              type: 'heading',
              text: '主語とBe動詞の対応表',
              level: 2,
            },
            {
              type: 'table',
              headers: ['主語（人称代名詞）', '現在形', '意味・使い方'],
              rows: [
                ['I（私）', 'am', '話し手自身について話す'],
                ['you（あなた）', 'are', '聞き手（単数・複数どちらも）'],
                ['he（彼） / she（彼女） / it（それ）', 'is', '三人称単数'],
                ['we（私たち）', 'are', '話し手を含む複数'],
                ['they（彼ら）', 'are', '複数（人・物とも）'],
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'I（自分）' },
            { type: 'example', en: 'I am a baker.', ja: 'わたしはパン職人です。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'She（彼女）' },
            { type: 'example', en: 'She is sweet.', ja: '彼女は甘いですよ。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'We（私たち）' },
            { type: 'example', en: 'We are in the shop.', ja: 'わたしたちは店にいます。', speakable: true, speaker: 'tsukino' },
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
                'Be動詞は主語によって形が変わる：I am / you are / he・she・it is / we・they are。',
                '名詞・形容詞・場所をつなぐ“つなぐお仕事”をする。',
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
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-general-verb',
        slug: 'general-verb',
        title: '一般動詞',
        summary: '「〜する」を表す主役、一般動詞のはなし。ドーナツを焼いたり、客さんを呼んだり。',
        rewardId: 'reward-general-verb',
        sections: {
          intro: [
            {
              type: 'text',
              text: '一般動詞は「〜する」「動く」「働く」の気配を受け持つ主役です。Be動詞が“つなぐ”なら、一般動詞は“はっきり動く”お仕事をします。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '一般動詞は主語によって形が少し変わります。一番大切なのは「三人称単数（he・she・it）のときだけ、語尾に -s がつく」というルールです。まずは対応表でおぼえましょう。',
            },
            {
              type: 'heading',
              text: '主語と一般動詞の対応表',
              level: 2,
            },
            {
              type: 'table',
              headers: ['主語（人称代名詞）', '動詞の形', '意味・使い方'],
              rows: [
                ['I（私）', 'make', '話し手自身がする'],
                ['you（あなた）', 'make', '聞き手がする'],
                ['he / she / it', 'makes', '三人称単数には -s がつく'],
                ['we（私たち）', 'make', '話し手を含む複数がする'],
                ['they（彼ら）', 'make', '複数がする'],
              ],
            },
            {
              type: 'heading',
              text: '否定・疑問は do / does と仲よし',
              level: 2,
            },
            {
              type: 'list',
              items: [
                'I make donuts. のように、そのまま動詞を置く。',
                '否定や疑問のときは、do / does を手伝いに呼ぶ（動詞本体は原形に戻る）。',
                '三人称単数には does を使う：She makes → Does she make?',
              ],
            },
            {
              type: 'heading',
              text: 'よく出る単語',
              level: 2,
            },
            {
              type: 'table',
              headers: ['単語', '意味', '使い方'],
              rows: [
                ['make', '作る', 'ドーナツを作るときの主役の動詞。'],
                ['sell', '売る', '店頭でお客さんに渡すとき。'],
                ['open', '開ける', 'お店のシャッターを開ける。'],
                ['buy', '買う', 'お客さんがドーナツを買う。'],
                ['eat', '食べる', 'できたてをぱくっと。'],
                ['like', '好きである', '「I like donuts.」でよく登場。'],
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'I（自分）' },
            { type: 'example', en: 'I make donuts.', ja: 'わたしはドーナツを作ります。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'She（彼女）' },
            { type: 'example', en: 'She sells donuts.', ja: '彼女はドーナツを売ります。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'We（私たち）' },
            { type: 'example', en: 'We open the shop.', ja: 'わたしたちは店を開けます。', speakable: true, speaker: 'tsukino' },
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
                '一般動詞は「〜する」を表す。',
                '三人称単数（he・she・it）のときだけ動詞に -s がつく。',
                '否定・疑問は do / does を手伝いに呼ぶ。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: 'I ___ donuts. の空欄に入るのは？',
              choices: ['make', 'makes', 'making', 'made'],
              answerIndex: 0,
              explanation: '主語が I のときは原形 make を使います。',
            },
            {
              id: 'q2',
              prompt: 'She ___ donuts. の空欄に入るのは？',
              choices: ['make', 'makes', 'making', 'did'],
              answerIndex: 1,
              explanation: '主語が三人称単数（She）のときは makes と -s がつきます。',
            },
            {
              id: 'q3',
              prompt: 'They ___ the shop. の空欄に入るのは？',
              choices: ['open', 'opens', 'opening', 'opened'],
              answerIndex: 0,
              explanation: '主語が They（複数）のときは原形 open を使います。',
            },
            {
              id: 'q4',
              prompt: 'He makes donuts. を疑問文にすると？',
              choices: ['Do he make donuts?', 'Does he make donuts?', 'Is he make donuts?', 'He do make donuts?'],
              answerIndex: 1,
              explanation: '三人称単数には Does を使い、動詞は原形 make に戻ります。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-imperative',
        slug: 'imperative',
        title: '命令系',
        summary: '「〜して」と頼む、いちばんシンプルな文。ドーナツをどうぞ、と手渡すとき。',
        rewardId: 'reward-imperative',
        sections: {
          intro: [
            {
              type: 'text',
              text: '命令系（祈使文）は「〜して」「〜しなさい」と相手に頼んだり、さそうときに使う、いちばんシンプルな文です。主語を言わず、動詞からスッと始まります。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '命令系の形はとてもシンプルです。動詞の原形から始めるだけ。相手（you）は言わなくても伝わります。まずは形の一覧を見てみましょう。',
            },
            {
              type: 'table',
              headers: ['種類', '形', '例', '意味・使い方'],
              rows: [
                ['肯定', '動詞の原形', 'Eat a donut.', 'そのまま「〜して」。'],
                ['否定', "Don't + 動詞の原形", "Don't eat yet.", '「〜しないで」と止める。'],
                ['丁寧', 'Please + 動詞の原形', 'Please sit down.', '「どうぞ」を添えてやさしく。'],
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
                'Open the shop! のように、お店の準備を頼む。',
                'Take a donut. のように、お客さんにすすめる。',
                "Don't touch the oven. のように、危ないことを止める。",
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（お客さんへ）' },
            { type: 'example', en: 'Take a donut.', ja: 'ドーナツをどうぞ。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（やさしく）' },
            { type: 'example', en: 'Please sit down.', ja: 'どうぞお座りください。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（止める）' },
            { type: 'example', en: "Don't burn the donuts.", ja: 'ドーナツを焦がさないで。', speakable: true, speaker: 'tsukino' },
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
                '命令系は動詞の原形から始める（主語の you は言わない）。',
                '否定は Don\'t + 原形：Don\'t eat yet.',
                'Please を添えると丁寧になる。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「ドーナツをどうぞ」を英訳すると？',
              choices: ['You take a donut.', 'Take a donut.', 'Takes a donut.', 'Taking a donut.'],
              answerIndex: 1,
              explanation: '命令系は主語を言わず、動詞の原形 Take から始めます。',
            },
            {
              id: 'q2',
              prompt: '「焦がさないで」を英訳すると？',
              choices: ['Not burn the donuts.', "Don't burn the donuts.", 'No burn the donuts.', "Doesn't burn the donuts."],
              answerIndex: 1,
              explanation: '否定の命令系は Don\'t + 原形 です。',
            },
            {
              id: 'q3',
              prompt: '「どうぞお座りください」を英訳すると？',
              choices: ['You sit down.', 'Sit down please.', 'Please sit down.', 'Sitting down.'],
              answerIndex: 2,
              explanation: 'Please を添えると丁寧な命令になります。',
            },
            {
              id: 'q4',
              prompt: '命令系で主語（you）はどうする？',
              choices: ['必ず言う', '言わなくてもいい', '常に we にする', '常に they にする'],
              answerIndex: 1,
              explanation: '命令系は相手（you）を省略して動詞から始めます。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-auxiliary',
        slug: 'auxiliary-verb',
        title: '助動詞',
        summary: '「できる」「〜だろう」「しなければ」を添える、動詞のお手伝いさん。',
        rewardId: 'reward-auxiliary',
        sections: {
          intro: [
            {
              type: 'text',
              text: '助動詞は、動詞の「気持ち」をちょっと足してくれるお手伝いさんです。「できる」「〜だろう」「しなければ」のようなニュアンスを、あとからそっと添えます。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '助動詞のルールはシンプルです。主語の形にかかわらず助動詞はそのまま、うしろの動詞はいつも原形です。まずはよく出る助動詞を表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['助動詞', '意味', '例', '使い方'],
              rows: [
                ['can', 'できる', 'I can bake.', '能力や「してもいい」。'],
                ['will', '〜だろう', 'I will help.', 'これからすること（意志・予測）。'],
                ['must', '〜しなければならない', 'You must wait.', '強い義務。'],
                ['should', '〜するほうがいい', 'You should rest.', 'やさしいすすめ。'],
              ],
            },
            {
              type: 'heading',
              text: '形のポイント',
              level: 2,
            },
            {
              type: 'list',
              items: [
                '助動詞のうしろはいつも原形（bake / help / wait など）。',
                '三人称単数でも -s はつかない：He can bake.',
                '否定・疑問は助動詞に not をつけたり、助動詞を前に出すだけ。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（自分）' },
            { type: 'example', en: 'I can bake donuts.', ja: 'わたしはドーナツを焼けます。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（お客さんへ）' },
            { type: 'example', en: 'You should try one.', ja: 'あなたは一つ食べてみるといいですよ。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（約束）' },
            { type: 'example', en: 'I will open the shop.', ja: 'わたしがお店を開けます。', speakable: true, speaker: 'tsukino' },
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
                '助動詞は動詞の気持ち（できる・〜だろう など）を添える。',
                'うしろの動詞はいつも原形。',
                'can / will / must / should の使い分けをおぼえる。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「わたしは焼けます」を英訳すると？',
              choices: ['I can bakes.', 'I can bake.', 'I cans bake.', 'I baking.'],
              answerIndex: 1,
              explanation: '助動詞 can のうしろは原形 bake です。',
            },
            {
              id: 'q2',
              prompt: 'He ___ swim. の空欄に入るのは？',
              choices: ['can', 'cans', 'canning', 'is can'],
              answerIndex: 0,
              explanation: '三人称単数でも助動詞は can のまま、-s はつきません。',
            },
            {
              id: 'q3',
              prompt: '「あなたは休むほうがいい」を英訳すると？',
              choices: ['You must rest.', 'You should rest.', 'You can rest.', 'You will rest.'],
              answerIndex: 1,
              explanation: 'やさしいすすめには should を使います。',
            },
            {
              id: 'q4',
              prompt: '「しなければならない」を表す助動詞は？',
              choices: ['will', 'can', 'must', 'should'],
              answerIndex: 2,
              explanation: '強い義務は must です。',
            },
          ],
        },
      },
    ],
  },
];
