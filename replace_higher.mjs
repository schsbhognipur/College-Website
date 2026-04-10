import fs from 'fs';
import path from 'path';

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'public') continue;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else {
      const ext = path.extname(fullPath);
      if (['.js', '.jsx', '.html', '.md', '.json', '.txt', '.ps1'].includes(ext)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          // Replace string variations:
          let newContent = content.replace(/Higher Education and Studies/gi, 'Higher Studies');
          newContent = newContent.replace(/Higher Education & Studies/gi, 'Higher Studies');
          
          if (newContent !== content) {
            fs.writeFileSync(fullPath, newContent, 'utf8');
            console.log('Updated: ' + fullPath);
          }
        } catch (e) {
          // ignore
        }
      }
    }
  }
}

replaceInDir(process.cwd());
console.log('Done.');
