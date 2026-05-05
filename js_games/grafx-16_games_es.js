const roms = [
  {
    name: "1943 Kai (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/1943%20Kai%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1quqjCfs5I-5C7-lNup4Labeg9wEHefaJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "21 Emon - Mezase Hotel Ou!! (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/21%20Emon%20-%20Mezase%20Hotel%20Ou%21%21%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1uWuMon_lPJyyWyL94B1qSulJpJIXe9QK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "AV Poker - World Gambler (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/AV%20Poker%20-%20World%20Gambler%20%28Japan%29%20%28Unl%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/18BXxvmmBfFW6Fqd9Bu5baORRTDc6Kp74/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventure Island (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Adventure%20Island%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1z2IKtWenYj9A57tfe16Bm0yU5cexDN0e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero Blasters (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Aero%20Blasters%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/13El_2XwkX-jPZ80OMahSWbSRUb0Ep2iy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero Blasters (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Aero%20Blasters%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1S2X9BE7f1TI_id8DCCvZafjrH1S22NJI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aero Blasters (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Aero%20Blasters%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1aS4CNMN5b82qvoNvrYFi_qWph6vkRY9a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "After Burner II (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/After%20Burner%20II%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1xZO_6koeoVRBBpthtVefARNHVM9L-O1Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "After Burner II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/After%20Burner%20II%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1ZuuV93wZ5B4AIr4Eer-9wBkLvjVdk7k0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Air Zonk (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Air%20Zonk%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1AtmVaUKKooewpHpJNAzF7jC086T-QHO8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Crush (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Alien%20Crush%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1tHvGl8EDIijvQGSjdCNJ-3frCRgjV5uB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Crush (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Alien%20Crush%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/13W_O4DPTJi6RDq7FLRdQ3NNTYb9glvQh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Crush (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Alien%20Crush%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1-XeVLc-chh-7XdAclRBbilkNXOmpIOa7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Andre' Panza Kick Boxing (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Andre%20Panza%20Kick%20Boxing%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/13YIfC19JUs-Cd7McAkba98CBu15CpBuY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ankoku Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ankoku%20Densetsu%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1iDW3NHvLvSOwdQ4_syf04t2Xw9Zj_NPG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aoi Blink (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Aoi%20Blink%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1sDD43d9DnuoXAPjjUFqbC1lSAhZM9rQy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Appare Gateball (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Appare%21%20Gateball%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1qGLVk7emHVc-CuhrTjoqNyTPYvlQL2gk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Armed F (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Armed%20F%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Vb8R7gQim7XqsGb8p2gvfXzWWk9HD-I8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Armed F (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Armed%20F%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1UkPwKmuJn4VtqrAuG8XfNI9_QIw4RzQX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Artist Tool (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Artist%20Tool%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1b2X2Nn9TH1OIbDRFPY03IDQxTJqtePv6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Atomic Robo-Kid Special (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Atomic%20Robo-Kid%20Special%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1mJSKXA1b9uOod2pC-kQdE6c4qisog6jQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Atomic Robo-Kid Special (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Atomic%20Robo-Kid%20Special%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1KzzgCtIY14ooi8AoH3QW587aQTsRikoD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ballistix (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ballistix%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1B1EJ61Pjs6HTvdlxb6CdJWRkV3oyto2z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ballistix (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ballistix%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/13McMoN9aHsX0lG4iS7HkXOMz_7gjo-rC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ballistix (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ballistix%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1J2y-nDgZM8Mbw3azskAvzV93zptD08NI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bari Bari Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bari%20Bari%20Densetsu%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1viNEyqBrjTDo2toTHb7YcNBV2SqEpHrJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barunba (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Barunba%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1VXRe_hnvGUDaSahYhplRj8RV0l0OEsdx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Batman%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1DSA89oJl-e_jGhNwUQ6cwHQzIXiptoUV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Lode Runner (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Battle%20Lode%20Runner%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1YJTtYQ0XBhcq1v1lY8LuN_fCzqppWv7U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Royale (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Battle%20Royale%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1140QTnS4vhBManE_YnI2QCR1jzE_kUZO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Royale (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Battle%20Royale%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1V4KDYOE8vHpavp64-7xK1cbKSEwLAGQs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Be Ball (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Be%20Ball%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1sIB3LUM4aeO2eH6ruGmN41c6b_7PMnsL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Benkei Gaiden (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Benkei%20Gaiden%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1STnDeQDUuT1UePMwwj1hQs-oUxrLAMlg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Benkei Gaiden (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Benkei%20Gaiden%20%28Japan%29%20%28Virtual%20Console%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1dT09eklM4LVlEJQnbB_aTYNvHkKdLyuc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bikkuriman World (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bikkuriman%20World%20%28Japan%29%20%28Alt%201%29.png",
    size: "257 KB",
    link1: "https://drive.google.com/file/d/19WcnEXSrrLpOzAE_LxPry-iyl289bjDD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bikkuriman World (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bikkuriman%20World%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ca7IDN2rxzuLxp1yWzfNhh77ZeefmJct/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bikkuriman World (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bikkuriman%20World%20%28Japan%29%20%28Alt%201%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/18s-u5ubhjZpzFZQSJXhywoW1fMcAR-Ol/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blazing Lazers (ESP-Wave)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Blazing%20Lazers%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1kKnh7CsqCThxm4tzCN7FzH1t13ax0Vxb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blazing Lazers (Gunhed - Hudson Gunhed Taikai) (ESP-Japan-RMGlitch)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Blazing%20Lazers%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1WF1OGcTdioQQPBQXUYq3XC8iCcDZmg6U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blazing Lazers (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Blazing%20Lazers%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1SH7YvyX7_QUZqLZKorgnS__av8XHZfWT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blodia (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Blodia%20%28Japan%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1MJUIB1nV85N0wA-pRlr5aKZEE1C_kfIK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bloody Wolf (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bloody%20Wolf%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1wvU8RkE9aXjDeaAy9DYVmIpOXBYwiLdE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bloody Wolf (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bloody%20Wolf%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1UId-WoDOhUGiSyrq-mMwbj2kCI6Z68Tg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bodycon Quest II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bodycon%20Quest%20II%20%28Japan%29%20%28Unl%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1g1PLcHRHwchvyWQq4pYw3kZSvhavIvIe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman '93 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bomberman%20%2793%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1GMlznlOCUiuG5h9EoAWaJMwikAJvcx5l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman '93 (Japan) (Special Version)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bomberman%20%2793%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1eNCB52h_GANJgLjY-ozLLWy_Az2rEThB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman '93 (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bomberman%20%2793%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1HTGWUPOBR2sMdw1hILJxkYwzcPNcVPoW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman '94 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bomberman%20%2794%20%28Japan%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/15wPy-Me3D5syvgeRPirhDUSMtdofxOtB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bomberman%20%28USA%29%20%28Bomberman%20Collection%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1R5f-4ACNgDPiS87IwCtCerqR5YOXkkaV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bomberman%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Z4qxyfvd6godmWL8D5p0PozobmF67sz3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bomberman%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1UfucctejOwcoqtIU1Tcfq9Lt_jPOAQlM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman - Users Battle (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bomberman%20-%20Users%20Battle%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1soyC6OU2fzDXOBoPoFZys6oFNhNgVY8s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonk III - Bonk's Big Adventure (USA)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1w3H-5JdYBvF5vH4i_9gQDh34HGIF1_tY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonk's Adventure (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bonk%27s%20Adventure%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1EU0Qp5y3wTX20tS3sKg3K15kkikUfFIc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonk's Revenge (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bonk%27s%20Revenge%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1QC6sQLtngwB39APMKMh0Vdn9auUCSIIU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bouken Danshaku Don - The Lost Sunheart (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bouken%20Danshaku%20Don%20-%20The%20Lost%20Sunheart%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1_8E8gI9cl3yrgs5l8JMfdSt05QQYgC9X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Boxyboy (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Boxyboy%20%28USA%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/19gCK9cQal4SikOdd813PPe2X-hSgrX02/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Boxyboy (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Boxyboy%20%28USA%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1QZlZpv0zZCT6UVXQYvtqBEA24pswwqjv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bravoman (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bravoman%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1r4sOXAxjz_lmmJrWSGhyXU2EbIj76NRC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bravoman (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bravoman%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1qUIxXv6S38XjdgVIv40j9jguy9rbXHRR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Break In (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Break%20In%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1O6scGwMaPJuIQDaymKJLRfXK96fWSlJ1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubblegum Crash! - Knight Sabers 2034 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Bubblegum%20Crash%21%20-%20Knight%20Sabers%202034%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/19k_SJsfNc_rW4l2cgHM1212dlSJ3vWM5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bull Fight - Ring no Haja (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1gh3jblo7CEs2eemI_qweKJe9eLmE1_KO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Burning Angels (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Burning%20Angels%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1pgbfIzFNhOFbRZuvScNrS-9FLzHM-s5x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Busou Keiji - Cyber Cross (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Busou%20Keiji%20-%20Cyber%20Cross%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1yPtWoR0S4lOWI7ETePSsJmegUwJiA-Vf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cadash (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Cadash%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/16WMkqb8vfdk96XeXTJJKpKPsVJn845ds/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cadash (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Cadash%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1ZoeWE8-bOWgTpyfEJVmCW0zVOciy_xoH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Champion Wrestler (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Champion%20Wrestler%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1GG6dWbeO8agVBvpSCLQhjo-b0R-nClAu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Champions Forever Boxing (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Champions%20Forever%20Boxing%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1rXD1jhVY4DnfObaN3F7ZvPbhnkxmbsoQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chew Man Fu (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Chew-Man-Fu%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Ik-VguJ8LarHZt6SiOWlQWH7Mzq6MPjU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chibi Maruko-chan - Quiz de Piihyara (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Chibi%20Maruko-chan%20-%20Quiz%20de%20Piihyara%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1BjbHxGovuBJpC33qzfpcGWoOdpWDdrGw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chikudenya Toubei - Kubikiri Yakata Yori (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Chikudenya%20Toubei%20-%20Kubikiri%20Yakata%20Yori%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1jKCiCM4WlEAYv6dVoYEC-QrBSwyZnVm1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chikudenya Toubei - Kubikiri Yakata Yori (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Chikudenya%20Toubei%20-%20Kubikiri%20Yakata%20Yori%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1ENT4v08jBNhHKrROZt5thRwuIW19c-M-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "China Warrior (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/China%20Warrior%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1P0TknE5QjOzXnRsDVYCymOWmrfxKoWxj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chouzetsu Rinjin - Bravoman (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1GggsVIY2SVqNIPvZ9BcGm5y82Ge5kw-s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Circus Lido (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Circus%20Lido%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1WmbpqfGuy7tDFY-AB_D5jnoiZQjtaKlf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Circus Lido (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Circus%20Lido%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1rBup0-Z7cKmaRESoFuOWQIbCXj5VEVyl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "City Hunter (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/City%20Hunter%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1UXTJb83XJrvRa3GmAUKh1BKLd0xYC2OR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "City Hunter (SPA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/City%20Hunter%20%28Japan%29.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/1yp8Wsu2lc_uZtjV86gfI1I3BgGmcJed2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Columns%20%28Japan%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1htxoTp1itdKT3Ob1iwwI27tbdKEdgrdp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Coryoon - Child of Dragon (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Coryoon%20-%20Child%20of%20Dragon%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1z6E_scOms3AH-VsQnwCVq3ftw0KbZ4XP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Coryoon - Child of Dragon (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Coryoon%20-%20Child%20of%20Dragon%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1fQqMyltIIneHd2IJuzKx3Z4BY2RlSRjA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cratermaze (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Cratermaze%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ld0IRKu6_iia5WnxcstZB4RsEJEAUcbQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cross Wiber - Cyber Combat Police (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Cross%20Wiber%20-%20Cyber%20Combat%20Police%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1cQLerE37QZ5svqV0Xhjy74siDcBfVmt3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cross Wiber - Cyber Combat Police (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Cross%20Wiber%20-%20Cyber%20Combat%20Police%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1FBbyYs9ZnCgmU6H2tqwMwDTz1VUeyd_5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyber Core (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Cyber%20Core%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1mJfxkNqkzcp1eF2On54q533CKVCVmvd3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyber Core (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Cyber%20Core%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1qn_80iBbGS3HfqJCgLiZnY9GzthKLUUo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyber Core (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Cyber%20Core%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1zulX8PZJcQx66v2OM8FtcdkQ8yAf06Kt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyber Dodge (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Cyber%20Dodge%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1TxQ6c3wIU5YyQYBWJwRFhCIYAudwOvrA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyber Knight (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Cyber%20Knight%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1E4Fcb7W2zEJauQp51Zh-Y9btRyhUZTcv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daichi-kun Crisis - Do Natural (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Daichi-kun%20Crisis%20-%20Do%20Natural%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1XtJ_K1PLoOE1WGKIGuKaCgz9HTuwCdYD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daisenpuu (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Daisenpuu%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1zti2CBz_IPg6RhnUJEcIToqS3HvoYRMU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daisenpuu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Daisenpuu%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1iAIHwGFefFqurVdIDmzh1aUk-_7abamb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Darius Alpha (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Darius%20Alpha%20%28World%29%20%28SG%20Enhanced%29%20%28Darius%20Cozmic%20Collection%29.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/11pNsPkzkpRqQGRX8rXsn7RCPcbMdZ8MR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Darius Alpha (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Darius%20Alpha%20%28World%29%20%28SG%20Enhanced%29%20%28Darius%20Cozmic%20Collection%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1HPG9qn5pQ8vqYvhYIJdJGhqZ5JEnnH92/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Darius Plus (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Darius%20Plus%20%28Japan%29%20%28SG%20Enhanced%29.png",
    size: "769 KB",
    link1: "https://drive.google.com/file/d/1AUc5adRDTqcZULY5C_oeIJwy0OZ_zhL-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Darius Plus (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Darius%20Plus%20%28Japan%29%20%28SG%20Enhanced%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1XQpuhSeAcfcrpm0b6y8vfZvWWgJGbJYN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Darkwing Duck (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Darkwing%20Duck%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/11eOdQiLqLbELb9rO8xw0khRKjLg0Gc2D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Davis Cup Tennis (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Davis%20Cup%20Tennis%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1qeBL3LI0SnGcq_HGiztCkAqQ5jicWKZ_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dead Moon (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dead%20Moon%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1YYCpgLhRrfbW2GZsF9hab0Cs9DPaDbVr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dead Moon (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dead%20Moon%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1yUYGRbaL16DUTVLN4IPhwieLqxvZW6Nx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dead Moon - Getsu Sekai no Akumu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dead%20Moon%20-%20Getsu%20Sekai%20no%20Akumu%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1nLMNjbDAVhRxmjrrjUqkra3pwWNu1Pjp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Blue (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Deep%20Blue%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Ckac0zj4zPNwByecNILO7e8Vq_fx8J9b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Blue - Kaitei Shinwa (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Deep%20Blue%20-%20Kaitei%20Shinwa%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1SEquI59A82uRAjfpwoxPnqkNOcP2ClkK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Detana!! TwinBee (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Detana%21%21%20TwinBee%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1uR6gsT51X5BqdgcSSX9dC4VFuK9elm5_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Devil Crash - Naxat Pinball (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Devil%20Crash%20-%20Naxat%20Pinball%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1d0RoG2r8yvI9iIKCGIX3VXwbx7Wjhgnu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Devil's Crush (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Devil%27s%20Crush%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1AEhoKEt1RLw0nhNj6u11lidvR_8CIr2B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Devil's Crush (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Devil%27s%20Crush%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1txA2ZQF9SWkJtCwJHEMFoviiThcSZhls/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Die Hard (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Die%20Hard%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1-MpRsTAb1fuSGsfrSD3f3-ybsTEoE-SQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Die Hard (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Die%20Hard%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1XVMivqjoXzRUfHDXHysoN0xkfzctEAm7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digital Champ (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Digital%20Champ%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/10CKDuy-0QpEkKAg-mQuhqMtxNdsuxSdi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinoforce (J)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1DbRviLZHg2hG_rM8KfKVSeUWnsETooXb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Don Doko Don! (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Don%20Doko%20Don%21%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1D0VQ4aUHmwp0FHw6jnVFTyqflsDm6t7R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Meikyuu Daisakusen (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Doraemon%20-%20Meikyuu%20Daisakusen%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1pnb4eyCzQaRaEJ66mLAElyZnxHwQ-V9q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Nobita no Dorabian Night (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Doraemon%20-%20Nobita%20no%20Dorabian%20Night%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1T5LY0hscnbgFtRQt1EvGkw44SrMw-5ei/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dungeons - W (ESP)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1nnjrQbgh-NA5FXmggLMBCXZ79EAxtmd6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dungeons - W (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1k0xShKBRE_Lb5ITz9gIB8nD79bsyBY9h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dungeons - W (USA)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1uJEMDuPqph0vt1xt_w6l0nPbORarMHPd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Download (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Download%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1TAFSRju2eotTLvT1wFreVF1mdRedFi7K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Download (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Download%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1OOSlgxuFudOrHdlW0OgFo22T3_0lrHUp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Egg! (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dragon%20Egg%21%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1peMOfRl-gZNW7SNv05OWhGB6tK5JGUCz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Saber - After Story of Dragon Spirit (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dragon%20Saber%20-%20After%20Story%20of%20Dragon%20Spirit%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1_qSoYtxI74F1HTYTC3W3c3b8zzAm8rpb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Saber - After Story of Dragon Spirit (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dragon%20Saber%20-%20After%20Story%20of%20Dragon%20Spirit%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1Bk12thlmp4M5xrKpBAGrugjny1kJmdod/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Saber - After Story of Dragon Spirit (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dragon%20Saber%20-%20After%20Story%20of%20Dragon%20Spirit%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1YP9SVc62focJ0iByx8bMqjGV4GULcH4y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Spirit (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dragon%20Spirit%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1hjtXOZWCf8-NgH2vEsas8sm0yv_N1xdh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Spirit (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dragon%20Spirit%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1CrKY0cjSkcHxHOoIrI5j6imUcEz4DSRQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Spirit (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dragon%20Spirit%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1J6MAtmP94cgHlXAYPnDS9_sEHgMY4VWp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon's Curse (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dragon%27s%20Curse%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Kz8C0S5Uj3WRRRmQ0vE9VXcSAb4NKep4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon's Curse (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dragon%27s%20Curse%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1HAfyuXWek9ka1PDqdIEMq5JKkFjYwRnb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Drop Off (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Drop%20Off%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/12UXZfmGjUxspXXhzsMnJvtPZBxRH_9rZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Drop Rock Hora Hora (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Drop%20Rock%20Hora%20Hora%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/17hoQ3p4Hb47Wc0vqnyNUZTicgvEahP7U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Drop Rock Hora Hora (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Drop%20Rock%20Hora%20Hora%20%28Japan%29%20%28Alt%201%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1BuGI4aGGCxScRfvoJzNR3_600xbh7i8P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Drop.Off (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Drop%20Off%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1jVs3aKzbeTTOA9bvll3gtSBCEGlVCzEh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Druaga no Tou (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Druaga%20no%20Tou%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1N6y_6zPK0yiKB8Xnze2fIpKfuAoB_WBb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dungeon Explorer (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dungeon%20Explorer%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/17PPmQgrVZtRPk7-feSuPn_AEKJgEIskY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dungeon Explorer (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dungeon%20Explorer%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1h6YAPfCWhOlWreZyyzTaILjqTm3WFdIZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dungeon Explorer (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Dungeon%20Explorer%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1Z2gmcT3Q3IyFflhcblyhbxOdryOIZITs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Energy (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Energy%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1MF5F3pOJ8AyIKXKWql5jc_wDEqsBYs4s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Eternal City - Toshi Tensou Keikaku (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Eternal%20City%20-%20Toshi%20Tensou%20Keikaku%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1LGAm2tw_H10QG7O3xIA4txcG4mksf_gK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-1 Dream (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/F-1%20Dream%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1T9uNnnr7X5LS3Up_8fzQo0DapatPixxK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-1 Pilot - You're King of Kings (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/F-1%20Pilot%20-%20You%27re%20King%20of%20Kings%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1DRFim5j-n-eM41HL-fdCpQ_vVVj8T-kv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Circus '91 - World Championship (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/F1%20Circus%20%2791%20-%20World%20Championship%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1U345AAGfIpTts4KouVoTy48T6exLS0Lp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Circus '92 - The Speed of Sound (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/F1%20Circus%20%2792%20-%20The%20Speed%20of%20Sound%20%28Japan%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1uHsYjihwxOBDzsr26fZVV3q1qmlziY5c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Circus (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/F1%20Circus%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/15N_Q-e2I4jhDI_jTbao3PDW0LHM5-5Ab/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Circus (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/F1%20Circus%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/16XsXhQG68Ph9uEDi-0Q9kMm0-EGauFf5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Triple Battle (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/F1%20Triple%20Battle%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1ceC6w46zKsqI4AFG919tqDNCdvAc3Sz2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Falcon (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Falcon%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1NCPa9i4b5cd9KqLJ6Yso_BZZvEsgF8nh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Fantasy%20Zone%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1wUZCLJofCJOg5bMGOBJB2n76132tIeow/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Fantasy%20Zone%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1oSxXIKQaCOko16MUxwH5Ycjea7LxgwaD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fighting Run (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Fighting%20Run%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1oFMmFMs58j8mLhfKRYEblDPt6xOQZcod/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Blaster (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Final%20Blaster%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1TrafniA78Va433fh4HkJczlZ1sekLYD0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Lap Twin (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Final%20Lap%20Twin%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1vH4kMgLu8VVjFdSl5kGdoNW6cY0JkB8A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Lap Twin (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Final%20Lap%20Twin%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1sofM_a5090_-cNG_KPSnVXlhKkCNoxc2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Match Tennis (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Final%20Match%20Tennis%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1vsW7sp0lVgnmIf5lNZW1OSh93Y4kk2ry/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Soldier (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Final%20Soldier%20%28World%29%20%28Wii%20U%20Virtual%20Console%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1hedkcwWn9s1H6sQyzHr-thRZ2n4gLYjb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Soldier (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Final%20Soldier%20%28World%29%20%28Wii%20U%20Virtual%20Console%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1uwtap8J-KPu9k0cc-NixK9OYXXbX6k9t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Soldier (Japan) (Special Version)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Final%20Soldier%20%28World%29%20%28Wii%20U%20Virtual%20Console%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1aTKV2wVbmKGGhS3Uf40UFYFPsRwUGRmT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire Pro Wrestling - Combination Tag (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Fire%20Pro%20Wrestling%20-%20Combination%20Tag%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1uRJEAD4w6cmQ2HP7yyuzx7aNQjrfzamE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire Pro Wrestling 2 - 2nd Bout (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Fire%20Pro%20Wrestling%202%20-%202nd%20Bout%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1yoXIHcU2-05vUGl7Mk64PINCN6HkuawZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire Pro Wrestling 3 - Legend Bout (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Fire%20Pro%20Wrestling%203%20-%20Legend%20Bout%20%28Japan%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1RoPceJp-mpkaGkYBdI-non_Ai2ShE189/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Formation Soccer - Human Cup '90 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Formation%20Soccer%20-%20Human%20Cup%20%2790%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1yNB5JlNfCZRSiZPaAxNu_n7-iCM7j49t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Formation Soccer - On J. League (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Formation%20Soccer%20-%20On%20J%20League%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1A-6If15RWtKVesagh77pCZwzJCVxtZmB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fushigi no Yume no Alice (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Fushigi%20no%20Yume%20no%20Alice%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1q1TZ4v8tXpaYMLhqTjHUGNXbgAw-EpE3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gai Flame (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gai%20Flame%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1ohjuL-mgc5aYiYZjjOsTllz5mJxPMhfm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gaia no Monshou (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gaia%20no%20Monshou%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1MK623Y643Y8g3pP4O2FAIRfsGsH1gBWJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaga '88 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Galaga%20%2788%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1_Ra9o9w_VLBuRaGkhh5LEHyKpi0ZiR3a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaga '90 (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Galaga%20%2790%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1DFTyHvQnhSgdEGl5grSFwLCNuNXyiRb8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaga '90 (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Galaga%20%2790%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1PR544CAm6nj7esv4nU8hMsfBiS0ib6cX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare! Golf Boys (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ganbare%21%20Golf%20Boys%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1iUjR0ytx92yKBDN5xKxxiJyft_YWtGoc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gekisha Boy (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gekisha%20Boy%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1UeEnEZkEIfSKu-iZGboBbhnaS0a4y3ol/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gekisha Boy (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gekisha%20Boy%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1LBA-iQWDxntOtP77ubFh8bJsn-SJnK2P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Genji Tsuushin Agedama (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Genji%20Tsuushin%20Agedama%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1I7TYsjjcuw_W4RHX3t4UXiUgYi-Lg4IW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Genpei Toumaden (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Genpei%20Toumaden%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/14M4Ye5fvGz7YGm96Q5WBDBqKRYGqyVAA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Genpei Toumaden Ni no Maki (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/16DiIXrDIG1d-EapNAdF1dgKrNGDIE5a3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghost Manor (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ghost%20Manor%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1TB3XFj_e2az8QBxWwgLsSbiZ31xcoGBg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghost Manor (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ghost%20Manor%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1wAxqMs6Axf9eFhpyjWC1J96rNQxxrcZp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gokuraku! Chuuka Taisen (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gokuraku%21%20Chuuka%20Taisen%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1XQaJq5s4X7bFGrDxVxNir-WHRH7EyfaX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gomola Speed (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gomola%20Speed%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1UexBrXPoJUXyFFpONtkc8CFhqALj9kFb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gomola Speed (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gomola%20Speed%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1DxbmchGrHWA-RuGXeI0rO2wa77osbGKk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gradius (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gradius%20%28World%29%20%28Wii%20U%20Virtual%20Console%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1nwjF0IpUW5GreTf90248fzPtsWnUL0Me/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gradius (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gradius%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ARX5Wh08ZspgetUjWDSvtBwwyebtmN8n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gunboat (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gunboat%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1-CulvTdQMGhu17UlbR9hYXvM7A1GUGU8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gunhed (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Gunhed%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1sccZew0Il8LvNt0rstMxF4fSR9VC-8x6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gunhed - Hudson Gunhed Taikai (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1k2JNTjZAD6UGjppdNNxxNSQjjr06fYUH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hana Taaka Daka! (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Hana%20Taaka%20Daka%21%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1-gpMgbUGZQe3TLkxZxrelHNNEkExS6pd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hanii in the Sky (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Hanii%20in%20the%20Sky%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1MktBTTLJZOoBsI2TBcK8d0AzWJoaijQt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hanii on the Road (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Hanii%20on%20the%20Road%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/131_kvhe8y99Gtwl4FuwH7-_3-Ts9RwsU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hatris (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Hatris%20%28Japan%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1P_mknkS1MFVoNe8mBKjTa3E7tn4ZgMNH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heavy Unit (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Heavy%20Unit%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1IuSHgPlScSIVSNYPcl7pqw2cqq5fm9AA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heavy Unit (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Heavy%20Unit%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1bXivBDeyGKOF1Ql0HNM0a8jaJ9DOgXWD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hisou Kihei - Xserd (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Hisou%20Kihei%20-%20Xserd%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/16P2n7gZbKY8SaGA6vT_L5lV0-twqsRiR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hit the Ice - VHL - The Official Video Hockey League (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Hit%20the%20Ice%20-%20VHL%20-%20The%20Official%20Video%20Hockey%20League%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1DUFjZzEDKaWeZ_wGijiNSTVy4tlrMvi8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hit the Ice - VHL - The Official Video Hockey League (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Hit%20the%20Ice%20-%20VHL%20-%20The%20Official%20Video%20Hockey%20League%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1G1hbOm-EHfz3QyHTldTxab0lsvaTlyj7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Honoo no Toukyuuji - Dodge Danpei (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Honoo%20no%20Toukyuuji%20-%20Dodge%20Danpei%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/10M9sDG7lBGmjZNX4wmZCP4FykmMXjgzw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Idol Hanafuda Fan Club (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Idol%20Hanafuda%20Fan%20Club%20%28Japan%29%20%28Unl%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/13wN5FB5nrYL_U8I1sK7x-t3-NGE4aN0Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Image Fight (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Image%20Fight%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1KSk5i1Ja4Oi9jgW7NYOSG3wD1aeh7VpX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Image Fight (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Image%20Fight%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1pI71IVln-_ijemYpTJN6GeAPjQikLf1-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Impossamole (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Impossamole%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1vUjrUBPYCypEyq4Fqf41aMlVDOH_B3eJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Impossamole (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Impossamole%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1SGF5WvM_nz40XlAIMUBQx84TFiWXc12y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "J. League Greatest Eleven (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/J.League%20Greatest%20Eleven%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1_3KynYTJT7jwLqcjCbg5FCfGlgqSBlMY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "J.J. & Jeff (USA)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/114ejX79KSrUw0KEEaeLbhiMNgIYXjp6k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jack Nicklaus' Greatest 18 Holes of Major Championship Golf (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/14qo_t3sqUWa3whw7N2urV92K3xnGhkox/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jack Nicklaus' Turbo Golf (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Jack%20Nicklaus%27%20Turbo%20Golf%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Rm4_X4wVxjGLtuEOJId2B7G4hvH7Ym4-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jackie Chan (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Jackie%20Chan%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1_6twXWo3pKu2IV2zeW4a9Y5ZA-B-qAcO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jackie Chan's Action Kung Fu (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Jackie%20Chan%27s%20Action%20Kung%20Fu%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1VW7ofUILvD0UOPdLoI5NenJ_w2brsaSz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jackie Chan's Action Kung Fu (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Jackie%20Chan%27s%20Action%20Kung%20Fu%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1BQElqKDuD80z3GrnKPBFP0m_yajo_JiL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaseiken Necromancer (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Jaseiken%20Necromancer%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ygGsmLV8SNvqLo5oa6N0lfOgAuFtHEos/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jigoku Meguri (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Jigoku%20Meguri%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1skxqywYE0jhg1ABInHkX5dhyIUXRZNT_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jinmu Denshou (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Jinmu%20Denshou%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/13zL_38Deuc3AVjBATv2NEZPjq8c0oNGm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jinmu Denshou (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Jinmu%20Denshou%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1Xa-mzLhaQPvSxp4pEsyiM9sa2bjU5yv9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Juuouki (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Juuouki%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1c-jf1C9GSXdWfPXL9TwqHOvCzhaisbQg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Juuouki (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Juuouki%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1mYh72DKty-MpkLEbVedjBCY3d-6Q2gCE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jyuohki  (ESP-Altered Beast)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "513 KB",
    link1: "https://drive.google.com/file/d/1bxZ47qe71k6fc_APYOUj99z_n7f87cm0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kaizou Choujin Shubibinman (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Kaizou%20Choujin%20Shubibinman%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1f-Tk_MCOJGFyPHfw5yqEQWRQgIJn15-_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kaizou Choujin Shubibinman 2 - Aratanaru Teki (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Kaizou%20Choujin%20Shubibinman%202%20-%20Aratanaru%20Teki%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1nb7QZR94Aq8wNl5ZNwyIU8BYpOS2urpE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kato-chan & Ken-chan (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1uIHCI6ssfV7jEm_dPNj0Qw_wbSLxmb1I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kattobi! Takuhai-kun (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Kattobi%21%20Takuhai-kun%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1M1vslkRZPCIE6kTwSo5Iw3N5_FGZNvoM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keith Courage in Alpha Zones (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Keith%20Courage%20in%20Alpha%20Zones%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ZvzNIrKd_383LtfsUVi377QPXkPhPgga/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keith Courage in Alpha Zones (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Keith%20Courage%20in%20Alpha%20Zones%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1o1e83SbPpBxnrUpk-M_PTTjGpJnUe9eA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "KickBall (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/KickBall%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1k0deK-3PPVMWEOtEX2SdKZnT-lRAM2-l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kikikai-kai (ESP)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1VbM9uyoMJpBEhmTOc2uVBJNF1WB-QFJq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kikikai-kai (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1R9kVV0YE2EbZYBxCJ0-T1orCUMuqeuG9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King of Casino (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/King%20of%20Casino%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1lOmPCRjlhqj0jI2DvgeAM6uykgVPBEib/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King of Casino (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/King%20of%20Casino%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/15A5Zn6ieM6grXJQQC8Lv2dctP6ucmhGa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Klax%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/10T3VbqYRJFG98xr7Y1M0GL-8cMbaOidA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Klax%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Dc2xrJT_epDGQizhhe5tJVYBPax9Qf-8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knight Rider Special (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Knight%20Rider%20Special%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1G7LMvymbFNdV2OAPsj4zHaJcjJY8RckP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kore ga Pro Yakyuu '89 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Kore%20ga%20Pro%20Yakyuu%20%2789%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1UXHNYIRDIgJ9oltY0I_t-57D0d8Nk3ot/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kore ga Pro Yakyuu '90 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Kore%20ga%20Pro%20Yakyuu%20%2790%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1SrvNlJyN61LqdUb7jmZPfjMix5WfTEp7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kung Fu, The (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Kung%20Fu%2C%20The%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1PeFS5A5au7pXCcSfU_gGkND1UTXvjrlr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kyuukyoku Mahjong - Idol Graphics (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Kyuukyoku%20Mahjong%20-%20Idol%20Graphics%20%28Japan%29%20%28Unl%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1fnSPh0EKsjSPorlA1a_9u5e3V2MrECDs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kyuukyoku Mahjong II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Kyuukyoku%20Mahjong%20II%20%28Japan%29%20%28Unl%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1N7IyKrK6d8AOnzt7qk5aYDFyaPsYxPKV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kyuukyoku Tiger (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Kyuukyoku%20Tiger%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1AiYwiZ7UrDN76pkRr3w6FVMl3DC9wquE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kyuukyoku Tiger (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Kyuukyoku%20Tiger%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1zKe1gmDHtSycSLJg6GVm_UmOLkMIIAVF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lady Sword (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Lady%20Sword%20%28Japan%29%20%28Alt%201%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1Kmr-5sZ5wzPgyKKXD6jzEsmL9ob_0qJ_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lady Sword (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Lady%20Sword%20%28Japan%29%20%28Alt%201%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1ocQQqtuWbddHvGrG4ycxk7HPYIIzs1UX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Hero Tonma (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Legend%20of%20Hero%20Tonma%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1Y_hrQTuy8Yk38_vG7B2ZhsNAGDrkp_9M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Hero Tonma (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Legend%20of%20Hero%20Tonma%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1mxUzI5EECxjh75doACKkO1kJd6P-Aoxo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Hero Tonma (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Legend%20of%20Hero%20Tonma%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1dwfenFpj7fpvDbSo0dl_f4L23Bf1b1ZW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legendary Axe II, The (USA)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1i9isj3FhPl5TnnkVw4mEKkCLt7ADliSY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legendary Axe, The (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Legendary%20Axe%2C%20The%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/18dt1-6xk2biFFuSvX7t8v1wfBA57v6QH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lode Runner - Lost Labyrinth (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Lode%20Runner%20-%20Lost%20Labyrinth%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1q9rrlEfYgiQ1zc_YBL-y27wAYFNthdrG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maerchen Maze (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Maerchen%20Maze%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/124VcbnDgMVO8yHOOo71ico6soC7gJs4E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Chase (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Magical%20Chase%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1GGAyo7-W_VwtagMDLtAu3qUoXRE26Mqr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Chase (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Magical%20Chase%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/15QXPKsbmjcM-ldJJ5t_QdRX1MUgcgPWv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Chase (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Magical%20Chase%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/16pggVhek0WzFL01Np-ERij0tnda_Ieou/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Gakuen - Touma Soushirou Toujou (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Mahjong%20Gakuen%20-%20Touma%20Soushirou%20Toujou%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1Z4TKVqAtTG7vMOvR7cIdNaKzYwJwhIag/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Gakuen Mild - Touma Soushirou Toujou (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Mahjong%20Gakuen%20Mild%20-%20Touma%20Soushirou%20Toujou%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1tZ5w6Lmv9ZQi-eQsPjZOHjBRmT3caa9p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Gakuen Mild - Touma Soushirou Toujou (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Mahjong%20Gakuen%20Mild%20-%20Touma%20Soushirou%20Toujou%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1FYtiDm-KHDlKZwBUoh7fOSO1J7jRs4-E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Gokuu Special (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Mahjong%20Gokuu%20Special%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1d8LmyF6hCJpdOwMuBP-TEKYrMic0E4OA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Haouden - Kaiser's Quest (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Mahjong%20Haouden%20-%20Kaiser%27s%20Quest%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1OfPaVyEK2AEUlqDrL0YJrx3PwxDmleEh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Shikaku Retsuden - Mahjong Wars (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Mahjong%20Shikaku%20Retsuden%20-%20Mahjong%20Wars%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1m43AjDKJMlLwbcy04z9Ku17rxcUxneNJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maison Ikkoku (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Maison%20Ikkoku%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1YYSlbF1IIdXSZe63rTSIwYL-b0cyrnC9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Makai Hakkenden Shada (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Makai%20Hakkenden%20Shada%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Y0t4yl_r-_vhmynBJ2yxTWs2yB9lgwzz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Makai Prince Dorabocchan (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Makai%20Prince%20Dorabocchan%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1aVBFjCi5Bz9m1bJOMHz9ZzL6Wz-ddYGk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Makyou Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Makyou%20Densetsu%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1v5lc86q8BFjnTk2EsH5QPbb_MvMAmhPq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maniac Pro Wres - Asu e no Tatakai (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Maniac%20Pro%20Wres%20-%20Asu%20e%20no%20Tatakai%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1drGgtWMAgMqNDRuOC0EK8rSfZDcEX7r6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mashin Eiyuu Den Wataru (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1CmRtZMXJ_HN4_fyDoqjS-Bgw8RRwaxxX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mesopotamia (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Mesopotamia%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/105g-zmVPU-x3uqQ7Ci78JzBqH_aRC-LF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Stoker (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Metal%20Stoker%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1avovGvWHFnYQpvyMnLWkS7GbshZ1mbHr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Military Madness (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Military%20Madness%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1K5hXm7bh0EtvKkXoAX8tmMczhaoQuOQv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mizubaku Adventure (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/11iEW1c0jklEW9bbCoFi8DZpvF1zkUfGn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Momotarou Densetsu Gaiden - Dai-1-shuu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Momotarou%20Densetsu%20Gaiden%20-%20Dai-1-shuu%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1YH9lVr6enJeKX30DbmoBEXpHzHNauJSn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Momotarou Densetsu II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Momotarou%20Densetsu%20II%20%28Japan%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1lUFKqyLraqmWr-FssSDqhljAWz0SHdku/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Momotarou Densetsu Turbo (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Momotarou%20Densetsu%20Turbo%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1KdOSKFiSpGB2fHC1o4dJSlqri3ouw6Ws/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Momotarou Katsugeki (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Momotarou%20Katsugeki%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1acSL-eIadroSXGO7vO-VqlK82xKyeO-E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monster Pro Wres (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Monster%20Pro%20Wres%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1PLXYj-LkuqbBPTL0Tf2cADD2Yqy2c3aJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Morita Shougi PC (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Morita%20Shougi%20PC%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1trCdahRWxStedSKT5Xno5dncGZ0FxgtX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moto Roader (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Moto%20Roader%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1AIoUqjLggmONIJl0ivZZE3FyEn688ciA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moto Roader (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Moto%20Roader%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1au3KwPFaw01Lo2lgHHYFBwiyMy7umDMC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moto Roader (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Moto%20Roader%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1i8s9wVJ4dUiU_LzSBZoQa9U77ekagc9-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moto Roader II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Moto%20Roader%20II%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1BOwlYWrsYrIdpnzCGNpiLiyPc8M4Di5D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moto Roader II (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Moto%20Roader%20II%20%28Japan%29%20%28Alt%201%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1Xo88k2LzBz6L7BLQB3Dd4HSqUfsd2xCX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Heli no Daibouken (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Mr.%20Heli%20no%20Daibouken%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/119igdVseJ2eoZPqe26pioUNdPLhW7Lil/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Heli no Daibouken (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Mr.%20Heli%20no%20Daibouken%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1jMifQzG7BRfhKtzeYCbO_J2XDm3XnsP2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Heli no Daibouken (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Mr.%20Heli%20no%20Daibouken%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/14VKPKbH0GxdZGrSCPxwu3OV3rxe8TL3j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHK Taiga Drama - Taiheiki (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/NHK%20Taiga%20Drama%20-%20Taiheiki%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/16ovccWIaQP410PtofA3Dj8jNjigdiHKU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Narazumono Sentou Butai - Bloody Wolf (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Narazumono%20Sentou%20Butai%20-%20Bloody%20Wolf%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1AB6ipMjzNN4VZqmV9xgnvE_Ib1Gl7XLC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Naxat Open (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Naxat%20Open%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1g4mQhbB_kbXkqJQfSsU24Lfh3eJwf8PD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Naxat Stadium (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Naxat%20Stadium%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1-7qRX_GZ5jV12ewVoaZiKK3WSa1JjZv8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nazo no Mascarade (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Nazo%20no%20Mascarade%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1_X77idUZd7pqJMtdMvVJMbyo4TJXD6UL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Necros no Yousai (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Necros%20no%20Yousai%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1uwN64Kuy_jPyCBOJHLubgVu-8z35Q0hU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nectaris (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Nectaris%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1UW9z9HujlYUP-2oH-82RcKQdDNwlDDMM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nekketsu Koukou Dodgeball-bu - PC Bangai Hen (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Nekketsu%20Koukou%20Dodgeball-bu%20-%20PC%20Bangai%20Hen%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1TQvXhDynKyDtDtbRFg-r6lMAtYx13DD5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nekketsu Koukou Dodgeball-bu - Soccer PC Hen (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Nekketsu%20Koukou%20Dodgeball-bu%20-%20Soccer%20PC%20Hen%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1yIRXJydE_6ltB22buief4iqkImD_x-rE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neutopia (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Neutopia%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1Ut-QIG1_pg4dlEJYW0OtYX43f-2_6kYL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neutopia (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Neutopia%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1qTIIdot_MW87-kNeHHuVPoUO9h7_E_rm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neutopia (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Neutopia%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1e7HOA9SvFqLG0EOA8ux6EA1E9EeX57sx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neutopia II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Neutopia%20II%20%28Japan%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1JepuWItkAwa0rGztY5vVTnuVUhg5qt_I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Neutopia II (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Neutopia%20II%20%28USA%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1CoPo0YDzaFYobVfSr-2KytfnL0TLQKGN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "New Adventure Island (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/New%20Adventure%20Island%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1vSEalfa8nD_KiVCXHcmkKHWfErNaLNZQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "New Zealand Story, The (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/17cxWJqIunY28D27T66G1Mb6VIoqqPXrt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Night Creatures (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Night%20Creatures%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1DOgK1De12ndv8IsgJC-kxyLw0flOIoMb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Night Creatures (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Night%20Creatures%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1N6QFWSsXI9Fzp_5Bwf-sERyZjeOkMfeU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Niko Niko Pun (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Niko%20Niko%20Pun%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1-7vN7dCH_-bsZ3ZXp-8qq04VKlfoTk08/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Ryuuken Den (Japan) (En,Ja,Zh)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1sB9gH1tBbJZbukitnQPYxDUPojqEmH_j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Spirit (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ninja%20Spirit%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1aA_7AJ1zbXC6SKMtfldTBTsRrwog41UQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Spirit (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ninja%20Spirit%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1RLXu9G4EyfHZipg4XsfhTmRuuVYqPYLE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Warriors, The (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ninja%20Warriors%2C%20The%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1ao23jGfEd7p7og42fWUffq0IeIJVUL_S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Obocchama-kun (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Obocchama-kun%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1E5e01rVS_x_bTAD1hm0sqRroFQ7F0oo1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Wolf (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Operation%20Wolf%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1nmD5WytpQYgX90akOsrNld03FmPkuq5A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Order of the Griffon (USA)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1-MjDn2g3comMUAE-OYq4uu0TM_W_IBaU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ordyne (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ordyne%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1KfqJn98SCCuob6uGFH0UBk_YuYG8ij2g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ordyne (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ordyne%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/14KsuBLLilNELQv70EUB_yalScsZHGHPl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ordyne (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ordyne%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1ssO9hJ9ebtjbBt5O5Jf3vBrauWzIMuI5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Out Live (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Out%20Live%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1TyObhLGlpHNKoIDNxLLmc0zZeIgOkK_4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Out Run (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Out%20Run%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1N-f5sDMuF8k4S3lXAe0XYQXB00afYepf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "OutRun (ESP)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "513 KB",
    link1: "https://drive.google.com/file/d/1ihVpRW8y9InkmC9uO1VVd4t1Kz3dy7DY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Override (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Override%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1rd1OKptBsMTY3Pcio6eIC4OW12nSg_pV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "P-47 - The Freedom Fighter (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/P-47%20-%20The%20Freedom%20Fighter%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ynvIDME2LxWCDEJmSjk7JFDowvNlRj26/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PC Denjin - Punkic Cyborgs (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/PC%20Denjin%20-%20Punkic%20Cyborgs%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1BnfNFVWzswRLhSF-99mn0KxBlIo1BVBQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PC Denjin - Punkic Cyborgs (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/PC%20Denjin%20-%20Punkic%20Cyborgs%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/19ZlYPJQRp6ODHJXcGK7WwMiWBG_fwYqb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PC Genjin - Pithecanthropus Computerurus (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/PC%20Genjin%20-%20Pithecanthropus%20Computerurus%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1TtEfy-mUfd_zxKelOZ1xD-JG96Mdl94u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PC Genjin - Pithecanthropus Computerurus (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/PC%20Genjin%20-%20Pithecanthropus%20Computerurus%20%28Japan%29%20%28Alt%201%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1poZx9FZS0iSUw1Zzc1s5wEyQzgOcauyE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PC Genjin 2 - Pithecanthropus Computerurus (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/PC%20Genjin%202%20-%20Pithecanthropus%20Computerurus%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1d3vwXYp8ejVsYGtjK28_ThPJDBNuPvIX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PC Genjin 3 - Pithecanthropus Computerurus (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/PC%20Genjin%203%20-%20Pithecanthropus%20Computerurus%20%28Japan%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1AXLYOlWXyUgrUZA059P9hh33_fkGMMkG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PC Genjin 3 - Pithecanthropus Computerurus (Japan) (Demo)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/PC%20Genjin%203%20-%20Pithecanthropus%20Computerurus%20%28Japan%29%20%28Sample%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1WzA7OjDxI69L_XRFc-8N_91mFQuM8y8o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PC Pachi-Slot Idol Gambler (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/PC%20Pachi-Slot%20-%20Idol%20Gambler%20%28Japan%29%20%28Unl%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1SlWfH5NBhKJGNnjrHgArkLw4dLVfMojD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Land (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Pac-Land%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1HDmo3TEFtBffjnRQpyemG_0Pj0C4lx0r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Land (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Pac-Land%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1S4A0MVlpgsWyOhVNGgCTp8GnLy7nRdGg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Land (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Pac-Land%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1YqGGpPp0u6KkFd7Qo7vW90f4D7EIncwH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pachio-kun - Juuban Shoubu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Pachio-kun%20-%20Juuban%20Shoubu%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1N9KnNrDD050BZrixPTC8hLYoZn8p7E7V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paranoia (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Paranoia%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1gLcfuLeIVi_E6jnbj-6Y7luczy0NxvTF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Parasol Stars - The Story of Bubble Bobble 3 (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/18fDOa_BNOCmsvHnrmlMHyFaREvtKDNZs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Parasol Stars - The Story of Bubble Bobble III (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Parasol%20Stars%20-%20The%20Story%20of%20Bubble%20Bobble%20III%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1mKsd3_8BIHxbB0K326gWsGOchpbXk7QM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Parodius Da! - Shinwa kara Owarai e (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Parodius%20Da%21%20-%20Shinwa%20kara%20Owarai%20e%20%28Japan%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1IRvigb5AP5-cYkis5tLXUPPfimvxbUvG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Populous (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Populous%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1g23GnYz_lE0NzzsxT-Uf3qYhVvLmdA77/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Populous (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Populous%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/18sVjtkLrSMaOEAqIhTfZsc986TGMNhhf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Drift (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20Drift%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1p-PbwKvs6JRecyvm1kx_PJoYQW4DOCOt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Drift (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20Drift%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1szQKXqc2NNXTXlbyP0c8O9k3FiAQ-UsQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Drift (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20Drift%20%28Japan%29%20%28Alt%201%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1rvBKHh91MeCVyIscRMTE3_Nkx5iAEHRu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Eleven (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20Eleven%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/18ofjlj0Q8Jozjrw3jaOD5TP5uftvAXFU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Gate (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20Gate%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1S4TzjWz3UZTdKj-gmVnsPapkmvWzCtg8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Golf (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20Golf%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/15dbAW0rRqqzKqKrtECPRnC1R9ALoX_Og/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Golf (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20Golf%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1jSzPMVcKLoixABoKdoi13jXiHCZgXP3y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power League '93 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20League%20%2793%20%28Japan%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1F2GPO5yd9K4LNUldHaVl0EwFPe0OzjvN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power League (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20League%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1U_Zqp3jDkVKmw6U1JGx7s3Oitp6bPgM1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power League (Japan) (All Star Version)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20League%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1tXEkwpzAfY6icXmRRqYZPF1zxUNdvf10/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power League 4 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20League%204%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1CHU1LWdztvhrk74EmJ7WBOYiNN4jTBww/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power League 5 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20League%205%20%28Japan%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1bguC7ueJSTJyekeosTywTxEOmO0Kiq3k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power League II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20League%20II%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1DiGdTEcifrsrlF1bNAki7tR4fcyPeOJi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power League III (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20League%20III%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/108K4DjomTNDsip7J_trsbNAKIQWvP4zD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Sports (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20Sports%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1ahxi-lI0To61TtZqDUv7IDb1f5Ok-pKm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Tennis (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Power%20Tennis%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1h7Xa4EObQ3eZCWotqEYlk8bEOZYItHGA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Tennis World Court (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Pro%20Tennis%20-%20World%20Court%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/18EKLPLwnkQRGgebaepRyM6HBkJO_Ic-U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Yakyuu World Stadium '91 (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Pro%20Yakyuu%20World%20Stadium%20%2791%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1H2mcGLbY5vi62CHbwK7yc40ggMtVjTQU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Yakyuu World Stadium (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Pro%20Yakyuu%20World%20Stadium%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1qR-rtZuZ6uO5F9Rr1Vw2ttFa-4oDF2_I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psycho Chaser (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Psycho%20Chaser%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1T50HQeYG50fZB85M-hN9O7yaLEKZjGHd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psychosis (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Psychosis%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Ou7C09vRQKF4yE6J3DRC738TpdTf7NlM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psychosis (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Psychosis%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1_ICklFCBbBz-z6v3EH9Z-cTpqSe99wQj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle Boy (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Puzzle%20Boy%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1EdahB2vsYAHRAq1OZJNoQ0SXM2aXbrtV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzznic (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Puzznic%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1UiaR7bap9XHiTEZua7XAYe9XEQYk4w4K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzznic (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Puzznic%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ij6rc13mpRJVP456_2UpL96uuEsNBZDP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quiz Toukou Shashin (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Quiz%20Toukou%20Shashin%20%28Japan%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1r9rUVUXH7KERsYX0m_PLj_2QXB_t8sYK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/R-Type%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1ysa2Eg2K2ukzE5i4WkDAhyDjf1N6v6ez/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/R-Type%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/17hdNZdqZKOaqfuYks7LpPjsTUNset4Fi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type Part-1 (ESP)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1azYLme87ES64IE0GOUgJ5TvWQF5iOXRU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type Part-1 (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1vJjcNV71I2QpqQ58zuqqqsF14HHNIW9e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type Part-2 (ESP)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1tbcgiPPJaLwNWzM0NP_7SHNKVAJBeXer/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type Part-2 (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1zlqGUsjkNrXJ4_jHHD8frRaRIeCbBBdf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rabio Lepus Special (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Rabio%20Lepus%20Special%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/16QNFMbcATAMtrX7tiHneCSR9S9kidoK6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Racing Damashii (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Racing%20Damashii%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1M6hdYdi1j9kh3x0quB6uVorH-8BjO8Np/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raiden (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Raiden%20%28Japan%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1KTvmUbnNQt-o_Z6hfLd54352GPA-79m4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raiden (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Raiden%20%28USA%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1CZJffwqIxlitmW8UfNmVlH-A-Z_Tyi-j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rastan Saga II (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Rastan%20Saga%20II%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1hdeHeA39v2jHVzKV9evkCGnHQzSaMhKN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rastan Saga II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Rastan%20Saga%20II%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1ls2IHmX9cpVYlbB--Osvu3uYp_0tD9tb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rock-On (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Rock-On%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1dAm1uq00IVnp9rlH2kw_BykYyqXjpvF1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ryuukyuu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ryuukyuu%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1wYNTPKvuO4_VkxKFW07CSiw5Xco-GY_V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sadakichi 7 Series - Hideyoshi no Ougon (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ry1TAdG_ARRmVkbTRo03W_o4GqQvFTsk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Saigo no Nindou - Ninja Spirit (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Saigo%20no%20Nindou%20-%20Ninja%20Spirit%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1JQ4FRFN-VI-h6cdmYgglMv9q-BFPIVrF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Salamander (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Salamander%20%28World%29%20%28Wii%20U%20Virtual%20Console%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1oH020-myCaUuCNe04KkheQ_Y_qR_rdTn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Salamander (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Salamander%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1nK6Tmnw5-jklj0-3ACzZD6kwpYMW7HSI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Samurai-Ghost (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Samurai-Ghost%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1w0bqbHs0JCPdvPGX5pyt-Q0nw7yB_TNy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sekigahara (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Sekigahara%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1bU2gVhi7mSHelAFI78OtOUhO4IwMwmpM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sengoku Mahjong (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Sengoku%20Mahjong%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/11ZoAzSdFBumeYI3MR8YyjaMqB1NLJF1k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Shanghai%20%28Japan%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1r-0cZ0bJwSiqrRyfHRDQL4fTaKlI93Q2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinobi (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Shinobi%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1AJ4mhsC5u-VQP7UwkeHcaZMHpgucVgL5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shiryou Sensen - War of the Dead (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Shiryou%20Sensen%20-%20War%20of%20the%20Dead%20%28Japan%29.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/1l6ShkYgGCjBcH9nYQ0l1kn59PX9wuKW0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shiryou Sensen - War of the Dead (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Shiryou%20Sensen%20-%20War%20of%20the%20Dead%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1YvQSNkpUbQXnviq3c4OFlYj0gRJsgVgL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shockman (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Shockman%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1MX7Robzcx9uXB9-8PRykEQIi21inTbDi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shockman (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Shockman%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1yM5V-0DCALJmQhLHKC5wYjs4qmVs2zw6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shougi Shodan Icchokusen (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Shougi%20Shodan%20Icchokusen%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/19RpmQAzrqDaDQ7TxOTT22NkvlIgcYvOt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shougi Shoshinsha Muyou (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Shougi%20Shoshinsha%20Muyou%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1CMTCAZIsTLBL4yPVBiQwt9-N4FHaArN5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SideArms - Hyper Dyne (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/SideArms%20-%20Hyper%20Dyne%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1l7tkPFZ8ADRie7zMMAi1MztQQY_yTRfn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SideArms - Hyper Dyne (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/SideArms%20-%20Hyper%20Dyne%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Kk7Rc9LjqsPTP7xG2c7UOPpkcpXfWM2M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SideArms - Hyper Dyne (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/SideArms%20-%20Hyper%20Dyne%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1XHpQkLD3T4D3304MPvLzRPQf9Bjqy-wU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Silent Debuggers (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Silent%20Debuggers%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1OqYXIACLyhIrWr52k47DieRNAFBWrxDk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Silent Debuggers (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Silent%20Debuggers%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/15Hi0j6DFAJWCVU52Mzc3MfIx1Ep51DB4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sindibad - Chitei no Daimakyuu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Sindibad%20-%20Chitei%20no%20Daimakyuu%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1xwjfkM-dsU1syRtg_M0ffn6-XHoeyvTn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sinistron (ESP-WAVE)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Sinistron%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1AVTMMFKhKObkiY0I-Dovql2-NIMkDSrc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sinistron (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Sinistron%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/18wg5vYEQRnvKTRszfr6TJX46RVZUXg7b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sinistron - Violent Soldier (ESP-Wave)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1bFIdRP0fRf2LtybooogIwsX8IDRDmVxy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Skweek (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Skweek%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/12AKL3xkiu1RkCBF1OsCNLXPosGz1P5Mj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soldier Blade (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Soldier%20Blade%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1BBnWrda-yKumAXbn5UoktdXqeRD0zT9M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soldier Blade (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Soldier%20Blade%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1Q0_hsDtonSEoeO3_4agaGyE_uHVHO1N3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soldier Blade (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Soldier%20Blade%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1e6iUokMLc3rcO-01H-rqeKqzah7bFw4_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soldier Blade - Special Version (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Soldier%20Blade%20-%20Special%20Version%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1zqELUjUx-3m9wbTjfOodzfdr7ThgS-w5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Somer Assault (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Somer%20Assault%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1566RjVXOL0ZSlEHEkR_hGXQtiFahR9Pe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Somer Assault (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Somer%20Assault%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1uyDPeHSdy7g5BOQI-UPtATxiNu5QMDOX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Son Son II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Son%20Son%20II%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1wlwM45B7GOFFrbbaxNReOYwh2WV4mtjD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Spike - World Championship Beach Volleyball (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Sonic%20Spike%20-%20World%20Championship%20Beach%20Volleyball%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1n1ysWUiJl_4hAqKuVfBSBIkQLoBRpY3I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Spike - World Championship Beach Volleyball (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Sonic%20Spike%20-%20World%20Championship%20Beach%20Volleyball%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1_Qj_mSLkWRuzX-Izj_c3RbI22MUOmcLq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soukoban World (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Soukoban%20World%20%28Japan%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1qacBliox2aUeDSxOo3BMakxJXJSaHn5t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Space%20Harrier%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/119mvMi-orQ0gs8lE-WGF44i-zofMqroU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Space%20Harrier%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1hGj8lnjNfuJ0A_AQ9cRQGsjJIiSXgPKh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Space%20Harrier%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1MnftSgtxcjqIbmHqenxl0ftlj3cOUKbp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Invaders - Fukkatsu no Hi (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Space%20Invaders%20-%20Fukkatsu%20no%20Hi%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1wXXYpCZj4oudA-pXcDYw9zA6TzTRIZIz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Special Criminal Investigation (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/10dvkw9MIhyBdPKJIwQbG8qsrKF-k8UNu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spin Pair (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Spin%20Pair%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/14q4jQ4tmSgjfqUugFXXvJkozYSWT-qKY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spiral Wave (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Spiral%20Wave%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1kKlTcw5kzUISfAsphqhSAsXmHLDVgHxm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Splatterhouse (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Splatterhouse%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1qlweb5gG2g1lZbZcUYvB1i0IZUaueJaZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Splatterhouse (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Splatterhouse%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1MNhqWnLfgWp1CcrsFiWc5XKcgSbyGjBb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Splatterhouse (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Splatterhouse%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1cly241ufyzhVuoL2q7my2KYkrUDtBQKu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stratego (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Stratego%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1WyUmHO5yDV6h_1aQ23r0hO2erziC_QbQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II' - Champion Edition (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Street%20Fighter%20II%27%20-%20Champion%20Edition%20%28Japan%29.png",
    size: "2560 KB",
    link1: "https://drive.google.com/file/d/1LsUmx6Fl9KsSlrWIy-s3YvMfsXGD6YO4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strip Fighter II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Strip%20Fighter%20II%20%28Japan%29%20%28Unl%29.png",
    size: "1024 KB",
    link1: "https://drive.google.com/file/d/1atzQmBCUfW-Qvdfqj5wtAaJobbIdPT6g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Bros (ESP)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1-vBQIBTm0QGy2REie-HXKLJKgx191Ta2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Metal Crusher (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Super%20Metal%20Crusher%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1eCB0qB7Vfbw7z5_KW62-x90WX-kq8IUn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Momotarou Dentetsu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Super%20Momotarou%20Dentetsu%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1oUBg2cJeWL0tpgItxv6kAmcmChEpGXDZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Momotarou Dentetsu II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Super%20Momotarou%20Dentetsu%20II%20%28Japan%29.png",
    size: "768 KB",
    link1: "https://drive.google.com/file/d/1fmQl7ZqR_5uQUofy3RGLVc_cOi6CDV85/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Soldier (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Super%20Star%20Soldier%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1V4RFyZHfKAfuArqVZfi5--S4P8ndlzRA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Soldier (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Super%20Star%20Soldier%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/18b0BmWQNcPoOEufNJKP8OgHLx-nTEEgB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Star Soldier (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Super%20Star%20Soldier%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1MBNYI6ql3PNQ5I0moFlkH1eFnQILT-DE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Volleyball (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Super%20Volleyball%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1b11xqNrmM-A5BTSvC3MQBLDhRASTrOAi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Volleyball (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Super%20Volleyball%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1M-KqLrwWwVFYpTwzMMAYgjRF3dderpcx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Volleyball (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Super%20Volleyball%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1vyUh16YgeE8dI-XOzjChYzb5Hs2YlEvx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Susanoou Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Susanoou%20Densetsu%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1Ojja9u0UIoXFRfehnbPm3t3sOLeJ2csp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TV Sports Basketball (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/TV%20Sports%20Basketball%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1e64MWVPwpRXsaqssd_ft0RQv0TmyzP7m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TV Sports Basketball (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/TV%20Sports%20Basketball%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1eWk_XUliqXTstmPODbcH_RW-BrVD8B2v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TV Sports Football (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/TV%20Sports%20Football%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1FfjOMum--LIURlnvVY8nGOcCH7oHY77n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TV Sports Football (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/TV%20Sports%20Football%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1638Bn9dIBh1R9fxrtsMifq315t5Vob-z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TV Sports Hockey (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/TV%20Sports%20Hockey%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1EViDxgWXYe5ra-ltU6AhZtnOqSpU5wfq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TV Sports Hockey (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/TV%20Sports%20Hockey%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1qdr_UTZ-_1HDtcBR6HnUvT7w6XbYuNQh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taito Chase H.Q. (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Taito%20Chase%20H.Q.%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1BGaUJPSMOMEvU6V8IAH9nLhFEpXfxq69/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taito Chase H.Q. (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Taito%20Chase%20H.Q.%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1zXNvuzZQCcdL45IOzAnF3EHhF9ph8YPl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Takahashi Meijin no Shin Bouken-jima (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Takahashi%20Meijin%20no%20Shin%20Bouken-jima%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1hVW9HzWAp03UnlBEfXcbGSLT1gsjAnam/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Takeda Shingen (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Takeda%20Shingen%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1xlEAJRIvFg0GUp6ySPdKljN2SmnxaNMB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Takeda Shingen (Japan) (Alt 1)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Takeda%20Shingen%20%28Japan%29%20%28Alt%201%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1_mlfiDRdZryA1PsA0XcjQkc8-kDyR1G6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Takin' It to the Hoop (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Takin%27%20It%20to%20the%20Hoop%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/186S2ze_6DuVBgVOaAxLnU7o3X-PC_oor/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TaleSpin (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/TaleSpin%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1P8UFzNGmrBnA8O2NDyU3-926WA1qw3ak/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tatsujin (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tatsujin%20%28Japan%29%20%28Beta%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/10XK3pdtiHmttN3zn6xXWahCUk47R-K4b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tatsujin (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tatsujin%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1C_1Pbk0XW5UuewN-NTAHZyAy0jPpCfLH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tatsunoko Fighter (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tatsunoko%20Fighter%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1f37_AApuegOOEjccHoCMOlDwL6S_eevq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ten no Koe Bank (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Ten%20no%20Koe%20Bank%20%28Japan%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1kRd30XSxqFDJ84vaTLAiMet3zJ1BpOB1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tenseiryuu - Saint Dragon (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tenseiryuu%20-%20Saint%20Dragon%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1ow2pOE6fo1fkKDvEq7V7fJ86JMEqhTlc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terra Cresta II - Mandoraa no Gyakushuu (ESP)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1KElK0KVOdAd9sbK77LaIjjcUtaJzNYLh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terra Cresta II - Mandoraa no Gyakushuu (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1wg8SN4-FogWLhLglJ6AVmfeFMvgnNAka/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legendary Axe (ESP)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1EFYSI75InvoiyniIYA9AyKemcsGanRZE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legendary Axe II (ESP)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1xtZu31Pun9hrLprgbUNipV9miFPIhXkh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The New Zealand Story (ESP)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1uH9zq-LOM1FUJikb8j5UuHMH5uoPbQ8k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Blade (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Thunder%20Blade%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1bKpdYYTJVpYsZ2OJ6rkHW0XKZEq5blwM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiger Road (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tiger%20Road%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/13xvUYwam2fLqg2V2l5i-P77G4kgt9yA-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiger Road (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tiger%20Road%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1WtL136XBM2aeTTQTXw6GI2vOq8xeQfe6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Cruise (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Time%20Cruise%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1yft9KMO3bcSiO1-pg326xF58JUJ6S9d3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Cruise II (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Time%20Cruise%20II%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/11uiWuz5PUwp7V8ZdaDaAcaPowGZOd1-L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Timeball (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Timeball%20%28USA%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1E4PPUXkPSBihlFVnOg1C4o6i4vplrucx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Titan (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Titan%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/112Va4SO6sAb-ISOJEsltfvG28qJZkHz3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Titan (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Titan%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1xXtbXJhkODrRsQ1_65dlhGc-j8CCYUNX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toilet Kids (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Toilet%20Kids%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1a78ud3EInA9eY8GOkujNmv4JT9gWIasU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tora e no Michi (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tora%20e%20no%20Michi%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1OH4LvlqQT0gIDFzCfzLosArAOk10I5Ff/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toy Shop Boys (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Toy%20Shop%20Boys%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1XIaZd_6L5G7XSaYajxDQ3Ph8woU5OEWP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tricky (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tricky%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1IQLrNTvFeZeDBU3TKDEH_azWWwzVwtMa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tricky Kick (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tricky%20Kick%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1nLgx6_EFGwB2ctx4Ju0aW5_SqzE6t9fk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tricky Kick (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tricky%20Kick%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1NX_v7WiW2pGEi8KHiiQuRN3q8wfm36JO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tsuppari Oozumou - Heisei Ban (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tsuppari%20Oozumou%20-%20Heisei%20Ban%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/13Qn-jmiBScVaRYyFUdRHiblHSYovk0Qe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tsuru Teruhito no Jissen Kabushiki Bai Bai Game (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Tsuru%20Teruhito%20no%20Jissen%20Kabushiki%20Bai%20Bai%20Game%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1W0wqTlyhcJgDqPfJZBf8F3tpWT5BI-m7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turrican (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Turrican%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1kuSHrYbsgxGKwR7T8mrjOmaR3ecsAojx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turrican (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Turrican%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1VyIyMYhXMZbK95HsnKS3RVcQBFaokiLj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "USA Pro Basketball (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/USA%20Pro%20Basketball%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1AEyBOMLEWKexL8xqYgVkdZbw9dnzk8wq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Valkyrie no Densetsu (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Valkyrie%20no%20Densetsu%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/140gGQPTtI8-071bUMF_RNW2M4zcTeH4C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Valkyrie no Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Valkyrie%20no%20Densetsu%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1nJFI0jXaOOCmh8uMkPge22VTBP4sRGfh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Veigues - Tactical Gladiator (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Veigues%20-%20Tactical%20Gladiator%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1wWputocd-WEMhXQshXJGf8JoCz5z3AIG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Veigues - Tactical Gladiator (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Veigues%20-%20Tactical%20Gladiator%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1O3TuW5MGVRof29owBGWdNpWPF762JRos/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Veigues - Tactical Gladiator (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Veigues%20-%20Tactical%20Gladiator%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1ARFbwZhUV1S6wGaLvuQmAe4pa8BT3KqW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Victory Run (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Victory%20Run%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1MBrHeqF7VhqSVpF6VelDRUQZPtx6LF7I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Victory Run (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Victory%20Run%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/13RqvBn-rAecDmfrt0hWPrZS8Rn6nPFNh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Victory Run (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Victory%20Run%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1GMlKiW0PP2kzuHRnDCg_rduY1bz2lHX5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Vigilante%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1G2pD1aQ3odRYGKfqoeaT12yhQ8Vb5V4H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Vigilante%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1_sKZZRI28H1g_wWjgycsjaSX-NWvH9Ue/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Vigilante%20%28USA%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/193jnPILT3FTW6Pf6lGn3vDTRFu9C4rQi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Violent Soldier (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Violent%20Soldier%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1BoMfWs_6XsVEYpfikMs4k1GLmFqBpK7D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Volfied (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Volfied%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1nV9C4VMJpYwbZNcM0jCFWEdkInUXKyGh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Volfied (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Volfied%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1cVRALMWLbm_p-bEaOxwr_cVM2NG3RuEW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "W-Ring - The Double Rings (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/W-Ring%20-%20The%20Double%20Rings%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1uOvmcviJMVDWRR1yUi8JUjYiaSVjuPo3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wai Wai Mahjong - Yukai na Janyuu-tachi (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Wai%20Wai%20Mahjong%20-%20Yukai%20na%20Janyuu-tachi%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/16GfpE4joGZX2iDS3-AdGFXQwx5vFV-Qr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wallaby!! - Usagi no Kuni no Kangaroo Race (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Wallaby%21%21%20-%20Usagi%20no%20Kuni%20no%20Kangaroo%20Race%20%28Japan%29.png",
    size: "384 KB",
    link1: "https://drive.google.com/file/d/1Con978hctMhhwsLHWnh673wuOVht5z9V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winning Shot (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Winning%20Shot%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1v21oAGDzc6W3lQ7ONfLlQA0O4PI67Y_e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Momo (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Wonder%20Momo%20%28Japan%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1qdknj3kZaK-6CtzuOaVERV5HcThgJJai/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Momo (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Wonder%20Momo%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1q5aNXb6J7Mfe3jF6f8ivwiS-3vcxiJSJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Beach Volley (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/World%20Beach%20Volley%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1EdGPk1xdQFwYDXeTDyeMutQEB4nREcN6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Circuit (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/World%20Circuit%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1jAcHl3in0sHNDbMnIipQIbnwYxuWDP5T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Class Baseball (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/World%20Class%20Baseball%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Psd3XU1ABVdWa-Hi8VpZWhVpsHH6N41G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Court Tennis (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/World%20Court%20Tennis%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1ePJcVRBBc8PxyaqHdXxXmC68sFWmTMhC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Court Tennis (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/World%20Court%20Tennis%20%28USA%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1pWUqLxFpJ2yJqBjgtvl6F-e7_vQsqC3Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Jockey (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/World%20Jockey%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1Wi2c-IhaIm-4m1UOCB2H7J9AX08ht-er/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Sports Competition (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/World%20Sports%20Competition%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/125o3go9esKXniY8Y74N5nlywmoschugL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xevious - Fardraut Saga (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Xevious%20-%20Fardraut%20Saga%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1IlH6co3P2l3PSCnKxkTsURCvxLobv0g7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yo, Bro (USA)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Yo%2C%20Bro%20%28USA%29.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1Oj-NsCIlWMCQieVXI-CJOyd9VXCmQxn9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Youkai Douchuuki (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Youkai%20Douchuuki%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1jkC9eGiizegOIPBb_DnS43lEtErc3yzB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yuu Yuu Jinsei - Victory Life (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1sxxSoUw-hcQ6CEB_9SaEhsv5dSMagyh1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zero 4 Champ (Japan)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1rBt7TOILbtGwMHVXJfnUoqr63D3_Qg2-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zero 4 Champ (Japan) (v1.5)",
    image: "https://i.postimg.cc/vHLmqCq3/tg16-logo-large.png",
    size: "512 KB",
    link1: "https://drive.google.com/file/d/1cNJt-REVMGJtJxNUcb1LY5bHIAahIcB3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zipang (ESP)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Zipang%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1f5gqUEJaEhB2Ap17UDzYivTDTFzyXTth/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zipang (Japan)",
    image: "https://thumbnails.libretro.com/NEC%20-%20PC%20Engine%20-%20TurboGrafx%2016/Named_Boxarts/Zipang%20%28Japan%29.png",
    size: "256 KB",
    link1: "https://drive.google.com/file/d/1zliukT4VNzjH8NWvLJ7xWruyyTpTHQYr/view?usp=drivesdk",
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