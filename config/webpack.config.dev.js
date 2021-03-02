const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const webpackConfig = webpackMerge(webpackBaseConfig,{
    mode:'development',// webpack 使用相应模式的内置优化
    //此选项控制是否生成，以及如何生成 source map
    devtool:'eval-source-map', //使用高质量的sourcemap进行开发的推荐选择
    //精确地控制 bundle 信息该怎么显示
    stats:{children:false} //是否添加关于子模块的信息。
})
module.exports = webpackConfig
