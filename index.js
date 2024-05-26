// Get the tagline element
const tagline = document.getElementById("tagline");

// Define an array of rainbow colors
const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

// Function to change the color of the tagline
function changeColor() {
  // Generate a random index to select a color from the rainbowColors array
  const randomIndex = Math.floor(Math.random() * rainbowColors.length);

  // Get the random color from the array
  const randomColor = rainbowColors[randomIndex];

  // Apply the random color to the tagline element
  tagline.style.color = randomColor;
}

// Call the changeColor function when the tagline is hovered
tagline.addEventListener("mouseover", changeColor);

// Reset the color to default when the mouse leaves the tagline
tagline.addEventListener("mouseout", function () {
  tagline.style.color = "";
});

// Get the footer element
const footer = document.getElementById("foot");

// Function to apply the jumping animation to the footer
function jumpAnimation() {
  // Add a CSS class to the footer to trigger the animation
  footer.classList.add("jump");
}

// Call the jumpAnimation function when the footer is clicked
footer.addEventListener("mouseover", jumpAnimation);
