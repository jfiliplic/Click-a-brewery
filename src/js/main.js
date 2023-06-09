const btn = document.querySelector(".getBrewery");
const breweryHolder = document.querySelector(".brewery p");
const cardStyle = document.querySelector(".wrapper").style;

const btnText = [
  "Good one",
  "Give me another one",
  "Anything closer?",
  "This rings a bell",
  "Not my cuppa",
  "Not in a million years!",
  "I need a beer!",
  "Let's have a pint!",
];

const cardImages = [
  `url("beer2.246afe6f.jpg")`,
  `url("beer3.96ca2431.jpg")`,
  `url("beer4.0bf99960.jpg")`,
  `url("beer5.0ee91788.jpg")`,
  `url("beer6.070a6985.jpg")`,
  `url("beer7.74872d00.jpg")`,
];

async function fetchBrewery() {
  const response = await fetch(
    `https://api.openbrewerydb.org/v1/breweries/random?v=${Math.random()}`
  );
  const data = await response.json();
  return data;
}

async function handleClick() {
  const randomBrewery = await fetchBrewery();
  const { name, city, country, website_url } = randomBrewery[0];
  breweryHolder.innerHTML = `
  <h4>${name}</h4>
  <h4>${city}</h4>
  <h4>${country}</h4>
  <a href="${website_url} " target="_blank">${
    website_url || "no website available"
  }</a>
  `;
  const breweryLink = document.querySelector(".brewery p a");

  if (!website_url) {
    breweryLink.classList.add("noLink");
  }

  breweryLink.addEventListener("click", (event) => {
    if (!website_url) {
      event.preventDefault();
    }
  });

  btn.textContent = randomItemFromArray(btnText, btn.textContent);
  cardStyle["background-image"] = randomItemFromArray(
    cardImages,
    `${cardStyle["background-image"]}`
  );

  //   cardStyle[
  //     "background-image"
  //   ] = `url("https://picsum.photos/900/600?grayscale&random=${Math.floor(
  //     Math.random() * 50
  //   )}")`;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log(not);
    return randomItemFromArray(arr, not);
  }
  return item;
}

btn.addEventListener("click", handleClick);
