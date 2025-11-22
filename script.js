// Minimal interactive behaviours: mobile menu, form handler, subtle nav shrink
document.addEventListener('DOMContentLoaded', ()=> {
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  menuBtn.addEventListener('click', ()=>{
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    mobileNav.setAttribute('aria-hidden', String(expanded));
    mobileNav.style.display = expanded ? 'none' : 'block';
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav automatically
        if(window.innerWidth < 1000){
          mobileNav.style.display = 'none';
          menuBtn.setAttribute('aria-expanded','false');
          mobileNav.setAttribute('aria-hidden','true');
        }
      }
    });
  });

  // header shrink on scroll
  const header = document.querySelector('.site-header');
  let last = 0;
  window.addEventListener('scroll', ()=> {
    const y = window.scrollY;
    if(y>40) header.style.backdropFilter = 'blur(8px) saturate(1.05)';
    else header.style.backdropFilter = 'blur(6px)';
  });

  // set year
  document.getElementById('year').textContent = (new Date()).getFullYear();

  // fake form submission (replace with real backend)
  window.submitForm = function(e){
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    setTimeout(()=>{
      btn.textContent = 'Request call';
      btn.disabled = false;
      alert('Thanks — we received your request. We will reach out to schedule a call.');
      e.target.reset();
    }, 900);
  };
});
