const newYear = "1 Jan 2022";
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function countdown() {
	const newYearDate = new Date(newYear);
	const currentDate = new Date();

	const totalSeconds = (newYearDate - currentDate) / 1000;
	const getSeconds = Math.floor(totalSeconds % 60);
	const getMinutes = Math.floor((totalSeconds / 60) % 60);
	const getHours = Math.floor((totalSeconds / 3600) % 24);
	const getDays = Math.floor(totalSeconds / 3600 / 24);

	days.innerHTML = getDays;
	hours.innerHTML = getHours;
	minutes.innerHTML = getMinutes;
	seconds.innerHTML = getSeconds;
}

countdown();
setInterval(countdown, 1000);
