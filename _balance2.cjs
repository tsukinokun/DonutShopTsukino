const fs = require('fs');
const parser = require('@babel/parser');
const text = fs.readFileSync('src/content/tree.ts', 'utf8');
const lines = text.split('\n');

// Walk char by char, track string/template/comment, count net bracket depth.
// When depth of [] goes negative, that's the extra ']'.
let arr = 0, obj = 0;
let inStr = false, inTmpl = false, inLC = false, inBC = false;
let strCh = '';
for (let i = 0; i < text.length; i++) {
  const ch = text[i];
  const next = text[i + 1] || '';
  if (inLC) { if (ch === '\n') inLC = false; continue; }
  if (inBC) { if (ch === '*' && next === '/') { inBC = false; i++; } continue; }
  if (inStr) {
    if (ch === '\\') { i++; continue; }
    if (ch === strCh) inStr = false;
    continue;
  }
  if (inTmpl) {
    if (ch === '\\') { i++; continue; }
    if (ch === '`') inTmpl = false;
    continue;
  }
  if (ch === '/' && next === '/') { inLC = true; i++; continue; }
  if (ch === '/' && next === '*') { inBC = true; i++; continue; }
  if (ch === '"' || ch === "'") { inStr = true; strCh = ch; continue; }
  if (ch === '`') { inTmpl = true; continue; }
  if (ch === '[') arr++;
  else if (ch === ']') { arr--; if (arr < 0) { const ln = text.slice(0, i).split('\n').length; console.log('EXTRA ] at line', ln, 'col', i - text.lastIndexOf('\n', i)); return; } }
  else if (ch === '{') obj++;
  else if (ch === '}') { obj--; if (obj < 0) { const ln = text.slice(0, i).split('\n').length; console.log('EXTRA } at line', ln); return; } }
}
console.log('balanced. arr=', arr, 'obj=', obj);
