const roms = [
  {
    name: "101-piki Wan-chan - Wan-chan Daikoushin! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "662 KB",
    link1: "https://drive.google.com/file/d/1ejsMsZzUEDVa9rwoUD_TuIa9QKCre3Ro/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "101-piki Wan-chan - Wan-chan Daikoushin! (Japan) (Beta) (1996-08-17)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "661 KB",
    link1: "https://drive.google.com/file/d/1g4eK6WAVloFzczEYxwEsGe5W6G59ca1i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3-choume no Tama - Momo-chan wa Doko! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/1VIG9UzGy_oztCj_R4TuYKfRBUfNcm9xS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3-choume no Tama - Momo-chan wa Doko! (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/1G6m_WUijQtOGFO8rprPYco3OuL7V9mRz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "6000-nin no Sensei-tachi ga Tsukutta Tanoshii Shougakkou Tanken 1 (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1251 KB",
    link1: "https://drive.google.com/file/d/1cc_hKJ979xHpHh8qKWSI2mgs9BODX4uf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "6000-nin no Sensei-tachi ga Tsukutta Tanoshii Shougakkou Tanken 2 (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1368 KB",
    link1: "https://drive.google.com/file/d/1XY95manN-SgeXcKeJhfbjsG_uBxELaX0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures in Letter Land with Jack & Jill (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "643 KB",
    link1: "https://drive.google.com/file/d/1AieEXsfTDTIr8r13clAmj3O4DIHpWiZi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aendiwa Billieui Suhaktamheom (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "540 KB",
    link1: "https://drive.google.com/file/d/1YSpqVYQtAj2InARhT17a-sYXZ7bCUiXM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ai to Yume no Kuni Sanrio Puroland - Asobinagara Oboeyou! Hiragana Katakana (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "645 KB",
    link1: "https://drive.google.com/file/d/1hl_0-_H2aK4d28XUazxCZnRe38hQKVeM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ai to Yume no Kuni Sanrio Puroland - Chanto Dekiru Kana Minna to Tanoshii Oyuugikai (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "659 KB",
    link1: "https://drive.google.com/file/d/1MYyWeWHx3U4n6qavdl0puJfvxRd4opdl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ai to Yume to Bouken Sanrio Puroland (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "807 KB",
    link1: "https://drive.google.com/file/d/16YhZtdT1ZZu2GLUlF7zDfBnJpAitQZ21/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Allowa Pongka (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "315 KB",
    link1: "https://drive.google.com/file/d/1N5gIr9-QiYPeuAJuRJDanb_cgLy16OcY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Annee en Compagnie de Winnie l'Ourson, Une (France)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/1QfP3NY0eCZ1_1z1TqEK4deZn8fqm8v8h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Anno con Winny Puh, Un (Italy)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1wTdes02XO6TnwLlhKlVDPSbM-HxNtsfF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ano en la Esquina de Pooh, Un (Spain)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/1INK4hazFUQebE8jAbmayInth19j11rgN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Anpanman Eigo - Tanosii Kanibaru (Taiwan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "820 KB",
    link1: "https://drive.google.com/file/d/1p7hW-gig46HG6gcQjttzwP8Xaa4VBaoC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Anpanman Pico - Waku Waku Pan Koujou (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "535 KB",
    link1: "https://drive.google.com/file/d/1Hwe8P7MqBzsURBgIBSMIFIhS_2i2_8y-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Anpanman no Hajimete Mouse Pico - Anpanman to PC Renshuu! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "824 KB",
    link1: "https://drive.google.com/file/d/1R4pDUlOloTs0gkHHqBuG2qAbrZvp_0ZZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Anpanman to Chinou Up! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1578 KB",
    link1: "https://drive.google.com/file/d/1oGtreDgP4yKkr77RYuWYvIwRvYjWrZDW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ar Med Nalle Puh, Ett (Sweden)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/1bIv8D2k7N93Lj00NHTyI7qL15cQ9Txd8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ashita no Nadja (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "912 KB",
    link1: "https://drive.google.com/file/d/154mVlwRqwwhFPQ-XmH6m7pMxLPUFQXia/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aventures du Roi Lion, Les (France)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/1aa0K0ngU0_aBZSvYT3UPvJuJ0vKDYFFQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "B-Fighter Kabuto (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "395 KB",
    link1: "https://drive.google.com/file/d/1jk1jjmQWRMlshf0F5PePTbtOeRnBy1_b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "B-Robo Kabutack (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "375 KB",
    link1: "https://drive.google.com/file/d/1DDn5u-Bdp4t9zhw2Ky0bkyiNWZIH0i5x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bakuryuu Sentai Abaranger (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1009 KB",
    link1: "https://drive.google.com/file/d/1n1fK9tiuXrwojLQhVxPYQcG_cwU_b8aa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beogseu Laipeu (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1322 KB",
    link1: "https://drive.google.com/file/d/1gQeX6XfXr7t-C45oMxjx3F1yJDSqNinl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Berenstain Bears, The - A School Day (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "574 KB",
    link1: "https://drive.google.com/file/d/1VDCyO4_jpnPqJzO8_LmI_VDfOaz7VWOl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Berenstain Bears, The - A School Day (USA) (Beta) (1994-12-20)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "569 KB",
    link1: "https://drive.google.com/file/d/1KAgItlh8qLKiPY9TCn49qzZF9Jw6IeXC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Berenstain Bears, The - A School Day (USA) (Beta) (1995-01-06)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "577 KB",
    link1: "https://drive.google.com/file/d/1bpFTHBxAhn4pCbNixpJeeKuyzgs1GeM6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Berenstain Bears, The - A School Day (USA) (Beta) (1995-01-13)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "578 KB",
    link1: "https://drive.google.com/file/d/1D-HeMu_O6GhJix0xuoTochj5IctP9X-X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Berenstain Bears, The - A School Day (USA) (Beta) (1995-01-16)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "573 KB",
    link1: "https://drive.google.com/file/d/1ns4Th6WmSfK4cJ5NyzvpJZOjdknhAdTC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Berenstain Bears, The - A School Day (USA) (Beta) (1995-01-26)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "574 KB",
    link1: "https://drive.google.com/file/d/1gqW-4WkhyZxNWA6nvzf_WesGUrKDhzVp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Berenstain Bears, The - A School Day (USA) (Beta) (1995-01-27)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "574 KB",
    link1: "https://drive.google.com/file/d/1y3ye-OJIy56z6M7AbgDFS-VfOncz9wIU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Berenstain Bears, The - A School Day (USA) (Beta) (1995-01-30)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "574 KB",
    link1: "https://drive.google.com/file/d/1yAnPq7HW1JRkVjc7B5Jn5KaNJKPCdaPT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bioneun Nal (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "485 KB",
    link1: "https://drive.google.com/file/d/1e9pY1PBHELK8AdQH36yaACnM3tlddEhB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Sailor Moon S (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "425 KB",
    link1: "https://drive.google.com/file/d/1INlysrbFYOmih1tKfZWtFcfNOEtkFhKq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Sailor Moon Sailor Stars - Tokimeki Party (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1zgX-K86xKDPeuktS6c6N1X7d5yvgm6Ou/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Sailor Moon SuperS (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "414 KB",
    link1: "https://drive.google.com/file/d/1qs50SMLcw3hktwTi_bFSMrE8fpMK7Rhg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bug's Life, A (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1415 KB",
    link1: "https://drive.google.com/file/d/1wUmhGNeiEuneaGfPjOZjdZDyeTm1kZLQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chibi Maruko-chan - Issho ni Asobou yo (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "380 KB",
    link1: "https://drive.google.com/file/d/11K01yRot2d9frnzsesI1KdyNioLZm0OM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choukou Senshi Changerion (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/1jznjqCSOEcq1zW5OLqV35dwdo4KkzmfL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Conveni de Okaimono! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1214 KB",
    link1: "https://drive.google.com/file/d/1sJhKrbj3cIG1HZcNUSXEfgrSKzXprSln/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cooking Pico (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1376 KB",
    link1: "https://drive.google.com/file/d/1qIbJRvW3W1TnkrYqBdRsOq2ni98DalLU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cooking Pico - Minna to Issho ni Hajimete Cooking! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1490 KB",
    link1: "https://drive.google.com/file/d/1M11g7nyofdE-H-3GMpvFmDoapvihFBE4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Copera no Chikyuu Daisuki (Japan) (Copera)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "643 KB",
    link1: "https://drive.google.com/file/d/1aASBcUdrw3E_y0PcmjhTjE57vY71JYYi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Copera no Kono Oto Naani (Japan) (Copera)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "659 KB",
    link1: "https://drive.google.com/file/d/1SiEVSj4KfovGuEhk10sY02GzTNocJLZq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Copera no Time Machine (Japan) (Copera)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "749 KB",
    link1: "https://drive.google.com/file/d/1w2jG-anTMGcEcsc74bRaEhbg5WGihSWU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cores Magicas (Brazil)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1lVjF0K42KZ6YZV6YO91CDMYPkmRN43XH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crayola Crayons - Create a World (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/1K52Gh0Tf6B6LLjo8S0H46ZQQi9ZmTPwn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crayon Shin-chan no Oekaki Note (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "409 KB",
    link1: "https://drive.google.com/file/d/1ayVBUYSWLu2ewPFAizFJAw9kW6DQ0UM8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crayon Shin-chan no Oekaki Note (Japan) (Beta 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/1qHaHw_-xBCTWy8AZWWGu-MC5q68IJIfG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crayon Shin-chan no Oekaki Note (Japan) (Beta 2)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "154 KB",
    link1: "https://drive.google.com/file/d/1jE0_6ec9dcTrh_JMelDg7ndwmQJaob5Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crayon Shin-chan no Ora to Issho ni Asobou yo! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "395 KB",
    link1: "https://drive.google.com/file/d/1vvIQwucluZk0TqH44T2F1SrVb0XCdhmS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crayons Magiques (France)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/16c7IvCepOblg5bT_tBCh3Te_m4OXVqVd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cutey Honey F (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "398 KB",
    link1: "https://drive.google.com/file/d/1HzWltDi5am0qf4YkFgNidp8y8esYZRnU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dance Pico - Hashitte Odotte Chou Happy! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1179 KB",
    link1: "https://drive.google.com/file/d/1_AaNXPuMsGiM-HgkA5M_XZkX2PWx2jrb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Denji Sentai Megaranger (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "395 KB",
    link1: "https://drive.google.com/file/d/1IXJKQZXyZFx-5xCXOhzd_GO7-xXUGzTe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Densha Daishuugou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "376 KB",
    link1: "https://drive.google.com/file/d/1L4mCXsSkUlUu5tHIn3U9B3h38dtALl4_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dia en la Escuela con los Ositos Berenstain, Un (Spain)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "547 KB",
    link1: "https://drive.google.com/file/d/1Mtf3izHePVeB9FDnYcTKOMriypTYtOVU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disney Princess - Ariel (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1560 KB",
    link1: "https://drive.google.com/file/d/12DsAK7qHkPpq5f8gv1Pi7zOP92YFbbiq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disney Princess - Princess ni Naritai! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1539 KB",
    link1: "https://drive.google.com/file/d/1REmg77t8w3vV5BvxQtvCu6NlFzbhgO7O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disney Princess - Princess ni Naritai! (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1539 KB",
    link1: "https://drive.google.com/file/d/1l4zQ16-9z68YhYMJcEVlSR69bpiqQFjc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disney Princess - Suteki ni Lesson! Hiragana-Katakana (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1618 KB",
    link1: "https://drive.google.com/file/d/14segGWr0ziuXPwGBgwhLEuSdwcniwtL1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Do Re Mi Fa - Animals no Tanoshii Ensoukai (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "319 KB",
    link1: "https://drive.google.com/file/d/1KgHHQHiNDECPBj0_FR8Hs9MeTArsHjec/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Do Re Mi Fa Densetsu (Japan) (Copera)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "549 KB",
    link1: "https://drive.google.com/file/d/1ao3GzhLrNVE1TM1r5w5_fomaI3ex2Tej/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald no Obake Taiji (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "368 KB",
    link1: "https://drive.google.com/file/d/1V2TnVv9C0JjZch3KLuvHPW2mP8uP4Wk5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald no Obake Taiji (Japan) (Hajimema Series 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "368 KB",
    link1: "https://drive.google.com/file/d/11rbmmGFWuFr9Q23-KVogJr2FaEcLzGCp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald no TV Show (Japan) (Rev 2)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "798 KB",
    link1: "https://drive.google.com/file/d/1G-99iIyNhX4Mgk_FUqb7hQmn3N4Jiahb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donalds Gespensterjagd (Germany) (Proto)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1q712U_4ouWtpfTmmq8lgzOPSrUjWYYqD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Chiiku Asobi Dora-Land (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1558 KB",
    link1: "https://drive.google.com/file/d/1hvRy_iFDLOrt7TH4Z67V0lFD-_cyUzZP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Eigo de Asobou ABC (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1427 KB",
    link1: "https://drive.google.com/file/d/1LhDlUoLcxfAIvfT4ZMIPtH3_GHxK6p9y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Ensoku, Imohori, Undoukai (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/1-4Z7LLRQGVJecAP3Z41-YU71gVtRCKwE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Kazoete, Kantan Kazu Tokei (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1516 KB",
    link1: "https://drive.google.com/file/d/1a36sLQKRxAP4SJz74_fWNAEPqKvZxkMD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Nobita no Machinaka Dokidoki Tanken! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "398 KB",
    link1: "https://drive.google.com/file/d/1G71Breeb8QE0hN29az-o7dEfdho76GEo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Nobita to Maigo no Kyouryuu (Japan) (Rev 2)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "409 KB",
    link1: "https://drive.google.com/file/d/1Qg0HVdH7LY-s2avFLEOqB3GJ8oryvghq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Time Machine de Daibouken (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "395 KB",
    link1: "https://drive.google.com/file/d/1lJW3VxN5QgCVniR_syHiE-3upMfeIdy_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Yometa yo, Kaketa yo Hiragana Katakana (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1471 KB",
    link1: "https://drive.google.com/file/d/1dwtyLaY4-gN6TyLzTVBQYbXPE1kH0B8h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Youchien wa Tanoshii na (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "730 KB",
    link1: "https://drive.google.com/file/d/17_PKxz0A-m5Emt4ulzyEBS3wkRTin-Vs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon Machinaka (Taiwan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "367 KB",
    link1: "https://drive.google.com/file/d/1quaU-OPnHO5y6uGfKOxfej9SHIrV_8d_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon no Utatte Pico - Issho ni Utaou! Doraemon! Waku Waku Karaoke (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1646 KB",
    link1: "https://drive.google.com/file/d/1a5P0hGMSb4BFiXxBxubHz2EdnSs-OCiz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dorehmipa Dongmooleumakhwoe (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "321 KB",
    link1: "https://drive.google.com/file/d/1oJPnOKPox1PTWgdD_PRl8lzr_mLizMAs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doubutsu Pico - Hamster Land (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "605 KB",
    link1: "https://drive.google.com/file/d/1BumVI-4XQ5TCEwsO6pb_eTj6e07rHCNV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Drive Pico - Go Go! Car Navi Touring! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1615 KB",
    link1: "https://drive.google.com/file/d/1fQrn1ui8GIstWL2HUx2Ww-r0siGgO7Fe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ECC Junior no Hajimete Eigo Vol. 1 - Patty-chan Family (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "2557 KB",
    link1: "https://drive.google.com/file/d/1weojlVGrdt3HnoxnPKb9Tosp4LEaNz31/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ECC Junior no Hajimete Eigo Vol. 2 - Patty-chan no Picnic (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "2732 KB",
    link1: "https://drive.google.com/file/d/1Fb5beqjifHea5XOXxHfkp1HEAQvn_e4H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ECC Junior no Hajimete Eigo Vol. 3 - Patty-chan no Otanjoubi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "2656 KB",
    link1: "https://drive.google.com/file/d/1RjVqKmJLOOjGBK3wqXno9zLzefuJDqWR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ECC Junior no Hajimete Eigo Vol. 4 - Doubutsu Daisuki, Patty-chan (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "2570 KB",
    link1: "https://drive.google.com/file/d/11Nh2AuQFfR-s6kSXGlTlAFbjdE0_jVPL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ECC Junior no Hajimete Eigo Vol. 5 - Merry Christmas, Patty-chan (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "2577 KB",
    link1: "https://drive.google.com/file/d/1E_A92Anx3MJ5YACUFzxMj6L3j4YauwjI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ECC Junior no Hajimete Eigo Vol. 6 - Patty-chan Yuuenchi ni Iku (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "2559 KB",
    link1: "https://drive.google.com/file/d/1qAVEseT_KTDqqfEJ0K0aYp6CIgifK3Kn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco Jr. - No fundo do mar! (Brazil)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "329 KB",
    link1: "https://drive.google.com/file/d/1EWZxcdSRFDmqu4GNZaBVOqcnbHU8znO6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco Jr. and the Great Ocean Treasure Hunt! (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1Oo9AkvJcKWrbZUHPSqKUA8X6JBQQyVC_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco Jr. and the Great Ocean Treasure Hunt! (United Kingdom)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/11r61Qqg_VdFw1Hu-_YWEoSqc_gZ8UBx-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco Jr. e la Grande Caccia al Tesoro nell'Oceano! (Italy)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/1w9CgccH9pZbSLu_4IwfFH8DTEXjZo09H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco Jr. et la Chasse au Tresor Sous-Marine! (France)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "330 KB",
    link1: "https://drive.google.com/file/d/1e7ZKMbY9oM8w8duEoLQbuW4cuqSeWyxs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco Jr. und die Grosse Schatzsuche im Ozean! (Germany)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "332 KB",
    link1: "https://drive.google.com/file/d/1pmAVRzarTHT_j3abg3O1qiozdYYVUKAZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco Jr. y la Gran Busqueda del Tesoro en el Oceano! (Spain)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "337 KB",
    link1: "https://drive.google.com/file/d/1yOe3XEJF9u3_FcOTbHgN-X_hlQ_mb-Xi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ehko Junieoeui Shinbiroun Badayeohaeng (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/18zCeS_4_VNLGLwM6iTNPN_18Di0UwVGS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Exciting! Hataraku Norimono-tachi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "723 KB",
    link1: "https://drive.google.com/file/d/18Yp8uAVyf2Lvykuf3IO40yaxvR5EPfNN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fishing Pico - Donald no Adventure Fishing (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1491 KB",
    link1: "https://drive.google.com/file/d/12VaUMVno8im632X718GCZ6clfQDruemh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Futari wa Pretty Cure (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1053 KB",
    link1: "https://drive.google.com/file/d/1BfJU3xipAYDpYrj1_aNDCN-LlAPj19vh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gabutcho Tsuri Gakkou - Yatta ne! Boku wa Tsuri Meijn (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "783 KB",
    link1: "https://drive.google.com/file/d/12DR-_-WNQqeuqVaVyglP4WQxVMauAbC-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakken Hajimete no Moji, Kotoba (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1482 KB",
    link1: "https://drive.google.com/file/d/1AQagznHwTO_Tto-4xM0rGpxek81lTY6Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakken Pico de Gakushuu 1-nensei (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1576 KB",
    link1: "https://drive.google.com/file/d/1kK6UlivF2_wGc0vryh9AJ_UmGdMm2IYF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakken Pico de Kagaku 1 - Hakken Mushi no Himitsu (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1462 KB",
    link1: "https://drive.google.com/file/d/1B9_LhGl9DMZu91nNjqkD_eAGm8SPcP5r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakken no o-Benkyou Soft - Eigo ABC (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "754 KB",
    link1: "https://drive.google.com/file/d/1Si2iuWdzJkuo9xII_HZdGRX5XUkgYbc4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakken no o-Benkyou Soft - Hiragana (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "428 KB",
    link1: "https://drive.google.com/file/d/10xntdEryczVtxtpgWPAOX1oXluRH_Duz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakken no o-Benkyou Soft - Kakezan Kuku (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "826 KB",
    link1: "https://drive.google.com/file/d/1GE_bU9RYKYcrImfFMcYwNi-E-AmJWbmS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakken no o-Benkyou Soft - Kanji (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "393 KB",
    link1: "https://drive.google.com/file/d/1EH9Rkeh2CM47OO8LQqe8Rem7bM92oG1Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakken no o-Benkyou Soft - Kazu, Suuji (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "795 KB",
    link1: "https://drive.google.com/file/d/1JRwUN7DychgUAGptk4JJwb2Ht0jTwPHM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakken no o-Benkyou Soft - Tashizan Hikizan (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/1u0ot-8onvX0WhSaLKUiAce-GPWk7Hkne/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare! Bokura no Compati Heroes (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "286 KB",
    link1: "https://drive.google.com/file/d/1geaHyazmcYSBpA25JkWw0Zpal0pwKpS_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gegege no Kitarou (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "386 KB",
    link1: "https://drive.google.com/file/d/1mmTzb6RSiQCjtC_bkVyg4x9TYFzEzGHR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gekisou Sentai Carranger (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "396 KB",
    link1: "https://drive.google.com/file/d/1SNpgSrify81Um0s1x-EO6ueg5KznuOh-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Geuljanara Yeohaeng! (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "640 KB",
    link1: "https://drive.google.com/file/d/1idP2no_NOw1PjJlbLtsdLGlpyq7HQ0tL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Geumdokki Eundokki (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "571 KB",
    link1: "https://drive.google.com/file/d/1jpxIaLysKNoqpceO3iwUILFbFZXtOosd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Giorno di Scuola degli Orsi Berenstain, Un (Italy)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "548 KB",
    link1: "https://drive.google.com/file/d/1XeIGy1RVmN8LM5e4UW0dugLV7Uli_pXK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Go! Go! Connie-chan! Doki Doki World! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "368 KB",
    link1: "https://drive.google.com/file/d/19mM-JYcn958cv5QVJgnLWVfxlcQ1F7k6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gojira - Doki Doki Kaijuu-tou!! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "578 KB",
    link1: "https://drive.google.com/file/d/1QkvSJ-B7L1-NfU31tkZENYHPzIm0bFwR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gomdori Puooeui Sagyejeol (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/1Cg1N4cV3UeKkUjFw7AKov3vwxDAJjcnQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Counting Caper with 3 Blind Mice, The (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "655 KB",
    link1: "https://drive.google.com/file/d/1RcJU3QaoYENGIjYuLvyOs7isOdy0POCR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gureumeun Yosuljaengi (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "498 KB",
    link1: "https://drive.google.com/file/d/1Z-0XhBHx-pm-pYAOZfqquMTMv755u6_a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hataraku Kuruma - Diapet Daishuugou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "387 KB",
    link1: "https://drive.google.com/file/d/1tRzMjWnDenLGAmWyXc0UTxPpg_rJCO06/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heisei Kyouiku Iinkai Jr. Mezase Yuutousei (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1RlL5f_MXFETAAXH12UjNBPc1_UJB5CkA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heisei Tensai Bakabon - Minna de Family Resturant ni Iku no da! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "345 KB",
    link1: "https://drive.google.com/file/d/1L61Mcg72UDZWCsdVz1ExbADuE_WP3oTO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty no Castelo (Brazil)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "346 KB",
    link1: "https://drive.google.com/file/d/1DnuHIZKa_P83-r5QZytAfNPWcj5BdHMY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty no Suteki na Otanjoubi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "506 KB",
    link1: "https://drive.google.com/file/d/1SbyDGovHmU5y9lpJGBZ9pWqdPXBIF-Zh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty no Tanoshii Butoukai (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/1w2joUbE95Q0Zw9BEHJWHsZ_JX_8v2za2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty no Tanoshii Omiseyasan (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1125 KB",
    link1: "https://drive.google.com/file/d/1l0PKSTG5rIIWpm1yBjUpy9P1NLt8Utzj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty to McDonald's de Asobo! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1037 KB",
    link1: "https://drive.google.com/file/d/1lIjz1qNuZ3lEsfyTcipJ0BEVZsmuavsf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heokulwa Rollineun Babbayo (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "637 KB",
    link1: "https://drive.google.com/file/d/18xsaM4Az--B0zGY_G0vrXBRlvJ7W-9QC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hirake! Ponkikki - Party o Hirakou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "367 KB",
    link1: "https://drive.google.com/file/d/1vbB0Ief3OTe_5diNoqChRdnmi9iTGEF7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Issho ni Hashirou Kikansha Thomas (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "372 KB",
    link1: "https://drive.google.com/file/d/12lEB2yr8WQdCEVqCPyVrRjkeK2rQJr98/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Issho ni Pico - Itsudemo Issho Doraemon (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1091 KB",
    link1: "https://drive.google.com/file/d/1UHd3RKAr2Qt41dt_dmXxG1Yb71Wfqdo3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jahr in Winnie Puuhs Leben, Ein (Germany)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1MJMp7oXib-sj3BR3AxBHTdQC8MXik2-C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeulgeoun Deuraibeu (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/1MNZxxEfRofAWJs_hTvy5rKbWiNz4oObw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeulgeoun Patireul Yeolja! (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "298 KB",
    link1: "https://drive.google.com/file/d/1J8VnMmcSSLPMxRuK6jXhcH8befDM8uGX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jidou Eiken Taiou - Moomin to Eigo - Tanjoubi no Okurimono (Japan) (Rev 2)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "733 KB",
    link1: "https://drive.google.com/file/d/15R4yEHSu9df47ZY3_o-nuirGb9ywpTkF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kaitou Saint Tail - Saint Tail to One, Two, Three! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "659 KB",
    link1: "https://drive.google.com/file/d/13xvXfJoycNhA3tvXx_8QkK4J_5XzyCLH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kamen Rider 555 (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1007 KB",
    link1: "https://drive.google.com/file/d/1V_dgY0Pq54qAzJhmSXrJOpbAnskkkhOB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kamen Rider Agito & Kuuga - Wild Battle (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "553 KB",
    link1: "https://drive.google.com/file/d/1TTJBWdLJ7l6FCjNs2jyqor4nbP-8E8D5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawaii Nakama o Sodateyou! - 3-tsu no Shippo (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "908 KB",
    link1: "https://drive.google.com/file/d/1wQ-2XCeoHpAAGcYZYCgBbJllebJS9Zsl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kero Kero Keroppi no Harikiri Undoukai (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/1AG0-63Zu4R04NmvgOiwbPgVAbQHW6q2H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keyboard Pico - Kantan Waku Waku Keyboard (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "590 KB",
    link1: "https://drive.google.com/file/d/1g0yc75xXtSf_p5ZCp-OHLCePVRYMxu8i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keyboard Pico 2 - Sawattemiyou! Yoiko no Hajimete Keyboard (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "656 KB",
    link1: "https://drive.google.com/file/d/1WLXO6NuC8gCm_u5AoAOhuOddHy7zNCME/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kibodeu Piko (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "679 KB",
    link1: "https://drive.google.com/file/d/11lchQ35alhiimbXQqsulQaP3dvxUOQpL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kikansha Thomas ni Notte (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "358 KB",
    link1: "https://drive.google.com/file/d/1Nb3h99PkidI3TE8-Y74NrpH7sRgh5dH2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kiki & Lala - Hoshi no Kazu Asobi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1442 KB",
    link1: "https://drive.google.com/file/d/14rKc3JFEiKtC7vtznp_450U7b6M8FOgb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kiteretsu Daihyakka - Edo ni Itte Kiteretsusai-sama ni Au Nari (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "412 KB",
    link1: "https://drive.google.com/file/d/1cLCY-RODyjCjc1hXnjzSh0-DhIVkQTct/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kitty to Minna no Keyboard Pico - Kitty to Minna no Hajimete no Keyboard! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1623 KB",
    link1: "https://drive.google.com/file/d/1r8wSVqRNSALXpuOuylWIRlOTI8kf7ZLI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kkumnara Yeohaeng (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "419 KB",
    link1: "https://drive.google.com/file/d/1zVKHkb_xEBB0Y6oFIjQYDnPG6We4lzLt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Koenig der Loewen, Der - Abenteuer (Germany)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/1n-OvAGufzi6tSqv1wMINkAg67wwU4T30/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kosume Pico Motto Kawaiku Naritai na (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1573 KB",
    link1: "https://drive.google.com/file/d/1RJiF3H9xzf2x7eN5C9BMobBhP8cSl-nf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kouchuu Ouja Mushiking - Atsumete Asobou Kouchuu Zukan (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1614 KB",
    link1: "https://drive.google.com/file/d/1GQsCYNznFTEySxAFr5hZSZKmBo3jbA08/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kuma no Pooh-san - Christopher Robin wo Sagase! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "822 KB",
    link1: "https://drive.google.com/file/d/1YoEA9xnJyNcyZH_GzdLqJKuoqrK-4ub3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kuma no Pooh-san - Tanoshii Tashizan Hikizan (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1566 KB",
    link1: "https://drive.google.com/file/d/1f3M_gZAKuas2D1mz140cf9gckmzVFh7-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kumon no Suku Suku Lesson - 1 kara 30 made no Suuji (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "2107 KB",
    link1: "https://drive.google.com/file/d/12gTLenerqHv8FuPkVyQjHc4OYrZM--v-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kurehyolla (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/1SO6YR4t8FDCILdRyj5ekHKoAbkx8KDsu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "LEGO - Fun to Build (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "389 KB",
    link1: "https://drive.google.com/file/d/1hcWPOjcrTR3wa4o6ZQmBrcWgpwooTiqj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lancio di Topolino nel Passato (Italy)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "358 KB",
    link1: "https://drive.google.com/file/d/1FbYNH4NLp88EfG4I88dCHRX_rQLCxH9W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lapices de Colores Magicos (Spain)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1wBY2VDftajUmVZ4Z0FwRjPD48MgJOWJK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Las Adventuras del Rey Leon (Spain)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/1lmxJgd8zdMCwiLSDFHnQvMpq9swGaie9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lejonkungen Aventyr (Sweden)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "521 KB",
    link1: "https://drive.google.com/file/d/1eEQ7VY1ChAOMTqfUvuGcFnrxYDyMYmxI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Licca-chan ni Naritai! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1742 KB",
    link1: "https://drive.google.com/file/d/1P0rJXEL4oqcA_Kh5T7Yam5oa94ISRK30/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King Adventures, The (United Kingdom)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/1WZk2fVp_BUQ5i7wConjRkAWIFFNjzxxV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King Adventures, The (United Kingdom) (Beta) (1995-05-22)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "519 KB",
    link1: "https://drive.google.com/file/d/1iuNsJx5ufELCGij-L94b7xGPBis2p3nk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King Adventures, The (United Kingdom) (Beta) (1995-06-15)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "518 KB",
    link1: "https://drive.google.com/file/d/1mSY5SAshs23WJLfCMrOv0IgSOEh7hnWR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King Adventures, The (United Kingdom) (Beta) (1995-06-16)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "519 KB",
    link1: "https://drive.google.com/file/d/1bpJyVpsGWQmXJbN_7RR7Epop2rhcfNB0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The - Adventures at Pride Rock (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "518 KB",
    link1: "https://drive.google.com/file/d/1b1voOVfND_YAZMtwPX41d-POlczEpDmH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The - Adventures at Pride Rock (USA) (Beta) (1995-04-19)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "516 KB",
    link1: "https://drive.google.com/file/d/1vP6tjCUUd4I1LegAoKvcZOfByLq-EvUT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The - Adventures at Pride Rock (USA) (Beta) (1995-04-25)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "522 KB",
    link1: "https://drive.google.com/file/d/1BqDqtFojnE7CaxODS4iK99-FSvAZd7_G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The - Adventures at Pride Rock (USA) (Beta) (1995-05-01)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "522 KB",
    link1: "https://drive.google.com/file/d/1RnTBqxwq8hJ_Ja_rOlgnJIDCiLZlJ3fj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The - Adventures at Pride Rock (USA) (Beta) (1995-05-16)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "518 KB",
    link1: "https://drive.google.com/file/d/1tKjo97HnAetHJkQlV-Uk1pua0ztxrVQ6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The - Adventures at Pride Rock (USA) (Beta) (1995-05-17)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "518 KB",
    link1: "https://drive.google.com/file/d/1iHqo-Q69U0BSXTbjObErP3gvWi_brech/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Crayons (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1my2jN0r97SCfopYMmXpEwgm5HsEa5kxK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Crayons (USA) (Beta) (1994-06-14)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "250 KB",
    link1: "https://drive.google.com/file/d/1j9KqSFx7-mBcOzw9JjcMsKKcqQYiWyQN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Crayons (USA) (Beta) (1994-06-23)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1yEc6Q1XKFxVHOOmAiyhB__nnVEuO7MRO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Crayons (United Kingdom) (Beta) (1994-09-26)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1DoE2GrMqXZI2FuV7AtHJGFCe3YTvoxsD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Crayons (United Kingdom, Sweden)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/14NaKC8A91Zo2UNCpnDbJO0YTTKxTVF2v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Crayons (United Kingdom, Sweden) (Beta) (1994-10-06)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1XIh6_zQpfkm7719CSr_rR9dhva410Fsb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Crayons (United Kingdom, Sweden) (Beta) (1994-10-11)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "258 KB",
    link1: "https://drive.google.com/file/d/1ZhML2Osb_ZAkvwAkzJyazuseLqaWl3Rr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Crayons (United Kingdom, Sweden) (Beta) (1994-10-12)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "258 KB",
    link1: "https://drive.google.com/file/d/1V1JRoA_KEUvcVDGhmtlcbTTpSxunHpN2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Knight Rayearth - Magic Knight Tanjou (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "816 KB",
    link1: "https://drive.google.com/file/d/1FRNBQmyyh7xtCTI0FAOxNKClxX6dI5oE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic School Bus, The (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1t4MtsvI2-SHgYPFIe1Tv1PLykEy4n4EO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Math Antics with Disney's 101 Dalmatians (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "659 KB",
    link1: "https://drive.google.com/file/d/1Bvbw3_RwIG3RWLd6YzqoPTcn2A2WqKFo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Math Antics with Disney's 101 Dalmatians (USA) (Beta) (1996-05-21)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "669 KB",
    link1: "https://drive.google.com/file/d/1FCZlEexG5edIicIhUageSJaBfrVnlzFE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Math Antics with Disney's 101 Dalmatians (USA) (Beta) (1996-05-31)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "662 KB",
    link1: "https://drive.google.com/file/d/1T0fKqWU0jfhZBHgDzmPCFfMGtCUV6t_r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Math Antics with Disney's 101 Dalmatians (USA) (Beta) (1996-07-03)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "665 KB",
    link1: "https://drive.google.com/file/d/10ws75gdpJrE7c6M8638mIh3uV2mNBiXg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Math Antics with Disney's 101 Dalmatians (USA) (Beta) (1996-07-05)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "661 KB",
    link1: "https://drive.google.com/file/d/1xaGsOS-mVSAlPLlpM2gXzcHrIUqduXXj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Math Antics with Disney's 101 Dalmatians (USA) (Beta) (1996-07-18)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "659 KB",
    link1: "https://drive.google.com/file/d/1rMvcE31kUmcYz4TsIhXU9DaAhdrFpKQu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Math Antics with Disney's 101 Dalmatians (USA) (Beta) (1996-08-14)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "659 KB",
    link1: "https://drive.google.com/file/d/1GSlRbzO8clLFARx1exQ3-S4H-5z8T7q3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Math Antics with Disney's 101 Dalmatians (USA) (Beta) (1996-08-16)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "659 KB",
    link1: "https://drive.google.com/file/d/1QyAzAt15bFcpvrjAv3MDcVSmCTcl72k1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Math Antics with Disney's 101 Dalmatians (USA) (Beta) (1996-08-17)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "659 KB",
    link1: "https://drive.google.com/file/d/1Ipn6l75bBiPMfIdDr1ooylIse2AI2TIM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "McDonald's de Asobo! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1028 KB",
    link1: "https://drive.google.com/file/d/1j6L5nygj29IMWZLoOOsh3pnaQyR1gNxx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Melody Land (Japan) (Copera)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "567 KB",
    link1: "https://drive.google.com/file/d/1TekMN_ZVf5Sb3j1Ce_uiVAPVaSWmc46Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mezase Pro Yakyuu (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "468 KB",
    link1: "https://drive.google.com/file/d/1wZqqjV1Pv4ig1mHz-pRWn316lJWrt72o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mezase Pro Yakyuu (Japan) (Beta)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "208 KB",
    link1: "https://drive.google.com/file/d/1FvMbQm3GmFskLkSm-RWLcI8gt5tvP4L8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey - Ausflug in die Vergangenheit (Germany)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "358 KB",
    link1: "https://drive.google.com/file/d/1Yhn664tXthywuzvr9qRZMHGoPeoZ2kHo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey - Fait un Voyage Eclair Dans le Passe (France)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "358 KB",
    link1: "https://drive.google.com/file/d/1I2jVGi6nxaOxU8pHHhW4Bv6W_o2Cbd0W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey - Le Echa un Vistazo al Pasado (Spain)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "358 KB",
    link1: "https://drive.google.com/file/d/15i82EJRh7bazZ66chUW98zeQ5ytHbYO9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey - Viajando no Tempo (Brazil)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1AFN8H_Hnb-1iolILO8Sdh2GMtLiyd6Cs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey no Boku wa Meitantei (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1428 KB",
    link1: "https://drive.google.com/file/d/1ncON5nq_2lkz2UmGntRqj4QAo5bpLF_W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey no Tokyo Disneyland Stamp Rally (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "283 KB",
    link1: "https://drive.google.com/file/d/1ta08-DCBEveIN9PjsnOwYFaLzC8WujRg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey no Tokyo Disneyland Stamp Rally (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "283 KB",
    link1: "https://drive.google.com/file/d/1yhLVWrDTo7Pzs6ZcykuS-eaQdhgHwN88/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey no Yukai na Bouken (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/14JcFKDPipQUuREtBX36ddQO7rGD3Vq-f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey no Yukai na Bouken (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/1zV8ThT4MwYvmapoFhtzgUCJUmznGYB0s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey to Ooki na Furudokei (Japan) (Rev 2)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "699 KB",
    link1: "https://drive.google.com/file/d/1LvIN8R8JiuVXf32v8SzBxWL72WWA_ytU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey to Ooki na Furudokei (Taiwan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "678 KB",
    link1: "https://drive.google.com/file/d/1ZhM9mzUN6-vicRols4Y3F3T1Wy7lGhcs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey to Utau Tori no Shima - Minnie wo Sagashite Waku Waku Daibouken! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "650 KB",
    link1: "https://drive.google.com/file/d/1L1zYu6v9q97K3tjdKKeWCXWyQMzuLvFX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Blast into the Past (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1XGXwZwc4FD4tJWUXvadzVIH2SJCOhEhZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Blast into the Past (USA) (Beta) (1994-06-08)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "358 KB",
    link1: "https://drive.google.com/file/d/1lkva8s5AhCOTlnG5H-fOewdKLtpH1j18/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Blast into the Past (USA) (Beta) (1994-07-21)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "364 KB",
    link1: "https://drive.google.com/file/d/1OhyOngQeyvFvXP0lhSwmyPAtHuMOLGXZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Blast into the Past (USA) (Beta) (1994-07-23)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1VP4ha_bB1WmhrnB0s_pqsllbw7efHj7M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Blast into the Past (USA) (Beta) (1994-07-25)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1HD_WqF4D-FrBbTi0CmEDB89f2nTNWNgx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Blast into the Past (USA) (Beta) (1994-08-01)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1GHDInHiJ78EKxNpkE3nTjWgRh_7F112W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Blast into the Past (USA) (Beta) (1994-08-09)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1TM4sWdixG2dRgzayzCLQ3v-RNMDJ7Yr9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Blast into the Past (United Kingdom)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1eXw94n6NReyYr6H0PVS2vjkHPurEFzZ4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickys lustiges Abenteuer (Germany) (Proto)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "329 KB",
    link1: "https://drive.google.com/file/d/1OfhZCjgu3tcwkMRXb9-Hai_1-Yvr0gJf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Miimi to Taata no Wai Wai Oekaki Doubutsuen!! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "399 KB",
    link1: "https://drive.google.com/file/d/1S7bY8Yh2VhlvGDC-N3JJ5ZBX39hHIOjK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mike to Asobou Tobidase Milky Way (Japan) (Copera)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "661 KB",
    link1: "https://drive.google.com/file/d/1s6NXcHaIKy54BSvRE_odm3ew1R5tTpqL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mikiwa Moheomeul Ddeonayo (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "330 KB",
    link1: "https://drive.google.com/file/d/1A6C9rpQthWMPNOlAJmsSuH2V7VZznv4J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MiniMoni. - Eigo de Asobun Da pyon! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "903 KB",
    link1: "https://drive.google.com/file/d/1mO6rOAb9BDE51n0wPeV3qYn28XbuOiLC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MiniMoni. - Shougakkou e Ikun Da pyon! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1617 KB",
    link1: "https://drive.google.com/file/d/1Xso_IdjYMx5MkVHcaz8aAlr2ewxf1-w0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MiniMoni. - TV ni Derun Da pyon! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1616 KB",
    link1: "https://drive.google.com/file/d/19GVjOiMVdQlBALmNE4X_7VBKQ5EXQo6F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Minna de Odorou - Oz no Mahoutsukai (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1439 KB",
    link1: "https://drive.google.com/file/d/1f_fsYrca_GWa_7cqQcEu-XG7F_cgKgwS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moero!! Robocon - Oekaki Robocon!! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1ZFk3X6U1EMTvs7mzjxnZhO7naMGEx_xA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mootto! Ojamajo Doremi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "681 KB",
    link1: "https://drive.google.com/file/d/1FrmQ264w3obI-42pGXgpEq4h6mrUMax4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moshi Moshi Pico - Dare ga Deru kana Moshi Moshi Pico de TV to Oshaberi! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "833 KB",
    link1: "https://drive.google.com/file/d/1cOTCO0KS3K_E6ktzFzKwIoPIfY0fVScu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mueoseul Tagogalkka (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "562 KB",
    link1: "https://drive.google.com/file/d/1cYlnvZhybXathUTSvlnvWaODBQ7Qm_rh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Muppets, The - On the Go! (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "389 KB",
    link1: "https://drive.google.com/file/d/1zW52IBxv1TC4TJSkjJNNW_wdSvsGE3n-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Musical Zoo (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "316 KB",
    link1: "https://drive.google.com/file/d/1wLeeZrp_oqOTmBKeveePdgbUFxxyohSA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHK Okaasan to Issho - Do Re Mi Fa Donut! - Asobi Ippai Uta Ippai! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "359 KB",
    link1: "https://drive.google.com/file/d/1pVgADs6Y79gdYmM-aFocCXtLjsC-MKhE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHK Okaasan to Issho - Do Re Mi Fa Donut! - Oekaki Daaisuki! - Omoshiro Oekaki Daishuugou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "589 KB",
    link1: "https://drive.google.com/file/d/18pHXcnO-iQtlRmK1DdBIu50BV0KuyRVv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHK Okaasan to Issho - Genki na Ko Atsumare! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "754 KB",
    link1: "https://drive.google.com/file/d/1ikWvqv3vxEXeUxCFSb69zh8wG3wzJEzi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHK Okaasan to Issho - Goo Choco Lantan - Minna de Oekaki! - Tanoshii Asobi mo Ippai! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1273 KB",
    link1: "https://drive.google.com/file/d/14mqCjoS-eyIBvuREfziGdrTZti-o22dA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninpuu Sentai Hurricaneger & Hyakujuu Sentai Gaoranger - Chou Sentai Super Battle (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "771 KB",
    link1: "https://drive.google.com/file/d/14r_7D3EY1fF8YRzMhd7Jgp_slFBpzpLU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nintama Rantarou (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/1n5LLar5GlWH9v9IdVVPz5ZSTDVzhOhCx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Norimono Studio - Go Go! Norista AsobiMacho! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1603 KB",
    link1: "https://drive.google.com/file/d/1a_hmQIUJzbJWGfVvApfIOrnAqMnLtyVb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nurie Daisuki! - Dumbo - Dumbo no Waku Waku Circus! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "776 KB",
    link1: "https://drive.google.com/file/d/1kb9BI3uE0nHh2VEX0_4Dei73IpChARjf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ojamajo Doremi # (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "725 KB",
    link1: "https://drive.google.com/file/d/1BGUUi4irKI72i50sUPaMulJMHdw0BqiO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ojamajo Doremi Dokkaan! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "559 KB",
    link1: "https://drive.google.com/file/d/1luhwcBF-gKSGOjWszDx7IS9hM-2ZSHa0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ojarumaru (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "366 KB",
    link1: "https://drive.google.com/file/d/1Oa0h4uHePFsS0TH214A0kyMW2a35eo6Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ongaku Daisuki Snoopy (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "493 KB",
    link1: "https://drive.google.com/file/d/1d_F8eBOjFd3XfjR3jiOJsQYyiEbaX1x9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Oryouri Daisuki! Kitchen Pico (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1421 KB",
    link1: "https://drive.google.com/file/d/1BIW7QIYJs7HYGaWlw14WEs91Jl9nhTnm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Osewa Shimasho! Aka-chan Pico (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1645 KB",
    link1: "https://drive.google.com/file/d/1Z0Ro91KO_WDFKZhojxVgAGs1UQPZapXE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Oshare Pico - Suteki ni Henshin! Runa-chan no Oshare Hair Salon (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1495 KB",
    link1: "https://drive.google.com/file/d/1eQ8aiXPFaUlmDai-OVG782-MiMcQZr30/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Otto Katachitchi (Japan) (Copera)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "588 KB",
    link1: "https://drive.google.com/file/d/1jwzgESgKGUv41VmmlH50pw4e71NC8Ryj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ougon Yuusha Goldran Himitsu Daihyakka (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1ZfHSiTL0ltn6KChUeNxcEznwkkI-nrJV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Outa no Canvas (Japan) (Copera)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "640 KB",
    link1: "https://drive.google.com/file/d/1IuX5LCYxxzDZ9O9Pi8hI8oTFEBqtB3S5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paddington no Sekai Ryokou (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "786 KB",
    link1: "https://drive.google.com/file/d/1xPjtEyMzgxmDkKrZNv0RNiIyM-gSMJoy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paketto 2 - Yukai na Nakama to Game de Kazu Asobi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1603 KB",
    link1: "https://drive.google.com/file/d/1wA20hbDfkdiYjXgcsOFgYrjNSSe4mpq6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pecola no Daibouken - Maboroshi no Ice Cream o Sagase! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "789 KB",
    link1: "https://drive.google.com/file/d/1sazMvTAXn-ikllJCHlvzJ0f9NGooKnoh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pengin Ukiuki Bikkuri Suizokukan - Meiro Puzzle (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/1hUk9gz3vFr5NP_07xjINQAYrECI4qFsv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pepe's Puzzles (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/16IvYXHGaei1yP8jLj59s0rhr2kDfbsCx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pepe's Puzzles (USA) (Beta) (1995-02-10)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "371 KB",
    link1: "https://drive.google.com/file/d/11dRAosb9So4ROCk5R4qgOzUCGRO6WeiE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pepe's Puzzles (USA) (Beta) (1995-02-18)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "373 KB",
    link1: "https://drive.google.com/file/d/1pS2YnhnblwvCVyCqAgLDKz3rSaqrZHw3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pepe's Puzzles (USA) (Beta) (1995-02-20)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "320 KB",
    link1: "https://drive.google.com/file/d/1dZBloMviIBQlikgpc8y2GABVbbhnbcZw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pepe's Puzzles (USA) (Beta) (1995-02-24)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/19xQBVjVet3zbyjsMLki3cDW2QRSClsgG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pet to Issho ni Tanoshiku Asobo - Pasokon Pico (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1523 KB",
    link1: "https://drive.google.com/file/d/1E-mOv5mu6mMRCjMjLL-pDU9OIGpKe7l5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Petapeta Chokkin Asoberu Zukan - Doubutsu (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1NOaHpXyqw8x1WQ_CRHEFxdxD1WASSIaz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Peter Pan - Neverland e Ikou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "737 KB",
    link1: "https://drive.google.com/file/d/15Cqw_zD2myDxvflPkAaYSRl46uXH9YJ0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Peuraideu Rokeui Moheom (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/1_Y8f88wE0P0XHpB3bNiDgMZZf7jjOUmr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pico Soccer - Mezase Soccer Senshu (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/16t7JxEIyHgurRJfmZv2jbXdg2ULt6eo-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Plarail Pico - Plarail de Asobou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1620 KB",
    link1: "https://drive.google.com/file/d/1-o898-IzIp16Mpxgg353rShDhZeYhuul/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocahontas (Brazil)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "571 KB",
    link1: "https://drive.google.com/file/d/1yE5NZ06V0Ngl8O6i5V39YSyE-wcY8Z04/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocahontas (Europe)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "569 KB",
    link1: "https://drive.google.com/file/d/1wCwTquYQuxaQXrug2nHyvtAcOgX9FFbx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocahontas - Riverbend Adventures (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "572 KB",
    link1: "https://drive.google.com/file/d/1uUUteqfyY4XTZ2jWDdqCTqD5KewLDKAD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Monsters - Suuji o Tsukamaeyou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1744 KB",
    link1: "https://drive.google.com/file/d/1RzF13Zbb3_Ki2WlZNBVHR0WtqfnDKSi2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Monsters Advance Generation - Hiragana Katakana Kakechatta! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1716 KB",
    link1: "https://drive.google.com/file/d/1lC-BsmwMxLaLRU4TmyUXPb_2y-DZjG4e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Monsters Advance Generation - Minna de Pico - Pokemon Wai Wai Battle! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1688 KB",
    link1: "https://drive.google.com/file/d/1ukxp1Nu3rc_5empenSkHczk4-sR9nfqZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pooh-san no Hajimete no Eigo (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "947 KB",
    link1: "https://drive.google.com/file/d/1TuGSol8s2mXMT_C3e7K7Xt5xkRjMd05R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pooh-san no Hajimete no Eigo (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "947 KB",
    link1: "https://drive.google.com/file/d/1iu_LTUZCWltpNwdZkfwDidMZ5e0MrYnP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pooh-san no Ichinichi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/15txY8CLOEOdJ8h5AvaGN_9wcQhkXmj1J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pooh-san no Ichinichi (Japan) (Beta)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "377 KB",
    link1: "https://drive.google.com/file/d/169d8OvvEASuWvEdPjCcNiBpO0DXMQSw-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pooh-san no Ichinichi (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1DNVERO0DQZYeD9bnmWwQcgl6X-qVkx18/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pooh-san to Tanoshii Nakama-tachi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1rgRpGzJYJJFlPZvtDpbp9KrzrAUFZCT3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Profesor PICO en el Mundo de los Colores, El (Spain)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "348 KB",
    link1: "https://drive.google.com/file/d/1MJhrGrYO6sntqj1XYWfBIEcvu7S-J61V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Professeur PICO et la Machine a Couleurs (France)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "349 KB",
    link1: "https://drive.google.com/file/d/1OFaIpN10eG-VpQunsgFeTH12Zh6n1HH3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Professor PICO and the Paintbox Puzzle (United Kingdom)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "345 KB",
    link1: "https://drive.google.com/file/d/1ROjOLQtu7IRFbf0zec_r52mwEPQewn7w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Professor PICO e l'Enigma della Scatola di Pastelli, Il (Italy)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "347 KB",
    link1: "https://drive.google.com/file/d/1nTdCMv6GfGJiBRs0J34AkcrCpEJvf4qw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Professor PICO und das Malkasten-Puzzle (Germany)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "346 KB",
    link1: "https://drive.google.com/file/d/1g5VbctrDKv1xxijLt5qEbbKmFcgt-kdl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puff e as Quatro Estacoes (Brazil)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/12PJxLFYp0YfR2t-K8Z_mwhadS4pm9nju/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quiz ni Challenge! - Doraemon (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "827 KB",
    link1: "https://drive.google.com/file/d/1XBYqQPjS4y0sKKaOmKyWgGx1zZOs--J5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Race ni Deyou yo! - Ken-chan to Pepe - Boku no Kuruma de Daibouken (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/1I5pkCza84TY91IqyQ2yAkWrEsNEW4TTx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rei Leao, O - As Aventuras De Simba (Brazil)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "519 KB",
    link1: "https://drive.google.com/file/d/1UfroKYR1xYT3kyFGMei6oKc7s1qgqtj3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rhythm Pico - Pippi-chan to Rhythm Asobi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1140 KB",
    link1: "https://drive.google.com/file/d/1Dft-S75myhrwSSqrWmuNGuFTfjyXe7G0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's El Dia Mas Ajetreado de las Vidas de Felipe y Gusy (Spain)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "624 KB",
    link1: "https://drive.google.com/file/d/1hTgBh7HgmJlTScWCos6b6xUnf_zoGYay/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1-kUIctZYsC7Kry7qfAIwhgchY27FodAw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-03-02)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/1L3TJEQnAmt8hOZAoKlS2rRk9Zyv6HMuy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-04-22)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "633 KB",
    link1: "https://drive.google.com/file/d/1RwmE0xFSeYRsJiwDotwbB9gn-lndkEL9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-04-24)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/18HWONkS2UVfN73MACdDrjXcmk2UGmt8G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-04-26)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/11gB1kKwr_4eUjODX7CsaF55J0ZeoFUn3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-04-26) (Alt 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1YmyDbWDSoLCY1VuZSfq5ZfmlYTPeInoN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-04-26) (Alt 2)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1C95jkB8U_a3n_A1Ay3C7PEFQNaDFd_vI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-04-26) (Alt 3) [b]",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "224 KB",
    link1: "https://drive.google.com/file/d/1kmV6V_OfI6VIvcU5GATJtWcCq65SFY4s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-04-27)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1YjuBZZ_d_AMqBuAHWO001cyTaDlVdTOy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-05-03)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/12vkQqTwj2WJTRL2T-EzRGsTA9gUgeoHx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-05-03) (Alt 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1DFwkDO5VNLztVG26B9YXnq9Rab1UPD5X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-05-03) (Alt 2)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1iULLEjFQBUMtH57e8zIQ2lDselZSPmRG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-05-03) (Alt 3)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/13hJtbE8XdzqeMe0pc-Puu6Ni8MIXwY1R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-05-06)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/19SIIzs0o2f30hPMX1y-zbwh_t3MhMHtE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-05-06) (Alt 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1eBqquSPfYJjhZt5kZodU1h2_Luuze6Ac/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-05-09)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1-POUSg2-opRWuIPxFOQ1v3bTm8SqBKMm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-05-09) (Alt 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1k-we8dy4N0t2g101ILcgeaGQuWwq8xOQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-05-09) (Alt 2)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1astd2XmrrhCNje_QHGPpoCbS6X5YBzYt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (USA) (Beta) (1994-05-09) (Alt 3)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1UygdCUKyPKAyy3qJXFuIIfJZ0hgiX2De/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Huckle and Lowly's Busiest Day Ever (United Kingdom)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "638 KB",
    link1: "https://drive.google.com/file/d/1Yzi6DnPWq9gqZpsv3wsF7yWYUEyA3I-V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's La Giornata Indaffaratissima di Sandrino e Zigo-Zago (Italy)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "617 KB",
    link1: "https://drive.google.com/file/d/1UlqCM1RZ91zQVNEs3iH-g4uMF20XcM3l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Une Journee Bien Remplie pour Cassis et Asticot (France)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "644 KB",
    link1: "https://drive.google.com/file/d/1OY4mAWTA8d8lWCADgNUHdwzNB3hRJXKa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Richard Scarry's Viel zu tun fuer Huckleberry und Egon (Germany)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "663 KB",
    link1: "https://drive.google.com/file/d/1bNNP46_z3f5gjrlapAkvrjqxUdQ9TrFZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Saa Shuppatsu Da! - Ken-chan to Pepe no Wanpaku Drive (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "633 KB",
    link1: "https://drive.google.com/file/d/1wT1hDDOy6c2Gn7AP12r66UUD5PzO5KqS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanou Kaihatsu Series 1 - Atama ga Yoku Naru - Zukei Ninshiki (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1gKzA3pe0NUmA-2qy63n8iUKs1ay4skQo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanou Kaihatsu Series 1 - Atama ga Yoku Naru - Zukei Ninshiki (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1XkTVhCeJXu4nLGGyLGyuUDFDEyTfTZDz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanou Kaihatsu Series 3 - Atama ga Yoku Naru - Hikaku, Bunrui (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "220 KB",
    link1: "https://drive.google.com/file/d/1Gntk0MX1EdC-_ZstMPg8R0tjEmo0iLG4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanou Kaihatsu Series 4 - Atama ga Yoku Naru - Suiri, Kousei (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1oNZC0Iphl0tajO-xkmSJAI4wiTRGKpVR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanou Kaihatsu Series 5 - Meiro - Kioku (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/1cY5K03LfKCBSXIQR_63TzpwuQZFCZPxV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanou Kaihatsu Series 6 - Atama ga Yoku Naru - Ouyou Mondai (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "276 KB",
    link1: "https://drive.google.com/file/d/1omK9DbzPN1QfSN4mYgnnDSvP1jf0P-Vu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanrio Festival - Tanoshii Card-zukuri (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "382 KB",
    link1: "https://drive.google.com/file/d/1NjWwlYiVqDzfNBcpbLvbEQ3GNsXJBwMB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanrio Puroland de Dance Carnival - Minna de Oryouri Osaihou (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "645 KB",
    link1: "https://drive.google.com/file/d/1jNTUR657U-7SBExUzvEdjeagX4GQRGsa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanrio Puroland de Dance Carnival - Minna de Oryouri Osaihou (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "648 KB",
    link1: "https://drive.google.com/file/d/12XNAyb6xnDZHaD-CMr54E7gulZsVrvK2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Satonaka Machiko no Tanoshii Origami (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/1riM9J2K7hDnyb9raBlbnkF7L-mmP2gjQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sekai Meisaku Gekijou (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "698 KB",
    link1: "https://drive.google.com/file/d/1nIA7DAqZ0Myey-7iROkOUng93JZO3w0c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sesame Street - Alphabet Avenue (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "610 KB",
    link1: "https://drive.google.com/file/d/1DorNkQ_AGOlbsIEobHrIN3F-TYKvLQ63/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shichida Makoto Kanshuu - Unou Image Training - Hiragana, Katakana Casino de Mojavegas Dream! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "669 KB",
    link1: "https://drive.google.com/file/d/19oV2F58PYZjmZi7QIV0TxW6WoRlx8oMY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shichida Makoto Kanshuu - Unou Image Training - Sansuu, Eigo de Mojars ni Chousen (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1084 KB",
    link1: "https://drive.google.com/file/d/1kRr_ApUnVbp8nkMRFIZpHLdLgN-aysCb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shima Shima Tora no Shimajiro - Shimajiro to Yume no Kuni e Daibouken! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "3351 KB",
    link1: "https://drive.google.com/file/d/1cvzG8haCo6gf0QIKEK-Nc6kbJ70dRhMq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shima Shima Tora no Shimajiro - Tanoshii Ichinichi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1326 KB",
    link1: "https://drive.google.com/file/d/1qt1okJy82cne2DES1ddSksMT4vLoRuvH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Ultra Hero (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "285 KB",
    link1: "https://drive.google.com/file/d/1iY2ZLW3UjcNoGeGUUdNaOPS182uJHxf7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Ultraman Pico - Ultra Fighting Base (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "720 KB",
    link1: "https://drive.google.com/file/d/1qp0e5Uaw8wXem7UXvwKhsiSC8Mc3o4Dc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinseiki Ultraman Densetsu (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "818 KB",
    link1: "https://drive.google.com/file/d/1OLZJH6qf2STsdd8_oa9BeRx9w-IlXIkM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shirayukihime (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1698 KB",
    link1: "https://drive.google.com/file/d/1o86OEXMMcFJ3TVXoy4uGjBR3msuxLL2n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smart Alex and Smart Alice - Curious Kids (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "286 KB",
    link1: "https://drive.google.com/file/d/1ynuoqjhd0eBK2C8MF6AiCvn9ff_MFjtZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snoopy no Gakugeikai (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1rou5TUQNxCPI_ZtZnuElfIR5Ald9QWIu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sodatete Manabu Doubutsu Oukoku (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1PXatBuPxCBAeCDmP48J_W41dnB4Lpm24/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog's Gameworld (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "282 KB",
    link1: "https://drive.google.com/file/d/1qKQ25UShrj6EMjVy1nkKRvekIlUZoTP3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog's Gameworld (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "282 KB",
    link1: "https://drive.google.com/file/d/19Zgho2Ojumd78Q3kF4HVLmXlaPXvizre/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog's Gameworld (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "244 KB",
    link1: "https://drive.google.com/file/d/1E2-qLWJH0f5CSIB3PGQp5KToAANnfs7P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sootjanara Yeohaeng! (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "654 KB",
    link1: "https://drive.google.com/file/d/1DdI7z1Cni11qDTp1RSoXaN8vYIP1O8cj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman - Anpanman no Chie no World (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "2917 KB",
    link1: "https://drive.google.com/file/d/1_DSahSEdJav_GiEL_RU90mtJyMjUrcjf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman - Anpanman no Hitori de Dekichatta! (Japan) (Rev 1)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1722 KB",
    link1: "https://drive.google.com/file/d/10xw2aod6HJSCpKGdRO-cTLgm5B1-ZKkE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman - Anpanman to Denwa de Asobou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1710 KB",
    link1: "https://drive.google.com/file/d/1Z3a_aJ0JWVVpUlYTfPXej1UScmNEyFwU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman - Anpanman to Kotoba Asobi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1615 KB",
    link1: "https://drive.google.com/file/d/18cMOjSGl1mrsBCa-js2N_QT9eftM8-cE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman - Anpanman to Suuji Asobi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1484 KB",
    link1: "https://drive.google.com/file/d/17xuSok1f6w2O8Hk6dk0cGPc7R8CEggGY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman - Anpanman to Tanoshii Drive! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "632 KB",
    link1: "https://drive.google.com/file/d/1k2xrBN8tXfrN0_erADYIMFajOFw2r3OZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman Eigo to Nakayoshi 2 - Tanoshii Carnival (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "824 KB",
    link1: "https://drive.google.com/file/d/1bg0S4muk29A5701S9cznKEo9yDWJ_V2-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman Eigo to Nakayoshi Youchien de ABC (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "547 KB",
    link1: "https://drive.google.com/file/d/1Q-LeRzpDfH5FwbUd3ghHfVlq9oPGsMvy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman no Game de Asobou Anpanman (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "389 KB",
    link1: "https://drive.google.com/file/d/1QWpkhVx9vN9bl02ZyqoAwecSrLtrE_Vw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman no Medalympic World (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "330 KB",
    link1: "https://drive.google.com/file/d/12TekQsRjJRMt6ZqW-knVoGb82ZAOkWYw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman no Medalympic World 2 (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "352 KB",
    link1: "https://drive.google.com/file/d/1xYuxhBG5XducmYf9e4ov61hXBEUP5BAZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman no Medalympic World 2 (Japan) (Best Selection)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/12_gLU6IVm8xKczBm5bqyuzLSc9bibd9L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman no Minna de Kyousou Anpanman! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/1D_sxMEUrhAiDlYdkeVjg4HJPrfk0FJ96/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman no Ohanashi Daisuki Anpanman (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "380 KB",
    link1: "https://drive.google.com/file/d/1U_R4kHsT5p_k-7b5c5yG3eAE56JLI864/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Storyware Sampler (USA) (Demo) (1996-06-07)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "565 KB",
    link1: "https://drive.google.com/file/d/1Bs_2-CTa1NX5Jz7q131uaYHfYfojg3uA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Storyware Sampler (USA) (Demo) (1996-06-14)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "605 KB",
    link1: "https://drive.google.com/file/d/1hPJKXJjwfUxh_P7RteclrRJDGT78B-DW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Storyware Sampler (USA) (Demo) (1996-06-25)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "605 KB",
    link1: "https://drive.google.com/file/d/1nJSAqhWOREXHRedcBPuI_bj8vljkSGz1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Susie-chan to Marvy Otetsudai Daaisuki! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1271 KB",
    link1: "https://drive.google.com/file/d/1zdWSCIL2t_MpWaWAFszGD4FzEAm0E5VS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sylvanian Families - Mori no Nakama to Tanoshii (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1616 KB",
    link1: "https://drive.google.com/file/d/1hL1voExWwsR_kI6MaACvqI8145-Ws2oF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails and the Music Maker (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1IQyMv7toUCYdZo1dFf3tcK70wBRivX9C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails and the Music Maker (USA) (Beta) (1994-06-01)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1PPluEBbwNcgM3qesdsa5UjAj4t4Zcr_a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails and the Music Maker (USA) (Beta) (1994-06-08)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "237 KB",
    link1: "https://drive.google.com/file/d/17HKHnWGOrBDK4R7H95Sak5XXh-hC-Qwi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails and the Music Maker (USA) (Beta) (1994-06-23)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1j3zrPOJqDFTTTt7CYlu8crCH1wjJDNlu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails and the Music Maker (United Kingdom)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "258 KB",
    link1: "https://drive.google.com/file/d/19nxL95Oi2otmCbND-0oHyx-0F-QaUkEv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails and the Music Maker (United Kingdom) (Beta) (1994-06-25)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1GCibItmtt9TtMdVKE0S7IYGl-AkhSNEt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails and the Music Maker (United Kingdom) (Beta) (1994-07-22)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1TOlcley6Qo_zm_zQndP6ZszKEB2oQwc_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails and the Music Maker (United Kingdom) (Beta) (1994-09-27)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1viQ_XorU_SxVB7fx839RXYDvDYqky-lw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails and the Music Maker (United Kingdom) (Beta) (1994-10-05)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1FfqNlEjqQieVgejBXQB6fZls88VcOiDz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails et le Faiseur de Musique (France)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "258 KB",
    link1: "https://drive.google.com/file/d/1Pbtant8EcETEtoJx0s82I1LymQ2dRmSh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails no Mundo da Musica (Brazil)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "267 KB",
    link1: "https://drive.google.com/file/d/13N1kq6n4iZHsqeBWvNyOtrGgakHbTusM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails und der Musikant (Germany)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1XZo4OMuaO4oiAVtuK2LUSMybhS1aA0kE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tails y el Musico (Spain)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "258 KB",
    link1: "https://drive.google.com/file/d/1Gqy1W4gUFq3bluyCI9ArbPIxhzDQjT8j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tanoshiku Asonde Nouryoku Up!! - Tanoshii Youchien '95 Nendo Ban (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "398 KB",
    link1: "https://drive.google.com/file/d/1FSltuJnWOSdSyLzNIt6JGDbIoNEm2lx1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tanoshiku Asonde Nouryoku Up!! - Tanoshii Youchien (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "403 KB",
    link1: "https://drive.google.com/file/d/1PqhssqwN40dD-07PgowQcYPay07JywIJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tingawa Haenggoeui Toongtang Toongtang Doshi (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "601 KB",
    link1: "https://drive.google.com/file/d/1d0lDpmEVFXhp-lhz0yQKuxSvNcu6Fwvp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tokusou Sentai Dekaranger (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1315 KB",
    link1: "https://drive.google.com/file/d/116whSAn1hv2jh2-KLOPETrGI2yZTTGjR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tokyo DisneySea - Mickey to Asobou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1082 KB",
    link1: "https://drive.google.com/file/d/1vgQh9al7igSmEoqlbgZsS6k4pJrsJoX0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tokyo Disneyland Toon Town - Mickey no Boku wa Untenshu (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "502 KB",
    link1: "https://drive.google.com/file/d/1r5yPV2Lk_DuaABsgjZSEfRpopIybhd5Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tomica Pico - Bokura no Machi Tomica Town de Asobou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1413 KB",
    link1: "https://drive.google.com/file/d/16dRPn2QMAtl-ZwGdFoA8AItHhueoMmxj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tomica Pico Rescue Parking - Kinkyuu Shutsudou! Hataraku Norimono (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1578 KB",
    link1: "https://drive.google.com/file/d/1ep78OD5b84z4jUpSK5FYecCQiaFSQUPS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tottoko Hamtaro - Haru, Natsu, Aki, Fuyu Tottoko Nakayoshi! Ham-chans! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1702 KB",
    link1: "https://drive.google.com/file/d/1ECosEhnn3P9HGkAaFSwQIoHc1wdK5DVz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tottoko Hamtaro - Oekaki Ippai! Ham-chans! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1475 KB",
    link1: "https://drive.google.com/file/d/1WoT4m2GS2SyX0i4ewYc8wv2rO_k_aqDo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tottoko Hamtarou Tottoko Tanoshiku Aiueo - Maboroshi no Hikaru Tane o Mitsukeru no dah! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1651 KB",
    link1: "https://drive.google.com/file/d/1zWoh_CRW8hTLMsCRV4vA1wEGq9gzFOcJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toy Story 2 - Woody Sousaku Daisakusen!! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1597 KB",
    link1: "https://drive.google.com/file/d/1APc4Rf2wZcWoVAfDocstESm_mk7Rw5sq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toy Story 2 - Woody Susaeg Saejagjeon (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1425 KB",
    link1: "https://drive.google.com/file/d/18pFXAGF1VQIvAIcGBEB9Xr6fuT5IzRg9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ttottorang Kkokkorang (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/1pGxeVfAQbM9e3H8t7monHP6TH9EcCDzZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uchuu Bouken Space Shuttle Pilot (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "584 KB",
    link1: "https://drive.google.com/file/d/1Y-vnz7AHfTaUgOeBOFpsVqXOKn309jGd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uchuu de Asobou! - Barbapapa no Uchuu Ryokou (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "332 KB",
    link1: "https://drive.google.com/file/d/1zTOOM70GABZmlZq-Kpxu4CU2rMe1BLmy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultra Hero (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "381 KB",
    link1: "https://drive.google.com/file/d/1S4IbsAPiC3CNAT4dlNQJGAXRfuOEAavg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman Dyna (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "378 KB",
    link1: "https://drive.google.com/file/d/1h380yBwOG9FdqQ6jatW67_VYFf-supbw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman Kids - Tobidase! Space Picnic (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "337 KB",
    link1: "https://drive.google.com/file/d/1IJoZBbMvJaOjJtLxEFKOnG5RR1yy28YM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman Tiga (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "373 KB",
    link1: "https://drive.google.com/file/d/1WDANASqpiYsb6iiCie-qTQZdn6WEhZ9a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman vs Kaijuu Gundan!! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/1qJXr38cgI2pExBe1JeDz12V-eRXoNoqU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 1 - Richard Scarry's Huckle to Lowly (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "637 KB",
    link1: "https://drive.google.com/file/d/1v-RIUj_ct3WSU6lxybM0PfmKuDuf4jzp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 1 - Richard Scarry's Huckle to Lowly (Japan) (En) (Beta) (1994-07-21)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "652 KB",
    link1: "https://drive.google.com/file/d/1f_cpYwC45puMa7Ri9JKrHlzYcxsO_qbK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 1 - Richard Scarry's Huckle to Lowly (Japan) (En) (Beta) (1994-09-19)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1cIoH4EKDFENpIKmhgyD3pIngh36Y35zD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 1 - Richard Scarry's Huckle to Lowly (Japan) (En) (Beta) (1994-10-04)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/14a5gsEuWXYAv9bqQGzrSb713N4zZFjBl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 10 - Nontan to Issho - Wai Wai Nippon (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "559 KB",
    link1: "https://drive.google.com/file/d/1FeDcNnlDzx9NOXvsr6LcawKG2cfEh-Jk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 11 - Heisei Kyouiku Iinkai Jr. (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "761 KB",
    link1: "https://drive.google.com/file/d/1SNwclTEedMTKKdD1-TCRazCDEABB5anK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 2 - ECCO Jr. (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1wWse34dDYsTlTGrem3rTjdfTKVMLmmSs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 3 - Hello Kitty no Machi e Odekake (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "574 KB",
    link1: "https://drive.google.com/file/d/1cYazWCqBr_QbcYDgPeIdoZKBu2gYptXz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 4 - Kero Kero Keroppi no Iro Katachi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "438 KB",
    link1: "https://drive.google.com/file/d/1AMF1fVk4KhjdJNPa2gboXs4r3jtZB65Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 5 - Hello Kitty no Suteki na Takaramono (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "655 KB",
    link1: "https://drive.google.com/file/d/1KluVMC09ju_qAFNPFvzEmmKjGpfZ16es/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 6 - Ahiru no Pekkle no Kazoete Miyou (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/1_Y9BJkBUeSoophgxXEQvTAIiKYwu0mTg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 7 - Tails and the Music Maker (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "266 KB",
    link1: "https://drive.google.com/file/d/1l6oK6DFbGM8yfAIzLhKHRYjyOlVqsvd4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 8 - Dolucky no Oekaki House (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/14IXn_6HR1ED2hqWSIBBVCJk3uKOzLvgD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unou Kaihatsu Series 9 - Nihon Mukashibanashi (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1MfmAtVlcikFDMRkyZEkNvlT2N2IZarJC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Unten Thomas Deluxe Set (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "749 KB",
    link1: "https://drive.google.com/file/d/1SjOGkuf98TShJKRbxqtP4M-bDV_yg0A5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Utatte Pico - Minna de Karaoke! Issho ni Utaou Suki na Uta! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "653 KB",
    link1: "https://drive.google.com/file/d/1sZe0r3fKRaXD4IENu-Fj_LUqVzXo19nv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yasashiku Oteate Pico Clinic! - Kangofu-san Pico (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "1724 KB",
    link1: "https://drive.google.com/file/d/11OAm121VwL9qHeyKxloc_WqGEIquGGR_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Year at Pooh Corner, A (USA)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/1ILfGqr-lNNvGzxpbTKVi_z-kkFizTJKA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Year at Pooh Corner, A (United Kingdom)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/15j1R6X0EwkgYZ6i_vNz6xnzCJxMTVJ54/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yobeba Kotaeru - Doraemon - Nobita to Himitsu Dougu o Mitsukeyou! (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "833 KB",
    link1: "https://drive.google.com/file/d/1J5HRjunoRJpYR-3cNAYq1tzhvtYPAub9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yosul Keurepaseu (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1TMeisMrkQNhYE-olhmNqwSmW6ZrwfJ8h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yuchiwonehseoeui Haru (Korea)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "576 KB",
    link1: "https://drive.google.com/file/d/1t3zxDoilWrW7Jnicf08pEv10E4cWgFlw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yukai na Mori no Packet (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "671 KB",
    link1: "https://drive.google.com/file/d/1fJU6wECVnCAuznB5m_xVv7tF2cBlADC1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yume no Crayon Oukoku (Japan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "376 KB",
    link1: "https://drive.google.com/file/d/1XFjc9k_hExn7Kly1rtTKV6BI6cm8uunF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zai Weini Tiandilide Yinian (Taiwan)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "314 KB",
    link1: "https://drive.google.com/file/d/1K0zj6D7kJtNWzSHuWEtaT0SREd9ggneJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zauberbuntstifte (Germany)",
    image: "https://i.postimg.cc/gkpsfpbr/segapicologo.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1iHHFAImSK_sV6EZ2pUicpfphsct576cA/view?usp=drivesdk",
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
