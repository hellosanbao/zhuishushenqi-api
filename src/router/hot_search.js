/**
 * 热门搜索
 * @api /hot_search
 * 
 */

module.exports = (app)=>{
    app.get('/hot_search',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:'/book/search-hotwords',
            })
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}