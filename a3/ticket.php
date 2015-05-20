<?php</div>
<body onload="getJSONTicket()">
  <div class="ticketMain">
    <div class="subMain">
            <h1 class="subMainTitle">Book Tickets</h1>
            <div class="hrSubMain"></div>
            <div class="divTicketInfo" id="divTicketMovieDetail">
              <div class="divTicketImg">
                <img id="imgTicketDetail">
              </div>
              <div class="ticketInfo">
                <h1 id="titleTicketDetail"></h1>
                <img id="ratingTicketDetail"></img>
                <p id="sessionsTicketDetail"></p>
                <p id="descriptionTicketDetail"></p>
              </div>
            </div>
            <div class="hrMovieDetail"></div>
            <div class ="form">
            <form name="ticketForm" id="ticketForm" method='post'> <!--action='http://titan.csit.rmit.edu.au/~e54061/wp/form-tester-2.php' onsubmit="return bookMovie()"-->
            <div class="formLabel">Film Name: <div id="movieOpt"onchange="refreshTicketInfo()"></div></div><br>
            <div class="formLabel">Session Day: <div id="dayOpt" onchange="refreshTime()"></div></div><br>
            <div class="formLabel">Session Time: <div id="timeOpt"></div></div><br>
            <br>
            <div id="tickets" onchange="refreshPrice()"></div>
            <div id="divSeatsToSelect" class="formLabel"></div>
            <div id="seats" onchange="checkForSelectedSeats()"></div>
            <br>
            <div>Total Price: <div id="price"></div></div><div id="notickets"></div>
            <br>
            <!--<div class="inputObject"><input type="submit" value="Book"> </div>-->

        </form>
        <div id="divAddToCart" class="divAddToCart"></div>
        <div id="divCart" class="divCart"></div>
        <div id="divCheckOut" class="divCheckOut"></div>
        <div id="inputPessoalData"></div>
      </div>
    </div>
  </div>
</body>
</div>
