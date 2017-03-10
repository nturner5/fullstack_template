var app = require('./index');
 var db = app.get('db');
module.exports = {

//refer to w6/d3/massive-sql-products

readAll: function(req, res){
    db.readProducts(function(err, prod){
        console.log(err, 'all products');
        res.send(prod)
    })
}

}