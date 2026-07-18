import { getCharacter } from '../../content/characters';

interface PassageBlockProps {
  lines: { speakerId: string; text: string }[];
}

export const PassageBlock = ({ lines }: PassageBlockProps) => {
  return (
    <div className="block-passage">
      {lines.map((line, index) => {
        const character = getCharacter(line.speakerId);
        const side = character?.side ?? 'left';
        return (
          <div className={`passage-line passage-line--${side}`} key={index}>
            {character && (
              <img className="passage-line__avatar" src={character.avatar} alt={character.name} />
            )}
            <div className="passage-line__body">
              <p className="passage-line__name">{character?.name ?? line.speakerId}</p>
              <p className="passage-line__bubble">{line.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
