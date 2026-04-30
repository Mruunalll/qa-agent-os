window.OSApps = window.OSApps || {};

window.OSApps.contact = {
  title: "contact.exe",
  render(data) {
    const profile = data.profile;
    return `
      <section class="app-hero">
        <h2>Contact Mrunal</h2>
        <p>${profile.title} · ${profile.location}</p>
      </section>
      <article class="glass-card">
        <p>${profile.summary}</p>
        <div class="contact-actions">
          <a href="mailto:${profile.email}">${profile.email}</a>
          <a href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a>
          <button type="button" data-copy="${profile.email}">Copy Email</button>
        </div>
      </article>
    `;
  }
};
