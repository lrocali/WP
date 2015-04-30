<?php<div>
<body>
    <div class="contactMain">
        <div class="subMain">
            <h1 class="subMainTitle">Contact</h1>
            <div class="hrSubMain"></div>
            <form name="contactForm"  method='post' action='http://titan.csit.rmit.edu.au/~e54061/wp/form-tester.php' onsubmit="return checkForm()">
		    <div class="inputObject">E-mail:</br><input type="email" name="email"><br> </div>
		    <div class="inputObject">Subject:</br><select name="subject">
		    <option value="genEnq">General Enquiry</option>
		    <option value="GroCorBoo">Group and Corporate Bookings</option>
		    <option value="SugCom">Suggestions & Complaints</option>
		    </select></div>
		    <div class="inputObject">Message:</br><textarea name="message" rows="5" cols="50" ></textarea></div>
		    <div class="inputObject"><input type="submit" value="submit"> </div>
		      </form>
        </div>
  </div>
</body>
</div>
