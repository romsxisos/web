const roms = [
  {
    name: "swa",
    image: "https://i.postimg.cc/pd1wyt1x/model1logo.png",
    size: "14839 KB",
    link1: "https://drive.google.com/file/d/168iWSE6LUn3jz68lfijDHmy25D7TuDjP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "vf",
    image: "https://i.postimg.cc/pd1wyt1x/model1logo.png",
    size: "13425 KB",
    link1: "https://drive.google.com/file/d/1x9Fgmw3eW-dCjKPELMwoK2Ssv1w9cikO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "vformula",
    image: "https://i.postimg.cc/pd1wyt1x/model1logo.png",
    size: "560 KB",
    link1: "https://drive.google.com/file/d/1pKOsPPJ7_rQwz8h6W79W25sNHN6L8M8S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "vr",
    image: "https://i.postimg.cc/pd1wyt1x/model1logo.png",
    size: "9533 KB",
    link1: "https://drive.google.com/file/d/1RugLsFJob7X7z0pIkLOx5ZpRq1gE35jX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "wingwar",
    image: "https://i.postimg.cc/pd1wyt1x/model1logo.png",
    size: "14075 KB",
    link1: "https://drive.google.com/file/d/1LVu7zvqRK3fJMEOK2iVrhg-Sl7gX-iE7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "wingwara",
    image: "https://i.postimg.cc/pd1wyt1x/model1logo.png",
    size: "13010 KB",
    link1: "https://drive.google.com/file/d/1gzf0PeN7jFJAYryc7E-JNiUvpZgTaBXk/view?usp=drivesdk",
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