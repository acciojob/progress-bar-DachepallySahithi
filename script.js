const circles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentActive = 0; // Index of the currently active circle

// Function to update the progress bar
function updateProgress() {
  circles.forEach((circle, index) => {
    if (index === currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Disable/enable buttons based on currentActive
  prevBtn.disabled = currentActive === 0;
  nextBtn.disabled = currentActive === circles.length - 1;
}

// Initial state
updateProgress();

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
  if (currentActive < circles.length - 1) {
    currentActive++;
    updateProgress();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentActive > 0) {
    currentActive--;
    updateProgress();
  }
});