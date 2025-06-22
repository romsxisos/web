const roms = [
  {
    name: "jojo",
    image: "https://i.postimg.cc/xd2xbyBd/cps3system.png",
    size: "44930 KB",
    link1: "https://drive.google.com/file/d/1HHfOm1CTcfYMJf5Q8ZC3F19Jp9B97jB3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "jojoba",
    image: "https://i.postimg.cc/xd2xbyBd/cps3system.png",
    size: "52985 KB",
    link1: "https://drive.google.com/file/d/16FukG3ZqdZwC0Eyy51hl0hg07hlD9am2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "redearth",
    image: "https://i.postimg.cc/xd2xbyBd/cps3system.png",
    size: "37475 KB",
    link1: "https://drive.google.com/file/d/1t2RHGRoJB3uMxe65XAxGxNupn40yQKoI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "sfiii",
    image: "https://i.postimg.cc/xd2xbyBd/cps3system.png",
    size: "37958 KB",
    link1: "https://drive.google.com/file/d/14zb-zr4Ue0XjbLQN-vuAIPqrpy4HnI34/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "sfiii2",
    image: "https://i.postimg.cc/xd2xbyBd/cps3system.png",
    size: "42751 KB",
    link1: "https://drive.google.com/file/d/1mxBWBWgbO4AzQNgCBNnGp_DEuKd7Lbmp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "sfiii3",
    image: "https://i.postimg.cc/xd2xbyBd/cps3system.png",
    size: "68938 KB",
    link1: "https://drive.google.com/file/d/1D0HZDtV1Ms2SDxPqHfXTrkfqvbmTJ5He/view?usp=drivesdk",
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

