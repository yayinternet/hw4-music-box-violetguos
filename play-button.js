// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor(container) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.container = container;
   //this.createPlayButton();
  }
  // TODO(you): Add methods as necessary.

  createPlayButton(){
    const img = document.createElement('img');
    img.src = 'images/play.png';
    img.style.width = '60px';
    img.style.height = '60px';
    this.container.appendChild(img);
  }

  createPauseButton(){
    const img = document.createElement('img');
    img.src = 'images/pause.png';
    img.style.width = '60px';
    img.style.height = '60px';
    this.container.appendChild(img);
  }

}
