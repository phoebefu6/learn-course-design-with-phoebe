/* ============================================================
   cd-live.js - "The transfer board"
   learn-course-design-with-phoebe

   Two widgets in one file.

   1. THE TRANSFER BOARD (#cd-live). A teaching MODEL of what
      happens to a trained skill over 90 days. Levers are the
      design and delivery choices that survive contact with a
      Monday. The anti-lever is the one every sponsor asks for:
      "can you fit more in".

      Honest about itself: the shape is drawn from the
      well-replicated findings that unpracticed material decays
      fast, that retrieval and spacing beat re-exposure, and that
      what happens after the room matters more than what happens
      in it. The digits are calibrated for teaching. It is not a
      measurement of your programme and the widget says so.

   2. THE OBJECTIVE LINTER (#cd-lint). This one is MEASURED:
      real string analysis on an objective you type. It finds
      non-observable verbs, checks for a condition and a
      criterion, and reports what it found by name.
   ============================================================ */
(function () {
  "use strict";

  /* =========================================================
     1 · THE TRANSFER BOARD
     ========================================================= */

  var BASE = { d1: 82, d30: 24, d90: 11 };   /* one-off session, nothing else */

  var LEVERS = [
    { id: "retrieval", name: "They retrieve it, rather than watch it",
      d1: 4, d30: 11, d90: 10,
      why: "Practice testing beats re-reading and re-watching by a wide margin, and it is nearly free. The cost is that the room feels harder, which is exactly why sponsors ask you to remove it." },
    { id: "spacing", name: "Spread over three sittings, not one",
      d1: -3, d30: 10, d90: 12,
      why: "Same total minutes, spread out. Day-one performance drops slightly because they never build a false peak, and 90-day retention roughly doubles. The trade people find hardest to accept." },
    { id: "worked", name: "Worked examples before independent practice",
      d1: 7, d30: 6, d90: 4,
      why: "Novices learn more from studying a solved example than from struggling. Fade the support as they get competent - keeping the scaffolding too long is its own failure." },
    { id: "jobaid", name: "A one-page job aid they keep",
      d1: 2, d30: 8, d90: 9,
      why: "The cheapest line on this board. Some things should never have been memorised - a checklist at the desk turns a memory problem into a reference problem." },
    { id: "manager", name: "Their manager asks about it in week one",
      d1: 0, d30: 11, d90: 14,
      why: "The single biggest transfer lever, and it is not training at all. One conversation that signals the new behaviour is expected. Costs a two-line email to the manager." },
    { id: "practice", name: "They do it for real within five days",
      d1: 0, d30: 8, d90: 9,
      why: "Skill that is never used is gone. Scheduling the first real use is design work, and it usually needs somebody who is not you to agree to it." }
  ];

  var ANTI = { id: "more", name: "Fit more content into the same session",
    d1: 3, d30: -12, d90: -9,
    why: "Coverage is not learning. More content in fixed time means less retrieval, less practice and no room to fade the scaffolding - so day one looks slightly better and everything after it is worse. This is the most common request a course designer receives." };

  function transfer(on) {
    var d1 = BASE.d1, d30 = BASE.d30, d90 = BASE.d90;
    LEVERS.concat([ANTI]).forEach(function (l) {
      if (on[l.id]) { d1 += l.d1; d30 += l.d30; d90 += l.d90; }
    });
    var cl = function (v) { return Math.max(0, Math.min(97, Math.round(v))); };
    return { d1: cl(d1), d30: cl(d30), d90: cl(d90) };
  }

  /* =========================================================
     2 · THE OBJECTIVE LINTER  (measured, not modelled)
     ========================================================= */

  var VAGUE = [
    "understand", "understands", "understanding", "know", "knows", "learn", "learns",
    "be aware", "aware of", "appreciate", "appreciates", "familiar with", "grasp",
    "comprehend", "realise", "realize", "be exposed to", "gain insight", "have knowledge"
  ];
  /* Deliberately broad: a short list produces false negatives on good objectives,
     which teaches the learner to distrust the tool rather than to fix the verb. */
  var OBSERVABLE_STEMS = [
    "write", "build", "calculate", "identify", "list", "explain", "demonstrate", "produce",
    "run", "configure", "diagnose", "choose", "compare", "rewrite", "present", "score",
    "design", "select", "draft", "review", "classify", "categorise", "categorize", "apply",
    "solve", "complete", "perform", "conduct", "prioritise", "prioritize", "estimate",
    "summarise", "summarize", "translate", "debug", "test", "measure", "plan", "facilitate",
    "negotiate", "deliver", "record", "update", "escalate", "triage", "label", "annotate",
    "validate", "verify", "sort", "rank", "allocate", "schedule", "brief", "coach", "map",
    "sketch", "assemble", "install", "repair", "sequence", "match", "state", "name", "cite"
  ];
  var OBSERVABLE = OBSERVABLE_STEMS.reduce(function (a, v) {
    a.push(v); a.push(v + "s");
    if (/e$/.test(v)) a.push(v.replace(/e$/, "es"));
    return a;
  }, []);
  /* a condition says WHEN or WITH WHAT; a criterion says HOW WELL */
  var CONDITION = /\b(given|using|with(?:out)? (?:a|an|the|access)|from (?:a|an|the)|in (?:a|an|the)|when (?:given|presented|asked)|during|on (?:a|an|the))\b/i;
  var CRITERION = /\b(\d+\s*(?:percent|%|minutes?|seconds?|hours?|words?|errors?|out of)|within \d+|at least \d+|no more than \d+|without (?:error|help|reference|assistance)|to (?:the )?(?:standard|spec|checklist)|that (?:passes|meets|scores))\b/i;

  function lintObjective(text) {
    var t = String(text || "").trim();
    var low = t.toLowerCase();
    var found = { vague: [], observable: [] };

    VAGUE.forEach(function (v) {
      if (new RegExp("\\b" + v.replace(/ /g, "\\s+") + "\\b", "i").test(low)) found.vague.push(v);
    });
    OBSERVABLE.forEach(function (v) {
      if (new RegExp("\\b" + v + "\\b", "i").test(low)) found.observable.push(v);
    });

    var hasCondition = CONDITION.test(t);
    var hasCriterion = CRITERION.test(t);
    var words = t ? t.split(/\s+/).filter(function (w) { return /[a-z0-9]/i.test(w); }).length : 0;

    var checks = [
      { label: "An observable verb", pass: found.observable.length > 0 && found.vague.length === 0,
        detail: found.vague.length
          ? "found non-observable: " + found.vague.join(", ")
          : found.observable.length ? "found: " + found.observable.join(", ") : "no action verb found at all" },
      { label: "A condition", pass: hasCondition,
        detail: hasCondition ? "says when or with what" : "add \"given...\" or \"using...\" - what will they have in front of them?" },
      { label: "A criterion", pass: hasCriterion,
        detail: hasCriterion ? "says how well" : "add a standard - how many, how fast, to what checklist?" },
      { label: "Short enough to test", pass: words > 0 && words <= 35,
        detail: words + " words" + (words > 35 ? " - this is probably two objectives" : "") }
    ];
    var passed = checks.filter(function (c) { return c.pass; }).length;
    return { checks: checks, passed: passed, total: checks.length, words: words, found: found };
  }

  /* =========================================================
     UI
     ========================================================= */
  var CSS = [
    "#cd-live,#cd-lint{margin:1.6rem 0}",
    ".cd{border:1px solid var(--hairline);border-radius:var(--radius);background:#fff;overflow:hidden}",
    ".cd-head{background:var(--indigo-deep);color:#fff;padding:.85rem 1.1rem;display:flex;gap:.8rem;align-items:center;flex-wrap:wrap}",
    ".cd-head h4{font-size:.95rem;font-weight:800;margin:0;flex:1;min-width:12rem}",
    ".cd-head .cd-sub{font-size:.78rem;opacity:.85}",
    ".cd-body{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr)}",
    "@media(max-width:820px){.cd-body{grid-template-columns:1fr}}",
    ".cd-left{padding:.9rem 1.1rem;border-right:1px solid var(--hairline)}",
    "@media(max-width:820px){.cd-left{border-right:0;border-bottom:1px solid var(--hairline)}}",
    ".cd-left h5,.cd-right h5{font-size:.72rem;text-transform:uppercase;letter-spacing:.09em;color:var(--muted);margin:0 0 .5rem}",
    ".cd-lv{display:block;padding:.42rem .5rem;border-radius:9px;cursor:pointer;font-size:.85rem;line-height:1.45}",
    ".cd-lv:hover{background:var(--indigo-50)}",
    ".cd-lv.on{background:var(--indigo-50)}",
    ".cd-lv.anti.on{background:#FEF2F2}",
    ".cd-lv input{margin-right:.5rem;accent-color:var(--indigo)}",
    ".cd-lv .eff{display:block;margin-left:1.45rem;font:600 .71rem ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--muted)}",
    ".cd-lv.anti.on .eff{color:#991B1B}",
    ".cd-why{margin:.15rem 0 .5rem 1.45rem;padding:.5rem .65rem;border-left:3px solid var(--indigo-soft);background:var(--paper);font-size:.79rem;color:var(--muted);border-radius:0 8px 8px 0}",
    ".cd-lv.anti.on + .cd-why{border-left-color:#FCA5A5}",
    ".cd-btns{display:flex;gap:.4rem;margin-top:.7rem;flex-wrap:wrap}",
    ".cd-btns button{border:1px solid var(--hairline);background:#fff;border-radius:999px;padding:.3rem .8rem;font:700 .74rem Inter,sans-serif;color:var(--ink);cursor:pointer}",
    ".cd-btns button:hover{border-color:var(--indigo);color:var(--indigo)}",
    ".cd-right{padding:.9rem 1.1rem;background:var(--paper)}",
    ".cd-curve{background:#fff;border:1px solid var(--hairline);border-radius:10px;padding:.6rem}",
    ".cd-nums{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;margin-top:.7rem}",
    ".cd-num{background:#fff;border:1px solid var(--hairline);border-radius:10px;padding:.6rem .7rem;text-align:center}",
    ".cd-num b{display:block;font:800 1.5rem Inter,sans-serif;font-variant-numeric:tabular-nums;line-height:1.1}",
    ".cd-num span{font-size:.7rem;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.07em}",
    ".cd-note{margin-top:.7rem;padding:.6rem .75rem;border-radius:9px;background:#fff;border:1px solid var(--hairline);font-size:.8rem;line-height:1.6}",
    ".cd-note b{color:var(--indigo-deep)}",
    ".cd-note.bad{background:#FEF2F2;border-color:#FCA5A5}",
    ".cd-note.bad b{color:#991B1B}",
    ".cd-foot{border-top:1px solid var(--hairline);padding:.6rem 1.1rem;font-size:.74rem;color:var(--muted);background:var(--paper)}",
    /* linter */
    ".cdl-in{width:100%;border:1px solid var(--hairline);border-radius:10px;padding:.7rem .85rem;font:400 .9rem/1.6 Inter,sans-serif;color:var(--ink)}",
    ".cdl-row{display:grid;grid-template-columns:1.6rem 10rem 1fr;gap:.5rem;align-items:baseline;font-size:.82rem;padding:.35rem 0;border-bottom:.5px solid var(--hairline)}",
    ".cdl-row:last-child{border-bottom:0}",
    ".cdl-row i{font-style:normal;font-weight:800}",
    ".cdl-row.ok i{color:var(--amber-ink)}",
    ".cdl-row.no i{color:#991B1B}",
    ".cdl-row b{font-weight:700;color:var(--ink)}",
    ".cdl-row span{color:var(--muted)}",
    ".cdl-score{font:800 1.1rem Inter,sans-serif;margin:.6rem 0 .2rem}"
  ].join("");

  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  function svgEl(t, attrs) {
    var e = document.createElementNS("http://www.w3.org/2000/svg", t);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  function mountBoard(host) {
    var on = {};
    LEVERS.forEach(function (l) { on[l.id] = false; });
    on[ANTI.id] = false;

    var shell = el("div", "cd");
    var head = el("div", "cd-head");
    head.appendChild(el("h4", null, "The transfer board"));
    head.appendChild(el("span", "cd-sub", "Can they still do it in 90 days?"));
    shell.appendChild(head);

    var body = el("div", "cd-body");
    var left = el("div", "cd-left");
    left.appendChild(el("h5", null, "Design and delivery choices"));
    var rows = {};
    LEVERS.concat([ANTI]).forEach(function (l) {
      var lab = el("label", "cd-lv" + (l === ANTI ? " anti" : ""));
      var cb = document.createElement("input"); cb.type = "checkbox";
      lab.appendChild(cb); lab.appendChild(document.createTextNode(l.name));
      var sign = function (n) { return (n > 0 ? "+" : "") + n; };
      lab.appendChild(el("span", "eff", "day 1 " + sign(l.d1) + " · day 30 " + sign(l.d30) + " · day 90 " + sign(l.d90)));
      var why = el("div", "cd-why", l.why); why.style.display = "none";
      left.appendChild(lab); left.appendChild(why);
      rows[l.id] = { lab: lab, cb: cb, why: why };
      cb.addEventListener("change", function () { on[l.id] = cb.checked; paint(); });
    });
    var btns = el("div", "cd-btns");
    var bAll = el("button", null, "Switch every design lever on");
    var bNone = el("button", null, "Back to the one-off session");
    btns.appendChild(bAll); btns.appendChild(bNone);
    left.appendChild(btns);
    body.appendChild(left);

    var right = el("div", "cd-right");
    right.appendChild(el("h5", null, "Able to perform, unaided"));
    var curve = el("div", "cd-curve");
    right.appendChild(curve);
    var nums = el("div", "cd-nums");
    right.appendChild(nums);
    var note = el("div", "cd-note");
    right.appendChild(note);
    body.appendChild(right);
    shell.appendChild(body);

    shell.appendChild(el("div", "cd-foot",
      "A teaching model, not a measurement of your programme. The shape follows the well-replicated findings that unpracticed material decays quickly, that retrieval and spacing beat re-exposure, and that what happens after the room matters more than what happens in it. Every constant is listed in materials/official-course-map.md."));

    host.appendChild(shell);

    function drawCurve(t) {
      curve.innerHTML = "";
      var W = 420, H = 168, padL = 34, padB = 26, padT = 10, padR = 10;
      var svg = svgEl("svg", { viewBox: "0 0 " + W + " " + H, role: "img",
        "aria-label": "Retention curve from day 1 to day 90 for the current lever set" });
      svg.style.width = "100%"; svg.style.height = "auto"; svg.style.display = "block";

      var x = function (d) { return padL + (Math.log(d) / Math.log(90)) * (W - padL - padR); };
      var y = function (v) { return padT + (1 - v / 100) * (H - padT - padB); };

      [0, 25, 50, 75, 100].forEach(function (v) {
        svg.appendChild(svgEl("line", { x1: padL, y1: y(v), x2: W - padR, y2: y(v), stroke: "#E9E1D7", "stroke-width": 1 }));
        var tx = svgEl("text", { x: padL - 6, y: y(v) + 4, "text-anchor": "end" });
        tx.setAttribute("style", "font:600 9px Inter,sans-serif;fill:#6E6055");
        tx.textContent = v;
        svg.appendChild(tx);
      });

      var base = transfer({});
      var mk = function (t, colour, width, dash) {
        var pts = [[1, t.d1], [30, t.d30], [90, t.d90]].map(function (p) { return x(p[0]) + "," + y(p[1]); }).join(" ");
        var pl = svgEl("polyline", { points: pts, fill: "none", stroke: colour, "stroke-width": width, "stroke-linejoin": "round" });
        if (dash) pl.setAttribute("stroke-dasharray", dash);
        svg.appendChild(pl);
        [[1, t.d1], [30, t.d30], [90, t.d90]].forEach(function (p) {
          svg.appendChild(svgEl("circle", { cx: x(p[0]), cy: y(p[1]), r: width > 2 ? 4 : 3, fill: colour }));
        });
      };
      mk(base, "#D5C9BC", 2, "4 3");
      mk(t, "#5C3A21", 3, null);

      [[1, "day 1"], [30, "day 30"], [90, "day 90"]].forEach(function (p) {
        var tx = svgEl("text", { x: x(p[0]), y: H - 8, "text-anchor": "middle" });
        tx.setAttribute("style", "font:600 9px Inter,sans-serif;fill:#6E6055");
        tx.textContent = p[1];
        svg.appendChild(tx);
      });
      var leg = svgEl("text", { x: W - padR, y: padT + 10, "text-anchor": "end" });
      leg.setAttribute("style", "font:600 9px Inter,sans-serif;fill:#6E6055");
      leg.textContent = "dashed = the one-off session";
      svg.appendChild(leg);

      curve.appendChild(svg);
    }

    function paint() {
      LEVERS.concat([ANTI]).forEach(function (l) {
        rows[l.id].lab.classList.toggle("on", !!on[l.id]);
        rows[l.id].why.style.display = on[l.id] ? "block" : "none";
      });

      var t = transfer(on);
      drawCurve(t);

      nums.innerHTML = "";
      [["day 1", t.d1], ["day 30", t.d30], ["day 90", t.d90]].forEach(function (p, i) {
        var d = el("div", "cd-num");
        var b = el("b", null, p[1] + "%");
        if (i === 2) b.style.color = p[1] >= 60 ? "var(--indigo-deep)" : p[1] >= 35 ? "var(--ink)" : "#991B1B";
        d.appendChild(b);
        d.appendChild(el("span", null, p[0]));
        nums.appendChild(d);
      });

      note.className = "cd-note";
      note.innerHTML = "";
      var base = transfer({});
      if (on.more) {
        note.className = "cd-note bad";
        note.appendChild(el("b", null, "More content is on. "));
        note.appendChild(document.createTextNode(
          "Day one went up by 3 and day 90 went down by 9. The session covers more and produces less, because the minutes came out of retrieval and practice. This is the most common request a designer gets and it is worth having this number ready."));
      } else if (!on.manager && (on.retrieval || on.spacing || on.worked)) {
        note.appendChild(el("b", null, "The manager lever is still off. "));
        note.appendChild(document.createTextNode(
          "It is worth 14 points at day 90 - more than any classroom technique on this board - and it costs a two-line email. Most transfer failures are not design failures."));
      } else {
        note.appendChild(el("b", null, "Day 90: " + t.d90 + "% against " + base.d90 + "% for a one-off session. "));
        note.appendChild(document.createTextNode(
          t.d90 >= 60 ? "This is what designing for Monday rather than for the room looks like."
            : "The room is where the least of this is decided."));
      }

      api.state = on; api.transfer = t;
    }

    bAll.addEventListener("click", function () {
      LEVERS.forEach(function (l) { on[l.id] = true; rows[l.id].cb.checked = true; });
      on[ANTI.id] = false; rows[ANTI.id].cb.checked = false;
      paint();
    });
    bNone.addEventListener("click", function () {
      LEVERS.concat([ANTI]).forEach(function (l) { on[l.id] = false; rows[l.id].cb.checked = false; });
      paint();
    });

    var api = {
      state: on, transfer: null,
      set: function (id, v) { on[id] = v; if (rows[id]) rows[id].cb.checked = !!v; paint(); },
      setAll: function () { bAll.click(); },
      reset: function () { bNone.click(); },
      model: transfer, LEVERS: LEVERS, ANTI: ANTI, BASE: BASE
    };
    window.CD_LIVE = api;
    paint();
  }

  function mountLinter(host) {
    var shell = el("div", "cd");
    var head = el("div", "cd-head");
    head.appendChild(el("h4", null, "The objective linter"));
    head.appendChild(el("span", "cd-sub", "Measured, not modelled"));
    shell.appendChild(head);

    var box = el("div"); box.style.padding = ".9rem 1.1rem";
    var input = document.createElement("input");
    input.className = "cdl-in";
    input.type = "text";
    input.value = "Participants will understand our data governance policy.";
    box.appendChild(input);
    var out = el("div"); out.style.marginTop = ".6rem";
    box.appendChild(out);
    shell.appendChild(box);
    shell.appendChild(el("div", "cd-foot",
      "Real string analysis in your browser - it looks for non-observable verbs from a fixed list, an observable one, a condition, and a criterion. A chosen list, not a standard: it exists to make you look, not to make the decision."));
    host.appendChild(shell);

    function paint() {
      var r = lintObjective(input.value);
      out.innerHTML = "";
      var sc = el("div", "cdl-score", r.passed + " of " + r.total + " checks pass");
      sc.style.color = r.passed === r.total ? "var(--indigo-deep)" : r.passed >= 2 ? "var(--ink)" : "#991B1B";
      out.appendChild(sc);
      r.checks.forEach(function (c) {
        var row = el("div", "cdl-row " + (c.pass ? "ok" : "no"));
        row.appendChild(el("i", null, c.pass ? "✓" : "✗"));
        row.appendChild(el("b", null, c.label));
        row.appendChild(el("span", null, c.detail));
        out.appendChild(row);
      });
      api.result = r;
    }
    input.addEventListener("input", paint);

    var api = {
      result: null, lint: lintObjective,
      set: function (v) { input.value = v; paint(); }
    };
    window.CD_LINT = api;
    paint();
  }

  if (typeof document !== "undefined") {
    var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
    var b = document.getElementById("cd-live");
    if (b) mountBoard(b);
    var l = document.getElementById("cd-lint");
    if (l) mountLinter(l);
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { transfer: transfer, lintObjective: lintObjective, LEVERS: LEVERS, ANTI: ANTI, BASE: BASE };
  }
})();
