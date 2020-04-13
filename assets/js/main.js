const pianoKey = document.querySelector("ul");

pianoKey.addEventListener("click", ({ target }) => {
  const audio = document.getElementById(target.dataset.note);
  audio.play();
});
