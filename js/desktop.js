const state = {
  data: null,
  activeApp: "experience"
};

const appMap = {
  experience: () => window.OSApps.experience,
  projects: () => window.OSApps.projects,
  skills: () => window.OSApps.skills,
  contact: () => window.OSApps.contact,
  terminal: () => window.TerminalApp,
  ai: () => window.AIAgentApp,
  security: () => ({
    title: "security_scan",
    render(data) {
      const checks = ["SQL Injection", "XSS", "IDOR", "Auth flaws", "API validation", "Regression after patch"];
      return `
        <section class="app-hero">
          <h2>OWASP Security Scan</h2>
          <p>Security testing profile from government-grade platform work.</p>
        </section>
        <div class="security-grid">
          ${checks.map((check, index) => `<div class="scan-row"><span>${check}</span><strong>${index < 5 ? "Validated" : "Regression OK"}</strong></div>`).join("")}
        </div>
        <article class="glass-card" style="margin-top: 14px">
          <p>${data.quickAnswers.security}</p>
        </article>
      `;
    }
  }),
  resume: () => ({
    title: "resume.pdf",
    render() {
      const resumePath = "assets/Mrunal_Patil_QA_Software_Testing_Engineer_Resume.pdf";
      return `
        <section class="app-hero">
          <h2>Resume</h2>
          <p>Preview and download Mrunal Patil's QA / Software Testing Engineer resume.</p>
        </section>
        <div class="resume-actions">
          <a href="${resumePath}" download>Download PDF</a>
          <a href="${resumePath}" target="_blank" rel="noreferrer">Open PDF</a>
          <a href="assets/resume.docx" download>Download DOCX</a>
        </div>
        <section class="resume-preview" aria-label="Resume PDF preview">
          <a href="${resumePath}" target="_blank" rel="noreferrer" aria-label="Open resume PDF preview">
            <img src="assets/resume-preview.png" alt="Preview of Mrunal Patil resume" />
          </a>
        </section>
      `;
    }
  })
};

function updateClock() {
  document.querySelector("#statusClock").textContent = new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}

async function loadData() {
  const response = await fetch("data/mrunal.json");
  state.data = await response.json();
}

function setSidebarOpen(open) {
  const sidebar = document.querySelector("#sidebar");
  const scrim = document.querySelector("#mobileScrim");
  const toggle = document.querySelector("#sidebarToggle");

  sidebar.classList.toggle("open", open);
  scrim.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

function renderApp(appName, options = {}) {
  const appFactory = appMap[appName];
  if (!appFactory || !state.data) return;

  const app = appFactory();
  const panel = document.querySelector("#contentPanel");
  const title = document.querySelector("#contentTitle");
  const workspace = document.querySelector(".workspace");

  state.activeApp = appName;
  title.textContent = app.title;
  workspace.dataset.app = appName;
  panel.className = `content-panel app-${appName}`;
  panel.innerHTML = app.render(state.data);

  document.querySelectorAll(".sidebar-item").forEach((button) => {
    const active = button.dataset.app === appName;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });

  if (typeof app.bind === "function") app.bind(panel, state.data);
  if (options.focusPanel) panel.focus({ preventScroll: true });
  setSidebarOpen(false);
}

function startRoleTyping() {
  const target = document.querySelector("#typedRole");
  const text = target.dataset.text || target.textContent.trim();
  target.dataset.text = text;
  target.textContent = "";

  let index = 0;
  const typeNext = () => {
    target.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) window.setTimeout(typeNext, 34);
  };

  typeNext();
}

function bindSidebar() {
  document.querySelectorAll(".sidebar-item").forEach((button) => {
    button.addEventListener("click", () => renderApp(button.dataset.app, { focusPanel: true }));
  });

  document.querySelector("#sidebarToggle").addEventListener("click", () => {
    const isOpen = document.querySelector("#sidebar").classList.contains("open");
    setSidebarOpen(!isOpen);
  });

  document.querySelector("#mobileScrim").addEventListener("click", () => setSidebarOpen(false));
}

function bindCopyButtons() {
  document.addEventListener("click", async (event) => {
    const target = event.target.closest("[data-copy]");
    if (!target) return;
    await navigator.clipboard.writeText(target.dataset.copy);
    const old = target.textContent;
    target.textContent = "Copied";
    setTimeout(() => {
      target.textContent = old;
    }, 1200);
  });
}

function bindKeyboardShortcuts() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setSidebarOpen(false);
  });
}

async function bootDesktop() {
  updateClock();
  setInterval(updateClock, 30000);
  startRoleTyping();
  await loadData();
  bindSidebar();
  bindCopyButtons();
  bindKeyboardShortcuts();
  renderApp("experience");
}

bootDesktop();
