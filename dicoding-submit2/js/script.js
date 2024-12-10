//--- Without Jquery Class ---//
 document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.nav');
    const toggleCollapse = document.querySelector('.toggle-collapse');

    // Click event on toggle menu
    toggleCollapse.addEventListener('click', function() {
        nav.classList.toggle('collapse'); // Toggle the 'collapse' class
    });
 });
