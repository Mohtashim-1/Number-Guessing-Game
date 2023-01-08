import inquirer from "inquirer";
type ansType = {
    userGuess: number,
}
const systemGenerateNo = Math.floor(Math.random() * 10);

console.log(systemGenerateNo);
const answer: ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess between 1 to 10",
    }
])

console.log(answer.userGuess);
const { userGuess } = answer;
if (userGuess === systemGenerateNo) {
    console.log("userGuess : ", userGuess, "System Generated:", systemGenerateNo);
    console.log("Your answer is correct \n You Win")
}
else {
    console.log("Please Try Again Better Luck next time")
}