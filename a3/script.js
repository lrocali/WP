/*var jsonString ={
	"FO":{
		"title":"Mardaani",
		"poster":"\/\/titan.csit.rmit.edu.au\/~e54061\/wp\/movie-service\/FO.jpg",
		"trailer":"\/\/titan.csit.rmit.edu.au\/~e54061\/wp\/movie-service\/FO.mp4",
		"rating":"\/\/www.classification.gov.au\/Guidelines\/PublishingImages\/image4.jpeg",
		"summary":"Every War is Personal",
		"description":["Shivani Shivaji Roy is an astute cop working in a Mumbai Crime Branch unit. Deft at picking up hidden clues and fearless in confronting hardened criminals, Shivani stumbles into the world of debauchery, cruel desires and exploitation and onto a case that will change her life forever.","A teenage girl is kidnapped by the child trafficking mafia and smuggled outside the city. Shivani embarks on an obsessive hunt for the girl and what follows is a cat and mouse game between a fearless cop and a ruthless mafia kingpin.",
		"Starring Rani Mukerji in the lead, playing the role of a cop for the first time, this raw and gritty film will be a distinct departure from Pradeep Sarkar’s style of filmmaking."],
		"sessions":{"Monday":"6pm","Tuesday":"6pm","Saturday":"3pm","Sunday":"3pm"}
		},
	"CH":{
		"title":"Planes: Fire and Rescue",
		"poster":"\/\/titan.csit.rmit.edu.au\/~e54061\/wp\/movie-service\/CH.jpg",
		"trailer":"\/\/titan.csit.rmit.edu.au\/~e54061\/wp\/movie-service\/CH.mp4",
		"rating":"\/\/www.classification.gov.au\/Guidelines\/PublishingImages\/image1.jpeg",
		"summary":"Cars with Wings","description":["Planes: Fire & Rescue is a new comedy-adventure about second chances, featuring a dynamic crew of elite racing cars equipped with wings and now operating as firefighting aircraft devoted to protecting historic Piston Peak National Park from raging wildfire. When world famous car racer Lightning McQueen, now known as \"Dusty\" (voice of Dane Cook) learns that his engine is damaged and he may never race again, he must shift gears and is launched into the world of aerial firefighting.",
		"Dusty joins forces with veteran fire and rescue helicopter Blade Ranger and his courageous team, including spirited super scooper Dipper (voice of Julie Bowen), heavy-lift helicopter Windlifter, ex-military transport Cabbie and a lively bunch of brave all-terrain vehicles known as The Smokejumpers. Together, the fearless team battles a massive wildfire and Dusty learns what it takes to become a true hero."],
		"sessions":{"Monday":"1pm","Tuesday":"1pm","Wednesday":"6pm","Thursday":"6pm","Friday":"6pm","Saturday":"12pm","Sunday":"12pm"}
		},
		"RC":{
			"title":"Once a Princess",
			"poster":"\/\/titan.csit.rmit.edu.au\/~e54061\/wp\/movie-service\/RC.jpg",
			"trailer":"\/\/titan.csit.rmit.edu.au\/~e54061\/wp\/movie-service\/RC.mp4","rating":"\/\/www.classification.gov.au\/Guidelines\/PublishingImages\/image3.jpeg","summary":"Always a Princess","description":["A beautiful, rich and princess-like girl \"unexpectedly\" falls for two guys, someone who ticks all the right boxes class-wise and this other guy who seems quite nice, but who is deemed unsuitable by her family. If you’ve seen the Pillow Book or The Great Gatsby, you can guess which one she picks ...","Several years later, the one she thought would be right turns out to be a bad person (nooooo!). Quite by chance she meets the other guy who is now a successful mobile app developer and perhaps now worthy of her parents’ approval. Although it takes her the rest of the movie, the princess dumps the bad one, goes out with the good one and finds true happiness. Until the sequel due out next year (fingers crossed)."],"sessions":{"Monday":"9pm","Tuesday":"9pm","Wednesday":"1pm","Thursday":"1pm","Friday":"1pm","Saturday":"6pm","Sunday":"6pm"}},"AC":{"title":"Guardians of the Galaxy","poster":"\/\/titan.csit.rmit.edu.au\/~e54061\/wp\/movie-service\/AC.jpg","trailer":"\/\/titan.csit.rmit.edu.au\/~e54061\/wp\/movie-service\/AC.mp4","rating":"\/\/www.classification.gov.au\/Guidelines\/PublishingImages\/image3.jpeg","summary":"Not the Avengers","description":["From Marvel, the studio that brought you the global blockbuster franchises of Iron Man, Thor, Captain America and The Avengers, comes a new team - the Guardians of the Galaxy that take over when The Avengers go on vacation.","An action-packed, epic space adventure, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe, taking over from Loki whilst he is off on vacation too.","To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits - Rocket, a gun-toting raccoon, Groot, a tree-like humanoid, the deadly and enigmatic Gamora and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand with the galaxy’s fate in the balance whilst waiting for a postcard from his Avenger pals that never comes ..."],"sessions":{"Wednesday":"9pm","Thursday":"9pm","Friday":"9pm","Saturday":"9pm","Sunday":"9pm"}}}
*/
var jsonString = "\/\/saturn.csit.rmit.edu.au\/~e54061\/wp\/movie-service.php?movie=FO"
var movie1 = {
	title:"American Sniper",
	synopsis:"From director Clint Eastwood comes 'American Sniper,' starring Bradley Cooper as Chris Kyle, the most lethal sniper in U.S. military history.",
	genre:"AC",
	genreName:"Action",
	age:"MA 15+",
	days:["Wed, Thu, Fri","Sat, Sun"],
	dayByDay:["Wednesday","Thursday","Friday","Saturday","Sunday"],
	times:["9pm","9pm"],
	sessions:"",
	imgName:"images/americanSniper.jpg"

};

var movie2 = {
	title:"Home",
	synopsis:"After an alien race invades Earth to escape their enemies, an alien accidentally reveals their location and must go on the run to save the planet.",
	genre:"CH",
	genreName:"Children",
	age:"G",
	days:["Mon, Tue","Wed, Thu, Fri","Sat, Sun"],
	dayByDay:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
	times:["1pm","6pm","12pm"],
	sessions:"",
	imgName:"images/home.jpg"

};

var movie3 = {
	title:"You're My Boss",
	synopsis:"Pong (Coco Martin) is an executive assistant in an airline company where Georgina Lorenzana (Toni Gonzaga) is an assistant vice presiden.",
	genre:"RC",
	genreName:"Romantic Comedy",
	age:"PG",
	days:["Mon, Tue","Wed, Thu, Fri","Sat, Sun"],
	dayByDay:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
	times:["9pm","1pm","6pm"],
	sessions:"",
	imgName:"images/youAreMyBoss.jpg"

};

var movie4 = {
	title:"Sounds of Music",
	synopsis:"A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
	genre:"AF",
	genreName:"Art/ Foreign Filme",
	age:"G",
	days:["Mon, Tue","Sat, Sun"],
	dayByDay:["Monday","Tuesday","Saturday","Sunday"],
	times:["6pm","3pm"],
	sessions:"",
	imgName:"images/theSoundsOfMusic.jpg"

};

var ticketType = ["SA","SP","SC","FA","FC","B1","B2","B3"]
var ticketTypeName = [
	"Standart - Adult",
	"Standart - Concession",
	"Standart - Child",
	"First Class - Adult",
	"First Class - Child",
	"Beanbag - 1 Person",
	"Beanbag - 2 People",
	"Beanbag - 3 children"
]

var ticketTypeNamee = [
	"Standart - Adult",
	"Standart - Concession",
	"Standart - Child",
	"First Class - Adult",
	"First Class - Child",
	"Beanbag"
]

var ticketType1Price = [
	"12",
	"10",
	"8",
	"25",
	"20",
	"20"
]

var ticketType2Price = [
	"18",
	"15",
	"12",
	"30",
	"25",
	"30"
]

var ticketMonTue = [
	"1pm - Childrens",
	"6pm - Art / Foreign",
	"9pm - Romantic Comedy",
	" "
]

var ticketWedFri = [
	"1pm - Romantic Comedy",
	"6pm - Childrens",
	"9pm - Action ",
	" "
]

var ticketSatSun = [
	"12pm - Childrens",
	"3pm - Art / Foreign",
	"6pm - Romantic Comedy",
	"9pm - Action "
]

var mvDetails1 = 0, mvDetails2 = 0, mvDetails3 = 0, mvDetails4 = 0;
var data;

var selectedMovieFromOptions = movie1;
function getInfo() {
	console.log("getDetails");
	//getMovie1Details();
	getMovieDetails("AC");
	getMovieDetails("FO");
	getMovieDetails("RC");
	getMovieDetails("CH");
	/*
	getMovie2Details();
	getMovie3Details();
	getMovie4Details();*/
}

function getJSON(){
	$.ajax({
    type: "POST",
    url: "https://saturn.csit.rmit.edu.au/~e54061/wp/movie-service.php",
    dataType: "json",
    success: function (result) {
        console.log(result); //Now a JSON object
				data = result;
				console.log(data.AC.title);
				getInfo();
    }
	});
	//console.log(data.AC.title);
}
function getMovieDetails(strType){
	var divMvDt = document.getElementById("div"+strType);
	var objType = getObjType(strType);
	//console.log(strType);
	//console.log(objType);

	var movieImg = document.createElement("img");
  movieImg.src = objType.poster;
	//movieImg.id = strType+"img";
	movieImg.className = "movieImage"
  divMvDt.appendChild(movieImg);

	var dtDiv = document.createElement("div");
	dtDiv.className = "movieDetail";
	//dtDiv.id = "dtDiv";
	divMvDt.appendChild(dtDiv);

	var movieTitle = document.createElement("h1");
	movieTitle.innerHTML = objType.title;
	//movieTitle.id = "movieTitle";
	dtDiv.appendChild(movieTitle);

	var movieSynopsis = document.createElement("p");
	movieSynopsis.innerHTML = objType.description[0] + "<br>";
	//movieSynopsis.id = "movieSynopsis";
	dtDiv.appendChild(movieSynopsis);

/*
  var movieImg = document.createElement("img");
  movieImg.src = movieObj.imgName;
	movieImg.id = "movieImg";
	movieImg.className = "movieImgDetail"
  divMvDt.appendChild(movieImg);

	var dtDiv = document.createElement("div");
	dtDiv.className = "movieTicketDetailText";
	dtDiv.id = "dtDiv";
	divMvDt.appendChild(dtDiv);

	var movieTitle = document.createElement("h1");
	movieTitle.innerHTML = movieObj.title;
	movieTitle.id = "movieTitle";
	dtDiv.appendChild(movieTitle);

	var movieSynopsis = document.createElement("p");
	movieSynopsis.innerHTML = "Synopsis: " + movieObj.synopsis + "<br><br>";
	movieSynopsis.id = "movieSynopsis";
	dtDiv.appendChild(movieSynopsis);

	var movieGenreName = document.createElement("p");
	movieGenreName.innerHTML = "Genre Name: " + movieObj.genreName + "<br><br>";
	movieGenreName.id = "movieGenreName";
	dtDiv.appendChild(movieGenreName);

	var movieAge = document.createElement("p");
	movieAge.innerHTML = "Movie Rating: " + movieObj.age + "<br><br>";
	movieAge.id = "movieAge";
	dtDiv.appendChild(movieAge);

	var movieSessions = document.createElement("p");
	movieSessions.innerHTML = "Movie Sessions: " + getSessions(movieObj) + "<br><br>";
	movieSessions.id = "movieSessions";
	dtDiv.appendChild(movieSessions);
*/
}

function getObjType(strType){
	var objType;
	if (strType == "AC") {
		objType = data.AC;
	}
	else if (strType == "FO") {
		objType = data.FO;
	}
	else if (strType == "RC") {
		objType = data.RC;
	}
	else  if (strType == "CH") {
		objType = data.CH;
	}
	return objType;
}
/*
function getMovie1Details() {
if(mvdetails1 == 0){
	document.getElementById("title1").innerHTML = data.AC.title;
	document.getElementById("synopsis1").innerHTML = data.AC.description[0];
	document.getElementById("genre1").innerHTML = "";
	document.getElementById("ageRating1").innerHTML ="";
	document.getElementById("time1").innerHTML = "";
		mvdetails1 = 1

}
else {
	document.getElementById("title1").innerHTML = data.AC.title;
	document.getElementById("synopsis1").innerHTML = data.AC.description[0];
	document.getElementById("genre1").innerHTML = data.AC;
	document.getElementById("ageRating1").innerHTML = "Movie rating: " + movie1.age;
	movie1.sessions = getSessions(movie1);
	document.getElementById("time1").innerHTML = movie1.sessions;
	mvdetails1 = 0;
}
}
function getMovie2Details() {
	if(mvdetails2 == 0){
		document.getElementById("title2").innerHTML = movie2.title;
		document.getElementById("synopsis2").innerHTML = "Synopsis: " + movie2.synopsis;
		document.getElementById("genre2").innerHTML = "";
		document.getElementById("ageRating2").innerHTML ="";
		document.getElementById("time2").innerHTML = "";
			mvdetails2 = 1

	}
	else {
		document.getElementById("title2").innerHTML = movie2.title;
		document.getElementById("synopsis2").innerHTML = "Synopsis: " + movie2.synopsis;
		document.getElementById("genre2").innerHTML = "Genre: " + movie2.genreName;
		document.getElementById("ageRating2").innerHTML = "Movie rating: " + movie2.age;
		movie2.sessions = getSessions(movie2);
		document.getElementById("time2").innerHTML = movie2.sessions;
		mvdetails2 = 0;
	}
}
function getMovie3Details() {
	if(mvdetails3 == 0){
		document.getElementById("title3").innerHTML = movie3.title;
		document.getElementById("synopsis3").innerHTML = "Synopsis: " + movie3.synopsis;
		document.getElementById("genre3").innerHTML = "";
		document.getElementById("ageRating3").innerHTML ="";
		document.getElementById("time3").innerHTML = "";
			mvdetails3 = 1

	}
	else {
		document.getElementById("title3").innerHTML = movie3.title;
		document.getElementById("synopsis3").innerHTML = "Synopsis: " + movie3.synopsis;
		document.getElementById("genre3").innerHTML = "Genre: " + movie3.genreName;
		document.getElementById("ageRating3").innerHTML = "Movie rating: " + movie3.age;
		movie3.sessions = getSessions(movie3);
		document.getElementById("time3").innerHTML = movie3.sessions;
		mvdetails3 = 0;
	}

}
function getMovie4Details() {
	if(mvdetails4 == 0){
		document.getElementById("title4").innerHTML = movie4.title;
		document.getElementById("synopsis4").innerHTML = "Synopsis: " + movie4.synopsis;
		document.getElementById("genre4").innerHTML = "";
		document.getElementById("ageRating4").innerHTML ="";
		document.getElementById("time4").innerHTML = "";
			mvdetails4 = 1

	}
	else {
		document.getElementById("title4").innerHTML = movie4.title;
		document.getElementById("synopsis4").innerHTML = "Synopsis: " + movie4.synopsis;
		document.getElementById("genre4").innerHTML = "Genre: " + movie4.genreName;
		document.getElementById("ageRating4").innerHTML = "Movie rating: " + movie4.age;
		movie4.sessions = getSessions(movie4);
		document.getElementById("time4").innerHTML = movie4.sessions;
		mvdetails4 = 0;
	}
}
*/
function getSessions(movie){
	var sessions = "";
	for (var i = 0; i <= movie.days.length-1; i++) {
		sessions = sessions + movie.days[i] + " - " + movie.times[i];
		sessions = sessions + " | ";
	}
	return sessions;
}

function bookMovie(){
	if (document.getElementById("price").innerHTML == "$0.00"){
		document.getElementById("notickets").hidden = false;
		return false;
	}
	//alert("booked");
	alert("You have booked " + selectedMovieFromOptions + " for " + document.getElementById("day").value +" at " + document.getElementById("time").value);

	//alert("You have booked " + selectedMovieFromOptions);

}

function selectedMovie(selected){
	/*window.name based from http://www.boutell.com/newfaq/creating/scriptpass.html*/
	console.log(data.FO.title);
	if (selected == "movie1") {
		sessionStorage.setItem("film",movie1.title);
		/*localStorage.film = "";*/
	}
	if (selected == "movie2") {
		sessionStorage.setItem("film",movie2.title);
	}
	if (selected == "movie3") {
		sessionStorage.setItem("film",movie3.title);
	}
	if (selected == "movie4") {
		sessionStorage.setItem("film",movie4.title);
	}
}

function getPriceAndSchedule() {
	tablePricesCreate();
	tableScheduleCreate();
}

function getTicketInfo() {

	if (sessionStorage.getItem("film") == null) {
		sessionStorage.setItem("film",movie1.title);
	}
	var divMvDt = document.getElementById("divMovieDetail");
	var movieObj = getMovie(sessionStorage.getItem("film"));

  var movieImg = document.createElement("img");
  movieImg.src = movieObj.imgName;
	movieImg.id = "movieImg";
	movieImg.className = "movieImgDetail"
  divMvDt.appendChild(movieImg);

	var dtDiv = document.createElement("div");
	dtDiv.className = "movieTicketDetailText";
	dtDiv.id = "dtDiv";
	divMvDt.appendChild(dtDiv);

	var movieTitle = document.createElement("h1");
	movieTitle.innerHTML = movieObj.title;
	movieTitle.id = "movieTitle";
	dtDiv.appendChild(movieTitle);

	var movieSynopsis = document.createElement("p");
	movieSynopsis.innerHTML = "Synopsis: " + movieObj.synopsis + "<br><br>";
	movieSynopsis.id = "movieSynopsis";
	dtDiv.appendChild(movieSynopsis);

	var movieGenreName = document.createElement("p");
	movieGenreName.innerHTML = "Genre Name: " + movieObj.genreName + "<br><br>";
	movieGenreName.id = "movieGenreName";
	dtDiv.appendChild(movieGenreName);

	var movieAge = document.createElement("p");
	movieAge.innerHTML = "Movie Rating: " + movieObj.age + "<br><br>";
	movieAge.id = "movieAge";
	dtDiv.appendChild(movieAge);

	var movieSessions = document.createElement("p");
	movieSessions.innerHTML = "Movie Sessions: " + getSessions(movieObj) + "<br><br>";
	movieSessions.id = "movieSessions";
	dtDiv.appendChild(movieSessions);

	//create movie NAME select option
	var movieOpt = document.getElementById("movieOpt");
	var movies = [movie1.title,movie2.title,movie3.title,movie4.title];

	var movieOptions = document.createElement("select");
	movieOptions.id = "film";
	movieOptions.name = "film";
	movieOpt.appendChild(movieOptions);

	for (var i = 0; i < movies.length; i++) {
	    var option = document.createElement("option");
	    option.value = movies[i];
	    option.text = movies[i];
	    movieOptions.appendChild(option);
	}
	SelectElement(sessionStorage.getItem("film"));

	//create movie session DAY select option
	var dayOpt = document.getElementById("dayOpt");
	var days = getDays(sessionStorage.getItem("film"));

	var dayOptions = document.createElement("select");
	dayOptions.id = "day";
	dayOptions.name = "day";
	dayOpt.appendChild(dayOptions);

	for (var i = 0; i < days.length; i++) {
	    var option = document.createElement("option");
	    option.value = days[i];
	    option.text = days[i];
	    dayOptions.appendChild(option);
	}

	//create movie session TIME
	var timeOpt = document.getElementById("timeOpt");
	var time = getTime(days[0],sessionStorage.getItem("film"));
	timeOpt.appendChild(document.createTextNode(time));

	var inputTime = document.createElement("input");
	inputTime.hidden = true;
	inputTime.id = "time";
	inputTime.name = "time";
	inputTime.value = time;
	document.getElementById("ticketForm").appendChild(inputTime);


	//create label total Price
	var price = document.getElementById("price");
	price.appendChild(document.createTextNode("$0.00"));

	var notickets = document.getElementById("notickets");
	var dv = document.createElement("div");
	notickets.appendChild(document.createTextNode("You did not select any ticket"));
	notickets.hidden = true;

	selectedMovieFromOptions = sessionStorage.getItem("film");
	tableCreate();
}

function tableScheduleCreate(){
    var tickets = document.getElementById("weeklySchedule"),
        tbl  = document.createElement('table');
				tbl.className = "table"
    //tbl.style.border = "1px solid white";

		var tr = tbl.insertRow();

		var td1 = tr.insertCell();
		var td2 = tr.insertCell();
		var td3 = tr.insertCell();

		td1.appendChild(document.createTextNode("Mon - Tue"));
		td2.appendChild(document.createTextNode("Wed-Fri"));
		td3.appendChild(document.createTextNode("Sat - Sun"));

		td1.style.border = "1px solid white";
		td2.style.border = "1px solid white";
		td3.style.border = "1px solid white";

		td1.className = "ticketTable";
		td2.className = "ticketTable";
		td3.className = "ticketTable";

		for(var i = 0; i < 4; i++){
        var tr = tbl.insertRow();

				//CELL
        for(var j = 0; j < 3; j++){
                var td = tr.insertCell();
								if(j==0){
									td.appendChild(document.createTextNode(ticketMonTue[i]));
								}
								if (j==1){

										td.appendChild(document.createTextNode(ticketWedFri[i]));
								}
								if (j==2) {
									/*var divText = document.createTextNode("$");
									subTotalPrice.appendChild(divText);*/
									td.appendChild(document.createTextNode(ticketSatSun[i]));
								}
								td.className = "ticketTable"
                td.style.border = "1px solid white";

        }
    }
    tickets.appendChild(tbl);
}

function tablePricesCreate(){
    var tickets = document.getElementById("pricesAndSchedule"),
        tbl  = document.createElement('table');
				tbl.className = "table"
    //tbl.style.border = "1px solid white";

		var tr = tbl.insertRow();

		var td1 = tr.insertCell();
		var td2 = tr.insertCell();
		var td3 = tr.insertCell();

		td1.appendChild(document.createTextNode("Price List"));
		td2.appendChild(document.createTextNode("Mon - Tue (All Day) / Mon - Fri (1pm only)"));
		td3.appendChild(document.createTextNode("Wed - Fri (not 1pm) / Sat - Sun (All Day)"));

		td1.style.border = "1px solid white";
		td2.style.border = "1px solid white";
		td3.style.border = "1px solid white";

		td1.className = "ticketTable";
		td2.className = "ticketTable";
		td3.className = "ticketTable";

		for(var i = 0; i < 6; i++){
        var tr = tbl.insertRow();

				//CELL
        for(var j = 0; j < 3; j++){
                var td = tr.insertCell();
								if(j==0){
									td.appendChild(document.createTextNode(ticketTypeNamee[i]));
								}
								if (j==1){

										td.appendChild(document.createTextNode(ticketType1Price[i]));
								}
								if (j==2) {
									/*var divText = document.createTextNode("$");
									subTotalPrice.appendChild(divText);*/
									td.appendChild(document.createTextNode(ticketType2Price[i]));
								}
								td.className = "ticketTable"
                td.style.border = "1px solid white";

        }
    }
    tickets.appendChild(tbl);
}

function tableCreate(){
    var tickets = document.getElementById("tickets"),
        tbl  = document.createElement('table');
				tbl.className = "table"


		var tr = tbl.insertRow();

		var td1 = tr.insertCell();
		var td2 = tr.insertCell();
		var td3 = tr.insertCell();
		var td4 = tr.insertCell();

		td1.appendChild(document.createTextNode("Ticket Type"));
		td2.appendChild(document.createTextNode("Quantity"));
		td3.appendChild(document.createTextNode("Price"));
		td4.appendChild(document.createTextNode("Subtotal Price"));

		td1.style.border = "1px solid white";
		td2.style.border = "1px solid white";
		td3.style.border = "1px solid white";
		td4.style.border = "1px solid white";

		td1.className = "ticketTable";
		td2.className = "ticketTable";
		td3.className = "ticketTable";
		td4.className = "ticketTable";

		//ROW
    for(var i = 0; i < 8; i++){
        var tr = tbl.insertRow();

				//CELL
        for(var j = 0; j < 4; j++){
                var td = tr.insertCell();
								if(j==0){
									td.appendChild(document.createTextNode(ticketTypeName[i]));
								}
								if (j==1){
										var quantity = document.createElement("select");
										var IdAndName = ticketType[i];
										quantity.id = IdAndName;
										quantity.name = IdAndName;
										tr.appendChild(quantity);

										for (var k = 0; k < 11; k++) {
												var option = document.createElement("option");
												option.value = k;
												option.text = k;
												quantity.appendChild(option);
										}
										cell = quantity;
										td.appendChild(quantity);
								}
								if (j==2) {
									var subTotalPrice = document.createElement('div');
									var IdAndNameSBT = "individualPrice"+ticketType[i];
									subTotalPrice.id =  IdAndNameSBT;
									subTotalPrice.className = IdAndNameSBT;
									var day = document.getElementById("day");
									var daySelected = day.options[day.selectedIndex].text;
									var timeDiv = document.getElementById("timeOpt");
									timeSelected = timeDiv.innerHTML;
									var divText = document.createTextNode("$"+calculatePrice(daySelected,timeSelected,ticketType[i],1));
									subTotalPrice.appendChild(divText);
									td.appendChild(subTotalPrice);
								}
								if (j==3) {
									var subTotalPrice = document.createElement('div');
									var IdAndNameSBT = "sbt"+ticketType[i];
									subTotalPrice.id =  IdAndNameSBT;
									subTotalPrice.className = IdAndNameSBT;
									var divText = document.createTextNode("$0.00");
									subTotalPrice.appendChild(divText);
									td.appendChild(subTotalPrice);
								}
								td.className = "ticketTable"
                td.style.border = "1px solid white";

        }
    }
    tickets.appendChild(tbl);
}

function refreshPrice(){
	var totalPrice = 0;
	for(var i = 0; i < 8; i++){
		var type = document.getElementById(ticketType[i]);
		var quantity = type.options[type.selectedIndex].text;
		var sbt = document.getElementById("sbt"+ticketType[i]);
		var ip = document.getElementById("individualPrice"+ticketType[i]);
		var day = document.getElementById("day");
		var daySelected = day.options[day.selectedIndex].text;

		var timeDiv = document.getElementById("timeOpt");
		timeSelected = timeDiv.innerHTML;

		var subPrice = calculatePrice(daySelected,timeSelected,type.id,quantity);
		var subPriceFloat = (subPrice).toFixed(2)
		sbt.innerHTML = "$"+subPriceFloat.toString();

		var individualPrice = calculatePrice(daySelected,timeSelected,type.id,1);
		ip.innerHTML = "$"+individualPrice;
		totalPrice = totalPrice + subPrice;

	}
	var price = document.getElementById("price");
	var totalPriceFloat = (totalPrice).toFixed(2);
	price.innerHTML = "$"+totalPriceFloat.toString();

	var inputPrice = document.createElement("input");
	inputPrice.hidden = true;
	inputPrice.name = "price";
	inputPrice.value = totalPriceFloat;
	document.getElementById("ticketForm").appendChild(inputPrice);

	var notickets = document.getElementById("notickets");
	notickets.hidden = true;

}

function calculatePrice(day,time,type, quantity){
	var subPrice = 0;
	if((day=="Monday" || day=="Tuesday") || (day=="Wednesday"  && time=="1pm") || (day=="Thursday" && time=="1pm") || (day=="Friday" && time=="1pm")) {
		if(type=="SA"){
			subPrice=quantity*12;
		}
		if(type=="SP"){
			subPrice=quantity*10;
		}
		if(type=="SC"){
			subPrice=quantity*8;
		}
		if(type=="FA"){
			subPrice=quantity*25;
		}
		if(type=="FC"){
			subPrice=quantity*20;
		}
		if(type=="B1" || type=="B2" || type=="B3"){
			subPrice=quantity*20;
		}
	}
	else{
		if(type=="SA"){
			subPrice=quantity*18;
		}
		if(type=="SP"){
			subPrice=quantity*15;
		}
		if(type=="SC"){
			subPrice=quantity*12;
		}
		if(type=="FA"){
			subPrice=quantity*30;
		}
		if(type=="FC"){
			subPrice=quantity*25;
		}
		if(type=="B1" || type=="B2" || type=="B3"){
			subPrice=quantity*30;
		}
	}
	return subPrice;

}

function refreshTicketInfo(){
	var e = document.getElementById("film");
	var strUser = e.options[e.selectedIndex].text;
	selectedMovieFromOptions = strUser;

	var divMvDt = document.getElementById("divMovieDetail");
	var movieObj = getMovie(selectedMovieFromOptions);
	//alert(selectedMovieFromOptions);
  var movieImg = document.getElementById("movieImg");
  movieImg.src = movieObj.imgName;
  divMvDt.appendChild(movieImg);
	var dtDiv = document.getElementById("dtDiv");

	var title = document.getElementById("movieTitle");
	title.innerHTML = movieObj.title;
	//alert(movieObj.synopsis);
	var movieSynopsis = document.getElementById("movieSynopsis");
	movieSynopsis.innerHTML = "Synopsis: " + movieObj.synopsis + "<br><br>";

	var movieGenreName = document.getElementById("movieGenreName");
	movieGenreName.innerHTML = "Genre Name: " + movieObj.genreName;
	//*/

	//refresh DAY options
	deleteOptions("day");
	var days = getDays(selectedMovieFromOptions);
	var dayOptions = document.getElementById("day");
	for (var i = 0; i < days.length; i++) {
	    var option = document.createElement("option");
	    option.value = days[i];
	    option.text = days[i];
	    dayOptions.appendChild(option);
	}

	//refresh TIME options
	refreshTime();

}

function refreshTime(){
	var timeDiv = document.getElementById("timeOpt");
	var day = document.getElementById("day");

	var daySelected = day.options[day.selectedIndex].text;
	var time = getTime(daySelected,selectedMovieFromOptions);
	timeDiv.innerHTML = time;

	var inputTime = document.createElement("input");
	inputTime.hidden = true;
	inputTime.id = "time";
	inputTime.name = "time";
	inputTime.value = time;
	document.getElementById("ticketForm").appendChild(inputTime);

	refreshPrice();
}

function deleteOptions(dayOrTime){
	var options = document.getElementById(dayOrTime);
	while (options.firstChild ) options.removeChild(options.firstChild );
}

function getDays(movie){
	var dayss = [];
	if (movie == movie1.title) {
		dayss = movie1.dayByDay;
	}
	else if (movie == movie2.title) {
		dayss = movie2.dayByDay;
	}
	else if (movie == movie3.title) {
		dayss = movie3.dayByDay;
	}
	else  if (movie == movie4.title) {
		dayss = movie4.dayByDay;
	}
	return dayss
}

function getMovie(movie){
	var movieObj;
	if (movie == movie1.title) {
		movieObj = movie1;
	}
	else if (movie == movie2.title) {
		movieObj = movie2;
	}
	else if (movie == movie3.title) {
		movieObj = movie3;
	}
	else  if (movie == movie4.title) {
		movieObj = movie4;
	}
	return movieObj
}

function getTime(day,movie){
	var time = "";
	if (movie == movie1.title) {
		if(day==movie1.dayByDay[0] || day==movie1.dayByDay[1] || day==movie1.dayByDay[2]){
			time = movie1.times[0];
		}
		if(day==movie1.dayByDay[3] ||day==movie1.dayByDay[4]){
			time = movie1.times[1];
		}
	}
	else if (movie == movie2.title) {
		if(day==movie2.dayByDay[0] || day==movie2.dayByDay[1]){
			time = movie2.times[0];
		}
		if(day==movie2.dayByDay[2] || day==movie2.dayByDay[3] || day==movie2.dayByDay[4]){
			time = movie2.times[1];
		}
		if(day==movie2.dayByDay[5] || day==movie2.dayByDay[6]){
			time = movie2.times[2];
		}
	}
	else if (movie == movie3.title) {
		if(day==movie3.dayByDay[0] ||day==movie3.dayByDay[1]){
			time = movie3.times[0];
		}
		if(day==movie3.dayByDay[2] || day==movie3.dayByDay[3] || day==movie3.dayByDay[4]){
			time = movie3.times[1];
		}
		if(day==movie3.dayByDay[5] || day==movie3.dayByDay[6]){
			time = movie3.times[2];
		}
	}
	else  if (movie == movie4.title) {
		if(day==movie4.dayByDay[0] || day==movie4.dayByDay[1]){
			time = movie4.times[0];
		}
		if(day==movie4.dayByDay[2] || day==movie4.dayByDay[3]){
			time = movie4.times[1];
		}
	}
	return time;
}

function SelectElement(valueToSelect){
    var element = document.getElementById('film');
    element.value = valueToSelect;
}

/*/*<img class="movieImage"
src="images/americanSniper.jpg" alt="AmericanSniper" />
<div class = "movieDetail">
		<h1 id="title1"></h1>
		<p id="synopsis1"></p>
		<p id="genre1"></p>
		<p id="ageRating1"></p>
		<p id="time1"></p>
		<div class="movieButton">
		<a class ="movieButtonText" href="index.php?page=ticket" id="movie1" onclick="selectedMovie(id)">Book</a>
		<a class ="movieButtonText" id="movie1Detail" onclick="getMovie1Details();">Details</a>
		</div>
</div>
<div class="hrMovie"></div>*/
