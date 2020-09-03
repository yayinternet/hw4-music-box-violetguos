// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(container, gifUrlArr) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.container = container;
    this.gifUrlArr = gifUrlArr;
    this.nextGif = this.bufferNext();
  }
  // TODO(you): Add methods as necessary.

  changeGif(gifUrl){

    const bufferGifContainer = document.querySelector("#buffer-gif");
    if(this.nextGif && bufferGifContainer.style.backgroundImage != 'none'){
      const gifContainer = document.querySelector("#background-gif");
      
      gifContainer.style.backgroundImage = bufferGifContainer.style.backgroundImage;
      bufferGifContainer.style.backgroundImage = 'none';
    }
    else
      this.container.style.backgroundImage = 'url('+gifUrl+')';

    this.nextGif = this.bufferNext();
  }

  chooseRandom(){
     // get current gif
     const gifContainer = document.querySelector("#background-gif");
     const currentGifUrl = gifContainer.style.backgroundImage;
     
     // choose a random song fron array of gifs
     let randIndex;  
 
     do{
       randIndex  = Math.floor(Math.random() * this.gifUrlArr.length);
 
     }while(currentGifUrl.includes(this.gifUrlArr[randIndex]));
 
    return  this.gifUrlArr[randIndex];
  }

  bufferNext(){
    const nextUrl = this.chooseRandom();
    //const document.querySelector("#buffer-gif");
    const bufferGifContainer = document.querySelector("#buffer-gif");
    bufferGifContainer.style.backgroundImage = 'url('+nextUrl+')';
    bufferGifContainer.style.zIndex = '0';

  }
}
