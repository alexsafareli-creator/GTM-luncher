import { useState } from "react";

const COLORS = {
  "STEP 1": "#00FF94",
  "STEP 2": "#FFD600",
  "STEP 3": "#FF6B35",
  "STEP 4": "#A78BFA",
  "STEP 5": "#38BDF8",
  "STEP 6": "#F472B6",
  "STEP 7": "#00FF94",
};

const columns = [
  {
    id: "niche", label: "STEP 1", icon: "🎯", title: "Pick Your Niches", time: "~20 min",
    cards: [
      { id: "c1", title: "Niche Criteria Checklist", tag: "Validation", tasks: [
        "100% digital business? (agency, SaaS, e-com, coaching — NOT brick & mortar)",
        "Single sale/client generates $5,000+ for them?",
        "US or low-compliance market?",
        "No heavy compliance (no healthcare, legal, EU-GDPR)?",
        "Can reach decision makers by email or LinkedIn?",
        "10,000+ companies exist in this niche?",
      ]},
      { id: "c2", title: "Select & Validate Niche A", tag: "Research", tasks: [
        "Write down Niche A (e.g. 'PPC agencies')",
        "Google '[niche] average client value' — confirm $5k+",
        "LinkedIn search: confirm 10,000+ people in this niche",
        "Niche A passes ALL 6 criteria ✓",
      ]},
      { id: "c3", title: "Select & Validate Niche B", tag: "Research", tasks: [
        "Write down Niche B (e.g. 'online coaches')",
        "Google '[niche] average program price' — confirm $5k+",
        "Check school.com or LinkedIn — confirm large active pool",
        "Niche B passes ALL 6 criteria ✓",
        "Niches A & B are different enough to test separately",
      ]},
    ],
  },
  {
    id: "offers", label: "STEP 2", icon: "💡", title: "Build Your Offers", time: "~45 min",
    cards: [
      { id: "c4", title: "Find Real Problems on Reddit", tag: "Research", tasks: [
        "Create free account at gummysearch.com",
        "New Audience → type Niche A → auto-find subreddits",
        "Review & adjust subreddit list → Create Audience",
        "Search 'I hate' → sort by upvotes → read top 10 posts",
        "Search title '?' → sort upvotes → read top 10 posts",
        "Write down 2–3 recurring emotional problems for Niche A",
        "Repeat full process for Niche B",
      ]},
      { id: "c5", title: "Validate Each Problem", tag: "Validation", tasks: [
        "Problem mentioned by multiple different people?",
        "Solving it = direct revenue gain or time saved?",
        "Could AI/automation plausibly solve this?",
        "Is this felt by the DECISION MAKER, not just an employee?",
      ]},
      { id: "c6", title: "Build AI Solutions", tag: "Build", tasks: [
        "Write each problem in one sentence (plain language)",
        "Write a plausible AI-powered solution for each",
        "Does each solution have a tangible deliverable?",
        "Could you deliver a basic version within 72 hours?",
        "You have at least 2 solutions per niche = 4 solutions total ✓",
      ]},
      { id: "c7", title: "Write Time-Bound Guarantees", tag: "Copywriting", tasks: [
        "Fill in the formula: 'I will deliver [X] in [Y days] or [Z consequence]'",
        "Is the promise specific and measurable? (not vague)",
        "Is the consequence strong enough? (money back / work for free)",
        "Does the guarantee lower the risk to ZERO for the prospect?",
        "Would YOU take this offer if someone pitched it to you?",
        "Final check: 4 offers total (2 per niche), each with a guarantee ✓",
      ]},
    ],
  },
  {
    id: "leads", label: "STEP 3", icon: "🔍", title: "Scrape Your Leads", time: "~2–3 hrs",
    cards: [
      { id: "c8", title: "Method A: Airscale + AnyMailFinder", tag: "Scraping", tasks: [
        "airscale.io → Find Companies → keyword + United States",
        "Size 1–10 → Load 1,000 companies → export as CSV → label '[Niche]-Airscale-1to10'",
        "Repeat with Size 11–200 → export → label '[Niche]-Airscale-11to200'",
        "Combine both CSVs in Google Sheets → add 'size' column",
        "Scan 20 rows manually — 80%+ look like correct companies?",
        "Airscale: select company name column → Find Domain with Google → run on all rows",
        "Export enriched CSV → go to anymailfinder.com → New Bulk → Decision Maker Search",
        "Upload CSV → map Company Name + Company Domain → start enrichment",
        "Wait for completion → download results → label '[Niche]-Airscale-Emails'",
        "Check: at least 40% of rows have an email. If not, add more source rows.",
      ]},
      { id: "c9", title: "Method B: Sales Nav + Vain.io", tag: "Scraping", tasks: [
        "Open LinkedIn Sales Navigator (requires paid subscription)",
        "Set Job Titles: CEO, Founder, Owner, Co-founder, Partner, Director",
        "Set Keywords: 2–3 relevant terms (e.g. 'performance agency', 'PPC', 'media buy')",
        "Set Geography: United States only",
        "Check result count — aim for 1,000–2,000. Adjust if outside range.",
        "Open 10 random profiles — do at least 8/10 look like your target buyer?",
        "Copy the full Sales Navigator URL from the browser bar",
        "Go to vain.io → Create New Order → paste the Sales Nav URL → name it",
        "Connect your LinkedIn cookie (follow vain.io guide) → wait for export → download CSV",
        "Filter rows that already have emails → save separately as '[Niche]-Vain-HasEmails'",
        "Upload remaining rows to anymailfinder → Person Name Search → map name + domain → enrich",
        "Combine both files → label '[Niche]-SalesNav-Emails'",
        "Final check: combined list has 700+ emails? If not, expand the search.",
      ]},
      { id: "c10", title: "Lead Quality Validation", tag: "Validation", tasks: [
        "Open final email list → manually scan 20 random rows",
        "Are first names clean? (no 'N/A', no company names in first name field)",
        "Remove all info@, hello@, contact@, support@ addresses — not decision makers",
        "Do a quick Google of 3–5 companies — do they look like real businesses?",
        "Each final list should have 700–2,000 clean email addresses ✓",
      ]},
      { id: "c11", title: "Lead Totals Check", tag: "Review", tasks: [
        "Niche A — Method A list: 700–2,000 emails ready ✓",
        "Niche A — Method B list: 700–2,000 emails ready ✓",
        "Niche B — Method A list: 700–2,000 emails ready ✓",
        "Niche B — Method B list: 700–2,000 emails ready ✓",
        "All 4 lists stored as separate CSVs, clearly labeled — ready to upload ✓",
      ]},
    ],
  },
  {
    id: "copy", label: "STEP 4", icon: "✍️", title: "Write Your Copy", time: "~1–2 hrs",
    cards: [
      { id: "c12", title: "Source Winning Email Structures", tag: "Research", tasks: [
        "Check your own inbox — find 3–5 cold emails you actually opened and read",
        "Note the structure of each: what's the opening? where's the offer? how long is it?",
        "Find at least 1 short email (2–4 lines) and 1 long email (8–12 lines) to use as templates",
        "Strip out their specifics — keep only the skeleton",
      ]},
      { id: "c13", title: "Variant A — Long Form", tag: "Copywriting", tasks: [
        "Opening: sounds like you watched/read their content (keep vague enough for the whole niche)",
        "Does the opening work even if they don't have content on that exact topic?",
        "ID yourself: briefly who you are + 1 credibility point (result, company, client name)",
        "Offer: state ONLY the outcome — not the tool, not the process",
        "Social proof: 1 sentence — client name, result number, or claim",
        "Guarantee: mention performance-based / no-risk angle",
        "CTA: single low-friction ask — 'Worth a 15-min call this week?'",
        "Read the email out loud — does it sound human-written to one specific person?",
        "Remove ALL buzzwords (leverage, synergy, cutting-edge, etc.)",
        "Under 150 words? If not, cut — remove anything that doesn't earn its place.",
      ]},
      { id: "c14", title: "Variant B — Short Form", tag: "Copywriting", tasks: [
        "3–5 lines max",
        "Open with a single curiosity hook: 'If I could [specific outcome] for [low ask]...'",
        "1 line social proof (optional — only if it fits naturally)",
        "End with a yes/no question — makes it extremely easy to reply",
        "Add 1 deliberate flaw: 'Not sure if this is relevant to you, but...'",
        "Would a real person send this exact text from their phone? If yes, it's good.",
      ]},
      { id: "c15", title: "Subject Lines", tag: "Copywriting", tasks: [
        "Option 1 — Personal/vague: '[niche] thing' or 'quick thought'",
        "Option 2 — Outcome-forward: 'more [clients/revenue] — thoughts?'",
        "Option 3 — Curiosity: 'had an idea for [company type]'",
        "All subject lines under 8 words?",
        "No spam trigger words? (free, guaranteed, act now, limited time)",
      ]},
      { id: "c16", title: "Follow-Up Email (1 per campaign)", tag: "Copywriting", tasks: [
        "1–3 lines only — casual nudge, not a re-pitch",
        "References the first email",
        "Sends 1 day after initial, on same subject thread",
      ]},
      { id: "c17", title: "Copy Final QA", tag: "Review", tasks: [
        "2 variants per offer/niche combo = 8 emails total ✓",
        "4 follow-up emails (1 per campaign) ✓",
        "Subject lines ready for all campaigns ✓",
        "No email mentions 'AI' unless it's a direct credibility boost",
        "Every email has: perceived personalization + offer + CTA",
        "Would YOU reply to every email if it hit your inbox?",
      ]},
    ],
  },
  {
    id: "launch", label: "STEP 5", icon: "🚀", title: "Set Up & Launch", time: "~1 hr",
    cards: [
      { id: "c18", title: "Platform Setup", tag: "Setup", tasks: [
        "Log in to Instantly (or Smartlead, etc.)",
        "Confirm you have at least 20–30 pre-warmed sending mailboxes available",
        "All domains warmed for at least 2 weeks? (no brand new domains sending cold)",
        "Create 8 blank campaigns — name: '[Niche] – [Offer] – [Lead Source]'",
      ]},
      { id: "c19", title: "Build Campaign Sequences", tag: "Setup", tasks: [
        "Campaign 1: Sequences → paste Variant A as Email 1 (Cmd+Shift+V — no formatting)",
        "Add Variant B as Email 1 variant (A/B split — 50% each)",
        "Add Follow-Up as Email 2 → set delay: 1 day",
        "Click 'Clean HTML' on EVERY email in EVERY campaign",
        "Repeat for all 8 campaigns",
        "Save all campaigns — nothing left in draft/unsaved state",
      ]},
      { id: "c20", title: "Upload Leads", tag: "Setup", tasks: [
        "Campaign 1: Leads → Upload CSV → select the correct lead file",
        "Map columns: email, first name, last name",
        "Preview — names look clean? No N/A or numbers in name fields?",
        "Imported count matches expected count?",
        "Repeat upload for all 8 campaigns — each gets its OWN unique list",
      ]},
      { id: "c21", title: "Mailboxes & Schedule", tag: "Setup", tasks: [
        "Assign 10 sending mailboxes per campaign",
        "Segregate mailboxes — don't reuse across campaigns (protects deliverability)",
        "Set sending limit: 30–50 emails/mailbox/day (start conservative)",
        "Set schedule: Mon–Sat, 7am–7pm in target timezone",
        "Set email type: Text Only (no HTML, no images, no tracking pixels)",
      ]},
      { id: "c22", title: "Pre-Launch QA", tag: "Review", tasks: [
        "Preview each campaign — does [first name] populate correctly?",
        "Does [sending account first name] populate correctly?",
        "Send a test email to yourself — does it land in inbox (not spam)?",
        "All subject lines: no spam words, under 8 words",
        "All 8 campaigns reviewed and saved ✓",
      ]},
      { id: "c23", title: "Go Live 🚀", tag: "Launch", tasks: [
        "Activate all 8 campaigns",
        "Note the launch timestamp",
        "Do NOT check results for 24 hours — let volume build first",
        "Install your platform's mobile app → enable push notifications for new replies",
      ]},
    ],
  },
  {
    id: "replies", label: "STEP 6", icon: "💬", title: "Reply & Book", time: "Ongoing",
    cards: [
      { id: "c24", title: "Build 4 Reply Macros (before replies come in)", tag: "Setup", tasks: [
        "Macro 1 — Positive Reply: thanks + offer 2 specific times + calendar link",
        "Macro 2 — Positive + Questions: answer the question briefly → close for meeting",
        "Macro 3 — Polite No: no worries + ask for LinkedIn connect",
        "Macro 4 — Follow Up Later: confirm follow-up date + LinkedIn offer",
        "Test all 4 macros — do [name] variables populate correctly?",
      ]},
      { id: "c25", title: "The Booking Funnel", tag: "Action", tasks: [
        "Positive reply arrives → respond IMMEDIATELY (target: under 10 minutes)",
        "Use Macro 1 — offer 2 specific times + your cal link + their cal option",
        "They give a time → send calendar invite immediately, don't wait",
        "They send their calendar → book the earliest slot that works for you",
        "Once booked → confirm reply + add prep note to your own calendar",
      ]},
      { id: "c26", title: "Reply Type Playbook", tag: "Action", tasks: [
        "'How did you get my email?' → explain your outreach process. Don't apologize.",
        "'Tell me more / What's involved?' → Macro 2. Answer briefly, close for meeting.",
        "'What would this cost?' → don't give price. Say: 'Worth a quick call to see if it makes sense?'",
        "'Can you send case studies?' → send 1–2 results, then immediately ask for a call",
        "Hard no / 'remove me' / unsubscribe → click unsubscribe immediately, no reply",
        "Polite no → Macro 3, ask for LinkedIn connect, nurture them later",
        "Never rewrite your entire campaign based on 1–2 negative replies",
      ]},
      { id: "c27", title: "Daily Tracking", tag: "Review", tasks: [
        "Log: total replies, positive replies, meetings booked per campaign",
        "Track reply rate % and positive reply rate % separately",
        "Are you replying to 100% of positives within the same day?",
        "Day 3: at least 1 meeting booked? If not → move to Step 7 immediately",
      ]},
    ],
  },
  {
    id: "iterate", label: "STEP 7", icon: "📈", title: "Cut & Scale", time: "Weekly",
    cards: [
      { id: "c28", title: "48–72 Hour Review", tag: "Review", tasks: [
        "Pull reply rates for all 8 campaigns",
        "Sort campaigns from highest to lowest reply rate",
        "Flag any campaign with <1% reply rate as 'underperforming'",
        "Flag any campaign with >3% reply rate as 'winner'",
        "High total replies + 0% positive = hook works, but offer doesn't",
      ]},
      { id: "c29", title: "Diagnose & Fix Underperformers", tag: "Action", tasks: [
        "Pause campaigns <1% (don't delete — you'll revisit)",
        "Copy problem? → Rewrite the opening line and subject line only",
        "Offer problem? → Swap to a different offer from your Step 2 list",
        "Lead quality problem? → Swap scraping method or tighten your filters",
        "Reactivate and re-test with a fresh batch of 200–300 leads before scaling",
      ]},
      { id: "c30", title: "Scale Winners", tag: "Action", tasks: [
        "Campaigns >3% reply rate: upload 500–1,000 more leads",
        "Add 5 more mailboxes to winning campaigns to increase volume",
        "Clone winner → test a new copy variant (keep the offer identical)",
        "Clone winner → test a slightly different audience segment (same niche)",
      ]},
      { id: "c31", title: "Weekly Benchmarks", tag: "Milestones", tasks: [
        "Week 1 target: 2%+ average reply rate across all campaigns",
        "Week 2 target: 3%+ after cutting non-performers",
        "Week 4 target: 4–5%+ on best campaigns",
        "Month 1 target: at least 1 paying client or 10+ qualified meetings booked",
        "Ongoing: cost per meeting → $3–$5 target",
        "Cost per meeting $50+? Niche or offer is wrong → go back to Step 1",
      ]},
    ],
  },
];

const TAG_COLORS = {
  Validation: { bg: "#22c55e22", text: "#22c55e" },
  Research:   { bg: "#3b82f622", text: "#60a5fa" },
  Build:      { bg: "#f59e0b22", text: "#f59e0b" },
  Copywriting:{ bg: "#a78bfa22", text: "#a78bfa" },
  Scraping:   { bg: "#ff6b3522", text: "#ff6b35" },
  Review:     { bg: "#64748b22", text: "#94a3b8" },
  Setup:      { bg: "#38bdf822", text: "#38bdf8" },
  Launch:     { bg: "#00ff9422", text: "#00ff94" },
  Action:     { bg: "#f472b622", text: "#f472b6" },
  Milestones: { bg: "#ffd60022", text: "#ffd600" },
};

function Card({ card, color, onToggle, checked }) {
  const [open, setOpen] = useState(false);
  const done = card.tasks.filter((_, i) => checked[`${card.id}-${i}`]).length;
  const total = card.tasks.length;
  const pct = Math.round((done / total) * 100);
  const allDone = done === total;
  const tag = TAG_COLORS[card.tag] || TAG_COLORS.Review;

  return (
    <div style={{
      background: allDone ? "#0b180b" : "#141414",
      border: `1px solid ${allDone ? color + "40" : "#232323"}`,
      borderRadius: 6,
      overflow: "hidden",
      marginBottom: 8,
      transition: "border-color 0.2s",
      cursor: "pointer",
    }}
      onMouseEnter={e => { if (!allDone) e.currentTarget.style.borderColor = "#333"; }}
      onMouseLeave={e => { if (!allDone) e.currentTarget.style.borderColor = "#232323"; }}
    >
      <div onClick={() => setOpen(o => !o)} style={{ padding: "10px 12px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 7 }}>
          <div style={{
            marginTop: 2, width: 14, height: 14, borderRadius: 2, flexShrink: 0,
            border: `1.5px solid ${allDone ? color : "#333"}`,
            background: allDone ? color : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {allDone && <span style={{ color: "#000", fontSize: 8, fontWeight: "bold", lineHeight: 1 }}>✓</span>}
          </div>
          <span style={{
            fontSize: 12, fontWeight: "bold", color: allDone ? "#555" : "#ddd",
            lineHeight: 1.4, flex: 1, userSelect: "none",
            textDecoration: allDone ? "line-through" : "none", textDecorationColor: "#333",
          }}>
            {card.title}
          </span>
          <span style={{ fontSize: 10, color: "#333", flexShrink: 0, marginTop: 2, lineHeight: 1 }}>
            {open ? "▲" : "▼"}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            fontSize: 9, letterSpacing: 1, padding: "2px 7px", borderRadius: 3,
            background: tag.bg, color: tag.text, fontWeight: "bold", textTransform: "uppercase",
          }}>{card.tag}</span>
          <div style={{ flex: 1, height: 2, background: "#1a1a1a", borderRadius: 1, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: color, transition: "width 0.3s" }} />
          </div>
          <span style={{ fontSize: 9, color: "#333", flexShrink: 0 }}>{done}/{total}</span>
        </div>
      </div>

      {open && (
        <div style={{ padding: "0 10px 10px", borderTop: "1px solid #1a1a1a" }}>
          {card.tasks.map((task, i) => {
            const key = `${card.id}-${i}`;
            const tDone = !!checked[key];
            return (
              <div
                key={i}
                onClick={e => { e.stopPropagation(); onToggle(key); }}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 9,
                  padding: "6px 6px", borderRadius: 3, cursor: "pointer",
                  background: tDone ? "#0b160b" : "transparent", marginTop: 3, transition: "background 0.1s",
                }}
                onMouseEnter={e => { if (!tDone) e.currentTarget.style.background = "#1a1a1a"; }}
                onMouseLeave={e => { if (!tDone) e.currentTarget.style.background = tDone ? "#0b160b" : "transparent"; }}
              >
                <div style={{
                  width: 14, height: 14, borderRadius: 2, flexShrink: 0, marginTop: 1,
                  border: `1.5px solid ${tDone ? color : "#2a2a2a"}`,
                  background: tDone ? color : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.1s",
                }}>
                  {tDone && <span style={{ color: "#000", fontSize: 8, fontWeight: "bold", lineHeight: 1 }}>✓</span>}
                </div>
                <span style={{
                  fontSize: 11, lineHeight: 1.6, color: tDone ? "#3a3a3a" : "#999",
                  textDecoration: tDone ? "line-through" : "none", textDecorationColor: "#333", userSelect: "none",
                }}>
                  {task}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [checked, setChecked] = useState({});
  const onToggle = key => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  const allTasks = columns.flatMap(col => col.cards.flatMap(card => card.tasks.map((_, i) => `${card.id}-${i}`)));
  const totalDone = allTasks.filter(k => checked[k]).length;
  const totalAll = allTasks.length;
  const globalPct = Math.round((totalDone / totalAll) * 100);

  const colProgress = col => {
    const keys = col.cards.flatMap(card => card.tasks.map((_, i) => `${card.id}-${i}`));
    const done = keys.filter(k => checked[k]).length;
    return { done, total: keys.length };
  };

  return (
    <div style={{ minHeight: "100vh", background: "#090909", fontFamily: "'Courier New', monospace", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #090909; }
        ::-webkit-scrollbar { height: 4px; width: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }
      `}</style>

      {/* Top bar */}
      <div style={{
        padding: "0 24px", height: 52, borderBottom: "1px solid #161616",
        display: "flex", alignItems: "center", gap: 20, flexShrink: 0, background: "#0a0a0a",
      }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, color: "#fff", letterSpacing: 3, lineHeight: 1 }}>
            Sell an AI Service <span style={{ color: "#00FF94" }}>From Scratch</span>
          </div>
          <div style={{ fontSize: 9, color: "#222", letterSpacing: 3, marginTop: 1 }}>COLD OUTREACH EXECUTION BOARD</div>
        </div>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 160, height: 3, background: "#161616", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${globalPct}%`, background: "linear-gradient(90deg, #00FF94, #38BDF8)", transition: "width 0.4s" }} />
            </div>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, color: "#00FF94", letterSpacing: 2, lineHeight: 1 }}>
              {globalPct}%
            </span>
            <span style={{ fontSize: 10, color: "#333" }}>{totalDone}/{totalAll}</span>
          </div>
        </div>
      </div>

      {/* Board */}
      <div style={{ flex: 1, overflowX: "auto", padding: "20px 20px 40px", display: "flex", gap: 12, alignItems: "flex-start" }}>
        {columns.map(col => {
          const color = COLORS[col.label];
          const prog = colProgress(col);
          const colDone = prog.done === prog.total;

          return (
            <div key={col.id} style={{
              width: 272, flexShrink: 0, background: "#0e0e0e",
              border: `1px solid ${colDone ? color + "35" : "#1c1c1c"}`,
              borderRadius: 8, overflow: "hidden",
            }}>
              {/* Column header */}
              <div style={{ padding: "12px 14px 10px", borderBottom: "1px solid #141414", background: colDone ? "#0b180b" : "#111" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 14 }}>{col.icon}</span>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: 2,
                    padding: "2px 8px", borderRadius: 3,
                    background: colDone ? color : "transparent",
                    color: colDone ? "#000" : color,
                    border: `1px solid ${colDone ? color : color + "50"}`,
                  }}>
                    {colDone ? "✓ DONE" : col.label}
                  </div>
                  <span style={{ fontSize: 9, color: "#333", letterSpacing: 1 }}>{col.time}</span>
                  <span style={{ marginLeft: "auto", fontSize: 10, color: "#333" }}>{prog.done}/{prog.total}</span>
                </div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, color: colDone ? color : "#fff", letterSpacing: 2, lineHeight: 1, marginBottom: 8 }}>
                  {col.title}
                </div>
                <div style={{ background: "#1a1a1a", height: 2, borderRadius: 1, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${Math.round((prog.done / prog.total) * 100)}%`, background: color, transition: "width 0.3s" }} />
                </div>
              </div>

              {/* Cards */}
              <div style={{ padding: "10px 10px 4px", maxHeight: "calc(100vh - 160px)", overflowY: "auto" }}>
                {col.cards.map(card => (
                  <Card key={card.id} card={card} color={color} onToggle={onToggle} checked={checked} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
