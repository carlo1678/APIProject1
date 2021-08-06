const getPokemonDataWithAsyncAwait = async () => {
  // this is how you would do it if you use async await
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
  // convert to json
  const formattedJson = await data.json();
  let pokeData = formattedJson.results;
  pokeData.forEach((element) => {
    let name = document.createElement("h1");
    let url = document.createElement("p");
    let body = document.querySelector("body");
    let pokeDiv = document.createElement("div");
    name.innerHTML = element.name;
    url.innerHTML = element.url;
    console.log(element.name);
    body.append(pokeDiv);
    pokeDiv.appendChild(name);
    pokeDiv.appendChild(url);
  });

  //   let name = document.createElement("h1");
  //   name.innerHTML = pokeData[0].name;
  //   let img = document.createElement("img");
  //   let root = document.querySelector(".root");
  //   img.src = pokeData[0].sprites.front_default;
  //   root.append(img, name);
};

getPokemonDataWithAsyncAwait();
