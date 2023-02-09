npx rimraf ./dist

watch 'npx cross-env NODE_ENV=development node ./esbuild.config.mjs' 'src'