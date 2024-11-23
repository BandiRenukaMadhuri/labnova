

function Banner() {
    return (
        <div class="banner-slider">
          <div class="banners">
          <div class="banner">
            <div class="banner-info">
              <h1>LABNOVA</h1>
              <p> Product range.</p>
              <button class="btn">Learn More</button>
            </div>
            <div class="banner-image">
            <div class="sprite-container">
    <div class="sprite image1">1</div>
    <div class="sprite image2">2</div>
    <div class="sprite image3">3</div>
    <div class="sprite image4">4</div>
  </div>
            </div>
          </div>
          </div>
          </div>

    );
}

let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function moveToNextSlide() {
    const slidesContainer = document.querySelector('.slides'); 
    currentIndex = (currentIndex + 1) % totalSlides;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
  export default Banner;