let problem4 = (db) => {
  return db
    .select("bowler")
    .select(
      db.raw(
        "(sum(total_runs - legbye_runs - bye_runs) * 6) / count(case when wide_runs = 0 and noball_runs = 0 then 1 else null end) as economy"
      )
    )
    .from('deliveries')
    .whereNot("is_super_over", 0)
    .groupBy("bowler")
    .orderBy("economy")
    .limit(1);
};

module.exports = problem4;
