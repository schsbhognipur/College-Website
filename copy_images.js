const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\318b0708-7461-421a-9415-2274fb9c41a4\\';
const destDir = 'C:\\Users\\Lenovo\\OneDrive\\Desktop\\Projects\\SCHSWebsite\\public\\images\\';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = {
  'hero_campus.png': 'hero_campus_1775239410065.png',
  'pharma_lab.png': 'pharma_lab_1775239775023.png',
  'library_study.png': 'library_study_1775239879643.png',
  'students_walking.png': 'students_walking_1775239918261.png',
  'about_campus.png': 'about_campus_1775239961899.png',
};

for (const [destName, srcName] of Object.entries(files)) {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${destName}`);
  } catch (e) {
    console.error(`Failed to copy ${destName}:`, e.message);
  }
}
