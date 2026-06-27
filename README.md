# 🛡️ Sanjay Kumar S — Professional Portfolio Website.....

A premium, modern, and fully responsive single-page portfolio website showcasing the credentials, skills, and projects of **Sanjay Kumar S** (MCA Postgraduate, Full-Stack Developer, and Cybersecurity Researcher). 

---

## ✨ Key Features

- **🎨 Obsidian Dark Theme:** Sleek dark-mode interface (`#08080C` background) with vibrant neon purple (`#A855F7`) highlights and clean glassmorphism (`backdrop-filter`) cards.
- **📱 Fully Responsive Design:** Fluidly scales across mobile, tablet, and desktop screens with custom touch-friendly hitboxes and collapsible hamburger navigation.
- **⚡ Interactive Badges:** Visually rich skills section with custom inline SVG icons for 25+ technologies and frameworks.
- **🔍 Dynamic Projects Grid:** Real-time search indexing and category tab filtering (All, Cybersecurity, Web Dev, AI/ML) of projects.
- **📄 Documentation Modals:** Project cards include a "Read Doc" button that opens styled popup overlays containing setup instructions and technical details without page reloads.
- **🎗️ NSS Outreach Modal:** Interactive NSS certificate card that displays volunteer and coordinator work details upon clicking.
- **✉️ Direct Contact Accessibility:** Working contact form alongside direct phone call links, email triggers, and a click-to-copy email button with visual feedback.
- **📈 Motion & Reveal Effects:** Typewriter elevator pitch loop and scroll-triggered fade-up reveal transitions using the *Intersection Observer API*.

---

## 📁 File Structure

```text
portfolio/
│
├── index.html          # Semantic HTML5 layout and SEO structure
├── style.css           # CSS design system, typography, media queries, and animation definitions
├── app.js              # Typewriter loop, projects catalog, search filters, and modal controllers
│
├── assets/
│   ├── Sanjay_R7.pdf   # PDF resume download file
│   └── images/
│       └── profile_large.jpg # High-resolution portrait photo (Hero & About sections)
│
└── README[1-7].md      # Documentation files for Sanjay's cybersecurity projects
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
   **https://sanjay-kumarrs.github.io/my_portfolio/**

### Option 2: Using Node (http-server)
1. Install globally: `npm install -g http-server`
2. Run in the project folder: `http-server -p 8080`
3. Access at: `http://localhost:8080`
