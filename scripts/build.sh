npx rimraf ./dist

npx cross-env NODE_ENV=production \
node ./esbuild.config.mjs