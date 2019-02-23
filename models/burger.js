const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(val, cb) {
        orm.insertOne("burgers", "burger_name", val, function(res) {
            cb(res);
        });
    },
    update: function(val1, val2, cb) {
        orm.updateOne("burgers", "devoured", val1, "id", val2, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;