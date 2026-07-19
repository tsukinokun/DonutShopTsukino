import type { Character } from './types';
import logo from '../assets/images/logo.png';
import tsukinoIcon from '../assets/images/chataIcons/TsukinoIcon.png';

// 会話に登場するキャラクター。アバターは未定のため既定で logo.png を仮アバターに使用。
export const characters: Record<string, Character> = {
  tsukino: {
    id: 'tsukino',
    name: 'つきの。',
    avatar: tsukinoIcon,
    side: 'left',
  },
  guest: {
    id: 'guest',
    name: 'おきゃくさん',
    avatar: logo,
    side: 'right',
  },
};

export function getCharacter(id: string): Character | undefined {
  return characters[id];
}
