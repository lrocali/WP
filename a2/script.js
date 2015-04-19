var movie1 = {
	title:"American Sniper",
	synopsis:"From director Clint Eastwood comes 'American Sniper,' starring Bradley Cooper as Chris Kyle, the most lethal sniper in U.S. military history. But there was much more to him than his skill as a sharpshooter.",
	genre:"AC",
	genreName:"Action",
	days:["Wed, Thu, Fri","Sat, Sun"],
	dayByDay:["Wed","Thu","Fri","Sat","Sun"],
	times:["9pm","9pm"],
	sessions:"",
	imgName:"images/americanSniper.jpg"

};

var movie2 = {
	title:"Home",
	synopsis:"After an alien race invades Earth to escape their enemies, an alien accidentally reveals their location and must go on the run with a teenage human girl to save the planet.",
	genre:"CH",
	genreName:"Children",
	days:["Mon, Tue","Wed, Thu, Fri","Sat, Sun"],
	dayByDay:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
	times:["1pm","6pm","12pm"],
	sessions:"",
	imgName:"images/home.jpg"

};

var movie3 = {
	title:"You're My Boss",
	synopsis:"Pong (Coco Martin) is an executive assistant in an airline company where Georgina Lorenzana (Toni Gonzaga) is an assistant vice presiden.",
	genre:"RC",
	genreName:"Romantic Comedy",
	days:["Mon, Tue","Wed, Thu, Fri","Sat, Sun"],
	dayByDay:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
	times:["9pm","1pm","6pm"],
	sessions:"",
	imgName:"images/youAreMyBoss.jpg"

};

var movie4 = {
	title:"Sounds of Music",
	synopsis:"A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
	genre:"AF",
	genreName:"Art/ Foreign Filme",
	days:["Mon, Tue","Sat, Sun"],
	dayByDay:["Mon","Tue","Sat","Sun"],
	times:["6pm","3pm"],
	sessions:"",
	imgName:"images/theSoundsOfMusic.jpg"

};

var ticketType = ["SA","SP","SC","FA","FC","B1","B2","B3"]
var ticketTypeName = [
	"Adult",
	"Concession",
	"Child",
	"First Class Adult",
	"First Class Child",
	"Beanbag - 1 Person",
	"Beanbag - 2 People",
	"Beanbag - 3 children"
]

var selectedMovieFromOptions = movie1;
function getInfo() {
	document.getElementById("title1").innerHTML = movie1.title;
	document.getElementById("synopsis1").innerHTML = "Synopsis: " + movie1.synopsis;
	document.getElementById("genre1").innerHTML = "Genre: " + movie1.genreName;
	movie1.sessions = getSessions(movie1);
	document.getElementById("time1").innerHTML = movie1.sessions;

	document.getElementById("title2").innerHTML = movie2.title;
	document.getElementById("synopsis2").innerHTML = "Synopsis: " + movie2.synopsis;
	document.getElementById("genre2").innerHTML = "Genre: " + movie2.genreName;
	movie2.sessions = getSessions(movie2);
	document.getElementById("time2").innerHTML = movie2.sessions;

	document.getElementById("title3").innerHTML = movie3.title;
	document.getElementById("synopsis3").innerHTML = "Synopsis: " + movie3.synopsis;
	document.getElementById("genre3").innerHTML = "Genre: " + movie3.genreName;
	movie3.sessions = getSessions(movie3);
	document.getElementById("time3").innerHTML = movie3.sessions;

	document.getElementById("title4").innerHTML = movie4.title;
	document.getElementById("synopsis4").innerHTML = "Synopsis: " + movie4.synopsis;
	document.getElementById("genre4").innerHTML = "Genre: " + movie4.genreName;
	movie4.sessions = getSessions(movie4);
	document.getElementById("time4").innerHTML = movie4.sessions;
}

function getSessions(movie){
	var sessions = "";
	for (var i = 0; i <= movie.days.length-1; i++) {
		sessions = sessions + movie.days[i] + " - " + movie.times[i];
		sessions = sessions + "  |  ";
	}
	return sessions;
}

function bookMovie(){
	alert("You have booked " + selectedMovieFromOptions);
}

function selectedMovie(selected){
	/*window.name based from http://www.boutell.com/newfaq/creating/scriptpass.html*/
	if (selected == "movie1") {
		window.name = movie1.title;
	}
	if (selected == "movie2") {
		window.name = movie2.title;
	}
	if (selected == "movie3") {
		window.name = movie3.title;
	}
	if (selected == "movie4") {
		window.name = movie4.title;
	}
}

function getTicketInfo() {
	var divMvDt = document.getElementById("divMovieDetail");
	var movieObj = getMovie(window.name);

  var movieImg = document.createElement("img");
  movieImg.src = movieObj.imgName;
	movieImg.id = "movieImg";
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
	movieGenreName.innerHTML = "Genre Name: " + movieObj.genreName;
	movieGenreName.id = "movieGenreName";
	dtDiv.appendChild(movieGenreName);

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
	SelectElement(window.name);

	//create movie session DAY select option
	var dayOpt = document.getElementById("dayOpt");
	var days = getDays(window.name);

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
	var timeOpt = document.getElementById("time");
	var time = getTime(days[0],window.name);
	timeOpt.appendChild(document.createTextNode(time));

	//create label total Price
	var price = document.getElementById("price");
	price.appendChild(document.createTextNode("0.00"));

	selectedMovieFromOptions = window.name;
	tableCreate();
}

function tableCreate(){
    var tickets = document.getElementById("tickets"),
        tbl  = document.createElement('table');
    tbl.style.width  = '800px';
    tbl.style.border = "1px solid white";

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
									var timeDiv = document.getElementById("time");
									timeSelected = timeDiv.innerHTML;
									var divText = document.createTextNode(calculatePrice(daySelected,timeSelected,ticketType[i],1));
									subTotalPrice.appendChild(divText);
									td.appendChild(subTotalPrice);
								}
								if (j==3) {
									var subTotalPrice = document.createElement('div');
									var IdAndNameSBT = "sbt"+ticketType[i];
									subTotalPrice.id =  IdAndNameSBT;
									subTotalPrice.className = IdAndNameSBT;
									var divText = document.createTextNode("0.00");
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

		var timeDiv = document.getElementById("time");
		timeSelected = timeDiv.innerHTML;

		var subPrice = calculatePrice(daySelected,timeSelected,type.id,quantity);
		var subPriceFloat = (subPrice).toFixed(2)
		sbt.innerHTML = subPriceFloat.toString();

		var individualPrice = calculatePrice(daySelected,timeSelected,type.id,1);
		ip.innerHTML = individualPrice;
		totalPrice = totalPrice + subPrice;

	}
	var price = document.getElementById("price");
	var totalPriceFloat = (totalPrice).toFixed(2);
	price.innerHTML = totalPriceFloat.toString();

	var inputPrice = document.createElement("input");
	inputPrice.hidden = true;
	inputPrice.name = "price";
	inputPrice.value = totalPriceFloat;
	document.getElementById("ticketForm").appendChild(inputPrice);

}

function calculatePrice(day,time,type, quantity){
	var subPrice = 0;
	if((day=="Mon" || day=="Tue") || (day=="Wed"  && time=="1pm") || (day=="Thu" && time=="1pm") || (day=="Fri" && time=="1pm")) {
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
	var timeDiv = document.getElementById("time");
	var day = document.getElementById("day");

	var daySelected = day.options[day.selectedIndex].text;
	var time = getTime(daySelected,selectedMovieFromOptions);
	timeDiv.innerHTML = time;

	var inputTime = document.createElement("input");
	inputTime.hidden = true;
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
