$(function () {

  $('a[href^="#"]').on('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = $(href);
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({ scrollTop: target.offset().top - 90 }, 450);
    }
  });

  $(document).on('click', '.js-open-project', function (e) {
    e.preventDefault();
    const $btn = $(this);

    $('#projectModalLabel').text($btn.data('title') || 'Projet');
    $('#projectModalTag').text($btn.data('tag') || '');

    const bodyHtml = $btn.data('body') || '<p class="mb-0"></p>';
    $('#projectModalBody').html(bodyHtml);

    let href = $btn.data('ctaHref') || $btn.data('file') || $btn.attr('href') || '';

    if (!href || href === '#') {
      const imgSrc = $btn.find('img').attr('src');
      if (imgSrc) href = imgSrc;
    }

    const dict = (window.__i18n && window.__i18n.current) ? window.__i18n.current : null;
    const openText = $btn.data('ctaText') || (dict && dict['ui.openNewTab']) || 'Ouvrir dans un nouvel onglet';

    if (href) {
      $('#projectModalCta').removeClass('d-none').attr('href', href).attr('target', '_blank').attr('rel', 'noopener').text(openText);
    } else {
      $('#projectModalCta').addClass('d-none');
    }

    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
  });

    
$(document).on('click', '#openWebdevModal', function () {
    const modal = new bootstrap.Modal(document.getElementById('webdevLinksModal'));
    modal.show();
  });

  const translations = {
    fr: {
      'skills.cat.frameworks':'Frameworks & bibliothèques',
      'skills.cat.languages':'Langages',
      'ui.lang':'Langue',
      'ui.themeDark':'Thème : Sombre',
      'ui.themeLight':'Thème : Clair',
      'ui.discover':'Découvrir',
      'ui.contactMe':'Me contacter',
      'ui.seeProductions':'Voir mes productions',
      'ui.ok':'OK',
      'ui.close':'Fermer',
      'ui.backToTop':'Retour en haut',
      'ui.details':'Détails',
      'ui.view':'Voir',
      'ui.links':'Liens',
      'ui.downloadPdf':'Télécharger (PDF)',
      'ui.preview':'Aperçu',
      'ui.openNewTab':'Ouvrir dans un nouvel onglet',
      'ui.send':'Envoyer',

      'nav.productions':'Productions',
      'nav.contact':'Contact',
      'nav.about':'À propos',
      'nav.cv':'CV',
      'nav.photos':'Photographies',
      'nav.videos':'Vidéos',
      'nav.graphics':'Productions graphiques',
      'nav.communication':'Gestion de projet',
      'nav.websites':'Sites web',

      'hero.title':'Portfolio de Raphaël Maillet',
      'hero.lead':'19 ans, étudiant en BUT MMI (Bachelor Universitaire de Technologie Métiers du Multimédia et de l’Interneten 2ème année.',
      'home.productionsTitle':'Mes productions',
      'home.productionsSubtitle':'Aperçu de mes productions',
      'home.goSections':'Aller aux sections',

      'page.photos.title':'Photographies',
      'page.photos.subtitle':'',
      'page.videos.title':'Vidéos',
      'page.videos.subtitle':'Mes projets vidéos',
      'page.graphics.title':'Productions graphiques',
      'page.graphics.subtitle':'',
      'page.communication.title':'Gestion de projet',
      'page.communication.subtitle':'',
      'page.websites.title':'Sites web',
      'page.websites.subtitle':'Mes sites développés (liens et fiches projets).',

      'sec.skills':'Compétences',
      'skills.subtitle':'Organisées par catégories, avec bordure #bcaf9a.',
      'skills.langs':'Langages de programmation',
      'skills.software':'Logiciels',

      'sec.cv':'CV',
      'cv.subtitle':'Télécharger mon CV en PDF ou ouvrer l’aperçu.',
      'cv.summary':'Résumé',
      'cv.quick':'Accès rapide',

      'sec.contact':'Contact',
      'contact.subtitle':'',
      'contact.name':'Nom',
      'contact.email':'Email',
      'contact.message':'Message',
      'contact.successTitle':'Message envoyé',
      'contact.successBody':'Merci ! Ton message a bien été reçu.',
      'contact.errorTitle':'Erreur',
      'contact.errorBody':'Impossible d’envoyer le message. Réessaie plus tard.',

      'about.title':'À propos',
      'footer.copy':'©Raphaël Maillet— 2026 — Mon Portfolio'
    },
    en: {
      'ui.lang':'Language',
      'ui.themeDark':'Theme: Dark',
      'ui.themeLight':'Theme: Light',
      'ui.discover':'Explore',
      'ui.contactMe':'Contact me',
      'ui.seeProductions':'See my work',
      'ui.ok':'OK',
      'ui.close':'Close',
      'ui.backToTop':'Back to top',
      'ui.details':'Details',
      'ui.view':'View',
      'ui.links':'Links',
      'ui.downloadPdf':'Download (PDF)',
      'ui.preview':'Preview',
      'ui.openNewTab':'Open in a new tab',
      'ui.send':'Send',

      'nav.productions':'Work',
      'nav.contact':'Contact',
      'nav.about':'About',
      'nav.cv':'Resume',
      'nav.photos':'Photography',
      'nav.videos':'Videos',
      'nav.graphics':'Graphic design',
      'nav.communication':'Gestion de projet',
      'nav.websites':'Websites',

      'hero.title':'Portfolio of Raphaël Maillet',
      'hero.lead':'19 years old, student in BUT MMI (Bachelor of Technology Multimedia and Internet Professions in 2nd year.',
      'home.productionsTitle':'My work',
      'home.productionsSubtitle':'An overview of my projects.',
      'home.goSections':'Go to sections',

      'page.photos.title':'Photography',
      'page.photos.subtitle':'',
      'page.videos.title':'Videos',
      'page.videos.subtitle':'Mes projets vidéos',
      'page.graphics.title':'Graphic design',
      'page.graphics.subtitle':'',
      'page.communication.title':'Gestion de projet',
      'page.communication.subtitle':'',
      'page.websites.title':'Websites',
      'page.websites.subtitle':'My developed websites (links and project cards).',

      'sec.skills':'Skills',
      'skills.subtitle':'',
      'skills.langs':'Programming languages',
      'skills.software':'Software',

      'sec.cv':'Resume',
      'cv.subtitle':'Download my PDF resume or open the preview.',
      'cv.summary':'Summary',
      'cv.quick':'Quick access',

      'sec.contact':'Contact',
      'contact.subtitle':'',
      'contact.name':'Name',
      'contact.email':'Email',
      'contact.message':'Message',
      'contact.successTitle':'Message sent',
      'contact.successBody':'Thanks! Your message has been received.',
      'contact.errorTitle':'Error',
      'contact.errorBody':'Could not send the message. Please try again later.',

      'about.title':'About',
      'footer.copy':'©Raphaël Maillet — 2026 — My Portfolio'
    }
  };

  let currentLang = localStorage.getItem('lang') || 'fr';

  function applyTheme(theme){
    const t = (theme === 'light') ? 'light' : 'dark';
    $('html').attr('data-theme', t);
    localStorage.setItem('theme', t);

    const dict = translations[currentLang] || translations.fr;
    const label = (t === 'light') ? dict['ui.themeLight'] : dict['ui.themeDark'];
    $('[data-role="theme-label"]').text(label);
  }

  $(document).on('click', '#themeToggle, #themeToggleMobile', function(){
    const cur = $('html').attr('data-theme') || localStorage.getItem('theme') || 'dark';
    applyTheme(cur === 'light' ? 'dark' : 'light');
  });

  function applyLang(lang){
    currentLang = (lang === 'en') ? 'en' : 'fr';
    localStorage.setItem('lang', currentLang);

    const dict = translations[currentLang] || translations.fr;

    $('[data-i18n]').each(function(){
      const key = $(this).data('i18n');
      if(dict[key]) $(this).text(dict[key]);
    });

    const year = new Date().getFullYear();
    $('[data-i18n-format="year"]').each(function(){
      const key = $(this).data('i18n');
      if(dict[key]) $(this).text(dict[key].replace('{year}', year));
    });

    $('html').attr('lang', currentLang);

    $('.js-set-lang').removeClass('active');
    $(`.js-set-lang[data-lang="${currentLang}"]`).addClass('active');

    applyTheme(localStorage.getItem('theme') || $('html').attr('data-theme') || 'dark');
  }

  $(document).on('click', '.js-set-lang', function(){
    applyLang($(this).data('lang'));
  });

  $(document).on('submit', '#contactForm', function(e){
    e.preventDefault();
    const to = 'raphaelmaillet.contact@gmail.com';
    const name = ($('input[name="name"]').val() || '').trim();
    const email = ($('input[name="email"]').val() || '').trim();
    const message = ($('textarea[name="message"]').val() || '').trim();

    const subject = encodeURIComponent('Contact — Portfolio');
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });

  applyLang(currentLang);
  applyTheme(localStorage.getItem('theme') || 'dark');
});
