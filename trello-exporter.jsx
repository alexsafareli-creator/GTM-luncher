import { useState } from "react";

const BOARD_DATA = [
  {
    name: "🎯 STEP 1 — Pick Your Niches (~20 min)",
    cards: [
      { name: "Niche Criteria Checklist", items: ["100% digital business? (agency, SaaS, e-com, coaching)", "Single sale/client generates $5,000+ for them?", "US or low-compliance market?", "No heavy compliance (no healthcare, legal, EU-GDPR)?", "Can reach decision makers by email or LinkedIn?", "10,000+ companies exist in this niche?"] },
      { name: "Select & Validate Niche A", items: ["Write down Niche A (e.g. 'PPC agencies')", "Google '[niche] average client value' — confirm $5k+", "LinkedIn search: confirm 10,000+ people in this niche", "Niche A passes ALL 6 criteria ✓"] },
      { name: "Select & Validate Niche B", items: ["Write down Niche B (e.g. 'online coaches')", "Google '[niche] average program price' — confirm $5k+", "Check school.com or LinkedIn — confirm large active pool", "Niche B passes ALL 6 criteria ✓", "Niches A & B are different enough to test separately"] },
    ]
  },
  {
    name: "💡 STEP 2 — Build Your Offers (~45 min)",
    cards: [
      { name: "Find Real Problems on Reddit (Gummysearch)", items: ["Create free account at gummysearch.com", "New Audience → type Niche A → auto-find subreddits", "Review & adjust subreddit list → Create Audience", "Search 'I hate' → sort by upvotes → read top 10 posts", "Search title '?' → sort upvotes → read top 10 posts", "Write down 2–3 recurring emotional problems for Niche A", "Repeat full process for Niche B"] },
      { name: "Validate Each Problem", items: ["Problem mentioned by multiple different people?", "Solving it = direct revenue gain or time saved?", "Could AI/automation plausibly solve this?", "Is this felt by the DECISION MAKER, not just an employee?"] },
      { name: "Build AI Solutions", items: ["Write each problem in one sentence (plain language)", "Write a plausible AI-powered solution for each", "Each solution has a tangible deliverable?", "Could deliver a basic version within 72 hours?", "2 solutions per niche = 4 solutions total ✓"] },
      { name: "Write Time-Bound Guarantees", items: ["Formula: 'I will deliver [X] in [Y days] or [Z consequence]'", "Promise is specific and measurable (not vague)", "Consequence is strong: refund or work for free", "Guarantee lowers risk to ZERO for the prospect", "YOU would take this offer if pitched to you", "4 offers total (2 per niche), each with a guarantee ✓"] },
    ]
  },
  {
    name: "🔍 STEP 3 — Scrape Your Leads (~2–3 hrs)",
    cards: [
      { name: "Method A: Airscale + AnyMailFinder", items: ["airscale.io → Find Companies → keyword + United States", "Size 1–10 → Load 1,000 → export '[Niche]-Airscale-1to10'", "Size 11–200 → export '[Niche]-Airscale-11to200'", "Combine both CSVs in Google Sheets + add 'size' column", "Scan 20 rows manually — 80%+ look correct?", "Airscale: Find Domain with Google → run on all rows", "anymailfinder.com → New Bulk → Decision Maker Search", "Upload CSV → map Company Name + Domain → enrich", "Download → label '[Niche]-Airscale-Emails'", "40%+ of rows have an email? If not, add more rows."] },
      { name: "Method B: Sales Nav + Vain.io", items: ["LinkedIn Sales Nav → Job Titles: CEO, Founder, Owner, Partner", "Keywords: 2–3 terms (e.g. 'performance agency', 'PPC')", "Geography: United States only", "Result count: 1,000–2,000. Adjust if outside range.", "Open 10 random profiles — 8/10 match target buyer?", "Copy the full Sales Nav URL", "vain.io → New Order → paste URL → connect LinkedIn cookie", "Download CSV → filter rows WITH emails → save separately", "Upload remaining to anymailfinder → Person Name Search", "Combine both files → label '[Niche]-SalesNav-Emails'", "700+ emails in combined list? If not, expand the search."] },
      { name: "Lead Quality Validation", items: ["Manually scan 20 random rows per list", "First names clean? (no 'N/A', no company names)", "Remove info@, hello@, contact@, support@ addresses", "Google 3–5 companies — look like real businesses?", "Each final list: 700–2,000 clean emails ✓"] },
      { name: "Lead Totals Check", items: ["Niche A — Method A: 700–2,000 emails ready ✓", "Niche A — Method B: 700–2,000 emails ready ✓", "Niche B — Method A: 700–2,000 emails ready ✓", "Niche B — Method B: 700–2,000 emails ready ✓", "All 4 CSVs clearly labeled — ready to upload ✓"] },
    ]
  },
  {
    name: "✍️ STEP 4 — Write Your Copy (~1–2 hrs)",
    cards: [
      { name: "Source Winning Email Structures", items: ["Find 3–5 cold emails from your inbox you actually opened", "Note structure: opening, offer placement, length", "Find 1 short (2–4 lines) and 1 long (8–12 lines) template", "Strip their specifics — keep only the skeleton"] },
      { name: "Variant A — Long Form", items: ["Opening: sounds like you watched/read their content (keep vague)", "Opening works for anyone in the niche?", "ID yourself: who you are + 1 credibility point", "Offer: state ONLY the outcome, not the tool or process", "Social proof: 1 sentence — client, result, or claim", "Guarantee: mention performance-based / no-risk angle", "CTA: single low-friction ask ('Worth a 15-min call?')", "Read aloud — sounds human-written to one specific person?", "Remove all buzzwords (leverage, synergy, cutting-edge)", "Under 150 words? Cut anything that doesn't earn its place."] },
      { name: "Variant B — Short Form", items: ["3–5 lines max", "Open with curiosity hook: 'If I could [outcome] for [low ask]...'", "1 line social proof (optional — only if it fits naturally)", "End with yes/no question — easy to reply", "Add 1 deliberate flaw: 'Not sure if relevant, but...'", "Would a real person send this from their phone? If yes, good."] },
      { name: "Subject Lines", items: ["Option 1 — Personal/vague: '[niche] thing' or 'quick thought'", "Option 2 — Outcome: 'more [clients/revenue] — thoughts?'", "Option 3 — Curiosity: 'had an idea for [company type]'", "All subject lines under 8 words?", "No spam trigger words (free, guaranteed, act now)?"] },
      { name: "Follow-Up Email", items: ["1–3 lines only — casual nudge, not a re-pitch", "References the first email", "Sends 1 day after initial, same subject thread"] },
      { name: "Copy Final QA", items: ["2 variants per offer/niche combo = 8 emails total ✓", "4 follow-up emails (1 per campaign) ✓", "Subject lines ready for all campaigns ✓", "No email pitches 'AI' unless credibility boost", "Every email: personalization + offer + CTA", "Would YOU reply to every email?"] },
    ]
  },
  {
    name: "🚀 STEP 5 — Set Up & Launch (~1 hr)",
    cards: [
      { name: "Platform Setup", items: ["Log in to Instantly (or Smartlead, etc.)", "20–30 pre-warmed mailboxes available?", "All domains warmed for 2+ weeks?", "Create 8 blank campaigns — name: '[Niche] – [Offer] – [Source]'"] },
      { name: "Build Campaign Sequences", items: ["Paste Variant A as Email 1 (Cmd+Shift+V — no formatting)", "Add Variant B as Email 1 A/B variant (50/50 split)", "Add Follow-Up as Email 2 → delay: 1 day", "Click 'Clean HTML' on EVERY email", "Repeat for all 8 campaigns", "Save all — nothing left in draft state"] },
      { name: "Upload Leads", items: ["Campaign 1: Leads → Upload CSV → select correct file", "Map: email, first name, last name columns", "Preview — names clean? No N/A or numbers in name fields?", "Imported count matches expected count?", "Repeat for all 8 campaigns — each has its OWN unique list"] },
      { name: "Mailboxes & Schedule", items: ["Assign 10 sending mailboxes per campaign", "Different mailboxes per campaign (segregate deliverability)", "Send limit: 30–50 emails/mailbox/day", "Schedule: Mon–Sat, 7am–7pm target timezone", "Email type: Text Only (no HTML, no tracking pixels)"] },
      { name: "Pre-Launch QA", items: ["Preview each campaign — [first name] populates correctly?", "[Sending account first name] populates correctly?", "Send test email to yourself — lands in inbox (not spam)?", "Subject lines: no spam words, under 8 words", "All 8 campaigns reviewed and saved ✓"] },
      { name: "Go Live 🚀", items: ["Activate all 8 campaigns", "Note launch timestamp", "Don't check results for 24 hours — let volume build", "Install mobile app → enable push notifications"] },
    ]
  },
  {
    name: "💬 STEP 6 — Reply & Book (Ongoing)",
    cards: [
      { name: "Build 4 Reply Macros", items: ["Macro 1 — Positive: offer 2 times + cal link", "Macro 2 — Positive + Questions: answer then close for meeting", "Macro 3 — Polite No: ask for LinkedIn connect", "Macro 4 — Follow Later: confirm date, LinkedIn offer", "Test all macros — [name] variables populate?"] },
      { name: "The Booking Funnel", items: ["Positive reply → respond within 10 minutes", "Use Macro 1 — 2 times + your cal link + their cal option", "They give a time → send calendar invite immediately", "They send calendar → book earliest slot that works", "Booked → confirm reply + add prep note to your calendar"] },
      { name: "Reply Type Playbook", items: ["'How did you get my email?' → explain, don't apologize", "'Tell me more' → Macro 2, answer briefly, close for call", "'What does it cost?' → don't give price, book a call instead", "'Send case studies' → 1–2 results then ask for call", "Hard no / unsubscribe → click unsub, no reply needed", "Polite no → Macro 3, LinkedIn connect, nurture later", "Never rewrite campaign from <10 negative replies"] },
      { name: "Daily Tracking", items: ["Log: total replies, positive replies, meetings booked/campaign", "Track reply % and positive reply % separately", "Replying to 100% of positives same day?", "Day 3: at least 1 meeting booked? If not → Step 7 now"] },
    ]
  },
  {
    name: "📈 STEP 7 — Cut & Scale (Weekly)",
    cards: [
      { name: "48–72 Hour Review", items: ["Pull reply rates for all 8 campaigns", "Sort from highest to lowest", "Flag <1% reply rate as 'underperforming'", "Flag >3% reply rate as 'winner'", "High replies + 0% positive = hook works, offer doesn't"] },
      { name: "Diagnose & Fix Underperformers", items: ["Pause campaigns <1% (don't delete)", "Copy problem? → Rewrite opening line + subject only", "Offer problem? → Swap to a different offer from Step 2", "Lead quality? → Swap scraping method or tighten filters", "Re-test with 200–300 fresh leads before scaling again"] },
      { name: "Scale Winners", items: ["Campaigns >3%: upload 500–1,000 more leads", "Add 5 more mailboxes to winning campaigns", "Clone winner → test new copy variant (same offer)", "Clone winner → test new audience segment (same niche)"] },
      { name: "Weekly Benchmarks", items: ["Week 1: 2%+ average reply rate", "Week 2: 3%+ after cutting non-performers", "Week 4: 4–5%+ on best campaigns", "Month 1: 1 paying client or 10+ qualified meetings", "Ongoing: cost per meeting → $3–$5 target", "Cost $50+? Niche or offer is wrong → back to Step 1"] },
    ]
  },
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function apiCall(method, path, body, key, token) {
  const url = `https://api.trello.com/1${path}?key=${key}&token=${token}`;
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Trello API error ${res.status}: ${txt}`);
  }
  return res.json();
}

export default function TrelloExporter() {
  const [apiKey, setApiKey] = useState("");
  const [token, setToken] = useState("");
  const [boardName, setBoardName] = useState("Sell an AI Service From Scratch");
  const [status, setStatus] = useState("idle"); // idle | running | done | error
  const [log, setLog] = useState([]);
  const [boardUrl, setBoardUrl] = useState("");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  const addLog = msg => setLog(prev => [...prev, msg]);

  const totalSteps = BOARD_DATA.reduce((acc, col) => acc + 1 + col.cards.reduce((a, c) => a + 1 + 1, 0), 0);

  const run = async () => {
    if (!apiKey.trim() || !token.trim()) { setError("Please enter both your API Key and Token."); return; }
    setError("");
    setStatus("running");
    setLog([]);
    setProgress(0);
    let done = 0;

    try {
      // Create board
      addLog("Creating Trello board...");
      const board = await apiCall("POST", "/boards", { name: boardName, defaultLists: false }, apiKey.trim(), token.trim());
      setBoardUrl(board.shortUrl);
      done++; setProgress(Math.round((done / totalSteps) * 100));
      addLog(`✓ Board created: "${boardName}"`);

      // Create lists + cards + checklists
      for (const col of BOARD_DATA) {
        await sleep(300);
        addLog(`Creating list: ${col.name}`);
        const list = await apiCall("POST", "/lists", { name: col.name, idBoard: board.id }, apiKey.trim(), token.trim());
        done++; setProgress(Math.round((done / totalSteps) * 100));

        for (const card of col.cards) {
          await sleep(250);
          const createdCard = await apiCall("POST", "/cards", { name: card.name, idList: list.id }, apiKey.trim(), token.trim());
          done++; setProgress(Math.round((done / totalSteps) * 100));

          // Add checklist
          await sleep(200);
          const checklist = await apiCall("POST", "/checklists", { idCard: createdCard.id, name: "Tasks" }, apiKey.trim(), token.trim());
          done++; setProgress(Math.round((done / totalSteps) * 100));

          for (const item of card.items) {
            await sleep(120);
            await apiCall("POST", `/checklists/${checklist.id}/checkItems`, { name: item }, apiKey.trim(), token.trim());
          }
          addLog(`  ✓ Card: "${card.name}" (${card.items.length} tasks)`);
        }
      }

      addLog("✓ All done! Your board is ready.");
      setStatus("done");
      setProgress(100);
    } catch (e) {
      setError(e.message);
      setStatus("error");
      addLog(`✗ Error: ${e.message}`);
    }
  };

  const inputStyle = {
    width: "100%", padding: "8px 12px", borderRadius: 6,
    border: "1px solid #e9e9e7", fontSize: 13, color: "#37352f",
    background: "#fff", outline: "none", fontFamily: "inherit",
    transition: "border-color 0.15s",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7f7f5", fontFamily: "'Lato', 'Segoe UI', sans-serif", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 20px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; }
        input:focus { border-color: #2563eb !important; box-shadow: 0 0 0 2px #dbeafe; }
        .btn-primary { cursor: pointer; transition: background 0.15s, transform 0.1s; }
        .btn-primary:hover:not(:disabled) { background: #1d4ed8 !important; }
        .btn-primary:active:not(:disabled) { transform: scale(0.98); }
        .log-item { animation: fadein 0.2s ease; }
        @keyframes fadein { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
        a:hover { text-decoration: underline !important; }
      `}</style>

      <div style={{ width: "100%", maxWidth: 520 }}>

        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <img src="https://cdn.worldvectorlogo.com/logos/trello.svg" alt="Trello" style={{ width: 28, height: 28 }} onError={e => { e.target.style.display = 'none'; }} />
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#37352f", margin: 0 }}>Export to Trello</h1>
          </div>
          <p style={{ fontSize: 13, color: "#9b9a97", margin: 0, lineHeight: 1.6 }}>
            Creates your full "Sell an AI Service From Scratch" board in Trello — all 7 lists, 31 cards, and every checklist item — in one click.
          </p>
        </div>

        {/* Card */}
        <div style={{ background: "#fff", border: "1px solid #e9e9e7", borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", padding: "24px" }}>

          {/* Instructions */}
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 6, padding: "12px 14px", marginBottom: 20 }}>
            <p style={{ fontSize: 12, color: "#1e40af", margin: 0, lineHeight: 1.8 }}>
              <strong>How to get your credentials:</strong><br />
              1. Go to <a href="https://trello.com/power-ups/admin" target="_blank" rel="noreferrer" style={{ color: "#2563eb", textDecoration: "none" }}>trello.com/power-ups/admin</a> → New → Create<br />
              2. Click <strong>API Key</strong> tab → <strong>Generate a new API key</strong> → copy it<br />
              3. Click the <strong>Token</strong> link on the same page → Allow → copy the token
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#37352f", display: "block", marginBottom: 5 }}>API Key</label>
              <input style={inputStyle} type="text" placeholder="e.g. b282952c1211b7eb3c16b7c3..." value={apiKey} onChange={e => setApiKey(e.target.value)} disabled={status === "running"} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#37352f", display: "block", marginBottom: 5 }}>Token</label>
              <input style={inputStyle} type="password" placeholder="64-character token..." value={token} onChange={e => setToken(e.target.value)} disabled={status === "running"} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#37352f", display: "block", marginBottom: 5 }}>Board Name</label>
              <input style={inputStyle} type="text" value={boardName} onChange={e => setBoardName(e.target.value)} disabled={status === "running"} />
            </div>

            {error && (
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 6, padding: "10px 12px", fontSize: 12, color: "#b91c1c" }}>
                ⚠️ {error}
              </div>
            )}

            <button
              className="btn-primary"
              onClick={run}
              disabled={status === "running" || status === "done"}
              style={{
                padding: "10px 0", borderRadius: 6, border: "none",
                background: status === "done" ? "#16a34a" : status === "running" ? "#93c5fd" : "#2563eb",
                color: "#fff", fontSize: 14, fontWeight: 600, cursor: status === "running" || status === "done" ? "default" : "pointer",
              }}
            >
              {status === "idle" ? "🚀  Create Trello Board" : status === "running" ? `Creating board... ${progress}%` : status === "done" ? "✓  Board Created!" : "Retry"}
            </button>
          </div>

          {/* Progress bar */}
          {status === "running" && (
            <div style={{ marginTop: 14, height: 4, background: "#f1f1ef", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progress}%`, background: "#2563eb", borderRadius: 2, transition: "width 0.3s" }} />
            </div>
          )}

          {/* Board link */}
          {status === "done" && boardUrl && (
            <div style={{ marginTop: 14, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, color: "#15803d", fontWeight: 500 }}>✓ Your board is ready</span>
              <a href={boardUrl} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>
                Open in Trello →
              </a>
            </div>
          )}

          {/* Log */}
          {log.length > 0 && (
            <div style={{ marginTop: 16, background: "#f7f7f5", border: "1px solid #e9e9e7", borderRadius: 6, padding: "10px 12px", maxHeight: 180, overflowY: "auto" }}>
              {log.map((line, i) => (
                <div key={i} className="log-item" style={{ fontSize: 11, color: line.startsWith("✗") ? "#b91c1c" : line.startsWith("✓") ? "#15803d" : "#6b7280", lineHeight: 1.8, fontFamily: "monospace" }}>
                  {line}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Board contents preview */}
        <div style={{ marginTop: 16, background: "#fff", border: "1px solid #e9e9e7", borderRadius: 8, padding: "16px 20px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#9b9a97", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: 0.5 }}>What gets created</p>
          {BOARD_DATA.map((col, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: i < BOARD_DATA.length - 1 ? "1px solid #f1f1ef" : "none" }}>
              <span style={{ fontSize: 12, color: "#37352f" }}>{col.name.split("—")[0].trim()}</span>
              <span style={{ fontSize: 11, color: "#9b9a97" }}>{col.cards.length} cards · {col.cards.reduce((a, c) => a + c.items.length, 0)} tasks</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 10, marginTop: 4 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#37352f" }}>Total</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#37352f" }}>{BOARD_DATA.reduce((a, c) => a + c.cards.length, 0)} cards · {BOARD_DATA.reduce((a, col) => a + col.cards.reduce((b, c) => b + c.items.length, 0), 0)} checklist items</span>
          </div>
        </div>

        <p style={{ fontSize: 11, color: "#d3d1cb", textAlign: "center", marginTop: 16 }}>
          Your API key and token are only used to call Trello's API directly. They are never stored or sent anywhere else.
        </p>
      </div>
    </div>
  );
}
