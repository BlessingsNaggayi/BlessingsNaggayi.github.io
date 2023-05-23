const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "naggayi",
  password: "bless8me",
  database: "entries",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Database is connected!");

  exports.getMeaning = (req, res) => {
    const { keyword } = req.query;
    con.query(
      `SElECT * FROM entries where word LIKE '${keyword}'`,
      (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
        res.end();
      }
    );
  };
});
