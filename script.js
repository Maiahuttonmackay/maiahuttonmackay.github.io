let currentIndex = 0;

function moveSlide(step, carouselId) {
    // Get the correct carousel by its ID
    const carousel = document.querySelector(`#${carouselId} .carousel-images`);
    
    // Get all the slides within that carousel
    const slides = carousel.querySelectorAll('img');
    const totalSlides = slides.length;

    // Update the current index (and loop it)
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    
    // Calculate the offset to shift the carousel
    const offset = -currentIndex * 100;

    // Apply the transform to the correct carousel images container
    carousel.style.transform = `translateX(${offset}%)`;
}

