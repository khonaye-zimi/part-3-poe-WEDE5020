document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your enquiry has been sent - we will contact you soon!');
      form.reset();
    });
  }
});