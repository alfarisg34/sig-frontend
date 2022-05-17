const path = require('path')

module.exports = {
    style: {
        postcssOptions: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, 'src/components/'),
            "@images": path.resolve(__dirname, 'src/assets/img/'),
            "@hooks": path.resolve(__dirname, 'src/hooks'),
            "@contexts": path.resolve(__dirname, 'src/contexts'),
            "@api": path.resolve(__dirname, 'src/api'),
            "@helper": path.resolve(__dirname, 'src/helper'),
        }
    }
}