document.addEventListener('DOMContentLoaded', () => {

  // Initialize EmailJS with your user ID (replace with your actual user ID)
  emailjs.init('MZCtEAfuaC9otnQMF');  // Replace 'MZCtEAfuaC9otnQMF' with your actual EmailJS User ID

  const popup = document.getElementById('myPopup');
  const contactBtn = document.getElementById('contact-btn'); // The "Get In Contact" button
  const closePopupBtn = document.getElementById('close-btn');
  const form = document.getElementById('contact-form'); // Get form reference

  // Open the popup when the "Get In Contact" button is clicked
  contactBtn.addEventListener('click', () => {
    popup.style.display = 'flex'; // Show the popup using flex
    setTimeout(() => { // Allow time for display to apply before starting transition
      popup.style.opacity = 1; // Fade in the popup
    }, 10);
  });

  // Close the popup when the close button is clicked
  closePopupBtn.addEventListener('click', () => {
    popup.style.opacity = 0; // Fade out the popup
    setTimeout(() => {
      popup.style.display = 'none'; // Hide the popup after the transition
    }, 300); // Match the transition duration
  });

  // Close the popup if the user clicks outside of the popup content
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.opacity = 0; // Fade out
      setTimeout(() => {
        popup.style.display = 'none'; // Hide after fading out
      }, 300);
    }
  });

  // Handle form submission and send email via EmailJS
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Use EmailJS to send the email
    emailjs.send('service_llfamhm', 'template_hcbm459', {
      email: email,
      message: message
    })
    .then(function(response) {
      console.log('Email sent successfully!', response);
      alert('Your message has been sent!');
      popup.style.opacity = 0; // Fade out the popup after successful submission
      setTimeout(() => {
        popup.style.display = 'none'; // Hide the popup after the transition
      }, 300); // Match the transition duration
    }, function(error) {
      console.error('Failed to send email:', error);
      alert('Failed to send the email. Please try again later.');
    });
  });
});
