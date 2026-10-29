/* 问道信息 · 交互脚本（无依赖） */
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  var body = document.body;

  /* ---------- 导航：顶部常驻，滚动切换底色 ---------- */
  var ticking = false;
  var darkZones = Array.prototype.slice.call(
    document.querySelectorAll('.hero, .section-dark, .footer')
  );

  function overDark() {
    var probe = 42; // 导航中线位置
    return darkZones.some(function (el) {
      var r = el.getBoundingClientRect();
      return r.top <= probe && r.bottom >= probe;
    });
  }

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    nav.classList.toggle('on-dark', overDark());
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---------- 移动端菜单 ---------- */
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? '收起导航' : '展开导航');
    });

    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && body.classList.contains('menu-open')) {
        body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && body.classList.contains('menu-open')) {
        body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 滚动出现 ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // 同组元素依次错开
        var siblings = el.parentElement ? Array.prototype.slice.call(el.parentElement.children) : [];
        var idx = siblings.indexOf(el);
        var delay = Math.max(0, idx) * 70;
        window.setTimeout(function () { el.classList.add('in'); }, Math.min(delay, 350));
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 年份 ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- 飞轮图例联动 ---------- */
  var nodes = document.querySelectorAll('.flywheel .node');
  var legend = document.querySelectorAll('.flywheel-legend li');
  nodes.forEach(function (node, i) {
    node.addEventListener('mouseenter', function () {
      if (legend[i]) legend[i].style.borderTopColor = 'rgba(200,155,92,.55)';
    });
    node.addEventListener('mouseleave', function () {
      if (legend[i]) legend[i].style.borderTopColor = '';
    });
  });
})();
