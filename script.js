const employeeNameInput = document.getElementById('employeeName');
const clockInButton = document.getElementById('clockInButton');
const clockOutButton = document.getElementById('clockOutButton');
const messageElement = document.getElementById('message');

clockInButton.addEventListener('click', (event) => {
  event.preventDefault();
  submitTime('clockIn');
});

clockOutButton.addEventListener('click', (event) => {
  event.preventDefault();
  submitTime('clockOut');
});

function submitTime(action) {
  const name = employeeNameInput.value;
  const time = new Date().toLocaleTimeString();
  const data = { name, time, action }; // Create data object
  
  // Call Google Apps Script function with data (replace with your function name)
  google.script.run.withSuccessHandler(displayMessage)
                  .submitTimesheet(data);
  
  // Optionally handle disabling/enabling clock buttons based on action
}

function displayMessage(message) {
  messageElement.textContent = message;
}
