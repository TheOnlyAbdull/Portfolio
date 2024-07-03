document.addEventListener("DOMContentLoaded", function() {
    function updateTimeAndDay() {
        // Get current time in UTC
        const utcTime = new Date().toUTCString();
        document.querySelector('.time').textContent = utcTime;

        // Get current day of the week
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = days[new Date().getUTCDay()];
        document.querySelector('.day').textContent = currentDay;
    }

    // Update the time and day immediately when the page loads
    updateTimeAndDay();

    // Update the time and day every second
    setInterval(updateTimeAndDay, 1000);
});