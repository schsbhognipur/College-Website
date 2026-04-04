const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('SCHES')) {
        fs.writeFileSync(fullPath, content.replace(/SCHES/g, 'SCHS'), 'utf8');
        console.log('Updated: ' + fullPath);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));
console.log('Replacement complete.');
