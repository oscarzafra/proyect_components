import "./ExperienceCard.css";

export const ExperienceCard = (experience) => `
<div class="experience-card">
<img src=${experience.image} alt=${experience.title}/>
<div class="header">
<h2>${experience.title}</h2>
<div>
<a href=${experience.caracteristicas}>
<img src="public/icons/LinkedIn_icon.jpeg" alt="Perfil LinkedIn" />
</a>
</div>
</div>

<div class="detail">
<p>${experience.description}</p>
<p class="tech">${experience.tech}</p>
</div>
</div>
`;