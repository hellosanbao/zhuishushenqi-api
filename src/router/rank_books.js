/**
 * 分类列表接口
 * @api /rank_nooks
 * @param {string} id 排行分类id
 * @param {number} start 分页偏移量
 * @param {number} limit 分页长度
 * 
 */

module.exports = (app)=>{
    app.get('/rank_books',async (req,res)=>{
        const { start, limit, id } = req.query
        try{
            let result = await app.$axios({
                url:'/category/rankinfo',
                data:{
                    st:start,
                    size:limit,
                    node:id
                }
            },'b')
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}