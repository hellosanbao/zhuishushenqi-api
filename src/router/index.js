const { readdirSync } = require('fs')
const { resolve } = require('path')
const routes = readdirSync(__dirname).filter(item => item.indexOf('index') != 0)
module.exports = (app) => {
    routes.forEach((item) => {
        let route = require(resolve(__dirname, item))
        route(app)
    })
}

