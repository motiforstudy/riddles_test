

export function showStats(player){

    let allTime = 0;

    for (let time of player.times){
        
        allTime += time;

    };

    let averageTime = allTime / player.times.length
    console.log(`the total time is: ${allTime} seconds`);
    console.log(`the average time per riddle is: ${averageTime} seconds`);
};