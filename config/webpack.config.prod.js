const webpackMerge = require('webpack-merge').merge
const webpackBaseConfig = require('./webpack.config.base')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const webpackConfig  = webpackMerge(webpackBaseConfig,{
   mode:'production',
   stats:{children:false,warnings:false},
   //根据不同模式优化
   optimization:{
    // 压缩
    minimizer:[
   
    ],
     //分块策略
    splitChunks:{
        // 缓存组可以继承和/或覆盖splitChunks
        cacheGroups:{
            // 创建一个commons块，其中包括入口点之间共享的所有代码
            commons:{
             name:'commons',
             chunks:"initial",
             minChunks:3,
             enforce:true
            }
        }
    }
}
})
module.exports = webpackConfig