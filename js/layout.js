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

const HEADER_HTML = `
  <nav class="navbar">
    <div class="container">
      <a href="index.html" class="navbar-brand">
        <img src="images/branding/white-logo.png" alt="Local Hazards Network" class="navbar-logo" />
      </a>
      <ul class="navbar-nav">
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#workstreams">Workstreams</a></li>
        <li><a href="index.html#team">Team</a></li>
        <li><a href="index.html#deliverables">Deliverables</a></li>
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
          <!-- Sky Gradients -->
          <linearGradient id="sky-normal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0d2b45" />
            <stop offset="100%" stop-color="#0b243a" />
          </linearGradient>
          <linearGradient id="sky-storm" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0d2b45" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>
          <linearGradient id="sky-bushfire" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0d2b45" />
            <stop offset="50%" stop-color="#7c2d12" />
            <stop offset="100%" stop-color="#451a03" />
          </linearGradient>

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
            fill="rgba(255,255,255,0.08)" />
          <path class="cloud cloud-2"
            d="M500 50 a15 15 0 0 1 20 -3 a20 20 0 0 1 30 3 a15 15 0 0 1 8 12 a8 8 0 0 1 -8 8 h-50 a8 8 0 0 1 -8 -12 a12 12 0 0 1 8 -8 z"
            fill="rgba(255,255,255,0.05)" />
          <path class="cloud cloud-3"
            d="M900 65 a18 18 0 0 1 25 -4 a22 22 0 0 1 35 4 a18 18 0 0 1 9 13 a9 9 0 0 1 -9 9 h-60 a9 9 0 0 1 -9 -13 a14 14 0 0 1 9 -9 z"
            fill="rgba(255,255,255,0.07)" />
        </g>

        <!-- Sun (Normal) / Fire Glow (Bushfire) -->
        <circle class="sun-orb" cx="1300" cy="50" r="15" fill="#fef08a" opacity="0.15" />

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
        <path class="hill-back" d="M0 70 Q 220 35, 480 75 T 950 65 T 1440 80 L 1440 180 L 0 180 Z" fill="#0b243a" />

        <!-- Mid Hill -->
        <path class="hill-mid" d="M0 100 Q 320 65, 620 95 T 1220 85 T 1440 110 L 1440 180 L 0 180 Z" fill="#092033" />

        <!-- Front Hill (Matches footer background var(--navy-deep)) -->
        <path class="hill-front" d="M0 130 Q 260 105, 560 135 T 1120 115 T 1440 140 L 1440 180 L 0 180 Z"
          fill="#081d2e" />

        <!-- Eucalyptus trees on Mid Hill -->
        <g class="mid-trees" fill="#071929">
          <path d="M150 100 L160 100 L157 85 L163 85 L155 65 L147 85 L153 85 Z" />
          <path d="M220 103 L228 103 L225 90 L230 90 L224 72 L218 90 L222 90 Z" />
          <path d="M600 95 L608 95 L605 81 L610 81 L604 63 L598 81 L602 81 Z" />
          <path d="M630 96 L638 96 L635 82 L640 82 L634 64 L628 82 L632 82 Z" />
          <path d="M820 93 L828 93 L825 79 L830 79 L824 61 L818 79 L822 79 Z" />
          <path d="M850 94 L858 94 L855 80 L860 80 L854 62 L848 80 L852 80 Z" />
          <path d="M1200 96 L1208 96 L1205 83 L1210 83 L1204 67 L1198 83 L1202 83 Z" />
          <path d="M1270 94 L1278 94 L1275 80 L1280 80 L1274 62 L1268 80 L1272 80 Z" />
        </g>

        <!-- Foreground Details (Fence, Trees, Sensor Node) running from left edge (x=0) to x=560 -->
        <g class="fence" stroke="#05131f" stroke-width="1.5" fill="none">
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

        <!-- Sensor Node mounted on post 480 -->
        <g class="sensor-node">
          <rect x="475" y="117" width="10" height="13" rx="1" fill="#475569" stroke="#1e293b" stroke-width="1" />
          <line x1="480" y1="117" x2="480" y2="105" stroke="#94a3b8" stroke-width="1" />
          <circle cx="480" cy="105" r="1.2" fill="#94a3b8" />
          <line x1="473" y1="116" x2="487" y2="114" stroke="#0f172a" stroke-width="1.8" />
          <circle class="sensor-led" cx="480" cy="123" r="1.5" fill="#22c55e" filter="url(#led-glow)" />
        </g>

        <!-- Foreground Tree Silhouettes (positioned for balance and left-align mobile framing) -->
        <g class="front-trees" fill="#040e17">
          <!-- Far Left Tree -->
          <circle cx="100" cy="105" r="12" />
          <circle cx="93" cy="117" r="10" />
          <circle cx="107" cy="115" r="10" />
          <line x1="100" y1="145" x2="100" y2="115" stroke="#040e17" stroke-width="2.5" />

          <!-- Mid-Left Tree (near center-mobile) -->
          <circle cx="340" cy="102" r="12" />
          <circle cx="333" cy="114" r="10" />
          <circle cx="347" cy="112" r="10" />
          <line x1="340" y1="142" x2="340" y2="112" stroke="#040e17" stroke-width="2.5" />

          <!-- Mid-Right Tree -->
          <circle cx="750" cy="98" r="12" />
          <circle cx="743" cy="110" r="10" />
          <circle cx="757" cy="108" r="10" />
          <line x1="750" y1="138" x2="750" y2="108" stroke="#040e17" stroke-width="2.5" />

          <!-- Far Right Tree -->
          <circle cx="1200" cy="106" r="12" />
          <circle cx="1193" cy="118" r="10" />
          <circle cx="1207" cy="116" r="10" />
          <line x1="1200" y1="146" x2="1200" y2="116" stroke="#040e17" stroke-width="2.5" />
        </g>
      </svg>
    </div>

    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <img src="images/branding/white-logo.png" alt="Local Hazards Network" class="footer-logo" />
          <p>
            An ENGN4300 Capstone Design Project at the Australian National University,
            School of Engineering / College of Systems and Society. Part of the
            NEMA Disaster Ready Fund initiative, funded until March 2028.
          </p>
          <div class="hazard-simulator">
            <span class="simulator-label">Simulate Environmental Hazard</span>
            <div class="simulator-buttons">
              <button class="sim-btn active" data-hazard="normal" title="Normal weather conditions">No Hazards</button>
              <button class="sim-btn" data-hazard="storm"
                title="Simulate high rainfall, storms, and floods">Storm</button>
              <button class="sim-btn" data-hazard="bushfire"
                title="Simulate extreme heat and bushfire risk">Bushfire</button>
            </div>
          </div>
        </div>

        <div class="footer-col">
          <h4>Sections</h4>
          <ul>
            <li><a href="index.html#about">About the Project</a></li>
            <li><a href="index.html#workstreams">Workstreams</a></li>
            <li><a href="index.html#team">Team</a></li>
            <li><a href="index.html#deliverables">Deliverables</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Documents</h4>
          <ul>
            <li><a
                href="https://anu365.sharepoint.com/:w:/r/sites/LoRaCapstone/Shared%20Documents/Repository/Audits/Audit%202/Concept%20of%20Operations.docx?d=w51f9f8e7baa64e678b7b202a949ac278&csf=1&web=1&e=UumYg4"
                target="_blank" rel="noopener">Concept of Operations</a></li>
            <li><a
                href="https://anu365.sharepoint.com/:f:/r/sites/LoRaCapstone/Shared%20Documents/Repository?csf=1&web=1&e=XXRxaj"
                target="_blank" rel="noopener">Project Repository</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <span>
          &copy; 2026 Local Hazards Network Capstone Team
        </span>
        <span>
          Grady Emerson &middot; Ken Doan &middot; Ruby Fusca &middot;
          Kyle Greenwood &middot; Kai Pietschner &middot; Justin Wilson
        </span>
      </div>
    </div>
  </footer>
`;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = HEADER_HTML;
    localiseLinks(this);
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = FOOTER_HTML;
    localiseLinks(this);
    this.initHazardSimulator();
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
