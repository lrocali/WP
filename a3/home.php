<?php<div>
<body onload="getInfo()">
  <div class="indexMain">
    <div class="subMain">
        <h1 class="subMainTitle">Top Movies</h1>
        <div class="hrSubMain"></div>
        <!-- images, synopsis, genres of movies based on hoyts.com.au-->
    <div class = "movie">
            <img class="movieImage"
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
            <div class="hrMovie" onload="myFunction()"></div>
    </div>
    <div class = "movie">
        <img class="movieImage"
            src="images/home.jpg" alt="Home" />
            <div class = "movieDetail">
                <h1 id="title2"></h1>
                <p id="synopsis2"></p>
                <p id="genre2"></p>
                <p id="ageRating2"></p>
                <p id="time2"></p>
                <div class="movieButton">
                <a class ="movieButtonText" href="index.php?page=ticket" id="movie2" onclick="selectedMovie(id)">Book</a>
                <a class ="movieButtonText" id="movie2Detail" onclick="getMovie2Details();">Details</a>
                 </div>
            </div>
            <div class="hrMovie"></div>
    </div>
    <div class = "movie">
        <img class="movieImage"
            src="images/youAreMyBoss.jpg" alt="You're my boss" />
            <div class = "movieDetail">
                <h1 id="title3"></h1>
                <p id="synopsis3"></p>
                <p id="genre3"></p>
                <p id="ageRating3"></p>
                <p id="time3"></p>
                <div class="movieButton">
                <a class ="movieButtonText" href="index.php?page=ticket" id="movie3" onclick="selectedMovie(id)">Book</a>
                <a class ="movieButtonText" id="movie3Detail" onclick="getMovie3Details();">Details</a>
                 </div>
            </div>
            <div class="hrMovie"></div>
    </div>
    <div class = "movie">
        <img class="movieImage"
            src="images/theSoundsOfMusic.jpg" alt="The Sounds of Music" />
            <div class = "movieDetail">
                <h1 id="title4"></h1>
                <p id="synopsis4"></p>
                <p id="genre4"></p>
                <p id="ageRating4"></p>
                <p id="time4"></p>
                <div class="movieButton">
                <a class ="movieButtonText" href="index.php?page=ticket" id="movie4" onclick="selectedMovie(id)">Book</a>
                <a class ="movieButtonText" id="movie4Detail" onclick="getMovie4Details();">Details</a>
                 </div>
            </div>
            <div class="hrMovie"></div>
          </div>
        </div>
      </div>
    </body>
</div>
