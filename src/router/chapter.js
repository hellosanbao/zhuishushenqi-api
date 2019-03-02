/**
 * 获取章节详情
 * @api /chapter
 * @param {number} id 章节id
 */

module.exports = (app)=>{
    app.get('/chapter',async (req,res)=>{
        try{
            let result = await app.$axios({
                url:'/chapter/'+encodeURIComponent(`http://vip.zhuishushenqi.com/chapter/${req.query.id}`),
            },'chapter2')
            res.send(result.data.chapter)
        }catch(err){
           res.send({code:-100,msg:err.message})
        }
    })
}