
rm -rf dist

git worktree add dist gh-pages

npm run build

mkdir dist/ressources

cp ressources/CV-Zacharie-Guet.pdf dist/ressources/

cd dist
git add .

git commit -m "Build Static site"

git push origin gh-pages

cd ..