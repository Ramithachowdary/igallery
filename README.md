# Ex.08 Design of Interactive Image Gallery
## Date:25-12-2024

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
index.html 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Photo Gallery</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div class="gallery">
    <img class="gallery-item" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="Image 1">
    <img class="gallery-item" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Image 2">
    <img class="gallery-item" src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75" alt="Image 3">
    <img class="gallery-item" src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="Image 4">
    <img class="gallery-item" src="https://static.vecteezy.com/system/resources/thumbnails/021/746/785/small/holding-a-tree-in-a-ball-ecology-and-environment-concept-with-generative-ai-photo.jpg" alt="Image 5">
    <img class="gallery-item" src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=" alt="Image 6">
    <img class="gallery-item" src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg" alt="Image 7">
    <img class="gallery-item" src="https://th.bing.com/th/id/OIG2._JJ7jEND0UMuzHjwBeTh" alt="Image 8">
    <img class="gallery-item" src="https://thumbs.dreamstime.com/b/planet-earth-space-night-some-elements-image-furnished-nasa-52734504.jpg" alt="Image 9">
    
  <div id="modal" class="modal">
    <span class="close">&times;</span>
    <img id="modal-img" class="modal-content">
  </div>

  <script src="script.js"></script>
</body>
</html>

```
```
styles.css

/* Basic styles for the gallery */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Default: 3 images per row */
    gap: 10px;  /* Space between the images */
    padding: 20px;
    box-sizing: border-box;
  }
  
  .gallery-item {
    width: 100%; /* Each item takes up full width of its grid cell */
    height: 250px; /* Fixed height to ensure uniformity */
    object-fit: cover; /* Ensures images cover the area without distortion */
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
  }
  
  .gallery-item:hover {
    transform: scale(1.05);
  }
  
  /* Modal styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .modal-content {
    display: block;
    margin: 15% auto;
    max-width: 90%;
    max-height: 80%;
  }
  
  .close {
    color: white;
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    top: 15px;
    right: 35px;
    cursor: pointer;
  }
  
  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
  
  /* Media Queries for responsiveness */
  
  /* Large screens: 3 images per row */
  @media screen and (min-width: 1200px) {
    .gallery {
      grid-template-columns: repeat(3, 1fr); /* 3 images per row */
    }
  }
  
  /* Medium screens: 3 images per row */
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    .gallery {
      grid-template-columns: repeat(3, 1fr); /* 3 images per row */
    }
  }
  
  /* Small screens: 2 images per row */
  @media screen and (max-width: 767px) {
    .gallery {
      grid-template-columns: repeat(2, 1fr); /* 2 images per row */
    }
  }
  
  /* Extra small screens: 1 image per row */
  @media screen and (max-width: 480px) {
    .gallery {
      grid-template-columns: 1fr; /* 1 image per row */
    }
  }
  
```
```
scripts.js

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

```
## OUTPUT:
![alt text](<Screenshot 2024-12-25 225113.png>)
![alt text](<Screenshot 2024-12-25 225133.png>)
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
