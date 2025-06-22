const roms = [
  {
    name: "Beach Spikers v1.001[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "120.5M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Beach%20Spikers%20v1.001%20%282001%29%28Sega%29%28JP%29%28en%29%5B%21%5D",
    link2: ""
  },
  {
    name: "Initial D Arcade Stage Ver. 2 v3.000[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "228.7M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Initial%20D%20Arcade%20Stage%20Ver.%202%20v3.000%20%282003%29%28Sega%29%28JP%29%5B%21%5D",
    link2: ""
  },
  {
    name: "Initial D Arcade Stage Ver. 3 v3.000[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "264.9M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Initial%20D%20Arcade%20Stage%20Ver.%203%20v3.000%20%282003%29%28Sega%29%28JP%29%5B%21%5D",
    link2: ""
  },
  {
    name: "Initial D Arcade Stage v3.000[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "179.6M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Initial%20D%20Arcade%20Stage%20v3.000%20%282002%29%28Sega%29%28JP%29%5B%21%5D",
    link2: ""
  },
  {
    name: "Initial D Ver. 2 v1.004[!][Export Version]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "227.2M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Initial%20D%20Ver.%202%20v1.004%20%282003%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BExport%20Version%5D",
    link2: ""
  },
  {
    name: "Initial D Version 3 for Cycraft v3.000[!][Export Version]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "259.3M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Initial%20D%20Version%203%20for%20Cycraft%20v3.000%20%282006%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BExport%20Version%5D",
    link2: ""
  },
  {
    name: "Initial D Version 3 v2.001[!][Export Version]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "258.8M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Initial%20D%20Version%203%20v2.001%20%282004%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BExport%20Version%5D",
    link2: ""
  },
  {
    name: "Initial D v1.000[!][Export Version]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "177.5M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Initial%20D%20v1.000%20%282002%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BExport%20Version%5D",
    link2: ""
  },
  {
    name: "Initial D v2.002[!][Export Version]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "177.3M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Initial%20D%20v2.002%20%282003%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BExport%20Version%5D",
    link2: ""
  },
  {
    name: "Virtua Fighter 4 Evolution Version B v3.002[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "198.7M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Virtua%20Fighter%204%20Evolution%20Version%20B%20v3.002%20%282002%29%28Sega%29%28JP%29%28en%29%5B%21%5D",
    link2: ""
  },
  {
    name: "Virtua Fighter 4 Evolution v2.001[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "198.9M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Virtua%20Fighter%204%20Evolution%20v2.001%20%282002%29%28Sega%29%28JP%29%28en%29%5B%21%5D",
    link2: ""
  },
  {
    name: "Virtua Fighter 4 Final Tuned Ver. A v5.000[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "431.0M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Virtua%20Fighter%204%20Final%20Tuned%20Ver.%20A%20v5.000%20%282004%29%28Sega%29%28JP%29%28en%29%5B%21%5D",
    link2: ""
  },
  {
    name: "Virtua Fighter 4 Final Tuned Ver. B v7.001[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "431.7M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Virtua%20Fighter%204%20Final%20Tuned%20Ver.%20B%20v7.001%20%282004%29%28Sega%29%28JP%29%28en%29%5B%21%5D",
    link2: ""
  },
  {
    name: "Virtua Fighter 4 Final Tuned v2.001[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "431.6M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Virtua%20Fighter%204%20Final%20Tuned%20v2.001%20%282004%29%28Sega%29%28JP%29%28en%29%5B%21%5D",
    link2: ""
  },
  {
    name: "Virtua Fighter 4 Version C v4.000[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "172.8M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Virtua%20Fighter%204%20Version%20C%20v4.000%20%282001%29%28Sega%29%28JP%29%28en%29%5B%21%5D",
    link2: ""
  },
  {
    name: "Virtua Fighter 4 v3.000[!][AKA Version B]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "189.6M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Virtua%20Fighter%204%20v3.000%20%282001%29%28Sega%29%28JP%29%28en%29%5B%21%5D%5BAKA%20Version%20B%5D",
    link2: ""
  },
  {
    name: "Virtua Striker 3 v1.003[!]",
    image: "https://i.postimg.cc/fL3xmkYH/naomi2logo.png",
    size: "155.2M",
    link1: "https://archive.org/download/noaen-tosec-iso-sega-naomi-2/Sega/NAOMI%202/Games/Virtua%20Striker%203%20v1.003%20%282001%29%28Sega%29%28JP%29%28en%29%5B%21%5D",
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