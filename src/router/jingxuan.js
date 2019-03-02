/**
 * 首页接口
 * @api /jingxuan 
 * @param {string} type 类型 press，jx，vip，male，female
 */
module.exports = (app)=>{
    app.get('/jingxuan', async (req, res) => {
        try{
            const init = await app.$axios({
                url:'/category/group-minlist',
                data:req.query
             },'b')
            res.send(init.data.data)
        }catch(err){
            res.send({code:-100,msg:err.message})
        }
    })
}
