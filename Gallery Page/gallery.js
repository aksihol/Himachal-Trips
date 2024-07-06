document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.getElementById('gallery');

  // Example data (replace with actual dynamic fetching from JSON or backend)
  const galleryData = [
    { url: './gallery images/book1.jpg', description: 'Image 1' },
    { url: './gallery images/book1.jpg', description: 'Image 2' },
    { url: './gallery images/book1.jpg', description: 'Image 3' },
    { url: './gallery images/book1.jpg', description: 'Image 4' },
    { url: './gallery images/book1.jpg', description: 'Image 5' },
    { url: './gallery images/book1.jpg', description: 'Image 6' },
    { url: './gallery images/book1.jpg', description: 'Image 7' },
    { url: './gallery images/book1.jpg', description: 'Image 8' },
    { url: './gallery images/book1.jpg', description: 'Image 9' },
    { url: './gallery images/book1.jpg', description: 'Image 10' },
    { url: './gallery images/book1.jpg', description: 'Image 11' },
    { url: './gallery images/book1.jpg', description: 'Image 12' },
    { url: './gallery images/book1.jpg', description: 'Image 13' },
    { url: './gallery images/book1.jpg', description: 'Image 14' },
    { url: './gallery images/book1.jpg', description: 'Image 15' },
    { url: './gallery images/book1.jpg', description: 'Image 16' },
    { url: './gallery images/book1.jpg', description: 'Image 17' },
    { url: './gallery images/book1.jpg', description: 'Image 18' },
    { url: './gallery images/book1.jpg', description: 'Image 19' },
    { url: './gallery images/book1.jpg', description: 'Image 20' }
  ];

  // Populate gallery items
  galleryData.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = item.url;
    img.alt = item.description;

    const description = document.createElement('p');
    description.textContent = item.description;

    galleryItem.appendChild(img);
    galleryItem.appendChild(description);
    galleryContainer.appendChild(galleryItem);
  });
});


