let problem3 = (db) => {
  const subquery = db
    .select("season", "player_of_match")
    .count("* as match_count")
    .from("matches")
    .groupBy("season", "player_of_match")
    .orderBy("match_count", "desc")
    .as("POMCount");

  return db(subquery)
    .select("season", "player_of_match", "match_count")
    .where("myRank", 1);
};

module.exports = problem3;
