// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor(container) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.container = container;


  }
  // TODO(you): Add methods as necessary.

  createPlayButton(){
    const img = document.createElement('img');
    img.src = 'images/play.png';
    img.style.width = '60px';
    img.style.height = '60px';
    img.addEventListener('click', this._playEvent);
    this.container.appendChild(img);
  }

  toggle(playButton){
    
    if (playButton.src.includes('images/pause.png')){
      playButton.src = 'images/play.png';
      console.log(app);
      app.music.audioPlayer.play();
    }
    else{
      playButton.src = 'images/pause.png';
      app.music.audioPlayer.play();
    }
        
  }

  
  
}
