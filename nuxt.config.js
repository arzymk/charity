module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'Ислам KG',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        vendor: [
            'vue-flickity',
            'vue-mq'
        ],
        postcss: {
            plugins: {
                'postcss-custom-properties': {
                    warnings: false
                }
            }
        }
    },
    modules: [
        ['nuxt-sass-resources-loader', './assets/sass/style.sass']
    ],
    css: [
        '~assets/fonts/fonts.css'
    ],
    plugins: [
        { src: '~/plugins/vue-flickity', ssr: false },
        { src: '~/plugins/vue-mq', ssr: false}
    ]
}
