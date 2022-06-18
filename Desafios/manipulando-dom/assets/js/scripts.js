const button = document.getElementById("mode-selector");
const title = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
const darkModeClass = "dark-mode";

function changeMode() {
  changeClasses();
  changeText();
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  title.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";
  if (body.classList.contains(darkModeClass)) {
    button.innerText = lightMode;
    title.innerHTML = darkMode + " ON";
    return;
  }

  button.innerText = darkMode;
  title.innerHTML = lightMode + " ON";
}

button.addEventListener("click", changeMode);
