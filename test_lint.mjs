import { execSync } from 'child_process';

let output = '';
try {
  output = execSync('npx eslint . --format json').toString();
} catch (e) {
  output = e.stdout.toString();
}

const errors = JSON.parse(output);
for (const file of errors) {
  if (file.errorCount > 0 || file.fatalErrorCount > 0) {
    console.log(file.filePath);
    for (const msg of file.messages) {
      console.log(`  Line ${msg.line}: ${msg.message}`);
    }
  }
}
