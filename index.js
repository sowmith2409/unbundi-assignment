const appointmentBtn = document.getElementById('appointmentBtn');
const bookingSection = document.getElementById('bookingForm');

appointmentBtn?.addEventListener('click', () => {
  alert("Redirecting to Booking Section...");
  bookingSection?.scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.why-choose-fesilities').forEach(row => {
  row.addEventListener('click', () => {
    row.classList.toggle('active');
  });
});

const bookingForm = document.getElementById('bookingForm');
const nameInput = document.getElementById('name');
const mobileInput = document.getElementById('mobileNumber');
const captchaInput = document.getElementById('captchaInput');
const termsCheckbox = document.getElementById('termsCheckbox');
const captchaValue = document.querySelector('.captcha-value');

bookingForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!nameInput.value.trim()) return alert("Name required");
  if (mobileInput.value.length < 10) return alert("Enter valid mobile number");
  if (captchaInput.value !== captchaValue.innerText.trim()) return alert("Captcha incorrect");
  if (!termsCheckbox.checked) return alert("Please agree to terms");

  alert("Consultation booked successfully!");
  bookingForm.reset();
});

const consultForm1 = document.getElementById('consultForm1');
const name1 = document.getElementById('name1');
const mobile1 = document.getElementById('mobile1');
const captcha1 = document.getElementById('captcha1');
const agree1 = document.getElementById('agree1');

consultForm1?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!name1.value.trim()) return alert("Name required");
  if (mobile1.value.length < 10) return alert("Enter valid mobile number");
  if (captcha1.value !== captchaValue.innerText.trim()) return alert("Captcha incorrect");
  if (!agree1.checked) return alert("Please agree to terms");

  alert("Appointment booked successfully!");
  consultForm1.reset();
});

const consultForm2 = document.getElementById('consultForm2');
const name2 = document.getElementById('name2');
const mobile2 = document.getElementById('mobile2');
const captcha2 = document.getElementById('captcha2');
const agree2 = document.getElementById('agree2');

consultForm2?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!name2.value.trim()) return alert("Name required");
  if (mobile2.value.length < 10) return alert("Enter valid mobile number");
  if (captcha2.value !== captchaValue.innerText.trim()) return alert("Captcha incorrect");
  if (!agree2.checked) return alert("Please agree to terms");

  alert("Appointment booked successfully!");
  consultForm2.reset();
});

