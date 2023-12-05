const knex = require("knex");
const config = require("./knexfile");
const db = knex(config);

const problem1 = require("./myQueries/matchesPerYear.js");
const problem2 = require("./myQueries/matchesWonPerTeam.js");
const problem3 = require("./myQueries/mostPlayerOfMatch.js");
const problem4 = require("./myQueries/superOver.js");
const problem5 = require("./myQueries/winTossWinMatch.js");
const problem6 = require("./myQueries/highestDismissal.js");
const problem7 = require("./myQueries/extraRunsConcede.js");
const problem8 = require("./myQueries/economicalBowler.js");
const problem9 = require("./myQueries/strikeRate.js");

db.select("*")
  .from("information_schema.tables")
  .where("table_schema", "=", db.raw("DATABASE()"))
  .andWhere("table_name", "=", "matches")
  .then((rows) => {
    if (rows.length == 0) {
      throw new Error("No matches table exists");
    }
    return db
      .select("*")
      .from("information_schema.tables")
      .where("table_schema", "=", db.raw("DATABASE()"))
      .andWhere("table_name", "=", "deliveries");
  })
  .then((rows) => {
    if (rows.length == 0) {
      throw new Error("No matches table exists");
    }
  })
  .then(() => {
    let p1 = problem1(db);
    let p2 = problem2(db);
    let p3 = problem3(db);
    let p4 = problem4(db);
    let p5 = problem5(db);
    let p6 = problem6(db);
    let p7 = problem7(db);
    let p8 = problem8(db);
    let p9=problem9(db);
    let promiseArray = [p1, p2, p3, p4, p5, p6, p7, p8,p9];
    return Promise.all(promiseArray);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    db.destroy();
  });
