const fetchpokemon = () => {
    const pokename = document.getElementById("pokename")
    let pokeinput = pokename.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeimage("./nopoke.jpeg")
        }
        else {
            return res.json();

        }
        
    }).then((data) => {
        console.log(data);
        let pokeimg = data.sprites.front_default;
        console.log(pokeimg); 
        pokeimage(pokeimg);
    })


}

//fetchpokemon();

const pokeimage = (url) => {
    const pokeimg = document.getElementById("pokeimg");
    pokeimg.src = url;

}

//pokeimage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png")

