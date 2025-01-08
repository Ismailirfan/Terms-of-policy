<!DOCTYPE html>
<html>
<head>
<title>Qulfa Ice Cream</title>
<link rel="icon" href="Shakehands.png" type="image/x-icon">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<style>
body, html {
  height: 100%;
  font-family: "Inconsolata", sans-serif;
}

.carousel-item img {
      max-width: 100%;
      max-height: 100%;
      margin: auto; /* Centers the image horizontally */
    }

.bgimg {
  background-position: center;
  background-size: cover;
  background-image: url("/w3images/coffeehouse.jpg");
  min-height: 75%;
}

.menu {
  display: none;
}
</style>
</head>
<body>

  <!-- Links (sit on top) -->
  <!--<div class="container">-->
  <div class="w3-top">
    <div class="w3-row w3-padding w3-black">
      <div class="w3-col s3">
        <a href="#" class="w3-button w3-block w3-black">HOME</a>
      </div>
      <div class="w3-col s3">
        <a href="#about" class="w3-button w3-block w3-black">ABOUT</a>
      </div>
      <div class="w3-col s3 container">
          <a href="#setup" title="Header" class="w3-button w3-block w3-black mx-0 px-0" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="Popover text">Our Setup</a>
        </div>
        
        <div class="w3-col s3">
          <a href="#where" class="w3-button w3-block w3-black">WHERE</a>
        </div>
      </div>
    </div>
  <br><br><br><br>

<!-- Header with image -->
<header class="bgimg w3-display-container w3-grayscale-min py-0 my-0" id="home">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="Shakehands.png" class="d-block w-50" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img src="responsibility.png" class="d-block w-50" alt="Slide 2">
    </div>
    <div class="carousel-item">
      <img src="Handsahkes.png" class="d-block w-50" alt="Slide 3">
    </div>
  </div>
</div>
</header>
<!-- <header class="bgimg w3-display-container w3-grayscale-min" id="home">
  <div class="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
    <span class="w3-tag">Open from 10am to 1am</span>
  </div>
  <div class="w3-display-middle w3-center">
    <span class="w3-text-white" style="font-size:90px">the<br>Qulfa Ice Cream Shop</span>
  </div>
  <div class="w3-display-bottomright w3-center w3-padding-large">
    <span class="w3-text-white">15 Adr street, 5015</span>
  </div>
</header> -->

<!-- Add a background color and large text to the whole page -->
<div class="w3-sand w3-grayscale w3-large">

<!-- About Container -->
<div class="w3-container" id="about">
  <div class="w3-content" style="max-width:700px">
    <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">ABOUT US</span></h5>
    <p>Welcome to our Ice Cream Shop, where every scoop is a celebration of flavor and indulgence!
       Nestled in Qulfa, our charming storefront invites you to 
       immerse yourself in a world of delightful frozen treats. 
       Step inside and be greeted by the tantalizing aroma of freshly churned ice cream, 
      where each visit promises a sweet escape from the ordinary.</p>
    <div class="w3-panel w3-leftbar w3-light-grey">
      <p><i></i></p>
      <p></p>
    </div>
    <img src="/w3images/coffeeshop.jpg" style="width:100%;max-width:1000px" class="w3-margin-top">
    <p><strong>Opening hours:</strong> everyday from 10am to 1am.</p>
    <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
  </div>
</div>

<!-- Menu Container -->
<div class="w3-container" id="service">
  <div class="w3-content" style="max-width:700px">
 
    <h5 class="w3-center w3-padding-48" id="setup"><span class="w3-tag w3-wide">MY SERVICES</span></h5>
    <p></p>
    <div class="w3-row w3-center w3-card w3-padding">
      <a href="javascript:void(0)" onclick="openMenu(event, 'Manual');" id="myLink">
        <div class="w3-col s6 tablink">My Setup</div>
      </a>
      <a href="javascript:void(0)"  onclick="openMenu(event, 'Automatic');">
        <div class="w3-col s6 tablink">My Brother Setup</div>
      </a>
    </div>

    <div id="Manual" class="w3-container menu w3-padding-48 w3-card">
      <p></p>
    </div>

    <div id="Automatic" class="w3-container menu w3-padding-48 w3-card">
      <h5>My Brother Setup</h5>
          <a href="https://www.facebook.com/people/Qulfa-Ice-Cream-Shop/61558786622549/">Qulfa Ice Cream</a>
    </div>  
    <img src="/w3images/coffeehouse2.jpg" style="width:100%;max-width:1000px;margin-top:32px;">
  </div>
</div>

<!-- Contact/Area Container -->
<div class="w3-container" id="where" style="padding-bottom:32px;">
  <div class="w3-content" style="max-width:700px">
    <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">WHERE TO FIND ME</span></h5>
    <p>Find us at some address at some place.</p>
    <!-- <img src="/w3images/map.jpg" class="w3-image" style="width:100%"> -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1810.052479196138!2d67.0802951!3d24.8602646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fd585615171%3A0x61639493eca56a58!2sQulfa%20ice%20cream!5e0!3m2!1sen!2s!4v1715514345280!5m2!1sen!2s" 
    width="100%" height="500px" style="border:0;"
     allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p><span class="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
    <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message"></p>
      <p><button class="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
    </form>
  </div>
</div>

<!-- End page content -->
</div>

<!-- Footer -->
<footer class="w3-center w3-light-grey w3-padding-48 w3-large">
  <p>Powered by <a href="https://www.facebook.com/people/My-Prayer-My-Happy-Life/61559404443657/" title="W3.CSS" target="_blank" class="w3-hover-text-green">Humanity Good Luck</a></p>
</footer>

<script>
//PopHOver
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
          var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
          })

  // Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();


</script>

</body>
</html>
