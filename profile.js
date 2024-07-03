function updateDateTime() {
  const now = new Date();
  const utcDateTime = now.toUTCString();
  document.getElementById("date-time").textContent = utcDateTime;
}
setInterval(updateDateTime, 1000);
updateDateTime();
