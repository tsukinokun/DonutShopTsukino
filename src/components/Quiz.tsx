import { useState } from 'react';
import type { Quiz as QuizType, RewardRank } from '../content/types';
import { awardRank, rankFromScore } from '../lib/collectionStore';
import { getReward, RANK_LABEL } from '../content/rewards';
import './Quiz.css';

interface QuizProps {
  quiz: QuizType;
  rewardId: string;
}

export const Quiz = ({ quiz, rewardId }: QuizProps) => {
  const questions = quiz.questions;
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [awarded, setAwarded] = useState<RewardRank | null>(null);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const correctCount = questions.filter((q) => answers[q.id] === q.answerIndex).length;
  const reward = getReward(rewardId);

  const handleSelect = (questionId: string, choiceIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: choiceIndex }));
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    const rank = rankFromScore(correctCount, questions.length);
    if (rank) {
      awardRank(rewardId, rank);
    }
    setAwarded(rank);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setAwarded(null);
  };

  return (
    <div className="quiz">
      <ol className="quiz__list">
        {questions.map((q, qi) => {
          const selected = answers[q.id];
          return (
            <li className="quiz__item" key={q.id}>
              <p className="quiz__prompt">
                <span className="quiz__number">Q{qi + 1}.</span> {q.prompt}
              </p>
              <div className="quiz__choices" role="group" aria-label={`Q${qi + 1} の選択肢`}>
                {q.choices.map((choice, ci) => {
                  const isSelected = selected === ci;
                  const isCorrect = ci === q.answerIndex;
                  let stateClass = '';
                  if (submitted) {
                    if (isCorrect) stateClass = 'quiz__choice--correct';
                    else if (isSelected) stateClass = 'quiz__choice--wrong';
                  } else if (isSelected) {
                    stateClass = 'quiz__choice--selected';
                  }
                  return (
                    <button
                      type="button"
                      key={ci}
                      className={`quiz__choice ${stateClass}`}
                      onClick={() => handleSelect(q.id, ci)}
                      disabled={submitted}
                      aria-pressed={isSelected}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>
              {submitted && q.explanation && (
                <p className="quiz__explanation">{q.explanation}</p>
              )}
            </li>
          );
        })}
      </ol>

      {!submitted ? (
        <button
          type="button"
          className="quiz__submit"
          onClick={handleSubmit}
          disabled={!allAnswered}
        >
          採点する
        </button>
      ) : (
        <div className="quiz__result" role="status">
          <p className="quiz__score">
            {questions.length} 問中 {correctCount} 問 正解！
          </p>
          {awarded ? (
            <p className="quiz__award">
              <span className={`quiz__medal quiz__medal--${awarded}`}>
                {RANK_LABEL[awarded]}
              </span>
              {reward ? `「${reward.name}」を獲得しました！` : 'コレクションを獲得しました！'}
            </p>
          ) : (
            <p className="quiz__award quiz__award--none">
              今回は獲得なし。もう一度チャレンジしてみよう。
            </p>
          )}
          <button type="button" className="quiz__retry" onClick={handleRetry}>
            もう一度挑戦する
          </button>
        </div>
      )}
    </div>
  );
};
