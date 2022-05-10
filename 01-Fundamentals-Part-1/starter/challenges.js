// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

const MarkBMI = weightMark / heightMark ** 2;
const JohnBMI = weightJohn / (heightJohn * heightJohn);
// const MarkBMI = 25;
// const JohnBMI = 25;

const isMarkBMIHigher = MarkBMI > JohnBMI; // true x false
console.log(MarkBMI, JohnBMI, isMarkBMIHigher);


// Coding Challenge #2
if (isMarkBMIHigher) {
	console.log(`Mark's BMI ${Math.floor(MarkBMI)} is higher than John's ${Math.floor(JohnBMI)}.`);
} 
// Equal BMI should be here
else if (MarkBMI == JohnBMI) {
	console.log(`Mark's BMI ${Math.floor(MarkBMI)} is the same as John's ${Math.floor(JohnBMI)}.`)
}
else {
	console.log(`Mark's BMI ${Math.floor(MarkBMI)} is lower than John's ${Math.floor(JohnBMI)}.`);
}


// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest 'average' score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

console.log(" x x x x x x x x x x x x x x x x x x x x x x x x x");

let dolphins =  [96, 108, 89];
let koalas = [88, 91, 110];

let dolphins_bonus = [97, 112, 101];
let koalas_bonus = [109, 95, 123];

let dolphins_bonus2 = [97, 112, 101];
let koalas_bonus2 = [109, 95, 106];


// count avg each of the team
const avg = function countAvg(team) {
	let sum = 0;
	team.forEach((num) => {
		sum += num;
	});
	return Math.floor(sum / team.length);
}


console.log(avg(dolphins));
console.log(avg(koalas));

// Avg of teams
let avg_team1 = avg(dolphins);
let avg_team2 = avg(koalas);

let avg_team1_bon = avg(dolphins_bonus);
let avg_team2_bon = avg(koalas_bonus);

let avg_team1_bon2 = avg(dolphins_bonus2);
let avg_team2_bon2 = avg(koalas_bonus2);


// const compare = function compareTeams(avgTeam1, avgTeam2) {
const compare = (avgTeam1, avgTeam2) => {
	// team needs to be above 100 points
	if (avgTeam1 >= 100 || avgTeam2 >= 100) {
		// team 1
		if (avgTeam1 > avgTeam2) {
		console.log(`Team 1 wins with avg of ${avgTeam1}`);
		} 
		// team2
		else if (avgTeam1 < avgTeam2) {
			console.log(`Team 2 wins with avg of ${avgTeam2}`);
		}
		// draw
		else if (avgTeam1 == avgTeam2) { // or just else
			console.log(`Team1 - ${avgTeam1} - Team2 - ${avgTeam2} have "draw".`)
		}
	}
	else {
		console.log(`No one wins the trophy do not reach required 100 treshold.`);
	}
	return 0;  // good to return something (above 0 is num of error)
};

console.log(compare(avg_team1, avg_team2));
console.log(compare(avg_team1_bon, avg_team2_bon));
console.log(compare(avg_team1_bon2, avg_team2_bon2));


console.log(" x x x x x x x x x x x x x x x x x x x x x x x x x");
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/


const tipSmall = 15;
const tipHigh = 20;

const bill = 275; // 40, 430

								 // true or false
const tip = (bill >= 50 && bill <= 300) ? (bill * tipSmall / 100) : (bill * tipHigh / 100);

console.log(`The bill was ${bill}, the tip was ${tip} and total price was £${bill + tip}.`);



