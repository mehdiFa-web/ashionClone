const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
// remove old js bundles
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// css into seperated files 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports =merge(common,{
    mode:"production",
    output : {
        filename : '[name][contentHash].js',
        path: path.resolve(__dirname,"dist")
    },
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : [
                    // css into seperated files
                    MiniCssExtractPlugin.loader
                    ,
                    // turn css to js
                    {
                        loader:'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    //postcss
                    'postcss-loader',
                    // first - turn scss to common css
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        // clean old bundled files
        new CleanWebpackPlugin(),
        //
        new MiniCssExtractPlugin({
            filename: '[name][contentHash].css'
        })
    ]
}) 