//--- Without Jquery Class ---//
 document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.nav');
    const toggleCollapse = document.querySelector('.toggle-collapse');

    // Click event on toggle menu
    toggleCollapse.addEventListener('click', function() {
        nav.classList.toggle('collapse'); // Toggle the 'collapse' class
    });
 });


new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween:30,
    
    // If we need pagination, pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoint
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4
        }
    }

  });