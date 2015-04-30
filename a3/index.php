
<!DOCTYPE html>
<head>
    <title>Web Programming - Assignment 1</title>
    <link rel="stylesheet" href="css/styles.css">
    <script>
</script>
</head>


  <header>
      <div>
          <div class="logoArea">
              <img class="logoImage" src="images/filmreel.png"  alt= "Silverado Cinema" />
              <a href="index.html" class="logoText"><strong>SILVERADO CINEMA</strong></a>
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
    # You can even create content for a default "page not found" page
    /*$page-title= 'not found';
    $page-main = 'file-not-found-main.php';*/
    # Look for valid pages
    $validPages=['home','ticket','prices','contact'];
    if( in_array($_GET['page'],$validPages) ) {
      //$page-title= $_GET['page'].'-title.php';
      //$page-main = $_GET['page'].'-main.php';
      # Some pages may need extra tools
      switch ($_GET['page']) {
        case 'home':
          include_once('home.php'); break;
        case 'ticket':
          include_once('ticket.php'); break;
        case 'prices':
          include_once('prices.php'); break;
        case 'contact':
          include_once('contact.php'); break;
      }
    }
  ?>
    <footer>
        <div class="hr"></div>
        <div class="footerArea">
                &copy;Lucas Rocali Assuncao Assis s3495204 | 2015 |
                <a href="http://validator.w3.org/check?uri=https://titan.csit.rmit.edu.au/~s3495204/wp/a1/index.html"><img class="footerValidator"
                src="images/HTML5_Logo_32.png" alt="HTML Validator" /></a>
        </div>
        <?php// include_once("/home/eh1/e54061/public_html/wp/debug.php"); ?>
    </footer>
    <script src="script.js"></script>

</html>
