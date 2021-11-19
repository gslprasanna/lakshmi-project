const createNav = () => {
    let nav = document.querySelector('.sri');


    nav.innerHTML = `
    <div class="na">
          <img src="images/o.png" class="brand-logo" alt="">
          <div class="nav-items">
              <div class="search">
                  <input type="text" class="search-box" placeholder="Search the books">
                  <button class="search-btn">Search</button>
              </div>
              <a href="login.htm"><img src ="images/user1.png" style="width: 30px;"></a>
              <a href="cart.html"><img src="images/cart1.png" style="width: 30px;"></a>
          </div>
      </div>
      
  
  <div class="hm">
  <ul class="linksri">
    <li class="hi"><a href="index.html" class="ee"><i class="fa fa-home" ></i>Home</a></li>
    <li class="hi"><a href="#" class="ee"><i class="fa fa-product-hunt" ></i>Products</a>
    <div class="sub1">
<ul>

    <li><a href="p.html">Physics</a></li>
    <li><a href="chemistry.html">Chemistry</a></li>
    <li><a href="maths.html">Maths</a></li>
    
    <li><a href="cse.html">CSE</a></li>
    <li><a href="ece.html">ECE</a></li>
    
    <li><a href="comics.html">Comics</a></li>
</ul>

    </div>
    </li>
    <li class="hi"><a href="cart.html" class="ee"><i class="fa fa-shopping-cart" ></i>Cart</a></li>
    <li class="hi"><a href="comments.html" class="ee"><i class="fa fa-comments" ></i>Reviews</a></li>
    <li class="hi"><a href="aboutus.html" class="ee"><i class="fa fa-user" ></i>About us</a></li>
    
    </div>
</ul>
    
    `;
}



createNav();

