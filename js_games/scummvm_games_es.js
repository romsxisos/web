const roms = [
    {
      name: "007 James Bond - The Stealth Affair ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "2.1M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/007%20James%20Bond%20-%20The%20Stealth%20Affair.zip",
      link2: ""
    },
    {
      name: "Amazon - Guardians of Eden ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "8.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Amazon%20-%20Guardians%20of%20Eden.zip",
      link2: ""
    },
    {
      name: "Beavis and Butt-head in Virtual Stupidity ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "229.2M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Beavis%20and%20Butt-head%20in%20Virtual%20Stupidity.zip",
      link2: ""
    },
    {
      name: "Beneath a Steel Sky ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "116.2M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Beneath%20a%20Steel%20Sky.zip",
      link2: ""
    },
    {
      name: "Blade Runner ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "1.1G",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Blade%20Runner.zip",
      link2: ""
    },
    {
      name: "Broken Sword 1 La leyenda de los templarios ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "361.4M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Broken%20Sword%201%20La%20leyenda%20de%20los%20templarios.zip",
      link2: ""
    },
    {
      name: "Broken Sword 2 Las fuerzas del mal ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "405.1M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Broken%20Sword%202%20Las%20fuerzas%20del%20mal.zip",
      link2: ""
    },
    {
      name: "Bud Tucker in Double Trouble ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "63.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Bud%20Tucker%20in%20Double%20Trouble.zip",
      link2: ""
    },
    {
      name: "Code-Name, ICEMAN ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "2.8M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Code-Name%2C%20ICEMAN.zip",
      link2: ""
    },
    {
      name: "Discworld 1 ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "343.2M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Discworld%201.zip",
      link2: ""
    },
    {
      name: "Discworld 2 ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "681.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Discworld%202.zip",
      link2: ""
    },
    {
      name: "DreamWeb ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "161.8M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/DreamWeb.zip",
      link2: ""
    },
    {
      name: "EcoQuest - The Search for Cetus ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "163.5M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/EcoQuest%20-%20The%20Search%20for%20Cetus.zip",
      link2: ""
    },
    {
      name: "EcoQuest 2 - El Secreto Perdido de la Selva Amazonica ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "7.5M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/EcoQuest%202%20-%20El%20Secreto%20Perdido%20de%20la%20Selva%20Amazonica.zip",
      link2: ""
    },
    {
      name: "Fascination ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "229.8M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Fascination.zip",
      link2: ""
    },
    {
      name: "Flight of the Amazon Queen ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "35.1M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Flight%20of%20the%20Amazon%20Queen.zip",
      link2: ""
    },
    {
      name: "Freddy Pharkas - Farmaceutico de la Frontera ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "481.7M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Freddy%20Pharkas%20-%20Farmaceutico%20de%20la%20Frontera.zip",
      link2: ""
    },
    {
      name: "Full Pipe ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "303.8M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Full%20Pipe.zip",
      link2: ""
    },
    {
      name: "Full Throttle ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "259.9M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Full%20Throttle.zip",
      link2: ""
    },
    {
      name: "Hopkins FBI ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "329.7M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Hopkins%20FBI.zip",
      link2: ""
    },
    {
      name: "I Have No Mouth and I Must Scream ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "293.4M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/I%20Have%20No%20Mouth%20and%20I%20Must%20Scream.zip",
      link2: ""
    },
    {
      name: "Indiana Jones y el Destino de la Atlantida ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "60.3M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Indiana%20Jones%20y%20el%20Destino%20de%20la%20Atlantida.zip",
      link2: ""
    },
    {
      name: "Indiana Jones y la Ultima Cruzada ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "3.1M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Indiana%20Jones%20y%20la%20Ultima%20Cruzada.zip",
      link2: ""
    },
    {
      name: "Inherit the Earth - Quest for the Orb ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "376.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Inherit%20the%20Earth%20-%20Quest%20for%20the%20Orb.zip",
      link2: ""
    },
    {
      name: "Kathy Rain ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "347.4M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Kathy%20Rain.zip",
      link2: ""
    },
    {
      name: "Laura Bow 2, The Dagger of Amon Ra ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "216.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Laura%20Bow%202%2C%20The%20Dagger%20of%20Amon%20Ra.zip",
      link2: ""
    },
    {
      name: "Laura Bow, The Colonel's Bequest ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "3.7M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Laura%20Bow%2C%20The%20Colonel%27s%20Bequest.zip",
      link2: ""
    },
    {
      name: "Leisure Suit Larry 3 - Passionate Patti in Pursuit of the Pulsating Pectorals ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "4.4M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Leisure%20Suit%20Larry%203%20-%20Passionate%20Patti%20in%20Pursuit%20of%20the%20Pulsating%20Pectorals.zip",
      link2: ""
    },
    {
      name: "Leisure Suit Larry 5 - Passionate Patti Does a Little Undercover Work ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "8.5M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Leisure%20Suit%20Larry%205%20-%20Passionate%20Patti%20Does%20a%20Little%20Undercover%20Work.zip",
      link2: ""
    },
    {
      name: "Leisure Suit Larry 6 - Shape up or Slip Out ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "424.4M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Leisure%20Suit%20Larry%206%20-%20Shape%20up%20or%20Slip%20Out.zip",
      link2: ""
    },
    {
      name: "Leisure Suit Larry 7 - Love for Sail ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "483.2M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Leisure%20Suit%20Larry%207%20-%20Love%20for%20Sail.zip",
      link2: ""
    },
    {
      name: "Leisure Suit Larry Goes Looking for Love (In Several Wrong Places) ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "2.2M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Leisure%20Suit%20Larry%20Goes%20Looking%20for%20Love%20%28In%20Several%20Wrong%20Places%29.zip",
      link2: ""
    },
    {
      name: "Leisure Suit Larry in the Land of the Lounge Lizards ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "3.8M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Leisure%20Suit%20Larry%20in%20the%20Land%20of%20the%20Lounge%20Lizards.zip",
      link2: ""
    },
    {
      name: "Lighthouse - Las Fuerzas de las Tinieblas ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "794.7M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Lighthouse%20-%20Las%20Fuerzas%20de%20las%20Tinieblas.zip",
      link2: ""
    },
    {
      name: "Loom ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "39.2M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Loom.zip",
      link2: ""
    },
    {
      name: "Los Archivos secretos de Sherlock Holmes - El caso de la Rosa tatuada ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "404.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Los%20Archivos%20secretos%20de%20Sherlock%20Holmes%20-%20El%20caso%20de%20la%20Rosa%20tatuada.zip",
      link2: ""
    },
    {
      name: "Los Archivos Secretos de Sherlock Holmes - El Caso del Escalpelo Mellado ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "7.1M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Los%20Archivos%20Secretos%20de%20Sherlock%20Holmes%20-%20El%20Caso%20del%20Escalpelo%20Mellado.zip",
      link2: ""
    },
    {
      name: "Lost in Time ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "34.6M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Lost%20in%20Time.zip",
      link2: ""
    },
    {
      name: "Maniac Mansion ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "328.3K",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Maniac%20Mansion.zip",
      link2: ""
    },
    {
      name: "Maniac Mansion 2 El Dia del Tentaculo ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "7.7M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Maniac%20Mansion%202%20El%20Dia%20del%20Tentaculo.zip",
      link2: ""
    },
    {
      name: "Monkey Island 2 LeChuck's Revenge ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "115.4M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Monkey%20Island%202%20LeChuck%27s%20Revenge.zip",
      link2: ""
    },
    {
      name: "Pantera Rosa Abracadabra Rosa ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "247.7M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Pantera%20Rosa%20Abracadabra%20Rosa.zip",
      link2: ""
    },
    {
      name: "Pantera Rosa Passport to Peril ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "298.8M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Pantera%20Rosa%20Passport%20to%20Peril.zip",
      link2: ""
    },
    {
      name: "Rex Nebular and the Cosmic Gender Bender ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "22.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Rex%20Nebular%20and%20the%20Cosmic%20Gender%20Bender.zip",
      link2: ""
    },
    {
      name: "Sam and Max Hit the Road ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "104.7M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Sam%20and%20Max%20Hit%20the%20Road.zip",
      link2: ""
    },
    {
      name: "ScummVM.png",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "78.5K",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/ScummVM.png",
      link2: ""
    },
    {
      name: "ScummVM_thumb.jpg",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "6.2K",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/ScummVM_thumb.jpg",
      link2: ""
    },
    {
      name: "Simon the Sorcerer ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "177.5M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Simon%20the%20Sorcerer.zip",
      link2: ""
    },
    {
      name: "Space Quest Incinerations ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "767.5M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Space%20Quest%20Incinerations.zip",
      link2: ""
    },
    {
      name: "Technobabylon ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "1.1G",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Technobabylon.zip",
      link2: ""
    },
    {
      name: "The Castle of Doctor Brain ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "4.3M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/The%20Castle%20of%20Doctor%20Brain.zip",
      link2: ""
    },
    {
      name: "The Curse of Monkey Island ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "833.1M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/The%20Curse%20of%20Monkey%20Island.zip",
      link2: ""
    },
    {
      name: "The Dig ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "464.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/The%20Dig.zip",
      link2: ""
    },
    {
      name: "The Longest Journey ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "1.6G",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/The%20Longest%20Journey.zip",
      link2: ""
    },
    {
      name: "The Neverhood ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "594.5M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/The%20Neverhood.zip",
      link2: ""
    },
    {
      name: "The Secret of Monkey Island ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "122.5M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/The%20Secret%20of%20Monkey%20Island.zip",
      link2: ""
    },
    {
      name: "Toonstruck ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "874.4M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Toonstruck.zip",
      link2: ""
    },
    {
      name: "Touche Las Aventuras del Quinto Mosquetero ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "188.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Touche%20Las%20Aventuras%20del%20Quinto%20Mosquetero.zip",
      link2: ""
    },
    {
      name: "UFOs ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "353.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/UFOs.zip",
      link2: ""
    },
    {
      name: "Urban Runner ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "1.5G",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Urban%20Runner.zip",
      link2: ""
    },
    {
      name: "Ween - The Prophecy ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "6.0M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Ween%20-%20The%20Prophecy.zip",
      link2: ""
    },
    {
      name: "Wetlands ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "460.7M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Wetlands.zip",
      link2: ""
    },
    {
      name: "Whispers of a Machine ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "4.0G",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Whispers%20of%20a%20Machine.zip",
      link2: ""
    },
    {
      name: "Woodruff and the Schnibble of Azimuth ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "194.7M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Woodruff%20and%20the%20Schnibble%20of%20Azimuth.zip",
      link2: ""
    },
    {
      name: "Yonkey Island 1.0 (Charnego Translations) ",
      image: "https://i.postimg.cc/yYvfMy1r/Scummvm-logo-svg.png",
      size: "90.2M",
      link1: "https://archive.org/download/mini-romset-scummvm-espanol-42-juegos/Yonkey%20Island%201.0%20%28Charnego%20Translations%29.zip",
      link2: ""
    }
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
