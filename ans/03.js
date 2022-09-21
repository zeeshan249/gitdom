
const dropdown = document.querySelector(".accordion-homepage");
const item = document.createElement("section");
item.setAttribute("class","parent");
const text = item.innerHTML = "<h3>My New Faq </h3>";
dropdown.append(item);

// can use item.className="parent"