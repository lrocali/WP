<!DOCTYPE html>
  <head>
    <title>Web Programming - Assignment 3</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="script.js" type="text/javascript"></script>
  </head>
  <header>
    <div>
      <div class="logoArea">
        <img class="logoImage" src="images/filmreel.png"  alt= "Silverado Cinema" />
        <a href="index.php?page=home" class="logoText"><strong>SILVERADO CINEMA</strong></a>
      </div>
      <ul class = "menuBar">
        <li class="menuButtons">
          <a class ="menuTexts" href="index.php?page=home"><strong>Home</strong></a>
        </li>
        <li class="menuButtons">
          <a class ="menuTexts" href="index.php?page=ticket"><strong>Ticket</strong></a>
        </li>
        <li class="menuButtons">
          <a class ="menuTexts" href="index.php?page=prices"><strong>Prices</strong></a>
        </li>
        <li class="menuButtons">
          <a class ="menuTexts" href="index.php?page=contact"><strong>Contact</strong></a>
        </li>
      </ul>
    </div>
  </header>
  <?php
    session_start();
    $validPages=['home','ticket','prices','contact','print'];
    if( in_array($_GET['page'],$validPages) ) {
      switch ($_GET['page']) {
        case 'home':
          include_once('home.php'); break;
        case 'ticket':
          include_once('ticket.php'); break;
        case 'prices':
          include_once('prices.php'); break;
        case 'contact':
          include_once('contact.php'); break;
        case 'print':
          include_once('print.php'); break;
      }
    }
  ?>
  <footer>
    <div class="hr"></div>
      <div class="footerArea">
        &copy;Lucas Rocali Assuncao Assis s3495204 | 2015 |
        <a href="http://validator.w3.org/check?uri=https://saturn.csit.rmit.edu.au/~s3495204/wp/a3/index.php?page=<?php echo $_GET['page']; ?>">
          <img class="footerValidator" src="images/HTML5_Logo_32.png" alt="HTML Validator" />
        </a>
      </div>
      <?php include_once("/home/eh1/e54061/public_html/wp/debug.php"); ?>
  </footer>
</html>
