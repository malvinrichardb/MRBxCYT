const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");
const cursorGlow = document.querySelector(".cursor-glow");

const translations = {
  id: {
    navHome: "Beranda", navAbout: "Tentang", navProjects: "Proyek", navContact: "Kontak",
    letsTalk: "Hubungi Saya ↗", available: "TERBUKA UNTUK PROYEK BARU",
    heroTitle: 'Mengubah ide menjadi <span class="gradient-text">cerita visual.</span>',
    heroDescription: "Saya seorang video editor dan content creator yang suka membuat konten terasa hidup melalui visual, ritme, dan cerita.",
    seeWork: 'Lihat Karya Saya <span>↘</span>', contactMe: "Mari Terhubung",
    yearsLabel: "Kreativitas tanpa batas", projectsLabel: "Proyek kreatif", dedicationLabel: "Dedikasi",
    scroll: "GULIR UNTUK MENJELAJAH", aboutEyebrow: "TENTANG SAYA",
    aboutTitle: 'Kreativitas bertemu <span class="gradient-text">strategi.</span>',
    aboutText: "Bagi saya, editing bukan sekadar menyusun klip. Ini tentang menemukan momen, membangun suasana, dan menyampaikan pesan yang mudah diingat.",
    aboutText2: "Saya senang bereksperimen dengan transisi, color grading, motion, dan format konten yang sesuai dengan audiens.",
    workTogether: "Punya ide? Mari berkolaborasi ↗", selectedWork: "KARYA PILIHAN",
    projectsTitle: 'Proyek yang berbicara <span class="gradient-text">sendiri.</span>',
    projectsSubtitle: "Beberapa contoh karya. Ganti dengan proyek asli milikmu.",
    filterAll: "Semua", filterVideo: "Video Editing", filterSocial: "Konten Sosial", filterMotion: "Motion",
    projectOne: "Video sinematik · Color grading", projectTwo: "Reels & Shorts · Konten sosial",
    projectThree: "Motion graphic · Visual effects",
    portfolioNote: "Catatan: kartu ini masih contoh desain. Ganti judul, gambar, dan tautan dengan portofolio asli kamu.",
    contactEyebrow: "MULAI SESUATU", contactTitle: 'Punya cerita untuk <span class="gradient-text">dibuat?</span>',
    contactText: "Mari wujudkan ide kamu menjadi konten yang menarik dan berkesan.",
    emailMe: "Kirim Email", footerText: "Dibuat dengan kreativitas dan banyak kopi.", rights: "Hak cipta dilindungi."
  },
  en: {
    navHome: "Home", navAbout: "About", navProjects: "Projects", navContact: "Contact",
    letsTalk: "Let's Talk ↗", available: "AVAILABLE FOR NEW PROJECTS",
    heroTitle: 'Turning ideas into <span class="gradient-text">visual stories.</span>',
    heroDescription: "I'm a video editor and content creator who brings content to life through visuals, rhythm, and storytelling.",
    seeWork: 'Explore My Work <span>↘</span>', contactMe: "Let's Connect",
    yearsLabel: "Limitless creativity", projectsLabel: "Creative projects", dedicationLabel: "Dedication",
    scroll: "SCROLL TO EXPLORE", aboutEyebrow: "ABOUT ME",
    aboutTitle: 'Where creativity meets <span class="gradient-text">strategy.</span>',
    aboutText: "To me, editing is more than arranging clips. It's about finding moments, building a mood, and delivering a memorable message.",
    aboutText2: "I enjoy experimenting with transitions, color grading, motion, and content formats that fit the audience.",
    workTogether: "Have an idea? Let's collaborate ↗", selectedWork: "SELECTED WORK",
    projectsTitle: 'Projects that speak <span class="gradient-text">for themselves.</span>',
    projectsSubtitle: "A few sample projects. Replace them with your own work.",
    filterAll: "All", filterVideo: "Video Editing", filterSocial: "Social Content", filterMotion: "Motion",
    projectOne: "Cinematic video · Color grading", projectTwo: "Reels & Shorts · Social content",
    projectThree: "Motion graphics · Visual effects",
    portfolioNote: "Note: these cards are design examples. Replace titles, images, and links with your real portfolio.",
    contactEyebrow: "LET'S START SOMETHING", contactTitle: 'Have a story to <span class="gradient-text">tell?</span>',
    contactText: "Let's turn your idea into engaging and memorable content.",
    emailMe: "Send an Email", footerText: "Made with creativity and lots of coffee.", rights: "All rights reserved."
  }
};
let currentLanguage = localStorage.getItem("portfolio-language") || "id";

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  languageToggle.textContent = language === "id" ? "EN" : "ID";
  localStorage.setItem("portfolio-language", language);
}
applyLanguage(currentLanguage);

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") body.classList.add("light-theme");
themeToggle.textContent = body.classList.contains("light-theme") ? "☾" : "☼";

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const isLight = body.classList.contains("light-theme");
  themeToggle.textContent = isLight ? "☾" : "☼";
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
});

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "id" ? "en" : "id");
});

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 450);
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

window.addEventListener("pointermove", (event) => {
  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
