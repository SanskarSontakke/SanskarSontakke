import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Handle skill bars separately if needed
          const fill = entry.target.querySelector('.skill-level-fill');
          if (fill) {
            setTimeout(() => {
              fill.style.width = fill.dataset.level + '%';
            }, 200);
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      revealEls.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
