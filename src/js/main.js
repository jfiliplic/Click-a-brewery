const btn = document.querySelector(".getBrewery");
const breweryHolder = document.querySelector(".brewery p");

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

async function fetchBrewery() {
  const response = await fetch(
    `https://api.openbrewerydb.org/v1/breweries/random?v=${Math.random()}`
  );
  const data = await response.json();
  return data;
}

async function handleClick() {
  const randomBrewery = await fetchBrewery();
  const { name, city, country } = randomBrewery[0];
  console.log(name, city, country);
  breweryHolder.setAttribute("style", `white-space: pre-line;`);
  breweryHolder.textContent = `${name}\r\n${city}\r\n${country}`;
  //   breweryHolder.textContent += `${city}\r\n`;
  //   breweryHolder.textContent += `${country}`;
  btn.textContent = randomItemFromArray(btnText, btn.textContent);
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    return randomItemFromArray(arr, not);
  }
  return item;
}

btn.addEventListener("click", handleClick);
