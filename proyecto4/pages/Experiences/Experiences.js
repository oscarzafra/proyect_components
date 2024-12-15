import "./Experiences.css";
import { cleanPage } from "../../utils/cleanPage";
import { experiences } from "../../data/experience";
import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard";
import { Divider } from "../../components/Divider/Divider";

export const Experiences = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="experiences">
    <h2>Experiencias Profesionales</h2>
    ${Divider()}
    <div class="experiences-container"></div>
    </section>`;

  const container = document.querySelector(".experiences-container");
  for (const experience of experiences) {
    const figure = document.createElement("figure");
    figure.innerHTML = ExperienceCard(experience);
    container.appendChild(figure);
  }
};