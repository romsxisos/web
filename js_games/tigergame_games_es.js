const roms = [
  {
    name: "Batman and Robin (1997) (71-709)",
    image: "https://i.postimg.cc/J4h3RsHy/Tiger-Game-Com-Logo.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1Gz1YJOA57SbxRZm_7MZ8dKFRhzfGs_wg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "CastleVania - Symphony of the Night (Prototype)",
    image: "https://i.postimg.cc/J4h3RsHy/Tiger-Game-Com-Logo.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/18xpOMgtmsq5Uw9Gsk1wj_EzcwNi3Bi4C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Centipede (1999) (71-755)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Centipede%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1aySPJS5o00KDlk6xYBtPnGxY4wu9cNx8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Duke Nukem 3D (1997) (71-712)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Duke%20Nukem%203D%20%28USA%29.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1pAUpU1iewlHnb6bsBREh1ubhV7MTIGyG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fighters MegaMix (1998) (71-739)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Fighters%20Megamix%20%28USA%29.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1GM787uwHpIPlRvIrE2-U-mqCSu_3xHxa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger (1999) (71-756)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Frogger%20%28USA%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1vPbwIfobHz7nR0CMaz7XbKIi54s7Jajx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game.com Internet (1997) (71-529)",
    image: "https://i.postimg.cc/J4h3RsHy/Tiger-Game-Com-Logo.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1o38Vc5ZSLh8AI4ziL5XvxTFoNYTgTwgX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Henry (1997) (71-728)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Henry%20%28USA%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/14ThQdRmDlumZn_ttA4SUKmxw0eHwie29/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indy 500 (1997) (71-525)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Indy%20500%20%28USA%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/19PKcBIDVI7H5gpo7lpjAhHas-Ib1eC7y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeopardy! (1998) (71-726)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Jeopardy%21%20%28USA%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1ofLnN9MP-6tl8mHoM6rEZIE9Lk_BU6yu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lights Out (1997) (71-735)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Lights%20Out%20%28USA%29.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1nXzYgbV3dLHZYk-7FmVqU_luPV4Rd36g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lost World, The - Jurassic Park (1997) (71-704)",
    image: "https://i.postimg.cc/J4h3RsHy/Tiger-Game-Com-Logo.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1ovzlX7J2DnISwafmxs08MBMV_9SxuZ8p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (1999) (71-752) [!]",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Monopoly%20%28USA%29.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1xJLNLQtF2Yk9FbU0QDwqm2TG49AGuqHR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat Trilogy (1997) (71-711)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Mortal%20Kombat%20Trilogy%20%28USA%29.png",
    size: "1792 KB",
    link1: "https://drive.google.com/file/d/16kmAZ6LcPgq2wIvROV3xCDtBcu4UW-bD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quiz Wiz - Cyber Trivia (1997) (71-524)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Quiz%20Wiz%20-%20Cyber%20Trivia%20%28USA%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1G1scTra67_cM0RURNv9hHikTG0CR4vvi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Resident Evil 2 (1998) (71-745)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Resident%20Evil%202%20%28USA%29.png",
    size: "1792 KB",
    link1: "https://drive.google.com/file/d/1JJWw9OIGFUN6op2Y2g6sepTgpVuNbEQT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scrabble (1999) (71-754)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Scrabble%20%28USA%29.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1giYiDHBhPcHppcAp_jfBDNmROJ8ZmrQF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Jam (1998) (71-734)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Sonic%20Jam%20%28USA%29.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/1-9PobsyaY-vt7SGVjxwKEabX0xYJbcSb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Jam (USA)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Sonic%20Jam%20%28USA%29.png",
    size: "2048 KB",
    link1: "https://drive.google.com/file/d/16tSwk7WEgKmgEsH0q1H2O7S5ldNjQU40/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiger Casino (1998) (71-731)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Tiger%20Casino%20%28USA%29.png",
    size: "1792 KB",
    link1: "https://drive.google.com/file/d/15DRABHEoGzuEr1QVfjrWvYYE9fuRG3Hc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiger Web Link (1997) (71-747)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Tiger%20Web%20Link%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ahBjE248IyDjdT5xx2RJZNJlUCWPVN0U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wheel of Fortune (1997) (71-523)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Wheel%20of%20Fortune%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1uUQKXlFMPF2W1D7hQUW2xK4xlg_x7toO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wheel of Fortune 2 (1998) (71-527) [!]",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Wheel%20of%20Fortune%202%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/13G_B19cS7rE-HjtvfBcrzST8hCtj8WZ3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Williams Arcade Classics (1997) (71-722)",
    image: "https://thumbnails.libretro.com/Tiger%20-%20Game.com/Named_Boxarts/Williams%20Arcade%20Classics%20%28USA%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1qx0WArVMHuT5FFBLzV6W5JQApMDiYFp4/view?usp=drivesdk",
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

