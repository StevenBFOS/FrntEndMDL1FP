// Get the comment form and comment section elements
const form = document.querySelector('#comment-form');
const commentSection = document.querySelector('#comment-section');

// Listen for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the name and comment input values
  const nameInput = document.querySelector('#name');
  const commentInput = document.querySelector('#comment');
  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  // Clear the input fields
  nameInput.value = '';
  commentInput.value = '';

  // Create a new comment element and add it to the comment section
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `
    <h3>${name}</h3>
    <p>${comment}</p>
  `;
  commentSection.appendChild(commentElement);
});
