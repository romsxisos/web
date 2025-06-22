const roms = [
  {
    name: "11 Hap Gam-Boy (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "268 KB",
    link1: "https://drive.google.com/file/d/1JXQ45ukS7tYbGuuHmOuoCLXNHWpgQoyD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "128 Hap (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "659 KB",
    link1: "https://drive.google.com/file/d/1yGdTqRokN96F4xxq3_fbExev6-wKUzIF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "2 Hap in 1 - Moai-ui Bomul + David II (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/18c1ndf6779nz9gaz_SgNXYl41crJffgR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "20 em 1 (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1dwrCHFhGR-BUh0TjCmESNu3E183uhBJo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3 in 1 - The Best Game Collection (A) (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1wvXZAdrIkdhNljT9ZDQvwnmcvZTjU0-0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3 in 1 - The Best Game Collection (B) (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1ulrC4SSzZlUuPxkQ_8-2ohRjrIAHBYqS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3 in 1 - The Best Game Collection (C) (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1jrz4iCu3tRwowY1JLLGnLbXB3EJy68MY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3 in 1 - The Best Game Collection (D) (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/16JkjAcU0uahayeJm4XiOjXOovH0-GALm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3 in 1 - The Best Game Collection (E) (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/139wLY_5Eku8Ly5pE2KIME4zU5syfbeDd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3 in 1 - The Best Game Collection (F) (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/16n7NCfPavLzINxOiI4NWNiXubkhdRZ43/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "4 PAK All Action (Australia) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/1KlsIUh-r9X0TvmRJ2lNF59BN2o1fnePC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "8 in 1 - The Best Game Collection (A) (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1igxbo_JDva4gNfuyiAQ77uqw0KLSfU1f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "8 in 1 - The Best Game Collection (B) (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "153 KB",
    link1: "https://drive.google.com/file/d/1Hq2pwJ44LqetoShY3ROw4Ju77jJo_dhN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "8 in 1 - The Best Game Collection (C) (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/1NZGDac_j_Cy7aLP7eX6aAqOlBBaVv7jV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "94 Super World Cup Soccer (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "99 KB",
    link1: "https://drive.google.com/file/d/193QlCYIxRRTqcjSQX8jhf23HURTiiYOe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "94-Nen Super Basketball (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1jXGXwL5nuDNymWOXQpal-c-iyLOOlwog/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ace of Aces (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1Ut71zw1aUVDDTXrIa5ZRgNOuOTVyE_X_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ace of Aces (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/17YtUII7AbGhU9LE80pKwUMlNBnR3_581/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Acerte o Alvo (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "17 KB",
    link1: "https://drive.google.com/file/d/1ZVtMIXjBGcKIvCsQvWg5ueq4B0Q1e6aw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Action Boy (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1N95PzEZzissJ0Tamm0qmPlkV-sWV9kHz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Action Fighter (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1RK9a_iReuCc6lqap-gd41zUGLGnx4Xt3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Action Fighter (Japan, Europe) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1_CARMYRo3TOpI4panCYcaqEGYCy3fov_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Action Fighter (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/10MatFhcseH_84S-2-FNj_scl0niFKl8p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Action Fighter (USA, Europe, Brazil) (En) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1wSLS0hzyIkqDJuhHJ4h90Z4frKlgIVtV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Addams Family, The (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "179 KB",
    link1: "https://drive.google.com/file/d/1gCrKkfT7DtqBICxeNsC63a0U3iqF80Cj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aerial Assault (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/1ZOVxmpBVYjdeFRCU2fLcNdEJCCsrtdJc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aerial Assault (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/11akCBmyztLV8R4WpjjBQWyivAUIg6_Pd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aerial Assault (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/1jOeINzzBuHnXI5qhaA_ZRfetzSI1Eexz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aerial Assault (USA, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/1SjYjBqTmolO3lKnzCaLuys5N_IPbI3dv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "After Burner (ESP) (W)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "202 KB",
    link1: "https://drive.google.com/file/d/1rQuJHRsQ_9tQiMxq3Jv-2B0qwsw9kBn_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "After Burner (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "202 KB",
    link1: "https://drive.google.com/file/d/12gE2TMr32GoQO_Bbs0Y9rrDR09DsEn07/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Agigongnyong Dooly (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1IPRNyFfDNVSYeyNH-xGeWZFdBBtBW_S7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Air Rescue (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "87 KB",
    link1: "https://drive.google.com/file/d/1KPHXycmb2f1BfIMkX6dMr5pZDv-dS95A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Air Rescue (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "87 KB",
    link1: "https://drive.google.com/file/d/1DpDcnxS_qe7dsR9nLUqkALhdjqaeCkOD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aladdin (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1GVwQAEwEl25ZSraQ_Ms8KDKhXUfCs2T1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aladdin (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/1LZDsCzKy0JDRmbu0C_M_TwL9R0j45DA1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aleste (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1opI_TDsLsKmAvvgj9vgYdE3hNtubU-G3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd - High-Tech World (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1qS1xFQYJuIXO4MNmXeAl2YwOcVXf1Ldd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd - High-Tech World (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1GpiZGu4oSsvXmAj043XxjtsiDXZfczyn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd - The Lost Stars (ESP) (W)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "119 KB",
    link1: "https://drive.google.com/file/d/1155ro02rbWyjJs4thMt-480-zJYM68qd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd - The Lost Stars (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "119 KB",
    link1: "https://drive.google.com/file/d/1Rfv-yRk8idWtFXlurMEwjLwkbFBhCCFX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd BMX Trial (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1pSzinfI2fo7cb5Tw1bMyIkIu63fJLo2A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World  (ESP )(UE) (Rod Medida)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1XTyfO60RehzoNQ0GZbkh38iljUXJLHmq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World  (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1zKhjqT4B4ej784RZwM56BXH2fB-K5rT3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World (ESP) (UEB) (En) (Rev 1) (Jackic)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1Eghi0u-3VEhKiKCwoQ2pFPzDHxxEN0BC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World (ESP) (UEB) (En) (Rev 1) (Rod Merida)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1uzphKrHIpsmKTiR1x-eknYvzUL4xGMC6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1OSQtFNhgtG4lb9UAcckGgzkIApnwOF3p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World (USA, Europe, Brazil) (En) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1pZlDgK3Sxqa918jGesgHLZnHcnMOAgCo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World (World) (En) (Sega Ages)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/13k2zy14wvJyPaHeMfBxQiW2W82s5r585/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World (World) (Ja) (Sega Ages)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1Kma7Mq4sFfDpxqFUT69VAM7uEIdB3f3t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World 2 (ESP)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1WnO6IRcS0MNLYehnzbIAvxX2RkEzXmfW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Miracle World 2 (World) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1TP3G7m3hq49WAzKaVpnhf9ssq3mdqWja/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Shinobi World (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1cXTK6koSQCzRUgOx0VX_W0y7SmNi6npz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd in Shinobi World (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1MFqhZ4QP5WPMJKTOqE4I2Mak-VcyT5NQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kidd no Miracle World (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1CseT_xn3Np7Q731SaSbUtnBsbFir4Win/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alex Kido (Taiwan) (Ja) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1rTBjnV9tGkvJ4_2C33ZnuT3kRyU0kjk9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alf (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1piYQLaOuzZtowtGBnUIkGS-D563C9TNz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alf (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1Vi_wU27z_5-OWcHlVdAdOY5NpxvR3uEb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alibaba and 40 Thieves (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/12A-k2bmQKwCfzKcHzivv_-Yd9m8SBVrJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien 3 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "153 KB",
    link1: "https://drive.google.com/file/d/1hRZgA6ZhtPufoqNc0S8YJuJf0RDI6wHF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien 3 (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "153 KB",
    link1: "https://drive.google.com/file/d/15QSP8Bwo0xCfZFOA2M4Uau7zc7px7n43/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Storm (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1CKpC-x8WwvtFH7dIKNl2yfLNf1mdPnGh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Storm (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/11gX9HrUK0YLIE9rC8pWqzzhljNQvmEc6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Syndrome (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1r33ChC_2V0gWQlZvse3jX-uXlq77lJ6k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Syndrome (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1JeZb8VPsME_ndQvcGYr-MCcDaSDgZe4U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alien Syndrome (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1h0hgTCaGFozKH5SW93klQkKr5IBlBOye/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alocos (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1DzjakbHnH9950yphbJAFAO6807oINnXd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Altered Beast (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/14T66hyG9U46XtLTV7Z-h7WWZctLyZzm4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Altered Beast (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/1nNhIn8koUAPaxgYq1AUdEEIrrpP20-Tn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "American Baseball (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1OX29W31VHHFIrCtqvLj5F-thbExabOTP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "American Pro Football (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1Bnn_T7IShIjXmB2rQPewKYAfma9f4tl1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Andre Agassi Tennis (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "156 KB",
    link1: "https://drive.google.com/file/d/11u-zVtisUMMlWwTP679d7nI7G3EMLf0V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Anmitsu Hime (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "85 KB",
    link1: "https://drive.google.com/file/d/1-XK1AOYrd2ktApTZQjL0IfMH-0cxww5c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arcade Smash Hits (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1KNiY84mSShMSi4CXma9UY8bt_miix3tq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arcade Smash Hits (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1-Z-QSOpQElWOjh__3CBouhMM-uN9z-3V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Argos no Juujiken (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1K8h3WiphNv97SA7VwdfTjEeyACkyplmW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Argos no Juujiken (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/10JS9RFtMW89FJ0RZV89oOpsmpoxZo9vr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ariel - The Little Mermaid (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1ja59HFmppVv0J3Bfyrkp0ALt0mScgcFK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ariel - The Little Mermaid (ESP) (B) (Jate)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1KU3hMgeULXjuYGu3e4GxaAtW7M5G5LrZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ariel the Little Mermaid (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1Lb_2Fn4-OvylIZsR56LMyeZHSxozlGRZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ashura (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/18pOpM2Z4badY_bX8Ky5ffRuQFSKJKZvE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ashura (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1NmZZpD9I7xkIa9AVcnzFB8nKSG1mZq4e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Assault City  (ESP) (E) (Pad Version)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1VLOVtXN7R6NhLrc4_FmB0VE_Nka0yT22/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Assault City (Europe) (Joypad)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/11ndwVPa15oQsITYixv6MMbJkrD9a2_V8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Assault City (Europe, Brazil) (En) (Light Phaser)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1IWA_LbHtGkN1gYMMxD3rdGY2TfzT84lX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Assault City - Light Phaser (ESP) (E) (Wave)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1Bd0_aS_kTaOKcmWwaO0AnoxaGmYXYarv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix (Europe, Brazil) (En,Fr)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1pzJ8p8R1e-9dzgw4Xcb1k2Kmb_G_cyyN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix (Europe, Brazil) (En,Fr) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1W9w5nMnn_NPHlwoL8WdXbvTqYoXybnPF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix and the Great Rescue (Europe, Brazil) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "311 KB",
    link1: "https://drive.google.com/file/d/1V8FcWpXZ9OMbIAOTBkDhJhM8NoVQkt3a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix and the Secret Mission (Europe, Brazil) (En,Fr,De)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "289 KB",
    link1: "https://drive.google.com/file/d/1SFXTNcAlyHrXd3PJNa5gJJRQTC_7_c_h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Astro Adventure (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1bfVs0gCOMLjFwfQQQgK2t4CrqE3cZw0p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Astro Flash (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1cF1KvkUNCbOuJE1P85dkWXUY4qpPMLpe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Astro Warrior & Pit Pot (Brazil) (En) (Master System Evolution)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/18yF6gwXmDds4AV0snFyQ9g41DcVJ1AK1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Astro Warrior & Pit Pot (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/12qY-1DFfcWfMk9LF0qJGeenmUGNNtGtp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Astro Warrior & Pit Pot (Europe) (Sample)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1XJ4a7GjwzlMWnoKGNXs2xB16nAb2gn44/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Astro Warrior (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "42 KB",
    link1: "https://drive.google.com/file/d/1sbnJUHPtA2PraBUMS3nsbBPp71b67Clg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Astro Warrior (Japan, USA, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "42 KB",
    link1: "https://drive.google.com/file/d/1WB70nJB3PnyyBdMOTb3rXdH9WmVaP8BJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aventuras da TV Colosso, As (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/1t64ISvOI1EVbeRsnHOqUD0cwEr1nokmZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ayrton Senna's Super Monaco GP II (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1eXFO5c497ELTw8_hN_xZVbBvPp1Mht_K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aztec Adventure (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/1X9BSIV2sahva5hbwXgoHHPlT93GNC4x6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aztec Adventure- The Golden Road to Paradise (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/1TATP70FeU1ley2ZtUm_DwyN-xrqiJjrA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aztel Adventure (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/1a6mZ9Qv-humZpDwXDstkULGth2rjMbPU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BMX Trial - Alex Kidd (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1CE7ohu32ChlxOLMTyRNQVxOtmuks81UX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Back to the Future 2 (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/1oA-3v6qNm-7yOxQtWTSZBt05v4qcHntx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Back to the Future Part II (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/1jHo6YPGAOLN9pWfLUGBm83mme_UqMFE7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Back to the Future Part III (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1UyRtWJmz9gqVjcnLAH733gNTkiAPUFRF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Baku Baku (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1iZHwgyypwMenWfqT69fPXt2e-gBfcAI-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Baku Baku Animals (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/10_FGleuV16I-y5Gibx3xV3yBgKFJPJvl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bank Panic (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1kH8D-ekDvSn8SXXIGKE1NtLZKsx4ume3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bank Panic (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1QTnAA-q_-R_rMK8YboijXoWGBACCD7hV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Basket Ball Nightmare (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/18gJqHLnr73Om8iICADRJIUMC_pu8Xanf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Basketball Nightmare (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/1c7-zn7uQqK8eRjIYWetNm8bLU5MV_0cx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Returns (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1fwnLj05eD2Sqaim3JygOZdPxylV6IYjN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Returns (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1cJW71M4b9CJxZKt4SY0LTetBVg7z9nhn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Out Run (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/15xUViktCtiLmUgNy75oLNs0447_W0Ohm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Out Run (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1hXjZ4MDNIYrGccM7iz9JSOB-nUOrkese/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battlemaniacs (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1f-gpliQ-IgVDZ1_Eb_o8EYpWuDpE6GPF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battlemaniacs (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1pveVGKu_ZIG2UFbCe2jyvwRelmjOlIfo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Black Belt (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1eu37fZ9L5JNtRvCvh11uInDs5KCqBomk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Black Belt (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1jX7I7sxyG8Cstqb4kfRFPKiNjlusynqg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Black Belt (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1jX3ZO_SW9NDO9coyxtR7LMjPzU81Wqhz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blade Eagle 3-D (ESP) (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/18Dgr5a6ZjF_i0hdy3E7YooY4P2pnolsw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blade Eagle 3-D (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1ZABryA3U9sSn04SZconMLFBUqEGONI5d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bloki (World) (v1.00) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "11 KB",
    link1: "https://drive.google.com/file/d/1AFeC3qsLjMC8qjgDsOJDBrUNOgLLxnhR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bobble Bobble (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "15 KB",
    link1: "https://drive.google.com/file/d/1bW3OLzxrwImGVTZC5XI3CxKR1rGmBPo-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bolas e Cores (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1Kt4xIn9SLctYKnP37Osl7WTZp0mMhnyj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bolhas (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "20 KB",
    link1: "https://drive.google.com/file/d/1MEoWwqw8rJd_hgRcWaIWwLN4dkRf79fp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bombeiros (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "20 KB",
    link1: "https://drive.google.com/file/d/1rovp1cgdQbzYUIRKp53-e1qazyhdYwMw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomber Raid (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/1RRJ_SNZrH6nmiFllfSSLmwie21SgTl2W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomber Raid (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/1rofIcr2eFJofz8WRAy_b7LdG5YxW4h7y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonanza Bros. (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "107 KB",
    link1: "https://drive.google.com/file/d/1436Gj_JVn0pIlzR9jUlrrViB2405r7q-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonanza Bros. (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "106 KB",
    link1: "https://drive.google.com/file/d/11mFG_DcbEZAotUwTHj-wriqJesKOooQV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonkers Wax Up! (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "296 KB",
    link1: "https://drive.google.com/file/d/1fSMBkQeGQS_qFa5uGF0ckyjFLa-LerEt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bonkers Wax Up! (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "296 KB",
    link1: "https://drive.google.com/file/d/1UBb-ut_nkfmUjkZ5eacnq4WxXg8baH3a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/1ZUXYxyGyTYME3jMLZDHkDio2ga1AtIh2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bram Stoker's Dracula (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/1MDuc9uNGb161ChUtwmGugkwWMDUHGDU7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubble Bobble (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/17gxgeh9ZoIRztxzPq_x8OUjh08a5845a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubble Bobble (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1Cd6wJndk6LGP37Gp0mCJig4A4N7xf7LQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bubble Bobble (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1322BVLTpC7KlWiam8w_KwCvmuaWvOiBf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buggy Run (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/1O-hi6nw5E7JrmpyQN8FUFu15QIMgbV81/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buggy Run (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/1hZS4ocOl7r-40n2BunijjeXLiPp3K8z5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "C_So! (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/166VpgpX49CtW6hgo4t-n7IS4Vp0dN_uw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Games (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1jv7xEj_QMLdZi5P12h4GMAqdtN0136tK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Games (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1MMrig6BViSzmt9sYDcAiJgqlwdkcsLdb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Games II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1qNpc-qGYI8SvCMDOenC_a-D252wuqJPs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "California Games II (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1qJtHYWtGMJG1Cb7-nPppaO4rHUza6xVE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Silver (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1o-zZH66pQEWxBP5OHdO0x2qKzn1yOqTR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Silver (Japan, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/1IkR_NTBOouoNSMGHa54EHA2v134LJp3B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Captain Silver (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1lGUkMntqM8V54sSYiahxi1Ua8b2nzn3R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Casino Games (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/11SL9vifUncLxTGRi25xf2jYoSg2KVCEG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Casino Games (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1hwCciDpQGw6ikVVbDzMVYX9w80aMu_eC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castelo Ra-Tim-Bum (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "204 KB",
    link1: "https://drive.google.com/file/d/12AweDPdpY4w2VyoL95d_HubrXUXTl9aR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castle of Illusion Starring Mickey Mouse (ESP) (2.0) (UB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1h-VqfPfYEW3lSidC1iIDP9FNgwXlQEmM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castle of Illusion Starring Mickey Mouse (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1CxMs1tGwTQUgVjwLN0LYxQmSb1U-et4k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castle of Illusion Starring Mickey Mouse (USA, Europe, Brazil) (En) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "11 KB",
    link1: "https://drive.google.com/file/d/1GoQwrv44CqgfnxwtnZHTWFLjIbNkfKHB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castle of Illusion Starring Mickey Mouse (USA, Europe, Brazil) (En) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1-UT94s11of5x1FA-zmCO8ymIL1pGRbWR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cava-Cava (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "19 KB",
    link1: "https://drive.google.com/file/d/1aPuwD_eT1dtsIdhjZ09zClVpzOmAAtbV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Champions of Europe (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1vztgRbFyNkPYD3Jvy6ZvqqSENne-oLrb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Championship Hockey (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1lqb_mWHMR03zbqWSS42fuCW5-7to3yEE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chapolim x Dracula - Um Duelo Assustador (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/14LwjGHrpNDlIAY01W8lZsig6PFZAzwcX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cheese Cat-astrophe Starring Speedy Gonzales (Europe, Brazil) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "222 KB",
    link1: "https://drive.google.com/file/d/1TR2MIi6gSdyIwcwkH0CQYE5Zn2ddgTx_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choplifter (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1olLzDiz3O27vcliuMlc2VTb9ndnwtKxf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choplifter (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/13S60nq6m401EcwMB3xskXfzx9bTKAlKS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choplifter (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1CpPM6GDiahqwkmAZzsXbz7S-Ub6Wd62E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chouon Senshi Borgman (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1DkOwE8N_9u9JJ2GoIyQuSg9CzXFS8Poe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/1EPVpeYUZtvjTWGobnqRESXyId9uv_yBt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/1LGQ4eiM147MNMgVyDZejb6L_ff56LWag/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock II - Son of Chuck (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1kKJrgPpZXC1QoPHexWH090oZ4FSV0j_l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock II - Son of Chuck (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "317 KB",
    link1: "https://drive.google.com/file/d/1et7oqjgUuu_mbTJmT2D7TDpJWAHTAK-w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chuck Rock II - Son of Chuck (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "317 KB",
    link1: "https://drive.google.com/file/d/1mMvlabgiaXQY1Md4Rp-A6mUo9nR1dEYj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Circuit, The (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/12zAk6LJFToxGJatJjiEG-_I9-iUZJJSd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cloud Master (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/1xgKM6HSDXBJeMqJEH7Q-N6nUJixUbBSi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cloud Master (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/1bkMh1jZ7RFr1ieapHiZP-SyhxZNymCKF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Color & Switch Test (Brazil) (En) (Rev A)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "2 KB",
    link1: "https://drive.google.com/file/d/1nP3dzeiPCr6q4J8GcOVqtrFjcpaxgMli/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/1Dh9n4X2mQDdPAiiJShhbBA2h0EK4hY9_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/1cWiw613_rXiyQcNbQ5yTnnot5i6CBzV1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Comical Machine Gun Joe (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1QDeFzak7elcwbPqHR6EPRJJB-AhDRefT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Comical Machine Gun Joe (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1Fgo1HqlqRjE2VZbdIIQkeeAd1EtKVRAG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Comical Machine Gun Joe (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1jpl9DtyHrRsBjO5OcT8FUkYL8rhmc57V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Con-Dori (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "17 KB",
    link1: "https://drive.google.com/file/d/1zSHPo-l-deL8R57qhnFGrKaSr_HtF9CG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool Spot (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1_g5vLddSnxvob5ABG7TeHOJMgtMjS3Td/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool Spot (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1c1VYnQxqruexGvn4Jrqn0j1BgN6VVWus/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cosmic Spacehead (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "195 KB",
    link1: "https://drive.google.com/file/d/1WE-thWwI2c-7Jx6w4_3Ya6KfVTRYKm4h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Creature Capture (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "48 KB",
    link1: "https://drive.google.com/file/d/1VgeVnG49AtMkK0l_46vtEPg58QQD9J6O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyber Shinobi (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1D8HuHLjrXdebV4_cw8F9NFFnUzZYeKb_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyber Shinobi, The (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1xURoXnF28M66GpFCUQi3SotwymEkiF6s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyber Shinobi, The (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1dBc8yRacROg812P38M2mUT-7gQtWyql0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyborg Hunter (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/11d8OjM5T4qj160T5IGYF7Uyhw3yJu3UB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyborg Hunter (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1HH6Lk6qkljWRFpacdBzoJwm0Awmc1pUZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyborg Z (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1LLcaxl_pR-K-980CROG3e1t1piI7LS84/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daffy Duck in Hollywood (Europe, Brazil) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "311 KB",
    link1: "https://drive.google.com/file/d/1UdiOmWrBC7rABMHPe_hEmWO2dobYpVC_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dallyeora Pigu-Wang (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "148 KB",
    link1: "https://drive.google.com/file/d/1Mu2pD1DodZx33J-S-kfp3yzzeuI_WhzW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Danan - The Jungle Fighter (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1YRgup9Bn4HmX0PnavCulFm9_cA686qup/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Danan - The Jungle Fighter (ESP) (E) (2.0)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1ksy4pNoBuC5wns0qjAZ31542XcBbqvzG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Danan - The Jungle Fighter (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1eiYFawiolrIes03o2NRMBvyKuGxovwre/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dead Angle (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1RRSrGZK1K5OOcuoEz5I-8HOI5DQ_uyW4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dead Angle (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1OhMBsb_91KmFfIY5fvlQBQPmva4iOSID/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Duck Trouble Starring Donald Duck (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "245 KB",
    link1: "https://drive.google.com/file/d/1cazVw8auSWEHIS1kfX8bgbV0RG42B4jd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deep Duck Trouble Starring Donald Duck (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "245 KB",
    link1: "https://drive.google.com/file/d/12uli9TjHcjYcmiFz8aNUE_VHBhVNxjHa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Speedtrap Starring Road Runner and Wile E. Coyote (Europe, Brazil) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "187 KB",
    link1: "https://drive.google.com/file/d/18LcygjU1woX4LeMKtiNHrXCsjoiztG-8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Desert Strike (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "195 KB",
    link1: "https://drive.google.com/file/d/1u63be2-rAo3t3I0HSydUiSoqh1EUOkZ-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dick Tracy (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "98 KB",
    link1: "https://drive.google.com/file/d/1N5uL-QgmtNMseo-4q7QY1uSc2G0LG7Yo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dick Tracy (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "98 KB",
    link1: "https://drive.google.com/file/d/1GxCFJuUsNZ7fjQuKo-LdH0xXxmlfMPcc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinobasher Starring Bignose the Caveman (ESP) (E) (Proto)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1N_NHRcHLqlH9hD5j2rvW21GfEYmMk6pq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinosaur Dooley, The (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/10yk0oENzELRJqgnqErOxuzxK4U3MIBwx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doki Doki Penguin Land - Uchuu Daibouken (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1bcGKD22PM7ZcrfLIUpL5cBSO9xgy7eSg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Domino (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/11MO7wVkvFttmH7vh6zgXVM-PSmrD1zhv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1Rv6NOYxBfDaid6FD2VNNPwNtO6woyrBY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Dragon (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1gZ6NZMJ4kM3allr7C3jkDkIkYHGb2doq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Hawk  (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1Rc1gJkB1GHUOThwSiZ9JSZvH70gLwdbc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Hawk (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1r-t6JRLC4fhSbeAK32ZUwa57aL-3zXkN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double Target - Cynthia no Nemuri (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1s6XV4fBaTDIkYpHv_7J73WXtswegm_8F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Double_Dragon (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1OA9aCiowSlSAbFrdpa00r7kSrtv_PPrD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doze Trabalhos de Jongo, Os (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "19 KB",
    link1: "https://drive.google.com/file/d/1NZIdOMo8HAzQxVIQk3sJ2y8_i-9902bQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dr. HELLO (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1LfNlK9S1eYTIxjaDwIw0cVlk7nOqT6-7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dr. Robotnik's Mean Bean Machine (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1Ezsx21P3f0vocutssd3g3Q-U1y8Wg-oM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon - The Bruce Lee Story (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1NaXbXspA1-DrPudw1C68P2Qzgbz0QUAT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon - The Bruce Lee Story (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1dVGz3srMXph6d9qIqwjWfjU5IbNfbRiv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Crystal (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/12RuSivxyMTCTrCIsbugz_48X8CBSQbdx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Crystal (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1kCpRNm0TUGV_bpoUcqtTaXQ7Tm4CQCjn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynamite Duke (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "91 KB",
    link1: "https://drive.google.com/file/d/1I-Aam_yNhi1Rxuae3dcQHGmZgluiCJ-f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynamite Dux (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1oggDUK_sUfRAoXz4rSYJiV5D7paUekHR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynamite Dux (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1-0KqbHaYlziR_Gi71pEhIEZkgfSlHzcg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynamite Headdy (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "194 KB",
    link1: "https://drive.google.com/file/d/1Vv6sGue_XA7HHT9xX3Q-fUPJp4cqcK3_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dynamite Headdy (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "194 KB",
    link1: "https://drive.google.com/file/d/1l_dWI6N3A38IrqFxSNRhAKJfTfaWnr-V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E-SWAT (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1xSe6EZaCE-L-eL3-qqRpR_ApA6jcRQAE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E-SWAT (USA, Europe, Brazil) (En) (Rev A)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/148k86O6_3W34kEMohi7InJd060IoVD-a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.I. - Exa Innova (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1wV4yto79fDBBjrDSNePFxQexKYdiGPIj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ESWAT - City Under Siege (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1eDTc0bNzCi1BACJ5GiyCQ_E8sSaWsnEV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Eagles 5 (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1h-j0-02riDRsD5ub174DLA_9VaV4nh1Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1y48Wk6Ha5-jm2RMW1yLiLAjU0vvjjL-Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1emZHWDsJWg98zBQ2I6J5TBKX8fNaks5p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco - The Tides of Time (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1ApCjrvwfnzvKwdo7sGqKr7FS_KSEpSK5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco - The Tides of Time (ESP) (B) (Wave)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1to-4CR5z0x2KaoHM0BThYL4ZKkv-JLTh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco the Dolphin (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1KtWliTnnGwpHPkM-8YsBonj4Ik3DaIy-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ecco the Dolphin (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1w87YjoQc2WOV6K1B5o9eL9BU17tgBSYW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Enduro Racer (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1-zTVwet6UNbZCvLGrTfcYcOg8aznes3d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Enduro Racer (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1q_k_8KFwyEMc-5fS96G5fZZuYni3glNM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Enduro Racer (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/14w2__v9dRwg9fCpvInssan6DhfT-ZIJG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Enduro Racer (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1wq2faginl4GU96jFbgrn5DI9N4ZiPAlR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-1 Spirit - The Way to Formula-1 (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "87 KB",
    link1: "https://drive.google.com/file/d/10FgdoFy5xT0x_3UZMiVCrBb-7QhanhLL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-16 Fighter (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1YdRn7Mx00wf26QQWeX7EzrQJM4fK4Hwg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-16 Fighting Falcon (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1KO9SUUZ5OcDW196nUwW1vZNj_n6oBkXs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-16 Fighting Falcon (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1LXeS-LzBfpTC0wYx3ii0AmnUd4gQd7Wf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-16 Fighting Falcon (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1yoKhocgfNLy7sdvO0DWO3JU2AoIbYFiQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1lGMfg2j93IaXL8I9QznfI8Jo-ltYITYr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Championship (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/17AfV0yctzHEiisWpd1kbWQA04Gj_coJY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FA Tetris (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1hK6QA4GbU8TuJzugN2RkOS2bubJutfLO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA International Soccer (Brazil) (En,Es,Pt)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1xyveZaURs1Sq6yETFFuqtynly_FX3Qko/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fabrica de Chocolate (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1araLqERHWCFD5rSj3XFnrak8pan544A5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Family Games (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1Ph6CR1n-tApMP-B7PhsGAm00dYdqyJcK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantastic Dizzy (Europe) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "187 KB",
    link1: "https://drive.google.com/file/d/143wxJoUylLUvyHRMKNDcf-uol3tj8WR5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1MY3shlt5EqexDCqxUM0QMV5pwiKZMqns/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1AxwWFZdPOR0NrGmj3_QZCPX7fhVPUd3K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1mFZ0AHedOPTq5QtuP-Fch22fDJRTL5zq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone (World) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1OhSCyMXDXxt7n0sqBHMquUXK_ugtEsLc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone - The Maze (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1egyc9ktdkD0xycM47SizJmbdoX3h4IEp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone - The Maze (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/1l6-lxde_RHLvklUq-L2C9B_HFAuBvm1O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone 2- The Tears Of Opa-Opa (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1WTUYJHPvMCSxjvskaA6KRX2EFEu_mxph/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone II (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1Dpy5RqstH5-GbYQJXn9psCCV2s24rXNE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fantasy Zone II - Opa-Opa no Namida (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1wuV4jABgNbD1Wl2BhsML_FyoJcOVNTTs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Feiche Zhengba Zhan (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/18PJW8-Mn2Mb40b-6j4TdCwKfjw2p49an/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ferias Frustradas do Pica Pau (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/1fc8ZsbE23cHBQ7O2Ma2veVtWgjoi8XSF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Final Bubble Bobble (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1qHcU74w7TCQAiadbQgP7smMbzjYGjavJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire & Forget II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1p0BlUiu-cUot2k6Qiw2NPuK6dqIGKtjZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire & Forget II (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1XVxlEcie36_ZOp_s-wKkiWQwuHV2crBc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire & Ice (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/1Wul6-ORSxyjsYay9nesllIrhelrfyfxT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fire & Ice (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "93 KB",
    link1: "https://drive.google.com/file/d/12eWUfw4jeuPRb5HW8I5JQX7n0kVTMU3I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flash, The (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/1Si--ilhBE-VTa-IMVy_bMDN36LW_-_OB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flashpoint (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1BhxbYOvIt35A_f6MaFdcym_WmkW8-cjd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flintstones, The (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/1PiHYLwTysMdbSuZs8gkjMY3X4qWUCY0H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Forgotten Worlds (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1Dr6frx2Op-W1PyiLeylzbSQzcXuplM3G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Forgotten Worlds (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1ZWmWCPOUQ915LHsfTdGICjtc9lbBL_Vw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Forgotten Worlds (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1UdcMDRaMby3-glQdPvVXNfjG_affO22d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fushigi no Oshiro Pit Pot (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1waPb1LuZOdJ8SuMkbdq0OjviIVLAfBKE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fushigi no Oshiro Pit Pot (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1RFMcXV92bEUQg6s9jUEjuP7VWQfUYNNA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "G-LOC - Air Battle (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/18Byi0Blf373EtCH1w-uZfArSN6OeQjdC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GP Rider (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "206 KB",
    link1: "https://drive.google.com/file/d/1UzspKrM-C3yb2m5f8LqivXFM0J0k41k4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GP Rider (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "206 KB",
    link1: "https://drive.google.com/file/d/1cQVdhKVz6bb5f85xXrxuYPyC7DWa6wrX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gaegujangi Kkachi (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "235 KB",
    link1: "https://drive.google.com/file/d/1ee-UfLCCoF85gWUHqJhZ2shKdv7uyBoo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gain Ground (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/19cnikCsWGo9ECbcympzeKUNi3QnAs4Sw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gain Ground (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1X13ImPYY33JhcgssfpEVwcc8XGt7Z2G9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galactic Protector (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/1rzJ7v5e8GTsUzO6ebMhZRfLBXBXGIxdO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaxian (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1HVVfLnmME0TehCoqijdz8pyRqj2PpeDJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaxy Force (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1mdjJAait5vAM6Vzx68kXWv-ZZG5J31da/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaxy Force (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1A3lW2_JpkzhSsOIZ9GqNOOwoqHtSDH8w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaxy Force (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1vJr6v5DoSt0x06HssWFwB32MqcZ_ZERM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Box Serie Esportes Radicais (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "85 KB",
    link1: "https://drive.google.com/file/d/157IQvg3CRUgnMSmUbjMRVU5uRnE70fLf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Chongjiphap 200 (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "668 KB",
    link1: "https://drive.google.com/file/d/1c7ZLmAHfRJQLg8lmRe2UEsHGPS6YlKLM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Mo-eumjip 188 Hap (Korea) (v1.0) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "633 KB",
    link1: "https://drive.google.com/file/d/1_XR8f1ZDx306IjsJ66Qn_8CKshMP6oUV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Mo-eumjip 188 Hap (Korea) (v1.1) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "633 KB",
    link1: "https://drive.google.com/file/d/1_q-1I46udEMxojwzn-Ntm9v1vQoLsH5_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gangcheol RoboCop (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "36 KB",
    link1: "https://drive.google.com/file/d/1MwtNQv9W1T75MerQBSBUFOBpPegA4LRG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gangster Town (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1e-SIthope9tsDpHGDRsmMr11Y5IcItdd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gangster Town (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1FbXvBdu2I8ZSMurnwAcVfmAvCXpYkUhk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gauntlet (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1mUtT1pp_jtFNG29DAtbQqNTf3_dVvDLR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gauntlet (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1IccSmNHCgmKECmEukcAoduSO9R0q9leM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "George Foreman's KO Boxing (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/1lq9thZv6TJw2zljjos87LiAdBFPJirO5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "George Foreman's KO Boxing (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/12U1I8PZaFjELxSLusNETH8aehJhiCoK2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Geraldinho (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1X0gf6o00pnYFcFPLm_ouLvqZ0htDZ8Ez/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghost House (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1hazSCrYs1OOrQQriNCsVO06q_lOFlhBq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghost House (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1hcAUqBkaT8er-8qso9GjASvXmckLvuJD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghost House (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1PBAicynF2B8oy9WwsKJTw-JhI6t6ncMe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghostbusters (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/19HmPBLqo_YlWGRDT7q6wQR0-Njj9DVV1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghostbusters (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1vAx58s5P0jeQl4WS8xgucZ_OcTuiv-jH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghouls'n Ghosts (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1M7DBe-pD3WliwoStGxvI7FLh5ewBt6Os/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghouls'n Ghosts (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1ONzYTllqRIrZHBUM2VaEFrF0sgU2Zapb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghouls'n Ghosts (USA, Europe, Brazil) (En) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "10 KB",
    link1: "https://drive.google.com/file/d/1o18vZwrFaG5QXYOTPEnuJp6XGppW-FNk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Global Defense (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "85 KB",
    link1: "https://drive.google.com/file/d/11xzZLxXZB-65IvNxj4AEH7e2fe1dCWnI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Global Defense (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "85 KB",
    link1: "https://drive.google.com/file/d/1z8Ok9nPrO9-4bhrMvtoenBgoDyxprAq7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Global Gladiators (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "150 KB",
    link1: "https://drive.google.com/file/d/1fgtERaogn_89jqqbHxS-SQu4uYNfAPsn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gokuaku Doumei Dump Matsumoto (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1z5WbItTIUzdF9bW4RnTuT-S6IycVYx1z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gokuaku Doumei Dump Matsumoto (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1YUR_PS2boyNmAZP5AH25nFqHYKPngbtS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1vFIUntXfxr9cjKPDt3fy3WGjpegIteLy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1V1M-2R6Pg3R1kTqc207eceiojZpsOxh4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe Warrior (ESP) (UE) (Pikachumanson)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1mpH54xxENDyDUWBOFhk7bR885ADjehzQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe Warrior (ESP) (UEB) (En) (Jackic)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1m01HT-fDEV2bFIo0GfvK6UcblbZ65NXq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Axe Warrior (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1SRQI_J1IGw9so0xb42BEZN_nV_-ETWU2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf_Mania (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1zdMNSIANaEkiqLbBCzrQC4R_yKkCph_G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golfamania (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/11XAZru6bnlHntasVT-mXhmkGDss8X1FT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golvellius (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1hyqHF6AZNNwgS_9ALewRXZyghfgjpXTd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golvellius (ESP) (UE) (Jacki)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "163 KB",
    link1: "https://drive.google.com/file/d/1xleuP5Vn6HRiW-1BCVgDtfMTJJ1IYqe3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golvellius - Valley of Doom (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "163 KB",
    link1: "https://drive.google.com/file/d/13lPVI3w2UF2zb-5i34cnxVbrZi3lyogw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Baseball (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1fBm2nZVBgYR_4bz_ZLWJ-TiwUvMHMqdR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Baseball (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/14Deors2dSQywa48R_0_CvFrgTu2W9xfU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Basketball (ESP) (JUEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/14hFMmBgku0x_G_hsgj0XjS8BzAAQNO3c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Basketball (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/13Sf4qpA5etBYxYrv3fXQiR-v2jjsFrG6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Football (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1ZRkrdIrig8jJqFfzcVBrvQ1wWSOnBiIo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Golf (ESP) (JUE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1LGpSaDr2vgfXrL5QG8vjs91BlhbTva1o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Golf (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1L27Xe0ypK0U7wFgvMSSJkX6Hwzc4zO1c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Golf (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/11MDL1R69jnV0Pp0nieYIICRanr6BQ7DL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Golf (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/1HM4emTaH5qrMmK24ZrCzffOJ_dlpoyfv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Ice Hockey (ESP) (UJ)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "30 KB",
    link1: "https://drive.google.com/file/d/1f2ngzOYZ8hMDXAYnEz8_lXrsmATG3vXK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Ice Hockey (Japan, USA) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "30 KB",
    link1: "https://drive.google.com/file/d/1asGl-pZY42NP-sJud5DpAt6eEzIDGLAh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Soccer (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1pPURuDfCZ1uBm-Nn--j1G2GNPz110vCI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Soccer (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1tATHME9CPcNvFmymXKGjM2dzqz_VrSVO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Soccer (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1OI3WVhEtn5KPW17G-6yueJ2tajLg2pqK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Soccer (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1H_A3BsfhbUT3qPSz374SfOh-soZNFLMe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Tennis (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1j2S9TVIf0MbqYHl2hLTOvuE131NKPGCV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Volleyball (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1PpEOoDuAH_AGpL_pWPb4KS1OiECgiYJT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Volleyball (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1SihVoUfOK6xgJdVng9mD3tBbWQ84BiFO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Volleyball (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1VY9ELKSWTxa4KKh17g-SLuCdBTY8rTXc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gun.Smoke (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1NaQJ27r6BXI6a7iMPj90-HdSkU-5hMKn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Haja no Fuuin (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1ya4u8Xo-Lg0l76rWMlrtHzNT4NG1HY5Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hang On & Astro Warrior (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1FoBlwW1Wi0QmpTbcRpQHGveLLDPw6tli/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hang On & Safari Hunt (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1Vm9rglUcMQmE_3wd6DqeAakSsPBXOCdR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hang On (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/17cyx8Lia-RaucMZ8XhoUOqisur5qzND8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hang On (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1PQF4Wspb24S5QrQSa-bgTIFrDGpBXXuS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hang-On (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/141YaJqyUA6iPjjco1a4odQtipGNT7c9E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heavyweight Champ (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1_IieBKouLgsDKqSAQspDbMWVinJY9Vij/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heavyweight Champ (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1drAsJhAzBUGoc6aqx-dVV8JhK5YPzbyR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heroes of the Lance (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1bZLhWdIiPo-H-gu2OvLi1BsezR9atTHF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heroes of the Lance (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1jhaDWMs7uCShBNiZ4CvlsMZVz43IAwDG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "High School! Kimengumi (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/1m-C8Xn7DDMOX_qziRJX72l2jOFvd4EIl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "High School! Kimengumi (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1ntCmpyPULBKK4lGbQ-Y3myAlwWrMYwFO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hokuto no Ken (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1wjKQ85769FY1WbkLJlfPrFakefXOdkv3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hokuto no Ken (ESP) (J) (Jacki)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1Z-wNvsXiO7cHm2uOqtk3CiLl6XNxO-Im/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hokuto no Ken (ESP) (J) (Jackic)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1MpLdvL_BolGjWXhMgSKzMd8b_wnAFE9s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hokuto no Ken (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1892Cnj7rhffjvEYOZ8aNctjsInN_D5_G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hokuto no Ken (Taiwan) (Ja) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/1BuJe5LC3lZXE5eSIVy6406-9ZaqrrgH8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Alone (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "154 KB",
    link1: "https://drive.google.com/file/d/1Cy5KIHCwPLqg90kUv5lP3PYUz2acRnUm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Home Alone (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "154 KB",
    link1: "https://drive.google.com/file/d/1LNxIhQ6O3HE3tCDtmT_NMgQV0eBCxuUk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hong Kil Dong (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "20 KB",
    link1: "https://drive.google.com/file/d/1slW9uc2QNm8S6UT1ixMkpR6_thPANExT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hook  (ESP) (Proto)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "147 KB",
    link1: "https://drive.google.com/file/d/14TmJPHnha-wtzPbjI9QjUz0z0vh0qyml/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hoshi wo Sagashite... (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1A36jZzOvKXB3L914auZH2YzRKqmGXYFy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hwarang-ui Geom (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1f62dy9PX260FHPL0eVyFEl23ZK_5IXMG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Impossible Mission (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1FyOQJd9u_QmKk34nAEugFhM2MGCgSe-o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Impossible Mission (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "54 KB",
    link1: "https://drive.google.com/file/d/1EgKhCeRq8qO9-YJ4MiZGHUa-yvLHxHui/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Incredible Crash Dummies, The (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/1_fDpeCpI1Up9yFHhrLvw-bIFtfe9UGZ6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Incredible Hulk, The (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1f2f8fzN9bvyA-NZzs4WSjF9Frb7qW-cb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indiana Jones and the Last Crusade (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/15tIt0P7i7Dfm9-EWKrJKjkBCNQwEX3vc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indiana Jones and the Last Crusade (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1kSk3DuoHVUwWbmMGEKgC7XICDT8BIfQ1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James 'Buster' Douglas Knockout Boxing (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "94 KB",
    link1: "https://drive.google.com/file/d/1aiupCyzCjYkK2rM51-sdrmGHEuKKvf-0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James 'Buster' Douglas Knockout Boxing (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "94 KB",
    link1: "https://drive.google.com/file/d/1McgI7ArLgL5IA2m09nOhb4n9lZ_dqRA1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James 'Buster' Douglas Knockout Boxing (USA) (Sample)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "94 KB",
    link1: "https://drive.google.com/file/d/1H1ClQMVVpKJVoaa6rryZW89bL4i60qQH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Bond 007 - The Duel (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1_A_71TYky-kFr__tgx70w94Et4gEwY7I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Bond 007 - The Duel (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1e8T5CRSu3Q2sqZMk7zXTznD0OV2sazA7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Bond 007 - The Duel (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1Lcvt1yax0cfIAagv5HU-72LFGBy6dTV_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "James Pond 2 - Codename RoboCod (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1wy6lEnlqLjQc5_9EbtLJTCmQlHe1wH86/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jang Pung 3  (ESP) (K) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "494 KB",
    link1: "https://drive.google.com/file/d/1f583bagH-HVKvYJXo8m0AlQrx1E2WhR3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jang Pung 3 (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "494 KB",
    link1: "https://drive.google.com/file/d/1bH4OnycD-SdRCalRaC9DfibGgg3ezM8a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jang Pung II (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1Zd1mBac44KZyDy28PcrquL1Mso8sbZ9a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Janggun-ui Adeul (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "175 KB",
    link1: "https://drive.google.com/file/d/1Jl0aMS3jUaC1S9_xZXxrY_f-x3rasK7y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joe Montana Football (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1nVv9CanFnPy6TFwaaB6vRXpGiuXGpBXW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jogos de Verao II (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "150 KB",
    link1: "https://drive.google.com/file/d/14wQvXe8ReLLUEwtWgeZOn6Ytvt2fRdJe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Book, The (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1_yhH7r3vq2dl-HEqFyWwQO-aMuQJwRWY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1oWRek98SY0xZ1T2GBcAv1DxNn2xng2sl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jurassic Park (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1PowyYgNnav69HrNs4krX9rTwPS3LqE1g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "KLAX (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1W0N1jMkct9PaTHk5JZLk1G1iHj92SsRH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kenseiden (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1ga-ZW6Pwp0B6h_Md9kunWfeYzNZ1REyX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kenseiden (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1pWokuOUbrcsUk9GWjZcTYI7ILA0gNIpY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kenseiden (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1SX3-wggD9GR8pE3CTR3MLI5rjbTHVvu9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King & Balloon (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1rnUbjq9ivgaatw7aPkgOf_p2t5Sqqo8Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "King's Quest - Quest for the Crown (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1QnyEZDUTL_dp3yT90EbO3oUPAiBksOTg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1EjPx6-afECTB7GjRa81E1_cI41nV38rI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knightmare II (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "91 KB",
    link1: "https://drive.google.com/file/d/1-HTdQfgVi70tlD9cJJdHzO5h_eekupMN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Krusty's Fun House (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/17xpo5A3i81MFTmYA4mg3CEiZEZR5D5zn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Krusty's Fun House (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1AYT4_QyjZFCNJVCeF_AUC_n38gNeGjHM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kujaku Ou (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "304 KB",
    link1: "https://drive.google.com/file/d/11DyFMOuU7wq6B1uAwjfP9gFKnhNjPX66/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kung Fu Kid (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/11gFnuSrkNe6G9oE4WZM_fWFdTn87xChU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kung Fu Kid (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1r_BaT3Vm7ad2m0q_acrpbafhulkFFJn8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kung Fu Kid (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1x4kLSxq1p1XfIO23E9SgBevUbCU3GWma/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Land of Illusion Starring Mickey Mouse (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "302 KB",
    link1: "https://drive.google.com/file/d/1ultXslYlzRP6LOaMyeExZdlJ47M4KrFI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Laser Ghost (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "110 KB",
    link1: "https://drive.google.com/file/d/1TZ4ksYENAmzR1ktxqTz9VVoHB5aym4A7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Laser Ghost (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "110 KB",
    link1: "https://drive.google.com/file/d/1YBmaQnS4eThxKbMWPXqh6xLwyyNxs-RE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Illusion Starring Mickey Mouse (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/16wo51ACgdxgRSclv0b_4YaK1TL3sZ6jJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "124 KB",
    link1: "https://drive.google.com/file/d/1vUBfXdGXWEqnjU77qNx6Z6DOSZBGB_Hu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "124 KB",
    link1: "https://drive.google.com/file/d/1OSc5eMM7WvwCpteW1WfXw8EIgwYHaT3v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings 2 - The Tribes (ESP) (Unknown) (Proto)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "327 KB",
    link1: "https://drive.google.com/file/d/13PLR_I0CIwLbsq-tsmdIYz9NMDgbvV5a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Line of Fire (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1v9HZl7kC2xjt1Nfm2Q68Vrr6PfRKJNJK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Line of Fire (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1Wcuezlas8JhwbRpuCVkm50RCfFHcI3VJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/15NSSzO9AAMLdpO04QQTdXkHVVXyXc243/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lord of Sword (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1IvtQaPTx_w1vijyLKEKk_Q8rMwucSahK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lord of Sword (Taiwan) (Ja) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1Wgju62926Z_JXEWIuF4lTmp1dLiXnwRK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lord of the Sword (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1UpblrQXqND8TNSoP0gLceoJhkjqZTW_U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lord of the Sword (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1p2mZhhxnAVGITZztX7agz_vayw_YIjN9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loretta no Shouzou - Sherlock Holmes (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1UNZFciI-JL0WcJbhwORSkHXENUw0IlC6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lucky Dime Caper Starring Donald Duck, The (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "168 KB",
    link1: "https://drive.google.com/file/d/1hOEVdneSvzBrXXX-U_1-BaNOopzbJ6lJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MSX Soccer (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1LvB44hs5fEiRFqynFNhmgBLzbotzX4lf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Machine Gun Joe (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1ltz3-efeFtPPkYLsvL4m2ZyowzPRI6AL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Sengoku Jidai (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1A_ZL2pU8ugtOyftKGlXapQdLoRf2fnLk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Makai Retsuden (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1ARQ-pkPywG-nLLc_digREtRpfXcI8Tc_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maou Golvellius (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1tfdyXg4vadpGNdvlLwHIR0JruqGfBOLQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marble Madness (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/1oHgX2hBWRj87yqtK5OcmrugulnpfWx1F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marble Madness (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/1HewDhSnedqyeH3HUnDRH5oDaGXWPbix8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marksman Shooting & Trap Shooting & Safari Hunt (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1T9pDslwbRQs4BSn1VBKuOuvxSnla2rBr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marksman Shooting & Trap Shooting & Safari Hunt (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1-ka2uO9JkBkJhteXFu2haeVLV-ik1BVv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marksman Shooting & Trap Shooting (USA, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "33 KB",
    link1: "https://drive.google.com/file/d/1EP74CaUJ8mGtxWuvIHcgf9dzT7oukxEs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Master of Darkness (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1XGOjLbQq-nLOlweD9yKwrUxUHJ-c3Ey-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Master of Darkness (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/1J0ZJS7iYTZzy19r30CoPJVGodGU84_Va/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Masters of Combat (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/16RhXn_jZ0PYGClt90tO_0iIKjhwnMwX8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Masters of Combat (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1CT5azHlH2TAaPSFrwvJx-MvGyG64p1Xu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maze Hunter 3-D (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1lvUU8AVWB0PWNcD_IvN5moTcF4SwBC75/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maze Hunter 3-D (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1JVYsOboISoh9TFGs-5JRccD4arDIAQfN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maze Walker (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1QatjF48thDlht3qEoEwZHAmZMKobiekZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maze Walker (Japan) (En) (Sega 3D Classics)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/145IJwLtIYhBIULLh0NrM1hwa--YNklys/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Megumi Rescue (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1Anu9PXxdYNpjpdQ_7a-iSzdOQSYUcJ90/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Megumi Rescue (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1x-U_25HXNxcZnnMhL4Lf170AVtYPM1qh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Memoria Master (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "20 KB",
    link1: "https://drive.google.com/file/d/1BNR0mUQgdQdpC-BPwmFZGLTGWKd2bJXf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mercs (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/1gQR0l6tYwGea9LURpHjGxMJlJKFv7llX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mercs (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "218 KB",
    link1: "https://drive.google.com/file/d/11qFLdCDR3aAaL0Ygrhoo9L0Xsi9h5JDD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Michael Jackson's Moonwalker (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1WPrtCeOVu8-JraueDS4ZjnqO0pfDuCSc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Michael Jackson's Moonwalker (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1Jv9SpNbvWOS7YoQq3oX0TEIroq9t8ZX5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mick & Mack as The Global Gladiators (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "150 KB",
    link1: "https://drive.google.com/file/d/1-jKnPRp0WFG-a1HvPQPj8gO_HyEL-mK4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey Mouse - Legend of Illusion (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1NAm2qhz43GXk-paTEpshiM-_WJUtXLT5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Ultimate Challenge (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1rSVxqgQBgPaY9dFturOM7hN8OKMgio4P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Machines (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1O0PzKKLl_W-nQKUd2GaKriO4Yx5GwV-2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Machines (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "151 KB",
    link1: "https://drive.google.com/file/d/1kJSanZ-eVikYBV58ukchV_h7OciXJ815/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Xevious, The (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "14 KB",
    link1: "https://drive.google.com/file/d/1hJ-551L4ttP22uIYftg1bzrlKgXFeVR2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mina Terrestre (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1C-O4U9anzEZxJuFupWw-La5_NC5DOpmo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Minerador (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1kEurSktpPVizEI8m3eGKah73UyfiNH_b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Miracle Warriors - Seal of The Dark Lord (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1c_G-poi0B3UG1yEgO9jV1QO4nDf51fy-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Miracle Warriors - Seal of the Dark Lord (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1K7ujO1ecLz7AQi1G3zgVtduLZ0uaNCZO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Missile Defense 3-D (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1c1fGRRzhN1hg4GXkLbpEo-ukMw19kEml/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Missile Defense 3-D (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1AZE_5VVnn_UF6Oz-hKn-d2a4fAPmd-JH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Missile Defense 3-D (USA, Europe, Brazil) (En) (Sample)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/11pybwcAoRiO2rfzq-9Y0lUx69kRu-3X0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monica no Castelo do Dragao (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "130 KB",
    link1: "https://drive.google.com/file/d/1T46LQLMMtv4BaGm4xpMxhVxHDOhR9TIa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1oTvvKuBSdRCidXaNTutsRDQfPWiaw5HC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1PPCkBtb4I6jdyNuOEZGeU6DyfLblwdC9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (USA, Europe) (Rev A)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1-MoOw_N3pWShWEeMmG7kyjM2ijdsZo5z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Montezuma's Revenge Featuring Panama Joe (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/1GrzMU919ID3u7im0PH6JuXuMqhM21jy_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Montezuma's Revenge Featuring Panama Joe (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "49 KB",
    link1: "https://drive.google.com/file/d/11k9OtqXcEzr1g_hkI4aZCqfJLJRZqvjs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mopiranger (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/1cNnO8mcT2GQPnsWW1ShykciDUD_OzV2f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "373 KB",
    link1: "https://drive.google.com/file/d/1_xd0YyeIdjXExj784SxnmdCGa7RTW_Nh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "373 KB",
    link1: "https://drive.google.com/file/d/1f22CPkn0huuh11U2AfRD44xHyr8vhJW6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat 3 (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "264 KB",
    link1: "https://drive.google.com/file/d/1Ah9Q-uwrmqn8FznVMCwZshtw-SbAMM7y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat 3 (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "264 KB",
    link1: "https://drive.google.com/file/d/1sMmQyN9RPEe66BDwcCaQYm4PzF0Ilb-M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/1otUQPHWAbuA6dCAVnhHNWHXx9g8J1Xgq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat II (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/1bYMijKcmGJADcER4zHIYEQ-dYtLwAgrP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1bPNptUk1xk70hNQ6DXQSkiY5W-DZTtiA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "53 KB",
    link1: "https://drive.google.com/file/d/1FBVamlabQBZwnFURDHJEERQRTzqEUfuP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "My Hero (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1t_OcD-HHLdtaw1NdDo0zSktJGqv0ihsp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "My Hero (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1idXI1z7Wua5a4-gZtN5BF-DKJmV39ktl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam (ESP) (E) (Prototype)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "228 KB",
    link1: "https://drive.google.com/file/d/17zTExf91ci58qflmXNZr8YTbX1ZigXb1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nekkyuu Koushien (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1Z4-gxQqipdyNF-UK0NobBCV53ZAO_N3L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nemesis (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1eD82vICyjGNqsPdHda9ew24NR5HymToN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nemesis 2 (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/14-QYxZG_xq7SR0drs7_vqUBH19I1Src-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "New Boggle Boggle 2 (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "11 KB",
    link1: "https://drive.google.com/file/d/1IApmLEUQJ7w7B0vgo9yyQOYlbD7WOwBh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NewZealand Story, The (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1_foiRcSJ1tGVznsoNdgGKVlNoEaftg_2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1Yuj86cDiRJjIar6kMIsDZSwJ_CHgj50E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1t555pdg_na5Q7wYf75ZnWP_kHTaMg1gv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden (ESP) (E) (Beta)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/17_RHEXyboW7eruGGZyaF0bFByB8-pa5C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden (ESP) (EB) (Pikachumanson)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1nBwi7E2D2-5zJyVMT8wGo1-oSdKlV2KB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja Gaiden (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1dS_dYe18pLecnkRduSyRzT3ukdqQPKqM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja, The (Taiwan) (Ja) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1uO2Wtwob0Q-PKZXCPc4oR1mRGzl_dKX9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja, The (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/15HHZjyktWg7OLgt4mwTgGtdioRESkiIG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Northen Ken (Taiwan) (Ja) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "83 KB",
    link1: "https://drive.google.com/file/d/11pkCygk-1iWTMfaz63bwr8aoGXqodoof/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Olympic Gold (Brazil) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1vdVVBef5JkmmxWJHCB969v3wSKqefRDX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Olympic Gold (Europe) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/13aoF0syQ3zkIOZRrdEVwpoggLBhWd-yn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Opa Opa (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1Dket63ssanczDXoQQffi13RDYypkVSVj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Wolf (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1H2hYhFknwUycJRvWiDLfxaMkOH0bat5L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Operation Wolf (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1TBvbhUMC0x9wqcsJ8kyRnzz1EiAnOJYR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ottifants, The (Europe, Brazil) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1Krr680FjXg7lXC4ABaa44F4CL429JJvG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Out Run Europa (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1ihTgD6JZZKbqunxuDkWICJtrdMumt9yz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "OutRun (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/19pKlLBR0vfnKPxQ8c5oEMBxcMwZ3uAbi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "OutRun 3-D (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1N6YkWxiPrdA2WiBqWhF3H-9tZ67dqy46/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "OutRun 3-D (Japan) (En) (Sega 3D Fukkoku Akaibusu)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1wvWcsxeNhDPNVkXumxsMMQUzut2Y98FP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "OutRun Europa (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1Mhi3e4m4d06_5OqtLbDySYtq6kVAE1mE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "PGA Tour Golf (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1IWPAfJH_DraFfZiBeb3RFYZgOFc68Jfc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Mania (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1Y66jkLCv-GBg-nIffBwc8XJeToMO39rV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Mania (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1MVeFX-KqLcO9kKkfnKCkGBCSq-E7f7ow/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Palhacos (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "28 KB",
    link1: "https://drive.google.com/file/d/1NcWFPOmjXE2hw0OZPKMFrcNb80UIusj_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paper Boy (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/18rtAeO1g7IhF9AqqY6kOVrG83baYVEnx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1bftmcptFvxdeS1qutv5rFCpS8RpF6pOz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "60 KB",
    link1: "https://drive.google.com/file/d/1Dh9UTUPDgD5H0LsGai_DdpawOJ75cvL9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy (USA, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "61 KB",
    link1: "https://drive.google.com/file/d/1hTcdljhnaX3XR_pL3itOqm6s8asqIRiH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Parlour Games (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1S17NhrwWfaaLlNhMy08q3k0B6-HD4ZpC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Parlour Games (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1Ul_19UxgeKMEYC0ypm4GdAYr-hvpDLQM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Penguin Adventure (ESP) (K) (Unl) (Pirate)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/19-RU3TVR2Zt6IGBMwB3MVSqnmUQ4_rJa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Penguin Adventure (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/17IFyQCH2Ny-ahNSmOIanRazyQj6oViwv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Penguin Land (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1NZwJnoeoKzekNkfIh-8elKIwKM81_NDF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Penguin Land (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1JheRkF-Vvmkfy3-WB1qEizqV_ffWshII/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1A8dexXHMqyQKOqSHZcJV8BHtBVay_PZ8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/184sdDGeTPLP9hUrc2A5WSprVHKMrCyzx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star (Japan) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/1R7NZJyOf71ZoAsFbsgFDbCAPzzXD4c4H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "297 KB",
    link1: "https://drive.google.com/file/d/1Be8X3DqKdn9UZtpQttbIyEYhaIqEz1Sv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1isxVgUiUqi_2fq1-i0knS4T09yiSqcQg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star (USA, Europe) (Rev A)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1xyEm6ou4p7Jf1EVwaYywSlr4KjQI9g5N/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star (World) (En) (Sega Ages)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/1zzl1a9MuBuXeg4Wx9pf365jbjrf4daiB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantasy Star (World) (Ja) (Sega Ages)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "334 KB",
    link1: "https://drive.google.com/file/d/1QZ701nHxPbTNk4NXVQjfv2k2plz2a42f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pigu-Wang 7 Hap - Jaemiiss-neun Game Mo-eumjip (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "784 KB",
    link1: "https://drive.google.com/file/d/13O4DSGnCR2sinXvz0bDCDdIpnrMbEEDk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pili Zhan Jing (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1lhiQW79GuAhyAuNK5ff2OB12oWp2fogE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pit-Fighter (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "214 KB",
    link1: "https://drive.google.com/file/d/1Abog607146qL0Y1CtpbHW8enXKdgBpPv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pit-Fighter (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "212 KB",
    link1: "https://drive.google.com/file/d/19JFuXvaiPnGG-IKkGybmPyrSFaw_ZJMQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pooyan (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1XDZnbyGEJFX3kcNBa5hb_Xs3AKMUjD_7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Populous (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/1VYFIsNE8cSohb6PFLo_txNHy7CKzn-Qu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Populous (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/1G6A7YBBdTwtxCk_5031gbyybUMLzcMmc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Poseidon Wars 3-D (ESP) (UEB (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1ITSRR8Gft8bpvDv9kki5PCNuA6ac26Sz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Poseidon Wars 3-D (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1lHMmqG8_YmmIrFqULqsH9GalWuJc2zQz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Boggle Boggle (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1-hLBcE4TQc1GKLjZ0i1n4P8XpfuRGwsr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Strike (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1XxILN5XcRUf61q_3lnpJJ5oyAifWtkpU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Strike (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/14_uNsoiZKP7aindF3Dy9hOwdNkR0x7W0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Strike II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1AnYHcC0rVzk-2mWkmTNhJQZkWzZQEPE-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Strike II (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1txLYZQiNZRqZ9dqAKyP-u1adzlCmEhXl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ppang Gongjang (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "24 KB",
    link1: "https://drive.google.com/file/d/1ygzbH_La3t4CTMPUMhn_EnxR3p05U9IF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Predator 2 (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/17BuW_HLES650pxCa6Z7s9G0iujBT80kY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Predator 2 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/10IpqdZKGuV6XkltMbaYQx33nNmpefyEl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Predator 2 (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "112 KB",
    link1: "https://drive.google.com/file/d/1ckCc2kWvA-Y7fR0ibzWdVbB93wi10u8q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1-WYiIcurb2OKtrI9Wo2MjF7_Qh7llleB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1W6n7w4s5f2IX1rxlLTXCiYniomxuJU8H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1eaxlVpA6EKrUuCQogEjRcnpiqFsXhVGm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Wrestling (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1hBAORUF9SlgE7iTmWcIoL0weEU4ECplx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Wrestling (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1HYZPAy4zWDL6NWtbhuOQQr_RPa16TGRT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Yakyuu, The - Pennant Race (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1NToSxE2jEzVbljoXdTorgLKXyaF6_Xuv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Promocao Especial M. System III Compact (Brazil) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "12 KB",
    link1: "https://drive.google.com/file/d/1-iUO0wll8YaLELKTACderI86FBp7d2mS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psychic World (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1uAj7QK6hJTksV9dZi-yORGeighWzavA0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psychic World (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1AbbkfXEobYITKTkFTzVAzhqh7fFRT9yt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psycho Fox (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1121LFMzhqVckqxsl363ta6ZtyWd2SzIf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Psycho Fox (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/12_bx-wcOFXL3cvYxUxu0ln3jjIPFh2lU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Putt & Putter (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/1g7ZwvpYAz11o2NKljgirWz5pRrqQus0k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Putt & Putter (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "35 KB",
    link1: "https://drive.google.com/file/d/1O4IfHX9mh4lMgTs2SBlyuvH2s-S8LvAA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle Game (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1XsNkU_HBeNz9bqJql_vu_LP6WZBWoKjL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quartet (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/188sgtx_8Fmhal02PYl1ipPLGiXpcgG1F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quartet (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1nJz1IvC-V9aColsEVxJ_UXLjH3DmFmT7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quartet (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1Cgk_8kX6m_4QeNEeX4UPu9L4D8tBC3aJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest for the Shaven Yak Starring Ren Hoek & Stimpy (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "294 KB",
    link1: "https://drive.google.com/file/d/1Ds_oZhcOgWBSHbPHPaDL5uUIDXDWVV3Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest for the Shaven Yak Starring Ren Hoek & Stimpy (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "294 KB",
    link1: "https://drive.google.com/file/d/1AzDyWHhVP6MWeCdJTjD7MFT9vMd3nKJo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1IjDxbt5Ce7QKHSw0kwL5FWUpTJvN6XAc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "191 KB",
    link1: "https://drive.google.com/file/d/1eK6aZ4U9Q85JMIfnVpLQLX8Zbt3RMCdT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/14J4GGbUODfG_V04IWEkYyP8bm8-H7mng/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R.C. Grand Prix (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1jBDT21tNfUaBgphMc0Dn8EYfh1fObYaG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R.C. Grand Prix (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1sKFEm87xrlFO4jRgzUg7gMiTbeOyWCAS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rainbow Islands (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "97 KB",
    link1: "https://drive.google.com/file/d/1LQz2LV3hHjDnBYIXDvNYts70_DgjPwzQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rainbow Islands (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "97 KB",
    link1: "https://drive.google.com/file/d/1dq86TIHlRXRaXAc7HRsE3wloPx0qHd3T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rainbow Islands - Story of the Bubble Bobble 2 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "97 KB",
    link1: "https://drive.google.com/file/d/1xY1M5_gG1uEFUFH0iFaJrRzOuGTuak-H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rambo - First Blood Part II (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1zDqi2NfyyIUOu8uMgnuyAQwuhID8Zh0q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rambo - First Blood Part II (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "74 KB",
    link1: "https://drive.google.com/file/d/1Jd7U8acuMDE_Kj8jo2saWNQMxuK3i0Pl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rambo III (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "120 KB",
    link1: "https://drive.google.com/file/d/1eh8fqch3vXsX4oeEBySwiU4C79IAddJk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampage (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/19cucLJca95qbQ_c5Q8rfalNCeF9JLXyD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampage (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1DRPQ2ro_ZVCw5chT6pWVrIXOxkGSof8r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampart (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1FZThHAdSdruqA7KbRK9UYVzeJ23wTYzD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rastan (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1-XXGMBe0PGA-ilAxVFRxq4lKoX678MvL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rastan (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1F8Rd-0WSFNPvj-mHO5zS4B5p94k7hdpC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Reggie Jackson Baseball (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1NxcGOT6rBmkTtIQ4P_xKivu2U5z6EKkX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Renegade (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1NI-22la1zGDgMegMKQbjXYDxLKxUqrxl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Renegade (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1nks1FIYicHSnOc4pVQFNU1rEhfYTg4J6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rescue Mission (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1XsSuX-pqJ3I6fDa23W1EHWpUd9SE3cQL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rescue Mission (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1D0Iga-FQTdV8JxGNSkEijY4bUUlzDYBA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Fighter (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/10B7RII8U7QqdnIyC8BmqN5OORUN9Dfmo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Rash (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "294 KB",
    link1: "https://drive.google.com/file/d/1RZdJN8TyeLnkHpLowoA4MfRdPWejwmOD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Rash (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "294 KB",
    link1: "https://drive.google.com/file/d/1EXtt63k1Eui9N_A3nUOhOhhAntCRoh4q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop 3 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1hpMiO1tGFWDQx_04iii7wjkBk3gIK017/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop 3 (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1O5c6w9-O4jqgkj24u-Fducndy92TiquD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RoboCop Versus The Terminator (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/1_TuEe_qKnOaFkReEUFNv_OVLjr5j_UHX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robocop VS. Terminator (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/1cKFqdXeHjJPZvt7oBug9q6E1UQQE4F5g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocky (ESP) (W)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1go0mrDg4h-ooGudC-2VBcnZEBpQzxNUs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocky (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1GFvmqqij3J0iw3SW3Dpbd63kdv3whlSt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Running Battle (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "113 KB",
    link1: "https://drive.google.com/file/d/1jE-hIlFQDlPfxufOp5olNepfJ4ZfJ7Lg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Running Battle (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "113 KB",
    link1: "https://drive.google.com/file/d/1vbVuSQHIy9CNRYOzsY3arDFGCI0j2pUH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SDI (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/196EA0DdmrMPOqV7VL1qmVKYslUs2HqiB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sagaia (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1oX9BfVZuEDxmsOdleD1FpOKZC7wZxXjv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sagaia (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "133 KB",
    link1: "https://drive.google.com/file/d/1G7XvKAr0yO5QQD2QLqwKh3uQk90V_lr8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sagak-ui Bimil (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1VNb3fGjPKupu7d4ytqHeV-adRZFCjHX3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Samgukji III - Cheonha Jaengpae (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "593 KB",
    link1: "https://drive.google.com/file/d/1c1SrEYHNNrkU0zwaMSUHEj-SYCwP1tma/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sapo Xule - O Mestre do Kung Fu (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1I5eQ9aBAyYnY8C7BcCDG6raM9Z5emEwf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sapo Xule - S.O.S. Lagoa Poluida (Brazil, Portugal) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1DHwU42bUkpmKEuidl0cujgn6z5wQSKeD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sapo Xule vs. Os Invasores do Brejo (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/19UES-k337nVrIH0UeYfkQbwHiegC8xx8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Satellite 7 (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1SsbQD4-GW7RNmOJ78tKgJQALmDneQLpM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Satellite 7 (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1G88L_Ov1pssk7Ff2shGDcGLXj-2zMiKt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Schtroumpfs Autour du Monde, Les (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1YrT2ABmwtdfF3Gh7PfsAB75kSGeY0nyS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scramble Spirits (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1cg6yCaBH6OVhnu0onchSHEei7WuSDlqd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scramble Spirits (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "121 KB",
    link1: "https://drive.google.com/file/d/1Hs0_kuuERJ-ARnFjvOOaK2n-toTXL82A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scramble Spirits (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1NK8UBPJB8dygCqegsePWRxrd2ROD-xyH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret Command (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "72 KB",
    link1: "https://drive.google.com/file/d/1r3Z2zTNI_1VlACDjbZsDr2wS8WwJXlIV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret Command (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "72 KB",
    link1: "https://drive.google.com/file/d/1H42k_rveN-a5XT8GBkAA6HmIULZatGAn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Secret Command (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "72 KB",
    link1: "https://drive.google.com/file/d/1FDaaRFcOprbnftrX4-x4fmu1xSo-ezWL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sega Chess (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/1d3Cro6LaAJee5BLFtsyz9fyydsjI4JF8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sega Chess (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/1uqiDqjXlbYbMJOC7hV0bauCfZ4lLpzU8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sega World Tournament Golf (ESP) (EBK)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/1kJT9XotZGlvk99cwj5PN7Em8l5_tVEfp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sega World Tournament Golf (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/1UJ6Ar_WVXp8GiYWlEZf3DGdB2RGxQWG9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Seishun Scandal (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1he4uAw7m6AbOaDQKQEOL1FXIffR6skt7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Senha (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1S8wPmqR5tBOccFltbgjTrhx1v2b5B8B7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sensible Soccer (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1z945ShDrp98hvx6ydrhrXpy5erKEgL99/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sensible Soccer (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1-2fTZfwnLhOOm4FWm8603ZjZCbDZTMMF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow Dancer (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1LLP51szE_NuFJ9z7DQdZrgBz8Jp-Y3ur/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow Dancer - The Secret of Shinobi (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1rLa-glP4okcTAzy_gN-dlbGRgZqGuhtP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow of the Beast (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1PiacBOyiY1QMTBmg5iiqxiysdiQhqmAv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow of the Beast (ESP) (EB) (Rod Merida)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1YzquQv-gqstroBk0_MnZloK3G67Yje8p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow of the Beast (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1lG1WA7WIbrL3le8jEEckSnqB9PK46OuH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadow of the Beast (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "134 KB",
    link1: "https://drive.google.com/file/d/1qUB2-rGui8izTP9RX4QJEEiqBGbIUGY1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1MxBbstbMa-6OLNJ7lHmRKDRddYQoMzW5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "71 KB",
    link1: "https://drive.google.com/file/d/1giZSvgbv9aaUlPUME5wAbxiKymBbOfO2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinobi (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "131 KB",
    link1: "https://drive.google.com/file/d/1LkzyjITLO99uunO4dqtqIgI2onX_OnhT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinobi (Japan, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "131 KB",
    link1: "https://drive.google.com/file/d/1Ixds2Jp5uuNiGYkXxteuAM980-Kd6bhj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shinobi (USA, Europe, Brazil) (En) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "131 KB",
    link1: "https://drive.google.com/file/d/1wMgxB3tipLErVRx4CJeRqZubI004Ssl7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shooting Gallery  (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1V4i_yBnibzd5ofsMI0EioOsBxJ5WceLr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shooting Gallery (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1pGBRbWe4_sdYAVg7VIX-nlhxqzAhoGT6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Simpsons, The - Bart vs. The Space Mutants (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1d9_-Cbk0TRdL5Nk0QNKspASJURAXLyeo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Simpsons, The - Bart vs. The World (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "165 KB",
    link1: "https://drive.google.com/file/d/1j280Gd-DSVF6ehXhTDKofj632wMpLWTx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sitio do Picapau Amarelo (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1BGsRkCH_dZ1SQDyERyrB1JOgbzVwaQGs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sky Fighter (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "19 KB",
    link1: "https://drive.google.com/file/d/15C1quIS9g6Hqm8hxV5-5GN0t16qpeDMS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sky Jaguar (Korea) (En) (HiCom) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/19rGwpqRrO3tWu0Md21sbq0p4uZ8EBgju/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sky Jaguar (Korea) (En) (Samsung) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/1LbFPEY2wxLz1bbQddLATenTc3-uWH0Gi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slap Shot (ESP) (UB) (V1.2) ",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1-bJz4jQIbfJvB_V0CkHo1lG2BZ8qfr56/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slap Shot (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/199LKn3x8vE4n41_57zeyFQy11EvaaQvE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slap Shot (Europe) (Sample)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1zr-HcQhaWNyIC3fXuaaK8XPuKny-pMHE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Slap Shot (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/1pVQqsakRpXLny1-Nwk9VT4vceX6IaH0V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smurfs, The (Europe, Brazil) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "132 KB",
    link1: "https://drive.google.com/file/d/1KZLAm-Tv-CFYdRYrXTVN8IL9wkrtItnL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Solomon no Kagi - Oujo Rihita no Namida (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/11S8Ydc0MCmbQ6Y_mVQUaG4LsC5Rr-i_m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Solomon no Kagi - Oujo Rihita no Namida (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1UOlxcfQ5TRyqPFrWOQ17DHLK_VUcJ4fv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Blast (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "445 KB",
    link1: "https://drive.google.com/file/d/1VztaVDnsxLTuz_4fBdSdj74TwL1r_csI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Chaos (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "205 KB",
    link1: "https://drive.google.com/file/d/1-7RHTO6_l-uaLbaYxIZbAdTMLo3zM9rV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Chaos (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "205 KB",
    link1: "https://drive.google.com/file/d/1cVllE3V3n0XNGlA8PKNOfzH-wKSRCHsx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic Spinball (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "229 KB",
    link1: "https://drive.google.com/file/d/1FEyJSnumQkT99xVkcnJQpwMGqORBMFHC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog (ESP) (UEB) (Edwin Osorio)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/16Ggm6dPPm6j7shODChc0N81GFcAC6cRz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1now9TDv6YFkvG9NnetiRBX1aYZL96Rfs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog 2  (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "213 KB",
    link1: "https://drive.google.com/file/d/1UtcyAMjlU52TZDdmyMXfeOZnJqDiBpwz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog 2 (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "214 KB",
    link1: "https://drive.google.com/file/d/12w4vwLGbBD-5pwFbujORqhv4YWA7lb9l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic The Hedgehog 2 (Europe, Brazil) (En) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "213 KB",
    link1: "https://drive.google.com/file/d/1ne6IBYEcmNuTrMbU8gQg_v6v1RDJphvI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sonic the Hedgehog (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1LNe8XJAZ_syYt37O5wEvOvtjGfgMdWwI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Gun (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1U37v0KOkPxicZl32Tf9tKNw5I9WFOmYZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Gun (ESP) (E) (Rod Merida)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/11XBaa19NxFJ5xmAEGzLSJFZh5o2vh6KU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Gun (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1UAcMwaVGrNMh2bgeDSyXphM5oHE27GAv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (ESP) (JU)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "164 KB",
    link1: "https://drive.google.com/file/d/1lxngF0TkLn_LTe-FQJmBDcUZVirzP3pu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "164 KB",
    link1: "https://drive.google.com/file/d/1EleoP5ZX2C0Y9d3qlVibSiyvX2iCam7a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier (Japan, USA) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "164 KB",
    link1: "https://drive.google.com/file/d/173kybSZGHXcHKlLIDGIgArs3I9GSXHF4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier 3-D (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/17uJ-D1Q0pYyE8bD8PbjX06gJs0-QFs6q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Harrier 3D (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1pmRa7Ibg3wzuGit2GWOPyVX6BGPqO73c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Special Criminal Investigation (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1M60Nfqj42uqLHO-GKP1K-F5WovbjHaFX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Special Criminal Investigation (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "115 KB",
    link1: "https://drive.google.com/file/d/1dYCSUwOmXuw87GLGmjJ0dT--j-jywcd5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball (ESP) (E) (Virgin)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1jwspfKIMkHNJ0MMFPjTUW8x0fu-T3OUA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1QSGc2sPDSx_HxGaz7iWkRSLQnlqODOeu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball (Europe) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1nH2McBMrwXSi2SQS4BFC98MsPk4xX4R5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball (World) (Evercade)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/14hBVHFV5u1TIriKgaOrHYZFs7d-YK9bn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball 2 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1ZJLxUYLf-X9A5cv4p5XcQcsAc8ty9cTZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedball 2 (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1E06ZfVT9A7qT1rTnVmmZbXoAo5LO9CM8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SpellCaster (ESP) (UE) (Jacki)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "293 KB",
    link1: "https://drive.google.com/file/d/1ceDrO8vpABfoBOa5X5Jv91CUEpClIQvO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SpellCaster (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "292 KB",
    link1: "https://drive.google.com/file/d/1nZRZuysGyhoXI5Cl3BsEQBaoZHRPNNOI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/10rm1gNFtZmAiqXHwqbc7n1rMXz_AL5iZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man - Return of the Sinister Six (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "150 KB",
    link1: "https://drive.google.com/file/d/1rRz-DQT5ZUhzkY8Pf4pvaS80N62p5Eog/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-man vs. the Kingpin (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1nspoiQGiiXitNw-fR87IIWz8v5_5AJQh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sports Pad Football (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1GYvf4S3AIo_Kd2oO-hSTAn-6dFHgICTm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sports Pad Soccer (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1CuusTN5F8aSzpHf-JfHhEE78-VTGS5bx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy vs Spy (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/133otPPhF8VSXi3iD0f263ldUp6edJ8F4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy vs Spy (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1k8A7CIdNbSLSk1vZd3_sCHzeX07rU_9A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy vs Spy (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1P3cqosnk-APnFLm9aT6aPsmT_TBHERV7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy vs. Spy (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1zBxvXeM2DBQxE9mwXrbGOL0KAjN8WYs0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "282 KB",
    link1: "https://drive.google.com/file/d/1syG1WlZGxk5fHWlTD1Evy8GuO-qBYR5L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter II' (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/1WG24da8gb8kS4uU7V8-tsKA9s7h1G9-Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Master (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/1pkUAhYCJpyXuPw9y0YIClwP28MQU0vpr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Streets of Rage (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "206 KB",
    link1: "https://drive.google.com/file/d/1eijg-2VfCs9EVydznGESUv6aljkWqdYJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Streets of Rage (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "206 KB",
    link1: "https://drive.google.com/file/d/1uAet-mb6y0aQo2e_JkRS2hFQUbOQ24Ww/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Streets of Rage II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "251 KB",
    link1: "https://drive.google.com/file/d/1cVg51g7AWvcRg4r1UXmgwPSUs2znYg79/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Streets of Rage II (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "251 KB",
    link1: "https://drive.google.com/file/d/1BY3Loqiz_8DTvpFsTdIBy2dRS6BkIhUR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1PPRNvQCjDOUcNeO6N5ClQtQJc_Qn8gg7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1gFOxeEi-xVFV8k8ZoyyQnzkmxxybZgJJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider (USA, Europe, Brazil) (En) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "32 KB",
    link1: "https://drive.google.com/file/d/1nfhdx_exz1Bbhrctr55CScHn8D2yl3bE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider 2 (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/15DtCIgNPU5gCXbQRPo_Olat5BvsZe5YP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider II (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1QIi11d3FD6cZ68ejfdjS91vAoWO6ivCq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Strider, The (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/1-WVlXAgPTzBOXbdJTtgR4tpp75zIwd7M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Submarine Attack (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1WNJzUiJ1T6-IN_euT_AjKTvNmWg_9Yem/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Submarine Attack (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1s75FPSm_uzl2wq55Ql8c7Nmz4Qi9qt0N/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Submarine Attack (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1TWimEupeSUzvAy63Uw0ZOq9F_1OdVWR2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sudoku (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "56 KB",
    link1: "https://drive.google.com/file/d/12I33o3rQiWVCZCbPcYfYmk2MduoS03tG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Suho Jeonsa (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "120 KB",
    link1: "https://drive.google.com/file/d/1ohClXw7rdPt6UrPdethM190jNAfw0V24/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sukeban Deka II - Shoujo Tekkamen Densetsu (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1g1UhPB00PgGaYJli1udr4IzcM8U5dd2m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sukeban Deka II - Shoujo Tekkamen Densetsu (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1f4X_HP-2MPcH5nOnthyxo4idhBsNBUyF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Summer Games (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1VBLgN0kZy4Pf3sGXHN6ccKGXbSoTdc98/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Summer Games ~ Jogos Olimpicos (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1_MBlFImRqzmfIKOiKOxq0PCmOOBfLDlk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Arkanoid (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1fP98h5tf1KdNhFyASgSBidEGHiIJhEom/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Basketball (USA) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1oE2yk7ezpEB1Jy72x-dKJIsq-1uL94h7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bioman I (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "34 KB",
    link1: "https://drive.google.com/file/d/1a3IIw_NYpiYlDjZwxTDM3aYgkLRdAG5S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Boy 4  (ESP) (K) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1lwG2b1BmroiXwYV4N6nNh_7zEskx_mvB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Boy 4 (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/15Ml4kFHZvSy8f8eyBJHjcmfsZMCh6LnT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Boy I (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1H3z50HRpIVfHR2sFVmrYF_EQc2OYpNm7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Boy II (ESP) (K) (Pirate)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1dCU8AUnbxruoOO2fSsah0NF160YDibsq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Boy II (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1n-flPOOPuvAYya_bXP9weHpYQEFcsiWG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Boy III (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "41 KB",
    link1: "https://drive.google.com/file/d/1IGN47qI5QdP-KZl5T7VjTlrjHNTQ9Gs9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bubble Bobble (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1CQ75EN5SMNDmD8xQUEzOXycgbjKkXLpe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Columns & Tetris (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "12 KB",
    link1: "https://drive.google.com/file/d/1wMVTbz_EjdmxGJ2zym3kwwayOHywWTn4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Futebol II (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1-xcFtBpPKQwh2hJmSyV-YxIoEA8NVg_G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Game 150 (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "1244 KB",
    link1: "https://drive.google.com/file/d/1s2xANuIWHm9fjs3AvJt-O6L2W1Xy2NRG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Game 180 (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "635 KB",
    link1: "https://drive.google.com/file/d/1mtsfjZVGtLjhxgUcqz1QpOZ7dTyGfCb5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Game 45 (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "352 KB",
    link1: "https://drive.google.com/file/d/1ISum9bitErLpLkuwZueNokFh_FMQopPH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Game 52 Hap (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "655 KB",
    link1: "https://drive.google.com/file/d/1vVKbxMw9aHif3dCaSBKNZrK2jYeO40nE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Game World 30 Hap (Korea) (v1.0) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "345 KB",
    link1: "https://drive.google.com/file/d/1r2DnNH3PKYCnOMDWalfjwlqJXmwqGrXJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Game World 30 Hap (Korea) (v1.1) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "344 KB",
    link1: "https://drive.google.com/file/d/18CnbUb2WoL1bE_2WF7Ohs5RR9uFyy2E0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Game World 75 Hap (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "640 KB",
    link1: "https://drive.google.com/file/d/1cy4YTBGA8adE9mANMLYYhGuoDY7oK_Td/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Kick Off (Europe, Brazil) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1M9yD2BOrYMYvVxHM_-V31YoDuQ26-_dr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Monaco GP (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1qbhhRo2HEDM0DiGROKCg4VkI1xRL3EsM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Monaco GP (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1GbVcEl3-7kprLPXZUAPooTaHgH_U7ITj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Monaco GP (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1MZrzTLdzionio8eNvKQM3VGKWewukvri/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Multi Game - Super 125 in 1 (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "1262 KB",
    link1: "https://drive.google.com/file/d/12_83g2L3BuIzXKODKtAJ4_yuyS0t1b-D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Multi Game - Super 75 in 1 (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "641 KB",
    link1: "https://drive.google.com/file/d/14CcljOPS1zJpsdyaNt_2OkLGw1frE7Ih/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Off Road (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1ulSAcEgsCzX4jeb9uDiDn3MCrlaBlxga/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Off Road (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "62 KB",
    link1: "https://drive.google.com/file/d/1GIUmuerdK1pWTMOwObjTYjgT8ePYVaCu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Penguin (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/19UtY1yeW5hfmSRoo0I-JtumzmEk_E7UX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Racing (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "107 KB",
    link1: "https://drive.google.com/file/d/13ySIZOwqoklDlsgZQWnSF8VUfSE5tsfw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Racing (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "107 KB",
    link1: "https://drive.google.com/file/d/1n2fhjbhZdZdkWahzhxwjPCN-TpHdwj9p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Smash T.V. (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1E1GBRaYRBD8kAcjVDX6OmCMODADdga2e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Smash TV (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "100 KB",
    link1: "https://drive.google.com/file/d/1reK8qdm4SxpOPx20WZyE0zMHk4YANGI4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Space Invaders (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "134 KB",
    link1: "https://drive.google.com/file/d/1I2e9Oik8iB2eW7o6Ea0tL70lnRNU6wb6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Space Invaders (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "134 KB",
    link1: "https://drive.google.com/file/d/19xRLnCGGOOHavfMoaa2AfoGVqchOkVBZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Tennis (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1VwaSkF0NcAb3y0mmdXL2FuhHyM5DySOr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Tetris (ESP) (K) (Pirate)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1I8ZimbS6zZGDhIiywXr7AjL-ksRoV2OR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Tetris (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1vPRE45A-oKXGh4PCYBmk6imV0kTngA-n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Wonder Boy - Monster World (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1SxG1HQbh0SucY2yasl6cvdHtm9ttbCmK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Superman - The Man of Steel (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/168rXCqgmGXD_rbLNSG2w3PouZGUNPQ5Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Superman - The Man of Steel (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1p1spuCBcR_5mjPVohzNW1SaEj9dCA1Wk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "T2 - The Arcade Game (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "251 KB",
    link1: "https://drive.google.com/file/d/1Jz9kXo3IrgfCix5lqPxEqIkN3ZWuB7kO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "T2 - The Arcade Game (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "251 KB",
    link1: "https://drive.google.com/file/d/1BESaTbIbP76ZWyQApQzV9RPSTsUYqoSE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taito Chase H.Q. (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/1_KpjfvULS_zbON98nO93_3L7SICPMHou/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taito Chase H.Q. (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/17bP4GgECqcT1CFT36Bjv9yQQ8vIJrZsP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tangram (Brazil) (Mega Drive 4)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "26 KB",
    link1: "https://drive.google.com/file/d/17jSpzIV5FzxCI5DqGmjEvSLJOxIIExQs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tank Battalion (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "18 KB",
    link1: "https://drive.google.com/file/d/1VoDrtW5mL0vRTWGhEXN7qPPp2szOWgEY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taz in Escape from Mars (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "292 KB",
    link1: "https://drive.google.com/file/d/18KIdrzoy--4qgUybnWylzp5FkZ3tzwwB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taz-Mania (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "101 KB",
    link1: "https://drive.google.com/file/d/1MREeXVF5toewzPIGr5D8nwBI9qEz3T56/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taz-Mania (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "101 KB",
    link1: "https://drive.google.com/file/d/1lQ1Ztqxn34anzOQXy-UOlExJNZ9qK65H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tecmo World Cup '93 (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1hd5yC15_eyBnE3q3lTB0ffCFPzoWNCvT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tecmo World Cup '93 (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1a6ZGGZJaMl0Y5W_RpE2Jmeyxry0HsQxd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teddy Boy (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1q1G0vDGY2_MUd85ocrhLYshFAmDBMbMV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teddy Boy (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1FJsDMXzbRMD2GNt2l_mQx6EDhx8uUbcq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Teddy Boy Blues (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1kI3sLKlk8EpUGpgD52moTdGeh7QZn4hQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tennis Ace (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1Z1WGOQ0yJOwaR6kTCYVSxtLIZDdCAEeB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tennis Ace (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1jYvye78B8ZfTN2e8h7bDUuGqoEex0lQ5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tensai Bakabon (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1ZhSg6MG0fwLvuhuvMsc1hroV72iaxKhS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terminator 2 - Judgment Day (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/18F3Xl8MMw-_C4I5TghWZqWgr39zDOXdM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terminator 2 - Judgment Day (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1lp7OArAXFuVa63uc9HZ59QTMnsgxaIvz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terminator, The (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1VNsnvg0ha9ZyW5PJ0o_oEuwIo-AoLs-X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Terminator, The (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1H3w08_DTQG62XsK_vXoym-kvBXotK0KO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Addams Family (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1MPw-9hd0DxZxwlW3-6AP7guVYSSBE_uP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Flash (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/1KY4NvCkhGXuNzH7IlMU-q08kscUFcsqY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Incredible Crash Dummies (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/1Fmh9Sye-CX-ssSf4Yhez_7IAsLGzM7j8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Incredible Hulk (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/13mSROHZzHelR7paUb4LkQS5iKEGaDW3-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Incredible Hulk (ESP) (EB) (Wave-2.0)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "362 KB",
    link1: "https://drive.google.com/file/d/1hZX-r77vrIMUsln0GZR8DzJVqU7Npb6j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Jungle_Book (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1J9Cx6mL65xQ4aqvctx06so4fS69s5u-e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Lion King (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/1jGAtySim-gofpHzgPQTbL7kiP0NskFOB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Lucky Dime Caper Starring Donald Duck (ESP) (EB) (2.0)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "168 KB",
    link1: "https://drive.google.com/file/d/1jrk1dsrzq53ecgoCv2CK_A-ByYXXi9AD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The New Zealand Story (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1yx5eK-IOzl36YgybxQ3wNw44q3mmTa7x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Ninja (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1jRNxLxX8hEygai_VanNYBdEG0HjHmfbM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Simpsons - Bart vs. the Space Mutants (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1DbRfs63KEsNLKPr1JzEt1QtTB6qg9qmT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Simpsons - Bart vs. the World (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "165 KB",
    link1: "https://drive.google.com/file/d/1HDVZcZlj_d6HTziLombH-8XeqIWd0WFd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Terminator (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1lXedDgcBZ_LARPEZyobtPnzo80ZhTn9Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Three Dragon Story (ESP) (K)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1JbJGnV12juPaZnw8RyYuT5AqzyVh1iXD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Three Dragon Story, The (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1-zoO3zZksh22j0o6o4HA9HXSKbj5dx0B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Blade (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1LrU9L2coL0qLO7pV-gcZc9_dzJdDcTAy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Blade (Taiwan) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/1gwLkgAKU5ajG6rH86cwJhN72B6vKCcN3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunder Blade (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1EhEhysTA8ExeZ773FHcw8AvriZWtnxSa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Soldiers (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1t4D0d1fWF2FSJdXXpBHMkpmjZxYpJ1GG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Time Soldiers (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1UPxloq19_Pr_ZtKhz4Fk02Ual4SeevJi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry - The Movie (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/14YPD1TsNH_J_imlR3i2HRfy1ci0DEged/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry - The Movie (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1UtXxAuuwrjn8JUBS0PmyZ56WcmYZsjA-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toto World 3 (ESP) (K)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/16nDwdZX4XzKooZQC8u-KSf_luT9tooiX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toto World 3 (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "92 KB",
    link1: "https://drive.google.com/file/d/11fW2F7Sr7k4e2oTY2fJH-xlQAqynpqyd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TransBot (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1PGr1rnnhc8QE4JJjK_mGzCYOyljGb1e_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TransBot (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1ED0gn5jETsZH3KEwWOg1UVvgExUNwibg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trivial Pursuit - Genus Edition (Europe) (En,Fr,De,Es)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "321 KB",
    link1: "https://drive.google.com/file/d/18TUrCJET26onRMK-vDb3yx6qACOz3lNO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ttoriui Moheom (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1yZWK5eumj7l-6ms6zcQ8IqHdGRVBFuuJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turma da Monica em - O Resgate (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1NWEuOtdeBLMQH4KajqBS-AXI8ckNM504/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultima IV - Quest of the Avatar (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "235 KB",
    link1: "https://drive.google.com/file/d/1Snz_Y2HMQ14ij_uVm2_qglq2XDBRBSTS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultimate Soccer (Europe, Brazil) (En,Fr,De,Es,It)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "131 KB",
    link1: "https://drive.google.com/file/d/1QisM48ggsJZ1VxN-efMr_sB1hFlGGEzJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vampire (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1pus8eP_l-DoI-lkQzJqseRTHZ8DiTkKa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante (ESP) (UEB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1-1vCf4lIJhw-A_w7Mc4c7leKahzj0U8l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante (ESP) (UEB) (Wave 2.0)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1E17pzsloQwtjOaa4ekeLqBZ0RRWHRQfb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1eCjhm2OzJ5OIu724I2KLDUjxqC29kBkB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Virtua Fighter Animation (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "420 KB",
    link1: "https://drive.google.com/file/d/1-p4tnN6zGHLd3xT3IxgjsuCUwFmxnwaR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Virtua Fighter Animation (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "420 KB",
    link1: "https://drive.google.com/file/d/1Dh9UlTHSAoIp8lobCSJkXvUOIrVN8k6j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Wrestlemania - Steel Cage Challenge (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1OU0k54dzhEufgDRM0-mc8O0tJlrcyT2B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Wrestlemania Steel Cage Challenge (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1LKaw_7fxniEmM2iT2rk2G5vt1sos86aj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Walter Payton Football (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/1DSBTQHoX0uUhoiMxflFR11lFknMP-u-q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wanted (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1lwtoVV4CjNNTvhb420DmZOH42h0n8HAo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wanted (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "69 KB",
    link1: "https://drive.google.com/file/d/1dgoswQiK3oG5oxxLFo1aQmN2H4a4CLXj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Where in the World is Carmen Sandiego (Brazil)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1p1G5g94LXjr7i8hXHAva-w8vm_U8S1AN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Where in the World is Carmen Sandiego (USA)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "73 KB",
    link1: "https://drive.google.com/file/d/1ibEsYv1klklGXQCWe06WYYBOIijRRjNP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wimbledon (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1AGCAp1RuBn75uiPjGLvH3awOzDrw-W6d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wimbledon (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "119 KB",
    link1: "https://drive.google.com/file/d/1xBz2tF_w258oIxYvvOjh_AoH-6QWSuco/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wimbledon (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "119 KB",
    link1: "https://drive.google.com/file/d/1_ZDJRvPfVakQyX10r_fpBWJVaQVMdfyP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wimbledon II (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1mtQyPOH26Bi3TSEFqFB5NPH6iABauwKN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wimbledon II (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "140 KB",
    link1: "https://drive.google.com/file/d/1YojynJ2tv3FCiV8XjTYDtcXvA1KbGHhT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winter Olympics (Brazil) (En,Fr,De,Es,It,Pt,Sv,No)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1A7xTGKcjGnI08ws7g_Tb_5QIVnpTPiVD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winter Olympics (Europe) (En,Fr,De,Es,It,Pt,Sv,No)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1IXc5T0de7rN-WUqb8ivn9tOW-efmNGVX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wolf Child  (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1ATPEOOv3tWlprSVXXxL_x-O3cfJIwUsy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wolfchild (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1S_tZ1IXI8Tzidr9fb3lt0Aie-o3Lqcu1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1MCJAb8t8yXCsCAfLj86fEaFvM6RB21by/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy (Japan, Europe) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1k_ulDJ5qHsYmVrCqnV2SPiJaj_p6LO6b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy (USA, Europe, Brazil) (En) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/18czv4MzBGFmZMXuu6ugno4bI8XBoohxy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy III - The Dragon's Trap (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/12v9Bkd5qvFjtaJCVL6dR_s80enr0VasH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy III - The Dragon's Trap (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/15x53V6fRYJsevbALvkk5Sx7u2F6yvIs8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy III - The Dragon's Trap (World) (Digital) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/1cLWjN763VzxMCcv1N22NPxpg7qUimvwT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy in Monster Land (USA, Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1YQg9sIX7unkNk-Fwo55GDG9ym7qSd7UQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy in Monster World (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "186 KB",
    link1: "https://drive.google.com/file/d/1qZOdyv68M-yWykRoRKBkdlL0Ar5dgUkD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy in Monster World (ESP) (E) (Jacki)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "186 KB",
    link1: "https://drive.google.com/file/d/1dqnvWc74T-hSofzefWdg-4NewbYhLGgS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonder Boy in Monster World (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "186 KB",
    link1: "https://drive.google.com/file/d/1gkKlOE_q-gDU4iIarQS7Isrh6iui1O-f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wonsiin (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/1dBlw0LXXZsC1d9b1I_OA15PDAQIVYN7g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Woody Pop (ESP) (J)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1KdVuO_xHpOPnreQSF7Xyf9JpUTMbM_nA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Woody Pop - Shinjinrui no Block Kuzushi (Japan) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/1ZWpnT6Gq5eidx4Fxa5nSrT_bacKeSnZ9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Class Leaderboard (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "139 KB",
    link1: "https://drive.google.com/file/d/1hTFqgjwZaJU8sEOu_Jwwi8AUUQdthOMY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup Italia '90 (ESP) (EB) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1sCcpzjF6Z2cIeXdRMvRHiJk7Vqp1QSx6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup Italia '90 (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/1SZWdtOFIa7PJTRbacN9yyAEe2Wy7EwKq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup Italia '90 (USA) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1QLXa343vDETO-cmnYz08HooUAjdp_L7E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Cup USA 94 (Europe, Brazil) (En,Fr,De,Es,It,Nl,Pt,Sv)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "248 KB",
    link1: "https://drive.google.com/file/d/13m5PtH4zR2Vq1dePzcArg2HgUzd4cMXQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Games (ESP) (EB)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1zz1k4j2M4vxkCmLdhbmypD7loJHgJjml/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Games (Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1zG8qVuO0At79_aLVGXxk009dWkVt4W4C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Grand Prix (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/1-cvMlY7OjyTVHG4sjSkHTGAytpk1jc8H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Grand Prix (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/1L9KrOuIIwvyMtUEEFnwr3HNcLclzZ0Ca/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Grand Prix (USA, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/16Sr7bM2tidEMjO9UpXblW2bBEl-RUsmw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Soccer (ESP) (W)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/116iJM3nzrl-959P_MYztvmfCpJM1_hDu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Soccer (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "57 KB",
    link1: "https://drive.google.com/file/d/1-vRcDlPUGwx3CNHvZ3Qyy7vq_HLwrfir/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Mojo World (Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1ECRJZUXjRd92GSn3twVvcdBHaOFrjYcT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Mojo World (ESP) (B)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/16-J7aYhTVuuAd3i7bxR4VqDRnYC81mul/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenon 2 (ESP) (E) (Image Works)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/19szKlnlEhlEj-TudOCpbvuuxUEGG8YaI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenon 2 - Megablast (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1-1DoBkM-S0f1C7uQkC_mAVHzSTTwF4KX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xenon 2 - Megablast (Europe) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1-RBnlykAOSEuTPxvx4oQxkMxBoohfX2v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xyzolog (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "19 KB",
    link1: "https://drive.google.com/file/d/1eIu4eIFUZUl7fkvbg_0i4OTQkF1Edw3g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ys (Japan)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "172 KB",
    link1: "https://drive.google.com/file/d/1GHBC-shySkCOb9veIkf0FVlNbWhYjnaB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ys - The Vanished Omens (USA, Europe) (Ja) (Demo)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "80 KB",
    link1: "https://drive.google.com/file/d/1p8SDyOrFJPOXGVrOYgiGAbGjnwakxaXs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ys - The Vanished Omens (USA, Europe, Brazil) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "170 KB",
    link1: "https://drive.google.com/file/d/1i3u82opL51DCQmwYgagdhyfRnO9I8vtr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yuyryeong-ui Jip (Korea) (En) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "22 KB",
    link1: "https://drive.google.com/file/d/1ko1zykHJb3KkNG5kXMLQtmzCR017ZYNy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zaxxon 3-D (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1P5Hdqa6j-DgvgmnEfgF7AAJmQiknFCFZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zaxxon 3D (ESP) (UE)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "81 KB",
    link1: "https://drive.google.com/file/d/1yvrdKscaLwNPV63dS0UHg4fr29zyEgMJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zemina Best 25 (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "360 KB",
    link1: "https://drive.google.com/file/d/19td_bxGDGYmoYLmol5ekiyEvWX_CENVt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zemina Best 39 (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/1FORL1qg-MSifSHRV36Vs4Rkj3mYfeJ6f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zemina Best 88 (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "687 KB",
    link1: "https://drive.google.com/file/d/1V0eZhwmwg_Mmp5qnlJsDVdt8DndMtUVL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zemina Rompack - Q-Bert + Sports 3 + Gulkave + Pooyan (Korea) (Unl)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "325 KB",
    link1: "https://drive.google.com/file/d/1o4OBNTesOLUOJV9R-4_Fs1pN3pnJ7HFa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zillion (ESP) (U)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1ZFTZ_kkL1NLjvAW-h0zkc9Qux1WKoJQu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zillion (Europe, Brazil) (En) (Rev 2)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1fSaRTY7gSIErC1mFl6sPPvsmxzMxxRD9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zillion (Japan, Europe) (En)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1kJ0jbCb3FaXtzLwdQEmpYvh0riC7cT26/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zillion (USA, Europe) (Rev 1)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1AYA19_2q3Y0cGxPOWujnJX_frlG_bx5u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zillion II - The Tri Formation (ESP) (W)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1U0DSBpe1K7Wn8Kh32ISYZRfi5cjWtu-Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zillion II - The Tri Formation (World)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/18dFsokyDjq1wdNwW5tyY7iUQhJd3LaLa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zool (ESP) (E)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1wGFtqrxGxSm99aE9pAZzitbnjtTySbvg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zool - Ninja of the 'Nth' Dimension (Europe)",
    image: "https://i.postimg.cc/Gmp6YDP4/Sega-master-system-logo.png",
    size: "137 KB",
    link1: "https://drive.google.com/file/d/1rU2WfKm-mKBznrIevNEa3c8Jug1KdZd8/view?usp=drivesdk",
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
