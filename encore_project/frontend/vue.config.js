module.exports = {
    devServer: { // api 요청 어디서 처리할지를 설정
        proxy: {
            '/api': {
                target: 'http"//localhost:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    outputDir: '../backend/public', // 배포파일의 위치 지정
}