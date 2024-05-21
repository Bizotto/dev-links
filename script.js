function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  html.classList.toggle("light");

  const imgSrc = html.classList.contains("light")
    ? "./assets/avatar.png"
    : "./assets/avatar.png";
  img.setAttribute("src", imgSrc);
}
