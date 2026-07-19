const fs = require('fs');
const parser = require('@babel/parser');
const text = fs.readFileSync('src/content/tree.ts', 'utf8');
const lines = text.split('\n');

function ok(n) {
  const prefix = lines.slice(0, n).join('\n') + '\n';
  try {
    parser.parse(prefix, { sourceType: 'module', plugins: ['typescript'] });
    return true;
  } catch (e) {
    return false;
  }
}

// find first line L such that prefix ending at L fails but L-1 ok
let lo = 1, hi = lines.length;
if (ok(hi)) { console.log('full file OK'); process.exit(0); }
let ans = hi;
for (let i = 1; i <= hi; i++) {
  if (!ok(i)) { ans = i; break; }
}
console.log('first failing line index (1-based):', ans);
for (let i = Math.max(0, ans - 8); i < Math.min(lines.length, ans + 3); i++) {
  console.log((i + 1) + ': ' + JSON.stringify(lines[i]));
}
