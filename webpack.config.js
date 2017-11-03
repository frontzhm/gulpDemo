const path = require('path')
module.exports = {
    entry: {
        index: './src/script/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build/script'),
        // [name]应对多入口 和入口的js文件的名字一样
        filename: '[name].js'
    }
}