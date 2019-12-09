const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env) => {
    console.log(env);
    return {
        entry: {
            main: './src/main.js',
            module: './src/module.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: './[name].[hash].js',
            publicPath: '/'
        },
        mode: 'development',
        watch: true,
        devtool: 'inline-source-map', // Only in development
        devServer: {
            contentBase: './dist',
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                title: 'HTML Webpack Plugin',
            })
        ],
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ],
        }
    };
};
