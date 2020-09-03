
const htmlWebpackPlugin = require('html-webpack-plugin')



module.exports ={
    entry : {
        main : "./src/index.js"
    },

    module : {
        rules : [
            {
                test : /\.html$/,
                use : [
                    'html-loader'
                ]
            },
            {
                test : /\.(ttf|svg|png|jpe?g)$/,
                use : {
                    loader : 'file-loader',
                    options: {
                        name : '[name][contenthash].[ext]',
                        outputPath : 'images'
                    }
                }
            }
        ]
    },
    plugins: [
        // generate html files and auto inject shit
        new htmlWebpackPlugin({
            template :'./src/index.html'
        })
    ]

}