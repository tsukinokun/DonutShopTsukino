import './blocks.css';
import type { Block } from '../../content/types';
import { ExampleBlock } from './ExampleBlock';
import { PassageBlock } from './PassageBlock';
import { CardsBlock } from './CardsBlock';

interface BlockRendererProps {
  blocks: Block[];
}

export const BlockRenderer = ({ blocks }: BlockRendererProps) => {
  return (
    <div className="blocks">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return (
              <p className="block-text" key={index}>
                {block.text}
              </p>
            );
          case 'heading': {
            const level = block.level ?? 2;
            const className = `block-heading block-heading--${level}`;
            return level === 3 ? (
              <h3 className={className} key={index}>
                {block.text}
              </h3>
            ) : (
              <h2 className={className} key={index}>
                {block.text}
              </h2>
            );
          }
          case 'list':
            return (
              <ul className="block-list" key={index}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case 'cards':
            return <CardsBlock cards={block.cards} key={index} />;
          case 'example':
            return (
              <ExampleBlock en={block.en} ja={block.ja} speakable={block.speakable} speaker={block.speaker} key={index} />
            );
          case 'table':
            return (
              <div className="block-table" key={index}>
                <table>
                  <thead>
                    <tr>
                      {block.headers.map((h, i) => (
                        <th key={i}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'passage':
            return <PassageBlock lines={block.lines} key={index} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
