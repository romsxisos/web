const roms = [
  {
    name: "3 Ninjas Kick Back (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/3%20Ninjas%20Kick%20Back%20%28USA%29.png",
    size: "1094 KB",
    link1: "https://drive.google.com/file/d/1KW_WeTBrpXTFUc9JRDiNfVkt9n7jjIqK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3 Ninjas Kick Back (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/3%20Ninjas%20Kick%20Back%20%28USA%29.png",
    size: "1094 KB",
    link1: "https://drive.google.com/file/d/17ThpjODS-o4yLsyVugLMiUZGH07rpUzt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "7th Saga, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/7th%20Saga%2C%20The%20%28USA%29.png",
    size: "791 KB",
    link1: "https://drive.google.com/file/d/1J9EaQntSURXiC_YtnBwUm0DSOfAm-yA-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "A.S.P. - Air Strike Patrol (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/A.S.P.%20-%20Air%20Strike%20Patrol%20%28USA%29.png",
    size: "565 KB",
    link1: "https://drive.google.com/file/d/1EG4hVysv3WxRy5UCMO8yErqwLpEX60aA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aaahh!!! Real Monsters (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aaahh%21%21%21%20Real%20Monsters%20%28USA%29.png",
    size: "1271 KB",
    link1: "https://drive.google.com/file/d/1QfJm1AGvFiK0bqeWHORtnwvNmycVXdUK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aaahh!!! Real Monsters (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aaahh%21%21%21%20Real%20Monsters%20%28USA%29.png",
    size: "1271 KB",
    link1: "https://drive.google.com/file/d/1gUcM_RW-xMbFl8hOqiEmzAfUo8uERqsU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ABC Monday Night Football (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ABC%20Monday%20Night%20Football%20%28USA%29.png",
    size: "519 KB",
    link1: "https://drive.google.com/file/d/19qKddouBH4o1iZG2pdI-kZqmPA3Uan-b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ace o Nerae! (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ace%20o%20Nerae%21%20%28Japan%29.png",
    size: "686 KB",
    link1: "https://drive.google.com/file/d/1XJTk33al3L9-4GRLHLSt8ja1Yth5VGyg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ACME Animation Factory (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ACME%20Animation%20Factory%20%28USA%29.png",
    size: "709 KB",
    link1: "https://drive.google.com/file/d/1-ROD8IMvsb8c1uz6wfbeaMIr2cp1Hp2R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Actraiser (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ActRaiser%20%28USA%29%20%28Arcade%29.png",
    size: "674 KB",
    link1: "https://drive.google.com/file/d/1ARsukL6-MOm1vSeXldwUT7WteMBv2lJG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ActRaiser (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ActRaiser%20%28USA%29.png",
    size: "670 KB",
    link1: "https://drive.google.com/file/d/14t-xCr2BwZLUrtmnOy5txcUPnvx5SlKX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ActRaiser (USA) (Arcade)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ActRaiser%20%28USA%29%20%28Arcade%29.png",
    size: "532 KB",
    link1: "https://drive.google.com/file/d/1mpa0R6IoVIfBniIvyt54ombZxlfK3ePo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ActRaiser 2 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ActRaiser%202%20%28USA%29.png",
    size: "1089 KB",
    link1: "https://drive.google.com/file/d/1z2XeSVWFuoPUNYk_pP9ezH4rruWQOBOO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ActRaiser 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ActRaiser%202%20%28USA%29.png",
    size: "1088 KB",
    link1: "https://drive.google.com/file/d/1pHLzqd30qg-CSgNRuWoNrWX7X2x0oWbt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Addams Family Values (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Addams%20Family%20Values%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "1364 KB",
    link1: "https://drive.google.com/file/d/14QLQ8HeIDQg3ic0RthrMjeMVLv0qv-0l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Addams Family Values (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Addams%20Family%20Values%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "1364 KB",
    link1: "https://drive.google.com/file/d/1wYy1URKoGgSqylT1iXKi2EZiwD2np1s5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Addams Family, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Addams%20Family%2C%20The%20%28USA%29.png",
    size: "759 KB",
    link1: "https://drive.google.com/file/d/1yzxLjZODDiNVrEBIO-cYqrDBcM4YVl9a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Addams Family, The (USA) (Arcade)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Addams%20Family%2C%20The%20%28USA%29%20%28Arcade%29.png",
    size: "745 KB",
    link1: "https://drive.google.com/file/d/1AKYHiIaUtZchJ6v-3MyTuQTPA9S2kZWO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Addams Family, The - Pugsley's Scavenger Hunt (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Addams%20Family%2C%20The%20-%20Pugsley%27s%20Scavenger%20Hunt%20%28USA%29.png",
    size: "808 KB",
    link1: "https://drive.google.com/file/d/19ygTRpbmj0j16Ypvlcd3urclSHBwS_WV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Advanced Dungeons & Dragons - Eye of the Beholder (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "577 KB",
    link1: "https://drive.google.com/file/d/1ldW6p5kR-FIMn0C93Fx2Ok7tmFImg8M7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures of Batman & Robin, The (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1397 KB",
    link1: "https://drive.google.com/file/d/1ZMqztbBsohXToRKmgfFotFnu60y_xySc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures of Dr. Franken, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Adventures%20of%20Dr.%20Franken%2C%20The%20%28USA%29.png",
    size: "796 KB",
    link1: "https://drive.google.com/file/d/1Es-ticMEtaI9uBYsaHJLvz4bZGH50EJS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures of Kid Kleets, The (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Adventures%20of%20Kid%20Kleets%2C%20The%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "813 KB",
    link1: "https://drive.google.com/file/d/194IiRR56p9thtgs72wnlLKCPY_aeV5fE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures of Rocky and Bullwinkle and Friends, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Adventures%20of%20Rocky%20and%20Bullwinkle%20and%20Friends%2C%20The%20%28USA%29.png",
    size: "615 KB",
    link1: "https://drive.google.com/file/d/1nOq8y4zGzW2jkQz9lrpaprx67GST4RnE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures of Yogi Bear (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Adventures%20of%20Yogi%20Bear%20%28USA%29.png",
    size: "536 KB",
    link1: "https://drive.google.com/file/d/1j1R2bygmon7FrOcitDgA-M1VGG42FdOl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero Fighters (Esp)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aero%20Fighters%20%28USA%29.png",
    size: "563 KB",
    link1: "https://drive.google.com/file/d/1rVId0HmRBcQ83pm_-QAXNhUZVUmZLWaz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero Fighters (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aero%20Fighters%20%28USA%29.png",
    size: "563 KB",
    link1: "https://drive.google.com/file/d/1Pco0CcH3wsHYzcKDOnG7NZI2inMYkrGt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero the Acro-Bat (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aero%20the%20Acro-Bat%20%28USA%29.png",
    size: "706 KB",
    link1: "https://drive.google.com/file/d/1rJJ6-wawIKWBgxgxtY1pUDe4sw04BxID/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero the Acro-Bat (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aero%20the%20Acro-Bat%20%28USA%29.png",
    size: "706 KB",
    link1: "https://drive.google.com/file/d/1B7m0UDp8cf-bUZc04KdaLtOO4HcYuJ-e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero the Acro-Bat 2 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aero%20the%20Acro-Bat%202%20%28USA%29.png",
    size: "1333 KB",
    link1: "https://drive.google.com/file/d/1uPuUhef6sYO55bb8BhbOvRrD64WRJ2H_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero the Acro-Bat 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aero%20the%20Acro-Bat%202%20%28USA%29.png",
    size: "1333 KB",
    link1: "https://drive.google.com/file/d/1SDlxy9bmtOVVp5-ZlkDn77AGCzS24yYK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aerobiz (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aerobiz%20%28USA%29.png",
    size: "458 KB",
    link1: "https://drive.google.com/file/d/1XjgiISEkqvARzz3nAt-hMK5XcUvoshXw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aerobiz Supersonic (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aerobiz%20Supersonic%20%28USA%29.png",
    size: "592 KB",
    link1: "https://drive.google.com/file/d/1LDpU99kh4PsEnP3NnDCSQRUlpG9i26B6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Air Cavalry (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Air%20Cavalry%20%28USA%29.png",
    size: "460 KB",
    link1: "https://drive.google.com/file/d/1jeu46wRrbFHyw9Vmy0fB-B-6FlBCK4Zc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Air Cavalry (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Air%20Cavalry%20%28USA%29.png",
    size: "460 KB",
    link1: "https://drive.google.com/file/d/1pFyEuW-ghYDrshwtdU2tRRPmwcQvEO2K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Al Unser Jr.'s Road to the Top (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Al%20Unser%20Jr.%27s%20Road%20to%20the%20Top%20%28USA%29.png",
    size: "574 KB",
    link1: "https://drive.google.com/file/d/1-RU5op2Fwl2wWBAC9jkMwer0bIc9_Ste/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aladdin (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aladdin%20%28USA%29%20%28Beta%29.png",
    size: "807 KB",
    link1: "https://drive.google.com/file/d/119wGYxeIbP6e423Dt3fJHEk7fjNq0L81/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aladdin (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Aladdin%20%28USA%29.png",
    size: "808 KB",
    link1: "https://drive.google.com/file/d/1vTwGSX6JS_677amDkazd3wkUEXBUgfPL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien 3 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Alien%203%20%28USA%29%20%28Beta%201%29.png",
    size: "597 KB",
    link1: "https://drive.google.com/file/d/1Kl6lvFqoPzEhC3_mUGbNNp4X0gxIVPhd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien 3 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Alien%203%20%28USA%29.png",
    size: "597 KB",
    link1: "https://drive.google.com/file/d/18VVWiXjt9ap0I4M06VDtOaHzXqIL7Dyb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien 3 (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Alien%203%20%28USA%29%20%28Rev%201%29.png",
    size: "600 KB",
    link1: "https://drive.google.com/file/d/1Lc30YeZlrNMNQl-exFnyFYa2kjlkKZQB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien vs Predator (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Alien%20vs%20Predator%20%28USA%29.png",
    size: "590 KB",
    link1: "https://drive.google.com/file/d/1QrJoY2sN0G344hNx2pQ7Jep9ArSkTRs6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien vs Predator (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Alien%20vs%20Predator%20%28USA%29.png",
    size: "590 KB",
    link1: "https://drive.google.com/file/d/1j0CS9yKArJrpey9rGWQZF_Lia0EvWPab/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "American Gladiators (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/American%20Gladiators%20%28USA%29.png",
    size: "713 KB",
    link1: "https://drive.google.com/file/d/1n1x8Sif5FC7Q2uxgjqSHL23TUw5LgCPr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "American Tail, An - Fievel Goes West (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/American%20Tail%2C%20An%20-%20Fievel%20Goes%20West%20%28USA%29.png",
    size: "514 KB",
    link1: "https://drive.google.com/file/d/1jzNwTDnTINxpY_QOfRlH9UtHNyVuZK3t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "American Tail, An - Fievel Goes West (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/American%20Tail%2C%20An%20-%20Fievel%20Goes%20West%20%28USA%29.png",
    size: "514 KB",
    link1: "https://drive.google.com/file/d/1DSvzWspbvxPhcSHMQv87-jv-JeFMFzzE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ancient Magic - Bazoo! Mahou Sekai (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1209 KB",
    link1: "https://drive.google.com/file/d/1vLIKLGlKn_2WLCN_VGg806xmt7Xd9s3R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Andre Agassi Tennis (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Andre%20Agassi%20Tennis%20%28USA%29.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/1K6ErDAdk3YlF9CaZf1_fOVksvnNZj1iV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Animaniacs (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Animaniacs%20%28USA%29.png",
    size: "747 KB",
    link1: "https://drive.google.com/file/d/1Y17qo1ESbC03L3W1ATk0_F4KoQEyo8ew/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Animaniacs (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Animaniacs%20%28USA%29.png",
    size: "747 KB",
    link1: "https://drive.google.com/file/d/1JP_U5ljz-NrMr9hnyUTcEtLrlXz1_qcj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arcade's Greatest Hits - The Atari Collection 1 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Arcade%27s%20Greatest%20Hits%20-%20The%20Atari%20Collection%201%20%28USA%29.png",
    size: "223 KB",
    link1: "https://drive.google.com/file/d/1zdRQzQTryM4wgVQfIlpbiy9DAMTcMdLJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arcana (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Arcana%20%28USA%29.png",
    size: "654 KB",
    link1: "https://drive.google.com/file/d/1i2Z01j1-pb92RTKRFMw2Idu8DqQZ8m4q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arcana (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Arcana%20%28USA%29.png",
    size: "652 KB",
    link1: "https://drive.google.com/file/d/12btJgexinI9KZMvp6skb7xb_eQ-o-L_L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ardy Lightfoot (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ardy%20Lightfoot%20%28USA%29.png",
    size: "648 KB",
    link1: "https://drive.google.com/file/d/1zhvqX53KI5bsCsZ9CWrzNd4DAHILVb-Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arkanoid - Doh It Again (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Arkanoid%20-%20Doh%20It%20Again%20%28USA%29.png",
    size: "229 KB",
    link1: "https://drive.google.com/file/d/1omQZMFjk1kJ79KG6NixV5Wh42jVuQSo8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arkanoid - Doh It Again (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Arkanoid%20-%20Doh%20It%20Again%20%28USA%29.png",
    size: "229 KB",
    link1: "https://drive.google.com/file/d/1VsdgE0DXqoYEUDi496r3EIrbmCE1yfu8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Art of Fighting (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Art%20of%20Fighting%20%28USA%29.png",
    size: "1235 KB",
    link1: "https://drive.google.com/file/d/1JvukNo57BySz4Jf17yajCuuSjIlQZRKF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ashita No Joe (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ashita%20no%20Joe%20%28Japan%29.png",
    size: "523 KB",
    link1: "https://drive.google.com/file/d/1P1oPMIYd2mHBLiDEBVpH_KrrKfDqz7ib/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix & Obelix (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1141 KB",
    link1: "https://drive.google.com/file/d/1jcdftT5Bcxe3HQnVbKQLZqZ0-tH2oQc5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Asterix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "422 KB",
    link1: "https://drive.google.com/file/d/1kUfqwreoDgsNtDZzmOqEHnxq9-1-Ax8p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Axelay (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Axelay%20%28USA%29.png",
    size: "783 KB",
    link1: "https://drive.google.com/file/d/1A_BO3pZJUD2oTAeKzQ5zFntZqVE288Zd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Axelay (USA) (Sample)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Axelay%20%28USA%29%20%28Sample%29.png",
    size: "783 KB",
    link1: "https://drive.google.com/file/d/1vnLHNvW66xg855pxYV59ePid3P0Lh4YQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "B.O.B. (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/B.O.B.%20%28USA%29.png",
    size: "735 KB",
    link1: "https://drive.google.com/file/d/1kWZ7TKpxCzNaK-5sA6pO3sudkslUOUTy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bahamut Lagoon (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bahamut%20Lagoon%20%28Japan%29%20%28Virtual%20Console%29.png",
    size: "3489 KB",
    link1: "https://drive.google.com/file/d/11e0jUMXiaKlRWDhwoIWyrKVN_HonPQIN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ballz 3D - Fighting at Its Ballziest (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ballz%203D%20-%20Fighting%20at%20Its%20Ballziest%20%28USA%29.png",
    size: "680 KB",
    link1: "https://drive.google.com/file/d/1tHLbXrTPy-ZRB2yIkeyxAqndhoqvziUx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie Super Model (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Barbie%20Super%20Model%20%28USA%29.png",
    size: "477 KB",
    link1: "https://drive.google.com/file/d/18fHEDSDOeSfp3J-yJf6GkkjTRG_FLK0Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barkley Shut Up and Jam! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Barkley%20Shut%20Up%20and%20Jam%21%20%28USA%29.png",
    size: "662 KB",
    link1: "https://drive.google.com/file/d/11kjx7FinkwxxZs_7kMks6VN704THrqfo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BASS Masters Classic (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bass%20Masters%20Classic%20%28USA%29.png",
    size: "1156 KB",
    link1: "https://drive.google.com/file/d/1r6rjkgp5DBFN-qQQOVNIRO4T7kA4fgHj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BASS Masters Classic - Pro Edition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bass%20Masters%20Classic%20-%20Pro%20Edition%20%28USA%29.png",
    size: "1486 KB",
    link1: "https://drive.google.com/file/d/1XLisUlsq0yprxsiF3AGSGq3PZrXc5DYm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bassin's Black Bass (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bassin%27s%20Black%20Bass%20%28USA%29.png",
    size: "1086 KB",
    link1: "https://drive.google.com/file/d/1uc6aIu9Ej4BeIbqRuyQXuRgp0b6Yq72y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bastard!! - Ankoku no Hakai-shin (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "604 KB",
    link1: "https://drive.google.com/file/d/1Xqs290LYI0ZLdZ5voL6Bd3QiBa9vUllY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman - Revenge of the Joker (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Batman%20-%20Revenge%20of%20the%20Joker%20%28USA%29%20%28Proto%29.png",
    size: "438 KB",
    link1: "https://drive.google.com/file/d/1PhAKnZHmZtvr1SOfX9bDGmT11TSUH122/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Forever (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Batman%20Forever%20%28USA%29.png",
    size: "2115 KB",
    link1: "https://drive.google.com/file/d/1Y6XCpo3JdZETz5YDDM4Ef-OtWZbj-vKR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Forever (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Batman%20Forever%20%28USA%29%20%28Rev%201%29.png",
    size: "2111 KB",
    link1: "https://drive.google.com/file/d/1xwDo4hDBv91XOUB3R2oMwGtS20aMa-Ri/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Returns (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Batman%20Returns%20%28USA%29%20%28Sample%29.png",
    size: "746 KB",
    link1: "https://drive.google.com/file/d/1lAlcTrfXJpc04MlAlMxZTHivw14cVfLG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Returns (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Batman%20Returns%20%28USA%29.png",
    size: "746 KB",
    link1: "https://drive.google.com/file/d/1ozU1_78G5dt5pDpMTrjvjyJlLA89NC3L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Returns (USA) (Sample)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Batman%20Returns%20%28USA%29%20%28Sample%29.png",
    size: "754 KB",
    link1: "https://drive.google.com/file/d/1PfYA-9Ernd-sbusq90VUmfxhEK04DHQS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Blaze (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battle%20Blaze%20%28USA%29.png",
    size: "597 KB",
    link1: "https://drive.google.com/file/d/1x1ROLqEKKNv-2qlLLCczDqHj7OlegsY3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Cars (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battle%20Cars%20%28USA%29.png",
    size: "759 KB",
    link1: "https://drive.google.com/file/d/1f1lAeYSeb5ja_iUYMpJX2GgWyusGsVcf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Cars (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battle%20Cars%20%28USA%29.png",
    size: "759 KB",
    link1: "https://drive.google.com/file/d/17uxNBx7t55e5E2pa035mnz2GLr_HKvzs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Clash (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battle%20Clash%20%28USA%29.png",
    size: "676 KB",
    link1: "https://drive.google.com/file/d/1gG5r5V6YGNMb9ufYYgEgftJCQ6iBwhzH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Grand Prix (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battle%20Grand%20Prix%20%28USA%29.png",
    size: "378 KB",
    link1: "https://drive.google.com/file/d/17rT_0-w2EteRIX3Wn87g4cRaTocvJP-h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battletoads - Double Dragon (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battletoads-Double%20Dragon%20%28USA%29.png",
    size: "681 KB",
    link1: "https://drive.google.com/file/d/1egTFBv4wPqzm6Y18ctR_6RfwED0lU1ub/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battletoads in Battlemaniacs (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battletoads%20in%20Battlemaniacs%20%28USA%29%20%28Beta%29.png",
    size: "655 KB",
    link1: "https://drive.google.com/file/d/1jxvYtKGvQTz2HpcORfTW0Nin3PZMaHOg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battletoads in Battlemaniacs (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battletoads%20in%20Battlemaniacs%20%28USA%29.png",
    size: "655 KB",
    link1: "https://drive.google.com/file/d/1rwvoO06in0-PG6Hp84zb8XlhuxJkSll4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battletoads-Double Dragon (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Battletoads-Double%20Dragon%20%28USA%29.png",
    size: "681 KB",
    link1: "https://drive.google.com/file/d/1VMs7_7hrd6XMpfBWS4HP81ZVDb9pRc2F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bazooka Blitzkrieg (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bazooka%20Blitzkrieg%20%28USA%29.png",
    size: "319 KB",
    link1: "https://drive.google.com/file/d/1MnSQvDhUVQrV-sZlc4fTT1Vh1wJtR5kF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beauty and the Beast (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Beauty%20and%20the%20Beast%20%28USA%29.png",
    size: "719 KB",
    link1: "https://drive.google.com/file/d/1jfDoogMnNHjnMXKOyRQTFaKdOksv88QZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beauty and the Beast (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Beauty%20and%20the%20Beast%20%28USA%29.png",
    size: "719 KB",
    link1: "https://drive.google.com/file/d/168fM2RevIRWQtllhQAWda9chkSccUvXl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beavis and Butt-Head (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Beavis%20and%20Butt-Head%20%28USA%29.png",
    size: "1043 KB",
    link1: "https://drive.google.com/file/d/1JYMvwEPMZ2MEe4vDVjbJa1gbCDEf3E0Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bebe's Kids (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bebe%27s%20Kids%20%28USA%29.png",
    size: "563 KB",
    link1: "https://drive.google.com/file/d/12Y2dun08tNWaiJmvRP-jopCsGpPgwEo_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bebe's Kids (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bebe%27s%20Kids%20%28USA%29.png",
    size: "563 KB",
    link1: "https://drive.google.com/file/d/1HQQcVP0DwceiHgPu4tDRFtVNgvyty4b5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beethoven - The Ultimate Canine Caper! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Beethoven%20-%20The%20Ultimate%20Canine%20Caper%21%20%28USA%29.png",
    size: "308 KB",
    link1: "https://drive.google.com/file/d/10OIRqAUA1tzZl1pjpv9YC6GFvEdBJdOx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Best of the Best - Championship Karate (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Best%20of%20the%20Best%20-%20Championship%20Karate%20%28USA%29.png",
    size: "588 KB",
    link1: "https://drive.google.com/file/d/1tgHBPVE1fjukraiRzU5vMruEY5fKMEa7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Big Sky Trooper (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Big%20Sky%20Trooper%20%28USA%29.png",
    size: "545 KB",
    link1: "https://drive.google.com/file/d/159-_iKyzXm7W1-d9fjsfKYTh3fwHnpya/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Biker Mice From Mars (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Biker%20Mice%20from%20Mars%20%28USA%29.png",
    size: "736 KB",
    link1: "https://drive.google.com/file/d/1DLRYXuvkEhUb8aoIgi_SzY8dhK0-7WbB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Biker Mice from Mars (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Biker%20Mice%20from%20Mars%20%28USA%29.png",
    size: "736 KB",
    link1: "https://drive.google.com/file/d/1lA_8mnEtNNubNNSY3Qev_Cz0LWbtti5P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bill Laimbeer's Combat Basketball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bill%20Laimbeer%27s%20Combat%20Basketball%20%28USA%29.png",
    size: "197 KB",
    link1: "https://drive.google.com/file/d/1bXt-xe2cp2I80vZVjrkVFeNhXdtTdXGK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bill Walsh College Football (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bill%20Walsh%20College%20Football%20%28USA%29.png",
    size: "749 KB",
    link1: "https://drive.google.com/file/d/1zt9-df_CL1PmnoxODPZedvhK-q3jdXTB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bio Metal (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "450 KB",
    link1: "https://drive.google.com/file/d/1vORsdUIm-V-T4ax5caGxJClXUcnRefXT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BioMetal (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/BioMetal%20%28USA%29.png",
    size: "450 KB",
    link1: "https://drive.google.com/file/d/1Kvver6skmWAp0_OTrVdplfl_ssgaw4Zp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Sailor Moon R (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bishoujo%20Senshi%20Sailor%20Moon%20R%20%28Japan%29.png",
    size: "1574 KB",
    link1: "https://drive.google.com/file/d/1M9dH3s7H14emfx-65jd99lBh_NsFZgwe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bishoujo Senshi Sailor Moon SuperS - Zenin Sanka!! Shuyaku Soudatsusen (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bishoujo%20Senshi%20Sailor%20Moon%20SuperS%20-%20Zenin%20Sanka%21%21%20Shuyaku%20Soudatsusen%20%28Japan%29.png",
    size: "2709 KB",
    link1: "https://drive.google.com/file/d/11OnpHpFXhcJ1oP6bK68N0RB9Nz_lJlgG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Black Thorne (ESP-1)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "692 KB",
    link1: "https://drive.google.com/file/d/1KWPGwZLsc3LHJGmMvi9srhjPbnRawTC4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BlackThorne (ESP-2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Blackthorne%20%28USA%29%20%28Beta%29%20%28CES%20Version%29.png",
    size: "692 KB",
    link1: "https://drive.google.com/file/d/1mF8q6rauKlBWrE1CXEKSEmHWalS6RNAw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blackthorne (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Blackthorne%20%28USA%29.png",
    size: "692 KB",
    link1: "https://drive.google.com/file/d/1YtdX-xMwshGb6FImZZXXfqkUio54ljQz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BlaZeon - The Bio-Cyborg Challenge (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/BlaZeon%20-%20The%20Bio-Cyborg%20Challenge%20%28USA%29.png",
    size: "498 KB",
    link1: "https://drive.google.com/file/d/1E2kvy50petdW5xLxhPVac0Gdz7ITlR0j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BlaZeon - The Bio-Cyborg Challenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/BlaZeon%20-%20The%20Bio-Cyborg%20Challenge%20%28USA%29.png",
    size: "498 KB",
    link1: "https://drive.google.com/file/d/1PH8XCOQshxbV5x8wg_6mb4pCB0HVpRmL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blues Brothers, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Blues%20Brothers%2C%20The%20%28USA%29.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1h4PoJ1r79rzo_0vCzSm93PTnWooHRi0p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonkers (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bonkers%20%28USA%29.png",
    size: "719 KB",
    link1: "https://drive.google.com/file/d/1ARx4Qne8eV1bY9bnHvKCrI3P_warprwz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonkers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bonkers%20%28USA%29.png",
    size: "719 KB",
    link1: "https://drive.google.com/file/d/1ooN7QVpsaEB145E43oyYJVmB7OuwI23K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Boogerman - A Pick and Flick Adventure (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Boogerman%20-%20A%20Pick%20and%20Flick%20Adventure%20%28USA%29.png",
    size: "1924 KB",
    link1: "https://drive.google.com/file/d/1nFccroIULFy0tRL4q2d1Lrsgq9rhkdSD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Boxing Legends of the Ring (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Boxing%20Legends%20of%20the%20Ring%20%28USA%29.png",
    size: "745 KB",
    link1: "https://drive.google.com/file/d/1MK9QoLbZiy9-LHYMoAiyEhm7QRcXOquv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brain Lord (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brain%20Lord%20%28USA%29.png",
    size: "690 KB",
    link1: "https://drive.google.com/file/d/11SO4ygj-slAOG8ItILMpqBtsWtRs5YUy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brain Lord (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brain%20Lord%20%28USA%29.png",
    size: "688 KB",
    link1: "https://drive.google.com/file/d/1AN43rWlS6coLjCAg8gHz4fUbwVsMfBVf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brainies, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brainies%2C%20The%20%28USA%29.png",
    size: "301 KB",
    link1: "https://drive.google.com/file/d/1EvZREb5j4KwOquskjMK490DaGC3rahry/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bram%20Stoker%27s%20Dracula%20%28USA%29.png",
    size: "749 KB",
    link1: "https://drive.google.com/file/d/1CR31LqfL_kA6jPxmSy3_Tg6oiNNfKgsG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brandish (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brandish%20%28USA%29.png",
    size: "966 KB",
    link1: "https://drive.google.com/file/d/1zAQHZBKEVsm6zPeieD6mto98oaRhuaaj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brandish (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brandish%20%28USA%29.png",
    size: "966 KB",
    link1: "https://drive.google.com/file/d/1LE8KhCWmoXdb_l6DENB7ykS7Lb8gX7e4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brandish 2 - The Planet Buster (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brandish%202%20-%20The%20Planet%20Buster%20%28Japan%29.png",
    size: "1902 KB",
    link1: "https://drive.google.com/file/d/1W1ftVaNIpx0mDwNSQ8Nc37FnnManxie3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brawl Brothers (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brawl%20Brothers%20%28USA%29.png",
    size: "914 KB",
    link1: "https://drive.google.com/file/d/1M3fNosAdpEbULY5psUDUZc8OxqwjqKFC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brawl Brothers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brawl%20Brothers%20%28USA%29.png",
    size: "914 KB",
    link1: "https://drive.google.com/file/d/1OIugz2h77SYN7gJtwPvt7hZaF8nc2bLS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BreakThru! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/BreakThru%21%20%28USA%29.png",
    size: "228 KB",
    link1: "https://drive.google.com/file/d/1rlR8SwfUdPq5czLy_i8jeE5Oq_RN07BD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Breath of Fire (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Breath%20of%20Fire%20%28USA%29.png",
    size: "1057 KB",
    link1: "https://drive.google.com/file/d/1jmUzafURqOmxjQqth6RNT6TMYXCN1m2U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Breath of Fire (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Breath%20of%20Fire%20%28USA%29.png",
    size: "1058 KB",
    link1: "https://drive.google.com/file/d/1jZdHm0zUrWOjIUee621BN1ky2YO2fKPY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Breath of Fire (USA, Europe) (Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Breath%20of%20Fire%20%28USA%2C%20Europe%29%20%28Switch%20Online%29.png",
    size: "1058 KB",
    link1: "https://drive.google.com/file/d/1XjF9ptc-noOUH1SY6yzatFo8xTm32Sut/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Breath of Fire II (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Breath%20of%20Fire%20II%20%28USA%29%20%28Beta%29.png",
    size: "1698 KB",
    link1: "https://drive.google.com/file/d/1EedbysMmSj0gXn2ddYjkRWObx-CUZY8S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Breath of Fire II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Breath%20of%20Fire%20II%20%28USA%29.png",
    size: "1709 KB",
    link1: "https://drive.google.com/file/d/1Hq0SBV1Lpt4h86qEcocCxycPDAy35tVj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Breath of Fire II (USA, Europe) (Virtual Console, Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Breath%20of%20Fire%20II%20%28USA%2C%20Europe%29%20%28Virtual%20Console%2C%20Switch%20Online%29.png",
    size: "1710 KB",
    link1: "https://drive.google.com/file/d/1tHneRpXJf9sMXl1zV5Q3Gd65B5Om_prB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brett Hull Hockey (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brett%20Hull%20Hockey%20%28USA%29.png",
    size: "1253 KB",
    link1: "https://drive.google.com/file/d/1yknByOWE2GeCRPWBKWziD8Dbll1IyBDc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brett Hull Hockey 95 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brett%20Hull%20Hockey%2095%20%28USA%29.png",
    size: "1131 KB",
    link1: "https://drive.google.com/file/d/1IBoK084xhwNrDQzPVnTUr3Z5ztG3Im21/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bronkie the Bronchiasaurus (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bronkie%20the%20Bronchiasaurus%20%28USA%29%20%28En%2CEs%29.png",
    size: "449 KB",
    link1: "https://drive.google.com/file/d/1pxOrFTYlQEJbJ9tPIc-I1sZ7vg0t5s_T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bronkie the Bronchiasaurus (USA) (En,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bronkie%20the%20Bronchiasaurus%20%28USA%29%20%28En%2CEs%29.png",
    size: "449 KB",
    link1: "https://drive.google.com/file/d/19wGLhTHK5N73-3HsdCYYwXPxBIQyN04G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brunswick World Tournament of Champions (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brunswick%20World%20Tournament%20of%20Champions%20%28USA%29.png",
    size: "727 KB",
    link1: "https://drive.google.com/file/d/1OP7pqj2rGlRMVmD7tshenhLqv9ngmU-4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brutal - Paws of Fury (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brutal%20-%20Paws%20of%20Fury%20%28USA%29%20%28Beta%29.png",
    size: "1308 KB",
    link1: "https://drive.google.com/file/d/1RN0tWUAsId0u4lAd8dqMhA9zt7V-gK1D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brutal - Paws of Fury (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Brutal%20-%20Paws%20of%20Fury%20%28USA%29.png",
    size: "1296 KB",
    link1: "https://drive.google.com/file/d/1j-9dj4PhHkexmXBUrt5TfPCJblYRwYSQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BS Radical Dreamers (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1020 KB",
    link1: "https://drive.google.com/file/d/1TDD0ZqORjpxl21nwQtPFByCbU56nCKoG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubsy II (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bubsy%20II%20%28USA%29.png",
    size: "1137 KB",
    link1: "https://drive.google.com/file/d/1Qm7EyBJH6JI4dFvugyxOyDK3oynRNyad/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubsy II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bubsy%20II%20%28USA%29.png",
    size: "1137 KB",
    link1: "https://drive.google.com/file/d/1FQo7rTUpIK7tz-8G0c5zGLVvJcjYVXHv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubsy in - Claws Encounters of the Furred Kind (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bubsy%20in%20-%20Claws%20Encounters%20of%20the%20Furred%20Kind%20%28USA%29.png",
    size: "1138 KB",
    link1: "https://drive.google.com/file/d/14sQVC6wdwkLcV5j8WUi-VdH86fBaQcRn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubsy in Claws Encounters of the Furred Kind (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bubsy%20in%20-%20Claws%20Encounters%20of%20the%20Furred%20Kind%20%28USA%29.png",
    size: "1138 KB",
    link1: "https://drive.google.com/file/d/17JZ8bT2jkvIirD9tNsPT6N3n4S17zHqE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bugs Bunny - Rabbit Rampage (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bugs%20Bunny%20-%20Rabbit%20Rampage%20%28USA%29.png",
    size: "874 KB",
    link1: "https://drive.google.com/file/d/1weB94gh-r0sCNXXlT_F3UNIdrnZOc-Z4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bugs Bunny - Rabbit Rampage (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bugs%20Bunny%20-%20Rabbit%20Rampage%20%28USA%29.png",
    size: "874 KB",
    link1: "https://drive.google.com/file/d/1TWJfhYByMavfYcWvvsbdX9UPYp7gpAOs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bulls vs Blazers and the NBA Playoffs (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bulls%20vs%20Blazers%20and%20the%20NBA%20Playoffs%20%28USA%29.png",
    size: "492 KB",
    link1: "https://drive.google.com/file/d/10Sa9PhXldFkTYV_GRi1VtZ1LYHu1n5MF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bulls vs Blazers and the NBA Playoffs (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bulls%20vs%20Blazers%20and%20the%20NBA%20Playoffs%20%28USA%29%20%28Rev%201%29.png",
    size: "493 KB",
    link1: "https://drive.google.com/file/d/102U0f8-bVsMCqSWJmr_n772EhTzENmw1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Burn-in - Test Cartridge (USA) (Rev D)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "186 KB",
    link1: "https://drive.google.com/file/d/1NGvmBVI42TF-2ws7Ps2qGivABBQARE-O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bust-A-Move (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Bust-A-Move%20%28USA%29.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/103oHSqhL_M51ssWrio963PaDh208Uij8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cacoma Knight in Bizyland (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cacoma%20Knight%20in%20Bizyland%20%28USA%29.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/1txPwLHZR4YyO8ajd8VaIE0R_99eCaUol/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cacoma Knight in Bizyland (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cacoma%20Knight%20in%20Bizyland%20%28USA%29.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/1vFlFL9EzJuCHx7Ak2Om0MN6RQnoZ7aJH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cal Ripken Jr. Baseball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cal%20Ripken%20Jr.%20Baseball%20%28USA%29.png",
    size: "632 KB",
    link1: "https://drive.google.com/file/d/1kZkusnQrOXAzFCP2hi4GnyWQVMFiJ_fN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Games II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/California%20Games%20II%20%28USA%29.png",
    size: "464 KB",
    link1: "https://drive.google.com/file/d/1n_MkX6SyNxHTC7ZW5QH0lwIooDu669jj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cannon Fodder (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cannon%20Fodder%20%28Europe%29.png",
    size: "695 KB",
    link1: "https://drive.google.com/file/d/1oKClmffRg3ibytRWJSeTibRx0beZxZbp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cannondale Cup (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cannondale%20Cup%20%28USA%29.png",
    size: "783 KB",
    link1: "https://drive.google.com/file/d/1eT9xXx1KV5wcx7C4nPMqCwJXMLV_uCCp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Capcom's MVP Football (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Capcom%27s%20MVP%20Football%20%28USA%29.png",
    size: "620 KB",
    link1: "https://drive.google.com/file/d/1q7m4bSDtwedxezvrJKKIJ8LL9M943Smc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Capcom's Soccer Shootout (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Capcom%27s%20Soccer%20Shootout%20%28USA%29.png",
    size: "735 KB",
    link1: "https://drive.google.com/file/d/1UuzZevZZOhxx2OkNNgzWh2bl23sdN_kz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain America and the Avengers (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Captain%20America%20and%20the%20Avengers%20%28USA%29.png",
    size: "775 KB",
    link1: "https://drive.google.com/file/d/1vYIxqMEJfgzHSWf4B_z0vsmZoVroWcVR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain America and the Avengers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Captain%20America%20and%20the%20Avengers%20%28USA%29.png",
    size: "775 KB",
    link1: "https://drive.google.com/file/d/1qDEufozCW8R1HkECf7pdHbAudhOoGQfg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Commando (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Captain%20Commando%20%28USA%29.png",
    size: "1284 KB",
    link1: "https://drive.google.com/file/d/1Xl3dGLjQ0iLy12gzSIL0_1DYdvW0AHFV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Commando (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Captain%20Commando%20%28USA%29.png",
    size: "1287 KB",
    link1: "https://drive.google.com/file/d/1KJvUwV1RpdpDOrUuYetFjaBp1bA8GzQf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Novolin (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Captain%20Novolin%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "342 KB",
    link1: "https://drive.google.com/file/d/1KyqoQr6KeutuvnJULNGEOLrWUxpsYuuY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Novolin (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Captain%20Novolin%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "342 KB",
    link1: "https://drive.google.com/file/d/1joMGvYwlgG9JmKyyjmRFaq3HzBRfjJOg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Tsubasa III - Challenge of Kaiser (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "522 KB",
    link1: "https://drive.google.com/file/d/1NN5zAavMRJfGW9RJl8_PfJfwZGtiku2o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Tsubasa IV - Pro no Rival Tachi (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Captain%20Tsubasa%20IV%20-%20Pro%20no%20Rival-tachi%20%28Japan%29.png",
    size: "771 KB",
    link1: "https://drive.google.com/file/d/1w07djAdCihFBGBtMRo10bysI9YVJjchG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Tsubasa V - Hasha no Shougou Canpione (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1063 KB",
    link1: "https://drive.google.com/file/d/1A6hgHigFp_774qhttZp3pD8DSBydmnFC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carmen Sandiego - Where in Time (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "758 KB",
    link1: "https://drive.google.com/file/d/1_XlHCborgaOJlAx1NlvU8QCozQZCA976/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carrier Aces (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Carrier%20Aces%20%28USA%29.png",
    size: "1029 KB",
    link1: "https://drive.google.com/file/d/1FR37GOa4lejPCoWMGxeEvBXysFzGylTd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Casper (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Casper%20%28USA%29.png",
    size: "387 KB",
    link1: "https://drive.google.com/file/d/1K3UqxfZG3OV8C_X5fHwqXCWUKER0RwLE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castlevania - Dracula X (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Castlevania%20-%20Dracula%20X%20%28USA%29.png",
    size: "1236 KB",
    link1: "https://drive.google.com/file/d/1dvUcR08WJ_RZizKIcdl2IeUPJLf9UNE-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castlevania - Dracula X (USA) (Castlevania Advance Collection)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Castlevania%20-%20Dracula%20X%20%28USA%29%20%28Castlevania%20Advance%20Collection%29.png",
    size: "1236 KB",
    link1: "https://drive.google.com/file/d/1i-mV2zwzTdLFkVrUTCzf4QzYI_uM-6Uw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Champions - World Class Soccer (USA) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Champions%20-%20World%20Class%20Soccer%20%28USA%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "549 KB",
    link1: "https://drive.google.com/file/d/1G6lpp5IsS8UHdn9_P_isVFRDZkzB7C4z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Champions World Class Soccer (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Champions%20-%20World%20Class%20Soccer%20%28USA%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "549 KB",
    link1: "https://drive.google.com/file/d/1Y1YYOzCgM9cQ8sex9m-0gl7Cmzh-Dclv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Championship Pool (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Championship%20Pool%20%28USA%29.png",
    size: "410 KB",
    link1: "https://drive.google.com/file/d/1YRbERASMaa9HBLip4QSR1sDJ9mKnWzBv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Championship Soccer '94 (USA) (En,Fr,De,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Championship%20Soccer%20%2794%20%28USA%29%20%28En%2CFr%2CDe%2CIt%29.png",
    size: "231 KB",
    link1: "https://drive.google.com/file/d/1u5gtjYgkZsUmkXGDca5IBdbzKULeWijp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chavez (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chavez%20%28USA%29%20%28Beta%29.png",
    size: "405 KB",
    link1: "https://drive.google.com/file/d/1pSV6AHjEtBXbNy5cdl_NbFLmOb5az8PG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chavez (USA) (Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chavez%20%28USA%29%20%28Es%29.png",
    size: "405 KB",
    link1: "https://drive.google.com/file/d/1w1bHio-QHl5palAX4SE-9YontQZFyIZr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chavez II (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chavez%20II%20%28USA%29%20%28Es%29.png",
    size: "650 KB",
    link1: "https://drive.google.com/file/d/1Xzu3d0i0QDefuzHul7BcQByZsRcuBjha/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chavez II (USA) (Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chavez%20II%20%28USA%29%20%28Es%29.png",
    size: "650 KB",
    link1: "https://drive.google.com/file/d/12Ckj6GG1qp4ptKol84jBlp1z2rOY3qw1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chessmaster, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chessmaster%2C%20The%20%28USA%29.png",
    size: "110 KB",
    link1: "https://drive.google.com/file/d/1i4qPGY_F_o5k8DryhJblD0f3JRyrwLBl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chester Cheetah - Too Cool to Fool (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chester%20Cheetah%20-%20Too%20Cool%20to%20Fool%20%28USA%29.png",
    size: "368 KB",
    link1: "https://drive.google.com/file/d/1LdTHIjXjaOxoszrwWV9fRU_GzHpq56xv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chester Cheetah - Wild Wild Quest (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chester%20Cheetah%20-%20Wild%20Wild%20Quest%20%28USA%29%20%28Beta%29.png",
    size: "674 KB",
    link1: "https://drive.google.com/file/d/1oXt_NJuh58KfknO5KSeUfmGrlpG2Lkvz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chester Cheetah - Wild Wild Quest (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chester%20Cheetah%20-%20Wild%20Wild%20Quest%20%28USA%29.png",
    size: "631 KB",
    link1: "https://drive.google.com/file/d/1yOpZ-83sFYe75cRCj4nmrWuqfto8DPor/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choplifter III - Rescue-Survive (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Choplifter%20III%20-%20Rescue-Survive%20%28USA%29.png",
    size: "379 KB",
    link1: "https://drive.google.com/file/d/1S7KMrRytA-e9rKUx-KLzibrL2dkvGg0N/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chrono Trigger (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chrono%20Trigger%20%28USA%29.png",
    size: "3013 KB",
    link1: "https://drive.google.com/file/d/1O23P7m6e9s_g2_hT431C6IJkpDRKehYW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chrono Trigger (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chrono%20Trigger%20%28USA%29.png",
    size: "3009 KB",
    link1: "https://drive.google.com/file/d/1eMpncrRZMGQpN6l5z3Z6YpZKGJV40ttX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chuck%20Rock%20%28USA%29%20%28Beta%29.png",
    size: "494 KB",
    link1: "https://drive.google.com/file/d/1dmcp7aCEFpxoQdwVcDQzO6Nwv5ggD9TR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Chuck%20Rock%20%28USA%29.png",
    size: "494 KB",
    link1: "https://drive.google.com/file/d/1aifJpofFUWCou3kqUYc4e0_hyNJ8OyDC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Circuit USA (Japan) (En)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Circuit%20USA%20%28Japan%29%20%28En%29.png",
    size: "1363 KB",
    link1: "https://drive.google.com/file/d/10DKvTUbqLnWfUXA8-chUQM1BqWAEN7RX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clay Fighter (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Clay%20Fighter%20%28USA%29.png",
    size: "1682 KB",
    link1: "https://drive.google.com/file/d/1qk8uA_KgWVpAL2Uo7zYv97sB6ZOtaZdY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clay Fighter - Tournament Edition (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Clay%20Fighter%20-%20Tournament%20Edition%20%28USA%29.png",
    size: "2146 KB",
    link1: "https://drive.google.com/file/d/1Btv3qKj0XsdVOE7atiaI1gisL2EG-v7a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clay Fighter - Tournament Edition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Clay%20Fighter%20-%20Tournament%20Edition%20%28USA%29.png",
    size: "2146 KB",
    link1: "https://drive.google.com/file/d/13jFqrosIWyR5VXbnelkmXuMYYE2JARDh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clay Fighter 2 - Judgment Clay (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Clay%20Fighter%202%20-%20Judgment%20Clay%20%28USA%29.png",
    size: "2142 KB",
    link1: "https://drive.google.com/file/d/1k1ax_sdNaZiFI6iqQhHSqaduldl-fXUy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Claymates (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Claymates%20%28USA%29%20%28Sample%29.png",
    size: "700 KB",
    link1: "https://drive.google.com/file/d/1SMs5JySVYhP-BL4E8_YSQkWwPV5ZKu13/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Claymates (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Claymates%20%28USA%29.png",
    size: "700 KB",
    link1: "https://drive.google.com/file/d/1pnYbC8e8UR-eGEGUJAUxSxd_nfH4KodT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cliffhanger (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cliffhanger%20%28USA%29.png",
    size: "568 KB",
    link1: "https://drive.google.com/file/d/1NnrvKMzIdqOZUZ-R8wltrLsrkWX2WkNg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cliffhanger (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cliffhanger%20%28USA%29.png",
    size: "568 KB",
    link1: "https://drive.google.com/file/d/1fsYZtryO0lQPcVSu2WYMdJD9DPk2nN9w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clock Tower (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Clock%20Tower%20%28Japan%29%20%28Beta%29.png",
    size: "1661 KB",
    link1: "https://drive.google.com/file/d/1H8C9b_X0gA95Li7K3jU8Wj5PFFpZVnOY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clue (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Clue%20%28USA%29.png",
    size: "329 KB",
    link1: "https://drive.google.com/file/d/1AC09dwlxkCXiS4EjgKerTOuddgTGc7tj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clue (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Clue%20%28USA%29.png",
    size: "329 KB",
    link1: "https://drive.google.com/file/d/1GQ35FjePmL37JcOhj01IUXGw7snBJmY9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "College Football USA 97 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/College%20Football%20USA%2097%20%28USA%29.png",
    size: "980 KB",
    link1: "https://drive.google.com/file/d/1Fuh0QgqHNfGvdD6fzWegJLiVg-tSOd39/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "College Slam (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/College%20Slam%20%28USA%29.png",
    size: "1647 KB",
    link1: "https://drive.google.com/file/d/1ZU26EyZT5-OUbwibWq8lKVoHjrZ4KIFa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Combatribes, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Combatribes%2C%20The%20%28USA%29.png",
    size: "862 KB",
    link1: "https://drive.google.com/file/d/1xhtzYPjp_Y2I7HBOy_M8raXSHaCHhUaB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Congo's Caper (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Congo%27s%20Caper%20%28USA%29.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/1_V9ulbyAi-RBsoE0b8albSTGY8xfgtW0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Congo's Caper (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Congo%27s%20Caper%20%28USA%29.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/1huCN7q2J-cO1dJ8KmVMq4JeaATxR-m23/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Contra III - The Alien Wars (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Contra%20III%20-%20The%20Alien%20Wars%20%28USA%29%20%28Beta%29.png",
    size: "737 KB",
    link1: "https://drive.google.com/file/d/12GrNkycv8F-zVSJmXsK9Qv0yu3r2yWZI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Contra III - The Alien Wars (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Contra%20III%20-%20The%20Alien%20Wars%20%28USA%29.png",
    size: "736 KB",
    link1: "https://drive.google.com/file/d/1yQG2DSkxoBjNS3CpuXVPzSqYVXESt7vV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Contra III - The Alien Wars (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Contra%20III%20-%20The%20Alien%20Wars%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "737 KB",
    link1: "https://drive.google.com/file/d/1tZHONfgP94I89OCgKC4TyHqXfImXAfB3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool Spot (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cool%20Spot%20%28USA%29%20%28Beta%29.png",
    size: "666 KB",
    link1: "https://drive.google.com/file/d/1VBjsa6CHXr8JysANtUqO6EjsArACmWwW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool Spot (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cool%20Spot%20%28USA%29.png",
    size: "666 KB",
    link1: "https://drive.google.com/file/d/1yPQ1whGGOpTBL8yZops7Q9MO0CNao-Zl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool World (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cool%20World%20%28USA%29.png",
    size: "668 KB",
    link1: "https://drive.google.com/file/d/18qKbYp-ziYxRBGgUZQIVs_F6r_Dw_RD5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cooly Skunk (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "495 KB",
    link1: "https://drive.google.com/file/d/1eYYJ4IPPMSLOOv563dkpHpPhIpz_Xzm7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crystal Beans From Dungeon Explorer (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Crystal%20Beans%20from%20Dungeon%20Explorer%20%28Japan%29.png",
    size: "1090 KB",
    link1: "https://drive.google.com/file/d/1xC4h7IAy2m-iuD6e3mWBhCWkfFHsDqpM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cutthroat Island (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/CutThroat%20Island%20%28USA%29%20%28Beta%29.png",
    size: "1043 KB",
    link1: "https://drive.google.com/file/d/1XexTc_IDQh7im6dF92yaepiM9OMPo7Z7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "CutThroat Island (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/CutThroat%20Island%20%28USA%29.png",
    size: "1043 KB",
    link1: "https://drive.google.com/file/d/1B9Ml0JaDOQIEbGidYvK5tDMipf3-hrzY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyber Spin (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cyber%20Spin%20%28USA%29.png",
    size: "363 KB",
    link1: "https://drive.google.com/file/d/1W_yFQwChXUA9zCyIi_IIeX9xv1GvMlJE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cybernator (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cybernator%20%28USA%29%20%28Beta%29%20%28November%2C%201992%29.png",
    size: "774 KB",
    link1: "https://drive.google.com/file/d/1mj2Os4UeZJrdV0lE4huUweZHZL0htJOS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cybernator (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cybernator%20%28USA%29.png",
    size: "774 KB",
    link1: "https://drive.google.com/file/d/1R13d9g7qxA5KsfW0uxl7PK6JdoPbh9vp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyborg 009 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Cyborg%20009%20%28Japan%29%20%28Beta%29.png",
    size: "593 KB",
    link1: "https://drive.google.com/file/d/1n-fDfUsl9LcS24SLl920uCPsFulBHqia/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "D-Force (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/D-Force%20%28USA%29.png",
    size: "453 KB",
    link1: "https://drive.google.com/file/d/1rBzVeY1f-XyovatgHOoji1y2_OQTWqBy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "D-Force (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/D-Force%20%28USA%29.png",
    size: "453 KB",
    link1: "https://drive.google.com/file/d/1cjVRxtNCrllwCGeMVI3U3LAXkW28Z4sD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daffy Duck - The Marvin Missions (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Daffy%20Duck%20-%20The%20Marvin%20Missions%20%28USA%29%20%28Sample%29.png",
    size: "575 KB",
    link1: "https://drive.google.com/file/d/1SqelKPvMFccuDjzoM9WKfnXZ9m9A3Zsq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daffy Duck - The Marvin Missions (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Daffy%20Duck%20-%20The%20Marvin%20Missions%20%28USA%29.png",
    size: "575 KB",
    link1: "https://drive.google.com/file/d/1LiLlMNef4CHuypt3VPiRkoFoSnd4BXtw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dai-3-ji Super Robot Taisen (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dai-3-ji%20Super%20Robot%20Taisen%20%28Japan%29%20%28Rev%201%29.png",
    size: "1227 KB",
    link1: "https://drive.google.com/file/d/1bLfilnNkY6l4WPBijjlG_K4uxXMY14eP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daikaijuu Monogatari (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Daikaijuu%20Monogatari%20%28Japan%29%20%28Rev%201%29.png",
    size: "2401 KB",
    link1: "https://drive.google.com/file/d/1_jXM4kk_05CD2HgTN98OY1uEPGOqMXB7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Darius Twin (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Darius%20Twin%20%28USA%29.png",
    size: "400 KB",
    link1: "https://drive.google.com/file/d/1Xu3-NxZi1IHY5TpGBfSPx2PzSXz7rXzx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Darius Twin (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Darius%20Twin%20%28USA%29.png",
    size: "399 KB",
    link1: "https://drive.google.com/file/d/1ENy0hnwRuJYaLUGiEyc3G6I8mNkwQ-uv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "David Crane's Amazing Tennis (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/David%20Crane%27s%20Amazing%20Tennis%20%28USA%29.png",
    size: "508 KB",
    link1: "https://drive.google.com/file/d/1sZU0dUP5o35vBWa5-nO6uilsjB57zUHo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "David Crane's Amazing Tennis (USA) (Arcade)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/David%20Crane%27s%20Amazing%20Tennis%20%28USA%29%20%28Arcade%29.png",
    size: "506 KB",
    link1: "https://drive.google.com/file/d/1PBYyI0xFRquyHz0ZvDnL76G1qB1m8QB_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daze Before Christmas (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Daze%20Before%20Christmas%20%28Europe%29.png",
    size: "1367 KB",
    link1: "https://drive.google.com/file/d/1d8RJ7YQNaQIY6qGLmgxPy_xrEJWXpwJs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Death and Return of Superman (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1294 KB",
    link1: "https://drive.google.com/file/d/1hxNoswRmvoJrgO5KB_nY1Ij3ZlN0vYxR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Death and Return of Superman, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Death%20and%20Return%20of%20Superman%2C%20The%20%28USA%29.png",
    size: "1294 KB",
    link1: "https://drive.google.com/file/d/1gdzr3M5DhGL1OWYc0jVjRz70gX6OgZIX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Death and Return of Superman, The (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Death%20and%20Return%20of%20Superman%2C%20The%20%28USA%29%20%28Rev%201%29.png",
    size: "1294 KB",
    link1: "https://drive.google.com/file/d/1xYT3wealO6qfZDcSyrHzGjCu_o97cd2Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Demolition Man (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Demolition%20Man%20%28USA%29.png",
    size: "967 KB",
    link1: "https://drive.google.com/file/d/1WEAXiP43LiW1gWrSh1QBs-CuwoCAj70c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Demolition Man (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Demolition%20Man%20%28USA%29.png",
    size: "967 KB",
    link1: "https://drive.google.com/file/d/1c9YEUyrHygygbkFrK64wSV4r3tm0-cFh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Demon's Crest (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Demon%27s%20Crest%20%28USA%29.png",
    size: "1385 KB",
    link1: "https://drive.google.com/file/d/1HZCmk3_jxvwdOBR24GU0n--ETd_mapK7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Demon's Crest (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Demon%27s%20Crest%20%28USA%29.png",
    size: "1381 KB",
    link1: "https://drive.google.com/file/d/1B8NMNm1t2AMAnkHH_tKwo-DySsUvVtfU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Demon's Crest (USA, Europe) (Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Demon%27s%20Crest%20%28USA%2C%20Europe%29%20%28Switch%20Online%29.png",
    size: "1381 KB",
    link1: "https://drive.google.com/file/d/1GRJGKPk8qSslg0yx88Ycbb0V-JktZ2hD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dennis the Menace (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dennis%20the%20Menace%20%28USA%29.png",
    size: "693 KB",
    link1: "https://drive.google.com/file/d/1C9_C_X2k-8lZjV9X3a72H-78PiZeoA3X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Strike - Return to the Gulf (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Desert%20Strike%20-%20Return%20to%20the%20Gulf%20%28USA%29.png",
    size: "657 KB",
    link1: "https://drive.google.com/file/d/1IdYGWjJJXE6-xRK42zmN4GFhP1IuRGDL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dig & Spike Volleyball (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "506 KB",
    link1: "https://drive.google.com/file/d/1OX5A99Snbu6NsYwpDUYRLFQWdQ4A73uk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dino City (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "427 KB",
    link1: "https://drive.google.com/file/d/12RkfA0QR1JijF7QxTw2hpBvm_TySGI_I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DinoCity (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/DinoCity%20%28USA%29.png",
    size: "427 KB",
    link1: "https://drive.google.com/file/d/1tpRG9mBE-fOh_GDKVm0zBHI4r3KwWuXI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dirt Trax FX (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dirt%20Trax%20FX%20%28USA%29.png",
    size: "320 KB",
    link1: "https://drive.google.com/file/d/1MMUcqrgyardk8YmO1LbXZSHS93SrdUG1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dirt Trax FX (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dirt%20Trax%20FX%20%28USA%29.png",
    size: "320 KB",
    link1: "https://drive.google.com/file/d/15XHhY6Tzi0bET656NURvkkIS44aF3Zos/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Do-Re-Mi Fantasy - Milon no Dokidoki Daibouken (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1602 KB",
    link1: "https://drive.google.com/file/d/1Thk5mz6VQjleN1OVMRR__pQuGA-blOlL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald Duck no Mahou No Boushi (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donald%20Duck%20no%20Mahou%20no%20Boushi%20%28Japan%29.png",
    size: "1115 KB",
    link1: "https://drive.google.com/file/d/1z0zzjnIMXjpLBZSTDjwHjs2TAw-DZpl1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%20%28USA%29%20%28Rev%201%29.png",
    size: "2490 KB",
    link1: "https://drive.google.com/file/d/1dYG70SqnLaSWEzE9S-2rtq2mPJW_gIgk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%20%28USA%29.png",
    size: "2522 KB",
    link1: "https://drive.google.com/file/d/1s9Ffznk2-yLgzagxfokbWSPWNX59FqN4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%20%28USA%29%20%28Rev%201%29.png",
    size: "2522 KB",
    link1: "https://drive.google.com/file/d/1P1ZrEgM98rFUl1wTbsXarfY2cVb7Tt0j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country (USA) (Rev 2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%20%28USA%29%20%28Rev%202%29.png",
    size: "2490 KB",
    link1: "https://drive.google.com/file/d/1GuTi_vRjT5tvYba5nLzGD9dcfUFAc5qP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country (USA, Europe) (Rev 2) (Virtual Console, Classic Mini, Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%20%28USA%2C%20Europe%29%20%28Rev%202%29%20%28Virtual%20Console%2C%20Classic%20Mini%2C%20Switch%20Online%29.png",
    size: "2490 KB",
    link1: "https://drive.google.com/file/d/1ngxHLBfRU3WRxu-h3ZAXIWS4oOAcAAkL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country - Competition Cartridge (USA) (Competition Cart, Nintendo Power mail-order)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%20-%20Competition%20Cartridge%20%28USA%29.png",
    size: "2542 KB",
    link1: "https://drive.google.com/file/d/1enLNWz84HPhaF-vAfchOgeyYQdweoKqI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country 2 - Diddy's Kong Quest (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%202%20-%20Diddy%27s%20Kong%20Quest%20%28USA%29%20%28En%2CFr%29%20%28Rev%201%29%20%28Virtual%20Console%29.png",
    size: "2916 KB",
    link1: "https://drive.google.com/file/d/1SSlyuQQwfwZJ5QiN0NnjpsJ7I5LsaaUJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country 2 - Diddy's Kong Quest (USA) (En,Fr)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%202%20-%20Diddy%27s%20Kong%20Quest%20%28USA%29%20%28En%2CFr%29.png",
    size: "2915 KB",
    link1: "https://drive.google.com/file/d/18qnS0o_IIy4-7Axof5VD-x7l_32qFbsH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country 2 - Diddy's Kong Quest (USA) (En,Fr) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%202%20-%20Diddy%27s%20Kong%20Quest%20%28USA%29%20%28En%2CFr%29%20%28Rev%201%29.png",
    size: "2916 KB",
    link1: "https://drive.google.com/file/d/1hzmNuUzzrIGRnZYbiTN075LSf15lq63L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country 2 - Diddy's Kong Quest (USA) (En,Fr) (Rev 1) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%202%20-%20Diddy%27s%20Kong%20Quest%20%28USA%29%20%28En%2CFr%29%20%28Rev%201%29%20%28Virtual%20Console%29.png",
    size: "2916 KB",
    link1: "https://drive.google.com/file/d/1gcllhIgOjjD8dycIzx51KXPNWpPE0JdK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country 2 - Diddy's Kong Quest (USA, Europe) (En,Fr) (Rev 1) (Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%202%20-%20Diddy%27s%20Kong%20Quest%20%28USA%2C%20Europe%29%20%28En%2CFr%29%20%28Rev%201%29%20%28Switch%20Online%29.png",
    size: "2916 KB",
    link1: "https://drive.google.com/file/d/1L5JBDzaFRMqIeH7XKGju0-PRLqDhNjH6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country 3 - Dixie Kong's Double Trouble! (USA) (En,Fr)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%203%20-%20Dixie%20Kong%27s%20Double%20Trouble%21%20%28USA%29%20%28En%2CFr%29.png",
    size: "3130 KB",
    link1: "https://drive.google.com/file/d/1I0RO6qm6I4pZ6mWoDo3ip0fjpPa9YcTh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doom (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Doom%20%28USA%29.png",
    size: "1336 KB",
    link1: "https://drive.google.com/file/d/1tfe-e8MbaQyWYlfMDSFDQTKVssMV_Azk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doom Troopers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Doom%20Troopers%20%28USA%29.png",
    size: "1300 KB",
    link1: "https://drive.google.com/file/d/1fVbYRISUl3s8QwzPp8Oa8KcYVlR3NnzU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doomsday Warrior (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Doomsday%20Warrior%20%28USA%29.png",
    size: "781 KB",
    link1: "https://drive.google.com/file/d/17WJ1HDPJnKSaFS0YU8HMeFqF6obC1zvr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doomsday Warrior (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Doomsday%20Warrior%20%28USA%29.png",
    size: "781 KB",
    link1: "https://drive.google.com/file/d/1Po3YkaWy32iOSLkh3zw5h5CsKWHT06t7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dossun! Ganseki Battle (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dossun%21%20Ganseki%20Battle%20%28Japan%29.png",
    size: "572 KB",
    link1: "https://drive.google.com/file/d/1m7t0Ke9koZFOc3VIRTkOR9qz7d64hoRh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon V - The Shadow Falls (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Double%20Dragon%20V%20-%20The%20Shadow%20Falls%20%28USA%29.png",
    size: "1315 KB",
    link1: "https://drive.google.com/file/d/1cLIAU-lJrpQcddLru1GMKyKUMfKds3iO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon V - The Shadow Falls (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Double%20Dragon%20V%20-%20The%20Shadow%20Falls%20%28USA%29.png",
    size: "1855 KB",
    link1: "https://drive.google.com/file/d/1_Jpp83aFTHL7BbR70y-9G9OJ5zcKvFcP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon - The Bruce Lee Story (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dragon%20-%20The%20Bruce%20Lee%20Story%20%28USA%29.png",
    size: "1573 KB",
    link1: "https://drive.google.com/file/d/1jhBdT91mxN5gYySbgfZdCVJ9zcQjmaXl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon - The Bruce Lee Story (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dragon%20-%20The%20Bruce%20Lee%20Story%20%28USA%29.png",
    size: "1573 KB",
    link1: "https://drive.google.com/file/d/1p85fZVNBYTpjWuWYLEvjNzk7HKa1UWdw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Hyper Dimension (ESP - CHIP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dragon%20Ball%20Z%20-%20Hyper%20Dimension%20%28Japan%29.png",
    size: "1839 KB",
    link1: "https://drive.google.com/file/d/1CRnlGMzdHzUOOcSFPvtDhWrlvjsavl_x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Super Butouden 3 Ultime Menace (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1121 KB",
    link1: "https://drive.google.com/file/d/1auV5TkCnuTfDKiCCcdn7CiqdD-Z88o0M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Super Saiya Densetsu (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dragon%20Ball%20Z%20-%20Super%20Saiya%20Densetsu%20%28Japan%29%20%28Rev%201%29.png",
    size: "693 KB",
    link1: "https://drive.google.com/file/d/1opKECBsCVcio9mJboIlU54XANXYLmH6g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Super Saiya Densetsu (ESP) -SirYoink -",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "695 KB",
    link1: "https://drive.google.com/file/d/1OMML4jzXemTdEIMiQXSpvb-tAPkSxme3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Ball Z Super Butoden (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "996 KB",
    link1: "https://drive.google.com/file/d/1I7zUIlpdimwFNKoOt3KNpzY0XbyAwy1q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest I & II (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "901 KB",
    link1: "https://drive.google.com/file/d/17YIFuGYSXVnBcaRIarUJ-1amA1noCdGs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest III - Soshite Densetsu e... (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dragon%20Quest%20III%20-%20Soshite%20Densetsu%20e...%20%28Japan%29.png",
    size: "2646 KB",
    link1: "https://drive.google.com/file/d/17SY-ijDmam7cc8CjQX-jiM8ggT6UBwRL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon View (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dragon%20View%20%28USA%29.png",
    size: "1259 KB",
    link1: "https://drive.google.com/file/d/1vs9amc0e-sh5aO8iKqvLPDvR4OkJ1bTr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon's Lair (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dragon%27s%20Lair%20%28USA%29.png",
    size: "349 KB",
    link1: "https://drive.google.com/file/d/13yZ4c9rzAdRR4OTlAujmjlY71HaryY-W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon's Lair (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dragon%27s%20Lair%20%28USA%29.png",
    size: "350 KB",
    link1: "https://drive.google.com/file/d/1xDCPdw4HQl0B8BfCG6brWIN30XWnkaP2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Drakkhen (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Drakkhen%20%28USA%29.png",
    size: "622 KB",
    link1: "https://drive.google.com/file/d/1LNhr5iCoobIn9CHxPBua_HsrJKxGMuIM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dream T.V. (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dream%20T.V.%20%28USA%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1J6qbBZeRqkmmA4MAca2WtFXPu_G0PKJC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dream T.V. (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dream%20T.V.%20%28USA%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1IsQT3h5IKebnANIntnmimG7QfV6wWpt9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dual Orb II (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dual%20Orb%20II%20%28Japan%29.png",
    size: "2009 KB",
    link1: "https://drive.google.com/file/d/1ZjkqKOy0klYdG2bWsWzuSaXNfNNg3_jB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Duel, The - Test Drive II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Duel%2C%20The%20-%20Test%20Drive%20II%20%28USA%29.png",
    size: "498 KB",
    link1: "https://drive.google.com/file/d/1eundF_3q8mfIXuKQxIAWuGDj-DA0beVe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dungeon Master (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Dungeon%20Master%20%28USA%29.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/1it8uf2Ejd4WDTrVbCOeI9x2WiCZR8fwl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.V.O. - Search For Eden (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/E.V.O.%20-%20Search%20for%20Eden%20%28USA%29.png",
    size: "1184 KB",
    link1: "https://drive.google.com/file/d/1p-d9NorBBCIKHAKG0J64kFLbOW_b6yCb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.V.O. - Search for Eden (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/E.V.O.%20-%20Search%20for%20Eden%20%28USA%29.png",
    size: "1183 KB",
    link1: "https://drive.google.com/file/d/1KkdhHLdaldMmZSuoopghldIEF3X3dPgt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earth Defense Force (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Earth%20Defense%20Force%20%28USA%29.png",
    size: "542 KB",
    link1: "https://drive.google.com/file/d/132frTdq3tITZkyDVHODV7cHHQFzbRv2p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earth Defense Force (USA, Europe) (Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Earth%20Defense%20Force%20%28USA%2C%20Europe%29%20%28Switch%20Online%29.png",
    size: "542 KB",
    link1: "https://drive.google.com/file/d/16k1Y7QFf3yds2GUfrppJXRODULUl1IyI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthbound (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/EarthBound%20%28USA%29.png",
    size: "2286 KB",
    link1: "https://drive.google.com/file/d/1RWnfy9aUnLIYADNGtnjYCVOAQaApXwDN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "EarthBound (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/EarthBound%20%28USA%29.png",
    size: "2021 KB",
    link1: "https://drive.google.com/file/d/1QwIs7WWCYpM_OoQpOTW32Nwzsseo-dJU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Earthworm%20Jim%20%28USA%29.png",
    size: "1919 KB",
    link1: "https://drive.google.com/file/d/13H9IaMoPozAqcH2qrqZQ_4S1No-xfy3V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Earthworm%20Jim%20%28USA%29.png",
    size: "1919 KB",
    link1: "https://drive.google.com/file/d/1KI2C7aB6ANDpOGqMpWLXfAkCHm78mMFf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim 2 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Earthworm%20Jim%202%20%28USA%29%20%28Beta%29.png",
    size: "2129 KB",
    link1: "https://drive.google.com/file/d/1t9BiaTtlDL07WLAeemBcYNs3INso6JIV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Earthworm%20Jim%202%20%28USA%29.png",
    size: "2129 KB",
    link1: "https://drive.google.com/file/d/1hN5mLbcaAjNl38EB1htBNYQ6QApo_aEj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Eek! The Cat (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Eek%21%20The%20Cat%20%28USA%29.png",
    size: "818 KB",
    link1: "https://drive.google.com/file/d/1rnO05HM8fcBIqokVAIf5NZdj4A1yQl5h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elite Soccer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Elite%20Soccer%20%28USA%29.png",
    size: "668 KB",
    link1: "https://drive.google.com/file/d/1l4q_OXAq-0J-oJ-lx3uah5UrWQ_1NkjR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Emmitt Smith Football (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Emmitt%20Smith%20Football%20%28USA%29.png",
    size: "618 KB",
    link1: "https://drive.google.com/file/d/1jqS-Rg2R73jpJZVCHTEM9VW55naCzZed/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Equinox (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Equinox%20%28USA%29%20%28Beta%29.png",
    size: "625 KB",
    link1: "https://drive.google.com/file/d/1wt3X7HDsXlrBYF6q6k6SWd4KeuVbF3gZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Equinox (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Equinox%20%28USA%29.png",
    size: "624 KB",
    link1: "https://drive.google.com/file/d/1Tm67dmqFnrxcgaCpKaDwmq8kLgkaI0cG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Eric Cantona Football Challenge (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Eric%20Cantona%20Football%20Challenge%20%28France%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1PbKSEGnpL5lS3kW_3giTBO6OZru9IlIH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ESPN Baseball Tonight (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ESPN%20Baseball%20Tonight%20%28USA%29.png",
    size: "998 KB",
    link1: "https://drive.google.com/file/d/1S28jBEKUuqgf6Twrcvuo8QElTVXy9G7M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ESPN National Hockey Night (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ESPN%20National%20Hockey%20Night%20%28USA%29.png",
    size: "1014 KB",
    link1: "https://drive.google.com/file/d/1sKyLOqlo79FD9Oh_xTVeN_uymXXgOXny/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ESPN Speedworld (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ESPN%20Speedworld%20%28USA%29.png",
    size: "1094 KB",
    link1: "https://drive.google.com/file/d/1y0rxBG5owFrTPLK_ZIMP_-WeVwcy4qot/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ESPN Sunday Night NFL (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ESPN%20Sunday%20Night%20NFL%20%28USA%29.png",
    size: "973 KB",
    link1: "https://drive.google.com/file/d/1oZcd67H5q9yH7ihtK5mI7LNTw6QaYKxX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Exertainment Mountain Bike Rally (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Exertainment%20Mountain%20Bike%20Rally%20%28USA%29.png",
    size: "1051 KB",
    link1: "https://drive.google.com/file/d/1dkaN_tqhPqrWVxzGrT4KnnGuFWQImLvf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Exertainment Mountain Bike Rally + Speed Racer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Exertainment%20Mountain%20Bike%20Rally%20%2B%20Speed%20Racer%20%28USA%29.png",
    size: "2163 KB",
    link1: "https://drive.google.com/file/d/1kpMTLtEG32Mt68X6LMUkmJ5NyyoVtk8L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Extra Innings (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Extra%20Innings%20%28USA%29.png",
    size: "500 KB",
    link1: "https://drive.google.com/file/d/1F5Il_iFidobKs-WlsKlZrjQ2aVhISSaz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-Zero (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/F-Zero%20%28USA%29.png",
    size: "285 KB",
    link1: "https://drive.google.com/file/d/1xe8ZPYWMkZL3GCa8V4g2JfcJMBjtm1F3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-Zero (USA, Europe) (Virtual Console, Classic Mini, Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/F-Zero%20%28USA%2C%20Europe%29%20%28Virtual%20Console%2C%20Classic%20Mini%2C%20Switch%20Online%29.png",
    size: "285 KB",
    link1: "https://drive.google.com/file/d/1t9QrcqXe7EXItNgp72_1xtNl9AxbqMnA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Pole Position (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/F1%20Pole%20Position%20%28USA%29.png",
    size: "567 KB",
    link1: "https://drive.google.com/file/d/16esH_XtB-PiJtbJDerlbP6B4_BOpj8xK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 ROC - Race of Champions (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/F1%20ROC%20-%20Race%20of%20Champions%20%28USA%29.png",
    size: "511 KB",
    link1: "https://drive.google.com/file/d/1msGsMqbeOTPCxzwPViIgEr44zUHEc97J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1-ROC II - Race of Champions (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/F1-ROC%20II%20-%20Race%20of%20Champions%20%28USA%29.png",
    size: "700 KB",
    link1: "https://drive.google.com/file/d/1sRS48nLiXKzXXLa7YYdp-s4CuvCYhuVi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Faceball 2000 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Faceball%202000%20%28USA%29.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1zR05PFZ6QjAUr6b3gU2DhHxRFO7L6tiy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Faceball 2000 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Faceball%202000%20%28USA%29.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1jBj5e4SLRUCvjM9MZA-qqyZR2bJBlwrh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Famicom Tantei Club Part II (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "2424 KB",
    link1: "https://drive.google.com/file/d/1nKHgQ5XwZMR8IWUEZi_30uRf4DjEYxew/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Dog (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Family%20Dog%20%28USA%29.png",
    size: "326 KB",
    link1: "https://drive.google.com/file/d/1vRiDkOPntc9NuVRlohf6ecNPG6FbkjpU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Feud (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Family%20Feud%20%28USA%29.png",
    size: "324 KB",
    link1: "https://drive.google.com/file/d/1P1ZdFIFzSqSo_GcbOsuBbJoir3_6loJv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Feud (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Family%20Feud%20%28USA%29%20%28Rev%201%29.png",
    size: "324 KB",
    link1: "https://drive.google.com/file/d/1T_gl4rRN1QiabmDm0UgQakTa7d2aYyTo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fatal Fury (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Fatal%20Fury%20%28USA%29.png",
    size: "1090 KB",
    link1: "https://drive.google.com/file/d/1woRrNmRsi-T4Q8qF8IJN5n8sOBBuoTMJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fatal Fury 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Fatal%20Fury%202%20%28USA%29.png",
    size: "1950 KB",
    link1: "https://drive.google.com/file/d/1_1guby6SHLrx_vcRtCJQl2I_kSiiJsWm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fatal Fury Special (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Fatal%20Fury%20Special%20%28USA%29.png",
    size: "2974 KB",
    link1: "https://drive.google.com/file/d/1tXidaabE9m7LLioIeEYsc5PMQNcYav5A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA '98 - Road to World Cup (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1267 KB",
    link1: "https://drive.google.com/file/d/1IKWBnrf6H5dzWBaBUT6oh-7fdF_XkvNa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA 96 (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "894 KB",
    link1: "https://drive.google.com/file/d/1ff3e2jkTI7GnMoKe-sY7URMg5WbZ9Knn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA 97 - Gold Edition (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1104 KB",
    link1: "https://drive.google.com/file/d/196sczx1NiDVHkbhchNsP3tuTxE7KktfJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA International Soccer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/FIFA%20International%20Soccer%20%28USA%29.png",
    size: "633 KB",
    link1: "https://drive.google.com/file/d/1jgyi-p8Slx9kWgVpathQ3gHHV231L0NA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA Soccer 96 (USA) (En,Fr,De,Es,It,Sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/FIFA%20Soccer%2096%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%29.png",
    size: "894 KB",
    link1: "https://drive.google.com/file/d/1T4bGX0n--ChVtQB7-atQ_S8t23kHsoJ6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA Soccer 97 (USA) (En,Fr,De,Es,It,Sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/FIFA%20Soccer%2097%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CSv%29.png",
    size: "1104 KB",
    link1: "https://drive.google.com/file/d/1ExwQWLOM6xXQl0YqShAi5nNzFGlEMTxn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fighter's History (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Fighter%27s%20History%20%28USA%29%20%28Rev%201%29.png",
    size: "1806 KB",
    link1: "https://drive.google.com/file/d/1kygBEe2K-56d0ZNps_i_tUv1Fm2oWV9x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy - Magic Quest (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "352 KB",
    link1: "https://drive.google.com/file/d/1CUevBrgtZQk7E8gTYHJJuxiamRmdEt-s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy - Mystic Quest (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20-%20Mystic%20Quest%20%28USA%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/11sw-yHelTC-zUlcYqg1Jm6gopHG8Kzl9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy - Mystic Quest (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20-%20Mystic%20Quest%20%28USA%29%20%28Rev%201%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1ApOe9Ef-xHK5t37fl7_cpJGDyyw0Itne/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy II (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20II%20%28USA%29%20%28Rev%201%29.png",
    size: "660 KB",
    link1: "https://drive.google.com/file/d/1n5p9GaebsZBx_Ygqy_-njQ30Y-ubW1df/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20II%20%28USA%29.png",
    size: "661 KB",
    link1: "https://drive.google.com/file/d/1p_17m55aDGA7M4oJSjdFBtcnEz1i14dK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy II (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20II%20%28USA%29%20%28Rev%201%29.png",
    size: "661 KB",
    link1: "https://drive.google.com/file/d/1HfjTVGjOeCX8rfapi2tmvmFrs3BIoHK1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy II (USA, Europe) (Rev 1) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20II%20%28USA%2C%20Europe%29%20%28Rev%201%29%20%28Virtual%20Console%29.png",
    size: "662 KB",
    link1: "https://drive.google.com/file/d/1BVQ6S_9qBG1oGl9ZkdsriThko_6KB0-x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy III (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20III%20%28USA%29%20%28Beta%29.png",
    size: "2205 KB",
    link1: "https://drive.google.com/file/d/1TO1T7WKwlrxR0VriYnO6NJBn83xE7R5B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy III (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20III%20%28USA%29.png",
    size: "2196 KB",
    link1: "https://drive.google.com/file/d/1ynfHpuB8vkPZqVly7heUJSlWijaw58Yx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy III (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20III%20%28USA%29%20%28Rev%201%29.png",
    size: "2197 KB",
    link1: "https://drive.google.com/file/d/1dH5VcGtPGrtsibqgmpMOK0DsOb7IeEaQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy IV (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20IV%20%28USA%29.png",
    size: "734 KB",
    link1: "https://drive.google.com/file/d/1qPtU475_d99zTYYUzCQOBzA2r9ZtSZCU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy USA - Mystic Quest (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20USA%20-%20Mystic%20Quest%20%28Japan%29.png",
    size: "352 KB",
    link1: "https://drive.google.com/file/d/1xXml26FWbDveYLYHjus-bJ3x_FCfnwjX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy V (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20V%20%28USA%29.png",
    size: "1468 KB",
    link1: "https://drive.google.com/file/d/1-ySwnSPJ7j3pbJhp47BP8hYRur1lJxpd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fantasy VI (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20VI%20%28USA%29.png",
    size: "2205 KB",
    link1: "https://drive.google.com/file/d/1k1oVLZ0bOLYYmReN0CHAX_gYmLjl0Mx8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "630 KB",
    link1: "https://drive.google.com/file/d/1CgqSXz61TJlbIuFpMIrAHaqjliVMSp9L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight (ESP) - Sin Censura -",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "633 KB",
    link1: "https://drive.google.com/file/d/126qslyG-jYsLj0wWKu2on8Op1Nic70-S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%20%28USA%29.png",
    size: "630 KB",
    link1: "https://drive.google.com/file/d/1gItuBojfwDpWmDLoNKPNEcegL8ozP1Wr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight (USA) (Capcom Town)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "630 KB",
    link1: "https://drive.google.com/file/d/1_nZSrviulIStIQKc0H4ZECFIAIIB7wd-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "630 KB",
    link1: "https://drive.google.com/file/d/1qgSbR1YYgjJx2-9N8W5roM2KMVvwhgOP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight 2 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%202%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "783 KB",
    link1: "https://drive.google.com/file/d/1h_XI2sT0Bvjwo8NMM0h4TPKdSzWlR-JY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%202%20%28USA%29.png",
    size: "783 KB",
    link1: "https://drive.google.com/file/d/1stSDmarMr0fXmSk01J9D_Hdld5aKVyeu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight 2 (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%202%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "783 KB",
    link1: "https://drive.google.com/file/d/1qfQvOxnkjmsag8Yove88M-Ig60dy9q25/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight 3 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%203%20%28USA%29%20%28Beta%29.png",
    size: "1790 KB",
    link1: "https://drive.google.com/file/d/1PySzffR3cO53dJLZXR0vuAx8F5qovAsL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight 3 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%203%20%28USA%29.png",
    size: "1790 KB",
    link1: "https://drive.google.com/file/d/1fkPvADWlwmtprRz2GmD69Afc9iwvjvyI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight 3 (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%203%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "1790 KB",
    link1: "https://drive.google.com/file/d/1iolfGv67i6p_HHggaw6f_am8QCZaKJnY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight Guy (ESP) - Sin Censura -",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "642 KB",
    link1: "https://drive.google.com/file/d/1vatp-vTyIM1lSAxepdKcFLUz3hsV_Sl4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Fight Guy (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fight%20Guy%20%28USA%29.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/14B3SSeusUIbm7KdSUFPYzIXfkv-3qutV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire Emblem - Thracia 776 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Fire%20Emblem%20-%20Thracia%20776%20%28USA%29.png",
    size: "2857 KB",
    link1: "https://drive.google.com/file/d/1CcHsqdVvBWvgEaJW90gzq73xlGnAhuLK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire Risker (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "412 KB",
    link1: "https://drive.google.com/file/d/1aCX5RlrcnovjgrqYsyIqvyYFYjrcBpki/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire Strike (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "412 KB",
    link1: "https://drive.google.com/file/d/1sisb9vEJp4ds9hSEXYvMKDRa1QrCElFl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Firepower 2000 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Firepower%202000%20%28USA%29.png",
    size: "475 KB",
    link1: "https://drive.google.com/file/d/14ppJSZCkwNmsaD-FYwl-AxXTk-FGJi6t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Firepower 2000 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Firepower%202000%20%28USA%29.png",
    size: "475 KB",
    link1: "https://drive.google.com/file/d/1lKa8u5LhIckhnh3rYUIzyleEDVpTo5E0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FireStriker (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/FireStriker%20%28USA%29.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/1Bb7haVZPwj4c7JmeKWSSpBzCYcU7OxQC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "First Samurai (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/First%20Samurai%20%28USA%29.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1UjQ4Ma3DYz8jmTujia2NqCcprwjoBQ4n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flashback - The Quest for Identity (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Flashback%20-%20The%20Quest%20for%20Identity%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "1162 KB",
    link1: "https://drive.google.com/file/d/1wOKdaTrz6ckiMC2wtjVM8tKgijjUkucG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flashback - The Quest for Identity (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Flashback%20-%20The%20Quest%20for%20Identity%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "1165 KB",
    link1: "https://drive.google.com/file/d/1mb3tUzbgu7Q20RROhSvMjdhfo0YV-Tg0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flintstones, The (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Flintstones%2C%20The%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1253 KB",
    link1: "https://drive.google.com/file/d/1S_EO8gZE_cVcU1CjFzCRbm-aj7VdvRk_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flintstones, The - The Treasure of Sierra Madrock (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Flintstones%2C%20The%20-%20The%20Treasure%20of%20Sierra%20Madrock%20%28USA%29.png",
    size: "830 KB",
    link1: "https://drive.google.com/file/d/1Pyu_QwrxpjrDaFQ-kZ4_uE5zrqzy2V13/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Football Fury (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Football%20Fury%20%28USA%29.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1i_JO3WD8wybZAmUoPAaICvMVUTOh-kNb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Foreman for Real (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Foreman%20For%20Real%20%28USA%29.png",
    size: "1777 KB",
    link1: "https://drive.google.com/file/d/1GNInFkogxlTNOUMcJjFdLcyBcpSnccvV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frank Thomas Big Hurt Baseball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Frank%20Thomas%20Big%20Hurt%20Baseball%20%28USA%29.png",
    size: "1935 KB",
    link1: "https://drive.google.com/file/d/1AT5PnhyZtFdWwgMjigj8AaYBv4fFcsxn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frantic Flea (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Frantic%20Flea%20%28USA%29.png",
    size: "1227 KB",
    link1: "https://drive.google.com/file/d/17abYLIoZ7ZBZyH6KUwAFwbbAMhcaDcAM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Frogger%20%28USA%29.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1UJ-JcRCatTua_DF1D1gAmHHH4MxFuvW7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Frogger%20%28USA%29.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1qNgkaqMqUrXpkxyYyp98T5osjI8maNPa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Front Mission (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Front%20Mission%20%28Japan%29%20%28Rev%201%29.png",
    size: "2237 KB",
    link1: "https://drive.google.com/file/d/1_0_GUdldgbh0rEX7vJVSaZof6VTCMssP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Full Throttle - All-American Racing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Full%20Throttle%20-%20All-American%20Racing%20%28USA%29.png",
    size: "687 KB",
    link1: "https://drive.google.com/file/d/1adshrYjg2cd8cKe31liHD4EmmCKq8430/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fun 'n Games (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Fun%20%27n%20Games%20%28USA%29.png",
    size: "675 KB",
    link1: "https://drive.google.com/file/d/100EMxakPteQO8ptCIuAuH_ebHFqID5GG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fushigi no Dungeon 2 - Fuurai no Shiren (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Fushigi%20no%20Dungeon%202%20-%20Fuurai%20no%20Shiren%20%28Japan%29%20%28Rev%201%29%20%28NP%29.png",
    size: "2496 KB",
    link1: "https://drive.google.com/file/d/1SYmwcAVS98m1PXkj6lPt6fvT98Pxavhm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Futbol Argentino '96 (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1381 KB",
    link1: "https://drive.google.com/file/d/1wQ1NWcj_5Fdoo_2V2J-adtBhap7Ex2oJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Futbol Colombiano '96 (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1380 KB",
    link1: "https://drive.google.com/file/d/1k0as_nvQ8ZeRUGPlwuJOgj8VMVhAUKrH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Futbol Excitante Horrible Oye (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "850 KB",
    link1: "https://drive.google.com/file/d/15mRBAKpBtCJb7LjAwZK3xLjX_6tiDNOh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Genie (USA) (Unl)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1RzpS61QNIq0_ro274Q2cMWaJKT-VQotb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Genie (USA) (Unl) (Alt)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1tRE8cJBZ2xYOcIUk6jqgVKML9HRj15j4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Genie (USA) (v2.0) (Unl)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1k29Jft7R10PAZ1XQXctGtV2KUe-gZk-r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare Goemon 2 - Kiteretsu Shougun Magginesu (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ganbare%20Goemon%202%20-%20Kiteretsu%20Shougun%20Magginesu%20%28Japan%29%20%28Virtual%20Console%29.png",
    size: "1776 KB",
    link1: "https://drive.google.com/file/d/1mflOHu8mPKJYA--lbFMz343ChQkbLsU8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare Goemon 3 - Shishi Juurokubee no Karakuri Manjigatame (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ganbare%20Goemon%203%20-%20Shishi%20Juurokubee%20no%20Karakuri%20Manjigatame%20%28Japan%29%20%28Rev%201%29.png",
    size: "1699 KB",
    link1: "https://drive.google.com/file/d/15WNcHkxS7xV2WUbzFDMKEi4YWEjRFXqg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganpuru - Gunman's Proof (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ganpuru%20-%20Gunman%27s%20Proof%20%28Japan%29%20%28Beta%29.png",
    size: "1224 KB",
    link1: "https://drive.google.com/file/d/10Kuu6jcV_Qb5YdY-G850mQwzNP4eHq9X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Garry Kitchen's Super Battletank - War in the Gulf (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Garry%20Kitchen%27s%20Super%20Battletank%20-%20War%20in%20the%20Gulf%20%28USA%29.png",
    size: "341 KB",
    link1: "https://drive.google.com/file/d/16zD73IwJvMufBEXjxOHMZE5wRa9ndHRb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Garry Kitchen's Super Battletank - War in the Gulf (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Garry%20Kitchen%27s%20Super%20Battletank%20-%20War%20in%20the%20Gulf%20%28USA%29%20%28Rev%201%29.png",
    size: "341 KB",
    link1: "https://drive.google.com/file/d/1ODnJUd7KwL-F4R5OvvY1_Z5VWPW6QpFf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gekitotsu Dangan Jidousha Kessen - Battle Mobile (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Gekitotsu%20Dangan%20Jidousha%20Kessen%20-%20Battle%20Mobile%20%28Japan%29%20%28En%29.png",
    size: "547 KB",
    link1: "https://drive.google.com/file/d/1GvFPDW37cthc5IjSS8NbRs5HJNhO17JD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gemfire (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Gemfire%20%28USA%29.png",
    size: "589 KB",
    link1: "https://drive.google.com/file/d/1zg5jmLSKcDf77gdc2QR75Hm96-Z6meCM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Genghis Khan II - Clan of the Gray Wolf (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Genghis%20Khan%20II%20-%20Clan%20of%20the%20Gray%20Wolf%20%28USA%29.png",
    size: "659 KB",
    link1: "https://drive.google.com/file/d/1onnN3hd97npaPIWvWV9CfPhkWeMUrYf3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "George Foreman's KO Boxing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/George%20Foreman%27s%20KO%20Boxing%20%28USA%29.png",
    size: "755 KB",
    link1: "https://drive.google.com/file/d/1zJAhSafxZlThQ965b17UXCqHrS5kdKXv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "George Foreman's KO Boxing (USA) (Doritos Promo)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/George%20Foreman%27s%20KO%20Boxing%20%28USA%29%20%28Doritos%20Promo%29.png",
    size: "710 KB",
    link1: "https://drive.google.com/file/d/1E6wZNBxkmHoGFFiFG-2Zs0LwyzptdZ_m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "George Foreman's KO Boxing (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/George%20Foreman%27s%20KO%20Boxing%20%28USA%29%20%28Rev%201%29.png",
    size: "755 KB",
    link1: "https://drive.google.com/file/d/1ye8KC-sWW_z0nOypewj9H4G3UZdm1lPD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghost Chaser Densei (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ghost%20Chaser%20Densei%20%28Japan%29.png",
    size: "1345 KB",
    link1: "https://drive.google.com/file/d/1JHVBVWbuZPzRTisrMjHMY4XxgaXgy_6C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghoul Patrol (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ghoul%20Patrol%20%28USA%29.png",
    size: "665 KB",
    link1: "https://drive.google.com/file/d/1F6mgoOwF_K4vHJ1AZ7f_JmvRoQ_zTHBK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghoul Patrol (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ghoul%20Patrol%20%28USA%29.png",
    size: "665 KB",
    link1: "https://drive.google.com/file/d/1LKr-GCLXtV3A3OSX8iSFLEYIhpIlhrjh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Go Go Ackman (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Go%20Go%20Ackman%20%28Japan%29.png",
    size: "736 KB",
    link1: "https://drive.google.com/file/d/1tV0yQOBA1GoixuOjCJ4ta_sxSsQWHcOJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Goal! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Goal%21%20%28USA%29.png",
    size: "504 KB",
    link1: "https://drive.google.com/file/d/1kbzB7CNTE5JexLabGPkVrlz24nVmHaoj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gods (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Gods%20%28USA%29.png",
    size: "580 KB",
    link1: "https://drive.google.com/file/d/1X9pPMd05evEia0d2d2qUyVQUUuhkDXTI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Goof Troop (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Goof%20Troop%20%28USA%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1H2hE9HMxpoU4qg0qWB_uTpUSWdrA9EU-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Goof Troop (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Goof%20Troop%20%28USA%29.png",
    size: "339 KB",
    link1: "https://drive.google.com/file/d/1KSHFftb8Q7kb7lZrCAdcoHgkvitLfnn6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gourmet Squadron Barayarou (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1146 KB",
    link1: "https://drive.google.com/file/d/1PfZNq9qCS0n6TV7DdL8aQa_NHZcktyP6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GP-1 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/GP-1%20%28USA%29.png",
    size: "607 KB",
    link1: "https://drive.google.com/file/d/1sHtAHja-pGZtU7i1NT1Bte9IoVusQNP7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GP-1 - Part II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/GP-1%20-%20Part%20II%20%28USA%29.png",
    size: "995 KB",
    link1: "https://drive.google.com/file/d/1ClzpJ27OOvnCKSDhZVs7vyHoksGyKQmt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gradius III (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Gradius%20III%20%28USA%29.png",
    size: "425 KB",
    link1: "https://drive.google.com/file/d/1JNeKL4EfleFHcYzM9EdD3GFUMP4bCyCe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gradius III (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Gradius%20III%20%28USA%29.png",
    size: "425 KB",
    link1: "https://drive.google.com/file/d/1nGg1oslVhifYDiVYKXJyHcrTcJ2UuqyS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Circus Mystery Starring Mickey & Minnie, The (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "946 KB",
    link1: "https://drive.google.com/file/d/1_EIrGS-9v6qrigKaJZ3qEDiMaxflp1Vz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Waldo Search, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Great%20Waldo%20Search%2C%20The%20%28USA%29.png",
    size: "271 KB",
    link1: "https://drive.google.com/file/d/1W1njen8pDXpVDKOSPCicHkMxNdR3cjm5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GunForce (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/GunForce%20%28USA%29.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/1AJF37PPWwc5GNs8JWgKE7jE_QwFa4bYg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gunforce - Battle Fire Engulfed Terror Island (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/GunForce%20-%20Battle%20Fire%20Engulfed%20Terror%20Island%20%28Europe%29%20%28Proto%29.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/13NPgmCMdTlT2nqEJxJWx1JqVTM5GeSah/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hagane - The Final Conflict (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hagane%20-%20The%20Final%20Conflict%20%28USA%29.png",
    size: "1180 KB",
    link1: "https://drive.google.com/file/d/1glB4T7MZgFIqQV6RE7rCAOVakR4jOHZj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "HAL's Hole in One Golf (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/HAL%27s%20Hole%20in%20One%20Golf%20%28USA%29.png",
    size: "716 KB",
    link1: "https://drive.google.com/file/d/1oRPfK8U9KdT2Kozd6REmamDeh75zFfAk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hameln no Violin Hiki (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hameln%20no%20Violin%20Hiki%20%28Japan%29.png",
    size: "815 KB",
    link1: "https://drive.google.com/file/d/1PLLAAPO2A8K7xoEi70hqk9kV6fUZLny8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hammer Lock Wrestling (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hammer%20Lock%20Wrestling%20%28USA%29.png",
    size: "1088 KB",
    link1: "https://drive.google.com/file/d/1ZAl065ymtYYnk6rO7suhyMF9rfPvaYTS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "HardBall III (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/HardBall%20III%20%28USA%29.png",
    size: "946 KB",
    link1: "https://drive.google.com/file/d/1frdUYAYIO6-G2UYAZm0j0DREe2POyZ0l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harley's Humongous Adventure (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Harley%27s%20Humongous%20Adventure%20%28USA%29.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/16kScCYQ0BBU99JQMytt20EbPsTzzuZza/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harvest Moon (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Harvest%20Moon%20%28USA%29.png",
    size: "906 KB",
    link1: "https://drive.google.com/file/d/1CD7mYr9IV3fQbXyfcNln7gWHmheFZt_g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harvest Moon (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Harvest%20Moon%20%28USA%29.png",
    size: "906 KB",
    link1: "https://drive.google.com/file/d/1hzP_bZfnY5HoS9H71uepCDOtv8HMKN1H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Head-On Soccer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Head-On%20Soccer%20%28USA%29.png",
    size: "799 KB",
    link1: "https://drive.google.com/file/d/19yqZRsF8ZIVUmN0m3a8yy0maNliwJFSX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hebereke's Popoon (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hebereke%27s%20Popoon%20%28Europe%29.png",
    size: "563 KB",
    link1: "https://drive.google.com/file/d/1XQfMKpyyzEIuDNorAQ93CYpTU3PYg_nz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hind Strike (USA) (Homebrew)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "358 KB",
    link1: "https://drive.google.com/file/d/1eWbTO9VJpIZZNfUK3hDsHPiwkaZrKoBa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hit the Ice - VHL - The Official Video Hockey League (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hit%20the%20Ice%20-%20VHL%20-%20The%20Official%20Video%20Hockey%20League%20%28USA%29.png",
    size: "262 KB",
    link1: "https://drive.google.com/file/d/1MyTxceR4t7xxKWatlOoa2mMXZO9exHxl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Holy Umbrella - Dondera no Mubou!! (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Holy%20Umbrella%20-%20Dondera%20no%20Mubou%21%21%20%28Japan%29.png",
    size: "1683 KB",
    link1: "https://drive.google.com/file/d/1UScmS-Axs5H1hqmZgxZ_0I36y08ZXBzv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Alone (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Home%20Alone%20%28USA%29.png",
    size: "268 KB",
    link1: "https://drive.google.com/file/d/1rsD148R2Iq2kq5_er1hpaYPWpQ6ehiMc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Alone (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Home%20Alone%20%28USA%29.png",
    size: "268 KB",
    link1: "https://drive.google.com/file/d/1fhpToAPy7xQvyRuobmvZ-DoHHO115klD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Alone 2 - Lost in New York (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Home%20Alone%202%20-%20Lost%20in%20New%20York%20%28USA%29.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/12Sc4C0IJBNE9U7pj4pYBiL209O0sD947/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Alone 2 - Lost in New York (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Home%20Alone%202%20-%20Lost%20in%20New%20York%20%28USA%29.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/1zH30sHf8EDAmW3RBlPYfqg6RXSWFiAsM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Improvement - Power Tool Pursuit! (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Home%20Improvement%20-%20Power%20Tool%20Pursuit%21%20%28USA%29.png",
    size: "796 KB",
    link1: "https://drive.google.com/file/d/1sfS06Pt2Dj2Ocwdb95-a-0Sv0sE_llxT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Improvement - Power Tool Pursuit! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Home%20Improvement%20-%20Power%20Tool%20Pursuit%21%20%28USA%29.png",
    size: "796 KB",
    link1: "https://drive.google.com/file/d/1347VrrXzW8l33vZE04x_hlNz2DcUP8ik/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hook (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hook%20%28USA%29%20%28Beta%29.png",
    size: "484 KB",
    link1: "https://drive.google.com/file/d/1mHi_tQukGsf8vUYpHOae9QoLOmD5dDw7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hook (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hook%20%28USA%29.png",
    size: "483 KB",
    link1: "https://drive.google.com/file/d/1KdK53F7S0OXItOs53qX7iEQO8wjCeBlQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hourai Gakuen no Bouken! - Tenkousei Scramble (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hourai%20Gakuen%20no%20Bouken%21%20-%20Tenkousei%20Scramble%20%28Japan%29.png",
    size: "1585 KB",
    link1: "https://drive.google.com/file/d/1483VAEAAew7f4JYW6YEvepE8oNkz8d9v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunt for Red October, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hunt%20for%20Red%20October%2C%20The%20%28USA%29.png",
    size: "361 KB",
    link1: "https://drive.google.com/file/d/1uuor7nlrfk8BS_zgbFEly-ViBznZBO5v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hurricanes (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hurricanes%20%28USA%29.png",
    size: "668 KB",
    link1: "https://drive.google.com/file/d/1y3I7HcFLzgJf3EYvq4-BmdhLr_A6BcTB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hurricanes (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hurricanes%20%28USA%29.png",
    size: "668 KB",
    link1: "https://drive.google.com/file/d/1kimrcynQ5M9Vs5OA8-YlQNqtZzzepp42/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hyper V-Ball (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hyper%20V-Ball%20%28USA%29.png",
    size: "582 KB",
    link1: "https://drive.google.com/file/d/1SjnI7YHOnTfcUxRsHO0Z8z_823Cp-hFt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hyper V-Ball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Hyper%20V-Ball%20%28USA%29.png",
    size: "584 KB",
    link1: "https://drive.google.com/file/d/1_bgj7FvDGBm4acwxMIh8brrXe9b-jt5D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "HyperZone (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/HyperZone%20%28USA%29.png",
    size: "334 KB",
    link1: "https://drive.google.com/file/d/1ND4RAcemM3R_b7Fux7lihD4iY_0OiGCi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ignition Factor, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ignition%20Factor%2C%20The%20%28USA%29.png",
    size: "619 KB",
    link1: "https://drive.google.com/file/d/1K6hVUx1x7dTzEEUCCioxNX8ozXkbQ2Fe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ihatov Monogatari (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ihatov%20Monogatari%20%28Japan%29.png",
    size: "725 KB",
    link1: "https://drive.google.com/file/d/1A9sNGpzp1C2Id_ooOlhAPnM-PubMk3Nq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Illusion of Gaia (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Illusion%20of%20Gaia%20%28USA%29.png",
    size: "1617 KB",
    link1: "https://drive.google.com/file/d/1zwexJquDqXQ6vn4SGJqpfie0rmWaO9qR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ilusion of Time (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1614 KB",
    link1: "https://drive.google.com/file/d/1_RVWVO2b6v9B3PtWRxTWZqo2rXi75P6p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Imperium (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Imperium%20%28USA%29.png",
    size: "536 KB",
    link1: "https://drive.google.com/file/d/1-wjaPThhAzMH3WAykkNvKKiC4gM-Bbj5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Incantation (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Incantation%20%28USA%29.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1hNTQv2GsAag-ATaYMznG2lC-47hgaRX0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Incredible Crash Dummies, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Incredible%20Crash%20Dummies%2C%20The%20%28USA%29.png",
    size: "739 KB",
    link1: "https://drive.google.com/file/d/1Jfn-o2ej3fz03VSSg4CARwfTB9D5nyNq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Incredible Hulk, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Incredible%20Hulk%2C%20The%20%28USA%29.png",
    size: "978 KB",
    link1: "https://drive.google.com/file/d/1Fyxc68IFL4jaFl_rONUpxAzZuZG9pYL1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indiana Jones' Greatest Adventures (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Indiana%20Jones%27%20Greatest%20Adventures%20%28USA%29.png",
    size: "1633 KB",
    link1: "https://drive.google.com/file/d/1UAz6wJSp0Fk917OvHn_F494d-buAxFW7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inindo - Way of the Ninja (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Inindo%20-%20Way%20of%20the%20Ninja%20%28USA%29.png",
    size: "560 KB",
    link1: "https://drive.google.com/file/d/1bXodVbm8GgTX7gCgRkmxwc8Qjj3YF0tq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inindo Way of the Ninja (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Inindo%20-%20Way%20of%20the%20Ninja%20%28USA%29.png",
    size: "559 KB",
    link1: "https://drive.google.com/file/d/1IijBynxki1N9-mf9za9yilOsy7Y9hPl_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inspector Gadget (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Inspector%20Gadget%20%28USA%29.png",
    size: "476 KB",
    link1: "https://drive.google.com/file/d/1Pp7qZB-oJNX7nEKUIsm_G22rDAdSyRdr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inspector Gadget (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Inspector%20Gadget%20%28USA%29.png",
    size: "476 KB",
    link1: "https://drive.google.com/file/d/1qQqoa5hhC6eDCFyOIbxLW3AhbTVBInlX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Superstar Soccer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/International%20Superstar%20Soccer%20%28USA%29.png",
    size: "684 KB",
    link1: "https://drive.google.com/file/d/1R375JZSsIermfn1CGo-cvnIqLZgt-QeA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Superstar Soccer Deluxe (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/International%20Superstar%20Soccer%20Deluxe%20%28USA%29.png",
    size: "1466 KB",
    link1: "https://drive.google.com/file/d/133zxQq2wrizU8sIZzQNVF6Qfm-8tFreA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Tennis Tour (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/International%20Tennis%20Tour%20%28USA%29.png",
    size: "720 KB",
    link1: "https://drive.google.com/file/d/1Uj0oSaLx3zP7dCipO6EpS1-RDooUk1NG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Irem Skins Game, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Irem%20Skins%20Game%2C%20The%20%28USA%29.png",
    size: "465 KB",
    link1: "https://drive.google.com/file/d/1poxy4Ps7ArUTVUSTGCHNMgRwU60may8r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Irem Skins Game, The (USA) (Arcade)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Irem%20Skins%20Game%2C%20The%20%28USA%29%20%28Arcade%29.png",
    size: "468 KB",
    link1: "https://drive.google.com/file/d/1wAoY6a42BHgd8LG2dVZSCbvrDswVaIHK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Iron Commando (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Iron%20Commando%20%28Europe%29%20%28Proto%29%20%5Bb%5D.png",
    size: "960 KB",
    link1: "https://drive.google.com/file/d/1lQCJRm5J4YGCBx8VkW8Mh9NPDDtVbA9_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Itchy & Scratchy Game, The (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "588 KB",
    link1: "https://drive.google.com/file/d/1o2Zme5AitBIHot9N5ejAO3ECy3ZT8ihn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Izzy's Quest for the Olympic Rings (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Izzy%27s%20Quest%20for%20the%20Olympic%20Rings%20%28USA%29%20%28Beta%29.png",
    size: "1058 KB",
    link1: "https://drive.google.com/file/d/1w7bJcwm7vwuomF__YxOLyCGVZ3ADUZPa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Izzy's Quest for the Olympic Rings (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Izzy%27s%20Quest%20for%20the%20Olympic%20Rings%20%28USA%29.png",
    size: "1058 KB",
    link1: "https://drive.google.com/file/d/1tTbOX8Etpw6BL4SX4RrypR8k2lCjYJdd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "J.R.R. Tolkien's The Lord of the Rings - Volume 1 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/J.R.R.%20Tolkien%27s%20The%20Lord%20of%20the%20Rings%20-%20Volume%201%20%28USA%29.png",
    size: "742 KB",
    link1: "https://drive.google.com/file/d/1h4PvlHR43wyq3Tl_Vkke5-090KZepyqQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jack Nicklaus Golf (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jack%20Nicklaus%20Golf%20%28USA%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/19N_D7BDeP6bpMhQSS3p5lvcbjuQShbSe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Bond Jr (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/James%20Bond%20Jr%20%28USA%29.png",
    size: "354 KB",
    link1: "https://drive.google.com/file/d/1ref18aMbBszXC3ngWHcbYZmg43wmNkxf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Bond Jr. (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/James%20Bond%20Jr%20%28USA%29.png",
    size: "354 KB",
    link1: "https://drive.google.com/file/d/1iMiIhBhilNYQtxAY5JPkLYFpFoCWtlSB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Pond 3 - Operation Starfish (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "970 KB",
    link1: "https://drive.google.com/file/d/1CQEDNRMx4tEYZag3WlfJKtv7T7TVh7MA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jelly Boy (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jelly%20Boy%20%28Europe%29.png",
    size: "685 KB",
    link1: "https://drive.google.com/file/d/1vMzMadJ7dD-b6Gn8i5S-8xTx-ZIUFzZw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeopardy! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jeopardy%21%20%28USA%29.png",
    size: "346 KB",
    link1: "https://drive.google.com/file/d/171Sv9CsiZRQkLCkOkMyqt9JW189SnYoV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeopardy! - Deluxe Edition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jeopardy%21%20-%20Deluxe%20Edition%20%28USA%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1ERZOV24EfGeD_JUn_77V8uwEjkkX_t5A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeopardy! - Sports Edition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jeopardy%21%20-%20Sports%20Edition%20%28USA%29.png",
    size: "230 KB",
    link1: "https://drive.google.com/file/d/1pF7-pAhDl0TNFHFP4CKjuKAek03VPO_J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jikkyou World Soccer 2 - Fighting Eleven (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jikkyou%20World%20Soccer%202%20-%20Fighting%20Eleven%20%28Japan%29%20%28Beta%29.png",
    size: "2424 KB",
    link1: "https://drive.google.com/file/d/1scBhK8mtUYFCEYO0q1gfKcgcHO4yLy4K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jim Lee's WildC.A.T.S - Covert-Action-Teams (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jim%20Lee%27s%20WildC.A.T.S%20-%20Covert-Action-Teams%20%28USA%29.png",
    size: "1352 KB",
    link1: "https://drive.google.com/file/d/1dMfadmgdFXKbfbTohiAHYdKf5ni-tdEe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jim Power - The Lost Dimension in 3D (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jim%20Power%20-%20The%20Lost%20Dimension%20in%203D%20%28USA%29.png",
    size: "676 KB",
    link1: "https://drive.google.com/file/d/1CQ2Tvjnp_OItszq5C0_G97HAwzHkeqDo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jim Power - The Lost Dimension in 3D (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jim%20Power%20-%20The%20Lost%20Dimension%20in%203D%20%28USA%29.png",
    size: "676 KB",
    link1: "https://drive.google.com/file/d/1bdgaP6JbBapGzUxa77Asd7wGe78lH5IM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jimmy Connors Pro Tennis Tour (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jimmy%20Connors%20Pro%20Tennis%20Tour%20%28USA%29.png",
    size: "325 KB",
    link1: "https://drive.google.com/file/d/1Et8UNbo4Dtv8Ag2aKp_dKL-UMvMfNIJc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jimmy Houston's Bass Tournament U.S.A. (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jimmy%20Houston%27s%20Bass%20Tournament%20U.S.A.%20%28USA%29.png",
    size: "696 KB",
    link1: "https://drive.google.com/file/d/1rIDBXFXxxMZ-OiA3A1RjhHBP5OYGyDI6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jissen Bass Fishing Hisshouhou in USA (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jissen%20Bass%20Fishing%20Hisshouhou%20in%20USA%20%28Japan%29.png",
    size: "755 KB",
    link1: "https://drive.google.com/file/d/1Lw7TJpefHWcR9YMucGPqj3a_830_5Q_i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe & Mac (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "614 KB",
    link1: "https://drive.google.com/file/d/1I9HnQftqtdv1viEbnC4k2INcBsRrHHd-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe & Mac - Caveman Ninja (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "611 KB",
    link1: "https://drive.google.com/file/d/1LqKpP_Q9vZ9iWup3oxk3xrZmiU3AvrpW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe & Mac 2 - Lost in the Tropics (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "722 KB",
    link1: "https://drive.google.com/file/d/1vLbOEtfKWCJkE8H68xwnED-gqLBfBFNf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe & Mac 2 Lost in the Tropics (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "722 KB",
    link1: "https://drive.google.com/file/d/1gdhhtW-dFefPU7cIGn1Xnq7fjIExrD4y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "John Madden Football '93 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/John%20Madden%20Football%20%2793%20%28USA%29.png",
    size: "506 KB",
    link1: "https://drive.google.com/file/d/1fZInB0t_D5w19sLYgurMDism9z0N75c3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "John Madden Football '93 (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/John%20Madden%20Football%20%2793%20%28USA%29%20%28Rev%201%29.png",
    size: "475 KB",
    link1: "https://drive.google.com/file/d/1SqoShgMQ0buMrX130zdQcw4i4r7NM-nv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "John Madden Football (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/John%20Madden%20Football%20%28USA%29.png",
    size: "243 KB",
    link1: "https://drive.google.com/file/d/1b_kwDX9iMZcAWiaGujsoUdDOvy3xk7qZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JoJo no Kimyou na Bouken (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/JoJo%20no%20Kimyou%20na%20Bouken%20%28Japan%29.png",
    size: "665 KB",
    link1: "https://drive.google.com/file/d/1uoai1HjSNkqbDa1fBzZmMai5Vrmnhd0s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JRR Tolkien's The Lord of the Rings - Volume 1 (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "742 KB",
    link1: "https://drive.google.com/file/d/1sBje8Zf1bZVHmbZtvC4C9LA-Sq3muDIY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Judge Dredd (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Judge%20Dredd%20%28USA%29.png",
    size: "1392 KB",
    link1: "https://drive.google.com/file/d/1CTbWeQ9u0PhfDOU5hjwAcD_pDk0Q6FWD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Judge Dredd (USA) (Sample)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Judge%20Dredd%20%28USA%29%20%28Sample%29.png",
    size: "1284 KB",
    link1: "https://drive.google.com/file/d/194SdOQjsvb1Pjz7PS93qYHQjuFfoMvWV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Book, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jungle%20Book%2C%20The%20%28USA%29.png",
    size: "1267 KB",
    link1: "https://drive.google.com/file/d/1a2yveZZdakPLlEpTaBU067r1UN88RB3L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Strike (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jungle%20Strike%20%28USA%29.png",
    size: "1228 KB",
    link1: "https://drive.google.com/file/d/1ptnfcmoFAmfGWhFACgJmnCSDnpr_d2nm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jurassic%20Park%20%28USA%29%20%28Rev%201%29.png",
    size: "1069 KB",
    link1: "https://drive.google.com/file/d/1ifLzMiuAciJMoSMhjLi1hEICUSmA7yls/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jurassic%20Park%20%28USA%29.png",
    size: "1071 KB",
    link1: "https://drive.google.com/file/d/1mFlQKZ5huq4z3JBIPzeQOOkJib6H_XR2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jurassic%20Park%20%28USA%29%20%28Rev%201%29.png",
    size: "1067 KB",
    link1: "https://drive.google.com/file/d/1r6MLafDROE5I9L8ZWtCL2yBpdn_M9YUo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park 2 - The Chaos Continues (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1344 KB",
    link1: "https://drive.google.com/file/d/1_QEBJ7l5qD2Xn6GRcKJOBwelQu3DiDNe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park Part 2 - The Chaos Continues (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jurassic%20Park%20Part%202%20-%20The%20Chaos%20Continues%20%28USA%29%20%28En%2CFr%2CDe%2CIt%29.png",
    size: "1344 KB",
    link1: "https://drive.google.com/file/d/1qb1Mo6vPMkVxm09iUeKy6WkDhic-uVOZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park Part 2 - The Chaos Continues (USA) (En,Fr,De,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jurassic%20Park%20Part%202%20-%20The%20Chaos%20Continues%20%28USA%29%20%28En%2CFr%2CDe%2CIt%29.png",
    size: "1344 KB",
    link1: "https://drive.google.com/file/d/1Zq8m6zRFBkx3S8ouzRkJlgk4Rqsf0dMV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Justice League Task Force (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Justice%20League%20Task%20Force%20%28USA%29.png",
    size: "1515 KB",
    link1: "https://drive.google.com/file/d/1igRTauzvB70DEKr5hW-h-H_fVp8rLWw4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jutei Senki (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jutei%20Senki%20%28Japan%29.png",
    size: "813 KB",
    link1: "https://drive.google.com/file/d/1zaVOaCaDOLw6wmwQ9gTFw41CB4HfxTJx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ka-blooey (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ka-Blooey%20%28USA%29.png",
    size: "191 KB",
    link1: "https://drive.google.com/file/d/1WUwHSeM8pYJvFAmPpQLdKijvk13eEgxX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawasaki Caribbean Challenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kawasaki%20Caribbean%20Challenge%20%28USA%29.png",
    size: "810 KB",
    link1: "https://drive.google.com/file/d/16Dw5BcdNT1OLeo33IKM57US0q2YQf8_C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawasaki Superbike Challenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kawasaki%20Superbike%20Challenge%20%28USA%29.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/1Z366c6takIss0W9UerAbGiux9RWUFBoO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ken Griffey Jr. Presents Major League Baseball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ken%20Griffey%20Jr.%20Presents%20Major%20League%20Baseball%20%28USA%29.png",
    size: "937 KB",
    link1: "https://drive.google.com/file/d/1v2VbsglUfppVrs4P64nnGDabeSFuKbTW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ken Griffey Jr. Presents Major League Baseball (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ken%20Griffey%20Jr.%20Presents%20Major%20League%20Baseball%20%28USA%29%20%28Rev%201%29.png",
    size: "992 KB",
    link1: "https://drive.google.com/file/d/1AJSAlu93IMOappj_OBj9-zV-jg9_hUs6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ken Griffey Jr.'s Winning Run (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ken%20Griffey%20Jr.%27s%20Winning%20Run%20%28USA%29.png",
    size: "2634 KB",
    link1: "https://drive.google.com/file/d/1RBrmmi9mvYkHeHfrbmEweQdKdwaVjYfh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kendo Rage (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kendo%20Rage%20%28USA%29.png",
    size: "469 KB",
    link1: "https://drive.google.com/file/d/13g0LYRTp8z2wvflmcbhE1GhioQb8T53J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kendo Rage (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kendo%20Rage%20%28USA%29.png",
    size: "457 KB",
    link1: "https://drive.google.com/file/d/1fKLFQev-d0Lyqj5AeVSU4j-wzfncaTjs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kick Off 3 - European Challenge (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kick%20Off%203%20-%20European%20Challenge%20%28Europe%29%20%28Beta%29.png",
    size: "427 KB",
    link1: "https://drive.google.com/file/d/1uZ3ztoED0Uy-U_BcTapa33PalS4ne1en/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kid Klown in Crazy Chase (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kid%20Klown%20in%20Crazy%20Chase%20%28USA%29.png",
    size: "707 KB",
    link1: "https://drive.google.com/file/d/1QSX2jK9j_LQ3hETbUwXoe47XEwFszzFu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kidou Senshi Gundam F91 - Formula Senki 0122 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kidou%20Senshi%20Gundam%20F91%20-%20Formula%20Senki%200122%20%28Japan%29.png",
    size: "545 KB",
    link1: "https://drive.google.com/file/d/11MFIqfiKN00pfluxAhfULPTHgVc7sc8z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kikou Keisatsu Metal Jack (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kikou%20Keisatsu%20Metal%20Jack%20%28Japan%29.png",
    size: "396 KB",
    link1: "https://drive.google.com/file/d/1dw71ut0ErsAGR-hK3-tcZhAbJidvmGcx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Killer Instinct (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Killer%20Instinct%20%28USA%29.png",
    size: "3133 KB",
    link1: "https://drive.google.com/file/d/1Hjp-1iqgCEHcMacu23xUAmWO3c2HrpFF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Killer Instinct (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Killer%20Instinct%20%28USA%29%20%28Rev%201%29.png",
    size: "3132 KB",
    link1: "https://drive.google.com/file/d/1n8k0A7S2s4sK90SxQEeJxkUZCMPfKEST/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King Arthur & The Knights of Justice (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1959 KB",
    link1: "https://drive.google.com/file/d/1YAUT0iJ3wO8P9eximklhgwdd6_19ajSU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King Arthur's World (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/King%20Arthur%27s%20World%20%28USA%29%20%28Beta%29%20%281992-08-21%29.png",
    size: "370 KB",
    link1: "https://drive.google.com/file/d/1qRf9WaVdBDUe2Eng2-9GthZyLbKx7FuC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King Arthur's World (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/King%20Arthur%27s%20World%20%28USA%29.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1WXYFEX4Z-5oaCe3RryWe3O891bwiDdIi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King of Dragons (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/King%20of%20Dragons%20%28USA%29.png",
    size: "1610 KB",
    link1: "https://drive.google.com/file/d/1KaRihcWrnoNHxQkNN7W9uvso1QL43yh2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King of Dragons (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/King%20of%20Dragons%20%28USA%29.png",
    size: "1251 KB",
    link1: "https://drive.google.com/file/d/16ERxk3AWnR2dyfEGXgwUd09R9f7TmEgS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King of the Monsters (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/King%20of%20the%20Monsters%20%28USA%29.png",
    size: "596 KB",
    link1: "https://drive.google.com/file/d/1OeRQiZUxkojf848EggUi_MMuImJJbq8a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King of the Monsters (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/King%20of%20the%20Monsters%20%28USA%29.png",
    size: "596 KB",
    link1: "https://drive.google.com/file/d/1VvxFKWySFiwKpmFwSrEV2xVTPn_9JNBT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King of the Monsters 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/King%20of%20the%20Monsters%202%20%28USA%29.png",
    size: "1283 KB",
    link1: "https://drive.google.com/file/d/1_CxMkJ70lqXgHNCFzh0eFsLr6BQCwUfn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby Super Star (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kirby%20Super%20Star%20%28USA%29.png",
    size: "2772 KB",
    link1: "https://drive.google.com/file/d/1sa4GRW5niRo20kALUD-j6hIYvBEmZZX2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby's Avalanche (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kirby%27s%20Avalanche%20%28USA%29.png",
    size: "527 KB",
    link1: "https://drive.google.com/file/d/1tx1ey0LgXX_QPDQlNy6eekYHWv7Lby5m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby's Avalanche (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kirby%27s%20Avalanche%20%28USA%29.png",
    size: "527 KB",
    link1: "https://drive.google.com/file/d/1U4ZkIBUr8lbs9P542xzuFFHOEPbfBAIS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby's Dream Course (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kirby%27s%20Dream%20Course%20%28USA%29.png",
    size: "597 KB",
    link1: "https://drive.google.com/file/d/1C8gpze6ZUWpTACCQ4Na-Tk_cDRutWAYk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby's Dream Course (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kirby%27s%20Dream%20Course%20%28USA%29.png",
    size: "597 KB",
    link1: "https://drive.google.com/file/d/1-OMHRFhWpv7stlmHmAaHI1vP3PTHbeIj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby's Dream Course (USA, Europe) (Virtual Console, Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kirby%27s%20Dream%20Course%20%28USA%2C%20Europe%29%20%28Virtual%20Console%2C%20Switch%20Online%29.png",
    size: "597 KB",
    link1: "https://drive.google.com/file/d/1ha5f83Ho7x-MfoPz-3NjREO2mvD5ZpV_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby's Dream Land 3 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kirby%27s%20Dream%20Land%203%20%28USA%29.png",
    size: "2182 KB",
    link1: "https://drive.google.com/file/d/1TjpZGg-dYgekvugRWQOCyrKFX9gtNWAw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kishin Douji Zenki - Battle Raiden (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kishin%20Douji%20Zenki%20-%20Battle%20Raiden%20%28Japan%29.png",
    size: "1436 KB",
    link1: "https://drive.google.com/file/d/18C5o-xklm4yO7AOvN0Oq6EjlFbsY1iDk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knights of the Round (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Knights%20of%20the%20Round%20%28USA%29.png",
    size: "1038 KB",
    link1: "https://drive.google.com/file/d/1zGryEyHVxD5phpuOCnvsjuInRkGsBPii/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knights of the Round (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Knights%20of%20the%20Round%20%28USA%29.png",
    size: "1038 KB",
    link1: "https://drive.google.com/file/d/1WEKNay3UeAweCco3LNjnuZ6vsinIuXTi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kouryuu no Mimi (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kouryuu%20no%20Mimi%20%28Japan%29.png",
    size: "774 KB",
    link1: "https://drive.google.com/file/d/1dwYDas8FHKEqKMdEoiK_E7uURmMUSQPe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Krusty's Super Fun House (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Krusty%27s%20Super%20Fun%20House%20%28USA%29%20%28Rev%201%29.png",
    size: "319 KB",
    link1: "https://drive.google.com/file/d/1yYvtgdr4CESFnqnydB5tr06izzkytkMe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Krusty's Super Fun House (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Krusty%27s%20Super%20Fun%20House%20%28USA%29.png",
    size: "315 KB",
    link1: "https://drive.google.com/file/d/1w6eUmYod2MbKDWivUjyZzu8hCE53fIKU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Krusty's Super Fun House (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Krusty%27s%20Super%20Fun%20House%20%28USA%29%20%28Rev%201%29.png",
    size: "319 KB",
    link1: "https://drive.google.com/file/d/1-JTesaNtJM7nrniI3Sa0Tv6niG4GeY5z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kyle Petty's No Fear Racing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kyle%20Petty%27s%20No%20Fear%20Racing%20%28USA%29.png",
    size: "1894 KB",
    link1: "https://drive.google.com/file/d/1iN4ECKf9F_9LITFbizuM54POYUhjFz-6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kyuuyaku Megami Tensei (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Kyuuyaku%20Megami%20Tensei%20%28Japan%29%20%28Rev%201%29.png",
    size: "1405 KB",
    link1: "https://drive.google.com/file/d/1oi2ZkdIaLYNcAZLp9tJY3nWwsdn898KM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lagoon (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lagoon%20%28USA%29.png",
    size: "616 KB",
    link1: "https://drive.google.com/file/d/1O9jqNuCfedTtYA7FGoMg6zqrHYEWAMjg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lamborghini American Challenge (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lamborghini%20American%20Challenge%20%28USA%29.png",
    size: "365 KB",
    link1: "https://drive.google.com/file/d/1B8YpYDAuMCOgboOnJLwMFv-w6jfeRtBb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lamborghini American Challenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lamborghini%20American%20Challenge%20%28USA%29.png",
    size: "365 KB",
    link1: "https://drive.google.com/file/d/1wYFI7eIVTzfBeoegeIe_9pBoL1-4lAMh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Laplace no Ma (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Laplace%20no%20Ma%20%28Japan%29.png",
    size: "972 KB",
    link1: "https://drive.google.com/file/d/1gbJWirFxvi88A5m18WHE2RNMrVTT9qAe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Last Action Hero (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Last%20Action%20Hero%20%28USA%29.png",
    size: "446 KB",
    link1: "https://drive.google.com/file/d/1GH2vWBxHYc7GWQYEdcD0Kg8mZLsze5Os/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Last Action Hero (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Last%20Action%20Hero%20%28USA%29.png",
    size: "446 KB",
    link1: "https://drive.google.com/file/d/1HxSYP9wsGTFfatAEWYZiMQuufvR0lejx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Last Bible III (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Last%20Bible%20III%20%28Japan%29.png",
    size: "2213 KB",
    link1: "https://drive.google.com/file/d/1osbcP0vaJ-fH5eDf3OU0JZ4wjDJOhULp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lawnmower Man, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lawnmower%20Man%2C%20The%20%28USA%29.png",
    size: "562 KB",
    link1: "https://drive.google.com/file/d/1tvOY1C9Jw9rQeyHXZ0LfIwaH_VL2XBux/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20%28USA%29%20%28Beta%29.png",
    size: "815 KB",
    link1: "https://drive.google.com/file/d/1zFrVETtjASrpBrVCr-PtsdhrNKQ0N9ba/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20%28USA%29.png",
    size: "815 KB",
    link1: "https://drive.google.com/file/d/1-YNI-b0aVhbZnLZlG43AfB3UtCTluZIi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of the Mystical Ninja, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20of%20the%20Mystical%20Ninja%2C%20The%20%28USA%29.png",
    size: "835 KB",
    link1: "https://drive.google.com/file/d/1cDWKnRrf0L7yZks6EJolFy_WHuBl4Vod/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of the Mystical Ninja, The (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20of%20the%20Mystical%20Ninja%2C%20The%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "835 KB",
    link1: "https://drive.google.com/file/d/12bICk-L8f5H9kPpNmGU5vrbWgLM8_62-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - A Link to the Past (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20A%20Link%20to%20the%20Past%20%28USA%29.png",
    size: "688 KB",
    link1: "https://drive.google.com/file/d/11IAV7NAbhfhhSaGe5Wh5QNR_tUpS2jlT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - A Link to the Past (USA, Europe) (Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20A%20Link%20to%20the%20Past%20%28USA%2C%20Europe%29%20%28Switch%20Online%29.png",
    size: "689 KB",
    link1: "https://drive.google.com/file/d/1Xwryu_chhWrKRo22D-mJItyUsh4DI_2T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lemmings%20%28USA%29%20%28Rev%201%29.png",
    size: "551 KB",
    link1: "https://drive.google.com/file/d/19YWB9hoZHvNzxWqTMX0RLLG4ND9zYAse/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lemmings%20%28USA%29.png",
    size: "551 KB",
    link1: "https://drive.google.com/file/d/12rYSWltzrtmr2iojN9RPsblM0uey6jOi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lemmings%20%28USA%29%20%28Rev%201%29.png",
    size: "551 KB",
    link1: "https://drive.google.com/file/d/1z1-sIc7xOW06CHug59lVC7vZQ5xvOACC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings 2 - The Tribes (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lemmings%202%20-%20The%20Tribes%20%28USA%29.png",
    size: "1044 KB",
    link1: "https://drive.google.com/file/d/101nwn8-m06mPmFgGzc3e8UT3AiMlPnVM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lester the Unlikely (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lester%20the%20Unlikely%20%28USA%29.png",
    size: "663 KB",
    link1: "https://drive.google.com/file/d/1DJwZpJLPKYoAeBycJLip_RaIbVSJ8XPF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lester the Unlikely (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lester%20the%20Unlikely%20%28USA%29.png",
    size: "652 KB",
    link1: "https://drive.google.com/file/d/19Aay1z3ZW5yLwZFlVjYmfLhAEBeebW1l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lethal Enforcers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lethal%20Enforcers%20%28USA%29.png",
    size: "1624 KB",
    link1: "https://drive.google.com/file/d/1hiK-Xj9Vk8SDHLgEgIUeUYQO2ZjMOtbh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lethal Weapon (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lethal%20Weapon%20%28USA%29%20%28Arcade%29.png",
    size: "663 KB",
    link1: "https://drive.google.com/file/d/1Wm6mlHDRSmfZpHRhrJ48vF_5Qja7-K-M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lethal Weapon (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lethal%20Weapon%20%28USA%29.png",
    size: "663 KB",
    link1: "https://drive.google.com/file/d/1_VkUoVZvmSPigZBWym2SOOFH7lxoONGq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lethal Weapon (USA) (Arcade)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lethal%20Weapon%20%28USA%29%20%28Arcade%29.png",
    size: "667 KB",
    link1: "https://drive.google.com/file/d/1uTPqi7OKCFJaKgtsCvRkscjl4o5lc31t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Liberty or Death (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Liberty%20or%20Death%20%28USA%29.png",
    size: "719 KB",
    link1: "https://drive.google.com/file/d/1gKaaGoXJbMPvxjfUJpBUAPe-ul4ncZlz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lion%20King%2C%20The%20%28USA%29.png",
    size: "2102 KB",
    link1: "https://drive.google.com/file/d/14j9Nr3RK5EX8LKBk-S4jXLuYEv5Omoke/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Little Magic (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Little%20Magic%20%28Europe%29%20%28Proto%29.png",
    size: "201 KB",
    link1: "https://drive.google.com/file/d/1GfslTK8u4cT-an38oVfFd0P1FnrGyni1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Live A Live (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Live%20A%20Live%20%28Japan%29.png",
    size: "1689 KB",
    link1: "https://drive.google.com/file/d/1NueByKSTbcK-SKUoS8CjKhcGvioMHkEq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lobo (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lobo%20%28USA%29%20%28Proto%29.png",
    size: "1707 KB",
    link1: "https://drive.google.com/file/d/1j4iWfp62UUjOvfZ7nmElBmUypgAAuD2A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lock On (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lock%20On%20%28USA%29.png",
    size: "308 KB",
    link1: "https://drive.google.com/file/d/1iyW4QOhm0BERcgxqwUwKsGBiz3TcK3Kf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes B-Ball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Looney%20Tunes%20B-Ball%20%28USA%29.png",
    size: "1584 KB",
    link1: "https://drive.google.com/file/d/1S3mNjbMgoMvvV3L8mqWxv1GhyCK6FpCW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lord of Darkness (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lord%20of%20Darkness%20%28USA%29.png",
    size: "533 KB",
    link1: "https://drive.google.com/file/d/1OjF2s0RySfpKjfCtw_8xZrkm4tC-3KI6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lost Vikings 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lost%20Vikings%202%20%28USA%29.png",
    size: "718 KB",
    link1: "https://drive.google.com/file/d/1pRUl0OCSqUoaOHU3TYXpkhJgwRVUnWcs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lost Vikings, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lost%20Vikings%2C%20The%20%28USA%29.png",
    size: "753 KB",
    link1: "https://drive.google.com/file/d/1fPZizKWXqNw9dsV9NV8JGDf1OT6lUGrn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lucky Luke (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lucky%20Luke%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "1045 KB",
    link1: "https://drive.google.com/file/d/1e7ppIVDdwgd-Gu599yLrEDlNEwdrRUAR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lufia & The Fortress of Doom (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "801 KB",
    link1: "https://drive.google.com/file/d/1OvKCjWrlbz0d0m2TJ8HmtnpJNoJBirpY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lufia & the Fortress of Doom (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "800 KB",
    link1: "https://drive.google.com/file/d/18IKIY3b19koylSa2ZTAGpj97wALB_XX2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lufia (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lufia%20%28Europe%29.png",
    size: "2156 KB",
    link1: "https://drive.google.com/file/d/1wACkk-sAthF6EgO3oOF2YISgf52ZcX_c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lufia II - Rise of the Sinistrals (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lufia%20II%20-%20Rise%20of%20the%20Sinistrals%20%28USA%29.png",
    size: "2156 KB",
    link1: "https://drive.google.com/file/d/1wJXlKb_D_LXSP0ggVXT4bqV4bDDSY9Ir/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lufia II - Rise of the Sinistrals (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Lufia%20II%20-%20Rise%20of%20the%20Sinistrals%20%28USA%29.png",
    size: "1873 KB",
    link1: "https://drive.google.com/file/d/18EL6o4kAWWLsaKPuOxfh0qYcn51AXk8F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MACS Basic Rifle Marksmanship (USA) (v1.1e) [b]",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "378 KB",
    link1: "https://drive.google.com/file/d/18DVVjT87VDAmsiN4aTtWIZBOb5ODYSsE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL '94 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Madden%20NFL%20%2794%20%28USA%29.png",
    size: "769 KB",
    link1: "https://drive.google.com/file/d/1zyk_vAP-oVRb1bb7YI5maMy1KHs6q9OG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 95 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Madden%20NFL%2095%20%28USA%29.png",
    size: "722 KB",
    link1: "https://drive.google.com/file/d/1Z2A0qIjgxuv9-xlfS34Vx-U_sWRhRAq0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 96 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Madden%20NFL%2096%20%28USA%29.png",
    size: "1070 KB",
    link1: "https://drive.google.com/file/d/1T5k1GCkUJzodUzyVa8QsNjMXp4tZRyCY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 96 (USA) (Sample)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Madden%20NFL%2096%20%28USA%29%20%28Sample%29.png",
    size: "1070 KB",
    link1: "https://drive.google.com/file/d/18RHTWeQ0jSwlT129XAUkRKQbsOP7RZFB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 97 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Madden%20NFL%2097%20%28USA%29.png",
    size: "1110 KB",
    link1: "https://drive.google.com/file/d/1Eez0OhsTPeP7L_HSRUB8BxLCQb9D8MRE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 98 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Madden%20NFL%2098%20%28USA%29.png",
    size: "1179 KB",
    link1: "https://drive.google.com/file/d/1GwX5r9px1WuxwCgs-eT3vnrL37SqoogW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madou Monogatari - Hanamaru Daiyouchienji (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Madou%20Monogatari%20-%20Hanamaru%20Daiyouchienji%20%28Japan%29.png",
    size: "1242 KB",
    link1: "https://drive.google.com/file/d/1noLWs7f1vWietnBLXq036-kq6D9QAK9_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maerchen Adventure Cotton 100% (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Maerchen%20Adventure%20Cotton%20100%25%20%28Japan%29.png",
    size: "842 KB",
    link1: "https://drive.google.com/file/d/10NP3QueKegR_qg6ewdzKtniz1Li-Yw5A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maerchen Adventure Cotton 100% (USA) (Strictly Limited Games)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Maerchen%20Adventure%20Cotton%20100%25%20%28Japan%29.png",
    size: "838 KB",
    link1: "https://drive.google.com/file/d/1WfR_jNRm3Xq0Y5Y_LbfdEBFoGS5RJ7Mz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Boy (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Magic%20Boy%20%28USA%29.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/1UojHLEZxxD3SpZf2ul216IBQbYPLEa0R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Knight Rayearth (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Magic%20Knight%20Rayearth%20%28Japan%29.png",
    size: "867 KB",
    link1: "https://drive.google.com/file/d/1lApWDnNMq89NK_MAj_LBmY3wYkAAVULm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Sword (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Magic%20Sword%20%28USA%29.png",
    size: "531 KB",
    link1: "https://drive.google.com/file/d/1N000rVV6ay3dT4qryos7f9sfDUuPdeOe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magic Sword (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Magic%20Sword%20%28USA%29.png",
    size: "531 KB",
    link1: "https://drive.google.com/file/d/1DCsyPy4-ZKvg03scTx1lFyfWbscaMvEY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Drop (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Magical%20Drop%20%28Japan%29.png",
    size: "618 KB",
    link1: "https://drive.google.com/file/d/1gOGKKZKXiE-FCGh2o2V314gxE_xItKOx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Drop II (USA, Europe) (Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Magical%20Drop%20II%20%28USA%2C%20Europe%29%20%28Switch%20Online%29.png",
    size: "1268 KB",
    link1: "https://drive.google.com/file/d/1QtPdDkFBcWX-3YFxdBTpKq9y4fdaaniP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Pop'n (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Magical%20Pop%27n%20%28Japan%29.png",
    size: "1514 KB",
    link1: "https://drive.google.com/file/d/1K-iHIcfCuwNXfIVS5YjOy5BchscAz_Y3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Quest Starring Mickey Mouse, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Magical%20Quest%20Starring%20Mickey%20Mouse%2C%20The%20%28USA%29.png",
    size: "666 KB",
    link1: "https://drive.google.com/file/d/1uQ-IyM3Hy65p70V4XgNk0ZCl4lKpigJ_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Quest Starring Mickey Mouse, The (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Magical%20Quest%20Starring%20Mickey%20Mouse%2C%20The%20%28USA%29%20%28Rev%201%29.png",
    size: "664 KB",
    link1: "https://drive.google.com/file/d/1tfCn77UN7YEKZn5AtYz9cuJA2YmAmmGq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Majin Tensei (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Majin%20Tensei%20%28Japan%29%20%28Rev%201%29.png",
    size: "1189 KB",
    link1: "https://drive.google.com/file/d/1TKscg1tpepVVQlnUzuFn2W_lxGaxdX1n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Majuu Ou  - King of Demons (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "854 KB",
    link1: "https://drive.google.com/file/d/1COA4xDji3UlIDywi65lFMpuE1no58vH1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Hack 3 (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "779 KB",
    link1: "https://drive.google.com/file/d/1wTsWq08chY3P582SQI7PkDVOH0NswCrW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Is Missing! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mario%20Is%20Missing%21%20%28USA%29.png",
    size: "906 KB",
    link1: "https://drive.google.com/file/d/12LAkLYg5HB1FErhd-ika4kb5FDlAcHBB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Mushroom Kingdom - Hack -  (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "961 KB",
    link1: "https://drive.google.com/file/d/1xzLAq3a_t5x72mTyPnew60ayQgAhN3Wq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Paint (Japan, USA) (En)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mario%20Paint%20%28Japan%2C%20USA%29%20%28En%29.png",
    size: "453 KB",
    link1: "https://drive.google.com/file/d/1X5a4pYOst85EUHrhR0f7Zl-s_hw7HcH0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Treasure Hunt 2 - Hack - (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1798 KB",
    link1: "https://drive.google.com/file/d/1cTPqfArQDaEAIZZSO6_m_itAYPNWkueU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario's Early Years - Fun with Letters (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mario%27s%20Early%20Years%20-%20Fun%20with%20Letters%20%28USA%29.png",
    size: "835 KB",
    link1: "https://drive.google.com/file/d/1r5EobbxC4JmtnMs_-H9ZguBGcwaSNO9A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario's Early Years - Fun with Numbers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mario%27s%20Early%20Years%20-%20Fun%20with%20Numbers%20%28USA%29.png",
    size: "832 KB",
    link1: "https://drive.google.com/file/d/1npOMIJ5XGq8QZAw9NW3h7iXi0wSyMKxw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario's Early Years - Preschool Fun (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mario%27s%20Early%20Years%20-%20Preschool%20Fun%20%28USA%29.png",
    size: "849 KB",
    link1: "https://drive.google.com/file/d/11U98gpwsqrjbPsfNJcD3yiZwWziMuWIU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario's Time Machine (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mario%27s%20Time%20Machine%20%28USA%29.png",
    size: "912 KB",
    link1: "https://drive.google.com/file/d/10ZlJXtlZyhbc_y84fsJkwjdKqeN6bBZE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mark Davis' The Fishing Master (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mark%20Davis%27%20The%20Fishing%20Master%20%28USA%29.png",
    size: "992 KB",
    link1: "https://drive.google.com/file/d/1X6Xrh_I9NyWTLzKJsVc26RE-6kz0_Bup/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marko's Magic Football (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Marko%27s%20Magic%20Football%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "790 KB",
    link1: "https://drive.google.com/file/d/1qD9saiBj-_-LMreLT9nEeWYJgxc6WNUY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marvel Super Heroes - War of the Gems (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Marvel%20Super%20Heroes%20-%20War%20of%20the%20Gems%20%28USA%29%20%28Beta%29.png",
    size: "1282 KB",
    link1: "https://drive.google.com/file/d/1L3UmwzLo3O9tciZS_QninDaJ2dJjDPq1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marvel Super Heroes in War of the Gems (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Marvel%20Super%20Heroes%20in%20War%20of%20the%20Gems%20%28USA%29.png",
    size: "1281 KB",
    link1: "https://drive.google.com/file/d/1g-sOTTZ3JwgVjmYHvoTuFfxg2OYpkbRa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marvelous - Mouhitotsu no Takarajima (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1996 KB",
    link1: "https://drive.google.com/file/d/18sw24En0WTxY1LIQVzSyqZKa-eDf8dYV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mary Shelley's Frankenstein (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mary%20Shelley%27s%20Frankenstein%20%28USA%29%20%28Beta%29.png",
    size: "1092 KB",
    link1: "https://drive.google.com/file/d/1TU19dAZoaZXzKMWozrGHiTlQklCkixY2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mary Shelley's Frankenstein (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mary%20Shelley%27s%20Frankenstein%20%28USA%29.png",
    size: "1082 KB",
    link1: "https://drive.google.com/file/d/1ryiLjuPso4VMa3B2MBPjs-G-bhYpzVV2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mask, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mask%2C%20The%20%28USA%29.png",
    size: "1322 KB",
    link1: "https://drive.google.com/file/d/1BNbTb2N04LNmK9KNQtylRduHSUhP7PcB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Math Blaster - Episode 1 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Math%20Blaster%20-%20Episode%201%20%28USA%29.png",
    size: "466 KB",
    link1: "https://drive.google.com/file/d/1BUzHCTlsUG1YO2R8DL1rTFBuxbHhILdO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maui Mallard in Cold Shadow (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Maui%20Mallard%20in%20Cold%20Shadow%20%28USA%29.png",
    size: "2103 KB",
    link1: "https://drive.google.com/file/d/1NkAr8onV_-83EPxf1iWAaXLhal-gkfsL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mecarobot Golf (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mecarobot%20Golf%20%28USA%29.png",
    size: "430 KB",
    link1: "https://drive.google.com/file/d/1cEQ0PayepD9-RfPVmC2Ic_2215jvSRZ4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mechwarrior (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/MechWarrior%20%28USA%29%20%28Beta%29.png",
    size: "715 KB",
    link1: "https://drive.google.com/file/d/1PFXntp1GDIvMa8OoD9fqYjit4hiVkdeO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MechWarrior (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/MechWarrior%20%28USA%29.png",
    size: "711 KB",
    link1: "https://drive.google.com/file/d/117XbxjVcOUJpxfOpdP0OZq0iUIJdVBtq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MechWarrior 3050 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/MechWarrior%203050%20%28USA%29.png",
    size: "940 KB",
    link1: "https://drive.google.com/file/d/19VNAuFWgy72Bj6xmawXI88E7OaItwAt9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MechWarrior 3050 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/MechWarrior%203050%20%28USA%29.png",
    size: "940 KB",
    link1: "https://drive.google.com/file/d/1UyW_y29DjSABYi51H_GE4ATjxh4Q3RJU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man & Bass (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "2109 KB",
    link1: "https://drive.google.com/file/d/1_o1iaecVvgXDPekCkrdYK0hMktTEguI8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man 7 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%207%20%28USA%29.png",
    size: "1370 KB",
    link1: "https://drive.google.com/file/d/1wyWhIiJMnBB9Mae8Ib94jQ5k6akogez0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man Soccer (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20Soccer%20%28USA%29.png",
    size: "624 KB",
    link1: "https://drive.google.com/file/d/1fDMxL2j9BI5ZvXIi7t2JBckmvxTJUzdW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man Soccer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20Soccer%20%28USA%29.png",
    size: "624 KB",
    link1: "https://drive.google.com/file/d/1NQ2_mjr8CYm1Bd6jF1vm-qjaavky1YJD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man VII (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1370 KB",
    link1: "https://drive.google.com/file/d/1_5GPL6a8EuD_Pyt2BtSnCzY8k7VRMA-t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man X (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X%20%28USA%29%20%28Rev%201%29.png",
    size: "919 KB",
    link1: "https://drive.google.com/file/d/1VMMrdakX3jckjuzO9r-pdinisp2hAHq3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man X (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X%20%28USA%29.png",
    size: "919 KB",
    link1: "https://drive.google.com/file/d/1HJ6XqbxJvtvzexmlzbeFTzqFxaEcL558/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man X (USA) (Capcom Town)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X%20%28USA%29%20%28Rev%201%29.png",
    size: "919 KB",
    link1: "https://drive.google.com/file/d/1xnaJl6_WMiE80Tviiba7BicHIsO3W1Cs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man X (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X%20%28USA%29%20%28Rev%201%29.png",
    size: "919 KB",
    link1: "https://drive.google.com/file/d/1Q_PElBxbIwwsY3YN5QZW_encqyEbCKRm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man X2 (ESP-CHIP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X2%20%28USA%29.png",
    size: "1335 KB",
    link1: "https://drive.google.com/file/d/1mg0e8G4dw1GO1nPuiqx-w2SV87xN5mU4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man X2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X2%20%28USA%29.png",
    size: "981 KB",
    link1: "https://drive.google.com/file/d/1MchL6mbVLbySCNYiuag7g93bQGB49zHY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man X3 (ESP-CHIP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X3%20%28USA%29.png",
    size: "1266 KB",
    link1: "https://drive.google.com/file/d/12o0ssDT0ahZeQnLVP86qwBUD39Ox33pV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man X3 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X3%20%28USA%29.png",
    size: "1266 KB",
    link1: "https://drive.google.com/file/d/1K0_Fsxn4dZXQf__uDCSR6K7ScSRh9cSB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Megaman IV - Port - NES - (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "480 KB",
    link1: "https://drive.google.com/file/d/1GSx29EP6zvvx1SaOp5swTMAs38N3Ezdt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Combat - Falcon's Revenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Metal%20Combat%20-%20Falcon%27s%20Revenge%20%28USA%29.png",
    size: "1281 KB",
    link1: "https://drive.google.com/file/d/1r_MDKt9ppT5J9NP9WK0wZpK685mCQkg7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Marines (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Metal%20Marines%20%28USA%29.png",
    size: "817 KB",
    link1: "https://drive.google.com/file/d/1QbAnOUcmogbgKU7MNUT9CY7muSC1XDJi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Max Returns (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Metal%20Max%20Returns%20%28Japan%29.png",
    size: "2376 KB",
    link1: "https://drive.google.com/file/d/1uSt49FOajLL75c_uwvgq_zifLekEyMNt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Morph (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Metal%20Morph%20%28USA%29.png",
    size: "1088 KB",
    link1: "https://drive.google.com/file/d/1slgrGLnYPUnqQLUwuYmlzz5QDfVTqc5M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Warriors (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Metal%20Warriors%20%28USA%29.png",
    size: "974 KB",
    link1: "https://drive.google.com/file/d/1xfogVsQ5bujhmwEfek0P-fa4hHxzO2KM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Warriors (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Metal%20Warriors%20%28USA%29.png",
    size: "974 KB",
    link1: "https://drive.google.com/file/d/1XAuDn4f-0dqwCP4yn_Nt4h6oGRCvtGJl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Michael Andretti's Indy Car Challenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Michael%20Andretti%27s%20Indy%20Car%20Challenge%20%28USA%29.png",
    size: "696 KB",
    link1: "https://drive.google.com/file/d/1BEtUgf6mY7bhiYVmWpsTt69jmxMF8tyu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Michael Andretti's Indy Car Challenge (USA) (Sample)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Michael%20Andretti%27s%20Indy%20Car%20Challenge%20%28USA%29%20%28Sample%29.png",
    size: "696 KB",
    link1: "https://drive.google.com/file/d/1MmLToo0YffjscVT1JZ9h3o8_hMgZzKJ0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Michael Jordan - Chaos in the Windy City (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Michael%20Jordan%20-%20Chaos%20in%20the%20Windy%20City%20%28USA%29.png",
    size: "915 KB",
    link1: "https://drive.google.com/file/d/1dwZL7VLmVadXNROsbtdohljU8Xby7fV3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey Mania - The Timeless Adventures of Mickey Mouse (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mickey%20Mania%20-%20The%20Timeless%20Adventures%20of%20Mickey%20Mouse%20%28USA%29.png",
    size: "1437 KB",
    link1: "https://drive.google.com/file/d/1wAJiWad-O1UyR21xiEn8WWET4sCPKnGp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey Mania - The Timeless Adventures of Mickey Mouse (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mickey%20Mania%20-%20The%20Timeless%20Adventures%20of%20Mickey%20Mouse%20%28USA%29.png",
    size: "1437 KB",
    link1: "https://drive.google.com/file/d/1xMF3Y3ewRh5EWngWu2CZfpxou8j7fNzm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey to Donald - Magical Adventure 3 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mickey%20to%20Donald%20-%20Magical%20Adventure%203%20%28Japan%29.png",
    size: "1428 KB",
    link1: "https://drive.google.com/file/d/1eI1qHLXToOVmt83J9lJRVjCvTvMW59hJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Ultimate Challenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mickey%27s%20Ultimate%20Challenge%20%28USA%29.png",
    size: "415 KB",
    link1: "https://drive.google.com/file/d/1PdxzW6MoZoXJsnUXhQns7X5P7cBGuOdi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Machines (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Micro%20Machines%20%28USA%29.png",
    size: "380 KB",
    link1: "https://drive.google.com/file/d/1HAlVx3TLoURCxmEFtnKcYDwktQ6kAPwd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Machines (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Micro%20Machines%20%28USA%29.png",
    size: "380 KB",
    link1: "https://drive.google.com/file/d/1YVM2kscUn7d38vvublrSU16yR-yoYKZm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Machines 2 - Turbo Tournament (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Micro%20Machines%202%20-%20Turbo%20Tournament%20%28Europe%29.png",
    size: "808 KB",
    link1: "https://drive.google.com/file/d/1sRZHE79r-ebITcvMBQt8VB1j25CSuyPG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Might and Magic III - Isles of Terra (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Might%20and%20Magic%20III%20-%20Isles%20of%20Terra%20%28USA%29.png",
    size: "1003 KB",
    link1: "https://drive.google.com/file/d/1iXEPRWQ9g17LO4oN15WWqNzeavosPQ9s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mighty Max (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mighty%20Max%20%28USA%29.png",
    size: "690 KB",
    link1: "https://drive.google.com/file/d/1rsWae-wZbBt8gXL8n2sIcCZ2ewTSHhOS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mighty Morphin Power Rangers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mighty%20Morphin%20Power%20Rangers%20%28USA%29.png",
    size: "1061 KB",
    link1: "https://drive.google.com/file/d/1qHM7qGIrOmv-9j-0F8Vcwve6WoNOyeTQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mighty Morphin Power Rangers - The Fighting Edition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mighty%20Morphin%20Power%20Rangers%20-%20The%20Fighting%20Edition%20%28USA%29.png",
    size: "917 KB",
    link1: "https://drive.google.com/file/d/1psa81iUF1r6FRUD-h1YnxMasVQV9lvD4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mighty Morphin Power Rangers - The Movie (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mighty%20Morphin%20Power%20Rangers%20-%20The%20Movie%20%28USA%29.png",
    size: "924 KB",
    link1: "https://drive.google.com/file/d/17OEpiI6KLb9JtmLwXC3ZrMRSe_MGPVPC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Miracle Piano Teaching System, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Miracle%20Piano%20Teaching%20System%2C%20The%20%28USA%29.png",
    size: "227 KB",
    link1: "https://drive.google.com/file/d/1csfT3JU0_Kcu26iQ5EbsilF3q6vwzawO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MLBPA Baseball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/MLBPA%20Baseball%20%28USA%29.png",
    size: "678 KB",
    link1: "https://drive.google.com/file/d/1tS-gDpBv85xseA2JeJYfvmDKe5jWwQ31/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mobile Suit Gundam Wing Endless Duel (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1167 KB",
    link1: "https://drive.google.com/file/d/1SKBpE8Nnl5pIwl0Bdq1M1A1bTcyLGYmT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mohawk & Headphone Jack (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1447 KB",
    link1: "https://drive.google.com/file/d/1AcXKCSFhz32AVewL8sESEROHI_szZWpT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mohawk & Headphone Jack (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1447 KB",
    link1: "https://drive.google.com/file/d/1LSwNCEPiYGHm3yiXZXAM1mbQsB7bUDws/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Monopoly%20%28USA%29%20%28Rev%201%29.png",
    size: "301 KB",
    link1: "https://drive.google.com/file/d/13EkW70DT1Wht8WjQ9K82m7i0DwLieCam/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Monopoly%20%28USA%29.png",
    size: "301 KB",
    link1: "https://drive.google.com/file/d/1n_-Cpv2vb-pa66Eoxql4bKWtu-tEA1mX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Monopoly%20%28USA%29%20%28Rev%201%29.png",
    size: "301 KB",
    link1: "https://drive.google.com/file/d/1_JelOrJyStb-1b4jrxzJ0-SNhYL99Ode/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monstania (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Monstania%20%28Japan%29.png",
    size: "1296 KB",
    link1: "https://drive.google.com/file/d/1pVAeqkPpvjFae7sL_-1ums_UpcCD6ZQ3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mortal%20Kombat%20%28USA%29%20%28Beta%29.png",
    size: "1664 KB",
    link1: "https://drive.google.com/file/d/1iQo33QqEfWb4_RZHuHR_jTzrASOe6SIN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mortal%20Kombat%20%28USA%29.png",
    size: "1664 KB",
    link1: "https://drive.google.com/file/d/1Ju8Mc6sWWXd9wIE_33u8aFXDZDtmCsZX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mortal%20Kombat%20%28USA%29%20%28Rev%201%29.png",
    size: "1666 KB",
    link1: "https://drive.google.com/file/d/1O2YJUHbQKyCM7ly-Q0iJM-velJqMLBEY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat 3 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mortal%20Kombat%203%20%28USA%29.png",
    size: "3429 KB",
    link1: "https://drive.google.com/file/d/1oVO0ahVr2D8kCxUere95HG8HA2fHfcoH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mortal%20Kombat%20II%20%28USA%29.png",
    size: "2588 KB",
    link1: "https://drive.google.com/file/d/19fkFVFikT8aAJAt7XXNEsQ7fTrK34e5s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat II (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mortal%20Kombat%20II%20%28USA%29%20%28Rev%201%29.png",
    size: "2588 KB",
    link1: "https://drive.google.com/file/d/1abCU2c9-Lcw34yIzMqqXrsFADNuZYewK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Do! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mr.%20Do%20%28USA%29.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1srdXd8D6D3jqCYNuqCoYd9fI299co3dm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Nutz (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mr.%20Nutz%20%28USA%29%20%28Beta%201%29%20%281993-06-10%29.png",
    size: "876 KB",
    link1: "https://drive.google.com/file/d/1qXdncWEsukbxEk7gU9_Cu93BYdLDXGd1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Nutz (USA) (En,Fr)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mr.%20Nutz%20%28USA%29%20%28En%2CFr%29.png",
    size: "876 KB",
    link1: "https://drive.google.com/file/d/17r5bZIvYSkLYgwltqoEZ6M5_S1d_thGE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ms.%20Pac-Man%20%28USA%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1f3khOmTr4HPzFTTJEeNZAWLwryuenirB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ms.%20Pac-Man%20%28USA%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1TQCubNyhC6ZTZp7YMoKbvKuiHlLbW-ga/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Musya - The Classic Japanese Tale of Horror (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Musya%20-%20The%20Classic%20Japanese%20Tale%20of%20Horror%20%28USA%29.png",
    size: "402 KB",
    link1: "https://drive.google.com/file/d/1tGNcDNh4sPk3hSFU7mY5kOiKvSmJ-YCv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Musya - The Classic Japanese Tale of Horror (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Musya%20-%20The%20Classic%20Japanese%20Tale%20of%20Horror%20%28USA%29.png",
    size: "402 KB",
    link1: "https://drive.google.com/file/d/12zDM0rhk7Dr6Y76zmEXJtH21GZgIlck-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Natsume Championship Wrestling (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Natsume%20Championship%20Wrestling%20%28USA%29.png",
    size: "1023 KB",
    link1: "https://drive.google.com/file/d/1jhPswRU0XEXqvpXVIvsACD-isAOm5WNG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA All-Star Challenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20All-Star%20Challenge%20%28USA%29.png",
    size: "631 KB",
    link1: "https://drive.google.com/file/d/1dVwWza0X7HzZMdc628GDp2-l0hjN4Qpo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Give 'n Go (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20Give%20%27n%20Go%20%28USA%29.png",
    size: "1340 KB",
    link1: "https://drive.google.com/file/d/1yVsu-AntuyPWnXcGsnIzTXLcGqNN9a1z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Hang Time (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20Hang%20Time%20%28USA%29.png",
    size: "1871 KB",
    link1: "https://drive.google.com/file/d/16bPlIZT1BzfrPD4UUYA8uknLTCnfrX2I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20Jam%20%28USA%29.png",
    size: "1231 KB",
    link1: "https://drive.google.com/file/d/1H7QQe8zBDp81TplMIEAbqldJJ-0Qnvf5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20Jam%20%28USA%29%20%28Rev%201%29.png",
    size: "1231 KB",
    link1: "https://drive.google.com/file/d/1J8OozJDwOhbc6K6VdF_SVbXBtl1LbJsP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam - Tournament Edition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20Jam%20-%20Tournament%20Edition%20%28USA%29.png",
    size: "1824 KB",
    link1: "https://drive.google.com/file/d/1-51czeF9FvKod9idmZh4PXPX9O0TDHg1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Live 95 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20Live%2095%20%28USA%29.png",
    size: "945 KB",
    link1: "https://drive.google.com/file/d/1ZCjnHNczXmhc-ZiSGeH7QnuTKPOzE1ll/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Live 96 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20Live%2096%20%28USA%29.png",
    size: "945 KB",
    link1: "https://drive.google.com/file/d/1l2R80qqXBxmbDb4qm9mEAtoM2hLHCR98/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Live 97 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20Live%2097%20%28USA%29.png",
    size: "1075 KB",
    link1: "https://drive.google.com/file/d/17b3HNl5uxaeP6r3stEg3re7RZSt5LF1L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Live 98 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20Live%2098%20%28USA%29.png",
    size: "1336 KB",
    link1: "https://drive.google.com/file/d/14Z5vAm8WKZwMoQZTcJ_kAL4_XvnFzSCI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Showdown (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NBA%20Showdown%20%28USA%29.png",
    size: "616 KB",
    link1: "https://drive.google.com/file/d/1y0SpnE_fjXqgGKm_aTwjIY5TANv3hMid/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NCAA Basketball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NCAA%20Basketball%20%28USA%29.png",
    size: "562 KB",
    link1: "https://drive.google.com/file/d/1viBrPGVFHHLk_FT9HKJPxBSByA3UfFfW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NCAA Basketball (USA) (Arcade)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NCAA%20Basketball%20%28USA%29%20%28Arcade%29.png",
    size: "562 KB",
    link1: "https://drive.google.com/file/d/1gwI2mCdKe2UuyovbLxlVGPML9phM0ifz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NCAA Basketball (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NCAA%20Basketball%20%28USA%29%20%28Rev%201%29.png",
    size: "562 KB",
    link1: "https://drive.google.com/file/d/1TL6otfyNHlNTfOCpEH6Ex74clKo1t5db/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NCAA Final Four Basketball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NCAA%20Final%20Four%20Basketball%20%28USA%29.png",
    size: "568 KB",
    link1: "https://drive.google.com/file/d/1lOq4IfKf-Z9wsvnfTjGRSs_s1r2hE5-v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NCAA Football (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NCAA%20Football%20%28USA%29.png",
    size: "581 KB",
    link1: "https://drive.google.com/file/d/1LvRoWZIQp_xtabjfp60Mw4tic_mvoiKz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nekketsu Tairiku Burning Heroes (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Nekketsu%20Tairiku%20-%20Burning%20Heroes%20%28Japan%29.png",
    size: "1624 KB",
    link1: "https://drive.google.com/file/d/175kU1f3rcrRpVPsQ1vK16k_s1voIWSm3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neugier (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "767 KB",
    link1: "https://drive.google.com/file/d/1WFdPR1efrQojGgcYQJ1gGijdu7XHoao_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neugier - Umi to Kaze no Kodou (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Neugier%20-%20Umi%20to%20Kaze%20no%20Kodou%20%28Japan%29.png",
    size: "767 KB",
    link1: "https://drive.google.com/file/d/1sViPsbMrWeZyJKQO3RQWeZjCVEkBVM8a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "New Horizons (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/New%20Horizons%20%28USA%29.png",
    size: "1261 KB",
    link1: "https://drive.google.com/file/d/1vLDaM-lKx9JjNzOKwEmHFbiNGIgdJkC9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Newman Haas IndyCar featuring Nigel Mansell (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Newman%20Haas%20IndyCar%20featuring%20Nigel%20Mansell%20%28USA%29.png",
    size: "901 KB",
    link1: "https://drive.google.com/file/d/1raC6WMo5wO8vwawdaVp5hpszCybfaVLJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL Football (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NFL%20Football%20%28USA%29.png",
    size: "610 KB",
    link1: "https://drive.google.com/file/d/1srIwBTZ1KJfdY_JjT265vOzrPy6L1OdD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL Quarterback Club (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NFL%20Quarterback%20Club%20%28USA%29.png",
    size: "1960 KB",
    link1: "https://drive.google.com/file/d/1CY3OvZGTqhTiiKmPnAQ1-PZPiyY6aDkH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL Quarterback Club 96 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NFL%20Quarterback%20Club%2096%20%28USA%29.png",
    size: "1861 KB",
    link1: "https://drive.google.com/file/d/1kfVVzlfCnFwOutPs0biOY0nW3REGnKEZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL '94 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%20%2794%20%28USA%29.png",
    size: "661 KB",
    link1: "https://drive.google.com/file/d/1LljBP2acaCFHsycUX552klLONrxpBJBl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL 95 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%2095%20%28USA%29.png",
    size: "673 KB",
    link1: "https://drive.google.com/file/d/12HOLaRD-64WTOALM0jTvLsW7ILV1n3Ez/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL 96 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%2096%20%28USA%29.png",
    size: "1009 KB",
    link1: "https://drive.google.com/file/d/1IjMP-9rRt98dMeaQVgkG8FigyCuSfrVo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL 97 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%2097%20%28USA%29.png",
    size: "1032 KB",
    link1: "https://drive.google.com/file/d/1HpZmg2ZAkWkJB0oRKp7CC5Q0ZTUJgkHR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL 97 (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%2097%20%28USA%29%20%28Rev%201%29.png",
    size: "1027 KB",
    link1: "https://drive.google.com/file/d/1KLYGZgY0_6k6UkbW3_Vmykjhne86QYgu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL 98 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%2098%20%28USA%29.png",
    size: "1153 KB",
    link1: "https://drive.google.com/file/d/1uCJR6bwLN89dedJ68TXw0EPHh8-uqssa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL Stanley Cup (USA) (En,Fr)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHL%20Stanley%20Cup%20%28USA%29%20%28En%2CFr%29.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/1BdDxw82wAtnRaWvxCIzzpvLw3OZpwCBc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHLPA Hockey 93 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHLPA%20Hockey%2093%20%28USA%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1ETxp2yYEo0sOtFqR_iABMEPhApqmXVLE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHLPA Hockey 93 (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/NHLPA%20Hockey%2093%20%28USA%29%20%28Rev%201%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1joyJ9pFAvi3s2vVDvSSbnwOI33IRsZvc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nickelodeon GUTS (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Nickelodeon%20GUTS%20%28USA%29.png",
    size: "1013 KB",
    link1: "https://drive.google.com/file/d/185MCiME1VHDdruD9LrkL_N68NEaHSrYc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nigel Mansell's World Championship Racing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Nigel%20Mansell%27s%20World%20Championship%20Racing%20%28USA%29.png",
    size: "668 KB",
    link1: "https://drive.google.com/file/d/1eAqufVhofP0cTBY3deDXbi5O19WvzorP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden Trilogy (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ninja%20Gaiden%20Trilogy%20%28USA%29.png",
    size: "827 KB",
    link1: "https://drive.google.com/file/d/1HpDShXSQVbQgKL_kjFrXnnzlYJX0ydN9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden Trilogy (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ninja%20Gaiden%20Trilogy%20%28USA%29.png",
    size: "828 KB",
    link1: "https://drive.google.com/file/d/11ohzyta7jkE-5sGz5yhCFBfYJTIS8Bp4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninjawarriors (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ninjawarriors%20%28USA%29.png",
    size: "841 KB",
    link1: "https://drive.google.com/file/d/14vxYWZRKYSEOOEcjP77ptwis_0UYxVRF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nishijin Pachinko 3 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Nishijin%20Pachinko%203%20%28Japan%29.png",
    size: "469 KB",
    link1: "https://drive.google.com/file/d/1JG4Wnpv-uHYKCiw-SzTbgCI68GxI_u8e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nishijin Pachinko Monogatari 2 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Nishijin%20Pachinko%20Monogatari%202%20%28Japan%29.png",
    size: "1022 KB",
    link1: "https://drive.google.com/file/d/1oy2N4BNTIWyRPQsOhT1GVvjj60uxFM_c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "No Escape (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/No%20Escape%20%28USA%29.png",
    size: "1150 KB",
    link1: "https://drive.google.com/file/d/1TYDAmLD7PFHRvyyLj-_9NOmcWhDEs9-t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nobunaga's Ambition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Nobunaga%27s%20Ambition%20%28USA%29.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1A8zM3pGjeHas0zL-8ZRK1g9324B05nme/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nolan Ryan's Baseball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Nolan%20Ryan%27s%20Baseball%20%28USA%29.png",
    size: "220 KB",
    link1: "https://drive.google.com/file/d/1LUOd3WIPFLzSbhlPgh5PUvFDhlB0z0v6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nosferatu (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Nosferatu%20%28USA%29.png",
    size: "1318 KB",
    link1: "https://drive.google.com/file/d/1ipq-ngQGcYzeabQHLoQIHdXbXfvk0oOR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NTF 2.5 Test Cartridge (USA) (Rev A)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "211 KB",
    link1: "https://drive.google.com/file/d/1OkByVIKTUv-MpOZJXbe0bWEuGXdR-2Na/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Obitus (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Obitus%20%28USA%29.png",
    size: "655 KB",
    link1: "https://drive.google.com/file/d/1YMQQKIXQ6OBXdMlWIAxW-NS4BWrSXkaO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ogre Battle - The March of the Black Queen (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ogre%20Battle%20-%20The%20March%20of%20the%20Black%20Queen%20%28USA%29.png",
    size: "1224 KB",
    link1: "https://drive.google.com/file/d/1KDPCD--O5zFxPES4hup6ldgmwHflt1s6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ogre Battle - The March of the Black Queen (USA, Europe) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ogre%20Battle%20-%20The%20March%20of%20the%20Black%20Queen%20%28USA%2C%20Europe%29%20%28Virtual%20Console%29.png",
    size: "1224 KB",
    link1: "https://drive.google.com/file/d/1LNKDk6m8KIxkfC_3rV4R3TAFWRfLoKK1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Olympic Summer Games (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Olympic%20Summer%20Games%20%28USA%29.png",
    size: "858 KB",
    link1: "https://drive.google.com/file/d/1nD7-LtVGpk3RX67PxPrXHIVMU6RZ5coN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "On the Ball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/On%20the%20Ball%20%28USA%29.png",
    size: "404 KB",
    link1: "https://drive.google.com/file/d/1h2-wSrFvZ5FbAphfs2SZM1XhmXnDd0Vy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Europe - Path to Victory 1939-45 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Operation%20Europe%20-%20Path%20to%20Victory%201939-45%20%28USA%29.png",
    size: "649 KB",
    link1: "https://drive.google.com/file/d/1Fd9zXQT7BCW4iDy2a4maB9jK7YPQDBsg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Logic Bomb - The Ultimate Search & Destroy (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "516 KB",
    link1: "https://drive.google.com/file/d/16-i73YSQSHtoxv316txRPc9Wvhw2gkU1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Thunderbolt (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Operation%20Thunderbolt%20%28USA%29.png",
    size: "805 KB",
    link1: "https://drive.google.com/file/d/1UmUixs6ooJObTcS6JhaIUciOvKEZ0KHZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Oscar (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Oscar%20%28USA%29.png",
    size: "386 KB",
    link1: "https://drive.google.com/file/d/1Y-rsmlC2VSDa3k6Doyqy1nbEz72dHE9A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Out of This World (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Out%20of%20This%20World%20%28USA%29.png",
    size: "634 KB",
    link1: "https://drive.google.com/file/d/1i7OAaHuvMtpEfU0vlydIvAYITohqL0h5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Out to Lunch (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Out%20to%20Lunch%20%28USA%29.png",
    size: "572 KB",
    link1: "https://drive.google.com/file/d/1qJeGQpMSY6z31WV9XniqSDNMOAYqINeD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Outlander (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Outlander%20%28USA%29.png",
    size: "544 KB",
    link1: "https://drive.google.com/file/d/1cJYJi8hKSq7HDfQcyZ-JJJwRMoyNstPV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "P.T.O. - Pacific Theater of Operations (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/P.T.O.%20-%20Pacific%20Theater%20of%20Operations%20%28USA%29.png",
    size: "688 KB",
    link1: "https://drive.google.com/file/d/1qt_0NWdbRwoUiBOjnpUaOZLJuYWawWXc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "P.T.O. II - Pacific Theater of Operations (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/P.T.O.%20II%20-%20Pacific%20Theater%20of%20Operations%20%28USA%29.png",
    size: "1639 KB",
    link1: "https://drive.google.com/file/d/1HIi0VhI6iyGi10KyV1vtIx3sPtOV7KvQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Attack (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pac-Attack%20%28USA%29.png",
    size: "222 KB",
    link1: "https://drive.google.com/file/d/1GI29KfGKz5hIZ0QAnII6pYdpts6RvOV1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-In-Time (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pac-In-Time%20%28USA%29.png",
    size: "731 KB",
    link1: "https://drive.google.com/file/d/1Mn47iw4QsAhfREGLUfmT2-Pf4TZYENI5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-In-Time (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pac-In-Time%20%28USA%29.png",
    size: "731 KB",
    link1: "https://drive.google.com/file/d/1dqjQHJW_4Ijk82C-mJVx7BMCuTvubZT7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Man 2 - The New Adventures (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pac-Man%202%20-%20The%20New%20Adventures%20%28USA%29.png",
    size: "957 KB",
    link1: "https://drive.google.com/file/d/1cVP0Hu4j86RWgY8Itqn5pzloK_TJyBNy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Man 2 - The New Adventures (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pac-Man%202%20-%20The%20New%20Adventures%20%28USA%29.png",
    size: "957 KB",
    link1: "https://drive.google.com/file/d/1ha8QWlm0aubV2PmUoh3G_hPpWa-2g7QU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Packy & Marlon (ESP).sfc",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "437 KB",
    link1: "https://drive.google.com/file/d/1nj6Xy2qWrziqSrSMlNLe6gUElCQbTAp1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Packy & Marlon (ESP).smc",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "437 KB",
    link1: "https://drive.google.com/file/d/1EiqRIUWgCgpOXeSBezYIGO2PtaFX_d3P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Packy & Marlon (USA) (En,Fr,Es)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "437 KB",
    link1: "https://drive.google.com/file/d/1hbQ8_lp4DQaJzV2JWyIn2IHt3nyTw9Lr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pagemaster, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pagemaster%2C%20The%20%28USA%29.png",
    size: "1342 KB",
    link1: "https://drive.google.com/file/d/1BQsOHEF2tA4Z7BV5hPgHu5hbyzE1hR6u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paladin's Quest (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Paladin%27s%20Quest%20%28USA%29.png",
    size: "825 KB",
    link1: "https://drive.google.com/file/d/1dwNNYQIGAkivUqBf9rk-tqw3W4IdX-gh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paladin's Quest (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Paladin%27s%20Quest%20%28USA%29.png",
    size: "825 KB",
    link1: "https://drive.google.com/file/d/1LnW1HInRHKox_xKgcGlOUa-jg4QnlEfV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Panic in Nakayoshi World (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Panic%20in%20Nakayoshi%20World%20%28Japan%29.png",
    size: "301 KB",
    link1: "https://drive.google.com/file/d/1oisy9TzYCqvcWQm1f8LHN4Iwjo0kIN5Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy 2 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Paperboy%202%20%28USA%29.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1t9NC8cJ6EvZTFy94gpH5me5rJcAIdWMI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Paperboy%202%20%28USA%29.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1HgmSM0G0AQFJ0pls2IxFS0lr50rbN70V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Peace Keepers, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Peace%20Keepers%2C%20The%20%28USA%29.png",
    size: "1318 KB",
    link1: "https://drive.google.com/file/d/1j78QKhR7PbR4ZoZBkihnvFZSxRBRBN1V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA European Tour (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/PGA%20European%20Tour%20%28USA%29.png",
    size: "578 KB",
    link1: "https://drive.google.com/file/d/1VsiLYaPjldgHT8nK_wKMUslge7_EmBy3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA Tour 96 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/PGA%20Tour%2096%20%28USA%29.png",
    size: "1238 KB",
    link1: "https://drive.google.com/file/d/1-SRrXByxNYL_W1iqNmSwOxTl3DWHjWIJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA Tour 96 (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/PGA%20Tour%2096%20%28USA%29%20%28Rev%201%29.png",
    size: "1239 KB",
    link1: "https://drive.google.com/file/d/10YbG6D7d74d5QBGtTT8NXZQ-96ROfWi0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA Tour Golf (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/PGA%20Tour%20Golf%20%28USA%29.png",
    size: "321 KB",
    link1: "https://drive.google.com/file/d/1LH2ZiS00qblsqaSKrK8EwYSkuli8D7BI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA Tour Golf (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/PGA%20Tour%20Golf%20%28USA%29%20%28Rev%201%29.png",
    size: "321 KB",
    link1: "https://drive.google.com/file/d/1gz9pPSdwgTmt_7XLpF7vCz5UEWssvs8b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phalanx (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Phalanx%20%28USA%29.png",
    size: "615 KB",
    link1: "https://drive.google.com/file/d/1j6_a1jXGfNA7OdWiuwWnfxMHDGMOmbl-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phalanx (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Phalanx%20%28USA%29.png",
    size: "615 KB",
    link1: "https://drive.google.com/file/d/1YXF4g-ztU8TWZwVTF-mcap5um8OdQSQF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantom 2040 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Phantom%202040%20%28USA%29.png",
    size: "1325 KB",
    link1: "https://drive.google.com/file/d/18Dt0OoOlHJkFVVLquGOoAVycEb0bFz1P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pieces (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pieces%20%28USA%29.png",
    size: "773 KB",
    link1: "https://drive.google.com/file/d/1Rj0-CNziaRL-kiVbMq1Qp2gndIsubcqc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pilotwings (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pilotwings%20%28USA%29.png",
    size: "267 KB",
    link1: "https://drive.google.com/file/d/1y1JQ2tzctHzV1_HCcrFJM-o6ljkyiTEq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pilotwings (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pilotwings%20%28USA%29.png",
    size: "267 KB",
    link1: "https://drive.google.com/file/d/16kw2VtayQEUNhxdNi1QRBC-S_3EEleC0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pinball Dreams (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pinball%20Dreams%20%28USA%29.png",
    size: "508 KB",
    link1: "https://drive.google.com/file/d/1MGRzpsbHV83-Bq-WzSq2u8oM5K-Z9Ojk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pinball Fantasies (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pinball%20Fantasies%20%28USA%29.png",
    size: "530 KB",
    link1: "https://drive.google.com/file/d/11FzWM2y6EjKJWEf25WrCaO4Y9_icDqbQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pink Goes to Hollywood (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pink%20Goes%20to%20Hollywood%20%28USA%29.png",
    size: "541 KB",
    link1: "https://drive.google.com/file/d/1I08Nd7_xwK7WtLGKr9cNbdeVBBekzC6v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pink Goes to Hollywood (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pink%20Goes%20to%20Hollywood%20%28USA%29.png",
    size: "541 KB",
    link1: "https://drive.google.com/file/d/1XSV36JSCnWMPcm3qGxAwNOyzUwX4jJRM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pinocchio (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pinocchio%20%28USA%29.png",
    size: "1802 KB",
    link1: "https://drive.google.com/file/d/1o9dtYUiaeKyDzCfOcgSsuh-5YjAW9uFV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pinocchio (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pinocchio%20%28USA%29.png",
    size: "1802 KB",
    link1: "https://drive.google.com/file/d/1CidtjfpMGhRp--PLeMAkGxFTUvv2Z3p_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pit-Fighter (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pit-Fighter%20%28USA%29.png",
    size: "337 KB",
    link1: "https://drive.google.com/file/d/1hswoTnQI1MzOMFZIXDH8qYK-PC313oxn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pitfall - The Mayan Adventure (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pitfall%20-%20The%20Mayan%20Adventure%20%28USA%29%20%28Beta%29.png",
    size: "1522 KB",
    link1: "https://drive.google.com/file/d/1xUefBLSJxxDkpUYVNxzUaoJGM82whFUy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pitfall - The Mayan Adventure (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pitfall%20-%20The%20Mayan%20Adventure%20%28USA%29.png",
    size: "1522 KB",
    link1: "https://drive.google.com/file/d/1fkIkAzwsiFhNK3ook2DL228iLzi3ENPE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Plok (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Plok%20%28USA%29.png",
    size: "628 KB",
    link1: "https://drive.google.com/file/d/1kfN5FmJO5nH8TE33Eibt66VR0kTPILEN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Plok (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Plok%20%28USA%29.png",
    size: "628 KB",
    link1: "https://drive.google.com/file/d/1gLD7aYh8jEs9gYNCmBcXImwYvAZEioLj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocky & Rocky (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "691 KB",
    link1: "https://drive.google.com/file/d/1cqwpqol6r_sa6uWxNw8BHI26hTTjv22L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocky & Rocky (USA) (Sample) (1992-11-24)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "690 KB",
    link1: "https://drive.google.com/file/d/19hmLSq3uechFG0Do1dnRbHAqGzPTE4rL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocky & Rocky 2 (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "916 KB",
    link1: "https://drive.google.com/file/d/1EDVlFzyzR4j21ahPG1mwDcrcV_TDPMWz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pop'n TwinBee (USA, Europe) (Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pop%27n%20TwinBee%20%28USA%2C%20Europe%29%20%28Switch%20Online%29.png",
    size: "779 KB",
    link1: "https://drive.google.com/file/d/13Db0-K2X025mdffDjPNCli8hckKfszQm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Populous (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Populous%20%28USA%29.png",
    size: "363 KB",
    link1: "https://drive.google.com/file/d/1CLtvlnceGiYtXMrhxKM2PDCgjlkqLcOX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Porky Pig's Haunted Holiday (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Porky%20Pig%27s%20Haunted%20Holiday%20%28USA%29.png",
    size: "1462 KB",
    link1: "https://drive.google.com/file/d/1SMTxDZfirlK8dQ5EknZAEHtOy7NhJIWq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Drive (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Power%20Drive%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CPt%29.png",
    size: "876 KB",
    link1: "https://drive.google.com/file/d/12llQj34tuSE6gPhDRdGndhFWVEoZAQoE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Instinct (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Power%20Instinct%20%28USA%29%20%28Beta%29.png",
    size: "1468 KB",
    link1: "https://drive.google.com/file/d/1KsOsf_GYlkaEce9T2s1vbDmlIDUYhVjX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Instinct (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Power%20Instinct%20%28USA%29.png",
    size: "1468 KB",
    link1: "https://drive.google.com/file/d/1HC4XuTyrnt761P_uS9Jow8YhXQbVYdz7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Moves (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Power%20Moves%20%28USA%29.png",
    size: "626 KB",
    link1: "https://drive.google.com/file/d/1RnhhswzU17CczUUwBU7aXA11e24LCLwH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Moves (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Power%20Moves%20%28USA%29.png",
    size: "626 KB",
    link1: "https://drive.google.com/file/d/1_YOnq10dDOxGP5Itu2XdNYnKhKGoFMeI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Piggs of the Dark Age (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Power%20Piggs%20of%20the%20Dark%20Age%20%28USA%29.png",
    size: "655 KB",
    link1: "https://drive.google.com/file/d/1-31-9-XwtLkmdSmZbSE4Xgu1jfz8O_J0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Rangers Zeo - Battle Racers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Power%20Rangers%20Zeo%20-%20Battle%20Racers%20%28USA%29.png",
    size: "665 KB",
    link1: "https://drive.google.com/file/d/1fL7FF90UMhR29YrMOXgc20TxR5VQyHNy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Soukoban (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Power%20Soukoban%20%28Japan%29.png",
    size: "389 KB",
    link1: "https://drive.google.com/file/d/1fJN_9PkWV30jPNDVAH-wmvl_ozzU9NlP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PowerFest 94 (USA) (Competition Cart)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/PowerFest%2094%20%28USA%29.png",
    size: "1076 KB",
    link1: "https://drive.google.com/file/d/1wX_9d0FHNTf0-ExYik1ZJQbwFSNFJslu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prehistorik Man (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Prehistorik%20Man%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "838 KB",
    link1: "https://drive.google.com/file/d/1kgYiRaw_iY4pZmobUavOxDFyIyMl6yhY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prehistorik Man (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Prehistorik%20Man%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "838 KB",
    link1: "https://drive.google.com/file/d/1JyufMTzLdJV76RTbhshDv-xWwUfizQou/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Primal Rage (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Primal%20Rage%20%28USA%29.png",
    size: "2157 KB",
    link1: "https://drive.google.com/file/d/1srskRKzs9MI90CLZaRYS3k4sGqDI47Ew/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Prince%20of%20Persia%20%28USA%29.png",
    size: "585 KB",
    link1: "https://drive.google.com/file/d/1oCcbAdqa_OF6dkB7OWxbVypbM2VJUZ36/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Prince%20of%20Persia%20%28USA%29.png",
    size: "585 KB",
    link1: "https://drive.google.com/file/d/1CB1Ni6HWzPYcRzpc3ogLSd2ErChWZRbP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Prince%20of%20Persia%202%20%28USA%29.png",
    size: "1176 KB",
    link1: "https://drive.google.com/file/d/1EyS3ygcXAIViBQXA_nNjJVOMsw_xj-5Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia 2 - The Shadow & The Flame",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1176 KB",
    link1: "https://drive.google.com/file/d/1O4PoZ05vKZ1ZgpGl9HwwOeAki7LiujwY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Quarterback (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pro%20Quarterback%20%28USA%29.png",
    size: "507 KB",
    link1: "https://drive.google.com/file/d/1-y2dcn7reeEGmsVfG80Qevxkusxbw-yD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Sport Hockey (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Pro%20Sport%20Hockey%20%28USA%29.png",
    size: "308 KB",
    link1: "https://drive.google.com/file/d/1GBrqgJRMt-ssfHWWqgC17Z2fzr9QQmEQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Push-Over (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Push-Over%20%28USA%29.png",
    size: "377 KB",
    link1: "https://drive.google.com/file/d/1NyRw7xZMlVMbCloOJ1JYRYbfyhQg1yaQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Push-Over (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Push-Over%20%28USA%29.png",
    size: "377 KB",
    link1: "https://drive.google.com/file/d/1qoyO3ZXGvqzSMzBRTnffJEDf8a0VRQUH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Q-bert 3 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Q-bert%203%20%28USA%29.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1bG83dZNN3aBYaJm3e7UNII8v7h3BPr3R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type III (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/R-Type%20III%20%28USA%29.png",
    size: "949 KB",
    link1: "https://drive.google.com/file/d/1tjmDnuOOXAZsMAgw69cu64EEuI7f0Q1O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type III (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/R-Type%20III%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "949 KB",
    link1: "https://drive.google.com/file/d/1ZfJYzKzD93T_26QHd41fXaI4eQWgjUIw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Race Drivin' (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Race%20Drivin%27%20%28USA%29.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1swKIzYlTIgjVCitkcKViUum9N7t6Qi8T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Radical Psycho Machine Racing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Radical%20Psycho%20Machine%20Racing%20%28USA%29.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/16sH8F6o2RGTM0r-Jm1GUaDENRo8FrBng/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Radical Rex (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Radical%20Rex%20%28USA%29.png",
    size: "701 KB",
    link1: "https://drive.google.com/file/d/1_YezZz_t3NJI5vv5Ll6TDj-IXD71CCyD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Radical Rex (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Radical%20Rex%20%28USA%29.png",
    size: "701 KB",
    link1: "https://drive.google.com/file/d/11RV8ceK0NXuycitQBxwus4beccivxuom/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raiden Trad (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Raiden%20Trad%20%28USA%29.png",
    size: "516 KB",
    link1: "https://drive.google.com/file/d/1nHZOorDvIzmv4MdkZPmfJmP2L-vg84A-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raiden Trad (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Raiden%20Trad%20%28USA%29.png",
    size: "516 KB",
    link1: "https://drive.google.com/file/d/1cytKxSixF55BeRYoa41W5B6OE8QMGugB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampart (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rampart%20%28USA%29.png",
    size: "212 KB",
    link1: "https://drive.google.com/file/d/1_xYeCeYrIfQAaytVoIFg8MqZhp0RAnmd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ranma 1-2 - Hard Battle (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ranma%201-2%20-%20Hard%20Battle%20%28USA%29.png",
    size: "1094 KB",
    link1: "https://drive.google.com/file/d/1yOsOtskZGRPg1n8L7cOgCvso2vnrNbtp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ranma ½ (ESP-1)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "782 KB",
    link1: "https://drive.google.com/file/d/1iMKG7LZEMjp7oSK4gVNQC1CJxd8uaXzo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ranma ½ (ESP-2)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "776 KB",
    link1: "https://drive.google.com/file/d/1_85m437ySZ-yBe1KApbAYGtjX5CWoNvm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rap Jam - Volume One (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rap%20Jam%20-%20Volume%20One%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "1353 KB",
    link1: "https://drive.google.com/file/d/13ZJe74casaOORfjRaIWqY3KPbq1ESKeR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Realm (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Realm%20%28USA%29.png",
    size: "627 KB",
    link1: "https://drive.google.com/file/d/18dW8li4-cP5F_NGyi4F8YpgON2XbXYpy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Redline F-1 Racer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Redline%20F-1%20Racer%20%28USA%29.png",
    size: "625 KB",
    link1: "https://drive.google.com/file/d/15lnPn0eKOnxV-y9zjWk3Bo6yqR-hgnNj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Relief Pitcher (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Relief%20Pitcher%20%28USA%29.png",
    size: "1226 KB",
    link1: "https://drive.google.com/file/d/1Dkm-h8Knd7F8Keaigfvi-lemYIAkDDMx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ren & Stimpy Show, The - Buckeroo$! (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "652 KB",
    link1: "https://drive.google.com/file/d/1tfzcafNZmwl8UDyEkaxkqO9CdGOZHH-q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ren & Stimpy Show, The - Fire Dogs (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1cMHjZWd29Kp52qD3veKuSimrhh83LHNF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ren & Stimpy Show, The - Time Warp (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "992 KB",
    link1: "https://drive.google.com/file/d/1UCgw_QH6GErbhkxd0k-NxzEFefKICEhN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ren & Stimpy Show, The - Veediots! (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "799 KB",
    link1: "https://drive.google.com/file/d/1Z26z5Di6Cx2uNJLU_T4Ec6vctqPaAchn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rendering Ranger R2 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rendering%20Ranger%20R2%20%28Japan%29%20%28En%29.png",
    size: "1371 KB",
    link1: "https://drive.google.com/file/d/1MRWdSTxITxHh_X6Uywrk6Wk9yjRa9TeI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rendering Ranger R2 (USA) (Limited Run Games)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rendering%20Ranger%20R2%20%28Japan%29%20%28En%29.png",
    size: "1369 KB",
    link1: "https://drive.google.com/file/d/1xrE2wv_1X3ztt3lq6KDfMMFDcrlxdpIW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Revolution X (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Revolution%20X%20%28USA%29.png",
    size: "1797 KB",
    link1: "https://drive.google.com/file/d/18NbA9ICowqZD9u5OclFaTqpes0pTrEZQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rex Ronan - Experimental Surgeon (USA) (En,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rex%20Ronan%20-%20Experimental%20Surgeon%20%28USA%29%20%28En%2CEs%29.png",
    size: "408 KB",
    link1: "https://drive.google.com/file/d/1jolgMi8S7B0NcZv5qk0sqVBi9RkqthBT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Riddick Bowe Boxing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Riddick%20Bowe%20Boxing%20%28USA%29.png",
    size: "416 KB",
    link1: "https://drive.google.com/file/d/1AwaeLamneBSZ7RIMzDkynBUnl6sDuf8Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rise of the Phoenix (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rise%20of%20the%20Phoenix%20%28USA%29.png",
    size: "991 KB",
    link1: "https://drive.google.com/file/d/18cYldMMxCa7eZ-2jxSEfvxqgvJYwvqMZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rise of the Robots (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rise%20of%20the%20Robots%20%28USA%29%20%28Beta%29.png",
    size: "2957 KB",
    link1: "https://drive.google.com/file/d/13YMwZAIp8HM3x3QVVLcbRJdPsx270Fid/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rise of the Robots (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rise%20of%20the%20Robots%20%28USA%29.png",
    size: "2957 KB",
    link1: "https://drive.google.com/file/d/15z2oRIraZKy-b4jWxNffg5J6MPVBdAok/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rival Turf! (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rival%20Turf%21%20%28USA%29.png",
    size: "691 KB",
    link1: "https://drive.google.com/file/d/1UIvA4YbBM2eP7cxzEqj_-fEc8Ic0Pwf2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rival Turf! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rival%20Turf%21%20%28USA%29.png",
    size: "691 KB",
    link1: "https://drive.google.com/file/d/16-o6i2647AXDuBI_SYqRH9uQYVxXSy4F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (De) (Switch)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28De%29%20%28Switch%29.png",
    size: "1462 KB",
    link1: "https://drive.google.com/file/d/1yLow4E-f8shN5fmUAIHOqMSsyYbmW4ae/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (Es) (Switch)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28Es%29%20%28Switch%29.png",
    size: "1461 KB",
    link1: "https://drive.google.com/file/d/1WBa4KYAXYSzNPhAjw0XZyL0uZyVUBuyF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (Fr) (Switch)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28Fr%29%20%28Switch%29.png",
    size: "1461 KB",
    link1: "https://drive.google.com/file/d/1DlRwOkIQAIiiADcNSD6tzttEaDM6_Hef/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (It) (Switch)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28It%29%20%28Switch%29.png",
    size: "1461 KB",
    link1: "https://drive.google.com/file/d/1LWZUEXkFlCPnYq6NatAHhL5nLPoXBhgc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (Ja) (Switch)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28Ja%29%20%28Switch%29.png",
    size: "1444 KB",
    link1: "https://drive.google.com/file/d/1HwHtO79vTiTuOxoS00blltFb4FjOjF6D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (Ko) (Switch)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28Ko%29%20%28Switch%29.png",
    size: "1462 KB",
    link1: "https://drive.google.com/file/d/10pR0LZghjKYfsPDWGMYqnWxlGR8ctP09/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (Original Translation, Switch)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28Original%20Translation%2C%20Switch%29.png",
    size: "1461 KB",
    link1: "https://drive.google.com/file/d/1_wkROCRDOW5Xq2saAEMc9TzlhTPTx1K0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (RCG Translation, Switch)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28RCG%20Translation%2C%20Switch%29.png",
    size: "1462 KB",
    link1: "https://drive.google.com/file/d/1Re8Z777WrVWoWStWK2WKJEtT0-n6ZX8O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (Zh-Hans) (Steam)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28De%29%20%28Switch%29.png",
    size: "1484 KB",
    link1: "https://drive.google.com/file/d/1prkF_9A2CrJJhOU9D7hhiRXpSEtx0dgR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (Zh-Hans) (Switch)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28Zh-Hans%29%20%28Switch%29.png",
    size: "1484 KB",
    link1: "https://drive.google.com/file/d/136fr9hgNu4gAJqrqo4f6RZyggVXcGXhH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (Zh-Hant) (Steam)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28De%29%20%28Switch%29.png",
    size: "1486 KB",
    link1: "https://drive.google.com/file/d/1Gkv1wdkjEOTc2aei08X2jFC3xGrVeZer/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "River City Girls Zero (USA) (Zh-Hant) (Switch)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/River%20City%20Girls%20Zero%20%28USA%29%20%28Zh-Hant%29%20%28Switch%29.png",
    size: "1486 KB",
    link1: "https://drive.google.com/file/d/1KOvbp7dE19AQ9vgoLQccQ1w-l9a3mPps/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Riot 4WD (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Road%20Riot%204WD%20%28USA%29.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1t-M91Cw4sySGLwjjraR2zIkPXSY9jDg6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Runner's Death Valley Rally (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Road%20Runner%27s%20Death%20Valley%20Rally%20%28USA%29.png",
    size: "584 KB",
    link1: "https://drive.google.com/file/d/1ybeL0F1VdwbMYnYW-S37PWnUVvZdwbRL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Runner's Death Valley Rally (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Road%20Runner%27s%20Death%20Valley%20Rally%20%28USA%29.png",
    size: "584 KB",
    link1: "https://drive.google.com/file/d/1m-Iyw_N_lhCgc8b_Bhe_jpnP8a2AzUht/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robocop 3 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/RoboCop%203%20%28USA%29%20%28Arcade%29.png",
    size: "451 KB",
    link1: "https://drive.google.com/file/d/15ZHSt7Lbj1lY8zyg_vOMVYWa5B_qXdFn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop 3 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/RoboCop%203%20%28USA%29.png",
    size: "451 KB",
    link1: "https://drive.google.com/file/d/1-Mjjcplg27TqKQ8pEi5cvp7VbfsQFFZU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop 3 (USA) (Arcade)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/RoboCop%203%20%28USA%29%20%28Arcade%29.png",
    size: "453 KB",
    link1: "https://drive.google.com/file/d/1uK81dQ2Ds8axWXs32orrJtaGGYmFo7MA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop Versus The Terminator (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/RoboCop%20versus%20The%20Terminator%20%28USA%29.png",
    size: "750 KB",
    link1: "https://drive.google.com/file/d/1BZ8n2X4sptzUJ3wFHUPSHIXU9QFDf_8J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop versus The Terminator (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/RoboCop%20versus%20The%20Terminator%20%28USA%29.png",
    size: "750 KB",
    link1: "https://drive.google.com/file/d/1yDC6DEHDrK7TpEhgeeNIuHM09T66-yvU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robotrek (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Robotrek%20%28USA%29.png",
    size: "1143 KB",
    link1: "https://drive.google.com/file/d/1w2SPhhwKfXJqkQnK5kbBcnUXdXEdikIF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robotrek (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Robotrek%20%28USA%29.png",
    size: "1142 KB",
    link1: "https://drive.google.com/file/d/19yMF84IG5AcZbEngR8FzCyNERKz8yKqE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rock n' Roll Racing (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rock%20%27N%27%20Roll%20Racing%20%28USA%29%20%28Demo%29%20%28Battle.net%29.png",
    size: "746 KB",
    link1: "https://drive.google.com/file/d/1rU-hABd4f0bVB-ZSzHE6pgQv2Uh99S-d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rock N' Roll Racing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rock%20N%27%20Roll%20Racing%20%28USA%29.png",
    size: "746 KB",
    link1: "https://drive.google.com/file/d/1CXkFB-399g5EGdfQNGZp0Z2y0kf1uWjC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocketeer, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rocketeer%2C%20The%20%28USA%29.png",
    size: "613 KB",
    link1: "https://drive.google.com/file/d/1mtPxDP1HMxYsmAH59sOotegfQeXNIUif/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocko's Modern Life - Spunky's Dangerous Day (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rocko%27s%20Modern%20Life%20-%20Spunky%27s%20Dangerous%20Day%20%28USA%29.png",
    size: "814 KB",
    link1: "https://drive.google.com/file/d/1yzRqJ5jc7IVDuvvMTGGvUC5MSwTvD3lj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocko's Modern Life - Spunky's Dangerous Day (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rocko%27s%20Modern%20Life%20-%20Spunky%27s%20Dangerous%20Day%20%28USA%29.png",
    size: "814 KB",
    link1: "https://drive.google.com/file/d/1PJ90LTL83rwTTY-oEqFVHOB7IRqi2trC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocky Rodent (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rocky%20Rodent%20%28USA%29.png",
    size: "594 KB",
    link1: "https://drive.google.com/file/d/1DSkUviWjIMWGRvPyD7qUKkQnnwi5A5CA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocky Rodent (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rocky%20Rodent%20%28USA%29.png",
    size: "594 KB",
    link1: "https://drive.google.com/file/d/18AvTOisCaJafdnMu3-Tckm-vacCDZVRL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roger Clemens' MVP Baseball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Roger%20Clemens%27%20MVP%20Baseball%20%28USA%29.png",
    size: "605 KB",
    link1: "https://drive.google.com/file/d/14F4pYT4Tm4LUaWQlU4JirwDJu0aWpDrA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roger Clemens' MVP Baseball (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Roger%20Clemens%27%20MVP%20Baseball%20%28USA%29%20%28Rev%201%29.png",
    size: "605 KB",
    link1: "https://drive.google.com/file/d/1QxQErNf2cmxmqrRCsutcOcfm4TxaVCID/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Romance of the Three Kingdoms II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Romance%20of%20the%20Three%20Kingdoms%20II%20%28USA%29.png",
    size: "589 KB",
    link1: "https://drive.google.com/file/d/1gWCKEdQ-X-rlf6IdD66uP-yStu76Oxap/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Romance of the Three Kingdoms III - Dragon of Destiny (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Romance%20of%20the%20Three%20Kingdoms%20III%20-%20Dragon%20of%20Destiny%20%28USA%29.png",
    size: "862 KB",
    link1: "https://drive.google.com/file/d/1Jd35oY9if92PPj8e-CRXxVSPU02Hx-zi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Romance of the Three Kingdoms IV - Wall of Fire (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Romance%20of%20the%20Three%20Kingdoms%20IV%20-%20Wall%20of%20Fire%20%28USA%29.png",
    size: "1500 KB",
    link1: "https://drive.google.com/file/d/1fYfH5BGQ60ZLegVoxxNcQKfX0T2qifwu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Romancing SaGa 3 (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "2602 KB",
    link1: "https://drive.google.com/file/d/1cr7ou4xwAeVrmS7CpERD-dJeYSQOc98b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rudra no Hihou (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rudra%20no%20Hihou%20%28Japan%29.png",
    size: "2265 KB",
    link1: "https://drive.google.com/file/d/1qcml5GntAbGBuPeAFCu8YmIBWwGQ6AHc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Run Saber (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Run%20Saber%20%28USA%29.png",
    size: "515 KB",
    link1: "https://drive.google.com/file/d/1L875-3u6KbxhAePVpily_K6NqNQWg31x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Run Saber (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Run%20Saber%20%28USA%29.png",
    size: "515 KB",
    link1: "https://drive.google.com/file/d/1dZKX4utUTYbS0_Is7Gc0QV03N4r-TgAT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rushing Beat (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Rushing%20Beat%20%28Japan%29.png",
    size: "705 KB",
    link1: "https://drive.google.com/file/d/1wcYDPDWdV48KmQnj9lhyzyka2YHCfFZt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ryuuki Heidan Danzarb (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "714 KB",
    link1: "https://drive.google.com/file/d/1ZeOkpRyhSghxRqAQkKU2Y-gpjpxM2zW5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "S.O.S - Sink or Swim (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/S.O.S%20-%20Sink%20or%20Swim%20%28USA%29.png",
    size: "305 KB",
    link1: "https://drive.google.com/file/d/1Hv0lCsmxhhYlXH2_-V0oFsZUuMaHghto/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Samurai Shodown (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Samurai%20Shodown%20%28USA%29.png",
    size: "2423 KB",
    link1: "https://drive.google.com/file/d/1OUKGFqw4HxGXtfQxmY_v0_3rPk2VEO8Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Samurai Shodown (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Samurai%20Shodown%20%28USA%29.png",
    size: "2423 KB",
    link1: "https://drive.google.com/file/d/1hHfkPGnLILlenDdyR_yBbbYYMtv8WnFi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanrio World Smash Ball! (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sanrio%20World%20Smash%20Ball%21%20%28Japan%29.png",
    size: "197 KB",
    link1: "https://drive.google.com/file/d/1OoyIUZzgc8qKD4RNvZoM7crHDMcZjyDR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Saturday Night Slam Masters (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Saturday%20Night%20Slam%20Masters%20%28USA%29.png",
    size: "2079 KB",
    link1: "https://drive.google.com/file/d/1WThCZvUwxdDbL03CE54iwff47GgPGD9G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Saturday Night Slam Masters (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Saturday%20Night%20Slam%20Masters%20%28USA%29.png",
    size: "2078 KB",
    link1: "https://drive.google.com/file/d/1wCShCfRhBy5XeE1pI-StJ2TyEn8gy1Ys/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scooby-Doo Mystery (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Scooby-Doo%20Mystery%20%28USA%29.png",
    size: "1470 KB",
    link1: "https://drive.google.com/file/d/1WsYpXWZXTOHPZOcLGYH7mQDaoBK6tppb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scooby-Doo Mystery (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Scooby-Doo%20Mystery%20%28USA%29.png",
    size: "1469 KB",
    link1: "https://drive.google.com/file/d/1IORXk0xOdJiOtINr7BBIgl1Gn9cgQwdz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD The Great Battle - Aratanaru Chousen (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SD%20The%20Great%20Battle%20-%20Aratanaru%20Chousen%20%28Japan%29%20%28Rev%201%29.png",
    size: "511 KB",
    link1: "https://drive.google.com/file/d/1j6AC5iS6WqPZDr72T58ioe0qhT8HlpGh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "seaQuest DSV (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SeaQuest%20DSV%20%28USA%29.png",
    size: "1435 KB",
    link1: "https://drive.google.com/file/d/19kRHO77P364_mf1C8ruojzDX7DCz-6Op/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret of Evermore (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Secret%20of%20Evermore%20%28USA%29.png",
    size: "2308 KB",
    link1: "https://drive.google.com/file/d/1kd08C5qoKeAtOUlCc5LJEFLR3TelHctP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret of Evermore (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Secret%20of%20Evermore%20%28USA%29.png",
    size: "2297 KB",
    link1: "https://drive.google.com/file/d/1z9GBvDmjiOCHzis1RL38gkgouKCgESbb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret of Mana (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Secret%20of%20Mana%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "1317 KB",
    link1: "https://drive.google.com/file/d/113XNI4ZJhy92p0M9KeRcS-OpagWieNxI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret of Mana (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Secret%20of%20Mana%20%28USA%29.png",
    size: "1317 KB",
    link1: "https://drive.google.com/file/d/1pWUWjnCfnIYX-RcRSJUWl3Oqxze6lYvM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret of Mana (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Secret%20of%20Mana%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "1317 KB",
    link1: "https://drive.google.com/file/d/1TR12gv8onOtyKElOE9iboR-Gr4Rijp4o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret of the Stars (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "618 KB",
    link1: "https://drive.google.com/file/d/1QxygGM-ZK_N23zeOCtMRkzYVpEI3SZmT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Seiken Densetsu 3 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Seiken%20Densetsu%203%20%28Japan%29%20%28Seiken%20Densetsu%20Collection%29.png",
    size: "2768 KB",
    link1: "https://drive.google.com/file/d/1woZhhPOlUTMI6wkLRV8Zu2iRZ7CanM66/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sengoku Denshou (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sengoku%20Denshou%20%28Japan%29.png",
    size: "514 KB",
    link1: "https://drive.google.com/file/d/1iX8-Ozj2176JZ9QgQNb0P-QbaRc6ZzMU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadowrun (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Shadowrun%20%28USA%29.png",
    size: "679 KB",
    link1: "https://drive.google.com/file/d/1sGxetFCo9Z3KGnzWHKyFahDMY9lGqd7V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai II - Dragon's Eye (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Shanghai%20II%20-%20Dragon%27s%20Eye%20%28USA%29.png",
    size: "379 KB",
    link1: "https://drive.google.com/file/d/1YG1vD5dszmLkYbVY-9q5cavNE60DhkQy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shaq-Fu (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Shaq%20Fu%20%28USA%29%20%28Beta%29.png",
    size: "1594 KB",
    link1: "https://drive.google.com/file/d/1eYzD_hU5Kk2RjGZA1r-0dG9Eq8WOnpqq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shaq-Fu (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Shaq-Fu%20%28USA%29.png",
    size: "1594 KB",
    link1: "https://drive.google.com/file/d/1zJrDJWWZ7SjwH1CUBr8EAsWV3vdH-P6h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shien's Revenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Shien%27s%20Revenge%20%28USA%29.png",
    size: "1148 KB",
    link1: "https://drive.google.com/file/d/1Rti0WsWLEQcBwerxMRhGaViFknk_88mQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Kidou Senki Gundam W - Endless Duel (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Shin%20Kidou%20Senki%20Gundam%20W%20-%20Endless%20Duel%20%28Japan%29.png",
    size: "1167 KB",
    link1: "https://drive.google.com/file/d/1nsb1U74d4PrA2KQy5MJgb8nR4Zlkwdw9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Megami Tensei (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Shin%20Megami%20Tensei%20%28Japan%29%20%28Rev%201%29.png",
    size: "814 KB",
    link1: "https://drive.google.com/file/d/1Kffv61Qg_Hxal8VBrDCSQIAYG56aBFkV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Megami Tensei II (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Shin%20Megami%20Tensei%20II%20%28Japan%29%20%28Rev%201%29.png",
    size: "1560 KB",
    link1: "https://drive.google.com/file/d/1GUMJhWPHX-3C7tA-VUq1wxSSTOWaanQi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Nekketsu Kouha - Kunio-tachi no Banka (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Shin%20Nekketsu%20Kouha%20-%20Kunio-tachi%20no%20Banka%20%28Japan%29.png",
    size: "1456 KB",
    link1: "https://drive.google.com/file/d/16g_W3dsscaycZ9fAimLidD2TDjOvpphs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shodai Nekketsu Kouha Kunio-kun (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Shodai%20Nekketsu%20Kouha%20Kunio-kun%20%28Japan%29%20%28Rev%201%29.png",
    size: "644 KB",
    link1: "https://drive.google.com/file/d/1f9XYVSXLAq_j0_NXgpi6hf7zM_r50397/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sid Meier's Civilization (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sid%20Meier%27s%20Civilization%20%28USA%29.png",
    size: "943 KB",
    link1: "https://drive.google.com/file/d/1pXp1QkeHLUA1JQMfDD6sA9rYPd-AqU_a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Side Pocket (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Side%20Pocket%20%28USA%29.png",
    size: "593 KB",
    link1: "https://drive.google.com/file/d/1fLivWyEqQeEwI0sD9BVuQ9cGRqqG5LR0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Side Pocket (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Side%20Pocket%20%28USA%29.png",
    size: "593 KB",
    link1: "https://drive.google.com/file/d/1nn0TcYiq-m04hfG28IJym6kNmiv93af2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sim City 2000 (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "825 KB",
    link1: "https://drive.google.com/file/d/1nXJapvP9muW6zxQW5DDmHoZDeFLK4QRQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimAnt - The Electronic Ant Colony (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SimAnt%20-%20The%20Electronic%20Ant%20Colony%20%28USA%29.png",
    size: "673 KB",
    link1: "https://drive.google.com/file/d/1-nviMfVM6-UVy5baBgH-yCs15rS8lEa0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimCity (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SimCity%20%28USA%29.png",
    size: "298 KB",
    link1: "https://drive.google.com/file/d/1ybBOFma81dtw74nZburnTtP61k9bGYKL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimCity 2000 - The Ultimate City Simulator (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SimCity%202000%20-%20The%20Ultimate%20City%20Simulator%20%28USA%29.png",
    size: "825 KB",
    link1: "https://drive.google.com/file/d/1RayrWuQ-LkD2sb6C9GupMaktvVv0NCuF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SimEarth - The Living Planet (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SimEarth%20-%20The%20Living%20Planet%20%28USA%29.png",
    size: "592 KB",
    link1: "https://drive.google.com/file/d/1jvbs0BaL-6cttzkLI_dj2JAnG1NvPnlF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Simpsons, The - Bart's Nightmare (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Simpsons%2C%20The%20-%20Bart%27s%20Nightmare%20%28USA%29.png",
    size: "664 KB",
    link1: "https://drive.google.com/file/d/1hn9QrJ-mcRGMP88qYW4UXLuBaUUeU9Qr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Skuljagger - Revolt of the Westicans (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Skuljagger%20-%20Revolt%20of%20the%20Westicans%20%28USA%29.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/1rEB-IgNMCeZl9hgZp92T-MRl06lGtYnW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sky Blazer (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "585 KB",
    link1: "https://drive.google.com/file/d/1X13Np8mQxtUmDQp1h4E1g1yYytorhG0S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Skyblazer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Skyblazer%20%28USA%29.png",
    size: "585 KB",
    link1: "https://drive.google.com/file/d/1f62SSrkirM7M80zrnvIXeUv-VTlgOSfz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slayers (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Slayers%20%28Japan%29.png",
    size: "1294 KB",
    link1: "https://drive.google.com/file/d/1ur1DojPuFYciyj_JImQynqN_B8Q5v8zh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smart Ball (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Smart%20Ball%20%28USA%29.png",
    size: "356 KB",
    link1: "https://drive.google.com/file/d/1Gt5J2oTBcmwOTlBhmqb0Mlh8NN51Po44/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smart Ball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Smart%20Ball%20%28USA%29.png",
    size: "356 KB",
    link1: "https://drive.google.com/file/d/1LEquoSYcDtKyZKjJqrBBj-KcWcH0knfF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snoopy Concert (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Snoopy%20Concert%20%28Japan%29.png",
    size: "1523 KB",
    link1: "https://drive.google.com/file/d/1ATYpvO1PXLtWGRXSfWBGmqTZRUB6d9Ts/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snow White in Happily Ever After (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Snow%20White%20in%20Happily%20Ever%20After%20%28USA%29.png",
    size: "625 KB",
    link1: "https://drive.google.com/file/d/1NF3K9nqwn3QBH4aC68WgkvYSYZXmcI7W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snow White in Happily Ever After (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Snow%20White%20in%20Happily%20Ever%20After%20%28USA%29.png",
    size: "625 KB",
    link1: "https://drive.google.com/file/d/1bCxbnNHVSM3aLb4BT6j1T42QCbUCRlsq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soccer Kid (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Soccer%20Kid%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "815 KB",
    link1: "https://drive.google.com/file/d/1gxVrKpnI1aOQ_HRbqlZHqUtSbbrTq5DE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soldiers of Fortune (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Soldiers%20of%20Fortune%20%28USA%29.png",
    size: "957 KB",
    link1: "https://drive.google.com/file/d/1O0ssbeZt8rARPhOskvogxAGky1IcFBmz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soldiers of Fortune (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Soldiers%20of%20Fortune%20%28USA%29.png",
    size: "957 KB",
    link1: "https://drive.google.com/file/d/18HSOnhOUsewKYLZhQEi1N4FQVOz-UsDI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Blast Man (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sonic%20Blast%20Man%20%28USA%29.png",
    size: "608 KB",
    link1: "https://drive.google.com/file/d/1Ku8wu_6lMTaW_dWa7WCGYrtBUugDe8wd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Blast Man (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sonic%20Blast%20Man%20%28USA%29.png",
    size: "608 KB",
    link1: "https://drive.google.com/file/d/11TfaYjwppG1iLnudfDbgJiJZm_5z_9r9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Blast Man II (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sonic%20Blast%20Man%20II%20%28USA%29.png",
    size: "880 KB",
    link1: "https://drive.google.com/file/d/1zujtDbG9IqnLhhY6GJvcuAmSAzXmo9D-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Blast Man II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sonic%20Blast%20Man%20II%20%28USA%29.png",
    size: "880 KB",
    link1: "https://drive.google.com/file/d/1e0eq1wbOvyohQrdQ-8hlGctIUZBNe8qX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SOS (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SOS%20%28USA%29.png",
    size: "745 KB",
    link1: "https://drive.google.com/file/d/15aGYXE3Hq2ArNXlA0v4mW2yYRaR8o2YE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soul Blazer (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Soul%20Blazer%20%28USA%29.png",
    size: "833 KB",
    link1: "https://drive.google.com/file/d/1d8k_W9oiXrgFMEpjs0zTr5EJV02cWSwz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soul Blazer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Soul%20Blazer%20%28USA%29.png",
    size: "816 KB",
    link1: "https://drive.google.com/file/d/1pHArYIBuH5rjolnLnHEx4tet01JNQU-q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Ace (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Space%20Ace%20%28USA%29%20%28Beta%29.png",
    size: "819 KB",
    link1: "https://drive.google.com/file/d/1TWP2eRy-joR4pHnRoIFHhKx_ADPDDnk3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Ace (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Space%20Ace%20%28USA%29.png",
    size: "819 KB",
    link1: "https://drive.google.com/file/d/1RhZhrbP5HLV_Kw1twSYIU7RqtrzqglXk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Football - One on One (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Space%20Football%20-%20One%20on%20One%20%28USA%29.png",
    size: "226 KB",
    link1: "https://drive.google.com/file/d/18EEAZ6Kex2GLQtY_QyapafSnLQevmnHi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Invaders (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Space%20Invaders%20%28USA%29.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/1X39REzcHx1TJfIKhTGQwG46iX6B8DXXV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Megaforce (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Space%20Megaforce%20%28USA%29.png",
    size: "571 KB",
    link1: "https://drive.google.com/file/d/1La_tRgVSSYPFUGKeVMOofzGkLDGhJFkT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Megaforce (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Space%20Megaforce%20%28USA%29.png",
    size: "571 KB",
    link1: "https://drive.google.com/file/d/1i_6ZUBx4inmfVf98CTNbU8kFSbivYxql/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spanky's Quest (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spanky%27s%20Quest%20%28USA%29.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1q5L4q-SZ0XCXDaE4W2LBhaxQUTUhnCA3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sparkster (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sparkster%20%28USA%29.png",
    size: "812 KB",
    link1: "https://drive.google.com/file/d/1VCz8wRaBeeI9dwLUEdERtGuwwkHznxLK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sparkster (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sparkster%20%28USA%29.png",
    size: "812 KB",
    link1: "https://drive.google.com/file/d/1zrw11uInnLMPyap8wMP6521B09s36Ulj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spawn (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1422 KB",
    link1: "https://drive.google.com/file/d/1CI25WXTEYUfHx-9l1OLCz8kcgB9YKjcO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spectre (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spectre%20%28USA%29.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/1WdPkKLdAMIb0zfXt017jldQzUsn6-Qcc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speed Racer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Speed%20Racer%20%28USA%29.png",
    size: "1043 KB",
    link1: "https://drive.google.com/file/d/1essBVbw118hFFsHtUznok6nNadFhYI4x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedy Gonzales - Los Gatos Bandidos (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Speedy%20Gonzales%20-%20Los%20Gatos%20Bandidos%20%28USA%29%20%28Rev%201%29.png",
    size: "752 KB",
    link1: "https://drive.google.com/file/d/1CCIk6jl4YC7lgjb5zyLEhSn5wmGBRROI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedy Gonzales - Los Gatos Bandidos (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Speedy%20Gonzales%20-%20Los%20Gatos%20Bandidos%20%28USA%29.png",
    size: "753 KB",
    link1: "https://drive.google.com/file/d/1PX2kyvKVjpOzfGJFwJPw8NjmVNFaZdZA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedy Gonzales - Los Gatos Bandidos (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Speedy%20Gonzales%20-%20Los%20Gatos%20Bandidos%20%28USA%29%20%28Rev%201%29.png",
    size: "752 KB",
    link1: "https://drive.google.com/file/d/1HRZ1Iz_0sk69gDLfv5qpIHERZpAvrBhS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man & Venom - Maximum Carnage (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1180 KB",
    link1: "https://drive.google.com/file/d/1aUmWdyWdZxPWAlV-cK4TP9uOT6jEEQIX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spider-Man%20%28USA%29.png",
    size: "1428 KB",
    link1: "https://drive.google.com/file/d/1nHwfG9-F-unzG617fsxAZfvsMw6JlP-a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man - Venom - Maximum Carnage (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spider-Man%20-%20Venom%20-%20Maximum%20Carnage%20%28USA%29.png",
    size: "1180 KB",
    link1: "https://drive.google.com/file/d/1QQQHnOryysi9Kb2q2vysa8LYbg17MFMl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man - X-Men - Arcade's Revenge (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spider-Man%20-%20X-Men%20-%20Arcade%27s%20Revenge%20%28USA%29.png",
    size: "625 KB",
    link1: "https://drive.google.com/file/d/13MqRlkA6BBwTML6CcCGIeNQOXguAcWeV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man - X-Men - Arcade's Revenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spider-Man%20-%20X-Men%20-%20Arcade%27s%20Revenge%20%28USA%29.png",
    size: "625 KB",
    link1: "https://drive.google.com/file/d/1INuydDFznxmOuk7YGNrK9Rkcc_dD6-Jb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man - X-Men - Arcade's Revenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spider-Man%20-%20X-Men%20-%20Arcade%27s%20Revenge%20%28USA%29.png",
    size: "625 KB",
    link1: "https://drive.google.com/file/d/1or0ZtjnH50QqoIY-uctBtQIBTTIuottB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spindizzy Worlds (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spindizzy%20Worlds%20%28USA%29.png",
    size: "469 KB",
    link1: "https://drive.google.com/file/d/1yqfyfHscE6duejsuXxOuq8s94OQ-5tgV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spindizzy Worlds (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spindizzy%20Worlds%20%28USA%29.png",
    size: "469 KB",
    link1: "https://drive.google.com/file/d/1KRUFSJwCLU-7wzUCLERtmTbg_Wq4EwG0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spindizzy Worlds (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spindizzy%20Worlds%20%28USA%29.png",
    size: "469 KB",
    link1: "https://drive.google.com/file/d/1VUByoSTtZ6NFssKY72jETZvY6K2KgU9a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spirou (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Spirou%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "1033 KB",
    link1: "https://drive.google.com/file/d/11jcx5WtT2jvlfyiJaSXTEkSkiscSND0l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sporting News Baseball, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sporting%20News%20Baseball%2C%20The%20%28USA%29.png",
    size: "743 KB",
    link1: "https://drive.google.com/file/d/11LISS_Y-dzX-yN0Md0NbaodJZCTtIBa-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sporting News Baseball, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sporting%20News%20Baseball%2C%20The%20%28USA%29.png",
    size: "743 KB",
    link1: "https://drive.google.com/file/d/1P7REnxYBvRUusiQMd7Ivyd6lgMVsZa5t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sports Illustrated - Championship Football & Baseball (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1338 KB",
    link1: "https://drive.google.com/file/d/1Ar4kpzpZufyU7Hje6tBOj7UMUfyZJSp1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox (ESP-CHIP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Fox%20%28USA%29%20%28Rev%201%29.png",
    size: "607 KB",
    link1: "https://drive.google.com/file/d/1epF9T28_w2yNJPoAOAfeI_4_lKHGZMMD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Fox%20%28USA%29.png",
    size: "607 KB",
    link1: "https://drive.google.com/file/d/1_Dh8UwV4ux2p3467TS8vPBbFdxFWRAlX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Fox%20%28USA%29.png",
    size: "607 KB",
    link1: "https://drive.google.com/file/d/1wBZZfAbCPXVrY375ULt-PVQxOVDaizw-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Fox%20%28USA%29%20%28Rev%201%29.png",
    size: "607 KB",
    link1: "https://drive.google.com/file/d/1RjpnJCHsN17uEk9CQw8h74XNMeVoh_Mm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox (USA) (Rev 2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Fox%20%28USA%29%20%28Rev%202%29.png",
    size: "607 KB",
    link1: "https://drive.google.com/file/d/1XBKsG0hRjBRUf3iCOD8_P_m44bE1OG1e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox (USA) (Rev 2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Fox%20%28USA%29%20%28Rev%202%29.png",
    size: "607 KB",
    link1: "https://drive.google.com/file/d/1pn8sOY3LOZyLVwtpNy6jfjKgzLWCnn5a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox 2 (USA, Europe) (Classic Mini, Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Fox%202%20%28USA%2C%20Europe%29%20%28Classic%20Mini%2C%20Switch%20Online%2C%20Nintendo%20Leak%29.png",
    size: "670 KB",
    link1: "https://drive.google.com/file/d/1_O7v95S4N61H_Oh1j7xF_vy3K_BdKWeZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox 2 (USA, Europe) (Classic Mini, Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Fox%202%20%28USA%2C%20Europe%29%20%28Classic%20Mini%2C%20Switch%20Online%2C%20Nintendo%20Leak%29.png",
    size: "670 KB",
    link1: "https://drive.google.com/file/d/1pxfR5V0o31zK_k0B9RdKZSufdOxzBsnM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox 2 Beta (ESP-CHIP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "669 KB",
    link1: "https://drive.google.com/file/d/1euS_2exq8YqWbrJglhtQK-cY1GaZlnx-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Ocean (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Ocean%20%28Japan%29%20%5BT-En%20by%20DeJap%20v1.0%5D.png",
    size: "5179 KB",
    link1: "https://drive.google.com/file/d/1-pQuauJXUs1rQGPz4n54cQ_6D6pTgZgE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Trek - Deep Space Nine - Crossroads of Time (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Trek%20-%20Deep%20Space%20Nine%20-%20Crossroads%20of%20Time%20%28USA%29.png",
    size: "685 KB",
    link1: "https://drive.google.com/file/d/1G_VUATp8wrEc_AkgN7GFxMBLSLVXB_qo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Trek - Starfleet Academy - Starship Bridge Simulator (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Trek%20-%20Starfleet%20Academy%20-%20Starship%20Bridge%20Simulator%20%28USA%29.png",
    size: "403 KB",
    link1: "https://drive.google.com/file/d/1wWYWBOd0aWCdWgIFSewk1vpVUbaZGtd4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Trek - The Next Generation - Future's Past (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Star%20Trek%20-%20The%20Next%20Generation%20-%20Future%27s%20Past%20%28USA%29.png",
    size: "1362 KB",
    link1: "https://drive.google.com/file/d/1gzHExcF2RiWCmRcSKlT6jZkB0RL4vVhR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stargate (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Stargate%20%28USA%29%20%28Beta%29.png",
    size: "1377 KB",
    link1: "https://drive.google.com/file/d/1hAQ4yMQIdiEE8o-RB21ak1Yepu-jp3kP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stargate (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Stargate%20%28USA%29.png",
    size: "1376 KB",
    link1: "https://drive.google.com/file/d/1mQTnhStxal0mq9Olp1iF37px16Qhkeyd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Steel Talons (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Steel%20Talons%20%28USA%29.png",
    size: "234 KB",
    link1: "https://drive.google.com/file/d/1FqBxrUwjmv6KhGbHE31fSoUKTrJcgL3F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sterling Sharpe - End 2 End (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sterling%20Sharpe%20-%20End%202%20End%20%28USA%29.png",
    size: "581 KB",
    link1: "https://drive.google.com/file/d/1a5ElU1l86YBNZ57eiAydpTcr-oDrr9gv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stone Protectors (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Stone%20Protectors%20%28USA%29.png",
    size: "1340 KB",
    link1: "https://drive.google.com/file/d/1ChaySxb4N4agsEnfaAio8LWfVUHEfAXa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stone Protectors (USA) (Steam) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Stone%20Protectors%20%28USA%29.png",
    size: "1340 KB",
    link1: "https://drive.google.com/file/d/1-fh4uUpXunMg7nhnnrgNlYEQYH3IlzVx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Combat (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Combat%20%28USA%29.png",
    size: "613 KB",
    link1: "https://drive.google.com/file/d/1nFmUFFNvfO9IqfOKFy59JaaDOPfrgE-g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter 2 - The New Challengers (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "2772 KB",
    link1: "https://drive.google.com/file/d/1XrSE06a30gMXIQhuFpfcas49G8-L9NoP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter Alpha 2 (CHIP-ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20Alpha%202%20%28USA%29.png",
    size: "3572 KB",
    link1: "https://drive.google.com/file/d/1N_1e8yeiNyzIHVcQpeXM28o2eenBIwqs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter Alpha 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20Alpha%202%20%28USA%29.png",
    size: "3572 KB",
    link1: "https://drive.google.com/file/d/1oL7ubN63QjU4sM0FllxYJvJzHpmAIZ-U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20II%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "1293 KB",
    link1: "https://drive.google.com/file/d/1kko46J_7qKWoigCcTK89AXsUhAPk4HO9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20II%20%28USA%29.png",
    size: "1293 KB",
    link1: "https://drive.google.com/file/d/1aQW0Lxq9EJd4cCJ7Qb7BfMpfc11Ph60u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II (USA) (Capcom Town)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20II%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "1293 KB",
    link1: "https://drive.google.com/file/d/1oKp9CktR-XSY1y7Qq2893RIVZ_I_KAlN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20II%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "1293 KB",
    link1: "https://drive.google.com/file/d/1jQwFT1nawte_43Oc9fMPA4VO0lZgC15L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II Turbo (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20II%20Turbo%20%28USA%29%20%28Rev%201%29%20%28Virtual%20Console%29.png",
    size: "1630 KB",
    link1: "https://drive.google.com/file/d/1a6sv5e0KZmvLkm7vbvKNRH1ecWPF9yuJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II Turbo (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20II%20Turbo%20%28USA%29.png",
    size: "1630 KB",
    link1: "https://drive.google.com/file/d/1otKke2EN8B9QUW5Hj5lbRpSK-Dfi0qrR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II Turbo (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20II%20Turbo%20%28USA%29%20%28Rev%201%29.png",
    size: "1631 KB",
    link1: "https://drive.google.com/file/d/1v6GuiRE8mNnX2c-4WFXIyKKCA-4xxvUR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II Turbo (USA) (Rev 1) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Fighter%20II%20Turbo%20%28USA%29%20%28Rev%201%29%20%28Virtual%20Console%29.png",
    size: "1630 KB",
    link1: "https://drive.google.com/file/d/1O8Nzq7qvShR8pI4ylTPKezn1H3iiQL3V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Racer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Racer%20%28USA%29.png",
    size: "693 KB",
    link1: "https://drive.google.com/file/d/1FzexGhC9HGDK4dT4wykoomuivnlqQ4VW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Sports - Jammit (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Sports%20-%20Jammit%20%28USA%29.png",
    size: "1329 KB",
    link1: "https://drive.google.com/file/d/1VOkjxQJ4_1yyAUN0BXMexUBNJGrXJaPG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Sports - Street Hockey '95 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Street%20Sports%20-%20Street%20Hockey%20%2795%20%28USA%29.png",
    size: "2089 KB",
    link1: "https://drive.google.com/file/d/1kHHw2zZxBRnBSnrrlhOhPgrJwEhIb1Pm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strike Gunner S.T.G (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Strike%20Gunner%20S.T.G%20%28USA%29.png",
    size: "405 KB",
    link1: "https://drive.google.com/file/d/1SMU0v7N07l3JAkqNw77F8CJtddEI7M87/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Striker(ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Striker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29%20%28Beta%201%29.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/1p19OiVw7laMH1XYNvtqz0teXxsMmDE5X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stunt Race FX (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Stunt%20Race%20FX%20%28USA%29%20%28Rev%201%29.png",
    size: "567 KB",
    link1: "https://drive.google.com/file/d/1Fq0pdr4L3x0Q7sGqc17Pi2v4ZW0wQ8b2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sunset Riders (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sunset%20Riders%20%28USA%29.png",
    size: "753 KB",
    link1: "https://drive.google.com/file/d/148LP3uU8WOjjRuoqH80ER0NE5swq0sez/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sunset Riders (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Sunset%20Riders%20%28USA%29.png",
    size: "753 KB",
    link1: "https://drive.google.com/file/d/1f6WsH8jYpA7VoSWRRtweCjh7OTCDLQk1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super 3D Noah's Ark (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%203D%20Noah%27s%20Ark%20%28USA%29%20%28Unl%29.png",
    size: "493 KB",
    link1: "https://drive.google.com/file/d/1rUk-7e2Q9IzmrqhizoPq1oxeW6hUYOd9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super 3D Noah's Ark (USA) (Unl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%203D%20Noah%27s%20Ark%20%28USA%29%20%28Unl%29.png",
    size: "493 KB",
    link1: "https://drive.google.com/file/d/12uH5Zx4rvGHSE16HtJ0EXBT5iBaJNSWH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super 8 (USA) (Unl)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "4 KB",
    link1: "https://drive.google.com/file/d/1dSm72Tk8SP_svBAFxg4BIGRFmtMeFxWM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Adventure Island (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Adventure%20Island%20%28USA%29.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/1CRISiQVjgfBl-CbxJv51thRVPk_Wyj6a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Adventure Island II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Adventure%20Island%20II%20%28USA%29.png",
    size: "776 KB",
    link1: "https://drive.google.com/file/d/1dLIV9BJoVvvZOsE-CN6loUyl9DTomWI-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Aleste (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Aleste%20%28Europe%29.png",
    size: "660 KB",
    link1: "https://drive.google.com/file/d/1rqwxhaaaOlz1KRAIsBze_X3jNqgPwuJ7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Alfred Chicken (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Alfred%20Chicken%20%28USA%29.png",
    size: "729 KB",
    link1: "https://drive.google.com/file/d/1BXzyHsi0YwP1Qs0F9UdJ_Dv6dvH5sRHs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Alfred Chicken (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Alfred%20Chicken%20%28USA%29.png",
    size: "729 KB",
    link1: "https://drive.google.com/file/d/1SBb3dOjPxsP9FCtArMjn8G7E8mIXVgE8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Aquatic Games Starring the Aquabats, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Aquatic%20Games%20Starring%20the%20Aquabats%2C%20The%20%28USA%29.png",
    size: "248 KB",
    link1: "https://drive.google.com/file/d/13MmAOr-FYrHawIkXRqfpcKRCWUQAfL8p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Back to the Future Part II (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Back%20to%20the%20Future%20Part%20II%20%28Japan%29.png",
    size: "690 KB",
    link1: "https://drive.google.com/file/d/1oUVMzhJ_dLPffRpjp_HQJOCdyLPwxxeg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Baseball 2020 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Baseball%202020%20%28USA%29.png",
    size: "613 KB",
    link1: "https://drive.google.com/file/d/10D3eFTZES6_CEUEOyF_NgW2SRghJG2mV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Baseball Simulator 1.000 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Baseball%20Simulator%201.000%20%28USA%29.png",
    size: "193 KB",
    link1: "https://drive.google.com/file/d/1cBYHtOE-KDj1tJd_5jkPrjiPJJAY_rkC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bases Loaded (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bases%20Loaded%20%28USA%29.png",
    size: "404 KB",
    link1: "https://drive.google.com/file/d/1brq2wAxqFHfMk5kfIkEDRVfWCfI4oaMe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bases Loaded 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bases%20Loaded%202%20%28USA%29.png",
    size: "549 KB",
    link1: "https://drive.google.com/file/d/1RDgsZyZz57uLnwos9pbDprk12gVy47ry/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bases Loaded 3 - License to Steal (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bases%20Loaded%203%20-%20License%20to%20Steal%20%28USA%29.png",
    size: "824 KB",
    link1: "https://drive.google.com/file/d/1ncTmL2JZB8f0EZ6qHskMauJDshBytff-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Batter Up (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Batter%20Up%20%28USA%29.png",
    size: "550 KB",
    link1: "https://drive.google.com/file/d/10JoT8ZQ5uUTMGS9sx480pmMUI7lMnG5l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Battleship (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Battleship%20%28USA%29.png",
    size: "212 KB",
    link1: "https://drive.google.com/file/d/1Kiu4tOc-5ZAmCV9Hjj_jOgPGSVl_M3B3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Battletank 2 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Battletank%202%20%28USA%29.png",
    size: "1150 KB",
    link1: "https://drive.google.com/file/d/1Oodd4gXQLHJlLp2RCHXriRvTX7hmH5fZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Battletank 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Battletank%202%20%28USA%29.png",
    size: "1151 KB",
    link1: "https://drive.google.com/file/d/1D-JvKCjWbbm0Yb7kLf-bRP1CT8yW3yvC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Black Bass (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Black%20Bass%20%28USA%29.png",
    size: "697 KB",
    link1: "https://drive.google.com/file/d/1YljN-1fkH2DVHs3eneIP_KUDDwa5fhxT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bomberman (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bomberman%20%28USA%29.png",
    size: "297 KB",
    link1: "https://drive.google.com/file/d/1t07QfOIB65hNXdFTsI7moGbdkqUl2I5i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bomberman 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bomberman%202%20%28USA%29.png",
    size: "430 KB",
    link1: "https://drive.google.com/file/d/1Xo2LpFgM5IWu2roIcJdkJl-Mxgir5lYD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bonk (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bonk%20%28USA%29.png",
    size: "869 KB",
    link1: "https://drive.google.com/file/d/17e53va30XmYGcDVnmonXClcVd3eZmixT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bowling (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bowling%20%28USA%29.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/1Qnn_Q-HXY2JuBzQfDHuZuTPBA3Tk17j5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Buster Bros. (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Buster%20Bros.%20%28USA%29%20%28Rev%201%29%20%28Beta%29.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1r9J3eh-jaIqmQACbPxHU70F8Y7XfNfRx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Buster Bros. (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Buster%20Bros.%20%28USA%29.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1PckJlC9zNWhVwt0y1iWyjcyYD_4lqt8o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Buster Bros. (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Buster%20Bros.%20%28USA%29%20%28Rev%201%29.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1BraHNOvbBF4cWwPbIcqZkq-k_FHGttGd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Caesars Palace (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Caesars%20Palace%20%28USA%29.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1EpqevZMz61Oyq2jiv5IXlr8YrSFwBETE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Castlevania IV (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Castlevania%20IV%20%28USA%29%20%28Castlevania%20Anniversary%20Collection%29.png",
    size: "1394 KB",
    link1: "https://drive.google.com/file/d/1_r9cq_RbInH4t-9gRuVOxNr1aDTwc883/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Castlevania IV (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Castlevania%20IV%20%28USA%29.png",
    size: "827 KB",
    link1: "https://drive.google.com/file/d/1x0cy8yriSwlldb-GVf66dDnvwoseGaTT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Castlevania IV (USA) (Castlevania Anniversary Collection)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Castlevania%20IV%20%28USA%29%20%28Castlevania%20Anniversary%20Collection%29.png",
    size: "827 KB",
    link1: "https://drive.google.com/file/d/1UmGroBtQBE53w86QkuIx9-nthwZUnWke/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Castlevania IV (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Castlevania%20IV%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "827 KB",
    link1: "https://drive.google.com/file/d/1_EwYlN3h696BCnGVPRHVzNcNo7LTi92L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Chase H.Q. (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Chase%20H.Q.%20%28USA%29.png",
    size: "484 KB",
    link1: "https://drive.google.com/file/d/1Oad0UnpnDbWfQBMrtg7uKHkuaRFzW_AH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Chase H.Q. (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Chase%20H.Q.%20%28USA%29.png",
    size: "484 KB",
    link1: "https://drive.google.com/file/d/1VDzRt-3jb3RpLVVW4oRguIFKaCX-edtm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Conflict (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Conflict%20%28USA%29.png",
    size: "556 KB",
    link1: "https://drive.google.com/file/d/1hfZy12fFcsMg9HFDjk_364Yyg-4_KYMR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Copa (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Copa%20%28Brazil%29%20%28Es%2CPt%29.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/14Mx1TzRbrFmud3JNeUHK6XPBSbutc9-5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Descentralizado 95 (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1076 KB",
    link1: "https://drive.google.com/file/d/1Z7WHmWcKQsKgTEQvHvyGXIRJVZOqw4Go/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Double Dragon (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Double%20Dragon%20%28USA%29.png",
    size: "673 KB",
    link1: "https://drive.google.com/file/d/1e8GHB_rCPoNE-iK2pkdCBBv_VS6BCqtP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Game Boy (Japan, USA) (En)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Game%20Boy%20%28Japan%2C%20USA%29%20%28En%29.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1Xr4S9YS6TIFyCeRNuw_FzDUyUCZWY2ZP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Game Boy (Japan, USA) (En) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Game%20Boy%20%28Japan%2C%20USA%29%20%28En%29%20%28Rev%201%29.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1FsbANbmZiWsrRgIuFIc8X3St-oKAUrQg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Ghouls 'N Ghosts (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Ghouls%20%27N%20Ghosts%20%28USA%29.png",
    size: "656 KB",
    link1: "https://drive.google.com/file/d/1TdwnifIOkiALkWfavXrqAleN2FVJmnLz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Ghouls 'N Ghosts (USA, Europe) (Virtual Console, Classic Mini, Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Ghouls%20%27N%20Ghosts%20%28USA%2C%20Europe%29%20%28Virtual%20Console%2C%20Classic%20Mini%2C%20Switch%20Online%29.png",
    size: "656 KB",
    link1: "https://drive.google.com/file/d/1VS6t16FINNYgnliWGi_he3eYzZWviGO5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Ghouls'n Ghosts (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Ghouls%20%27N%20Ghosts%20%28USA%29.png",
    size: "656 KB",
    link1: "https://drive.google.com/file/d/1n2hFMWS7Rsof36nMnUzTl1377CGC7ZOB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Goal! 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Goal%21%202%20%28USA%29.png",
    size: "271 KB",
    link1: "https://drive.google.com/file/d/1Uk3hZfzaqbSEbpZmZ4-f_t7Xzlb966Lb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Godzilla (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Godzilla%20%28USA%29.png",
    size: "736 KB",
    link1: "https://drive.google.com/file/d/1i8C4DFEmQ-ibghwHA6yZKzm3Q9vDGBVa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Godzilla (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Godzilla%20%28USA%29.png",
    size: "736 KB",
    link1: "https://drive.google.com/file/d/1b9e5H6xT4XWERCog-XBNYn6XqGfd3lvX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super High Impact (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20High%20Impact%20%28USA%29.png",
    size: "807 KB",
    link1: "https://drive.google.com/file/d/1Mtw4mjgcc1clvehAYKEQdX22LKjQExO_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super James Pond (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20James%20Pond%20%28USA%29%20%28Beta%29.png",
    size: "356 KB",
    link1: "https://drive.google.com/file/d/14G_F8IuaYRHUIe9QpvHbUY3clLONptfG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super James Pond (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20James%20Pond%20%28USA%29.png",
    size: "356 KB",
    link1: "https://drive.google.com/file/d/1WoxJ0Z9Mrxfqb4CLY0NA6cNKOlc07VW0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario All-Stars (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20All-Stars%20%28USA%29%20%28Wii%29.png",
    size: "951 KB",
    link1: "https://drive.google.com/file/d/1vwlG96b2mmzF_ErFfGeKy_2iEp_L0VZK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario All-Stars (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20All-Stars%20%28USA%29.png",
    size: "950 KB",
    link1: "https://drive.google.com/file/d/1JC4Q8MeDAE2CYR0Tf7zyyCv01IlBja80/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario All-Stars (USA) (Wii)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20All-Stars%20%28USA%29%20%28Wii%29.png",
    size: "950 KB",
    link1: "https://drive.google.com/file/d/1eOPJdhFLsWfxSp_Vr98Rr9g5JYA58AWt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario All-Stars (USA, Europe) (Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20All-Stars%20%28USA%2C%20Europe%29%20%28Switch%20Online%29.png",
    size: "950 KB",
    link1: "https://drive.google.com/file/d/1kci4Jvlf3Qufg8JRATi1Dam1Ymnl1Mmf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario All-Stars + Super Mario World (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20All-Stars%20%2B%20Super%20Mario%20World%20%28USA%29.png",
    size: "1310 KB",
    link1: "https://drive.google.com/file/d/1pZAVdcmEvOGZugKozLyszPQ9gU-B375r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Kart (ESP-CHIP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20Kart%20%28USA%29.png",
    size: "369 KB",
    link1: "https://drive.google.com/file/d/1MmNDfZqXnY9CJ_wdEADUX5H-rBiZL-Ka/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Kart (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20Kart%20%28USA%29.png",
    size: "347 KB",
    link1: "https://drive.google.com/file/d/15LUYgm_ehHxuvp6fO6FP5mmitWGeJ7dc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario RPG (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20RPG%20%28Japan%29%20%28Virtual%20Console%29.png",
    size: "2619 KB",
    link1: "https://drive.google.com/file/d/1hGJnKUNk0gPr1FDydXi5_bTk3V3LzEQU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario RPG - Legend of the Seven Stars (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20RPG%20-%20Legend%20of%20the%20Seven%20Stars%20%28USA%29.png",
    size: "2622 KB",
    link1: "https://drive.google.com/file/d/1DOx5px5oUCzrUt4M5-qGRTHV0P_sc03E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario RPG - Legend of the Seven Stars (USA, Europe) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20RPG%20-%20Legend%20of%20the%20Seven%20Stars%20%28USA%2C%20Europe%29%20%28Virtual%20Console%29.png",
    size: "2622 KB",
    link1: "https://drive.google.com/file/d/1-7HjwtoUzD5zRM7SNIxPDkpBA0sSy9IO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario World (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%20%28USA%29.png",
    size: "368 KB",
    link1: "https://drive.google.com/file/d/1G_yylKRbQkYjrLd5nq8i3LauXhrpN7qu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario World (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%20%28USA%29.png",
    size: "339 KB",
    link1: "https://drive.google.com/file/d/1dHkrpQu5IOHrW9zLS_JIk18z_5bdEhAw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario World (USA, Europe) (Virtual Console, Classic Mini, Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%20%28USA%2C%20Europe%29%20%28Virtual%20Console%2C%20Classic%20Mini%2C%20Switch%20Online%29.png",
    size: "339 KB",
    link1: "https://drive.google.com/file/d/1j0a5pxfiWWitoBUWj8iRlfI7UyvpTE6v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario World 2 - Yoshi's Island (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%202%20-%20Yoshi%27s%20Island%20%28USA%29%20%28Rev%201%29.png",
    size: "1279 KB",
    link1: "https://drive.google.com/file/d/1X3cmmPj5hH2Cmgm4hQRZjhx-_pMC7sAx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario World 2 - Yoshi's Island (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%202%20-%20Yoshi%27s%20Island%20%28USA%29.png",
    size: "1258 KB",
    link1: "https://drive.google.com/file/d/17K2UPPEt7WWoY42305VsUtz4aI4VfnGI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario World 2 - Yoshi's Island (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%202%20-%20Yoshi%27s%20Island%20%28USA%29%20%28Rev%201%29.png",
    size: "1259 KB",
    link1: "https://drive.google.com/file/d/1MU9kOTAwrrtn_n_Rp3UHxSC1tXOSR0yk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Metroid (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Metroid%20%28USA%2C%20Europe%29%20%28En%2CJa%29%20%28Virtual%20Console%2C%20Classic%20Mini%2C%20Switch%20Online%29.png",
    size: "1535 KB",
    link1: "https://drive.google.com/file/d/1R3yp2tK0fwapxfwtfNBtLkJALWHWOTdB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Metroid (Japan, USA) (En,Ja)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Metroid%20%28Japan%2C%20USA%29%20%28En%2CJa%29.png",
    size: "1535 KB",
    link1: "https://drive.google.com/file/d/1gK1hKBDf2ptejQcV0GpfPq60AiZRzJyF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Metroid (USA, Europe) (En,Ja) (Virtual Console, Classic Mini, Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Metroid%20%28USA%2C%20Europe%29%20%28En%2CJa%29%20%28Virtual%20Console%2C%20Classic%20Mini%2C%20Switch%20Online%29.png",
    size: "1535 KB",
    link1: "https://drive.google.com/file/d/1e1ajMdbi-JPyGQhvPAaeZXkfazQYBoLO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Morph (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Morph%20%28Europe%29.png",
    size: "454 KB",
    link1: "https://drive.google.com/file/d/1ljbfNYW--RucNEu-m2jQIUW04wrqWtt1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Ninja Boy (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Ninja%20Boy%20%28USA%29.png",
    size: "513 KB",
    link1: "https://drive.google.com/file/d/1ROruCpfWmLv14_co1TRMhe0dtodlEkno/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Nova (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Nova%20%28USA%29.png",
    size: "580 KB",
    link1: "https://drive.google.com/file/d/136VFl3csyWhR9dQTiWgjKpou7Qg1LDF2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Nova - Darius Force (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "502 KB",
    link1: "https://drive.google.com/file/d/1ETtItf_GVkR-4W5DxlVUpW5Vkdb-IVSi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Off Road (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Off%20Road%20%28USA%29.png",
    size: "225 KB",
    link1: "https://drive.google.com/file/d/1vNTPyGuHTQaslWTR90YrBaI2d7rqcvU1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Off Road (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Off%20Road%20%28USA%29.png",
    size: "225 KB",
    link1: "https://drive.google.com/file/d/1U_T3bvGx_WhOm1VtSe5K65IZKnRN5XhP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Off Road - The Baja (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Off%20Road%20-%20The%20Baja%20%28USA%29.png",
    size: "670 KB",
    link1: "https://drive.google.com/file/d/1S8CupIGBa8-BFo-5Flmk8vlQ_mS9NIRy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Pac-Man (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/1Ozs-84vIjvOCygQW1ZDzT0zM03llfVP7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Pang (Esp)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Pang%20%28Europe%29.png",
    size: "356 KB",
    link1: "https://drive.google.com/file/d/1vzoQJm3spiO_2zrJLymP-B5dHiDV293Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Pinball - Behind the Mask (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Pinball%20-%20Behind%20the%20Mask%20%28USA%29.png",
    size: "410 KB",
    link1: "https://drive.google.com/file/d/1OnnByfqrEUI4aDw6K0fXTcoOA6ZcqAR2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Pinball - Behind the Mask (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Pinball%20-%20Behind%20the%20Mask%20%28USA%29%20%28Rev%201%29.png",
    size: "415 KB",
    link1: "https://drive.google.com/file/d/1D0VM8GGB6x0EysEIV5b_bEaKo2Z7ql-M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Play Action Football (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Play%20Action%20Football%20%28USA%29.png",
    size: "446 KB",
    link1: "https://drive.google.com/file/d/1TjfM8k6lDw6cpf8IjfnHfK7-nc8fzkSO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Punch-Out!! (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Punch-Out%21%21%20%28USA%29.png",
    size: "1460 KB",
    link1: "https://drive.google.com/file/d/1-Ghb-ErAjZw_sMjRtE6_9Ye_RAeiVJkj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Punch-Out!! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Punch-Out%21%21%20%28USA%29.png",
    size: "1460 KB",
    link1: "https://drive.google.com/file/d/1u8KPOkkyeNoM2XfMW_lUitSz-HUYBHPM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Putty (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Putty%20%28USA%29.png",
    size: "575 KB",
    link1: "https://drive.google.com/file/d/1cYNu3psA6yR-YE7iXwXUGMei2M1SwF3J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Puyo Puyo 2 (USA, Europe) (Ja) (Switch Online)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Puyo%20Puyo%202%20%28USA%2C%20Europe%29%20%28Ja%29%20%28Switch%20Online%29.png",
    size: "1258 KB",
    link1: "https://drive.google.com/file/d/1iviZ08Yn3oOpsKsK9ooQxXymz3gPzr8M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super R-Type (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20R-Type%20%28USA%29.png",
    size: "403 KB",
    link1: "https://drive.google.com/file/d/1m8ko5pSgbi_MStkUKfDaUkJW6v55sl6d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super R-Type (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20R-Type%20%28USA%29.png",
    size: "403 KB",
    link1: "https://drive.google.com/file/d/1GeLH8xtoX_BCne3YbP2pQ0Km3YilKnPe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super R.B.I. Baseball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20R.B.I.%20Baseball%20%28USA%29.png",
    size: "670 KB",
    link1: "https://drive.google.com/file/d/16FONnLcOYGiIzkP8umfJVv32kCjQDTF0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Scope 6 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Scope%206%20%28USA%29.png",
    size: "498 KB",
    link1: "https://drive.google.com/file/d/1Xwnf4FEBjvJGlJJKaKZl9vthdda3BxCk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Shadow of the Beast (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "566 KB",
    link1: "https://drive.google.com/file/d/1ZmkjDGQqGkqarnfJS0k4fS_KkW0wrq-c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Shell Monsters Story (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "2344 KB",
    link1: "https://drive.google.com/file/d/1HJJqxRvRd7ecviYddYuRXlF1w5GlNf3L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Slam Dunk (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Slam%20Dunk%20%28USA%29.png",
    size: "668 KB",
    link1: "https://drive.google.com/file/d/1jD30XcDLjWLk8hPN0_8Tv3UWbr1of9Zl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Slap Shot (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Slap%20Shot%20%28USA%29.png",
    size: "392 KB",
    link1: "https://drive.google.com/file/d/1RwIA-B9pyOTh2wjVFUYIDUkaZ_swwnf9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Smash T.V. (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Smash%20T.V.%20%28USA%29.png",
    size: "366 KB",
    link1: "https://drive.google.com/file/d/1lDpaO2HgcEfNKqYSff_QQ-rHkUl2vFEP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Soccer (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Soccer%20%28USA%29%20%28Arcade%29.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/15lhzA_DcQIrkEucGaaIXyIJbyGqeAbxd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Soccer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Soccer%20%28USA%29.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1gPII4Ua7qfNctkixouuYgBDdGk67iscT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Soccer (USA) (Arcade)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Soccer%20%28USA%29%20%28Arcade%29.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1f-UDdx2PAXxogWevUzqDmHFw01XUZbA9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Soccer Champ (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Soccer%20Champ%20%28USA%29.png",
    size: "241 KB",
    link1: "https://drive.google.com/file/d/1Qs-Z1kCbcxk_HJfyYv_yO6Hbq13S3JlH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Solitaire (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Solitaire%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "339 KB",
    link1: "https://drive.google.com/file/d/1nIlpgaWvD7r8qlgNI3e94DjlUIrtEolD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Solitaire (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Solitaire%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "346 KB",
    link1: "https://drive.google.com/file/d/1lLxT4yvmN-tX4zWIg80zWKxBEWiFn3Xp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Fox Weekend (USA) (Competition Cart, Nintendo Power mail-order)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Star%20Fox%20Weekend%20%28USA%29.png",
    size: "604 KB",
    link1: "https://drive.google.com/file/d/16PYYamvg_mcTrSm3BE8nulxlN4IA2nfc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Wars (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Star%20Wars%20%28USA%29.png",
    size: "851 KB",
    link1: "https://drive.google.com/file/d/1g6Ov5vYNDHoebaFvNap0ovXzu2tHiPYY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Wars (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Star%20Wars%20%28USA%29%20%28Rev%201%29.png",
    size: "853 KB",
    link1: "https://drive.google.com/file/d/14RyVCWBsGE9xc34qZzWTelKrLqkhSFxa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Wars - Return of the Jedi (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Star%20Wars%20-%20Return%20of%20the%20Jedi%20%28USA%29.png",
    size: "1670 KB",
    link1: "https://drive.google.com/file/d/13rRddeHteGXZ6iVceph1G44WOxoBBrxI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Wars - Return of the Jedi (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Star%20Wars%20-%20Return%20of%20the%20Jedi%20%28USA%29%20%28Rev%201%29.png",
    size: "1670 KB",
    link1: "https://drive.google.com/file/d/1dg8AfX9pwgKwEsG5tvwJyT5EeuzQrodD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Wars - The Empire Strikes Back (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Star%20Wars%20-%20The%20Empire%20Strikes%20Back%20%28USA%29.png",
    size: "1259 KB",
    link1: "https://drive.google.com/file/d/11WjCKJLuFMUJis8y4yv9e8JNnUa4AdEm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Wars - The Empire Strikes Back (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Star%20Wars%20-%20The%20Empire%20Strikes%20Back%20%28USA%29%20%28Rev%201%29.png",
    size: "1259 KB",
    link1: "https://drive.google.com/file/d/1okT2RhEpgbzrHCrYzCF0bn2mXugNOk8L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Street Fighter II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Street%20Fighter%20II%20%28USA%29.png",
    size: "2767 KB",
    link1: "https://drive.google.com/file/d/1qMP6tKHM5p4ECizICditXsmRQNRy-MoP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Street Fighter II (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Street%20Fighter%20II%20%28USA%29%20%28Rev%201%29.png",
    size: "2767 KB",
    link1: "https://drive.google.com/file/d/1G7vmv4ksHhZUSLVXKtijn4eby1TEg-3U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Street Fighter II (USA) (Rev 1) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Street%20Fighter%20II%20%28USA%29%20%28Rev%201%29%20%28Virtual%20Console%29.png",
    size: "2767 KB",
    link1: "https://drive.google.com/file/d/1aAQZtaACX4n6MasA7NnZ4nwl1ecgui42/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Strike Eagle (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Strike%20Eagle%20%28USA%29.png",
    size: "654 KB",
    link1: "https://drive.google.com/file/d/1I3WYiye-dXMn66UQ11j1PbEcnoeMjxQw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Strike Eagle (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Strike%20Eagle%20%28USA%29.png",
    size: "665 KB",
    link1: "https://drive.google.com/file/d/1rwCySQvaPRsq8iTj-6Jgr-v4D6CX30Px/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super SWIV (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20SWIV%20%28Europe%29.png",
    size: "477 KB",
    link1: "https://drive.google.com/file/d/1QSW3sFmQtl--ST7LsBe1DqJ-Rs5DVuRv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Tennis (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Tennis%20%28USA%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1XzmMJdi8wKTTCpfJScvD9qIowIJLEXIG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Tennis (USA) (Arcade)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Tennis%20%28USA%29%20%28Arcade%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1x_T1pDRaLWkL5pi_Awf21Hn_cNCeh_O9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Troll Islands (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Troll%20Islands%20%28USA%29%20%28Beta%29.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1V18RXioWzKnKx1QOiQSz5CXTdZwcbcIz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Troll Islands (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Troll%20Islands%20%28USA%29.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1hU2xrOjK9HkmWHuH5hx9G8f0dHtjWoOV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Turrican (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Turrican%20%28USA%29.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/1Zzf593M3QiLy0nIkJA9_Xn9dKEGkGiZ3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Turrican (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Turrican%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/1wU-HguVJCLE4WESkYeVkBi9XHOrSiVzj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Turrican 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Turrican%202%20%28USA%29.png",
    size: "1675 KB",
    link1: "https://drive.google.com/file/d/1h_wiZ2H-nl8hD3i-lFWtK3C9MerJX1VD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Turrican 2 Special Edition (USA) (Strictly Limited Games)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "2056 KB",
    link1: "https://drive.google.com/file/d/1cAW_zWxjPWz0YIqEeJNta93DP2Hw5cNK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Turrican Collection (USA) (Strictly Limited Games)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "861 KB",
    link1: "https://drive.google.com/file/d/1ukRXBo_rJWg4AIzV9u36iafzKIsb7r_K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Turrican Collection (USA) (Strictly Limited Games) (Alt)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "858 KB",
    link1: "https://drive.google.com/file/d/1CZSf1Q4AUxvvVFSQT8rGmcmbL9YISVLi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Valis IV (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Valis%20IV%20%28USA%29.png",
    size: "674 KB",
    link1: "https://drive.google.com/file/d/1v_uca8HfsSWkaQI43a7qnAZIr22ET8bZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Widget (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Widget%20%28USA%29.png",
    size: "545 KB",
    link1: "https://drive.google.com/file/d/142I8Jq4HIdDM-S_Q6-1AS5p2v0q5A5-C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Widget (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Widget%20%28USA%29.png",
    size: "545 KB",
    link1: "https://drive.google.com/file/d/19EIMiQFv6wq1II9PVO4sMYIdYTMTp-jX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Suzuka 8 Hours (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Suzuka%208%20Hours%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1EHf8XyJQnWDZjpI2WItWPE9IOpBXp6mV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SWAT Kats - The Radical Squadron (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SWAT%20Kats%20-%20The%20Radical%20Squadron%20%28USA%29.png",
    size: "988 KB",
    link1: "https://drive.google.com/file/d/1LiHG6hi7s3Nonixk5Z-HpTi4ErHRZDPT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SWAT Kats - The Radical Squadron (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/SWAT%20Kats%20-%20The%20Radical%20Squadron%20%28USA%29.png",
    size: "988 KB",
    link1: "https://drive.google.com/file/d/1uvF8VUwmjH91JeG0USctdDZzVfW9cvRY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Syndicate (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Syndicate%20%28USA%29.png",
    size: "851 KB",
    link1: "https://drive.google.com/file/d/1ijtUJXhbEuEXBQu_xLC5krk5xV5yQrtj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "T2 - The Arcade Game (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/T2%20-%20The%20Arcade%20Game%20%28USA%29.png",
    size: "683 KB",
    link1: "https://drive.google.com/file/d/1vQxMeHNOSqtJV6t-piFIpe5zaD_Fleu1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "T2 - The Arcade Game (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/T2%20-%20The%20Arcade%20Game%20%28USA%29.png",
    size: "683 KB",
    link1: "https://drive.google.com/file/d/1yvhGLY_s2H0UDmAQZTleWek5yfJDTH-v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tactics Ogre - Let Us Cling Together (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tactics%20Ogre%20-%20Let%20Us%20Cling%20Together%20%28USA%29.png",
    size: "2592 KB",
    link1: "https://drive.google.com/file/d/1XCnIqRy3L6OsLh94pbvUaCsqz8UvQ-OR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tales of Phantasia (ESP).sfc",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "4502 KB",
    link1: "https://drive.google.com/file/d/1aLNpZ4s9ljIXsPbnPIDLBMEZPINTQyBt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tales of Phantasia (ESP).smc",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "4502 KB",
    link1: "https://drive.google.com/file/d/1UBXZ1N0eM2naNrFhjYDWhnquKpv-hUPd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taz-Mania (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Taz-Mania%20%28USA%29.png",
    size: "575 KB",
    link1: "https://drive.google.com/file/d/1dULuWxw40w_WQAqD2lr_0uut9r7AgYOj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taz-Mania (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Taz-Mania%20%28USA%29%20%28Rev%201%29.png",
    size: "568 KB",
    link1: "https://drive.google.com/file/d/1kBTeaJZn7TUV-1hi7oBhVcMZONmv6VlE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tecmo Secret of the Stars (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tecmo%20Secret%20of%20the%20Stars%20%28USA%29.png",
    size: "616 KB",
    link1: "https://drive.google.com/file/d/1G0pqUhBRgSfSAWYRw8WrHEUhTSnf-3dp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tecmo Super Baseball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tecmo%20Super%20Baseball%20%28USA%29.png",
    size: "964 KB",
    link1: "https://drive.google.com/file/d/18WeOwWGgWu5FSyqz3hj31nbbpI70gH1b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tecmo Super Bowl (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tecmo%20Super%20Bowl%20%28USA%29.png",
    size: "679 KB",
    link1: "https://drive.google.com/file/d/19GG1x8deqCCYbCwrxueerC55JOVj6wvO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tecmo Super Bowl II - Special Edition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tecmo%20Super%20Bowl%20II%20-%20Special%20Edition%20%28USA%29.png",
    size: "875 KB",
    link1: "https://drive.google.com/file/d/1y79fKQuZWmZ7V1Ve2RNOvdvF_32Og-Dm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tecmo Super Bowl III - Final Edition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tecmo%20Super%20Bowl%20III%20-%20Final%20Edition%20%28USA%29.png",
    size: "932 KB",
    link1: "https://drive.google.com/file/d/1ighqfR7zw4a1Zv6Lj48e5WJdWP2RYM33/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tecmo Super NBA Basketball (USA) (SNS-NA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tecmo%20Super%20NBA%20Basketball%20%28USA%29%20%28SNS-NA%29.png",
    size: "583 KB",
    link1: "https://drive.google.com/file/d/1tB0Una4sr48HadSowhfnKOps_JuS6ddL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tecmo Super NBA Basketball (USA) (SNS-XM)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tecmo%20Super%20NBA%20Basketball%20%28USA%29%20%28SNS-XM%29.png",
    size: "583 KB",
    link1: "https://drive.google.com/file/d/1Gougocm_CoRFpttIfE3gMZEAI2WX27Yo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles - Tournament Fighters (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Teenage%20Mutant%20Ninja%20Turtles%20-%20Tournament%20Fighters%20%28USA%29%20%28Beta%29.png",
    size: "1592 KB",
    link1: "https://drive.google.com/file/d/1cD2dQwp-h2eZ9G9mvkFB9ZZbi53BUbyG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles - Tournament Fighters (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Teenage%20Mutant%20Ninja%20Turtles%20-%20Tournament%20Fighters%20%28USA%29.png",
    size: "1592 KB",
    link1: "https://drive.google.com/file/d/1mhK-dEL9F3THkwR10-kiKn4J72JNia6n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles - Tournament Fighters (USA) (The Cowabunga Collection)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Teenage%20Mutant%20Ninja%20Turtles%20-%20Tournament%20Fighters%20%28USA%29%20%28The%20Cowabunga%20Collection%29.png",
    size: "1591 KB",
    link1: "https://drive.google.com/file/d/1tnyH_T9Dic6uHWNo330HnCUFSalGBQtt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles IV - Turtles in Time (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Teenage%20Mutant%20Ninja%20Turtles%20IV%20-%20Turtles%20in%20Time%20%28USA%29%20%28Beta%201%29.png",
    size: "790 KB",
    link1: "https://drive.google.com/file/d/1KtC0Xd4ybp6dP39-t8Iza7p240kXaprE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles IV - Turtles in Time (ESP-Blade133bo)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Teenage%20Mutant%20Ninja%20Turtles%20IV%20-%20Turtles%20in%20Time%20%28USA%29%20%28Beta%201%29.png",
    size: "790 KB",
    link1: "https://drive.google.com/file/d/1lXCQg9x9hqKx1AOInescWk-1ZzlmMnT2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles IV - Turtles in Time (ESP-Rod Merida)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Teenage%20Mutant%20Ninja%20Turtles%20IV%20-%20Turtles%20in%20Time%20%28USA%29%20%28Beta%201%29.png",
    size: "790 KB",
    link1: "https://drive.google.com/file/d/1OXnZz1UJytLbpjkuTKD7zPSIOSzZrBox/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles IV - Turtles in Time (ESP-WAVE)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Teenage%20Mutant%20Ninja%20Turtles%20IV%20-%20Turtles%20in%20Time%20%28USA%29%20%28Beta%201%29.png",
    size: "790 KB",
    link1: "https://drive.google.com/file/d/1HwJsQJwXrz_E2FAa6jnrAvXhxcbtiI9y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles IV - Turtles in Time (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Teenage%20Mutant%20Ninja%20Turtles%20IV%20-%20Turtles%20in%20Time%20%28USA%29.png",
    size: "790 KB",
    link1: "https://drive.google.com/file/d/1ndHidrY2CliFjM0Wz7Icx04opbE0AObL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles IV - Turtles in Time (USA) (The Cowabunga Collection)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Teenage%20Mutant%20Ninja%20Turtles%20IV%20-%20Turtles%20in%20Time%20%28USA%29%20%28The%20Cowabunga%20Collection%29.png",
    size: "790 KB",
    link1: "https://drive.google.com/file/d/1E6FsvZH3iM_eGg6Xs7-kMbKbaSfYAtXA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tenchi Muyou - Game Hen (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tenchi%20Muyou%21%20-%20Game%20Hen%20%28Japan%29%20%28Sample%29.png",
    size: "1020 KB",
    link1: "https://drive.google.com/file/d/1_iciX_Qh4sCpS6W5Heyb1ayMoZAEQQgR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tenshi no Uta - Shiroki Tsubasa no Inori (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tenshi%20no%20Uta%20-%20Shiroki%20Tsubasa%20no%20Inori%20%28Japan%29.png",
    size: "1580 KB",
    link1: "https://drive.google.com/file/d/1xj2hNs04zaMZD48CUiSLk_THhhBr7Mfi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terminator 2 - Judgment Day (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Terminator%202%20-%20Judgment%20Day%20%28USA%29.png",
    size: "717 KB",
    link1: "https://drive.google.com/file/d/1hCRy8oLCf6m24Y8rAmZmNJNYAa4J6FTD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terminator 2 - Judgment Day (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Terminator%202%20-%20Judgment%20Day%20%28USA%29.png",
    size: "717 KB",
    link1: "https://drive.google.com/file/d/1bjGys8wMxmURPESrhY6InyjUBhoJvqWd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terminator, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Terminator%2C%20The%20%28USA%29.png",
    size: "660 KB",
    link1: "https://drive.google.com/file/d/1-kYJP1dAEzI-wl6ugXa83yGbm-UpJnxk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terranigma (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Terranigma%20%28Europe%29.png",
    size: "2975 KB",
    link1: "https://drive.google.com/file/d/11vlzO1H0rLlLeSRdNoemnLuHQu-AKgAm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetris & Dr. Mario (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/1sHFrXEXisA_gnPaDTdZX_TJhRoRCHx_g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetris 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tetris%202%20%28USA%29.png",
    size: "664 KB",
    link1: "https://drive.google.com/file/d/13R3UkJ6pZLasVBgJLzSMcTNVxAsqDf43/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetris 2 (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tetris%202%20%28USA%29%20%28Rev%201%29.png",
    size: "664 KB",
    link1: "https://drive.google.com/file/d/11OB4gN8slmStnGojczupnFl_e7C3ofOB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetris Attack (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tetris%20Attack%20%28USA%29%20%28En%2CJa%29.png",
    size: "718 KB",
    link1: "https://drive.google.com/file/d/1KK7Fes0tR71UVTNpy2FsvceoJ92OhB6w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetris Attack (USA) (En,Ja)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tetris%20Attack%20%28USA%29%20%28En%2CJa%29.png",
    size: "717 KB",
    link1: "https://drive.google.com/file/d/1IOU6z5s-12eUmGGj6KLa07FM5ma2Ka3X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetris Battle Gaiden (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tetris%20Battle%20Gaiden%20%28Japan%29.png",
    size: "872 KB",
    link1: "https://drive.google.com/file/d/14-hkPPSO60ZRF5ZwY3FF2EhpEPAeDdx6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The  Hunt for Red October (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1meRqo_Jqe31Nev4sWIHbvbujBLbcm31B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The 7th Saga (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "796 KB",
    link1: "https://drive.google.com/file/d/18J072JNU3d5Xm5tiPDY13FXsCL9jIv18/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Addams Family (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "759 KB",
    link1: "https://drive.google.com/file/d/1Sx-VvTgFyJo9B_Y2NXvn04FlpSCWL8_z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Addams Family - Pugsley's Scavenger Hunt (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "808 KB",
    link1: "https://drive.google.com/file/d/1vILvTaN4LpH2I1TIavi8AO_IPnmkx9zr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Adventures of Batman & Robin (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1397 KB",
    link1: "https://drive.google.com/file/d/1SdoYgPtTZN7tLfwabX2V2n6w75_iu7dY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Adventures of Tintin - Prisoners of the Sun (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1501 KB",
    link1: "https://drive.google.com/file/d/1mq13lu17XSCsgusIDDY_WSHjfdELrUSS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Amazing Spider-Man - Lethal Foes (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "752 KB",
    link1: "https://drive.google.com/file/d/1Aw534eGg6WIXLtG2c2SEGoEOqQ67jTFx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Blues Brothers (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1U91ncMjygX23kX36bu3TssuCdNXLHxx5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Brainies (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "301 KB",
    link1: "https://drive.google.com/file/d/1BXlD9WNLpw_KFYR6Ow5XSTEcas3UZ2Ad/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Combatribes (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "862 KB",
    link1: "https://drive.google.com/file/d/1EXBVEH6l_mkd4n0dOGal-ko5QKKzHv25/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Death and Return of Superman (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1294 KB",
    link1: "https://drive.google.com/file/d/1FdYziXCntBOeJzxvXKO1F9YW10E7Kgqs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Flintstones (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1253 KB",
    link1: "https://drive.google.com/file/d/1lm6iVIcoluzv7UGFhsdWAX0b09dkztV0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Great Battle II - Last Fighter Twin (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "755 KB",
    link1: "https://drive.google.com/file/d/1knTKxyDuM9A_X0euPoJ6BHM5NUEiF4JQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Great Battle III (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "897 KB",
    link1: "https://drive.google.com/file/d/1XvaFJRI4qAiKIsMtKTisk8JcAcr3w1aw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Great Battle IV,(ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1214 KB",
    link1: "https://drive.google.com/file/d/1No4VdNHKiPp62822yn3QrspFR9NhEIxX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Great Battle V (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1128 KB",
    link1: "https://drive.google.com/file/d/1xYdwNT93dHbJZY0E6XqDQ6xQJvgWfoOW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Great Circus Mystery Starring Mickey & Minnie (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "946 KB",
    link1: "https://drive.google.com/file/d/1GhE_ux49zBQa2W8C6TmxLyoG44l2LeJf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Humans (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "805 KB",
    link1: "https://drive.google.com/file/d/16VpvI3qGrbjdOnhPwh1psYsrMKHuKDYb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Hunt for Red October (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1Par8fBOtKiVA7ywmhL29bd23RJPxqxsF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Irem Skins Game (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "468 KB",
    link1: "https://drive.google.com/file/d/1Lq_mNlqi3dvGzpdQRyJBYekPup_NC9ky/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Itchy & Scratchy Game (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "588 KB",
    link1: "https://drive.google.com/file/d/1FwAJZIFcfA8OEGPsC5ryz6M_q2PUyCat/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Jetsons - Invasion of the Planet Pirates (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "609 KB",
    link1: "https://drive.google.com/file/d/1-NuE_L9qA9N4pvNy3ZhCavKeofZ15v4c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Jungle Book (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1267 KB",
    link1: "https://drive.google.com/file/d/10syEKXHMZs3k0LbKUNc3rH4JCbJIjOP3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The King of Dragons (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1251 KB",
    link1: "https://drive.google.com/file/d/1samPlPnI_Ie1s0xXVgU6HZXcrfArEZMO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend of the Mystical Ninja (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "852 KB",
    link1: "https://drive.google.com/file/d/1HqUp6kXRhu6lr8ZDHYWQCzzw3Z5hpm8d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend of Zelda - A Link to the Past (ESP - GBA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "691 KB",
    link1: "https://drive.google.com/file/d/1_ei0veagof06b3sWDqa7Miv63_dfGSf7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend of Zelda - A Link to the Past (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "691 KB",
    link1: "https://drive.google.com/file/d/13S6AjEpp_a_ehu5_gUaDmd94i-rQv037/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Lion King (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "2102 KB",
    link1: "https://drive.google.com/file/d/13jmaYiJ2abjzmglbjcgebiT95lDrQHQ2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Lost Vikings (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "752 KB",
    link1: "https://drive.google.com/file/d/1LeNv-GLG3lBjtRXLPHUzzRCnbuTpiycF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Lost Vikings 2 (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "719 KB",
    link1: "https://drive.google.com/file/d/1kA2coxjDvhraLyejDTexNks515h7atsg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Magical Quest Starring Mickey Mouse (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "682 KB",
    link1: "https://drive.google.com/file/d/1IxXESj9dP_s3Eii5FRGwWGszp2HIiyWi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Mask (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1322 KB",
    link1: "https://drive.google.com/file/d/1mNEZVn3EZviNSvsO_GL3Zg_DMrIHl40H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Pagemaster (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1342 KB",
    link1: "https://drive.google.com/file/d/1W1tP0iLJ159hT4MYzkTd-LjWYONUIq-V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Pirates of Dark Water (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "658 KB",
    link1: "https://drive.google.com/file/d/1GZV7u_FrpeJcqXd7lUUZrqCAauyXjEFx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Shadow (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1284 KB",
    link1: "https://drive.google.com/file/d/1YRtMAWoalvuTAO4-fSwl9bXt4jzYIKH4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Smurfs (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "855 KB",
    link1: "https://drive.google.com/file/d/16lR-H4GI81PJ3YPis9Zi8BWQBRW74zu2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Smurfs 2 (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1050 KB",
    link1: "https://drive.google.com/file/d/1o97DfwESNBGj9VLUjYVyzuyVio2n5Cz0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Terminator (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "660 KB",
    link1: "https://drive.google.com/file/d/1N-3o9evJQ7cKrVRJ4xBjx_U4NHPE0aCD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Tick (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1060 KB",
    link1: "https://drive.google.com/file/d/1UYDJSPfiTbNfbZdUvCqLzyCX_9-Rk8Lf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Twisted Tales of Spike McFang (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "769 KB",
    link1: "https://drive.google.com/file/d/11T7r8i6kV5X7V6GDhYA0K-jyKtQ7HG8W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thomas the Tank Engine & Friends (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "778 KB",
    link1: "https://drive.google.com/file/d/1OHa_xy8EAAwf2SuMdLQtucU_Uzd1luXp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Spirits (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Thunder%20Spirits%20%28USA%29.png",
    size: "637 KB",
    link1: "https://drive.google.com/file/d/1DOlOFYBeibAwAwIQj2DrN6Si2lecsHc4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Spirits (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Thunder%20Spirits%20%28USA%29.png",
    size: "637 KB",
    link1: "https://drive.google.com/file/d/1Lj7aOKHoZZSP14PeA7SY72IhGiHVr46T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tick, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tick%2C%20The%20%28USA%29.png",
    size: "1060 KB",
    link1: "https://drive.google.com/file/d/1lO0P1vbcg1rUTx-SDd6M_H6V1rx2wQUO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Slip (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Time%20Slip%20%28Europe%29%20%28Beta%29.png",
    size: "525 KB",
    link1: "https://drive.google.com/file/d/1B8IC9vAExjuU6nfEmNLTSoGpn4i_lJvM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Trax (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Time%20Trax%20%28USA%29.png",
    size: "660 KB",
    link1: "https://drive.google.com/file/d/1wxJ6f257uBD2RhovOTXi64H-c2dyi0Ka/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Timecop (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Timecop%20%28USA%29.png",
    size: "1355 KB",
    link1: "https://drive.google.com/file/d/1IVUsy4CGxxi2nFmTLfyRJAzJBvEy-Vro/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Timecop (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Timecop%20%28USA%29.png",
    size: "1355 KB",
    link1: "https://drive.google.com/file/d/1MLQgE1XIIlpug4CE-X84yziZ8wWrckrq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Timeslip (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Timeslip%20%28USA%29.png",
    size: "525 KB",
    link1: "https://drive.google.com/file/d/1xZj7VWRVQ8GhG9S0xQLJXW5avQUkKoqM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Timon & Pumbaa's Jungle Games (USA)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "1035 KB",
    link1: "https://drive.google.com/file/d/1evk1qHrMzjRkxQlJVAfI7i6qYaFPTkdm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tin Star (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tin%20Star%20%28USA%29.png",
    size: "1085 KB",
    link1: "https://drive.google.com/file/d/1KQzM8ruRGI4FDclWueSLSygUHJS9GNFe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tin Star (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tin%20Star%20%28USA%29.png",
    size: "1085 KB",
    link1: "https://drive.google.com/file/d/1C81iBqp4NXYjZPpkRjAtCio2PWG23kRg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tinhead (E) -Beta (ESP)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "542 KB",
    link1: "https://drive.google.com/file/d/1HoGAu5EEwGM-Y3E7Ae98BLK9yW0X7IpW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiny Toon Adventures - Buster Busts Loose! (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tiny%20Toon%20Adventures%20-%20Buster%20Busts%20Loose%21%20%28USA%29%20%28Beta%29.png",
    size: "847 KB",
    link1: "https://drive.google.com/file/d/1oPoo9xJvZ6WW4XL4ipaIGT3p99HDKHyz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiny Toon Adventures - Buster Busts Loose! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tiny%20Toon%20Adventures%20-%20Buster%20Busts%20Loose%21%20%28USA%29.png",
    size: "847 KB",
    link1: "https://drive.google.com/file/d/1KKr0dx0jujCznDFGkdd7KYMPu48rORPO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiny Toon Adventures - Wacky Sports Challenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tiny%20Toon%20Adventures%20-%20Wacky%20Sports%20Challenge%20%28USA%29.png",
    size: "835 KB",
    link1: "https://drive.google.com/file/d/1rN9PFQ-5-Jw62ZgX4cI_7190dBpNjHMX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TKO Super Championship Boxing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/TKO%20Super%20Championship%20Boxing%20%28USA%29.png",
    size: "297 KB",
    link1: "https://drive.google.com/file/d/1uXo9FsPUK7Vl2DACS5X0fa8WhH-2ZcPk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TKO Super Championship Boxing (USA) (Sample) (1992-08-xx)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/TKO%20Super%20Championship%20Boxing%20%28USA%29%20%28Sample%29%20%28August%2C%201992%29.png",
    size: "297 KB",
    link1: "https://drive.google.com/file/d/1AhiCyJzQl2cBKNWTRMGwORUpkitt-8Ny/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TNN Bass Tournament of Champions (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/TNN%20Bass%20Tournament%20of%20Champions%20%28USA%29.png",
    size: "932 KB",
    link1: "https://drive.google.com/file/d/1at8de-V0I3ryDlo_N-KxZ2IUiY5s7PtV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Todd McFarlane's Spawn - The Video Game (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Todd%20McFarlane%27s%20Spawn%20-%20The%20Video%20Game%20%28USA%29.png",
    size: "1422 KB",
    link1: "https://drive.google.com/file/d/1O2yMMrghyOVRxoIHQRwiQNfh96wMW1M4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom & Jerry (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tom%20and%20Jerry%20%28USA%29.png",
    size: "297 KB",
    link1: "https://drive.google.com/file/d/12b2eX0GA9iNhF86oLpwLHktc1yOMzasn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tom%20and%20Jerry%20%28USA%29.png",
    size: "297 KB",
    link1: "https://drive.google.com/file/d/155dNKQbmRVAr2Nv0HyIHcEINY6yYVSau/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tommy Moe's Winter Extreme - Skiing and Snowboarding (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tommy%20Moe%27s%20Winter%20Extreme%20-%20Skiing%20and%20Snowboarding%20%28USA%29.png",
    size: "506 KB",
    link1: "https://drive.google.com/file/d/1FgY6T2DO01BiJMZqPtR7Pt7nNM0kbEl4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tony Meola's Sidekicks Soccer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tony%20Meola%27s%20Sidekicks%20Soccer%20%28USA%29.png",
    size: "523 KB",
    link1: "https://drive.google.com/file/d/1r4PJus1LjG4EgFZRqbXAP3VrJX8424yt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Top%20Gear%20%28USA%29.png",
    size: "307 KB",
    link1: "https://drive.google.com/file/d/1TaPf5rNJ8ojLLrmlyCjTBrMk3NSX18rj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Top%20Gear%20%28USA%29.png",
    size: "307 KB",
    link1: "https://drive.google.com/file/d/1_fUMwS9J9oe1e19x7x9LRc9mUYzmi4Ex/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear 2 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Top%20Gear%202%20%28USA%29.png",
    size: "622 KB",
    link1: "https://drive.google.com/file/d/1lPUbZjLfLcPXBxWk-3QneFgdBOWxuiMl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Top%20Gear%202%20%28USA%29.png",
    size: "622 KB",
    link1: "https://drive.google.com/file/d/1FIvheIWAa3kP--5Zd2Ga3gskWQB5q0v9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear 3000 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Top%20Gear%203000%20%28USA%29.png",
    size: "764 KB",
    link1: "https://drive.google.com/file/d/1_4RANRuUGr_xVkqe4qdOVZpGK83JN-hU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear 3000 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Top%20Gear%203000%20%28USA%29.png",
    size: "764 KB",
    link1: "https://drive.google.com/file/d/1UTWekX1sV-frpWF0MYlMMwPUfXp3oWo9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Total Carnage (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Total%20Carnage%20%28USA%29.png",
    size: "644 KB",
    link1: "https://drive.google.com/file/d/1FODgyvC243WsikAY-LTjjJd6Khiu3koe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toy Story (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Toy%20Story%20%28USA%29.png",
    size: "2862 KB",
    link1: "https://drive.google.com/file/d/1m4ZehYcL2JJPHxfUTa2nPwiIdfCD9sQw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toy Story (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Toy%20Story%20%28USA%29.png",
    size: "2862 KB",
    link1: "https://drive.google.com/file/d/1kWxCl9OJRHlL9mITMfPILMtn6IpW_oku/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toys - Let the Toy Wars begin! (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Toys%20-%20Let%20the%20Toy%20Wars%20begin%21%20%28USA%29.png",
    size: "478 KB",
    link1: "https://drive.google.com/file/d/1JBdUg-1II9eiBjePuSSq9WZ36Skpbnnp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toys - Let the Toy Wars begin! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Toys%20-%20Let%20the%20Toy%20Wars%20begin%21%20%28USA%29.png",
    size: "478 KB",
    link1: "https://drive.google.com/file/d/1-THErERSuS3dH2VXeRlPnbc_nyropD7H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tri-Star (USA) (Unl)",
    image: "https://i.postimg.cc/DZZpt3ZB/SNES-logo-svg.png",
    size: "4 KB",
    link1: "https://drive.google.com/file/d/1WSiKNy8HIMksAMJOeBk6Q_bUMfdv-Q4E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Troddlers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Troddlers%20%28USA%29.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1w-GiRFwtXA4-pc2jeNLz7RDOhkQ1QatX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Troy Aikman NFL Football (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Troy%20Aikman%20NFL%20Football%20%28USA%29.png",
    size: "947 KB",
    link1: "https://drive.google.com/file/d/1RgAkHVxd6BBBfPKDg_SrHMc7r5sGYy_k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "True Golf Classics - Pebble Beach Golf Links (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/True%20Golf%20Classics%20-%20Pebble%20Beach%20Golf%20Links%20%28USA%29.png",
    size: "687 KB",
    link1: "https://drive.google.com/file/d/1irUOzpcFFjukEudRumHlo0IMta2kk2YO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "True Golf Classics - Waialae Country Club (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/True%20Golf%20Classics%20-%20Waialae%20Country%20Club%20%28USA%29.png",
    size: "672 KB",
    link1: "https://drive.google.com/file/d/1CuxOCMy4wau6mfgya3qH2MC8pXIu61Yg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "True Golf Classics - Wicked 18 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/True%20Golf%20Classics%20-%20Wicked%2018%20%28USA%29.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/1yMAxGYbeNV46UhxrUpN0jBGsUH_sGap6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "True Lies (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/True%20Lies%20%28USA%29%20%28Beta%29.png",
    size: "1517 KB",
    link1: "https://drive.google.com/file/d/1AA-l8QGLaD2RMy6TNjBI8wrs57C8GM8b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "True Lies (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/True%20Lies%20%28USA%29.png",
    size: "1517 KB",
    link1: "https://drive.google.com/file/d/15mq3zLa6Vkc5-F_hGa_o9j7Y3piDZS_b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tuff E Nuff (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Tuff%20E%20Nuff%20%28USA%29.png",
    size: "1170 KB",
    link1: "https://drive.google.com/file/d/1kToIR6DXr4R-GzfgNScrLTe9cXituQ--/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turn and Burn - No-Fly Zone (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Turn%20and%20Burn%20-%20No-Fly%20Zone%20%28USA%29.png",
    size: "767 KB",
    link1: "https://drive.google.com/file/d/1b5gzLc_9wkvcUdnXCkIflubhnELOCMmd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turn and Burn - No-Fly Zone (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Turn%20and%20Burn%20-%20No-Fly%20Zone%20%28USA%29.png",
    size: "767 KB",
    link1: "https://drive.google.com/file/d/1Jskqr37sXieg81jvvSfj-8TFNjmkg4GY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Twisted Tales of Spike McFang, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Twisted%20Tales%20of%20Spike%20McFang%2C%20The%20%28USA%29.png",
    size: "747 KB",
    link1: "https://drive.google.com/file/d/1NobZpMJ5kqSAkewe1PSluPWHum1Lmpjk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "U.N. Squadron (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/U.N.%20Squadron%20%28USA%29.png",
    size: "558 KB",
    link1: "https://drive.google.com/file/d/1JSZPbmHcykOWLygyutbW7OGwxDwulZB2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "U.N. Squadron (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/U.N.%20Squadron%20%28USA%29.png",
    size: "558 KB",
    link1: "https://drive.google.com/file/d/1IA0erpkyeJC_hCxQEkt9i0W7wWmIBJP3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultima - Runes of Virtue II (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ultima%20-%20Runes%20of%20Virtue%20II%20%28USA%29.png",
    size: "653 KB",
    link1: "https://drive.google.com/file/d/1xUjIxfEQOBFletlk1Twk7c6SGwDicI0i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultima - The Black Gate (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ultima%20-%20The%20Black%20Gate%20%28USA%29.png",
    size: "582 KB",
    link1: "https://drive.google.com/file/d/1uf6syXZdRazemS4T9F2oZTLb3rwhTdih/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultima - The False Prophet (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ultima%20-%20The%20False%20Prophet%20%28USA%29.png",
    size: "661 KB",
    link1: "https://drive.google.com/file/d/1P1o8ZHbigz9SncNyKrXIJg-FvA5EhkDS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultimate Fighter (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ultimate%20Fighter%20%28USA%29.png",
    size: "1067 KB",
    link1: "https://drive.google.com/file/d/15BLYcSSjk4xnBOSyW4OpsqRzz7yfEUQK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultimate Fighter (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ultimate%20Fighter%20%28USA%29.png",
    size: "1067 KB",
    link1: "https://drive.google.com/file/d/1koLpCcRJmCy7DYA3Cm5iS7FVJZJcIOFh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultimate Mortal Kombat 3 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ultimate%20Mortal%20Kombat%203%20%28USA%29.png",
    size: "3370 KB",
    link1: "https://drive.google.com/file/d/1KJyfozofVyY415D-ybsllRNJ5-bCz0OL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultraman (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ultraman%20%28USA%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1q50BXQu2RdcQl2vzVSpQYbTzO38oVoEl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Umihara Kawase (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Umihara%20Kawase%20%28Japan%29.png",
    size: "641 KB",
    link1: "https://drive.google.com/file/d/1cWptxC7FRfmRGJ_XPKQ7K5KrmpxLz169/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uncharted Waters (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Uncharted%20Waters%20%28USA%29.png",
    size: "479 KB",
    link1: "https://drive.google.com/file/d/1gmWl6p9XK7QTNxVoS2bD_MLrL5PLjnDG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Undercover Cops (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Undercover%20Cops%20%28Japan%29.png",
    size: "1322 KB",
    link1: "https://drive.google.com/file/d/18Xa3EPtN3Gzd5FOdeuLSIqJpE7mNQWu_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uniracers (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Uniracers%20%28USA%29.png",
    size: "1073 KB",
    link1: "https://drive.google.com/file/d/1ill3aG9OH8HJwJifdC_xDMQAY6qMRXTD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uniracers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Uniracers%20%28USA%29.png",
    size: "1073 KB",
    link1: "https://drive.google.com/file/d/1Nj2TEw1v1CdjJ8RgbGDUD9MrvHUTU-as/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Untouchables, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Untouchables%2C%20The%20%28USA%29.png",
    size: "841 KB",
    link1: "https://drive.google.com/file/d/1mcJOsJyMKVI-CX2mvemJZ2MumEeHWu16/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Urban Strike (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Urban%20Strike%20%28USA%29.png",
    size: "1016 KB",
    link1: "https://drive.google.com/file/d/1T98rFtylMZFZByZSW4b4psOpmmwnXRoy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "USA Ice Hockey (Japan) (En)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/USA%20Ice%20Hockey%20%28Japan%29%20%28En%29.png",
    size: "305 KB",
    link1: "https://drive.google.com/file/d/1lqxfQJInMzTtzeRCP6LrFTno098cs3-Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "USA Ice Hockey (Japan) (En) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/USA%20Ice%20Hockey%20%28Japan%29%20%28En%29%20%28Rev%201%29.png",
    size: "305 KB",
    link1: "https://drive.google.com/file/d/1hxXZ5jQiyC3PsixGkb1m9t_hXS5-yPF1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Utopia - The Creation of a Nation (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Utopia%20-%20The%20Creation%20of%20a%20Nation%20%28USA%29.png",
    size: "358 KB",
    link1: "https://drive.google.com/file/d/1vDKnZxx2A8e4lNntIuKwGXHvnsClIW8N/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vegas Stakes (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Vegas%20Stakes%20%28USA%29.png",
    size: "745 KB",
    link1: "https://drive.google.com/file/d/1N-E8EtKHubHVxaPHmt-CRG-WvFZAjHBT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vegas Stakes (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Vegas%20Stakes%20%28USA%29.png",
    size: "745 KB",
    link1: "https://drive.google.com/file/d/1RsdbCIWyAZ1oanTIKy9xZGF9pl2u9l3e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Venom - Spider-Man - Separation Anxiety (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Venom%20-%20Spider-Man%20-%20Separation%20Anxiety%20%28USA%29%20%28Sample%29.png",
    size: "1285 KB",
    link1: "https://drive.google.com/file/d/1g80UxV8ZMnmIT2GOSQRTPmA6GeL6ykaM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Venom - Spider-Man - Separation Anxiety (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Venom%20-%20Spider-Man%20-%20Separation%20Anxiety%20%28USA%29.png",
    size: "1285 KB",
    link1: "https://drive.google.com/file/d/1HcgGRxQjciItUGYVzb196xRPvN_fGcLv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Venom - Spider-Man - Separation Anxiety (USA) (Sample)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Venom%20-%20Spider-Man%20-%20Separation%20Anxiety%20%28USA%29%20%28Sample%29.png",
    size: "1285 KB",
    link1: "https://drive.google.com/file/d/1UkIC3tBwXhvqPlrUJcWkv_U9F8H84PTW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Virtual Bart (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Virtual%20Bart%20%28USA%29.png",
    size: "1562 KB",
    link1: "https://drive.google.com/file/d/1FE7MpKXcrHgomI6FoICOp3XKtkg0F_UC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vortex (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Vortex%20%28USA%29%20%28En%2CEs%29.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/134GZDk17ASAM_grbVPfyJDQYp-WEDUip/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vortex (USA) (En,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Vortex%20%28USA%29%20%28En%2CEs%29.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/1XU62tm60q-PKaWDN5N4a-usS1PvbHK8w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "War 2410 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/War%202410%20%28USA%29.png",
    size: "852 KB",
    link1: "https://drive.google.com/file/d/1JHfOd5WVnPymjjaR2fQgAM2zOxymrAUP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "War 3010 - The Revolution (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/War%203010%20-%20The%20Revolution%20%28USA%29.png",
    size: "444 KB",
    link1: "https://drive.google.com/file/d/1EAHMD_1Mh0WFTtz-58xYst9WuYJP6Byf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wario's Woods (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wario%27s%20Woods%20%28USA%29.png",
    size: "593 KB",
    link1: "https://drive.google.com/file/d/1AzoXO8bPrgptSvbTH66My3ddnGsnpjed/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warlock (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Warlock%20%28USA%29%20%28Beta%201%29.png",
    size: "1324 KB",
    link1: "https://drive.google.com/file/d/1xwNAF0Cb8mZgSSTm9xgp-kp7oEWNAANv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warlock (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Warlock%20%28USA%29.png",
    size: "1324 KB",
    link1: "https://drive.google.com/file/d/1VjEqRmKffoEX58iRmY2U0oELX0ajXedI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WarpSpeed (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/WarpSpeed%20%28USA%29.png",
    size: "450 KB",
    link1: "https://drive.google.com/file/d/1TZKFjVDCL9ibfHuy0Wvhw26Fhu0EZGop/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wayne Gretzky and the NHLPA All-Stars (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wayne%20Gretzky%20and%20the%20NHLPA%20All-Stars%20%28USA%29.png",
    size: "1135 KB",
    link1: "https://drive.google.com/file/d/1ptoZiOMTmaxCreysW6H5cWE4STt01xIq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wayne's World (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wayne%27s%20World%20%28USA%29.png",
    size: "762 KB",
    link1: "https://drive.google.com/file/d/1x2d5XUUqA-LFIXV9KFkv2uAc6xj0qDYu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WCW Super Brawl Wrestling (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/WCW%20Super%20Brawl%20Wrestling%20%28USA%29.png",
    size: "1048 KB",
    link1: "https://drive.google.com/file/d/1PVtzvJWp_CGNb3NeHymOKR1qk9HMvMsB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "We're Back! - A Dinosaur's Story (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/We%27re%20Back%21%20-%20A%20Dinosaur%27s%20Story%20%28USA%29.png",
    size: "600 KB",
    link1: "https://drive.google.com/file/d/1O5QC03-cafYc-KfZwsEUU3ZixSXjUDsJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "We're Back! - A Dinosaur's Story (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/We%27re%20Back%21%20-%20A%20Dinosaur%27s%20Story%20%28USA%29.png",
    size: "600 KB",
    link1: "https://drive.google.com/file/d/1PmaNMuY8ZjoNE1UWy4K5To_9lSHw9caD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WeaponLord (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/WeaponLord%20%28USA%29.png",
    size: "2164 KB",
    link1: "https://drive.google.com/file/d/1gwsZbeg4CuSQUkQ0GIvKnNMhc6pPIk9t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wheel of Fortune (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wheel%20of%20Fortune%20%28USA%29.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1Us48ehevfMSki4BSxbL50gMmxLTWDWeq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wheel of Fortune - Deluxe Edition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wheel%20of%20Fortune%20-%20Deluxe%20Edition%20%28USA%29.png",
    size: "347 KB",
    link1: "https://drive.google.com/file/d/1egrqUvXhdm6Gh63bZbL8LHpY-3pf5OOB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Where in the World is Carmen Sandiego (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Where%20in%20the%20World%20Is%20Carmen%20Sandiego%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "672 KB",
    link1: "https://drive.google.com/file/d/1EAxLzq0egkTkq4zkVPvj36ScrOQ6M--J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Where in the World Is Carmen Sandiego (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Where%20in%20the%20World%20Is%20Carmen%20Sandiego%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "672 KB",
    link1: "https://drive.google.com/file/d/1whRktnp7dyF7dCF0_mBTKqcVTpXflTlu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Where in Time Is Carmen Sandiego (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Where%20in%20Time%20Is%20Carmen%20Sandiego%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "758 KB",
    link1: "https://drive.google.com/file/d/171uGX0ISB6JTdc7EumB0OteAuttSy6S5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Whirlo (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Whirlo%20%28Europe%29.png",
    size: "669 KB",
    link1: "https://drive.google.com/file/d/1pnfPh7UoDxgEXEexAg3IMjKUvy5zDZsq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Whizz (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Whizz%20%28USA%29.png",
    size: "558 KB",
    link1: "https://drive.google.com/file/d/1hG_TP7IdR6e8QRwQDoLC1Vd7Aijdncx7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wild Guns (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wild%20Guns%20%28USA%29.png",
    size: "692 KB",
    link1: "https://drive.google.com/file/d/1vxDKTZwugm9ZU6zIKRBFJDFSEphXFvy7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wild Snake (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wild%20Snake%20%28USA%29.png",
    size: "401 KB",
    link1: "https://drive.google.com/file/d/1ZSBb1db_LSszei6HlvrlKNP_O9RYWuYn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Williams Arcade's Greatest Hits (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Williams%20Arcade%27s%20Greatest%20Hits%20%28USA%29.png",
    size: "270 KB",
    link1: "https://drive.google.com/file/d/1TyPFt91KAoKSIoem1M8hgXs8haRKdacE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wing Commander (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wing%20Commander%20%28USA%29.png",
    size: "800 KB",
    link1: "https://drive.google.com/file/d/1D36otsUZMyPhwPIyFqqpt9UWWWeRB77P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wing Commander - The Secret Missions (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wing%20Commander%20-%20The%20Secret%20Missions%20%28USA%29.png",
    size: "798 KB",
    link1: "https://drive.google.com/file/d/1W3BKz_WLqHbJzWdg9ppgjZBSAwi_KEbt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wings 2 - Aces High (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wings%202%20-%20Aces%20High%20%28USA%29%20%28Beta%29.png",
    size: "284 KB",
    link1: "https://drive.google.com/file/d/1a5HnHYIr-45qKlb446j88WirwvI2v-SB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wings 2 - Aces High (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wings%202%20-%20Aces%20High%20%28USA%29.png",
    size: "284 KB",
    link1: "https://drive.google.com/file/d/1M4d3kb0Amd514yg5eVmJxHJq8uNZ2HzE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winter Olympic Games - Lillehammer '94 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Winter%20Olympic%20Games%20-%20Lillehammer%20%2794%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%2CSv%2CNo%29.png",
    size: "895 KB",
    link1: "https://drive.google.com/file/d/1__Tx4t6zzrt7hwwxwZjd3gE35DI6tST3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winter Olympic Games - Lillehammer '94 (USA) (En,Fr,De,Es,It,Pt,Sv,No)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Winter%20Olympic%20Games%20-%20Lillehammer%20%2794%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%2CSv%2CNo%29.png",
    size: "895 KB",
    link1: "https://drive.google.com/file/d/10qElbQLncIYNt-ERkjWCfKQJ2OFe7f7-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizard of Oz, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wizard%20of%20Oz%2C%20The%20%28USA%29.png",
    size: "830 KB",
    link1: "https://drive.google.com/file/d/1m11cNm1hMKL-hAAQIOhEKarxPJk4Jr6P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizardry V - Heart of the Maelstrom (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wizardry%20V%20-%20Heart%20of%20the%20Maelstrom%20%28USA%29.png",
    size: "847 KB",
    link1: "https://drive.google.com/file/d/10JLGHRgQJwNpHMY8R4HyBgBRKluaYA_2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wolfchild (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wolfchild%20%28USA%29.png",
    size: "433 KB",
    link1: "https://drive.google.com/file/d/1Daj26XopAS3t_XQyjSwHOm35slT7ouOx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wolfchild (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wolfchild%20%28USA%29.png",
    size: "433 KB",
    link1: "https://drive.google.com/file/d/11IRaPP24axqTL96FFKR3Icogcki8neX6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wolfenstein 3-D (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wolfenstein%203-D%20%28USA%29.png",
    size: "548 KB",
    link1: "https://drive.google.com/file/d/1rmTDltXRCPIT6ncQmr4nEiS9KR2RwL2s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wolverine - Adamantium Rage (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wolverine%20-%20Adamantium%20Rage%20%28USA%29.png",
    size: "1183 KB",
    link1: "https://drive.google.com/file/d/16ZiNmEEsRKwRzHhftoq6tZOZQ0Ct3ZhF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Project J - Kikai no Shounen Pino (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wonder%20Project%20J%20-%20Kikai%20no%20Shounen%20Pino%20%28Japan%29.png",
    size: "1926 KB",
    link1: "https://drive.google.com/file/d/1S6JAAyp-m0hecDumr0oT9cTpgGxfOmb2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wordtris (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Wordtris%20%28USA%29.png",
    size: "392 KB",
    link1: "https://drive.google.com/file/d/1MrzbgxLkBajRXgIkoo7GZJ1bd111yQ-U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup USA 94 (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/World%20Cup%20USA%2094%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%29.png",
    size: "731 KB",
    link1: "https://drive.google.com/file/d/1xqgV4DfjKqY07zO8CvzjKVXUyG-1UMtQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup USA 94 (Japan) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/World%20Cup%20USA%2094%20%28Japan%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%29.png",
    size: "739 KB",
    link1: "https://drive.google.com/file/d/1kBFPfAxPgsqcGYkMaFLYqZ3vFkSASVL1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup USA 94 (USA) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/World%20Cup%20USA%2094%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%29.png",
    size: "737 KB",
    link1: "https://drive.google.com/file/d/1031Qtf6ejtBktkoQQ27HSEEo8ORvsqRm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Heroes (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/World%20Heroes%20%28USA%29.png",
    size: "1347 KB",
    link1: "https://drive.google.com/file/d/1wywAvHthiSD5pjB4D1h0J_nhgFw7jaKn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Heroes 2 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/World%20Heroes%202%20%28USA%29%20%28Beta%29.png",
    size: "2037 KB",
    link1: "https://drive.google.com/file/d/1aoLaqDUaJ_ZsjDudm47w1356YdGViLmy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Heroes 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/World%20Heroes%202%20%28USA%29.png",
    size: "2037 KB",
    link1: "https://drive.google.com/file/d/11eCuxovQZxm_-_IQd6gqGYn0rfgD9ZWU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World League Soccer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/World%20League%20Soccer%20%28USA%29.png",
    size: "231 KB",
    link1: "https://drive.google.com/file/d/1EJE5bv_anhTNauKQQZHoUuJjlcEq9WHy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Soccer 94 - Road to Glory (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/World%20Soccer%2094%20-%20Road%20to%20Glory%20%28USA%29.png",
    size: "326 KB",
    link1: "https://drive.google.com/file/d/1cV62A_N6PR0TscHNoKZ-Am8NWi3kBvGx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Worms (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Worms%20%28Europe%29.png",
    size: "622 KB",
    link1: "https://drive.google.com/file/d/1T4ITAc_mthAIYroSI2FYUh8MrhVOzzbG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Raw (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/WWF%20Raw%20%28USA%29.png",
    size: "2427 KB",
    link1: "https://drive.google.com/file/d/1uYpVlu09AKOfbmk0B01TwiAnoulbMvYq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Raw (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/WWF%20Raw%20%28USA%29.png",
    size: "2427 KB",
    link1: "https://drive.google.com/file/d/1NYjiuC8zb1bb_ZVYC7tg01n3hX8VrR89/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Royal Rumble (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/WWF%20Royal%20Rumble%20%28USA%29.png",
    size: "1622 KB",
    link1: "https://drive.google.com/file/d/16fbxWvFe4_juWeTuLD9_ET8MeCaOUkE1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Super WrestleMania (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/WWF%20Super%20WrestleMania%20%28USA%29.png",
    size: "744 KB",
    link1: "https://drive.google.com/file/d/1u_MmvrxTznih6aL_dWj4USkLffyHO3SB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF WrestleMania - The Arcade Game (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/WWF%20WrestleMania%20-%20The%20Arcade%20Game%20%28USA%29.png",
    size: "2469 KB",
    link1: "https://drive.google.com/file/d/1l-4DrUlXX32cDoppCbwH3IP3-GNThs3i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X Zone (Japan, USA) (En)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/X%20Zone%20%28Japan%2C%20USA%29%20%28En%29.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/1eDMtuIaLGTIJ3eJzA8QM63au8HbJ1wS2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Kaliber 2097 (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/X-Kaliber%202097%20%28USA%29%20%28Beta%29.png",
    size: "710 KB",
    link1: "https://drive.google.com/file/d/1PG5jSpYNTJ8CrAiZ3EUaTpojxOAvhELs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Kaliber 2097 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/X-Kaliber%202097%20%28USA%29.png",
    size: "710 KB",
    link1: "https://drive.google.com/file/d/1E0BzJiYQE2-hTudLzc2lTsLo_M6KY5yd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Mutant Apocalypse (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/X-Men%20-%20Mutant%20Apocalypse%20%28USA%29.png",
    size: "1322 KB",
    link1: "https://drive.google.com/file/d/1Vs0r8R7EWLJ1kM_Jx-nUbnUKUY3bBxiz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Mutant Apocalypse (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/X-Men%20-%20Mutant%20Apocalypse%20%28USA%29.png",
    size: "1322 KB",
    link1: "https://drive.google.com/file/d/1yfQ94mYFSnIJnsiN5u6V0vn2f6YAf_bh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xardion (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Xardion%20%28USA%29.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/1onAQewTKAQJxP1Gfmid2ndW1mLoZRNgz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xardion (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Xardion%20%28USA%29.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/1tbZkoSd2YzOhExOffrjvU5DCEjZV4_pB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "XBAND (USA) (v1.0.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/XBAND%20%28USA%29%20%28v1.0.1%29.png",
    size: "476 KB",
    link1: "https://drive.google.com/file/d/1LymSnqdZ5jeajxf_sbv5JYMF64VChcQB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yoshi's Cookie (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Yoshi%27s%20Cookie%20%28USA%29.png",
    size: "283 KB",
    link1: "https://drive.google.com/file/d/1I28o_VN3P593o3-JytDXwHxxUWEpxk5D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yoshi's Safari (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Yoshi%27s%20Safari%20%28USA%29.png",
    size: "617 KB",
    link1: "https://drive.google.com/file/d/17jUGVaTDm8j2WILgB29G6_j_d4cjV1O-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Young Merlin (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Young%20Merlin%20%28USA%29.png",
    size: "1325 KB",
    link1: "https://drive.google.com/file/d/1iPAXVS3f4jW9IgI9exvrpJmVMZD8vZHi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ys III - Wanderers from Ys (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ys%20III%20-%20Wanderers%20from%20Ys%20%28USA%29.png",
    size: "537 KB",
    link1: "https://drive.google.com/file/d/1Avccs8-GPbOKXPCXxkFCXdz0NxaWwkkW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ys III - Wanderers from Ys (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Ys%20III%20-%20Wanderers%20from%20Ys%20%28USA%29.png",
    size: "537 KB",
    link1: "https://drive.google.com/file/d/1-jPiWue0ap3DLVuWrHWXbldHN1nRwZir/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zero The Kamikaze Squirrel (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Zero%20the%20Kamikaze%20Squirrel%20%28USA%29.png",
    size: "1231 KB",
    link1: "https://drive.google.com/file/d/1u3zELbzCL4pujMnrVtg7X_oTsmoyecbW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zero the Kamikaze Squirrel (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Zero%20the%20Kamikaze%20Squirrel%20%28USA%29.png",
    size: "1231 KB",
    link1: "https://drive.google.com/file/d/1L8p8HafwWFHaGZurr8-dM4tNgjTJLcLU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zombies Ate My Neighbors (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Zombies%20Ate%20My%20Neighbors%20%28USA%29.png",
    size: "591 KB",
    link1: "https://drive.google.com/file/d/11B2vmjDVWx42raWYHgZZfp2serAL6DsX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zombies Ate My Neighbors (USA) (Virtual Console)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Zombies%20Ate%20My%20Neighbors%20%28USA%29%20%28Virtual%20Console%29.png",
    size: "591 KB",
    link1: "https://drive.google.com/file/d/1eRMOR9-wtEkINTkIHmuw_YLdtrR--Tb-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zool - Ninja of the 'Nth' Dimension (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Zool%20-%20Ninja%20of%20the%20%27Nth%27%20Dimension%20%28USA%29.png",
    size: "752 KB",
    link1: "https://drive.google.com/file/d/1W_-lklNGCycHAYZfPxg9IOlRSlDeH4qe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zool - Ninja of the 'Nth' Dimension (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Zool%20-%20Ninja%20of%20the%20%27Nth%27%20Dimension%20%28USA%29.png",
    size: "752 KB",
    link1: "https://drive.google.com/file/d/1y3sm_4v8stosvbnc31u0bFIKENbB1CKf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zoop (ESP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Zoop%20%28USA%29%20%28Beta%29.png",
    size: "304 KB",
    link1: "https://drive.google.com/file/d/1MU_sRozYa0xJmCEDJPK0vorK0F5y_Z15/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zoop (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Zoop%20%28USA%29.png",
    size: "304 KB",
    link1: "https://drive.google.com/file/d/1-yKJGSypnfNE2zkLX6SvoNjz7w2HfnkU/view?usp=drivesdk",
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