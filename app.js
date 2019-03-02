const router = require('./src/router')
const $axios = require('./src/util/axios')
const apicache = require('apicache')
const app = require('express')()
let cache = apicache.middleware
app.$axios = $axios
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.use(cache('2 minutes', (req, res) => res.statusCode === 200))
router(app)
app.listen(3000, () => console.log('server start http://localhost:3000'))