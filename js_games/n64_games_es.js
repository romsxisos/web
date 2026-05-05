const roms = [
  {
    name: "007 - GoldenEye 007 (ES)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "10517 KB",
    link1: "https://drive.google.com/file/d/1du61xgFadnH_626cMvj_P4VXskwyLtCU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "007 - The World is Not Enough  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/007%20-%20The%20World%20Is%20Not%20Enough%20%28USA%29%20%28v2%29%20%28Beta%29.png",
    size: "25919 KB",
    link1: "https://drive.google.com/file/d/1pkCWE649Y5zJxSGEqtOHa3VM7hHU2aJN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "007 - The World is Not Enough (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/007%20-%20The%20World%20Is%20Not%20Enough%20%28USA%29%20%28v2%29%20%28Beta%29.png",
    size: "25947 KB",
    link1: "https://drive.google.com/file/d/1SY69yxkQPzl2UUf19loTlLTUTYqVgelH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "1080 Snowboarding (JU) (M2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/1080%20Snowboarding%20%28USA%29%20%28En%2CJa%29%20%28LodgeNet%29.png",
    size: "11576 KB",
    link1: "https://drive.google.com/file/d/1id5LOBUG606zw2QR4jlXmiZiWv7HjGrj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "40 Winks  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/40%20Winks%20%28USA%29%20%28Aftermarket%29%20%28Unl%29.png",
    size: "29225 KB",
    link1: "https://drive.google.com/file/d/1BXCCP51_w6lHGL_xmYkSXlhviViHjJhM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "AeroFighters Assault (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/AeroFighters%20Assault%20%28USA%29.png",
    size: "4880 KB",
    link1: "https://drive.google.com/file/d/1yBYSe8946hwExv9dePHzyJOO85FD3Vhk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "AeroGauge (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/AeroGauge%20%28USA%29.png",
    size: "2938 KB",
    link1: "https://drive.google.com/file/d/14dVxpaRlHErXJZ88pCtqoZqVe_KI7Rjx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aidyn Chronicles - The First Mage (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Aidyn%20Chronicles%20-%20The%20First%20Mage%20%28USA%29%20%28Beta%29%20%282000-02-10%29.png",
    size: "29559 KB",
    link1: "https://drive.google.com/file/d/1ES0zkeRal-u4iPcnSOT-f46_HbJZ_o8d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All Star Tennis '99  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/All%20Star%20Tennis%2099%20%28USA%29.png",
    size: "3463 KB",
    link1: "https://drive.google.com/file/d/1Cq7_Un0vva85Z2hzXwq6ewFGmlLq530U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All Star Tennis '99 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/All%20Star%20Tennis%2099%20%28USA%29.png",
    size: "3428 KB",
    link1: "https://drive.google.com/file/d/1umFuPwfhT5WsCX9RGFSWlFCKYlBwfw3m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All Star Tennis _99 (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "3428 KB",
    link1: "https://drive.google.com/file/d/1vKYW84XnlPVkWEv-ZMGfyBgOfDnCnV9Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All-Star Baseball '99 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/All-Star%20Baseball%2099%20%28USA%29.png",
    size: "11482 KB",
    link1: "https://drive.google.com/file/d/12eLCUb19S_AmcKyp8Tf6owGLkS5Sk4Cj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All-Star Baseball 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/All-Star%20Baseball%202000%20%28USA%29.png",
    size: "15075 KB",
    link1: "https://drive.google.com/file/d/1tWqgQ4wh7xgyXvSinAhHab-Sg-GckMzt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All-Star Baseball 2001 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/All-Star%20Baseball%202001%20%28USA%29.png",
    size: "15076 KB",
    link1: "https://drive.google.com/file/d/1G5WFVHBBP8q-LJ1uvyZ04c0U-4D0-n8u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Armorines - Project S.W.A.R.M. (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Armorines%20-%20Project%20S.W.A.R.M.%20%28USA%29.png",
    size: "13423 KB",
    link1: "https://drive.google.com/file/d/1Rp04E6_E96YmkS8SVvGp4UpLqgFzzVlV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Army Men - Air Combat (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Army%20Men%20-%20Air%20Combat%20%28USA%29.png",
    size: "5020 KB",
    link1: "https://drive.google.com/file/d/1T33In5MqF8wzrq5v19v6Y6-R5VYuJkzh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Army Men - Sarge's Heroes (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Army%20Men%20-%20Sarge%27s%20Heroes%20%28USA%29.png",
    size: "5229 KB",
    link1: "https://drive.google.com/file/d/1zv7jE9O_A7k_N2n32bcb4w67lvRfip9u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Army Men - Sarge's Heroes 2 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Army%20Men%20-%20Sarge%27s%20Heroes%202%20%28USA%29.png",
    size: "4870 KB",
    link1: "https://drive.google.com/file/d/1_LDZQhhB8f0FhH4Zc71r-GzRyV74m3Oj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asteroids Hyper 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Asteroids%20Hyper%2064%20%28USA%29.png",
    size: "2814 KB",
    link1: "https://drive.google.com/file/d/1MLBkQvayNFUD741V78Ssgxa9ok0FbFUy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Automobili Lamborghini (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Automobili%20Lamborghini%20%28USA%29.png",
    size: "2748 KB",
    link1: "https://drive.google.com/file/d/1xGyHNg5cb3smNiR17YpK2gOnf0JVgqSB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Banjo-Kazooie (U) (V1.0)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Banjo-Kazooie%20%28USA%29%20%28Rev%201%29.png",
    size: "15923 KB",
    link1: "https://drive.google.com/file/d/1mg-h1--WrAH9x73prPN8SaLtO0QZ1ecH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Banjo-Kazooie(ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Banjo-Kazooie%20%28USA%29%20%28Rev%201%29.png",
    size: "16096 KB",
    link1: "https://drive.google.com/file/d/1BEu1FnjhqzgiiNLqFzh8afDVsVclLw6M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Banjo-Tooie  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Banjo-Tooie%20%28USA%29.png",
    size: "32041 KB",
    link1: "https://drive.google.com/file/d/1RRvCpg-M-V817dW-2b9SveR5gcHUbRMv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Banjo-Tooie (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Banjo-Tooie%20%28USA%29.png",
    size: "31989 KB",
    link1: "https://drive.google.com/file/d/1tNIOoo536gbCblFCfv3H3ebc6dM9XX6_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bassmasters 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bassmasters%202000%20%28USA%29%20%28Beta%29.png",
    size: "9401 KB",
    link1: "https://drive.google.com/file/d/10NWRmpcThd7QqtgQTQuy5XnkHzYtGA1U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Beyond - Return of the Joker (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Batman%20Beyond%20-%20Return%20of%20the%20Joker%20%28USA%29.png",
    size: "2763 KB",
    link1: "https://drive.google.com/file/d/1305WanjqzQOLQ-MQ-7Se4Mt3omPcYCLK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BattleTanx (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/BattleTanx%20%28USA%29.png",
    size: "5037 KB",
    link1: "https://drive.google.com/file/d/1SP6wPf60hWiagi8b8WbtimIe_P1suyIb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BattleTanx - Global Assault (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/BattleTanx%20-%20Global%20Assault%20%28USA%29.png",
    size: "4659 KB",
    link1: "https://drive.google.com/file/d/11Mbh36AAM79ubbzcX3Kf_weiDD3mmMAD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battlezone - Rise of the Black Dogs (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Battlezone%20-%20Rise%20of%20the%20Black%20Dogs%20%28USA%29.png",
    size: "11200 KB",
    link1: "https://drive.google.com/file/d/1EK4lT5bkZwwoQM6fl5YhnMY9cD_iZ4T7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beetle Adventure Racing! (U) (M3)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Beetle%20Adventure%20Racing%21%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "12534 KB",
    link1: "https://drive.google.com/file/d/1bBVOL7C9UaER-A6VfK_blj2uTl2lKHYc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Big Mountain 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Big%20Mountain%202000%20%28USA%29.png",
    size: "5609 KB",
    link1: "https://drive.google.com/file/d/1O38iMINa7wkqXA4e3b_vtAJjNovuvdwc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bio F.R.E.A.K.S. (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bio%20F.R.E.A.K.S.%20%28USA%29.png",
    size: "12338 KB",
    link1: "https://drive.google.com/file/d/1rwO8wBgsHUIgnInCssbjQgHY44u7vT4x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blast Corps (U) (V1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Blast%20Corps%20%28USA%29%20%28Rev%201%29.png",
    size: "7070 KB",
    link1: "https://drive.google.com/file/d/1mvLN5ILDYX9E6wwo8hPM1q2B7eC0Vqqp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blues Brothers 2000  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Blues%20Brothers%202000%20%28USA%29.png",
    size: "14613 KB",
    link1: "https://drive.google.com/file/d/1f3yPNF_OqJimJDnL5jXHstBjLqT1wxkP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blues Brothers 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Blues%20Brothers%202000%20%28USA%29.png",
    size: "14577 KB",
    link1: "https://drive.google.com/file/d/11JsrUYENWERMVjfQ68NLBZaSTn1IMn8B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Body Harvest  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Body%20Harvest%20%28USA%29.png",
    size: "6975 KB",
    link1: "https://drive.google.com/file/d/1IHE8aP12rz63R4NEo2tW72V19AsoeM_6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Body Harvest (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Body%20Harvest%20%28USA%29.png",
    size: "6984 KB",
    link1: "https://drive.google.com/file/d/1pwTrH-2OCAyg3BdAQUUZI9yCncmsr2pQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bomberman%2064%20%28USA%29.png",
    size: "5218 KB",
    link1: "https://drive.google.com/file/d/1z5c5yGCQLTMGEUXx31wweCMKkHgAJq59/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman 64 - The Second Attack! (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bomberman%2064%20-%20The%20Second%20Attack%21%20%28USA%29.png",
    size: "11212 KB",
    link1: "https://drive.google.com/file/d/1BLyB3UiOuRNjb87oSNzcbueYAUsjYiYk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman Hero (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bomberman%20Hero%20%28USA%29.png",
    size: "9582 KB",
    link1: "https://drive.google.com/file/d/1ovs0dZCh1eEPX_pbEuxD98r9ZAvgX6dl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bottom of the 9th (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bottom%20of%20the%209th%20%28USA%29.png",
    size: "12895 KB",
    link1: "https://drive.google.com/file/d/1xQDGQcdmUZWbst51jX7GlK6IAc6pldtg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brunswick Circuit Pro Bowling (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Brunswick%20Circuit%20Pro%20Bowling%20%28USA%29.png",
    size: "7387 KB",
    link1: "https://drive.google.com/file/d/1W2fjjV49Hra_Q3m1jYXzVXg9_VLutIzI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buck Bumble  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Buck%20Bumble%20%28USA%29.png",
    size: "5227 KB",
    link1: "https://drive.google.com/file/d/1_mifY8CJFnTSngSaRYhYc5gLwOW6C9J9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buck Bumble (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Buck%20Bumble%20%28USA%29.png",
    size: "5162 KB",
    link1: "https://drive.google.com/file/d/1Pyfs3nnVkj-X0egAtQ-VFJCjYvNGdwet/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bug's Life, A (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bug%27s%20Life%2C%20A%20%28USA%29.png",
    size: "10995 KB",
    link1: "https://drive.google.com/file/d/1iHDQPv_IDeT2IbDAlkFOdAS3mUy4rgPM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bust-A-Move '99 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bust-A-Move%20%2799%20%28USA%29.png",
    size: "6894 KB",
    link1: "https://drive.google.com/file/d/1DdNn60vNoly4vLT6psAU1W46FAo_vIz1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bust-A-Move 2 - Arcade Edition (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bust-A-Move%202%20-%20Arcade%20Edition%20%28USA%29.png",
    size: "6388 KB",
    link1: "https://drive.google.com/file/d/1Azu2r9O5Y8L9O9ZdeblRzyyUyLbfIx7k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Speed (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/California%20Speed%20%28USA%29.png",
    size: "14365 KB",
    link1: "https://drive.google.com/file/d/14pYYO3GOzEL35gUOUoXeSVxWftw18A_t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carmageddon 64  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Carmageddon%2064%20%28USA%29.png",
    size: "10514 KB",
    link1: "https://drive.google.com/file/d/1exHXaRJ8Cjy-zWzQiMaMknrD27alka_k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carmageddon 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Carmageddon%2064%20%28USA%29.png",
    size: "11902 KB",
    link1: "https://drive.google.com/file/d/1VnJGASK2HzX3la9k4I2aXuNp551LPNHZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castlevania (U) (V1.2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Castlevania%20%28USA%29%20%28Rev%201%29.png",
    size: "9579 KB",
    link1: "https://drive.google.com/file/d/1G1KR_KmTfG0wWguTlenAVTFfFkxBIdDl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castlevania - Legacy of Darkness (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Castlevania%20-%20Legacy%20of%20Darkness%20%28USA%29.png",
    size: "13413 KB",
    link1: "https://drive.google.com/file/d/1hAYJPMFcM36D-_PnJEk4N46V4bRDyyur/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chameleon Twist (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Chameleon%20Twist%20%28USA%29%20%28Rev%201%29.png",
    size: "5886 KB",
    link1: "https://drive.google.com/file/d/1pL3Irhj-uBwJbcxDEyv8oA90jSqIyyte/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chameleon Twist 2 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Chameleon%20Twist%202%20%28USA%29.png",
    size: "5258 KB",
    link1: "https://drive.google.com/file/d/1A_uGNQ6-KWPz41MQyk5ePzac0wrg8_3u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Charlie Blast's Territory (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Charlie%20Blast%27s%20Territory%20%28USA%29.png",
    size: "1112 KB",
    link1: "https://drive.google.com/file/d/1NRd-cRp21VX8C1mV7aVar_-YMNspYYme/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Charlie Blast_s Territory (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "1112 KB",
    link1: "https://drive.google.com/file/d/1wJwh52WkE16XHmLwaIbeRzs8e8cOVkYV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chopper Attack (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Chopper%20Attack%20%28USA%29.png",
    size: "5656 KB",
    link1: "https://drive.google.com/file/d/1wxJJlJaQ94IkwSEN9HJeZZrOWAiCp0uH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clay Fighter - Sculptor's Cut (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Clay%20Fighter%20-%20Sculptor%27s%20Cut%20%28USA%29.png",
    size: "13872 KB",
    link1: "https://drive.google.com/file/d/1fPIuKnxLcdnKgUhHD1hSJw1okGRPy2Lt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clay Fighter - Sculptor_s Cut (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "13872 KB",
    link1: "https://drive.google.com/file/d/1vD0ZAMOpRsdsJxI6MOe3h_7Zn5iq_Cy3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Clay Fighter 63 1-3 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Clay%20Fighter%2063%201-3%20%28USA%29%20%28Beta%29%20%281997-08-21%29.png",
    size: "10085 KB",
    link1: "https://drive.google.com/file/d/1psVwaTuf2QvhgDy6zJtTCsdqQO5bha20/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Command & Conquer (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "13293 KB",
    link1: "https://drive.google.com/file/d/1VRaFbYN_UQTtvwTZuWy97eokDdWsSDr2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Conker's Bad Fur Day  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Conker%27s%20Bad%20Fur%20Day%20%28USA%29%20%28Beta%29%20%282000-10-25%29.png",
    size: "59886 KB",
    link1: "https://drive.google.com/file/d/1vs5y7XosIkp581YCUOtdEDCUdJQ0djdR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Conker's Bad Fur Day (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Conker%27s%20Bad%20Fur%20Day%20%28USA%29%20%28Beta%29%20%282000-10-25%29.png",
    size: "59827 KB",
    link1: "https://drive.google.com/file/d/1QeMJIC-4tVYuRrU90zhmwhd1zfvEDvDT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Conker_s Bad Fur Day (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "59827 KB",
    link1: "https://drive.google.com/file/d/1uj7Q_IVLOsci4pj5q1nBkI-vC66OPnzL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cruis'n Exotica (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Cruis%27n%20Exotica%20%28USA%29.png",
    size: "13998 KB",
    link1: "https://drive.google.com/file/d/1wHRlYicyutWYLcvsO37L0xIvnHjaNcO_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cruis'n USA (U) (V1.2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Cruis%27n%20USA%20%28USA%29%20%28Rev%201%29.png",
    size: "4485 KB",
    link1: "https://drive.google.com/file/d/1-V-bN2h_kIgz8SPs9qFq3jTdYbb2yYgk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cruis'n World (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Cruis%27n%20World%20%28USA%29.png",
    size: "10870 KB",
    link1: "https://drive.google.com/file/d/1U41skCIgxn0pk9xgJGKgeabTtKhXSH4C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cruis_n World (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "10870 KB",
    link1: "https://drive.google.com/file/d/1mWNDxoIZ3xrS816uy7c8qNH7eY7_gJ8f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "CyberTiger (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/CyberTiger%20%28USA%29.png",
    size: "13576 KB",
    link1: "https://drive.google.com/file/d/1mf2RVSRJHay0dqDK1cLh_ycScyFihs1e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daffy Duck Starring as Duck Dodgers  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Daffy%20Duck%20Starring%20as%20Duck%20Dodgers%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "13228 KB",
    link1: "https://drive.google.com/file/d/1KksuUYkMhfXiHbR2SXbUQpwRbYyqTWwU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dark Rift (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Dark%20Rift%20%28USA%29.png",
    size: "7446 KB",
    link1: "https://drive.google.com/file/d/1aElV3SM9vqAYOkZmdLtvV2HMx2hNYA6Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deadly Arts (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Deadly%20Arts%20%28USA%29.png",
    size: "8619 KB",
    link1: "https://drive.google.com/file/d/1YdyYgfAJ6zVjVXc61ngorTc0hmK-gtES/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Destruction Derby 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Destruction%20Derby%2064%20%28USA%29.png",
    size: "10063 KB",
    link1: "https://drive.google.com/file/d/1JlX6MUthaaPRGZM591GvyGkSaRDlkNyR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Diddy Kong Racing (U) (M2) (V1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Diddy%20Kong%20Racing%20%28USA%29%20%28En%2CFr%29%20%28Rev%201%29.png",
    size: "10035 KB",
    link1: "https://drive.google.com/file/d/1NriUTnYt9oWR8RMWvphtrRm6NO__gfor/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disney's Donald Duck - Goin' Quackers (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "11496 KB",
    link1: "https://drive.google.com/file/d/14_Zz38ZSyyHkwMon_lK7Y5nPYzOupl24/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disney's Tarzan (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "14400 KB",
    link1: "https://drive.google.com/file/d/1AXhuhO3-u9u0hnrnOsKw4ewXrP5EaYtM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disney_s Donald Duck - Goin_ Quackers (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "11496 KB",
    link1: "https://drive.google.com/file/d/1aCSEpIJ-i1Xp9z9fU49F_pK2NZF-h-Pp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Disney_s Tarzan (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "14400 KB",
    link1: "https://drive.google.com/file/d/1mv2rMwZQPAG5qJnmMZLooAwAaL_WUehw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald Duck - Quack Attack  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Donald%20Duck%20-%20Quack%20Attack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "11579 KB",
    link1: "https://drive.google.com/file/d/1Qn5PmR0sR-NdVxtxrsPLuFvoQp8hXShV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong 64  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Donkey%20Kong%2064%20%28USA%29%20%28Demo%29%20%28Kiosk%29.png",
    size: "27227 KB",
    link1: "https://drive.google.com/file/d/14-ewc0KbK-iHKxvyP70MqR9kmCNWGP0M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Donkey%20Kong%2064%20%28USA%29%20%28Demo%29%20%28Kiosk%29.png",
    size: "27041 KB",
    link1: "https://drive.google.com/file/d/1Qb10OTBsQ2dArTxZrZ2YAZP35RGlmw9i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doom 64 (U) (V1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Doom%2064%20%28USA%29%20%28Rev%201%29.png",
    size: "7143 KB",
    link1: "https://drive.google.com/file/d/1MHef7mX5LUZD4EN_SO4jazRX17LWY42_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dr. Mario 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Dr.%20Mario%2064%20%28USA%29.png",
    size: "2973 KB",
    link1: "https://drive.google.com/file/d/1lPpQiM4ppcqfXhMmZXRmncCkZuG__xig/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dual Heroes (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Dual%20Heroes%20%28USA%29.png",
    size: "7854 KB",
    link1: "https://drive.google.com/file/d/1EeucBseN6Y0hZOEIyFqp022cCqrpgGhz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Duck Dodgers Starring Daffy Duck (U) (M3)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Duck%20Dodgers%20Starring%20Daffy%20Duck%20%28USA%29%20%28En%2CFr%2CEs%29%20%28Beta%29%20%282000-03-07%29.png",
    size: "13001 KB",
    link1: "https://drive.google.com/file/d/1Zybsx9JhszOzk8AKDF1a84FWNp9h6yPb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Duke Nukem - ZER0 H0UR (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "24368 KB",
    link1: "https://drive.google.com/file/d/12oGsHoR60DxNfxAIcx-nmZeynT15hZ7-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Duke Nukem - ZER0 H0UR(ES)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "24367 KB",
    link1: "https://drive.google.com/file/d/1_e9__HkRVTlYRlf1QwMsTNgQgv_6EPbQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Duke Nukem 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Duke%20Nukem%2064%20%28USA%29.png",
    size: "7301 KB",
    link1: "https://drive.google.com/file/d/1UA75nkfR_oNN90ZKEKmRnA_Oi6i5zjsN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ECW Hardcore Revolution (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/ECW%20Hardcore%20Revolution%20%28USA%29%20%28Beta%29.png",
    size: "30993 KB",
    link1: "https://drive.google.com/file/d/1Ypv-eonpPTJZG-xWY2Q-mbzFFZ7F4rMm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim 3D  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Earthworm%20Jim%203D%20%28USA%29.png",
    size: "11441 KB",
    link1: "https://drive.google.com/file/d/1QqvB73MX1a8vZX45yivDpq-spUabw3e_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim 3D (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Earthworm%20Jim%203D%20%28USA%29.png",
    size: "10994 KB",
    link1: "https://drive.google.com/file/d/1qsYo3kQXq6QIcndU2Z9-s-fAalYuEAP-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elmo's Letter Adventure (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "5480 KB",
    link1: "https://drive.google.com/file/d/1CCPSzOlPdzQ7CiB7lhCJKxIYnI8na0LI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elmo's Number Journey (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "6035 KB",
    link1: "https://drive.google.com/file/d/1KiS9_iWvbaOq3E0zCmV36MPVzTK4vouS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elmo_s Letter Adventure (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "5480 KB",
    link1: "https://drive.google.com/file/d/1ibfAh-t8LCUdBleK5af-AIV0ViDwUgLr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elmo_s Number Journey (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "6035 KB",
    link1: "https://drive.google.com/file/d/17fSHVhbYxj7_GG4hlzcM5aW8HW3cd4A6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Excitebike 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Excitebike%2064%20%28USA%29%20%28Demo%29%20%28Kiosk%29.png",
    size: "15388 KB",
    link1: "https://drive.google.com/file/d/10chvXhzg79InpzfkDObfcUAlSBpkJOYW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Extreme-G  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Extreme-G%20%28USA%29.png",
    size: "7823 KB",
    link1: "https://drive.google.com/file/d/19kQXj6iRX9-Ryk7zI-gyQF2NcjicVFeI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Extreme-G (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Extreme-G%20%28USA%29.png",
    size: "7801 KB",
    link1: "https://drive.google.com/file/d/1kx5v8ardyeMm_lRqP8w7fHnfqS6zcOBz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Extreme-G XG2  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Extreme-G%20XG2%20%28USA%29.png",
    size: "11763 KB",
    link1: "https://drive.google.com/file/d/1sEcUbyg226gkpmxgDjnGRSWgMWc2V-bj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Extreme-G XG2 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Extreme-G%20XG2%20%28USA%29.png",
    size: "11724 KB",
    link1: "https://drive.google.com/file/d/1ZcDudIGpGfjLPJDqxu4wtmK6KiefMHcJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-1 Pole Position 64 (U) (M3)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "6016 KB",
    link1: "https://drive.google.com/file/d/1zc5k8TGuxeRCQ6D4xMT3V6EKtoZRB-Ej/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-1 World Grand Prix (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/F-1%20World%20Grand%20Prix%20%28USA%29.png",
    size: "9203 KB",
    link1: "https://drive.google.com/file/d/1aRw0iF92JQ7BXFgTu7HE3UscPo4REEwc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-1 World Grand Prix II  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/F-1%20World%20Grand%20Prix%20II%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "9722 KB",
    link1: "https://drive.google.com/file/d/1TWRVQSxewofg7_Ux7aOTVhnXaKQQgx6K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-ZERO X (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/F-Zero%20X%20%28USA%29%20%28Beta%29%20%28The%20Legend%20of%20Zelda%20Ocarina%20of%20Time%20Overdump%29.png",
    size: "12637 KB",
    link1: "https://drive.google.com/file/d/1BsPPjqBfBpu9BdCPWx_EjbCsg8Awb6n8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Racing Championship(ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/F1%20Racing%20Championship%20%28USA%29%20%28Beta%29.png",
    size: "14194 KB",
    link1: "https://drive.google.com/file/d/1AA3gzGzuVZnxR7i403mPgapjlnIor-rf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA - Road to World Cup 98  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/FIFA%20-%20Road%20to%20World%20Cup%2098%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.png",
    size: "10158 KB",
    link1: "https://drive.google.com/file/d/1EwYofOu9Nhes8DFtFIgtzbhuNNZkhSF8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA - Road to World Cup 98 (U) (M7)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/FIFA%20-%20Road%20to%20World%20Cup%2098%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.png",
    size: "10173 KB",
    link1: "https://drive.google.com/file/d/1K5vMVryYhYm3tnaNyQNzLD1igH-VPmVb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA 99  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/FIFA%2099%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%29.png",
    size: "13692 KB",
    link1: "https://drive.google.com/file/d/1deZkHHJE_Ymh2IHgiCSPCI5UzqUxqiX4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA 99 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/FIFA%2099%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%29.png",
    size: "13730 KB",
    link1: "https://drive.google.com/file/d/1MBzjHRe_4OcM4Cf53RoHn-KqEg-Mwj7S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA Soccer 64 (U) (M3)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/FIFA%20Soccer%2064%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "6389 KB",
    link1: "https://drive.google.com/file/d/1o4Na5KmbtOBum_hwQb5avuS4zML_AYOa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fighter Destiny 2 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Fighter%20Destiny%202%20%28USA%29.png",
    size: "11385 KB",
    link1: "https://drive.google.com/file/d/1V9m9fBzyKrbDZPheDLMOlSaHvSZbpRF3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fighter's Destiny (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "8682 KB",
    link1: "https://drive.google.com/file/d/1DZMg_rHfq5YT7k1CP5YnqZNtjz82QEm0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fighting Force 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Fighting%20Force%2064%20%28USA%29.png",
    size: "10034 KB",
    link1: "https://drive.google.com/file/d/1CGxLTKMEwSi8APspz9lt99azEczKm7Kk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flying Dragon (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Flying%20Dragon%20%28USA%29.png",
    size: "9097 KB",
    link1: "https://drive.google.com/file/d/1MLvhfZ0efL1wCKPW0uvMfX4HPRq6awei/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Forsaken 64  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Forsaken%2064%20%28USA%29.png",
    size: "6851 KB",
    link1: "https://drive.google.com/file/d/1kDQ_VXFOb_4RXSExRyFW-YwRjzAdCnBz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Forsaken 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Forsaken%2064%20%28USA%29.png",
    size: "6840 KB",
    link1: "https://drive.google.com/file/d/1oJEVWcSK0nHPOkIDAE4Y8WapRH4tN7Uy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fox Sports College Hoops '99 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Fox%20Sports%20College%20Hoops%20%2799%20%28USA%29.png",
    size: "9573 KB",
    link1: "https://drive.google.com/file/d/1p68d-w9jbuvKb0bXordJ_5sUBic4V2wW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger 2 (U) (Alpha)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Frogger%202%20%28USA%29%20%28Proto%201%29.png",
    size: "3104 KB",
    link1: "https://drive.google.com/file/d/1ErTEOAlK7eAT7S99ow9TiCPD4nsuGY3C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GT 64 - Championship Edition (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/GT%2064%20-%20Championship%20Edition%20%28USA%29%20%28Beta%29%20%281998-05-25%29.png",
    size: "4353 KB",
    link1: "https://drive.google.com/file/d/1UXPC0-OSg2w1L2ozGfFnhBYahSlYv_Ed/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gauntlet Legends (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Gauntlet%20Legends%20%28USA%29.png",
    size: "14323 KB",
    link1: "https://drive.google.com/file/d/1YTwZBijN3nUIr05I_M1uKCv-USVJufZs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gex 3 - Deep Cover Gecko  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Gex%203%20-%20Deep%20Cover%20Gecko%20%28USA%29.png",
    size: "23952 KB",
    link1: "https://drive.google.com/file/d/10apb18yUTVFd4THr63CH_ghBA9ruuqsl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gex 3 - Deep Cover Gecko (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Gex%203%20-%20Deep%20Cover%20Gecko%20%28USA%29.png",
    size: "25922 KB",
    link1: "https://drive.google.com/file/d/1NJblBNUndMfkXYLm4MvTxzpq36bOmP5Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gex 64 - Enter the Gecko (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Gex%2064%20-%20Enter%20the%20Gecko%20%28USA%29.png",
    size: "14864 KB",
    link1: "https://drive.google.com/file/d/1QdH7oK2INzVSfL2OCENQEkcRBiCjFfT3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Glover (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Glover%20%28USA%29%20%28Proto%29%20%281998-09-04%29.png",
    size: "5713 KB",
    link1: "https://drive.google.com/file/d/19Ao8b-5P3M8Oq2yzAIww0cupwvHUAjev/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Goemon's Great Adventure (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Goemon%27s%20Great%20Adventure%20%28USA%29.png",
    size: "14363 KB",
    link1: "https://drive.google.com/file/d/1-xNmEbOcTGE8OjurTKIBc7GQcL-P53aE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Goemon_s Great Adventure (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "14363 KB",
    link1: "https://drive.google.com/file/d/17zE1W24RkmBTaw4ghzGVAxeas-bqcSQ4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Nugget 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Golden%20Nugget%2064%20%28USA%29.png",
    size: "5832 KB",
    link1: "https://drive.google.com/file/d/1KqIC5crbnXnTqqKYoLCDiU1wAuqEUuwL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GoldenEye 007 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/GoldenEye%20007%20%28USA%29.png",
    size: "10520 KB",
    link1: "https://drive.google.com/file/d/1T9ZaQSm8JpE_3DI7saMiotv7jLBfU2z5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harvest Moon 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Harvest%20Moon%2064%20%28USA%29.png",
    size: "6371 KB",
    link1: "https://drive.google.com/file/d/1q1uCDNCXWSkQweT740Nr5RNUZTl8yVGs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hercules - The Legendary Journeys  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Hercules%20-%20The%20Legendary%20Journeys%20%28USA%29.png",
    size: "14874 KB",
    link1: "https://drive.google.com/file/d/1K1s2c7uK2kYoUGd4X5dYMNRnF-DoWuSV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hercules - The Legendary Journeys (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Hercules%20-%20The%20Legendary%20Journeys%20%28USA%29.png",
    size: "14900 KB",
    link1: "https://drive.google.com/file/d/1cJ-aBbvhu1tufQekU_jqfswpWLDFOWfT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hexen (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Hexen%20%28USA%29.png",
    size: "7647 KB",
    link1: "https://drive.google.com/file/d/1l-Z5Ri2CWLg20uTVkYVSnzU4t3V9BCj0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hey You, Pikachu! (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Hey%20You%2C%20Pikachu%21%20%28USA%29.png",
    size: "8745 KB",
    link1: "https://drive.google.com/file/d/1bERHineUC8A7yvr4xlahcgfNaZT6sGEm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hot Wheels Turbo Racing (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Hot%20Wheels%20-%20Turbo%20Racing%20%28USA%29.png",
    size: "11066 KB",
    link1: "https://drive.google.com/file/d/1LOfNQjBb_7Kh0KAoYTJdpdBh66PwcHWS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hybrid Heaven (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Hybrid%20Heaven%20%28USA%29.png",
    size: "11407 KB",
    link1: "https://drive.google.com/file/d/1pOTHgaSm0oGBS51YSepZWsbiPVCmiWlH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hydro Thunder (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Hydro%20Thunder%20%28USA%29.png",
    size: "19170 KB",
    link1: "https://drive.google.com/file/d/1cNCNxDG6sAwYsd09AE_Y3w_I3Y22_9fy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Iggy's Reckin' Balls (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Iggy%27s%20Reckin%27%20Balls%20%28USA%29.png",
    size: "3788 KB",
    link1: "https://drive.google.com/file/d/1Wxt0Ov991tWKObiAGrXsPdm26quucjFu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "In-Fisherman Bass Hunter 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/In-Fisherman%20-%20Bass%20Hunter%2064%20%28USA%29.png",
    size: "2943 KB",
    link1: "https://drive.google.com/file/d/1AX_UXjngp-3Qjg9TCFhhRSh5vyx5hGJO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indiana Jones and the Infernal Machine (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Indiana%20Jones%20and%20the%20Infernal%20Machine%20%28USA%29.png",
    size: "26880 KB",
    link1: "https://drive.google.com/file/d/11fxAPvjvEnttKPMaUkTJLo0dbZaQxYkx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indy Racing 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Indy%20Racing%202000%20%28USA%29.png",
    size: "10380 KB",
    link1: "https://drive.google.com/file/d/1bmIlp21ecRWSpbwiWvddVUzZrvs_dEVm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Superstar Soccer '98 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/International%20Superstar%20Soccer%20%2798%20%28USA%29.png",
    size: "9116 KB",
    link1: "https://drive.google.com/file/d/1un30dV8nNHLE-EdVLmodeqqzyidJ2Dtf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Superstar Soccer 2000  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/International%20Superstar%20Soccer%202000%20%28USA%29%20%28En%2CEs%29%20%28Rev%201%29.png",
    size: "11472 KB",
    link1: "https://drive.google.com/file/d/1U4Fxd_v72G7uUPWw8NGium-bgbbEcEUA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Superstar Soccer 2000 (U) (M2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/International%20Superstar%20Soccer%202000%20%28USA%29%20%28En%2CEs%29%20%28Rev%201%29.png",
    size: "11297 KB",
    link1: "https://drive.google.com/file/d/1ac_SAAhHUzQPyQ4GohQRv3HimMG1Bfp1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Superstar Soccer 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/International%20Superstar%20Soccer%2064%20%28USA%29.png",
    size: "6373 KB",
    link1: "https://drive.google.com/file/d/12z9RWMgdBi9IK_1WqmqjpuigcTm4zWuG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Superstar Soccer _98 (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "9116 KB",
    link1: "https://drive.google.com/file/d/1jbDXgWYmRpe1NhiJgxNV84Y4Wzi1A_WW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Track & Field 2000 (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "8971 KB",
    link1: "https://drive.google.com/file/d/1EFbJH6q4KMhEjRsPAmXX5-eM4gbyBm8X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeopardy! (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Jeopardy%21%20%28USA%29.png",
    size: "2113 KB",
    link1: "https://drive.google.com/file/d/1zQYq1fdhxPi3-Jcygv0hEdw2I82IAvpX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeremy McGrath Supercross 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Jeremy%20McGrath%20Supercross%202000%20%28USA%29.png",
    size: "13786 KB",
    link1: "https://drive.google.com/file/d/1fLF7BDVqEZKNRFtzh6DfiyrYLSMAARZt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jet Force Gemini  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Jet%20Force%20Gemini%20%28USA%29.png",
    size: "29062 KB",
    link1: "https://drive.google.com/file/d/11Xdy7k5a4fT_FzdOPHdOMx32mdc8jkZW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jet Force Gemini (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Jet%20Force%20Gemini%20%28USA%29.png",
    size: "29079 KB",
    link1: "https://drive.google.com/file/d/1B6Jmr7Q74nRe9b-rijgXTd59mNsw-p7x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "John Romero's Daikatana (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/John%20Romero%27s%20Daikatana%20%28USA%29.png",
    size: "12963 KB",
    link1: "https://drive.google.com/file/d/1xzOzhy6GSPDkz6RaRCY_WfCPCXFE6ZCa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "John Romero_s Daikatana (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "12963 KB",
    link1: "https://drive.google.com/file/d/1LenrVy3a8eVHYw9S1hL7PbUFtUh1DLW8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ken Griffey Jr.'s Slugfest (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Ken%20Griffey%20Jr.%27s%20Slugfest%20%28USA%29.png",
    size: "13820 KB",
    link1: "https://drive.google.com/file/d/18ujotRpLMv6xCSLL6ijLi9aRslMtHSLP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Killer Instinct Gold (U) (V1.2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Killer%20Instinct%20Gold%20%28USA%29%20%28Rev%201%29.png",
    size: "11792 KB",
    link1: "https://drive.google.com/file/d/1DAp7vPKhJcQFg6KgR2LdO6hFJuHEat-N/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby 64 - The Crystal Shards (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Kirby%2064%20-%20The%20Crystal%20Shards%20%28USA%29.png",
    size: "11928 KB",
    link1: "https://drive.google.com/file/d/1AuT43pWrIa5FKG3LBViTfgkzbk7GfDF5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knife Edge - Nose Gunner (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Knife%20Edge%20-%20Nose%20Gunner%20%28USA%29.png",
    size: "4772 KB",
    link1: "https://drive.google.com/file/d/1tQyZYbQVxfBhYWfiQ7x4vRm6n2nSsgCS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knockout Kings 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Knockout%20Kings%202000%20%28USA%29.png",
    size: "13377 KB",
    link1: "https://drive.google.com/file/d/1TtR2aSYeu0bwgbQAA-gHaMx2r_hPtXJZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kobe Bryant's NBA Courtside (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "10969 KB",
    link1: "https://drive.google.com/file/d/1ZfuqhFmMT2Ym51HSl926gsNqwz-81OGz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kobe Bryant_s NBA Courtside (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "10969 KB",
    link1: "https://drive.google.com/file/d/1UAX_QvpdDsxxw3_c_-lqTuII0P6_3ljB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "LEGO Racers  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/LEGO%20Racers%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.png",
    size: "10708 KB",
    link1: "https://drive.google.com/file/d/1KPKMKiZLNALxAvDuuhY7q8tiyzeHQBdW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "LEGO Racers (U) (M10)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/LEGO%20Racers%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%2CFi%29.png",
    size: "10283 KB",
    link1: "https://drive.google.com/file/d/13Wbya0YnhCgNkHMkdbd3JZIdOuq8cCQt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Majora's Mask (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Majora%27s%20Mask%20%28USA%29%20%28Demo%29%20%28Kiosk%29.png",
    size: "26962 KB",
    link1: "https://drive.google.com/file/d/1qA16hm0tk6m3iyIkXK-S4kU3LkpfzJn8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Majora_s Mask (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "26962 KB",
    link1: "https://drive.google.com/file/d/1JjSkudvQPD5qhAmHHRuNIsBXD4Bao9sG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Ocarina of Time (U) (V1.2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Ocarina%20of%20Time%20%28USA%29%20%28Beta%29.png",
    size: "25983 KB",
    link1: "https://drive.google.com/file/d/1nbkikaloafpbgZZkW2KSgQIaITzEvXCe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Ocarina of Time - Master Quest (U) (GC)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Ocarina%20of%20Time%20-%20Master%20Quest%20%28USA%29%20%28GameCube%29.png",
    size: "25933 KB",
    link1: "https://drive.google.com/file/d/179WCembWDcoL6i7PcYzZzZlQteErcGa2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lode Runner 3-D  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Lode%20Runner%203-D%20%28USA%29.png",
    size: "6831 KB",
    link1: "https://drive.google.com/file/d/1UYfNPK7pgk0UFGBSiWx4EbhiqURQmo3T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lode Runner 3-D (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Lode%20Runner%203-D%20%28USA%29.png",
    size: "6622 KB",
    link1: "https://drive.google.com/file/d/1MgBrqVwLo-DEpJo7QM6W4nkTutp1YMlU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mace - The Dark Age (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mace%20-%20The%20Dark%20Age%20%28USA%29%20%28Beta%29.png",
    size: "10394 KB",
    link1: "https://drive.google.com/file/d/12rrpFYHmb692YXL2K7JNx4kOvm5qHLkT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden Football 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Madden%20Football%2064%20%28USA%29.png",
    size: "10988 KB",
    link1: "https://drive.google.com/file/d/1vkujpAUF_Kqgtbuyysj4dN2Wt_DH_ErE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Madden%20NFL%202000%20%28USA%29.png",
    size: "11130 KB",
    link1: "https://drive.google.com/file/d/1pnubdfqUrDUIPPV7yqbuy_ueVOJ1VOCE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 2001 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Madden%20NFL%202001%20%28USA%29.png",
    size: "10824 KB",
    link1: "https://drive.google.com/file/d/1rROAltY9jZv9y87CbFmB-D6yJRcB1r4R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 99 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Madden%20NFL%2099%20%28USA%29%20%28Beta%29%20%281998-08-05%29.png",
    size: "10473 KB",
    link1: "https://drive.google.com/file/d/15bJKOsXBI6FjSv3wp-Ymx2THHieOvXmO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Kart 64  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mario%20Kart%2064%20%28USA%29.png",
    size: "8785 KB",
    link1: "https://drive.google.com/file/d/1YrIKY5_k7cONdRvRTg_Puvf_omz_wMSb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Party (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mario%20Party%20%28USA%29.png",
    size: "21176 KB",
    link1: "https://drive.google.com/file/d/1pycJKOivq9hzLdvvKBGXXF_nr2o_MoCh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Party 2  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mario%20Party%202%20%28USA%29%20%28Wii%20Virtual%20Console%29.png",
    size: "24667 KB",
    link1: "https://drive.google.com/file/d/1LirX96dZzkG9nyclwLvG-B_IeADb71PQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Party 3  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mario%20Party%203%20%28USA%29%20%28LodgeNet%29.png",
    size: "25239 KB",
    link1: "https://drive.google.com/file/d/1U8kXofWO0HeL9SxNQzRqZrF2MuD8wp72/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mia Hamm Soccer 64  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mia%20Hamm%20Soccer%2064%20%28USA%29%20%28En%2CEs%29.png",
    size: "12206 KB",
    link1: "https://drive.google.com/file/d/1DeALFEDc65NJVaMRajMtSkPdN9O52Aj3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Speedway USA  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mickey%27s%20Speedway%20USA%20%28USA%29.png",
    size: "22185 KB",
    link1: "https://drive.google.com/file/d/12S5XmN4oUGILE4HAx9zeO94mLIF64Tfj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro(ES)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "5772 KB",
    link1: "https://drive.google.com/file/d/1p0rbv5ZSp6lTyDnGHP4MH81V1SXOwo6d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mission Impossible  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mission%20-%20Impossible%20%28USA%29.png",
    size: "11482 KB",
    link1: "https://drive.google.com/file/d/1dmFhLJxeYNUsJjfaxGXSQ1albapRQD2b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monaco Grand Prix - Racing Simulation 2  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Monaco%20Grand%20Prix%20-%20Racing%20Simulation%202%20%28Europe%29%20%28En%2CFr%2CEs%2CIt%29.png",
    size: "14280 KB",
    link1: "https://drive.google.com/file/d/14gPiG4-wb-EMXvIeywcwWTDhZXZM_Y1T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monster Truck Madness 64  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Monster%20Truck%20Madness%2064%20%28USA%29.png",
    size: "6937 KB",
    link1: "https://drive.google.com/file/d/1ck_KkadQrWEsrk6O3kad0q6wHtdus5E0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat Trilogy  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mortal%20Kombat%20Trilogy%20%28USA%29%20%28Beta%29%20%281996-05-13%29.png",
    size: "10444 KB",
    link1: "https://drive.google.com/file/d/1m-vg0CCELNqc_u3KS_GLr5dlvSwEU5EZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Live 2000  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/NBA%20Live%202000%20%28USA%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "12874 KB",
    link1: "https://drive.google.com/file/d/1hHnpcbAN0OQO2XYozAZvNOhVOQ35cBap/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Live 99  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/NBA%20Live%2099%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "12129 KB",
    link1: "https://drive.google.com/file/d/1HqZoSKHyf5ZGpIVRkcMtgHUjGqRHs3mR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "O.D.T.  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/O.D.T.%20%28USA%29%20%28En%2CFr%2CEs%29%20%28Proto%29.png",
    size: "13568 KB",
    link1: "https://drive.google.com/file/d/1ANypvg1uNRgpWJuQ3ySypCEtG8pPGea3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Olympic Hockey Nagano '98  (ES)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "5745 KB",
    link1: "https://drive.google.com/file/d/1dNJ_569ktQrgaQ22mnPe9z9CXGmKcUTm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation WinBack  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Operation%20WinBack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "10840 KB",
    link1: "https://drive.google.com/file/d/1p3G908phB3-wEGH2epUVSeYies4FoZkZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA European Tour Golf  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/PGA%20European%20Tour%20Golf%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "13832 KB",
    link1: "https://drive.google.com/file/d/153zynQVgZb1EIwyYN1A0fQMjj2mJllEV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paper Mario (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Paper%20Mario%20%28USA%29.png",
    size: "32492 KB",
    link1: "https://drive.google.com/file/d/1e0tJwutaFhVfVDV9X3Q2-ftsN97zenxW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Perfect Dark  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Perfect%20Dark%20%28USA%29%20%28Debug%20Version%29%20%282000-03-22%29.png",
    size: "29670 KB",
    link1: "https://drive.google.com/file/d/1EUGWKu5UVqYHTHzBRm3WzPnS1pXJX21m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Snap  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Pokemon%20Snap%20%28USA%29.png",
    size: "8914 KB",
    link1: "https://drive.google.com/file/d/1H-Ab4lFRoLkkwW2APJAWQDyH-bDcne8i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Stadium  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Pokemon%20Stadium%20%28USA%29%20%28Rev%201%29.png",
    size: "27406 KB",
    link1: "https://drive.google.com/file/d/1qcLG76fNd8Bn94qR_pXdGBqkUBTt4X-D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Stadium 2  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Pokemon%20Stadium%202%20%28USA%29.png",
    size: "48282 KB",
    link1: "https://drive.google.com/file/d/1TdD9PSyDEC536t4TBxIDUP7rj3Geqz9P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quake II (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Quake%20II%20%28USA%29.png",
    size: "11509 KB",
    link1: "https://drive.google.com/file/d/1UZBM28M2kzayPj1HOMv3rWzWde1bmAzC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest 64  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Quest%2064%20%28USA%29.png",
    size: "6903 KB",
    link1: "https://drive.google.com/file/d/16OeT-zQPrKPQy_eNhcJoQVO10TjTbnhF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Quest%2064%20%28USA%29.png",
    size: "6855 KB",
    link1: "https://drive.google.com/file/d/1Q8UQRHJFzVj3dvZWUktJu2aiIoH2OAQF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RR64 - Ridge Racer 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/RR64%20-%20Ridge%20Racer%2064%20%28USA%29.png",
    size: "18310 KB",
    link1: "https://drive.google.com/file/d/159hNGSaO0C7eiKvtcGMhqkvf4WS6PUNb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rally Challenge 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rally%20Challenge%202000%20%28USA%29.png",
    size: "9675 KB",
    link1: "https://drive.google.com/file/d/1p7RDiLrKFyBdWUcuvy5AmuoXcRTBlWIv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampage - World Tour (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rampage%20-%20World%20Tour%20%28USA%29.png",
    size: "10181 KB",
    link1: "https://drive.google.com/file/d/1zIX2Z6-n-AlVm5EIOoQY_JjTzvmDwRZ3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampage 2 - Universal Tour (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rampage%202%20-%20Universal%20Tour%20%28USA%29.png",
    size: "10727 KB",
    link1: "https://drive.google.com/file/d/1IYDmunr7z8B6VZUh67QeSS19SnnZye7A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rat Attack (U) (M6)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rat%20Attack%21%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "4732 KB",
    link1: "https://drive.google.com/file/d/1FWcsdMvqQVrbWzqVT3O2h86EXBGplRHn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rat Attack!  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rat%20Attack%21%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "4874 KB",
    link1: "https://drive.google.com/file/d/1ujc0b3UDFVzgZL1N2dxLemTkgoJCvhSa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman 2 - The Great Escape  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rayman%202%20-%20The%20Great%20Escape%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "18963 KB",
    link1: "https://drive.google.com/file/d/15Ffo4sPzP_MsWxEikAuwmeA9K1oxv70F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman 2 - The Great Escape (U) (M5)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rayman%202%20-%20The%20Great%20Escape%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "18599 KB",
    link1: "https://drive.google.com/file/d/1DbKwhtErkI4pWBuBaQt2KXlssTZi3WzX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Razor Freestyle Scooter (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Razor%20Freestyle%20Scooter%20%28USA%29.png",
    size: "7027 KB",
    link1: "https://drive.google.com/file/d/1uk5FhWH23OKxuMLIvXLQ1IYLYsWqXE8U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Re-Volt   (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Re-Volt%20%28USA%29.png",
    size: "10202 KB",
    link1: "https://drive.google.com/file/d/1My6efFP-UIptoDrFuQPziKp3yxVFtS4O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Re-Volt (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Re-Volt%20%28USA%29.png",
    size: "10090 KB",
    link1: "https://drive.google.com/file/d/1bX0C2lJ78_X1hlgLtB7aECS-Nhfm7GwD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ready 2 Rumble Boxing  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Ready%202%20Rumble%20Boxing%20%28USA%29.png",
    size: "29481 KB",
    link1: "https://drive.google.com/file/d/103HqdM57aSC51IGGw1CckHJHovg7k85Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ready 2 Rumble Boxing (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Ready%202%20Rumble%20Boxing%20%28USA%29.png",
    size: "29472 KB",
    link1: "https://drive.google.com/file/d/1sNsqS9T6IAMd2DngPI61pN77ChCbrklE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ready 2 Rumble Boxing - Round 2 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Ready%202%20Rumble%20Boxing%20-%20Round%202%20%28USA%29.png",
    size: "28096 KB",
    link1: "https://drive.google.com/file/d/1GQdSsxDfzbbtEsl_r0ijJqnYXQ3uiYdX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Resident Evil 2 (U) (V1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Resident%20Evil%202%20%28USA%29%20%28Rev%201%29.png",
    size: "63557 KB",
    link1: "https://drive.google.com/file/d/1468GVMiH3TJT4RIk8isaPexG1Qm46S2o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Rash 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Road%20Rash%2064%20%28USA%29.png",
    size: "18590 KB",
    link1: "https://drive.google.com/file/d/1i2J04RyS5s-HxtGRJj7s498bnTi0345M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roadsters Trophy  (ES)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "8836 KB",
    link1: "https://drive.google.com/file/d/1xmU3YQhxxVhJYii8rc8K3wphgBezPVRu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roadsters Trophy (U) (M3)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "8823 KB",
    link1: "https://drive.google.com/file/d/1RVYV2hLIDwNgpj6ecqiz7fpIOxCi0qPp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robotron 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Robotron%2064%20%28USA%29.png",
    size: "2389 KB",
    link1: "https://drive.google.com/file/d/1guuW2wM68SINsdI4wYue0hmPd6bptcwR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocket - Robot on Wheels (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rocket%20-%20Robot%20on%20Wheels%20%28USA%29.png",
    size: "8198 KB",
    link1: "https://drive.google.com/file/d/1mqD0jVcpOYfyHZmdKfGuQW5siviya3zZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rugrats - Scavenger Hunt (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rugrats%20-%20Scavenger%20Hunt%20%28USA%29.png",
    size: "12727 KB",
    link1: "https://drive.google.com/file/d/1_V5LO008ENsSfUsbXDJDFFCtHwGiPQN6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rugrats in Paris - The Movie (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rugrats%20in%20Paris%20-%20The%20Movie%20%28USA%29.png",
    size: "11121 KB",
    link1: "https://drive.google.com/file/d/1ZnU2vpJLOwZtrvjRtHsGpConTbWkrv53/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rush 2 - Extreme Racing  (ES)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "11159 KB",
    link1: "https://drive.google.com/file/d/1pvKzWD6JLDSN4nFP8pIoQf880HkqdoKK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rush 2 - Extreme Racing USA (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rush%202%20-%20Extreme%20Racing%20USA%20%28USA%29.png",
    size: "11109 KB",
    link1: "https://drive.google.com/file/d/1kN58ovP6WawhDot_drFb_4GF7w7_98Z9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "S.C.A.R.S. (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/S.C.A.R.S.%20%28USA%29.png",
    size: "3734 KB",
    link1: "https://drive.google.com/file/d/1o9XXLFGXe_bmIjBvoO0lacyM9O-5EcYy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "San Francisco Rush - Extreme Racing (U) (M3)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/San%20Francisco%20Rush%20-%20Extreme%20Racing%20%28USA%29%20%28En%2CFr%2CDe%29%20%28Rev%201%29.png",
    size: "7766 KB",
    link1: "https://drive.google.com/file/d/19B4ihTn-Fn2ue_24-vzhr7L5vZRYOlIy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "San Francisco Rush 2049  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/San%20Francisco%20Rush%202049%20%28USA%29.png",
    size: "11122 KB",
    link1: "https://drive.google.com/file/d/1g5MdWFSKRaEavzAU0oDSQr3-sbY9lb6X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "San Francisco Rush 2049 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/San%20Francisco%20Rush%202049%20%28USA%29.png",
    size: "11134 KB",
    link1: "https://drive.google.com/file/d/1b6xbO-3hlMZlVZhhIQILVlJlgd8_8VzO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scooby-Doo! - Classic Creep Capers (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Scooby-Doo%21%20-%20Classic%20Creep%20Capers%20%28USA%29%20%28Rev%201%29.png",
    size: "9992 KB",
    link1: "https://drive.google.com/file/d/1-Uh2HOLTouTn5D4rwR26dgxvUMtZXVhS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow Man  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Shadow%20Man%20%28USA%29.png",
    size: "29721 KB",
    link1: "https://drive.google.com/file/d/1tyaGCHhybXguqpLyuldqTo7bF1sliOrk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow Man (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Shadow%20Man%20%28USA%29.png",
    size: "29430 KB",
    link1: "https://drive.google.com/file/d/1VIa5igNYolmz_csW8H_hVga4SUxreYEN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadowgate 64 - Trials Of The Four Towers (U) (M2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Shadowgate%2064%20-%20Trials%20of%20the%20Four%20Towers%20%28USA%29%20%28En%2CEs%29.png",
    size: "13144 KB",
    link1: "https://drive.google.com/file/d/1Li-mDPARhJ3d9RE1JoPU6ZKW2PcDjM18/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadowgate 64 - Trials of the Four Towers  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Shadowgate%2064%20-%20Trials%20of%20the%20Four%20Towers%20%28USA%29%20%28En%2CEs%29.png",
    size: "13257 KB",
    link1: "https://drive.google.com/file/d/1Gu0A7cXSOokLwq2E8fp1hJ17UhOurj1B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sin and Punishment - Successor of the Earth  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Sin%20and%20Punishment%20-%20Successor%20of%20the%20Earth%20%28USA%29%20%28Wii%20U%20Virtual%20Console%29.png",
    size: "24840 KB",
    link1: "https://drive.google.com/file/d/1qafGHF9gXvEYtgnsCKDobGzVtRWgieT2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snowboard Kids (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Snowboard%20Kids%20%28USA%29.png",
    size: "4688 KB",
    link1: "https://drive.google.com/file/d/1RIoUHNoakmw6wwBtIj7yg51yQt4ek1KQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snowboard Kids 2 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Snowboard%20Kids%202%20%28USA%29.png",
    size: "10761 KB",
    link1: "https://drive.google.com/file/d/1IL_MzF-qBhK8dp8khKs_fa0cRyDpUCY5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "South Park  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/South%20Park%20%28USA%29.png",
    size: "13708 KB",
    link1: "https://drive.google.com/file/d/1t-TSLc0d50rKJ5bEMDxizNcq10LOnF-x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "South Park (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/South%20Park%20%28USA%29.png",
    size: "13731 KB",
    link1: "https://drive.google.com/file/d/1138Nh-MYX5dpCRXMrDXnEqv5guysKDw1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "South Park - Chef's Luv Shack (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/South%20Park%20-%20Chef%27s%20Luv%20Shack%20%28USA%29.png",
    size: "13868 KB",
    link1: "https://drive.google.com/file/d/1qg1eOsvWcLT5z6G-i4J98_t_Zx8RSkiV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "South Park Rally (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/South%20Park%20Rally%20%28USA%29.png",
    size: "13781 KB",
    link1: "https://drive.google.com/file/d/1fWkTVswk3pwtqFkWYDd7JEVzRP9dl2XW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Invaders (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Space%20Invaders%20%28USA%29.png",
    size: "6008 KB",
    link1: "https://drive.google.com/file/d/1ylVsAcFPv4FW76HPI5eJF0GUK7xhDZ4e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Station Silicon Valley (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "6232 KB",
    link1: "https://drive.google.com/file/d/1jFtm3FEx1g1zdMRWl1MPQ7DuQJyd7PY6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SpaceStation Silicon Valley  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/SpaceStation%20Silicon%20Valley%20%28USA%29%20%28Rev%201%29.png",
    size: "6238 KB",
    link1: "https://drive.google.com/file/d/1fN-47REWMLkOd6sZ1s1sCOYl2jRC4w4Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Spider-Man%20%28USA%29.png",
    size: "28106 KB",
    link1: "https://drive.google.com/file/d/1pwvr10WwQuYW3RONqzpHpnEFDLuAWQbK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox 64  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Fox%2064%20%28USA%29%20%28Rev%201%29.png",
    size: "9710 KB",
    link1: "https://drive.google.com/file/d/1quC3dVpjXvZ5NIkR5sB9Y48NGacexkeu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Fox 64 (U) (V1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Fox%2064%20%28USA%29%20%28Rev%201%29.png",
    size: "10386 KB",
    link1: "https://drive.google.com/file/d/1o17R1t0GkQPmDU0lJkZEPIaR3HkBS9nE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Soldier - Vanishing Earth (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Soldier%20-%20Vanishing%20Earth%20%28USA%29.png",
    size: "8755 KB",
    link1: "https://drive.google.com/file/d/1NzmYWNDTQuEaSzDZchmL2AGI8j1xewuJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars - Rogue Squadron (U) (M3)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Wars%20-%20Rogue%20Squadron%20%28USA%29%20%28Rev%201%29.png",
    size: "14182 KB",
    link1: "https://drive.google.com/file/d/1BTUgyiHfH10l6B52rIUVUd7a5VB8jx7J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars - Shadows of the Empire (U) (V1.2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Wars%20-%20Shadows%20of%20the%20Empire%20%28USA%29%20%28Aftermarket%29%20%28Unl%29.png",
    size: "11539 KB",
    link1: "https://drive.google.com/file/d/1IM1BTcIycdXM2tcdbjqHZI4dbnQEdt3G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars Episode I - Battle for Naboo (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Wars%20Episode%20I%20-%20Battle%20for%20Naboo%20%28USA%29.png",
    size: "26190 KB",
    link1: "https://drive.google.com/file/d/1Iiqp7jxbvhEGDcvfzfj806_lCOZfKaTX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars Episode I - Racer  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Wars%20Episode%20I%20-%20Racer%20%28USA%29%20%28Aftermarket%29%20%28Unl%29.png",
    size: "25026 KB",
    link1: "https://drive.google.com/file/d/1wGvWFAcAzbV3yWv1cH8YuDHyEsRxkDsN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars Episode I - Racer (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Wars%20Episode%20I%20-%20Racer%20%28USA%29%20%28Aftermarket%29%20%28Unl%29.png",
    size: "24902 KB",
    link1: "https://drive.google.com/file/d/1Pwh8ONCSB-lnKqItBkVTiyVjcXspYdUa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "StarCraft 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/StarCraft%2064%20%28USA%29%20%28Beta%29.png",
    size: "26399 KB",
    link1: "https://drive.google.com/file/d/1KrQqopb_LjgHRFcwc4hbwUQEsl4wz2qy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Starshot - Space Circus Fever  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Starshot%20-%20Space%20Circus%20Fever%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "11178 KB",
    link1: "https://drive.google.com/file/d/1NE-NHJWybgqlOLdU8Jv6LR2fqbpani_I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Starshot - Space Circus Fever (U) (M3)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Starshot%20-%20Space%20Circus%20Fever%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "11161 KB",
    link1: "https://drive.google.com/file/d/11pzamBgKUfwdWl4Vzn4U6VlKMy2uzeaC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stunt Racer 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Stunt%20Racer%2064%20%28USA%29.png",
    size: "10599 KB",
    link1: "https://drive.google.com/file/d/1JbIrXVkxBNG92mNwkqvhzLtAjILyTx7D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bowling 64 (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "5158 KB",
    link1: "https://drive.google.com/file/d/17Ns8KtNs-wFd607raS198FkGOpiF8FI8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Super%20Mario%2064%20%28USA%29.png",
    size: "6121 KB",
    link1: "https://drive.google.com/file/d/1XglvrwuZKl1C4WQr5bMNuoIMKtsV7rk0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario 64(ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Super%20Mario%2064%20%28USA%29.png",
    size: "6113 KB",
    link1: "https://drive.google.com/file/d/1RT8Rjx1i3--v-lbD6GPc5BxRYN_B17Fa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Smash Bros. (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Super%20Smash%20Bros.%20%28USA%29.png",
    size: "12237 KB",
    link1: "https://drive.google.com/file/d/1jMMSHCD3d65yOXGYWWj0kcrTnioF0F7G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Supercross 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Supercross%202000%20%28USA%29.png",
    size: "14254 KB",
    link1: "https://drive.google.com/file/d/19ENhcDHaOhvdr2QzJGJ4PwghmsRvH-uo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Superman  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Superman%20%28USA%29%20%28Beta%29%20%281998-09-06%29.png",
    size: "5123 KB",
    link1: "https://drive.google.com/file/d/112IhujypOUmkLfxiNKb5VXqEAMYbqVwT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Superman (U) (M3)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Superman%20%28USA%29%20%28Beta%29%20%281998-09-06%29.png",
    size: "5073 KB",
    link1: "https://drive.google.com/file/d/10AYUJQIGU8DTkRRTfywC3TbYtgrjTEmh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taz Express  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Taz%20Express%20%28USA%29%20%28Proto%29%20%282000-05-15%29.png",
    size: "10666 KB",
    link1: "https://drive.google.com/file/d/1s_nJkJ2ClI9EU9f_3lx5p79QYh_XBvUQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetrisphere (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tetrisphere%20%28USA%29.png",
    size: "6508 KB",
    link1: "https://drive.google.com/file/d/1lzcBIrYL8Aj9j5UVhZ48UljT5Rqsqv8Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend of Zelda - Majora's Mask(ES)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "27408 KB",
    link1: "https://drive.google.com/file/d/1hzH1lN1bSIl3pFPJD2gzYn0BHX_VgdDd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend of Zelda - Ocarina of Time(ES)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "26009 KB",
    link1: "https://drive.google.com/file/d/1BkqvdV0FwpStg7mt8IcGKC6gQWTQJne1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend of Zelda Ocarina of Time Master Quest (ES)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "25872 KB",
    link1: "https://drive.google.com/file/d/1CyX0--7sQqD2qGOaWxq-2hZNI6ZlZmm1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tigger's Honey Hunt  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tigger%27s%20Honey%20Hunt%20%28USA%29.png",
    size: "12963 KB",
    link1: "https://drive.google.com/file/d/1NNV6SP57rOGoCRpMkTZ29XGGJgOwq_YR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tigger's Honey Hunt (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tigger%27s%20Honey%20Hunt%20%28USA%29.png",
    size: "12095 KB",
    link1: "https://drive.google.com/file/d/16a44qcynpX_nM5npaglg1MVZ1d6mHItc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom Clancy's Rainbow Six (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tom%20Clancy%27s%20Rainbow%20Six%20%28USA%29.png",
    size: "13716 KB",
    link1: "https://drive.google.com/file/d/1BmBDc46Ef0ysxSvI0ra1x5YLFNsefRRv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry in Fists of Furry  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tom%20and%20Jerry%20in%20Fists%20of%20Furry%20%28USA%29.png",
    size: "8489 KB",
    link1: "https://drive.google.com/file/d/1fDvGgSkrH-mwLLrAtuBm9czUCgAY3b75/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry in Fists of Furry (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tom%20and%20Jerry%20in%20Fists%20of%20Furry%20%28USA%29.png",
    size: "7973 KB",
    link1: "https://drive.google.com/file/d/1maA76lLJBlJrYLZ04DjVS8_sHpbeqecM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonic Trouble  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tonic%20Trouble%20%28USA%29%20%28Rev%201%29.png",
    size: "10092 KB",
    link1: "https://drive.google.com/file/d/1sE2NPgPuthumQh0CQ_WYKNmumO0oZECF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonic Trouble (U) (V1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tonic%20Trouble%20%28USA%29%20%28Rev%201%29.png",
    size: "10312 KB",
    link1: "https://drive.google.com/file/d/1hZE6H-V809eF-Lzfj6w2rVzDHE5enJ7I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tony Hawk's Pro Skater (U) (V1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tony%20Hawk%27s%20Pro%20Skater%20%28USA%29%20%28Beta%29.png",
    size: "11761 KB",
    link1: "https://drive.google.com/file/d/1cdad_0RAwWgJeSIVVHcK6KFkFGcq1Yf3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tony Hawk's Pro Skater 2 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tony%20Hawk%27s%20Pro%20Skater%202%20%28USA%29%20%28Beta%29%20%282001-04-20%29.png",
    size: "14999 KB",
    link1: "https://drive.google.com/file/d/1VjmXIzpwgbYjNbysvldamstQozoEwLGH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tony Hawk's Pro Skater 3 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tony%20Hawk%27s%20Pro%20Skater%203%20%28USA%29.png",
    size: "14760 KB",
    link1: "https://drive.google.com/file/d/1ZaVPPdekzgPFORPurDoDPcAn7sBBKr9n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tony Hawk_s Pro Skater (U) (V1.1)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "11761 KB",
    link1: "https://drive.google.com/file/d/1pVARceu50QDEMtYWDtT0EKXLuXqP4DpN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tony Hawk_s Pro Skater 2 (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "14999 KB",
    link1: "https://drive.google.com/file/d/1p9xoyyW-lCaoHt_RRsYkdU25KW3E2x3d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tony Hawk_s Pro Skater 3 (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "14760 KB",
    link1: "https://drive.google.com/file/d/1pz2RbRoBoif1b2ze1lAJGziH_3XELa8q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear Hyper Bike (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Top%20Gear%20Hyper-Bike%20%28USA%29%20%28Beta%29.png",
    size: "15130 KB",
    link1: "https://drive.google.com/file/d/1RXPQioM2S8oU16WvuY-X1J9iOl7El_Jw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear Overdrive (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Top%20Gear%20Overdrive%20%28USA%29.png",
    size: "11606 KB",
    link1: "https://drive.google.com/file/d/1V9WIF53wQh19rDTb1ibYjGYn6whxgCoo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear Rally (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Top%20Gear%20Rally%20%28USA%29.png",
    size: "5392 KB",
    link1: "https://drive.google.com/file/d/107hgcWhwmo3V_oSKVY4aWJWSat4BFZMh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear Rally 2 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Top%20Gear%20Rally%202%20%28USA%29.png",
    size: "10455 KB",
    link1: "https://drive.google.com/file/d/1BxRDa6qs8AHsdAT1y4zDs3uDv_9OOvFG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toy Story 2 (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "9792 KB",
    link1: "https://drive.google.com/file/d/1KftGmMGY3GFqZFGJetmEVf2MxLQZ4uLI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Transformers - Beast Wars Transmetal (U)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "8718 KB",
    link1: "https://drive.google.com/file/d/1IossEcUvg6Su6J9YIcsloe7p4O2TsmSE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Triple Play 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Triple%20Play%202000%20%28USA%29.png",
    size: "13305 KB",
    link1: "https://drive.google.com/file/d/14RJceOOGrMu97qggSp6GCdsX-tkl5uxe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok - Dinosaur Hunter (U) (V1.2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Turok%20-%20Dinosaur%20Hunter%20%28USA%29%20%28Rev%201%29.png",
    size: "7413 KB",
    link1: "https://drive.google.com/file/d/1MX8voRWYPA2cyw3Y9D1qFtKH7D03npgg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok - Rage Wars (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Turok%20-%20Rage%20Wars%20%28USA%29%20%28Rev%201%29.png",
    size: "5569 KB",
    link1: "https://drive.google.com/file/d/1Zk_FrlK8VpVRFA9S0f4wf44xRGStdk6D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok 2 - Seeds of Evil  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Turok%202%20-%20Seeds%20of%20Evil%20%28USA%29%20%28Demo%29%20%28Kiosk%29.png",
    size: "28901 KB",
    link1: "https://drive.google.com/file/d/19ph6-iyrIowZfppdf_L9H6q9YTAtsCZf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok 2 - Seeds of Evil (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Turok%202%20-%20Seeds%20of%20Evil%20%28USA%29%20%28Demo%29%20%28Kiosk%29.png",
    size: "29039 KB",
    link1: "https://drive.google.com/file/d/1mrJ9xX2uU9o9lSdLwFIJ-CQEYp-fR6pq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok 3 - Shadow of Oblivion (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Turok%203%20-%20Shadow%20of%20Oblivion%20%28USA%29%20%28Beta%29%20%282000-06-26%29.png",
    size: "27305 KB",
    link1: "https://drive.google.com/file/d/1MGu-Zj8P7ZZzy-tZyY3GGb_gMRs4MJSc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Twisted Edge Extreme Snowboarding (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Twisted%20Edge%20-%20Extreme%20Snowboarding%20%28USA%29.png",
    size: "10133 KB",
    link1: "https://drive.google.com/file/d/144Ma2k73CAH8fjjpQ3hhKrFDsoy_iVeG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "V-Rally Edition 99 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/V-Rally%20Edition%2099%20%28USA%29.png",
    size: "7009 KB",
    link1: "https://drive.google.com/file/d/1lVI978HsJqw3dG93YB7PkipFUyINB9l8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante 8 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Vigilante%208%20%28USA%29.png",
    size: "7282 KB",
    link1: "https://drive.google.com/file/d/16HksPUoRJSdJNGwLt4aIy2TdiKu_cxwI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante 8 - 2nd Offense (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Vigilante%208%20-%202nd%20Offense%20%28USA%29.png",
    size: "10960 KB",
    link1: "https://drive.google.com/file/d/1QWA-PdV2sVhoscio7PjhobWgKd4BVBda/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Virtual Chess 64  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Virtual%20Chess%2064%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "2825 KB",
    link1: "https://drive.google.com/file/d/17-4NyiyvsDHEWg7hVCDUBrofhTshewU6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Virtual Chess 64 (U) (M3)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Virtual%20Chess%2064%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "2812 KB",
    link1: "https://drive.google.com/file/d/1R6wq1UOhCBIMawGNWHB8ZZ9v5TzTPNoo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Virtual Pool 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Virtual%20Pool%2064%20%28USA%29.png",
    size: "2424 KB",
    link1: "https://drive.google.com/file/d/1qM73jBFaH7Ai6sllFnR7inb02phDsT4B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WCW Backstage Assault (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WCW%20Backstage%20Assault%20%28USA%29.png",
    size: "26248 KB",
    link1: "https://drive.google.com/file/d/1YjJZ77jIbaJY39gx1eONgb2R8nqDii48/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WCW Mayhem (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WCW%20Mayhem%20%28USA%29.png",
    size: "12966 KB",
    link1: "https://drive.google.com/file/d/1g0B_lCGbwD5ZaecUfsV553i2h4Ns7qLS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WCW Nitro (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WCW%20Nitro%20%28USA%29.png",
    size: "7595 KB",
    link1: "https://drive.google.com/file/d/1HUYFlzpnTOePiC5K3D2qneZKgAsX5MlS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WCW vs. nWo - World Tour (U) (V1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WCW%20vs.%20nWo%20-%20World%20Tour%20%28USA%29%20%28Rev%201%29.png",
    size: "7957 KB",
    link1: "https://drive.google.com/file/d/1oi09hAXcTOC-goIcWfKtcHS2nfZtJUP1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WCW-nWo Revenge (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WCW-nWo%20Revenge%20%28USA%29.png",
    size: "11796 KB",
    link1: "https://drive.google.com/file/d/1ZDg384J0tfDPtHBuIlmmrmuhhk9sV08Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF - War Zone (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WWF%20War%20Zone%20%28USA%29.png",
    size: "11082 KB",
    link1: "https://drive.google.com/file/d/1B3YIXMo-ZYvP-J_nEnABfvRE4koFmfet/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Attitude (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WWF%20Attitude%20%28USA%29.png",
    size: "30013 KB",
    link1: "https://drive.google.com/file/d/1f8Fx0z4gWOEmFq-PHDlfknpnrgzIQlYY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF No Mercy (U) (V1.0)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WWF%20No%20Mercy%20%28USA%29%20%28Rev%201%29.png",
    size: "25314 KB",
    link1: "https://drive.google.com/file/d/1wRAwX53UnjTFaxfPsgpPz6zSKMOXL7N-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF WrestleMania 2000 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WWF%20WrestleMania%202000%20%28USA%29.png",
    size: "21844 KB",
    link1: "https://drive.google.com/file/d/1xP0QcujP8N61H-Ahpxcqhw6gGvuBvUXx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Waialae Country Club - True Golf Classics (U) (V1.0)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Waialae%20Country%20Club%20-%20True%20Golf%20Classics%20%28USA%29%20%28Rev%201%29.png",
    size: "14299 KB",
    link1: "https://drive.google.com/file/d/1NKqa4kzQXVxYTqpOqnQkwl0q0cOyiY0R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "War Gods (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/War%20Gods%20%28USA%29.png",
    size: "10548 KB",
    link1: "https://drive.google.com/file/d/1w6LfxWK7z9-naBfyWEtJ8bGv-6A-hV6t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wave Race 64 (U) (V1.1)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "6024 KB",
    link1: "https://drive.google.com/file/d/1oGo9Y4OaaKNJ543hGFwV4oiOE9v_YKp3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wayne Gretzky's 3D Hockey  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Wayne%20Gretzky%27s%203D%20Hockey%20%28USA%29%20%28Rev%201%29.png",
    size: "6942 KB",
    link1: "https://drive.google.com/file/d/1NWwrVxXz_9S10cYjhQP_VX_zmQjtMxLU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wayne Gretzky's 3D Hockey '98 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Wayne%20Gretzky%27s%203D%20Hockey%20%2798%20%28USA%29.png",
    size: "7047 KB",
    link1: "https://drive.google.com/file/d/1SmCl213JYPpA_oRp1bi1YDsEeFHFz7TR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wayne Gretzky's 3D Hockey (U) (V1.1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Wayne%20Gretzky%27s%203D%20Hockey%20%28USA%29%20%28Rev%201%29.png",
    size: "6955 KB",
    link1: "https://drive.google.com/file/d/1BBQ522aWtpYfyymI9zZDrL2dc3yWDGBg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wayne Gretzky_s 3D Hockey (U) (V1.1)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "6955 KB",
    link1: "https://drive.google.com/file/d/1ZbAu3rUDJ9wAezWhQZIPaZ41pSrOQOKU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wetrix  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Wetrix%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "5237 KB",
    link1: "https://drive.google.com/file/d/1Dq3IIHoSkNdh67E0wZUG_lz5sW61W44A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wetrix (U) (M6)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Wetrix%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "5175 KB",
    link1: "https://drive.google.com/file/d/1iXiKuZBWRaHM2Sk-RxF-jof8B5uJeNdX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wheel of Fortune (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Wheel%20of%20Fortune%20%28USA%29.png",
    size: "2178 KB",
    link1: "https://drive.google.com/file/d/12h3p5myIl3dcAD237ANqNv6sX-Km3Avl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WinBack - Covert Operations (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WinBack%20-%20Covert%20Operations%20%28USA%29.png",
    size: "10631 KB",
    link1: "https://drive.google.com/file/d/1UUdCOIemhpGnj8-1l0IIB7_DP2PNjiHa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wipeout 64 (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Wipeout%2064%20%28USA%29.png",
    size: "5911 KB",
    link1: "https://drive.google.com/file/d/1LDLPKNzebxdFQ4MspC3w7qA3IbqvORnt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup 98  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/World%20Cup%2098%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CDa%29.png",
    size: "10962 KB",
    link1: "https://drive.google.com/file/d/1Wf4-MOHI3Dc2Guei2roaE9MCwDy9xePW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup 98 (U) (M8)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/World%20Cup%2098%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CDa%29.png",
    size: "10871 KB",
    link1: "https://drive.google.com/file/d/1VlwbmnSNyZJR94HRc4jF7L7IaM-MFMER/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Driver Championship  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/World%20Driver%20Championship%20%28USA%29.png",
    size: "14270 KB",
    link1: "https://drive.google.com/file/d/1oNGo8ucXI3musXiXgJX0Ds9u4x2eKG_8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Driver Championship (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/World%20Driver%20Championship%20%28USA%29.png",
    size: "14243 KB",
    link1: "https://drive.google.com/file/d/1HcK-2tdlu64ndS3DYQ9bqFso2z8kgNXc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Worms - Armageddon (U) (M3)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Worms%20Armageddon%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "9361 KB",
    link1: "https://drive.google.com/file/d/1QOdFVGUty-IaS0RUMnNs-huS7mPOhvix/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Worms Armageddon  (ES)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Worms%20Armageddon%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "9485 KB",
    link1: "https://drive.google.com/file/d/1hWDdxaX29U6EY8ZNY6fgKKlGW5PPMSJN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xena Warrior Princess - The Talisman of Fate (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Xena%20-%20Warrior%20Princess%20-%20The%20Talisman%20of%20Fate%20%28USA%29.png",
    size: "10111 KB",
    link1: "https://drive.google.com/file/d/1WfU6mF78Mjs4Qd0jN3y2j2xdCV3mgJUO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xena Warrior Princess - The Talisman of Fate (U)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Xena%20-%20Warrior%20Princess%20-%20The%20Talisman%20of%20Fate%20%28USA%29.png",
    size: "10111 KB",
    link1: "https://drive.google.com/file/d/1g4N7TxbLYA787EmD8EbI1xBbKV8Gv-Ml/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yoshi's Story (U) (M2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Yoshi%27s%20Story%20%28USA%29%20%28En%2CJa%29.png",
    size: "9420 KB",
    link1: "https://drive.google.com/file/d/1KTHUS8B8MUGa8FRIMGfgJXiwd-tcRtw-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yoshi_s Story (U) (M2)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "9420 KB",
    link1: "https://drive.google.com/file/d/1v5fCb_dpDhzu16rMWjomOru6zf6Oqrw4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda(ES)",
    image: "https://i.postimg.cc/c444s91Q/N64-Logo.png",
    size: "26037 KB",
    link1: "https://drive.google.com/file/d/1jPbiwiBWQr7SGcY-6HVwalwMiaBbwKxx/view?usp=drivesdk",
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

