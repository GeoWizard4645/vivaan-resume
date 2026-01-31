const resumeData = [
    {
        category: "EDUCATION",
        title: "Edgemont High School",
        date: "Expected 2028",
        summary: "3.98 GPA | Honors in Math, English, Latin",
        details: "Graduated Kumon Math (College-level Calculus by 9th grade). Enrolled in AP Computer Science & AP European History. Harvard Debate Council Workshop (2024, 2025)."
    },
    {
        category: "VOLUNTEER",
        title: "3D Printing Instructor",
        date: "2025 – Present",
        summary: "Teaching CAD fundamentals at Edgemont.",
        details: "Conduct weekly sessions teaching children 3D modeling. Facilitate workshops translating complex engineering into age-appropriate lessons."
    },
    {
        category: "DEBATE",
        title: "Varsity Representative",
        date: "2023 – Present",
        summary: "National Ranking: Woodward Quarterfinalist.",
        details: "Earned multiple Top Speaker awards. Expert in Lincoln-Douglas format and complex data analysis."
    },
    {
        category: "ENTREPRENEUR",
        title: "Solarflare Robotics",
        date: "2022 – 2024",
        summary: "Co-Founder & YouTube Lead.",
        details: "Managed fundraising and operations. Led software coding (Java/Python) and hardware assembly."
    },
    {
        category: "BUSINESS",
        title: "Math Monkey & Barky Bites",
        date: "2020 – Present",
        summary: "Tutoring & E-commerce Founder.",
        details: "Math Monkey: Full curriculum management for younger students. Barky Bites: Co-founded dog treat company at age 10; handled production and sales."
    },
    {
        category: "SKILLS",
        title: "Core Competencies",
        date: "Current",
        summary: "Finance, CS, & Performance.",
        details: "Technical: Python, Java, Excel, CAD. Arts: Saxophonist (National Jazz Festival 2025), Professional DJ. Athletics: Varsity Lacrosse. Martial Arts: Junior Black Belt (1st Poom)."
    }
];

const timeline = document.getElementById('circular-timeline');
const modal = document.getElementById('info-modal');
const modalDetails = document.getElementById('modal-details');

resumeData.forEach(item => {
    const node = document.createElement('div');
    node.className = 'node';
    node.innerHTML = `
        <div class="circle">${item.category}</div>
        <p style="font-weight:600; font-size:0.8rem; margin:0;">${item.title}</p>
        <p style="font-size:0.7rem; color:#888;">${item.date}</p>
    `;
    node.onclick = () => {
        modalDetails.innerHTML = `
            <p class="subtitle" style="margin-bottom:10px;">${item.category}</p>
            <h2 style="font-family:'Playfair Display'; font-size:2rem;">${item.title}</h2>
            <p><em>${item.date}</em></p>
            <hr style="border:0; border-top:1px solid #eee; margin:20px 0;">
            <p><strong>Overview:</strong> ${item.summary}</p>
            <p>${item.details}</p>
        `;
        modal.style.display = 'block';
    };
    timeline.appendChild(node);
});

document.querySelector('.close-btn').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; };
