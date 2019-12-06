export default class Gif {
  constructor(data) {
    this.url = data.image_mp4_url || data.url;
  }

  get Template() {
    return this.title;
  }
}
