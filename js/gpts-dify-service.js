// GPTs・Dify開発サービスページ専用JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // スクロールトリガーアニメーション
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        
        // Add fade-in class based on element type
        if (target.classList.contains('process-card')) {
          // Stagger animation for process cards
          const cards = document.querySelectorAll('.process-card');
          const index = Array.from(cards).indexOf(target);
          setTimeout(() => {
            target.classList.add('fade-in');
          }, index * 100);
        } else if (target.classList.contains('faq-item')) {
          // Stagger animation for FAQ items
          const items = document.querySelectorAll('.faq-item');
          const index = Array.from(items).indexOf(target);
          setTimeout(() => {
            target.classList.add('fade-in');
          }, index * 150);
        } else if (target.classList.contains('case-card')) {
          // Stagger animation for case study cards
          const cards = document.querySelectorAll('.case-card');
          const index = Array.from(cards).indexOf(target);
          setTimeout(() => {
            target.classList.remove('animate-in');
            target.classList.add('fade-in');
          }, index * 200);
        } else {
          target.classList.add('fade-in');
        }
        
        // Stop observing once animated
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('.process-card, .faq-item, .case-card, .service-card');
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Smooth hover effects for service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Enhanced CTA button interaction
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      // Ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }

  // Parallax effect for hero image
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = scrolled * 0.3;
      heroImage.style.transform = `translateY(${parallaxSpeed}px)`;
    });
  }

  // Progressive section loading
  const sections = document.querySelectorAll('section');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-loaded');
        entry.target.classList.remove('section-loading');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add('section-loading');
    sectionObserver.observe(section);
  });

  // Number counter animation for highlight box
  const highlightBox = document.querySelector('.highlight-box');
  if (highlightBox) {
    const numberObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
          numberObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    numberObserver.observe(highlightBox);
  }

  function animateNumbers() {
    const duration = document.querySelector('.highlight-box h4');
    if (duration && duration.textContent.includes('2〜4週間')) {
      // Add counting animation effect
      duration.style.opacity = '0';
      setTimeout(() => {
        duration.style.opacity = '1';
        duration.style.transform = 'scale(1.1)';
        setTimeout(() => {
          duration.style.transform = 'scale(1)';
        }, 200);
      }, 300);
    }
  }

  // Feature list hover effects
  const featureItems = document.querySelectorAll('.feature-list li');
  featureItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const checkIcon = this.querySelector('.check-icon');
      if (checkIcon) {
        checkIcon.style.transform = 'scale(1.3) rotate(360deg)';
        checkIcon.style.transition = 'transform 0.5s ease';
      }
    });
    
    item.addEventListener('mouseleave', function() {
      const checkIcon = this.querySelector('.check-icon');
      if (checkIcon) {
        checkIcon.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });

  // Smooth scrolling for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Process cards are now visible by default (no initialization needed)

  // Initialize case cards with animate-in class
  const caseCards = document.querySelectorAll('.case-card');
  caseCards.forEach(card => {
    card.classList.add('animate-in');
  });

  // FAQ items are now visible by default (no initialization needed)
});

// CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);