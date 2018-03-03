const path = require('path');

module.exports = {
  entry: './src/web/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader!ts-loader',
      },
    ],
  },
};
