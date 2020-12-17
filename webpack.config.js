const path = require('path');

const babelConf = {
    'presets': [
        [
            '@babel/preset-env',
            {
                'targets': {
                    'node': 'current'
                }
            }
        ]
    ]
}

module.exports = {
    'entry': './src/index',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './index.js'
    },
    target: 'node',
    resolve: {
        'mainFiles': ['index'],
        'extensions': ['.js', '.ts', '.tsx', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelConf
                    },
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelConf
                    }
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    }
};