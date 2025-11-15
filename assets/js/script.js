// dr.water bilingual content & interactions
document.addEventListener('DOMContentLoaded', () => {
  // Animation
  AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out-quart'
  });

  // Normalize AOS animations across all screens: fade-left/right -> fade
  const normalizeAOSAnimations = () => {
    document.querySelectorAll('[data-aos]').forEach(el => {
      const val = el.getAttribute('data-aos');
      if (/^fade-(left|right)$/.test(val)) {
        el.setAttribute('data-aos', 'fade');
      }
    });
    if (window.AOS && typeof window.AOS.refresh === 'function') {
      window.AOS.refresh();
    }
  };
  // Initial normalization
  normalizeAOSAnimations();

  const content = {
    id: {
      // nav
      'nav.why': 'Kenapa',
      'nav.how': 'Cara Kerja',
      'nav.buy': 'Beli Tumbler',
      'nav.locations': 'Titik Refill',
      'nav.partnership': 'Kemitraan',
      'nav.about': 'Tentang',
      'nav.blog': 'Blog',
      'nav.contact': 'Kontak & FAQ',

      // hero
      'hero.title': 'Air Panas & Dingin Sepuasnya. Gratis Selama Setahun.',
      'hero.subtitle': 'Cukup beli tumbler dr.water — isi air murni panas atau dingin di titik refill mana pun tanpa biaya tambahan.',
      'hero.btn.buy': 'Beli Tumbler Sekarang',
      'hero.btn.map': 'Lihat Titik Refill',

      // why
      'why.title': 'Kenapa dr.water',
      'why.safe.title': 'Air Murni Aman & Sehat',
      'why.safe.body': 'Disaring dengan teknologi RO + UV agar air selalu bersih.',
      'why.hotcold.title': 'Air Panas & Dingin',
      'why.hotcold.body': 'Bisa langsung seduh kopi, teh, atau mie.',
      'why.free.title': 'Gratis 1 Tahun',
      'why.free.body': 'Bayar sekali untuk tumbler, isi sepuasnya selama 12 bulan.',
      'why.eco.title': 'Ramah Lingkungan',
      'why.eco.body': 'Kurangi limbah botol plastik sekali pakai.',

      // how
      'how.title': 'Cara Kerja',
      'how.step1': 'Beli tumbler dr.water',
      'how.step2': 'Aktivasi kode QR di website atau aplikasi',
      'how.step3': 'Isi ulang di titik refill terdekat',
      'how.step4': 'Nikmati air panas atau dingin kapan pun',

      // story
      'story.title': 'Cerita Air Bersih untuk Semua',
      'story.body': '“Kami percaya air bersih dan sehat adalah hak dasar, bukan kemewahan. Dengan dr.water, siapapun bisa menikmati air murni panas atau dingin — gratis, sehat, dan tanpa ribet.”',

      // buy
      'buy.title': 'Beli Tumbler',
      'buy.subtitle': 'Fokus pada kejelasan harga dan manfaat air gratis setahun.',
      'buy.badge': 'Gratis 1 Tahun',
      'buy.go.name': 'dr.water Go 500ml',
      'buy.go.price': 'Rp99.000',
      'buy.go.desc': 'Ringan, praktis, cocok untuk pekerja lapangan dan ojol.',
      'buy.move.name': 'dr.water Move 700ml',
      'buy.move.price': 'Rp129.000',
      'buy.move.desc': 'Untuk mahasiswa dan pekerja aktif, tahan panas dan dingin.',
      'buy.family.name': 'dr.water Family 1L',
      'buy.family.price': 'Rp149.000',
      'buy.family.desc': 'Kapasitas besar untuk rumah dan keluarga kecil.',
      'buy.cta': 'Beli Sekarang',
      'buy.note': 'Semua harga sudah termasuk akses refill air murni panas & dingin gratis selama 1 tahun.',

      // locations
      'locations.title': 'Titik Refill dr.water',
      'locations.subtitle': 'Isi air murni panas & dingin di titik dr.water terdekat. Tersedia di area padat penduduk, kos, dan kawasan ramai.',
      'locations.cta.map': 'Lihat Peta Lokasi',
      'locations.cta.partner': 'Ingin buka titik refill? Lihat Kemitraan',

      // partnership
      'partnership.title': 'Kemitraan',
      'partnership.subtitle': 'Jelaskan dua jalur utama: mitra lokasi kecil dan lisensi regional.',
      'partner.small.title': 'Mitra Lokasi Kecil',
      'partner.small.desc': '“Punya lahan kecil atau kios di area ramai? Jadilah bagian dari gerakan air bersih dr.water. dr.water sediakan mesin & sistem, kamu sediakan lahan & listrik. Bagi hasil ringan, dengan dukungan promosi dari pusat.”',
      'partner.small.cta': 'Daftar Jadi Mitra',
      'partner.reg.title': 'Lisensi Regional',
      'partner.reg.desc': '“Bawa gerakan air murni ke kotamu. Jadi pemegang lisensi resmi dr.water dengan hak distribusi & operasional penuh.”',
      'partner.reg.cta': 'Ajukan Lisensi Resmi',

      // footer & sticky
      'footer.privacy': 'Kebijakan Privasi',
      'footer.terms': 'Syarat & Ketentuan',
      'footer.tagline': 'dr.water — Air Murni untuk Semua.',
      'footer.copy': '© 2025 dr.water Indonesia',
      'sticky.buy': 'Beli Tumbler',
      'sticky.map': 'Lihat Peta'
    },
    en: {
      // nav
      'nav.why': 'Why',
      'nav.how': 'How It Works',
      'nav.buy': 'Buy Tumbler',
      'nav.locations': 'Refill Stations',
      'nav.partnership': 'Partnership',
      'nav.about': 'About',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact & FAQ',

      // hero
      'hero.title': 'Unlimited Hot & Cold Water. Free for One Year.',
      'hero.subtitle': 'Just buy a dr.water tumbler — refill pure hot or cold water anytime, for free.',
      'hero.btn.buy': 'Buy Tumbler Now',
      'hero.btn.map': 'Find Refill Station',

      // why
      'why.title': 'Why dr.water',
      'why.safe.title': 'Pure & Safe Water',
      'why.safe.body': 'Filtered using RO + UV system for guaranteed purity.',
      'why.hotcold.title': 'Hot & Cold',
      'why.hotcold.body': 'Instantly brew your coffee, tea, or instant meals.',
      'why.free.title': 'Free for One Year',
      'why.free.body': 'Pay once, refill unlimited for 12 months.',
      'why.eco.title': 'Eco-Friendly',
      'why.eco.body': 'Reduce single-use plastic waste.',

      // how
      'how.title': 'How It Works',
      'how.step1': 'Buy your dr.water tumbler',
      'how.step2': 'Activate QR on the website or app',
      'how.step3': 'Refill at the nearest dr.water station',
      'how.step4': 'Enjoy hot or cold water anytime',

      // story
      'story.title': 'Clean Water for Everyone',
      'story.body': '“We believe clean and healthy water is a basic right, not a luxury. With dr.water, everyone can enjoy pure hot or cold water — free, safe, and simple.”',

      // buy
      'buy.title': 'Buy Tumbler',
      'buy.subtitle': 'Turn visitors into buyers with clear pricing and one-year free water.',
      'buy.badge': 'Free for 1 Year',
      'buy.go.name': 'dr.water Go 500ml',
      'buy.go.price': 'Rp99,000',
      'buy.go.desc': 'Lightweight, ideal for riders and outdoor workers.',
      'buy.move.name': 'dr.water Move 700ml',
      'buy.move.price': 'Rp129,000',
      'buy.move.desc': 'Perfect for students and office workers.',
      'buy.family.name': 'dr.water Family 1L',
      'buy.family.price': 'Rp149,000',
      'buy.family.desc': 'Large capacity for home and small families.',
      'buy.cta': 'Buy Now',
      'buy.note': 'All prices include one-year free access to pure hot & cold water refills.',

      // locations
      'locations.title': 'dr.water Refill Stations',
      'locations.subtitle': 'Refill pure hot & cold water at the nearest dr.water station. Available in high-density areas, dorms, and public spaces.',
      'locations.cta.map': 'View Map',
      'locations.cta.partner': 'Want to open a station? See Partnership',

      // partnership
      'partnership.title': 'Partnership',
      'partnership.subtitle': 'Two main paths: small-location partners and regional licensing.',
      'partner.small.title': 'Small Location Partner',
      'partner.small.desc': '“Own a small space in a busy area? Become part of the dr.water movement. dr.water provides the machine and system; you provide the location and power. Simple profit share and promotional support.”',
      'partner.small.cta': 'Register as Partner',
      'partner.reg.title': 'Regional License',
      'partner.reg.desc': '“Bring the dr.water movement to your city. Become an official license holder with full operational rights and support.”',
      'partner.reg.cta': 'Apply for Regional License',

      // footer & sticky
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms & Conditions',
      'footer.tagline': 'dr.water — Pure Water for Everyone.',
      'footer.copy': '© 2025 dr.water Indonesia',
      'sticky.buy': 'Buy Tumbler',
      'sticky.map': 'View Map'
    }
  };

  // About Us bilingual specifics
  content.id['about.title'] = 'Tentang Kami';
  content.id['about.subtitle'] = 'Membangun kepercayaan dan nilai kemanusiaan. Tone jujur, hangat, inspiratif.';
  content.id['about.body.id'] = '“dr.water lahir dari keresahan sederhana: mengapa air bersih semakin mahal di kota sebesar Jakarta? Kami percaya air murni harus bisa diakses semua orang — tanpa galon mahal, tanpa plastik, tanpa ribet.”';
  content.id['about.body.en'] = '“dr.water was born from a simple concern: why is clean water becoming expensive in a city like Jakarta? We believe pure water should be accessible to everyone — no overpriced gallons, no plastic waste, no hassle.”';
  content.id['about.light.id'] = '1 tumbler = 300 botol plastik yang tidak terbuang.';
  content.id['about.light.en'] = '1 tumbler = 300 plastic bottles saved.';

  content.en['about.title'] = 'About Us';
  content.en['about.subtitle'] = 'Build trust and human value. Tone: honest, warm, inspiring.';
  content.en['about.body.id'] = content.id['about.body.id'];
  content.en['about.body.en'] = content.id['about.body.en'];
  content.en['about.light.id'] = content.id['about.light.id'];
  content.en['about.light.en'] = content.id['about.light.en'];

  // Map simplified keys used in HTML for About section
  content.id['about.body'] = content.id['about.body.id'];
  content.en['about.body'] = content.id['about.body.en'];
  content.id['about.light'] = content.id['about.light.id'];
  content.en['about.light'] = content.id['about.light.en'];

  // Blog / Stories bilingual
  content.id['blog.title'] = 'Blog & Cerita';
  content.id['blog.subtitle'] = 'Ruang edukasi, cerita komunitas, dan insight teknologi.';
  content.id['blog.cat.water'] = 'Air & Kesehatan';
  content.id['blog.cat.eco'] = 'Gaya Hidup Hijau';
  content.id['blog.cat.tech'] = 'Teknologi';
  content.id['blog.cat.partner'] = 'Cerita Mitra';
  content.id['blog.article1.title'] = 'Kenapa air gratis setahun bisa terwujud?';
  content.id['blog.article1.desc'] = 'Model operasional, jaringan refill, dan teknologi pemurnian membuatnya mungkin.';
  content.id['blog.article2.title'] = 'Cerita mitra pertama di Jakarta Selatan';
  content.id['blog.article2.desc'] = 'Bagaimana sebuah kios kecil menjadi pusat akses air murni warga.';
  content.id['blog.read'] = 'Baca Selengkapnya';

  content.en['blog.title'] = 'Blog & Stories';
  content.en['blog.subtitle'] = 'A space for education, community stories, and tech insights.';
  content.en['blog.cat.water'] = 'Water & Health';
  content.en['blog.cat.eco'] = 'Eco Living';
  content.en['blog.cat.tech'] = 'Technology';
  content.en['blog.cat.partner'] = 'Partner Stories';
  content.en['blog.article1.title'] = 'How can one-year free water work?';
  content.en['blog.article1.desc'] = 'Operational model, refill network, and purification tech make it possible.';
  content.en['blog.article2.title'] = 'First dr.water Partner Story in South Jakarta';
  content.en['blog.article2.desc'] = 'How a small kiosk became a pure water access point.';
  content.en['blog.read'] = 'Read More';

  // Contact & FAQ bilingual
  content.id['contact.title'] = 'Kontak & FAQ';
  content.id['contact.subtitle'] = 'Ada pertanyaan? Hubungi kami via WhatsApp atau isi formulir di bawah.';
  content.id['contact.whatsapp'] = 'Hubungi via WhatsApp';
  content.id['contact.form.name'] = 'Nama';
  content.id['contact.form.email'] = 'Email';
  content.id['contact.form.message'] = 'Pesan';
  content.id['contact.form.submit'] = 'Kirim';
  content.id['faq.q1'] = 'Apakah airnya benar-benar gratis?';
  content.id['faq.a1'] = 'Ya, gratis selama 12 bulan setelah aktivasi tumbler. Berlaku di titik refill dr.water yang tersedia.';
  content.id['faq.q2'] = 'Bagaimana perpanjangan setelah setahun?';
  content.id['faq.a2'] = 'Anda dapat memperpanjang akses dengan biaya ringan melalui website atau aplikasi resmi dr.water.';
  content.id['faq.q3'] = 'Bisa refill di luar Jakarta?';
  content.id['faq.a3'] = 'Jaringan kami terus berkembang. Cek peta lokasi di website untuk area yang tersedia.';

  content.en['contact.title'] = 'Contact & FAQ';
  content.en['contact.subtitle'] = 'Have questions? Contact us via WhatsApp or fill out the form below.';
  content.en['contact.whatsapp'] = 'Contact via WhatsApp';
  content.en['contact.form.name'] = 'Name';
  content.en['contact.form.email'] = 'Email';
  content.en['contact.form.message'] = 'Message';
  content.en['contact.form.submit'] = 'Send';
  content.en['faq.q1'] = 'Is the water really free?';
  content.en['faq.a1'] = 'Yes, free for 12 months after tumbler activation. Valid at available dr.water stations.';
  content.en['faq.q2'] = 'How to renew after one year?';
  content.en['faq.a2'] = 'You can renew with a small fee via the website or official dr.water app.';
  content.en['faq.q3'] = 'Can I refill outside Jakarta?';
  content.en['faq.a3'] = 'Our network is expanding. Check the location map on the website for available areas.';

  const setLanguage = (lang) => {
    const dict = content[lang] || content.id;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-key]').forEach(node => {
      const key = node.getAttribute('data-key');
      if (dict[key] !== undefined) {
        node.innerHTML = dict[key];
      }
    });
    localStorage.setItem('drwater_lang', lang);
  };

  // init language from storage or default
  const initialLang = localStorage.getItem('drwater_lang') || 'id';
  setLanguage(initialLang);

  // language switcher
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = el.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Active nav on scroll
  const sections = ['home', 'why', 'how', 'buy', 'locations', 'partnership', 'about', 'blog', 'contact'];
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const setActiveNav = () => {
    let current = 'home';
    const scrollPos = window.scrollY + 100;
    sections.forEach(id => {
      const sec = document.getElementById(id);
      if (sec && sec.offsetTop <= scrollPos) current = id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', setActiveNav);
  setActiveNav();

  // WhatsApp CTA routing
  const PHONE = '6281234567890';
  const getLang = () => document.documentElement.getAttribute('lang') || 'id';
  const getFormInfo = () => {
    const name = document.getElementById('name')?.value?.trim() || '';
    const email = document.getElementById('email')?.value?.trim() || '';
    const message = document.getElementById('message')?.value?.trim() || '';
    return { name, email, message };
  };
  const openWhatsApp = (text) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
  const compose = (action, extra = {}) => {
    const lang = getLang();
    const { name, email, message } = getFormInfo();
    const info = [
      name ? (lang === 'id' ? `Nama: ${name}` : `Name: ${name}`) : null,
      email ? `Email: ${email}` : null,
      message ? (lang === 'id' ? `Pesan: ${message}` : `Message: ${message}`) : null
    ].filter(Boolean).join('\n');

    let header = '';
    switch (action) {
      case 'hero-buy':
        header = lang === 'id' ? 'Halo dr.water, saya ingin membeli tumbler dr.water.' : 'Hello dr.water, I want to buy a dr.water tumbler.';
        break;
      case 'product-buy':
        header = lang === 'id'
          ? `Halo dr.water, saya ingin membeli: ${extra.product || ''}.`
          : `Hello dr.water, I want to buy: ${extra.product || ''}.`;
        break;
      case 'partner-small':
        header = lang === 'id'
          ? 'Halo dr.water, saya ingin daftar jadi mitra lokasi kecil.'
          : 'Hello dr.water, I’d like to register as a small location partner.';
        break;
      case 'partner-regional':
        header = lang === 'id'
          ? 'Halo dr.water, saya ingin ajukan lisensi regional.'
          : 'Hello dr.water, I’d like to apply for regional license.';
        break;
      case 'contact-form':
        header = lang === 'id'
          ? 'Halo dr.water, berikut pertanyaan/saya:'
          : 'Hello dr.water, here is my question:';
        break;
      default:
        header = lang === 'id' ? 'Halo dr.water,' : 'Hello dr.water,';
    }

    return [header, info].filter(Boolean).join('\n\n');
  };

  // Hero CTA: Beli Tumbler Sekarang
  const heroBuy = document.querySelector('[data-key="hero.btn.buy"]');
  if (heroBuy) {
    heroBuy.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp(compose('hero-buy'));
    });
  }

  // Sticky CTA: Beli Tumbler
  const stickyBuy = document.querySelector('[data-key="sticky.buy"]');
  if (stickyBuy) {
    stickyBuy.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp(compose('hero-buy'));
    });
  }

  // WhatsApp floating button (bottom-left)
  const whatsappFab = document.getElementById('whatsapp-fab');
  if (whatsappFab) {
    const message = compose('contact-form');
    whatsappFab.addEventListener('click', () => openWhatsApp(message));
    whatsappFab.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openWhatsApp(message);
      }
    });
  }

  // Product Buy buttons
  document.querySelectorAll('.product-card .btn.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.closest('.product-card')?.querySelector('.card-title')?.textContent?.trim() || '';
      openWhatsApp(compose('product-buy', { product: title }));
    });
  });

  // Partnership CTAs
  const partnerSmall = document.querySelector('[data-key="partner.small.cta"]');
  if (partnerSmall) {
    partnerSmall.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp(compose('partner-small'));
    });
  }
  const partnerReg = document.querySelector('[data-key="partner.reg.cta"]');
  if (partnerReg) {
    partnerReg.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp(compose('partner-regional'));
    });
  }

  // Contact form submit
  const form = document.querySelector('#contact form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      openWhatsApp(compose('contact-form'));
    });
  }
});