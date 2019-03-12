/**
 * 分类列表接口
 * @api /rank_cate
 * 
 */

module.exports = (app)=>{
    app.get('/rank_cate',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:'/category/ranklist',
                data:{
                    node: req.query.node || '8c31c6a912464c3e9de4cc6c2c8c402a'
                }
            },'b')
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}