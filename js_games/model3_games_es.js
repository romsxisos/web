const roms = [
  {
    name: "bass ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "41.7M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/bass.zip",
    link2: ""
  },
  {
    name: "dayto2pe ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "85.0M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/dayto2pe.zip",
    link2: ""
  },
  {
    name: "daytona2 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "86.8M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/daytona2.zip",
    link2: ""
  },
  {
    name: "dirtdvls ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "45.6M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/dirtdvls.zip",
    link2: ""
  },
  {
    name: "dirtdvlsa ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "46.1M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/dirtdvlsa.zip",
    link2: ""
  },
  {
    name: "eca ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "57.1M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/eca.zip",
    link2: ""
  },
  {
    name: "ecax ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "57.1M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/ecax.zip",
    link2: ""
  },
  {
    name: "fvipers2 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "95.9M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/fvipers2.zip",
    link2: ""
  },
  {
    name: "getbass ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "41.6M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/getbass.zip",
    link2: ""
  },
  {
    name: "harley ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "61.1M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/harley.zip",
    link2: ""
  },
  {
    name: "harleyb ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "56.9M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/harleyb.zip",
    link2: ""
  },
  {
    name: "lamachin ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "72.7M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/lamachin.zip",
    link2: ""
  },
  {
    name: "lemans24 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "33.2M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/lemans24.zip",
    link2: ""
  },
  {
    name: "lostwsga ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "76.6M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/lostwsga.zip",
    link2: ""
  },
  {
    name: "Name",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "Size",
    link1: "",
    link2: ""
  },
  {
    name: "oceanhun ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "78.0M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/oceanhun.zip",
    link2: ""
  },
  {
    name: "scud ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "60.3M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/scud.zip",
    link2: ""
  },
  {
    name: "scuda ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "60.6M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/scuda.zip",
    link2: ""
  },
  {
    name: "scudj ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "110.0M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/scudj.zip",
    link2: ""
  },
  {
    name: "scudp ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "65.4M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/scudp.zip",
    link2: ""
  },
  {
    name: "scudplus ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "68.2M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/scudplus.zip",
    link2: ""
  },
  {
    name: "scudplusa ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "68.2M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/scudplusa.zip",
    link2: ""
  },
  {
    name: "skichamp ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "59.2M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/skichamp.zip",
    link2: ""
  },
  {
    name: "spikeofe ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "105.1M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/spikeofe.zip",
    link2: ""
  },
  {
    name: "spikeout ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "129.2M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/spikeout.zip",
    link2: ""
  },
  {
    name: "srally2 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "72.8M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/srally2.zip",
    link2: ""
  },
  {
    name: "srally2_nvram ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "1.6K",
    link1: "https://archive.org/download/spikeout_201812/ROMS/srally2_nvram.zip",
    link2: ""
  },
  {
    name: "srally2x ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "51.6M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/srally2x.zip",
    link2: ""
  },
  {
    name: "swtrilgy ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "68.2M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/swtrilgy.zip",
    link2: ""
  },
  {
    name: "swtrilgya ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "69.2M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/swtrilgya.zip",
    link2: ""
  },
  {
    name: "vf3 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "66.5M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vf3.zip",
    link2: ""
  },
  {
    name: "vf3a ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "66.5M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vf3a.zip",
    link2: ""
  },
  {
    name: "vf3tb ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "66.6M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vf3tb.zip",
    link2: ""
  },
  {
    name: "von2 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "70.0M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/von2.zip",
    link2: ""
  },
  {
    name: "von254g ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "73.4M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/von254g.zip",
    link2: ""
  },
  {
    name: "vs2 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "48.6M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vs2.zip",
    link2: ""
  },
  {
    name: "vs215 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "47.2M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vs215.zip",
    link2: ""
  },
  {
    name: "vs298 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "56.0M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vs298.zip",
    link2: ""
  },
  {
    name: "vs29815 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "54.7M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vs29815.zip",
    link2: ""
  },
  {
    name: "vs299 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "57.7M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vs299.zip",
    link2: ""
  },
  {
    name: "vs299a ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "57.7M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vs299a.zip",
    link2: ""
  },
  {
    name: "vs299b ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "57.8M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vs299b.zip",
    link2: ""
  },
  {
    name: "vs2v991 ",
    image: "https://i.postimg.cc/021k587s/Sega-Model3.png",
    size: "57.8M",
    link1: "https://archive.org/download/spikeout_201812/ROMS/vs2v991.zip",
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