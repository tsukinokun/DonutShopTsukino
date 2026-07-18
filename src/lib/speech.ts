// Web Speech API（speechSynthesis）による読み上げ。追加ライブラリ不要。

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function speak(text: string, lang = 'en-US'): void {
  if (!isSpeechSupported()) return;
  const synth = window.speechSynthesis;
  // 多重再生を防ぐため、発話前に既存のキューをキャンセル。
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  synth.speak(utterance);
}
