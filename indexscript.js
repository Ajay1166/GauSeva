document.addEventListener("DOMContentLoaded", function () {
    let testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            if (i === index) {
                testimonial.classList.add("active");
            }
        });
    }

    document.getElementById("prevTestimonial").addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    document.getElementById("nextTestimonial").addEventListener("click", function () {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);
});
