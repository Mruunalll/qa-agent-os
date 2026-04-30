window.OSApps = window.OSApps || {};

window.OSApps.experience = {
  title: "experience.exe",
  render(data) {
    const jobs = data.experience
      .map(
        (job) => `
          <article class="timeline-card">
            <p class="muted">${job.period} · ${job.location}</p>
            <h3>${job.role}</h3>
            <p>${job.company}</p>
            <p class="muted">${job.scope}</p>
            <ul>${job.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
            ${
              job.awards.length
                ? `<div class="chip-row">${job.awards.map((award) => `<span class="chip">${award}</span>`).join("")}</div>`
                : ""
            }
          </article>
        `
      )
      .join("");

    return `
      <section class="app-hero">
        <h2>Professional Experience</h2>
        <p>Timeline of QA strategy, automation, security testing, and release ownership.</p>
      </section>
      <div class="timeline-list">${jobs}</div>
    `;
  }
};
