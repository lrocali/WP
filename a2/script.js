var movie1 = {
	title:"American Sniper",
	synopsis:"From director Clint Eastwood comes “American Sniper,” starring Bradley Cooper as Chris Kyle, the most lethal sniper in U.S. military history. But there was much more to him than his skill as a sharpshooter.",
	genre:"AC",
	genreName:"Action",
	days:["Wed, Thu, Fri","Sat, Sun"],
	times:["9pm","9pm"],
	sessions:""

};

var movie2 = {
	title:"Home",
	synopsis:"After an alien race invades Earth to escape their enemies, an alien accidentally reveals their location and must go on the run with a teenage human girl to save the planet.",
	genre:"CH",
	genreName:"Children",
	days:["Mon, Tue","Wed, Thu, Fri","Sat, Sun"],
	times:["1pm","6pm","12pm"],
	sessions:""

};

var movie3 = {
	title:"You're My Boss",
	synopsis:"Pong (Coco Martin) is an executive assistant in an airline company where Georgina Lorenzana (Toni Gonzaga) is an assistant vice presiden.",
	genre:"RC",
	genreName:"Romantic Comedy",
	days:["Mon, Tue","Wed, Thu,Fri ","Sat, Sun"],
	times:["9pm","1pm","6pm"],
	sessions:""

};

var movie4 = {
	title:"Sounds of Music",
	synopsis:"A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.",
	genre:"AF",
	genreName:"Art/ Foreign Filme",
	days:["Mon, Tue","Sat,Sun "],
	times:["6pm","3pm"],
	sessions:""

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

var selectedMovieFromOptions = ""
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
	alert(window.name);
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

	//create movie session TIME select option
	var timeOpt = document.getElementById("timeOpt");

	var times = getTimes(window.name);

	var timeOptions = document.createElement("select");
	timeOptions.id = "time";
	timeOptions.name = "time";
	timeOpt.appendChild(timeOptions);

	for (var i = 0; i < times.length; i++) {
			var option = document.createElement("option");
			option.value = times[i];
			option.text = times[i];
			timeOptions.appendChild(option);
	}
	tableCreate();
}

function tableCreate(){
    var body = document.getElementById("tickets"),
        tbl  = document.createElement('table');
    tbl.style.width  = '500px';
    //tbl.style.border = "1px solid white";

		//ROW
    for(var i = 0; i < 8; i++){
        var tr = tbl.insertRow();

				//CELL
        for(var j = 0; j < 3; j++){
                var td = tr.insertCell();
								if(j==0){
									//var cell = ticketTypeName[i];
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
									var IdAndNameSBT = "sbt"+ticketType[i];
									subTotalPrice.id =  IdAndNameSBT;
									subTotalPrice.className = IdAndNameSBT;
									var divText = document.createTextNode("0");
									subTotalPrice.appendChild(divText);
									td.appendChild(subTotalPrice);
								}

                td.style.border = "1px solid white";

        }
    }
    body.appendChild(tbl);
}

function refreshPrice(){
	for(var i = 0; i < 8; i++){
		var type = document.getElementById(ticketType[i]);
		var quantity = type.options[type.selectedIndex].text;
		var sbt = document.getElementById("sbt"+ticketType[i]);

		var day = document.getElementById("day");
		var daySelected = day.options[day.selectedIndex].text;

		var time = document.getElementById("time");
		var timeSelected = time.options[time.selectedIndex].text;

		var subPrice = calculatePrice(daySelected,timeSelected,type.id,quantity);
		sbt.innerHTML = subPrice.toString();
	}
}

function calculatePrice(day,time,type, quantity){
	var price = parseInt(quantity);
	//if(day==)
	alert(time);
	return price;

}
function refreshTicketInfo(){
	var e = document.getElementById("film");
	var strUser = e.options[e.selectedIndex].text;
	selectedMovieFromOptions = strUser;

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
	deleteOptions("time");
	var times = getTimes(selectedMovieFromOptions);
	var timeOptions = document.getElementById("time");
	for (var i = 0; i < times.length; i++) {
	    var option = document.createElement("option");
	    option.value = times[i];
	    option.text = times[i];
	    timeOptions.appendChild(option);
	}


}

function deleteOptions(dayOrTime){
	var options = document.getElementById(dayOrTime);
	while (options.firstChild ) options.removeChild(options.firstChild );
}
function getDays(movie){
	var dayss = []
	//alert(movie);
	if (movie == movie1.title) {
		dayss = movie1.days;
	}
	else if (movie == movie2.title) {
		dayss = movie2.days;
	}
	else if (movie == movie3.title) {
		dayss = movie3.days;
	}
	else  if (movie == movie4.title) {
		dayss = movie4.days;
	}
	return dayss
}

function getTimes(movie){
	var timess = []
	//alert(movie);
	if (movie == movie1.title) {
		timess = movie1.times;
	}
	else if (movie == movie2.title) {
		timess = movie2.times;
	}
	else if (movie == movie3.title) {
		timess = movie3.times;
	}
	else  if (movie == movie4.title) {
		timess = movie4.times;
	}
	return timess
}

function SelectElement(valueToSelect)
{
    var element = document.getElementById('film');
    element.value = valueToSelect;
}
