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
        title: '助動詞(can)',
        summary: '「できる」「してもいい」「〜してくれる？」を表す、一番身近な助動詞。',
        rewardId: 'reward-auxiliary',
        sections: {
          intro: [
            {
              type: 'text',
              text: 'can は「できる」「してもいい」「〜してくれる？」を表す、一番身近な助動詞です。ドーナツ屋でも「焼けますよ」「どうぞ召し上がって」「ここに座ってもいいですか？」とよく出てきます。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: 'can のルールはシンプルです。主語の形にかかわらず can はそのまま、うしろの動詞はいつも原形です。どんな意味で使うかを表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['意味', '使い方', '例'],
              rows: [
                ['できる（能力）', '何ができるか', 'I can bake.'],
                ['してもいい（許可）', 'ゆるやかな許可を与える', 'You can sit down.'],
                ['〜してくれる？（依頼）', 'ていねいに頼む', 'Can you help me?'],
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
                'can のうしろはいつも原形（bake / sit / help など）。',
                '三人称単数でも -s はつかない：He can bake.',
                '否定は cannot / can\'t、疑問は Can you...? のように can を文頭へ。',
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
            { type: 'example', en: 'You can sit down.', ja: 'どうぞお座りください。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（同僚へ）' },
            { type: 'example', en: 'Can you help me?', ja: '手伝ってくれますか？', speakable: true, speaker: 'tsukino' },
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
                'can は「できる」「してもいい」「〜してくれる？」を表す。',
                'うしろの動詞はいつも原形。',
                '否定は can\'t、疑問は Can you...? のように can を前に出す。',
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
              prompt: '「どうぞお座りください」を can で英訳すると？',
              choices: ['You can sit down.', 'You can sits down.', 'Can you sit down?', 'You cans sit down.'],
              answerIndex: 0,
              explanation: '許可は You can + 原形 です。',
            },
            {
              id: 'q4',
              prompt: '「手伝ってくれますか？」を英訳すると？',
              choices: ['You can help me.', 'Can you help me?', 'You help me can.', 'Can help you me?'],
              answerIndex: 1,
              explanation: '依頼は Can you...? のように can を文頭に出します。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-plural-noun',
        slug: 'plural-noun',
        title: '名詞の複数形',
        summary: '「一つ」から「たくさん」へ。ドーナツが山のようになるときのルール。',
        rewardId: 'reward-plural-noun',
        sections: {
          intro: [
            {
              type: 'text',
              text: '名詞の複数形は「2つ以上あること」を示す形です。ドーナツが1個なら a donut、山のように並べば donuts。この「ふえるときのルール」をおぼえましょう。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: 'ほとんどの名詞は語尾に -s をつけるだけですが、言葉の終わり方によって -es や -ies になることがあります。変化のルールを見てみましょう。',
            },
            {
              type: 'heading',
              text: '変化のルール',
              level: 2,
            },
            {
              type: 'table',
              headers: ['ルール', 'つけるもの', '例', '使い方'],
              rows: [
                ['基本', '-s', 'donut → donuts', 'ほとんどの名詞はこれ。'],
                ['s, x, ch, sh で終わる', '-es', 'box → boxes / dish → dishes', '語尾をそのまま言うと言いにくいので -es。'],
                ['「子音字 + y」で終わる', 'y を i にして -es', 'city → cities / cherry → cherries', 'y のまえが子音のとき。'],
                ['「母音字 + y」で終わる', '-s', 'day → days / boy → boys', 'y のまえが母音ならそのまま -s。'],
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
                'We make donuts. のように、2つ以上のものを数える。',
                'Three boxes of donuts. のように、箱なども複数にする。',
                'Two cherries on top. のように、y で終わる語は -ies をチェック。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（棚いっぱい）' },
            { type: 'example', en: 'I see many donuts.', ja: 'たくさんのドーナツが見えます。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（箱を指して）' },
            { type: 'example', en: 'We sell three boxes.', ja: 'わたしたちは箱を3つ売ります。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（トッピング）' },
            { type: 'example', en: 'Two cherries on a donut.', ja: 'ドーナツの上にさくらんぼが2つ。', speakable: true, speaker: 'tsukino' },
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
                '基本は -s：donut → donuts。',
                's/x/ch/sh で終わる語は -es：box → boxes。',
                '「子音 + y」は y を i にして -ies：city → cities。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: 'donut の複数形は？',
              choices: ['donut', 'donuts', 'donutes', 'donuties'],
              answerIndex: 1,
              explanation: '基本の名詞は -s をつけて donuts です。',
            },
            {
              id: 'q2',
              prompt: 'box の複数形は？',
              choices: ['boxs', 'boxes', 'boxies', 'boxen'],
              answerIndex: 1,
              explanation: 's で終わる語は -es をつけて boxes です。',
            },
            {
              id: 'q3',
              prompt: 'city の複数形は？',
              choices: ['citys', 'cities', 'citis', 'cityes'],
              answerIndex: 1,
              explanation: '「子音 + y」は y を i にして -ies：cities です。',
            },
            {
              id: 'q4',
              prompt: 'day の複数形は？',
              choices: ['days', 'dais', 'dayes', 'dies'],
              answerIndex: 0,
              explanation: '「母音 + y」はそのまま -s：days です。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-question-word',
        slug: 'question-word',
        title: '疑問詞',
        summary: '「何・誰・いつ・どこ・なぜ・どう」で問いを投げる、6つの言葉。',
        rewardId: 'reward-question-word',
        sections: {
          intro: [
            {
              type: 'text',
              text: '疑問詞は「何について知りたいか」を示す言葉です。ドーナツ屋さんでも「いつ開くの？」「どこにあるの？」と客さんから聞かれます。6つの疑問詞をおぼえましょう。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '疑問詞は文の最初に置き、そのあとに「be動詞 / 助動詞 / do・does」を引っ張ってきます。まずは6つの意味を表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['疑問詞', '意味', '聞きたいこと', '例'],
              rows: [
                ['what', '何', '物・こと', 'What is this?（これは何？）'],
                ['who', '誰', '人', 'Who are you?（あなたは誰？）'],
                ['when', 'いつ', '時', 'When do you open?（いつ開く？）'],
                ['where', 'どこ', '場所', 'Where is the shop?（店はどこ？）'],
                ['why', 'なぜ', '理由', 'Why are you happy?（なぜうれしい？）'],
                ['how', 'どう', '方法・様子', 'How do you make it?（どう作る？）'],
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
                '疑問詞を文の最初に置く。',
                'そのあとに be動詞 / 助動詞、または do・does を出す。',
                '一般動詞の文では do / does を使い、動詞は原形に。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'お客さん' },
            { type: 'example', en: 'What do you sell?', ja: '何を売っていますか？', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'お客さん' },
            { type: 'example', en: 'Where is the shop?', ja: '店はどこですか？', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'お客さん' },
            { type: 'example', en: 'When do you open?', ja: 'いつ開店しますか？', speakable: true, speaker: 'tsukino' },
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
                '疑問詞は what / who / when / where / why / how の6つ。',
                '文の最初に置き、そのあとに be動詞・助動詞・do・does を出す。',
                '何を聞きたいかで疑問詞を選ぶ。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「誰」を表す疑問詞は？',
              choices: ['what', 'who', 'when', 'where'],
              answerIndex: 1,
              explanation: '人を聞くときは who です。',
            },
            {
              id: 'q2',
              prompt: '「いつ」を表す疑問詞は？',
              choices: ['where', 'why', 'when', 'how'],
              answerIndex: 2,
              explanation: '時を聞くときは when です。',
            },
            {
              id: 'q3',
              prompt: '「なぜ」を表す疑問詞は？',
              choices: ['what', 'who', 'where', 'why'],
              answerIndex: 3,
              explanation: '理由を聞くときは why です。',
            },
            {
              id: 'q4',
              prompt: '"How ___ you make it?" の空欄に入るのは？',
              choices: ['are', 'do', 'is', 'does'],
              answerIndex: 1,
              explanation: '一般動詞 make の文なので、主語 you には do を使います。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-present-progressive',
        slug: 'present-progressive',
        title: '現在進行形',
        summary: '「今、ちょうどやっている最中」を表す、be + 動詞ing の形。',
        rewardId: 'reward-present-progressive',
        sections: {
          intro: [
            {
              type: 'text',
              text: '現在進行形は「今、まさにそのときやっている最中」を表します。ドーナツを今焼いているなら、it is baking。動きの「いま」を写真に撮るような形です。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '現在進行形は「be動詞 + 動詞の -ing 形」で作ります。be動詞は主語によって am / is / are に変わり、うしろの動詞はいつも -ing です。まずは形の一覧を見てみましょう。',
            },
            {
              type: 'table',
              headers: ['主語', '形', '例', '使い方'],
              rows: [
                ['I', 'am + -ing', 'I am baking.', '自分が今やっている。'],
                ['you / we / they', 'are + -ing', 'They are waiting.', '複数が今やっている。'],
                ['he / she / it', 'is + -ing', 'She is selling.', '三人称単数が今やっている。'],
              ],
            },
            {
              type: 'heading',
              text: '-ing のつけ方',
              level: 2,
            },
            {
              type: 'list',
              items: [
                '基本は語尾に -ing：bake → baking。',
                'e で終わる語は e をとって -ing：make → making。',
                '「子音字 + 短母音 + 子音字」は語末を重ねて -ing：shop → shopping。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（オーブン前）' },
            { type: 'example', en: 'I am baking donuts.', ja: 'わたしは今ドーナツを焼いています。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（客席で）' },
            { type: 'example', en: 'She is eating a donut.', ja: '彼女は今ドーナツを食べています。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（行列を見て）' },
            { type: 'example', en: 'They are waiting outside.', ja: '彼らは今外で待っています。', speakable: true, speaker: 'tsukino' },
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
                '現在進行形は「be動詞 + 動詞の -ing 形」。',
                'be動詞は主語で am / is / are に変わる。',
                '「今、ちょうどやっている最中」を表す。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「わたしは今焼いています」を英訳すると？',
              choices: ['I bake donuts.', 'I am baking donuts.', 'I baked donuts.', 'I will bake donuts.'],
              answerIndex: 1,
              explanation: '現在進行形は am + baking です。',
            },
            {
              id: 'q2',
              prompt: 'She ___ a donut.（現在進行形）の空欄に入るのは？',
              choices: ['eat', 'eats', 'is eating', 'ate'],
              answerIndex: 2,
              explanation: '三人称単数は is + eating です。',
            },
            {
              id: 'q3',
              prompt: 'make の -ing 形は？',
              choices: ['makeing', 'making', 'makeng', 'makes'],
              answerIndex: 1,
              explanation: 'e で終わる語は e をとって making です。',
            },
            {
              id: 'q4',
              prompt: 'They are ___ outside. の空欄に入るのは？',
              choices: ['wait', 'waits', 'waiting', 'waited'],
              answerIndex: 2,
              explanation: '複数の They は are + waiting です。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-past-tense',
        slug: 'past-tense',
        title: '過去形(規則変化)',
        summary: '「前は〜だった」「した」を表す、時間をふり返る形。規則変化の -ed にしぼって。',
        rewardId: 'reward-past-tense',
        sections: {
          intro: [
            {
              type: 'text',
              text: '過去形(規則変化)は「もう終わったこと」「前の状態」を表します。ドーナツを昨日焼いたなら、I baked donuts。きちんとルールどおりに形を変える「規則変化」にしぼっておぼえましょう。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '過去形(規則変化)は動詞の形を決まったルールで過去に変えます。be動詞は was / were、一般動詞は -ed をつけるのがルールです。まずはbe動詞の過去形を見てみましょう。',
            },
            {
              type: 'heading',
              text: 'be動詞の過去形',
              level: 2,
            },
            {
              type: 'table',
              headers: ['主語', '過去形', '例'],
              rows: [
                ['I / he / she / it', 'was', 'I was a baker.'],
                ['you / we / they', 'were', 'They were happy.'],
              ],
            },
            {
              type: 'heading',
              text: '一般動詞の過去形・規則変化（-ed）',
              level: 2,
            },
            {
              type: 'table',
              headers: ['ルール', 'つけるもの', '例'],
              rows: [
                ['基本', '-ed', 'bake → baked'],
                ['e で終わる', '-d', 'like → liked'],
                ['「子音字 + y」で終わる', 'y を i にして -ed', 'study → studied'],
                ['短い語（CVC）', '語末を重ねて -ed', 'shop → shopped'],
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
                'I baked donuts yesterday. のように、過去の行動を話す。',
                'She was happy. のように、過去の状態を話す。',
                '疑問・否定は did（動詞は原形に戻る）：Did you bake?',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（ふり返って）' },
            { type: 'example', en: 'I baked donuts.', ja: 'わたしはドーナツを焼きました。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（昨夜の様子）' },
            { type: 'example', en: 'She was happy.', ja: '彼女はうれしかったです。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（閉店後）' },
            { type: 'example', en: 'We closed the shop.', ja: 'わたしたちは店を閉めました。', speakable: true, speaker: 'tsukino' },
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
                'be動詞の過去形は was（単数） / were（複数）。',
                '一般動詞の過去形（規則変化）は基本 -ed。',
                '過去のこと・状態を表す。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「わたしは焼きました」を英訳すると？',
              choices: ['I bake donuts.', 'I baking donuts.', 'I baked donuts.', 'I will bake donuts.'],
              answerIndex: 2,
              explanation: '過去形は baked です。',
            },
            {
              id: 'q2',
              prompt: 'He ___ a teacher. （過去）の空欄に入るのは？',
              choices: ['was', 'were', 'is', 'are'],
              answerIndex: 0,
              explanation: '三人称単数の過去形は was です。',
            },
            {
              id: 'q3',
              prompt: 'like の過去形は？',
              choices: ['likeed', 'liked', 'liking', 'likes'],
              answerIndex: 1,
              explanation: 'e で終わる語は -d をつけて liked です。',
            },
            {
              id: 'q4',
              prompt: 'They were happy. を過去の疑問文にすると？',
              choices: ['Do they were happy?', 'Were they happy?', 'Did they were happy?', 'Are they happy?'],
              answerIndex: 1,
              explanation: 'be動詞の疑問文は were を文頭に出します。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-past-irregular',
        slug: 'past-irregular',
        title: '過去形(不規則変化)',
        summary: 'ルールを守らない過去形。go→went、eat→ate のように変わる言葉。',
        rewardId: 'reward-past-irregular',
        sections: {
          intro: [
            {
              type: 'text',
              text: '過去形(不規則変化)は、-ed をつけてもできない、ルールを守らない過去形です。ドーナツ屋でも「行った go→went」「食べた eat→ate」のように、ことばごとに形が変わります。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '不規則変化に決まったルールはありません。ひとつひとつ形をおぼえるしかないのが正直なところです。よく出るものを表でおぼえましょう。',
            },
            {
              type: 'heading',
              text: 'よく出る不規則変化',
              level: 2,
            },
            {
              type: 'table',
              headers: ['原形', '過去形', '意味', '例'],
              rows: [
                ['go', 'went', '行く', 'I went to the shop.'],
                ['eat', 'ate', '食べる', 'He ate a donut.'],
                ['come', 'came', '来る', 'She came here.'],
                ['buy', 'bought', '買う', 'We bought donuts.'],
                ['make', 'made', '作る', 'They made donuts.'],
                ['see', 'saw', '見る', 'I saw you.'],
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
                'I went to the shop. のように、過去の行動を話す。',
                'He ate a donut. のように、不規則な過去形をそのまま使う。',
                'be動詞の過去形 was / were も、この仲間としておぼえる。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（昨日の出来事）' },
            { type: 'example', en: 'I went to the shop.', ja: 'わたしは店に行きました。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（お客さんの様子）' },
            { type: 'example', en: 'He ate a donut.', ja: '彼はドーナツを食べました。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（仕込み）' },
            { type: 'example', en: 'We made donuts.', ja: 'わたしたちはドーナツを作りました。', speakable: true, speaker: 'tsukino' },
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
                '不規則変化は -ed をつけず、形が変わる。',
                'go→went / eat→ate / come→came をおぼえる。',
                'be動詞の過去形 was / were も仲間。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: 'go の過去形は？',
              choices: ['goed', 'went', 'gone', 'goes'],
              answerIndex: 1,
              explanation: 'go の過去形は went です。',
            },
            {
              id: 'q2',
              prompt: 'eat の過去形は？',
              choices: ['eated', 'ate', 'eaten', 'eats'],
              answerIndex: 1,
              explanation: 'eat の過去形は ate です。',
            },
            {
              id: 'q3',
              prompt: '「わたしはドーナツを買いました」を英訳すると？',
              choices: ['I bought donuts.', 'I buyed donuts.', 'I buy donuts.', 'I buying donuts.'],
              answerIndex: 0,
              explanation: 'buy の過去形は bought です。',
            },
            {
              id: 'q4',
              prompt: 'make の過去形は？',
              choices: ['maked', 'made', 'maken', 'makes'],
              answerIndex: 1,
              explanation: 'make の過去形は made です。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-there',
        slug: 'there-be',
        title: 'There構文',
        summary: '「〜があります・います」を表す、There is / There are の形。',
        rewardId: 'reward-there',
        sections: {
          intro: [
            {
              type: 'text',
              text: 'There構文は「（そこに）〜があります・います」を表す形です。ドーナツ屋の棚に「ドーナツが3つあるよ」と伝えるときに使います。主語の前に There が出てくるのが特徴です。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: 'There構文は「There + be動詞 + 名詞」で作ります。be動詞は、うしろの名詞が単数なら is、複数なら are になります。まずは形の一覧を見てみましょう。',
            },
            {
              type: 'table',
              headers: ['形', '使うとき', '例'],
              rows: [
                ['There is', '名詞が単数（または不可算）', 'There is a donut.'],
                ['There are', '名詞が複数', 'There are three donuts.'],
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
                'There is a donut on the plate. のように、ありか・存在を伝える。',
                'There are many boxes. のように、複数の存在を伝える。',
                '疑問文は Is there...? / Are there...?、否定は There is not (isn\'t) / are not (aren\'t)。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（棚を指して）' },
            { type: 'example', en: 'There is a donut.', ja: 'ドーナツが1つあります。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（山盛りで）' },
            { type: 'example', en: 'There are many donuts.', ja: 'ドーナツがたくさんあります。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（箱を指して）' },
            { type: 'example', en: 'There are three boxes.', ja: '箱が3つあります。', speakable: true, speaker: 'tsukino' },
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
                'There構文は「There + be動詞 + 名詞」で存在を表す。',
                '単数なら There is、複数なら There are。',
                'うしろの名詞に合わせて be動詞を選ぶ。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「ドーナツが1つあります」を英訳すると？',
              choices: ['There are a donut.', 'There is a donut.', 'There have a donut.', 'There has a donut.'],
              answerIndex: 1,
              explanation: '単数なので There is を使います。',
            },
            {
              id: 'q2',
              prompt: 'Three boxes ___ on the table. の空欄に入るのは？',
              choices: ['There is', 'There are', 'There am', 'There be'],
              answerIndex: 1,
              explanation: '複数の boxes なので There are です。',
            },
            {
              id: 'q3',
              prompt: '「ドーナツがたくさんあります」を英訳すると？',
              choices: ['There is many donuts.', 'There are many donuts.', 'There has many donuts.', 'There have many donuts.'],
              answerIndex: 1,
              explanation: '複数なので There are を使います。',
            },
            {
              id: 'q4',
              prompt: 'There is a donut. の疑問文は？',
              choices: ['Do there a donut?', 'Is there a donut?', 'Are there a donut?', 'There a donut is?'],
              answerIndex: 1,
              explanation: 'There構文の疑問文は is を文頭に出します。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-past-progressive',
        slug: 'past-progressive',
        title: '過去進行形',
        summary: '「そのときちょうどやっていた」を表す、was / were + 動詞ing の形。',
        rewardId: 'reward-past-progressive',
        sections: {
          intro: [
            {
              type: 'text',
              text: '過去進行形は「過去のあるとき、ちょうどその最中にやっていた」ことを表します。ドーナツを焼いている最中にお客さんが来たなら、I was baking。過去の「いま」を写真に撮るような形です。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '過去進行形は「be動詞の過去形（was / were）+ 動詞の -ing 形」で作ります。be動詞が過去になるだけで、うしろの動詞はいつも -ing です。まずは形の一覧を見てみましょう。',
            },
            {
              type: 'table',
              headers: ['主語', '形', '例', '使い方'],
              rows: [
                ['I / he / she / it', 'was + -ing', 'I was baking.', '単数が過去にやっていた。'],
                ['you / we / they', 'were + -ing', 'They were waiting.', '複数が過去にやっていた。'],
              ],
            },
            {
              type: 'heading',
              text: '現在進行形とのちがい',
              level: 2,
            },
            {
              type: 'list',
              items: [
                '現在進行形は am / is / are + -ing（今やっている）。',
                '過去進行形は was / were + -ing（過去のそのときやっていた）。',
                '動詞の -ing のつけ方は同じルール（bake → baking など）。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（オーブン前）' },
            { type: 'example', en: 'I was baking donuts.', ja: 'わたしはそのときドーナツを焼いていました。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（客席で）' },
            { type: 'example', en: 'She was eating a donut.', ja: '彼女はそのときドーナツを食べていました。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（行列を見て）' },
            { type: 'example', en: 'They were waiting outside.', ja: '彼らはそのとき外で待っていました。', speakable: true, speaker: 'tsukino' },
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
                '過去進行形は「was / were + 動詞の -ing 形」。',
                'be動詞が過去（was / were）になるのが現在進行形とのちがい。',
                '「過去のそのときちょうどやっていた」を表す。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「わたしはそのとき焼いていました」を英訳すると？',
              choices: ['I bake donuts.', 'I was baking donuts.', 'I baked donuts.', 'I am baking donuts.'],
              answerIndex: 1,
              explanation: '過去進行形は was + baking です。',
            },
            {
              id: 'q2',
              prompt: 'She ___ a donut. （過去進行形）の空欄に入るのは？',
              choices: ['was eating', 'were eating', 'is eating', 'ate'],
              answerIndex: 0,
              explanation: '三人称単数は was + eating です。',
            },
            {
              id: 'q3',
              prompt: 'They were ___ outside. の空欄に入るのは？',
              choices: ['wait', 'waits', 'waiting', 'waited'],
              answerIndex: 2,
              explanation: '複数の They は were + waiting です。',
            },
            {
              id: 'q4',
              prompt: '過去進行形の be動詞として正しいのは？',
              choices: ['am / is', 'was / were', 'is / are', 'be'],
              answerIndex: 1,
              explanation: '過去進行形は was / were を使います。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-future',
        slug: 'future',
        title: '未来形',
        summary: '「これからやる・起こる」を表す、will / be going to / 現在形の未来。',
        rewardId: 'reward-future',
        sections: {
          intro: [
            {
              type: 'text',
              text: '未来形は「これからやること」「これから起こること」を表します。ドーナツ屋の看板に「明日開きます」と書くとき、英語では I will open the shop. の形を使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '未来を表す形は大きく3つあります。「will」「be going to」「現在形の未来用法」です。まずは形と使い分けを表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['形', 'つくり方', '使い方', '例'],
              rows: [
                ['will', 'will + 動詞の原形', 'その場の意志・予測', 'I will help you.'],
                ['be going to', 'am/is/are going to + 原形', '計画・用意がある', 'I am going to bake.'],
                ['現在形（未来）', '現在形の文 + 未来の時間', '今日の予定など', 'I open the shop tomorrow.'],
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
                'I will open the shop. のように、その場で決めたことを言う。',
                'I am going to make donuts. のように、前から決まっている計画を言う。',
                'The shop opens tomorrow. のように、スケジュールを現在形で表す。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（意志）' },
            { type: 'example', en: 'I will help you.', ja: 'わたしが手伝います。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（計画）' },
            { type: 'example', en: 'I am going to bake.', ja: 'これから焼きます。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（予定）' },
            { type: 'example', en: 'The shop opens tomorrow.', ja: 'お店は明日開きます。', speakable: true, speaker: 'tsukino' },
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
                '未来形は will / be going to / 現在形の未来用法がある。',
                '意志・予測は will、計画は be going to。',
                '今日の予定などは現在形で未来を表せる。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「手伝います」をその場の意志で言うと？',
              choices: ['I help you.', 'I will help you.', 'I am help you.', 'I going to help you.'],
              answerIndex: 1,
              explanation: '意志・予測の未来は will + 原形 です。',
            },
            {
              id: 'q2',
              prompt: '「これから焼きます」（前から決まっている計画）を表すと？',
              choices: ['I will bake.', 'I am going to bake.', 'I bake.', 'I baking.'],
              answerIndex: 1,
              explanation: '計画がある未来は be going to + 原形 です。',
            },
            {
              id: 'q3',
              prompt: '「The shop opens tomorrow.」の形はどの未来表現？',
              choices: ['will', 'be going to', '現在形の未来', '過去形'],
              answerIndex: 2,
              explanation: '予定・スケジュールは現在形で未来を表します。',
            },
            {
              id: 'q4',
              prompt: '「明日ドーナツを作る」を will で言うと？',
              choices: ['I will make donuts.', 'I will making donuts.', 'I will to make donuts.', 'I will made donuts.'],
              answerIndex: 0,
              explanation: 'will のあとは原形 make です。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-auxiliary-have-to-may',
        slug: 'auxiliary-have-to-may',
        title: '助動詞(must/have to/should/may)',
        summary: '「しなければ」「してもいい」「〜したほうがいい」を表す、義務と許可の助動詞。',
        rewardId: 'reward-auxiliary-have-to-may',
        sections: {
          intro: [
            {
              type: 'text',
              text: 'この記事では、義務や許可を表す助動詞を扱います。「must（〜しなければならない）」「have to（〜しなければならない）」「should（〜したほうがいい）」「may（〜してもいい・かもしれない）」の4つです。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: 'これらは「気持ち（義務・すすめ・許可）」を動詞に添えます。must と have to は近い意味、should はやさしいすすめ、may は許可や可能性です。表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['表現', '意味', '使い方', '例'],
              rows: [
                ['must + 原形', '〜しなければならない', '話し手の強い義務', 'I must bake.'],
                ['have to + 原形', '〜しなければならない', '外の力による義務', 'I have to open the shop.'],
                ['should + 原形', '〜したほうがいい', 'やさしいすすめ', 'You should rest.'],
                ['may + 原形', '〜してもいい（許可）', 'ゆるやかな許可', 'You may sit down.'],
                ['may + 原形', '〜かもしれない（可能性）', '不確かな予測', 'It may rain.'],
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
                'must / should / may は助動詞なのでうしろは原形、三人称単数でも -s はつかない。',
                'have to は「have + to」なので、主語で have / has が変わる（She has to...）。',
                'must の否定は must not（〜してはいけない）、have to の否定は don\'t have to（しなくてもいい）。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（決意）' },
            { type: 'example', en: 'I must bake donuts.', ja: 'わたしはドーナツを焼かなければなりません。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（仕事）' },
            { type: 'example', en: 'I have to open the shop.', ja: 'わたしは店を開けなければなりません。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（やさしく）' },
            { type: 'example', en: 'You may sit down.', ja: 'お座りになってもいいですよ。', speakable: true, speaker: 'tsukino' },
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
                'must / have to は「しなければならない」。',
                'should は「〜したほうがいい」。',
                'may は「〜してもいい」「〜かもしれない」。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「わたしは店を開けなければなりません」を英訳すると？',
              choices: ['I have to open the shop.', 'I has to open the shop.', 'I having to open the shop.', 'I must to open the shop.'],
              answerIndex: 0,
              explanation: '「しなければならない」は have to + 原形 です。',
            },
            {
              id: 'q2',
              prompt: 'She ___ bake. の空欄に入るのは？',
              choices: ['have to', 'has to', 'having to', 'has to bake'],
              answerIndex: 1,
              explanation: '三人称単数は has to です。',
            },
            {
              id: 'q3',
              prompt: '「あなたは休むほうがいい」を英訳すると？',
              choices: ['You must rest.', 'You should rest.', 'You may rest.', 'You have to rest.'],
              answerIndex: 1,
              explanation: 'やさしいすすめには should を使います。',
            },
            {
              id: 'q4',
              prompt: '「お座りになってもいいですよ」を英訳すると？',
              choices: ['You must sit down.', 'You can sit down.', 'You may sit down.', 'You have to sit down.'],
              answerIndex: 2,
              explanation: 'ゆるやかな許可は may を使います。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-infinitive',
        slug: 'infinitive',
        title: '不定詞',
        summary: '「to + 動詞の原形」が、名詞・形容詞・副詞のはたらきをする。',
        rewardId: 'reward-infinitive',
        sections: {
          intro: [
            {
              type: 'text',
              text: '不定詞は「to + 動詞の原形」の形で、「〜すること」のように使います。ドーナツ屋でも「焼くために」「焼くのが好き」と、動詞をそのまま言わずに「to + 原形」にして使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '不定詞は1つの形ですが、文中でのはたらきによって3つの用法に分かれます。名詞として使うか、形容詞として名詞を修飾するか、副詞として理由や目的を表すかです。表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['用法', 'はたらき', '例', '使い方'],
              rows: [
                ['名詞用法', '「〜すること」全体が主語や目的語', 'To bake is fun.', '文の成分として動詞のかたまりを置く。'],
                ['形容詞用法', 'うしろの名詞を修飾', 'a donut to eat', '「食べる（ための）ドーナツ」のように。'],
                ['副詞用法', '目的や理由を表す', 'I came to buy.', '「〜するために」と理由・目的を添える。'],
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
                'To make donuts is fun. のように、名詞として「〜すること」を主語にする。',
                'a donut to eat のように、名詞を修飾する。',
                'I went to the shop to buy donuts. のように、目的を表す。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（名詞用法）' },
            { type: 'example', en: 'To bake is fun.', ja: '焼くのは楽しいです。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（形容詞用法）' },
            { type: 'example', en: 'I have a donut to eat.', ja: 'わたしは食べるドーナツを持っています。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（副詞用法）' },
            { type: 'example', en: 'I came to buy donuts.', ja: 'わたしはドーナツを買いに来ました。', speakable: true, speaker: 'tsukino' },
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
                '不定詞は「to + 動詞の原形」。',
                '名詞用法・形容詞用法・副詞用法の3つ。',
                '副詞用法は「〜するために」の目的・理由を表す。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「焼くのは楽しい」を英訳すると？',
              choices: ['Bake is fun.', 'To bake is fun.', 'Baking is fun.', 'Bakes is fun.'],
              answerIndex: 1,
              explanation: '「〜すること」を名詞として主語にするときは To bake です。',
            },
            {
              id: 'q2',
              prompt: 'a donut to eat の不定詞の用法は？',
              choices: ['名詞用法', '形容詞用法', '副詞用法', '動詞用法'],
              answerIndex: 1,
              explanation: 'うしろの名詞 donut を修飾しているので形容詞用法です。',
            },
            {
              id: 'q3',
              prompt: '「わたしは買いに来ました」を英訳すると？',
              choices: ['I came for buy donuts.', 'I came buy donuts.', 'I came to buy donuts.', 'I came buying donuts.'],
              answerIndex: 2,
              explanation: '目的を表す副詞用法は to buy です。',
            },
            {
              id: 'q4',
              prompt: '不定詞の形として正しいのは？',
              choices: ['to baking', 'to baked', 'to bake', 'to bakeing'],
              answerIndex: 2,
              explanation: '不定詞は「to + 動詞の原形」です。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-gerund',
        slug: 'gerund',
        title: '動名詞',
        summary: '「動詞の -ing 形」が、名詞として「〜すること」にはたらく。',
        rewardId: 'reward-gerund',
        sections: {
          intro: [
            {
              type: 'text',
              text: '動名詞は、動詞の -ing 形（baking など）が名詞として「〜すること」にはたらく形です。ドーナツ屋でも「焼くのが好き」「焼くのは楽しい」と、動詞を名詞のように使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '動名詞は「動詞の -ing 形」そのものが名詞になるので、主語や目的語にできます。形は進行形の -ing と同じですが、「動いている最中」ではなく「〜すること」という事柄を表す点がちがいます。表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['はたらき', '例', '使い方'],
              rows: [
                ['主語になる', 'Baking is fun.', '「焼くこと」全体が文の主語。'],
                ['目的語になる', 'I like baking.', '動詞（like など）のうしろに置く。'],
                ['前置詞のうしろ', 'He is good at making.', 'at / of などのうしろは -ing。'],
              ],
            },
            {
              type: 'heading',
              text: '不定詞とのちがい',
              level: 2,
            },
            {
              type: 'list',
              items: [
                '動名詞は「baking」のように -ing だけで名詞になる。',
                '不定詞は「to bake」のように to + 原形で名詞になる。',
                'like や enjoy のうしろは動名詞、-ing を使うことが多い。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（主語）' },
            { type: 'example', en: 'Baking is fun.', ja: '焼くのは楽しいです。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（好き）' },
            { type: 'example', en: 'I like baking.', ja: 'わたしは焼くのが好きです。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（上手）' },
            { type: 'example', en: 'She is good at making donuts.', ja: '彼女はドーナツを作るのが得意です。', speakable: true, speaker: 'tsukino' },
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
                '動名詞は「動詞の -ing 形」が名詞になる。',
                '主語や目的語、前置詞のうしろにはたらく。',
                '「〜すること」を表す。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「焼くのは楽しい」を動名詞で英訳すると？',
              choices: ['To bake is fun.', 'Bake is fun.', 'Baking is fun.', 'Baked is fun.'],
              answerIndex: 2,
              explanation: '動名詞は -ing 形で Baking とします。',
            },
            {
              id: 'q2',
              prompt: '「わたしは焼くのが好きです」を英訳すると？',
              choices: ['I like bake.', 'I like to bake.', 'I like baking.', 'I like baked.'],
              answerIndex: 2,
              explanation: 'like のうしろは動名詞 baking を使うのが自然です。',
            },
            {
              id: 'q3',
              prompt: 'He is good ___ making. の空欄に入るのは？',
              choices: ['at', 'to', 'for', 'of'],
              answerIndex: 0,
              explanation: '前置詞のうしろは動名詞なので、at を使います。',
            },
            {
              id: 'q4',
              prompt: '動名詞の形として正しいのは？',
              choices: ['bake', 'to bake', 'baking', 'baked'],
              answerIndex: 2,
              explanation: '動名詞は「動詞の -ing 形」です。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-comparative-superlative',
        slug: 'comparative-superlative',
        title: '比較級・最上級',
        summary: '「より〜」「いちばん〜」を表す、er/est と more/most のルール。',
        rewardId: 'reward-comparative-superlative',
        sections: {
          intro: [
            {
              type: 'text',
              text: '比較級・最上級は、物の大きさや甘さを比べるときの形です。ドーナツが「もっと大きい」「いちばん甘い」と並べるときに使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '2つを比べて「より〜」は比較級、3つ以上で「いちばん〜」は最上級です。短い語は -er / -est をつけ、長い語は more / most を使います。まずは形のルールを見てみましょう。',
            },
            {
              type: 'heading',
              text: '形のルール',
              level: 2,
            },
            {
              type: 'table',
              headers: ['種類', 'つくり方', '例', '使い方'],
              rows: [
                ['比較級（短い語）', '語尾に -er', 'sweet → sweeter', '2つを比べる。'],
                ['最上級（短い語）', '語尾に -est', 'sweet → sweetest', '3つ以上でいちばん。'],
                ['比較級（長い語）', 'more + 原形', 'more delicious', '2つを比べる。'],
                ['最上級（長い語）', 'most + 原形', 'most delicious', '3つ以上でいちばん。'],
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
                'This donut is sweeter. のように、2つを比べる（比較級）。',
                'This is the sweetest donut. のように、いちばんを言う（最上級、the をつける）。',
                'than を使って比べる相手を明示：sweeter than that one.',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（比べて）' },
            { type: 'example', en: 'This donut is sweeter.', ja: 'このドーナツはより甘いです。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（いちばん）' },
            { type: 'example', en: 'This is the sweetest donut.', ja: 'これはいちばん甘いドーナツです。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（上手）' },
            { type: 'example', en: 'She is more careful.', ja: '彼女のほうがより丁寧です。', speakable: true, speaker: 'tsukino' },
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
                '比較級は「より〜」、最上級は「いちばん〜」。',
                '短い語は -er / -est、長い語は more / most。',
                '最上級には the をつける。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「より甘い」を英訳すると？',
              choices: ['sweet', 'sweeter', 'sweetest', 'more sweet'],
              answerIndex: 1,
              explanation: '短い語の比較級は -er をつけて sweeter です。',
            },
            {
              id: 'q2',
              prompt: '「いちばん甘いドーナツ」を英訳すると？',
              choices: ['a sweetest donut', 'the sweetest donut', 'more sweet donut', 'sweeter donut'],
              answerIndex: 1,
              explanation: '最上級には the をつけて the sweetest donut です。',
            },
            {
              id: 'q3',
              prompt: '「よりおいしい（delicious）」を英訳すると？',
              choices: ['deliciouser', 'deliciousest', 'more delicious', 'most delicious'],
              answerIndex: 2,
              explanation: '長い語の比較級は more + 原形 で more delicious です。',
            },
            {
              id: 'q4',
              prompt: '「あれより甘い」を表す語は？',
              choices: ['than that one', 'that one', 'the that one', 'as that one'],
              answerIndex: 0,
              explanation: '比べる相手は than を使って示します。',
            },
          ],
        },
      },
    ],
  },
];
