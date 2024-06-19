
const data = {
  basics: {
    name: "",
    label: "",
    email: "",
    phone: "",
    url: "",
    summary: "",
    location: {
      address: "",
      postalCode: "",
      city: "",
      countryCode: "",
      region: "",
    },
    profiles: [
      {
        network: "",
        username: "",
        url: "",
      },
    ],
  },
  work: [
    {
      name: "",
      position: "",
      url: "",
      startDate: "",
      endDate: "",
      summary: "",
      highlights: [""],
    },
  ],
  volunteer: [
    {
      organization: "",
      position: "",
      url: "",
      startDate: "",
      endDate: "",
      summary: "",
    },
  ],
  education: [
    {
      institution: "",
      url: "",
      area: "",
      studyType: "",
      startDate: "",
      endDate: "",
      score: "",
      courses: [],
    },
  ],
  awards: [
    {
      title: "",
      date: "",
      awarder: "",
      summary: "",
    },
  ],
  certificates: [
    {
      name: "",
      date: "",
      issuer: "",
    },
  ],
  publications: [
    {
      name: "",
      publisher: "",
      releaseDate: "",
      url: "",
      summary: "",
    },
  ],
  skills: [
    {
      name: "",
      level: "",
      keywords: [],
    },
  ],
  languages: [
    {
      language: "",
      fluency: "",
    },
  ],
  interests: [
    {
      name: "",
      keywords: [],
    },
  ],
  references: [
    {
      name: "",
      reference: "",
    },
  ],
  projects: [
    {
      name: "",
      description: "",
      keywords: [],
      url: "",
      roles: [],
      startDate: "",
      endDate: "",
      entity: "",
      type: "",
    },
  ],
};

// Function to show the selected section and hide others
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".form-section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add("active");
}

// Function to add a new form section dynamically
function addSection(sectionId) {
  const container = document.getElementById(`${sectionId}-container`);
  const sectionName =
    sectionId.charAt(0).toUpperCase() + sectionId.slice(1); // Capitalize first letter

  // Create a new form group with inputs based on JSON structure
  const formData = data[sectionId][0]; // Assuming initial data structure for simplicity
  const newForm = document.createElement("div");
  newForm.className = "nested-section";
  Object.keys(formData).forEach((key) => {
    const label = document.createElement("label");
    label.textContent = `${sectionName} ${
      key.charAt(0).toUpperCase() + key.slice(1)
    }`;
    const input = document.createElement("input");
    input.className = "form-control";
    input.name = `${sectionId}[0].${key}`;
    input.id = `${sectionId}.${key}`;
    input.type = "text"; // Adjust input type based on the data structure
    newForm.appendChild(label);
    newForm.appendChild(input);
  });

  // Add remove button for added sections
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "btn btn-danger remove-btn";
  removeButton.textContent = "Remove";
  removeButton.onclick = function () {
    container.removeChild(newForm); // Remove current section on button click
  };
  newForm.appendChild(removeButton);

  // Append new form section to the container
  container.appendChild(newForm);
}

// Function to generate JSON based on form data
function generateJSON() {
  const form = document.getElementById("jsonForm");
  const formData = new FormData(form);
  const result = {};

  formData.forEach((value, key) => {
    const keys = key.split(".");
    const topLevelKey = keys.shift(); // Get the top-level key (e.g., 'basics', 'work', etc.)
    if (!result[topLevelKey]) {
      result[topLevelKey] = {};
    }
    let currentLevel = result[topLevelKey];
    while (keys.length > 1) {
      const currentKey = keys.shift();
      if (!currentLevel[currentKey]) {
        currentLevel[currentKey] = {};
      }
      currentLevel = currentLevel[currentKey];
    }
    currentLevel[keys[0]] = value;
  });

  // Display JSON in the pre tag
  const jsonResult = document.getElementById("jsonResult");
  jsonResult.textContent = JSON.stringify(result, null, 2);

  // Log JSON to console
  console.log(result);
}
// Example function to generate PDF
function generatePDF() {
  const jsonResult = document.getElementById("jsonResult").textContent;
  const doc = new jsPDF();
  doc.text(jsonResult, 10, 10);
  doc.save("generated.json.pdf");
}

// Event listener for form submission (optional)
document
  .getElementById("jsonForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission
    generateJSON(); // Generate JSON on form submit
  });

