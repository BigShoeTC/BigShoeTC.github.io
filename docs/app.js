document.addEventListener('DOMContentLoaded', function () {
  console.log("JavaScript is loaded");

  // Select all popup buttons
  const popupBtns = document.querySelectorAll(".proj__btn");
  console.log("Popup buttons selected:", popupBtns); // Check if buttons are being selected

  // Loop through each button and attach event listener
  popupBtns.forEach(button => {
    const popupId = button.getAttribute("data-popup");  // Get corresponding popup ID
    console.log("Popup ID for button:", popupId); // Check which popup ID is associated with the button

    const popup = document.getElementById(popupId);  // Find the popup by ID
    const closeBtn = popup ? popup.querySelector(".close") : null;  // Find the close button inside the popup

    // Ensure the popup and close button exist before adding listeners
    if (popup && closeBtn) {
      console.log("Popup element found:", popup);
      console.log("Close button found:", closeBtn);

      // Open popup when button is clicked
      button.addEventListener("click", function () {
        console.log("Popup button clicked!"); // Log when the button is clicked
        popup.style.display = "block"; // Open the popup
      });

      // Close popup when close button is clicked
      closeBtn.addEventListener("click", function () {
        console.log("Close button clicked!"); // Log when the close button is clicked
        popup.style.display = "none"; // Close the popup
      });

      // Close popup when clicking outside the popup
      window.addEventListener("click", function (event) {
        if (event.target === popup) {
          console.log("Click outside detected!"); // Log if the click is outside the popup
          popup.style.display = "none"; // Close the popup
        }
      });
    } else {
      console.log("Popup or close button not found for popup ID:", popupId); // Log if popup or close button isn't found
    }
  });
});
