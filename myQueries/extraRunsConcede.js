let problem7=(db)=>{
    return db
    .select('season', 'bowling_team')
    .sum('extra_runs as runConceded').from('matches').join('deliveries', 'matches.id', '=', 'deliveries.match_id')
    .where('season', 2016)
    .groupBy('bowling_team')
    }
    
    module.exports=problem7;