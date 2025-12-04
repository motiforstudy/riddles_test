import input from 'analiza-sync';

import { createPlayer } from './utils/createThePlyayer.js';
import { allRiddles } from './riddles/exportAllRiddles.js';
import { measureSolveTime } from './utils/measureTheSolveTime.js';
import { askRiddle } from './utils/askTheRiddle.js';
import { addSolveTime } from './utils/addTheSolveTime.js';
import { showStats } from './utils/showTheStats.js';


console.log("welcome!!!");
const userName = input("please write your name: ");
const makePlayer = createPlayer(userName);


let askRiddle1 = allRiddles.riddels[0];
let askTheRiddle1 = measureSolveTime(() => askRiddle(askRiddle1));
let addSolveTimeRiddle1 = addSolveTime(makePlayer, askTheRiddle1);

let askRiddle2 = allRiddles.riddels[1];
let askTheRiddle2 = measureSolveTime(() => askRiddle(askRiddle2));
let addSolveTimeRiddle2 = addSolveTime(makePlayer, askTheRiddle2);

let askRiddle3 = allRiddles.riddels[2];
let askTheRiddle3 = measureSolveTime(() => askRiddle(askRiddle3));
let addSolveTimeRiddle3 = addSolveTime(makePlayer, askTheRiddle3);

let askRiddle4 = allRiddles.riddels[3];
let askTheRiddle4 = measureSolveTime(() => askRiddle(askRiddle4));
let addSolveTimeRiddle4 = addSolveTime(makePlayer, askTheRiddle4);

let askRiddle5 = allRiddles.riddels[4];
let askTheRiddle5 = measureSolveTime(() => askRiddle(askRiddle5));
let addSolveTimeRiddle5 = addSolveTime(makePlayer, askTheRiddle5);


showStats(makePlayer);