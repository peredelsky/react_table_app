const mysql = require("mysql2");
const { urlToConnect, s_login, dbName, s_password } = require("./config");

const initData = [
  { date: "2022-07-20", label: "conservative", quantity: 1, distance: 10 },
  { date: "2021-05-08", label: "generation", quantity: 2, distance: 236 },
  { date: "2022-07-21", label: "inspiration", quantity: 1, distance: 15 },
  { date: "2022-06-16", label: "person", quantity: 3, distance: 65 },
  { date: "2015-02-12", label: "closed", quantity: 1, distance: 31 },
  { date: "2017-03-11", label: "jump", quantity: 6, distance: 76 },
  { date: "2022-04-09", label: "financial", quantity: 5, distance: 481257 },
  { date: "2018-01-26", label: "reliable", quantity: 2, distance: 32 },
  { date: "2019-04-18", label: "brown", quantity: 1, distance: 9 },
  { date: "2020-01-29", label: "load", quantity: 2, distance: 464378 },
  { date: "2021-04-06", label: "dog", quantity: 1, distance: 10 },
  { date: "2016-02-18", label: "snake", quantity: 2, distance: 236 },
  { date: "2019-10-24", label: "performer", quantity: 1, distance: 15 },
  { date: "2021-01-29", label: "tension", quantity: 3, distance: 65 },
  { date: "2022-03-21", label: "night", quantity: 1, distance: 31 },
  { date: "2013-08-16", label: "suitcase", quantity: 6, distance: 76 },
  { date: "2022-07-09", label: "bottle", quantity: 5, distance: 481257 },
  { date: "2014-03-26", label: "citizen", quantity: 2, distance: 32 },
  { date: "2010-04-18", label: "reference", quantity: 1, distance: 9 },
  { date: "2022-01-30", label: "respectable", quantity: 2, distance: 464378 },
];

class Database {
  constructor() {
    try {
      this.pool = mysql
        .createPool({
          host: urlToConnect,
          user: s_login,
          database: dbName,
          password: s_password,
        })
        .promise();
    } catch (e) {
      console.log(e);
    }
  }

  async getItems() {
    try {
      const [rows] = await this.pool.execute(`SELECT * FROM ITEMS`);
      return rows;
    } catch (e) {
      console.log(e);
    }
  }
  
  async initItems() {
    const parsedValues = initData
      .map((it) => {
        return `('${it.date}', '${it.label}', ${it.quantity}, ${it.distance})`;
      })
      .join(",");
    await this.pool.execute(
      `INSERT INTO ITEMS (date, label, quantity, distance) VALUES ${parsedValues} ;`
    );
  }
}

exports.Database = new Database();
