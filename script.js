/* =====================================================
   Harsh Mirchandani — Portfolio JS
   ===================================================== */

// DATA
const SKILLS = [
  { name: 'Artificial Intelligence & ML', level: 98, category: 'AI' },
  { name: 'Deep Learning (PyTorch, TensorFlow)', level: 97, category: 'AI' },
  { name: 'Large Language Models & Transformers', level: 95, category: 'AI' },
  { name: 'Computer Vision', level: 93, category: 'AI' },
  { name: 'Cloud Computing (AWS, Azure, GCP)', level: 94, category: 'Cloud' },
  { name: 'Cybersecurity & Red Team Ops', level: 90, category: 'Security' },
  { name: 'Full-Stack Development', level: 92, category: 'Engineering' },
  { name: 'Data Science & Big Data', level: 94, category: 'Data' },
  { name: 'DevOps & System Design', level: 91, category: 'Engineering' },
  { name: 'Distributed Training & MLOps', level: 93, category: 'AI' },
];

const TECH = ['Python','PyTorch','TensorFlow','JAX','CUDA','Rust','Swift','TypeScript','React','Node.js','Go','Kubernetes','Docker','AWS','GCP','Azure','Spark','Kafka','PostgreSQL','Redis'];

const EXPERIENCE = [
  {
    company: 'Apple', role: 'Senior AI Engineer', period: '2024 — Present', location: 'Cupertino, CA',
    description: 'Leading core research and engineering for on-device intelligence shipping across iPhone, iPad, and Mac. Designed privacy-preserving LLM architectures and low-latency inference kernels deployed to over a billion devices.',
    highlights: ['Architected a 3B-parameter on-device foundation model with sub-50ms latency','Led a team of 14 researchers across Cupertino and Zurich','Filed 7 patents in compression, quantization, and secure inference'],
  },
  {
    company: 'Google', role: 'AI Engineer & Research Scientist', period: '2022 — 2024', location: 'Mountain View, CA',
    description: 'Core contributor to Gemini training infrastructure and safety-aligned reinforcement learning. Scaled distributed training systems to tens of thousands of TPU chips.',
    highlights: ['Built mixture-of-experts routing that cut training cost by 34%','Co-authored 4 NeurIPS/ICML papers on scalable alignment','Mentored 20+ engineers and research residents'],
  },
  {
    company: 'Microsoft', role: 'Cloud & AI Specialist', period: '2020 — 2022', location: 'Redmond, WA',
    description: 'Delivered enterprise-grade AI services on Azure, with focus on secure inference pipelines, hybrid cloud orchestration, and Copilot-adjacent product surfaces.',
    highlights: ['Designed the autoscaling stack for a flagship Azure AI service','Reduced cross-region inference latency by 61%','Drove adoption across 400+ enterprise customers'],
  },
];

const PROJECTS = [
  { title: 'NeuralForge — Autonomous AI Agents', tag: 'AI Automation', description: 'A production-grade multi-agent orchestration framework that composes specialized LLMs to solve open-ended engineering tasks. Powers internal tooling across three Fortune 50 companies.', tech: ['Python','PyTorch','LangGraph','Redis','Kubernetes'] },
  { title: 'Sentinel — Adversarial Red Team Platform', tag: 'Cybersecurity', description: 'Full-spectrum offensive security platform that simulates APT-level attack chains against ML systems, cloud infra, and web applications with automated reporting.', tech: ['Rust','Go','eBPF','Terraform','AWS'] },
  { title: 'Helios — Distributed Training Fabric', tag: 'Cloud AI', description: 'Cloud-native training platform that orchestrates trillion-parameter model runs across heterogeneous GPU/TPU clusters with elastic scheduling and fault-tolerant checkpoints.', tech: ['Python','JAX','CUDA','Ray','GCP'] },
  { title: 'Atlas — Real-time Vision Intelligence', tag: 'Computer Vision', description: 'Edge-optimized computer vision stack running at 120 FPS on consumer hardware. Used for industrial QA, autonomous inspection, and AR passthrough pipelines.', tech: ['C++','CoreML','Metal','PyTorch','ONNX'] },
  { title: 'Aegis — Privacy-Preserving ML', tag: 'Privacy & Security', description: 'Federated learning and homomorphic encryption toolkit letting enterprises train on sensitive data without ever exposing it. Adopted in healthcare and fintech pilots.', tech: ['Python','TensorFlow Federated','Rust','Azure'] },
  { title: 'Cortex — Enterprise RAG Engine', tag: 'LLM Systems', description: 'A retrieval-augmented generation platform serving billions of queries with sub-200ms latency and strict factual-grounding guarantees for regulated industries.', tech: ['Python','FastAPI','PostgreSQL','Pinecone','AWS'] },
];

const ACHIEVEMENTS = [
  { year: '2025', icon: 'crown', title: 'Forbes 30 Under 30 — Enterprise Tech', description: 'Recognized for pioneering work in on-device foundation models and privacy-first AI systems.' },
  { year: '2024', icon: 'trophy', title: 'Apple Design Award — Engineering Excellence', description: 'Awarded for technical leadership on a flagship intelligence feature shipped to a billion-plus devices.' },
  { year: '2024', icon: 'award', title: 'NeurIPS Outstanding Paper Award', description: "Co-authored paper on efficient mixture-of-experts scaling recognized as one of the year's best." },
  { year: '2023', icon: 'star', title: 'MIT Technology Review — Innovator Under 35', description: "Named among the year's most influential young technologists shaping the future of intelligent systems." },
  { year: '2023', icon: 'medal', title: 'Google Research Excellence Award', description: 'Received for contributions to large-scale distributed training infrastructure powering Gemini.' },
  { year: '2022', icon: 'flame', title: 'World Economic Forum Young Global Leader', description: 'Selected for impact at the intersection of artificial intelligence, policy, and global innovation.' },
];

// ========== RENDER ==========
function renderMarquee() {
  const track = document.getElementById('marqueeTrack');
  const items = [...TECH, ...TECH];
  track.innerHTML = items.map(t => `<span>${t}</span>`).join('');
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-item reveal">
      <div class="skill-head">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-bar"><div class="skill-fill" data-level="${s.level}"></div></div>
      <div class="skill-cat">${s.category}</div>
    </div>
  `).join('');
}

function renderTimeline() {
  const tl = document.getElementById('timeline');
  tl.innerHTML = EXPERIENCE.map(e => `
    <div class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="tl-card glass">
        <div class="tl-head">
          <div>
            <div class="tl-company"><i data-lucide="briefcase"></i> ${e.company}</div>
            <div class="tl-role">${e.role}</div>
            <div class="tl-loc"><i data-lucide="map-pin"></i> ${e.location}</div>
          </div>
          <div class="tl-period">${e.period}</div>
        </div>
        <p class="tl-desc">${e.description}</p>
        <ul class="tl-list">
          ${e.highlights.map(h => `<li><i data-lucide="check"></i><span>${h}</span></li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card glass reveal">
      <div class="project-head">
        <span class="project-tag">${p.tag}</span>
        <span class="project-arrow"><i data-lucide="arrow-up-right"></i></span>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
    </article>
  `).join('');
}

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  grid.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="ach-card glass reveal">
      <div class="ach-head">
        <div class="ach-icon"><i data-lucide="${a.icon}"></i></div>
        <span class="ach-year">${a.year}</span>
      </div>
      <h3 class="ach-title">${a.title}</h3>
      <p class="ach-desc">${a.description}</p>
    </div>
  `).join('');
}

// ========== INTERACTIONS ==========
function initNavbar() {
  const nav = document.getElementById('navbar');
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  });
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // animate skill bars when visible
        entry.target.querySelectorAll?.('.skill-fill').forEach(el => {
          el.style.width = el.dataset.level + '%';
        });
        if (entry.target.classList.contains('skill-item')) {
          const fill = entry.target.querySelector('.skill-fill');
          if (fill) fill.style.width = fill.dataset.level + '%';
        }
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initToTop() {
  document.getElementById('toTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function showToast(message, type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = message;
  t.className = 'toast show' + (type === 'error' ? ' error' : '');
  setTimeout(() => t.classList.remove('show'), 3200);
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.email || !data.message) {
      showToast('Please fill in all fields.', 'error');
      return;
    }
    const messages = JSON.parse(localStorage.getItem('hm_messages') || '[]');
    messages.unshift({ ...data, at: new Date().toISOString() });
    localStorage.setItem('hm_messages', JSON.stringify(messages));
    form.reset();
    showToast('Message sent — I will get back to you shortly.');
  });
}

function initYear() {
  document.getElementById('copyYear').textContent = `© ${new Date().getFullYear()} Harsh Mirchandani — All rights reserved.`;
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  renderMarquee();
  renderSkills();
  renderTimeline();
  renderProjects();
  renderAchievements();
  initNavbar();
  initToTop();
  initContactForm();
  initYear();
  // Init Lucide icons (after DOM render)
  if (window.lucide) lucide.createIcons();
  // Init reveals slightly after, so icons are present
  setTimeout(initReveal, 50);
});