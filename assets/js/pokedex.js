let contenido = document.querySelector('#contenido');
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            contenido.innerHTML = `
            <div class="contenido-main">
            <div class="caja-top">
            <p>#000</p>
            <p>-Desconocido</p>
            </div>
            <img src="assets/img/sad-pikachu.gif" width="150px" id="pokeImg">
            </div>
            <div class="caja-down">
            <p class="type"><label>Tipo: </label>Desconocido</p>
            <p class="stats"><label>Estadisticas: </label>Desconocido</p>
            <p class="mov"><label>Movimientos: </label>Desconocido</p>
            </div>
            `
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeNum = data.id;
            let pokeNombre = data.name;
            let pokeImg = data.sprites.front_default;
            let pokeTipo = data.types.map((type) => type.type.name).join(' ');
            let pokeEstats = data.stats.map((base_stat) => base_stat.base_stat).join(' ');
            let pokeMov = data.abilities.map((ability) => ability.ability.name).join(' ');
            contenido.innerHTML = `
            <div class="contenido-main">
            <div class="caja-top">
            <p>#${pokeNum} </p>
            <p>-${pokeNombre} </p>
            </div>
            <img src="${pokeImg}" alt="pokemon" width="150px" id="pokeImg">
            </div>
            <div class="caja-down">
            <p class="type"><label>Tipos: </label>${pokeTipo}</p>
            <p class="stats"><label>Estadisticas: </label>${pokeEstats}</p>
            <p class="mov"><label>Movimientos: </label>${pokeMov}</p>
            </div>
            `
        }
    });
}