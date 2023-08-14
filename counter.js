const counts = document.querySelectorAll(".count");

let registrationCount = 0;
let voterCount = 12168;
let votesPerDayCount = 1254;
let totalVotesCount = 28734;

setInterval(() => {
    counts[0].textContent = registrationCount++;
    counts[1].textContent = voterCount++;
    counts[2].textContent = votesPerDayCount++;
    counts[3].textContent = totalVotesCount++;
}, 1000); 

