async function fetchNews() {
  //fetch data from api
  const response = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/posts?per_page=10"
  );
  //convert response to json
  const data = await response.json();

  const grid = document.getElementById("news");

  data.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("news-cards");

    const title = document.createElement("h2");
    title.classList.add("news-title");
    title.textContent = data.title.rendered;

    const date = document.createElement("p");
    date.classList.add("news-date");
    date.textContent = new Date(data.date).toLocaleDateString();

    //append title and date
    card.appendChild(title);
    card.appendChild(date);

    //append cards on the grid
    grid.append(card);
  });
}

//call the fetch function
fetchNews();
