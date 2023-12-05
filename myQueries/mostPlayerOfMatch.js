let problem3 = (db) => {
  const subquery = db
    .select("season", "player_of_match")
    .count("* as match_count")
    .rank("myRank", db.raw(`partition by season order by count(*) desc`))
    .from("matches")
    .groupBy("season", "player_of_match");

  return db
    .with("POMCount", subquery)
    .select("season", "player_of_match", "match_count")
    .from("POMCount")
    .where("myRank", 1);
};

module.exports = problem3;
