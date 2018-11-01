const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const extractCSS = new ExtractTextPlugin('vendor.css');
    const isDevBuild = !(env && env.prod);
    return [{
        stats: { modules: false },
        resolve: {
            extensions: [ '.js' ]
        },
        entry: {
            vendor: [
                'jquery',
                'jquery-ui',
                'bootstrap',
                'bootstrap/dist/css/bootstrap.css',
                'event-source-polyfill',
                'isomorphic-fetch',
                'react',
                'react-dom',
                'react-router-dom',
                'admin-lte',
                'admin-lte/dist/css/AdminLTE.css',
                'admin-lte/dist/css/skins/_all-skins.css',
                'admin-lte/bower_components/font-awesome/css/font-awesome.css',
                'slimscroll/lib/slimscroll.js'],
            images: [
                'admin-lte/dist/img/user2-160x160.jpg',
                'admin-lte/dist/img/user4-128x128.jpg'
            ]
        },
        node: {
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
        },
        module: {
            rules: [
                { test: /\.(woff|woff2|eot|ttf|svg)(\?|$)/, use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: 'img/[hash]-[name].[ext]'
                        }
                    }] },
                {
                    test: /\.(png|jpg)(\?|$)/, use: [{
                    loader: 'file-loader?name=img/[name].[ext]',
                    }]},
                { test: /\.css(\?|$)/, use: extractCSS.extract([ isDevBuild ? 'css-loader' : 'css-loader?minimize' ]) }
            ]
        },
        output: {
            path: path.join(__dirname, 'wwwroot', 'dist'),
            publicPath: 'dist/',
            filename: '[name].js',
            library: '[name]_[hash]',
        },
        plugins: [
            extractCSS,
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', "window.jQuery": 'jquery' }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
            })
        ].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin()
            ])
    }];
};
