/* Interactive explanatory models. They are not telemetry or digital twins. */
(() => {
  'use strict';
  const fmt = n => (Math.abs(n) < .0005 ? 0 : n).toFixed(2);
  const block = (slug) => {
    if (slug === 'autonomous-mecanum-rover') return `<section class="interactive-lab shell" aria-label="Mecanum kinematics playground">
      <div class="lab-heading"><span class="lab-kicker">INTERACTIVE ENGINEERING / 01</span><h2>Drive the <em>equations.</em></h2><p>Explore the standard inverse kinematics for a four-wheel mecanum drive. The wheel radius and chassis dimensions are <strong>illustrative</strong>, not measurements of this rover.</p></div>
      <div class="lab-frame"><div class="lab-stage"><svg viewBox="0 0 500 320" class="lab-svg" aria-label="Top-down four wheel mecanum rover with velocity vector">
        <defs><pattern id="roverGrid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="#365250" stroke-width=".5"/></pattern></defs>
        <rect width="500" height="320" fill="url(#roverGrid)"/>
        <g transform="translate(250 159)"><rect x="-97" y="-82" width="194" height="164" rx="16" fill="#203838" stroke="#9bdbb4" stroke-width="2"/><rect x="-49" y="-37" width="98" height="74" rx="6" fill="#112626" stroke="#6d9d9b"/><text x="0" y="3" font-size="14" fill="#c6f79b" text-anchor="middle" font-family="monospace">BASE_LINK</text>
        <g fill="#617d79" stroke="#b0e5b2" stroke-width="2"><rect x="-120" y="-72" width="27" height="46" rx="7"/><rect x="93" y="-72" width="27" height="46" rx="7"/><rect x="-120" y="26" width="27" height="46" rx="7"/><rect x="93" y="26" width="27" height="46" rx="7"/></g>
        <path id="rover-vector" d="M0 0L0 0" stroke="#d4ff8c" stroke-width="5" stroke-linecap="round"/><circle id="rover-endpoint" cx="0" cy="0" r="7" fill="#d4ff8c"/><path d="M0-57v-10m-5 5 5-5 5 5" fill="none" stroke="#d8ffff" stroke-width="2"/>
        </g><g font-size="12" fill="#c9d5cb" font-family="monospace"><text x="62" y="90">FL <tspan id="fl">0</tspan></text><text x="362" y="90">FR <tspan id="fr">0</tspan></text><text x="62" y="259">RL <tspan id="rl">0</tspan></text><text x="362" y="259">RR <tspan id="rr">0</tspan></text><text x="20" y="302" opacity=".7">TOP VIEW · wheel rad/s · +Z = CCW</text></g></svg>
      <div class="lab-statline"><div><span>BODY COMMAND</span><strong id="rover-command">0.40, 0.15, 0.00</strong></div><div><span>WHEEL LIMIT</span><strong id="rover-wheel-status">Within example range</strong></div></div></div>
      <div class="lab-controls"><div class="lab-mini-label">SET BODY VELOCITY / COMMAND SPACE</div>
        <label for="rover-vx">Forward <output id="rover-vx-o">0.40 m/s</output></label><input id="rover-vx" type="range" min="-0.6" max="0.6" step="0.05" value="0.4" />
        <label for="rover-vy">Lateral <output id="rover-vy-o">0.15 m/s</output></label><input id="rover-vy" type="range" min="-0.6" max="0.6" step="0.05" value="0.15" />
        <label for="rover-w">Yaw rate <output id="rover-w-o">0.00 rad/s</output></label><input id="rover-w" type="range" min="-1.5" max="1.5" step="0.1" value="0" />
        <button type="button" class="lab-reset" id="rover-reset">ZERO THE COMMAND ↺</button><p class="lab-explainer">Model: <code>ω₁ = (vx − vy − (lx + ly)·wz) / r</code>. Illustrative <code>r = 0.05 m</code>, <code>lx + ly = 0.17 m</code>. This is not connected to the robot.</p>
      </div></div></section>`;
    if (slug === 'six-axis-robot-arm') return `<section class="interactive-lab shell" aria-label="Six-joint teaching visualization"><div class="lab-heading"><span class="lab-kicker">INTERACTIVE ENGINEERING / 02</span><h2>Teach a <em>pose.</em></h2><p>Move six conceptual joints and watch a simplified two-dimensional chain update. This is an educational representation of joint-space control, <strong>not a calibrated model of the physical industrial arm</strong>.</p></div>
      <div class="lab-frame"><div class="lab-stage"><svg viewBox="0 0 500 320" class="lab-svg" aria-label="Conceptual articulated robotic arm with six joints"><defs><pattern id="armGrid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="#365250" stroke-width=".5"/></pattern></defs><rect width="500" height="320" fill="url(#armGrid)"/><path d="M40 276H460" stroke="#658b7f" stroke-width="1.2"/><path id="arm-path" fill="none" stroke="#b9f58c" stroke-width="11" stroke-linejoin="round" stroke-linecap="round"/><g id="arm-joints"></g><circle id="arm-tool" cx="0" cy="0" r="8" fill="#eaffbb"/><text x="22" y="25" fill="#a6c1ae" font-size="12" font-family="monospace">2D SCHEMATIC · NOT TO SCALE</text></svg>
      <div class="lab-statline"><div><span>RELATIVE TCP / ILLUSTRATIVE</span><strong id="arm-tcp">0.00 / 0.00</strong></div><div><span>JOINTS</span><strong>6 controlled axes</strong></div></div></div>
      <div class="lab-controls"><div class="lab-mini-label">SET CONCEPTUAL JOINT ANGLES</div><div id="arm-sliders">${[20,-25,25,-15,5,0].map((v,i)=>`<label for="arm-j${i}">Joint ${i+1} <output id="arm-j${i}-o">${v}°</output></label><input id="arm-j${i}" type="range" min="-90" max="90" step="5" value="${v}" />`).join('')}</div><button type="button" class="lab-reset" id="arm-reset">RESET JOINTS ↺</button><p class="lab-explainer">The actual industrial arm used SPI wiring, CAN communications, a 100 Hz servo loop and taught pick-and-place positions. Reported 0.5 mm repeatability comes from returning repeatedly to the same taught position, not from this visualization.</p></div></div></section>`;
    if (slug === 'wearable-pitch-tracker') return `<section class="interactive-lab shell" aria-label="IMU event detection playground"><div class="lab-heading"><span class="lab-kicker">INTERACTIVE ENGINEERING / 03</span><h2>Find the <em>signal.</em></h2><p>Change the detection threshold on a <strong>synthetic</strong> acceleration trace. The real project used C++ firmware and inertial measurements; this trace is illustrative and does not reproduce the 100 experiments.</p></div>
      <div class="lab-frame"><div class="lab-stage"><svg viewBox="0 0 500 320" class="lab-svg" aria-label="Synthetic IMU acceleration signal with adjustable threshold"><defs><pattern id="imuGrid" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0V25" fill="none" stroke="#365250" stroke-width=".5"/></pattern></defs><rect width="500" height="320" fill="url(#imuGrid)"/><path id="imu-wave" stroke="#b9f58c" stroke-width="2.5" fill="none"/><path id="imu-threshold" stroke="#e9b76a" stroke-width="2" stroke-dasharray="7 5"/><g id="imu-peaks"></g><text x="20" y="25" fill="#a6c1ae" font-size="12" font-family="monospace">SYNTHETIC IMU MAGNITUDE</text><text x="20" y="304" fill="#a6c1ae" font-size="12" font-family="monospace">TIME →</text></svg><div class="lab-statline"><div><span>DETECTED EVENTS</span><strong id="imu-count">0 / 4</strong></div><div><span>THRESHOLD</span><strong id="imu-status">0.62</strong></div></div></div><div class="lab-controls"><div class="lab-mini-label">SIGNAL PROCESSING / DEMO</div><label for="imu-t">Relative threshold <output id="imu-t-o">0.62</output></label><input id="imu-t" type="range" min="0.3" max="1" step="0.02" value="0.62"/><button type="button" class="lab-reset" id="imu-reset">RESET THRESHOLD ↺</button><p class="lab-explainer">The line shows generated data, not actual recorded pitches. The real project's reported 99% pitch detection and 95% velocity accuracy were measured over 100 controlled experiments.</p></div></div></section>`;
    return '';
  };
  function mount(slug) {
    const within = document.getElementById('engineering-demo');
    if (!within) return;
    if (slug === 'autonomous-mecanum-rover') {
      const ids=['rover-vx','rover-vy','rover-w'];
      const update=()=>{
        const [vx,vy,w]=ids.map(id=>Number(document.getElementById(id).value));
        const l=.17,r=.05;
        const vals=[(vx-vy-l*w)/r,(vx+vy+l*w)/r,(vx+vy-l*w)/r,(vx-vy+l*w)/r];
        ['fl','fr','rl','rr'].forEach((id,i)=>document.getElementById(id).textContent=fmt(vals[i]));
        ['vx','vy','w'].forEach((id,i)=>{const n=[vx,vy,w][i];document.getElementById(`rover-${id}-o`).textContent=fmt(n)+(id==='w'?' rad/s':' m/s');});
        document.getElementById('rover-command').textContent=[vx,vy,w].map(fmt).join(' / ');
        document.getElementById('rover-wheel-status').textContent=Math.max(...vals.map(Math.abs))>14?'Above sample limit':'Within sample limit';
        document.getElementById('rover-vector').setAttribute('d',`M0 0L${vx*90} ${-vy*90}`);
        const pt=document.getElementById('rover-endpoint');pt.setAttribute('cx',vx*90);pt.setAttribute('cy',-vy*90);
      };
      ids.forEach(id=>document.getElementById(id).addEventListener('input',update));
      document.getElementById('rover-reset').addEventListener('click',()=>{ids.forEach(id=>document.getElementById(id).value=0);update();}); update();
    } else if (slug === 'six-axis-robot-arm') {
      const ids=Array.from({length:6},(_,i)=>`arm-j${i}`), lengths=[49,42,36,32,24,18];
      const update=()=>{let x=140,y=268,ang=-Math.PI/2;const points=[[x,y]];
        ids.forEach((id,i)=>{const deg=Number(document.getElementById(id).value);document.getElementById(`${id}-o`).textContent=`${deg}°`;ang+=deg*Math.PI/180*.43;x+=lengths[i]*Math.cos(ang);y+=lengths[i]*Math.sin(ang);points.push([x,y]);});
        document.getElementById('arm-path').setAttribute('d','M'+points.map(([px,py])=>`${px.toFixed(1)} ${py.toFixed(1)}`).join('L'));
        document.getElementById('arm-joints').innerHTML=points.slice(0,-1).map(([px,py],i)=>`<circle cx="${px}" cy="${py}" r="${i===0?13:8}" stroke="#aedcb0" fill="#294a43" stroke-width="2"/>`).join('');
        document.getElementById('arm-tool').setAttribute('cx',x);document.getElementById('arm-tool').setAttribute('cy',y);
        document.getElementById('arm-tcp').textContent=`${fmt((x-140)/100)} / ${fmt((268-y)/100)}`;
      };
      ids.forEach(id=>document.getElementById(id).addEventListener('input',update));
      document.getElementById('arm-reset').addEventListener('click',()=>{[20,-25,25,-15,5,0].forEach((v,i)=>document.getElementById(ids[i]).value=v);update();});update();
    } else if (slug === 'wearable-pitch-tracker') {
      const peaks=[35,81,139,194];
      const signal=Array.from({length:225},(_,i)=>{const wave=.17+.045*Math.sin(i*.69)+.035*Math.sin(i*1.37);const pulse=peaks.reduce((a,c)=>a+Math.exp(-Math.pow((i-c)/4,2)) * [.55,.78,.98,.7][peaks.indexOf(c)],0);return Math.min(1.17,wave+pulse);});
      document.getElementById('imu-wave').setAttribute('d',signal.map((s,i)=>`${i?'L':'M'}${25+i*2} ${270-s*184}`).join(' '));
      const update=()=>{const t=Number(document.getElementById('imu-t').value);const y=270-t*184;
        document.getElementById('imu-threshold').setAttribute('d',`M25 ${y}H475`);
        const detected=peaks.filter(c=>signal[c]>=t);
        document.getElementById('imu-peaks').innerHTML=detected.map(c=>`<circle cx="${25+c*2}" cy="${270-signal[c]*184}" r="6" stroke="#111b1d" stroke-width="2" fill="#ffb86e"/>`).join('');
        document.getElementById('imu-count').textContent=`${detected.length} / 4`;
        document.getElementById('imu-status').textContent=fmt(t);
        document.getElementById('imu-t-o').textContent=fmt(t);
      };
      document.getElementById('imu-t').addEventListener('input',update);
      document.getElementById('imu-reset').addEventListener('click',()=>{document.getElementById('imu-t').value=.62;update();});update();
    }
  }
  window.portfolioDemos = { block, mount };
})();
