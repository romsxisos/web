const roms = [
  {
    name: "Lunch Time (USA) (GameCube)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1nrJw_hTS6nI62o0t3j0tivbYQHw4PTkJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini (Europe)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "171 KB",
    link1: "https://drive.google.com/file/d/1peeHhgc2Ylx1gS54WVZvl9ygABlVW4cP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini (USA)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1d2fmTT9m-Bnc2haWGtbv_5VoKe-nCKoV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Baseline Judge (Europe) (GameCube)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1dPN82c0iPmg22oWkRZUSDMCyXF5ioLSY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Baseline Judge (USA) (GameCube)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/12Zz6qj4G_fYttU1eI-9gQ5o20XWVE-3f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Chansey's Dribble (Europe) (GameCube)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/19NL-TaJnux208QFF3rEH7dJB7GoETYLf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Pikachu's Rocket Start (Europe) (GameCube)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/12SMpT_bSAIRRKwr8xU2LiucQJDsiRr2e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Ricochet Dribble (USA) (GameCube)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/188qOZ-buz50jSKfwb5KjJprFe_jT3B7B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Rocket Start (USA) (GameCube)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1alfEQFXgqX9ix8yd3xFIglVbBKk9knEj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Slowking's Judge (Europe) (GameCube)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1Oz-Ue_x-x-rcIpSnFOom5iuRAgGK2goD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Pinball Mini (USA) (GameCube Preview)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/1EvcQ-J89QNW6N6VlXN0EcqHeMvDpx3WW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Pinball Mini (USA, Europe)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/1fFkSVhjyhcVNT8oxZpAJqUQB3kqQx8s-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Puzzle Collection (USA) (GameCube Preview)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/1s1IJiTSP1JJztgCWN7cAYs_0397Fbryw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Puzzle Collection (USA, Europe)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/1mj4WdqtNTrGRkNPMjl1yPU5lGMc62oLY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Tetris (Europe) (En,Ja,Fr)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "187 KB",
    link1: "https://drive.google.com/file/d/1mQ___bFFOD8bij3mNd2qAqShObL8MlQY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Zany Cards (USA, Europe)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "200 KB",
    link1: "https://drive.google.com/file/d/1GF3kmyuq7C4XbIW2MTbeE74ecO9nbY3w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snorlax's Lunch Time (Europe) (GameCube)",
    image: "https://i.postimg.cc/jjZWBH8c/pokemonminilogo.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1hJXhTM_Uxk_RXp-Ix-HxhO1_SWzLXv2U/view?usp=drivesdk",
    link2: ""
  },
];

const romBody = document.getElementById("romBody");
  const searchInput = document.getElementById("searchInput");

  function renderTable(data) {
    romBody.innerHTML = "";
    data.forEach(rom => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><img src="${rom.image}" alt="${rom.name}"></td>
        <td>${rom.name}</td>
        <td>${rom.link1 ? `<a href="${rom.link1}" target="_blank">Opción #1</a>` : '-'}</td>
        <td>${rom.link2 ? `<a href="${rom.link2}" target="_blank">Opción #2</a>` : '-'}</td>
        <td>${rom.size}</td>
      `;
      romBody.appendChild(tr);
    });
  }

  function filterByLetter(letter) {
    if (letter === 'ALL') {
      renderTable(roms);
    } else {
      const filtered = roms.filter(rom => rom.name.trim().toUpperCase().startsWith(letter));
      renderTable(filtered);
    }
  }

  function filterByNumber() {
    const filtered = roms.filter(rom => /^\d/.test(rom.name.trim()));
    renderTable(filtered);
  }

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = roms.filter(rom => rom.name.toLowerCase().includes(searchTerm));
    renderTable(filtered);
  });

  renderTable(roms);