const imageFolder = 'images/';
const totalImages = 100;
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tiff'];
const gallery = document.getElementById('gallery');

(async function loadImages() {
  for (let i = 1; i <= totalImages; i++) {
    let found = false;

    for (const ext of imageExtensions) {
      const img = new Image();
      const src = `${imageFolder}img-${i}${ext}`;
      img.src = src;
      img.alt = `Image ${i}`;
      img.classList.add('gallery-image');

      const success = await new Promise((resolve) => {
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
      });

      if (success) {
        gallery.appendChild(img);
        found = true;
        break;
      }
    }

    if (!found) break;
  }
})();
