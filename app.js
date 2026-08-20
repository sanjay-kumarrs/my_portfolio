/* ==========================================================================
   PORTFOLIO INTERACTIVE CONTROLLER
   Portfolio: Sanjay Kumar S
   ========================================================================== */

// Project Data Compiled from Workspace READMEs & Resume
const PROJECTS = [
    {
        id: "soundwave",
        title: "SOUNDWAVE: AI Speech Assistance",
        shortDesc: "An AI-powered speech therapy and real-time assistive application for individuals with stuttering. Utilizes machine learning classification models for speech analysis and a cross-platform Flutter/Dart interface.",
        category: "ai-ml",
        tags: ["Python", "Flask", "Machine Learning", "Dart", "Flutter", "Audio Processing"],
        githubLink: "https://github.com/sanjay-kumarrs/Soundwave",
        demoLink: "#contact",
        details: {
            overview: "SOUNDWAVE processes live audio feeds, classifies stuttering events (repetitions, prolongations, blocks) using ML models, and delivers speech-pacing auditory feedback to help speakers.",
            features: [
                "Speech Feature Extraction: Converts raw audio signals to Mel-Frequency Cepstral Coefficients (MFCCs).",
                "ML Classification Model: Custom-trained model to categorize speech blocks and stuttering patterns.",
                "Flask API Gateway: Lightweight server serving predictions to mobile devices in real time.",
                "Cross-Platform Frontend: Flutter app featuring an interactive voice UI, speech exercises, and reports."
            ],
            setup: [
                "Python backend setup: pip install flask numpy scikit-learn librosa",
                "Run backend: python app.py",
                "Flutter mobile setup: Ensure Flutter SDK is installed, run flutter run in flutter_app/ directory."
            ]
        }
    },
    {
        id: "risk-assessment",
        title: "Risk Assessment Engine",
        shortDesc: "A comprehensive web-based risk management platform for IT, OT, and IoT assets. Features an Obsidian dark-themed dashboard with real-time KPIs, donut charts, asset registers, CVE tracking, and a 5x5 interactive risk matrix.",
        category: "cybersecurity",
        tags: ["Flask", "SQLAlchemy", "SQLite", "Plotly.js", "Python", "WTForms"],
        githubLink: "https://github.com/sanjay-kumarrs/Risk_Assessment",
        demoLink: "#contact",
        details: {
            overview: "A comprehensive platform to assess and manage cyber risk across physical (OT) and digital (IT/IoT) environments. Standardizes security auditing with real-time analytics.",
            features: [
                "Interactive Dashboard: Live KPIs and charts showing asset status, risk distributions, and mitigation progress.",
                "5x5 Risk Heat Map: Industry-standard risk assessment framework plotting Likelihood vs. Impact dynamically.",
                "Asset Registry: Enumerate IT, OT, and IoT assets alongside firmware/OS tracking and owner metadata.",
                "Vulnerability/Mitigation Tracking: Map CVEs directly to affected endpoints and track remediation completion.",
                "Immutable System Audit Log: Auto-generated log of all database operations for compliance tracking."
            ],
            setup: [
                "Ensure Python 3.8+ is installed.",
                "Run: python -m venv venv",
                "Activate venv: venv\\Scripts\\activate (Windows) or source venv/bin/activate (Linux)",
                "Install requirements: pip install -r requirements.txt",
                "Run application: python app.py",
                "Open browser: http://127.0.0.1:5000"
            ]
        }
    },
    {
        id: "emotion-music",
        title: "Emotion-Based Music Recommender",
        shortDesc: "An intelligent music player that detects user mood in real time through webcams using Convolutional Neural Networks (CNN) and recommends personalized playlists on a Django web platform.",
        category: "ai-ml",
        tags: ["Python", "OpenCV", "TensorFlow", "Keras", "Django", "Computer Vision"],
        githubLink: "https://github.com/sanjay-kumars/emotion-music-system",
        demoLink: "#contact",
        details: {
            overview: "An end-to-end computer vision and web project that captures face inputs, classifies facial expressions into primary emotions, and retrieves curated tracks matching the detected state.",
            features: [
                "Real-time Facial Detection: Leverages OpenCV Haar Cascades to track and crop face frames in the browser feed.",
                "Emotion Classifier Model: CNN trained on the FER2013 dataset (Happy, Sad, Angry, Neutral, Surprised).",
                "Django Music Controller: Curates and feeds playlists via local databases based on prediction outputs.",
                "Interactive Web Player: Features sleek playback controls and an integrated webcam capture frame."
            ],
            setup: [
                "Install packages: pip install django opencv-python tensorflow numpy",
                "Run migrations: python manage.py migrate",
                "Start development server: python manage.py runserver",
                "Visit: http://127.0.0.1:8000"
            ]
        }
    },
    {
        id: "netcat-tool",
        title: "NetCAT — Network Security Tool",
        shortDesc: "A comprehensive CLI-based Python tool for network security assessments and penetration testing. Incorporates multi-threaded TCP/UDP port scanning, service banner grabbing, DNS enumeration, custom packet crafting, and reverse/bind shells.",
        category: "cybersecurity",
        tags: ["Python", "Socket", "Scapy", "Paramiko", "dnspython", "CLI"],
        githubLink: "https://github.com/sanjay-kumarrs/NetCAT",
        demoLink: "#contact",
        details: {
            overview: "A powerful, Swiss-army-knife network tool designed for security analysts to perform rapid target host discovery, port audits, vulnerability detection, and secure payload transport.",
            features: [
                "Port Scanner: Multi-threaded TCP/UDP scanning with Syn-Stealth capabilities and service version detection.",
                "DNS Enumeration: Subdomain brute-forcing, zone-transfer testing, and multi-record lookup queries.",
                "Packet Crafter: Scapy-backed custom packet crafting (IP, TCP, UDP, ICMP) with spoofing and flood mode.",
                "Secure Shells: Listener/client framework supporting encrypted reverse and bind shell connections.",
                "Brute-Forcing: Automated authentication testing module for SSH, FTP, and HTTP basic auth endpoints."
            ],
            setup: [
                "Requires Python 3.8+.",
                "Run: pip install -r requirements.txt paramiko scapy",
                "Run standard scan: python -m netcat_tool scan -t 192.168.1.1",
                "Start encrypted shell: python -m netcat_tool shell --listen -p 4444 --encrypt"
            ]
        }
    },
    {
        id: "portsmash",
        title: "PortSmash Detection Tool",
        shortDesc: "A static vulnerability detection suite for PortSmash (CVE-2018-5407) side-channel attacks. Analyzes CPU topology, audits scheduler configurations, measures execution port contention timing, and displays metrics via a live Flask dashboard.",
        category: "cybersecurity",
        tags: ["Flask", "psutil", "py-cpuinfo", "Timing Analysis", "Side-Channel"],
        githubLink: "https://github.com/sanjay-kumarrs/PortSmash",
        demoLink: "#contact",
        details: {
            overview: "Statically detects CPU hardware exposure to SMT execution port contention timing leakage, helping system administrators identify side-channel vulnerabilities in multi-tenant environments.",
            features: [
                "CPU Mapping: Cross-references active CPU models against a local known vulnerable processor database.",
                "Port Contention timing: Measures execution timing variances between threads on SMT cores.",
                "Process Inspector: Detects high-value, sensitive target processes sharing execution cores.",
                "OS Mitigation Audit: Verifies status of Spectre, Meltdown, MDS, L1TF, and SMT kernel parameters.",
                "Interactive Web UI: Animated gauges, scan histories, and report exports in JSON/HTML."
            ],
            setup: [
                "Install requirements: pip install -r requirements.txt",
                "Run dashboard: python dashboard/app.py",
                "Access dashboard on: http://127.0.0.1:5001",
                "Execute CLI mode: python -m portsmash_tool full --report-format html"
            ]
        }
    },
    {
        id: "tic-tac-toe",
        title: "Tic-Tac-Toe — Multi-Mode Game",
        shortDesc: "A feature-rich, beautifully designed Tic-Tac-Toe game built with vanilla HTML, CSS, and JavaScript. Featuring three distinct game modes (Human vs AI, Multiplayer 1v1, and Quiz Battle with 55+ questions), a vibrant neon dark theme, and smooth animations.",
        category: "games",
        tags: ["HTML5", "CSS3", "JavaScript", "Minimax AI", "Quiz Engine", "Vanilla JS"],
        githubLink: "https://github.com/sanjay-kumarrs/tic_tac_toe",
        demoLink: "https://sanjay-kumarrs.github.io/tic_tac_toe/",
        details: {
            overview: "A feature-rich, beautifully designed Tic-Tac-Toe game built with vanilla HTML, CSS, and JavaScript. Featuring three distinct game modes, a vibrant neon dark theme, glassmorphism effects, and smooth animations.",
            features: [
                "Human vs AI: Play against an unbeatable AI powered by the Minimax algorithm with alpha-beta pruning.",
                "Multiplayer (Normal): Classic 1v1 on the same device with standard tic-tac-toe rules.",
                "Quiz Battle: Two players compete, answering general knowledge questions (55+ questions across Science, History, Geography, Sports, Pop Culture, and Math) with a 10-second timer to earn X/O moves.",
                "Sudden Death: If Quiz Battle reaches a draw, sudden death allows players to answer harder questions to remove an opponent piece and place their 4th piece.",
                "Vibrant Neon Design: Particle background with connecting lines, smooth micro-animations, glassmorphism UI, cell pop-ins, win line drawing, and confetti celebration."
            ],
            setup: [
                "Clone or download the project repo: git clone https://github.com/sanjay-kumarrs/tic_tac_toe",
                "Open index.html directly in any modern web browser (no build tools or dependencies required!).",
                "Or run using a local HTTP server: npx serve ."
            ]
        }
    },
    {
        id: "sidechannel-side",
        title: "Side_Channel — Static Analysis & Detection Tool",
        shortDesc: "A modular, interactive CLI tool to detect side-channel attack vectors. Covers timing analysis, cache-hierarchy audits (Flush+Reload indicators), RAPL power domains (PLATYPUS), speculative execution vulnerabilities, and crypto code analysis.",
        category: "cybersecurity",
        tags: ["Python", "Sysfs", "WMI", "Speculative Execution", "ASLR"],
        githubLink: "https://github.com/sanjay-kumarrs/Side_Channel_Analysis",
        demoLink: "#contact",
        details: {
            overview: "A specialized tool that audits system settings, kernel variables, and hardware configurations to assess susceptibility to 25+ distinct CVE side-channel vulnerabilities.",
            features: [
                "Timing Analysis: Checks timer resolution (sub-microsecond access) and RDTSC instruction accessibility.",
                "Cache Analyzer: Maps L1/L2/L3 topology and checks transparent huge pages & Kernel Same-page Merging (KSM).",
                "Power Analyzer: Detects PLATYPUS vulnerabilities by testing access permissions of Intel RAPL interfaces.",
                "Kernel Hardening Auditor: Audits ASLR/KASLR, secure boot, SIP, and kernel restrictive parameters.",
                "Crypto Library Audit: Scans installed OpenSSL, libsodium, or CNG libraries for weak ciphers and timing risks."
            ],
            setup: [
                "Activate environment and install: pip install -r requirements.txt",
                "Launch menu: python -m sidechannel_tool",
                "Perform full scan: python -m sidechannel_tool full --report-format html"
            ]
        }
    },
    {
        id: "siem-logging",
        title: "Logging and Alerting - SIEM Platform",
        shortDesc: "A real-time Security Information and Event Management platform. Aggregates network anomalies, brute-force logs, and PLC/SCADA signals, evaluates alerts via sliding windows, auto-generates incidents, and sends Slack/email alerts.",
        category: "cybersecurity",
        tags: ["Flask", "SQLAlchemy", "SQLite", "psutil", "Jinja2", "SMTP", "Webhooks"],
        githubLink: "https://github.com/sanjay-kumarrs/Logging_and_Alerting",
        demoLink: "#contact",
        details: {
            overview: "A lightweight SIEM designed for mixed IT and industrial OT infrastructures, tracking physical host health, unauthorized PLC commands, and security log anomalies.",
            features: [
                "Log Aggregator: Real-time collection of network connections, security logs, resource usage, and OT heartbeats.",
                "Alert Engine: Correlation rule evaluator analyzing logs inside sliding time windows with source IP grouping.",
                "Incident Lifecycle: Auto-promotion of Critical/High alerts into incident cases with detailed timelines.",
                "Notifications: Integrates with Slack/Teams Webhooks and SMTP mail servers for real-time alerting.",
                "Interactive SIEM Panel: Live log feed, severity distributions, and incident action sidebars."
            ],
            setup: [
                "Install dependencies: pip install -r requirements.txt",
                "Configure config.py with optional Webhook / SMTP details.",
                "Run SIEM: python app.py",
                "Open browser: http://localhost:5000"
            ]
        }
    },
    {
        id: "food-recipe",
        title: "Delicious Food Recipe Platform",
        shortDesc: "A robust Django-based culinary content management platform. Features user profile management, recipe search, ratings, image uploads, and an external API integration for automated nutritional calorie estimations.",
        category: "webdev",
        tags: ["Django", "Python", "SQLite", "REST API", "HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/sanjay-kumarrs/food-recipe",
        demoLink: "#contact",
        details: {
            overview: "A community-focused web platform allowing food enthusiasts to document, share, and review recipes, with integrated API checks to measure calorie counts instantly.",
            features: [
                "Recipe CRUD Operations: Full creation, reading, editing, and deletion controls with photo uploading.",
                "Calorie Calculator API: Integrates with third-party nutrition APIs to parse ingredient lists and estimate caloric values.",
                "Review & Rating Engine: Collaborative user feedback system with star ratings and reviews.",
                "Filterable Search: Search parameters checking prep-time, category, ingredients, and difficulty level."
            ],
            setup: [
                "Navigate to project folder: cd chef_info",
                "Activate environment and install requirements: pip install django requests",
                "Apply migrations: python manage.py migrate",
                "Run: python manage.py runserver"
            ]
        }
    },
    {
        id: "patch-manager",
        title: "Patch & Hardening Suite",
        shortDesc: "An asset inventory and device hardening manager aligned with CIS benchmarks. Conducts 27 security controls check on endpoints (OS, Auth, Logging, OT/ICS), monitors missing CVE patches, and generates audit reports.",
        category: "cybersecurity",
        tags: ["Flask", "SQLite", "Database", "CIS Controls", "PowerShell", "Security Audit"],
        githubLink: "https://github.com/sanjay-kumarrs/Patch_management",
        demoLink: "#contact",
        details: {
            overview: "Helps administrators secure both traditional IT computers and sensitive manufacturing OT devices by tracking missing vendor patches and checking configuration baselines.",
            features: [
                "Hardening Engine: Checks guest accounts, firewall rules, SMBv1 presence, MFA status, and OT whitelists.",
                "Live OS Scanners: Leverages OS-native scripts (WSUS/apt/dnf) to fetch missing software patches.",
                "Endpoint Compliance: Evaluates patch compliance rates and gives a color-coded overall hardening score.",
                "Patch Deployment Workflow: Approve, schedule, deploy, skip, or roll-back patches per asset.",
                "Audit Trails: Records detailed compliance reports, patch records, and administrative actions."
            ],
            setup: [
                "Install Python requirements: pip install flask",
                "Prepare database: python seed_data.py to populate initial mock assets",
                "Start application: python app.py",
                "Access UI on: http://127.0.0.1:5050"
            ]
        }
    },
    {
        id: "remote-guard",
        title: "Remote Access Control Guard",
        shortDesc: "A real-time intrusion prevention system monitoring remote control vectors. Integrates with OS Firewalls (netsh/iptables) to automatically block brute-force attacks and port scans, featuring honeypots and an interactive simulator.",
        category: "cybersecurity",
        tags: ["Flask", "psutil", "Windows Firewall", "Honeypot", "IDS/IPS", "Python"],
        githubLink: "https://github.com/sanjay-kumarrs/remote_access_control",
        demoLink: "#contact",
        details: {
            overview: "A lightweight host-based IDS/IPS designed to protect network services (FTP, SSH, Telnet, RDP, WinRM) in IT/OT setups, using rules to blacklist probing IPs automatically.",
            features: [
                "Brute-Force Shield: Blocks IPs exceeding 5 connection attempts in a 60-second window for 1 hour.",
                "Port Scan Blocker: Instantly blocks IPs probing 5+ ports within 30 seconds.",
                "Honeypot Decoys: Listens on decoy ports (2222, 33890, 59000); any hit triggers a permanent firewall ban.",
                "Escalating Bans: Automatically upgrades repeat offenders to permanent blocks via OS firewall rules.",
                "Attack Simulator: Safely generates traffic to test detection thresholds using RFC 5737 test IPs."
            ],
            setup: [
                "WARNING: Run as Administrator (Windows) or root (Linux) to allow firewall block updates.",
                "Install requirements: pip install -r requirements.txt",
                "Launch dashboard: python dashboard.py",
                "Open browser: http://127.0.0.1:5000",
                "Run CLI monitoring mode: python remote_access_guard.py start"
            ]
        }
    },
    {
        id: "ecommerce-plants",
        title: "Plant-Based E-Commerce Application",
        shortDesc: "A full-stack MERN Web App for plant enthusiasts. Features secure JWT authentication, a responsive product catalog, shopping cart state management, and an admin dashboard to control products and orders.",
        category: "webdev",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Redux"],
        githubLink: "https://github.com/sanjay-kumarrs/e_plant_web",
        demoLink: "#contact",
        details: {
            overview: "A modern, responsive e-commerce web platform showing plant products with custom categories, filtering, authentication systems, and smooth animations.",
            features: [
                "JWT Authentication: Secure sign-up/login with encrypted password hashing on the server side.",
                "State Management: React state management powered by Redux Toolkit for seamless shopping cart updates.",
                "Admin Operations: Custom administrative board to upload plants, adjust inventories, and update orders.",
                "Clean Checkout: Modular payment form inputs with validation checks and smooth cart summary transitions."
            ],
            setup: [
                "Server setup: cd backend && npm install && npm start",
                "Frontend setup: cd frontend && npm install && npm start",
                "Environment config: Create a .env file with MONGODB_URI and JWT_SECRET keys."
            ]
        }
    },
    {
        id: "cinemoji",
        title: "Cinemoji 🎬 Emojis Movie Guessing Game",
        shortDesc: "A premium, interactive front-end trivia web game where players decode sets of emojis to guess famous movie titles. Built using pure semantic HTML5, modern CSS3 variables/transitions, and modular ES6 JavaScript, the app features fluid animations, custom synthesized sound effects, dark/light themes, and local statistics tracking.",
        category: "games",
        tags: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "LocalStorage", "ES6 Modules"],
        githubLink: "https://github.com/sanjay-kumarrs/emoji_game",
        demoLink: "https://sanjay-kumarrs.github.io/emoji_game/",
        details: {
            overview: "Cinemoji is a premium, interactive front-end trivia web game where players decode sets of emojis to guess famous movie titles. Built using pure semantic HTML5, modern CSS3 variables/transitions, and modular ES6 JavaScript, the app features fluid animations, custom synthesized sound effects, dark/light themes, and local statistics tracking.",
            features: [
                "Classic Mode: Progress through level-based sets of movies with increasing difficulty. Earn coins and level up.",
                "Time Attack: Face a ticking clock in a 60-second survival mode where correct answers reward bonus time and mistakes penalize.",
                "Local Versus: 2 players take turns solving the same series of movie clues on a single device. Features a 30-second turn timer, pass option, active turn badges, and a post-game match summary scoreboard.",
                "Rich Hint Shop: Use earned coins to unlock hints (Classic/Time Attack modes only): Reveal Genre & Year (15 Coins), Fill One Letter (25 Coins), Skip Movie (50 Coins - Classic Mode only).",
                "Web Audio Synthesizer: Uses standard browser oscillators to synthesize custom game audio (Clicks, Success Chime, Wrong Answer Buzz, Game Over minor drops, and Win fanfare) without loading external audio assets.",
                "Settings Drawer: Customize keyboard input layout (switch between dynamic clickable letters grid vs. physical keyboard typing), toggle sound settings, or clear saved statistics.",
                "Local Leaderboard & Stats: High scores and career statistics (total solved, lifetime coins) are persisted locally via localStorage."
            ],
            setup: [
                "Play Immediately (Zero Setup): Locate index.html in the emoji_game directory and double-click it to open it directly in your web browser.",
                "Local Dev Server: Open terminal in emoji_game directory.",
                "Install dev dependencies: npm install",
                "Spin up local server: npm run dev",
                "Access at: http://127.0.0.1:8080"
            ]
        }
    }

];

// Document Elements
document.addEventListener("DOMContentLoaded", () => {
    // Navigation scrolled class
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Navigation Hamburger Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("open");
            navMenu.classList.toggle("open");
        });

        // Close menu when clicking nav link
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("open");
                navMenu.classList.remove("open");
            });
        });
    }

    // Active Navigation Highlighting on scroll
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute("id");
            const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add("active");
                } else {
                    navLink.classList.remove("active");
                }
            }
        });
    });

    // Typewriter Animation for Hero Elevator Pitch
    const typewriterElement = document.getElementById("typewriter-pitch");
    const roles = [
        "MCA Postgraduate & Cyber Researcher",
        "Full-Stack Web Developer",
        "Intrusion Detection/SIEM Builder",
        "Machine Learning & AI Innovator"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typewriterDelay = 100;

    function handleTypewriter() {
        if (!typewriterElement) return;

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typewriterDelay = 50; // speed up deleting
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typewriterDelay = 100; // standard typing speed
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typewriterDelay = 1500; // pause at full text
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typewriterDelay = 500; // brief pause before typing next
        }

        setTimeout(handleTypewriter, typewriterDelay);
    }

    // Start Typewriter
    setTimeout(handleTypewriter, 1000);

    // Dynamic Projects Grid Implementation
    const projectsGrid = document.getElementById("projects-grid");
    const searchInput = document.getElementById("project-search");
    const filterButtons = document.querySelectorAll(".filter-btn");

    let activeFilter = "all";
    let activeSearchQuery = "";

    function renderProjects() {
        if (!projectsGrid) return;

        projectsGrid.innerHTML = "";

        // Filter & Search logic
        const filteredProjects = PROJECTS.filter(project => {
            const matchesCategory = activeFilter === "all" || project.category === activeFilter;
            const matchesSearch = project.title.toLowerCase().includes(activeSearchQuery) ||
                project.shortDesc.toLowerCase().includes(activeSearchQuery) ||
                project.tags.some(tag => tag.toLowerCase().includes(activeSearchQuery));
            return matchesCategory && matchesSearch;
        });

        if (filteredProjects.length === 0) {
            projectsGrid.innerHTML = `
                <div class="no-projects">
                    <svg class="no-projects-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3>No matching projects found</h3>
                    <p>Try resetting the search terms or filters.</p>
                </div>
            `;
            return;
        }

        filteredProjects.forEach((project, idx) => {
            const projectCard = document.createElement("div");
            projectCard.className = `project-card reveal reveal-delay-${(idx % 4) + 1}`;
            projectCard.innerHTML = `
                <div class="project-body">
                    <div class="project-cat">${project.category.replace("-", " ")}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.shortDesc}</p>
                    <div class="project-tech">
                        ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
                    </div>
                    <div class="project-links">
                        <button class="project-link btn-details" data-id="${project.id}" style="background:transparent; border:none; padding:0; cursor:pointer;">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Read Doc
                        </button>
                        <a href="${project.githubLink}" target="_blank" class="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            GitHub
                        </a>
                        ${project.demoLink && project.demoLink !== "#contact" ? `
                        <a href="${project.demoLink}" target="_blank" class="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 16px; height: 16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                        </a>
                        ` : ''}
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });

        // Re-observe newly added reveal cards
        observeScrollReveals();
        bindDetailButtons();
    }

    // Filter Buttons click handler
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-filter");
            renderProjects();
        });
    });

    // Real-time Search input handler
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            activeSearchQuery = e.target.value.toLowerCase().trim();
            renderProjects();
        });
    }

    // Initialize Grid
    renderProjects();

    // Project Details Modal System
    const modal = document.getElementById("project-modal");
    const modalClose = document.getElementById("modal-close");
    const modalTitle = document.getElementById("modal-title");
    const modalOverview = document.getElementById("modal-overview");
    const modalFeatures = document.getElementById("modal-features");
    const modalSetup = document.getElementById("modal-setup");
    const modalGit = document.getElementById("modal-git");
    const modalDemo = document.getElementById("modal-demo");

    function bindDetailButtons() {
        document.querySelectorAll(".btn-details").forEach(btn => {
            btn.addEventListener("click", () => {
                const projectId = btn.getAttribute("data-id");
                const project = PROJECTS.find(p => p.id === projectId);
                if (project && modal) {
                    modalTitle.textContent = project.title;
                    modalOverview.textContent = project.details.overview;

                    // Features list
                    modalFeatures.innerHTML = project.details.features
                        .map(feat => `<li><span class="feat-bullet">⚡</span> ${feat}</li>`)
                        .join("");

                    // Setup list
                    modalSetup.innerHTML = project.details.setup
                        .map(step => `<li><span class="setup-num"></span>${step}</li>`)
                        .join("");

                    modalGit.setAttribute("href", project.githubLink);

                    if (project.demoLink && project.demoLink !== "#contact") {
                        modalDemo.setAttribute("href", project.demoLink);
                        modalDemo.style.display = "";
                    } else {
                        modalDemo.style.display = "none";
                    }

                    // Show Modal
                    modal.classList.add("open");
                    document.body.style.overflow = "hidden"; // disable scroll
                }
            });
        });
    }

    // NSS details click handler
    const nssCard = document.getElementById("nss-cert-card");
    if (nssCard && modal) {
        nssCard.addEventListener("click", () => {
            modalTitle.textContent = "National Service Scheme (NSS)";
            modalOverview.textContent = "Served as an active volunteer and student coordinator for the National Service Scheme (NSS) from 2021 to 2023, representing my institution and leading community services, awareness drives, and social welfare campaigns.";

            modalFeatures.innerHTML = `
                <li><span class="feat-bullet">⚡</span> Coordinated community service initiatives, state awareness campaigns, and volunteer meetings.</li>
                <li><span class="feat-bullet">⚡</span> Participated in the National Integration Camp and State-Level NSS Camp, representing the institution.</li>
                <li><span class="feat-bullet">⚡</span> Led environmental preservation drives, blood donation camps, and local community service activities.</li>
                <li><span class="feat-bullet">⚡</span> Cultivated core management, teamwork, social responsibility, and leadership qualities.</li>
            `;

            // Hide Setup section & GitHub link
            const setupSection = modalSetup.parentElement;
            if (setupSection) setupSection.style.display = "none";
            if (modalGit) modalGit.style.display = "none";
            if (modalDemo) modalDemo.style.display = "none";

            // Show Modal
            modal.classList.add("open");
            document.body.style.overflow = "hidden";
        });
    }

    if (modalClose && modal) {
        modalClose.addEventListener("click", () => {
            modal.classList.remove("open");
            document.body.style.overflow = ""; // restore scroll

            // Restore hidden setup section & github link
            const setupSection = modalSetup.parentElement;
            if (setupSection) setupSection.style.display = "";
            if (modalGit) modalGit.style.display = "";
            if (modalDemo) modalDemo.style.display = "";
        });

        // Close on background click
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("open");
                document.body.style.overflow = "";

                // Restore hidden setup section & github link
                const setupSection = modalSetup.parentElement;
                if (setupSection) setupSection.style.display = "";
                if (modalGit) modalGit.style.display = "";
                if (modalDemo) modalDemo.style.display = "";
            }
        });
    }

    // Copy Email Feature (For easy access)
    const copyEmailBtn = document.getElementById("copy-email-btn");
    const emailVal = "kumarssanjayofficial@gmail.com";
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(emailVal).then(() => {
                // Temporary feedback
                const origIcon = copyEmailBtn.innerHTML;
                copyEmailBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 14px; height: 14px; color: #10B981;">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                `;
                copyEmailBtn.style.borderColor = "#10B981";

                setTimeout(() => {
                    copyEmailBtn.innerHTML = origIcon;
                    copyEmailBtn.style.borderColor = "";
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy email: ", err);
            });
        });
    }

    // Scroll-to-top button
    const backToTopBtn = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Scroll Reveal implementation using Intersection Observer
    function observeScrollReveals() {
        const revealElements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-active");
                    // Unobserve after showing to avoid repeat animations
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => observer.observe(el));
    }

    observeScrollReveals();

    // Contact Form submission handling with modern validation
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("form-name").value.trim();
            const email = document.getElementById("form-email").value.trim();
            const subject = document.getElementById("form-subject").value.trim();
            const message = document.getElementById("form-message").value.trim();

            if (!name || !email || !subject || !message) {
                showFormStatus("Please fill in all fields.", "error");
                return;
            }

            if (!validateEmail(email)) {
                showFormStatus("Please enter a valid email address.", "error");
                return;
            }

            // Show sending state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const origBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin" style="width: 20px; height: 20px; color: #ffffff;" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="opacity: 0.25;"></circle>
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style="opacity: 0.75;"></path>
                </svg>
                Sending...
            `;

            // Submit form to action URL using fetch (Formspree)
            fetch(contactForm.action, {
                method: contactForm.method || "POST",
                body: new FormData(contactForm),
                headers: {
                    "Accept": "application/json"
                }
            })
                .then(response => {
                    if (response.ok) {
                        showFormStatus("Message sent successfully! Thank you, Sanjay will get back to you shortly.", "success");
                        contactForm.reset();
                    } else {
                        response.json().then(data => {
                            if (data && data.errors) {
                                showFormStatus(data.errors.map(err => err.message).join(", "), "error");
                            } else {
                                showFormStatus("Oops! There was a problem submitting your form.", "error");
                            }
                        }).catch(() => {
                            showFormStatus("Oops! There was a problem submitting your form.", "error");
                        });
                    }
                })
                .catch(error => {
                    showFormStatus("Oops! Connection error. Please try again later.", "error");
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origBtnText;
                });
        });
    }

    function showFormStatus(msg, type) {
        if (!formStatus) return;
        formStatus.textContent = msg;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = "flex";

        // Auto scroll to status if needed
        formStatus.scrollIntoView({ behavior: "smooth", block: "nearest" });

        // Hide success message after 7 seconds
        if (type === "success") {
            setTimeout(() => {
                formStatus.style.display = "none";
            }, 7000);
        }
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // ==========================================================================
    // TEXT-TO-SPEECH (TTS) CONTROLLER
    // ==========================================================================
    const ttsButtons = {
        "tts-hero": {
            button: document.getElementById("tts-hero"),
            getText: () => {
                const pretitle = getCleanText(document.querySelector(".hero-pretitle"));
                const title = getCleanText(document.querySelector(".hero-title"));
                const subtitle = getCleanText(document.getElementById("typewriter-pitch"));
                const pitch = getCleanText(document.querySelector(".hero-pitch"));
                return `${pretitle}. ${title}, ${subtitle}. ${pitch}`;
            },
            defaultTitle: "Listen to intro"
        },
        "tts-about": {
            button: document.getElementById("tts-about"),
            getText: () => {
                return getCleanText(document.querySelector(".about-text"));
            },
            defaultTitle: "Listen to About Me"
        }
    };

    let activeTtsId = null;
    let currentUtterance = null;

    function getCleanText(element) {
        if (!element) return "";
        const clone = element.cloneNode(true);
        // Remove button elements so they aren't read out
        clone.querySelectorAll(".tts-btn").forEach(btn => btn.remove());
        return clone.textContent.trim().replace(/\s+/g, " ");
    }

    if ("speechSynthesis" in window) {
        // Initialize buttons
        Object.entries(ttsButtons).forEach(([id, config]) => {
            const btn = config.button;
            if (!btn) return;

            btn.addEventListener("click", (e) => {
                e.stopPropagation(); // Avoid triggering any card click events

                if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.cancel();

                    // If the clicked button was the one speaking, we just stop
                    if (activeTtsId === id) {
                        resetTtsButtons();
                        return;
                    }
                }

                // Start speaking new text
                speakText(id, config.getText());
            });
        });

        // Cancel speech when user leaves the page to prevent background noise
        window.addEventListener("beforeunload", () => {
            window.speechSynthesis.cancel();
        });
    } else {
        // Hide TTS buttons if speech synthesis is not supported
        Object.values(ttsButtons).forEach(config => {
            if (config.button) {
                config.button.style.display = "none";
            }
        });
    }

    function speakText(id, text) {
        if (!text) return;

        resetTtsButtons();
        activeTtsId = id;

        const config = ttsButtons[id];
        if (config && config.button) {
            config.button.classList.add("speaking");
            config.button.setAttribute("title", "Stop listening");
        }

        currentUtterance = new SpeechSynthesisUtterance(text);

        // Select an English voice if available
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.startsWith("en") && v.name.includes("Google")) ||
            voices.find(v => v.lang.startsWith("en") && (v.name.includes("US") || v.name.includes("UK") || v.name.includes("GB"))) ||
            voices.find(v => v.lang.startsWith("en")) ||
            voices[0];

        if (preferredVoice) {
            currentUtterance.voice = preferredVoice;
        }

        currentUtterance.rate = 1.0;
        currentUtterance.pitch = 1.0;

        currentUtterance.onend = () => {
            if (activeTtsId === id) {
                resetTtsButtons();
            }
        };

        currentUtterance.onerror = (event) => {
            // Ignore error from manual cancellation
            if (event.error !== "interrupted") {
                console.error("SpeechSynthesisUtterance error:", event);
            }
            if (activeTtsId === id) {
                resetTtsButtons();
            }
        };

        window.speechSynthesis.speak(currentUtterance);
    }

    function resetTtsButtons() {
        activeTtsId = null;
        currentUtterance = null;
        Object.entries(ttsButtons).forEach(([id, config]) => {
            const btn = config.button;
            if (btn) {
                btn.classList.remove("speaking");
                btn.setAttribute("title", config.defaultTitle);
            }
        });
    }

    // Chrome and some browsers load voices asynchronously, so query voices early
    if ("speechSynthesis" in window) {
        window.speechSynthesis.getVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
        }
    }
});
