/**
 * 热门推荐
 * @api /hot_recommend
 * 
 */

module.exports = (app)=>{
    app.get('/hot_recommend',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:'book/hot-word',
            })
            res.send(result.data)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}