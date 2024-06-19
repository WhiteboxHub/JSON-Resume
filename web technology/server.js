const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const collectFormData = require("./Resume-Theme/theme_Macchiato"); // Import your theme function

const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route to serve the index.html file when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/forms", (req, res) => {
  res.sendFile(__dirname + "/public/forms/macchiato.html");
});

// // Define a route to handle form submissions
// app.post("/sampleForms/submit", (req, res) => {
//   const formData = req.body; // Submitted form data
//   const resumeHTML = collectFormData(formData); // Generate resume HTML

//   // Send the generated resume HTML as the response
//   res.send(resumeHTML);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
