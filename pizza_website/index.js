document.getElementById("navigationbar").innerHTML = `<nav class="font navbar navbar-expand-lg navbar-light navbg">
<img src="icon.jpg" height="40" width="40" style="border-radius: 50%; " alt="logo" srcset="">
<div class="navbar-brand; font">Food O'Clock</div>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mx-auto">
    <li class="nav-item " id="home-nav">
      <a class="nav-link" href="/pizza_website/home.html">Home</a>
    </li>
    <li class="nav-item " id="menu-nav">
      <a class="nav-link" href="/pizza_website/menu.html">Menu</a>
    </li>
    <li class="nav-item" id="blog-nav">
      <a class="nav-link" href="/pizza_website/blog.html">Blog</a>
    </li>
    <li class="nav-item" id="about-nav">
      <a class="nav-link" href="/pizza_website/about.html">About Us</a>
    </li>
    <li class="nav-item" id="contact-nav">
      <a class="nav-link" href="/pizza_website/contact.html">Contact Us</a>
    </li>
  </ul>
  <div class="form-inline my-2 my-lg-0 mr-5">
    <button class="btn order-button my-2 mr-4 my-sm-0" data-target="#mymodal" data-toggle="modal">
      Log in
    </button>
    <button class="btn order-button my-2 my-sm-0">
      <ion-icon class="mr-2" name="cart-outline"></ion-icon>
      Cart
    </button>
  </div>
</div>
</nav>`

document.getElementById("footer").innerHTML = `<div class="row">
<div class="col-12 col-md pl-5 ml-5">
  <h2 class=" font-weight-normal">Food O'clock</h2>
  <a href="https://twitter.com/MiteshMakvana31?t=DHH4UFh9yGdwqQsUFNv1iw&s=09"><i
      class='bx footericon bxl-twitter'></i></a>
  <a href="https://www.facebook.com/mitesh.sureshbhai.1?mibextid=ZbWKwL"><i
      class='bx footericon bxl-facebook-square'></i></a>
  <a href="https://instagram.com/_31_mitesh_?igshid=YmMyMTA2M2Y="><i
      class='bx footericon bxl-instagram-alt'></i></a>
  <small class="d-block my-3 orange">Copyright &#169; 2023 Food O'clock</small>
</div>
<div class="col-6 col-md">
  <h5>About Us</h5>
  <ul class="list-unstyled text-small">
    <li><a class="text-muted" href="/pizza_website/about.html">Our Story</a></li>
    <li><a class="text-muted" href="#locations">Our Locations</a></li>
    <li><a class="text-muted" href="#current deals">Current Deals</a></li>
    <li><a class="text-muted" href="/pizza_website/contact.html">Contact Us</a></li>
  </ul>
</div>
<div class="col-6 col-md">
  <h5>Our Menu</h5>
  <ul class="list-unstyled text-small">
    <li><a class="text-muted" href="/pizza_website/menu.html">Starter</a></li>
    <li><a class="text-muted" href="/pizza_website/menu.html">Main course</a></li>
    <li><a class="text-muted" href="/pizza_website/menu.html">Dessert</a></li>
    <li><a class="text-muted" href="/pizza_website/menu.html">Drinks</a></li>
  </ul>
</div>
<div class="col-6 col-md">
  <h5>Our Locations</h5>
  <ul class="list-unstyled text-small" >
    <li><a class="text-muted" href="#surat">Food O'clock Surat</a></li>
    <li><a class="text-muted" href="#vadodara">Food O'clock Vadodara</a></li>
    <li><a class="text-muted" href="#ahmedabad">Food O'clock Ahmedabad</a></li>
    <li><a class="text-muted" href="#bhavnagar">Food O'clock Bhavnagar</a></li>
  </ul>
</div>
</div>`