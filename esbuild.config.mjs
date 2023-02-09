import fs from 'fs';
import chalk from 'chalk';
import esbuild from 'esbuild';
// Plugins
import progress from 'esbuild-plugin-progress';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

const mode = process.env.NODE_ENV;
const isProduction = mode === 'production';

const source = fs.readdirSync('./src');

await esbuild
  .build({
    entryPoints: source.map((file) => `./src/${file}`),
    bundle: false,
    minify: isProduction,
    outdir: 'dist/es',
    tsconfig: './tsconfig.json',
    format: 'esm',
    plugins: [progress(), dtsPlugin()],
  })
  .catch((err) => {
    console.log(`${chalk.hex('#ea6249').bold('[vue3redux]: ')} ${err}`);
    process.exit(1);
  });
