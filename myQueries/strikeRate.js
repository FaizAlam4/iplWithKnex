let problem9=(db)=>{
    let subquery=db.select('season','batsman','strikeRate').rank('rnk',db.raw('partition by season order by strikeRate')).from('matches').join();

    return db.with('myTable',subquery).select('*').from('myTable').where('rnk',1);
    
    db.select('season').count('* as totalMatchesPlayed').from('matches').groupBy('season').orderBy('season');
    }
    
    module.exports=problem9;