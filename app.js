const form = document.getElementById('activity-form');
const activityInput = document.getElementById('activity');
const durationInput = document.getElementById('duration');
const activityList = document.getElementById('activity-list');
const totalDurationSpan = document.getElementById('total-duration');

let totalDuration = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = activityInput.value;
  const duration = durationInput.value;
  addActivity(activity, duration);
  updateStatistics();
});

function addActivity(activity, duration) {
  const li = document.createElement('li');
  li.textContent = `${activity} for ${duration} minutes`;
  activityList.appendChild(li);
  totalDuration += parseInt(duration);
  localStorage.setItem('totalDuration', totalDuration);
}

function updateStatistics() {
  totalDurationSpan.textContent = totalDuration;
}

// Load previous activities from local storage
const activities = JSON.parse(localStorage.getItem('activities')) || [];
activities.forEach(activity => {
  const li = document.createElement('li');
  li.textContent = activity;
  activityList.appendChild(li);
});

// Load total duration from local storage
const storedTotalDuration = localStorage.getItem('totalDuration');
if (storedTotalDuration) {
  totalDuration = parseInt(storedTotalDuration);
  totalDurationSpan.textContent = totalDuration;
}