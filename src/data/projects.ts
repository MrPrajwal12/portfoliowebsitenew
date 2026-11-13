export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  stack: string[];
  cover: string;
  featured: boolean;
  problem: string;
  approach: string;
  outcome: string;
  tradeoff: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "algo-trading-platform",
    title: "Algo Trading Platform",
    subtitle:
      "Strategy engines, live dashboards, and broker execution on AWS",
    year: "2025",
    role: "Software Engineer",
    stack: [
      "Python",
      "Next.js",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Broker APIs",
    ],
    cover: "/projects/algo-cover.png",
    featured: true,
    problem:
      "We had strategies and scripts in different places. Ops needed one place for signals, dashboards, and live orders.",
    approach:
      "I built Python services for strategies and orders, a Next.js UI for live ops, WebSocket feeds, Postgres/Redis storage, and AWS hosting with broker API adapters. Indicator logic covers SR, OI, and NTZ-style gates.",
    outcome:
      "A working platform for multi-strategy runs, custom indicators, realtime views, and live broker paths.",
    tradeoff:
      "I focused on correct fills and logging first. Multi-region scale can wait until the core path is boringly reliable.",
  },
  {
    slug: "tradetrackr",
    title: "TradeTrackr",
    subtitle: "P&L, expenses, and an AI helper on Supabase",
    year: "2025",
    role: "Software Engineer",
    stack: ["Vite", "React", "Supabase", "Tailwind", "Edge Functions"],
    cover: "/projects/tradetrackr-cover.png",
    featured: true,
    problem:
      "I wanted one app for daily P&L and expenses without leaking data between users.",
    approach:
      "Vite + React on Supabase Auth (Google + OTP), RLS on tables, simple analytics, and an Edge Function for the AI assistant.",
    outcome:
      "A usable tracker for trading performance and personal spend with auth and row-level security in place.",
    tradeoff:
      "Supabase saved a lot of auth work. I would only build a custom auth stack if product needs outgrow it.",
    repoUrl: "https://github.com/MrPrajwal12/TradeTrackr",
  },
  {
    slug: "aurevex",
    title: "Aurevex",
    subtitle: "Invite-only TradingView indicators with Razorpay checkout",
    year: "2025",
    role: "Software Engineer",
    stack: ["Next.js", "Supabase", "Razorpay", "Auth", "Affiliates"],
    cover: "/projects/aurevex-cover.png",
    featured: true,
    problem:
      "Indicator creators needed gated access, India payments, and referrals—not a static landing page with a payment link taped on.",
    approach:
      "Next.js app with invite-only members, Razorpay checkout, a member dashboard, and affiliate tracking on Postgres/auth.",
    outcome:
      "A marketplace-style product: access control, checkout, and referral flows in one place.",
    tradeoff:
      "Invite-only first. Open catalog comes after payments and membership are stable.",
  },
  {
    slug: "market-heatmap",
    title: "Market Heatmap",
    subtitle: "Live sector heatmap with cached market data",
    year: "2025",
    role: "Software Engineer",
    stack: ["Next.js", "Charts", "Redis", "Node", "SWR"],
    cover: "/projects/heatmap-cover.png",
    featured: false,
    problem:
      "Sector moves were hard to see at a glance. We needed a live heatmap, not a static table.",
    approach:
      "I built the heatmap UI in Next.js with chart tiles and polling, plus a backend path that aggregates quotes, caches in Redis, and refreshes on a schedule.",
    outcome:
      "A sector view traders can open and read in seconds during market hours.",
    tradeoff:
      "Cached snapshots beat raw hammering of every quote API. Freshness vs rate limits was the main dial.",
  },
  {
    slug: "breakout-scanner",
    title: "Intraday Breakout Scanner",
    subtitle: "Multi-timeframe breakout scans over WebSockets",
    year: "2025",
    role: "Software Engineer",
    stack: ["Next.js", "WebSockets", "Redis", "Node", "Charts"],
    cover: "/projects/breakout-cover.png",
    featured: false,
    problem:
      "Breakouts across 5m/15m/daily had to be watched by hand. That does not scale.",
    approach:
      "I built the scanner UI with timeframe tabs and live updates, and the backend scan/WebSocket path that batches analysis and pushes results to the client.",
    outcome:
      "An intraday breakout list with live status and chart hooks for follow-up.",
    tradeoff:
      "Batching scans keeps brokers happy. Ultra-low latency per tick was not the goal for v1.",
  },
  {
    slug: "options-oi-signals",
    title: "Options & OI Signals",
    subtitle: "Option chain, OI charts, and live signal views",
    year: "2025",
    role: "Software Engineer",
    stack: ["Next.js", "WebSockets", "Charts", "Redis", "Broker APIs"],
    cover: "/projects/oi-signals-cover.png",
    featured: false,
    problem:
      "OI and option-chain views lived in spreadsheets and broker screens. We needed one product surface.",
    approach:
      "I built the signals/option-chain UI—expiry picks, OI distribution charts, live feed hooks—and the API proxies that talk to market data and cache results.",
    outcome:
      "A dedicated options/OI workspace used next to breakout and heatmap tools.",
    tradeoff:
      "Depth on index options first. Broader multi-asset polish comes after the daily path is solid.",
  },
  {
    slug: "broker-token-renewal",
    title: "Broker Token Renewal",
    subtitle: "Headless auto-renew for broker API tokens",
    year: "2025",
    role: "Software Engineer",
    stack: ["Python", "Redis", "Cron", "GitHub Actions", "Alerts"],
    cover: "/projects/token-renewal-cover.png",
    featured: false,
    problem:
      "Broker tokens expire and break live feeds. Manual renewals were a recurring outage risk.",
    approach:
      "I built a headless renewer: check token health, renew when needed, write to Redis, run on schedule/CI, and alert on Telegram when something fails.",
    outcome:
      "Market services stay authenticated without someone babysitting login every morning.",
    tradeoff:
      "Automation needs careful secrets handling. I kept renew logic boring and observable on purpose.",
  },
  {
    slug: "algo-screener-listing",
    title: "Algo Screener & Stocks Listing",
    subtitle: "Python screeners, backtests, and a listing dashboard",
    year: "2025",
    role: "Software Engineer",
    stack: ["Python", "Pandas", "Backtest", "Streamlit", "Broker APIs"],
    cover: "/projects/stocks-listing-cover.png",
    featured: false,
    problem:
      "Strategy ideas needed a listing and backtest loop before they hit production scanners.",
    approach:
      "I built Python screeners and backtest flows, then a listing dashboard so candidates are easy to review and compare.",
    outcome:
      "A research path from screener → backtest → listed setups that can feed production tools.",
    tradeoff:
      "This stays the research lane. Production breakout/heatmap UIs stay separate for speed.",
  },
  {
    slug: "auth-india-billing",
    title: "Auth & India Billing",
    subtitle: "Member login gates and Razorpay subscriptions",
    year: "2025",
    role: "Software Engineer",
    stack: ["Next.js", "OAuth", "Razorpay", "Webhooks", "Postgres"],
    cover: "/projects/auth-billing-cover.png",
    featured: false,
    problem:
      "Paid market tools needed sign-in and India checkout, not open routes for everyone.",
    approach:
      "I wired Google/OAuth member gates on product pages and Razorpay plan checkout with webhook handling for subscription state.",
    outcome:
      "Guests hit a gate; members unlock tools; Pro plans clear through Razorpay.",
    tradeoff:
      "OAuth-first signup is simpler than email/password. Razorpay fit India better than a global-only gateway.",
  },
  {
    slug: "used-car-alert-bot",
    title: "Used Car Alert Bot",
    subtitle: "Listing alerts on Telegram and email",
    year: "2025",
    role: "Software Engineer",
    stack: ["Python", "Telegram", "Next.js", "Supabase"],
    cover: "/projects/car-alert-cover.png",
    featured: false,
    problem:
      "Good listings disappear fast. Refreshing sites by hand was not workable.",
    approach:
      "Python scraper with Telegram/email alerts, plus a small web side for preferences.",
    outcome:
      "I get notified when a matching listing shows up without living in the tabs.",
    tradeoff:
      "Polling is slower than a perfect push feed, but it respects rate limits and stays stable.",
    repoUrl: "https://github.com/MrPrajwal12/spinny-car-alerts",
  },
  {
    slug: "helmet-plate-detection",
    title: "Helmet & Number Plate Detection",
    subtitle: "YOLO detection with automated alerts",
    year: "2024",
    role: "Software Engineer",
    stack: ["Python", "YOLO", "Computer Vision", "Email alerts"],
    cover: "/projects/helmet-yolo.png",
    featured: false,
    problem:
      "Checking helmets and plates by eye does not scale for camera feeds.",
    approach:
      "YOLO-based detection for helmets and number plates, then email when something looks wrong.",
    outcome:
      "A full detect-and-notify flow I can demo and talk through end to end.",
    tradeoff:
      "Outdoor video is messy. I tuned for clear alert cases over chasing every edge frame.",
    repoUrl:
      "https://github.com/MrPrajwal12/Helmet-and-Number-Plate-Detection-and-Automated-Alert-using-Email",
  },
  {
    slug: "restaurant-management",
    title: "Restaurant Management System",
    subtitle: "Menus, orders, and staff views for a small restaurant",
    year: "2024",
    role: "Software Engineer",
    stack: ["JavaScript", "Web"],
    cover: "/projects/restaurant-mgmt.png",
    featured: false,
    problem:
      "Small restaurants need simple screens for menus, orders, and staff—not a full POS suite.",
    approach:
      "Web flows for day-to-day restaurant operations: menu, orders, and staff views.",
    outcome:
      "A management-style app covering the basics of hospitality workflows.",
    tradeoff:
      "I covered more modules lightly instead of deep POS hardware integration.",
    repoUrl:
      "https://github.com/MrPrajwal12/Restaurant_Management_System",
  },
  {
    slug: "fitnesstrack",
    title: "FitnessTrack",
    subtitle: "Simple workout tracking in the browser",
    year: "2024",
    role: "Software Engineer",
    stack: ["React", "JavaScript", "CSS"],
    cover: "/projects/fitness-cover.png",
    featured: false,
    problem:
      "I wanted a light way to log workouts without installing a heavy app.",
    approach:
      "React UI for logging sessions and seeing basic progress.",
    outcome:
      "A clean fitness front end I use as a UI practice project.",
    tradeoff:
      "No wearable sync yet—keeping the web app small was the point.",
    repoUrl: "https://github.com/MrPrajwal12/FItnessTrack",
  },
  {
    slug: "learned-educational-website",
    title: "Learned Educational Website",
    subtitle: "Learning-focused educational web project",
    year: "2024",
    role: "Software Engineer",
    stack: ["HTML", "CSS", "JavaScript"],
    cover: "/projects/learned-website.png",
    featured: false,
    problem:
      "Needed a clear educational site layout for learning content, not a generic brochure page.",
    approach:
      "Built an educational website structure with pages and styling aimed at learners.",
    outcome:
      "A complete educational site project in my public work.",
    tradeoff:
      "Content structure first; richer interactivity can come in a later pass.",
    repoUrl: "https://github.com/MrPrajwal12/Learned",
  },
  {
    slug: "smart-floor-cleaning-robot",
    title: "Smart Floor Cleaning Robot",
    subtitle: "Embedded/robotics project for automated floor cleaning",
    year: "2023",
    role: "Software Engineer",
    stack: ["Embedded", "Hardware", "Sensors"],
    cover: "/projects/floor-cleaning-robot.png",
    featured: false,
    problem:
      "Manual floor cleaning is repetitive; the brief was an automated cleaner with sensing and control.",
    approach:
      "Designed and built a smart floor cleaning robot with sensing and control logic for the project brief.",
    outcome:
      "A completed robotics project covering hardware and control flow.",
    tradeoff:
      "Scope stayed on core cleaning behavior rather than full mapping SLAM.",
  },
  {
    slug: "arduino-home-appliance",
    title: "Arduino Home Appliance Control",
    subtitle: "Home automation control with Arduino",
    year: "2022",
    role: "Software Engineer",
    stack: ["Arduino", "IoT", "Embedded"],
    cover: "/projects/arduino-home.png",
    featured: false,
    problem:
      "Controlling home appliances from a simple interface needed a reliable microcontroller path.",
    approach:
      "Arduino-based control for home appliances with basic input/output wiring and control logic.",
    outcome:
      "A working home appliance control demo on Arduino.",
    tradeoff:
      "Local control first; full remote/cloud control was out of scope for the build.",
    repoUrl: "https://github.com/MrPrajwal12/Home-automation-app",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
