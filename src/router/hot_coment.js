/**
 * 获取热门评论
 * @api /hot_coment
 * @param {number} id 书籍id
 */

module.exports = (app)=>{
    app.get('/hot_coment',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:"/post/review/best-by-book",
                data:{book:req.query.id}
            },'api04ssfv')
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}