const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
 
module.exports = withPWA({
    future: {webpack5: true},
    pwa: {
        dest: 'public', 
        runtimeCaching,
        fallbacks: {
            document: '/offline',
          }
    }, 
    images: {
        domains: ['website.mi-portfolio.de']
    }, 
    env: {
        SESSION_KEY: 'testPWA',
    },
})