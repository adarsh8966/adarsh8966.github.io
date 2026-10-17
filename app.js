/* Small, dependency-free site renderer. Content is editable in content.js. */
(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data) return;
  const person = data.person;
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(person.email)}`;
  const app = document.getElementById('app');
  const esc = (input = '') => String(input).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const embeddedMedia = window.PORTFOLIO_MEDIA || {};
  const safeUrl = url => embeddedMedia[url] || (/^(https?:\/\/|mailto:|media\/|assets\/)/i.test(url || '') ? esc(url) : '');
  // The offline preview embeds the PDF; published pages serve it as a regular file.
  const resumeAttrs = () => embeddedMedia[person.resume] ? 'href="#" data-inline-resume="true"' : `href="${safeUrl(person.resume)}" target="_blank" rel="noopener noreferrer"`;
  const symbols = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    diagonal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7M5 12h14"/></svg>'
  };

  // These are abstract engineering illustrations, not photos or literal CAD drawings.
  const gridLines = `<g stroke="currentColor" opacity=".12" stroke-width="1">${Array.from({ length: 14 }, (_, i) => `<path d="M${i * 44} 0v390"/>`).join('')}${Array.from({ length: 10 }, (_, i) => `<path d="M0 ${i * 43}h560"/>`).join('')}</g>`;
  const points = `<g stroke="currentColor" opacity=".24"><path d="M23 25h24m-12-12v24M510 344h24m-12-12v24"/></g>`;
  const blueprints = {
    rover: `<g fill="none" stroke="currentColor"><circle cx="290" cy="200" r="163" opacity=".13" stroke-dasharray="3 8"/><circle cx="290" cy="200" r="128" opacity=".16"/><circle cx="290" cy="200" r="91" opacity=".2"/><path d="M115 190h350M291 36v328" opacity=".12" stroke-dasharray="3 7"/><g transform="translate(292 200) rotate(-24)"><rect x="-132" y="-96" width="264" height="192" rx="35" fill="#122a2b" stroke-width="2"/><rect x="-116" y="-81" width="232" height="162" rx="25" fill="#152f30" opacity=".85"/><g fill="#10181b" stroke-width="2"><rect x="-162" y="-94" width="46" height="70" rx="15"/><rect x="116" y="-94" width="46" height="70" rx="15"/><rect x="-162" y="24" width="46" height="70" rx="15"/><rect x="116" y="24" width="46" height="70" rx="15"/></g><g stroke-width="1.3" opacity=".7"><path d="M-154-84l32 50m-32-25 29 36m-29 72 30 38m-30-61 30 38M123-84l30 48m-30-23 30 38m-30 48 30 45m-30-21 30 38"/></g><rect x="-75" y="-54" width="150" height="108" rx="12" stroke-width="1.4"/><rect x="-51" y="-31" width="102" height="63" rx="7" fill="#0d171b" stroke-width="1.3"/><circle cx="0" cy="0" r="22" stroke-width="2"/><circle cx="0" cy="0" r="8" fill="currentColor" opacity=".7"/><path d="M-88-65h176M-88 65h176" opacity=".25"/><g fill="currentColor" stroke="none"><circle cx="-93" cy="-61" r="4"/><circle cx="93" cy="-61" r="4"/><circle cx="-93" cy="61" r="4"/><circle cx="93" cy="61" r="4"/></g></g><g stroke-width="1.2" opacity=".8"><path d="M180 120 115 80H52M410 265l74 35h46M293 67l29-29h68"/><circle cx="180" cy="120" r="3" fill="currentColor"/><circle cx="410" cy="265" r="3" fill="currentColor"/></g></g><g class="illustration-label" fill="currentColor"><text x="53" y="73">HOLONOMIC DRIVE</text><text x="392" y="33">02 / LiDAR</text><text x="446" y="318">4 × DC</text><text x="52" y="337">FL / FR / RL / RR</text></g>`,
    tracker: `<g fill="none" stroke="currentColor"><circle cx="300" cy="185" r="163" opacity=".12" stroke-dasharray="4 7"/><circle cx="300" cy="185" r="117" opacity=".14"/><g transform="translate(282 195) rotate(-19)"><rect x="-105" y="-141" width="210" height="282" rx="54" stroke-width="2.5" fill="#202132"/><rect x="-84" y="-119" width="168" height="238" rx="35" opacity=".4" stroke-width="1.5"/><rect x="-61" y="-78" width="122" height="158" rx="9" fill="#171b2b" stroke-width="1.5"/><rect x="-42" y="-59" width="84" height="62" rx="7" stroke-dasharray="3 5" opacity=".7"/><path d="M-44 36h90M-44 48h58M-44 60h79" opacity=".5"/><g fill="currentColor" stroke="none"><circle cx="-55" cy="-91" r="5"/><circle cx="55" cy="-91" r="5"/><circle cx="-55" cy="93" r="5"/><circle cx="55" cy="93" r="5"/></g><circle cx="0" cy="-28" r="18"/><path d="M-13-28h26M0-41v26"/><path d="M-105 0h-46M105 0h47" opacity=".8"/></g><path d="M30 275h111l33-49 25 22 28-53 28 48 24-10 27-55 33 31 24-16 32-57 37 20 23-33" stroke-width="2" opacity=".55"/></g><g class="illustration-label" fill="currentColor"><text x="32" y="265">IMU SIGNAL</text><text x="410" y="61">BMI323</text><text x="414" y="83">BLE TX</text><text x="375" y="350">nRF52840</text></g>`,
    arm: `<g fill="none" stroke="currentColor"><circle cx="283" cy="197" r="151" opacity=".13" stroke-dasharray="4 8"/><path d="M50 315h460M85 332h390" opacity=".3"/><g stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M160 312h118l-17-37h-83z" fill="#152a2f"/><circle cx="221" cy="264" r="29" fill="#16363b"/><path d="M221 264 285 177" stroke-width="29" stroke="#1a4044"/><path d="M221 264 285 177" stroke-width="2"/><circle cx="285" cy="177" r="25" fill="#17363d"/><path d="m285 177 113-51" stroke-width="23" stroke="#17363d"/><path d="m285 177 113-51" stroke-width="2"/><circle cx="398" cy="126" r="19" fill="#17363d"/><path d="m398 126 50 46" stroke-width="17" stroke="#17363d"/><path d="m398 126 50 46" stroke-width="2"/><circle cx="448" cy="172" r="12" fill="#12353a"/><path d="m448 172 23 31m-23-31-26 22m49 9 18-7m-67-2-15 15" stroke-width="5"/><path d="M285 177 328 310M398 126l67-68" opacity=".17" stroke-dasharray="4 7"/></g><g opacity=".5"><path d="M221 264l-75-72H63M397 126l44-75h73"/><circle cx="221" cy="264" r="5" fill="currentColor"/><circle cx="397" cy="126" r="4" fill="currentColor"/></g></g><g class="illustration-label" fill="currentColor"><text x="60" y="185">JOINT / 01</text><text x="432" y="44">TCP</text><text x="74" y="357">SPI + CAN</text><text x="386" y="354">100 Hz</text></g>`,
    drone: `<g fill="none" stroke="currentColor"><circle cx="288" cy="188" r="150" opacity=".12" stroke-dasharray="4 7"/><g stroke-width="2"><path d="M289 188 158 80M289 188 428 80M289 188 150 299M289 188l145 112" stroke-width="17" stroke="#2d2c26"/><path d="M289 188 158 80M289 188 428 80M289 188 150 299M289 188l145 112" stroke-width="2"/><g fill="#29251f"><circle cx="158" cy="80" r="55"/><circle cx="428" cy="80" r="55"/><circle cx="150" cy="299" r="55"/><circle cx="434" cy="300" r="55"/></g><g opacity=".6"><circle cx="158" cy="80" r="40" stroke-dasharray="5 7"/><circle cx="428" cy="80" r="40" stroke-dasharray="5 7"/><circle cx="150" cy="299" r="40" stroke-dasharray="5 7"/><circle cx="434" cy="300" r="40" stroke-dasharray="5 7"/></g><rect x="240" y="148" width="97" height="81" rx="17" fill="#413326"/><path d="M240 189h97M289 148v81" opacity=".45"/><rect x="273" y="229" width="38" height="50" rx="8" fill="#392c24"/><path d="M292 279v50l40-20-40-15-37 16" stroke-width="2.6"/><circle cx="292" cy="279" r="8" fill="#1a1513"/></g></g><g class="illustration-label" fill="currentColor"><text x="45" y="190">4 × ROTOR</text><text x="366" y="366">ACTUATOR</text><text x="50" y="358">ITERATION 03</text></g>`,
    fibers: `<g fill="none" stroke="currentColor"><circle cx="282" cy="197" r="150" opacity=".13"/><path d="M87 315h389M88 98v217" opacity=".45"/><g stroke-width="2"><rect x="121" y="180" width="60" height="135" rx="3" fill="#244039"/><rect x="219" y="118" width="60" height="197" rx="3" fill="#244039"/><rect x="317" y="163" width="60" height="152" rx="3" fill="#244039"/><rect x="415" y="231" width="60" height="84" rx="3" fill="#244039"/></g><path d="m151 179 98-61 98 45 98 68" stroke-width="2" stroke-dasharray="5 7"/><g fill="currentColor"><circle cx="151" cy="179" r="5"/><circle cx="249" cy="118" r="5"/><circle cx="347" cy="163" r="5"/><circle cx="445" cy="231" r="5"/></g></g><g class="illustration-label" fill="currentColor"><text x="102" y="71">WEIGHTED CRITERIA</text><text x="112" y="338">01</text><text x="213" y="338">02</text><text x="314" y="338">03</text><text x="412" y="338">04</text></g>`,
    ai: `<g fill="none" stroke="currentColor"><circle cx="283" cy="189" r="145" opacity=".12" stroke-dasharray="5 7"/><g stroke-width="1.5" opacity=".5">${[90,190,290,390,485].map((x,i)=>[85,152,230,310].slice(i===0?1:0,i===4?3:4).map(y=>`<path d="M${x} ${y}L${x+95} ${y-20}"/>`).join('')).join('')}<path d="M102 130 208 85 292 173 395 106 476 190 395 284 292 232 208 310 102 230 208 85M102 130l190 102M208 310l184-204"/></g><g fill="#202a37" stroke-width="2">${[[102,130],[102,230],[208,85],[208,160],[208,310],[292,173],[292,232],[395,106],[395,190],[395,284],[476,190]].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="${i===5?19:12}"/>`).join('')}</g></g><g class="illustration-label" fill="currentColor"><text x="48" y="63">LORA / ADAPTER</text><text x="410" y="345">EVAL LOOP</text></g>`,
    aircraft: `<g fill="none" stroke="currentColor"><circle cx="283" cy="187" r="151" opacity=".15" stroke-dasharray="5 8"/><path d="M45 190h468M280 30v320" opacity=".15"/><path d="M280 56c-8 0-14 15-16 43l-6 75-156 67v24l161-32 7 87-44 28v14l54-10 54 10v-14l-44-28 7-87 161 32v-24l-156-67-6-75c-2-28-8-43-16-43Z" fill="#193038" stroke-width="2"/><path d="M280 74v243M133 248l130-25m165 25-131-25" opacity=".46" stroke-dasharray="5 7"/><path d="M86 107h70m242 207h71" opacity=".4"/></g><g class="illustration-label" fill="currentColor"><text x="54" y="99">PLANFORM STUDY</text><text x="398" y="306">AERO / 01</text></g>`,
    cards: `<g fill="none" stroke="currentColor"><circle cx="282" cy="195" r="148" stroke-dasharray="5 10" opacity=".25"/><circle cx="282" cy="195" r="112" opacity=".26" stroke-dasharray="4 8"/><g opacity=".45" stroke-width="2"><path d="M282 42v52M282 296v52M129 195h52M383 195h52M175 88l37 37M351 265l37 37M389 88l-36 36M213 265l-36 36"/></g><g transform="translate(282 195)"><circle r="74" fill="#1b3241" stroke-width="2.5"/><circle r="52" stroke-width="1.5" stroke-dasharray="4 7"/><circle r="19" fill="#10222e" stroke-width="2"/><path d="M0-16V-95" stroke-width="10" stroke-linecap="round"/><path d="M0-95h-36" stroke-width="4" stroke-linecap="round"/><rect x="-48" y="-119" width="58" height="34" rx="4" fill="#243a48" stroke-width="2"/><rect x="-42" y="-113" width="46" height="22" rx="2" stroke-width="1" opacity=".65"/><path d="M0 0l88-88" stroke-width="1.5" stroke-dasharray="5 6"/></g><g stroke-width="2" opacity=".82"><rect x="250" y="22" width="63" height="38" rx="4" fill="#23313b"/><rect x="423" y="174" width="63" height="38" rx="4" fill="#23313b"/><rect x="248" y="326" width="63" height="38" rx="4" fill="#23313b"/><rect x="75" y="174" width="63" height="38" rx="4" fill="#23313b"/><rect x="374" y="69" width="58" height="35" rx="4" fill="#23313b" transform="rotate(43 402 86)"/><rect x="128" y="278" width="58" height="35" rx="4" fill="#23313b" transform="rotate(43 156 295)"/></g><path d="M282 62v24M282 305v23M140 195h23M399 195h22" opacity=".5"/></g><g class="illustration-label" fill="currentColor"><text x="36" y="59">6 × PLAYER LAYOUT</text><text x="383" y="345">SERVO / 360°</text><text x="39" y="351">ARDUINO UNO</text></g>`,
    app: `<g fill="none" stroke="currentColor"><circle cx="288" cy="194" r="155" opacity=".13"/><rect x="184" y="32" width="207" height="327" rx="31" fill="#273029" stroke-width="2.5"/><rect x="200" y="56" width="175" height="274" rx="14" fill="#151d19" stroke-width="1"/><rect x="252" y="43" width="70" height="6" rx="3" fill="currentColor" opacity=".5"/><g stroke-width="1.3"><rect x="217" y="85" width="141" height="81" rx="8" fill="#253e33"/><path d="M228 145l29-24 24 9 24-31 41 21" stroke-width="2.5"/><path d="M220 197h113M220 216h90M220 235h124" opacity=".4"/><rect x="220" y="262" width="60" height="48" rx="7"/><rect x="292" y="262" width="60" height="48" rx="7"/></g><circle cx="288" cy="346" r="7"/></g><g class="illustration-label" fill="currentColor"><text x="64" y="89">DATA → FEEDBACK</text><text x="414" y="336">MOBILE</text></g>`
  };
  function art(type, extra = '') {
    return `<svg class="blueprint ${extra}" viewBox="0 0 560 390" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abstract technical illustration of ${esc(type)} engineering work"><g class="blueprint-grid">${gridLines}</g>${points}${blueprints[type] || blueprints.ai}<g fill="currentColor" opacity=".34"><circle cx="530" cy="32" r="2"/><circle cx="38" cy="353" r="2"/></g></svg>`;
  }
  function brand() { return `<a class="brand" href="#/" aria-label="Adarsh Dodeja, home"><span class="brand-mark">A<span class="brand-dot">.</span></span><span class="brand-name">ADARSH<span>DODEJA</span></span></a>`; }
  function external(url, label, className = 'text-link') { return url ? `<a class="${className}" href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${label}${symbols.diagonal}</a>` : ''; }
  function header() {
    return `<header class="site-header"><div class="site-header-inner shell">${brand()}<nav class="desktop-nav" aria-label="Primary navigation"><a href="#/section/work">Work<span class="nav-sup">01</span></a><a href="#/section/expertise">Expertise<span class="nav-sup">02</span></a><a href="#/section/about">About<span class="nav-sup">03</span></a></nav><div class="nav-actions"><a class="header-contact" href="${esc(gmailCompose)}" target="_blank" rel="noopener noreferrer" aria-label="Compose an email to ${esc(person.email)} in Gmail">Let's connect ${symbols.diagonal}</a><button type="button" id="menu-toggle" class="menu-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="Toggle navigation"><span></span><span></span></button></div></div><nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden><a href="#/section/work">Selected work</a><a href="#/section/expertise">Expertise</a><a href="#/section/about">About</a><a href="#/section/contact">Contact</a><a href="${esc(gmailCompose)}" target="_blank" rel="noopener noreferrer">Email me in Gmail ↗</a>${person.resume ? `<a ${resumeAttrs()}>Résumé ↗</a>` : ''}</nav></header>`;
  }
  function footer() {
    const year = new Date().getFullYear();
    return `<footer class="site-footer"><div class="shell footer-inner"><div class="footer-brand"><span class="footer-initial">A.</span><span>Built around the details.</span></div><span>© ${year} ${esc(person.name)}</span><div class="footer-links">${external(person.github, 'GitHub')}${person.linkedin ? external(person.linkedin, 'LinkedIn') : ''}<a href="#/">Back to top ↑</a></div></div></footer>`;
  }
  function eyebrow(no, title, tail = '') { return `<div class="section-eyebrow"><span class="eyebrow-index">${esc(no)}</span><span class="eyebrow-dash"></span><span>${esc(title)}</span>${tail ? `<span class="eyebrow-tail">${esc(tail)}</span>` : ''}</div>`; }
  function button(label, href, style = 'primary') { const attrs = label === 'View résumé' && person.resume ? resumeAttrs() : `href="${esc(href)}"`; return `<a class="btn btn-${style}" ${attrs}>${label}<span class="btn-icon">${symbols.diagonal}</span></a>`; }
  function tags(items, limit = 5) { return `<div class="tags">${items.slice(0, limit).map(x => `<span>${esc(x)}</span>`).join('')}</div>`; }
  function renderProjectCard(p, i, featured = false, secondary = false) {
    const image = p.coverImage ? `<img class="project-cover" src="${safeUrl(p.coverImage)}" alt="${esc(p.title)}" loading="lazy" decoding="async" style="object-position:${esc(p.coverPosition || "center center")}"/>` : art(p.kind);
    return `<a class="project-card ${featured ? 'project-card-lead' : ''} ${secondary ? 'project-card-secondary' : ''} tone-${esc(p.accent)} reveal" href="#/work/${esc(p.slug)}" data-category="${esc(p.category)}" aria-label="View ${esc(p.title)} project case study">
      <div class="project-card-art">${image}<div class="visual-corner"><span class="live-pip"></span>${p.mediaStage ? esc(p.mediaStage) : (p.status === 'In progress' ? 'ACTIVE DEVELOPMENT' : 'PROJECT ARCHIVE')}</div><div class="corner-cross" aria-hidden="true">＋</div></div>
      <div class="project-card-content"><div class="project-topline"><span>${esc(p.index)} / ${esc(p.category)}</span><span>${esc(p.year)}</span></div><div class="card-heading-row"><h3>${esc(p.title)}</h3><span class="card-arrow">${symbols.diagonal}</span></div><p>${esc(p.cardDescription)}</p><div class="project-card-bottom">${tags(p.stack, featured ? 5 : 3)}<span class="project-card-discover">VIEW CASE STUDY ${symbols.arrow}</span></div></div></a>`;
  }
  function renderHome() {
    document.title = `${person.name} — Robotics & Systems Engineering`;
    const featured = data.projects.filter(p => p.featured);
    const other = data.projects.filter(p => !p.featured);
    const categories = ['All work', 'Robotics', 'Embedded', 'Hardware', 'Aerospace', 'Software', 'Research'];
    return `${header()}<main id="main-content">
      <section class="hero shell" id="home"><div class="hero-topline reveal"><div class="status-label"><span class="status-light"></span>${esc(person.availability)}</div><span class="hero-coordinate">BASED IN BUFFALO, NY / USA</span></div>
        <div class="hero-main"><div class="hero-copy"><div class="hero-kicker reveal"><span class="kicker-square"></span> ROBOTICS / EMBEDDED / AEROSPACE</div><h1 class="hero-title reveal">I build things<br>that <span class="title-outline">move,</span> <span class="title-outline">sense,</span><br>and <span class="title-highlight">think<span class="title-period">.</span></span></h1><p class="hero-description reveal">${esc(person.intro)}</p><div class="hero-actions reveal">${button('Explore the work', '#/section/work')}${button('View résumé', safeUrl(person.resume), 'quiet')}</div><div class="hero-footnote reveal"><span class="footnote-rule"></span><span>DESIGN → INTEGRATE → TEST → ITERATE</span></div></div>
          <div class="hero-visual reveal"><div class="hero-visual-top"><span>FIELD NOTES / 004</span><span class="visual-top-indicator"><i></i> REAL HARDWARE</span></div><div class="hero-visual-plate hero-photo-plate"><img src="${safeUrl('media/drone-flight-cover.webp')}" alt="Quadcopter carrying the custom cutting mechanism during a field test" fetchpriority="high"/><div class="hero-photo-stamp">DESIGN<br>BUILD<br>FLY</div></div><div class="hero-visual-bottom"><span><b>FIELD TESTED</b>COUNTER-DRONE MECHANISM</span><span><b>METHOD</b>CAMERA · FPV · PATH PLANNING</span><a href="#/work/counter-drone-mechanism" aria-label="View counter-drone case study">${symbols.diagonal}</a></div></div></div>
        <div class="hero-bottomline reveal"><span>SCROLL TO EXPLORE <span class="down-pointer">↓</span></span><span>SELECTED ENGINEERING WORK <b>2025 / 2026</b></span></div>
      </section>
      <div class="skill-ticker" aria-label="Engineering disciplines"><div class="skill-ticker-track"><span>ROBOTICS</span><i>✳</i><span>EMBEDDED SYSTEMS</span><i>✳</i><span>NONLINEAR CONTROL</span><i>✳</i><span>HARDWARE PROTOTYPING</span><i>✳</i><span>APPLIED AI</span><i>✳</i><span>AEROSPACE</span><i>✳</i></div></div>
      <section class="work-section shell section-space" id="work">${eyebrow('01', 'SELECTED WORK', 'THE WORK SPEAKS IN SYSTEMS')}<div class="section-heading-row reveal"><div><h2>Not just concepts.<br><em>Things I’ve worked on.</em></h2><p>Engineering case studies, from firmware and mechanical prototyping to control systems and research.</p></div><span class="section-large-number">/ ${String(data.projects.length).padStart(2, '0')}</span></div>
        <div class="filter-bar reveal" aria-label="Filter projects"><div class="filter-buttons" role="group" aria-label="Project category">${categories.map((c, i) => `<button class="filter-btn ${i === 0 ? 'selected' : ''}" type="button" data-filter="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join('')}</div><span class="filter-counter" id="filter-count">FEATURED ${String(featured.length).padStart(2, '0')} / ${String(data.projects.length).padStart(2, '0')} PROJECTS</span></div>
        <div class="project-grid" id="projects-grid">${featured.map((p, i) => renderProjectCard(p, i, i === 0)).join('')}${other.map((p, i) => renderProjectCard(p, i + featured.length, false, true)).join('')}</div><div class="more-work-actions"><button type="button" class="show-more-btn" id="show-more-projects" aria-expanded="false">VIEW ALL ${data.projects.length} PROJECTS <span aria-hidden="true">↗</span></button><p>Start with the four flagship case studies, or explore the full project archive.</p></div>
        <div class="work-end-marker reveal"><span>END OF PROJECT INDEX</span><span class="marker-line"></span><span>${esc(String(data.projects.length).padStart(2,'0'))} ENTRIES</span></div>
      </section>
      <section class="expertise-section" id="expertise"><div class="shell section-space">${eyebrow('02', 'WHAT I BRING TO THE TABLE', 'AREAS OF PRACTICE')}<div class="expertise-layout"><div class="expertise-lead reveal"><h2>Across the<br><em>whole stack.</em></h2><p>I’m at my best working across boundaries, where the mechanical system, electronics, and software all have to agree.</p><div class="expertise-seal" aria-hidden="true"><span>PLAN</span><span>BUILD</span><span>TEST</span><span>LEARN</span></div></div><div class="expertise-list">${data.capabilities.map(c => `<details class="capability reveal"><summary class="capability-trigger"><span class="capability-index">${esc(c.number)}</span><div class="capability-heading"><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p></div><span class="capability-plus" aria-hidden="true">${symbols.plus}</span></summary><div class="capability-body"><p>${esc(c.details || c.summary)}</p>${tags(c.skills)}${c.projectSlug ? `<a class="capability-project-link" href="#/work/${esc(c.projectSlug)}">${esc(c.projectLabel || 'Explore the project')} ${symbols.diagonal}</a>` : ''}</div></details>`).join('')}</div></div></div></section>
      <section class="about-section shell section-space" id="about">${eyebrow('03', 'ABOUT & EXPERIENCE')}<div class="about-layout"><div class="about-main reveal"><span class="about-prelude">A LITTLE ABOUT ME</span><h2>Curious about the<br><em>whole machine.</em></h2><p>${esc(person.bio)}</p><div class="education-detail"><span>EDUCATION</span><div><strong>University at Buffalo</strong><span>B.S. Aerospace Engineering · B.S. Mechanical Engineering</span></div></div><div class="about-current"><span class="status-light"></span><span><b>CURRENTLY WORKING ON</b>${esc(person.currently)}</span></div></div><div class="experience-column reveal"><div class="experience-title-row"><h3>Along the way</h3><span>EXPERIENCE</span></div>${data.experience.map((x, i) => `<div class="experience-item"><div class="experience-time">${esc(x.when)}</div><h4>${esc(x.role)}</h4><span class="experience-org">${esc(x.organization)}</span><p>${esc(x.description)}</p></div>`).join('')}</div></div></section>
      <section class="contact-section" id="contact"><div class="shell contact-inner">${eyebrow('04', 'LET’S CONNECT', 'OPEN CHANNEL')}<div class="contact-grid"><div class="contact-main reveal"><h2>Have a hard<br><em>problem to solve?</em></h2><p>I’m interested in systems that move beyond a demo and into the real world. If that’s what you’re working on, I’d love to hear about it.</p><a class="contact-email" href="${esc(gmailCompose)}" target="_blank" rel="noopener noreferrer" aria-label="Compose an email in Gmail to ${esc(person.email)}">${esc(person.email)}<span>${symbols.diagonal}</span></a><p class="contact-alternative">Prefer another email app? <a href="mailto:${esc(person.email)}">Use your default mail app</a>.</p></div><div class="contact-side reveal"><div class="contact-side-title">FIND ME HERE <span>↗</span></div>${external(person.github, 'GitHub', 'contact-social')}${person.linkedin ? external(person.linkedin, 'LinkedIn', 'contact-social') : ''}<a class="contact-social" href="${esc(gmailCompose)}" target="_blank" rel="noopener noreferrer">Email via Gmail ${symbols.diagonal}</a>${person.resume ? `<a class="contact-social" ${resumeAttrs()}>View résumé (PDF) ${symbols.diagonal}</a>` : ''}<div class="contact-location">CURRENT BASE <strong>${esc(person.location)}</strong></div></div></div></div></section>
    </main>${footer()}`;
  }
  function renderArchitecture(p) {
    if (!p.architecture) return '';
    const a = p.architecture;
    return `<section class="architecture-section shell section-space" aria-label="Engineering architecture">
      ${eyebrow('02', 'SYSTEM ARCHITECTURE')}<div class="architecture-head"><h2>${esc(a.title)}</h2><p>${esc(a.caption)}</p></div>
      <div class="architecture-flow">${a.nodes.map((n,i)=>`<div class="architecture-node"><span class="architecture-number">0${i+1} / SYSTEM BLOCK</span><strong>${esc(n.label)}</strong><p>${esc(n.detail)}</p></div>${i<a.nodes.length-1?'<span class="architecture-arrow" aria-hidden="true">→</span>':''}`).join('')}</div>
    </section>`;
  }
  function renderEvidence(p) {
    if (!p.evidence) return '';
    return `<section class="evidence-section shell" aria-label="Validation context"><div class="case-section-tag">VALIDATION NOTES <span>/ REPORTED VS MEASURED</span></div>
      <div class="evidence-grid">${p.evidence.map((e,i)=>`<article class="evidence-item"><span>0${i+1}</span><strong>${esc(e.figure)}</strong><h3>${esc(e.label)}</h3><p>${esc(e.detail)}</p></article>`).join('')}</div>
    </section>`;
  }
  function renderEngineeringDemo(p) {
    return `<div id="engineering-demo">${window.portfolioDemos ? window.portfolioDemos.block(p.slug) : ''}</div>`;
  }
  function renderGallery(p) {
    const gallery = (p.gallery || []).filter(item => item && item.src && safeUrl(item.src));
    const video = p.video && /^(media\/|https?:\/\/)/.test(p.video) ? p.video : '';
    if (!gallery.length && !video) return '';
    return `<section class="case-gallery shell"><div class="case-section-tag">PROJECT MEDIA <span>/ FIELD NOTES</span></div>${video ? `<div class="case-video"><video controls playsinline preload="metadata" ${p.videoPoster ? `poster="${safeUrl(p.videoPoster)}"` : ""} aria-label="${esc(p.title)} demonstration video"><source src="${safeUrl(video)}" type="video/mp4"/>Your browser does not support HTML5 video.</video></div>` : ''}${gallery.length ? `<div class="gallery-grid">${gallery.map(g => `<figure><button type="button" class="gallery-open" aria-label="Expand image: ${esc(g.alt || p.title)}" data-image="${safeUrl(g.src)}" data-alt="${esc(g.alt || p.title)}"><img src="${safeUrl(g.src)}" loading="lazy" decoding="async" alt="${esc(g.alt || `${p.title} project image`)}"/><span class="image-expand" aria-hidden="true">↗ EXPAND</span></button><figcaption>${esc(g.caption || '')}</figcaption></figure>`).join('')}</div>` : ''}</section>`;
  }
  function renderDetail(p) {
    document.title = `${p.title} — ${person.name}`;
    const idx = data.projects.indexOf(p), next = data.projects[(idx + 1) % data.projects.length];
    const cover = p.coverImage ? `<img class="case-hero-image" src="${safeUrl(p.coverImage)}" alt="${esc(p.title)}" style="object-position:${esc(p.coverPosition || "center center")}"/>` : art(p.kind);
    return `${header()}<main id="main-content" class="project-detail tone-${esc(p.accent)}" data-slug="${esc(p.slug)}"><div class="shell case-breadcrumb"><a href="#/section/work">${symbols.back} ALL PROJECTS</a><span> / ${esc(p.category.toUpperCase())} / ${esc(p.index)}</span></div><div class="shell case-intro"><div class="case-headings reveal"><span class="case-intro-label"><span class="tiny-square"></span> PROJECT ${esc(p.index)} <span>·</span> ${esc(p.year)}</span><h1>${esc(p.title)}</h1><p>${esc(p.subtitle)}</p><div class="case-quicklinks"><button type="button" data-scroll-to="case-engineering" class="case-jump">EXPLORE THE ENGINEERING ↓</button>${p.repository ? `<a href="${safeUrl(p.repository)}" rel="noopener noreferrer" target="_blank" class="case-jump">SOURCE CODE ↗</a>` : ''}</div><div class="case-head-meta"><span>${esc(p.category)} / ${esc(p.secondary)}</span><span class="case-status"><i></i>${esc(p.status)}</span></div></div><div class="case-hero-visual reveal">${cover}<div class="case-visual-annotation">${p.mediaStage ? esc(p.mediaStage) : (p.coverImage ? 'PROJECT PHOTOGRAPH' : 'SYSTEM ILLUSTRATION')} / ${esc(p.index)}</div></div></div>
      <section class="case-snapshot shell"><div class="case-intro-summary reveal"><div class="case-section-tag">THE SHORT VERSION <span>/ 00</span></div><p>${esc(p.overview)}</p></div><div class="case-role reveal"><div class="case-section-tag">MY CONTRIBUTION <span>/ ROLE</span></div><p>${esc(p.myRole)}</p></div></section>
      <section class="case-stats shell"><div class="case-stats-grid">${p.stats.map((s, i) => `<div class="case-stat reveal"><span class="stat-index">0${i + 1}</span><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div></section>
      <section class="case-story shell section-space" id="case-engineering">${eyebrow('01', 'ENGINEERING STORY')}<div class="case-story-grid">${[['THE PROBLEM',p.challenge],['THE APPROACH',p.approach],['THE OUTCOME',p.result]].map(([title, copy], i) => `<article class="case-story-step reveal"><div class="case-step-index">0${i+1}</div><h2>${title}</h2><p>${esc(copy)}</p></article>`).join('')}</div></section>
      <section class="case-breakdown"><div class="shell case-breakdown-inner">${eyebrow('02', 'THE WORK, IN DETAIL')}<div class="case-breakdown-grid"><div class="reveal"><h2>How it<br><em>came together.</em></h2><p>A closer look at the engineering decisions, hands-on work, and technical implementation.</p></div><ul class="detail-highlights">${p.highlights.map((h,i) => `<li class="reveal"><span>${String(i+1).padStart(2,'0')}</span><p>${esc(h)}</p></li>`).join('')}</ul></div></div></section>
      ${renderArchitecture(p)}
      ${renderEvidence(p)}
      ${renderEngineeringDemo(p)}
      ${renderGallery(p)}
      <dialog id="photo-dialog" class="photo-dialog" aria-label="Expanded engineering photograph"><button class="photo-close" type="button" aria-label="Close photograph">✕ CLOSE</button><img alt=""/><p></p></dialog>
      <section class="shell case-tools section-space">${eyebrow('03', 'TOOLS & TECHNOLOGIES')}<h2 class="reveal">The technical <em>toolbox.</em></h2><div class="case-tag-cloud reveal">${p.stack.map(s => `<span>${esc(s)}</span>`).join('')}</div>${p.notes ? `<div class="case-footnote reveal"><span>ENGINEERING NOTE</span><p>${esc(p.notes)}</p></div>` : ''}${p.repository ? `<div class="case-repository">${external(p.repository, 'Explore the code')}</div>` : ''}</section>
      <section class="next-project"><a class="shell next-project-inner" href="#/work/${esc(next.slug)}"><span class="next-overline">CONTINUE EXPLORING <span>PROJECT ${esc(next.index)}</span></span><div><h2>${esc(next.title)}</h2><span class="next-arrow">${symbols.diagonal}</span></div><span class="next-subtitle">${esc(next.subtitle)}</span></a></section>
      </main>${footer()}`;
  }
  function wireControls() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (menuToggle && mobileNav) {
      menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!expanded));
        mobileNav.hidden = expanded;
        document.body.classList.toggle('menu-open', !expanded);
      });
      mobileNav.addEventListener('click', event => {
        if (event.target.closest('a')) {
          mobileNav.hidden = true;
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        }
      });
    }
    // An offline preview can open its embedded resume without navigating to a blocked data: URL.
    document.querySelectorAll('[data-inline-resume]').forEach(link => link.addEventListener('click', event => {
      event.preventDefault();
      const encoded = embeddedMedia[person.resume];
      if (!encoded || !encoded.includes(',')) return;
      const raw = atob(encoded.slice(encoded.indexOf(',') + 1));
      const bytes = Uint8Array.from(raw, character => character.charCodeAt(0));
      const pdfUrl = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
      const tab = window.open('', '_blank');
      if (tab) tab.location.href = pdfUrl;
      else {
        const download = document.createElement('a');
        download.href = pdfUrl;
        download.download = 'Adarsh_Dodeja_Resume.pdf';
        document.body.append(download);
        download.click();
        download.remove();
      }
    }));
    document.querySelectorAll('[data-scroll-to]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.scrollTo)?.scrollIntoView({behavior:'smooth',block:'start'})));
    const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
    const cards = Array.from(document.querySelectorAll('.project-card[data-category]'));
    const moreButton = document.getElementById('show-more-projects');
    let expanded = false, chosen = 'All work';
    const updateProjects = () => {
      let visible = 0;
      cards.forEach(card => {
        const match = chosen === 'All work' || card.dataset.category === chosen;
        const collapsed = chosen === 'All work' && !expanded && card.classList.contains('project-card-secondary');
        card.hidden = !match || collapsed;
        card.classList.toggle('project-card-lead', chosen === 'All work' && card === cards[0]);
        if (!card.hidden) visible++;
      });
      const count=document.getElementById('filter-count');
      if (count) count.textContent = `SHOWING ${String(visible).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')} PROJECTS`;
      if (moreButton) {
        moreButton.hidden=chosen !== 'All work';
        moreButton.setAttribute('aria-expanded',String(expanded));
        moreButton.innerHTML=expanded ? 'SHOW FEATURED PROJECTS <span aria-hidden="true">↑</span>' : `VIEW ALL ${cards.length} PROJECTS <span aria-hidden="true">↗</span>`;
      }
      const hint=document.querySelector('.more-work-actions p'); if(hint) hint.hidden=chosen !== 'All work';
    };
    filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
      chosen=btn.dataset.filter;filterButtons.forEach(b=>{const active=b===btn;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});
      updateProjects();
    }));
    if(moreButton) moreButton.addEventListener('click',()=>{expanded=!expanded;updateProjects();});
    updateProjects();
    if (window.portfolioDemos && document.getElementById('engineering-demo')) {
      const slug = document.querySelector('.project-detail')?.dataset.slug;
      if(slug) window.portfolioDemos.mount(slug);
    }
    const dialog=document.getElementById('photo-dialog');
    if(dialog){
      document.querySelectorAll('.gallery-open').forEach(button=>button.addEventListener('click',()=>{
        dialog.querySelector('img').src=button.dataset.image;
        dialog.querySelector('img').alt=button.dataset.alt;
        dialog.querySelector('p').textContent=button.closest('figure').querySelector('figcaption')?.textContent || '';
        dialog.showModal();
      }));
      dialog.querySelector('.photo-close').addEventListener('click',()=>dialog.close());
      dialog.addEventListener('click', e=>{if(e.target===dialog)dialog.close();});
    }
    const revealElements = Array.from(document.querySelectorAll('.reveal'));
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      }), { threshold: .065, rootMargin: '0px 0px 50px 0px' });
      revealElements.forEach(el => observer.observe(el));
    } else revealElements.forEach(el => el.classList.add('revealed'));
  }
  function currentScroll() {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const percent = total > 0 ? window.scrollY / total * 100 : 0;
    const meter = document.getElementById('scroll-meter');
    if (meter) meter.style.width = `${percent}%`;
  }
  function renderRoute() {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    const workMatch = hash.match(/^\/work\/([a-z0-9-]+)$/);
    const project = workMatch && data.projects.find(p => p.slug === workMatch[1]);
    app.innerHTML = project ? renderDetail(project) : renderHome();
    wireControls();
    if (hash.startsWith('/section/')) {
      const section = hash.split('/')[2];
      requestAnimationFrame(() => setTimeout(() => {
        const target = document.getElementById(section);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 35));
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    requestAnimationFrame(currentScroll);
  }
  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('scroll', currentScroll, { passive: true });
  window.addEventListener('resize', currentScroll, { passive: true });
  renderRoute();
})();
