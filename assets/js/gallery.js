/* Etijon Foundation - Gallery Script (View More & Lightbox) */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('btn-gallery-toggle');
  const hiddenItems = document.querySelectorAll('.gallery-item.hidden-item');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  let isExpanded = false;

  // View More / View Less Toggle
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      hiddenItems.forEach(item => {
        if (isExpanded) {
          item.classList.remove('hidden-item');
          item.style.display = 'block';
        } else {
          item.classList.add('hidden-item');
          item.style.display = 'none';
        }
      });

      if (isExpanded) {
        toggleBtn.textContent = 'View Less';
      } else {
        toggleBtn.textContent = 'View More (' + hiddenItems.length + ')';
      }
    });
  }

  // Lightbox Modal trigger on photo click
  const allGalleryItems = document.querySelectorAll('.gallery-item');
  allGalleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const badge = item.querySelector('.gallery-caption-badge');

      if (img && lightbox) {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = badge ? badge.textContent : '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close Lightbox
  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
