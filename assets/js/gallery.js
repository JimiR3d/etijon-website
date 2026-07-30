/* Etijon Foundation - Gallery Script (View More & Lightbox with Next/Prev Nav) */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('btn-gallery-toggle');
  const hiddenItems = document.querySelectorAll('.gallery-item.hidden-item');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let isExpanded = false;
  let currentIndex = 0;
  let visiblePhotosList = [];

  function updatePhotosList() {
    visiblePhotosList = Array.from(document.querySelectorAll('.gallery-item')).filter(item => {
      return getComputedStyle(item).display !== 'none';
    });
  }

  updatePhotosList();

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

      updatePhotosList();
    });
  }

  function showPhotoAtIndex(index) {
    if (visiblePhotosList.length === 0) return;
    
    // Wrap around index
    if (index < 0) {
      currentIndex = visiblePhotosList.length - 1;
    } else if (index >= visiblePhotosList.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const item = visiblePhotosList[currentIndex];
    const img = item.querySelector('img');
    const badge = item.querySelector('.gallery-caption-badge');

    if (img && lightbox) {
      lightboxImg.src = img.src;
      lightboxCaption.textContent = badge ? badge.textContent : '';
    }
  }

  // Lightbox Modal trigger on photo click
  document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
      updatePhotosList();
      currentIndex = visiblePhotosList.indexOf(item);
      if (currentIndex !== -1) {
        showPhotoAtIndex(currentIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
  });

  // Next & Prev Controls
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPhotoAtIndex(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPhotoAtIndex(currentIndex + 1);
    });
  }

  // Keyboard Left / Right Navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') {
      showPhotoAtIndex(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showPhotoAtIndex(currentIndex + 1);
    } else if (e.key === 'Escape') {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
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
