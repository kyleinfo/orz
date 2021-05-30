const { resolve, join } = require('path');
const nodeResolve = require('@rollup/plugin-node-resolve').default;
const typescript2 = require('rollup-plugin-typescript2');
const { terser } = require('rollup-plugin-terser');
const replace = require('@rollup/plugin-replace');

const pkg = require('../package.json');

const root = resolve(__dirname, '../');

module.exports = {
  input: resolve(root, 'src/', `index.ts`),
  output: {
    strict: false,
    format: 'umd',
    exports: 'default',
    file: './dist/React.js',
    name: 'React',
    plugins: [
      replace({
        VERSION: pkg.version,
        'process.env.NODE_ENV': process.env.NODE_ENV,
      }),
      // terser(),
    ],
  },
  plugins: [
    nodeResolve({
      mainFields: ['module', 'jsnext:main', 'main'],
    }),
    typescript2({
      root,
      // @see https://github.com/umijs/father/issues/61#issuecomment-544822774
      clean: true,
      tsconfig: join(root, 'tsconfig.json'),
      tsconfigDefaults: {
        compilerOptions: {
          // Generate declaration files by default
          declaration: true,
        },
      },
    }),
  ],
};
