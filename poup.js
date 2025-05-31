document.addEventListener('click', function (event) {
  if (event.target.classList.contains('gallery-image')) {
    const imageUrl = event.target.src;

    // ✅ Copy URL to clipboard
    navigator.clipboard.writeText(imageUrl).then(() => {
      showCopyMessage("Image URL Copied Successfully");
    });

    // ✅ Show image popup
    showImagePopup(imageUrl);
  }
});

function showImagePopup(src) {
  // Remove existing popup if any
  const existing = document.getElementById('image-popup');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.id = 'image-popup';
  popup.style.position = 'fixed';
  popup.style.top = '0';
  popup.style.left = '0';
  popup.style.width = '100vw';
  popup.style.height = '100vh';
  popup.style.background = 'rgba(0,0,0,0.8)';
  popup.style.display = 'flex';
  popup.style.alignItems = 'center';
  popup.style.justifyContent = 'center';
  popup.style.zIndex = '9999';

  const image = document.createElement('img');
  image.src = src;
  image.style.maxWidth = '90%';
  image.style.maxHeight = '90%';
  image.style.border = '4px solid white';
  image.style.boxShadow = '0 0 10px black';

  popup.appendChild(image);

  // Close popup on click
  popup.addEventListener('click', () => popup.remove());

  document.body.appendChild(popup);
}

function showCopyMessage(message) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.style.position = 'fixed';
  toast.style.top = '30px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = '#4caf50';
  toast.style.color = 'white';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '5px';
  toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
  toast.style.zIndex = '10000';
  toast.style.fontSize = '16px';

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
