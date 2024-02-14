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

function continueGame(){
  // set  -1 generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log(alphabet);
  // set random generated alphabet to the screen show it
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgrounndColorById(alphabet);

}

function play(){
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame()
}