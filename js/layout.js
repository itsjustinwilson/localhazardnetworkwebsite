/* =============================================
   Shared site header and footer
   Edit the markup here and every page picks it up.
   Use on a page with: <site-header></site-header> / <site-footer></site-footer>
   and load this file in <head> with a plain (non-defer) <script> tag.
   ============================================= */

// Section links are written as "index.html#..." so they work from any page.
// On the landing page itself they are rewritten to plain "#..." anchors so
// clicking them scrolls instead of reloading the page.
const isHomePage = /(^|\/)(index\.html)?$/.test(location.pathname);

function localiseLinks(root) {
  if (!isHomePage) return;
  root.querySelectorAll('a[href^="index.html"]').forEach(a => {
    a.setAttribute('href', a.getAttribute('href').replace(/^index\.html/, '') || '#');
  });
}

const NAV_LINKS = [
  ['index.html#about', 'About'],
  ['index.html#hazards', 'Hazards'],
  ['index.html#how-it-works', 'How It Works'],
  ['index.html#team', 'Team'],
  ['index.html#journey', 'Journey'],
  ['index.html#outputs', 'Outputs'],
];

const HEADER_HTML = `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="navbar-brand">
        <img src="images/branding/white-logo.png" alt="Local Hazards Network" class="navbar-logo" />
      </a>
      <button class="navbar-toggle" type="button" aria-label="Toggle menu" aria-expanded="false">
        <i class="fa-solid fa-bars" aria-hidden="true"></i>
      </button>
      <ul class="navbar-nav">
        ${NAV_LINKS.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join('')}
      </ul>
    </div>
  </nav>
`;

const FOOTER_HTML = `
  <footer class="footer">
    <!-- SVG Hills Landscape Banner -->
    <div class="footer-landscape-wrap" id="hazard-landscape-container">
      <!-- HTML Sky & Fire Glow Overlays for seamless, unclipped transitions -->
      <div class="sky-overlay sky-overlay--normal"></div>
      <div class="sky-overlay sky-overlay--storm"></div>
      <div class="sky-overlay sky-overlay--bushfire">
        <div class="sky-bushfire-glow"></div>
      </div>
      <svg class="footer-landscape-svg" viewBox="0 -20 1440 180" preserveAspectRatio="xMinYMax slice"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- LED Glow Filter -->
          <filter id="led-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <!-- Sky Background is rendered via HTML overlays behind the SVG -->

        <!-- Clouds Group -->
        <g class="clouds-group">
          <path class="cloud cloud-1"
            d="M200 70 a20 20 0 0 1 30 -5 a25 25 0 0 1 40 5 a20 20 0 0 1 10 15 a10 10 0 0 1 -10 10 h-70 a10 10 0 0 1 -10 -15 a15 15 0 0 1 10 -10 z"
            fill="#FFFFFF" />
          <path class="cloud cloud-2"
            d="M500 50 a15 15 0 0 1 20 -3 a20 20 0 0 1 30 3 a15 15 0 0 1 8 12 a8 8 0 0 1 -8 8 h-50 a8 8 0 0 1 -8 -12 a12 12 0 0 1 8 -8 z"
            fill="#FFFFFF" />
          <path class="cloud cloud-3"
            d="M900 65 a18 18 0 0 1 25 -4 a22 22 0 0 1 35 4 a18 18 0 0 1 9 13 a9 9 0 0 1 -9 9 h-60 a9 9 0 0 1 -9 -13 a14 14 0 0 1 9 -9 z"
            fill="#FFFFFF" />
        </g>

        <!-- Sun (Normal) / Fire Glow (Bushfire) -->
        <circle class="sun-orb" cx="1300" cy="45" r="18" fill="#FFC000" />

        <!-- Rain Group (Storm) -->
        <g class="rain-group" opacity="0">
          <!-- Deep/background drops (slower, thinner) -->
          <line class="rain-drop rain-slow" x1="100" y1="-30" x2="85" y2="-10" />
          <line class="rain-drop rain-slow" x1="250" y1="-30" x2="235" y2="-10" />
          <line class="rain-drop rain-slow" x1="400" y1="-30" x2="385" y2="-10" />
          <line class="rain-drop rain-slow" x1="550" y1="-30" x2="535" y2="-10" />
          <line class="rain-drop rain-slow" x1="700" y1="-30" x2="685" y2="-10" />
          <line class="rain-drop rain-slow" x1="850" y1="-30" x2="835" y2="-10" />
          <line class="rain-drop rain-slow" x1="1000" y1="-30" x2="985" y2="-10" />
          <line class="rain-drop rain-slow" x1="1150" y1="-30" x2="1135" y2="-10" />
          <line class="rain-drop rain-slow" x1="1300" y1="-30" x2="1285" y2="-10" />

          <!-- Mid/foreground drops (faster, thicker) -->
          <line class="rain-drop rain-fast" x1="50" y1="-40" x2="30" y2="-10" />
          <line class="rain-drop rain-fast" x1="175" y1="-40" x2="155" y2="-10" />
          <line class="rain-drop rain-fast" x1="300" y1="-40" x2="280" y2="-10" />
          <line class="rain-drop rain-fast" x1="425" y1="-40" x2="405" y2="-10" />
          <line class="rain-drop rain-fast" x1="600" y1="-40" x2="580" y2="-10" />
          <line class="rain-drop rain-fast" x1="750" y1="-40" x2="730" y2="-10" />
          <line class="rain-drop rain-fast" x1="900" y1="-40" x2="880" y2="-10" />
          <line class="rain-drop rain-fast" x1="1050" y1="-40" x2="1030" y2="-10" />
          <line class="rain-drop rain-fast" x1="1200" y1="-40" x2="1180" y2="-10" />
          <line class="rain-drop rain-fast" x1="1350" y1="-40" x2="1330" y2="-10" />
        </g>

        <!-- Lightning Bolt (Storm) - aligned close to sensor (x=460-520) -->
        <path class="lightning-bolt" d="M500 -10 L470 70 L500 65 L460 140 L475 140 L450 200" stroke="#fef08a"
          stroke-width="2.5" fill="none" opacity="0" filter="url(#led-glow)" />

        <!-- Wind Lines -->
        <g class="wind-group">
          <path class="wind-line wind-1" d="M-100 80 Q 200 60, 500 80 T 1100 70 T 1600 80" stroke="rgba(255,255,255,0)"
            stroke-width="1.5" fill="none" stroke-dasharray="80 300" />
          <path class="wind-line wind-2" d="M-100 110 Q 300 130, 700 110 T 1500 120" stroke="rgba(255,255,255,0)"
            stroke-width="1.2" fill="none" stroke-dasharray="100 400" />
        </g>

        <!-- Parallax Hills -->
        <!-- Back Hill -->
        <path class="hill-back" d="M0 70 Q 220 35, 480 75 T 950 65 T 1440 80 L 1440 180 L 0 180 Z" fill="#114C7E" />

        <!-- Mid Hill -->
        <path class="hill-mid" d="M0 100 Q 320 65, 620 95 T 1220 85 Q 1330 70, 1440 92 L 1440 180 L 0 180 Z" fill="#0D3B5E" />

        <!-- Front Hill (matches footer background var(--navy)) -->
        <path class="hill-front" d="M0 130 Q 260 105, 560 135 T 1120 115 Q 1280 84, 1440 108 L 1440 180 L 0 180 Z"
          fill="#0D2B45" />

        <!-- Distant trees on the Mid Hill (poster style) -->
        <g class="mid-trees" fill="#0C3150" stroke="#0C3150">
          <line x1="156.4" y1="88.7" x2="156.4" y2="80.1" stroke-width="0.9" />
          <circle cx="156.9" cy="75.1" r="3.6" />
          <circle cx="153.6" cy="78.1" r="3" />
          <circle cx="159.9" cy="77.6" r="3.2" />
          <circle cx="154.2" cy="72.8" r="2.6" />
          <line x1="170.3" y1="87.9" x2="170.3" y2="77.5" stroke-width="0.9" />
          <circle cx="169.7" cy="72.5" r="4" />
          <circle cx="167" cy="74.8" r="2.8" />
          <circle cx="173.8" cy="74.9" r="3.3" />
          <line x1="181.2" y1="87.3" x2="181.2" y2="78.7" stroke-width="0.8" />
          <circle cx="181.7" cy="74.7" r="3" />
          <circle cx="178.4" cy="76.7" r="2.7" />
          <circle cx="184.1" cy="76.4" r="2.4" />
          <circle cx="182.9" cy="72.4" r="2" />
          <line x1="745.2" y1="106.5" x2="745.2" y2="98.9" stroke-width="0.8" />
          <circle cx="745.3" cy="94.8" r="3.2" />
          <circle cx="742.5" cy="96.7" r="2.5" />
          <circle cx="747.8" cy="96.5" r="2.7" />
          <line x1="754.8" y1="106.9" x2="754.8" y2="97.4" stroke-width="0.8" />
          <circle cx="754.6" cy="93.2" r="3" />
          <circle cx="752.2" cy="95.5" r="2.6" />
          <circle cx="757.4" cy="95" r="2.9" />
          <circle cx="756.6" cy="90.9" r="1.9" />
          <line x1="765.8" y1="107.4" x2="765.8" y2="96.9" stroke-width="1" />
          <circle cx="765.2" cy="91.8" r="4" />
          <circle cx="762.7" cy="94.7" r="3.4" />
          <circle cx="769.1" cy="94.9" r="3.2" />
          <circle cx="763.5" cy="88.8" r="2.5" />
          <line x1="776.2" y1="107.9" x2="776.2" y2="100.9" stroke-width="0.7" />
          <circle cx="776.4" cy="97.2" r="3.1" />
          <circle cx="774" cy="98.9" r="2.1" />
          <circle cx="778.9" cy="99" r="2.5" />
          <circle cx="774.8" cy="95" r="1.9" />
          <line x1="1174.4" y1="92.7" x2="1174.4" y2="84.2" stroke-width="0.7" />
          <circle cx="1174.4" cy="80.4" r="2.9" />
          <circle cx="1172.4" cy="82.3" r="2.3" />
          <circle cx="1176.4" cy="82.4" r="2.5" />
          <circle cx="1175.7" cy="78.5" r="1.8" />
          <line x1="1186.5" y1="91.2" x2="1186.5" y2="83.1" stroke-width="0.7" />
          <circle cx="1186.8" cy="79.3" r="2.7" />
          <circle cx="1184.4" cy="81.3" r="2.6" />
          <circle cx="1188.8" cy="81.2" r="2.5" />
          <circle cx="1187.7" cy="77.2" r="2.1" />
        </g>

        <!-- Foreground Details (Fence, Sensor Node) running from left edge (x=0) to x=560 -->
        <g class="fence" stroke="#081D2E" stroke-width="1.5" fill="none">
          <!-- Upper wire (straight lines) -->
          <path d="M0 125 L80 117 L160 112 L240 110 L320 112 L400 116 L480 122 L560 130" />
          <!-- Lower wire (straight lines) -->
          <path d="M0 131 L80 123 L160 118 L240 116 L320 118 L400 122 L480 128 L560 136" />

          <!-- Vertically aligned posts -->
          <line x1="0" y1="122" x2="0" y2="144" stroke-width="2.5" />
          <line x1="80" y1="114" x2="80" y2="136" stroke-width="2.5" />
          <line x1="160" y1="109" x2="160" y2="131" stroke-width="2.5" />
          <line x1="240" y1="107" x2="240" y2="129" stroke-width="2.5" />
          <line x1="320" y1="109" x2="320" y2="131" stroke-width="2.5" />
          <line x1="400" y1="113" x2="400" y2="135" stroke-width="2.5" />
          <line x1="480" y1="112" x2="480" y2="142" stroke-width="2.5" />
          <line x1="560" y1="127" x2="560" y2="149" stroke-width="2.5" />
        </g>

        <!-- Sensor Node mounted on post 480 (matches images/sensor-node-diagram.png) -->
        <!-- Scaled to 80% about the mast base (480, 144) -->
        <g class="sensor-node" transform="translate(96 28.8) scale(0.8)">
          <!-- Mast -->
          <rect x="479" y="102" width="2.2" height="42" fill="#E2E8F0" />
          <!-- Anemometer -->
          <line x1="480.1" y1="99" x2="480.1" y2="93" stroke="#475569" stroke-width="1" />
          <line x1="477" y1="92.6" x2="483.2" y2="92.6" stroke="#475569" stroke-width="0.8" />
          <circle cx="477" cy="92.6" r="1.1" fill="#475569" />
          <circle cx="480.1" cy="92" r="1.1" fill="#475569" />
          <circle cx="483.2" cy="92.6" r="1.1" fill="#475569" />
          <!-- Solar panel -->
          <polygon points="465.5,100 467.5,95.6 474.6,95 475.4,99.4" fill="#6B7FBF" stroke="#E2E8F0" stroke-width="0.6" />
          <!-- Logger box -->
          <rect x="485" y="94.2" width="7" height="5" fill="#E5E7EB" stroke="#94A3B8" stroke-width="0.4" />
          <!-- Mounting tray and crossbar -->
          <rect x="464.8" y="99.3" width="30.6" height="1.5" fill="#111827" />
          <rect x="464" y="100.6" width="32" height="3" rx="1.5" fill="#E2E8F0" />
          <!-- Radiation shield -->
          <rect x="474" y="103.6" width="4.2" height="4.6" rx="0.8" fill="#E2E8F0" />
          <g stroke="#94A3B8" stroke-width="0.4">
            <line x1="474" y1="105.1" x2="478.2" y2="105.1" />
            <line x1="474" y1="106.6" x2="478.2" y2="106.6" />
          </g>
          <!-- Electronics enclosure -->
          <rect x="481.2" y="104" width="3.8" height="8" rx="0.4" fill="#E5E7EB" stroke="#94A3B8" stroke-width="0.4" />
          <g class="sensor-led">
            <circle cx="483.1" cy="106.2" r="2.4" fill="#ef4444" opacity="0.3" />
            <circle cx="483.1" cy="106.2" r="1.3" fill="#ef4444" />
          </g>
        </g>
        <!-- Trees on the Front Hill (poster style) -->
        <g class="front-trees" fill="#081D2E" stroke="#081D2E">
          <line x1="35.8" y1="128.8" x2="35.8" y2="114.2" stroke-width="1.5" />
          <circle cx="35.8" cy="106" r="6.4" />
          <circle cx="31" cy="109.8" r="5.1" />
          <circle cx="41.2" cy="109.4" r="5.3" />
          <line x1="56.7" y1="127.2" x2="56.7" y2="109.3" stroke-width="1.6" />
          <circle cx="56.1" cy="100.8" r="6.9" />
          <circle cx="50.5" cy="104.3" r="5.5" />
          <circle cx="61.7" cy="105.2" r="5.3" />
          <line x1="70.5" y1="126.3" x2="70.5" y2="112.6" stroke-width="1.5" />
          <circle cx="71.4" cy="104.8" r="5.7" />
          <circle cx="65" cy="108.8" r="5.1" />
          <circle cx="75.1" cy="109.2" r="4.7" />
          <line x1="276.9" y1="120.8" x2="276.9" y2="109.2" stroke-width="1.2" />
          <circle cx="276.8" cy="102.6" r="4.8" />
          <circle cx="272.8" cy="106.4" r="4.1" />
          <circle cx="281.1" cy="106" r="4.6" />
          <line x1="291.7" y1="121" x2="291.7" y2="108.8" stroke-width="1.3" />
          <circle cx="291.6" cy="101.7" r="5.6" />
          <circle cx="286.9" cy="105.9" r="4.3" />
          <circle cx="296.6" cy="105.8" r="4.8" />
          <line x1="308" y1="121.3" x2="308" y2="110.2" stroke-width="1.2" />
          <circle cx="307.6" cy="104" r="4.3" />
          <circle cx="303.7" cy="107.1" r="3.6" />
          <circle cx="312.4" cy="107" r="3.7" />
          <circle cx="306.1" cy="101.4" r="3.2" />
          <line x1="325.7" y1="121.8" x2="325.7" y2="108" stroke-width="1.3" />
          <circle cx="325.6" cy="101.1" r="5.6" />
          <circle cx="321.2" cy="104.3" r="4" />
          <circle cx="330.6" cy="104.5" r="4.6" />
          <circle cx="323.7" cy="97.2" r="3.2" />
          <line x1="602.4" y1="140.9" x2="602.4" y2="124.7" stroke-width="1.4" />
          <circle cx="602.4" cy="117.5" r="5.6" />
          <circle cx="598" cy="121.5" r="4.3" />
          <circle cx="607.2" cy="121.1" r="4.3" />
          <circle cx="599.3" cy="113.6" r="3.3" />
          <line x1="618.6" y1="142.1" x2="618.6" y2="132.4" stroke-width="1" />
          <circle cx="618.6" cy="126.8" r="3.9" />
          <circle cx="614.9" cy="129.6" r="3.4" />
          <circle cx="621.8" cy="129.1" r="3.5" />
          <circle cx="620.5" cy="124.7" r="2.7" />
          <line x1="944.7" y1="141.2" x2="944.7" y2="127.1" stroke-width="1.4" />
          <circle cx="944.9" cy="119.7" r="5.8" />
          <circle cx="940.3" cy="123.8" r="4.6" />
          <circle cx="949.3" cy="123.2" r="4.7" />
          <line x1="965.3" y1="139.3" x2="965.3" y2="126.6" stroke-width="1.2" />
          <circle cx="965.7" cy="120.1" r="4.9" />
          <circle cx="961.5" cy="123.4" r="4.1" />
          <circle cx="968.9" cy="123.2" r="4.1" />
          <line x1="984.3" y1="137.4" x2="984.3" y2="122.2" stroke-width="1.3" />
          <circle cx="984.1" cy="115.4" r="5.5" />
          <circle cx="979.6" cy="118.5" r="4.1" />
          <circle cx="988.1" cy="119.2" r="4.5" />
          <line x1="1264.2" y1="100.2" x2="1264.2" y2="88.5" stroke-width="1.2" />
          <circle cx="1264.3" cy="82" r="4.5" />
          <circle cx="1260.5" cy="85.6" r="3.7" />
          <circle cx="1267.8" cy="84.7" r="4.5" />
          <circle cx="1262" cy="78.3" r="3" />
          <line x1="1278.6" y1="99.8" x2="1278.6" y2="88.7" stroke-width="1.2" />
          <circle cx="1278.6" cy="82.5" r="4.9" />
          <circle cx="1275" cy="85.3" r="3.5" />
          <circle cx="1283.1" cy="85.6" r="4" />
          <circle cx="1275.8" cy="80.3" r="3" />
        </g>
      </svg>
    </div>

    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <img src="images/branding/white-logo.png" alt="Local Hazards Network" class="footer-logo" />
          <p>
            A 2026 ENGN4300 Capstone Design Project at the Australian National University,
            School of Engineering. Part of the NEMA Disaster Ready Fund initiative,
            with our work handed over to future teams.
          </p>
          <div class="hazard-simulator">
            <span class="simulator-label">Simulate Environmental Hazard:</span>
            <div class="simulator-buttons">
              <button class="sim-btn active" data-hazard="normal" title="Normal weather conditions"><i class="fa-solid fa-sun" aria-hidden="true"></i> Clear</button>
              <button class="sim-btn" data-hazard="storm"
                title="Simulate high rainfall, storms, and floods"><i class="fa-solid fa-cloud-showers-heavy" aria-hidden="true"></i> Storm</button>
              <button class="sim-btn" data-hazard="bushfire"
                title="Simulate extreme heat and bushfire risk"><i class="fa-solid fa-fire" aria-hidden="true"></i> Bushfire</button>
            </div>
          </div>
        </div>

        <div class="footer-col">
          <h4>Sections</h4>
          <ul>
            ${NAV_LINKS.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join('')}
            <li><a href="index.html#log">Project Log</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Documents</h4>
          <ul>
            <li><a
                href="https://anu365.sharepoint.com/:w:/r/sites/LoRaCapstone/Shared%20Documents/Repository/Audits/Audit%203/Concept%20of%20Operations.docx?d=w435b33f3d20447d0b489eeda4df4c07a&csf=1&web=1&e=invOeD"
                target="_blank" rel="noopener">Concept of Operations</a></li>
            <li><a
                href="https://anu365.sharepoint.com/:f:/r/sites/LoRaCapstone/Shared%20Documents/Repository?csf=1&web=1&e=XXRxaj"
                target="_blank" rel="noopener">Project Repository</a></li>
            <li><a href="showcase.html">Video Showcase</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <span>&copy; 2026 Local Hazards Network &middot; Australian National University</span>
        <span class="footer-names">
          Ken Doan<span class="sep">&bull;</span>Grady Emerson<span class="sep">&bull;</span>Ruby Fusca<span class="sep">&bull;</span>Kyle Greenwood<span class="sep">&bull;</span>Kai Pietschner<span class="sep">&bull;</span>Justin Wilson
        </span>
      </div>
    </div>
  </footer>
`;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = HEADER_HTML;
    localiseLinks(this);
    this.initMobileMenu();
  }

  // Collapsible nav on narrow screens
  initMobileMenu() {
    const navbar = this.querySelector('.navbar');
    const toggle = this.querySelector('.navbar-toggle');
    const setOpen = open => {
      navbar.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', () => setOpen(!navbar.classList.contains('is-open')));
    this.querySelectorAll('.navbar-nav a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = FOOTER_HTML;
    localiseLinks(this);
    this.initHazardSimulator();
    this.initHillParallax();
  }

  // Distant hills lag behind the scroll, settling into place at the bottom of the page
  initHillParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const landscape = this.querySelector('.footer-landscape-wrap');
    const layers = [
      { els: this.querySelectorAll('.hill-back'), depth: 19 },
      { els: this.querySelectorAll('.hill-mid, .mid-trees'), depth: 10 },
    ];
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const start = landscape.getBoundingClientRect().top + window.scrollY - vh;
      const end = document.documentElement.scrollHeight - vh;
      const progress = end > start ? Math.min(Math.max((window.scrollY - start) / (end - start), 0), 1) : 1;
      layers.forEach(({ els, depth }) => {
        const offset = -(1 - progress) * depth;
        els.forEach(el => { el.style.transform = `translateY(${offset.toFixed(2)}px)`; });
      });
    };

    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    update();
  }

  // Hazard landscape weather simulator
  initHazardSimulator() {
    const simButtons = this.querySelectorAll('.sim-btn');
    const landscapeContainer = this.querySelector('#hazard-landscape-container');

    simButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        simButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        // Reset class list of container to base landscape class
        landscapeContainer.className = 'footer-landscape-wrap';

        // Add weather class corresponding to hazard selection
        const hazard = btn.getAttribute('data-hazard');
        if (hazard === 'storm') {
          landscapeContainer.classList.add('weather-storm');
        } else if (hazard === 'bushfire') {
          landscapeContainer.classList.add('weather-bushfire');
        }
      });
    });
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
