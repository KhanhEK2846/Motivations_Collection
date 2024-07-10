let yourTime = "being lazy";

const interval = setInterval(() => {
	console.log("you will not grow");
}, 86400000);

if (yourTime !== "being lazy") {
	clearInterval(interval);
	console.log("congratulations on getting out of your comfort zone");
}
