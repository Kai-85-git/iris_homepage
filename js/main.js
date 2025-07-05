document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.header__link');
  const header = document.querySelector('.header');
  const contactForm = document.getElementById('contactForm');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    const lines = navToggle.querySelectorAll('.header__toggle-line');
    if (navMenu.classList.contains('active')) {
      lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      lines[0].style.transform = '';
      lines[1].style.opacity = '';
      lines[2].style.transform = '';
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          const lines = navToggle.querySelectorAll('.header__toggle-line');
          lines[0].style.transform = '';
          lines[1].style.opacity = '';
          lines[2].style.transform = '';
        }
      }
    });
  });

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.service-card, .profile__content, .contact__form');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
      errors.push('お名前は2文字以上で入力してください。');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.push('有効なメールアドレスを入力してください。');
    }
    
    if (!data.subject || data.subject.trim().length < 2) {
      errors.push('件名は2文字以上で入力してください。');
    }
    
    if (!data.message || data.message.trim().length < 10) {
      errors.push('お問い合わせ内容は10文字以上で入力してください。');
    }
    
    if (errors.length > 0) {
      alert('入力内容に誤りがあります：\\n' + errors.join('\\n'));
      return;
    }
    
    const mailtoLink = `mailto:contact@iris-ai.jp?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`お名前: ${data.name}\\nメールアドレス: ${data.email}\\n\\n${data.message}`)}`;
    window.location.href = mailtoLink;
    
    alert('お問い合わせありがとうございます。メールクライアントが開きます。');
    
    contactForm.reset();
  });

  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        if (text.charAt(i) === '<') {
          const tagEnd = text.indexOf('>', i);
          heroTitle.innerHTML += text.substring(i, tagEnd + 1);
          i = tagEnd + 1;
        } else {
          heroTitle.innerHTML += text.charAt(i);
          i++;
        }
        setTimeout(typeWriter, 50);
      }
    }
    
    setTimeout(typeWriter, 500);
  }
});