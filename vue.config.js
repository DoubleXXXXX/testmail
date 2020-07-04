module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // '@': 'scr' 默认配置过了
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}