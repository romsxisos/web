const roms = [
  {
    "name": "Baseball Stars Color",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "373 KB",
    "link1": "https://drive.google.com/file/d/1NvmIFOCZHDb9RAQ0bgo60IKgxNd2tEMF/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Big Bang Pro Wrestling",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Big%20Bang%20Pro%20Wrestling%20%28Japan%29%20%28En%2CJa%29.png",
    "size": "1052 KB",
    "link1": "https://drive.google.com/file/d/1XbkXw_ERqSprKDOvLHy5LNLCWrtNCBw6/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Biomotor Unitron",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Biomotor%20Unitron%20%28USA%2C%20Europe%29.png",
    "size": "579 KB",
    "link1": "https://drive.google.com/file/d/1Amw1s9FzFOXqWY9KR01kTAXyC5z9GFer/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Bust-A-Move Pocket",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Bust-A-Move%20Pocket%20%28USA%29%20%28Beta%29.png",
    "size": "216 KB",
    "link1": "https://drive.google.com/file/d/1cEXIOa4KHIUCcxvgjgYbCuMgfTdmf5IP/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Cool Boarders Pocket",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Cool%20Boarders%20Pocket%20%28Japan%2C%20Europe%29%20%28En%2CJa%29.png",
    "size": "384 KB",
    "link1": "https://drive.google.com/file/d/1PVAzzUO-a9oJkztRK768ICCXZ_rX1qdt/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Cotton - Fantastic Night Dreams",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "328 KB",
    "link1": "https://drive.google.com/file/d/1NP_OHTH6Yg5sZ9cjVgHaXEXIwpHqHHii/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Crush Roller",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Crush%20Roller%20%28World%29%20%28En%2CJa%29.png",
    "size": "496 KB",
    "link1": "https://drive.google.com/file/d/192Au_zWzbGubf1Gnne0wPKUqVHxmn_JR/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Dark Arms - Beast Buster 1999",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Dark%20Arms%20-%20Beast%20Buster%201999%20%28World%29%20%28En%2CJa%29.png",
    "size": "631 KB",
    "link1": "https://drive.google.com/file/d/1TecPTlSR_PqXW_PlpjmNTbvv6gFTZfv6/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Delta Warp",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Delta%20Warp%20%28Japan%29%20%28Demo%29.png",
    "size": "149 KB",
    "link1": "https://drive.google.com/file/d/1Lub8vzsNOwsuGXU_qkPFC0AVqS9nz3uS/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Densetsu no Ogre Battle Gaiden - Zenobia no Ouji",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Densetsu%20no%20Ogre%20Battle%20Gaiden%20-%20Zenobia%20no%20Ouji%20%28Japan%29.png",
    "size": "716 KB",
    "link1": "https://drive.google.com/file/d/1oDNE82wuHl4EUCFYBdTQknq0bhRkjWjP/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Dynamite Slugger",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Dynamite%20Slugger%20%28Japan%2C%20Europe%29%20%28En%2CJa%29.png",
    "size": "443 KB",
    "link1": "https://drive.google.com/file/d/1p1r3J1--cNX9OhDYugZoI13SaHF14Aa1/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Evolution - Eternal Dungeons",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Evolution%20-%20Eternal%20Dungeons%20%28Europe%29.png",
    "size": "598 KB",
    "link1": "https://drive.google.com/file/d/1tizdEFypSeNcJcHYHuX1VxEVZb_gdNUI/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Faselei!",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Faselei%21%20%28Europe%29.png",
    "size": "984 KB",
    "link1": "https://drive.google.com/file/d/1OHWxlq_vWyBglW7EULpc9eQv7qmJt68D/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Fatal Fury - First Contact",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "829 KB",
    "link1": "https://drive.google.com/file/d/1Fnl99o9sNS5rP8nyeoOf-S30_xhfcxGS/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "King of Fighters R-1, The",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "838 KB",
    "link1": "https://drive.google.com/file/d/1_TrX_N0BWSqIBBxtAe8SyGgPe0ekcL-k/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "King of Fighters R-2, The",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "908 KB",
    "link1": "https://drive.google.com/file/d/14iRG8fs_gFexsIAZqvVphk5gtmNRD6d8/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Last Blade, The - Beyond the Destiny",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Last%20Blade%2C%20The%20-%20Beyond%20the%20Destiny%20%28USA%2C%20Europe%29.png",
    "size": "1018 KB",
    "link1": "https://drive.google.com/file/d/1OhXwAuXy6WN-7psSOX5h3gIBW24WaHUq/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Magical Drop Pocket",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Magical%20Drop%20Pocket%20%28USA%2C%20Europe%29.png",
    "size": "270 KB",
    "link1": "https://drive.google.com/file/d/11nOo-X4yj4KxMJxEhZnV2QB9-ZZ00UBy/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Metal Slug - 1st Mission",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Metal%20Slug%20-%201st%20Mission%20%28World%29%20%28En%2CJa%29.png",
    "size": "622 KB",
    "link1": "https://drive.google.com/file/d/17vJFp2gU-f4XZ8qZp0syzE7_c7tn1ajs/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Metal Slug - 2nd Mission",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Metal%20Slug%20-%202nd%20Mission%20%28World%29%20%28En%2CJa%29%20%28Demo%29.png",
    "size": "1351 KB",
    "link1": "https://drive.google.com/file/d/1e-KLa81Bc5awc4P0oGTP1CkokPLLoYEm/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Neo Turf Masters",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Neo%20Turf%20Masters%20%28World%29%20%28En%2CJa%29%20%28Demo%29.png",
    "size": "630 KB",
    "link1": "https://drive.google.com/file/d/1f3RWyMY0qb8yyUDvTv_IFmky2G6dJxvi/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Nige-Ron-Pa",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "579 KB",
    "link1": "https://drive.google.com/file/d/1Z6u1l0LNVO3rveDtmkzzPnxN8eoYgoHx/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Pac-Man",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Pac-Man%20%28World%29%20%28En%2CJa%29.png",
    "size": "35 KB",
    "link1": "https://drive.google.com/file/d/1UKLXm5Fy6O3_9Vkz9tE_1C0mcsbFP-Xv/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Picture Puzzle",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Picture%20Puzzle%20%28USA%2C%20Europe%29.png",
    "size": "451 KB",
    "link1": "https://drive.google.com/file/d/1kgPTn0wLuaI00CAv8J8KAGfNnpbOBU1-/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Pocket Tennis Color",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "206 KB",
    "link1": "https://drive.google.com/file/d/1pgAQsVwIVayqetCKhrkBtPV_EhG_fFs7/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Puyo Pop",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Puyo%20Pop%20%28World%29%20%28En%2CJa%29%20%28Beta%29.png",
    "size": "578 KB",
    "link1": "https://drive.google.com/file/d/1Unp6tewbeS-C1bVftGzmygixbY3eGDri/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Puzzle Link",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Puzzle%20Link%20%28Europe%29.png",
    "size": "150 KB",
    "link1": "https://drive.google.com/file/d/148bVUE7YqLWwc_9HGVs1MDO47dUCcUd-/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Puzzle Link 2",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Puzzle%20Link%202%20%28USA%2C%20Europe%29.png",
    "size": "336 KB",
    "link1": "https://drive.google.com/file/d/1ZYLVIvkEzouwAouyHWRJLOGlZ8ncNPYI/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Rockman Battle & Fighters",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "964 KB",
    "link1": "https://drive.google.com/file/d/1DbbC95QB5fgivcDa3Gjh_AdsYOsIUYml/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "SNK Gals' Fighters",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/SNK%20Gals%27%20Fighters%20%28USA%2C%20Europe%29.png",
    "size": "902 KB",
    "link1": "https://drive.google.com/file/d/1gaTtgeOYaIVUKg5DwBIcgtzHlonjEdsc/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "SNK vs. Capcom - Card Fighters' Clash - Capcom Version",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/SNK%20vs.%20Capcom%20-%20Card%20Fighters%27%20Clash%20-%20Capcom%20Version%20%28USA%2C%20Europe%29.png",
    "size": "897 KB",
    "link1": "https://drive.google.com/file/d/1Bcsufh9Ei8vV8FugUFaQuqXR-pTdFAZ8/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "SNK vs. Capcom - Card Fighters' Clash - SNK Version",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/SNK%20vs.%20Capcom%20-%20Card%20Fighters%27%20Clash%20-%20SNK%20Version%20%28USA%2C%20Europe%29.png",
    "size": "897 KB",
    "link1": "https://drive.google.com/file/d/10XzRGUvUZxi_6QuUGUTdteh5slyyMXSe/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "SNK vs. Capcom - Card Fighters' Clash 2 - Expand Edition",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "998 KB",
    "link1": "https://drive.google.com/file/d/1g57vkQ9P_lWYJFPCLvOqMrtV6Xi6B0JZ/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "SNK vs. Capcom - The Match of the Millennium",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/SNK%20vs.%20Capcom%20-%20The%20Match%20of%20the%20Millennium%20%28World%29%20%28En%2CJa%29.png",
    "size": "1686 KB",
    "link1": "https://drive.google.com/file/d/13B3J-YtlPjJJ3_m5yd5zy28Oj4KhgLiE/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Samurai Shodown!",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "835 KB",
    "link1": "https://drive.google.com/file/d/15VsxbOsbs_GtdRG4AsZ_mQqMM8ZU1pUj/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Samurai Shodown! 2",
    "image": "https://i.postimg.cc/wT1xRL1M/Neo-Geo-Pocket-Color-logo.png",
    "size": "940 KB",
    "link1": "https://drive.google.com/file/d/1dSucqKHV8vc0asNUXoGWPuN319bZuKMO/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Shanghai Mini",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Shanghai%20Mini%20%28World%29%20%28En%2CJa%29%20%28Beta%201%29.png",
    "size": "265 KB",
    "link1": "https://drive.google.com/file/d/1UvHR13dDlreFixYKIPIkWF0oatZY1n9V/view?usp=drivesdk",
    "link2": ""
  },
  {
    "name": "Sonic the Hedgehog Pocket Adventure",
    "image": "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo%20Pocket%20Color/Named_Boxarts/Sonic%20The%20Hedgehog%20-%20Pocket%20Adventure%20%28World%29%20%28Beta%29%20%281999-10-22%29.png",
    "size": "680 KB",
    "link1": "https://drive.google.com/file/d/1b-wMlK7BpiDlN0usSFrCFYZY8ZSrihW6/view?usp=drivesdk",
    "link2": ""
  }
]



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