 // 1. Inject animation + layout styles
 const style = document.createElement('style');
 style.innerHTML = `
   .scroll_anime_hor {
     overflow: hidden;
     white-space: nowrap;
   }
   .scroll_anime_hor .scroller {
     display: inline-block;
     white-space: nowrap;
     animation: scroll-left 120s linear infinite;
   }
   @keyframes scroll-left {
     0% {
       transform: translateX(0%);
     }
     100% {
       transform: translateX(-50%);
     }
   }
 `;
 document.head.appendChild(style);

 // 2. Setup: Wrap all direct children in a new <div class="scroller">
 document.querySelectorAll('.scroll_anime_hor').forEach(wrapper => {
   // Skip if already has a .scroller
   if (wrapper.querySelector('.scroller')) return;

   // Get the original children
   const originalChildren = Array.from(wrapper.children);
   
   // Create scroller div
   const scroller = document.createElement('div');
   scroller.classList.add('scroller');

   // Move existing children into the scroller
   originalChildren.forEach(child => scroller.appendChild(child));

   // Add scroller to the wrapper
   wrapper.appendChild(scroller);

   // 3. Clone children 3 more times = total 4x
   const childrenToClone = Array.from(scroller.children);
   for (let i = 0; i < 3; i++) {
     childrenToClone.forEach(child => {
       scroller.appendChild(child.cloneNode(true));
     });
   }
 });

 
 document.querySelectorAll('.scroll-content').forEach((scrollContent) => {
    // Create wrapper elements
    const scrollArea = document.createElement('div');
    scrollArea.className = 'horizontal-scroll sticky top-0 h-screen overflow-hidden flex';
  
    const section = document.createElement('div');
    section.className = 'horizontal-section relative';
  
    // Insert and wrap
    const parent = scrollContent.parentNode;
    parent.insertBefore(section, scrollContent);
    section.appendChild(scrollArea);
    scrollArea.appendChild(scrollContent);
  
    // Style scrollContent
    scrollContent.classList.add('flex', 'h-full');
    scrollContent.style.width = 'max-content';
  
    // Adjust child panels
    Array.from(scrollContent.children).forEach((child) => {
      if (!child.className.includes('w-') && !child.style.width) {
        child.classList.add('min-w-[60vw]', 'flex-shrink-0');
      }
      child.classList.add('h-screen');
    });
  
    // Update height
    const updateHeight = () => {
      const scrollWidth = scrollContent.scrollWidth;
      const winWidth = window.innerWidth;
      section.style.height = `${scrollWidth - winWidth + winWidth}px`;
    };
  
    window.addEventListener('load', updateHeight);
    window.addEventListener('resize', updateHeight);
  
    // Scroll transform
    window.addEventListener('scroll', () => {
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
  
      if (scrollY >= sectionTop && scrollY <= sectionTop + section.offsetHeight) {
        const scrollOffset = scrollY - sectionTop;
        scrollContent.style.transform = `translateX(-${scrollOffset}px)`;
      }
    });
  });
  


  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();

  });
  