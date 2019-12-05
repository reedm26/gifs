import GifsService from "../Services/GifsService.js";
import store from "../store.js";

//Private
function _drawGifs() {
  let gifs = store.State.gifs;
  console.log(gifs);
}

//Public
export default class GifsController {
  constructor() {
    store.subscribe("gifs", _drawGifs);
  }
}
