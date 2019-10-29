import "./scripts/components";
import resumeData from "./resumeData.json";

var experienceSectionTemplate = document.getElementById("experienceSectionTemplate");
var skillsSectionTemplate = document.getElementById("skillsSectionTemplate");

var professionalExperiencesSection = document.getElementById("professionalExperiencesSection");

resumeData.professionalExperiences.forEach((xp) => {
  let xpTemplate = document.importNode(experienceSectionTemplate.content, true);

  fillExperienceTemplate(xpTemplate, xp);

  professionalExperiencesSection.appendChild(xpTemplate, true);
});

var educationExperiencesSection = document.getElementById("educationExperiencesSection");

resumeData.educationExperiences.forEach((xp) => {
  let xpTemplate = document.importNode(experienceSectionTemplate.content, true);

  fillExperienceTemplate(xpTemplate, xp);

  educationExperiencesSection.appendChild(xpTemplate, true);
});

var skillsSectionTBody = document.getElementById("skillsSectionTBody");

resumeData.skills.forEach((skill) => {
  let skillTemplate = document.importNode(skillsSectionTemplate.content, true);

  skillTemplate.getElementById("title").textContent = skill.title;
  skillTemplate.getElementById("rate").setAttribute("rate", skill.rate);

  skillsSectionTBody.appendChild(skillTemplate, true);
});

function fillExperienceTemplate(xpTemplate, xp) {
  xpTemplate.getElementById("companyName").textContent = xp.companyName;
  xpTemplate.getElementById("experiencePeriod").textContent = xp.experiencePeriod;
  xpTemplate.getElementById("experienceTitle").textContent = xp.experienceTitle;
  xpTemplate.getElementById("experienceDetail").textContent = xp.experienceDetail;
}

window.scrollMain = function scrollMain() {
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
};
