const products = [
    { name: "Product 1", link: "product1.html" },
    { name: "Product 2", link: "product2.html" }
  ];
  
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    results.innerHTML = "";
  
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  
    if (filtered.length === 0) {
      results.innerHTML = "<li>No results found.</li>";
      return;
    }
  
    filtered.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${p.link}">${p.name}</a>`;
      results.appendChild(li);
    });
  });
  
