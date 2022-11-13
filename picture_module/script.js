function search() {
  async function init() {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=8pGsh45WZS5lh8gNO0bYFRGE5ArnEMOe&q=' +
        search1.value
    );
    const body = await response.json();
    console.log(body);
    const imgTag = document.querySelector('.myImg');
    imgTag.src = body.data[0].images.original.url;
  }
  init();
}
