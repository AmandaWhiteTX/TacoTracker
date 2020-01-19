// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
//"taco" is the table name
var taco = {
  all: function(cb) {
    orm.all("tacos", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("tacos", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("tacos", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("tacos", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = taco;
