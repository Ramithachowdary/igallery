// Select all gallery images
const galleryItems = document.querySelectorAll('.gallery-item');

// Get modal and modal image elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// Loop through each image and add a click event listener
galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    // When an image is clicked, show the modal and display the clicked image
    modal.style.display = "block";
    modalImg.src = item.src;
  });
});

// Close the modal when the user clicks the close button
closeBtn.addEventListener('click', function() {
  modal.style.display = "none";
});

// Close the modal if the user clicks anywhere outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
