const bootLines = [
  ["> Loading QA Agent OS...", "ok"],
  ["> Mounting skills: Playwright, API, OWASP, AI QA", ""],
  ["> Indexing portfolio projects", ""],
  ["> Starting recruiter assistant", ""],
  ["> Security scan baseline: clean", "ok"],
  ["> Agent ready ✓", "ok"]
];

const bootLog = document.querySelector("#bootLog");
const bootBar = document.querySelector("#bootBar");
const skipBoot = document.querySelector("#skipBoot");
let step = 0;

function enterDesktop() {
  window.location.href = "desktop.html";
}

function tickBoot() {
  if (step >= bootLines.length) {
    setTimeout(enterDesktop, 650);
    return;
  }

  const [text, tone] = bootLines[step];
  const line = document.createElement("p");
  line.className = tone;
  line.textContent = text;
  bootLog.append(line);
  bootBar.style.width = `${Math.round(((step + 1) / bootLines.length) * 100)}%`;
  step += 1;
  setTimeout(tickBoot, 520);
}

skipBoot.addEventListener("click", enterDesktop);
setTimeout(tickBoot, 350);
