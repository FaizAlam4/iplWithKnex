let problem8 = (db) => {
  return db
    .select("bowler")
    .select(
      db.raw(
        "(sum(total_runs - legbye_runs - bye_runs) * 6 / count(case when wide_runs = 0 and noball_runs = 0 then 1 else null end)) as economy"
      )
    )
    .from("deliveries")
    .whereIn(
      "match_id",
      db.select("id").from("matches").where("season", "=", "2015")
    )
    .groupBy("bowler")
    .orderBy("economy", "asc")
    .limit(10);
};

module.exports = problem8;
