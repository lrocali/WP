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
var cartTableDescrition = ["Ticket Type","Cost","Quantity","Seats","Subtotal"];

var CHAR = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var movieChosen = "AAC"
// START HOME
var mvAC = -1, mvAF = -1, mvRC = -1, mvCH = -1;
var data;

var seats = [["H1","H2","H3","H4","H5","o","o","o","o","H10","H11","H12","H13","H14"],
						 ["G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12","G13","G14"],
						["F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14"],
						["E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","E13","E14"],
						["o","o","o","o","o","D1","D2","D3","D4","o","o","o","o","o"],
						["o","o","o","o","o","C1","C2","C3","C4","o","o","o","o","o"],
						["o","o","o","o","o","B1","B2","B3","o","o","o","o","o","o"],
						["o","o","o","o","o","o","A1","A2","o","o","o","o","o","o"]]
var bookedSeats = [];
function cartItem(){
	this.title = "title";
	this.day = "day";
	this.time = "time";
	this.ticket = ticket();
	this.subTotalCart = "0";
}
function ticket(){
	this.type = "AC";
	this.cost = "12";
	this.qty = "1";
	this.seats = "F1";
	this.subTotalTicket = "0;"
}
function getInfo() {
	getMovieDetails("AF");
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
	//var text = sessionStorage.getItem('cart');
		//var obj = JSON.parse(text);
		////console.log(obj);
		console.log("div"+strType);
		console.log(data);
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

		var movieRating = document.createElement("img");
		movieRating.src = objType.rating;
		movieRating.className = "rating"
		dtDiv.appendChild(movieRating);

		var movieSummary = document.createElement("p");
		movieSummary.innerHTML = "Summary: " + objType.summary;
		dtDiv.appendChild(movieSummary);
		
		var movieSessions = document.createElement("p");
		movieSessions.innerHTML = getSessions(objType.sessions);
		movieSessions.id = "sessions"+strType;
		dtDiv.appendChild(movieSessions);

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
		movieMore.id = "btnMore"+strType
		movieMore.className = "movieButtonText";
		movieMore.onclick = function(){
			moreInfo(strType);
			};
		btnDiv.appendChild(movieMore);

		//Mre Detail
		var movieSynopsis = document.createElement("p");
		movieSynopsis.innerHTML = "";
		movieSynopsis.id = "synopsis"+strType;
		dtDiv.appendChild(movieSynopsis);
		//
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
	else if (strType == "AF") {
		mv = mvAF;
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
	else if (strType == "AF") {
		mvAF = mvAF*(-1);
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
	var mv = getMV(strType);
	var objType = getObjType(strType);
	var movieSynopsis = document.getElementById("synopsis"+strType);
	var movieMore = document.getElementById("btnMore"+strType);
	if(mv == 1){
		movieSynopsis.innerHTML = "Synopsis: " + objType.description[0];
		movieMore.innerHTML = "Less";
	}
	else {
		movieSynopsis.innerHTML = "";
		movieMore.innerHTML = "More";
	}
}
function getObjType(strType){
	var objType;
	if (strType == "AC") {
		objType = data.AC;
	}
	else if (strType == "AF") {
		objType = data.AF;
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
	////console.log("sessions");
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
	if (document.getElementById("price").innerHTML == "0.00"){
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
	movieRating.className = "rating"
	movieRating.src = objType.rating;

	var movieSessions = document.getElementById("sessionsTicketDetail"); //--
	movieSessions.innerHTML = getSessions(objType.sessions);

	var movieDescription = document.getElementById("descriptionTicketDetail"); //--
	movieDescription.innerHTML = objType.description[0] + " "+objType.description[1] + " "+objType.description[2];

}
//Toki
function checkVoucher(str){
	if(str == null) return false;
	if(str[5] != "-" && str[11] != "-") return false;
	var x1 = (((parseInt(str[0])*parseInt(str[1])) + parseInt(str[2]))*parseInt(str[3]) + parseInt(str[4]))%26;
	var x2 = (((parseInt(str[6])*parseInt(str[7])) + parseInt(str[8]))*parseInt(str[9]) + parseInt(str[10]))%26;
	var stLetter = str[12];
	var ndLetter = str[13];
	//console.log("x1: "+x1+" x2: "+x2+" 1stL: "+stLetter+" 2ndL: "+ndLetter);
	if(str.length == 14){
  		if(stLetter == CHAR[x1] && ndLetter == CHAR[x2]){
		  return true;
	 	}
		 else return false;
	 }
	 else return false;
}
function getTicketInfo() {
	//var txt = "12345-67890-ZI";
	
	if (sessionStorage.getItem("chosenMovie") == null) {
		sessionStorage.setItem("chosenMovie","AC");
	}
	var stype = sessionStorage.getItem("chosenMovie");
	getTicketInfoDetails(stype);
	
	/*
	var text = '{ "employees" : [' +
	'{ "firstName":"John" , "lastName":"Doe" },' +
	'{ "firstName":"Anna" , "lastName":"Smith" },' +
	'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
	sessionStorage.setItem("cart",text);
	var obj = JSON.parse(text);
	
	var employee = {
		firstName:"Lucas",
		lastName:"Assis"
	}
	obj.employees.push(employee);
	alert(obj.employees[3].firstName);
	//console.log(obj);
	*///obj.employees.push()
	
	////session_start();
	//var session = "<?php echo $_SESSION?>";
 	////console.log(session);

	//you may access session variable "x" as follows
	//alert(session.x);
	//-------------------------

	//create movie NAME select option
	var movieOpt = document.getElementById("movieOpt");
	var movies = [getObjType("AF").title,getObjType("CH").title,getObjType("RC").title,getObjType("AC").title];

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
	////console.log(days[0]);

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
	////console.log("TIMEE"+time[0]);
	timeOpt.appendChild(document.createTextNode(time[0]));
	var inputTime = document.createElement("input");
	inputTime.hidden = true;
	inputTime.id = "time";
	inputTime.name = "time";
	inputTime.value = time;
	document.getElementById("ticketForm").appendChild(inputTime);

	//create label total Price
	var price = document.getElementById("price");
	price.appendChild(document.createTextNode("0.00"));

	var notickets = document.getElementById("notickets");
	var dv = document.createElement("div");
	notickets.innerHTML = "You did not select any ticket";
	notickets.hidden = true;

	var divSeatsToSelect = document.getElementById("divSeatsToSelect");
	divSeatsToSelect.appendChild(document.createTextNode("You should select 0 seats"));

	var divAddToCart = document.getElementById("divAddToCart");
	var btnAddToCart = document.createElement("button");
	btnAddToCart.innerHTML = "Add to Cart";
	//btnAddToCart.className = "movieButtonText";
	btnAddToCart.onclick = function(){
		var selectedSeats = checkForSelectedSeats();
		if(getNumOfTickets() == selectedSeats.length && getNumOfTickets() > 0 && selectedSeats.length > 0){
				createCart();
				var seats = JSON.parse(sessionStorage.getItem("bkseats"));
				console.log(seats);
				if(seats == null) {
					seats = {
						booked:[]
					}
				}
				for(var i = 0; i <selectedSeats.length; i++){
					seats.booked.push(selectedSeats[i]);
				}
				var strSeats = JSON.stringify(seats);
				sessionStorage.setItem("bkseats",strSeats);
				console.log(seats);
				
				for(var i = 0; i < 8; i++){
					var element = document.getElementById(ticketType[i]);
    				element.value = 0;
				}
				refreshPrice();
				refreshCheckOut();
				//var qtytype = document.getElementById("SA"
				//qtytype.
		
		} 
		else {
			document.getElementById("notickets").innerHTML = "You should select the same number of tickets and seats";
			document.getElementById("notickets").hidden = false;
		}
	};
	divAddToCart.appendChild(btnAddToCart);
		
	tableCreate();
	tableSeatCreate();
	if (sessionStorage.getItem("cart") != null && sessionStorage.getItem("cart") != "0"){
		//console.log("create CART");
		preCreateCart();
		
	}
	createCheckOutDiv();
}
function refreshCheckOut() {
	var voucherFeedBack = document.getElementById("voucherFeedBack");
	if(voucherFeedBack.innerHTML == "Accepted"){
		refreshGrandPrice(true);
	}
	else refreshGrandPrice(false);
}
function createCheckOutDiv() {
	//alert("Create");
	var divCheckOut = document.getElementById("divCheckOut");
	
	var totalPrice = document.createElement("p");
	totalPrice.id = "totalPrice";
	divCheckOut.appendChild(totalPrice);
	
	var voucher = document.createElement("p");
	voucher.id = "voucherPercentage"
	voucher.innerHTML = "Meal and Movie Deal Voucher: 00%"
	divCheckOut.appendChild(voucher);
	
	var grandPrice = document.createElement("p");
	grandPrice.id = "grandPrice";
	grandPrice.innerHTML = "Grand Total Price: 0"
	divCheckOut.appendChild(grandPrice);
	
	var voucherCodeText = document.createElement("a");
	voucherCodeText.innerHTML = "Voucher Code: "
	divCheckOut.appendChild(voucherCodeText);
	
	var voucherCode = document.createElement("INPUT");
    voucherCode.setAttribute("type", "text");
	voucherCode.id = "voucherCode";
	voucherCode.onkeyup=function(){
		testVoucher(this.value)
	};
    divCheckOut.appendChild(voucherCode);
	
	var applyVoucherButton = document.createElement("button");
	applyVoucherButton.innerHTML = "Apply";
	applyVoucherButton.onclick = function(){
			var feedBack = document.getElementById("voucherFeedBack");
			var txt = document.getElementById("voucherCode").value;
			 
      		
			if(checkVoucher(txt) == true){
				var voucher = document.getElementById("voucherPercentage");
				voucher.innerHTML = "Meal and Movie Deal Voucher: 20%";
				
				
				
				feedBack.innerHTML = "Accepted";
				
				var user = sessionStorage.getItem("user");
				var userObj = JSON.parse(user);
				userObj.voucher = txt;
				
				var userStr = JSON.stringify(userObj);
				sessionStorage.setItem("user",userStr);
				
				refreshCheckOut()
			}
			else {
				feedBack.innerHTML = "Not Accepted";
			}
	};
	divCheckOut.appendChild(applyVoucherButton);
	
	var voucherFeedBack = document.createElement("a");
	voucherFeedBack.id = "voucherFeedBack";
	divCheckOut.appendChild(voucherFeedBack);
	
	/*
	var br = document.createElement("div");
	br.innerHTML = "<br>";
	divCheckOut.appendChild(br);*/
	
	var subDiv = document.createElement("div");
	subDiv.className = "subDivCheckOut";
	divCheckOut.appendChild(subDiv);
	
	var emptyCartButton = document.createElement("button");
	emptyCartButton.innerHTML = "Empty Cart";
	emptyCartButton.onclick = function(){
			//console.log("Empty");
			deleteAllCart();
			unCheckAllSeats();
	};
	subDiv.appendChild(emptyCartButton);

	var checkOutButton = document.createElement("button");
	checkOutButton.innerHTML = "Check Out";
	checkOutButton.onclick = function(){
			var user = sessionStorage.getItem("user");
			var userObj = JSON.parse(user)
			if(userObj.cart !== null && userObj.total != 0){
				$("#inputPessoalData").show(500);
			}
	};
	subDiv.appendChild(checkOutButton);
	
	createDivPessoalData();
	refreshCheckOut();
	
}
function testVoucher(voucherInput){  
	var re = /(\d{5}[\-]\d{5}[\-][A-Z]{2})/g;   
	//console.log(re.exec(nameInput))
	var nameFail = document.getElementById("voucherFeedBack");
   	if (re.exec(voucherInput) && voucherInput.length == 14) nameFail.innerHTML = "" ;
    else nameFail.innerHTML = "12345-67890-AB"  ;  
 }  
function testName(nameInput){  
	var re = /([A-Z])\w+/;   
	//console.log(re.exec(nameInput))
	var nameFail = document.getElementById("nameFail");
   	if (re.exec(nameInput)) nameFail.innerHTML = " " ;
    else nameFail.innerHTML = "Only letters (Aaa..)"  ;  
 }  
 
 function testPhone(phoneInput){  
	var re = /([0-9]{9})\w+/;  
	var phoneFail = document.getElementById("phoneFail");
   	if (re.exec(phoneInput)) phoneFail.innerHTML = " " ;
    else phoneFail.innerHTML = "10 digits"  ;
 }  
 
 function testEmail(emailInput){  
	var re = /\S+@\S+\.\S+/;   
	var emailFail = document.getElementById("emailFail");
   	if (re.exec(emailInput))  emailFail.innerHTML = " " ;
    else emailFail.innerHTML = "example@mail.com"  ;
 } 

function createDivPessoalData(){
	var divInputPessoalData = document.getElementById("inputPessoalData");
	
	var name = document.createElement("a");
	name.innerHTML = "Name: ";
	divInputPessoalData.appendChild(name);
	
	var inputName = document.createElement("INPUT");
    inputName.setAttribute("type", "text");
	inputName.id = "name";
	inputName.onkeyup=function(){
		testName(this.value)
	};
    divInputPessoalData.appendChild(inputName);
	
	var nameFail = document.createElement("a");
	nameFail.id = "nameFail";
	nameFail.innerHTML = " ";
	divInputPessoalData.appendChild(nameFail);
	
	divInputPessoalData.appendChild(document.createElement("p"));
	
	var phone = document.createElement("a");
	phone.innerHTML = "Phone: ";
	divInputPessoalData.appendChild(phone);
	
	var inputPhone = document.createElement("INPUT");
    inputPhone.setAttribute("type", "text");
	inputPhone.id = "phone";
	inputPhone.onkeyup=function(){
		testPhone(this.value)
	};
    divInputPessoalData.appendChild(inputPhone);
	
	var phoneFail = document.createElement("a");
	phoneFail.id = "phoneFail";
	phoneFail.innerHTML = " ";
	divInputPessoalData.appendChild(phoneFail);
	
	divInputPessoalData.appendChild(document.createElement("p"));
	
	var email = document.createElement("a");
	email.innerHTML = "Email: ";
	divInputPessoalData.appendChild(email);
	
	var inputEmail = document.createElement("INPUT");
    inputEmail.setAttribute("type", "text");
	inputEmail.id = "email";
	inputEmail.onkeyup=function(){
		testEmail(this.value)
	};
    divInputPessoalData.appendChild(inputEmail);
	
	var emailFail = document.createElement("a");
	emailFail.id = "emailFail";
	emailFail.innerHTML = " ";
	divInputPessoalData.appendChild(emailFail);
	
	divInputPessoalData.appendChild(document.createElement("p"));
	
	var bookMovieButton = document.createElement("button");
	bookMovieButton.innerHTML = "Book Movie";
	bookMovieButton.onclick = function(){
		var name = document.getElementById("name").value;
		var phone = document.getElementById("phone").value;
		var email = document.getElementById("email").value;
		
		var canBook = 0;
		if (document.getElementById("nameFail").innerHTML != " "){
			canBook = 1;
		}
		if($('#name').val() == ''){
			canBook = 1;
			document.getElementById("nameFail").innerHTML = "Input can not be left blank";
   		}
		   
		if (document.getElementById("phoneFail").innerHTML != " "){
			canBook = 1;
		}
		if($('#phone').val() == ''){
			canBook = 1;
			document.getElementById("phoneFail").innerHTML = "Input can not be left blank";
   		}
		   
		if (document.getElementById("emailFail").innerHTML != " "){
			canBook = 1
		}
		if($('#email').val() == ''){
			canBook = 1;
			document.getElementById("emailFail").innerHTML = "Input can not be left blank";
   		}
		if (canBook == 0){
			console.log(name+phone+email);
			var user = sessionStorage.getItem("user");
			var userObj = JSON.parse(user);
			userObj.name = name;
			userObj.phone = phone;
			userObj.email = email;
				
			var userStr = JSON.stringify(userObj);
			sessionStorage.setItem("user",userStr);
			console.log(userObj);
		
		
			location.href="index.php?page=print";
		}
		//deleteAllCart();
	};
	 divInputPessoalData.appendChild(bookMovieButton);
	
	$("#inputPessoalData").hide();
	
}

function refreshGrandPrice(trueOrFalse){
	var totalPrice = document.getElementById("totalPrice");
	var grandPrice = document.getElementById("grandPrice");
	var totalPriceNum = 0;
	var preCart = sessionStorage.getItem("cart");
	var preCartObj = JSON.parse(preCart);
	if(preCartObj != null){
		for(var i=0; i < preCartObj.length; i++){
			totalPriceNum = totalPriceNum + preCartObj[i].sbt;
		}
		var grandPriceFixed
		if(trueOrFalse) {
			var grandPriceNum = totalPriceNum*0.8;
			grandPriceFixed = Number(grandPriceNum).toFixed(2);
		}
		else  grandPriceFixed = totalPriceNum*1;
		totalPrice.innerHTML = "Total Price: " + totalPriceNum.toString();
		grandPrice.innerHTML = "Grand Total Price: " +grandPriceFixed.toString();
		//console.log(preCartObj);
		
		var user = sessionStorage.getItem("user");
		var userObj = JSON.parse(user);
		
		userObj.total = totalPriceNum;
		userObj.grandPrice = grandPriceFixed;
		
		var userStr = JSON.stringify(userObj);
		sessionStorage.setItem("user",userStr);
		
		console.log(userObj);
	}
	else {
		totalPrice.innerHTML = "Total Price: 0";
		grandPrice.innerHTML = "Grand Total Price: 0";
	}
	
}

function createCart(){

	var divCart = document.getElementById("divCart");

	var subDivCart = document.createElement("div");
	//subDivCart.border = 1px;
	subDivCart.className = "subDivCart";
	divCart.appendChild(subDivCart);

	var seatsSelected = checkForSelectedSeats();
	for (var i = 0; i < seatsSelected.length; i++) {
		bookedSeats.push(seatsSelected[i]);
	}
	//var booked = {
	//	booked:bookedSeats
	//}
	//var bookedStr = JSON.stringify(booked);
	//sessionStorage.setItem("bkseats",bookedStr);
	//console.log(sessionStorage.getItem("bkseats"));

	var filmSelected = document.createElement("p");
	filmSelected.innerHTML = document.getElementById("film").options[document.getElementById("film").selectedIndex].text;
	subDivCart.appendChild(filmSelected);

	var daySelected = document.getElementById("day").options[document.getElementById("day").selectedIndex].text;
	var timeSelected = document.getElementById("timeOpt").innerHTML;
	var dayAndTimeSelected = document.createElement("p");
	dayAndTimeSelected.innerHTML = daySelected + ", " + timeSelected;
	subDivCart.appendChild(dayAndTimeSelected);

	//imeSelected = document.getElementById("timeOpt").innerHTML;
	//subDivCart.appendChild(document.createTextNode(timeSelected));

	var tbl  = document.createElement('table');
	tbl.className = "cartTable";

	var tr = tbl.insertRow();
	for(var k = 0; k < 5; k++){
		var td = tr.insertCell();
		td.appendChild(document.createTextNode(cartTableDescrition[k]));
		td.className = "ticketTable";
	}
	var indexSeat = 0;
	//var tr = tbl.insertRow();
	//tr.appendChild(document.createElement("hr"));
	var tickets = [];
	var sbtotal = 0;
	
	subDivCart.id = daySelected+timeSelected;
	
	for(var i = 0; i < 8; i++){
			var IdAndName = ticketType[i];
			var qtySelected = document.getElementById(IdAndName).options[document.getElementById(IdAndName).selectedIndex].text;

			if(qtySelected > 0){
				//subDivCart.appendChild(document.createTextNode(qtySelected));
				
				var IdAndNameIP = "individualPrice"+ticketType[i];
				var cost = document.getElementById(IdAndNameIP);

				var IdAndNameSBT = "sbt"+ticketType[i];
				var sbt = document.getElementById(IdAndNameSBT);

				var seats =[];
				for (var j = indexSeat; j < parseInt(qtySelected)+indexSeat; j++) {
					seats.push(seatsSelected[j]);
					//console.log(seats);
				}
				indexSeat = indexSeat + parseInt(qtySelected);
				//console.log(indexSeat);
				var tr = tbl.insertRow();

				var td1 = tr.insertCell();
				var td2 = tr.insertCell();
				var td3 = tr.insertCell();
				var td4 = tr.insertCell();
				var td5 = tr.insertCell();
				
				var ticketsbt = qtySelected*parseInt(cost.innerHTML);

				td1.appendChild(document.createTextNode(ticketTypeName[i]));
				td2.appendChild(document.createTextNode(cost.innerHTML));
				td3.appendChild(document.createTextNode(qtySelected));
				td4.appendChild(document.createTextNode(seats));
				td5.appendChild(document.createTextNode(ticketsbt.toString()));
				
				var ticket = {
					type:ticketTypeName[i],
					cost:cost.innerHTML,
					qty:qtySelected,
					seats:seats
				}
				sbtotal = sbtotal + parseInt(sbt.innerHTML);
				tickets.push(ticket);

				td1.className = "ticketTable";
				td2.className = "ticketTable";
				td3.className = "ticketTable";
				td4.className = "ticketTable";
				td5.className = "ticketTable";

			}
		}
		
	var tr = tbl.insertRow();
	for(var k = 0; k < 5; k++){
			var td = tr.insertCell();
			if (k==3){
				td.appendChild(document.createTextNode("Total:"));
				td.align = "right";
			}
			if (k==4){
				td.appendChild(document.createTextNode(sbtotal.toString()));
			}
			else {
				td.appendChild(document.createTextNode(""));
			}
			td.className = "ticketTable";
	}
	var cartItem = {
		title:filmSelected.innerHTML,
		day:daySelected,
		time:timeSelected,
		sbt:sbtotal,
		tickets:tickets
	}
	var cartStrr = sessionStorage.getItem("cart");
	if (cartStrr != null && cartStrr != "0"){
			var cart = JSON.parse(cartStrr);
	}
	else cart = [];
	cart.push(cartItem);
	var user = {
		//name:"",
		//email:"",
		//phone:"",
		//voucher:"",
		//total:0,
		//grandTotal:0,
		cart:cart
	}
	var cartStr = JSON.stringify(cart);
	sessionStorage.setItem("cart",cartStr);
	
	var userStr = JSON.stringify(user);
	sessionStorage.setItem("user",userStr);
	
	var divDeleteCart = document.createElement("div");
	divDeleteCart.className = "divDeleteCart";
	divDeleteCart.id = daySelected+timeSelected;
		
	var deleteButton = document.createElement("p");
	deleteButton.id = daySelected+timeSelected;
	deleteButton.innerHTML = "Delete Cart";
	deleteButton.onclick = function(){
			deleteCartItem(this.id);
	};
	subDivCart.appendChild(tbl);
	divDeleteCart.appendChild(deleteButton);
	subDivCart.appendChild(divDeleteCart);
	unCheckAllSeats();
	//var hr = document.createElement("div");
	//hr.className = "hrMovie";
	//subDivCart.appendChild(hr);
	var br = document.createElement("div");
	br.innerHTML = "<br>";
	subDivCart.appendChild(br);
	
	refreshCheckOut();
	
}

function preCreateCart(){
	unCheckAllSeats();
	var preCart = sessionStorage.getItem("cart");
	var preCartObj = JSON.parse(preCart);
	//console.log(preCartObj);
	var cartItemId = [];
	for(var i=0; i < preCartObj.length; i++){
		var divCart = document.getElementById("divCart");
	
		var subDivCart = document.createElement("div");
		
		subDivCart.className = "subDivCart";
		divCart.appendChild(subDivCart);
		
		
		var filmSelected = document.createElement("p");
		filmSelected.innerHTML = preCartObj[i].title;
		subDivCart.appendChild(filmSelected);
		
		var daySelected = preCartObj[i].day;
		var timeSelected = preCartObj[i].time;
		var dayAndTimeSelected = document.createElement("p");
		dayAndTimeSelected.innerHTML = daySelected + ", " + timeSelected;
		subDivCart.appendChild(dayAndTimeSelected);
		
		var tbl = document.createElement('table');
		tbl.className = "cartTable";
		//var cartTableDescrition = ["Ticket Type","Cost","Quantity","Seats","Subtotal"];
		var tr = tbl.insertRow();
		cartItemId.push(preCartObj[i].day + preCartObj[i].time);
		//console.log(cartItemId[i]);
		subDivCart.id = cartItemId[i];
		for(var k = 0; k < 5; k++){
			var td = tr.insertCell();
			td.appendChild(document.createTextNode(cartTableDescrition[k]));
			td.className = "ticketTable";
		}
		
		////console.log(preCartObj[i].tickets.length);
	for(var j = 0; j < preCartObj[i].tickets.length; j++){
				var tr = tbl.insertRow();

				var td1 = tr.insertCell();
				var td2 = tr.insertCell();
				var td3 = tr.insertCell();
				var td4 = tr.insertCell();
				var td5 = tr.insertCell();
				var qty = parseInt(preCartObj[i].tickets[j].qty)
				var cost = parseInt(preCartObj[i].tickets[j].cost);
				var sbtt = qty*cost;
				////console.log(cost);
				td1.appendChild(document.createTextNode(preCartObj[i].tickets[j].type));
				td2.appendChild(document.createTextNode(preCartObj[i].tickets[j].cost));
				td3.appendChild(document.createTextNode(preCartObj[i].tickets[j].qty));
				td4.appendChild(document.createTextNode(preCartObj[i].tickets[j].seats));
				td5.appendChild(document.createTextNode(sbtt.toString()));
					
				td1.className = "ticketTable";
				td2.className = "ticketTable";
				td3.className = "ticketTable";
				td4.className = "ticketTable";
				td5.className = "ticketTable";	
			}
			var tr = tbl.insertRow();
			for(var k = 0; k < 5; k++){
				var td = tr.insertCell();
				if (k==3){
					td.appendChild(document.createTextNode("Total:"));
					td.align = "right";
				}
				if (k==4){
					td.appendChild(document.createTextNode(preCartObj[i].sbt));
				}
				else {
					td.appendChild(document.createTextNode(""));
				}
				td.className = "ticketTable";
			}
			var divDeleteCart = document.createElement("div");
			divDeleteCart.className = "divDeleteCart";
			divDeleteCart.id = cartItemId[i];
			
			var deleteButton = document.createElement("p");
			deleteButton.id = cartItemId[i];
			deleteButton.innerHTML = "Delete Cart";
			deleteButton.onclick = function(){
				//deleteDivCart(this.id);
				deleteCartItem(this.id);
			};
			subDivCart.appendChild(tbl);
			divDeleteCart.appendChild(deleteButton);
			subDivCart.appendChild(divDeleteCart);
	}
}

//From http://perfectionkills.com/whats-wrong-with-extending-the-dom/
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

function deleteCartItem(dayTime) {
	document.getElementById(dayTime).remove();
	var seatsToReCheck = [];
	var preCart = sessionStorage.getItem("cart");
	var preCartObj = JSON.parse(preCart);
	if(preCartObj != null){
		for(var i=0; i < preCartObj.length; i++){
			if(preCartObj[i].day+preCartObj[i].time == dayTime){
				console.log(preCartObj[i]);
				for(var j = 0; j < preCartObj[i].tickets.length; j++){
					console.log(preCartObj[i].tickets[j].seats.length);
					for(var k = 0; k < preCartObj[i].tickets[j].seats.length; k++){
						console.log(preCartObj[i].tickets[j].seats[k]);
						seatsToReCheck.push(preCartObj[i].tickets[j].seats[k]);
					}
				}
				preCartObj.splice(i, 1);
			}	
		} 
		reCheckSeats(seatsToReCheck);
		
		//console.log("OOOOO " + seatsToReCheck[0]+seatsToReCheck[1]+seatsToReCheck[2]);
		
		var cartStr = JSON.stringify(preCartObj);
		sessionStorage.setItem("cart",cartStr);
		
		var user = sessionStorage.getItem("user");
		var userObj = JSON.parse(user);
		userObj.cart = preCartObj;
		
		var userStr = JSON.stringify(userObj);
		sessionStorage.setItem("user",userStr);
		
		refreshCheckOut();
	}
}
//TOKI
function reCheckSeats(seatsToReCheck){
	var seats = JSON.parse(sessionStorage.getItem("bkseats"));
	//var bookedSeats = seats.booked;
	
	console.log(seats);
	console.log("reCHECK");
	for(var i = 0; i<seatsToReCheck.length ; i++){
		console.log("RECHECK "+seatsToReCheck[i]);
		$("#id"+seatsToReCheck[i]).show();
		console.log("#id"+seatsToReCheck[i]);
		var index;
		for(var j = 0; j< seats.booked.length; j++){
			if(seatsToReCheck[i] == seats.booked[j]){
				index = j;
			}
		}
		seats.booked.splice(index, 1);
	}
	var strSeats = JSON.stringify(seats);
	sessionStorage.setItem("bkseats",strSeats);
	console.log(seats);
	unCheckAllSeats();
}

function deleteAllCart(){
		var seats = JSON.parse(sessionStorage.getItem("bkseats"));
		reCheckSeats(seats.booked);
		seats.booked = [];
		var strSeats = JSON.stringify(seats);
		sessionStorage.setItem("bkseats",strSeats);
	var preCart = sessionStorage.getItem("cart");
	var preCartObj = JSON.parse(preCart);
	if(preCartObj != null){
		for(var i=0; i < preCartObj.length; i++){
			document.getElementById(preCartObj[i].day+preCartObj[i].time).remove();
		}
		sessionStorage.setItem("cart","0");
		var user = sessionStorage.getItem("user");
		var userObj = JSON.parse(user);
		userObj.cart = null;
		
		var userStr = JSON.stringify(userObj);
		sessionStorage.setItem("user",userStr);
		refreshCheckOut();
	}
	
	
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

function isBooked(seatToCheck) {
	//console.log("IS BOKED");
	var bookedSeatss = sessionStorage.getItem("bkseats");
	var bkSeats = JSON.parse(bookedSeatss);
	//console.log(bkSeats.booked);
	if(bkSeats != null){
		//console.log(bkSeats.booked.length);
		for (var i=0; i<bkSeats.booked.length; i++){
			//console.log(bkSeats.booked[i] + " -- " + bkSeats.booked[i]);
			if(seatToCheck == bkSeats.booked[i])
			return true;
		}
	}
	return false;
}

function unCheckAllSeats(){
	console.log("UNCHECK");
	for(var i = 0; i < 8; i++){
			for(var j = 0; j < 14; j++){
				if (seats[i][j] != "o" && document.getElementById("id"+seats[i][j]) != null){
					if (document.getElementById("id"+seats[i][j]).checked /*&& isBooked(seats[i][j])*/){
						document.getElementById("id"+seats[i][j]).checked = false;
						$("#id"+seats[i][j]).hide();
						//seats[i][j] = "o";
						console.log("#id"+seats[i][j]);
					}
					//console.log("isbooked");
					if (isBooked(seats[i][j])){
						console.log("REMOVEE");
						$("#id"+seats[i][j]).hide();
						console.log("#id"+seats[i][j]);
					}
				}
			}
		}
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
									if(!isBooked(seats[i][j])){
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
    }
	var tbll  = document.createElement('table');
	tbll.className = "tableScreen";
	var tr = tbll.insertRow();
	var td = tr.insertCell();
	var screen = document.createElement("p");
	screen.innerHTML = "Screen";
	td.appendChild(screen);
    tickets.appendChild(tbl);
	tickets.appendChild(tbll);
}

function checkForSelectedSeats(){
	////console.log(document.getElementById("id"+seats[0][0]).checked);
	var selectedSeats = [];
	for(var i = 0; i < 8; i++){
			for(var j = 0; j < 14; j++){
				////console.log(i+j);
				if (seats[i][j] != "o" && document.getElementById("id"+seats[i][j]) != null){
					var seat = document.getElementById("id"+seats[i][j]);
					if (seat.checked){
					selectedSeats.push(seat.name);
					}
				}
			}
	}
	////console.log(selectedSeats);
	document.getElementById("notickets").hidden = true;
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
		sbt.innerHTML = subPriceFloat.toString();

		var individualPrice = calculatePrice(daySelected,timeSelected,type.id,1);
		ip.innerHTML = individualPrice;
		totalPrice = totalPrice + subPrice;

	}
	var divSeatsToSelect = document.getElementById("divSeatsToSelect");
	divSeatsToSelect.innerHTML = 	"You should select "+getNumOfTickets()+" seats";

	var price = document.getElementById("price");
	var totalPriceFloat = (totalPrice).toFixed(2);
	price.innerHTML = totalPriceFloat.toString();

	var inputPrice = document.createElement("input");
	inputPrice.hidden = true;
	inputPrice.name = "price";
	inputPrice.value = totalPriceFloat;
	document.getElementById("ticketForm").appendChild(inputPrice);

	var notickets = document.getElementById("notickets");
	notickets.hidden = true;
	refreshGrandPrice(false);

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
	if (title == data.AF.title){
		type = "AF";
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
	var film = document.getElementById("film");
	var strUser = film.options[film.selectedIndex].text;
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

function createBookInfo(){
	var divBookInfo = document.getElementById("divBookInfo");
	
	var user = sessionStorage.getItem("user");
	var userObj = JSON.parse(user);
	
	var br = document.createElement("p");
	br.innerHTML = "<br>";
	
	var name = document.createElement("p");
	name.innerHTML = "Name: "+userObj.name;
	divBookInfo.appendChild(name);
	
	var phone = document.createElement("p");
	phone.innerHTML = "Phone: "+userObj.phone;
	divBookInfo.appendChild(phone);
	
	var email = document.createElement("p");
	email.innerHTML = "Email: "+userObj.email;
	divBookInfo.appendChild(email);
	
	
	divBookInfo.appendChild(br);
	
	var cinema = document.createElement("p");
	cinema.innerHTML = "Silverado Cinema";
	divBookInfo.appendChild(cinema);
	
	divBookInfo.appendChild(br);
	
	var total = document.createElement("p");
	total.innerHTML = "Total Price: " +userObj.total;
	divBookInfo.appendChild(total);
	
	var voucher = document.createElement("p");
	if(userObj.voucher == null) voucher.innerHTML = "No Voucher";
	else voucher.innerHTML = "Discount 20% with voucher :"+userObj.voucher;
	
	divBookInfo.appendChild(voucher);
	
	var grandPrice = document.createElement("p");
	grandPrice.innerHTML = "Grand Total Price: "+userObj.grandPrice;
	divBookInfo.appendChild(grandPrice);
	
	
	
	for(var i=0; i < userObj.cart.length; i++){
				for(var j = 0; j < userObj.cart[i].tickets.length; j++){
					console.log(userObj.cart[i].tickets[j].seats.length);
					for(var k = 0; k < userObj.cart[i].tickets[j].seats.length; k++){
						console.log(userObj.cart[i].tickets[j].seats[k]);
						var divSeat = document.createElement("div");
						divSeat.className = "divSeat";
						var cinema = document.createElement("h1");
						cinema.innerHTML = "Silverado Cinema";
						divSeat.appendChild(cinema);
						
						var title = document.createElement("p");
						title.innerHTML = "Title: "+userObj.cart[i].title;
						divSeat.appendChild(title);
						
						var day = document.createElement("p");
						day.innerHTML = "Day: "+userObj.cart[i].day;
						divSeat.appendChild(day);	
						
						var time = document.createElement("p");
						time.innerHTML = "Time: "+userObj.cart[i].time;
						divSeat.appendChild(time);	
						
						//divSeat.appendChild(br);	
						
						var ttype = document.createElement("p");
						ttype.innerHTML = "Type: "+userObj.cart[i].tickets[j].type;
						divSeat.appendChild(ttype);
						
						var seat = document.createElement("p");
						seat.innerHTML = "Seat: "+userObj.cart[i].tickets[j].seats[k];
						divSeat.appendChild(seat);
						
						//divSeat.appendChild(br);
						
						divBookInfo.appendChild(divSeat);
					}
			}	
	} 
	var divOk = document.createElement("div");
	divOk.className = "divOk";
	var btnOk = document.createElement("button");
	btnOk.innerHTML = "Finish";
	btnOk.onclick = function(){
			sessionStorage.setItem("cart","0");
			var userObj = sessionStorage.getItem("user");
			var userObj = JSON.parse(user);
			userObj.cart = null;
			userObj.total = 0;
			userObj.grandPrice = 0;
			var userStr = JSON.stringify(userObj);
			sessionStorage.setItem("user",userStr);
			location.href="index.php?page=home";
			
	};
	divOk.appendChild(btnOk);
	divBookInfo.appendChild(divOk);
	
	console.log(userObj);
	
}