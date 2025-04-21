function downloadCV() {
  const link = document.createElement("a");
  link.href = "my-cv.pdf";
  link.download = "my-cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
