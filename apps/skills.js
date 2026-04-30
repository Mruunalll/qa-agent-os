window.OSApps = window.OSApps || {};

window.OSApps.skills = {
  title: "skills.exe",
  render(data) {
    return `
      <section class="app-hero">
        <h2>Senior QA Skill Matrix</h2>
        <p>Skill groups mapped for Senior QA, SDET, AI testing, and security-focused roles.</p>
      </section>
      <div class="skills-grid">
        ${data.skills
          .map(
            (skill) => `
              <article class="skill-card">
                <h3>${skill.group}</h3>
                <div class="progress-track"><span style="width: ${skill.score}%"></span></div>
                <div class="chip-row">${skill.items.map((item) => `<span class="chip">${item}</span>`).join("")}</div>
              </article>
            `
          )
          .join("")}
      </div>
      <section class="glass-card" style="margin-top: 14px">
        <h3>Certifications</h3>
        <ul>${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}</ul>
        <h3>Education</h3>
        <ul>${data.education.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
    `;
  }
};
