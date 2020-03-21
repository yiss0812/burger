var connection = require("../config/conection");

function objToSql(ob) {
    var arr = [];
  
    
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {   
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
         arr.push(key + "=" + value);
      }
    }
    return arr.toString();
};

var orm = {
    selectAll: function(tableInput, cb){
        var querystring = "SELECT * FROM ??";
        connection.query(querystring,[tableInput], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insetOne: function(tableInput,tableColumn, tableValue,cb){
        var querystring = "INSERRT INTO ?? (??) VALUES(?)";
        connection.query(querystring,[tableInput, tableColumn, tableValue], function(err, res) {
            if (err) throwerr;
            cb(res);
        });
    },
    updateOne:function (table,objColVal,conditon, cb) {
        var querystring = "UPDATE " + table + "SET" + objToSql(objColVal) + "WHERE" + condition;
        connection.query(querystring,function(err,res){
            if (err) throw err;
            cb (res);
        });
       
    }

};
module.exports = orm;