'use strict'

module.exports = function(routers) {
    routers.map({
        '/': {
            name: 'index',
            title: 'webapp',
            component: function(resolve) {
                require(['./views/index.vue'], resolve);
            }
        },
        '*': {
            name: 'index',
            title: 'webapp',
            component: function(resolve) {
                require(['./views/index.vue'], resolve);
            }
        },
        'test': {
            name: 'test',
            title: 'test',
            component: function(resolve) {
                require(['./views/test.vue'], resolve);
            }
        }
    })
}