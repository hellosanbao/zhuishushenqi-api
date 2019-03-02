/**
 * 获取全部评论
 * @api /all_coment
 * @param {number} id 书籍id
 * @param {number} start 偏移量
 * @param {number} limit 分页长度
 */

module.exports = (app)=>{
    app.get('/all_coment',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:"/post/review/by-book",
                data:{
                    book:req.query.id,
                    start:req.query.start,
                    limit:req.query.limit,
                }
            },'api04ssfv')
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}