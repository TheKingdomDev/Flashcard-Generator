//flashcard application

//init

var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

//store new cards in decks

var basicFlashCardDeck = [];
var clozeFlashCardDeck = [];

//set up a start function to ask the user what they want to do
//options will be start, create basic card, create cloze card, and quiz or display

//start function
    //welcome the user
    //start inquirer and prompt user for input
    //take input and call cooresponding function


var start = function() {
    console.log("Welcome to the flashcard application");
    inquirer.prompt(
        {
            type: "list",
            name: "selectType",
            message: "Select one of the following choices",
            paginated: true,
            choices: ["basicCard", "clozeCard", "quiz"]
    }).then(function(answer){
        console.log(answer);
        if(answer.selectType === "basicCard") {
            createbasicCard();
        } else if(answer.selectType === "clozeCard") {
            console.log("thank you for choosing a clozeCard");
            createClozeCard();
        } else {
            console.log("Let's start the quiz!")
        }
    });
}

//basic card function
    //welcome the user to the basic card creation
    //prompt the user for the input to create a new basic card
    //text for front
    //text for back
    //push the card to the deck

var createbasicCard = function() {
    console.log("Let's create a new Basic Card!");
    console.log("=====================");
    

    inquirer.prompt([
    {
        type: "input",
        message: "What is the question on the front?",
        name: "front"

    },
    {
        type: "input",
        message: "What is the answer on the back?",
        name: "back"
    }
    
    
    ]).then(function(answer) {
        
        var bCard = new BasicCard(answer.front, answer.back);
            console.log("Front of the Basic Card: " + bCard.front);
            console.log("Back of the Basic Card: " + bCard.back);
            basicFlashCardDeck.push(bCard);
    });
}

//cloze card function
    //welcome the user to the cloze card creation
    //prompt the user for the unput to create a new cloze card
    //full text
    //cloze word
    //call the partial text function from the constructor to create the cloze card

var createClozeCard = function() {
    console.log("Let's create a new Cloze Card!");
    console.log("=====================");

    inquirer.prompt([
    {
        type: "input",
        message: "What is the full text for the Cloze Card?",
        name: "full"       
    },
    {
        type: "input",
        message: "What is the Cloze Word?",
        name: "clozeWord"
    }
    ]).then(function(userInput) {
        var cCard = new ClozeCard(userInput.full, userInput.clozeWord);
        if(cCard.partText() == -1) {
            console.log("Provided cloze was invalid. Please try again.");
        } else {
            console.log("Full text of Cloze Card: " + cCard.fullText);
            console.log("Cloze word of the Cloze Card: " + cCard.cloze);
            console.log("Partial text of card: " + cCard.partText());
            clozeFlashCardDeck.push(cCard);
        }
    });
}

start();