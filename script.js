let testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t, idx) => {
    t.classList.toggle('active', idx === i);
  });
}

setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 4000);