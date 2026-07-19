const fs = require('fs');
const text = fs.readFileSync('src/content/tree.ts', 'utf8');
let depth = 0; // tracks [] and {} combined net? better track separately
let arr = 0, obj = 0;
let inStr = false, inTmpl = false, strCh = '';
let prev = '';
let line = 1;
for (let i = 0; i < text.length; i++) {
  const ch = text[i];
  if (ch === '\n') { line++; prev = ''; continue; }
  if (inStr) {
    if (ch === '\\') { i++; continue; }
    if (ch === strCh) inStr = false;
    prev = ch; continue;
  }
  if (ch === '"' || ch === "'") { inStr = true; strCh = ch; prev = ch; continue; }
  if (ch === '[') arr++;
  else if (ch === ']') { arr--; if (arr < 0) { console.log('UNBALANCED ] at line', line); } }
  else if (ch === '{') obj++;
  else if (ch === '}') { obj--; if (obj < 0) { console.log('UNBALANCED } at line', line); } }
  prev = ch;
}
console.log('final arr depth:', arr, 'obj depth:', obj);
