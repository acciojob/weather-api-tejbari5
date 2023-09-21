//your JS code here. If required.
const weather = document.getElementById("weather");
weatherData.addEventListener("click",(e){
	e.prevenetDeafault();
	fetch("https://openweathermap.org/api").then((res)=>{
		res.json()
	})
	.then((data)=>{
		console.log(data);
	}).catch((err)=>{
		console.log(err);
	})
})