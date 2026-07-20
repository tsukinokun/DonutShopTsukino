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
      {
        kind: 'article',
        id: 'art-passive',
        slug: 'passive',
        title: '受け身',
        summary: '「be + 過去分詞」で、「〜される」を表す形。',
        rewardId: 'reward-passive',
        sections: {
          intro: [
            {
              type: 'text',
              text: '受け身は「だれかに〜される」「〜された」を表す形です。ドーナツが「焼かれる」「売られる」など、動作を受ける側を主役にするときに使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '受け身は「be動詞 + 過去分詞」で作ります。be動詞は主語や時制で am / is / are / was / were に変わり、うしろの動詞はいつも過去分詞です。まずは形の一覧を見てみましょう。',
            },
            {
              type: 'table',
              headers: ['時制', '形', '例'],
              rows: [
                ['現在', 'am / is / are + 過去分詞', 'Donuts are baked.'],
                ['過去', 'was / were + 過去分詞', 'The shop was opened.'],
                ['未来', 'will be + 過去分詞', 'Donuts will be sold.'],
              ],
            },
            {
              type: 'heading',
              text: '能動と受動のちがい',
              level: 2,
            },
            {
              type: 'list',
              items: [
                '能動：I bake donuts.（わたしが焼く）。',
                '受動：Donuts are baked (by me).（ドーナツが焼かれる）。',
                '「される側」を主語にし、by で「する人」を置くこともできる。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（出来上がり）' },
            { type: 'example', en: 'Donuts are baked.', ja: 'ドーナツは焼かれます。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（開店）' },
            { type: 'example', en: 'The shop was opened.', ja: 'お店は開けられました。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（予定）' },
            { type: 'example', en: 'Donuts will be sold.', ja: 'ドーナツは売られるでしょう。', speakable: true, speaker: 'tsukino' },
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
                '受け身は「be動詞 + 過去分詞」。',
                'be動詞は主語や時制で変わる。',
                '「される側」を主語にする。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「ドーナツは焼かれます」を英訳すると？',
              choices: ['Donuts bake.', 'Donuts are baked.', 'Donuts baked.', 'Donuts baking.'],
              answerIndex: 1,
              explanation: '受け身は are + 過去分詞 で Donuts are baked です。',
            },
            {
              id: 'q2',
              prompt: '「お店は開けられました」を英訳すると？',
              choices: ['The shop opens.', 'The shop was opened.', 'The shop is opened.', 'The shop opened.'],
              answerIndex: 1,
              explanation: '過去の受け身は was + 過去分詞 です。',
            },
            {
              id: 'q3',
              prompt: '受け身の形として正しいのは？',
              choices: ['be + 原形', 'be + 過去分詞', 'be + -ing', 'be + to do'],
              answerIndex: 1,
              explanation: '受け身は be動詞 + 過去分詞 です。',
            },
            {
              id: 'q4',
              prompt: '「ドーナツは売られるでしょう」を英訳すると？',
              choices: ['Donuts sell.', 'Donuts are sold.', 'Donuts will be sold.', 'Donuts sold.'],
              answerIndex: 2,
              explanation: '未来の受け身は will be + 過去分詞 です。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-conjunction',
        slug: 'conjunction',
        title: '接続詞',
        summary: '文と文をつなぐ、when / if / because / that のはたらき。',
        rewardId: 'reward-conjunction',
        sections: {
          intro: [
            {
              type: 'text',
              text: '接続詞は、文と文をつなぐ「じょうぎ」のような言葉です。ドーナツ屋でも「お客さんが来たら」「雨だから」「甘いと」と、二つの文をつなぐときに使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: 'よく出る接続詞を4つおぼえましょう。時をつなぐ when、条件をつなぐ if、理由をつなぐ because、中身をつなぐ that です。表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['接続詞', '意味', 'つなぐ関係', '例'],
              rows: [
                ['when', '〜するとき', '時', 'When you come, ...'],
                ['if', '〜なら（ば）', '条件', 'If you like it, ...'],
                ['because', '〜なので', '理由', '... because it is sweet.'],
                ['that', '（中身をつなぐ）', '名詞節', 'I think that ...'],
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
                'When the shop opens, I bake. のように、時をつなぐ。',
                'If you are hungry, eat one. のように、条件をつなぐ。',
                'I am happy because you came. のように、理由をつなぐ。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（時）' },
            { type: 'example', en: 'When you come, I bake.', ja: 'あなたが来るとき、わたしは焼きます。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（理由）' },
            { type: 'example', en: 'I am happy because you came.', ja: 'あなたが来てくれたのでうれしいです。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（条件）' },
            { type: 'example', en: 'If you like it, eat one.', ja: '気に入ったら一つ食べて。', speakable: true, speaker: 'tsukino' },
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
                'when は「〜するとき」（時）、if は「〜なら」（条件）。',
                'because は「〜なので」（理由）。',
                'that は文の中身をつなぐ。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「あなたが来るとき」を英訳すると？',
              choices: ['If you come', 'When you come', 'Because you come', 'That you come'],
              answerIndex: 1,
              explanation: '時をつなぐのは when です。',
            },
            {
              id: 'q2',
              prompt: '「気に入ったら」を英訳すると？',
              choices: ['When you like it', 'If you like it', 'Because you like it', 'That you like it'],
              answerIndex: 1,
              explanation: '条件をつなぐのは if です。',
            },
            {
              id: 'q3',
              prompt: '「甘いので」を英訳すると？',
              choices: ['when it is sweet', 'if it is sweet', 'because it is sweet', 'that it is sweet'],
              answerIndex: 2,
              explanation: '理由をつなぐのは because です。',
            },
            {
              id: 'q4',
              prompt: '「わたしは〜だと思います」をつなぐ接続詞は？',
              choices: ['when', 'if', 'because', 'that'],
              answerIndex: 3,
              explanation: '中身をつなぐのは that です（I think that ...）。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-indirect-question',
        slug: 'indirect-question',
        title: '間接疑問文',
        summary: '「どこか知らない」を表す、疑問詞を含む名詞節。',
        rewardId: 'reward-indirect-question',
        sections: {
          intro: [
            {
              type: 'text',
              text: '間接疑問文は、「どこにあるか知らない」「いつ開くか教えて」のように、疑問の内容を文の一部として組み込む形です。ドーナツ屋でも「トッピングはどこかしら？」とつぶやくときに使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '間接疑問文は「know / tell me などのうしろに、疑問詞（what / where / when など）で始まる節」を置きます。ポイントは、疑問文のときの語順（do を前に出すなど）を使わず、主語＋動詞のまま並べることです。',
            },
            {
              type: 'table',
              headers: ['直接疑問', '間接疑問', 'ちがい'],
              rows: [
                ['Where is the shop?', 'I don\'t know where the shop is.', '語順が「主語＋動詞」になる。'],
                ['When do you open?', 'Tell me when you open.', 'do を使わず原形のまま。'],
                ['What do you sell?', 'I know what you sell.', '疑問詞は文の途中に置く。'],
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
                '疑問詞で始まる節を、know / tell me などのうしろに置く。',
                '節の中は「主語＋動詞」の語順（do / does は使わない）。',
                '文末の語順が動詞で終わるので、? はつかないことが多い。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（迷って）' },
            { type: 'example', en: "I don't know where the shop is.", ja: 'お店がどこにあるか知りません。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（教えて）' },
            { type: 'example', en: 'Tell me when you open.', ja: 'いつ開くか教えてください。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（わかってる）' },
            { type: 'example', en: 'I know what you sell.', ja: 'あなたが何を売っているか知っています。', speakable: true, speaker: 'tsukino' },
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
                '間接疑問文は know / tell me などのうしろに疑問詞節を置く。',
                '節の中は「主語＋動詞」の語順（do は使わない）。',
                '「どこか・いつか・何か」を文の一部にする。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「お店がどこにあるか知りません」を英訳すると？',
              choices: ["I don't know where is the shop.", "I don't know where the shop is.", "Where is the shop I don't know.", "I don't know where the shop."],
              answerIndex: 1,
              explanation: '節の中は「主語＋動詞」の語順で where the shop is です。',
            },
            {
              id: 'q2',
              prompt: '「いつ開くか教えてください」を英訳すると？',
              choices: ['Tell me when do you open.', 'Tell me when you open.', 'When do you open tell me.', 'Tell me when opens you.'],
              answerIndex: 1,
              explanation: '間接疑問では do を使わず when you open とします。',
            },
            {
              id: 'q3',
              prompt: '間接疑問文の節の語順として正しいのは？',
              choices: ['疑問詞 + do + 主語 + 動詞', '疑問詞 + 主語 + 動詞', '主語 + 疑問詞 + 動詞', 'do + 主語 + 動詞'],
              answerIndex: 1,
              explanation: '節の中は「主語＋動詞」の語順です。',
            },
            {
              id: 'q4',
              prompt: '「あなたが何を売っているか知っています」を英訳すると？',
              choices: ['I know what you sell.', 'I know what do you sell.', 'I know you sell what.', 'What you sell I know.'],
              answerIndex: 0,
              explanation: 'what で始まる節を know のうしろに置き、語順は what you sell です。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-present-perfect',
        slug: 'present-perfect',
        title: '現在完了',
        summary: '「have + 過去分詞」で、経験・継続・完了を表す。',
        rewardId: 'reward-present-perfect',
        sections: {
          intro: [
            {
              type: 'text',
              text: '現在完了は「have + 過去分詞」の形で、過去と今をつなぐ働きをします。ドーナツ屋でも「一度焼いたことがある」「朝から開けている」「やっと焼き終わった」のように使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '現在完了は大きく3つの使い方があります。ずっと昔からの「経験」、ずっと続いている「継続」、さっき終わった「完了・結果」です。表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['使い方', '意味', '例', '目印'],
              rows: [
                ['経験', '〜したことがある', 'I have baked donuts.', 'ever / never と一緒に'],
                ['継続', 'ずっと〜している', 'The shop has been open.', 'for / since と一緒に'],
                ['完了', 'やっと〜した', 'I have made donuts.', 'just / already と一緒に'],
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
                'have / has + 過去分詞（三人称単数は has）。',
                '過去形（baked）とはちがい、「今へのつながり」を表す。',
                '経験は baked、継続・完了も baked と同じ過去分詞を使う。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（経験）' },
            { type: 'example', en: 'I have baked donuts.', ja: 'わたしはドーナツを焼いたことがあります。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（継続）' },
            { type: 'example', en: 'The shop has been open.', ja: 'お店は開いたままです（ずっと開いている）。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（完了）' },
            { type: 'example', en: 'I have made donuts.', ja: 'わたしはドーナツを作り終えました。', speakable: true, speaker: 'tsukino' },
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
                '現在完了は「have / has + 過去分詞」。',
                '経験・継続・完了の3つの使い方。',
                '過去形とはちがい、今へのつながりを表す。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「一度焼いたことがある」を英訳すると？',
              choices: ['I baked donuts.', 'I have baked donuts.', 'I bake donuts.', 'I was baking donuts.'],
              answerIndex: 1,
              explanation: '経験の現在完了は have + 過去分詞 です。',
            },
            {
              id: 'q2',
              prompt: '「お店は開いたままだ（継続）」を英訳すると？',
              choices: ['The shop opened.', 'The shop has been open.', 'The shop was open.', 'The shop opens.'],
              answerIndex: 1,
              explanation: '継続の現在完了は has been open です。',
            },
            {
              id: 'q3',
              prompt: '現在完了の形として正しいのは？',
              choices: ['have + 原形', 'have + 過去分詞', 'have + -ing', 'had + 原形'],
              answerIndex: 1,
              explanation: '現在完了は have / has + 過去分詞 です。',
            },
            {
              id: 'q4',
              prompt: '「やっと作り終えた」を表すのはどれ？',
              choices: ['I make donuts.', 'I made donuts.', 'I have made donuts.', 'I will make donuts.'],
              answerIndex: 2,
              explanation: '完了の現在完了は have made です。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-present-perfect-progressive',
        slug: 'present-perfect-progressive',
        title: '現在完了進行形',
        summary: '「have been + 動詞ing」で、過去からずっと続けている動作。',
        rewardId: 'reward-present-perfect-progressive',
        sections: {
          intro: [
            {
              type: 'text',
              text: '現在完了進行形は「have been + 動詞の -ing 形」で、過去のあるときから今まで「ずっと動き続けている」ことを表します。ドーナツ屋で「朝からずっと焼き続けている」ときに使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '現在完了進行形は「現在完了（have been）」と「進行形（-ing）」が合わさった形です。be動詞の過去分詞 been のうしろに -ing を置きます。まずは形の一覧を見てみましょう。',
            },
            {
              type: 'table',
              headers: ['主語', '形', '例'],
              rows: [
                ['I / you / we / they', 'have been + -ing', 'I have been baking.'],
                ['he / she / it', 'has been + -ing', 'She has been selling.'],
              ],
            },
            {
              type: 'heading',
              text: '現在完了とのちがい',
              level: 2,
            },
            {
              type: 'list',
              items: [
                '現在完了：I have baked.（焼いた、という経験・結果）。',
                '現在完了進行形：I have been baking.（ずっと焼き続けている）。',
                '「動き続けている最中」を強調するときに使う。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（朝から）' },
            { type: 'example', en: 'I have been baking donuts.', ja: 'わたしはずっとドーナツを焼き続けています。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（客席で）' },
            { type: 'example', en: 'She has been selling donuts.', ja: '彼女はずっとドーナツを売り続けています。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（行列）' },
            { type: 'example', en: 'They have been waiting.', ja: '彼らはずっと待ち続けています。', speakable: true, speaker: 'tsukino' },
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
                '現在完了進行形は「have been + 動詞の -ing 形」。',
                '過去からずっと動き続けていることを表す。',
                '三人称単数は has been + -ing。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「ずっと焼き続けています」を英訳すると？',
              choices: ['I have baked donuts.', 'I have been baking donuts.', 'I baked donuts.', 'I am baking donuts.'],
              answerIndex: 1,
              explanation: '継続の動きは have been + -ing です。',
            },
            {
              id: 'q2',
              prompt: 'She ___ selling donuts. の空欄に入るのは？',
              choices: ['have been', 'has been', 'have being', 'has being'],
              answerIndex: 1,
              explanation: '三人称単数は has been です。',
            },
            {
              id: 'q3',
              prompt: '現在完了進行形の形として正しいのは？',
              choices: ['have + 過去分詞', 'have been + -ing', 'has + 過去分詞', 'have being + -ing'],
              answerIndex: 1,
              explanation: 'have been + 動詞の -ing 形 です。',
            },
            {
              id: 'q4',
              prompt: '「彼らはずっと待ち続けている」を英訳すると？',
              choices: ['They have waited.', 'They waited.', 'They have been waiting.', 'They are wait.'],
              answerIndex: 2,
              explanation: '継続の動きは have been waiting です。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-participle',
        slug: 'participle',
        title: '分詞',
        summary: '「動詞の -ing / 過去分詞」が、うしろの名詞を修飾する。',
        rewardId: 'reward-participle',
        sections: {
          intro: [
            {
              type: 'text',
              text: '分詞は、動詞の形（ing や過去分詞）が形容詞のように名詞を修飾する働きです。ドーナツ屋でも「焼いているドーナツ」「焼かれたドーナツ」と、名詞のうしろに置いて説明するときに使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '分詞には2種類あります。能動（自分で動く）を表す -ing と、受動（される）を表す過去分詞です。名詞の「うしろ」に置くのがこの記事のポイントです。表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['分詞', '意味', '例', '使い方'],
              rows: [
                ['-ing（能動）', '〜している', 'the donut baking', '自分から動いている様子。'],
                ['過去分詞（受動）', '〜された', 'the donut baked', '他から動作を受けている。'],
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
                'the donut baking in the oven のように、うしろから名詞を修飾。',
                'the donuts sold here のように、過去分詞で「売られた」を表す。',
                'a donut made by Tsukino のように、by で「する人」を添えることも。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（オーブン）' },
            { type: 'example', en: 'the donut baking in the oven', ja: 'オーブンで焼いているドーナツ', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（棚）' },
            { type: 'example', en: 'the donuts sold here', ja: 'ここで売られているドーナツ', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（自慢）' },
            { type: 'example', en: 'a donut made by Tsukino', ja: 'つきのが作ったドーナツ', speakable: true, speaker: 'tsukino' },
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
                '分詞は動詞の形が名詞を修飾する。',
                '-ing は能動（〜している）、過去分詞は受動（〜された）。',
                '名詞のうしろに置く（後置修飾）。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「焼いているドーナツ」を英訳すると？',
              choices: ['the donut baked', 'the donut baking', 'the bake donut', 'the baked donut'],
              answerIndex: 1,
              explanation: '能動の -ing で the donut baking です。',
            },
            {
              id: 'q2',
              prompt: '「売られているドーナツ」を英訳すると？',
              choices: ['the donuts selling', 'the donuts sell', 'the donuts sold', 'the donut sells'],
              answerIndex: 2,
              explanation: '受動の過去分詞で the donuts sold です。',
            },
            {
              id: 'q3',
              prompt: '分詞が名詞を修飾するとき、置く位置は？',
              choices: ['名詞の前', '名詞のうしろ', '文の最初', '文の最後'],
              answerIndex: 1,
              explanation: '後置修飾なので名詞のうしろです。',
            },
            {
              id: 'q4',
              prompt: '「つきのが作ったドーナツ」を英訳すると？',
              choices: ['a donut making by Tsukino', 'a donut made by Tsukino', 'a donut makes by Tsukino', 'a donut make by Tsukino'],
              answerIndex: 1,
              explanation: '受動の過去分詞 made を使います。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-relative-pronoun',
        slug: 'relative-pronoun',
        title: '関係代名詞',
        summary: '「who / which / that」で、名詞を後ろの文で修飾する。',
        rewardId: 'reward-relative-pronoun',
        sections: {
          intro: [
            {
              type: 'text',
              text: '関係代名詞は、名詞のうしろに「その名詞についての文」をつなぐ言葉です。ドーナツ屋でも「あそこにいる客さんは、いつも笑顔の人だ」のように、人や物の説明を後ろに添えるときに使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '関係代名詞は、人なら who / that、物なら which / that を使います。うしろの文の「主語」や「目的語」のかわりになります。表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['関係代名詞', '使うもの', '例'],
              rows: [
                ['who', '人（主語）', 'the girl who smiles'],
                ['which', '物（主語・目的語）', 'the donut which I ate'],
                ['that', '人・物どちらも', 'the donut that I made'],
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
                '名詞のうしろに who / which / that を置く。',
                'うしろの文は「関係代名詞＋動詞…」と続く。',
                'that は人にも物にも使える便利な言葉。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（客さん）' },
            { type: 'example', en: 'the girl who smiles', ja: '笑顔の女の子', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（ドーナツ）' },
            { type: 'example', en: 'the donut which I ate', ja: 'わたしが食べたドーナツ', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（自慢）' },
            { type: 'example', en: 'the donut that I made', ja: 'わたしが作ったドーナツ', speakable: true, speaker: 'tsukino' },
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
                '関係代名詞は名詞のうしろに説明の文をつなぐ。',
                '人は who / that、物は which / that。',
                'うしろの文の主語・目的語のかわりになる。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「笑顔の女の子」を英訳すると？',
              choices: ['the girl which smiles', 'the girl who smiles', 'the girl that smiles', 'the girl what smiles'],
              answerIndex: 1,
              explanation: '人を表すのは who です（that も可）。',
            },
            {
              id: 'q2',
              prompt: '「わたしが食べたドーナツ」を英訳すると？',
              choices: ['the donut who I ate', 'the donut which I ate', 'the donut what I ate', 'the donut whom I ate'],
              answerIndex: 1,
              explanation: '物を表すのは which です（that も可）。',
            },
            {
              id: 'q3',
              prompt: '関係代名詞が人にも物にも使えるのは？',
              choices: ['who', 'which', 'that', 'what'],
              answerIndex: 2,
              explanation: 'that は人・物どちらにも使えます。',
            },
            {
              id: 'q4',
              prompt: '関係代名詞を置く位置として正しいのは？',
              choices: ['文の最初', '名詞のうしろ', '動詞のうしろ', '文の最後'],
              answerIndex: 1,
              explanation: '修飾する名詞のうしろに置きます。',
            },
          ],
        },
      },
      {
        kind: 'article',
        id: 'art-subjunctive',
        slug: 'subjunctive',
        title: '仮定法',
        summary: '「もし〜だったら」を表す、If I were 〜 の世界。',
        rewardId: 'reward-subjunctive',
        sections: {
          intro: [
            {
              type: 'text',
              text: '仮定法は「もし〜だったら（でも現実はちがう）」という、想像の世界を表す形です。ドーナツ屋でも「もしわたしが客さんだったら、このドーナツを買うのに」のような願いや想像に使います。',
            },
          ],
          concept: [
            {
              type: 'text',
              text: '仮定法では、be動詞は主語にかかわらず were を使います。よく出るのが「If I were 〜」です。また、動詞は過去形に見えますが、意味は「今の反事実」を表します。表でおぼえましょう。',
            },
            {
              type: 'table',
              headers: ['形', '意味', '例'],
              rows: [
                ['If I were ...', 'もしわたしが〜なら（現実はちがう）', 'If I were you, ...'],
                ['If he were ...', 'もし彼が〜なら', 'If he were here, ...'],
                ['I would ...', '〜するだろう（仮の話）', 'I would buy it.'],
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
                'be動詞は were を使う（I were / he were など）。',
                'would / could を使って「仮の結果」を言う。',
                '「現実ではない」ことを表すのが仮定法。',
              ],
            },
          ],
          examples: [
            {
              type: 'text',
              text: '声に出して読んでみましょう。🔊 を押すと発音が聞けます。',
            },
            { type: 'text', text: 'つきの（想像）' },
            { type: 'example', en: 'If I were you, I would eat it.', ja: 'もしわたしがあなたなら、食べますね。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（願い）' },
            { type: 'example', en: 'If he were here, he would smile.', ja: 'もし彼がここにいたら、笑うでしょうに。', speakable: true, speaker: 'tsukino' },
            { type: 'text', text: 'つきの（夢）' },
            { type: 'example', en: 'I would buy this donut.', ja: 'わたしはこのドーナツを買うでしょう。', speakable: true, speaker: 'tsukino' },
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
                '仮定法は「もし〜なら（現実はちがう）」を表す。',
                'be動詞は were を使う（If I were 〜）。',
                '結果は would / could を使う。',
              ],
            },
          ],
        },
        quiz: {
          questions: [
            {
              id: 'q1',
              prompt: '「もしわたしがあなたなら」を英訳すると？',
              choices: ['If I was you,', 'If I were you,', 'If I am you,', 'If I be you,'],
              answerIndex: 1,
              explanation: '仮定法の be動詞は were です。',
            },
            {
              id: 'q2',
              prompt: '「もし彼がここにいたら」を英訳すると？',
              choices: ['If he was here,', 'If he is here,', 'If he were here,', 'If he be here,'],
              answerIndex: 2,
              explanation: '三人称でも仮定法は were を使います。',
            },
            {
              id: 'q3',
              prompt: '仮定法の結果を表すのに使うのは？',
              choices: ['will', 'would', 'do', 'does'],
              answerIndex: 1,
              explanation: '仮の結果は would を使います。',
            },
            {
              id: 'q4',
              prompt: '仮定法が表すのはどれ？',
              choices: ['現実のこと', '過去の事実', '現実ではない想像', '未来の予定'],
              answerIndex: 2,
              explanation: '仮定法は「現実ではない」ことを表します。',
            },
          ],
        },
      },
    ],
  },
];
