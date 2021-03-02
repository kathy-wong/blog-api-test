const path = require("path")
const webpack = require("webpack")
const util = require('./util')
const nodeExcternals = require('webpack-node-externals') // Easily exclude node modules in Webpack
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const webpackConfig = {
    target:'node', //target 设置为 node，webpack 将在类 Node.js 环境编译代码。
    entry:{
        server:path.join(util.APP_PATH,'index.js')
    },
    output:{
        filename:'[name].bundle.js',
        path:util.DIST_PATH
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:[path.join(__dirname,'/node_modules')]
            }
        ]
    },
    externals:[nodeExcternals()],// 从输出的 bundle 中排除依赖
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:(process.env.NODE_ENV==='production'||process.env.NODE_ENV==='prod')
            }
        })
    ],
    // 配置是否 polyfill 或 mock 某些 Node.js 全局变量。
    node:{
        global:true, //提供 polyfill
        __filename:true,//输入 文件的文件名
        __dirname:true,//输入 文件的目录名
    }
}

module.exports = webpackConfig