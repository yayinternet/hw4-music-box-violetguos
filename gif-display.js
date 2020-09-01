// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(container, gifUrl) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.container = container;
    console.log("gif", gifUrl);
    this.container.style.backgroundImage = 'url('+gifUrl+')';
  }
  // TODO(you): Add methods as necessary.
}
