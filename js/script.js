document.addEventListener('DOMContentLoaded', () => {
  const userName = prompt("Siapa Nama Anda?");
  document.getElementById('userName').textContent = userName || 'Guest';

  const form = document.getElementById('messageForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('messageText').value.trim();

    if (!name || !email || !phone || !message) {
      result.textContent = "Please fill in all fields.";
      return;
    }

    result.innerHTML = `
      <h3>Submitted Information:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    form.reset();
  });

  // Responsive menu toggle
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
