var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    // port: 3306,
    user: "if0w6wa3lb8mpxr6",
    password: "vb3fc6egvtm2gjzk",
    database: "lt1htnvnd40g6enk"
  });
}
//   host: "127.0.0.1",
//   port: 3306,
//   user: "root",
//   password: "Che99chi01",
//   database: "burgers_db"
// });
// "test":{
//   host: "kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "if0w6wa3lb8mpxr6",
//   password: "vb3fc6egvtm2gjzk",
//   database: "lt1htnvnd40g6enk"
// });
// }
// "production":{
//   host: "	kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "if0w6wa3lb8mpxr6",
//   password: "vb3fc6egvtm2gjzk",
//   database: "	lt1htnvnd40g6enk"
// };
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
