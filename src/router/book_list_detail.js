/**
 * 分类列表接口
 * @api /book_list_detail
 * @param {staring} id 书单id
 */

module.exports = (app)=>{
    app.get('/book_list_detail',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:`/book-list/${req.query.id}`,
            },'api')
            res.send(result.data.bookList)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}