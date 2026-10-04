(() => {
  'use strict';

  /* ---------- Contact channels ----------
     EDIT THESE TWO LINES with your real WhatsApp number and email address.
     Every "contact us" link on the site is built from these two constants,
     so a visitor without WhatsApp always has an email option next to it. */
  const WA = '2347087684676';
  const EMAIL = 'digitasoln@gmail.com';

  const wa = t => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
  const mail = (subject, body) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body || '')}`;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasIO = 'IntersectionObserver' in window;
  if (hasIO && !reduce) document.documentElement.classList.add('js');

  const P = {
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
    scale: '<path d="M12 3v18M5 21h14M4 7h16M6 7l-3 7a3 3 0 0 0 6 0zM18 7l-3 7a3 3 0 0 0 6 0z"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    church: '<path d="M12 2v6M9 5h6"/><path d="M5 22V12l7-4 7 4v10z"/><path d="M10 22v-5h4v5"/>',
    truck: '<rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    wallet: '<rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>',
    zap: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
    phone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>'
  };
  const svg = (n, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${P[n]}</svg>`;
  const waIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P.chat}</svg>`;
  const mailIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P.mail}</svg>`;

  /* Small reusable helper: a WhatsApp button plus a compact "email us" icon button,
     used everywhere a WhatsApp-only CTA used to sit alone. */
  function contactRow(waText, subject, body, waLabel = 'Get This Website', waClass = 'btn-card') {
    return `<div class="contact-row">
      <a class="btn ${waClass}" href="${wa(waText)}" target="_blank" rel="noopener">${waIcon}${waLabel}</a>
      <a class="btn-icon" href="${mail(subject, body)}" target="_blank" rel="noopener" aria-label="Email us instead" title="Email us instead">${mailIcon}</a>
    </div>`;
  }

  /* ---------- Tagline band ---------- */
  const unit = '<span>INNOVATE</span><span class="sep">•</span><span>SOLVE</span><span class="sep">•</span><span>ELEVATE</span><span class="sep">•</span>';
  $('#track').innerHTML = unit.repeat(8);

  /* ---------- Services ---------- */
  const SERVICES = [
    ['briefcase', 'Business / Corporate Website', 'A professional business website builds trust and brings you more customers 24/7. Your business will look legit and people will contact you instead of your competitor.'],
    ['cart', 'E-commerce / Online Store', 'Sell your products online while you sleep. Accept payments, manage orders, and reach customers all over Nigeria and the world.'],
    ['flag', 'Politician / Campaign Website', 'Win more supporters. Share your manifesto, achievements, events, and let people donate and volunteer. Look like a serious leader people can trust.'],
    ['scale', 'Lawyer / Law Firm Website', 'Attract high-paying clients. Show your expertise, practice areas, and let clients book consultations online. Look professional and credible.'],
    ['book', 'School Website (Primary, Secondary, University)', 'Make parents trust your school. Post admissions, results, news, fees, and gallery. Reduce stress of answering same questions.'],
    ['church', 'Church / Ministry Website', 'Grow your congregation. Share sermons, live stream, events, and collect tithes/offerings online. Reach more souls beyond your location.'],
    ['truck', 'Logistics & Delivery Website', 'Get more delivery requests. Let customers track shipments, request pickups, and calculate prices automatically.'],
    ['home', 'Real Estate Website', 'Sell and rent properties faster. List properties with pictures, videos, and let clients book inspections on WhatsApp.'],
    ['utensils', 'Restaurant / Hotel / Shortlet Website', 'Get more bookings and orders. Show your menu/rooms, allow online reservations, and integrate with WhatsApp orders.'],
    ['file', 'Blog / News Website', 'Turn your knowledge into money. Monetize with ads and sponsored posts while building your authority.'],
    ['user', 'Portfolio / Personal Brand Website', 'Perfect for creatives, freelancers, influencers. Show your work and make clients pay you what you deserve.'],
    ['target', 'Landing Page / Sales Funnel', 'Convert traffic to sales. One powerful page that makes people buy, register, or call you immediately. Perfect for ads.']
  ];
  $('#svcGrid').innerHTML = SERVICES.map(([i, t, d], n) => `
    <article class="svc rv" style="--d:${(n % 3) * 90}ms">
      <div class="svc-top"><span class="ico">${svg(i)}</span><span class="num">${String(n + 1).padStart(2, '0')}</span></div>
      <h3>${t}</h3>
      <p>${d}</p>
      <div class="svc-foot">${contactRow(
        `Hi DigitaSolution, I'm interested in a ${t}. Please send me details and pricing.`,
        `Enquiry: ${t}`,
        `Hello DigitaSolution,\n\nI'm interested in a ${t}. Please send me details and pricing.\n\nThanks.`,
        'Get This Website'
      )}</div>
    </article>`).join('');

  /* ---------- Website Packages / Pricing ----------
     EDIT THESE LISTS to change packages, add-ons or care plans.
     Naira prices are the real prices; the "usd" line is the approximate equivalent
     shown to visitors (rate used: ₦1,500 = $1) and is repeated in the WhatsApp
     message so both always match the card. Every CTA reuses the WA number above. */
  const PACKAGES = [
    { id: 'starter', name: 'Starter', desc: 'A professional online presence for individuals and small businesses.',
      naira: '₦80,000', usd: 'approximately $53 USD', delivery: '3–5 days', cta: 'Get Started',
      feats: ['1–3 page website', 'Mobile responsive design', 'Modern professional UI', 'Home page', 'About section', 'Services/Products section', 'Contact section', 'WhatsApp integration', 'Click-to-call button', 'Social media links', 'Contact form', 'Basic SEO setup', 'Favicon', 'Google Maps/location integration', 'Basic animations', '1 revision', 'Deployment/hosting setup'] },
    { id: 'business', name: 'Business', desc: 'Everything you need to establish a stronger online presence and grow your business.', pop: true,
      naira: '₦150,000', usd: 'approximately $100 USD', delivery: '5–8 days', cta: 'Choose Business',
      feats: ['Everything in Starter', 'Up to 6 pages', 'Custom website design', 'Portfolio/gallery', 'Testimonials section', 'FAQ section', 'Google Maps integration', 'WhatsApp enquiry buttons', 'Advanced contact form', 'Social media integration', 'Basic Google Search setup', 'SEO-friendly structure', 'Schema markup where appropriate', 'Speed optimization', 'Advanced animations', '2 revisions', '30 days minor support'] },
    { id: 'professional', name: 'Professional', desc: 'A premium website designed to attract visitors, build trust, and generate customers.',
      naira: '₦250,000', usd: 'approximately $167 USD', delivery: '7–14 days', cta: 'Go Professional',
      feats: ['Everything in Business', 'Up to 10 pages', 'Premium custom UI/UX', 'Advanced animations', 'Blog/news section', 'Advanced service/product presentation', 'Booking/request form', 'Newsletter/contact capture', 'Advanced SEO setup', 'Google Analytics/Search Console setup', 'Performance optimization', 'Security best-practice configuration', 'Custom 404 page', 'Enhanced mobile experience', '3 revisions', '60 days support'] },
    { id: 'business-pro', name: 'Business Pro', desc: 'Advanced functionality for businesses ready to scale their online operations.',
      naira: '₦400,000+', usd: 'approximately $267+ USD', delivery: '2–4 weeks+', cta: 'Build My Business Pro',
      feats: ['Everything in Professional', 'E-commerce functionality', 'Product catalog', 'Shopping cart', 'Online ordering', 'Booking system', 'Payment integration', 'WhatsApp ordering', 'Advanced forms', 'Admin/content management', 'Custom integrations', 'Advanced SEO', 'Analytics', 'Performance optimization', 'Custom functionality'] },
    { id: 'custom', name: 'Custom', desc: 'Custom websites and web applications built around specific business requirements.', wide: true, sub: 'Suitable for',
      naira: '₦500,000+', usd: 'approximately $333+ USD', delivery: 'Timeline depends on project requirements', cta: 'Request a Quote',
      feats: ['E-commerce platforms', 'School management websites', 'Membership platforms', 'Business portals', 'Dashboards', 'Booking platforms', 'Real-estate platforms', 'Restaurant ordering systems', 'Custom web applications', 'API integrations', 'Database-powered applications'] }
  ];
  const ADDONS = [
    ['Extra page', '₦10k–₦20k', '$7–$13'],
    ['Logo design', '₦20k–₦50k', '$13–$33'],
    ['Professional copywriting', '₦20k–₦50k', '$13–$33'],
    ['Basic SEO', '₦30k–₦70k', '$20–$47'],
    ['Google Business Profile setup', '₦30k–₦60k', '$20–$40'],
    ['Google Analytics/Search Console', '₦15k–₦30k', '$10–$20'],
    ['WhatsApp ordering', '₦20k–₦50k', '$13–$33'],
    ['Booking system', '₦40k–₦100k+', '$27–$67+'],
    ['Payment integration', '₦30k–₦80k+', '$20–$53+'],
    ['E-commerce', '₦150k+', '$100+'],
    ['Website redesign', '₦100k–₦300k', '$67–$200']
  ];
  const CARE = [
    { name: 'Basic Care', naira: '₦20,000', usd: 'approximately $13/month',
      feats: ['Minor text/image changes', 'Bug fixes', 'Basic monitoring', 'Backup assistance'] },
    { name: 'Business Care', naira: '₦35,000', usd: 'approximately $23/month',
      feats: ['Everything in Basic Care', 'Regular content updates', 'Performance checks', 'SEO maintenance', 'Analytics review'] },
    { name: 'Premium Care', naira: '₦50,000+', usd: 'approximately $33+/month',
      feats: ['Everything in Business Care', 'Frequent updates', 'Priority support', 'SEO improvements', 'Performance optimization', 'New sections/features as agreed'] }
  ];

  const dsTick = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';
  const dsClock = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
  const dsChev = '<svg class="ds-toggle-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  const dsItems = list => list.map(f => `<li>${dsTick}<span>${f}</span></li>`).join('');
  const dsList = list => `<ul class="ds-feats">${dsItems(list)}</ul>`;

  /* Package features sit in a drop-down that opens on hover. The button keeps the same
     content reachable by tap and keyboard, so nothing is hover-only. */
  const dsDrop = (id, list, sub) => `
      <button type="button" class="ds-toggle" aria-expanded="false" aria-controls="ds-drop-${id}">
        <span class="ds-toggle-tx">Show all ${list.length} features</span>${dsChev}
      </button>
      <div class="ds-drop" id="ds-drop-${id}"><div class="ds-drop-in">${sub ? `<h4 class="ds-sub">${sub}:</h4>` : ''}<ul class="ds-feats">${dsItems(list)}</ul></div></div>`;

  /* Message text is derived from the same fields shown on the card, so the two never drift apart. */
  function dsMessage(p) {
    const price = `${p.naira} / ${p.usd}`;
    if (p.id === 'custom') return `Hello DigitaSolution, I'd like to request a quote for a custom website/web application. The starting price is ${price}.`;
    const label = p.id === 'business-pro' ? 'package' : 'website package';   // "Business Pro package" reads better than "Business Pro website package"
    return `Hello DigitaSolution, I'm interested in the ${p.name} ${label} (${price}). I'd like to discuss my project.`;
  }

  $('#dsGrid').innerHTML = PACKAGES.map((p, i) => `
    <article class="ds-card rv${p.pop ? ' ds-card--pop' : ''}${p.wide ? ' ds-card--wide' : ''}" style="--d:${(i % 3) * 90}ms" aria-labelledby="ds-plan-${p.id}">
      ${p.pop ? '<p class="ds-flag"><span>Most popular</span></p>' : ''}
      <h3 class="ds-name" id="ds-plan-${p.id}">${p.name}</h3>
      <p class="ds-desc">${p.desc}</p>
      <p class="ds-plan"><span class="ds-amt">${p.naira}</span><span class="ds-usd">(${p.usd})</span></p>
      ${dsDrop(p.id, p.feats, p.sub)}
      <p class="ds-del">${dsClock}<span>Delivery: ${p.delivery}</span></p>
      <div class="ds-foot"><a class="btn btn-accent" href="${wa(dsMessage(p))}" target="_blank" rel="noopener">${waIcon}${p.cta}</a></div>
    </article>`).join('');

  $('#dsAddons').innerHTML = ADDONS.map(([name, ngn, usd]) => `
    <li><b>${name}</b><span class="pr"><span class="n">${ngn}</span> <span class="u">(approximately ${usd})</span></span></li>`).join('');

  $('#dsCare').innerHTML = CARE.map((c, i) => `
    <article class="ds-care-card rv" style="--d:${i * 90}ms" aria-labelledby="ds-care-${i}">
      <h4 id="ds-care-${i}">${c.name}</h4>
      <p class="ds-plan"><span class="ds-amt">${c.naira}<span class="per">/month</span></span><span class="ds-usd">(${c.usd})</span></p>
      ${dsList(c.feats)}
    </article>`).join('');

/* Open a package's features on hover. The toggle pins it open for tap and keyboard,
     so nothing is hover-only, and aria-expanded stays truthful for screen readers.
     Focus only reveals the list when it comes from the keyboard: a click focuses the
     button too, and that must not fight the toggle. Opening one package closes the
     others, so a card is never expanded by hovering its neighbour. */
  const dsStates = $$('#dsGrid .ds-card').map(card => {
    const btn = $('.ds-toggle', card);
    const st = { card, btn, label: $('.ds-toggle-tx', btn), total: $$('.ds-feats li', card).length,
      pinned: false, over: false, within: false, locked: false, viaPointer: false };
    st.sync = () => {
      const open = st.pinned || st.over || st.within;
      st.card.dataset.open = String(open);
      st.btn.setAttribute('aria-expanded', String(open));
      st.label.textContent = open ? 'Hide features' : `Show all ${st.total} features`;
      if (!open) return;
      dsStates.forEach(o => {
        if (o === st || !(o.pinned || o.over || o.within)) return;
        o.pinned = o.over = o.within = false; o.locked = false; o.sync();
      });
    };
    st.card.addEventListener('pointerdown', () => { st.viaPointer = true; });
    st.card.addEventListener('keydown', () => { st.viaPointer = false; });
    st.card.addEventListener('mouseenter', () => { if (!st.locked) { st.over = true; st.sync(); } });
    st.card.addEventListener('mouseleave', () => { st.over = false; st.locked = false; st.sync(); });
    st.card.addEventListener('focusin', () => { if (!st.viaPointer) { st.within = true; st.sync(); } });
    st.card.addEventListener('focusout', e => { if (!st.card.contains(e.relatedTarget)) { st.within = false; st.sync(); } });
    st.btn.addEventListener('click', () => { st.pinned = !st.pinned; st.over = false; st.within = false; st.locked = true; st.sync(); });
    return st;
  });
  dsStates.forEach(st => st.sync());

  /* ---------- Generated website previews (used when a project has no screenshot) ---------- */
  function site({ bg, fg, mu, ac, layout }) {
    const bar = (x, y, w, h, f, o = 1) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(h / 2, 5)}" fill="${f}" opacity="${o}"/>`;
    let s = `<rect width="400" height="260" fill="${bg}"/>${bar(0, 0, 400, 24, fg, .07)}
      <circle cx="14" cy="12" r="3" fill="${fg}" opacity=".3"/><circle cx="25" cy="12" r="3" fill="${fg}" opacity=".3"/><circle cx="36" cy="12" r="3" fill="${fg}" opacity=".3"/>
      <circle cx="30" cy="50" r="7" fill="${ac}"/>${bar(44, 47, 44, 6, fg)}${bar(262, 47, 26, 6, mu)}${bar(298, 47, 26, 6, mu)}${bar(334, 44, 40, 12, ac)}`;
    if (layout === 'split') {
      s += bar(30, 88, 170, 13, fg) + bar(30, 108, 130, 13, fg) + bar(30, 128, 84, 13, ac) + bar(30, 154, 150, 5, mu) + bar(30, 164, 118, 5, mu) + bar(30, 180, 66, 18, ac)
        + `<rect x="236" y="84" width="134" height="114" rx="12" fill="${ac}" opacity=".18"/><circle cx="303" cy="130" r="26" fill="${ac}" opacity=".85"/>${bar(256, 170, 94, 8, fg, .5)}`;
      s += [30, 148, 266].map(x => `<rect x="${x}" y="212" width="104" height="34" rx="8" fill="${fg}" opacity=".07"/>`).join('');
    } else if (layout === 'center') {
      s += bar(88, 84, 224, 14, fg) + bar(124, 104, 152, 14, ac) + bar(146, 130, 108, 5, mu) + bar(162, 146, 76, 20, ac)
        + [30, 148, 266].map((x, i) => `<rect x="${x}" y="184" width="104" height="62" rx="10" fill="${fg}" opacity=".08"/><circle cx="${x + 18}" cy="202" r="6" fill="${ac}"/>${bar(x + 12, 218, 66, 5, fg, .7)}${bar(x + 12, 228, 44, 5, mu)}`).join('');
    } else {
      s += bar(30, 82, 120, 12, fg) + bar(30, 100, 80, 5, mu)
        + [30, 148, 266].map(x => `<rect x="${x}" y="118" width="104" height="128" rx="10" fill="${ac}" opacity=".14"/><circle cx="${x + 52}" cy="164" r="24" fill="${ac}" opacity=".8"/>${bar(x + 12, 206, 60, 6, fg, .8)}${bar(x + 12, 218, 34, 6, ac)}${bar(x + 12, 230, 80, 5, mu)}`).join('');
    }
    return `<svg viewBox="0 0 400 260" role="img" aria-hidden="true">${s}</svg>`;
  }
  /* ---------- Our Projects ----------
     EDIT THIS LIST with your real projects. Per project:
       title, cat (filter group), desc, feats (short tags),
       url   (live site link; the links below are sample placeholders, replace with real ones),
       image (optional: screenshot path/URL, replaces the generated preview),
       cfg   (colors for the generated preview when no image is given) */
  const SAMPLE_MODE = false;  // set to false to hide the "Sample" badges and note once these are your real projects
  const PROJECTS = [
    { title: 'Cleaning Service Company', cat: 'Business', desc: 'A confident corporate website that presents services, leadership, and credentials clearly, with an enquiry flow that sends leads straight to WhatsApp.', feats: ['Service pages', 'Enquiry form', 'WhatsApp chat'], url: 'https://ramto-global.netlify.app/', image: 'https://res.cloudinary.com/dtxdhkaqs/image/upload/v1781872038/UI_iamge_of_cleaning_company_jzwumn.png', cfg: { bg: '#F6F7FB', fg: '#0F172A', mu: '#94A3B8', ac: '#2563EB', layout: 'split' } },
    { title: 'Organisation Website', cat: 'Business', desc: 'Professional, responsive and modern websites that help organizations grow their reach, engage their audience and build credibility online.', feats: ['Service pages', 'Enquiry form', 'WhatsApp chat'], url: 'https://ukgin-nu.vercel.app/', image: 'https://res.cloudinary.com/dtxdhkaqs/image/upload/v1790963334/ukgin_site_screenshot_p6tblr.png', cfg: { bg: '#F6F7FB', fg: '#0F172A', mu: '#94A3B8', ac: '#2563EB', layout: 'split' } },
    { title: 'Bloom & Thread Store', cat: 'E-commerce', desc: 'A fast, mobile-first fashion store with product galleries, secure checkout, and instant order notifications.', feats: ['Card & transfer payments', 'Order management', 'Product filters'], url: 'https://pg-label-sk76.vercel.app/', image: 'https://res.cloudinary.com/dtxdhkaqs/image/upload/v1781866130/beauty_product_UI_for_Image_for_ecommerce_y3kxh7.png', cfg: { bg: '#FFF7F3', fg: '#3B1F1A', mu: '#C7A9A0', ac: '#E11D48', layout: 'grid' } },
    { title: 'Legal Consultancy', cat: 'Legal & Chambers', desc: 'A credible law firm website with practice areas, attorney profiles, and online consultation booking.', feats: ['Consultation booking', 'Practice areas', 'Attorney profiles'], url: 'https://legal-juris.vercel.app/', image: 'https://res.cloudinary.com/dtxdhkaqs/image/upload/v1790924882/Legal_Juris_Screenshot_tebyq4.png', cfg: { bg: '#0F1F1A', fg: '#F3EBD8', mu: '#6E8078', ac: '#C9A24B', layout: 'center' } },
    { title: 'Campaign Portal', cat: 'Legal & Politics', desc: 'A campaign website with manifesto, event updates, volunteer sign-up, and online donations.', feats: ['Donations', 'Volunteer form', 'Event RSVP'], url: 'https://barrister-smiles-azunda.vercel.app/', image:'https://res.cloudinary.com/dtxdhkaqs/image/upload/v1790931402/Barr._Smiles_site_screenshot_qchbcg.png', cfg: { bg: '#F3F8F4', fg: '#0B2E1D', mu: '#86A08F', ac: '#059669', layout: 'split' } },
    { title: 'School Management System', cat: 'Education & Faith', desc: 'A school website parents trust: admissions, fees, results, news, and a photo gallery in one place.', feats: ['Admissions info', 'News & gallery', 'Fees & results'], url: 'https://www.webcapz.com.ng', image: 'https://res.cloudinary.com/dtxdhkaqs/image/upload/v1781871360/School_Management_UI_image_vtpxra.png', cfg: { bg: '#F2F7FF', fg: '#0B2A5B', mu: '#9DB2D3', ac: '#F59E0B', layout: 'grid' } },
    { title: 'Grace Chapel Ministry', cat: 'Education & Faith', desc: 'A welcoming church website with a sermon library, live stream, upcoming events, and online giving.', feats: ['Live stream', 'Sermon library', 'Online giving'], url: 'https://example.com/?sample=grace-chapel', image: '', cfg: { bg: '#16121F', fg: '#F1EBFF', mu: '#8C82A8', ac: '#A78BFA', layout: 'center' } },
    { title: 'Logistics Company', cat: 'Business', desc: 'A logistics website with pickup requests, shipment tracking, and instant price estimates.', feats: ['Shipment tracking', 'Pickup request', 'Price calculator'], url: 'https://example.com/?sample=swiftroute', image: 'https://res.cloudinary.com/dtxdhkaqs/image/upload/v1781867865/Logistic_UI_image_oetmnt.png', cfg: { bg: '#0B1420', fg: '#E6F0FF', mu: '#6F86A6', ac: '#22C55E', layout: 'split' } },
    { title: 'Haven Properties', cat: 'Real Estate', desc: 'A property listings website with photo galleries, video tours, and one-tap inspection booking on WhatsApp.', feats: ['Property listings', 'Video tours', 'WhatsApp booking'], url: 'https://example.com/?sample=haven-properties', image: '', cfg: { bg: '#FAFAF7', fg: '#1F2937', mu: '#A8ADB5', ac: '#0F766E', layout: 'grid' } }
  ];
  const CATS = ['All', ...new Set(PROJECTS.map(p => p.cat))];
  let curCat = 'All';

  function projectCard(p, feat, i, swap) {
    const shot = p.image
      ? `<img src="${p.image}" alt="Screenshot of the ${p.title} website" loading="lazy">`
      : site(p.cfg);
    const cls = 'pf' + (feat ? ' feat' : '') + (swap ? ' swap' : ' rv');
    const waText = `Hi DigitaSolution, I saw your "${p.title}" project and I want a similar website.`;
    const subject = `Enquiry about the "${p.title}" project`;
    const body = `Hello DigitaSolution,\n\nI saw your "${p.title}" project and I want a similar website.\n\nThanks.`;
    return `<article class="${cls}" style="--d:${(i % 3) * 90}ms">
      <div class="shot">${SAMPLE_MODE ? '<span class="badge">Sample</span>' : ''}${shot}</div>
      <div class="body">
        <span class="cat">${p.cat}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <ul class="tags">${p.feats.map(f => `<li>${f}</li>`).join('')}</ul>
        <div class="acts">
          <a class="btn btn-accent btn-sm" href="${wa(waText)}" target="_blank" rel="noopener">${waIcon}Get a site like this</a>
          <a class="btn-icon" href="${mail(subject, body)}" target="_blank" rel="noopener" aria-label="Email us instead" title="Email us instead">${mailIcon}</a>
          ${p.url ? `<a class="btn btn-ghost btn-sm" href="${p.url}" target="_blank" rel="noopener">Visit site</a>` : ''}
        </div>
      </div>
    </article>`;
  }
  function renderProjects(swap) {
    const list = curCat === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === curCat);
    $('#pfGrid').innerHTML = list.map((p, i) => projectCard(p, curCat === 'All' && i === 0, i, swap)).join('');
    $$('.fbtn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.cat === curCat)));
  }
  $('#pfFilters').innerHTML = CATS.map(c => `<button type="button" class="fbtn" data-cat="${c}" aria-pressed="false">${c}</button>`).join('');
  $('#pfFilters').addEventListener('click', e => {
    const b = e.target.closest('.fbtn'); if (!b) return;
    curCat = b.dataset.cat; renderProjects(true);
  });
  if (SAMPLE_MODE) { const n = $('#pfNote'); n.hidden = false; n.textContent = 'Sample projects shown. Replace them with your real projects in the PROJECTS list, then set SAMPLE_MODE to false.'; }
  renderProjects(false);
  $('#pfContact').href = wa('Hi DigitaSolution, I saw your projects and I want a website.');
  $('#pfContactMail').href = mail('I want a website', 'Hello DigitaSolution,\n\nI saw your projects and I want a website. Please send me details and pricing.\n\nThanks.');

  /* ---------- Why us ---------- */
  const WHY = [
    ['wallet', 'We Work To Suit Your Budget', 'No budget too small or big. Tell us what you can invest and we design the best site for it.'],
    ['zap', 'Fast Delivery Worldwide', 'Clear timelines and quick turnaround, wherever your business is based.'],
    ['phone', 'Modern, Mobile-Friendly Designs', 'Sharp, fast websites that look great on every phone, tablet, and desktop.'],
    ['chat', 'WhatsApp & Payment Integration', 'Let customers message, order, and pay you without ever leaving your website.'],
    ['heart', 'Free Support After Delivery', 'We do not disappear after launch. Get help whenever you need it.']
  ];
  $('#whyList').innerHTML = WHY.map(([i, t, d], n) => `
    <li class="rv" style="--d:${n * 70}ms"><span class="ico">${svg(i)}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('');
  $('#whyBudget').href = wa('Hi DigitaSolution, I want to discuss a website for my budget.');
  $('#whyBudgetMail').href = mail('Website budget discussion', 'Hello DigitaSolution,\n\nI want to discuss a website for my budget. Here is what I can invest and what I need:\n\n');

  /* ---------- Testimonials ---------- */
  /* PLACEHOLDER TESTIMONIALS: replace with genuine client feedback (with permission) before launch.
     Avatars are illustrations. Swap for real client photos (with permission) by using an <img> in place of avatar(). */
  function avatar(o, n) {
    const { skin, shade, hair, style, cloth, tie = '#FF5B2E', gender, bg = '#2A2E3D', glasses, beard, ring } = o;
    let back = '', front = '';
    if (style === 'long') back = `<path d="M31 62C26 22 94 22 89 62C91 82 93 98 98 112L22 112C27 98 29 82 31 62Z" fill="${hair}"/>`;
    if (style === 'afro') back = `<ellipse cx="60" cy="45" rx="31" ry="28" fill="${hair}"/>`;
    if (style === 'bun') back = `<circle cx="60" cy="21" r="11" fill="${hair}"/>`;
    if (style === 'short') front = `<path d="M38.5 54C36 32 47 26 60 26C73 26 84 32 81.5 54C79 43 72 38 60 38C48 38 41 43 38.5 54Z" fill="${hair}"/>`;
    if (style === 'afro') front = `<path d="M38 52C37 36 47 31 60 31C73 31 83 36 82 52C79 43 72 40 60 40C48 40 41 43 38 52Z" fill="${hair}"/>`;
    if (style === 'long') front = `<path d="M37 56C36 34 48 27 62 27C76 27 85 37 83 56C79 43 66 38 55 41C47 43 40 48 37 56Z" fill="${hair}"/>`;
    if (style === 'bun') front = `<path d="M38 54C36 33 47 27 60 27C73 27 84 33 82 54C79 43 72 38 60 38C48 38 41 43 38 54Z" fill="${hair}"/>`;
    const body = gender === 'm'
      ? `<path d="M8 120C8 97 32 88 60 88C88 88 112 97 112 120Z" fill="${cloth}"/><path d="M47 88L60 106L73 88L67 84L60 93L53 84Z" fill="#fff"/><path d="M58 94h4l4 22h-12z" fill="${tie}"/><path d="M47 88L34 120M73 88L86 120" stroke="rgba(0,0,0,.28)" stroke-width="1.5" fill="none"/>`
      : `<path d="M8 120C8 97 32 88 60 88C88 88 112 97 112 120Z" fill="${cloth}"/><path d="M48 88L60 104L72 88Z" fill="${shade}"/>`;
    const earr = ring ? `<circle cx="38.5" cy="67" r="2.2" fill="#E8B04A"/><circle cx="81.5" cy="67" r="2.2" fill="#E8B04A"/>` : '';
    const beardSvg = beard ? `<path d="M40 60C41 78 50 85 60 85C70 85 79 78 80 60C77 71 70 74 60 74C50 74 43 71 40 60Z" fill="${hair}"/>` : '';
    const glasSvg = glasses ? `<g fill="none" stroke="#1B1412" stroke-width="1.8"><circle cx="51.5" cy="57" r="7.5"/><circle cx="68.5" cy="57" r="7.5"/><path d="M59 57h2"/></g>` : '';
    const mouth = gender === 'f' ? `<path d="M52.5 70q7.5 5.5 15 0" stroke="#A33B48" stroke-width="2.6" fill="none" stroke-linecap="round"/>`
      : `<path d="M53 70.5q7 4.5 14 0" stroke="${beard ? '#F0D9CF' : '#5c2b25'}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    return `<svg viewBox="0 0 120 120" role="img" aria-hidden="true"><defs><clipPath id="avc${n}"><circle cx="60" cy="60" r="60"/></clipPath></defs>
    <g clip-path="url(#avc${n})"><rect width="120" height="120" fill="${bg}"/>${back}
    <path d="M50 72h20v18c0 5-20 5-20 0z" fill="${shade}"/>${body}
    <circle cx="39" cy="59" r="4" fill="${skin}"/><circle cx="81" cy="59" r="4" fill="${skin}"/>
    <ellipse cx="60" cy="57" rx="21" ry="25" fill="${skin}"/>${beardSvg}
    <ellipse cx="51.5" cy="57" rx="3.6" ry="3" fill="#fff"/><ellipse cx="68.5" cy="57" rx="3.6" ry="3" fill="#fff"/><circle cx="51.5" cy="57" r="2.1" fill="#1B1412"/><circle cx="68.5" cy="57" r="2.1" fill="#1B1412"/>
    <path d="M46 51.5q5.5-3 11 0M63 51.5q5.5-3 11 0" stroke="${hair}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M60 58c-2.5 6-3 8 0 9" stroke="${shade}" stroke-width="1.8" fill="none" stroke-linecap="round"/>${mouth}${front}${glasSvg}${earr}</g></svg>`;
  }

  const T = [
    ['Ifeanyi O.', 'Owner, logistics company', 'Port Harcourt, Nigeria', 'Customers used to call us all day to ask about pickups. Now they request delivery from the website and we just confirm on WhatsApp. It makes us look like a much bigger company.',
      { skin: '#6B4229', shade: '#573622', hair: '#14100D', style: 'short', beard: true, cloth: '#1B2A4A', gender: 'm', bg: '#DCE6F5' }],
    ['Sarah M.', 'Owner, boutique bakery', 'Manchester, UK', 'I wanted an online shop that felt as premium as my cakes. They listened, delivered on time, and now customers order and pay without ever needing to call me.',
      { skin: '#F6D3B8', shade: '#E3B899', hair: '#C99B54', style: 'long', cloth: '#2F4F6F', gender: 'f', bg: '#F2E4C9' }],
    ['Amaka E.', 'Founder, fashion store', 'Lagos, Nigeria', 'My online store looks better than shops that have been around for years. Payments work smoothly and customers message me straight from the product page. I am very happy with it.',
      { skin: '#7A4A30', shade: '#633B26', hair: '#15100E', style: 'afro', cloth: '#E8664A', gender: 'f', ring: true, bg: '#E4DDF2' }],
    ['James H.', 'Director, consultancy', 'London, UK', 'Professional from the first call to launch. The site is clean, quick, and mobile-friendly, and they have been helpful with every small change I have asked for since.',
      { skin: '#F1C7A3', shade: '#DDAE88', hair: '#6B4A2E', style: 'short', glasses: true, cloth: '#22314D', tie: '#9A2B2B', gender: 'm', bg: '#D9E4F5' }],
    ['Pastor Emeka N.', 'Senior Pastor', 'Enugu, Nigeria', 'Members can now watch services live, read announcements, and give online from anywhere in the world. The website has brought our church family closer together.',
      { skin: '#4F311F', shade: '#3E2618', hair: '#0F0C0A', style: 'short', beard: true, glasses: true, cloth: '#20242F', tie: '#C9A24B', gender: 'm', bg: '#D8E9E3' }],
    ['Chidinma A.', 'Proprietor, private school', 'Abuja, Nigeria', 'Parents used to queue in my office for admission and fee details. Now everything is on the school website, and it saves my staff hours every week.',
      { skin: '#8A5A3B', shade: '#714830', hair: '#120E0C', style: 'bun', cloth: '#0F766E', gender: 'f', ring: true, bg: '#F3D9CF' }],
    ['Michael T.', 'Founder, real estate agency', 'Toronto, Canada', 'Listings, photos, and inspection bookings all work smoothly, and clients contact me straight on WhatsApp. It made my small agency look established from day one.',
      { skin: '#EFC3A0', shade: '#D9A784', hair: '#8C8F94', style: 'short', cloth: '#13294B', tie: '#1E5AA8', gender: 'm', bg: '#DDE5EE' }],
    ['Emily R.', 'Coach and speaker', 'Austin, Texas, USA', 'Working across time zones was easy. They understood my brand, kept me updated on WhatsApp, and delivered a personal website I am proud to send to clients.',
      { skin: '#F4CDB0', shade: '#DEB08F', hair: '#5B3A22', style: 'bun', cloth: '#7C3A5A', gender: 'f', bg: '#EDE4F4' }],
    ['Barr. Chidi A.', 'Principal partner, law firm', 'Abuja, Nigeria', 'I wanted a site that showed my practice areas and let clients book consultations without endless calls. DigitaSolution delivered exactly that, and it looks credible and calm.',
      { skin: '#5A3A28', shade: '#482D1F', hair: '#0F0C0A', style: 'short', glasses: true, cloth: '#12233F', tie: '#B45309', gender: 'm', bg: '#E3EFE6' }]
  ];
  const star = '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  /* To use a real client photo (with their permission), add its path as a 6th item in that review's row,
     e.g.  [..., { skin: ... }, 'images/ifeanyi.jpg']  and it replaces the illustrated avatar. */
  $('#tGrid').innerHTML = T.map(([n, role, city, q, av, photo], i) => `
    <figure class="tcard rv" style="margin:0;--d:${(i % 3) * 90}ms">
      <div class="stars" aria-label="5 out of 5 stars">${star.repeat(5)}</div>
      <blockquote>&ldquo;${q}&rdquo;</blockquote>
      <figcaption class="who"><span class="av">${photo ? `<img src="${photo}" alt="Photo of ${n}" loading="lazy">` : avatar(av, i)}</span><div><b>${n}</b><span>${role}, ${city}</span></div></figcaption>
    </figure>`).join('');

  /* ---------- Contact form -> WhatsApp or Email ---------- */
  $('#f_type').insertAdjacentHTML('beforeend', SERVICES.map(s => `<option>${s[1]}</option>`).join(''));

  function quoteLines() {
    return $$('[data-l]', $('#quoteForm')).map(el => el.value.trim() ? `${el.dataset.l}: ${el.value.trim()}` : null).filter(Boolean);
  }
  $('#quoteForm').addEventListener('submit', e => {
    e.preventDefault();
    const lines = $$('[data-l]', e.target).map(el => el.value.trim() ? `*${el.dataset.l}:* ${el.value.trim()}` : null).filter(Boolean);
    const url = wa('Hello DigitaSolution,\n\n' + lines.join('\n'));
    const w = window.open(url, '_blank'); if (w) w.opener = null;
    const t = document.createElement('div');
    t.className = 'toast'; t.innerHTML = `Opening WhatsApp… <a href="${url}" target="_blank" rel="noopener">Tap here if it did not open.</a>`;
    document.body.appendChild(t); setTimeout(() => t.remove(), 9000);
  });
  /* Alternative for visitors without WhatsApp: send the same details straight to our email. */
  $('#f_email_btn').addEventListener('click', () => {
    const lines = quoteLines();
    const name = $('#f_name').value.trim();
    const url = mail(
      `Website quote request${name ? ' — ' + name : ''}`,
      'Hello DigitaSolution,\n\n' + lines.join('\n') + '\n\nThanks.'
    );
    window.location.href = url;
  });

  /* ---------- Payments: Flutterwave + bank transfer + Bitcoin ----------
     Flutterwave: set ONE of these to switch on online payment:
       flutterwavePublicKey  Public key from Flutterwave Dashboard > Settings > API Keys (e.g. FLWPUBK-xxxx).
                             Opens checkout with the amount pre-filled. Works when the file is hosted on your own domain.
                             (USD payments must be enabled on your Flutterwave account.)
       flutterwaveLink       A Flutterwave payment link (Dashboard > Payment Links). Used if no public key is set.
     Bitcoin: replace BTC_ADDRESS with YOUR wallet's receiving address, then set BTC_SAMPLE to false.
     Rates: RATES are indicative defaults. On your own domain the page also tries to fetch live rates. */
  const PAY = { flutterwavePublicKey: '', flutterwaveLink: '' };
  const BANK = { bank: 'FCMB', number: '9188764011', name: 'Ubaka Ifeanyi Godswill' };
  const BTC_ADDRESS = 'bc1qsamp1e0rece1ver0btc0addr355f0rpr3v1ew';   // SAMPLE: not a real address, do not send funds to it
  const BTC_SAMPLE = true;
  const RATES = { ngnPerUsd: 1330, btcUsd: 0, live: false, btcLive: false };   // ngnPerUsd ~ official rate, Sept 2026 (indicative). BTC price is only used when it can be fetched live.
  const naira = n => '₦' + Math.round(n).toLocaleString('en-NG');
  const dollars = n => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function toast(html, ms = 6000) {
    const t = document.createElement('div');
    t.className = 'toast'; t.setAttribute('role', 'status'); t.innerHTML = html;
    document.body.appendChild(t); setTimeout(() => t.remove(), ms);
  }
  function openModal(title, body) {
    const m = document.createElement('div');
    m.className = 'modal';
    m.innerHTML = `<div class="modal-in" role="dialog" aria-modal="true" aria-labelledby="mt"><h3 id="mt">${title}</h3>${body}<button type="button" class="btn btn-dark btn-sm" data-x>Close</button></div>`;
    m.addEventListener('click', e => { if (e.target === m || e.target.hasAttribute('data-x')) m.remove(); });
    document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { m.remove(); document.removeEventListener('keydown', esc); } });
    document.body.appendChild(m); m.querySelector('[data-x]').focus();
  }
  function loadFlutterwave() {
    return new Promise((res, rej) => {
      if (window.FlutterwaveCheckout) return res();
      const s = document.createElement('script');
      s.src = 'https://checkout.flutterwave.com/v3.js'; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  /* --- Amount + equivalents (NGN <-> USD <-> BTC) --- */
  function amountInfo() {
    const cur = $('#p_cur').value, v = +$('#p_amount').value;
    if (!(v > 0)) return null;
    const usd = cur === 'USD' ? v : v / RATES.ngnPerUsd;
    const ngn = cur === 'NGN' ? v : v * RATES.ngnPerUsd;
    return { cur, v, usd, ngn, btc: RATES.btcLive ? usd / RATES.btcUsd : null };
  }
  function fmtBtc(n) { return n.toFixed(8).replace(/0+$/, '').replace(/\.$/, '.0'); }
  function updateEq() {
    const i = amountInfo(), rate = `<span class="rate">${RATES.live ? 'Live' : 'Indicative'} rate: $1 ≈ ${naira(RATES.ngnPerUsd)}</span>`;
    $('#p_eq').classList.toggle('empty', !i);
    $('#p_eq').innerHTML = i
      ? (i.cur === 'NGN' ? `≈ ${dollars(i.usd)} USD` : `≈ ${naira(i.ngn)} NGN`) + rate
      : `Enter an amount to see the ${$('#p_cur').value === 'NGN' ? 'US dollar' : 'Naira'} equivalent.` + rate;
    $('#bankAmt').textContent = i ? `Amount to send: ${naira(i.ngn)}${i.cur === 'NGN' ? ` (≈ ${dollars(i.usd)})` : ` (≈ ${dollars(i.usd)} at today's rate)`}` : '';
    $('#btcAmt').textContent = !i ? 'Enter an amount in the form to see the Bitcoin equivalent.' : (i.btc != null ? `Estimated amount: ≈ ${fmtBtc(i.btc)} BTC (${dollars(i.usd)})` : `You send: ${dollars(i.usd)} worth of BTC. We confirm the exact BTC amount with you on WhatsApp or email.`);
  }
  $('#p_amount').addEventListener('input', updateEq);
  $('#p_cur').addEventListener('change', () => {
    const c = $('#p_cur').value; $('#p_amount').placeholder = c === 'NGN' ? 'e.g. 50000' : 'e.g. 100'; updateEq();
  });
  async function loadRates() {
    try { const d = await (await fetch('https://open.er-api.com/v6/latest/USD')).json(); if (d && d.rates && d.rates.NGN) { RATES.ngnPerUsd = Math.round(d.rates.NGN * 100) / 100; RATES.live = true; } } catch (e) {}
    try { const d = await (await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')).json(); if (d && d.bitcoin && d.bitcoin.usd) { RATES.btcUsd = d.bitcoin.usd; RATES.btcLive = true; } } catch (e) {}
    updateEq();
  }

  /* --- Flutterwave --- */
  function payFallback(reason) {
    openModal(reason, `<p>Please pay by bank transfer to <b>${BANK.bank} ${BANK.number}</b> (${BANK.name}) or with Bitcoin, then send your proof of payment on WhatsApp or by email.</p>
      <a class="btn btn-wa btn-sm" href="${wa('Hello DigitaSolution, I want to make a payment.')}" target="_blank" rel="noopener">Message us on WhatsApp</a>
      <a class="btn btn-mail btn-sm" href="${mail('I want to make a payment', 'Hello DigitaSolution,\n\nI want to make a payment. Please advise.')}" target="_blank" rel="noopener">Email us instead</a>`);
  }
  $('#payForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#p_name').value.trim(), email = $('#p_email').value.trim(), purpose = $('#p_purpose').value;
    const cur = $('#p_cur').value, amount = Math.round(+$('#p_amount').value * 100) / 100;
    const min = cur === 'NGN' ? 100 : 1;
    if (!(amount >= min)) { toast(`Enter an amount of at least ${cur === 'NGN' ? '₦100' : '$1'}.`, 4000); return; }
    const label = cur === 'NGN' ? naira(amount) : dollars(amount);
    if (PAY.flutterwavePublicKey) {
      loadFlutterwave().then(() => {
        window.FlutterwaveCheckout({
          public_key: PAY.flutterwavePublicKey,
          tx_ref: 'DS-' + Date.now(),
          amount, currency: cur, payment_options: cur === 'NGN' ? 'card,banktransfer,ussd' : 'card',
          customer: { email, name },
          customizations: { title: 'DigitaSolution', description: purpose },
          callback: () => toast(`Payment received, thank you. <a href="${wa(`Hello DigitaSolution, I just paid ${label} for: ${purpose}. My name is ${name}.`)}" target="_blank" rel="noopener">Tell us on WhatsApp</a> or <a href="${mail(`Payment confirmation — ${label}`, `Hello DigitaSolution,\n\nI just paid ${label} for: ${purpose}.\nMy name is ${name}.`)}" target="_blank" rel="noopener">email us</a>.`, 14000),
          onclose: () => {}
        });
      }).catch(() => payFallback('Could not open Flutterwave'));
    } else if (PAY.flutterwaveLink) {
      window.open(PAY.flutterwaveLink, '_blank', 'noopener');
      toast(`Opening Flutterwave. Enter ${label} on the payment page.`, 8000);
    } else {
      payFallback('Online payment is not switched on yet');
    }
  });

  /* --- Bitcoin panel --- */
  $('#btcAddr').textContent = BTC_ADDRESS;
  if (BTC_SAMPLE) $('#btcSample').hidden = false;
  $('#btcCopy').dataset.copy = BTC_ADDRESS;
  let qrDone = false;
  function renderQr() {
    if (qrDone || !window.QRCode) return;
    try { new QRCode($('#btcQr'), { text: 'bitcoin:' + BTC_ADDRESS, width: 160, height: 160, colorDark: '#0B0C10', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M }); qrDone = true; $('.btc-row').classList.add('has-qr'); } catch (e) {}
  }
  window.addEventListener('load', renderQr);

  /* --- Tabs --- */
  $$('.tab').forEach(t => t.addEventListener('click', () => {
    $$('.tab').forEach(x => x.setAttribute('aria-selected', String(x === t)));
    $('#tab-bank').hidden = t.dataset.tab !== 'bank';
    $('#tab-btc').hidden = t.dataset.tab !== 'btc';
    if (t.dataset.tab === 'btc') renderQr();
  }));

  /* --- Copy buttons --- */
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-copy]'); if (!b) return;
    const v = b.dataset.copy, old = b.textContent;
    const done = () => { b.textContent = 'Copied'; toast('Copied to clipboard.', 2500); setTimeout(() => { b.textContent = old; }, 2000); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(done, () => toast('Long-press the text to copy it.', 3500));
    else toast('Long-press the text to copy it.', 3500);
  });

  /* --- Proof of payment -> WhatsApp or Email --- */
  function proofSubject(method) { return `Proof of payment — ${method}`; }
  function proofLines(extra) {
    const n = $('#p_name').value.trim(), pu = $('#p_purpose').value, i = amountInfo();
    return [n && `Name: ${n}`, i && `Amount: ${i.cur === 'NGN' ? naira(i.v) : dollars(i.v)} (≈ ${i.cur === 'NGN' ? dollars(i.usd) : naira(i.ngn)})`, pu && `Purpose: ${pu}`, extra].filter(Boolean);
  }
  function proofMsg(method, extra) {
    const lines = proofLines(extra).map(l => l.replace(/^([A-Za-z ]+):/, '*$1:*'));
    return `Hello DigitaSolution, I have paid ${method}.` + (lines.length ? '\n\n' + lines.join('\n') : '');
  }
  $('#proofBtn').addEventListener('click', e => { e.currentTarget.href = wa(proofMsg(`by bank transfer to ${BANK.bank} ${BANK.number} (${BANK.name})`)); });
  $('#proofBtnMail').addEventListener('click', e => {
    const lines = proofLines();
    e.currentTarget.href = mail(proofSubject('Bank transfer'), `Hello DigitaSolution,\n\nI have paid by bank transfer to ${BANK.bank} ${BANK.number} (${BANK.name}).\n\n` + lines.join('\n') + '\n\nProof of payment is attached.');
  });
  $('#btcProof').addEventListener('click', e => { const i = amountInfo(); e.currentTarget.href = wa(proofMsg('with Bitcoin', i && i.btc != null ? `*BTC sent (estimate):* ${fmtBtc(i.btc)}` : '')); });
  $('#btcProofMail').addEventListener('click', e => {
    const i = amountInfo(); const lines = proofLines(i && i.btc != null ? `BTC sent (estimate): ${fmtBtc(i.btc)}` : '');
    e.currentTarget.href = mail(proofSubject('Bitcoin'), 'Hello DigitaSolution,\n\nI have paid with Bitcoin.\n\n' + lines.join('\n') + '\n\nTransaction ID:\n');
  });

  updateEq();
  loadRates();

  /* ---------- Mobile menu ---------- */
  const burger = $('#burger'), mnav = $('#mnav');
  burger.addEventListener('click', () => {
    const open = mnav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  $$('#mnav a').forEach(a => a.addEventListener('click', () => { mnav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));

  /* ---------- Scroll spy ---------- */
  const spy = ['home', 'services', 'pricing', 'portfolio', 'pay', 'contact'];
  function onScroll() {
    let cur = 'home';
    spy.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 120) cur = id; });
    $$('[data-spy]').forEach(a => a.classList.toggle('active', a.dataset.spy === cur));
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Reveal on scroll ---------- */
  const rv = $$('.rv');
  if (hasIO && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('shown'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    rv.forEach(el => io.observe(el));
    setTimeout(() => rv.forEach(el => el.classList.add('shown')), 4000);
  }

  /* ---------- Static contact links (header, hero, footer, fabs) ---------- */
  $$('[data-wa-link]').forEach(a => { a.href = wa(a.dataset.waLink || 'Hello DigitaSolution, I would like to know more.'); });
  $$('[data-mail-link]').forEach(a => {
    const subject = a.dataset.mailSubject || 'Website enquiry';
    const body = a.dataset.mailLink || 'Hello DigitaSolution,\n\nI would like to know more.\n\nThanks.';
    a.href = mail(subject, body);
  });
  const emailTextEl = $('#emailAddrText'); if (emailTextEl) emailTextEl.textContent = EMAIL;

  $('#yr').textContent = new Date().getFullYear();
})();