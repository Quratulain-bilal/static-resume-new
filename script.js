// Get the skills section and toggle button by their IDs
var skillsSection = document.getElementById("skills");
var toggleButton = document.getElementById("toggleSkills");
// Set an initial state to show that the section is visible
var isSkillsVisible = true;
// Add a click event listener to the toggle button
toggleButton.addEventListener("click", function () {
  // Toggle visibility by adjusting the display property
  if (isSkillsVisible) {
    skillsSection.style.display = "none";
    toggleButton.textContent = "Show Skills Section";
  } else {
    skillsSection.style.display = "block";
    toggleButton.textContent = "Hide Skills Section";
  }
  // Update the state to reflect the new visibility
  isSkillsVisible = !isSkillsVisible;
});
