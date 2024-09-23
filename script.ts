
document.addEventListener("DOMContentLoaded", () => {
  //  target  and toggle skill section with ids
  const skillsSection = document.getElementById("skills") as HTMLElement | null;
  const toggleButton = document.getElementById(
    "toggleSkills"
  ) as HTMLButtonElement | null;

  // Check if elements exist
  if (!skillsSection || !toggleButton) {
    console.error("Required elements not found in the DOM.");
    return;
  }

  // Set an initial state to show that the section is visible
  let isSkillsVisible: boolean = true;

  // Add a click event 
  toggleButton.addEventListener("click", () => {
    // Toggle visibility by adjusting the display property
    if (isSkillsVisible) {
      skillsSection.style.display = "none";
      toggleButton.textContent = "Show Skills Section";
    } else {
      skillsSection.style.display = "block";
      toggleButton.textContent = "Hide Skills Section";
    }
    // Update the state 
    isSkillsVisible = !isSkillsVisible;
  });
});
