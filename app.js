// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    const menuContainer = document.querySelector("#menu");
    this.menu = new MenuScreen(menuContainer);
    const musicContainer = document.querySelector("#music")

    this.music = new MusicScreen(musicContainer);

  }
  // TODO(you): Add methods as necessary.
}
