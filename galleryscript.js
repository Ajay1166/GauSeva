const galleryImages = [
    { id: 1, src: "sanctuary.avif", alt: "Cow in sanctuary", category: "sanctuary", title: "Peaceful Sanctuary" },
    { id: 2, src: "Organic farming field.jpg", alt: "Organic farming field", category: "farming", title: "Organic Cultivation" },
    { id: 3, src: "Educational workshop.jpg", alt: "Educational workshop", category: "education", title: "Learning Together" },
    { id: 4, src: "Cow products display.webp", alt: "Cow products display", category: "products", title: "Traditional Products" },
    { id: 5, src: "Cow adoption ceremony.jpg", alt: "Cow adoption ceremony", category: "adoption", title: "Adoption Day" },
    { id: 6, src: "Volunteers working.webp", alt: "Volunteers working", category: "volunteer", title: "Dedicated Volunteers" },
    { id: 7, src: "cow grazing.jpg", alt: "Hero cow image", category: "sanctuary", title: "Cow Grazing" },
    { id: 8, src: "Cow shelter.webp", alt: "Cow shelter", category: "sanctuary", title: "Our Shelters" },
    { id: 9, src: "organic.webp", alt: "Farming activities", category: "farming", title: "Natural Farming" },
    { id: 10, src: "Family with adopted cow.jpg", alt: "Family with adopted cow", category: "adoption", title: "Family Connection" },
    { id: 11, src: "International volunteers.jpg", alt: "International volunteers", category: "volunteer", title: "Global Community" },
    { id: 12, src: "Children learning.jpg", alt: "Children learning", category: "education", title: "Young Learners" }
  ];
  
  const categories = ["all", "sanctuary", "farming", "education", "products", "adoption", "volunteer"];
  
  let activeCategory = "all";
  
  // Render gallery images based on active category
  function renderGallery() {
    const galleryGrid = document.getElementById("gallery-grid");
    const noImagesMessage = document.getElementById("no-images-message");
  
    // Clear the gallery grid
    galleryGrid.innerHTML = "";
  
    // Filter images based on category
    const filteredImages = activeCategory === "all" ? galleryImages : galleryImages.filter(img => img.category === activeCategory);
  
    // Show "No images found" if no images in the category
    if (filteredImages.length === 0) {
      noImagesMessage.style.display = "block";
    } else {
      noImagesMessage.style.display = "none";
    }
  
    // Render filtered images
    filteredImages.forEach(image => {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");
      galleryItem.onclick = () => openModal(image.src);
  
      const imageElement = document.createElement("img");
      imageElement.src = image.src;
      imageElement.alt = image.alt;
  
      const infoElement = document.createElement("div");
      infoElement.classList.add("gallery-item-info");
      infoElement.innerHTML = `<h3>${image.title}</h3><p>${image.category}</p>`;
  
      galleryItem.appendChild(imageElement);
      galleryItem.appendChild(infoElement);
      galleryGrid.appendChild(galleryItem);
    });
  }
  
  // Filter images based on selected category
  function filterImages(category) {
    activeCategory = category;
  
    // Update the active category button styles
    const buttons = document.querySelectorAll(".category-btn");
    buttons.forEach(button => {
      if (button.textContent.toLowerCase() === category) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    renderGallery();
  }
  
  // Open the image modal
  function openModal(imageSrc) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = imageSrc;
    modal.classList.add("open");
  }
  
  // Close the image modal
  function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.classList.remove("open");
  }
  
  // Initialize the gallery
  window.onload = renderGallery;
  