import store from "../store.js";
import Gif from "../Models/Gif.js";
// @ts-ignore
let _giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs"
});
let _key = "trending?api_key=0HHq1l0hXOigLLAwArnFRkelXIFAx8Oa";

// @ts-ignore
let _sandbox = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/Marcel/gifs",
  timeout: 8000
});
class GifsService {
  async addGifAsync(id) {
    debugger;
    let res = await _sandbox.post("", store.State.myGifs);
    console.log("hello from add mygif", res);
    store.commit("myGifs", new Gif(res.data.data));
  }
  async findGifsAsync() {
    let res = await _giphyApi.get(_key + "&rating=R");
    console.log("This is my API response", res);
    store.commit("gifs", res.data.data);
    console.log("saved in store", store.State.gifs);
  }
}

const service = new GifsService();
export default service;
