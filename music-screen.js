// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(container) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.show = this.show.bind(this);
    this.createGif = this.createGif.bind(this);
    this.container = container;
    document.addEventListener('select-menu-done', this.show);
    
    // music player
    this.audioPlayer = new AudioPlayer();
    this._playEvent = this._playEvent.bind(this);

  }
  // TODO(you): Add methods as necessary.
  
  createImageDiv(){
    const newDiv = document.createElement("div"); 

    newDiv.setAttribute('id', 'background-gif'); // and make sure myclass has some styles in css
    newDiv.style.flexGrow = '1';
    this.container.appendChild(newDiv);
  }

  createFooter(event){
    const newDiv = document.createElement("footer"); 
    newDiv.setAttribute('id', 'play-button'); // and make sure myclass has some styles in css
    
    this.container.appendChild(newDiv);

    const playButtonContainer = this.container.querySelector('#play-button');
    const playButton = new PlayButton(playButtonContainer);
    playButton.createPlayButton();


    playButtonContainer.addEventListener('click', this._playEvent)

    // set song
    this.audioPlayer.setSong(event.detail['music']);
    this.audioPlayer.setKickCallback(this._onKick);
    //this.audioPlayer.play();
  }

  createGif(event){
    // new gif display
    const gifContainer = this.container.querySelector("#background-gif");
    this.gifDisplay = new GifDisplay(gifContainer, event.detail['gif']);
    
  }

  show(event){
    this.createImageDiv();
    this.createFooter(event);
    this.createGif(event);
  }

  _playEvent(event){
    const playButton = event.currentTarget.querySelector('img');
    
    if (playButton.src.includes('images/pause.png')){
      playButton.src = 'images/play.png';
      this.audioPlayer.play();
    }
    else{
      playButton.src = 'images/pause.png';
      this.audioPlayer.pause();
    }
        
  }

  _onKick() {
    console.log('kick!');
  }
}
