import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Bienvenid@ al curriculum vitae de ↓</p>
    <h1>Óscar Zafra Reche</h1>
    <p>Estudiante de informática, caracterizado por ser una persona con talante asertivo, empático y solidario. Comprometido a crecer en el ámbito laboral, con iniciativa para adquirir experiencia que me permita mejorar de cara a un futuro mi carrera como profesional.
    </p>
    <p>Si quieres conocer mis proyectos relacionados con la informática, haz click debajo y podrás encontrar una variedad de temáticas que te podrán gustar.</p>
    <a href="https://github.com/oscarzafra">GitHub →</a>
    </section>`;
};