const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const session = require("express-session");
const { PDFDocument } = require("pdf-lib");
//const theme = require("jsonresume-theme-macchiato");

const app = express();
const port = 3000;
const secretKey = crypto.randomBytes(64).toString("hex");
const dataFilePath = path.join(__dirname, "data", "allUsersData.json");

// Ensure the data directory exists
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Initialize the JSON file to be empty on server start
fs.writeFileSync(dataFilePath, JSON.stringify({}), "utf8");

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/forms", (req, res) => {
  res.sendFile(__dirname + "/public/forms/macchiato.html");
});

app.post("/submit-form", (req, res) => {
  const formData = req.body;
  const userId = req.session.id;

  // Load existing data
  let allUsersData = {};
  if (fs.existsSync(dataFilePath)) {
    const rawData = fs.readFileSync(dataFilePath);
    allUsersData = JSON.parse(rawData);
  }

  // Create user data if not exist
  if (!allUsersData[userId]) {
    allUsersData[userId] = getInitialUserDataStructure();
  }

  // Populate the data structure with form data
  populateUserData(allUsersData[userId], formData);

  // Save updated data
  fs.writeFile(
    dataFilePath,
    JSON.stringify(allUsersData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.json(formData);
    }
  );
});

//
function getInitialUserDataStructure() {
  return {
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
}

function populateUserData(userData, formData) {
  Object.keys(formData).forEach((key) => {
    const value = formData[key];

    // Handling nested objects and arrays
    const keys = key.split(".");
    let current = userData;
    for (let i = 0; i < keys.length; i++) {
      const part = keys[i];

      // Check if current part should be an array
      const isArray = !isNaN(keys[i + 1]);

      if (i === keys.length - 1) {
        if (isArray) {
          if (!current[part]) {
            current[part] = [];
          }
          current[part].push(value);
        } else {
          current[part] = value;
        }
      } else {
        if (!current[part]) {
          current[part] = isArray ? [] : {};
        }
        current = current[part];
      }
    }
  });
}

app.get("/generate-pdf", async (req, res) => {
  fs.readFile(dataFilePath, "utf8", async (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    let allUsersData;
    try {
      allUsersData = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const userId = req.session.id;
    const userData = allUsersData[userId];

    if (!userData) {
      res.status(404).json({ error: "No data found for this user" });
      return;
    }

    // Render the resume using the theme
    const resumeHTML = theme.render(userData);

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    // Add the resume HTML as text content (simple implementation, you may need to adjust for complex layouts)
    page.drawText(resumeHTML, {
      x: 50,
      y: page.getHeight() - 50,
      size: 12,
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Set headers and send PDF
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=resume.pdf",
    });
    res.send(Buffer.from(pdfBytes));
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
