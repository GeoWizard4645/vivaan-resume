const resumeData = [
    {
        id: "edu",
        date: "2028",
        label: "EDU",
        title: "Edgemont High School",
        subtitle: "Academic Excellence & Advanced Placement",
        content: `<ul>
                    <li><strong>GPA:</strong> 3.98 (Unweighted)</li>
                    <li><strong>Honors:</strong> Math, English, and Latin.</li>
                    <li><strong>Kumon:</strong> Completed college-level Calculus by 9th grade.</li>
                    <li><strong>Summer:</strong> Harvard University Debate Council Workshop (2024, 2025).</li>
                  </ul>`
    },
    {
        id: "robotics",
        date: "2022-24",
        label: "TECH",
        title: "Solarflare Robotics",
        subtitle: "Co-Founder & Lead Engineer",
        content: `<ul>
                    <li>Managed end-to-end team operations and community outreach.</li>
                    <li>Led all software coding (Java/Python) and hardware assembly.</li>
                    <li>Developed a YouTube channel to teach robotics logic.</li>
                  </ul>`
    },
    {
        id: "debate",
        date: "2023-26",
        label: "DEBATE",
        title: "Edgemont Speech & Debate",
        subtitle: "National Quarterfinalist (Woodward)",
        content: `<ul>
                    <li>Ranked as a Quarterfinalist in a major national tournament (Atlanta).</li>
                    <li>Expertise: Lincoln-Douglas format, complex data analysis, and persuasive communication.</li>
                    <li>Multiple 'Top Speaker' awards in varsity circuits.</li>
                  </ul>`
    },
    {
        id: "volunteer",
        date: "2025",
        label: "VOL",
        title: "3D Printing Instructor",
        subtitle: "Chinese School at Edgemont",
        content: `<p>Conducting weekly Sunday sessions teaching CAD (Computer-Aided Design) to children, translating engineering principles into accessible lessons.</p>`
    },
    {
        id: "biz",
        date: "2020-26",
        label: "BIZ",
        title: "Math Monkey & Barky Bites",
        subtitle: "Early Entrepreneurial Ventures",
        content: `<ul>
                    <li><strong>Math Monkey:</strong> Independent tutoring business for younger students.</li>
                    <li><strong>Barky Bites:</strong> Co-founded a dog treat company at age 10; managed local production and sales.</li>
                  </ul>`
    },
    {
        id: "skills",
        date: "NOW",
        label: "SKILLS",
        title: "Technical & Artistic Core",
        subtitle: "Multi-Disciplinary Background",
        content: `<ul>
                    <li><strong>Technical:</strong> Python, Java, Excel, 3D Modeling (CAD).</li>
                    <li><strong>Arts:</strong> Saxophonist (National Jazz Festival), Professional DJ.</li>
                    <li><strong>Athletics:</strong> Varsity Lacrosse, Junior Black Belt (Taekwondo).</li>
                    <li><strong>Languages:</strong> Fluent English & Hindi; Intermediate Latin.</li>
                  </ul>`
    }
];

const orbit = document.getElementById('orbit');
const detailOverlay = document.getElementById('detail-overlay');
const detailBody = document.getElementById('detail-body');

// Generate Blips
resumeData.forEach(item => {
    const blip = document.createElement('div');
    blip.className = 'blip';
    blip.innerHTML = `
        <span style="font-size:10px; font-weight:bold;">${item.label}</span>
        <div class="blip-date">${item.date}</div>
    `;
    blip.onclick = () => showDetails(item);
    orbit.appendChild(blip);
});

function showDetails(item) {
    detailBody.innerHTML = `
        <h3 style="text-transform:uppercase; letter-spacing:2px; font-size:0.8rem; color:#666;">${item.subtitle}</h3>
        <h2 style="font-family:'Playfair Display'; font-size:2.5rem; margin-top:10px;">${item.title}</h2>
        <div style="margin-top:30px; line-height:1.8;">${item.content}</div>
    `;
    detailOverlay.style.display = 'block';
}

document.querySelector('.close-btn').onclick = () => detailOverlay.style.display = 'none';
