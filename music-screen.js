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
    this.container = container;
    document.addEventListener('select-menu-done', this.show);


  }
  // TODO(you): Add methods as necessary.
  
  createImageDiv(){
    const newDiv = document.createElement("div"); 

    newDiv.setAttribute('id', 'background-gif'); // and make sure myclass has some styles in css
    newDiv.style.flexGrow = '1';
    this.container.appendChild(newDiv);
  }

  createFooter(){
    const newDiv = document.createElement("footer"); 
    newDiv.setAttribute('id', 'play-button'); // and make sure myclass has some styles in css
    
    this.container.appendChild(newDiv);

    const playButtonContainer = this.container.querySelector('#play-button');
    this.playButton = new PlayButton(playButtonContainer);
  }

  createGif(){
    // new gif display
    const gifContainer = this.container.querySelector("#background-gif");
    this.gifDisplay = new GifDisplay(gifContainer);
  }

  show(){
    this.createImageDiv();
    this.createFooter();
    this.createGif();
  }
}
