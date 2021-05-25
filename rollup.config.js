const nodePath = require('path');
const nodeResolvePlugin = require('@rollup/plugin-node-resolve').default;
const typescript2 = require('rollup-plugin-typescript2');
const { terser } = require('rollup-plugin-terser');
const replace = require('@rollup/plugin-replace');
const pkg = require('./package.json');

const root = nodePath.resolve(__dirname, './');
const input = nodePath.resolve(root, 'src/', `index.ts`);

module.exports = {
  input,
  output: {
    strict: false,
    format: 'umd',
    exports: 'default',
    file: './dist/React.js',
    name: 'React',
  },
  plugins: [
    nodeResolvePlugin({
      mainFields: ['module', 'jsnext:main', 'main'],
    }),
    typescript2({
      root,
      // @see https://github.com/umijs/father/issues/61#issuecomment-544822774
      clean: true,
      tsconfig: nodePath.join(root, 'tsconfig.json'),
      tsconfigDefaults: {
        compilerOptions: {
          // Generate declaration files by default
          declaration: true,
        },
      },
    }),
  ],
};
