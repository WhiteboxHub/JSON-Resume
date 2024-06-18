const collectFormData = (formData) => {
    const {
        fullName,
        email,
        phone,
        linkedin,
        schoolName,
        degree,
        educationStartDate,
        educationEndDate,
        company,
        jobTitle,
        jobDescription,
        workStartDate,
        workEndDate,
        skillName,
        skillLevel,
        projectName,
        projectDescription,
        awardName,
        awardDate,
        awardDescription
    } = formData;

    const themeStyles = `
        <style>
            body {
                font-family: 'Helvetica Neue', Arial, sans-serif;
                background-color: #FAF9F6;
                color: #333;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 800px;
                background-color: #FFF;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 20px;
                margin: 0 auto;
            }
            h1 {
                font-size: 2.5em;
                color: #4A4A4A;
                border-bottom: 2px solid #E0E0E0;
                padding-bottom: 10px;
            }
            h3.section-heading {
                font-size: 1.5em;
                color: #6B705C;
                border-bottom: 1px solid #E0E0E0;
                padding-bottom: 5px;
                margin-top: 20px;
                margin-bottom: 10px;
            }
            p.section-content {
                margin-left: 20px;
                margin-bottom: 15px;
            }
            p.section-content strong {
                display: inline-block;
                width: 120px;
                color: #333;
            }
        </style>
    `;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resume</title>
        ${themeStyles}
    </head>
    <body>
        <div class="container">
            <h1>${fullName}</h1>
            <div class="section">
                <h3 class="section-heading">Personal Info</h3>
                <p class="section-content">
                    <strong>Email:</strong> ${email}<br>
                    <strong>Phone:</strong> ${phone}<br>
                    <strong>LinkedIn:</strong> ${linkedin}<br>
                </p>
            </div>
            <div class="section">
                <h3 class="section-heading">Education</h3>
                ${schoolName.map((name, index) => `
                    <p class="section-content">
                        <strong>School:</strong> ${name}<br>
                        <strong>Degree:</strong> ${degree[index]}<br>
                        <strong>Start Date:</strong> ${educationStartDate[index]}<br>
                        <strong>End Date:</strong> ${educationEndDate[index]}<br>
                    </p>
                `).join('')}
            </div>
            <div class="section">
                <h3 class="section-heading">Work Experience</h3>
                ${company.map((name, index) => `
                    <p class="section-content">
                        <strong>Company:</strong> ${name}<br>
                        <em>${jobTitle[index]}</em><br>
                        ${jobDescription[index]}<br>
                        ${workStartDate[index]} - ${workEndDate[index]}<br>
                    </p>
                `).join('')}
            </div>
            <div class="section">
                <h3 class="section-heading">Skills</h3>
                ${skillName.map((skill, index) => `
                    <p class="section-content">
                        <strong>Skill:</strong> ${skill}<br>
                        <strong>Level:</strong> ${skillLevel[index]}<br>
                    </p>
                `).join('')}
            </div>
            <div class="section">
                <h3 class="section-heading">Projects</h3>
                ${projectName.map((project, index) => `
                    <p class="section-content">
                        <strong>Project:</strong> ${project}<br>
                        ${projectDescription[index]}<br>
                    </p>
                `).join('')}
            </div>
            <div class="section">
                <h3 class="section-heading">Awards</h3>
                ${awardName.map((award, index) => `
                    <p class="section-content">
                        <strong>Award:</strong> ${award}<br>
                        <strong>Date:</strong> ${awardDate[index]}<br>
                        ${awardDescription[index]}<br>
                    </p>
                `).join('')}
            </div>
        </div>
    </body>
    </html>`;
};

module.exports = collectFormData;
