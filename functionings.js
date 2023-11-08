const dictionary = {
    "yes":{
        partOfSpeech: "noun",
        definitions: ["Used to give an affirmative response.", "Used as a response to someone addressing one or otherwise trying to attract one's attention."]
    },
    "panacea":{
        partOfSpeech: "noun",
        definitions: ["An answer or solution for all problems or difficulties."]
    },
    "concatenation":{
        partOfSpeech: "noun",
        definitions: ["A series of interconnected or interdependent things or events."]
    },
    "saw":{
        partOfSpeech: "verb",
        definitions: ["Cut (something) using a saw.", "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument"]
    },
    "found":{
        partOfSpeech: "adjective",
        definitions: ["Having been discovered by chance or unexpectedly.", "(of a ship) Equipped; Supplied."]
    },
    "crane":{
        partOfSpeech: "verb",
        definitions: ["Stretch out one's body or neck in order to see something.", "Move (a heavy object) with a crane."]
    },
    "minute":{
        partOfSpeech: "noun",
        definitions: ["A period of time equal to sixty seconds or a sixtieth of an hour.", "A sixtieth of a degree of angular measurement (symbol: ʹ)"]
    },
    "grotesque":{
        partOfSpeech: "adjective",
        definitions: ["Comically or repulsively ugly or distorted."]
    },
    "label":{
        partOfSpeech: "noun",
        definitions: ["A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
    },
    "debacle":{
        partOfSpeech: "noun",
        definitions: ["A sudden and ignominious failure; a fiasco."]
    }
}

const userWordInput = document.getElementById("userWordInput");
let searchForWord = document.getElementById("wordSearch");
let wordInfoContainer = document.getElementById("wordInfoContainer");
let displaying = false;
// var definedWords = ["yes", "panacea", "concatenation", "saw", "found", "crane", "minute", "grotesque", "label", "debacle"];

// Searching for the word the user input in the userWordInput.
function findWord () {
    let searchedWord = userWordInput.value.toLowerCase();
    console.log("hi");
    if(dictionary.hasOwnProperty(searchedWord)){
        let wordObject = dictionary[searchedWord];
        console.log("This word is in the dictionary!");
        let wordType = document.createElement("p");
        let postedResults = document.createElement("b");
        postedResults.innerText = searchedWord;
        wordType.innerText = "Part of Speech: " + wordObject.partOfSpeech;
        if (wordInfoContainer.innerText = "") {
            wordType.classList.add("wordInfo");
            wordDefinitions.classList.add("wordInfo");
            displaying = true;
            }
        wordInfoContainer.appendChild(postedResults);
        wordInfoContainer.appendChild(wordType);
        for(let i = 0; i < wordObject.definitions.length; i++){
            let wordDefinitions = document.createElement("p");
            wordDefinitions.innerText = (i + 1) + " " + wordObject.definitions[i];
            wordInfoContainer.appendChild(wordDefinitions);
        }
    } else {
        if (displaying){
            wordInfoContainer.innerText = "";
            displaying = false;
        }
        if (wordInfoContainer.innerText = "") {
            displaying = true;
        }
        let postedResults = document.createElement("b");
        wordInfoContainer.appendChild(postedResults);
        let randomResponse = Math.floor((Math.random()* 10) +1);
        if (randomResponse === 10) {
            postedResults.innerText = "Please type in a word I know.";
        } else if (randomResponse === 9) {
            postedResults.innerText = "Bring me the milk, then I'll tell you.";
        } else if (randomResponse === 8) {
            postedResults.innerText = "BRING. ME. THE. CHEESE.";
        } else if (randomResponse === 7) {
            postedResults.innerText = "Hey, you know I don't know what you are asking for, Right?";
        } else if (randomResponse === 6) {
            postedResults.innerText = "I'm still waiting for your word to be typed correct, y'know?";
        } else if (randomResponse === 5){
            postedResults.innerText = "Sorry, that word isn't here.";
        } else if (randomResponse === 4) {
            postedResults.innerText = "Please search for a different word.";
        } else if (randomResponse === 3) {
            postedResults.innerText = "Is that even a word?";
        } else if (randomResponse === 2) {
            postedResults.innerText = "I believe a different dictionary has that word.";
        } else{
            postedResults.innerText = "What did you even type in?";
        }
        console.log(randomResponse);
    }

    /*
    for(let i = 0; i < dictionary.length; i++){
        if (searchedWord.toLowerCase() === dictionary[i]) {
            console.log("Word Found. The word you are looking for is " + searchedWord);
            // wordInfo(searchedWord);
        } else {
            // wordInfo(searchedWord);
        }
    }
    */
}

// Searches for the definitions and type of word the searched word is for those definitions.
/*
function wordInfo(wordFound) {
    if (wordFound.toLowerCase() === "yes") {
        postedResults.innerText = "Yes";
        wordInfoContainer.createElement("p");
        console.log("The word you are searching for is known as " + wordFound);
    } else if (wordFound.toLowerCase() === "panacea") {
        postedResults.innerText = "Panacea";
        console.log("The word you are searching for is known as " + wordFound);
    } else if (wordFound.toLowerCase() === "concatenation") {
        postedResults.innerText = "Concatenation";
        console.log("The word you are searching for is known as " + wordFound);
    } else if (wordFound.toLowerCase() === "saw") {
        postedResults.innerText = "Saw";
        console.log("The word you are searching for is known as " + wordFound);
    } else if (wordFound.toLowerCase() === "found") {
        postedResults.innerText = "Found";
        console.log("The word you are searching for is known as " + wordFound);
    } else if (wordFound.toLowerCase() === "crane") {
        postedResults.innerText = "Crane";
        console.log("The word you are searching for is known as " + wordFound);
    } else if (wordFound.toLowerCase() === "minute") {
        postedResults.innerText = "Minute";
        console.log("The word you are searching for is known as " + wordFound);
    } else if (wordFound.toLowerCase() === "grotesque") {
        postedResults.innerText = "Grotesque";
        console.log("The word you are searching for is known as " + wordFound);
    } else if (wordFound.toLowerCase() === "label") {
        postedResults.innerText = "Label";
        console.log("The word you are searching for is known as " + wordFound);
    } else if (wordFound.toLowerCase() === "debacle") {
        postedResults.innerText = "Debacle";
        console.log("The word you are searching for is known as " + wordFound);
    } else {
        let randomResponse = Math.floor((Math.random()* 5) +1);
        if (randomResponse === 5){
            postedResults.innerText = "Sorry, that word isn't here.";
        } else if (randomResponse === 4) {
            postedResults.innerText = "Please search for a different word.";
        } else if (randomResponse === 3) {
            postedResults.innerText = "Is that even a word?";
        } else if (randomResponse === 2) {
            postedResults.innerText = "I believe a different dictionary has that word";
        } else{
            postedResults.innerText = "What did you even type in?";
        }
        console.log("Word isn't found here, Sorry :(");
    }
    userWordInput.innerText = "Type Here. . .";
}
*/

searchForWord.addEventListener("click", findWord);