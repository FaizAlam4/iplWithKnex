let problem1=(db)=>{
    return db.select('season').count('* as totalMatchesPlayed').from('matches').groupBy('season').orderBy('season');
    }
    
    module.exports=problem1;