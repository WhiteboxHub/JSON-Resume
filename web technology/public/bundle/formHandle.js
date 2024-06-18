function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}
// function to add education
function addEducation() {
  const educationContainer = document.getElementById("education-container");
  const newEducationEntry = document.createElement("fieldset");
  newEducationEntry.className =
    "p-4 bg-white rounded shadow-sm education-entry";
  newEducationEntry.innerHTML = `
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="school-name">School Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Harvard University" />
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="degree">Degree</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Bachelor of Science" />
          </div>
          <div class="mb-4 flex flex-wrap">
              <div class="w-1/2 pr-2">
                  <label class="block text-gray-700 font-bold mb-2" for="start-date">Start Date</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" />
              </div>
              <div class="w-1/2 pl-2">
                  <label class="block text-gray-700 font-bold mb-2" for="end-date">End Date</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" />
              </div>
          </div>`;
  educationContainer.appendChild(newEducationEntry);
}

// function to remove education

function deleteEducation() {
  const educationContainer = document.getElementById("education-container");
  if (educationContainer.childElementCount > 1) {
    educationContainer.removeChild(educationContainer.lastElementChild);
  }
}

// function to add experience

function addWorkExperience() {
  const workExperienceContainer = document.getElementById(
    "work-experience-container"
  );
  const newWorkExperience = document.createElement("fieldset");
  newWorkExperience.className =
    "p-4 bg-white rounded shadow-sm work-experience";
  newWorkExperience.innerHTML = `
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="company-name">Company Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Google" />
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="position">Position</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Software Engineer" />
          </div>
          <div class="mb-4 flex flex-wrap">
              <div class="w-1/2 pr-2">
                  <label class="block text-gray-700 font-bold mb-2" for="start-date">Start Date</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" />
              </div>
              <div class="w-1/2 pl-2">
                  <label class="block text-gray-700 font-bold mb-2" for="end-date">End Date</label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" />
              </div>
          </div>`;
  workExperienceContainer.appendChild(newWorkExperience);
}

// function to delete experience

function deleteWorkExperience() {
  const workExperienceContainer = document.getElementById(
    "work-experience-container"
  );
  if (workExperienceContainer.childElementCount > 1) {
    workExperienceContainer.removeChild(
      workExperienceContainer.lastElementChild
    );
  }
}

// function to add skills
function addSkill() {
  const skillsContainer = document.getElementById("skills-container");
  const newSkill = document.createElement("fieldset");
  newSkill.className = "p-4 bg-white rounded shadow-sm skills-entry";
  newSkill.innerHTML = `
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="skill-name">Skill</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="JavaScript" />
          </div>`;
  skillsContainer.appendChild(newSkill);
}

// function to delete skills

function deleteSkill() {
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer.childElementCount > 1) {
    skillsContainer.removeChild(skillsContainer.lastElementChild);
  }
}

// function to add projects

function addProject() {
  const projectsContainer = document.getElementById("projects-container");
  const newProject = document.createElement("fieldset");
  newProject.className = "p-4 bg-white rounded shadow-sm projects-entry";
  newProject.innerHTML = `
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="project-name">Project Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="My Awesome Project" />
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="project-description">Description</label>
              <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3" placeholder="Describe the project"></textarea>
          </div>`;
  projectsContainer.appendChild(newProject);
}

// function to delete project

function deleteProject() {
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer.childElementCount > 1) {
    projectsContainer.removeChild(projectsContainer.lastElementChild);
  }
}

// function to add award

function addAward() {
  const awardsContainer = document.getElementById("awards-container");
  const newAward = document.createElement("fieldset");
  newAward.className = "p-4 bg-white rounded shadow-sm awards-entry";
  newAward.innerHTML = `
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="award-name">Award Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Best Innovator Award" />
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="award-date">Date</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" />
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="award-description">Description</label>
              <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="3" placeholder="Describe the award"></textarea>
          </div>`;
  awardsContainer.appendChild(newAward);
}

// function to delete award

function deleteAward() {
  const awardsContainer = document.getElementById("awards-container");
  if (awardsContainer.childElementCount > 1) {
    awardsContainer.removeChild(awardsContainer.lastElementChild);
  }
}

function previewPDF() {
  // Placeholder for preview PDF logic
  alert("Preview PDF functionality is not implemented yet.");
}
