/**
 * 分类列表接口
 * @api /search_recommend
 * 
 */

module.exports = (app)=>{
    app.get('/search_recommend',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:'/books/search-recommend',
            },'b01')
            res.send(result.data.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}