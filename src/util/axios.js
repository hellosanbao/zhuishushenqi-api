const axios = require('axios')
const { randomUserAgent } = require('./util')
const { isArray } = require('lodash')
module.exports = (opt,curl = 'api') => {
    function getcomData(data){
        let requestData = {
            baseURL:'https://'+curl + '.zhuishushenqi.com',
            method:data.method || 'get',
            url: data.url,
            headers: {
                'User-Agent': randomUserAgent()
            }
        }
        if (requestData.method == 'get') {
            requestData.params = data.data
        } else {
            requestData.data = data.data
        }
        return requestData
    }
    if(!isArray(opt)){
        return axios(getcomData(opt))
    }else{
        let fetchArray = opt.map(item=>{
            return axios(getcomData(item))
        })
        function getAllData(){
            return new Promise((resolve,reject)=>{
                axios.all(fetchArray).then(axios.spread((...arg)=>{
                    resolve(arg)
                })).catch(err=>{
                    console.log(err.message)
                })
            })
        }
        return getAllData()
    }
    
}
