document.querySelectorAll('.slide').forEach((slide) => {
    gsap.to(slide.querySelector('.slideContent'), {
      duration: 0.5,
      opacity: 1,
      ease: 'power2.out',
    });
  
    gsap.to(slide.querySelector('.slideContentInner'), {
      duration: 0.3,
      opacity: 1,
      ease: 'power2.out',
    });
  
    gsap.to(slide.querySelector('.slideBackground'), {
      duration: 0.3,
      opacity: 0.2,
      ease: 'power2.out',
    });
  
    slide.addEventListener('mouseover', () => {
      gsap.to(slide.querySelector('.slideContent'), {
        duration: 0.3,
        rotationY: -45,
        rotationX: 45,
        ease: 'power2.out',
      });
    });
  
    slide.addEventListener('mouseout', () => {
      gsap.to(slide.querySelector('.slideContent'), {
        duration: 0.3,
        rotationY: 0,
        rotationX: 0,
        ease: 'power2.out',
      });
    });
  });