import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => `
<nav>
<img src="public/icons/Foto Óscar Zafra Reche.jpg">
<h2>Currículum Vitae</h2>

<ul>
    <li>
        <a href="#" id="homelink">Inicio</a>
    </li>
    <li>
        <a href="#" id="projectslink">Educación</a>
    </li>
    <li>
        <a href="#" id="experiencelink">Experiencia</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>  
</ul>
</nav>
`;