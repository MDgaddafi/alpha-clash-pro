// function play(){
//   // Hide the home screen
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
//   // console.log(playGroundSection.classList);
//   // Show the Play ground
//   const playGroundSection = document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden');
//   // console.log(playGroundSection.classList);
// }

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;

  console.log('Player pressed', playerPressed);

  //  stop the game
  if (playerPressed === 'Escape') {
    gameOver();
  }
  // get the expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log('you get a point');
    const currentScore = getTextElementValueById('current-score');
    const updateScore = currentScore + 1;
    setTextElementValueById('current-score', updateScore);



    //  update score: 
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);




    const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;


    // Start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log('You missed');
    const currentLife = getTextElementValueById('current-life');
    const updateLife = currentLife - 1;
    setTextElementValueById('current-life', updateLife);

    if (updateLife === 0) {
      gameOver();
    }

    // stap 1 current life number
    //   const currentLifeElement = document.getElementById('current-life');
    //   const currentLifeText = currentLifeElement.innerText;
    //   const currentLife = parseInt(currentLifeText);

    // // stap 2 reduce the life count
    // const newLife = currentLife - 1;
    // // step 3 display the update life count
    // currentLifeElement.innerText = newLife;
  }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
  // set  -1 generate a random alphabet
  const alphabet = getARandomAlphabet();
  // console.log(alphabet);
  // set random generated alphabet to the screen show it
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgrounndColorById(alphabet);

}

function play() {
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');
  continueGame()
  //  reset score

  setTextElementValueById('current-life', 5);
  setTextElementValueById('current-score', 0);
}

function gameOver() {
  hideElementById('play-ground');
  showElementById('final-score');
  //  update score
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score', lastScore);
  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet)
}