/**
 * 推荐书籍列表
 * @api /recommend_books
 * @param {number} id 分类id
 * @param {number} limit 分页长度
 * @param {number} st 偏移量
 */

module.exports = (app)=>{
    app.get('/recommend_books',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:'/category/booklist',
                data:{
                    node:req.query.id,
                    size:req.query.limit,
                    st:req.query.start
                }
            },'b')
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}