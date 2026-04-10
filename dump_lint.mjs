import fs from 'fs';
import { execSync } from 'child_process';

try {
  const output = execSync('npx eslint . --format json').toString();
  fs.writeFileSync('lint_output.txt', output);
} catch (e) {
  fs.writeFileSync('lint_output.txt', e.stdout.toString());
}
