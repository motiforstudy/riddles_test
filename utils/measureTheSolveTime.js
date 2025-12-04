


export function measureSolveTime(fn){

    let timeInStartRun = Date.now();
    
    fn();

    let timeAfterRun = Date.now();

    let sumRunTime = (timeAfterRun - timeInStartRun) / 1000;

    return sumRunTime;

};