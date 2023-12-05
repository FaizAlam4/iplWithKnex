let problem5 = (db) => {
  return db
    .select("toss_winner")
    .count("* as matchWins")
    .from("matches")
    .where("toss_winner", "=", db.raw("winner"))
    .groupBy("toss_winner")
    .orderBy("matchWins");
};

module.exports = problem5;
