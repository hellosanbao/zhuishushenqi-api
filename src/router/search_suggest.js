/**
 * 搜索联想词
 * @api /search_suggest
 * 
 */

module.exports = (app)=>{
    app.get('/search_suggest',async (req,res)=>{
        console.log(req.query)
        try{
            let result = await app.$axios({
                url:'/books/auto-suggest',
                data:{
                    query:req.query.keyword
                }
            },'b')
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}