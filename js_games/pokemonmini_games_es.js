const roms = [
  {
    name: "Lunch Time (USA) (GameCube)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Lunch%20Time%20%28USA%29%20%28GameCube%29.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1nrJw_hTS6nI62o0t3j0tivbYQHw4PTkJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini (Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Party%20Mini%20%28Europe%29.png",
    size: "171 KB",
    link1: "https://drive.google.com/file/d/1peeHhgc2Ylx1gS54WVZvl9ygABlVW4cP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Party%20Mini%20%28USA%29.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1d2fmTT9m-Bnc2haWGtbv_5VoKe-nCKoV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Baseline Judge (Europe) (GameCube)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Party%20Mini%20-%20Baseline%20Judge%20%28Europe%29%20%28GameCube%29.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1dPN82c0iPmg22oWkRZUSDMCyXF5ioLSY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Baseline Judge (USA) (GameCube)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Party%20Mini%20-%20Baseline%20Judge%20%28USA%29%20%28GameCube%29.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/12Zz6qj4G_fYttU1eI-9gQ5o20XWVE-3f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Chansey's Dribble (Europe) (GameCube)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Party%20Mini%20-%20Chansey%27s%20Dribble%20%28Europe%29%20%28GameCube%29.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/19NL-TaJnux208QFF3rEH7dJB7GoETYLf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Pikachu's Rocket Start (Europe) (GameCube)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Party%20Mini%20-%20Pikachu%27s%20Rocket%20Start%20%28Europe%29%20%28GameCube%29.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/12SMpT_bSAIRRKwr8xU2LiucQJDsiRr2e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Ricochet Dribble (USA) (GameCube)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Party%20Mini%20-%20Ricochet%20Dribble%20%28USA%29%20%28GameCube%29.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/188qOZ-buz50jSKfwb5KjJprFe_jT3B7B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Rocket Start (USA) (GameCube)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Party%20Mini%20-%20Rocket%20Start%20%28USA%29%20%28GameCube%29.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1alfEQFXgqX9ix8yd3xFIglVbBKk9knEj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Party Mini - Slowking's Judge (Europe) (GameCube)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Party%20Mini%20-%20Slowking%27s%20Judge%20%28Europe%29%20%28GameCube%29.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1Oz-Ue_x-x-rcIpSnFOom5iuRAgGK2goD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Pinball Mini (USA) (GameCube Preview)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Pinball%20Mini%20%28USA%29%20%28GameCube%20Preview%29.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/1EvcQ-J89QNW6N6VlXN0EcqHeMvDpx3WW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Pinball Mini (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Pinball%20Mini%20%28USA%2C%20Europe%29.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/1fFkSVhjyhcVNT8oxZpAJqUQB3kqQx8s-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Puzzle Collection (USA) (GameCube Preview)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Puzzle%20Collection%20%28USA%29%20%28GameCube%20Preview%29.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/1s1IJiTSP1JJztgCWN7cAYs_0397Fbryw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Puzzle Collection (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Puzzle%20Collection%20%28USA%2C%20Europe%29.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/1mj4WdqtNTrGRkNPMjl1yPU5lGMc62oLY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Tetris (Europe) (En,Ja,Fr)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Tetris%20%28Europe%29%20%28En%2CJa%2CFr%29.png",
    size: "187 KB",
    link1: "https://drive.google.com/file/d/1mQ___bFFOD8bij3mNd2qAqShObL8MlQY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Zany Cards (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Pokemon%20Zany%20Cards%20%28USA%2C%20Europe%29.png",
    size: "200 KB",
    link1: "https://drive.google.com/file/d/1GF3kmyuq7C4XbIW2MTbeE74ecO9nbY3w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snorlax's Lunch Time (Europe) (GameCube)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Pokemon%20Mini/Named_Boxarts/Snorlax%27s%20Lunch%20Time%20%28Europe%29%20%28GameCube%29.png",
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
        <td><img ${window._boxartVisible ? 'src="' + rom.image + '"' : 'data-src="' + rom.image + '"'} alt="${rom.name}"></td>
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