// Back to Top Button with Progress & Chat floating button 

// ===== Circular Scroll Progress Indicator =====
const backToTopBtn = document.querySelector('#backToTop');
const progressCircle = document.querySelector('.progress-ring-circle');
const progressText = document.querySelector('.scroll-progress-text');
const circumference = 282.6; // 2 * π * r (where r = 45) ➤ there is in SVG radius in html r=45

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
  const percent = Math.round(scrollProgress * 100);
  
  // Update circular progress
  progressCircle.style.strokeDashoffset = circumference - (scrollProgress * circumference);
  progressText.textContent = `${percent}%`;
  
  // Toggle back-to-top button visibility
  backToTopBtn.classList.toggle('hidden', scrollProgress <= 0.0);
});

backToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




// Keep your existing chat button functionality
const chatButton = document.getElementById('chatButton');
const chatContainer = document.querySelector('.chat-container');

chatButton.addEventListener('click', function() {
  chatContainer.classList.toggle('active');
  
  if (chatContainer.classList.contains('active')) {
    document.addEventListener('click', closeChatOnClickOutside);
  } else {
    document.removeEventListener('click', closeChatOnClickOutside);
  }
});

function closeChatOnClickOutside(e) {
  if (!chatContainer.contains(e.target)) {
    chatContainer.classList.remove('active');
    document.removeEventListener('click', closeChatOnClickOutside);
  }
}