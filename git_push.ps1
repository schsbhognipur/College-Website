git init
git add .
git commit -m "feat: complete rewrite with React, Tailwind, and Mock Data"
git branch -M main
git remote add origin https://github.com/schsbhognipur/College-Website.git
git fetch origin
$branchObj = git branch -r
if ($branchObj -match "origin/main") {
  git checkout -b feature/update-assets
  git push -u origin feature/update-assets
} else {
  git push -u origin main
}
