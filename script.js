// EASILY ADD NEW ITEMS HERE
const resumeData = [
    {
        title: "3D Printing Instructor",
        date: "2025 – Present",
        category: "Volunteer",
        short: "Teaching CAD fundamentals at Edgemont.",
        full: "I conduct weekly sessions teaching children the fundamentals of 3D modeling and CAD. I translate complex engineering concepts into age-appropriate lessons.",
        image: "https://via.placeholder.com/400x200?text=3D+Modeling+Workshop" // Link your images here
    },
    {
        title: "Woodward National Debate",
        date: "2024",
        category: "Debate",
        short: "Quarterfinalist at National Level.",
        full: "Ranked as a Quarterfinalist in Atlanta. Expert in Lincoln-Douglas format and persuasive communication.",
        image: "https://via.placeholder.com/400x200?text=Debate+Tournament"
    },
    {
        title: "Solarflare Robotics",
        date: "2022 – 2024",
        category: "Entrepreneurship",
        short: "Co-Founder & Lead Coder.",
        full: "Managed fundraising and outreach. Led software coding (Java/Python) and hardware assembly for an independent team.",
        image: "https://via.placeholder.com/400x200?text=Solarflare+Robotics"
    }
];

const container = document.getElementById('timeline-container');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

// Generate Timeline
resumeData.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
        <div class="content-box">
            <h3>${item.title}</h3>
            <span>${item.date}</span>
            <p>${item.short}</p>
        </div>
    `;
    div.onclick = () => openModal(item);
    container.appendChild(div);
});

function openModal(item) {
    modalBody.innerHTML = `
        <h2 style="color:var(--neon-blue)">${item.title}</h2>
        <p><strong>${item.date}</strong> | ${item.category}</p>
        <img src="${item.image}" style="width:100%; border-radius:5px; margin: 15px 0;">
        <p>${item.full}</p>
    `;
    modal.style.display = "block";
}

// Close Modal logic
document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }
