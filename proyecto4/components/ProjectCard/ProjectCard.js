import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div>
<a href=${project.caracteristicas}>
<img src="public/icons/LinkedIn_icon.jpeg" alt="Perfil LinkedIn" />
</a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech}</p>
</div>
</div>
`;

