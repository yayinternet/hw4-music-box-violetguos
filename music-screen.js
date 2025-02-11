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
    this._onKick = this._onKick.bind(this);
    this.createFooter = this.createFooter.bind(this);

    this.container = container;
    document.addEventListener('select-menu-done', this.show);
    
    // music player
    this.audioPlayer = new AudioPlayer();

    this._playEvent = this._playEvent.bind(this);

  }
  // TODO(you): Add methods as necessary.


  createFooter(event){
    const newDiv = document.createElement("footer"); 
    newDiv.setAttribute('id', 'play-button'); // and make sure myclass has some styles in css
    
    this.container.appendChild(newDiv);

    const playButtonContainer = this.container.querySelector('#play-button');
    this.playButton = new PlayButton(playButtonContainer);
    this.playButton.createPlayButton();

    playButtonContainer.addEventListener('click', this._playEvent)

    // set song
    this.audioPlayer.setSong(event.detail['music']);
    this.audioPlayer.setKickCallback(this._onKick);
    this.audioPlayer.play();
  }

  createGif(event){
    // new gif display
    const gifContainer = this.container.querySelector("#background-gif");
    this.gifDisplay = new GifDisplay(gifContainer, event.detail['gif']);
    this.gifDisplay.changeGif(event.detail['gif'][0]);

    console.log(gifContainer.style);
    
  }

  show(event){
    this.createFooter(event);
    this.createGif(event);
  }

  _playEvent(event){
    const playButtonImg = event.currentTarget.querySelector('img');
    this.playButton.toggle(playButtonImg);
  }

  _onKick() {
    this.gifDisplay.changeGif(this.gifDisplay.chooseRandom());
    
  }
}
