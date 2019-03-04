/**
 * 获取书籍详情
 * @api /book
 * @param {number} id 书籍id
 */

module.exports = (app)=>{
    app.get('/book',async (req,res)=>{
        try{
            let result = await app.$axios([
                { url:`/book/${req.query.id}` },
                { url:`/book/${req.query.id}/price-info` },
                { url:`/book/${req.query.id}/recommend` },
                { url:`/book-list/${req.query.id}/recommend` }
            ],'api04ssfv')
            let chapterLast = await app.$axios({
                url:'/atoc',
                data:{
                    view:'summary',
                    book:req.query.id
                }
            })
            const resultData = {...result[0].data,...result[1].data.doc}
            resultData.books = result[2].data.books.splice(0,8)
            resultData.book_list = result[3].data.booklists.splice(0,2)
            resultData.chapterLast = chapterLast.data//[1] || chapterLast.data[0]
            res.send(resultData)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}