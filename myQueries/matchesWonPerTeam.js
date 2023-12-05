let problem2 = (db) => {
  return db.select('season', 'winner')
  .count('* as wins').from('matches')
  .where('result', 'like', 'normal')
  .groupBy('season', 'winner')
  .orderBy('season')};

module.exports = problem2;
