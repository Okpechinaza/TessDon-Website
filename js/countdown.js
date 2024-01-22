//Create Deadline
let deadline = new Date("February 17, 2024 0:00:00").getTime(); 

//Set Interval
let x = setInterval(function() { 

	//Get today's date
	let now = new Date().getTime();
	//Duration
	let t = deadline - now;
	//Days remaining
	let days = Math.floor(t / (1000 * 60 * 60 * 24)); 
	//Hours remaining
	let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
	//Minutes remaining
	let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
	//Seconds remaining
	let seconds = Math.floor((t % (1000 * 60)) / 1000);

	//Output to HTML
	document.getElementById("day").innerHTML =days ; 
	document.getElementById("hour").innerHTML =hours; 
	document.getElementById("minute").innerHTML = minutes; 
	document.getElementById("second").innerHTML =seconds;

	//After Period Elapses
	if (t < 0) { 
			clearInterval(x); 
			document.getElementById("demo").innerHTML = "TIME UP"; 
			document.getElementById("day").innerHTML ='0'; 
			document.getElementById("hour").innerHTML ='0'; 
			document.getElementById("minute").innerHTML ='0' ; 
			document.getElementById("second").innerHTML = '0'; 
	};

}, 1000); 