window.TerminalApp = {
  title: "terminal.sh",
  history: [
    "QA Agent OS terminal ready.",
    "Try: help, summary, automation, security, ai, projects, contact, clear"
  ],
  commands: {
    help: "Commands: summary, automation, security, ai, projects, contact, clear",
    summary: "Mrunal Patil = Senior QA Engineer / SDET / AI Testing Specialist with 4.7 yrs exp.",
    automation: "Playwright E2E, POM, GitHub Actions, API mocking, Docker, reporting, 200+ regression cases.",
    security: "OWASP Top 10, SQLi, XSS, IDOR, auth/access-control testing, Postman, Burp Suite basics.",
    ai: "AI app QA: prompt/response validation, usability, hallucination-risk checks, state/session/file upload testing.",
    projects: "Projects: SureForms, AI Application QA, WooCommerce, Astra, SaaS E2E Framework, OWASP Checklist.",
    contact: "Email: mrunalsp09@gmail.com | LinkedIn: linkedin.com/in/mrunalpatil23 | GitHub: github.com/Mruunalll"
  },
  render() {
    return `
      <div class="terminal-output" id="terminalOutput">${this.history.map((line) => `<div>${line}</div>`).join("")}</div>
      <form class="terminal-form" id="terminalForm">
        <span>qa-agent:~$</span>
        <input id="terminalInput" autocomplete="off" autofocus />
      </form>
    `;
  },
  bind(root) {
    const output = root.querySelector("#terminalOutput");
    const form = root.querySelector("#terminalForm");
    const input = root.querySelector("#terminalInput");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const command = input.value.trim().toLowerCase();
      if (!command) return;
      input.value = "";

      if (command === "clear") {
        output.innerHTML = "";
        return;
      }

      const response = this.commands[command] || `Unknown command: ${command}. Type help.`;
      output.insertAdjacentHTML("beforeend", `<div><span class="prompt">qa-agent:~$</span> ${command}</div><div>${response}</div>`);
      output.scrollTop = output.scrollHeight;
    });

    input.focus();
  }
};
