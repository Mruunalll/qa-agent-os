# QA Agent OS

> Interactive OS-style portfolio for Senior QA Engineer & SDET — Mrunal Patil

Ask the AI agent about my experience  
Explore Playwright automation projects  
View OWASP security testing work  
Download resume

Live: https://mruunalll.github.io/qa-agent-os

## Repository

**Name:** `qa-agent-os`

**Description:**

```text
Interactive OS-style QA portfolio — AI-powered recruiter agent, Playwright projects, OWASP security, and 4.7 years of SaaS testing experience. Built by Mrunal Patil.
```

**Topics:**

```text
qa-portfolio
software-testing
playwright
owasp-security
ai-testing
sdet
manual-testing
github-pages
javascript
saas-testing
```

## Features

- Boot screen with loading animation
- Modern dark glass desktop
- Desktop icons and dock
- Draggable app windows
- Experience timeline
- QA project cards
- Skill matrix
- Terminal with recruiter commands
- Offline recruiter AI chat powered by `data/mrunal.json`
- OWASP security scan app
- Resume PDF and DOCX downloads
- Contact app

## Run Locally

Open `index.html`, or serve locally:

```bash
python3 -m http.server 8090
```

Then visit:

```text
http://localhost:8090
```

## GitHub Pages

Push repo to GitHub, then enable Pages from the `main` branch root.

```bash
git branch -M main
git add .
git commit -m "init: QA Agent OS portfolio"
git remote add origin https://github.com/Mruunalll/qa-agent-os.git
git push -u origin main
```

## AI Agent Note

`js/ai-agent.js` uses local JSON answers. For real Claude API, add a backend/serverless endpoint and call it from `ai-agent.js`. Do not expose API keys in frontend JavaScript.
