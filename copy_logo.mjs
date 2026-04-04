import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\318b0708-7461-421a-9415-2274fb9c41a4\\';
const destDir = 'C:\\Users\\Lenovo\\OneDrive\\Desktop\\Projects\\SCHSWebsite\\public\\images\\';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

try {
  fs.copyFileSync(
    path.join(srcDir, 'sanches_logo_1775240879541.png'),
    path.join(destDir, 'logo.png')
  );
  console.log('Logo copied successfully!');
} catch (e) {
  console.error(e.message);
}
