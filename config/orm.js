const connection = require("./connection.js");

const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = `SELECT * FROM  ${tableInput}`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

  },
  insertOne: function (table, col, val, cb) {
    const queryString = `INSERT INTO ${table} (${col}) VALUES ('${val}')`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (table, col1, val1, col2, val2, cb) {
    const queryString = `UPDATE ${table} SET ${col1} = ${val1} WHERE ${col2} = ${val2}`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;