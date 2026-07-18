import { isSpeechSupported, speak } from '../../lib/speech';

interface ExampleBlockProps {
  en: string;
  ja?: string;
  speakable?: boolean;
}

export const ExampleBlock = ({ en, ja, speakable }: ExampleBlockProps) => {
  const supported = isSpeechSupported();
  const showButton = speakable !== false;

  return (
    <div className="block-example">
      <div className="block-example__text">
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
