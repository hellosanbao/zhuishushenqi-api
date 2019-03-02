/**
 * 分类列表接口
 * @api /classify
 * 
 */

 module.exports = (app)=>{
     app.get('/classify',async (req,res)=>{
         try{
             let result = await app.$axios({
                 url:'/category/statics',
             },'b')
             res.send(result.data)
         }catch(err){
            res.send({code:-100,msg:err.message})
         }
     })
 }