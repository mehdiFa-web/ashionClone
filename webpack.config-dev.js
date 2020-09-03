const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')


module.exports = merge( common ,{
    mode:"development",
    output : {
        filename : '[name].js',
        path: path.resolve(__dirname,"dist")
    },
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : [

                    // inject css to the dom
                    'style-loader',
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
    
    
    

})