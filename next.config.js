const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
 
module.exports = withPWA({
    future: {webpack5: true},
    pwa: {
        dest: 'public', 
        runtimeCaching,
    }, 
    images: {
        domains: ['website.mi-portfolio.de']
    }, 
    env: {
        SESSION_KEY: 'testPWA',
    },
})