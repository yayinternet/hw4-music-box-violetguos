// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(container) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.onResponse = this.onResponse.bind(this);
    this.onStreamProcessed = this.onStreamProcessed.bind(this);
    this._onGo = this._onGo.bind(this);

    this.container = container;
    this.themeGenerator();

    // populate the menu list
    const promise = fetch('https://yayinternet.github.io/hw4-music/songs.json', {mode: 'cors'});
    promise.then(this.onResponse, this.onError);


    // get the go button
    const goButton = this.container.querySelector("input[value=Go]");
    goButton.addEventListener('click', this._onGo);
  }

  // TODO(you): Add methods as necessary.
  onStreamProcessed(obj) {
    const selectElement = this.container.querySelector("#song-selector");
    for(let i in obj){
        // create new option element
      let opt = document.createElement('option');
      // create text node to add to option element (opt)
      opt.appendChild( document.createTextNode(obj[i]['artist'] + ": " + obj[i]['title']) );
      // set value property of opt
      opt.value = 'option value'; 
      // add opt to end of select box (sel)
      selectElement.appendChild(opt); 
    }
  }
  
  onResponse(response) {
    response.json().then(this.onStreamProcessed);
  }
  
  onError(error) {
    console.log('Error: ' + error);
  }

  themeGenerator(){
    const themes = ['candy', 'charlie brown', 'computers', 'dance', 
      'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    const index = Math.floor(Math.random() * themes.length);  
    const randomTheme =  themes[index];

    const queryTheme = this.container.querySelector("#query-input");
    queryTheme.placeholder = randomTheme;

  }
  
  _onGo(event){
    //Hide the Menu screen
    //Print out the submitted song value and theme value
    event.preventDefault();
    const selectElement = this.container.querySelector("#song-selector");
    const queryTheme = this.container.querySelector("#query-input");
    console.log(selectElement.options[selectElement.selectedIndex].text);
    console.log(queryTheme.value);
    this.container.classList.add('inactive');
  }
  
}
