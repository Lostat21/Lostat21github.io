
    (function() {
      const container = document.getElementById('slidesContainer');
      const slides = document.querySelectorAll('.slide');
      const shape1 = document.getElementById('shape1');
      const shape2 = document.getElementById('shape2');
      const shape3 = document.getElementById('shape3');
      const shape4 = document.getElementById('shape4');

      const shapeConfigs = {
        hero: {
          shape1: { width: '65vw', height: '65vh', top: '-20%', left: '-25%', borderRadius: '75% 25% 80% 20% / 45% 55% 45% 55%', background: 'radial-gradient(circle at 30% 40%, #fde9e0, #f8d5c0)', opacity: '0.85' },
          shape2: { width: '55vw', height: '55vh', bottom: '-5%', right: '-20%', borderRadius: '40% 60% 55% 45% / 60% 40% 60% 40%', background: 'radial-gradient(circle at 70% 60%, #f7dfd1, #f0cfbc)', opacity: '0.8' },
          shape3: { width: '45vw', height: '45vh', top: '30%', left: '55%', borderRadius: '65% 35% 70% 30% / 50% 50% 50% 50%', background: 'radial-gradient(circle at 50% 50%, #fae8df, #f3d8c8)', opacity: '0.75' },
          shape4: { width: '35vw', height: '35vh', bottom: '15%', left: '5%', borderRadius: '85% 15% 75% 25% / 35% 65% 35% 65%', background: 'radial-gradient(circle at 40% 60%, #ffede3, #fadbcb)', opacity: '0.7' }
        },
        about: {
          shape1: { width: '70vw', height: '70vh', top: '-15%', left: '-30%', borderRadius: '55% 45% 60% 40% / 55% 45% 55% 45%', background: 'radial-gradient(circle at 40% 50%, #cbe2f5, #b8d1e8)', opacity: '0.85' },
          shape2: { width: '60vw', height: '60vh', bottom: '-10%', right: '-25%', borderRadius: '48% 52% 53% 47% / 50% 50% 50% 50%', background: 'radial-gradient(circle at 60% 40%, #d4e4f5, #c2d8ee)', opacity: '0.8' },
          shape3: { width: '50vw', height: '50vh', top: '35%', left: '50%', borderRadius: '70% 30% 65% 35% / 42% 58% 42% 58%', background: 'radial-gradient(circle at 55% 50%, #dae8f5, #cde1f2)', opacity: '0.75' },
          shape4: { width: '40vw', height: '40vh', bottom: '10%', left: '10%', borderRadius: '62% 38% 58% 42% / 48% 52% 48% 52%', background: 'radial-gradient(circle at 45% 55%, #eef4fd, #e2ecf8)', opacity: '0.7' }
        },
        projects: {
          shape1: { width: '68vw', height: '68vh', top: '-18%', left: '-28%', borderRadius: '45% 55% 50% 50% / 55% 45% 55% 45%', background: 'radial-gradient(circle at 35% 45%, #f0e2d4, #e6d5c4)', opacity: '0.85' },
          shape2: { width: '58vw', height: '58vh', bottom: '-8%', right: '-22%', borderRadius: '52% 48% 55% 45% / 48% 52% 48% 52%', background: 'radial-gradient(circle at 65% 55%, #f2e4d8, #e8dacb)', opacity: '0.8' },
          shape3: { width: '48vw', height: '48vh', top: '28%', left: '52%', borderRadius: '63% 37% 62% 38% / 45% 55% 45% 55%', background: 'radial-gradient(circle at 40% 50%, #f3e6db, #e9ddcf)', opacity: '0.75' },
          shape4: { width: '38vw', height: '38vh', bottom: '18%', left: '8%', borderRadius: '78% 22% 72% 28% / 38% 62% 38% 62%', background: 'radial-gradient(circle at 55% 45%, #f4e7dd, #ecdccd)', opacity: '0.7' }
        },
        contact: {
          shape1: { width: '66vw', height: '66vh', top: '-12%', left: '-32%', borderRadius: '58% 42% 62% 38% / 52% 48% 52% 48%', background: 'radial-gradient(circle at 50% 50%, #e2d9f0, #d4c9e6)', opacity: '0.85' },
          shape2: { width: '56vw', height: '56vh', bottom: '-2%', right: '-28%', borderRadius: '47% 53% 51% 49% / 53% 47% 53% 47%', background: 'radial-gradient(circle at 60% 40%, #e5def0, #d7cde8)', opacity: '0.8' },
          shape3: { width: '46vw', height: '46vh', top: '32%', left: '54%', borderRadius: '68% 32% 64% 36% / 48% 52% 48% 52%', background: 'radial-gradient(circle at 45% 55%, #e7e0f2, #d9cfea)', opacity: '0.75' },
          shape4: { width: '36vw', height: '36vh', bottom: '22%', left: '12%', borderRadius: '82% 18% 68% 32% / 42% 58% 42% 58%', background: 'radial-gradient(circle at 55% 45%, #e9e2f4, #dbd2ea)', opacity: '0.7' }
        }
      };

      function applyShapeConfig(config) {
        Object.assign(shape1.style, { width: config.shape1.width, height: config.shape1.height, top: config.shape1.top, left: config.shape1.left, bottom: config.shape1.bottom || 'auto', right: config.shape1.right || 'auto', borderRadius: config.shape1.borderRadius, background: config.shape1.background, opacity: config.shape1.opacity, position: 'absolute' });
        Object.assign(shape2.style, { width: config.shape2.width, height: config.shape2.height, top: config.shape2.top || 'auto', left: config.shape2.left || 'auto', bottom: config.shape2.bottom, right: config.shape2.right, borderRadius: config.shape2.borderRadius, background: config.shape2.background, opacity: config.shape2.opacity, position: 'absolute' });
        Object.assign(shape3.style, { width: config.shape3.width, height: config.shape3.height, top: config.shape3.top, left: config.shape3.left, bottom: config.shape3.bottom || 'auto', right: config.shape3.right || 'auto', borderRadius: config.shape3.borderRadius, background: config.shape3.background, opacity: config.shape3.opacity, position: 'absolute' });
        Object.assign(shape4.style, { width: config.shape4.width, height: config.shape4.height, top: config.shape4.top || 'auto', left: config.shape4.left, bottom: config.shape4.bottom, right: config.shape4.right || 'auto', borderRadius: config.shape4.borderRadius, background: config.shape4.background, opacity: config.shape4.opacity, position: 'absolute' });
      }

      applyShapeConfig(shapeConfigs.hero);
      let currentSlideType = 'hero';

      function updateShapes() {
        const scrollY = container.scrollTop;
        const windowHeight = window.innerHeight;
        let mostVisible = null, maxVis = 0;
        slides.forEach(slide => {
          const top = slide.offsetTop, height = slide.clientHeight;
          const visibleTop = Math.max(top, scrollY);
          const visibleBottom = Math.min(top + height, scrollY + windowHeight);
          const visibleH = Math.max(0, visibleBottom - visibleTop);
          const visibility = visibleH / height;
          if (visibility > maxVis) { maxVis = visibility; mostVisible = slide; }
        });
        if (mostVisible) {
          const newType = mostVisible.getAttribute('data-slide');
          if (newType !== currentSlideType && shapeConfigs[newType]) {
            currentSlideType = newType;
            applyShapeConfig(shapeConfigs[newType]);
          }
        }
      }



      const observerOptions = { threshold: 0.25, rootMargin: "0px 0px -30px 0px" };
      const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const texts = entry.target.querySelectorAll('.animate-text');
            texts.forEach(el => el.classList.add('visible'));
            const cards = entry.target.querySelectorAll('.mockup-card');
            cards.forEach((card, i) => setTimeout(() => card.classList.add('visible'), i * 80));
            textObserver.unobserve(entry.target);
          }
        });
      }, observerOptions);
      slides.forEach(slide => textObserver.observe(slide));

      let ticking = false;
      function handleScroll() {
        if (!ticking) {
          requestAnimationFrame(() => { updateShapes(); ticking = false; });
          ticking = true;
        }
      }
      container.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', updateShapes);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) container.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        });
      });
      updateShapes();

      // Contact form submission handler
      const contactForm = document.getElementById('contactForm');
      const formSuccess = document.getElementById('formSuccess');

      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();

          // Get form data
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          // Simple validation
          if (name && email && message) {
            // Show success message
            formSuccess.classList.add('show');

            // Reset form
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
              formSuccess.classList.remove('show');
            }, 5000);

            // Here you would typically send data to a server
            console.log('Form submitted:', { name, email, message });
          }
        });
      }
    })();
