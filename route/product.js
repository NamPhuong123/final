
const path = require('path')
const connect = require('../database/connect')
let home = async (req, res, next) => {
    console.log(__dirname)
    const query = `select * from public.category`
    let result = await connect.query(query)
    let query2 = `select * from public.product`

    if (req.query.cateid) {
        query2 += ` where category_id = '${req.query.cateid}'`
    }


    
    let result2 = await connect.query(query2)
    console.log(result2)
    res.render(path.join(__dirname, '../view/product.ejs'), { category: result.rows, quantitycate: result.rowCount, product: result2.rows, quantitypro: result2.rowCount, user: req.session.user  })
}

module.exports = home