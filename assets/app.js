(function(){
  const P = window.PORTFOLIO;

  // theme
  const themeKey = "pn_theme";
  const root = document.documentElement;
  function setTheme(t){
    if(t === "light") root.setAttribute("data-theme","light");
    else root.removeAttribute("data-theme");
    localStorage.setItem(themeKey, t);
  }
  setTheme(localStorage.getItem(themeKey) || "dark");
  document.getElementById("btnTheme").addEventListener("click", ()=>{
    const cur = root.getAttribute("data-theme")==="light" ? "light" : "dark";
    setTheme(cur==="light" ? "dark" : "light");
  });

  // links
  const a = (id, href) => { const el=document.getElementById(id); el.href=href; return el; };
  a("linkGithub", P.links.github);
  a("linkLinkedIn", P.links.linkedin);
  a("linkResume", P.links.resume);
  a("footGithub", P.links.github);
  a("footLinkedIn", P.links.linkedin);
  a("footResume", P.links.resume);

  const mailto = `mailto:${P.profile.email}?subject=Full-time%20Role%20-%20Prudhvi%20Nelavelli&body=Hi%20Prudhvi,%0A%0A`;
  a("linkEmail", mailto);
  a("footEmail", mailto);

  // header
  document.getElementById("name").textContent = P.profile.name;
  document.getElementById("headline").textContent = P.profile.headline;
  const avatar = document.getElementById("avatar");
  avatar.src = P.profile.avatarUrl;
  avatar.onerror = ()=>{ avatar.style.display="none"; };

  // last updated
  const lu = document.getElementById("lastUpdated");
  const now = new Date();
  const stamp = (P.profile.lastUpdated === "Auto")
    ? now.toLocaleDateString(undefined,{year:"numeric",month:"short",day:"2-digit"})
    : P.profile.lastUpdated;
  lu.textContent = `Last updated: ${stamp}`;

  // meta badges
  const meta = document.getElementById("metaBadges");
  function mkBadge(dotCls, label, value){
    const b = document.createElement("div");
    b.className = "badge";
    const d = document.createElement("span"); d.className = "dot "+dotCls;
    const t = document.createElement("span");
    t.innerHTML = `${label}: <b>${value}</b>`;
    b.appendChild(d); b.appendChild(t);
    return b;
  }
  meta.appendChild(mkBadge("hard","Difficulty", P.meta.difficulty));
  meta.appendChild(mkBadge("open","Status", P.profile.status));
  meta.appendChild(mkBadge("loc","Location", P.profile.location));

  // left tabs
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const crumbTitle = document.getElementById("crumbTitle");
  const leftContent = document.getElementById("leftContent");

  function section(title, innerHTML){
    const s = document.createElement("div");
    s.className="section";
    const h = document.createElement("h2");
    h.textContent=title;
    const body = document.createElement("div");
    body.innerHTML = innerHTML;
    s.appendChild(h); s.appendChild(body);
    return s;
  }

  function renderDescription(){
    leftContent.innerHTML = "";
    const d = P.description;

    leftContent.appendChild(section("Problem Statement", `
      <p class="p">${d.overview.map(x=>escapeHtml(x)).join("<br/><br/>")}</p>
    `));

    leftContent.appendChild(section("Key Highlights", `
      <ul class="list">${d.highlights.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
    `));

    leftContent.appendChild(section("Supported Languages", `
      <div class="kv">
        <div class="k">Languages</div>
        <div class="v">${d.supportedLanguages.map(escapeHtml).join(", ")}</div>
      </div>
    `));

    leftContent.appendChild(section("Tech Stack Summary", `
      <div class="kv">
        ${d.stacks.map(row=>`<div class="k">${escapeHtml(row.k)}</div><div class="v">${escapeHtml(row.v)}</div>`).join("")}
      </div>
    `));

    leftContent.appendChild(section("Constraints", `
      <ul class="list">${d.constraints.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
    `));

    leftContent.appendChild(section("Examples", `
      ${d.examples.map((ex,i)=>`
        <div class="card" style="margin-top:${i?10:0}px">
          <div class="title">Example ${i+1}</div>
          <div class="meta">Input: ${escapeHtml(ex.input)} → Output: ${escapeHtml(ex.output)}</div>
          <ul>
            <li>${escapeHtml(ex.note)}</li>
          </ul>
        </div>
      `).join("")}
    `));
  }

  function renderSolutions(){
    leftContent.innerHTML = "";
    leftContent.appendChild(section("Solutions (Projects)", `
      <p class="p">Projects are presented like accepted solutions: concise impact, real stack, and links.</p>
    `));

    const grid = document.createElement("div");
    grid.className = "grid2";
    P.projects.forEach(pr=>{
      const c = document.createElement("div");
      c.className="card";
      c.innerHTML = `
        <div class="title">${escapeHtml(pr.title)}</div>
        <div class="meta">${escapeHtml(pr.tags.join(" • "))}</div>
        <div style="margin-top:8px; display:flex; gap:10px; flex-wrap:wrap;">
          ${(pr.links||[]).map(l=>`<a href="${l.url}" target="_blank" rel="noreferrer">${escapeHtml(l.label)}</a>`).join("")}
        </div>
        <ul>${pr.bullets.map(b=>`<li>${escapeHtml(b)}</li>`).join("")}</ul>
      `;
      grid.appendChild(c);
    });
    leftContent.appendChild(grid);

    leftContent.appendChild(section("GitHub Projects", `
      <p class="p">
        Browse all repositories here:
        <a style="color:var(--link)" href="${P.links.github}" target="_blank" rel="noreferrer">${P.links.github}</a>
      </p>
      
    `));
  }

  function renderSubmissions(){
    leftContent.innerHTML = "";
    leftContent.appendChild(section("Submission History (Experience)", `
      <p class="p">Every role is an accepted submission: ownership, production impact, and end-to-end delivery.</p>
      <div class="hr"></div>
      <div class="kv">
        <div class="k">Preferred Roles</div><div class="v">Backend / Full-Stack (Java / .NET)</div>
        <div class="k">Availability</div><div class="v">Actively interviewing for full-time roles</div>
        <div class="k">Focus Areas</div><div class="v">Microservices, event-driven workflows, performance, observability</div>
      </div>
    `));

    P.experience.forEach((x, idx)=>{
      leftContent.appendChild(section(`${x.company} — ${x.role}`, `
        <div class="kv">
          <div class="k">Dates</div><div class="v">${escapeHtml(x.dates)}</div>
          <div class="k">Location</div><div class="v">${escapeHtml(x.location)}</div>
          <div class="k">Stack</div><div class="v">${escapeHtml(x.stack.join(", "))}</div>
        </div>
        <ul class="list">${x.bullets.map(b=>`<li>${escapeHtml(b)}</li>`).join("")}</ul>
      `));
    });
  }

  function renderDiscuss(){
    leftContent.innerHTML = "";
    const d = P.discuss;

    leftContent.appendChild(section("Competitive Programming", `
      <ul class="list">${d.competitive.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
    `));

    leftContent.appendChild(section("System Design Notes (How I Build)", `
      <ul class="list">${d.systemDesign.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
    `));

    leftContent.appendChild(section("What I'm Looking For", `
      <ul class="list">${d.whatIWant.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
      <div class="hr"></div>
      <p class="p">
        Want to move fast? Email me with your role + stack and I’ll reply quickly.
      </p>
    `));
  }

  function renderContact(){
    leftContent.innerHTML="";
    leftContent.appendChild(section("Contact", `
      <div class="kv">
        <div class="k">Email</div><div class="v"><a style="color:var(--link)" href="${mailto}">${escapeHtml(P.profile.email)}</a></div>
        <div class="k">Phone</div><div class="v">${escapeHtml(P.profile.phone)}</div>
        <div class="k">GitHub</div><div class="v"><a style="color:var(--link)" href="${P.links.github}" target="_blank" rel="noreferrer">${escapeHtml(P.links.github)}</a></div>
        <div class="k">LinkedIn</div><div class="v"><a style="color:var(--link)" href="${P.links.linkedin}" target="_blank" rel="noreferrer">${escapeHtml(P.links.linkedin)}</a></div>
        <div class="k">Resume</div><div class="v"><a style="color:var(--link)" href="${P.links.resume}" target="_blank" rel="noreferrer">Open Resume (PDF)</a></div>
      </div>
      <div class="hr"></div>
      <p class="p">
        Recruiters: I’m actively seeking full-time roles in Java / .NET backend or full-stack teams.
        I can ramp quickly, own features end-to-end, and deliver production-grade systems.
      </p>
    `));
  }

  function setTab(tabName){
    tabs.forEach(t=>t.classList.toggle("active", t.dataset.tab===tabName));
    crumbTitle.textContent = tabName.charAt(0).toUpperCase()+tabName.slice(1);
    if(tabName==="description") renderDescription();
    else if(tabName==="solutions") renderSolutions();
    else if(tabName==="submissions") renderSubmissions();
    else if(tabName==="discuss") renderDiscuss();
    else renderContact();
  }

  tabs.forEach(t=>t.addEventListener("click", ()=>setTab(t.dataset.tab)));
  setTab("description");

  // Right editor: language dropdown like LeetCode
  const langSelect = document.getElementById("langSelect");
  const codeBlock = document.getElementById("codeBlock");
  const btnCopy = document.getElementById("btnCopy");
  const btnReset = document.getElementById("btnReset");
  const btnRun = document.getElementById("btnRun");
  const consoleBody = document.getElementById("consoleBody");
  const ctabs = Array.from(document.querySelectorAll(".ctab"));

  const langs = Object.keys(P.snippets);
  langs.forEach(l=>{
    const o=document.createElement("option");
    o.value=l; o.textContent=l;
    langSelect.appendChild(o);
  });

  let defaultLang = "Java";
  if(!P.snippets[defaultLang]) defaultLang = langs[0];
  let currentLang = defaultLang;
  let defaultCode = P.snippets[currentLang].code;

  function renderCode(){
    codeBlock.textContent = P.snippets[currentLang].code;
  }

  function renderTestcase(){
    const t = P.testcase;
    consoleBody.innerHTML = `
      <div class="consoleLabel">Input:</div>
      <div class="consoleBox">${escapeHtml(t.input).replace(/\n/g,"<br/>")}</div>
      <div class="consoleLabel">Output:</div>
      <div class="consoleBox" id="outBox">${escapeHtml(t.acceptedOutput.status)}</div>
      <div class="consoleLabel">Runtime / Memory</div>
      <div class="kpiRow"><span>Runtime: <b>${escapeHtml(t.acceptedOutput.runtime)}</b></span><span>Memory: <b>${escapeHtml(t.acceptedOutput.memory)}</b></span></div>
    `;
  }

  function renderResult(statusCls, statusText, runtime, memory){
    consoleBody.innerHTML = `
      <div class="consoleLabel">Test Result</div>
      <div class="consoleBox">
        Status: <span class="${statusCls}">${escapeHtml(statusText)}</span>
      </div>
      <div class="consoleLabel">Details</div>
      <div class="kpiRow"><span>Runtime: <b>${escapeHtml(runtime)}</b></span><span>Memory: <b>${escapeHtml(memory)}</b></span></div>
      <div class="consoleLabel">Notes</div>
      <div class="consoleBox">
        Tip: show impact fast — projects + experience + links are one click away.
      </div>
    `;
  }

  function setConsoleTab(name){
    ctabs.forEach(c=>c.classList.toggle("active", c.dataset.ctab===name));
    if(name==="testcase") renderTestcase();
    else renderResult("statusAccepted", "Accepted ✅", P.testcase.acceptedOutput.runtime, P.testcase.acceptedOutput.memory);
  }
  ctabs.forEach(c=>c.addEventListener("click", ()=>setConsoleTab(c.dataset.ctab)));
  setConsoleTab("testcase");

  langSelect.value = currentLang;
  renderCode();

  langSelect.addEventListener("change", ()=>{
    currentLang = langSelect.value;
    renderCode();
  });

  btnReset.addEventListener("click", ()=>{
    renderCode();
    setConsoleTab("testcase");
  });

  btnCopy.addEventListener("click", async ()=>{
    try{
      await navigator.clipboard.writeText(codeBlock.textContent);
      btnCopy.textContent = "Copied";
      setTimeout(()=>btnCopy.textContent="Copy", 900);
    }catch{
      btnCopy.textContent="Copy failed";
      setTimeout(()=>btnCopy.textContent="Copy", 900);
    }
  });

  btnRun.addEventListener("click", ()=>{
    setConsoleTab("result");
    renderResult("statusRunning","Running…", "—", "—");
    setTimeout(()=>{
      renderResult("statusAccepted","Accepted ✅", P.testcase.acceptedOutput.runtime, P.testcase.acceptedOutput.memory);
    }, 650);
  });

  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, s => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[s]));
  }
})();