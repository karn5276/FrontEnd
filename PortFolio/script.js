// document.addEventListener("DOMContentLoaded", function () {
//     // Add portfolio projects dynamically
//     const portfolioSection = document.getElementById("portfolio");
//     const projects = [
//         { title: "Project 1", description: "Description of Project 1", technologies: "HTML, CSS, JavaScript" },
//         { title: "Project 2", description: "Description of Project 2", technologies: "React, Node.js, MongoDB" },
//         { title: "Project 3", description: "Description of Project 3", technologies: "Python, Django" }
//     ];

//     projects.forEach(project => {
//         const projectDiv = document.createElement("div");
//         projectDiv.innerHTML = `
//             <h3>${project.title}</h3>
//             <p>${project.description}</p>
//             <p><strong>Technologies:</strong> ${project.technologies}</p>
//         `;
//         portfolioSection.appendChild(projectDiv);
//     });

//     // Add skills dynamically
//     const skillsSection = document.getElementById("skills");
//     const skills = [
//         { name: "HTML", value: 90 },
//         { name: "CSS", value: 80 },
//         { name: "JavaScript", value: 75 },
//         // Add more skills as needed
//     ];

//     skills.forEach(skill => {
//         const skillDiv = document.createElement("div");
//         skillDiv.innerHTML = `
//             <p>${skill.name}</p>
//             <div class="skill-bar" style="width: ${skill.value}%;"></div>
//         `;
//         skillsSection.appendChild(skillDiv);
//     });

    // Handle form submission
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Add code to handle form submission (e.g., send data to server)
        alert("Form submitted!");
    });
});
