/**
 * 获取分类详情
 * @api /category_books
 * @param {number} start 偏移量
 * @param {number} limit 分页长度
 * @param {string} alias 分类名
 * 
 */

module.exports = (app)=>{
    app.get('/category_books',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:'/category/fuzzy-search',
                data:req.query
            },'b')
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}