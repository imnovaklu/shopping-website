var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./src/app.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                loaders: [ 'style-loader', 'css-loader', 'less-loader' ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.gif/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            }
        ]
    },
    output: {
        path: __dirname + "/build/",
        filename: "app.bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};