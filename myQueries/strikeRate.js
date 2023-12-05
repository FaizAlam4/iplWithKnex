let problem9=(db)=>{
    let subquery=db.select('season','batsman','strikeRate').rank('rnk',db.raw('partition by season order by strikeRate desc')).from('matches').join(db.raw(`(select match_id, batsman,
        ((sum(batsman_runs)*100)/count(case when wide_runs=0 AND noball_runs=0 then 1 else null end)) as strikeRate
      from deliveries  where batsman like 'DA Warner'
      group by match_id, batsman) as B`),'id','=','match_id');

    return db.with('myTable',subquery).select('*').from('myTable').where('rnk',1);
    
    }
    
    module.exports=problem9;