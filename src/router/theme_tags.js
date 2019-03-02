/**
 * 分类列表接口
 * @api /theme_tags
 * 
 */

module.exports = (app)=>{
    app.get('/theme_tags',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:'/book-list/tagType',
            },'api')
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}