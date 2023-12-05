let problem6=(db)=>{
    return db
    .select('batsman', 'bowler')
    .count(db.raw("case when player_dismissed <> '' and dismissal_kind <> 'runout' then 1 else null end as dismissedFor")).from('deliveries')
    .groupBy('batsman', 'bowler')
    .orderBy('dismissedFor', 'desc')
    .limit(1)
    }
    
    module.exports=problem6;