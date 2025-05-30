document.getElementById("header").innerHTML = `
  <header>
    <h2>My Store</h2>
    <nav>
      <a href="index.html">Home</a> |
      <a href="product1.html">Product 1</a> |
      <a href="product2.html">Product 2</a> |
      <a href="search.html">Search</a>
    </nav>

    <!-- Full-width Navigation Banner -->
    <div></div>
      <img src="./public/Thumbnails/logo.png" alt="image unavailable"/>
      <nav>
        <ul class="nav-links">
          <li><a href="index.html" class="active">Home</a></li>
          <li><a href="product1.html">Product 1</a></li>
          <li><a href="product2.html">Product 2</a></li>
          <li><a href="search.html">Search</a></li>
        </ul>
        <div class="menu-icon" onclick="toggleDropdown()" style="color: white;">☰</div>
        <ul class="dropdown" id="dropdown-menu">
          <li><a href="index.html" class="active">Home</a></li>
          <li><a href="product1.html">Product 1</a></li>
          <li><a href="product2.html">Product 2</a></li>
          <li><a href="search.html">Search</a></li>
        </ul>
      </nav>
    </div>
  </header>
`;

document.getElementById("footer").innerHTML = `
  <footer>
    <p>&copy; 2025 My Store. All rights reserved.</p>
  </footer>
`;
