
rm -rf dist

git worktree add -f dist gh-pages

npm run build

mkdir dist/ressources

cp ressources/CV-Zacharie-Guet.pdf dist/ressources/

cd dist
git add -f . 

git commit -m "Build Static site"

git push origin gh-pages

cd ..