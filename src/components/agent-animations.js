/*
 * projects.school — agent animations
 * Four standalone, looping animations: Muse, Instinct, Grok Bot, Jev.
 *
 *   import { mountAgent } from "./agent-animations.js";
 *   const destroy = mountAgent(document.querySelector("#muse"), "muse");
 *
 * Each mount renders its finished state first (good for screenshots and
 * reduced-motion users), then plays on a loop while it's on screen.
 * Size: the card fills its container's width; set --psx-h on the container
 * (default 380px) to change the stage height.
 */

export const AGENT_INFO = {
  muse: {
    name: "Muse",
    maker: "Meta · personal agent",
    track: "Personal",
    job: "Weekend Planner",
    blurb:
      "Ask once in chat. It finds something the kids will like, books it, pays, and puts it on the family calendar.",
  },
  instinct: {
    name: "Instinct",
    maker: "Spear Street · text or call",
    track: "Personal",
    job: "The Fixer",
    blurb:
      "It phones your provider, haggles the bill down, and cancels the subscriptions you forgot you had.",
  },
  grok: {
    name: "Grok Bot",
    maker: "xAI · always-on teammate",
    track: "Work",
    job: "Pipeline Bot",
    blurb:
      "It has its own computer in the cloud, so it works LinkedIn, HubSpot and Slack all night after you shut your laptop.",
  },
  jev: {
    name: "Jev",
    maker: "TypeSafe · decision model",
    track: "Inside any bot",
    job: "The yes/no brain",
    blurb:
      "Jev doesn't write, it scores. Here it reads the school email pile and flags what needs a parent, for about 200× less than an LLM.",
  },
};
export const AGENT_KEYS = Object.keys(AGENT_INFO);

/* ------------------------------------------------------------------ CSS */
export const AGENT_CSS = `
.psx{--canvas:#FAF7F0;--ink:#15140F;--gold:#D9A62B;--rust-l:#E07A55;--night:#15140F;--night2:#1D1B15;--night3:#2A2720;--nline:#332F26;
--t1:rgba(250,247,240,.92);--t2:rgba(250,247,240,.7);--t3:rgba(250,247,240,.45);--t4:rgba(250,247,240,.28);
--serif:"Instrument Serif",ui-serif,Georgia,serif;--sans:Inter,ui-sans-serif,system-ui,sans-serif;--mono:"IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
background:var(--night);border:1px solid var(--nline);border-radius:16px;overflow:hidden;color:var(--t1);font-family:var(--sans);font-size:14px;line-height:1.4;text-align:left;width:100%}
.psx *,.psx *::before,.psx *::after{box-sizing:border-box}
.psx p{margin:0}
.psx-bar{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:13px 20px;border-bottom:1px solid var(--nline);font:12px/1 var(--mono)}
.psx-l{display:flex;align-items:center;gap:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.psx-r{color:var(--t3);white-space:nowrap}
.psx-dot{position:relative;flex:none;width:8px;height:8px}
.psx-dot i{position:absolute;inset:0;border-radius:50%;background:var(--gold)}
.psx-dot i:first-child{animation:psx-ping 1.4s cubic-bezier(0,0,.2,1) infinite;opacity:.6}
@keyframes psx-ping{75%,100%{transform:scale(2.4);opacity:0}}
.psx-stage{position:relative;height:var(--psx-h,380px);overflow:hidden}
.psx-pop{animation:psx-pop .45s cubic-bezier(.2,.8,.2,1) both}
@keyframes psx-pop{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}
.psx-instant *,.psx-instant *::before,.psx-instant *::after{animation:none!important;transition:none!important}
.psx-mono{font-family:var(--mono)}

/* Muse — chat */
.mu{position:absolute;inset:0;padding:18px;display:flex;flex-direction:column;justify-content:flex-end;-webkit-mask-image:linear-gradient(transparent 0,#000 44px);mask-image:linear-gradient(transparent 0,#000 44px)}
.mu-feed{display:flex;flex-direction:column;gap:9px}
.mu-b{max-width:84%;padding:9px 13px;border-radius:15px;font-size:14px;line-height:1.4}
.mu-you{align-self:flex-end;background:var(--canvas);color:var(--ink);border-bottom-right-radius:4px}
.mu-muse{align-self:flex-start;background:var(--night3);color:var(--t1);border-bottom-left-radius:4px}
.mu-typing{display:flex;gap:4px;padding:13px 14px}
.mu-typing i{width:6px;height:6px;border-radius:50%;background:var(--t3);animation:psx-dots 1s infinite}
.mu-typing i:nth-child(2){animation-delay:.15s}.mu-typing i:nth-child(3){animation-delay:.3s}
@keyframes psx-dots{0%,60%,100%{transform:none;opacity:.5}30%{transform:translateY(-4px);opacity:1}}
.mu-status{align-self:flex-start;display:flex;align-items:center;gap:8px;font:12px/1.2 var(--mono);color:var(--gold);padding:2px 2px}
.mu-spin{width:10px;height:10px;border-radius:50%;border:1.5px solid rgba(217,166,43,.3);border-top-color:var(--gold);animation:psx-spin .8s linear infinite}
@keyframes psx-spin{to{transform:rotate(360deg)}}
.mu-opts{align-self:flex-start;width:84%;border:1px solid var(--nline);border-radius:12px;overflow:hidden;background:var(--night2)}
.mu-o{display:grid;grid-template-columns:1fr auto auto;gap:10px;padding:8px 12px;font-size:13px;color:var(--t2);border-top:1px solid var(--nline);transition:background .2s,color .2s,box-shadow .2s}
.mu-o:first-child{border-top:0}
.mu-o span:nth-child(2),.mu-o span:nth-child(3){font:12px/1.4 var(--mono);color:var(--t3)}
.mu-o.hover{background:var(--night3);color:var(--t1)}
.mu-o.sel{background:rgba(217,166,43,.12);color:var(--t1);box-shadow:inset 3px 0 0 var(--gold)}
.mu-o.sel span:nth-child(3){color:var(--gold)}
.mu-chip{display:inline-block;margin-top:6px;padding:3px 8px;border-radius:999px;background:rgba(217,166,43,.16);color:var(--gold);font:11px/1.3 var(--mono);letter-spacing:.04em}
.mu-cal{align-self:flex-start;display:flex;gap:12px;align-items:center;padding:10px 14px 10px 10px;border-radius:12px;background:var(--canvas);color:var(--ink);width:84%}
.mu-cal-d{flex:none;width:44px;border-radius:8px;overflow:hidden;text-align:center;border:1px solid #E3DCCC}
.mu-cal-d b{display:block;background:#AB3F22;color:var(--canvas);font:600 10px/1 var(--mono);letter-spacing:.1em;text-transform:uppercase;padding:4px 0}
.mu-cal-d span{display:block;font:400 22px/1.2 var(--serif);padding:2px 0}
.mu-cal-t strong{display:block;font-weight:600;font-size:14px}
.mu-cal-t span{font-size:12px;color:#7B766A}
.mu-foot{align-self:flex-start;font:12px/1 var(--mono);color:var(--t3);padding-top:4px}

/* Instinct — phone call */
.in{position:absolute;inset:0;padding:18px 20px;display:flex;flex-direction:column;gap:12px}
.in-call{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--t2)}
.in-pill{display:inline-flex;align-items:center;gap:6px;padding:4px 9px;border-radius:999px;background:rgba(217,166,43,.14);color:var(--gold);font:11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase}
.in-pill i{width:6px;height:6px;border-radius:50%;background:currentColor;animation:psx-blink 1.2s infinite}
.in-pill.ended{background:var(--night3);color:var(--t3)}.in-pill.ended i{animation:none}
@keyframes psx-blink{50%{opacity:.25}}
.in-who{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.in-time{font:12px/1 var(--mono);color:var(--t3);font-variant-numeric:tabular-nums}
.in-wave{display:flex;align-items:center;gap:3px;height:40px}
.in-wave i{max-width:4px;margin:0 auto}
.in-wave i{flex:1;height:100%;border-radius:2px;background:var(--t4);transform:scaleY(.1);transition:background .3s,transform .3s}
.in-wave.talk i{animation:psx-bar .8s ease-in-out infinite}
.in-wave.us i{background:var(--gold)}
.in-wave.them i{background:var(--t3)}
@keyframes psx-bar{0%,100%{transform:scaleY(.15)}50%{transform:scaleY(1)}}
.in-tx{height:78px;display:flex;flex-direction:column;justify-content:flex-end;gap:6px;overflow:hidden}
.in-l{font-size:13.5px;line-height:1.4;color:var(--t2)}
.in-l b{font:500 11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;margin-right:8px;color:var(--t3)}
.in-us{color:var(--t1)}.in-us b{color:var(--gold)}
.in-led{border-top:1px solid var(--nline);display:flex;flex-direction:column}
.in-r{display:grid;grid-template-columns:1fr auto 92px;gap:12px;align-items:center;padding:7px 0;border-bottom:1px solid var(--nline);font-size:13.5px}
.in-r .in-old{font:12px/1 var(--mono);color:var(--t2);font-variant-numeric:tabular-nums;transition:color .3s}
.in-r .in-new{justify-self:end;font:12px/1 var(--mono);color:var(--t4)}
.in-r.win .in-old,.in-r.cut .in-old{text-decoration:line-through;color:var(--t4)}
.in-r.win .in-new{color:var(--gold);font-size:13px}
.in-r.cut .in-nm{color:var(--t3)}
.in-r.cut .in-new{color:var(--rust-l);letter-spacing:.06em;text-transform:uppercase;font-size:11px}
.in-total{margin-top:auto;display:flex;justify-content:space-between;align-items:baseline}
.in-total span{font:12px/1 var(--mono);color:var(--t3);text-transform:uppercase;letter-spacing:.1em}
.in-total b{font:400 30px/1 var(--serif);color:var(--t1);font-variant-numeric:tabular-nums}
.in-total b em{font-style:normal;font-size:18px;color:var(--t3)}

/* Grok Bot — cloud computer */
.gb{position:absolute;inset:0;padding:16px 18px;display:flex;flex-direction:column;gap:12px}
.gb-top{display:flex;justify-content:space-between;align-items:center;gap:10px}
.gb-lap{display:flex;align-items:center;gap:8px;font:12px/1.2 var(--mono);color:var(--t3);min-width:0}
.gb-lap svg{flex:none}
.gb-clock{font:400 28px/1 var(--serif);color:var(--gold);font-variant-numeric:tabular-nums}
.gb-win{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;border:1px solid var(--nline);border-radius:10px;background:var(--night2);overflow:hidden}
.gb-tabs{display:flex;align-items:stretch;border-bottom:1px solid var(--nline);font-size:12px}
.gb-tabs span{padding:8px 12px;color:var(--t3);border-right:1px solid var(--nline);transition:background .2s,color .2s}
.gb-tabs span.on{background:var(--night3);color:var(--t1)}
.gb-tabs em{margin-left:auto;align-self:center;padding:0 10px;font:normal 10px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--t4);white-space:nowrap}
.gb-body{position:relative;flex:1}
.gb-pane{position:absolute;inset:0;padding:12px 14px;opacity:0;transition:opacity .3s;display:flex;flex-direction:column;gap:8px}
.gb-pane.on{opacity:1}
.gb-p{display:grid;grid-template-columns:28px 1fr auto;gap:10px;align-items:center;padding:4px 0}
.gb-av{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:var(--night3);font:600 10px/1 var(--mono);color:var(--t2)}
.gb-p strong{display:block;font-weight:500;font-size:13px}
.gb-p small{display:block;font-size:11.5px;color:var(--t3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.gb-btn{font:500 12px/1 var(--sans);padding:6px 11px;border-radius:999px;border:1px solid var(--t4);color:var(--t1);background:transparent;white-space:nowrap}
.gb-btn.sent{border-color:transparent;background:rgba(217,166,43,.16);color:var(--gold)}
.gb-h{font:11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--t3)}
.gb-form{display:grid;grid-template-columns:1fr 1fr;gap:8px 10px}
.gb-f label{display:block;font-size:10.5px;color:var(--t3);margin-bottom:3px}
.gb-f div{height:26px;border:1px solid var(--nline);border-radius:6px;padding:5px 8px;font-size:12.5px;color:var(--t1);white-space:nowrap;overflow:hidden;transition:border-color .2s}
.gb-f.focus div{border-color:var(--gold)}
.gb-save{align-self:flex-start;background:var(--canvas);color:var(--ink);border:0}
.gb-toast{align-self:flex-start;font:11.5px/1 var(--mono);color:var(--gold);opacity:0;transition:opacity .3s}
.gb-toast.on{opacity:1}
.gb-msgs{flex:1;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;overflow:hidden}
.gb-m{font-size:12.5px;line-height:1.4;color:var(--t2)}
.gb-m b{font-weight:600;color:var(--t1);margin-right:6px}
.gb-m small{font:10.5px/1 var(--mono);color:var(--t4);margin-left:4px}
.gb-m.bot b{color:var(--gold)}
.gb-old{opacity:.6}
.gb-comp{border:1px solid var(--nline);border-radius:8px;padding:7px 10px;font-size:12.5px;min-height:32px;color:var(--t1);transition:border-color .2s}
.gb-comp.focus{border-color:var(--gold)}
.gb-comp:empty::before{content:"Message #pipeline";color:var(--t4)}
.gb-cur{position:absolute;left:0;top:0;z-index:5;pointer-events:none;transition:transform .6s cubic-bezier(.45,0,.2,1)}
.gb-cur svg{display:block;transition:transform .12s}
.gb-cur.down svg{transform:scale(.82)}
.gb-rip{position:absolute;z-index:4;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;border:2px solid var(--gold);pointer-events:none;animation:psx-rip .5s ease-out forwards}
@keyframes psx-rip{from{transform:scale(.3);opacity:1}to{transform:scale(1.4);opacity:0}}
.gb-foot{display:flex;justify-content:space-between;gap:10px;font:12px/1 var(--mono);color:var(--t3)}
.gb-foot b{font-weight:500;color:var(--t1);font-variant-numeric:tabular-nums}

/* Jev — decision scores */
.jv{position:absolute;inset:0;padding:16px 18px;display:flex;flex-direction:column;gap:12px}
.jv-q{display:flex;align-items:baseline;gap:10px;font-size:13.5px;color:var(--t1);flex-wrap:wrap}
.jv-k{font:11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--gold);padding:4px 7px;border:1px solid rgba(217,166,43,.4);border-radius:5px}
.jv-d{margin-left:auto;font:11.5px/1 var(--mono);color:var(--t4);transition:color .4s}
.jv-d.on{color:var(--gold)}
.jv-list{position:relative;height:calc(7 * 33px);flex:none}
.jv-r{position:absolute;left:0;right:0;top:0;height:33px;display:grid;grid-template-columns:54px minmax(0,1fr) 56px 34px;gap:10px;align-items:center;border-bottom:1px solid var(--nline);opacity:0;transition:transform .8s cubic-bezier(.6,0,.2,1),opacity .4s}
.jv-r.in{opacity:1}
.jv-r.no.in{opacity:.42}
.jv-r .jv-tag{font:10px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--t4);padding:4px 0;border-radius:4px;text-align:center}
.jv-r.yes .jv-tag{background:rgba(224,122,85,.16);color:var(--rust-l)}
.jv-r.no .jv-tag{background:var(--night3);color:var(--t3)}
.jv-r .jv-sub{font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.jv-r .jv-bar{height:4px;border-radius:2px;background:var(--night3);overflow:hidden}
.jv-r .jv-bar i{display:block;height:100%;width:0;background:var(--t2);transition:width .55s cubic-bezier(.2,.8,.2,1)}
.jv-r.yes .jv-bar i{background:var(--gold)}
.jv-r .jv-p{font:12px/1 var(--mono);text-align:right;color:var(--t2);font-variant-numeric:tabular-nums}
.jv-foot{margin-top:auto;display:grid;gap:8px}
.jv-c{display:grid;grid-template-columns:118px 1fr 64px;gap:10px;align-items:center;font-size:12px;color:var(--t3)}
.jv-c b{font:500 12px/1 var(--mono);text-align:right;color:var(--t1);font-variant-numeric:tabular-nums}
.jv-c.a b{color:var(--gold)}
.jv-t{height:6px;border-radius:3px;background:var(--night3);overflow:hidden}
.jv-t i{display:block;height:100%;width:0;border-radius:3px;transition:width 1.1s cubic-bezier(.2,.8,.2,1)}
.jv-c.a .jv-t i{background:var(--gold);min-width:0}
.jv-c.a .jv-t i.on{min-width:3px}
.jv-c.b .jv-t i{background:var(--t3)}

@media (max-width:420px){
  .psx-bar{padding:12px 16px}
  .mu,.in,.gb,.jv{padding-left:14px;padding-right:14px}
  .jv-r{grid-template-columns:50px minmax(0,1fr) 40px 32px;gap:8px}
  .jv-c{grid-template-columns:96px 1fr 58px}
  .gb-tabs span{padding:8px 9px}
  .gb-tabs em{display:none}
}
@media (prefers-reduced-motion:reduce){.psx-dot i:first-child{animation:none}}
`;

/* -------------------------------------------------------------- helpers */
const STOP = Symbol("stop");
const h = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const fmtClock = (m) => {
  m = ((m % 1440) + 1440) % 1440;
  return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
};
const toMin = (s) => {
  const [a, b] = s.split(":").map(Number);
  return a * 60 + b;
};
async function count(w, node, from, to, ms, fmt) {
  const steps = Math.max(1, Math.round(ms / 40));
  for (let k = 1; k <= steps; k++) {
    await w(ms / steps);
    node.textContent = fmt(from + ((to - from) * k) / steps);
  }
  node.textContent = fmt(to);
}
const bg = (p) => p.catch(() => {}); // fire-and-forget a sub-animation

/* ------------------------------------------------------------ Muse */
function muse() {
  let feed;
  const OPTS = [
    ["Science Centre", "10:30", "$68 for 4"],
    ["Paddle boats, High Park", "9:00", "$48"],
    ["Kids' matinee", "11:15", "$56"],
  ];
  return {
    bar: "Weekend planner · running",
    right: "on Muse",
    build(stage) {
      stage.innerHTML = '<div class="mu"><div class="mu-feed"></div></div>';
      feed = stage.querySelector(".mu-feed");
    },
    async play({ w }) {
      feed.innerHTML = "";
      const add = (n) => (n.classList.add("psx-pop"), feed.appendChild(n), n);
      const bubble = (who, html) => add(h("div", "mu-b mu-" + who, html));

      await w(500);
      bubble("you", "Find us something for Saturday morning. Kids are 5 and 8.");
      await w(800);
      const typing = add(h("div", "mu-b mu-muse mu-typing", "<i></i><i></i><i></i>"));
      await w(1300);
      typing.remove();
      bubble("muse", "On it. I'll come back when it's booked.");
      await w(800);
      const st = add(h("div", "mu-status", '<span class="mu-spin"></span><span class="mu-t">Checking 11 places near you</span>'));
      const say = (t) => (st.querySelector(".mu-t").textContent = t);
      await w(1200);
      say("Comparing times and prices");
      const opts = add(
        h("div", "mu-opts", OPTS.map((o) => `<div class="mu-o"><span>${o[0]}</span><span>${o[1]}</span><span>${o[2]}</span></div>`).join(""))
      );
      const rows = [...opts.children];
      for (const i of [0, 1, 2, 0]) {
        rows.forEach((r) => r.classList.remove("hover"));
        rows[i].classList.add("hover");
        await w(430);
      }
      rows[0].classList.remove("hover");
      rows[0].classList.add("sel");
      say("Holding 4 seats · paying with Link");
      await w(1300);
      st.remove();
      bubble("muse", 'Booked: 4 tickets, Science Centre, Saturday 10:30.<br><span class="mu-chip">PAID $68.00 ✓</span>');
      await w(900);
      add(
        h(
          "div",
          "mu-cal",
          '<div class="mu-cal-d"><b>Sat</b><span>26</span></div><div class="mu-cal-t"><strong>Science Centre</strong><span>10:30 – 1:00 · on the family calendar</span></div>'
        )
      );
      await w(700);
      add(h("div", "mu-foot", "Your phone's been in your pocket since 9:12."));
      await w(4200);
    },
  };
}

/* ------------------------------------------------------------ Instinct */
function instinct() {
  let r = {};
  const LED = [
    ["Internet", "$89/mo", 25 * 12],
    ["Streaming+", "$17.99/mo", 17.99 * 12],
    ["Cloud storage 2TB", "$12.99/mo", 12.99 * 12],
    ["Gym app", "$9.99/mo", 9.99 * 12],
  ];
  const money = (v) => "$" + Math.round(v).toLocaleString("en-US");
  return {
    bar: "The fixer · on a call",
    right: "on Instinct",
    build(stage) {
      const bars = Array.from({ length: 44 }, (_, i) => {
        const d = (0.55 + ((i * 37) % 11) / 18).toFixed(2);
        const dl = (-((i * 53) % 17) / 20).toFixed(2);
        return `<i style="animation-duration:${d}s;animation-delay:${dl}s"></i>`;
      }).join("");
      stage.innerHTML = `<div class="in">
        <div class="in-call"><span class="in-pill"><i></i><span class="in-pt">On a call</span></span><span class="in-who">Your internet provider</span><span class="in-time">03:48</span></div>
        <div class="in-wave">${bars}</div>
        <div class="in-tx"></div>
        <div class="in-led">${LED.map((l) => `<div class="in-r"><span class="in-nm">${l[0]}</span><span class="in-old">${l[1]}</span><span class="in-new">pending</span></div>`).join("")}</div>
        <div class="in-total"><span>Back to you</span><b><span class="in-n">$0</span> <em>a year</em></b></div>
      </div>`;
      const q = (s) => stage.querySelector(s);
      r = { pill: q(".in-pill"), pt: q(".in-pt"), time: q(".in-time"), wave: q(".in-wave"), tx: q(".in-tx"), rows: [...stage.querySelectorAll(".in-r")], total: q(".in-total .in-n") };
    },
    async play({ w, every }) {
      let sec = 228;
      const tick = () => (r.time.textContent = String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0"));
      r.pill.classList.remove("ended");
      r.pt.textContent = "On a call";
      tick();
      const timer = every(1000, () => (sec++, tick()));
      r.tx.innerHTML = "";
      r.wave.className = "in-wave";
      r.rows.forEach((row) => {
        row.className = "in-r";
        row.querySelector(".in-new").textContent = "pending";
      });
      r.total.textContent = "$0";

      const say = async (who, text, ms) => {
        r.wave.className = "in-wave talk " + who;
        const p = h("p", "in-l psx-pop in-" + who, `<b>${who === "us" ? "Instinct" : "Rep"}</b>${text}`);
        r.tx.appendChild(p);
        while (r.tx.children.length > 2) r.tx.firstChild.remove();
        await w(ms);
        r.wave.className = "in-wave";
        await w(300);
      };
      await w(400);
      await say("them", "Best I can do is $74 a month.", 1700);
      await say("us", "New customers pay $59. Match it, or I cancel the account today.", 2400);
      await say("them", "Okay. $64, locked for twelve months.", 1900);
      await say("us", "Deal. Please email that to us in writing.", 1600);
      clearInterval(timer);
      r.pill.classList.add("ended");
      r.pt.textContent = "Call ended";

      let total = 0;
      for (let i = 0; i < LED.length; i++) {
        const row = r.rows[i];
        row.classList.add(i === 0 ? "win" : "cut");
        row.querySelector(".in-new").textContent = i === 0 ? "$64/mo" : "Cancelled";
        await count(w, r.total, total, total + LED[i][2], i === 0 ? 600 : 400, money);
        total += LED[i][2];
        await w(i === 0 ? 700 : 350);
      }
      await w(4000);
    },
  };
}

/* ------------------------------------------------------------ Grok Bot */
function grok() {
  let r = {};
  const PEOPLE = [
    ["PS", "Priya Shah", "Head of Ops · Northwind"],
    ["ML", "Marcus Lee", "Founder · Tallow Goods"],
    ["DK", "Dana Kim", "COO · Brightfield"],
  ];
  const FIELDS = [
    ["Name", "Priya Shah"],
    ["Company", "Northwind"],
    ["Source", "LinkedIn"],
    ["Owner", "You"],
  ];
  const SUMMARY = "Morning summary: 14 new connections, 9 replies, 9 contacts in HubSpot. 1 intro email waiting for your OK.";
  const LID =
    '<svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true"><rect x="3" y="1" width="12" height="9" rx="1.5" stroke="currentColor" stroke-width="1.2" fill="none"/><path d="M1 12.5h16" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M6 5.5h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".6"/></svg>';
  const CURSOR =
    '<svg width="16" height="20" viewBox="0 0 16 20" aria-hidden="true"><path d="M1 1l0 15.5 4-3.8 2.6 5.8 2.6-1.1-2.5-5.7 5.6-.2z" fill="#FAF7F0" stroke="#15140F" stroke-width="1.2" stroke-linejoin="round"/></svg>';
  return {
    bar: "Pipeline bot · running",
    right: "on Grok Bot",
    build(stage) {
      stage.innerHTML = `<div class="gb">
        <div class="gb-top"><span class="gb-lap">${LID}<span>Your laptop · shut at 22:40</span></span><span class="gb-clock">22:41</span></div>
        <div class="gb-win">
          <div class="gb-tabs"><span>LinkedIn</span><span>HubSpot</span><span>Slack</span><em>its own computer</em></div>
          <div class="gb-body">
            <div class="gb-pane"><div class="gb-h">Replied overnight · following up</div>${PEOPLE.map((p) => `<div class="gb-p"><span class="gb-av">${p[0]}</span><span><strong>${p[1]}</strong><small>${p[2]}</small></span><span class="gb-btn">Follow up</span></div>`).join("")}</div>
            <div class="gb-pane"><div class="gb-h">New contact</div><div class="gb-form">${FIELDS.map((f) => `<div class="gb-f"><label>${f[0]}</label><div></div></div>`).join("")}</div><span class="gb-btn gb-save">Save contact</span><span class="gb-toast">✓ Contact created</span></div>
            <div class="gb-pane"><div class="gb-h"># pipeline</div><div class="gb-msgs"><div class="gb-m gb-old bot"><b>Pipeline Bot</b>Morning summary: 11 new connections, 6 replies, 6 contacts in HubSpot.<small>Mon 06:15</small></div><div class="gb-m"><b>Sam</b>nice. who's following up with Brightfield?<small>Mon</small></div></div><div class="gb-comp"></div></div>
          </div>
          <span class="gb-cur">${CURSOR}</span>
        </div>
        <div class="gb-foot"><span>Steps logged <b class="gb-n">0</b></span><span>Needs you: <b>1 draft</b></span></div>
      </div>`;
      const q = (s) => stage.querySelector(s);
      r = {
        win: q(".gb-win"),
        clock: q(".gb-clock"),
        tabs: [...stage.querySelectorAll(".gb-tabs span")],
        panes: [...stage.querySelectorAll(".gb-pane")],
        btns: [...stage.querySelectorAll(".gb-p .gb-btn")],
        fields: [...stage.querySelectorAll(".gb-f")],
        save: q(".gb-save"),
        toast: q(".gb-toast"),
        msgs: q(".gb-msgs"),
        comp: q(".gb-comp"),
        cur: q(".gb-cur"),
        steps: q(".gb-foot .gb-n"),
      };
    },
    async play({ w, every, instant }) {
      let clock = toMin("22:41");
      let steps = 0;
      const setClock = (s) => ((clock = toMin(s)), (r.clock.textContent = s));
      const step = (n = 1) => ((steps += n), (r.steps.textContent = steps));
      const tab = (i) => {
        r.tabs.forEach((t, k) => t.classList.toggle("on", k === i));
        r.panes.forEach((p, k) => p.classList.toggle("on", k === i));
      };
      const pos = (node, fx = 0.5, fy = 0.55) => {
        const a = node.getBoundingClientRect();
        const b = r.win.getBoundingClientRect();
        return [a.left - b.left + a.width * fx, a.top - b.top + a.height * fy];
      };
      let cx = 0,
        cy = 0;
      const move = async (node, fx, fy) => {
        [cx, cy] = pos(node, fx, fy);
        r.cur.style.transform = `translate(${cx - 2}px,${cy - 2}px)`;
        await w(650);
      };
      const click = async () => {
        r.cur.classList.add("down");
        if (!instant) {
          const rip = h("span", "gb-rip");
          rip.style.left = cx + "px";
          rip.style.top = cy + "px";
          r.win.appendChild(rip);
          setTimeout(() => rip.remove(), 600);
        }
        await w(140);
        r.cur.classList.remove("down");
      };
      const type = async (node, text, ms) => {
        node.textContent = "";
        if (instant) return void (node.textContent = text);
        for (let i = 0; i < text.length; i += 2) {
          node.textContent = text.slice(0, i + 2);
          await w(ms * 2);
        }
      };

      // reset
      setClock("22:41");
      r.steps.textContent = "0";
      tab(0);
      r.btns.forEach((b) => ((b.className = "gb-btn"), (b.textContent = "Follow up")));
      r.fields.forEach((f) => ((f.className = "gb-f"), (f.querySelector("div").textContent = "")));
      r.toast.classList.remove("on");
      r.comp.textContent = "";
      r.comp.classList.remove("focus");
      r.msgs.querySelectorAll(".bot:not(.gb-old)").forEach((m) => m.remove());
      r.cur.style.transform = "translate(180px,110px)";
      const ticker = every(520, () => (clock++, (r.clock.textContent = fmtClock(clock))));

      await w(600);
      // LinkedIn
      for (const b of r.btns) {
        await move(b);
        await click();
        b.classList.add("sent");
        b.textContent = "Sent ✓";
        step(3);
        await w(380);
      }
      // HubSpot
      await move(r.tabs[1]);
      await click();
      tab(1);
      setClock("01:13");
      step(2);
      await w(350);
      for (let i = 0; i < r.fields.length; i++) {
        const f = r.fields[i];
        await move(f.querySelector("div"), 0.2, 0.5);
        await click();
        r.fields.forEach((x) => x.classList.remove("focus"));
        f.classList.add("focus");
        await type(f.querySelector("div"), FIELDS[i][1], 45);
        step(2);
        await w(150);
      }
      r.fields.forEach((x) => x.classList.remove("focus"));
      await move(r.save);
      await click();
      r.toast.classList.add("on");
      step(3);
      await w(900);
      // Slack
      await move(r.tabs[2]);
      await click();
      tab(2);
      setClock("06:09");
      step(2);
      await w(350);
      await move(r.comp, 0.3, 0.5);
      await click();
      r.comp.classList.add("focus");
      await type(r.comp, SUMMARY, 18);
      await w(350);
      r.comp.textContent = "";
      r.comp.classList.remove("focus");
      const m = h("div", "gb-m bot psx-pop", `<b>Pipeline Bot</b>${SUMMARY}<small>06:15</small>`);
      r.msgs.appendChild(m);
      setClock("06:15");
      step(4);
      if (instant) r.steps.textContent = "47";
      else await count(w, r.steps, steps, 47, 700, (v) => Math.round(v));
      await w(4200);
      clearInterval(ticker);
    },
  };
}

/* ------------------------------------------------------------ Jev */
function jev() {
  let r = {};
  const EM = [
    ["Field trip form due Friday", 0.98],
    ["October lunch menu", 0.06],
    ["Pizza day orders close tonight", 0.93],
    ["Principal's newsletter", 0.11],
    ["Picture day moved to Thursday", 0.71],
    ["No school Monday (PA day)", 0.64],
    ["Library: new arrivals", 0.04],
  ];
  const ROW = 33;
  const order = EM.map((_, i) => i).sort((a, b) => EM[b][1] - EM[a][1]);
  const yes = EM.filter((e) => e[1] >= 0.5).length;
  return {
    bar: "School inbox triage · scoring",
    right: "on Jev",
    build(stage) {
      stage.innerHTML = `<div class="jv">
        <div class="jv-q"><span class="jv-k">Ask</span><span>“Does a parent need to do something?”</span><span class="jv-d">scoring ${EM.length} emails…</span></div>
        <div class="jv-list">${EM.map((e) => `<div class="jv-r"><span class="jv-tag">···</span><span class="jv-sub">${e[0]}</span><span class="jv-bar"><i></i></span><span class="jv-p">0.00</span></div>`).join("")}</div>
        <div class="jv-foot">
          <div class="jv-c a"><span>Jev · ${EM.length} emails</span><span class="jv-t"><i></i></span><b>$0</b></div>
          <div class="jv-c b"><span>Same job, an LLM</span><span class="jv-t"><i></i></span><b>$0</b></div>
        </div>
      </div>`;
      r = {
        rows: [...stage.querySelectorAll(".jv-r")],
        done: stage.querySelector(".jv-d"),
        fa: stage.querySelector(".jv-c.a i"),
        fb: stage.querySelector(".jv-c.b i"),
        ca: stage.querySelector(".jv-c.a b"),
        cb: stage.querySelector(".jv-c.b b"),
      };
    },
    async play({ w }) {
      r.done.classList.remove("on");
      r.done.textContent = `scoring ${EM.length} emails…`;
      r.rows.forEach((row, i) => {
        row.className = "jv-r";
        row.style.transform = `translateY(${i * ROW}px)`;
        row.querySelector(".jv-tag").textContent = "···";
        row.querySelector(".jv-bar i").style.width = "0";
        row.querySelector(".jv-p").textContent = "0.00";
      });
      r.fa.style.width = r.fb.style.width = "0";
      r.fa.classList.remove("on");
      r.ca.textContent = r.cb.textContent = "$0";

      await w(500);
      for (let i = 0; i < EM.length; i++) {
        const row = r.rows[i];
        const p = EM[i][1];
        row.classList.add("in");
        await w(140);
        row.querySelector(".jv-bar i").style.width = p * 100 + "%";
        bg(count(w, row.querySelector(".jv-p"), 0, p, 450, (v) => v.toFixed(2)));
        await w(170);
      }
      await w(900);
      order.forEach((idx, pos) => {
        const row = r.rows[idx];
        row.style.transform = `translateY(${pos * ROW}px)`;
        row.classList.add(EM[idx][1] >= 0.5 ? "yes" : "no");
        row.querySelector(".jv-tag").textContent = EM[idx][1] >= 0.5 ? "Errand" : "Skip";
      });
      await w(1000);
      r.done.classList.add("on");
      r.done.textContent = `→ ${yes} errands on your list`;
      r.fa.classList.add("on");
      r.fa.style.width = "0.5%";
      r.fb.style.width = "100%";
      bg(count(w, r.ca, 0, 0.00015, 900, (v) => "$" + v.toFixed(5)));
      await count(w, r.cb, 0, 0.03, 1100, (v) => "~$" + v.toFixed(2));
      await w(4200);
    },
  };
}

const FACTORIES = { muse, instinct, grok, jev };

/* ------------------------------------------------------------ runtime */
function injectCSS(doc = document) {
  if (doc.getElementById("psx-agent-css")) return;
  const s = doc.createElement("style");
  s.id = "psx-agent-css";
  s.textContent = AGENT_CSS;
  doc.head.appendChild(s);
}

function runner(stage, def) {
  let gen = 0;
  let timers = [];
  const clear = () => (timers.forEach(clearInterval), (timers = []));
  async function run(instant) {
    const my = ++gen;
    clear();
    stage.classList.toggle("psx-instant", instant);
    const ctx = {
      instant,
      w: (ms) =>
        instant ? Promise.resolve() : new Promise((res, rej) => setTimeout(() => (my === gen ? res() : rej(STOP)), ms)),
      every: (ms, fn) => {
        if (instant) return 0;
        const id = setInterval(() => (my === gen ? fn() : clearInterval(id)), ms);
        timers.push(id);
        return id;
      },
    };
    try {
      do await def.play(ctx);
      while (!instant && my === gen);
    } catch (e) {
      if (e !== STOP) console.error(e);
    }
  }
  return {
    start: () => run(false),
    still: () => run(true),
    stop: () => (gen++, clear()),
  };
}

/**
 * Mount one animation into `el`. Returns a destroy() function.
 * options.autoplay: "visible" (default) | "always" | false
 * options.delay: ms to hold the finished frame before the loop starts (default 1200)
 */
export function mountAgent(el, key, options = {}) {
  const make = FACTORIES[key];
  if (!make) throw new Error(`Unknown agent "${key}". Use one of: ${AGENT_KEYS.join(", ")}`);
  injectCSS(el.ownerDocument);
  const def = make();
  const card = h("div", "psx");
  card.setAttribute("role", "img");
  card.setAttribute("aria-label", `${AGENT_INFO[key].job} running on ${AGENT_INFO[key].name}: ${AGENT_INFO[key].blurb}`);
  card.innerHTML = `<div class="psx-bar"><span class="psx-l"><span class="psx-dot"><i></i><i></i></span>${def.bar}</span><span class="psx-r">${def.right}</span></div><div class="psx-stage"></div>`;
  el.innerHTML = "";
  el.appendChild(card);
  const stage = card.querySelector(".psx-stage");
  def.build(stage);
  const run = runner(stage, def);
  run.still(); // finished state first

  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mode = options.autoplay ?? "visible";
  if (reduced || !mode) return () => run.stop();

  const delay = options.delay ?? 1200;
  let playing = false;
  let pending = 0;
  const play = () => {
    if (playing || pending || document.hidden) return;
    pending = setTimeout(() => ((pending = 0), (playing = true), run.start()), delay);
  };
  const pause = () => {
    clearTimeout(pending);
    pending = 0;
    if (playing) (playing = false), run.stop(), run.still();
  };
  let visible = mode === "always";
  const onVis = () => (document.hidden ? pause() : visible && play());
  document.addEventListener("visibilitychange", onVis);

  let io;
  if (mode === "always" || !("IntersectionObserver" in window)) {
    visible = true;
    play();
  } else {
    io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        visible ? play() : pause();
      },
      { threshold: 0.35 }
    );
    io.observe(card);
  }
  return () => {
    clearTimeout(pending);
    io && io.disconnect();
    document.removeEventListener("visibilitychange", onVis);
    run.stop();
    el.innerHTML = "";
  };
}
