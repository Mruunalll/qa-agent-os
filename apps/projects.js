window.OSApps = window.OSApps || {};

window.OSApps.projects = {
  title: "run_tests.sh",
  render(data) {
    return `
      <section class="app-hero">
        <h2>Portfolio Test Suites</h2>
        <p>GitHub-backed QA projects across automation, AI testing, manual QA, and OWASP checks.</p>
      </section>
      <div class="project-grid">
        ${data.projects
          .map(
            (project) => `
              <article class="project-card">
                <p class="muted">${project.type}</p>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="chip-row">${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
                <p><a href="${project.repo}" target="_blank" rel="noreferrer">Open repo →</a></p>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }
};
