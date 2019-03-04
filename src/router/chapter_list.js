/**
 * 获取章节列表
 * @api /chapter_list
 * @param {number} id 书籍id
 */

 module.exports = (app)=>{
    app.get('/chapter_list',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:`/atoc/${req.query.id}?view=chapters`,
            },'api04ssfv')
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}