/**
 * 搜索结果
 * @api /search_result
 * @param {string} keyword 搜索关键字
 * @param {number} start 偏移量
 * @param {number} limit 分页长度
 * @param {string} type 类型 book_list：书单  pic：漫画，不传则搜索书籍
 * @param {string} cat 搜索按分类是筛选  可选
 * @param {string} tag 搜索按标签是筛选  可选
 * @param {boolean} isserial true：连载，false：完结，不传搜全部
 * @param {number} price 2：vip， 3：付费   可选
 * @param {number} wordCount 1：20万字以内，2：20万字~50万字。。。1,2：多选，20万字和20-50万字  可选
 * 
 */

module.exports = (app) => {
    app.get('/search_result', async (req, res) => {
        let result, sendData = {}, searchData = {}

        try {
            if (req.query.type == 'book_list') {
                result = await app.$axios({
                    url: '/book-list/ugcbooklist-search',
                    data: {
                        query: req.query.keyword
                    }
                })
                sendData = result.data
            } else {
                //漫画参数
                if (req.query.type == 'pic') {
                    searchData = {
                        'model.query': req.query.keyword,
                        'model.start': req.query.start,
                        'model.limit': req.query.limit,
                        'model.contentType2': 2
                    }
                } else {
                    searchData = {
                        'model.query': req.query.keyword,
                        'model.start': req.query.start,
                        'model.limit': req.query.limit,
                        'model.contentType2': 1
                    }
                    req.query.cat && (searchData['model.cat'] = req.query.cat)
                    req.query.tag && (searchData['model.tag'] = req.query.tag)
                    req.query.isserial && (searchData['model.isserial'] = req.query.isserial)
                    req.query.price && (searchData['model.price'] = req.query.price)
                    req.query.wordCount && (searchData['model.wordCount'] = req.query.wordCount)
                }
                console.log(searchData)
                result = await app.$axios([
                    {
                        url: '/books/fuzzy-search-category',
                        data: {
                            'model.query': req.query.keyword
                        }
                    },
                    {
                        url: '/books/fuzzy-search-tags',
                        data: {
                            'model.query': req.query.keyword
                        }
                    },
                    {
                        url: '/books/fuzzy-search',
                        data: searchData
                    }
                ], 'b')
                sendData.books = result[2].data.books
                sendData.cats = result[0].data.list
                sendData.tags = result[1].data.list
            }
            res.send(sendData)
        } catch (err) {
            res.send({ code: -100, msg: err.message })
        }
    })
}