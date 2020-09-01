// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(container) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this._onResponse = this._onResponse.bind(this);
    this._onStreamProcessed = this._onStreamProcessed.bind(this);
    this._onGo = this._onGo.bind(this);
    this._onJsonReady = this._onJsonReady.bind(this);

    this.container = container;
    this.themeGenerator();

    // populate the menu list
    const promise = fetch('https://yayinternet.github.io/hw4-music/songs.json', {mode: 'cors'});
    promise.then(this._onResponse, this._onError).then(this._onStreamProcessed);


    // get the go button
    const goButton = this.container.querySelector("input[value=Go]");
    goButton.addEventListener('click', this._onGo);
  }

  // TODO(you): Add methods as necessary.
  _onStreamProcessed(obj) {
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
  
  _onResponse(response) {
    return response.json();
  }
  
  _onError(error) {
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

    // query for a gif
    const path = "http://api.giphy.com/v1/gifs/search?q=";
    const limit = 25;
    const rating = 'g';
    const api_key = 'dc6zaTOxFJmzC';

    const query = path + encodeURIComponent(queryTheme) 
    + "&api_key=" + encodeURIComponent(api_key) + "&limit=" + limit + "&rating=" + rating;

    const promise = fetch(query);
    promise.then(this._onResponse)
        .then(this._onJsonReady);
    // hide menu screen UI
    this.hide();
  }

  hide(){
    this.container.classList.add('inactive');
    document.dispatchEvent(new CustomEvent('select-menu-done'));
  }

  _onJsonReady(json){
    console.log(json);
  }

}
