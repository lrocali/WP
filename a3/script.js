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

var movieChosen = "AAC"
// START HOME
var mvAC = -1, mvFO = -1, mvRC = -1, mvCH = -1;
var data;

var seats = [["H1","H2","H3","H4","H5","o","o","o","o","H10","H11","H12","H13","H14"],
						 ["G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12","G13","G14"],
						["F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14"],
						["E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","E13","E14"],
						["o","o","o","o","o","D1","D2","D3","D4","o","o","o","o","o"],
						["o","o","o","o","o","C1","C2","C3","C4","o","o","o","o","o"],
						["o","o","o","o","o","B1","B2","B3","o","o","o","o","o","o"],
						["o","o","o","o","o","o","A1","A2","o","o","o","o","o","o"]]

function getInfo() {
	getMovieDetails("FO");
	getMovieDetails("CH");
	getMovieDetails("RC");
	getMovieDetails("AC");
}

function getJSONHome(){
	$.ajax({
    type: "POST",
    url: "https://saturn.csit.rmit.edu.au/~e54061/wp/movie-service.php",
    dataType: "json",
    success: function (result) {
        console.log(result);
				data = result;
				getInfo();
    }
	});
}

function getJSONTicket(){
	$.ajax({
    type: "POST",
    url: "https://saturn.csit.rmit.edu.au/~e54061/wp/movie-service.php",
    dataType: "json",
    success: function (result) {
        console.log(result);
				data = result;
				getTicketInfo();
    }
	});
}
function getMovieDetails(strType){
		var divMvDt = document.getElementById("div"+strType);
		var objType = getObjType(strType);

		var movieImg = document.createElement("img");
	  movieImg.src = objType.poster;
		movieImg.className = "movieImage"
	  divMvDt.appendChild(movieImg);

		var dtDiv = document.createElement("div");
		dtDiv.className = "movieDetail";
		divMvDt.appendChild(dtDiv);

		var movieTitle = document.createElement("h1");
		movieTitle.innerHTML = objType.title;
		dtDiv.appendChild(movieTitle);

		var movieRating = document.createElement("p");
		movieRating.innerHTML = "Rating: G";
		dtDiv.appendChild(movieRating);

		var movieSummary = document.createElement("p");
		movieSummary.innerHTML = "Summary: " + objType.summary;
		dtDiv.appendChild(movieSummary);

		//More Detail
		var movieSynopsis = document.createElement("p");
		movieSynopsis.innerHTML = "";
		movieSynopsis.id = "synopsis"+strType;
		dtDiv.appendChild(movieSynopsis);

		var movieSessions = document.createElement("p");
		movieSessions.innerHTML = "";
		movieSessions.id = "sessions"+strType;
		dtDiv.appendChild(movieSessions);
		//
		var btnDiv = document.createElement("div");
		btnDiv.className = "movieButton";
		dtDiv.appendChild(btnDiv);

		var movieBook = document.createElement("button");
		movieBook.onclick = function(){
			location.href="index.php?page=ticket";
			setTicketType(strType);
			};
		movieBook.innerHTML = "Book";
		movieBook.className = "movieButtonText";
		btnDiv.appendChild(movieBook);

		var movieMore = document.createElement("button");
		movieMore.innerHTML = "More";
		movieMore.className = "movieButtonText";
		movieMore.onclick = function(){
			moreInfo(strType);
			};
		btnDiv.appendChild(movieMore);

		/*var hrDiv = document.createElement("div");
		hrDiv.className="hrMovie";
		divMvDt.appendChild(hrDiv);*/
}

function setTicketType(strType){
	sessionStorage.setItem("chosenMovie",strType);
}

function getMV(strType){
	var mv;
	if (strType == "AC") {
		mv = mvAC;
	}
	else if (strType == "FO") {
		mv = mvFO;
	}
	else if (strType == "RC") {
		mv = mvRC;
	}
	else  if (strType == "CH") {
		mv = mvCH;
	}
	return mv;
}

function changeMV(strType){
	if (strType == "AC") {
		mvAC = mvAC*(-1);
	}
	else if (strType == "FO") {
		mvFO = mvFO*(-1);
	}
	else if (strType == "RC") {
		mvRC = mvRC*(-1);
	}
	else  if (strType == "CH") {
		mvCH = mvCH*(-1);
	}
}
function moreInfo(strType){
	changeMV(strType);
	getMoreDetails(strType);
}

function getMoreDetails(strType){
	mv = getMV(strType);
	var objType = getObjType(strType);
	var movieSynopsis = document.getElementById("synopsis"+strType);
	var movieSessions = document.getElementById("sessions"+strType);
	if(mv == 1){
		movieSynopsis.innerHTML = objType.description[0];
		movieSessions.innerHTML = getSessions(objType.sessions)
	}
	else {
		movieSynopsis.innerHTML = "";
		movieSessions.innerHTML = "";
	}
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

function getSessions(obj) {
	//console.log("sessions");
	var strSessions = "";
	if(obj.Monday != null){
		strSessions = strSessions + "Monday: " + obj.Monday + ",";
	}
	if(obj.Tuesday != null){
		strSessions = strSessions + " Tuesday: " + obj.Tuesday + ",";
	}
	if(obj.Wednesday != null){
		strSessions = strSessions + " Wednesday: " + obj.Wednesday + ",";
	}
	if(obj.Thursday != null){
		strSessions = strSessions + " Thursday: " + obj.Thursday + ",";
	}
	if(obj.Friday != null){
		strSessions = strSessions + " Friday: " + obj.Friday + ",";
	}
	if(obj.Saturday != null){
		strSessions = strSessions + " Saturday: " + obj.Saturday + ",";
	}
	if(obj.Sunday != null){
		strSessions = strSessions + " Sunday: " + obj.Sunday + ",";
	}
	return strSessions
}
// END HOME

function bookMovie(){
	if (document.getElementById("price").innerHTML == "$0.00"){
		document.getElementById("notickets").hidden = false;
		return false;
	}
	//alert("booked");
	alert("You have booked "+" for " + document.getElementById("day").value +" at " + document.getElementById("time").value);

	//alert("You have booked " + selectedMovieFromOptions);

}

function getPriceAndSchedule() {
	tablePricesCreate();
	tableScheduleCreate();
}

function getTicketInfoDetails(strType){
	var objType = getObjType(strType);

	var movieImg = document.getElementById("imgTicketDetail");	//--
	movieImg.src = objType.poster;

	var movieTitle = document.getElementById("titleTicketDetail"); //--
	movieTitle.innerHTML = objType.title;

	var movieRating = document.getElementById("ratingTicketDetail"); //--
	movieRating.innerHTML = "Rating: G";

	var movieSessions = document.getElementById("sessionsTicketDetail"); //--
	movieSessions.innerHTML = getSessions(objType.sessions);

	var movieDescription = document.getElementById("descriptionTicketDetail"); //--
	movieDescription.innerHTML = objType.description[0] + " "+objType.description[1] + " "+objType.description[2];

}
function getTicketInfo() {
	if (sessionStorage.getItem("chosenMovie") == null) {
		sessionStorage.setItem("chosenMovie","AC");
	}
	var stype = sessionStorage.getItem("chosenMovie");
	getTicketInfoDetails(stype);
	//-------------------------

	//create movie NAME select option
	var movieOpt = document.getElementById("movieOpt");
	var movies = [getObjType("FO").title,getObjType("CH").title,getObjType("RC").title,getObjType("AC").title];

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

	var objChosen = getObjType(stype);
	selectElement(objChosen.title);
	var dayOpt = document.getElementById("dayOpt");
	var days = getDayOrTime(objChosen.sessions,0);
	//console.log(days[0]);

	//CREATE DAY SELECT OPTION
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
	var time = getDayOrTime(objChosen.sessions,1);
	//console.log("TIMEE"+time[0]);
	timeOpt.appendChild(document.createTextNode(time[0]));
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

	var divSeatsToSelect = document.getElementById("divSeatsToSelect");
	divSeatsToSelect.appendChild(document.createTextNode("You should select 0 seats"));

	var divAddToCart = document.getElementById("divAddToCart");
	var btnAddToCart = document.createElement("button");
	btnAddToCart.innerHTML = "Add to Cart";
	//btnAddToCart.className = "movieButtonText";
	btnAddToCart.onclick = function(){
		//moreInfo(strType);
		//console.log("lahfdlasjd");
		//alert("jadsja");
		createCart();
		};
	divAddToCart.appendChild(btnAddToCart);

	tableCreate();
	tableSeatCreate();
}

function createCart(){
	var divCart = document.getElementById("divCart");

	var seatsSelected = checkForSelectedSeats();
	divCart.appendChild(document.createTextNode(seatsSelected));
}

function getDayOrTime(obj,DoT) { //DoT = 0 fot day and ,DoT = 1 for time
	var DaysOrTimes = [];
	if(obj.Monday != null){
		if(DoT == 0){
			DaysOrTimes.push("Monday");
		}
		else {
			DaysOrTimes.push(obj.Monday);
		}
	}
	if(obj.Tuesday != null){
		if(DoT == 0){
			DaysOrTimes.push("Tuesday");
		}
		else {
			DaysOrTimes.push(obj.Tuesday);
		}
	}
	if(obj.Wednesday != null){
		if(DoT == 0){
			DaysOrTimes.push("Wednesday");
		}
		else {
			DaysOrTimes.push(obj.Wednesday);
		}
	}
	if(obj.Thursday != null){
		if(DoT == 0){
			DaysOrTimes.push("Thursday");
		}
		else {
			DaysOrTimes.push(obj.Thursday);
		}
	}
	if(obj.Friday != null){
		if(DoT == 0){
			DaysOrTimes.push("Friday");
		}
		else {
			DaysOrTimes.push(obj.Friday);
		}
	}
	if(obj.Saturday != null){
		if(DoT == 0){
			DaysOrTimes.push("Saturday");
		}
		else {
			DaysOrTimes.push(obj.Saturday);
		}
	}
	if(obj.Sunday != null){
		if(DoT == 0){
			DaysOrTimes.push("Sunday");
		}
		else {
			DaysOrTimes.push(obj.Sunday);
		}
	}
	return DaysOrTimes
}


function tableSeatCreate(){
    var tickets = document.getElementById("seats"),
        tbl  = document.createElement('table');
		tbl.className = "table"

		//ROW
    for(var i = 0; i < 8; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 14; j++){
                var td = tr.insertCell();
								if (seats[i][j] == "o"){
									var divText = document.createTextNode("");
									td.appendChild(divText);
								}
								else {
									var divText = document.createTextNode(seats[i][j]);
									td.appendChild(divText);

									var checkbox = document.createElement('input');
									checkbox.type = "checkbox";
									checkbox.name = seats[i][j];
									checkbox.value = seats[i][j];
									checkbox.id = "id"+seats[i][j];
									td.appendChild(checkbox);
								}
								td.className = "seatsTable"
                td.style.border = "1px solid white";
        }
    }
    tickets.appendChild(tbl);
}

function checkForSelectedSeats(){
	//console.log(document.getElementById("id"+seats[0][0]).checked);
	var selectedSeats = [];
	for(var i = 0; i < 8; i++){
			for(var j = 0; j < 14; j++){
				//console.log(i+j);
				if (seats[i][j] != "o"){
					var seat = document.getElementById("id"+seats[i][j]);
					if (document.getElementById("id"+seats[i][j]).checked){
					selectedSeats.push(document.getElementById("id"+seats[i][j]).name);
					}
				}
			}
	}
	console.log(selectedSeats);
	return selectedSeats;
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
function getNumOfTickets(){
	var numOfTickets = 0;
	for(var i = 0; i < 8; i++){
		var type = document.getElementById(ticketType[i]);
		var quantity = type.options[type.selectedIndex].text;

		numOfTickets = numOfTickets + parseInt(quantity);
	}
	return numOfTickets;
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
	var divSeatsToSelect = document.getElementById("divSeatsToSelect");
	divSeatsToSelect.innerHTML = 	"You should select "+getNumOfTickets()+" seats";

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
function getTypeByTitle(title){
	var type;
	if (title == data.AC.title){
		type = "AC";
	}
	if (title == data.FO.title){
		type = "FO";
	}
	if (title == data.RC.title){
		type = "RC";
	}
	if (title == data.CH.title){
		type = "CH";
	}
	return type;
}

function refreshTicketInfo(){
	var e = document.getElementById("film");
	var strUser = e.options[e.selectedIndex].text;
	var type = getTypeByTitle(strUser);
	var objType = getObjType(type);
	/*
	type = "AC"
	strUser = AC.title

	*/
	getTicketInfoDetails(type);


	//refresh DAY options
	deleteOptions("day");

	var days = getDayOrTime(objType.sessions,0);
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
	var e = document.getElementById("film");
	var strUser = e.options[e.selectedIndex].text;
	var type = getTypeByTitle(strUser);
	var objType = getObjType(type);

	var timeDiv = document.getElementById("timeOpt");
	var day = document.getElementById("day");

	var time = getDayOrTime(objType.sessions,1);
	timeDiv.innerHTML = time[day.selectedIndex];

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

function selectElement(valueToSelect){
    var element = document.getElementById('film');
    element.value = valueToSelect;
}
