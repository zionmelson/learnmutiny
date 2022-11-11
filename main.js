//import { storing, getting } from "./db";

const app = (document.querySelector("#app").innerHTML = `
  <div>
    <img src="./assets/trio.png" class="background" />
    <div class="main">
      <video class="video" width="320" height="240" autoplay>
      </video>
      <h1 class="title">learnmutiny.</h1>
      <button id="next">learn.</button>
    <div>
  </div>
`);

const nextButton = document.querySelector("#next");
const video = document.querySelector(".video");

let played = true;

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (played) {
    showVideo();
    //storing(video.src);
    played = false;
    nextButton.className = "#next-clicked";
  }
});

function showVideo() {
  video.setAttribute("src", "./assets/learn.mp4");
  video.load();
  video.play();
}
