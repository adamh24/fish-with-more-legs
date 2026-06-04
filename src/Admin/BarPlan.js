import { useState } from 'react';
import '../Style/BarPlan.css';

const checklist = [
  {
    "phase": "Phase 1 — Concept & Funding",
    "label": "12-18 months out",
    "sections": [
      {
        "title": "Decisions",
        "items": [
          "Fix your concept, niche, and positioning",
          "Decide on target neighbourhood (Merchant City, Finnieston, Dennistoun etc.)",
          "Set target capacity (recommended 30-50 covers)",
          "Set target cocktail price point",
          "Decide on company structure (Limited Company recommended)",
          "Choose your trading name",
          "Decide how much personal capital you are putting in"
        ]
      },
      {
        "title": "Tasks",
        "items": [
          "Write your business plan (use Business Gateway Glasgow for free support)",
          "Build a 3-year P&L forecast and month-by-month cash flow for year 1",
          "Research and document local competitors",
          "Commission a brand designer for name, logo, and identity",
          "Register your Limited Company at Companies House (£12)",
          "Open a business bank account",
          "Engage an accountant",
          "Register for VAT (even if under threshold — reclaim input VAT on fit-out)"
        ]
      },
      {
        "title": "Funding & Payments",
        "items": [
          "Calculate total startup budget (typically £150k-£400k)",
          "Confirm personal capital contribution",
          "Apply for Start Up Loan via British Business Bank (up to £25k per director)",
          "Approach Royal Bank of Scotland / Bank of Scotland for commercial loan",
          "Research Scottish Enterprise EDGE Fund and Smart grants",
          "Pitch to angel investors if applicable (Archangels, Scottish EDGE)",
          "Get shareholder agreement drafted if taking outside investment"
        ]
      }
    ]
  },
  {
    "phase": "Phase 2 — Legal & Licensing",
    "label": "10-14 months out",
    "sections": [
      {
        "title": "Decisions",
        "items": [
          "Confirm intended opening hours (core to 1am; extended to 3am requires more scrutiny)",
          "Decide who will be the Designated Premises Manager (DPM)",
          "Decide whether you will serve food (triggers additional registrations)"
        ]
      },
      {
        "title": "Tasks",
        "items": [
          "Engage a Scottish licensing solicitor (Anderson Strathern, Addleshaw Goddard)",
          "Enrol on APLH qualification (BIIAB or CIEH) for Personal Licence",
          "Draft your Operating Plan for the premises licence application",
          "Prepare site plan and layout plan for licensing submission",
          "Write a Challenge 25 policy",
          "Submit Premises Licence application to Glasgow City Licensing Board",
          "Apply for Personal Licence at Glasgow City Council",
          "Register the business with HMRC for PAYE (before first employee)",
          "Register with ICO for GDPR (£40/year)",
          "If serving food: register with Glasgow City Council Environmental Health (28 days before opening)"
        ]
      },
      {
        "title": "Payments",
        "items": [
          "Premises Licence application fee (approx £1,800-£3,500)",
          "Personal Licence qualification fee (approx £200)",
          "Personal Licence application fee (£50)",
          "Licensing solicitor retainer",
          "Public liability insurance (minimum £5m cover)",
          "Employers liability insurance (£10m — legally required once you hire)"
        ]
      }
    ]
  },
  {
    "phase": "Phase 3 — Finding & Leasing a Site",
    "label": "8-12 months out",
    "sections": [
      {
        "title": "Decisions",
        "items": [
          "Fix your target area and street",
          "Set maximum rent budget",
          "Set minimum and maximum floor size (800-1,800 sq ft recommended)",
          "Decide lease length to target (5-year with year-3 break recommended)"
        ]
      },
      {
        "title": "Tasks",
        "items": [
          "Engage commercial property agents (DM Hall, Savills Glasgow, JLL)",
          "Check rateable value of all shortlisted properties (Scottish Assessors Association)",
          "Verify existing use class on shortlisted properties (Glasgow City Council Planning Portal)",
          "Commission a dilapidations survey before signing any lease",
          "Engage a Scottish commercial property solicitor",
          "Check whether property is listed (Listed Building Consent requirements)",
          "Submit planning application if required (allow 8+ weeks)",
          "Apply for building warrant if structural alterations planned (allow 6-10 weeks)",
          "Notify Scottish Fire and Rescue Service ahead of inspection",
          "Negotiate and sign lease: Rent-free period (3-6 months standard for fit-out)",
          "Negotiate and sign lease: Tenant break clause at year 3",
          "Negotiate and sign lease: Licence conditional break clause (exit right if premises licence refused)",
          "Negotiate and sign lease: Assignment and subletting rights",
          "Negotiate and sign lease: Rent review cap"
        ]
      },
      {
        "title": "Payments",
        "items": [
          "Lease deposit (typically 3-6 months rent)",
          "First month's rent",
          "Commercial property solicitor fees",
          "Dilapidations survey fee",
          "Planning application fee (if required)",
          "Building warrant fee (if required)"
        ]
      }
    ]
  },
  {
    "phase": "Phase 4 — Design & Fit-Out",
    "label": "4-8 months out",
    "sections": [
      {
        "title": "Decisions",
        "items": [
          "Appoint interior designer (hospitality experience essential)",
          "Fix bar shape and position in the space",
          "Choose seating mix (bar stools, booths, tables)",
          "Choose materials palette (marble, brass, leather, stone etc.)",
          "Choose lighting scheme (dimmable, warm, directional)",
          "Decide on acoustic treatment approach",
          "Choose POS system (Lightspeed, TouchBistro, or Tevalis)",
          "Choose reservation system (ResDiary or Resy)",
          "Choose music system (Sonos or commercial AV)"
        ]
      },
      {
        "title": "Orders & Procurement",
        "items": [
          "Appoint contractor for fit-out (get minimum 3 quotes)",
          "Order commercial ice machine — Hoshizaki or equivalent (£2k-£5k, long lead time)",
          "Order under-bar refrigeration units",
          "Order back-bar display unit",
          "Order glassware — 3x expected covers (Riedel, Nude, or Zalto tier)",
          "Order bar tools (jiggers, strainers, mixing glasses, muddlers)",
          "Install CCTV (28-day recording loop — may be required by Licensing Board)",
          "Install fire suppression, exits, and alarms to Scottish Fire standards",
          "Install POS system and terminals",
          "Install music/AV system"
        ]
      },
      {
        "title": "Supplier Accounts to Open",
        "items": [
          "Matthew Clark or LWC Drinks (main spirits wholesale account)",
          "Independent distillery direct accounts (Nc'nean, Rock Rose, Ardbeg allocated lines etc.)",
          "Commercial block ice supplier",
          "Fresh produce supplier for garnishes and juice",
          "Glassware supplier"
        ]
      },
      {
        "title": "Payments",
        "items": [
          "Interior designer fee",
          "Fit-out contractor payment schedule",
          "Equipment orders (ice machine, refrigeration, bar tools, glassware)",
          "CCTV installation",
          "AV / music system installation",
          "POS system setup and licensing fee",
          "Initial stock order (budget £8k-£15k)"
        ]
      },
      {
        "title": "Licences to Finalise",
        "items": [
          "PPL PRS music licence (£600-£1,200/year depending on capacity)",
          "Confirm Premises Licence is granted before booking any public-facing launch date",
          "Confirm DPM is named and Personal Licence held"
        ]
      }
    ]
  },
  {
    "phase": "Phase 5 — Team & Launch",
    "label": "1-3 months out",
    "sections": [
      {
        "title": "Decisions",
        "items": [
          "Fix opening hours for launch",
          "Decide soft launch format (invite-only preview vs ticketed event)",
          "Decide on reservations policy (walk-in only, reservations only, or mixed)",
          "Set cocktail menu size (12-16 drinks recommended for launch)",
          "Set pour cost target (18-22% for cocktails)",
          "Fix pricing for full menu"
        ]
      },
      {
        "title": "Hiring",
        "items": [
          "Hire head bartender / bar manager (confirm they hold or will get Personal Licence)",
          "Hire bar team (2-3 bartenders + 1-2 bar backs for 40 covers)",
          "Hire front-of-house staff",
          "Hire kitchen staff if serving food",
          "Have employment contracts drafted by a Scottish employment solicitor",
          "Set up payroll software (BrightPay or Xero Payroll)",
          "Register all employees with HMRC"
        ]
      },
      {
        "title": "Training & Menus",
        "items": [
          "Develop and cost full cocktail menu (all 12-16 drinks)",
          "Develop zero-proof menu (2-3 options minimum)",
          "Develop food / snack menu if applicable (allergen labelling required under Natasha's Law)",
          "Run minimum 2 weeks full staff training before opening",
          "Conduct internal dress rehearsal service (friends and family)",
          "Run soft launch and gather feedback",
          "Adjust menu, service, and layout based on soft launch findings"
        ]
      },
      {
        "title": "Marketing & PR",
        "items": [
          "Launch Instagram account and begin building audience pre-opening",
          "Build and publish website with reservation link",
          "Set up Google Business Profile and verify it",
          "Write and send press release to: The Herald, Evening Times, Glasgow Times, Condé Nast Traveller Scotland",
          "Brief local food and drink writers personally",
          "Join Scottish Hospitality Group and Glasgow Chamber of Commerce",
          "Set up founding membership or pre-opening mailing list"
        ]
      },
      {
        "title": "Final Payments & Admin",
        "items": [
          "Final contractor sign-off and payment",
          "All supplier accounts confirmed with payment terms agreed",
          "Business insurance fully in place",
          "ICO registration paid and live",
          "PPL PRS licence paid and live",
          "Accountant engaged for quarterly VAT returns",
          "Opening float cash prepared",
          "Staff wages set up on payroll for first pay run"
        ]
      }
    ]
  }
];

const phases = [
  {
    label: "Phase 1 — 12-18 months out",
    title: "Concept & Funding",
    summary: "Define your bar's identity and secure the money to build it. Every decision downstream flows from this.",
    color: "#0C447C",
    bg: "#E6F1FB",
    steps: [
      {
        title: "Define your concept",
        sub: "Who are you, and why Glasgow needs you",
        body: `<ul>
          <li><strong>Positioning:</strong> High-end in Glasgow means competing with Cail Bruich-level hospitality. Decide your niche — Japanese-influenced, Scottish terroir spirits, classic cocktails, seasonal menus.</li>
          <li><strong>Capacity:</strong> 30-50 covers is typical for an intimate high-end bar. Under 30 is a private bar; over 60 starts to dilute the experience.</li>
          <li><strong>Price point:</strong> High-end Glasgow cocktails currently sit at £12-£18. Know your average spend per head.</li>
          <li><strong>Name, identity, brand:</strong> Commission a designer early. Everything downstream — signage, menus, website, social — needs this locked in.</li>
        </ul>
        <div class=\\"callout tip\\">Glasgow's West End and Finnieston are saturated. Consider the Merchant City, Dennistoun, or the South Side for a high-end offer with less competition.</div>`
      },
      {
        title: "Write your business plan",
        sub: "Essential for funding — and your own clarity",
        body: `<ul>
          <li><strong>Executive summary:</strong> Concept, location target, USP, projected revenue.</li>
          <li><strong>Market analysis:</strong> Competitor audit, target demographic, Glasgow nighttime economy data.</li>
          <li><strong>Financial projections:</strong> 3-year P&amp;L forecast, monthly cash flow for year 1, break-even analysis.</li>
          <li><strong>Operations plan:</strong> Opening hours, staffing structure, supplier relationships, reservation system.</li>
          <li><strong>Exit strategy:</strong> Investors will want to know — sale, franchise, or lifestyle business?</li>
        </ul>
        <div class=\\"callout tip\\">Business Gateway Glasgow offers free one-to-one support writing business plans and financial models. Use them before approaching lenders.</div>`
      },
      {
        title: "Secure funding",
        sub: "Typical startup cost: £150,000-£400,000",
        body: `<ul>
          <li><strong>Personal capital:</strong> Lenders want to see you have skin in the game — typically 20-30% of total costs.</li>
          <li><strong>Bank loans:</strong> Royal Bank of Scotland, Bank of Scotland. Expect 5-8% interest for hospitality, 3-7 year terms.</li>
          <li><strong>Start Up Loans:</strong> UK government-backed, up to £25,000 per director at 6% fixed. Apply via British Business Bank.</li>
          <li><strong>Scottish Enterprise:</strong> The EDGE fund and Smart grants are worth exploring if you have a unique angle.</li>
          <li><strong>Angel investors:</strong> Scottish EDGE, Archangels. Pitch competitions can get you capital and PR simultaneously.</li>
          <li><strong>Friends &amp; family:</strong> Document everything legally. A shareholder agreement is non-negotiable.</li>
        </ul>
        <div class=\\"callout cost\\">Rough startup cost breakdown: fit-out £80k-£200k, equipment £30k-£60k, licences &amp; legal £5k-£10k, initial stock £8k-£15k, deposit + first months rent £15k-£40k, working capital buffer £20k-£40k.</div>`
      }
    ]
  },
  {
    label: "Phase 2 — 10-14 months out",
    title: "Legal & Licensing",
    summary: "Scotland's licensing law is distinct from England's. Get this wrong and nothing else matters.",
    color: "#533C89",
    bg: "#EEEDFE",
    steps: [
      {
        title: "Premises Licence (Licensing Scotland Act 2005)",
        sub: "Your most important document",
        body: `<ul>
          <li><strong>Apply to:</strong> Glasgow City Licensing Board. Budget around £1,800-£3,500.</li>
          <li><strong>What they need:</strong> Operating Plan, site plan, layout plan, and a written Challenge 25 policy.</li>
          <li><strong>Timescale:</strong> Minimum 3 months, often 4-6. Negotiate a conditional break clause before signing a lease.</li>
          <li><strong>Hours:</strong> Glasgow city centre core hours run to 1am; extended hours (3am) attract more scrutiny.</li>
        </ul>
        <div class=\\"callout warn\\">Hire a specialist licensing solicitor in Scotland — English licensing law does not apply here. Anderson Strathern and Addleshaw Goddard both have Glasgow licensing teams.</div>`
      },
      {
        title: "Personal Licence",
        sub: "You (and your manager) need one",
        body: `<ul>
          <li>Every premises must have a Designated Premises Manager (DPM) who holds a Personal Licence.</li>
          <li><strong>How to get one:</strong> Complete an accredited APLH qualification (BIIAB or CIEH), then apply to your local licensing board.</li>
          <li><strong>Cost:</strong> Around £200 for the qualification, £50 application fee.</li>
          <li><strong>Renewal:</strong> Every 10 years, with a mandatory refresher course.</li>
        </ul>`
      },
      {
        title: "Other legal requirements",
        sub: "Registrations, insurance & company structure",
        body: `<ul>
          <li><strong>Company structure:</strong> Register a Limited Company at Companies House (£12 online).</li>
          <li><strong>Food registration:</strong> Register with Glasgow City Council Environmental Health at least 28 days before opening. Free.</li>
          <li><strong>Music licence:</strong> PPL PRS licence — around £600-£1,200/year depending on capacity.</li>
          <li><strong>Public liability insurance:</strong> Minimum £5m cover. Employers' liability (£10m) is legally required.</li>
          <li><strong>GDPR:</strong> Register with the ICO (£40/year) and have a privacy policy if you take reservations.</li>
          <li><strong>Allergen compliance:</strong> Natasha's Law 2021 — full allergen labelling required if you serve food.</li>
        </ul>
        <div class=\\"callout tip\\">Register as VAT early — you can claim input VAT back on fit-out costs.</div>`
      }
    ]
  },
  {
    label: "Phase 3 — 8-12 months out",
    title: "Finding & Leasing a Site",
    summary: "The lease is your longest financial commitment. Treat it like a second business plan.",
    color: "#0F6E56",
    bg: "#E1F5EE",
    steps: [
      {
        title: "Site search",
        sub: "Location is everything — but so is the building",
        body: `<ul>
          <li><strong>Area:</strong> Merchant City, West End, Finnieston, King Street, St Vincent Street all have track records for premium hospitality.</li>
          <li><strong>Size:</strong> 800-1,800 sq ft is ideal for 30-60 covers.</li>
          <li><strong>Existing use class:</strong> Look for A3/A4/Sui Generis properties — changing use class adds months.</li>
          <li><strong>Agents:</strong> DM Hall, Savills Glasgow, and JLL all handle commercial F&amp;B property.</li>
        </ul>`
      },
      {
        title: "Negotiating the lease",
        sub: "Never sign the landlord's first draft",
        body: `<ul>
          <li><strong>Lease length:</strong> Aim for a 5-year lease with a tenant break at year 3.</li>
          <li><strong>Rent-free period:</strong> Negotiate 3-6 months rent-free for fit-out. Landlords expect this.</li>
          <li><strong>Licence conditional break:</strong> Insist on a clause allowing you to exit if the premises licence is refused.</li>
          <li><strong>Assignment:</strong> Ensure you have the right to assign the lease if you sell the business.</li>
        </ul>
        <div class=\\"callout warn\\">Use a commercial property solicitor. Scottish commercial leases have specific quirks around irritancy and diligence.</div>`
      },
      {
        title: "Planning & building consents",
        sub: "Especially if you're altering the building",
        body: `<ul>
          <li><strong>Planning permission:</strong> If the space hasn't been used as a bar before, you'll need planning consent. Allow 8+ weeks.</li>
          <li><strong>Listed buildings:</strong> Glasgow's Merchant City has many listed buildings — internal alterations may require Listed Building Consent.</li>
          <li><strong>Building warrant:</strong> Required for most structural alterations. Budget 6-10 weeks.</li>
          <li><strong>Fire safety:</strong> Scottish Fire and Rescue Service will inspect before opening.</li>
        </ul>`
      }
    ]
  },
  {
    label: "Phase 4 — 4-8 months out",
    title: "Design & Fit-Out",
    summary: "Your interior is your brand made physical. High-end doesn't mean expensive — it means intentional.",
    color: "#854F0B",
    bg: "#FAEEDA",
    steps: [
      {
        title: "Design & architect",
        sub: "The look, feel, and flow of your bar",
        body: `<ul>
          <li><strong>Hire an interior designer:</strong> Not optional at the high end — they understand ergonomics, service flow, acoustics, and licensing layout requirements.</li>
          <li><strong>Key decisions:</strong> Bar shape and position, seating mix (stools, booths, tables), materials (marble, brass, leather, stone), lighting — the single biggest lever for atmosphere.</li>
          <li><strong>Acoustics:</strong> Hard surfaces cause noise chaos. Acoustic panels, upholstered seating, and low ceilings all help.</li>
          <li><strong>Storage:</strong> Plan storage generously from the start.</li>
        </ul>
        <div class=\\"callout tip\\">Glasgow has a wealth of local craftspeople for bespoke joinery — custom work creates a space that can't be replicated.</div>`
      },
      {
        title: "Equipment & bar kit",
        sub: "What every serious cocktail bar needs",
        body: `<ul>
          <li><strong>Ice:</strong> A Hoshizaki or similar commercial ice machine — budget £2k-£5k.</li>
          <li><strong>Glassware:</strong> Riedel, Nude, or Zalto-tier glass — £15-£40 per stem. Buy 3x your expected covers for breakage.</li>
          <li><strong>POS system:</strong> Lightspeed, TouchBistro, or Tevalis.</li>
          <li><strong>CCTV:</strong> Glasgow Licensing Board may require it. A 28-day recording loop is standard.</li>
        </ul>`
      },
      {
        title: "Suppliers & stock",
        sub: "Build relationships before you open",
        body: `<ul>
          <li><strong>Spirits:</strong> Open accounts with Matthew Clark, LWC Drinks, or Hi-Spirits.</li>
          <li><strong>Scottish focus:</strong> Ardbeg, GlenDronach, Nc'nean, Rock Rose Gin, Dunnet Bay — provenance resonates in Glasgow.</li>
          <li><strong>Fresh produce:</strong> A good Glasgow greengrocer or deli for seasonal garnishes and juice.</li>
        </ul>`
      }
    ]
  },
  {
    label: "Phase 5 — 1-3 months out",
    title: "Team & Launch",
    summary: "The bar is only as good as the people in it. Hire well, train obsessively, launch carefully.",
    color: "#993556",
    bg: "#FBEAF0",
    steps: [
      {
        title: "Hiring your team",
        sub: "The bar manager is the most critical hire",
        body: `<ul>
          <li><strong>Head bartender / bar manager:</strong> Track record in high-end bars, holds (or will get) a Personal Licence.</li>
          <li><strong>Bar team:</strong> 2-3 experienced bartenders for a 40-cover bar, plus 1-2 bar backs.</li>
          <li><strong>Employment contracts:</strong> Use a Scottish employment law solicitor.</li>
          <li><strong>Living Wage:</strong> The Real Living Wage (currently £12/hour) is a baseline for quality staff.</li>
        </ul>
        <div class=\\"callout tip\\">Register with HMRC as an employer before your first payroll. Use BrightPay or Xero Payroll from day one.</div>`
      },
      {
        title: "Menus, training & soft launch",
        sub: "Test everything before the public sees it",
        body: `<ul>
          <li><strong>Menu development:</strong> 12-16 cocktails at launch. Include 2-3 zero-proof options.</li>
          <li><strong>Costing:</strong> Target a pour cost of 18-22% for cocktails.</li>
          <li><strong>Training:</strong> At least 2 weeks of full staff training before opening.</li>
          <li><strong>Soft launch:</strong> Invite friends, industry contacts, and local press. Gather feedback before the public launch.</li>
          <li><strong>Reservations:</strong> ResDiary (Glasgow's most used) or Resy.</li>
        </ul>`
      },
      {
        title: "Marketing & PR",
        sub: "You need noise before you open",
        body: `<ul>
          <li><strong>Brand launch:</strong> Instagram and a clean website are table stakes.</li>
          <li><strong>PR:</strong> Pitch to The Herald, Evening Times, Glasgow Times, Condé Nast Traveller Scotland.</li>
          <li><strong>Google Business Profile:</strong> Set up and verify before opening.</li>
          <li><strong>Industry networking:</strong> Join the Scottish Hospitality Group and Glasgow Chamber of Commerce.</li>
        </ul>
        <div class=\\"callout tip\\">Glasgow's food and drink community is tight — word of mouth from one respected palate is worth 10 paid ads.</div>`
      }
    ]
  }
];

function StepCard({ step, index, phaseColor, phaseBg }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`bp-step-card${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="bp-step-header">
        <div className="bp-step-num" style={{ background: phaseBg, color: phaseColor }}>
          {index + 1}
        </div>
        <div className="bp-step-meta">
          <div className="bp-step-title">{step.title}</div>
          <div className="bp-step-subtitle">{step.sub}</div>
        </div>
        <div className={`bp-step-toggle${open ? ' open' : ''}`}>⌄</div>
      </div>
      {open && (
        <div
          className="bp-step-body"
          dangerouslySetInnerHTML={{ __html: step.body }}
          onClick={e => e.stopPropagation()}
        />
      )}
    </div>
  );
}

function ChecklistItem({ id, label, isChecked, note, noteOpen, onToggle, onNoteToggle, onNoteChange }) {
  return (
    <div className={`cl-item${isChecked ? ' cl-item--done' : ''}`}>
      <div className="cl-item-row">
        <button
          className={`cl-checkbox${isChecked ? ' cl-checkbox--checked' : ''}`}
          onClick={() => onToggle(id)}
          aria-label="Toggle item"
        >
          {isChecked && <span className="cl-check-mark">&#10003;</span>}
        </button>
        <span className="cl-label">{label}</span>
        <button
          className={`cl-note-btn${note ? ' cl-note-btn--active' : ''}`}
          onClick={() => onNoteToggle(id)}
          title={note ? 'View/edit note' : 'Add note'}
        >
          {note ? '✎' : '+'}
        </button>
      </div>
      {noteOpen && (
        <textarea
          className="cl-note-textarea"
          value={note || ''}
          onChange={e => onNoteChange(id, e.target.value)}
          placeholder="Add a note..."
          onClick={e => e.stopPropagation()}
        />
      )}
    </div>
  );
}

function ChecklistSection({ section, sectionIndex, phaseIndex, checked, notes, noteOpen, onToggle, onNoteToggle, onNoteChange }) {
  const [open, setOpen] = useState(true);
  const total = section.items.length;
  const done = section.items.filter((_, i) => checked[`${phaseIndex}-${sectionIndex}-${i}`]).length;

  return (
    <div className="cl-section">
      <div className="cl-section-header" onClick={() => setOpen(o => !o)}>
        <span className="cl-section-title">{section.title}</span>
        <span className="cl-section-count">{done}/{total}</span>
        <span className={`cl-section-toggle${open ? ' open' : ''}`}>⌄</span>
      </div>
      {open && (
        <div className="cl-section-body">
          {section.items.map((item, i) => {
            const id = `${phaseIndex}-${sectionIndex}-${i}`;
            return (
              <ChecklistItem
                key={id}
                id={id}
                label={item}
                isChecked={!!checked[id]}
                note={notes[id]}
                noteOpen={!!noteOpen[id]}
                onToggle={onToggle}
                onNoteToggle={onNoteToggle}
                onNoteChange={onNoteChange}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function ChecklistView() {
  const [activePhase, setActivePhase] = useState(0);
  const [checked, setChecked] = useState(() => {
    try { return JSON.parse(localStorage.getItem('bp-checked') || '{}'); } catch { return {}; }
  });
  const [notes, setNotes] = useState(() => {
    try { return JSON.parse(localStorage.getItem('bp-notes') || '{}'); } catch { return {}; }
  });
  const [noteOpen, setNoteOpen] = useState({});

  const toggleChecked = (id) => {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    localStorage.setItem('bp-checked', JSON.stringify(next));
  };

  const toggleNoteOpen = (id) => {
    setNoteOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const updateNote = (id, value) => {
    const next = { ...notes, [id]: value };
    setNotes(next);
    localStorage.setItem('bp-notes', JSON.stringify(next));
  };

  const totalAll = checklist.reduce((a, p) => a + p.sections.reduce((b, s) => b + s.items.length, 0), 0);
  const checkedAll = Object.values(checked).filter(Boolean).length;
  const phase = checklist[activePhase];
  const phaseTotal = phase.sections.reduce((a, s) => a + s.items.length, 0);
  const phaseDone = phase.sections.reduce((a, s, si) =>
    a + s.items.filter((_, i) => checked[`${activePhase}-${si}-${i}`]).length, 0);

  return (
    <div className="cl-view">
      <div className="cl-overall">
        <span className="cl-overall-label">Total progress: {checkedAll} / {totalAll}</span>
        <div className="bp-progress-bar">
          <div className="bp-progress-fill" style={{ width: `${totalAll ? (checkedAll / totalAll) * 100 : 0}%` }} />
        </div>
      </div>

      <div className="bp-tabs">
        {checklist.map((p, i) => (
          <button
            key={i}
            className={`bp-tab-btn${i === activePhase ? ' active' : ''}`}
            onClick={() => setActivePhase(i)}
          >
            {i + 1}. {p.phase.replace(/Phase \d+ \u2014 /, '')}
          </button>
        ))}
      </div>

      <div className="cl-phase-header">
        <div className="bp-phase-label">{phase.label}</div>
        <div className="bp-phase-title">{phase.phase}</div>
        <div className="cl-phase-progress">{phaseDone} of {phaseTotal} complete</div>
      </div>

      <div className="cl-sections">
        {phase.sections.map((section, si) => (
          <ChecklistSection
            key={si}
            section={section}
            sectionIndex={si}
            phaseIndex={activePhase}
            checked={checked}
            notes={notes}
            noteOpen={noteOpen}
            onToggle={toggleChecked}
            onNoteToggle={toggleNoteOpen}
            onNoteChange={updateNote}
          />
        ))}
      </div>

      <div className="bp-nav-row">
        <button className="bp-nav-btn" onClick={() => setActivePhase(p => p - 1)} disabled={activePhase === 0}>← Previous phase</button>
        <button className="bp-nav-btn" onClick={() => setActivePhase(p => p + 1)} disabled={activePhase === checklist.length - 1}>Next phase →</button>
      </div>
    </div>
  );
}

function BarPlan() {
  const [view, setView] = useState('plan');
  const [activePhase, setActivePhase] = useState(0);
  const phase = phases[activePhase];

  return (
    <div className="bar-plan">
      <div className="bp-header">
        <h1>Opening a High-End Cocktail Bar in Glasgow</h1>
        <p>A step-by-step plan covering funding, licensing, site, fit-out, and launch.</p>
      </div>

      <div className="bp-view-toggle">
        <button className={`bp-view-btn${view === 'plan' ? ' active' : ''}`} onClick={() => setView('plan')}>Plan</button>
        <button className={`bp-view-btn${view === 'checklist' ? ' active' : ''}`} onClick={() => setView('checklist')}>Checklist</button>
      </div>

      {view === 'checklist' ? (
        <ChecklistView />
      ) : (
        <>
          <div className="bp-tabs">
            {phases.map((p, i) => (
              <button
                key={i}
                className={`bp-tab-btn${i === activePhase ? ' active' : ''}`}
                onClick={() => setActivePhase(i)}
              >
                {i + 1}. {p.title}
              </button>
            ))}
          </div>

          <div className="bp-progress-bar">
            <div
              className="bp-progress-fill"
              style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
            />
          </div>

          <div className="bp-phase-panel">
            <div className="bp-phase-header">
              <div className="bp-phase-label">{phase.label}</div>
              <div className="bp-phase-title">{phase.title}</div>
              <p className="bp-phase-summary">{phase.summary}</p>
            </div>

            <div className="bp-steps-grid">
              {phase.steps.map((step, i) => (
                <StepCard
                  key={i}
                  step={step}
                  index={i}
                  phaseColor={phase.color}
                  phaseBg={phase.bg}
                />
              ))}
            </div>

            <div className="bp-nav-row">
              <button
                className="bp-nav-btn"
                onClick={() => setActivePhase(p => p - 1)}
                disabled={activePhase === 0}
              >
                ← Previous phase
              </button>
              <button
                className="bp-nav-btn"
                onClick={() => setActivePhase(p => p + 1)}
                disabled={activePhase === phases.length - 1}
              >
                Next phase →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BarPlan;
