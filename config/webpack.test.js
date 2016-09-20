const helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',
    colors: true,
    profile: true,
    displayModules: true,

    resolve: {
        root: helpers.root('src'),
        extensions: ['', '.js'],
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    helpers.root('node_modules/rxjs'),
                ]
            }
        ],

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'html'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                loader: 'null'
            }
        ]
    },

    node: {
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
    }
}
