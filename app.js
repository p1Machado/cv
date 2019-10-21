import resumeData from "./resumeData.json";

var experienceSectionTemplate = document.querySelector("#experienceSectionTemplate");

var professionalExperiencesSection = document.querySelector("#professionalExperiencesSection");

resumeData.professionalExperiences.forEach((xp) => {
  let xpTemplate = document.importNode(experienceSectionTemplate.content, true);

  fillExperienceTemplate(xpTemplate, xp);

  professionalExperiencesSection.appendChild(xpTemplate, true);
});

var educationExperiencesSection = document.querySelector("#educationExperiencesSection");

resumeData.educationExperiences.forEach((xp) => {
  let xpTemplate = document.importNode(experienceSectionTemplate.content, true);

  fillExperienceTemplate(xpTemplate, xp);

  educationExperiencesSection.appendChild(xpTemplate, true);
});

function fillExperienceTemplate(xpTemplate, xp) {
  xpTemplate.getElementById("companyName").textContent = xp.companyName;
  xpTemplate.getElementById("experiencePeriod").textContent = xp.experiencePeriod;
  xpTemplate.getElementById("experienceTitle").textContent = xp.experienceTitle;
  xpTemplate.getElementById("experienceDetail").textContent = xp.experienceDetail;
}
