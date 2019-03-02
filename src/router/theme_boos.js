/**
 * 分类列表接口
 * @api /theme_books
 * @param {string} sort 排序方式（collectorCount：按照收藏数排序，created：按发布时间排序
 * @param {string} duration all全部时间段内，last-seven-days最近7天内
 * @param {string} tag 标签名称
 * @param {string} gender 性别 male男 female女
 * @param {number} start 偏移量
 */

module.exports = (app)=>{
    app.get('/theme_books',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:'/book-list',
                data:req.query
            },'api')
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}