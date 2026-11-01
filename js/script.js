// Search index
const searchPages = [
  { title: "Home", url: "index.html", content: "Behavioural Research Foundation BRF Empowering Choices Through Research registered society Societies Registration Act 1860 excellence research education practical applications behavioural research vision mission objective consumer behaviour behavioural finance" },
  { title: "Announcements", url: "announcements.html", content: "Announcements Circulars Notices Student Internship Programme Applications National Workshop Behavioural Science Awards 2026 Nominations Call for Papers Journal Certification Programs" },
  { title: "Archives", url: "archives.html", content: "Archives Historical Records Past Memorandums of Understanding MoUs Conferences Seminars Workshops Circulars Founding Resolutions 1860" },
  { title: "MoUs", url: "mous.html", content: "Memorandum of Understanding MoUs Tinsukia Commerce College K C Das Commerce College Digboi College Jagiroad College Doom Dooma College Dibrugarh University Gauhati University" },
  { title: "MoU - Tinsukia Commerce College", url: "mou-tinsukia-commerce-college.html", content: "Tinsukia Commerce College TCC Sripuria Tinsukia Assam Dibrugarh University autonomous NAAC A grade B Com BA commerce management" },
  { title: "MoU - K C Das Commerce College", url: "mou-kc-das-commerce-college.html", content: "K C Das Commerce College KCDCC Guwahati Assam Gauhati University provincialized UGC recognized AICTE approved ISO 9001:2015 NAAC B+ grade B Com M Com" },
  { title: "MoU - Digboi College", url: "mou-digboi-college.html", content: "Digboi College oil town Digboi Tinsukia Assam Dibrugarh University autonomous UGC NAAC A+ grade Arts Science Commerce 20 departments" },
  { title: "MoU - Jagiroad College", url: "mou-jagiroad-college.html", content: "Jagiroad College Morigaon Assam Gauhati University NAAC A+ grade UGC autonomous August 8 1979 BA BSc BCom BVoc Tourism" },
  { title: "MoU - Doom Dooma College", url: "mou-doom-dooma-college.html", content: "Doom Dooma College Rupai Siding Tinsukia Assam Dibrugarh University 1967 NAAC B+ grade CBCS Arts Science Commerce" },
  { title: "Contact us", url: "contact-us.html", content: "Contact email behaviouralresearchfoundation@gmail.com queries collaboration address society" },
  { title: "Activities", url: "activities.html", content: "Activities initiatives Students internship Organisation of conference and workshops Publication of a journal" },
  { title: "Internship", url: "internship.html", content: "Internship Programme undergraduate postgraduate research students mentorship IIM IIT NIT Central Universities corporate Jindal Steel Stock Holding ICICI IDBI ITC Larsen Toubro 4 6 8 weeks Marketing Financial Human Resource Sports Emotional Intelligence" },
  { title: "Conference and workshops", url: "conference-and-workshops.html", content: "Conference and workshops Behavioural Research Foundation updates upcoming events" },
  { title: "Journal", url: "journal.html", content: "Journal publication peer-reviewed behavioural research science papers articles" },
  { title: "Awards", url: "awards.html", content: "Awards Lifetime Achievement Awards Best Teacher Awards Distinguished Teacher Awards Best Teacher in Rural Area Distinguished Researchers Awards" },
  { title: "Certification", url: "certification.html", content: "Certification programs behavioural finance allied disciplines undergraduate postgraduates PhD scholars working professionals duration online offline certificate" },
  { title: "List of Life Members", url: "list-of-life-members.html", content: "List of Life Members prestigious membership honour roll" },
  { title: "Membership", url: "membership.html", content: "Membership categories Annual Member 500 per annum Life Member 2500 one-time payment Honorary Member Institutional member" }
];

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  // Mobile Dropdown Click Handling
  const dropdownTriggers = document.querySelectorAll('.nav-item.has-dropdown > .nav-link');
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        const parent = trigger.parentElement;
        parent.classList.toggle('open');
      }
    });
  });

  // Search Modal Handling
  const searchBtn = document.querySelector('.search-btn');
  const searchModal = document.querySelector('.search-modal');
  const searchClose = document.querySelector('.search-close');
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');

  if (searchBtn && searchModal && searchClose && searchInput) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.add('active');
      searchInput.focus();
    });

    searchClose.addEventListener('click', () => {
      searchModal.classList.remove('active');
      searchInput.value = '';
      if (searchResults) searchResults.innerHTML = '';
    });

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        searchModal.classList.remove('active');
      }
    });

    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!searchResults) return;
      if (q.length < 2) {
        searchResults.innerHTML = '<div style="padding: 16px 20px; color: #888;">Type at least 2 letters to search...</div>';
        return;
      }

      const matches = searchPages.filter(p => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q));
      if (matches.length === 0) {
        searchResults.innerHTML = '<div style="padding: 16px 20px; color: #888;">No results found for "' + q + '".</div>';
      } else {
        searchResults.innerHTML = matches.map(m => `
          <a href="${m.url}" class="search-result-item">
            <div class="search-result-title">${m.title}</div>
            <div class="search-result-snippet">${m.content.slice(0, 110)}...</div>
          </a>
        `).join('');
      }
    });
  }
});
