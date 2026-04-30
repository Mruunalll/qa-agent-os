window.AIAgentApp = {
  title: "ai_agent.chat",
  quickQuestions: [
    "Is she good for manual testing?",
    "What automation has she done?",
    "Is she ready for QA Lead role?",
    "Show me her security experience"
  ],
  render() {
    return `
      <section class="app-hero">
        <h2>Recruiter AI Agent</h2>
        <p>Offline portfolio assistant powered by mrunal.json. Claude API hook can be added server-side without exposing keys.</p>
      </section>
      <div class="ai-chat">
        <div class="quick-questions">
          ${this.quickQuestions.map((q) => `<button type="button" data-question="${q}">${q}</button>`).join("")}
        </div>
        <div class="chat-log" id="chatLog">
          <div class="message">Ask about manual QA, automation, AI testing, leadership, or security experience.</div>
        </div>
        <form class="chat-form" id="chatForm">
          <input id="chatInput" placeholder="Ask: Can she lead QA for a SaaS product?" autocomplete="off" />
          <button type="submit">Ask</button>
        </form>
      </div>
    `;
  },
  bind(root, data) {
    const log = root.querySelector("#chatLog");
    const form = root.querySelector("#chatForm");
    const input = root.querySelector("#chatInput");

    const ask = (question) => {
      log.insertAdjacentHTML("beforeend", `<div class="message user">${question}</div>`);
      log.insertAdjacentHTML("beforeend", `<div class="message">${this.answer(question, data)}</div>`);
      log.scrollTop = log.scrollHeight;
    };

    root.querySelectorAll("[data-question]").forEach((button) => {
      button.addEventListener("click", () => ask(button.dataset.question));
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const question = input.value.trim();
      if (!question) return;
      input.value = "";
      ask(question);
    });
  },
  answer(question, data) {
    const q = question.toLowerCase();
    if (q.includes("manual")) return data.quickAnswers.manual;
    if (q.includes("automation") || q.includes("playwright")) return data.quickAnswers.automation;
    if (q.includes("lead") || q.includes("strategy") || q.includes("own")) return data.quickAnswers.lead;
    if (q.includes("security") || q.includes("owasp")) return data.quickAnswers.security;
    if (q.includes("ai") || q.includes("chatgpt")) {
      const project = data.projects.find((item) => item.type === "AI Testing");
      return `Yes. ${project.description} This shows AI app QA coverage across usability, state, file upload, RTM, and security observations.`;
    }
    return `${data.profile.name} is strongest for Senior QA / SDET roles needing Playwright automation, API testing, security awareness, SaaS release ownership, and AI product validation.`;
  }
};
