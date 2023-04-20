const btn = document.querySelector(".getBrewery");
const breweryHolder = document.querySelector(".brewery p");
// const breweryCardBackground = document.querySelector(".wrapper").style;
// console.log(breweryCardBackground);
// const breweryCardBackground = breweryCard.style.background;
const breweryCard = document.querySelector(".wrapper");
const breweryCardStyle = breweryCard.getAttribute("style");
// const setImage = breweryCard.setAttribute(
//   "style",
//   `backgroundImage: url(../assets/images/bw-bg.jpg)`
// );
// console.log(breweryCardStyle);
// breweryCard.setAttribute(
//   "style",
//   `
// background: black;
//     `
// );

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
  const { name, city, country, website_url } = randomBrewery[0];
  console.log(name, city, country);
  breweryHolder.setAttribute("style", `white-space: pre-line;`);
  breweryHolder.textContent = `${name}\r\n${city}\r\n${country}\r\n${
    website_url || "no website available"
  }`;
  //   breweryHolder.textContent += `${city}\r\n`;
  //   breweryHolder.textContent += `${country}`;
  btn.textContent = randomItemFromArray(btnText, btn.textContent);

  // to zdaj dela
  //   breweryCard.style["background-image"] = `${randomImageFromPicsum(
  //     breweryCard.style["background-image"]
  //   )}`;
  console.log(breweryCard.style["background-image"]);
  breweryCard.style["background-image"] = "url(./beer-1.jpg)";
  console.log(breweryCard.style["background-image"]);

  // različni poskusi
  //   breweryCard.style["background-image"] = `url("$s{randomImageFromPicsum(
  //     breweryCard.style["background-image"]
  //   )}")`;
  //   console.log(breweryCard.style["background-image"]);
  //   breweryCard.style.backgroundImage = "url(`./beer-1.jpg`)";
  //   breweryCard.style[
  //     "background-image"
  //   ] = `url("https://picsum.photos/350/500?grayscale&random=${Math.floor(
  //     Math.random() * 100
  //   )}")`;
  //   breweryCard.style.color = "blue";
  //   breweryCard.setAttribute(
  //     "style",
  //     `
  //       background-image: url("https://picsum.photos/200/300");
  //       color: purple;
  //       `
  //   );
  //   breweryCardBackground = randomImageFromAssets(breweryCardBackground);
  //   breweryCard.setAttribute(
  //     "style",
  //     `
  //   background: black;
  //       `
  //   );
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    return randomItemFromArray(arr, not);
  }
  return item;
}

//to zdaj dela- ali sploh ni potrebno (že link poskrbi za pravi random?)?
// function randomImageFromPicsum(not) {
//   // const image = `../assets/images/random${Math.floor(Math.random()) * 2}.jpg`;
//   const image = `url("https://picsum.photos/200/300?grayscale&random=${Math.floor(
//     Math.random() * 5
//   )}")`;
//   if (image === not) {
//     console.log(not);
//     return randomImageFromPicsum(not);
//   }
//   console.log(image);
//   return image;
// }

btn.addEventListener("click", handleClick);
