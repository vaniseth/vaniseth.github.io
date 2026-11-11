/* Renders the site from data.js. You shouldn't need to edit this file to
   change content — edit data.js instead. */
(function () {
  'use strict';
  var S = window.SITE;
  var root = document.documentElement;
  var $ = function (sel) { return document.querySelector(sel); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function isExternal(url) { return /^https?:\/\//.test(url); }
  function pills(links, extraClass) {
    return (links || []).filter(function (l) { return l && l.url; }).map(function (l) {
      var ext = isExternal(l.url) ? ' target="_blank" rel="noopener"' : '';
      return '<a class="pill' + (extraClass ? ' ' + extraClass : '') + '" href="' + esc(l.url) + '"' + ext + '>' + esc(l.label) + '</a>';
    }).join('');
  }
  var ICON_PERSON = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>';
  var ICON_IMAGE = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/></svg>';
  var ICON_TROPHY = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>';

  var state = { theme: 'all', gallery: 'all', newsOpen: false };

  /* ---------------- Theme (light / dark) + accent */
  if (S.accent && S.accent !== 'evergreen') root.setAttribute('data-accent', S.accent);
  var toggle = $('#theme-toggle');
  function syncToggle() {
    var dark = root.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncToggle();
  });
  syncToggle();

  /* ---------------- Mobile menu */
  var menuBtn = $('.nav-menu-btn'), navLinks = $('#nav-links');
  menuBtn.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { navLinks.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });

  /* ---------------- Hero */
  document.querySelectorAll('[data-bind="name"]').forEach(function (el) { el.textContent = S.name; });
  document.title = S.name;
  $('#hero-role').textContent = S.role;
  // if (S.callout) { var c = $('#hero-callout'); c.textContent = S.callout; c.hidden = false; }
  if (S.callout) {
    var c = $('#hero-callout');
    // var link = S.calloutLink;
    // var linkHtml = (link && link.url)
    var emailEntry = (S.profileLinks || []).filter(function (l) { return /^mailto:/i.test(l.url || ''); })[0];
    var link = {
      label: (S.calloutLink && S.calloutLink.label) || 'Get in touch →',
      url: (S.calloutLink && S.calloutLink.url) || (emailEntry && emailEntry.url) || ''
    };
    var linkHtml = link.url
      ? '<a href="' + esc(link.url) + '"' + (isExternal(link.url) ? ' target="_blank" rel="noopener"' : '') + '>' + esc(link.label || 'Get in touch →') + '</a>'
      : '';
    var detail = [S.calloutInterests, linkHtml].filter(Boolean).join(' · ');
    c.innerHTML = '<span class="callout-status">' + S.callout + '</span>' +
                  (detail ? '<span class="callout-detail">' + detail + '</span>' : '');
    c.hidden = false;
  }
  $('#hero-bio').innerHTML = (S.bio || []).map(function (p) { return '<p>' + p + '</p>'; }).join(''); // bio allows trusted HTML

  var photo = $('#hero-photo');
  function photoPlaceholder() { photo.classList.add('placeholder'); photo.innerHTML = ICON_PERSON + '<span>Photo</span>'; }
  if (S.photo) {
    var img = new Image();
    img.alt = 'Portrait of ' + S.name;
    img.onerror = photoPlaceholder;
    img.src = S.photo;
    photo.appendChild(img);
  } else { photoPlaceholder(); }

  var profile = $('#profile-links');
  profile.classList.add('profile');
  profile.innerHTML = pills(S.profileLinks);

  var navCv = $('#nav-cv');
  if (S.cv) { navCv.href = S.cv; navCv.target = '_blank'; navCv.rel = 'noopener'; } else { navCv.hidden = true; }

  /* ---------------- Research theme cards */
  var themeById = {};
  S.themes.forEach(function (t) { themeById[t.id] = t; });
  function countFor(id) { return S.publications.filter(function (p) { return p.theme === id; }).length; }

  function renderThemes() {
    $('#theme-cards').innerHTML = S.themes.map(function (t, i) {
      var on = state.theme === t.id;
      var cta = on ? 'Show all papers' : 'View papers →';
      return '<button type="button" class="theme-card" data-theme-id="' + esc(t.id) + '" aria-pressed="' + on + '">' +
        '<span class="theme-num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="theme-title">' + esc(t.title) + '</span>' +
        '<span class="theme-blurb">' + esc(t.blurb) + '</span>' +
        ((t.projects && t.projects.length)
          ? '<span class="theme-projects"><span class="label">Key projects</span>' +
              t.projects.map(function (p) { return '<span>' + esc(p) + '</span>'; }).join('') +
            '</span>'
          : '') +
        '<span class="theme-cta">' + cta + '</span>' +
      '</button>';
    }).join('');
  }
  $('#theme-cards').addEventListener('click', function (e) {
    var card = e.target.closest('.theme-card'); if (!card) return;
    var id = card.getAttribute('data-theme-id');
    state.theme = state.theme === id ? 'all' : id;
    renderThemes(); renderPubs();
    if (state.theme !== 'all') $('#publications').scrollIntoView();
  });

  /* ---------------- News */
  /* All items are rendered; the list is sized to show the first `newsVisible`
     and the rest scroll inside it. */
  var newsList = $('#news-list');
  function renderNews() {
    newsList.innerHTML = S.news.map(function (n) {
      // News text is your own trusted content, so simple HTML (<a>, <strong>, <em>) is allowed.
      return '<li class="row"><span class="row-lead">' + esc(n.date) + '</span><span class="row-body">' + n.text + '</span></li>';
    }).join('');
    // sizeNews();
    clampList(newsList, S.newsVisible || 5);
  }
  // function sizeNews() {
  //   var limit = S.newsVisible || 5;
  //   var rows = newsList.children;
  //   newsList.classList.add('news-scroll');
  //   if (rows.length <= limit) {
  //     newsList.style.maxHeight = '';
  //     newsList.style.overflowY = '';
  //     newsList.classList.remove('scrollable', 'more-below');
  //     newsList.removeAttribute('tabindex');
  //     return;
  //   }
  //   // Measure with the list unclamped, then clamp to the first `limit` rows.
  //   newsList.style.maxHeight = 'none';
  //   var first = rows[0], last = rows[limit - 1];
  //   var height = last.getBoundingClientRect().bottom - first.getBoundingClientRect().top;
  //   newsList.style.maxHeight = Math.ceil(height) + 'px';
  //   newsList.style.overflowY = 'auto';   // set inline so it works even with an older style.css
  //   newsList.classList.add('scrollable');
  //   newsList.setAttribute('tabindex', '0');
  //   updateNewsFade();
  // }
  // function updateNewsFade() {
  //   var atEnd = newsList.scrollTop + newsList.clientHeight >= newsList.scrollHeight - 2;
  //   newsList.classList.toggle('more-below', !atEnd);
  // }
  // newsList.addEventListener('scroll', updateNewsFade, { passive: true });
  // window.addEventListener('resize', sizeNews);
  // if (document.fonts && document.fonts.ready) document.fonts.ready.then(sizeNews);

    function clampList(list, limit) {
    if (!list || list.hidden) return;
    var rows = list.children;
    list.classList.add('news-scroll');
    if (rows.length <= limit) {
      list.style.maxHeight = ''; list.style.overflowY = '';
      list.classList.remove('scrollable', 'more-below');
      list.removeAttribute('tabindex');
      return;
    }
    list.style.maxHeight = 'none';
    var first = rows[0], last = rows[limit - 1];
    var height = last.getBoundingClientRect().bottom - first.getBoundingClientRect().top;
    list.style.maxHeight = Math.ceil(height) + 'px';
    list.style.overflowY = 'auto';
    list.classList.add('scrollable');
    list.setAttribute('tabindex', '0');
    updateFade(list);
    if (!list._fadeBound) {
      list.addEventListener('scroll', function () { updateFade(list); }, { passive: true });
      list._fadeBound = true;
    }
  }
  function updateFade(list) {
    var atEnd = list.scrollTop + list.clientHeight >= list.scrollHeight - 2;
    list.classList.toggle('more-below', !atEnd);
  }
  function resizeLists() {
    clampList(newsList, S.newsVisible || 5);
    document.querySelectorAll('.tab-panel').forEach(function (p) { clampList(p, S.tabsVisible || 5); });
  }
  window.addEventListener('resize', resizeLists);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(resizeLists);

  /* ---------------- Publications */
  function boldName(authors) {
    var safe = esc(authors), name = esc(S.name);
    return safe.split(name).join('<strong>' + name + '</strong>');
  }
  function renderPubChips() {
    var chips = [{ id: 'all', label: 'All' }].concat(S.themes.map(function (t) { return { id: t.id, label: t.short }; }));
    $('#pub-chips').innerHTML = chips.map(function (c) {
      return '<button type="button" class="chip" data-id="' + esc(c.id) + '" aria-pressed="' + (state.theme === c.id) + '">' + esc(c.label) + '</button>';
    }).join('');
  }
  $('#pub-chips').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    state.theme = b.getAttribute('data-id');
    renderThemes(); renderPubs();
  });
  function renderPubs() {
    renderPubChips();
    var all = S.publications;
    var list = all.filter(function (p) { return state.theme === 'all' || p.theme === state.theme; });
    $('#pub-count').textContent = '* equal contribution · showing ' +
      (state.theme === 'all' ? 'all ' + all.length : list.length + ' of ' + all.length) + ' papers';
    $('#pub-list').innerHTML = list.map(function (p) {
      var badges = (p.award ? '<span class="badge award">' + ICON_TROPHY + esc(p.award) + '</span>' : '') +
                   (p.tag ? '<span class="badge tag">' + esc(p.tag) + '</span>' : '');
      var th = themeById[p.theme];
      return '<article class="pub' + (p.award ? ' awarded' : '') + '">' +
        '<div class="pub-top"><div class="badges">' + badges + '</div>' +
          (th ? '<span class="pub-theme">' + esc(th.short) + '</span>' : '') + '</div>' +
        '<h3>' + esc(p.title) + '</h3>' +
        '<p class="pub-authors">' + boldName(p.authors) + '</p>' +
        '<p class="pub-venue"><strong>' + esc(p.venue) + '</strong>' + (p.venueLong ? ' | ' + esc(p.venueLong) : '') + '</p>' +
        '<div class="pill-row">' + pills(p.links) + '</div>' +
      '</article>';
    }).join('');
  }

  /* ---------------- Tabs (awards, experience, education, talks, grants) */
  var tabs = S.tabs.filter(function (t) { return t.rows && t.rows.length; });
  function renderTabs() {
    $('#tabs').innerHTML = tabs.map(function (t, i) {
      return '<button type="button" class="tab" role="tab" id="tab-' + esc(t.id) + '" aria-controls="panel-' + esc(t.id) + '"' +
        ' aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' +
        esc(t.label) + '<span class="tab-count">' + t.rows.length + '</span></button>';
    }).join('');
    $('#tab-panels').innerHTML = tabs.map(function (t, i) {
      return '<ul class="row-list tab-panel" role="tabpanel" id="panel-' + esc(t.id) + '" aria-labelledby="tab-' + esc(t.id) + '"' + (i === 0 ? '' : ' hidden') + '>' +
        t.rows.map(function (r) {
          var links = pills(r.links);
          return '<li class="row"><span class="row-lead">' + esc(r.lead) + '</span><div class="row-body">' +
            // '<span class="row-title">' + esc(r.title) + '</span>' +
            // (r.sub ? '<span class="row-sub">' + esc(r.sub) + '</span>' : '') +
            '<span class="row-title">' + r.title + '</span>' +
            (r.sub ? '<span class="row-sub">' + r.sub + '</span>' : '') +
            (links ? '<div class="pill-row">' + links + '</div>' : '') +
          '</div></li>';
        }).join('') + '</ul>';
    }).join('');
    clampList(document.querySelector('.tab-panel:not([hidden])'), S.tabsVisible || 5);
  }
  function selectTab(btn, focus) {
    document.querySelectorAll('.tab').forEach(function (b) {
      var on = b === btn;
      b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
      // document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      panel.hidden = !on;
      if (on) clampList(panel, S.tabsVisible || 5);
    });
    if (focus) btn.focus();
  }
  $('#tabs').addEventListener('click', function (e) { var b = e.target.closest('.tab'); if (b) selectTab(b); });
  $('#tabs').addEventListener('keydown', function (e) {
    var list = Array.prototype.slice.call(document.querySelectorAll('.tab'));
    var i = list.indexOf(document.activeElement); if (i < 0) return;
    var next = null;
    if (e.key === 'ArrowRight') next = list[(i + 1) % list.length];
    if (e.key === 'ArrowLeft') next = list[(i - 1 + list.length) % list.length];
    if (e.key === 'Home') next = list[0];
    if (e.key === 'End') next = list[list.length - 1];
    if (next) { e.preventDefault(); selectTab(next, true); }
  });

  /* ---------------- Gallery */
  var catLabel = {};
  S.galleryCategories.forEach(function (c) { catLabel[c.id] = c.label; });
  function renderGallery() {
    var chips = [{ id: 'all', label: 'All' }].concat(S.galleryCategories);
    $('#gal-chips').innerHTML = chips.map(function (c) {
      return '<button type="button" class="chip" data-id="' + esc(c.id) + '" aria-pressed="' + (state.gallery === c.id) + '">' + esc(c.label) + '</button>';
    }).join('');
    var items = S.gallery.filter(function (g) { return state.gallery === 'all' || g.category === state.gallery; });
    $('#gallery-grid').innerHTML = items.map(function (g) {
      var idx = S.gallery.indexOf(g);
      var media = g.src
        ? '<button type="button" class="gallery-thumb" data-idx="' + idx + '" aria-label="View larger: ' + esc(g.caption) + '"><img src="' + esc(g.src) + '" alt="' + esc(g.alt || g.caption) + '" loading="lazy"></button>'
        : '<div class="photo-placeholder" role="img" aria-label="Photo placeholder">' + ICON_IMAGE + '<span>Photo</span></div>';
      return '<figure class="gallery-item">' + media +
        '<figcaption><span class="gallery-caption">' + esc(g.caption) + '</span>' +
        '<span class="gallery-meta">' + esc(g.date) + (catLabel[g.category] ? ' · ' + esc(catLabel[g.category]) : '') + '</span></figcaption>' +
      '</figure>';
    }).join('');
  }
  $('#gal-chips').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    state.gallery = b.getAttribute('data-id'); renderGallery();
  });

  var lb = $('#lightbox');
  $('#gallery-grid').addEventListener('click', function (e) {
    var t = e.target.closest('.gallery-thumb'); if (!t) return;
    var g = S.gallery[+t.getAttribute('data-idx')];
    $('#lightbox-img').src = g.src;
    $('#lightbox-img').alt = g.alt || g.caption;
    $('#lightbox-caption').textContent = g.caption + (g.date ? ' · ' + g.date : '');
    if (lb.showModal) lb.showModal(); else window.open(g.src, '_blank');
  });
  $('.lightbox-close').addEventListener('click', function () { lb.close(); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });

    /* ---------------- Email links: open the mail app AND copy the address */
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  document.body.appendChild(toast);
  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 3200);
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? resolve() : reject(); } catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="mailto:"]');
    if (!a) return;
    var address = decodeURIComponent(a.getAttribute('href').replace(/^mailto:/i, '').split('?')[0]).trim();
    copyText(address)
      .then(function () { showToast('Email copied: ' + address); })
      .catch(function () { showToast('Email: ' + address); });
  });

  /* ---------------- Footer */
  $('#footer-copy').textContent = '© ' + new Date().getFullYear() + ' ' + S.name;
  $('#footer-updated').textContent = S.lastUpdated ? 'Last updated ' + S.lastUpdated : '';

  renderThemes(); renderNews(); renderPubs(); renderTabs(); renderGallery();
})();