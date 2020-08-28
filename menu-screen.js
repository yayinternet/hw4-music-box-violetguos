// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(element) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.onResponse = this.onResponse.bind(this);
    this.onStreamProcessed = this.onStreamProcessed.bind(this);
    // populate the menu list
    const promise = fetch('https://yayinternet.github.io/hw4-music/songs.json', {mode: 'cors'});
    promise.then(this.onResponse, this.onError);
    this.selectElement = element;
    this.predefinedTheme = ['candy', 'charlie brown', 'computers', 'dance', 
      'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
  }
  // TODO(you): Add methods as necessary.
  onStreamProcessed(obj) {
    const songMenuList = [];
    for(let i in obj){
        // create new option element
      let opt = document.createElement('option');
      // create text node to add to option element (opt)
      opt.appendChild( document.createTextNode(obj[i]['artist'] + ": " + obj[i]['title']) );
      // set value property of opt
      opt.value = 'option value'; 
      // add opt to end of select box (sel)
      this.selectElement.appendChild(opt); 
    }
  }
  
  onResponse(response) {
    console.log(response.status);
    response.json().then(this.onStreamProcessed);
  }
  
  onError(error) {
    console.log('Error: ' + error);
  }
  
}
