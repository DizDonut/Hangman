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
                "Nappa",
                "Shenron",
                "Cooler"],
    maxGuesses: 10,
    totalGuesses: 0,
    totalWins: 0,
    totalLosses: 0,
    incorrectGuesses: 0,
    guessedLetter: [],
    answerMask: [],
    validInput: true,
    dupInput: false,
    gameStart: false,

    randomCharacter: function(){
        var guess = document.getElementById("guess-count");
        guess.innerHTML = this.maxGuesses;
        var rand = this.characters[Math.floor(Math.random() * this.characters.length)].toLowerCase();
        console.log(rand);
        for (var i = 0; i < rand.length; i++)
        {
          this.answerMask[i] = "_";
        }
        this.gameStart = true;
        return rand;
    },

    start: function(){
      if(this.gameStart){
        document.getElementById("generate-button").disabled = true;
      }
    },

    restart: function(){

    },

    guess: function(arg){

      var charCode = arg.charCodeAt(0);
      if(charCode <= 122 && charCode >= 97)
      {
        this.validInput = true;
        if(this.guessedLetter.indexOf(arg) === -1){
          var choice = this.guessedLetter.push(arg);
          choice = document.getElementById("letter");
          choice.innerHTML = this.guessedLetter;
          this.totalGuesses++;
          if(this.totalGuesses > this.maxGuesses)
          {
              alert("GAME OVER!");
              document.onkeyup.disabled = true;
          }
        }
      }
      else {
        this.validInput = false;
        alert("Please choose a valid letter [A-Z]");
      }
      console.log(this.guessedLetter);
    },

    compare: function(input,ranWord){
      for (var j = 0; j < ranWord.length; j++)
      {
          if(input === ranWord)
          {
            this.correctGuesses++;
          }
          if(input === ranWord.charAt(j))
          {
            dbz.answerMask[j] = input;
            var solved = document.getElementById("word");
            solved.innerHTML = dbz.answerMask;
            console.log(dbz.answerMask);
          }
      }
    },
  };


  var wordTwo = "";

  window.onload = function(){


      document.getElementById("generate-button").onclick = function()
        {
          wordTwo = dbz.randomCharacter();
          var masked = dbz.answerMask;
          var unSolved = document.getElementById("word");
          unSolved.innerHTML = masked.join(" ");
          dbz.start();
        }

      document.getElementById("clear-button").onclick = function ()
        {
            clear();
        }

        document.onkeyup = function(event){

          var userInput = event.key.toLowerCase();
          dbz.guess(userInput);
          dbz.compare(userInput,wordTwo);
        };
    };

  function clear(){
    wordTwo = [];
    dbz.totalGuesses = 0;
    dbz.gameStart = false;
    dbz.start();
  }
