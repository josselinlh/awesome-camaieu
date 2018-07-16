var path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  module: {
        rules: [
            {
                test: /\.js$/,
                use:{
                  loader: 'babel-loader',
                  options: {
                      presets: ['es2015']
                  }
                }
            },
	    {
                test: /\.scss$/,
                use:
		[
		  {
                  	loader: 'style-loader'
                  },
		  {
                  	loader: 'css-loader'
                  },
		  {
                  	loader: 'sass-loader'
                  }
		]
            }
        ]
    }
};
