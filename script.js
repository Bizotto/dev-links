function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  html.classList.toggle("light");

  const imgSrc = html.classList.contains("light")
    ? "./assets/avatar_light.png"
    : "./assets/avatar_dark.png";
  img.setAttribute("src", imgSrc);
}
