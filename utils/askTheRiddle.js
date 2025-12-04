import input from 'analiza-sync';


export function askRiddle(riddleObj){

    let notGoodAnswer = true

    console.log(`the riddle name: ${riddleObj.name}`);
    console.log(`the task description: ${riddleObj.taskDescription}`);

    while (notGoodAnswer){

        let userAnswer = input("answer: ");

        if (userAnswer === riddleObj.correctAnswer){
            console.log("Correct!");
            notGoodAnswer = false
        } else {

            console.log("the anser is incorrect, please try again: ");
        };

    };

};