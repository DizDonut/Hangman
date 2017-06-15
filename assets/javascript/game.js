/*
  Dragon Ball Z Hangman Game - by Mike Bechtel
  The purpose of this program is to prompt the user to
  enter letters in an attempt to correctly guess the DBZ
  character.  Users will get 10 guesses: if user guesses
  all letters correctly, the program will register a win;
  if not, the program will register a loss.  The program will
  track the number of wins/losses and display them on the
  html page
*/

//declare object
  var dbz = {
    characters: ["Goku",
                "Vegeta",
                "Krillin",
                "Freeza",
                "Gohan",
                "Piccolo",
                "Cell",
                "Android",
                "MajinBoo",
                "Bulma",
                "Trunks",
                "ChiChi",
                "Yamcha",
                "Choazu",
                "Goten",
                "Raditz",
                "Yajirobe",
                "Kami",
                "Bobbidi",
                "Captain Ginyu",
                "Nappa",
                "Shenron",
                "Cooler"],
    maxGuesses: 10,
    totalGuesses: 0,
    totalWins: 0,
    totalLosses: 0,

    randomCharacter: function(){
        var rand = this.characters[Math.floor(Math.random() * this.characters.length)];
        console.log(rand);
        rand = rand.replace(/\s+/g,"_");
        return rand;
    },

    showLetter: function(letter){
      console.log(letter);
      var input = document.getElementById("letter");
      input.innerHTML = letter;

    },

  };

  function compare(input,ranWord){

    for (var i = 0; i < ranWord.length; i++) {
      if(input === ranWord.charAt(i))
      {
        var correct = console.log("Correct!");
        return correct;
      }
      else{
        var incorrect = console.log("Incorrect!");
        return incorrect;
      }
    }
  }

  var wordTwo = "";

  window.onload = function(){

      wordTwo = dbz.randomCharacter();
      wordTwo = wordTwo.toLowerCase();
      document.getElementById("button").onclick = function()
        {
          document.getElementById("word").innerHTML = wordTwo;
        }
      };

  document.onkeyup = function(event){

      var userInput = event.key.toLowerCase();
      dbz.showLetter(userInput);
      compare(userInput,wordTwo);
    };
