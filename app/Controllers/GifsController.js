import GifsService from "../Services/GifsService.js";
import store from "../store.js";

//Private
function _drawGifs() {
  let template = "";
  let gifs = store.State.gifs;
  gifs.forEach(
    g =>
      (template += `<div><video autoplay src="${g.images.looping.mp4}"></video> <button class="btn btn-danger btn-block" onclick="app.gifsController.addGifAsync(id)">ADD</button></div>`)
  );
  document.getElementById("gifs").innerHTML = template;

  console.log(gifs);
}
function _drawMyGifs() {
  let template = "";
  let mygifs = store.State.myGifs;
  mygifs.forEach(
    mg =>
      (template += `<div><video autoplay src="${this.url}"></video> <button class="btn btn-danger btn-block" onclick="app.gifsController.addGifAsync(id)">Delete</button></div>`)
  );
  document.getElementById("mygifs").innerHTML = template;
}

//Public
export default class GifsController {
  constructor() {
    store.subscribe("gifs", _drawGifs);
    store.subscribe("myGifs", _drawMyGifs);
  }
  async findGifsAsync() {
    try {
      await GifsService.findGifsAsync();
    } catch (error) {
      console.error(error);
    }
  }
  async addGifAsync(id) {
    try {
      await GifsService.addGifAsync(id);
    } catch (error) {
      console.error(error);
    }
  }
}
