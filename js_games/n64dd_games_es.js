const roms = [
  {
    name: "Dezaemon DD (Japan) (Proto) [b]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Dezaemon%20DD%20%28Japan%29%20%28Proto%29.png",
    size: "62948 KB",
    link1: "https://drive.google.com/file/d/1vg7-zQyZ6XKO1TwTM3xq3MSQ8IdZuc24/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-Zero X - Expansion Kit (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/F-Zero%20X%20-%20Expansion%20Kit%20%28Japan%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/1PkW7LHTuEHsl_BAsgu3KdXYmahEw4aT_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kyojin no Doshin (Japan) (Demo) (Kiosk)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Kyojin%20no%20Doshin%20%28Japan%29%20%28Demo%29%20%28Kiosk%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/1uW_ltqzTyi1eF5NwUq6VJ18pYaQm8fJV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kyojin no Doshin - Kaihou Sensen Chibikko Chikko Daishuugou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Kyojin%20no%20Doshin%20-%20Kaihou%20Sensen%20Chibikko%20Chikko%20Daishuugou%20%28Japan%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/1hX7yJ5PObmBC5m0G-WTia99Jkhuq1XTD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kyojin no Doshin 1 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Kyojin%20no%20Doshin%201%20%28Japan%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/1xr1Nfegiwyc0sV1g1iyIg-ziYF2q1A0n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Artist - Communication Kit (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Mario%20Artist%20-%20Communication%20Kit%20%28Japan%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/1OIGBhmDUfPX8Ni7eGEpOrijbgSNdveFf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Artist - Paint Studio (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Mario%20Artist%20-%20Paint%20Studio%20%28Japan%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/16kW2oAkEu5d0oR-hasdqMUQWzs2oQZzm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Artist - Polygon Studio (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Mario%20Artist%20-%20Polygon%20Studio%20%28Japan%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/1T6FZ3ZF_UIM7A0jXR-_f6A6VMVGH2NX_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Artist - Talent Studio (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Mario%20Artist%20-%20Talent%20Studio%20%28Japan%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/18G0FkvJ9MWyiJ66Smv0Y1Z-RvZYxONBW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nihon Pro Golf Tour 64 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Nihon%20Pro%20Golf%20Tour%2064%20%28Japan%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/1T8l4QbvIL8KOYI7VdyNJ4e9JJcOe-LGZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Randnet Disk (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Randnet%20Disk%20%28Japan%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/1szchJxfwWDA8vuzGEJUhSMvKr2MLeXET/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimCity 64 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/SimCity%2064%20%28Japan%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/1Z5emGljke4T-OYYc9KBkxDjUvC6KPSNW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario 64 - Disk Version (Japan) (Proto)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064DD/Named_Boxarts/Super%20Mario%2064%20-%20Disk%20Version%20%28Japan%29%20%28Proto%29.png",
    size: "63410 KB",
    link1: "https://drive.google.com/file/d/1dsBSgndACNcW6Par-d-2uFNakvuAf6mK/view?usp=drivesdk",
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
