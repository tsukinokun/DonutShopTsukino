const fs = require('fs');
const parser = require('@babel/parser');
const text = fs.readFileSync('src/content/tree.ts', 'utf8');
try {
  parser.parse(text, { sourceType: 'module', plugins: ['typescript'] });
  console.log('BABEL PARSE OK');
} catch (e) {
  console.log('BABEL ERROR at line', e.loc && e.loc.line, 'col', e.loc && e.loc.column);
  console.log(e.message);
}
