import { isSpeechSupported, speak } from '../../lib/speech';
import { getCharacter } from '../../content/characters';

interface ExampleBlockProps {
  en: string;
  ja?: string;
  speakable?: boolean;
  speaker?: string;
}

export const ExampleBlock = ({ en, ja, speakable, speaker }: ExampleBlockProps) => {
  const supported = isSpeechSupported();
  const showButton = speakable !== false;
  const character = speaker ? getCharacter(speaker) : undefined;

  return (
    <div className="block-example">
      {character && (
        <img className="block-example__avatar" src={character.avatar} alt={character.name} />
      )}
      <div className="block-example__text">
        {character && <p className="block-example__name">{character.name}</p>}
        <p className="block-example__en">{en}</p>
        {ja && <p className="block-example__ja">{ja}</p>}
      </div>
      {showButton && (
        <button
          type="button"
          className="block-example__speak"
          onClick={() => speak(en)}
          disabled={!supported}
          aria-label={supported ? `「${en}」を読み上げる` : '音声読み上げ非対応'}
          title={supported ? '読み上げる' : 'このブラウザでは音声読み上げに対応していません'}
        >
          🔊
        </button>
      )}
    </div>
  );
};
