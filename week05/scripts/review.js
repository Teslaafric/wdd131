const counterElement = document.querySelector("#counter");

let count = localStorage.getItem("reviewCount");


if (count === null) {
  count = 0;
} else {
  count = Number(count);
}

  if (window.location.search !== "") {
    count++;
    localStorage.setItem("reviewCount", count);

    
    window.history.replaceState({}, document.title, "review.html");
  }

  counterElement.textContent = count;
