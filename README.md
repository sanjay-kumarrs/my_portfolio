# 🛡️ Sanjay Kumar S — Professional Portfolio Website

A premium, modern, and fully responsive single-page portfolio website showcasing the credentials, skills, and projects of **Sanjay Kumar S** (MCA Postgraduate, Full-Stack Developer, and Cybersecurity Researcher). 

---

## ✨ Key Features

- **🎨 Obsidian Dark Theme:** Sleek dark-mode interface (`#08080C` background) with vibrant neon purple (`#A855F7`) highlights and clean glassmorphism (`backdrop-filter`) cards.
- **📱 Fully Responsive Design:** Fluidly scales across mobile, tablet, and desktop screens with custom touch-friendly hitboxes and collapsible hamburger navigation.
- **⚡ Interactive Badges:** Visually rich skills section with custom inline SVG icons for 25+ technologies and frameworks.
- **🔍 Dynamic Projects Grid:** Real-time search indexing and category tab filtering (All, Cybersecurity, Full-Stack Web, AI & ML, Games) of projects.
- **📄 Documentation Modals:** Project cards include a "Read Doc" button that opens styled popup overlays containing setup instructions and technical details without page reloads.
- **🎗️ NSS Outreach Modal:** Interactive NSS certificate card that displays volunteer and coordinator work details upon clicking.
- **✉️ Direct Contact Accessibility & Integration:** Working contact form fully integrated with Formspree using AJAX (`fetch` API) for seamless submissions without page reloads. Features a custom sending spinner state and descriptive inline error/success messages. Includes direct phone links, email triggers, and a click-to-copy email button with visual feedback.
- **🗣️ Client-Side Text-to-Speech (TTS):** Integration of a browser-native Web Speech API reader. Visitors can click the modern, glowing speaker icon next to introductory content (Hero and About Me) to listen to a high-quality synthesized voice recording, with smart multi-audio cancellation and automatic UI state cleanup.
- **🔊 Micro-Animated Soundwaves:** Dynamic SVG speaker icons that animate and pulse using CSS keyframes when audio playback is active, providing clear visual feedback.
- **🎓 Credential Verification:** Verification-linked certification cards, including the specific **IBM SkillsBuild AI Fundamentals** certificate with a direct Credly verification link.
- **📈 Motion & Reveal Effects:** Typewriter elevator pitch loop and scroll-triggered fade-up reveal transitions using the *Intersection Observer API*.

---

## 📁 File Structure

```text
portfolio/
│
├── index.html          # Semantic HTML5 layout and SEO structure
├── style.css           # CSS design system, typography, media queries, and animation definitions
├── app.js              # Typewriter loop, projects catalog, search filters, modal controllers, and contact submission handler
│
├── assets/
│   ├── Sanjay_R9.pdf   # PDF resume download file
│   └── images/
│       └── profile_sec.png # Portrait photo (Hero & About sections)
│
└── README[1-8].md      # Documentation files for Sanjay's cybersecurity & full-stack projects
```

---

## 🚀 How to Run Locally

You can run this website on any local development server. 

### Option 1: Using Python (Recommended)
1. Open a terminal in the project directory.
2. Run the built-in HTTP server:
   ```bash
   python -m http.server 8080 --bind 127.0.0.1
   ```
3. Open your browser and navigate to:
   **[https://sanjay-kumarrs.github.io/my_portfolio/](https://sanjay-kumarrs.github.io/my_portfolio/)**

### Option 2: Using Node (http-server)
1. Install globally: `npm install -g http-server`
2. Run in the project folder: `http-server -p 8080`
3. Access at: `http://localhost:8080`
