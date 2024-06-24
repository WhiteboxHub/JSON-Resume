// Functions for adding and removing entries (similar to profiles)
document.addEventListener("DOMContentLoaded", function () {
  const sectionLinks = document.querySelectorAll(".section-link");
  const sections = document.querySelectorAll(".section");

  sectionLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      sectionLinks.forEach((link) => link.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      this.classList.add("active");
      const sectionId = this.getAttribute("data-section");
      document.getElementById(sectionId).classList.add("active");
    });
  });
});

//add work
function addWorkEntry() {
  const container = document.getElementById("work-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("work-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="work_name">Name:</label>
      <input type="text" name="work_name[]" class="form-control"><br>
    </div>
    <div class="form-group">
      <label for="work_position">Position:</label>
      <input type="text" name="work_position[]" class="form-control"><br>
    </div>
    <div class="form-group">
      <label for="work_url">URL:</label>
      <input type="url" name="work_url[]" class="form-control"><br>
    </div>
    <div class="form-group">
      <label for="work_startDate">Start Date:</label>
      <input type="date" name="work_startDate[]" class="form-control"><br>
    </div>
    <div class="form-group">
      <label for="work_endDate">End Date:</label>
      <input type="date" name="work_endDate[]" class="form-control"><br>
    </div>
    <div class="form-group">
      <label for="work_summary">Summary:</label>
      <textarea name="work_summary[]" class="form-control"></textarea><br>
    </div>
    <h3>Highlights</h3>
    <div class="form-group">
      <ul class="highlights-list" data-field="work_highlights">
        <li><input type="text" name="work_highlights[][0]" class="form-control"></li>
      </ul>
    </div>
    <button type="button" onclick="addHighlight(this)">Add Highlight</button>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  container.appendChild(entryDiv);
}

//add voluntery

function addVolunteerEntry() {
  const container = document.getElementById("volunteer-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("volunteer-entry");
  entryDiv.innerHTML = `
  <div class="form-group">
      <label for="volunteer_organization">Organization:</label>
      <input type="text" name="volunteer_organization[]" class="form-control"><br>
  </div>
  <div class="form-group">
      <label for="volunteer_position">Position:</label>
      <input type="text" name="volunteer_position[]" class="form-control"><br>
  </div>
  <div class="form-group">
      <label for="volunteer_url">URL:</label>
      <input type="url" name="volunteer_url[]" class="form-control"><br>
  </div>
  <div class="form-group">
      <label for="volunteer_startDate">Start Date:</label>
      <input type="date" name="volunteer_startDate[]" class="form-control"><br>
  </div>
  <div class="form-group">
      <label for="volunteer_endDate">End Date:</label>
      <input type="date" name="volunteer_endDate[]" class="form-control"><br>
  </div>
  <div class="form-group">
      <label for="volunteer_summary">Summary:</label>
      <textarea name="volunteer_summary[]" class="form-control"></textarea><br>
  </div>
  <button type="button" id="add-volunteer-button" onclick="addVolunteerEntry()">Add Volunteer Experience</button>
`;

  // Find the last volunteer-entry div and remove its add-volunteer-button
  const lastVolunteerEntry = container.querySelector(
    ".volunteer-entry:last-of-type"
  );
  const addButton = lastVolunteerEntry.querySelector("#add-volunteer-button");
  if (addButton) {
    addButton.remove();
  }

  // Append the new entry div to the container
  container.appendChild(entryDiv);
}

// add education
// Function to add new course input field
function addCourse(button) {
  const coursesList = button.previousElementSibling;
  const newCourse = document.createElement("li");
  newCourse.innerHTML = `
    <div class="form-group">
      <label for="education_courses">Course:</label>
      <input type="text" name="education_courses[][0]" class="form-control" />
    </div>
  `;
  coursesList.appendChild(newCourse);
}

// Function to remove an education entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new education entry
function addEducationEntry() {
  const container = document.getElementById("education-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("education-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="education_institution">Institution:</label>
      <input type="text" name="education_institution[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_url">URL:</label>
      <input type="url" name="education_url[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_area">Area of Study:</label>
      <input type="text" name="education_area[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_studyType">Study Type:</label>
      <input type="text" name="education_studyType[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_startDate">Start Date:</label>
      <input type="date" name="education_startDate[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_endDate">End Date:</label>
      <input type="date" name="education_endDate[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_score">Score:</label>
      <input type="text" name="education_score[]" class="form-control" />
    </div>
    <h3>Courses</h3>
    <ul class="courses-list" data-field="education_courses">
      <li>
        <div class="form-group">
          <label for="education_courses">Course:</label>
          <input type="text" name="education_courses[][0]" class="form-control" />
        </div>
      </li>
    </ul>
    <button type="button" onclick="addCourse(this)">Add Course</button>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  // Insert the new entry before the "Add Education" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick="addEducationEntry()"]')
  );
}

// Function to remove an award entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new award entry
function addAwardEntry() {
  const container = document.getElementById("awards-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("award-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="awards_title">Title:</label>
      <input type="text" name="awards_title[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="awards_date">Date:</label>
      <input type="date" name="awards_date[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="awards_awarder">Awarder:</label>
      <input type="text" name="awards_awarder[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="awards_summary">Summary:</label>
      <textarea name="awards_summary[]" class="form-control"></textarea>
    </div>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  // Insert the new entry before the "Add Award" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick="addAwardEntry()"]')
  );
}

// Function to remove a certificate entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new certificate entry
function addCertificateEntry() {
  const container = document.getElementById("certificates-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("certificate-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="certificates_name">Name:</label>
      <input type="text" name="certificates_name[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="certificates_date">Date:</label>
      <input type="date" name="certificates_date[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="certificates_issuer">Issuer:</label>
      <input type="text" name="certificates_issuer[]" class="form-control" />
    </div>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  // Insert the new entry before the "Add Certificate" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick="addCertificateEntry()"]')
  );
}

// Function to remove a publication entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new publication entry
function addPublicationEntry() {
  const container = document.getElementById("publications-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("publication-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="publications_name">Name:</label>
      <input type="text" name="publications_name[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="publications_publisher">Publisher:</label>
      <input type="text" name="publications_publisher[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="publications_releaseDate">Release Date:</label>
      <input type="date" name="publications_releaseDate[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="publications_url">URL:</label>
      <input type="url" name="publications_url[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="publications_summary">Summary:</label>
      <textarea name="publications_summary[]" class="form-control"></textarea>
    </div>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  // Insert the new entry before the "Add Publication" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick="addPublicationEntry()"]')
  );
}

// Function to remove a skill entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new skill entry
function addSkillEntry() {
  const container = document.getElementById("skills-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("skill-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="skills_name">Name:</label>
      <input type="text" name="skills_name[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="skills_level">Level:</label>
      <input type="text" name="skills_level[]" class="form-control" />
    </div>
    <h3>Keywords</h3>
    <ul class="keywords-list" data-field="skills_keywords">
      <li><input type="text" name="skills_keywords[][0]" class="form-control" /></li>
    </ul>
    <button type="button" onclick="addKeyword(this)">Add Keyword</button>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  // Insert the new entry before the "Add Skill" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick="addSkillEntry()"]')
  );
}

// Function to add a new keyword
function addKeyword(button) {
  const keywordList = button.parentElement.querySelector(".keywords-list");
  const newKeywordIndex = keywordList.querySelectorAll("li").length;
  const newKeyword = document.createElement("li");
  newKeyword.innerHTML = `<input
      type="text"
      name="skills_keywords[][${newKeywordIndex}]"
      class="form-control"
    />`;
  keywordList.appendChild(newKeyword);
}

// Function to remove a language entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new language entry
function addLanguageEntry() {
  const container = document.getElementById("languages-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("language-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="languages_language">Language:</label>
      <input type="text" name="languages_language[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="languages_fluency">Fluency:</label>
      <input type="text" name="languages_fluency[]" class="form-control" />
    </div>
    <button type="button" onclick="addLanguageEntry()">
            Add Language
          </button>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  container.appendChild(entryDiv);
}

// Function to remove an entry (interest or keyword)
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new interest entry
function addInterestEntry() {
  const container = document.getElementById("interests-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("interest-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="interests_name">Name:</label>
      <input type="text" name="interests_name[]" class="form-control" />
    </div>
    <div class="form-group">
      <h3>Keywords</h3>
      <ul class="keywords-list" data-field="interests_keywords">
        <li><input type="text" name="interests_keywords[][0]" class="form-control" /></li>
      </ul>
    </div>
    <button type="button" onclick="addKeyword(this)">Add Keyword</button>
    <button type="button" onclick="addInterestEntry()">
            Add Interest
          </button>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  container.appendChild(entryDiv);
}

// Function to add a new keyword within an interest entry
function addKeyword(button) {
  const keywordList = button.parentElement.querySelector(".keywords-list");
  const newKeywordIndex = keywordList.querySelectorAll("li").length;
  const newKeyword = document.createElement("li");
  newKeyword.innerHTML = `
    <div class="form-group">
      <label for="interests_keywords">Keyword:</label>
      <input type="text" name="interests_keywords[][${newKeywordIndex}]" class="form-control" />
    </div>
  `;
  keywordList.appendChild(newKeyword);
}

function addReferenceEntry() {
  const container = document.getElementById("references-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("reference-entry");
  entryDiv.innerHTML = `
    <label>Name: <input type="text" name="references_name[]"></label><br>
    <label>Reference: <textarea name="references_reference[]"></textarea></label><br>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  container.appendChild(entryDiv);
}

function addProjectEntry() {
  const container = document.getElementById("projects-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("project-entry");
  entryDiv.innerHTML = `
    <label>Name: <input type="text" name="projects_name[]"></label><br>
    <label>Description: <textarea name="projects_description[]"></textarea></label><br>
    <h3>Keywords</h3>
    <ul class="keywords-list" data-field="projects_keywords">
      <li><input type="text" name="projects_keywords[][0]"></li>
    </ul>
    <label>URL: <input type="url" name="projects_url[]"></label><br>
    <label>Roles: <input type="text" name="projects_roles[]"></label><br>
    <label>Start Date: <input type="date" name="projects_startDate[]"></label><br>
    <label>End Date: <input type="date" name="projects_endDate[]"></label><br>
    <label>Entity: <input type="text" name="projects_entity[]"></label><br>
    <label>Type: <input type="text" name="projects_type[]"></label><br>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  container.appendChild(entryDiv);
}

function addHighlight(button) {
  const highlightsList = button.previousElementSibling;
  const newHighlight = document.createElement("li");
  const index = highlightsList.querySelectorAll("li").length;
  newHighlight.innerHTML = `<input type="text" name="${highlightsList.dataset.field}[][${index}]">`;
  highlightsList.appendChild(newHighlight);
}

function submitJson() {
  const form = document.getElementById("submit-form");
  const formData = new FormData(form);
  const jsonObject = {
    basics: {
      name: formData.get("basics_name"),
      label: formData.get("basics_label"),
      email: formData.get("basics_email"),
      phone: formData.get("basics_phone"),
      url: formData.get("basics_url"),
      summary: formData.get("basics_summary"),
      location: {
        address: formData.get("basics_location_address"),
        postalCode: formData.get("basics_location_postalCode"),
        city: formData.get("basics_location_city"),
        countryCode: formData.get("basics_location_countryCode"),
        region: formData.get("basics_location_region"),
      },
      profiles: [],
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    certificates: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    references: [],
    projects: [],
  };

  // Add profiles
  const profilesContainer = document.getElementById("profiles-container");
  const profiles = profilesContainer.querySelectorAll(".profile");
  profiles.forEach((profile) => {
    jsonObject.basics.profiles.push({
      network: profile.querySelector('input[name="basics_profiles_network[]"]')
        .value,
      username: profile.querySelector(
        'input[name="basics_profiles_username[]"]'
      ).value,
      url: profile.querySelector('input[name="basics_profiles_url[]"]').value,
    });
  });

  // Add work experience
  const workEntries = document.querySelectorAll(".work-entry");
  workEntries.forEach((entry) => {
    jsonObject.work.push({
      name: entry.querySelector('input[name="work_name[]"]').value,
      position: entry.querySelector('input[name="work_position[]"]').value,
      url: entry.querySelector('input[name="work_url[]"]').value,
      startDate: entry.querySelector('input[name="work_startDate[]"]').value,
      endDate: entry.querySelector('input[name="work_endDate[]"]').value,
      summary: entry.querySelector('textarea[name="work_summary[]"]').value,
      highlights: Array.from(
        entry.querySelectorAll('input[name="work_highlights[][0]"]')
      ).map((input) => input.value),
    });
  });

  // Add volunteer experience
  const volunteerEntries = document.querySelectorAll(".volunteer-entry");
  volunteerEntries.forEach((entry) => {
    jsonObject.volunteer.push({
      organization: entry.querySelector(
        'input[name="volunteer_organization[]"]'
      ).value,
      position: entry.querySelector('input[name="volunteer_position[]"]').value,
      url: entry.querySelector('input[name="volunteer_url[]"]').value,
      startDate: entry.querySelector('input[name="volunteer_startDate[]"]')
        .value,
      endDate: entry.querySelector('input[name="volunteer_endDate[]"]').value,
      summary: entry.querySelector('textarea[name="volunteer_summary[]"]')
        .value,
    });
  });

  // Add education
  const educationEntries = document.querySelectorAll(".education-entry");
  educationEntries.forEach((entry) => {
    jsonObject.education.push({
      institution: entry.querySelector('input[name="education_institution[]"]')
        .value,
      url: entry.querySelector('input[name="education_url[]"]').value,
      area: entry.querySelector('input[name="education_area[]"]').value,
      studyType: entry.querySelector('input[name="education_studyType[]"]')
        .value,
      startDate: entry.querySelector('input[name="education_startDate[]"]')
        .value,
      endDate: entry.querySelector('input[name="education_endDate[]"]').value,
      score: entry.querySelector('input[name="education_score[]"]').value,
      courses: Array.from(
        entry.querySelectorAll('input[name="education_courses[][0]"]')
      ).map((input) => input.value),
    });
  });

  // Add awards
  const awardEntries = document.querySelectorAll(".award-entry");
  awardEntries.forEach((entry) => {
    jsonObject.awards.push({
      title: entry.querySelector('input[name="awards_title[]"]').value,
      date: entry.querySelector('input[name="awards_date[]"]').value,
      awarder: entry.querySelector('input[name="awards_awarder[]"]').value,
      summary: entry.querySelector('textarea[name="awards_summary[]"]').value,
    });
  });

  // Add certificates
  const certificateEntries = document.querySelectorAll(".certificate-entry");
  certificateEntries.forEach((entry) => {
    jsonObject.certificates.push({
      name: entry.querySelector('input[name="certificates_name[]"]').value,
      date: entry.querySelector('input[name="certificates_date[]"]').value,
      issuer: entry.querySelector('input[name="certificates_issuer[]"]').value,
    });
  });

  // Add publications
  const publicationEntries = document.querySelectorAll(".publication-entry");
  publicationEntries.forEach((entry) => {
    jsonObject.publications.push({
      name: entry.querySelector('input[name="publications_name[]"]').value,
      publisher: entry.querySelector('input[name="publications_publisher[]"]')
        .value,
      releaseDate: entry.querySelector(
        'input[name="publications_releaseDate[]"]'
      ).value,
      url: entry.querySelector('input[name="publications_url[]"]').value,
      summary: entry.querySelector('textarea[name="publications_summary[]"]')
        .value,
    });
  });

  // Add skills
  const skillEntries = document.querySelectorAll(".skill-entry");
  skillEntries.forEach((entry) => {
    jsonObject.skills.push({
      name: entry.querySelector('input[name="skills_name[]"]').value,
      level: entry.querySelector('input[name="skills_level[]"]').value,
      keywords: Array.from(
        entry.querySelectorAll('input[name="skills_keywords[][0]"]')
      ).map((input) => input.value),
    });
  });

  // Add languages
  const languageEntries = document.querySelectorAll(".language-entry");
  languageEntries.forEach((entry) => {
    jsonObject.languages.push({
      language: entry.querySelector('input[name="languages_language[]"]').value,
      fluency: entry.querySelector('input[name="languages_fluency[]"]').value,
    });
  });

  // Add interests
  const interestEntries = document.querySelectorAll(".interest-entry");
  interestEntries.forEach((entry) => {
    jsonObject.interests.push({
      name: entry.querySelector('input[name="interests_name[]"]').value,
      keywords: Array.from(
        entry.querySelectorAll('input[name="interests_keywords[][0]"]')
      ).map((input) => input.value),
    });
  });

  // Add references
  // const referenceEntries = document.querySelectorAll(".reference-entry");
  // referenceEntries.forEach((entry) => {
  //   jsonObject.references.push({
  //     name: entry.querySelector('input[name="references_name[]"]').value,
  //     reference: entry.querySelector(
  //       'textarea[name="references_reference[]"]'
  //     ).value,
  //   });
  // });

  // Add projects
  const projectEntries = document.querySelectorAll(".project-entry");
  projectEntries.forEach((entry) => {
    jsonObject.projects.push({
      name: entry.querySelector('input[name="projects_name[]"]').value,
      description: entry.querySelector(
        'textarea[name="projects_description[]"]'
      ).value,
      keywords: Array.from(
        entry.querySelectorAll('input[name="projects_keywords[][0]"]')
      ).map((input) => input.value),
      url: entry.querySelector('input[name="projects_url[]"]').value,
      roles: entry.querySelector('input[name="projects_roles[]"]').value,
      startDate: entry.querySelector('input[name="projects_startDate[]"]')
        .value,
      endDate: entry.querySelector('input[name="projects_endDate[]"]').value,
      entity: entry.querySelector('input[name="projects_entity[]"]').value,
      type: entry.querySelector('input[name="projects_type[]"]').value,
    });
  });

  const jsonString = JSON.stringify(jsonObject, null, 2);
 // console.log(jsonString);
  // Send jsonString to server or do something else with it
  // Display the JSON string in the PDF previewer
  const jsonPreviewDiv = document.getElementById("json-preview");
  jsonPreviewDiv.textContent = jsonString;
  console.log(jsonString)
  fetch("/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:jsonString,
  })
    .then((response) => {
      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      } else {
        throw new Error("Server response was not JSON");
      }
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
}
