// Minimize flickering white flash when new tab is opened

window.addEventListener("message", (msg) => {
  // Blursday.app in the iFrame will send the desired background color
  if (msg.data.backgroundColor) {
    // Save for future page loads
    localStorage.setItem("backgroundColor", msg.data.backgroundColor);
    // Set current color
    window.document.body.style.backgroundColor = msg.data.backgroundColor;
  }
});

// Set the tab background color as soon as possible.
window.addEventListener("DOMContentLoaded", () => {
  const color = localStorage.getItem("backgroundColor");
  if (color) {
    window.document.body.style.backgroundColor = color;
  }
});
