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
          <li><a href="/esg-mirror/Views/dashboard.php" class="active">Dashboard</a></li>
          <li><a href="/esg-mirror/Views/epadata.php">Emissions Data</a></li>
          <li><a href="/esg-mirror/Views/esgmodules.php">ESG Module</a></li>
          <li><a href="/esg-mirror/Views/documentation.php">Documentation</a></li>
          <li><a href="/esg-mirror/Views/runstatus.ejs">Run Status</a></li>
          <li><form action="/users/logout" method="POST">
            <input type="hidden" name="_method" value="DELETE">
            <button type="submit" style="align-items: left; padding: 10px 10px; font-weight: bold;">Log out</button>
           </form></li>
        </ul>
        <div class="menu-icon" onclick="toggleDropdown()" style="color: white;">☰</div>
        <ul class="dropdown" id="dropdown-menu">
          <li><a href="/esg-mirror/Views/dashboard.php">Dashboard</a></li>
          <li><a href="/esg-mirror/Views/epadata.php">Emissions Data</a></li>
          <li><a href="/esg-mirror/Views/esgmodules.php">ESG Module</a></li>
          <li><a href="/esg-mirror/Views/documentation.php">Documentation</a></li>
          <li><a href="/esg-mirror/Views/runstatus.ejs">Run Status</a></li>
          <li><form action="/users/logout" method="POST">
            <input type="hidden" name="_method" value="DELETE">
            <button type="submit" style="align-items: left; padding: 10px 10px; font-weight: bold;">Log out</button>
           </form></li>
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
