const roms = [
  {
    name: "007 - The World Is Not Enough (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/007%20-%20The%20World%20Is%20Not%20Enough%20%28USA%2C%20Europe%29.png",
    size: "624 KB",
    link1: "https://drive.google.com/file/d/1Klx0XQiV3dEGtKqyI0Q3ZpCpguUOLMsP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "10-Pin Bowling (USA) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/10-Pin%20Bowling%20%28USA%29%20%28Rumble%20Version%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1crEL0xMLuO_5lp1N-hF2f38XhcXVXwmQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "102 Dalmatas - Cachorros Al Rescate (Spain)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/102%20Dalmatas%20-%20Cachorros%20Al%20Rescate%20%28Spain%29.png",
    size: "320 KB",
    link1: "https://drive.google.com/file/d/1daLgssvzvUHk1csBhPjycx0q9Wmhx-M7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "102 Dalmatians - Puppies to the Rescue (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/102%20Dalmatians%20-%20Puppies%20to%20the%20Rescue%20%28USA%2C%20Europe%29.png",
    size: "319 KB",
    link1: "https://drive.google.com/file/d/1UPlK_0P3n26LKR5q6M5QeSsbuWCjNcKX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "1942 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/1942%20%28USA%2C%20Europe%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/1phhPb9I4GbEX10z_Chslp9fYI6JznfJB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "1942 [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/1942%20%28USA%2C%20Europe%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1MKnjS-ErLoaSpepPBBhepn8xkEXG25I8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "2003 Crash II Advance (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "725 KB",
    link1: "https://drive.google.com/file/d/1_DA_llmaZfjXrzRasD6XNT44wZyGd1bu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "2003 King Lion Advance III (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "965 KB",
    link1: "https://drive.google.com/file/d/1gqgMfSLIwYO8h5g490XCPCFaiOKxXvar/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "2003 Pocket Monster - Carbuncle (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "764 KB",
    link1: "https://drive.google.com/file/d/1xFw_WYfYcp6rFq-VfLeerx-qcmmtqJ3z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3-D Ultra Pinball - Thrillride (USA) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/3-D%20Ultra%20Pinball%20-%20Thrillride%20%28USA%29%20%28Rumble%20Version%29.png",
    size: "209 KB",
    link1: "https://drive.google.com/file/d/11UHAEf17bp4vVJSXXj4oIcQy37TrtjJz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "3d Pocket Pool (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/3D%20Pocket%20Pool%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "737 KB",
    link1: "https://drive.google.com/file/d/1t7_tLLDsQO4o0q6MQobVOU3kp887IZhP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "4x4 World Trophy (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/4x4%20World%20Trophy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28GB%20Compatible%29.png",
    size: "593 KB",
    link1: "https://drive.google.com/file/d/107_jCXJZJNVYahLpupJfgKIyl9LcAh7g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "720 Degrees (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/720%20Degrees%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "152 KB",
    link1: "https://drive.google.com/file/d/1SwD46dF2bQczuX9jl_rgtEfhijmf0f5q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Action Man - Search for Base X (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Action%20Man%20-%20Search%20for%20Base%20X%20%28USA%2C%20Europe%29.png",
    size: "442 KB",
    link1: "https://drive.google.com/file/d/1LMO7A3k7C8XsHJnp5bfcxRwmV_jkvret/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Adventures Of The Smurfs, The (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Adventures%20of%20the%20Smurfs%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "347 KB",
    link1: "https://drive.google.com/file/d/17OuiOTVR7DQotK7R95XZZK8o8l9J8DC3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "AirForce Delta (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/AirForce%20Delta%20%28Japan%29.png",
    size: "339 KB",
    link1: "https://drive.google.com/file/d/1ZZNDIKjMuGj9eZ5hujJTRZYPVcF08YfN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "AirForce Delta (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/AirForce%20Delta%20%28USA%29.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/1CWypXXz9HRQ9OWl_vlFxfV94Xj8Jzo7r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aladdin (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Aladdin%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "364 KB",
    link1: "https://drive.google.com/file/d/1ZleyykDxhLb_-w4J5a8BbxAu6jGjXmCi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aladdin (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Aladdin%20%28USA%29.png",
    size: "364 KB",
    link1: "https://drive.google.com/file/d/1GDtMAZ_v379odbs35GmGWxKXn7A8nnMm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alfred's Adventure (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Alfred%27s%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "531 KB",
    link1: "https://drive.google.com/file/d/1YYt7NPZtPE2TF5kH7fTj9fjr75J87LnE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alice In Wonderland (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Alice%20in%20Wonderland%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "787 KB",
    link1: "https://drive.google.com/file/d/1xQpWmY0NtxzhA6rDVpUPINc_v8F2GGRv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alice in Wonderland (USA, Australia)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Alice%20in%20Wonderland%20%28USA%2C%20Australia%29.png",
    size: "805 KB",
    link1: "https://drive.google.com/file/d/1YlN3aIRywVZIjJebWV3m8i2fPDRR8yZe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aliens - Thanatos Encounter (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Aliens%20-%20Thanatos%20Encounter%20%28USA%2C%20Europe%29.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/1Ca2e6budiJLMl7zVbZCNVdpBFW78W4it/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All-Star Baseball 2000 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/All-Star%20Baseball%202000%20%28USA%2C%20Europe%29.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/1aiy2M-K7fbivBy4iSTpOsP0JmpvJgzj0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "All-Star Baseball 2001 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/All-Star%20Baseball%202001%20%28USA%29.png",
    size: "379 KB",
    link1: "https://drive.google.com/file/d/1YmVwT19aYiDmGY8r2ytc9Zln7LdP0HdK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alone In The Dark - The New Nightmare (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Alone%20in%20the%20Dark%20-%20The%20New%20Nightmare%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "2390 KB",
    link1: "https://drive.google.com/file/d/18AYJNZyhhcxp70Hy866vdfHv1---xo4F/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Alone in the Dark - The New Nightmare (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Alone%20in%20the%20Dark%20-%20The%20New%20Nightmare%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "2390 KB",
    link1: "https://drive.google.com/file/d/1HDxtpVKLX8CPjlMn76Rfj8fHqA0BAg7X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Animal Breeder 3 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Animal%20Breeder%203%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "618 KB",
    link1: "https://drive.google.com/file/d/1KHvz2UEchQ4S0OU4A9dUOlZQaXErMafU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Animal Breeder 4 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Animal%20Breeder%204%20%28Japan%29.png",
    size: "608 KB",
    link1: "https://drive.google.com/file/d/1MM65PS7dwOqKlSSfXOdGGkq_bem9icUs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Animastar GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Animastar%20GB%20%28Japan%29.png",
    size: "593 KB",
    link1: "https://drive.google.com/file/d/1A0MJRI9GayZd2pawj6KioXeLxP-05Sk2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Animorphs (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Animorphs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1_5DYVBShGGyVprVyZ1JKf0I2iFL8sMEg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Animorphs (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Animorphs%20%28USA%29.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1X5ZEdOGFxX_9v56k_cyvdrJDCODorWTG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Antz (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Antz%20%28USA%29%20%28En%2CFr%2CEs%29%20%28GB%20Compatible%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1oduC20KLlJYqOsMssZNRp5WtZFNnShOg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Antz (USA) (En,Fr,Es) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Antz%20%28USA%29%20%28En%2CFr%2CEs%29%20%28GB%20Compatible%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1xXrJuMo5cuJXWoiI_1-lAJgCsXUjAYdP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Antz Racing (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Antz%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "539 KB",
    link1: "https://drive.google.com/file/d/160SfLGg8lcAEJdW2qaSeQ9LbKvu6MeKW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Antz Racing (USA) (En,Fr,De,Es,It,Nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Antz%20Racing%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "541 KB",
    link1: "https://drive.google.com/file/d/1SKQKOStILHs20y6Dt1cO5NVfsCDDwl99/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Antz World Sportz (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Antz%20World%20Sportz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "239 KB",
    link1: "https://drive.google.com/file/d/1etnlGHnV6-b0Gb8vMrC1YKhjB-v-Tnjp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Aqualife (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Aqualife%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "97 KB",
    link1: "https://drive.google.com/file/d/15T0WF4TLkRIYGo764XBf1_vAdJfW93Bj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arle no Bouken - Mahou no Jewel (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Arle%20no%20Bouken%20-%20Mahou%20no%20Jewel%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "363 KB",
    link1: "https://drive.google.com/file/d/1jK16yNp59FQv-twtirEUSguEoOrLrzm4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Armada - FX Racers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Armada%20-%20FX%20Racers%20%28USA%29.png",
    size: "359 KB",
    link1: "https://drive.google.com/file/d/1ZD0-3nc_gzA_4R70PqlmW5zAEfwFLely/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Armorines - Project S.W.A.R.M. (USA, Europe) (En,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Armorines%20-%20Project%20S.W.A.R.M.%20%28USA%2C%20Europe%29%20%28En%2CDe%29.png",
    size: "367 KB",
    link1: "https://drive.google.com/file/d/1lNnfdqWvz4ROWTkKFSSCjqQ6KrREnSn5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Army Men (USA, Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Army%20Men%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "563 KB",
    link1: "https://drive.google.com/file/d/1yAj8dqpKbA7UOaoYWEdcFED7RBe3pMTE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Army Men - Air Combat (USA, Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Army%20Men%20-%20Air%20Combat%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "435 KB",
    link1: "https://drive.google.com/file/d/10i0FVCx83rORBQuhYBkJLUsWftf_gKPK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Army Men - Sarge's Heroes 2 (USA, Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Army%20Men%20-%20Sarge%27s%20Heroes%202%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "410 KB",
    link1: "https://drive.google.com/file/d/1VK-nEbsLYcbYTdX2dYRpj5v9apz2K74L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Army Men 2 (USA, Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Army%20Men%202%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "571 KB",
    link1: "https://drive.google.com/file/d/1aVYtWtMeImex0Ij7CheEKB432FhqoWTx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Arthur's Absolutely Fun Day! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Arthur%27s%20Absolutely%20Fun%20Day%21%20%28USA%29.png",
    size: "202 KB",
    link1: "https://drive.google.com/file/d/1sMeKJIoxi8hxUhGyFD-mz1vDOLVNJtHZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix & Obelix (Europe) (En,fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "291 KB",
    link1: "https://drive.google.com/file/d/1agqs2PgQMiuZBXzjCTg13TtZOmhP_icf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix & Obelix Vs Caesar (Europe) (En,fr,de,es,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "503 KB",
    link1: "https://drive.google.com/file/d/118HHfrs4RK-VrbpD5fc8l-u0S3d1JixX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asterix - Search For Dogmatix (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "511 KB",
    link1: "https://drive.google.com/file/d/18UXzd0SJV6Dlj2Qh0UDBBD7p440yTeP2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Asteroids (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Asteroids%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "327 KB",
    link1: "https://drive.google.com/file/d/1xnXk4VT4d4BDJZIoCs6banvJ15nweRUJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Atlantis - The Lost Empire (Europe) (En,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Atlantis%20-%20The%20Lost%20Empire%20%28Europe%29%20%28En%2CEs%2CIt%29.png",
    size: "649 KB",
    link1: "https://drive.google.com/file/d/1EE2QNY3UF0el3_gBn3qUwlwIadlZSVT7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Atlantis - The Lost Empire (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Atlantis%20-%20The%20Lost%20Empire%20%28USA%2C%20Europe%29.png",
    size: "684 KB",
    link1: "https://drive.google.com/file/d/19_Eu_8lD-IaPyQPBYcEE0cYZoLRthu5A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Atsumete Asobu Kuma no Pooh-san - Mori no Takaramono (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Atsumete%20Asobu%20Kuma%20no%20Pooh-san%20-%20Mori%20no%20Takaramono%20%28Japan%29.png",
    size: "605 KB",
    link1: "https://drive.google.com/file/d/1lxVIia3RkasML4g27UjuOjDGmyCT1WF2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Austin Powers - Oh, Behave! (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Austin%20Powers%20-%20Oh%2C%20Behave%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1865 KB",
    link1: "https://drive.google.com/file/d/194YkyTUs3WFxhnzAwNfKNn5a2KnvOlP8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Austin Powers - Oh, Behave! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Austin%20Powers%20-%20Oh%2C%20Behave%21%20%28USA%29.png",
    size: "2148 KB",
    link1: "https://drive.google.com/file/d/1j_P9kdnkmRRQZcuhhyMk0Oe79-V147_4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Austin Powers - Welcome To My Underground Lair! (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Austin%20Powers%20-%20Welcome%20to%20my%20Underground%20Lair%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1908 KB",
    link1: "https://drive.google.com/file/d/1dJ3YgS5MhZFKO7sBzk4vah-5GbWpQB5x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Austin Powers - Welcome to My Underground Lair! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Austin%20Powers%20-%20Welcome%20to%20my%20Underground%20Lair%21%20%28USA%29.png",
    size: "2227 KB",
    link1: "https://drive.google.com/file/d/1SZBEXqSreJOv9CRIXLTHpQx7aTl1HsGD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Azarashi Sentai Inazuma - Dokidoki Daisakusen! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Azarashi%20Sentai%20Inazuma%20-%20Dokidoki%20Daisakusen%21%20%28Japan%29.png",
    size: "394 KB",
    link1: "https://drive.google.com/file/d/10Z9rfxH7bB8zBmP0KP9U2WNxNPoPES2V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Azure Dreams (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Azure%20Dreams%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "574 KB",
    link1: "https://drive.google.com/file/d/12FAqTHNfZgHqwAqE5kZ5TqyVfln12XHn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "B-Daman Bakugaiden - Victory e no Michi (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/B-Daman%20Bakugaiden%20-%20Victory%20e%20no%20Michi%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "422 KB",
    link1: "https://drive.google.com/file/d/1UjAAQ45PA74CvNJmqs7Vupy_Mn9hAtrO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "B-Daman Bakugaiden V - Final Mega Tune (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/B-Daman%20Bakugaiden%20V%20-%20Final%20Mega%20Tune%20%28Japan%29.png",
    size: "449 KB",
    link1: "https://drive.google.com/file/d/180kYPq_5BcagtqhK0Gh2anJUfG9rYk-O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Babe And Friends (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Babe%20and%20Friends%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "198 KB",
    link1: "https://drive.google.com/file/d/164qGbBHXBNSuVMtD_EtGC6zoyYGY8XN1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Babe and Friends (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Babe%20and%20Friends%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "197 KB",
    link1: "https://drive.google.com/file/d/1FSE3hGCXW7D-ZIaXepgFg57lghB5BnXM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Baby Felix - Halloween (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Baby%20Felix%20-%20Halloween%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "202 KB",
    link1: "https://drive.google.com/file/d/1axHTf3qCzJ1GFr2EmFKL8lnr1QruJm9Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Backgammon (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Backgammon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29%20%28GB%20Compatible%29.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1oI3mduQQUFY1VJ5Xl3e1ppSk4HiqbM0e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Backgammon (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Backgammon%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/10eXMa7VHSinUUghLPa-d3lrPoFXcNLKl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bad Badtz-Maru Robo Battle (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bad%20Badtz-Maru%20Robo%20Battle%20%28Japan%29.png",
    size: "1144 KB",
    link1: "https://drive.google.com/file/d/1BFJcD9_fNSIfVxlpEOctKWXa2GY647Pa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bakukyuu Renpatsu!! Super B-Daman - Gekitan! Rising Valkyrie!! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bakukyuu%20Renpatsu%21%21%20Super%20B-Daman%20-%20Gekitan%21%20Rising%20Valkyrie%21%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "311 KB",
    link1: "https://drive.google.com/file/d/17DKqRns78TUrrUvLfxY-wcC1oXnOsa9w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bakusou Dekotora Densetsu GB Special - Otoko Dokyou no Tenka Touitsu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bakusou%20Dekotora%20Densetsu%20GB%20Special%20-%20Otoko%20Dokyou%20no%20Tenka%20Touitsu%20%28Japan%29.png",
    size: "316 KB",
    link1: "https://drive.google.com/file/d/1O7wkTYGXBLViYIlV7U-qQPCbGuhsiX56/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bakusou Senki Metal Walker GB - Koutetsu no Yuujou (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bakusou%20Senki%20Metal%20Walker%20GB%20-%20Koutetsu%20no%20Yuujou%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "380 KB",
    link1: "https://drive.google.com/file/d/1MD9QL_3uTePBu3iAEILAsW9WjnIP1ufP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bakuten Shoot Beyblade (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bakuten%20Shoot%20Beyblade%20%28Japan%29.png",
    size: "647 KB",
    link1: "https://drive.google.com/file/d/19repxlBk26Zc2yT-TEORBOY7sJpsdY3e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ballistic (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ballistic%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1cb19l0G1Ju0DD7Uc7NTN0ZkHVR-l-hiW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Balloon Fight GB (Japan) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Balloon%20Fight%20GB%20%28Japan%29%20%28SGB%20Enhanced%2C%20GB%20Compatible%29%20%28NP%29.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/1Qu9nXFAATzSOJyiDPfla7uyHB0wQ3PHB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Balloon Kid Gb DX",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "94 KB",
    link1: "https://drive.google.com/file/d/1YWzLszRE26x62sX_1UiTeZZmEcojPkpG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie - Aventura Submarina (Spain)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Barbie%20-%20Aventura%20Submarina%20%28Spain%29%20%28GB%20Compatible%29.png",
    size: "440 KB",
    link1: "https://drive.google.com/file/d/1Mg2AHqdQsEvj1s_eFo9U80QrXtJpcwhs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie - Fashion Pack Games (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Barbie%20-%20Fashion%20Pack%20Games%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "205 KB",
    link1: "https://drive.google.com/file/d/1zRUkyXJyHatjoKE9T5br2GFVpWc8o8Gm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie - Magic Genie Adventure (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Barbie%20-%20Magic%20Genie%20Adventure%20%28USA%29.png",
    size: "226 KB",
    link1: "https://drive.google.com/file/d/102Q3focMJvm90ppe_HL0gnZffGaAJc_1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie - Ocean Discovery (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Barbie%20-%20Ocean%20Discovery%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "440 KB",
    link1: "https://drive.google.com/file/d/1KESU0kV2IWsoADclhfyy05BVHB67HeQe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie - Pet Rescue (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Barbie%20-%20Pet%20Rescue%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "345 KB",
    link1: "https://drive.google.com/file/d/1gET0nl56wMXkTbn9Owx3999rc6g1Y51O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie - Pet Rescue (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Barbie%20-%20Pet%20Rescue%20%28USA%29.png",
    size: "298 KB",
    link1: "https://drive.google.com/file/d/10qXw_EQfCfk7MZVsvX2sVoPj1ydN1Imm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barbie - Shelly Club (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "315 KB",
    link1: "https://drive.google.com/file/d/1IK0yNWxjPlYS0KXkxrr6iLvri57JuL30/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barca Total 2000 (Europe) (En,fr,de,es,it,nl,ca)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Barca%20Total%202000%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CCa%29.png",
    size: "91 KB",
    link1: "https://drive.google.com/file/d/17lIPrfTnECbPYdIaNBC3i0HI3R79b2dk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barcode Taisen Bardigun (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Barcode%20Taisen%20Bardigun%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/1hDWJHThikF9OAbRmky9ZAU6borwmhkPI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Barcode Taisen Bardigun (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Barcode%20Taisen%20Bardigun%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/1FrAZZv9REUEFYGqDn3dBUvIu9olNr-bF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bass Masters Classic (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bass%20Masters%20Classic%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "463 KB",
    link1: "https://drive.google.com/file/d/1DkUpdRbihHtOsBjD_B4y9SaLsSm7Nyeq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman - Chaos in Gotham (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Batman%20-%20Chaos%20in%20Gotham%20%28USA%29.png",
    size: "377 KB",
    link1: "https://drive.google.com/file/d/1ONXXTL9FtyyZknRpeBPtXHvrKUVRSzlX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Beyond - Return of the Joker (Japan) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Batman%20Beyond%20-%20Return%20of%20the%20Joker%20%28Japan%29%20%28NP%29.png",
    size: "340 KB",
    link1: "https://drive.google.com/file/d/1THrtJpy2bpDiFjyg3IO4N60RAF0OT0T2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Batman Beyond - Return of the Joker (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Batman%20Beyond%20-%20Return%20of%20the%20Joker%20%28USA%29.png",
    size: "338 KB",
    link1: "https://drive.google.com/file/d/1TGsEk1w8CcvZ3iEtKUHLWamoV7gWVKxt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battle Fishers (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Battle%20Fishers%20%28Japan%29.png",
    size: "627 KB",
    link1: "https://drive.google.com/file/d/1wyj2PcdCT4RXPtC05xAEfjqmxMW-9IVf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "BattleTanx (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/BattleTanx%20%28USA%29.png",
    size: "244 KB",
    link1: "https://drive.google.com/file/d/1OF4bOdQZMrGIQpIiyPnW96e-F-Qd7C4Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battleship (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Battleship%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1r2ifKuNfVeKFgtSnqWBNbWLfAtwpWF1a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Battleship [Gbc] ",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Battleship%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1o4bm0IE1Cftr_BLviSAOdlYnr1A79Ocu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beach'n Ball (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Beach%27n%20Ball%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/1j6_oOV2zvn-k72JkyB6AqpaHBKHaitc-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beatmania GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Beatmania%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1ZvJEXRchomH2x46QbN9wtawFyOYoumnU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beatmania GB - Gotcha Mix 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Beatmania%20GB%20-%20Gotcha%20Mix%202%20%28Japan%29.png",
    size: "644 KB",
    link1: "https://drive.google.com/file/d/1pSjWxqG5arXv97dDj6Wn3SVeeK4sV0XI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beatmania GB 2 - Gotcha Mix (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Beatmania%20GB%202%20-%20Gotcha%20Mix%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "410 KB",
    link1: "https://drive.google.com/file/d/1E4yP46Frrv-pZoP5bFYHSEKH5GcC85SK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beauty And The Beast - A Board Game Adventure (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Beauty%20and%20the%20Beast%20-%20A%20Board%20Game%20Adventure%20%28USA%2C%20Australia%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "667 KB",
    link1: "https://drive.google.com/file/d/1geZxNGZNuxt-3km1okyDeeuTmKykVzj-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beauty and the Beast - A Board Game Adventure (USA, Australia) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Beauty%20and%20the%20Beast%20-%20A%20Board%20Game%20Adventure%20%28USA%2C%20Australia%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "655 KB",
    link1: "https://drive.google.com/file/d/1TAJ_xuSIFOsGmJ5EuYOjv0hNej5jAWJL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Beyblade - Fighting Tournament (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Beyblade%20-%20Fighting%20Tournament%20%28Japan%29.png",
    size: "1054 KB",
    link1: "https://drive.google.com/file/d/16gLiU-ROnUJhrYE-IbXeQ1TdL82E1Naa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bikkuriman 2000 - Charging Card GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bikkuriman%202000%20-%20Charging%20Card%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "629 KB",
    link1: "https://drive.google.com/file/d/1c04iFQNTGuhbkiZYkrl5W1FYGc7-AFaU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Billy Bob's Huntin' 'n' Fishin' (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Billy%20Bob%27s%20Huntin%27%20%27n%27%20Fishin%27%20%28USA%2C%20Europe%29.png",
    size: "465 KB",
    link1: "https://drive.google.com/file/d/1VpQSeb-Edej62rY1AFc1emuumTe9T85T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Biohazard Gaiden (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Biohazard%20Gaiden%20%28Japan%29.png",
    size: "693 KB",
    link1: "https://drive.google.com/file/d/143pK_g1S8h9zjA_rTcdYtzHioTuOCwi7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bionic Commando - Elite Forces (USA, Australia)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bionic%20Commando%20-%20Elite%20Forces%20%28USA%2C%20Australia%29.png",
    size: "920 KB",
    link1: "https://drive.google.com/file/d/17O2XJWzVOa4m28PFEdRkLusS_m84pclc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bionic Commando - Elite Forces [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bionic%20Commando%20-%20Elite%20Forces%20%28USA%2C%20Australia%29.png",
    size: "920 KB",
    link1: "https://drive.google.com/file/d/1fJ1Yp6tqWDhdAWr3qV_s_PLBuJ3T-GS_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Black Bass - Lure Fishing (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Black%20Bass%20-%20Lure%20Fishing%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "116 KB",
    link1: "https://drive.google.com/file/d/12zeN8FMbKeTe1woR6vDNz-VMDjSbBqSp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Black Onyx, The (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Black%20Onyx%2C%20The%20%28Japan%29.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/17RiniRPmXp6O5vVH1QsENH1idrHPoLLE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blade (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Blade%20%28USA%2C%20Europe%29.png",
    size: "388 KB",
    link1: "https://drive.google.com/file/d/1F-DHj9UJ7StMu0Tjm5Si0p7A8heViEfi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blaster Master - Enemy Below (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Blaster%20Master%20-%20Enemy%20Below%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "297 KB",
    link1: "https://drive.google.com/file/d/1sXsfwd4K5V5ylDUXOpeg-ltnfMke22AS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Blue's Clues - Blue's Alphabet Book (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Blue%27s%20Clues%20-%20Blue%27s%20Alphabet%20Book%20%28USA%29.png",
    size: "240 KB",
    link1: "https://drive.google.com/file/d/1osCHMksGVRXjjA7ZPGbETjznyx7eSRYu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Boarder Zone (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Boarder%20Zone%20%28USA%29.png",
    size: "610 KB",
    link1: "https://drive.google.com/file/d/15lHbTaPLubASdC0US7p2GCzF0pTKY1IM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bob The Builder - Fix It Fun! (Europe) (En,fr,de,es,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bob%20the%20Builder%20-%20Fix%20it%20Fun%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CNl%29.png",
    size: "366 KB",
    link1: "https://drive.google.com/file/d/1k6TKNJ9msfwa6aa_Bf1If0f46voXG7-q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bob the Builder - Fix it Fun! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bob%20the%20Builder%20-%20Fix%20it%20Fun%21%20%28USA%29.png",
    size: "350 KB",
    link1: "https://drive.google.com/file/d/1aDhD5eZt82lwlmpXELFefeqjx51rpYFE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Boku no Camp-jou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Boku%20no%20Camp-jou%20%28Japan%29.png",
    size: "187 KB",
    link1: "https://drive.google.com/file/d/157yhUAnVDEkYiwVO19s17FVfBoRxmW36/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bokujou Monogatari 2 GB (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bokujou%20Monogatari%202%20GB%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "414 KB",
    link1: "https://drive.google.com/file/d/1krg2d3T2TXMKv4KW_HOVz7SH81Xr8HL0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bokujou Monogatari 3 GB - Boy Meets Girl (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bokujou%20Monogatari%203%20GB%20-%20Boy%20Meets%20Girl%20%28Japan%29.png",
    size: "621 KB",
    link1: "https://drive.google.com/file/d/1gR2ZpAtv8jYHCNmFJi4LrpLvFrTF0DY3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bokujou Monogatari 3 GB - Boy Meets Girl (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bokujou%20Monogatari%203%20GB%20-%20Boy%20Meets%20Girl%20%28Japan%29%20%28Rev%201%29.png",
    size: "621 KB",
    link1: "https://drive.google.com/file/d/1HYlS9clhxcB5bAk68U_9AHTc2qZhFLSn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman Max - Ain Version (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bomberman%20Max%20-%20Ain%20Version%20%28Japan%29.png",
    size: "412 KB",
    link1: "https://drive.google.com/file/d/1bCk0Sx4PeoIuoNYl80pBabmC6Mu-54ec/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman Max - Blue Champion (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bomberman%20Max%20-%20Blue%20Champion%20%28USA%29.png",
    size: "415 KB",
    link1: "https://drive.google.com/file/d/1TJt7H-K6tRrgRbLuDAB2gGbhDo_Iy-nF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman Max - Hikari no Yuusha (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bomberman%20Max%20-%20Hikari%20no%20Yuusha%20%28Japan%29.png",
    size: "411 KB",
    link1: "https://drive.google.com/file/d/1CWECNDYwvpLUURu12vkugMx_G_hKxjtB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman Max - Red Challenger (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bomberman%20Max%20-%20Red%20Challenger%20%28USA%29.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/11gYPqm2xr3IDRLNbq-OLJPEGHaNU5Xqr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman Max - Yami no Senshi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bomberman%20Max%20-%20Yami%20no%20Senshi%20%28Japan%29.png",
    size: "409 KB",
    link1: "https://drive.google.com/file/d/1QTnXCnXo7VRYS74HBifUFzJxRUqQ_0z0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman Quest (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bomberman%20Quest%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/1c2of2WgKN99u82l3nnq-YYotTKW1yN33/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bomberman Quest (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bomberman%20Quest%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/124tRWS4rTHAZFNhXRPm-9qfm4EwJdQOT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bouken! Dondoko Shima (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bouken%21%20Dondoko%20Shima%20%28Japan%29.png",
    size: "561 KB",
    link1: "https://drive.google.com/file/d/1-8tzdzLFKENI5kHBxVYK6aePuhSQ3za_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Brave Saga - Shinshou Astaria (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Brave%20Saga%20-%20Shinshou%20Astaria%20%28Japan%29.png",
    size: "764 KB",
    link1: "https://drive.google.com/file/d/1_BHsI3wtTeKptZj24zaluVZoHXyWbqI1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buffy the Vampire Slayer (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Buffy%20the%20Vampire%20Slayer%20%28USA%2C%20Europe%29.png",
    size: "448 KB",
    link1: "https://drive.google.com/file/d/139dLAntxYTF3gGpM4a-Wk1-H941UsRFU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bug's Life, A (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bug%27s%20Life%2C%20A%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "308 KB",
    link1: "https://drive.google.com/file/d/1RyJZ8e0rBqKbtpnQV4sAj4jDDlJ-Et--/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bugs Bunny & Lola Bunny - Operation Carrots (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "243 KB",
    link1: "https://drive.google.com/file/d/1AhpjlKHTzoHcbguG_P0tOIhGq3_fXuV_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bugs Bunny - Crazy Castle 3 (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bugs%20Bunny%20-%20Crazy%20Castle%203%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/11CQ-Ar20b45UqiX65chmtj_QfNQjSioA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bugs Bunny - Crazy Castle 3 (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bugs%20Bunny%20-%20Crazy%20Castle%203%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/10jObPH4YDF5wYWPE3xxXOCOHjSZ66SYB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bugs Bunny - Crazy Castle 4 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bugs%20Bunny%20-%20Crazy%20Castle%204%20%28Japan%29.png",
    size: "353 KB",
    link1: "https://drive.google.com/file/d/11bt7kraYvetxnChAUWbFrxQFDidAYuqB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bugs Bunny in - Crazy Castle 4 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bugs%20Bunny%20in%20-%20Crazy%20Castle%204%20%28USA%29.png",
    size: "353 KB",
    link1: "https://drive.google.com/file/d/1s1MsKAjyH5NFaSCCQ827MxxD4_2jp-Cp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Burai Senshi Color (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Burai%20Senshi%20Color%20%28Japan%29.png",
    size: "51 KB",
    link1: "https://drive.google.com/file/d/16iRvx-Ty9CKmaDjH_Sikp9AuCFz4uJqR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Burger Burger Pocket - Hamburger Simulation (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Burger%20Burger%20Pocket%20-%20Hamburger%20Simulation%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "255 KB",
    link1: "https://drive.google.com/file/d/1Ig_AU9RcHT_Vn8otsuh-Ee7T2MA9QJNk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Burger Paradise International (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Burger%20Paradise%20International%20%28Japan%29.png",
    size: "155 KB",
    link1: "https://drive.google.com/file/d/1jkpWbSHE9IF_EEJeLKFsfqDNR1lufvJs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bust-A-Move 4 (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bust-A-Move%204%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "196 KB",
    link1: "https://drive.google.com/file/d/1H38PAAz3Nrz0861JUNZRMdkMrGYnn6h7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Bust-A-Move Millennium (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Bust-A-Move%20Millennium%20%28USA%2C%20Europe%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1EsFZVmAFwx0bGBxl9DRU_JB8ifIvaKWP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Buzz Lightyear of Star Command (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Buzz%20Lightyear%20of%20Star%20Command%20%28USA%2C%20Europe%29.png",
    size: "209 KB",
    link1: "https://drive.google.com/file/d/164uEuJCW3BmYUXtV-rVTwXCvkMUbfCMZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "CGB Test Cartridge (Japan) (En) [b]",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/16eGhLiZSqWgSRSTFBveMYIMJ1JU6JK43/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Caesars Palace II (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Caesars%20Palace%20II%20%28USA%2C%20Europe%29.png",
    size: "376 KB",
    link1: "https://drive.google.com/file/d/1QEW_E32M5GY40-iyaMHENCuRJEo4Iw_k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cannon Fodder (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cannon%20Fodder%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "2253 KB",
    link1: "https://drive.google.com/file/d/1TdY03afX8vYWTthQfPaKZ2DKhHp_kbAp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cannon Fodder (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cannon%20Fodder%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "2253 KB",
    link1: "https://drive.google.com/file/d/17Wsji28W3WuVxcwWZB4IBBsrnk42rtkP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cardcaptor Sakura - Itsumo Sakura-chan to Issho (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cardcaptor%20Sakura%20-%20Itsumo%20Sakura-chan%20to%20Issho%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "233 KB",
    link1: "https://drive.google.com/file/d/1aIxsec5urD96HwO-2jwDf7yLSERyELr_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cardcaptor Sakura - Itsumo Sakura-chan to Issho (Japan) (Rev 1) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cardcaptor%20Sakura%20-%20Itsumo%20Sakura-chan%20to%20Issho%20%28Japan%29%20%28Rev%201%29%20%28GB%20Compatible%29.png",
    size: "233 KB",
    link1: "https://drive.google.com/file/d/1QHIf7xPYDFSnMlq47fxua7zHeGKSKJ0u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cardcaptor Sakura - Itsumo Sakura-chan to Issho (Japan) (Rev 2) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cardcaptor%20Sakura%20-%20Itsumo%20Sakura-chan%20to%20Issho%20%28Japan%29%20%28Rev%202%29%20%28GB%20Compatible%29.png",
    size: "233 KB",
    link1: "https://drive.google.com/file/d/1dP1O2tmnoWm1lFYc9Hi8VWeXcbaDi7L5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cardcaptor Sakura - Tomoeda Shougakkou Daiundoukai (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cardcaptor%20Sakura%20-%20Tomoeda%20Shougakkou%20Daiundoukai%20%28Japan%29.png",
    size: "501 KB",
    link1: "https://drive.google.com/file/d/1RsbFwXNkNMqPGu9XElYouQO7isG2lieh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carl Lewis Athletics 2000 (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Carl%20Lewis%20Athletics%202000%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "404 KB",
    link1: "https://drive.google.com/file/d/19dmBAtWFzcKgF6YmVvu-gZIuuqZyJ00G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carmageddon - Carpocalypse Now (USA, Europe) (En,Fr,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Carmageddon%20-%20Carpocalypse%20Now%20%28USA%2C%20Europe%29%20%28En%2CFr%2CEs%2CIt%29.png",
    size: "210 KB",
    link1: "https://drive.google.com/file/d/1ygCgYzA9UnMq4xDYOT09WIAy23Df38he/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Carmageddon - Carpocalypse Now (Usa, Europe) (En,fr,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Carmageddon%20-%20Carpocalypse%20Now%20%28USA%2C%20Europe%29%20%28En%2CFr%2CEs%2CIt%29.png",
    size: "210 KB",
    link1: "https://drive.google.com/file/d/1lGLfSsdqnmOj2YybSOaZbFKkHmdiIHEc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Casper (Europe) (En,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Casper%20%28Europe%29%20%28En%2CEs%2CIt%29.png",
    size: "367 KB",
    link1: "https://drive.google.com/file/d/1ks3mjx5hejH0oRRqKufVgmzIIKAqb6dY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Casper (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Casper%20%28USA%29.png",
    size: "356 KB",
    link1: "https://drive.google.com/file/d/12mMi2wdYuA4yFJp6YCrLN65Z-PuGoi81/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castlevania Adventure DX",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "345 KB",
    link1: "https://drive.google.com/file/d/1E0miXdDuuIkV5ih-HyNuKsP8gfuxXhXd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Castlevania Ii Belmonts Revenge 2 DX",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "567 KB",
    link1: "https://drive.google.com/file/d/191SqLdN_cHDeDb7p6QKlgMcVJ1SO2Z-Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Caterpillar Construction Zone (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Caterpillar%20Construction%20Zone%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "468 KB",
    link1: "https://drive.google.com/file/d/1E3P5uAEFYHl4JnL5dm32IqfcqIY8-CBn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Catwoman (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Catwoman%20%28USA%29.png",
    size: "359 KB",
    link1: "https://drive.google.com/file/d/10KLuep8AIkQsS99cMuR9Cg7pE4EGJORi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Catz (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Catz%20%28USA%29.png",
    size: "374 KB",
    link1: "https://drive.google.com/file/d/1zoKv6NhTjQbnzqvfsmXQAvbYAdwatrAS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Centipede (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Centipede%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/10rey_l8BpnR-sEh8bTrUshvxottooWXM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Centipede (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Centipede%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "47 KB",
    link1: "https://drive.google.com/file/d/1spTqRliGTnsgv4jEGL-L87KFFUON9YT6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Championship Motocross 2001 featuring Ricky Carmichael (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Championship%20Motocross%202001%20featuring%20Ricky%20Carmichael%20%28USA%2C%20Europe%29.png",
    size: "541 KB",
    link1: "https://drive.google.com/file/d/1KVYTK5sI-wcwPW2Sg-F-zSUD3R8R3lXD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chase H.Q. - Secret Police (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Chase%20H.Q.%20-%20Secret%20Police%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "99 KB",
    link1: "https://drive.google.com/file/d/12sPPv2mYXi3OQ7wWfzW83gWjbaxov_pX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Checkmate (Japan) (En,Ja) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Checkmate%20%28Japan%29%20%28En%2CJa%29%20%28GB%20Compatible%29.png",
    size: "98 KB",
    link1: "https://drive.google.com/file/d/1Bv7xVla5VBOOEo7J-txHLNR67g9ywIUU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chee-Chai Alien (Japan) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Chee-Chai%20Alien%20%28Japan%29%20%28Rumble%20Version%29.png",
    size: "1020 KB",
    link1: "https://drive.google.com/file/d/1WiWOg_DTk6S3QfrgEhfiMHdcCLnAQMvs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chessmaster (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Chessmaster%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/1klNm1Sx4HCa91Q4v5F4S7C9kY19WhnPp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chi to Ase to Namida no Koukou Yakyuu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Chi%20to%20Ase%20to%20Namida%20no%20Koukou%20Yakyuu%20%28Japan%29.png",
    size: "417 KB",
    link1: "https://drive.google.com/file/d/1IPTOGVr_dx4V1jDQ6FO-8WUWy9hpUPrW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chibi Maruko-chan - Go Chounai Minna de Game Da yo! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Chibi%20Maruko-chan%20-%20Go%20Chounai%20Minna%20de%20Game%20Da%20yo%21%20%28Japan%29.png",
    size: "296 KB",
    link1: "https://drive.google.com/file/d/16f-wlhAyDI67ml9BotROh9YdmJNfwOel/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chicken Run (USA, Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Chicken%20Run%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "209 KB",
    link1: "https://drive.google.com/file/d/1ZcOgVBeYxRaxIXUXFbJH8gqxv7Psat1e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chicken Run (Usa, Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Chicken%20Run%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "209 KB",
    link1: "https://drive.google.com/file/d/1s3s_mAfXfXIRkfbmjsytnwQNPLhC_OoH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Chiki Chiki Machine Mou Race (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Chiki%20Chiki%20Machine%20Mou%20Race%20%28Japan%29.png",
    size: "489 KB",
    link1: "https://drive.google.com/file/d/1GDYXHZazB1w8aMN2sPXiQnzuvwtsQCeK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Choro Q - Hyper Customable GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Choro%20Q%20-%20Hyper%20Customable%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "463 KB",
    link1: "https://drive.google.com/file/d/18qs_RVFsgyeA56LpHWa2A8bv8GF04yUB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Classic Bubble Bobble (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Classic%20Bubble%20Bobble%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1lI2jRxh9aNP7X1QnlH6tX7zbrT0p7wKA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Columns GB - Tezuka Osamu Characters (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Columns%20GB%20-%20Tezuka%20Osamu%20Characters%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "117 KB",
    link1: "https://drive.google.com/file/d/1yrTgZHUIJmFzxmUvVYqIZn1tmiVaFtlT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Command Master (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Command%20Master%20%28Japan%29.png",
    size: "867 KB",
    link1: "https://drive.google.com/file/d/1RUFzxec7Sa5-nOwy47rdTiAmSF5WiSrt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Commander Keen (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Commander%20Keen%20%28USA%2C%20Europe%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1Vx08S2hibVD53_4yXluzXARFVAEZTsXx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Conker's Pocket Tales (USA, Europe) (En,Fr,De) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Conker%27s%20Pocket%20Tales%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "882 KB",
    link1: "https://drive.google.com/file/d/1YyW5AK27GLjccNyRU1MxcSKwcH_0dtHg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Contra Operation C DX",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "345 KB",
    link1: "https://drive.google.com/file/d/1E2BZS2xCB-npqK7z6wiHLZJDXX1fW5Hy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cool Bricks (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cool%20Bricks%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1ZgBhM9xCCjpTJymvdrHi6JQr9JLDQDLA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Croc (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Croc%20%28USA%2C%20Europe%29.png",
    size: "371 KB",
    link1: "https://drive.google.com/file/d/12icmmL4odyIbiE0jP9Lh-weGOA5oTp-a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Croc 2 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Croc%202%20%28USA%2C%20Europe%29.png",
    size: "322 KB",
    link1: "https://drive.google.com/file/d/1DUXnNH2GEusmgCrVqEunhsizX0OjWGyT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cross Hunter - Monster Hunter Version (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cross%20Hunter%20-%20Monster%20Hunter%20Version%20%28Japan%29.png",
    size: "780 KB",
    link1: "https://drive.google.com/file/d/1ZQ7nVY4ZJmdNoKV5PZXHGJrKIotwT6N6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cross Hunter - Treasure Hunter Version (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cross%20Hunter%20-%20Treasure%20Hunter%20Version%20%28Japan%29.png",
    size: "771 KB",
    link1: "https://drive.google.com/file/d/1gQApZIVo64Qdpo9sB3lDyzZAw1ZR5IIR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cross Hunter - X Hunter Version (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cross%20Hunter%20-%20X%20Hunter%20Version%20%28Japan%29.png",
    size: "776 KB",
    link1: "https://drive.google.com/file/d/1uYgahowoM4N3NLyUx-LnyugH-zzvpBOZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cruis'n Exotica (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cruis%27n%20Exotica%20%28USA%29.png",
    size: "724 KB",
    link1: "https://drive.google.com/file/d/1vdoy3DR6wYdYrhExv5-Mde4JDzvoTTeX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Crystalis (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Crystalis%20%28USA%29.png",
    size: "655 KB",
    link1: "https://drive.google.com/file/d/1NZq4JLbMaSBbJCNU4x0Y7EG5HbWpZ0S6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cubix - Robots For Everyone - Race 'n Robots (Usa) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cubix%20-%20Robots%20for%20Everyone%20-%20Race%20%27n%20Robots%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1_KTzJZUAlF8Tzu0p8RFmPP1fmyQy04cO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cubix - Robots for Everyone - Race 'n Robots (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cubix%20-%20Robots%20for%20Everyone%20-%20Race%20%27n%20Robots%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1RSCWAQK7aV-kY6fP9bqIP8irpR73GZo-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "CyberTiger (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/CyberTiger%20%28USA%2C%20Europe%29.png",
    size: "498 KB",
    link1: "https://drive.google.com/file/d/1LU1omUtS8v0c_P_6kjBPYm1DI8y1XNwU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyborg Kuro-chan - Devil Fukkatsu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cyborg%20Kuro-chan%20-%20Devil%20Fukkatsu%20%28Japan%29.png",
    size: "393 KB",
    link1: "https://drive.google.com/file/d/1AoQuSIne05pbkX_CtYQbO3uJKI4BhJoA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Cyborg Kuro-chan 2 - White Woods no Gyakushuu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Cyborg%20Kuro-chan%202%20-%20White%20Woods%20no%20Gyakushuu%20%28Japan%29.png",
    size: "259 KB",
    link1: "https://drive.google.com/file/d/1iPIUC3GkwVFi0_AZUNIH0fNop8CiBrlb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DT - Lords of Genomes (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/DT%20-%20Lords%20of%20Genomes%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1117 KB",
    link1: "https://drive.google.com/file/d/1UsvM9XZEX692E9o8ib4DVeTFtEoNB0wL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DX Jinsei Game (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/DX%20Jinsei%20Game%20%28Japan%29.png",
    size: "446 KB",
    link1: "https://drive.google.com/file/d/13fh8dYVQ9yVBi6iY_xZNiyU3pXVJgWTI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DX Monopoly GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/DX%20Monopoly%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "136 KB",
    link1: "https://drive.google.com/file/d/1JGX-LEeV60ly55lYkqs5G7-PyjKALZVb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daa! Daa! Daa! - Totsuzen Card de Battle de Uranai de! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Daa%21%20Daa%21%20Daa%21%20-%20Totsuzen%20Card%20de%20Battle%20de%20Uranai%20de%21%20%28Japan%29.png",
    size: "374 KB",
    link1: "https://drive.google.com/file/d/1O0RWC5EPuR_AtWLH0UPiuWRGE5y_Vzi3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daffy Duck - Fowl Play (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Daffy%20Duck%20-%20Fowl%20Play%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "314 KB",
    link1: "https://drive.google.com/file/d/1MbZZ2_mASxGRDONzTVoUC09eRUviar3b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daffy Duck - Subette Koron de Oogane Mochi (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Daffy%20Duck%20-%20Subette%20Koron%20de%20Oogane%20Mochi%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "315 KB",
    link1: "https://drive.google.com/file/d/14xtxM6KY1n8sq75ahzgkewLMGWpmpIRm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daikaijuu Monogatari - Poyon no Dungeon Room (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Daikaijuu%20Monogatari%20-%20Poyon%20no%20Dungeon%20Room%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "831 KB",
    link1: "https://drive.google.com/file/d/1q76azfWofpX6ya9hWhufRuRexr55CWsm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daikaijuu Monogatari - Poyon no Dungeon Room 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Daikaijuu%20Monogatari%20-%20Poyon%20no%20Dungeon%20Room%202%20%28Japan%29.png",
    size: "1060 KB",
    link1: "https://drive.google.com/file/d/1WE5Z46K8ZpGmO6GBlF4dIi63pg7xZHYn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daikaijuu Monogatari - The Miracle of the Zone II (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Daikaijuu%20Monogatari%20-%20The%20Miracle%20of%20the%20Zone%20II%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "682 KB",
    link1: "https://drive.google.com/file/d/1glWUU4gsBbbDc0ZTEJN6lHETB5M5FS-t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daikatana (Europe) (Fr,de,es)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "471 KB",
    link1: "https://drive.google.com/file/d/1oZUh4f2gxKTK1bsJdsPaK6XYxAnX4bGN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daikatana GB (Japan) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Daikatana%20GB%20%28Japan%29%20%28NP%29.png",
    size: "449 KB",
    link1: "https://drive.google.com/file/d/1hRCMIuBDv3AmdmwrKpOPCALb6BXjDEpr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Daiku no Gen-san - Kachikachi no Tonkachi ga Kachi (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Daiku%20no%20Gen-san%20-%20Kachikachi%20no%20Tonkachi%20ga%20Kachi%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/1FN_aJU1cULbJ48gUUAZUowLeo4f7te4A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dance Dance Revolution GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dance%20Dance%20Revolution%20GB%20%28Japan%29.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1AKb9r5qjveD3h-20PDVGNPKxg-p_V-XR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dance Dance Revolution GB - Disney Mix (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dance%20Dance%20Revolution%20GB%20-%20Disney%20Mix%20%28Japan%29.png",
    size: "217 KB",
    link1: "https://drive.google.com/file/d/1l6wx1Cr7Y0SqtoTBNbHlQ4T_Q8HhCUCg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dance Dance Revolution GB 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dance%20Dance%20Revolution%20GB%202%20%28Japan%29.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/1PNudbmi4XunHRp9ifwiVDNRx6dR3d568/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dance Dance Revolution GB 3 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dance%20Dance%20Revolution%20GB%203%20%28Japan%29.png",
    size: "264 KB",
    link1: "https://drive.google.com/file/d/1NaEtSL1RcPKRgYUnO5eTtM5RJcCkyQdk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dancing Furby (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dancing%20Furby%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "188 KB",
    link1: "https://drive.google.com/file/d/1nPo_FWAPnUAvgWOGriolJ8LIfG4Z46QD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Data-Navi Pro Yakyuu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Data-Navi%20Pro%20Yakyuu%20%28Japan%29.png",
    size: "196 KB",
    link1: "https://drive.google.com/file/d/1HWtbRzCRa4z8wHlyljfYOGOPY3fC-XFY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Data-Navi Pro Yakyuu 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Data-Navi%20Pro%20Yakyuu%202%20%28Japan%29.png",
    size: "235 KB",
    link1: "https://drive.google.com/file/d/1hBNHsIxGirtuovbnSoUgdebP4C_4L7S2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dave Mirra Freestyle BMX (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dave%20Mirra%20Freestyle%20BMX%20%28USA%2C%20Europe%29.png",
    size: "474 KB",
    link1: "https://drive.google.com/file/d/11EOiYAketfcGHRXCtx2f8GahHvdxbFyG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "David Beckham Soccer (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/David%20Beckham%20Soccer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "261 KB",
    link1: "https://drive.google.com/file/d/1A1moO2f185Xn0A3lwRt0xzXiVPZB4QDG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dear Daniel no Sweet Adventure - Kitty-chan o Sagashite (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dear%20Daniel%20no%20Sweet%20Adventure%20-%20Kitty-chan%20o%20Sagashite%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "548 KB",
    link1: "https://drive.google.com/file/d/1Yr6rrp93dT9sooCQc178yWXUCoqumc4c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deer Hunter (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Deer%20Hunter%20%28USA%29.png",
    size: "154 KB",
    link1: "https://drive.google.com/file/d/1ZpxNP4UuExBDRHLQ6-9qoSM102Ma-f7s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deja Vu I & II (Japan)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "393 KB",
    link1: "https://drive.google.com/file/d/1LufsXvKkiYsJAT4rMUJH9qKKptJc5PH2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deja Vu I & II - The Casebooks of Ace Harding (USA)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "402 KB",
    link1: "https://drive.google.com/file/d/1SnTLoChzxdJe5rlHVRrgKOfVTk3L8Stu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Deja Vu I & Ii [Gbc]",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "467 KB",
    link1: "https://drive.google.com/file/d/13_3aX1Hk5iV0FYkGb3QI3VcRELmAMJZc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dejiko no Mahjong Party (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dejiko%20no%20Mahjong%20Party%20%28Japan%29.png",
    size: "831 KB",
    link1: "https://drive.google.com/file/d/1S8r178E6qyBL7X3YZuD7icN9FljYCpO8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Denki Blocks! (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Denki%20Blocks%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1aQ7lVBjqSlx7GaFebNqCGbzrWTummBKR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Densha de Go! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Densha%20de%20Go%21%20%28Japan%29.png",
    size: "1005 KB",
    link1: "https://drive.google.com/file/d/1-f2FfY9wHCmrQvHKz-pkndRH9ygSn7y-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Densha de Go! 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Densha%20de%20Go%21%202%20%28Japan%29.png",
    size: "2698 KB",
    link1: "https://drive.google.com/file/d/1IHLja2FnLYeCV8wvvuhnOp1XvDs-uFg_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dexter's Laboratory - Robot Rampage (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dexter%27s%20Laboratory%20-%20Robot%20Rampage%20%28USA%2C%20Europe%29.png",
    size: "134 KB",
    link1: "https://drive.google.com/file/d/1JVfvshAdBWSl369GBBP-5Owui8NrQPgZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon - Yellow Jade (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "932 KB",
    link1: "https://drive.google.com/file/d/1gMmRUDf92TJjhgek5_6h2_VcAKwPAdUU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Adventure 2001 (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "458 KB",
    link1: "https://drive.google.com/file/d/1YKKib_YL1W83Hv6EI54LEaSxVpenUAQK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Amethyst (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "722 KB",
    link1: "https://drive.google.com/file/d/1i4JIJEV_mFdHK9NEv2LlEdsIRUSpiGXP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Crystal II (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "770 KB",
    link1: "https://drive.google.com/file/d/1HiUAUOSIDOEuZu14CWwx6fWPU8nwOlb8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Digimon Saphire (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "513 KB",
    link1: "https://drive.google.com/file/d/1rTENCSELEB3sWYMot3iLTh0D2OwPQ973/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dino Breeder 3 - Gaia Fukkatsu (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dino%20Breeder%203%20-%20Gaia%20Fukkatsu%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1188 KB",
    link1: "https://drive.google.com/file/d/1Q-pxl0LlJOI-SRfTKHW48ojAggMtSc8h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dino Breeder 4 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dino%20Breeder%204%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "761 KB",
    link1: "https://drive.google.com/file/d/1hd7RMbzWktavjZ6uRnZY1QnaC6QR7COK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinosaur (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dinosaur%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "745 KB",
    link1: "https://drive.google.com/file/d/18d9QCQSL8DEI1LECmyZ_797PMAvduiwN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinosaur (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dinosaur%20%28USA%29.png",
    size: "737 KB",
    link1: "https://drive.google.com/file/d/1hgB-o3i9NDyO13SFkrU8vqh42FvO1buO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dinosaur'us (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dinosaur%27us%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "517 KB",
    link1: "https://drive.google.com/file/d/1rsNP6Denn2meJTTki4ymVV4xACb5loCM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Diva Starz - Mall Mania (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Diva%20Starz%20-%20Mall%20Mania%20%28USA%29.png",
    size: "298 KB",
    link1: "https://drive.google.com/file/d/1aZwg0Emqoi6IWtuVpM8GVjgYuIYOSqgv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dogz (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dogz%20%28USA%29.png",
    size: "328 KB",
    link1: "https://drive.google.com/file/d/1gjWyPnAg0AILph6Zn6Y83Aq-bcGap-ei/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dokapon! - Millennium Quest (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dokapon%21%20-%20Millennium%20Quest%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "573 KB",
    link1: "https://drive.google.com/file/d/195A6QgKslvMtT4H8O9fkd7nhOKHdy6to/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doki x Doki Sasete!! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doki%20x%20Doki%20Sasete%21%21%20%28Japan%29.png",
    size: "683 KB",
    link1: "https://drive.google.com/file/d/1fkbOxecRznp36S2AWIcpuCSeFhMVOKYc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dokidoki Densetsu - Mahoujin Guruguru (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dokidoki%20Densetsu%20-%20Mahoujin%20Guruguru%20%28Japan%29.png",
    size: "923 KB",
    link1: "https://drive.google.com/file/d/1C27zTe2k7H7yjtYmqoccRN0PMABxLwjh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald Duck - Daisy o Sukue! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Donald%20Duck%20-%20Daisy%20o%20Sukue%21%20%28Japan%29.png",
    size: "1038 KB",
    link1: "https://drive.google.com/file/d/1CoFOEISY0onmTTW-1ynXh2IrsEI7mzbW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald Duck - Goin' Quackers (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Donald%20Duck%20-%20Goin%27%20Quackers%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1089 KB",
    link1: "https://drive.google.com/file/d/1_H2PaFKX7zRA4KGjN-izAN0A9NBkhoIg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald Duck - Goin' Quackers (Usa) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Donald%20Duck%20-%20Goin%27%20Quackers%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1089 KB",
    link1: "https://drive.google.com/file/d/1YAj0wREufdoDt-oQZD_uoMKqePZtIYg8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donald Duck - Quack Attack (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Donald%20Duck%20-%20Quack%20Attack%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1089 KB",
    link1: "https://drive.google.com/file/d/1CnWKuLuTVpBuRx-QK16IkmgoBeJ0OZuD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong 2001 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Donkey%20Kong%202001%20%28Japan%29.png",
    size: "1171 KB",
    link1: "https://drive.google.com/file/d/1FEA749_tslTy_rGzjM8Uw24svp3vA-kX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country (USA) (En,Fr,De,Es,It) (Demo) (Kiosk)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Donkey%20Kong%20Country%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Sample%29.png",
    size: "1102 KB",
    link1: "https://drive.google.com/file/d/1IVuSeRy3mHf-mG77EHtpPxlTvOEeJcja/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country (USA, Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Donkey%20Kong%20Country%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1201 KB",
    link1: "https://drive.google.com/file/d/1GSwX2k4nNx880bsqC03470WXrU1xS9Yo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Country (Usa, Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Donkey%20Kong%20Country%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1201 KB",
    link1: "https://drive.google.com/file/d/1rC9vebC-qqAcpi8uhsKTf2UugVRzswtt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong GB - Dinky Kong & Dixie Kong (Japan)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "350 KB",
    link1: "https://drive.google.com/file/d/1uMzBnTFwLeYBktDQyRx2MniRqAyqFIgs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Land III DX",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Donkey%20Kong%20Land%20III%20DX%20%28USA%29.png",
    size: "354 KB",
    link1: "https://drive.google.com/file/d/1oJKI5iZmnQn3SobDJL7OEvyBK9uV1_VC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Donkey Kong Land Iii [Gbc]",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "353 KB",
    link1: "https://drive.google.com/file/d/10oX9D_CB_5zRCTXs7QRlItPZJ5GuZ0ZT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Aruke Aruke Labyrinth (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doraemon%20-%20Aruke%20Aruke%20Labyrinth%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "287 KB",
    link1: "https://drive.google.com/file/d/1c1KgnG11IQ_GaShi-BtL-qCJZVH9JBkd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon - Kimi to Pet no Monogatari (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doraemon%20-%20Kimi%20to%20Pet%20no%20Monogatari%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "431 KB",
    link1: "https://drive.google.com/file/d/17zeV9UE1UBsWddGG7Os23bCQihpyUEA7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon Kart 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doraemon%20Kart%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "268 KB",
    link1: "https://drive.google.com/file/d/1kjlaeeRkRkfL-oNRisLhLSUtQekm0fFP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon Memories - Nobita no Omoide Daibouken (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doraemon%20Memories%20-%20Nobita%20no%20Omoide%20Daibouken%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/1K8g2yxWsxMiLLL4lSPykD2qG1GO6XYRp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon no Quiz Boy (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doraemon%20no%20Quiz%20Boy%20%28Japan%29.png",
    size: "322 KB",
    link1: "https://drive.google.com/file/d/14ePLfG9kr222ofHGqMC8vhkmmF8nV9r7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon no Quiz Boy (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doraemon%20no%20Quiz%20Boy%20%28Japan%29%20%28Rev%201%29.png",
    size: "322 KB",
    link1: "https://drive.google.com/file/d/1Qdj5B1d-kKCxL8KtL43JsTczNGBnLs2D/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon no Quiz Boy 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doraemon%20no%20Quiz%20Boy%202%20%28Japan%29.png",
    size: "341 KB",
    link1: "https://drive.google.com/file/d/12RTUtt2MxS4oX-bJLRSJbd22FSRzMAIZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon no Study Boy - Gakushuu Kanji Game (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doraemon%20no%20Study%20Boy%20-%20Gakushuu%20Kanji%20Game%20%28Japan%29.png",
    size: "569 KB",
    link1: "https://drive.google.com/file/d/1USU_T21tCM_Gz6XGOwRL9hQpHF3mYr5-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon no Study Boy - Kanji Yomikaki Master (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doraemon%20no%20Study%20Boy%20-%20Kanji%20Yomikaki%20Master%20%28Japan%29.png",
    size: "161 KB",
    link1: "https://drive.google.com/file/d/1YlvyDisHbTMjLD23t1lEIeA_SC7pjgFP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doraemon no Study Boy - Kuku Game (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doraemon%20no%20Study%20Boy%20-%20Kuku%20Game%20%28Japan%29.png",
    size: "487 KB",
    link1: "https://drive.google.com/file/d/1pwnhnQmacuuKXQpgN7TSv_WexiwnVgjB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Doug's Big Game (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Doug%27s%20Big%20Game%20%28USA%29.png",
    size: "327 KB",
    link1: "https://drive.google.com/file/d/1wnEf8Xx3ZlSaM6zKJhHUfSrOXXNL02Cy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dr. Rin ni Kiitemite! - Koi no Rin Fuusui (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dr.%20Rin%20ni%20Kiitemite%21%20-%20Koi%20no%20Rin%20Fuusui%20%28Japan%29.png",
    size: "627 KB",
    link1: "https://drive.google.com/file/d/1Gj4vsI4TcNzhBRPplk0Ojzy_ZvaSCZSZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dracula - Crazy Vampire (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dracula%20-%20Crazy%20Vampire%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "478 KB",
    link1: "https://drive.google.com/file/d/1g5cqZ8zN4papWYOoGqc1xgW7Bai7QRgF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dracula - Crazy Vampire (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dracula%20-%20Crazy%20Vampire%20%28USA%29.png",
    size: "479 KB",
    link1: "https://drive.google.com/file/d/1VaFGzMSXQ3xpCOVat4x_oo0U6BA4NWVG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Densetsu no Chou Senshi-tachi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Ball%20Z%20-%20Densetsu%20no%20Chou%20Senshi-tachi%20%28Japan%29.png",
    size: "660 KB",
    link1: "https://drive.google.com/file/d/1cJd7erXoxT0QAQ7jjN_RwdD23IVncLGG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Guerreros De Leyenda (Spain)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Ball%20Z%20-%20Guerreros%20de%20Leyenda%20%28Spain%29.png",
    size: "666 KB",
    link1: "https://drive.google.com/file/d/1pNXekTmyyt-nRIp6mv1VdNqhQL0s59fk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Ball Z - Legendary Super Warriors (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Ball%20Z%20-%20Legendary%20Super%20Warriors%20%28USA%29.png",
    size: "661 KB",
    link1: "https://drive.google.com/file/d/162zv1gZ2V2dl7ym3cuyPl3P1KaCFRXjw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Dance (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Dance%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/1H_vTDnXJgLnVJwqL3IaV3Ll2G-vzwpq-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest I & II (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "489 KB",
    link1: "https://drive.google.com/file/d/1trHtqxzYiHwFCwtK6Cy66DCEkDOSXXhz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest III - Soshite Densetsu e... (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Quest%20III%20-%20Soshite%20Densetsu%20e...%20%28Japan%29.png",
    size: "1947 KB",
    link1: "https://drive.google.com/file/d/1H_0Bl3RviKrc7Oi0lDjfVnudtMF5dhnZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest Monsters - Terry no Wonderland (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Quest%20Monsters%20-%20Terry%20no%20Wonderland%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "647 KB",
    link1: "https://drive.google.com/file/d/1WtVVY_swM7OEqe80XaHEgZ020_IhRTvu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest Monsters - Terry no Wonderland (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Quest%20Monsters%20-%20Terry%20no%20Wonderland%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "647 KB",
    link1: "https://drive.google.com/file/d/1HxX7TiH_nEhggwEp1Y9ju6zVgQXI0XJH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest Monsters 2 - Maruta no Fushigi na Kagi - Iru no Bouken (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Quest%20Monsters%202%20-%20Maruta%20no%20Fushigi%20na%20Kagi%20-%20Iru%20no%20Bouken%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1208 KB",
    link1: "https://drive.google.com/file/d/1TpAjOnlFMDtRNBDGNS9lTkahaqzX66_E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest Monsters 2 - Maruta no Fushigi na Kagi - Ruka no Tabidachi (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Quest%20Monsters%202%20-%20Maruta%20no%20Fushigi%20na%20Kagi%20-%20Ruka%20no%20Tabidachi%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1208 KB",
    link1: "https://drive.google.com/file/d/1jFZdgfNXTTezxx0VDlNnl5vK-zcwksfD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Quest Monsters 2 - Maruta no Fushigi na Kagi - Ruka no Tabidachi (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Quest%20Monsters%202%20-%20Maruta%20no%20Fushigi%20na%20Kagi%20-%20Ruka%20no%20Tabidachi%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1208 KB",
    link1: "https://drive.google.com/file/d/17BffsY2J9LJWvkRgnvdDzyZDB_kA5dc0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Tales - Dragon Adventures (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Tales%20-%20Dragon%20Adventures%20%28USA%29.png",
    size: "699 KB",
    link1: "https://drive.google.com/file/d/1fCTb3CCjdh7HrrilecnLuyxOV7tY4XzQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Tales - Dragon Wings (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Tales%20-%20Dragon%20Wings%20%28USA%29.png",
    size: "219 KB",
    link1: "https://drive.google.com/file/d/1p7Yld_NSo9hL9IccrnVsCYpsAGHn7Ynt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior I & II (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "499 KB",
    link1: "https://drive.google.com/file/d/1yndIYesL4WGYf4-2JbGFulR0qM91m_f6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior I And Ii [Gbc]",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "502 KB",
    link1: "https://drive.google.com/file/d/1lS3GHZhPX1Dn0ZYVktqyJkaOarYODcSD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior III (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Warrior%20III%20%28USA%29.png",
    size: "1960 KB",
    link1: "https://drive.google.com/file/d/1ydAlYlzd3YvcVlD52Hb7UmRaepHR5gin/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior Iii [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Warrior%20III%20%28USA%29.png",
    size: "1964 KB",
    link1: "https://drive.google.com/file/d/1ycJrey6bP-SGuWwoaqCzqIIqTBCujJtD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior Monsters (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Warrior%20Monsters%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "769 KB",
    link1: "https://drive.google.com/file/d/1ieZoWlqAf_tMTMO7vIfega-f9IDZZCrf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior Monsters 2 - Cobi's Journey (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Warrior%20Monsters%202%20-%20Cobi%27s%20Journey%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1229 KB",
    link1: "https://drive.google.com/file/d/1q_rzv0b-CJV1iQSZvpW7zuSPafq-s1pg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior Monsters 2 - Cobi's Journey [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Warrior%20Monsters%202%20-%20Cobi%27s%20Journey%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1230 KB",
    link1: "https://drive.google.com/file/d/1ocmtqUxEDCQa9JGaaObpKDyK5JBFgRMC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior Monsters 2 - Tara's Adventure (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Warrior%20Monsters%202%20-%20Tara%27s%20Adventure%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1228 KB",
    link1: "https://drive.google.com/file/d/1vyCRw3L-GbVi50IuLFDLzpLAGpnflD7v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon Warrior Monsters 2 - Tara's Adventure [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%20Warrior%20Monsters%202%20-%20Tara%27s%20Adventure%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1231 KB",
    link1: "https://drive.google.com/file/d/1luUtm1j8C5ePtBXGbqdsGrFCliFtzTmj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon's Lair (USA, Europe) (En,Ja,Fr,De,Es,Zh)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%27s%20Lair%20%28USA%2C%20Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CZh%29.png",
    size: "2507 KB",
    link1: "https://drive.google.com/file/d/1pUEw7TMzGb2I38VGkQ-AicQ0_6iGNLkC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dragon's Lair (Usa, Europe) (En,ja,fr,de,es,zh)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dragon%27s%20Lair%20%28USA%2C%20Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%2CZh%29.png",
    size: "2507 KB",
    link1: "https://drive.google.com/file/d/1RxGKmg6DU2WLoSr7riIJaUZNTgRi3xsy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Driver - You Are The Wheelman (Usa) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Driver%20-%20You%20are%20the%20Wheelman%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/1iXPlPI7GtYJl96H1XShPtNYiorDmNSz1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Driver - You Are the Wheelman (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Driver%20-%20You%20are%20the%20Wheelman%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/1SG6obBs-KitiPB1d9KfhyR9Usz2kot38/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "DryMouth (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "240 KB",
    link1: "https://drive.google.com/file/d/1WVCN60sjQltKgYBJNh-RIajnnGNEcX6A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Duke Nukem (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Duke%20Nukem%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "600 KB",
    link1: "https://drive.google.com/file/d/1FIdwQBEDMP6OhDqo_S7abMNW6Xx1Id-Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Duke Nukem (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Duke%20Nukem%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "598 KB",
    link1: "https://drive.google.com/file/d/1g8iwZTqdcFHui2ZzGbyaOQYOg4vyhw-h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dukes of Hazzard, The - Racing for Home (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dukes%20of%20Hazzard%2C%20The%20-%20Racing%20for%20Home%20%28USA%29.png",
    size: "681 KB",
    link1: "https://drive.google.com/file/d/1cZB9LFai6z6wehqdC3UQJMztbddCZFvh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Dungeon Savior (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Dungeon%20Savior%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "943 KB",
    link1: "https://drive.google.com/file/d/1Ac5G3HZn1bx7Xeso3Fz46xCaPJm3qLlJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.T. - The Extra-Terrestrial - Digital Companion (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/E.T.%20-%20The%20Extra-Terrestrial%20-%20Digital%20Companion%20%28USA%29.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/1qGOEp6xAirFXolH6HW8REP9wW3T6ooq4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.T. - The Extra-Terrestrial - Escape from Planet Earth (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/E.T.%20-%20The%20Extra-Terrestrial%20-%20Escape%20from%20Planet%20Earth%20%28USA%29.png",
    size: "455 KB",
    link1: "https://drive.google.com/file/d/17l80HbdAdkG7Wj5AgHDYa8NAVFYYg-ca/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.T. - The Extra-Terrestrial and the Cosmic Garden (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/E.T.%20-%20The%20Extra-Terrestrial%20and%20the%20Cosmic%20Garden%20%28USA%29.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1vY17u8ZdCqiydUZLXsIm5RuqJwsNM8IK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.T. And The Cosmic Garden (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1OAPgr8GZXFiai3DDeIA3VbaBdkDgBUI7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "E.T. The Extra Terrestrial - Escape From Planet Earth (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/E.T.%20-%20The%20Extra-Terrestrial%20-%20Escape%20from%20Planet%20Earth%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "476 KB",
    link1: "https://drive.google.com/file/d/1nS5RzUzd6eXCiAk3xXCsjdbzlAW9nJeh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ECW Hardcore Revolution (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/ECW%20Hardcore%20Revolution%20%28USA%2C%20Europe%29.png",
    size: "319 KB",
    link1: "https://drive.google.com/file/d/1kHXissSgVrduw31_b2bVsel0oizswJt-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ESPN International Track & Field (USA)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "387 KB",
    link1: "https://drive.google.com/file/d/1CrW662i9q4FhJWOwwfKt-Gh3F1TGMdWC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "ESPN National Hockey Night (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/ESPN%20National%20Hockey%20Night%20%28USA%29.png",
    size: "202 KB",
    link1: "https://drive.google.com/file/d/1MnrsapZuWCcNmWQswtWbrPTy0p0p_cMc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Earthworm Jim - Menace 2 the Galaxy (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Earthworm%20Jim%20-%20Menace%202%20the%20Galaxy%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "274 KB",
    link1: "https://drive.google.com/file/d/1FZqY5VkyaGnMGD2jPtiRbupck7yf-pmh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elevator Action EX (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Elevator%20Action%20EX%20%28Japan%29.png",
    size: "120 KB",
    link1: "https://drive.google.com/file/d/1WN_qyHLw2Bmj4A3V6cMrSiPk-o6Sc3N-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elevator Action Ex (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Elevator%20Action%20EX%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/19MZFxvwgoJY0KOAXoTXLKnnzteetm-mh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Elie no Atelier GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Elie%20no%20Atelier%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "568 KB",
    link1: "https://drive.google.com/file/d/13Of8aS3dsiWYt9fF4kvmy42gBCL4ghtJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Emperor's New Groove, The (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Emperor%27s%20New%20Groove%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "449 KB",
    link1: "https://drive.google.com/file/d/1HlMf5EPcSpS5ZQKUpzzVXlyLZqWNJvGa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Emperor's New Groove, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Emperor%27s%20New%20Groove%2C%20The%20%28USA%29.png",
    size: "327 KB",
    link1: "https://drive.google.com/file/d/1cLMXYL_QLpR6YUVbrrB7sq3Vcl3-hCYX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Estpolis Denki - Yomigaeru Densetsu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Estpolis%20Denki%20-%20Yomigaeru%20Densetsu%20%28Japan%29.png",
    size: "919 KB",
    link1: "https://drive.google.com/file/d/1pGe9Hvn2ZKMcQjMPQf-piCeAxDIZI-A0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "European Super League (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/European%20Super%20League%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "247 KB",
    link1: "https://drive.google.com/file/d/1Rt9lfiO-vhIXtC_gVXC-6A3IUKZrys4d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Evel Knievel (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Evel%20Knievel%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "859 KB",
    link1: "https://drive.google.com/file/d/1_PPxcv57a3pXsh9Q6wWFaDF_3wO0z8Kh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Evel Knievel (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Evel%20Knievel%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "859 KB",
    link1: "https://drive.google.com/file/d/1BcQBSyCt77EZaQvYXqSY79F90oey60Vi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Extreme Ghostbusters (Europe) (En,fr,de,es,it,pt)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Extreme%20Ghostbusters%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.png",
    size: "234 KB",
    link1: "https://drive.google.com/file/d/17jmccRZVr1KLabxUxpRfBBuRg749XdU3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Extreme Sports With The Berenstain Bears (Usa, Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Extreme%20Sports%20with%20the%20Berenstain%20Bears%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1D11Zy1DuIvat0erLpipBYhcvwIBMyNVG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Extreme Sports with the Berenstain Bears (USA, Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Extreme%20Sports%20with%20the%20Berenstain%20Bears%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1lq7XYD2qRWU29m-t41x-CnlK_zPxx9U3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-1 World Grand Prix (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/F-1%20World%20Grand%20Prix%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "526 KB",
    link1: "https://drive.google.com/file/d/1RC6k_1aIyoH4GXGMu0wTn71z9bmaa2ZT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F-18 Thunder Strike (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/F-18%20Thunder%20Strike%20%28USA%2C%20Europe%29.png",
    size: "72 KB",
    link1: "https://drive.google.com/file/d/162e8hbY1pAnRvHu8dSQYgnxykM_q7Ez6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Championship Season 2000 (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/F1%20Championship%20Season%202000%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1037 KB",
    link1: "https://drive.google.com/file/d/19JlsHfqECZtrdDcgCX5BzvhLv9eacZNr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 Racing Championship (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/F1%20Racing%20Championship%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1641 KB",
    link1: "https://drive.google.com/file/d/1eleLEL_fmPvPGeJAeD6KQzKju62dqN74/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 World Grand Prix II for Game Boy Color (Japan) (En,Ja)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/F1%20World%20Grand%20Prix%20II%20for%20Game%20Boy%20Color%20%28Japan%29%20%28En%2CJa%29.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1AUOGW-Gy2cGPmVuc_sN1wahgvdCGDFZv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 World Grand Prix II for Game Boy Color (USA) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/F1%20World%20Grand%20Prix%20II%20for%20Game%20Boy%20Color%20%28USA%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/140QqJ-tiW_ePiJ8_zj1RtXOlMM6OVZSX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "F1 World Grand Prix Ii For Game Boy Color (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/F1%20World%20Grand%20Prix%20II%20for%20Game%20Boy%20Color%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1Nf-jM696KIlr-SUC7BnBTDmr02En0Qkw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "FIFA 2000 (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/FIFA%202000%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "366 KB",
    link1: "https://drive.google.com/file/d/1pTJMO8mwIUy6fxGr7aIU76Gc4tDnATZv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fairy Kitty no Kaiun Jiten - Yousei no Kuni no Uranai Shugyou (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Fairy%20Kitty%20no%20Kaiun%20Jiten%20-%20Yousei%20no%20Kuni%20no%20Uranai%20Shugyou%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "264 KB",
    link1: "https://drive.google.com/file/d/168tGKeMhcJxpRZZxdEzxHhmEmNCdE-UJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fairy Kitty no Kaiun Jiten - Yousei no Kuni no Uranai Shugyou (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Fairy%20Kitty%20no%20Kaiun%20Jiten%20-%20Yousei%20no%20Kuni%20no%20Uranai%20Shugyou%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "264 KB",
    link1: "https://drive.google.com/file/d/1G0c0KXptIDbYq1EcbMkIo1gPwyZ2lPtt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ferret Monogatari (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ferret%20Monogatari%20%28Japan%29.png",
    size: "235 KB",
    link1: "https://drive.google.com/file/d/1aCz2x4vXu8Q-CoYoNvhxt0pEuigYsK2X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fish Files, The (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Fish%20Files%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1944 KB",
    link1: "https://drive.google.com/file/d/1fXpd5MOadJfeqvBhykXnfHqZ3XPBQnK9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flintstones, The - Burgertime In Bedrock (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Flintstones%2C%20The%20-%20Burgertime%20in%20Bedrock%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "212 KB",
    link1: "https://drive.google.com/file/d/1Kd04TOYmqFqKdjGkNinXyJaObVPiBdbQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flintstones, The - Burgertime in Bedrock (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Flintstones%2C%20The%20-%20Burgertime%20in%20Bedrock%20%28USA%29.png",
    size: "213 KB",
    link1: "https://drive.google.com/file/d/1scbtrmnTDWluneUd1EzMGxy-EI0-weqN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Flipper & Lopaka (Europe) (En,fr,de,es,it,pt,nl,sv,no,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "428 KB",
    link1: "https://drive.google.com/file/d/1QD_sslWz7-PnSzja25Bt7F2wnwHQSU8y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Force 21 (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Force%2021%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/1TrrKIwdinmDNr9TTaobP9bqksjIjP9m5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Formula One 2000 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Formula%20One%202000%20%28USA%29.png",
    size: "433 KB",
    link1: "https://drive.google.com/file/d/15qRBkfVAoqGghV-GcFJe0YCchXP70g7B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fort Boyard (Europe) (En,fr,de,es,it,pt,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Fort%20Boyard%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29.png",
    size: "407 KB",
    link1: "https://drive.google.com/file/d/1wkN2RC5yPjkiuIHY8tOhBQ4ne_pDas2k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Frogger%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "29 KB",
    link1: "https://drive.google.com/file/d/1oM1-u8NbgqApXh7Lnqh2QQ468NOiZUOq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Frogger%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/1DCQZXztMUJviGX63ZXmUA_2hXybPJsFe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger (USA) (Rev 1) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Frogger%20%28USA%29%20%28Rev%201%29%20%28GB%20Compatible%29.png",
    size: "30 KB",
    link1: "https://drive.google.com/file/d/1yEaJ0VMF1P1TEhw5VKZ_VBCddsDZFw9Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger (USA) (Rev 2) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Frogger%20%28USA%29%20%28Rev%202%29%20%28GB%20Compatible%29.png",
    size: "30 KB",
    link1: "https://drive.google.com/file/d/1GBeYbp7Q7VJSOrMEyx1pnMHX7v693CtS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Frogger%202%20%28USA%29.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/15EYnWKEVzZQONfNFUj5Gwby62A7KvEv5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger 2 (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Frogger%202%20%28USA%29%20%28Rev%201%29.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/1dfgOzDyhb-r9KxVN0aIhrjdeFJpPLNWs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Frogger DX",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "337 KB",
    link1: "https://drive.google.com/file/d/1istYvyHbt7rUXU8ZuUBBAkedDmPzYgoS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "From TV Animation One Piece - Maboroshi no Grand Line Boukenki! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/From%20TV%20Animation%20One%20Piece%20-%20Maboroshi%20no%20Grand%20Line%20Boukenki%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1456 KB",
    link1: "https://drive.google.com/file/d/1CKn2AkqLkD-cBz-ASMB8ISzOTT-9LrXm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "From TV Animation One Piece - Yume no Luffy Kaizokudan Tanjou! (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/From%20TV%20Animation%20One%20Piece%20-%20Yume%20no%20Luffy%20Kaizokudan%20Tanjou%21%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "962 KB",
    link1: "https://drive.google.com/file/d/150dTba86YPIwRFTUo-NU2nfb5KN9sCXC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "From TV Animation One Piece - Yume no Luffy Kaizokudan Tanjou! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/From%20TV%20Animation%20One%20Piece%20-%20Yume%20no%20Luffy%20Kaizokudan%20Tanjou%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "962 KB",
    link1: "https://drive.google.com/file/d/11bkBST4YyrTA9KdUQQDrg8UsPasgqhiP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Front Line - The Next Mission (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Front%20Line%20-%20The%20Next%20Mission%20%28Japan%29.png",
    size: "191 KB",
    link1: "https://drive.google.com/file/d/1FEEwXMTaGzCYd24o8xzr-TKXNwn8qy3P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Front Row (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Front%20Row%20%28Japan%29.png",
    size: "224 KB",
    link1: "https://drive.google.com/file/d/1mWxamaEqwowumhTos4CXnTaqcpELu1l1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fushigi no Dungeon - Fuurai no Shiren GB 2 - Sabaku no Majou (Japan) (AFMJ)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Fushigi%20no%20Dungeon%20-%20Fuurai%20no%20Shiren%20GB%202%20-%20Sabaku%20no%20Majou%20%28Japan%29%20%28AFMJ%29.png",
    size: "1246 KB",
    link1: "https://drive.google.com/file/d/1rWoD7v_surNT-lCCNNfh338BVdUO4aiv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Fushigi no Dungeon - Fuurai no Shiren GB 2 - Sabaku no Majou (Japan) (BFWJ)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Fushigi%20no%20Dungeon%20-%20Fuurai%20no%20Shiren%20GB%202%20-%20Sabaku%20no%20Majou%20%28Japan%29%20%28BFWJ%29.png",
    size: "1246 KB",
    link1: "https://drive.google.com/file/d/1KXaitJeO131_Z7O9JVDXH6Y0p2tiM9J0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GB Harobots (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/GB%20Harobots%20%28Japan%29.png",
    size: "773 KB",
    link1: "https://drive.google.com/file/d/1TXqBiA0vbhQJ0M2IyG_tG04hJ3rNxdTs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GB Karan Koron Gakuen - Hanafuda Mahjong (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/GB%20Karan%20Koron%20Gakuen%20-%20Hanafuda%20Mahjong%20%28Japan%29.png",
    size: "164 KB",
    link1: "https://drive.google.com/file/d/1oTQuSe0y_9X9sKrrZ6Z-dIbYqUoy0x1E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GB Memory Multi Menu (Japan) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "16 KB",
    link1: "https://drive.google.com/file/d/1KmBje1otP38upHOD6kU-XOgF9vO4L331/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gaiamaster Duel - Card Attackers (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gaiamaster%20Duel%20-%20Card%20Attackers%20%28Japan%29.png",
    size: "647 KB",
    link1: "https://drive.google.com/file/d/1HwO137eIYqqFtmy7tOo9e5mSXSy6Np91/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gakkyuu Ou Yamazaki (Japan) (Rev 1) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gakkyuu%20Ou%20Yamazaki%20%28Japan%29%20%28Rev%201%29%20%28GB%20Compatible%29.png",
    size: "290 KB",
    link1: "https://drive.google.com/file/d/1bONErWFCc9VQEoBs86rchi9UifPsE9J7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Galaga - Destination Earth (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Galaga%20-%20Destination%20Earth%20%28USA%29.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1wL63OMqKzAaQZmVCbAyIpZiDjitzdWu3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gambler Densetsu Tetsuya - Shinjuku Tenun Hen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gambler%20Densetsu%20Tetsuya%20-%20Shinjuku%20Tenun%20Hen%20%28Japan%29.png",
    size: "401 KB",
    link1: "https://drive.google.com/file/d/1JHs9b_uENPB58ROMrD-KYaSJvceiJXFD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gambler Densetsu Tetsuya - Shinjuku Tenun Hen (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gambler%20Densetsu%20Tetsuya%20-%20Shinjuku%20Tenun%20Hen%20%28Japan%29%20%28Rev%201%29.png",
    size: "401 KB",
    link1: "https://drive.google.com/file/d/1EmGp5C_FZ1ugSA0ewA0FWrAnPjqg9z3-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game & Watch Gallery 2 (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "594 KB",
    link1: "https://drive.google.com/file/d/1KZg63ddsnHlpkbsLd8ChlS0cGnVnzw9b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game & Watch Gallery 3 (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "464 KB",
    link1: "https://drive.google.com/file/d/1Jy8DyKpFi9orw2kLfV0iAYr7YXu0ESQo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Boy Gallery 3 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Game%20Boy%20Gallery%203%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "473 KB",
    link1: "https://drive.google.com/file/d/1Vi2mq_VI0b2nYomhOf5tddrH9qShf6AF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Boy Wars 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Game%20Boy%20Wars%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "222 KB",
    link1: "https://drive.google.com/file/d/1ErC-kUrG8dqaT3qIpcAKQyUeNTYXO3O_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Boy Wars 3 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Game%20Boy%20Wars%203%20%28Japan%29.png",
    size: "310 KB",
    link1: "https://drive.google.com/file/d/1R8f6avK0HFNDSnZFvifPyuog1uc49h8y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Game Conveni 21 (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Game%20Conveni%2021%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "382 KB",
    link1: "https://drive.google.com/file/d/1KZsxC27cru9JVsLlppOD-7qS5WTm3-A9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GameShark MX (USA) (v1.02) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1fvU0II_BYMFTeLC1AdpCSrinDFAl3mxF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "GameShark Online (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "23 KB",
    link1: "https://drive.google.com/file/d/1U6eqr72Jm8QXjCVHwXa9-fB3uL81Tu66/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare Goemon - Mononoke Douchuu Tobidase Nabebugyou! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ganbare%20Goemon%20-%20Mononoke%20Douchuu%20Tobidase%20Nabebugyou%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "735 KB",
    link1: "https://drive.google.com/file/d/1RlVEH4o5SzRSjTaE4sdO7lihIwl6fkiE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare Goemon - Seikuushi Dynamites Arawaru!! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ganbare%20Goemon%20-%20Seikuushi%20Dynamites%20Arawaru%21%21%20%28Japan%29.png",
    size: "536 KB",
    link1: "https://drive.google.com/file/d/1DznOkUrRx2vk30KqdJvVCfnxEzqu7wFd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare Goemon - Tengutou no Gyakushuu (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ganbare%20Goemon%20-%20Tengutou%20no%20Gyakushuu%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "299 KB",
    link1: "https://drive.google.com/file/d/19819AS5t_QWSdfS1yrWAhQStZWjwaLBh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ganbare! Nippon! Olympic 2000 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ganbare%21%20Nippon%21%20Olympic%202000%20%28Japan%29.png",
    size: "387 KB",
    link1: "https://drive.google.com/file/d/1ISLUQaXX3rRbYd-Z8S-izcLbLQdQzvBF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gekisou Dangun Racer - Onsoku Buster Dangun Dan (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gekisou%20Dangun%20Racer%20-%20Onsoku%20Buster%20Dangun%20Dan%20%28Japan%29.png",
    size: "504 KB",
    link1: "https://drive.google.com/file/d/1Hh4DMH2kxMkD1z_nMIjw82jOSsktpMLV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gem Gem Monster (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gem%20Gem%20Monster%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "281 KB",
    link1: "https://drive.google.com/file/d/1LdugiE6WwUbThG00gvHuNLnp_it2eGie/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gensou Maden Saiyuuki - Sabaku no Shijin (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gensou%20Maden%20Saiyuuki%20-%20Sabaku%20no%20Shijin%20%28Japan%29.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/1fO-trrYhxn02GGLtdDNo2FTf2Rxm02ij/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Get Chuu Club - Minna no Konchuu Daizukan (Japan) (Rumble Version) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Get%20Chuu%20Club%20-%20Minna%20no%20Konchuu%20Daizukan%20%28Japan%29%20%28Rumble%20Version%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/126eLrURzdTW9lkWRvwPRzPLzCGxVN5Lj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gex - Enter the Gecko (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gex%20-%20Enter%20the%20Gecko%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "238 KB",
    link1: "https://drive.google.com/file/d/1TV5VV2FdZ_IUJdQakahPcz8gZWfzq50j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gex 3 - Deep Cover Gecko (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gex%203%20-%20Deep%20Cover%20Gecko%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "480 KB",
    link1: "https://drive.google.com/file/d/1V4JNQEzNgqPROVafhLY5Um_5P3cuM3q8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gex 3 - Deep Pocket Gecko (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gex%203%20-%20Deep%20Pocket%20Gecko%20%28USA%29.png",
    size: "480 KB",
    link1: "https://drive.google.com/file/d/1aHFIPXE-9I-sIQErcZv5JxBtQLWvr1cu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ghosts'n Goblins (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ghosts%27n%20Goblins%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "87 KB",
    link1: "https://drive.google.com/file/d/1Zw0HY8EhPtUIrKEcCfAOLFp0cGaTcR18/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Glocal Hexcite (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Glocal%20Hexcite%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1JnaITtPZWUbl4kxZ-FBakxk1Rn1COipC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gobs of Games (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gobs%20of%20Games%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "333 KB",
    link1: "https://drive.google.com/file/d/1h5fnIATTfqFY96IY5aZR2T9B1b1kKUTx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Godzilla - The Series (USA) (En,Fr,De) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Godzilla%20-%20The%20Series%20%28USA%29%20%28En%2CFr%2CDe%29%20%28GB%20Compatible%29.png",
    size: "470 KB",
    link1: "https://drive.google.com/file/d/1cuWF70THsibKRAH97o6YFVWjVSquNEjw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Godzilla - The Series - Monster Wars (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Godzilla%20-%20The%20Series%20-%20Monster%20Wars%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "430 KB",
    link1: "https://drive.google.com/file/d/1Vl6iUK3p7Az6PyBQK31llvq7TDCK86t6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gold And Glory - The Road To El Dorado (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gold%20and%20Glory%20-%20The%20Road%20to%20El%20Dorado%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "530 KB",
    link1: "https://drive.google.com/file/d/1-FvooXUKwtmfpmTsSQqXKhMxSlMf5V-f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gold and Glory - The Road to El Dorado (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gold%20and%20Glory%20-%20The%20Road%20to%20El%20Dorado%20%28USA%29.png",
    size: "529 KB",
    link1: "https://drive.google.com/file/d/1NfXgpYiQfW-kptZhpIB8kqJnnBhe4BjO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golden Goal (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Golden%20Goal%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29%20%28GB%20Compatible%29.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/1NyMxjq6cvlCrKcbOv8XTKpfBu9Py8DCm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf Daisuki! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Golf%20Daisuki%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "746 KB",
    link1: "https://drive.google.com/file/d/1AuGF-WHuFBHKCRYpvN5RQkDwE4M7Vpzh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf Ou - The King of Golf (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Golf%20Ou%20-%20The%20King%20of%20Golf%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1011 KB",
    link1: "https://drive.google.com/file/d/10b9vvzxzFaYaLZCztMeXfCYp7wJypLqH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Golf de Ohasuta (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Golf%20de%20Ohasuta%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1YY03Ah4c-HL34yRlGUWK27PZKCOvhupD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gonta no Okiraku Daibouken (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gonta%20no%20Okiraku%20Daibouken%20%28Japan%29.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1Hf3Hjqmas3vevL0BJMznZm-lK2HOaXAo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Goraku Ou Tango! (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Goraku%20Ou%20Tango%21%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "195 KB",
    link1: "https://drive.google.com/file/d/1lK0Sj-fveAKxB7Vo97_BMyzEOk8vkSGE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Grand Theft Auto (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Grand%20Theft%20Auto%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "1458 KB",
    link1: "https://drive.google.com/file/d/1MKREJooLWXcwCW4BVQpAc75TDa4AHDh0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Grand Theft Auto (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Grand%20Theft%20Auto%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "1277 KB",
    link1: "https://drive.google.com/file/d/1_76FN85fhtegh4jBjO-yrGML9oFRXPys/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Grand Theft Auto 2 (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Grand%20Theft%20Auto%202%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "678 KB",
    link1: "https://drive.google.com/file/d/1OO_8oMYd35689k8OJgfWNcT75vlR4-YI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Grand Theft Auto 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Grand%20Theft%20Auto%202%20%28USA%29.png",
    size: "678 KB",
    link1: "https://drive.google.com/file/d/1g0VTSoVbUNihoTrwErn1-m2akV-7ZMRU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Grandia - Parallel Trippers (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Grandia%20-%20Parallel%20Trippers%20%28Japan%29.png",
    size: "1112 KB",
    link1: "https://drive.google.com/file/d/1f8nG9LX3NHsszbplGfVhOyBIj5vggHaO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Granduel - Shinki Dungeon no Hihou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Granduel%20-%20Shinki%20Dungeon%20no%20Hihou%20%28Japan%29.png",
    size: "462 KB",
    link1: "https://drive.google.com/file/d/166JEbQFtSno9R9Lqp__ksRZ481HMNpFN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Granduel - Shinki Dungeon no Hihou (Japan) (Sample)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Granduel%20-%20Shinki%20Dungeon%20no%20Hihou%20%28Japan%29.png",
    size: "376 KB",
    link1: "https://drive.google.com/file/d/1bf2kBnWCs5jAdWfB2ryEyp4OY17blYSq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Great Battle Pocket, The (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Great%20Battle%20Pocket%2C%20The%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "318 KB",
    link1: "https://drive.google.com/file/d/1QxJ7zAbhO1jMgI5GTsYhBDH0NIw7ahfs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gremlins Unleashed (Europe) (En,fr,de,es,it,pt)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gremlins%20-%20Unleashed%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.png",
    size: "524 KB",
    link1: "https://drive.google.com/file/d/1l9ciDEnbRb-W7nu9JmEdbhJZTSxQlo4j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Grinch (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Grinch%20%28Japan%29.png",
    size: "344 KB",
    link1: "https://drive.google.com/file/d/1vLeiUNAFqKMH-Fxe371r5j6B5pmAL-0u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Grinch, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Grinch%2C%20The%20%28USA%29.png",
    size: "347 KB",
    link1: "https://drive.google.com/file/d/1fPDf3mnltERy-c2x73wSkMaXYzMGJeFg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Guruguru Garakutas (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Guruguru%20Garakutas%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "699 KB",
    link1: "https://drive.google.com/file/d/1O3ZuUqmxJcQFok_YIUSQKDJ_0GVdFR9p/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Guruguru Town Hanamaru-kun (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Guruguru%20Town%20Hanamaru-kun%20%28Japan%29.png",
    size: "67 KB",
    link1: "https://drive.google.com/file/d/13UpG_Hhp09j6TlS4BkIlnpg0fZvsfMhK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Gyouten Ningen Batseelor - Doctor Guy no Yabou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Gyouten%20Ningen%20Batseelor%20-%20Doctor%20Guy%20no%20Yabou%20%28Japan%29.png",
    size: "973 KB",
    link1: "https://drive.google.com/file/d/1pbKMGzXayoKAfU4D_jg_xCw-rlzBLXbP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Halloween Racer (Europe) (En,fr,de,es,it,pt)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Halloween%20Racer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.png",
    size: "237 KB",
    link1: "https://drive.google.com/file/d/1aS30b-FpYF5zm2FWWx0Kn-YkaZIUWFCE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamster Club (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamster%20Club%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "475 KB",
    link1: "https://drive.google.com/file/d/1fheSgirH9-lR7cawvgmO_Gc-urLzgUH4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamster Club - Awasete Chuu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamster%20Club%20-%20Awasete%20Chuu%20%28Japan%29.png",
    size: "141 KB",
    link1: "https://drive.google.com/file/d/1tmB6jJgEMD67kukIj31ceHJksOHnMJfj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamster Club - Oshiema Chuu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamster%20Club%20-%20Oshiema%20Chuu%20%28Japan%29.png",
    size: "353 KB",
    link1: "https://drive.google.com/file/d/16FTUdZydXcaSOOkAbEqaRGrr5Ls3i9QY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamster Club 2 (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamster%20Club%202%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "746 KB",
    link1: "https://drive.google.com/file/d/1iwpLtZMG-WUB9JUaUEfJM69CaXU5JGfx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamster Monogatari GB + Magi Ham no Mahou Shoujo (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamster%20Monogatari%20GB%20%2B%20Magi%20Ham%20no%20Mahou%20Shoujo%20%28Japan%29.png",
    size: "872 KB",
    link1: "https://drive.google.com/file/d/1uxiSRt7b5sL5y2GoJ8gwNVuqEzo293R-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamster Paradise (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamster%20Paradise%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "402 KB",
    link1: "https://drive.google.com/file/d/1LcpqBjAr8LNHK2oQVeXV9MoW1pvmky1H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamster Paradise 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamster%20Paradise%202%20%28Japan%29.png",
    size: "595 KB",
    link1: "https://drive.google.com/file/d/1p6flzdezxqGR_yWJr9X28ghyUaXP1Ema/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamster Paradise 2 (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamster%20Paradise%202%20%28Japan%29%20%28Rev%201%29.png",
    size: "610 KB",
    link1: "https://drive.google.com/file/d/1c7CvhaN1TXvNXMYa1Icj9pqFw-8WEVP_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamster Paradise 3 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamster%20Paradise%203%20%28Japan%29.png",
    size: "1576 KB",
    link1: "https://drive.google.com/file/d/1oobYGI3mh24TNjHBtPsd4B3_dJ9zPCuS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamster Paradise 4 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamster%20Paradise%204%20%28Japan%29.png",
    size: "1665 KB",
    link1: "https://drive.google.com/file/d/1_MENn7EqLFICsz_DG20xFf3MWNksvo2u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamtaro - Ham-Hams Unite! (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamtaro%20-%20Ham-Hams%20Unite%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1456 KB",
    link1: "https://drive.google.com/file/d/1lwzBzCuScrmt9TlQWNvO6KgR8Licu4ck/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamtaro - Ham-Hams Unite! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamtaro%20-%20Ham-Hams%20Unite%21%20%28USA%29.png",
    size: "944 KB",
    link1: "https://drive.google.com/file/d/1FnoW7OriDX7gvSKhlFqT2xmcnLJv_utT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hamunaptra - Ushinawareta Sabaku no Miyako (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hamunaptra%20-%20Ushinawareta%20Sabaku%20no%20Miyako%20%28Japan%29.png",
    size: "507 KB",
    link1: "https://drive.google.com/file/d/1RbYQwi_oQ6IKws-GSrXsW1QWmNuu7DBp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hana Yori Dango - Another Love Story (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hana%20Yori%20Dango%20-%20Another%20Love%20Story%20%28Japan%29.png",
    size: "677 KB",
    link1: "https://drive.google.com/file/d/1v4H3L3pYHTAOYfDWc2dgVihxi_UZG5Su/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hanasaka Tenshi Tenten-kun no Beat Breaker (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hanasaka%20Tenshi%20Tenten-kun%20no%20Beat%20Breaker%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/1INRq55ePEo-yO5mBcTcNEyytf1sveeb4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hands Of Time (Usa, Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hands%20of%20Time%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "535 KB",
    link1: "https://drive.google.com/file/d/1mD3UE89b86DrPExLGp0Py_if5suMujIy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hands of Time (USA, Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hands%20of%20Time%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "535 KB",
    link1: "https://drive.google.com/file/d/1jjKxfjxF34N7RrzXim_vMt5RI1jBDClC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harley-Davidson Motor Cycles - Race Across America (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Harley-Davidson%20Motor%20Cycles%20-%20Race%20Across%20America%20%28USA%29.png",
    size: "135 KB",
    link1: "https://drive.google.com/file/d/15I--dOg7J-IOJQe0O1xCH5EdBPaM8inK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harry Potter 2 - The Black Art Wrestle Edition (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "415 KB",
    link1: "https://drive.google.com/file/d/1kAC41DUey4rNXtsVG18Q6srmru77YE7C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harry Potter 3 (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/1-fsV5-JGJDcxDRbPzie01H11tqhb9bNC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harry Potter And The Chamber Of Secrets (Usa, Europe) (En,fr,de,es,it,pt,nl,sv,da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Harry%20Potter%20and%20the%20Chamber%20of%20Secrets%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CDa%29.png",
    size: "2802 KB",
    link1: "https://drive.google.com/file/d/1a4yXNdbv6jHeX70r2Jeu2Q83nozfBQkQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harry Potter And The Sorcerer's Stone (Usa, Europe) (En,fr,de,es,it,pt,nl,sv,no,da,fi)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Harry%20Potter%20and%20the%20Sorcerer%27s%20Stone%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.png",
    size: "2702 KB",
    link1: "https://drive.google.com/file/d/168ZwBzuJuKvqkmjo1hLn09XokM9uOir0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harry Potter II (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "378 KB",
    link1: "https://drive.google.com/file/d/1l0-d7ZTzt-w_sFX6dYBvo6CIkh3kpBhT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harry Potter and the Chamber of Secrets (USA, Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,Da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Harry%20Potter%20and%20the%20Chamber%20of%20Secrets%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CDa%29.png",
    size: "2802 KB",
    link1: "https://drive.google.com/file/d/1F-1fvPlyVkmP7Ld_dYgUqHhLC8FYjc6q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harry Potter and the Sorcerer's Stone (USA, Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da,Fi)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Harry%20Potter%20and%20the%20Sorcerer%27s%20Stone%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.png",
    size: "2702 KB",
    link1: "https://drive.google.com/file/d/1ZAdahDInGaWlsvMr1G7CQMCd43EHfzlJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harry Potter to Kenja no Ishi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Harry%20Potter%20to%20Kenja%20no%20Ishi%20%28Japan%29.png",
    size: "1874 KB",
    link1: "https://drive.google.com/file/d/14owW8rz_wIr_yyQIYsBlOOml8iavo0TU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harvest Moon 2 GBC (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Harvest%20Moon%202%20GBC%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "439 KB",
    link1: "https://drive.google.com/file/d/1PnZpEyGjqzHEftK3XmLPoalfpfa3I2ke/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harvest Moon 3 GBC (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Harvest%20Moon%203%20GBC%20%28USA%29.png",
    size: "623 KB",
    link1: "https://drive.google.com/file/d/1casMLnHrI83p2YkCqJjCzDddUUIGyDCP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harvest Moon GBC (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Harvest%20Moon%20GBC%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "532 KB",
    link1: "https://drive.google.com/file/d/10Mh0Q9OGG3Ba3RqTq-RouRma_m0HR7D-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Harvest Moon [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Harvest%20Moon%20GBC%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "531 KB",
    link1: "https://drive.google.com/file/d/1iNXKkt3EYMbyAhPPlXQId3juucxEueAu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty no Beads Factory (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hello%20Kitty%20no%20Beads%20Factory%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "265 KB",
    link1: "https://drive.google.com/file/d/1kigtcPStn3oKfjicShRkF5QsQH-XeFlR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty no Happy House (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hello%20Kitty%20no%20Happy%20House%20%28Japan%29.png",
    size: "448 KB",
    link1: "https://drive.google.com/file/d/1o0irgoVRq2AP1_F_ksUqm3lM5saqv4aN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty no Magical Museum (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hello%20Kitty%20no%20Magical%20Museum%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "274 KB",
    link1: "https://drive.google.com/file/d/1XveGlGXEEiZ1THdZt0B12byHlyGVVg46/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty no Sweet Adventure - Daniel-kun ni Aitai (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hello%20Kitty%20no%20Sweet%20Adventure%20-%20Daniel-kun%20ni%20Aitai%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "551 KB",
    link1: "https://drive.google.com/file/d/1D9VgbtlN19BRkFZK6Slukgsw3p1qmUXz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty to Dear Daniel no Dream Adventure (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hello%20Kitty%20to%20Dear%20Daniel%20no%20Dream%20Adventure%20%28Japan%29.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/12ajN1EAGWH-FYv2S0ylA1WUbUX3_gQF_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hello Kitty's Cube Frenzy (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hello%20Kitty%27s%20Cube%20Frenzy%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1T-iy5wtdqEal3mzsH43-9qGq58mI6rU0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hercules - The Legendary Journeys (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hercules%20-%20The%20Legendary%20Journeys%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "490 KB",
    link1: "https://drive.google.com/file/d/1yl__aGOlYJIxuoLRoi3JO6eXZE06pkok/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hero Hero-kun (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hero%20Hero-kun%20%28Japan%29.png",
    size: "1144 KB",
    link1: "https://drive.google.com/file/d/13RfNAWfgOosQei9fKz3OXMbptCdtbCaV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heroes of Might and Magic (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Heroes%20of%20Might%20and%20Magic%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "389 KB",
    link1: "https://drive.google.com/file/d/1jAIQNMNISXOZ82yxGtSb1h7IE4d2JCJa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Heroes of Might and Magic II (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Heroes%20of%20Might%20and%20Magic%20II%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "490 KB",
    link1: "https://drive.google.com/file/d/1sttDgHONrvg2e1iCg4km6dlD7k2jH1V-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hexcite - The Shapes of Victory (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hexcite%20-%20The%20Shapes%20of%20Victory%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "72 KB",
    link1: "https://drive.google.com/file/d/12N88P3TLa2XhRecyowyTost9sor69q90/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hiryuu no Ken - Retsuden GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hiryuu%20no%20Ken%20-%20Retsuden%20GB%20%28Japan%29.png",
    size: "147 KB",
    link1: "https://drive.google.com/file/d/1_PX1PVURN9ll1Qpuu0-slIyFiXiq6lWP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hissatsu Pachinko Boy - CR Monster House (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hissatsu%20Pachinko%20Boy%20-%20CR%20Monster%20House%20%28Japan%29.png",
    size: "103 KB",
    link1: "https://drive.google.com/file/d/14nuD0emfJE7lv5GkHhMjM1NOkEbzVhW8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hole in One Golf (USA) (Rumble Version) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hole%20In%20One%20Golf%20%28USA%29%20%28Rumble%20Version%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "99 KB",
    link1: "https://drive.google.com/file/d/1X0uo8EGvr0y02hw6zNrBaEqqDsQfgz3y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hollywood Pinball (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hollywood%20Pinball%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "205 KB",
    link1: "https://drive.google.com/file/d/1Mfh_zzjGDPRqfv6S-QMvgVd5zCX-T_Jf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Honkaku Hanafuda GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Honkaku%20Hanafuda%20GB%20%28Japan%29.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/10P227zxH1BGhx06WHN4SPjGCi1WHWoll/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Honkaku Shougi - Shougi Ou (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Honkaku%20Shougi%20-%20Shougi%20Ou%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1JVmGzQj7fR_JwA2aCU_8V1tpZw4T4cgg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Honkaku Taisen Shougi Ayumu (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Honkaku%20Taisen%20Shougi%20Ayumu%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1IxNlHuvNWaoZVcaAiFyn_qtUbcQEaHd2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Honkaku Yonin Uchi Mahjong - Mahjong Ou (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Honkaku%20Yonin%20Uchi%20Mahjong%20-%20Mahjong%20Ou%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "118 KB",
    link1: "https://drive.google.com/file/d/1J-xAMV2skDex_ZmxQQaAR7KcV-W5-Qj6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hot Wheels - Stunt Track Driver (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hot%20Wheels%20-%20Stunt%20Track%20Driver%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "290 KB",
    link1: "https://drive.google.com/file/d/1vuIvrl1Eycm6sMkIZsOHDvCA2u49dXpM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hoyle Card Games (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hoyle%20Card%20Games%20%28USA%29.png",
    size: "214 KB",
    link1: "https://drive.google.com/file/d/16Wu3rqSfsamokOo_2fkbhmepWd7negg3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hoyle Casino (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hoyle%20Casino%20%28USA%29.png",
    size: "483 KB",
    link1: "https://drive.google.com/file/d/10SivlqGxi7J3FoqOY_HWb1W0FCnbJcID/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hugo - Black Diamond Fever (Europe) (En,fr,de,es,it,pt,nl,sv,no,da,fi)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hugo%20-%20Black%20Diamond%20Fever%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.png",
    size: "245 KB",
    link1: "https://drive.google.com/file/d/1vXcXqruZ7vd_5vX7DumFgWXCpM244ZSE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hugo - The Evil Mirror (Europe) (En,fr,de,es,it,pt,nl,sv,no,da,fi)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hugo%20-%20The%20Evil%20Mirror%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%2CSv%2CNo%2CDa%2CFi%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1He124kbV4LvnxelqJiNH1fZKYps5JJcA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunter x Hunter - Hunter no Keifu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hunter%20x%20Hunter%20-%20Hunter%20no%20Keifu%20%28Japan%29.png",
    size: "476 KB",
    link1: "https://drive.google.com/file/d/1IoahEe1i4NXDMjlX0PyR21-wlfnDpZxG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hunter x Hunter - Kindan no Hihou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hunter%20x%20Hunter%20-%20Kindan%20no%20Hihou%20%28Japan%29.png",
    size: "440 KB",
    link1: "https://drive.google.com/file/d/1LLy4nd0oTxQFHw3LHI1k4UE7SfbRAXWw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hype - The Time Quest (Europe) (En,fr,de,es,it,nl,sv,da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hype%20-%20The%20Time%20Quest%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CDa%29.png",
    size: "425 KB",
    link1: "https://drive.google.com/file/d/1hlyNkqdgoC8KvMaG1WRVwTr8m-YoYxQv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hyper Olympic - Winter 2000 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Hyper%20Olympic%20-%20Winter%202000%20%28Japan%29.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/10tNNrbOaDmsiQwtaXiiUclM0nkzh6m43/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Hyper Olympic Series - Track & Field GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1xJ1h4t0Gc6xlwd4QEQfESKWJ0gdHKgoQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ide Yousuke no Mahjong Kyoushitsu GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ide%20Yousuke%20no%20Mahjong%20Kyoushitsu%20GB%20%28Japan%29.png",
    size: "523 KB",
    link1: "https://drive.google.com/file/d/131FPYkX7ooHotvy1smhs9XcBu7mft7HY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Indiana Jones and the Infernal Machine (USA, Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Indiana%20Jones%20and%20the%20Infernal%20Machine%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "562 KB",
    link1: "https://drive.google.com/file/d/1FOXe1j16IqYEGxYVZC3xUiWZ2i2W8tgX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inspector Gadget - Operation Madkactus (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Inspector%20Gadget%20-%20Operation%20Madkactus%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "590 KB",
    link1: "https://drive.google.com/file/d/1Qmi0Spp5u4YKMpk6dlOqMeKRFMYqQDDW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Inspector Gadget - Operation Madkactus (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Inspector%20Gadget%20-%20Operation%20Madkactus%20%28USA%29.png",
    size: "590 KB",
    link1: "https://drive.google.com/file/d/1wJ5MwsPDdjWbBuWBv0oiOgM-QeYq9cSt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Rally (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/International%20Rally%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "481 KB",
    link1: "https://drive.google.com/file/d/16kFOkceKMkKQdmtrItNHHz22S8g6-pyG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Superstar Soccer 2000 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/International%20Superstar%20Soccer%202000%20%28USA%29.png",
    size: "394 KB",
    link1: "https://drive.google.com/file/d/1Dh7z-UwgoJbDrxuc3Lmbnpe-p0O37Il5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Superstar Soccer 99 (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/International%20Superstar%20Soccer%2099%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1DvnLwo30ASNQsMr6wPH72ta1tWqh_4Cq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "International Track & Field (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "352 KB",
    link1: "https://drive.google.com/file/d/1YmVW7EI4xQTI_4al7DIDqoWI_kVXD3cN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "It's a World Rally (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/It%27s%20a%20World%20Rally%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "406 KB",
    link1: "https://drive.google.com/file/d/1_7-BomoGiXgDtvuZmeYB3wdsnCDntZA9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Itsudemo Pachinko GB - CR Monster House (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Itsudemo%20Pachinko%20GB%20-%20CR%20Monster%20House%20%28Japan%29.png",
    size: "208 KB",
    link1: "https://drive.google.com/file/d/1PQ2AEoh-xS2FpFjeyV-JaTuQ8yxIzlh8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "J.League Excite Stage GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/J.League%20Excite%20Stage%20GB%20%28Japan%29.png",
    size: "198 KB",
    link1: "https://drive.google.com/file/d/1fsL6AL9pEn5u2pKyXgFlYNWlVl8RbrEd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "J.League Excite Stage Tactics (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/J.League%20Excite%20Stage%20Tactics%20%28Japan%29.png",
    size: "421 KB",
    link1: "https://drive.google.com/file/d/1rZgpHweuw_Zr0kOM33PkMVuKbuKjH3Fw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jack no Daibouken - Daimaou no Gyakushuu (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jack%20no%20Daibouken%20-%20Daimaou%20no%20Gyakushuu%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "383 KB",
    link1: "https://drive.google.com/file/d/1WbSEeHfUGBS1J6fUosQMxf8qqeuGiWqV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jagainu-kun (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jagainu-kun%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "222 KB",
    link1: "https://drive.google.com/file/d/18bgampmqWC3iP5oXhA85HYm_Fgj56QwE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jaguar Mishin Sashi Senyou Soft - Mario Family (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jaguar%20Mishin%20Sashi%20Senyou%20Soft%20-%20Mario%20Family%20%28Japan%29.png",
    size: "195 KB",
    link1: "https://drive.google.com/file/d/1uaWXM8jdfX1y0h8GcMuvyQ7i1SCs5Xjb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jankyuusei - Cosplay Paradise (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jankyuusei%20-%20Cosplay%20Paradise%20%28Japan%29.png",
    size: "1202 KB",
    link1: "https://drive.google.com/file/d/1TWXwXMCkcVgZndMYhTmFmUVf4QgKH7Gm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeff Gordon XS Racing (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jeff%20Gordon%20XS%20Racing%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "98 KB",
    link1: "https://drive.google.com/file/d/1ZVIJW1kaGe9dlYAEq1filgCwJFdDDIjm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jeremy McGrath Supercross 2000 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jeremy%20McGrath%20Supercross%202000%20%28USA%2C%20Europe%29.png",
    size: "228 KB",
    link1: "https://drive.google.com/file/d/1ki-BR3QOXttoM2xss03hz26nAw6yCi9s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jet de Go! - Let's Go by Airliner (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jet%20de%20Go%21%20-%20Let%27s%20Go%20by%20Airliner%20%28Japan%29.png",
    size: "438 KB",
    link1: "https://drive.google.com/file/d/1FARaifx0cGJNV-cHgmOaJGmNwAc3TheH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jim Henson's Bear in the Big Blue House (USA) (En,Fr,De,Es,It,Nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jim%20Henson%27s%20Bear%20in%20the%20Big%20Blue%20House%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "226 KB",
    link1: "https://drive.google.com/file/d/1TtHGZk7avvNts-J3J4owMcPiA1RfJ1h3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jim Henson's Muppets (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jim%20Henson%27s%20Muppets%20%28USA%29.png",
    size: "993 KB",
    link1: "https://drive.google.com/file/d/1dsmA2s_20LpU1vuFiXAVvfXp63bXJXQZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jinsei Game - Tomodachi Takusan Tsukurou yo! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jinsei%20Game%20-%20Tomodachi%20Takusan%20Tsukurou%20yo%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "371 KB",
    link1: "https://drive.google.com/file/d/1CYjbg2q9MG5ob5kZr-cDcQ2avb-yhRse/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jisedai Begoma Battle Beyblade (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jisedai%20Begoma%20Battle%20Beyblade%20%28Japan%29.png",
    size: "1419 KB",
    link1: "https://drive.google.com/file/d/1Y9DfcozBwkWhAJt_2rqdMSKrpbRynzDm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jissen ni Yakudatsu Tsumego (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jissen%20ni%20Yakudatsu%20Tsumego%20%28Japan%29%20%28Rev%201%29.png",
    size: "38 KB",
    link1: "https://drive.google.com/file/d/10oO_BRXJAfnSy0bnL6e8BfdvDZ_hymUJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Joryuu Janshi ni Chousen GB - Watashi-tachi ni Chousen Shitene! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Joryuu%20Janshi%20ni%20Chousen%20GB%20-%20Watashi-tachi%20ni%20Chousen%20Shitene%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1SnlwtmgiTbiIidRP1gHx6YTmh2ITAsQs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "JumpStart Dino Adventure - Field Trip (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/JumpStart%20Dino%20Adventure%20-%20Field%20Trip%20%28USA%29.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1ZEvTxSXOb2Tt6voI7wcPgRdlvB1B8aW8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Book, The - Mowgli's Wild Adventure (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jungle%20Book%2C%20The%20-%20Mowgli%27s%20Wild%20Adventure%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1349 KB",
    link1: "https://drive.google.com/file/d/1F_K9pduRkB1_RGu1it0yb3fe0J5LOOd_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Jungle Book, The - Mowgli's Wild Adventure (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Jungle%20Book%2C%20The%20-%20Mowgli%27s%20Wild%20Adventure%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1349 KB",
    link1: "https://drive.google.com/file/d/1AFBYxh1PY9ZTl9xDnTt91plbfrwm20Nm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Juukou Senki Bullet Battlers (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Juukou%20Senki%20Bullet%20Battlers%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1245 KB",
    link1: "https://drive.google.com/file/d/11_nceDz8OAXnGZkRT90hXPUFTlg92GwU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "K.O. - The Pro Boxing (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/K.O.%20-%20The%20Pro%20Boxing%20%28Japan%29.png",
    size: "188 KB",
    link1: "https://drive.google.com/file/d/1C57kQJiW4q58McCVWH818sY2UXwXB4Fq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kaitei Densetsu!! Treasure World (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kaitei%20Densetsu%21%21%20Treasure%20World%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "146 KB",
    link1: "https://drive.google.com/file/d/1udLRkJ4th48wXOHiIeh3KytWMLGvwI31/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kakurenbo Battle - Monster Tactics (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kakurenbo%20Battle%20-%20Monster%20Tactics%20%28Japan%29.png",
    size: "632 KB",
    link1: "https://drive.google.com/file/d/1kj3_cWFP9pOMTZVQmVSL_8bSG-8zYm6L/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kakutou Ryouri Densetsu Bistro Recipe - Gekitou Foodon Battle Hen (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kakutou%20Ryouri%20Densetsu%20Bistro%20Recipe%20-%20Gekitou%20Foodon%20Battle%20Hen%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "303 KB",
    link1: "https://drive.google.com/file/d/1tGoo182aPq8N2UGuZmP2OkTWh1eA8KBm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kakutou Ryouri Densetsu Bistro Recipe - Kettou Bistgarm Hen (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kakutou%20Ryouri%20Densetsu%20Bistro%20Recipe%20-%20Kettou%20Bistgarm%20Hen%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "393 KB",
    link1: "https://drive.google.com/file/d/124qsa3_szwWcqydhDQVuKOyTkPNfEhAj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kanji Boy (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kanji%20Boy%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "399 KB",
    link1: "https://drive.google.com/file/d/1NmP_U7enbbnTb1qCJ2BD-AEqnrGGLHkX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kanji Boy 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kanji%20Boy%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "624 KB",
    link1: "https://drive.google.com/file/d/1dWLzZUf0pfVm5iD1bNydtuGSv6IgTMgc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kanji Boy 3 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kanji%20Boy%203%20%28Japan%29.png",
    size: "1248 KB",
    link1: "https://drive.google.com/file/d/1LMpTD2avyaGrWQA9qfRAs78HWkfgXk4Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kanji de Puzzle (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kanji%20de%20Puzzle%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "255 KB",
    link1: "https://drive.google.com/file/d/1-s00W2N2oxYul6wjud7_2nevC1-ded8S/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kanzume Monsters Parfait (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kanzume%20Monsters%20Parfait%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1L3kkCEoPrSmZPFP3PqyesVBvE1HYlqhK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Karamuchou wa Oosawagi! - Okawari! (Japan) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Karamuchou%20wa%20Oosawagi%21%20-%20Okawari%21%20%28Japan%29%20%28SGB%20Enhanced%2C%20GB%20Compatible%29%20%28NP%29.png",
    size: "270 KB",
    link1: "https://drive.google.com/file/d/1y6gPq_3OzeUpa1cI56fAdKqZRfeXg4HE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Karamuchou wa Oosawagi! - Polinkies to Okashina Nakama-tachi (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Karamuchou%20wa%20Oosawagi%21%20-%20Polinkies%20to%20Okashina%20Nakama-tachi%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "263 KB",
    link1: "https://drive.google.com/file/d/1QaCvj4ZHfm0MFPC4jJ2O-JhGeCG6DYTh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kaseki Sousei Reborn II - Monster Digger (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kaseki%20Sousei%20Reborn%20II%20-%20Monster%20Digger%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/1yheW2J18xc8D1IZ1kVFTowa0h2vw0Ayd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Katou Hifumi Kudan - Shougi Kyoushitsu (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Katou%20Hifumi%20Kudan%20-%20Shougi%20Kyoushitsu%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "59 KB",
    link1: "https://drive.google.com/file/d/16mQHkUQRg4tD_GXL2ag0Va7xgHR8nRGs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawa no Nushi Tsuri 4 (Japan) (Rumble Version) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kawa%20no%20Nushi%20Tsuri%204%20%28Japan%29%20%28Rumble%20Version%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "429 KB",
    link1: "https://drive.google.com/file/d/13snfz2IK1xUPREDFzkpFWJPM2ORpAaWG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawaii Pet Shop Monogatari (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kawaii%20Pet%20Shop%20Monogatari%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "354 KB",
    link1: "https://drive.google.com/file/d/1eGscY8FF64SbrGhKaYnM2eklUUyjCNMl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawaii Pet Shop Monogatari 2 (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kawaii%20Pet%20Shop%20Monogatari%202%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "431 KB",
    link1: "https://drive.google.com/file/d/1baxIFHiIjEHMUYAj57kpK9pMDql96akZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kawaii Pet Shop Monogatari 2 (Japan) (Rev 1) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kawaii%20Pet%20Shop%20Monogatari%202%20%28Japan%29%20%28Rev%201%29%20%28GB%20Compatible%29.png",
    size: "431 KB",
    link1: "https://drive.google.com/file/d/1uoWWmCmEu-9qfX8ep_nesGwr3a3uIOUe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keep The Balance (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Keep%20the%20Balance%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "113 KB",
    link1: "https://drive.google.com/file/d/1-ZB-dGo7oGFP9r8zKG9oOLbqMW5b5h8m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keibajou e Ikou! Wide (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Keibajou%20e%20Ikou%21%20Wide%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "210 KB",
    link1: "https://drive.google.com/file/d/1LhXE6gZp8D1Rt-9-CWLNaOdt6UXzr_4K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keitai Denjuu Telefang - Power Version (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Keitai%20Denjuu%20Telefang%20-%20Power%20Version%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "585 KB",
    link1: "https://drive.google.com/file/d/1YkEoPnayGnhOqv3o6zj5ag-16fZYdqjd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Keitai Denjuu Telefang - Speed Version (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Keitai%20Denjuu%20Telefang%20-%20Speed%20Version%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "585 KB",
    link1: "https://drive.google.com/file/d/1TlBR7SNl65qjDEdb6rbRR0nOepp1fWcU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kelly Club (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kelly%20Club%20%28USA%29.png",
    size: "292 KB",
    link1: "https://drive.google.com/file/d/16mLBgbVZEzN_Wn0Cprw85MpLKW1Oh2PA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ken Griffey Jr.'s Slugfest (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ken%20Griffey%20Jr.%27s%20Slugfest%20%28USA%29.png",
    size: "520 KB",
    link1: "https://drive.google.com/file/d/1P-uo17Z75V30W7WllBGfLW3H03Cncu0G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kettou Transformers Beast Wars - Beast Senshi Saikyou Ketteisen (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kettou%20Transformers%20Beast%20Wars%20-%20Beast%20Senshi%20Saikyou%20Ketteisen%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "444 KB",
    link1: "https://drive.google.com/file/d/1GEE6QCS-SJWXOgc4YPkvoQ93A-a_bjZ5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kidou Senkan Nadesico - Ruri Ruri Mahjong (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kidou%20Senkan%20Nadesico%20-%20Ruri%20Ruri%20Mahjong%20%28Japan%29.png",
    size: "676 KB",
    link1: "https://drive.google.com/file/d/1acA4mkxg5yOrhR4TVUdAzi-WTz4S2jUl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kikansha Thomas - Sodor-tou no Nakama-tachi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kikansha%20Thomas%20-%20Sodor-tou%20no%20Nakama-tachi%20%28Japan%29.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1vKihqymOSR13LH-HrbdKIsdCO5w8QGD_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kindaichi Shounen no Jikenbo - 10 Nenme no Shoutaijou (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kindaichi%20Shounen%20no%20Jikenbo%20-%2010%20Nenme%20no%20Shoutaijou%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "736 KB",
    link1: "https://drive.google.com/file/d/1wEqIIVWJaQUSgnwnueLHq6jgV4ALjKx9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kinniku Banzuke GB - Chousensha wa Kimida! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kinniku%20Banzuke%20GB%20-%20Chousensha%20wa%20Kimida%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "357 KB",
    link1: "https://drive.google.com/file/d/1A34YMijZH_1An9-133NDsy4sfTKCKJ3Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kinniku Banzuke GB 2 - Mezase! Muscle Champion (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kinniku%20Banzuke%20GB%202%20-%20Mezase%21%20Muscle%20Champion%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "540 KB",
    link1: "https://drive.google.com/file/d/1lNeDSIBpaj0Das8QtavtYfCcuK5ME1pB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kinniku Banzuke GB 3 - Shinseiki Survival Retsuden! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kinniku%20Banzuke%20GB%203%20-%20Shinseiki%20Survival%20Retsuden%21%20%28Japan%29.png",
    size: "708 KB",
    link1: "https://drive.google.com/file/d/1xj5TRmnjxVSPo_TalyW4r2qJc8h0SZk8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby - Tilt 'n' Tumble (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kirby%20-%20Tilt%20%27n%27%20Tumble%20%28USA%29.png",
    size: "386 KB",
    link1: "https://drive.google.com/file/d/10DU4Ek7UH7O_rYQrCI0xSUeM06ZwGw2W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby_S Dream Land 2 DX (V1.1) ",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "382 KB",
    link1: "https://drive.google.com/file/d/1ub56pgYw0bKvdioYjV1e2sKnfZ90vLKJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirby_S Pinball Land DX (V1.1)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "129 KB",
    link1: "https://drive.google.com/file/d/1-B0Safy2-tySWvLFIxB3hNps4RL4UKuv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kirikou (Europe) (En,fr,de,es,it,pt)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kirikou%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.png",
    size: "361 KB",
    link1: "https://drive.google.com/file/d/1fywao6e9IlM_5d9aVYjzxbUrJepUNFup/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kisekae Series 2 - Oshare Nikki (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kisekae%20Series%202%20-%20Oshare%20Nikki%20%28Japan%29.png",
    size: "553 KB",
    link1: "https://drive.google.com/file/d/1554QM3SYdmmOb_j8o1d7dnDQ7oPSx9L3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kisekae Series 2 - Oshare Nikki (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kisekae%20Series%202%20-%20Oshare%20Nikki%20%28Japan%29%20%28Rev%201%29.png",
    size: "553 KB",
    link1: "https://drive.google.com/file/d/14-hJaZAEWnoyj7TjwK1W49vDWbxG-Sv_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Kisekae Series 3 - Kisekae Hamster (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Kisekae%20Series%203%20-%20Kisekae%20Hamster%20%28Japan%29.png",
    size: "841 KB",
    link1: "https://drive.google.com/file/d/1tTyChVHbeqE6zh7L3IZTS7AT1QlSEft1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klax (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Klax%20%28USA%2C%20Europe%29.png",
    size: "221 KB",
    link1: "https://drive.google.com/file/d/1m0lqKsT26CTT65kIaTYOxcFJ0YgBr_O2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klustar (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Klustar%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/1p9VezNixVKiEwohOWQAEcTXd4SeB4L0A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Klustar (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Klustar%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "70 KB",
    link1: "https://drive.google.com/file/d/1CiMqcRMSTwLOcB3kuk08Yd1FycHwY2K2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Knockout Kings (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Knockout%20Kings%20%28USA%2C%20Europe%29.png",
    size: "456 KB",
    link1: "https://drive.google.com/file/d/1A1ERXgIVm3l907Fa4DM_C7MLNK3wXWqZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Koguru Guruguru - Guruguru to Nakayoshi (Japan) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "412 KB",
    link1: "https://drive.google.com/file/d/1ea-zNxXWNVt6m3UojJHpOQC6eq4nuH8w/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Konchuu Fighters (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Konchuu%20Fighters%20%28Japan%29.png",
    size: "845 KB",
    link1: "https://drive.google.com/file/d/10T7LTqhxXldW1Cvx94TU1gfxkLfaYQKb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Konchuu Hakase 2 (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Konchuu%20Hakase%202%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "379 KB",
    link1: "https://drive.google.com/file/d/1Uu4yi8jfhJYso4b9wG8bZphqe6-lhd1H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Konchuu Hakase 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Konchuu%20Hakase%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "379 KB",
    link1: "https://drive.google.com/file/d/1tLLuec72zjLED3dBTLZVZJm41UTz8-gr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Konchuu Hakase 3 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Konchuu%20Hakase%203%20%28Japan%29.png",
    size: "646 KB",
    link1: "https://drive.google.com/file/d/1jgHi9RYecHFBgGa2H-xCOsnVRjeb-h1t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Korokoro Kirby (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Korokoro%20Kirby%20%28Japan%29.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/1gwNuj7sWh1-WDj-vXNoe0Id1De-q6tVo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Koto Battle - Tengai no Moribito (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Koto%20Battle%20-%20Tengai%20no%20Moribito%20%28Japan%29.png",
    size: "1117 KB",
    link1: "https://drive.google.com/file/d/1IOiQ-0BuzugVIrGTyL2QAj2lVNq5nVPB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Koushien Pocket (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Koushien%20Pocket%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "278 KB",
    link1: "https://drive.google.com/file/d/1mMNcwPfYjtMPJV6V9REP6qbVbK0R45XK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "LEGO Alpha Team (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/LEGO%20Alpha%20Team%20%28USA%29.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1VB9nkHY9IqwqBJFnKRDJAGeZxBfWCuJn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "LEGO Island 2 - The Brickster's Revenge (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/LEGO%20Island%202%20-%20The%20Brickster%27s%20Revenge%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "489 KB",
    link1: "https://drive.google.com/file/d/1PKQI1qqU0kaj9zuez2Y-UM4uALigyYmo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "LEGO Racers (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/LEGO%20Racers%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/1xdtM_hO8tI60GIVwUu2mkoBU5Km9V7G6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "LEGO Stunt Rally (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/LEGO%20Stunt%20Rally%20%28USA%29.png",
    size: "330 KB",
    link1: "https://drive.google.com/file/d/1cN3CcEAkTX3NYMppo0gMoAdyaNkYRSAk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Land Before Time, The (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Land%20Before%20Time%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "213 KB",
    link1: "https://drive.google.com/file/d/18QhaKHIkW-ACRJgArL_H9Siq6ZaxWoex/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Land Before Time, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Land%20Before%20Time%2C%20The%20%28USA%29.png",
    size: "214 KB",
    link1: "https://drive.google.com/file/d/1dU-gM9WulN6xewFPOwqm3wIDBV3oDMLR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Las Vegas Cool Hand (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Las%20Vegas%20Cool%20Hand%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "176 KB",
    link1: "https://drive.google.com/file/d/1PLMnVBks4vq5WGvFskxDjqj1vB7KQayX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Laura (Europe) (En,fr,de,es,it,nl,sv,da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Laura%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CDa%29.png",
    size: "491 KB",
    link1: "https://drive.google.com/file/d/1_EVwdAsdM_VrOJpkfXnXUSSFJRusM0_h/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Laura (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Laura%20%28USA%29.png",
    size: "491 KB",
    link1: "https://drive.google.com/file/d/1tK_jAdMKyEvKfTteP5olkTk17ZM6GreC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Le Mans 24 Hours (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Le%20Mans%2024%20Hours%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "514 KB",
    link1: "https://drive.google.com/file/d/1I1wHa8frSnworQNZ9FldJpvrh26wRFGr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend Of Zelda, The - Link_S Awakening DX",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "487 KB",
    link1: "https://drive.google.com/file/d/14s7IoliYXkfDqCNoheL9FOlH0gyiw2QW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Link's Awakening DX (USA, Europe) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Link%27s%20Awakening%20DX%20%28USA%2C%20Europe%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "485 KB",
    link1: "https://drive.google.com/file/d/1QKIkKcha7OAb-4b5TBNyV8bPLEixL27n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Link's Awakening DX (USA, Europe) (Rev 2) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Link%27s%20Awakening%20DX%20%28USA%2C%20Europe%29%20%28Rev%202%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "487 KB",
    link1: "https://drive.google.com/file/d/1OPfzfOuA6ICwuhpeD0szNbUXwKu7lTgL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Link's Awakening DX (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Link%27s%20Awakening%20DX%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "485 KB",
    link1: "https://drive.google.com/file/d/1zjPGDWMTbiHfaw-cIwGkm0HsxDr3ybiO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Oracle of Ages (USA, Australia)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Oracle%20of%20Ages%20%28USA%2C%20Australia%29.png",
    size: "683 KB",
    link1: "https://drive.google.com/file/d/10-SL-3uYwo9xUDebLQvIhYkCJ7q496hi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of Zelda, The - Oracle of Seasons (USA, Australia)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Oracle%20of%20Seasons%20%28USA%2C%20Australia%29.png",
    size: "661 KB",
    link1: "https://drive.google.com/file/d/1WfKQ0RKpnqykBxnIfBggh3r1Uk_s2k5i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of the River King 2 (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Legend%20of%20the%20River%20King%202%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "432 KB",
    link1: "https://drive.google.com/file/d/1HV7NT7c0mMYMXpbAolw5lepwlK9N1CU3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Legend of the River King GBC (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Legend%20of%20the%20River%20King%20GBC%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "305 KB",
    link1: "https://drive.google.com/file/d/1HXncnVjttBdYeA8Vij6p6Ii93v5wrPGN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lego Alpha Team (Europe) (En,fr,de,es,it,pt,nl,sv,no,da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/LEGO%20Alpha%20Team%20%28USA%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1Wuxz1b0lGV4j2Glr3s56pyHBt7TaCEMw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lego Island 2 - The Brickster's Revenge (Europe) (En,fr,de,es,it,pt,nl,sv,no,da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/LEGO%20Island%202%20-%20The%20Brickster%27s%20Revenge%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "489 KB",
    link1: "https://drive.google.com/file/d/1Zq0yCwV-iM8fqhheAW-pD-cRr0r3_VwR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lego Racers (Europe) (En,fr,de,es,it,pt,nl,sv,no,da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/LEGO%20Racers%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1mBPfbzrhSGFDY7ufh_xy3S1ldAksWfu8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lego Stunt Rally (Europe) (En,fr,de,es,it,pt,nl,sv,no,da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/LEGO%20Stunt%20Rally%20%28USA%29.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1RwmWR2ongkYwZpfJweesRxn96vdAi_dK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings & Oh No! More Lemmings (USA)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "532 KB",
    link1: "https://drive.google.com/file/d/1rPldfNieWdC3BhjHFs4PcYVLdM5kI5O5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lemmings VS (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Lemmings%20VS%20%28Japan%29.png",
    size: "499 KB",
    link1: "https://drive.google.com/file/d/1gogHlCA6FgNjwWj-LnPz1hGwofVk4r6V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lil' Monster (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Lil%27%20Monster%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/1kFpA45yZFviEwZDao67x8yYsGPw5OmD9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lion King, The - Simba's Mighty Adventure (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Lion%20King%2C%20The%20-%20Simba%27s%20Mighty%20Adventure%20%28USA%2C%20Europe%29.png",
    size: "622 KB",
    link1: "https://drive.google.com/file/d/1fSi_-upW1wIFTqAz0e4HqKglyw5acnlI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Little Magic (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Little%20Magic%20%28Japan%29.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1c_ZpALgKqa_Y_7NWiQrK0kAsTompl2MS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Little Magic 1.0",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "96 KB",
    link1: "https://drive.google.com/file/d/1O5ts00Xeh2yfigK_aFPmHegurYRugE3n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Little Mermaid II, The - Pinball Frenzy (USA) (En,Fr,De,Es,It) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Little%20Mermaid%20II%2C%20The%20-%20Pinball%20Frenzy%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rumble%20Version%29.png",
    size: "499 KB",
    link1: "https://drive.google.com/file/d/1L3W5JJwAtm9Xfeaig-Uud6fxJoFTMP7d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Little Mermaid Ii, The - Pinball Frenzy (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Little%20Mermaid%20II%2C%20The%20-%20Pinball%20Frenzy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "499 KB",
    link1: "https://drive.google.com/file/d/10UjMb3N7BOd40QeUZdBpu6Wh39FgVkA6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Little Nicky (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Little%20Nicky%20%28USA%29.png",
    size: "936 KB",
    link1: "https://drive.google.com/file/d/1vMokqFPBQn08QmF5iSqfGXFF320H2R53/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lode Runner - Domudomu Dan no Yabou (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Lode%20Runner%20-%20Domudomu%20Dan%20no%20Yabou%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "143 KB",
    link1: "https://drive.google.com/file/d/1VDfDXV1nRVC0IDYHS1J1ueCrZuJ-o1K-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lodoss-tou Senki - Eiyuu Kishiden GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Lodoss-tou%20Senki%20-%20Eiyuu%20Kishiden%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "215 KB",
    link1: "https://drive.google.com/file/d/1iPRaJK6YdkuNQom6fsSDXNhODpENceb-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Logical (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Logical%20%28USA%29.png",
    size: "45 KB",
    link1: "https://drive.google.com/file/d/1_urk6GuAkqjrjtOBmjrWxp-tTMa8Wv-Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "156 KB",
    link1: "https://drive.google.com/file/d/1FlTzx80BViVsamEZr_FljZ_QK1PAYvpx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes - Carrot Crazy (USA) (En,Fr,Es) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20-%20Carrot%20Crazy%20%28USA%29%20%28En%2CFr%2CEs%29%20%28GB%20Compatible%29.png",
    size: "241 KB",
    link1: "https://drive.google.com/file/d/1xEXA4a3oXQyYOzPHe_n89hmKAz4nb3WI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes - Carrot Crazy (Usa) (En,fr,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20-%20Carrot%20Crazy%20%28USA%29%20%28En%2CFr%2CEs%29%20%28GB%20Compatible%29.png",
    size: "241 KB",
    link1: "https://drive.google.com/file/d/1JJfclTyhv7cD5BGZQOWnBmeVDsGc7Ts9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes - Twouble! (USA) (En,Fr,Es) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20-%20Twouble%21%20%28USA%29%20%28En%2CFr%2CEs%29%20%28GB%20Compatible%29.png",
    size: "217 KB",
    link1: "https://drive.google.com/file/d/1h1DuBdZgiQ6_F_vTIKzN_snt5W9GSIfZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes - Twouble! (Usa) (En,fr,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20-%20Twouble%21%20%28USA%29%20%28En%2CFr%2CEs%29%20%28GB%20Compatible%29.png",
    size: "217 KB",
    link1: "https://drive.google.com/file/d/1nayruvGyJlizGDG1lADWNX7Z50jXcHQr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes Collector - Alert! (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20Collector%20-%20Alert%21%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "845 KB",
    link1: "https://drive.google.com/file/d/1MCs8Qztetp9HHWsqld62mOsN9x7-Npkt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes Collector - Alert! (Usa) (En,fr,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20Collector%20-%20Alert%21%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "845 KB",
    link1: "https://drive.google.com/file/d/1TXljEpJht_z2dVydyOq-GSfLqmcHL1n1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes Collector - Martian Alert! (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20Collector%20-%20Martian%20Alert%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "844 KB",
    link1: "https://drive.google.com/file/d/1_M1lYkhviyVBDh1PQija1V4-LvJD712m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes Collector - Martian Quest! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20Collector%20-%20Martian%20Quest%21%20%28Japan%29.png",
    size: "758 KB",
    link1: "https://drive.google.com/file/d/1S3qhj3VZ3-lhbHeUKX-IzZg1ZNF7A1Iy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes Racing (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "464 KB",
    link1: "https://drive.google.com/file/d/1Kk-3plKGtJ-bN4wUW9gtqKhyz-SmEDbD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Looney Tunes Racing (USA) (En,Fr,De,Es,It,Nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Looney%20Tunes%20Racing%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "464 KB",
    link1: "https://drive.google.com/file/d/1m2yZpMD7i9jRF81_k9OSTHZt5RdQYo26/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Hirameku Puzzle Dai-2-gou (Japan) (Rev 1) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Loppi%20Puzzle%20Magazine%20-%20Hirameku%20Puzzle%20Dai-2-gou%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%2C%20GB%20Compatible%29%20%28NP%29.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/1AeiTASgPbKgc_V-QUc4EOeVi7CZmFX_n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Hirameku Puzzle Dai-2-gou (Japan) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Loppi%20Puzzle%20Magazine%20-%20Hirameku%20Puzzle%20Dai-2-gou%20%28Japan%29%20%28SGB%20Enhanced%2C%20GB%20Compatible%29%20%28NP%29.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/1GZwM8d3M9QzBPzdq5VrVyIiYtVyEKjtj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Hirameku Puzzle Dai-3-gou (Japan) (Rev 1) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "85 KB",
    link1: "https://drive.google.com/file/d/1oDLKMdbtBAinTtnqK_3K8GHmvXh23MiC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Hirameku Puzzle Dai-3-gou (Japan) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "85 KB",
    link1: "https://drive.google.com/file/d/1oPLb9wPWsw9pEHJJMi6V070fLz7HuKIE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Hirameku Puzzle Soukangou (Japan) (Rev 1) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/1V8l7FcOH9oOEgU5NZHStt59Fumt841ze/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Hirameku Puzzle Soukangou (Japan) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "84 KB",
    link1: "https://drive.google.com/file/d/15UW47T9qTvml4V3G6XVi-wIB7XktfIIL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Kangaeru Puzzle Dai-2-gou (Japan) (Rev 1) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/17fUntVljYKHEZ8lqe5M8_VoTEEyte4fo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Kangaeru Puzzle Dai-2-gou (Japan) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1Ja7uyvFgT37gz3c5BOYr5ohY9lPn43a5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Kangaeru Puzzle Dai-3-gou (Japan) (Rev 1) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1tuFNqQTcnVyJysila6gXlLjVB3Z2qOcA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Kangaeru Puzzle Dai-3-gou (Japan) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1g-OZkkcnOyrgKlMCUjMVRuGvMKmcaZy9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Kangaeru Puzzle Soukangou (Japan) (Rev 1) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1r6_J7vQMDlK4bdzHUJPMD1ChtJeywqpX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Loppi Puzzle Magazine - Kangaeru Puzzle Soukangou (Japan) (SGB Enhanced, GB Compatible) (NP)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "63 KB",
    link1: "https://drive.google.com/file/d/1Prr0JMmRAc6_Sws2GreQOWy3zBz1GJUC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Love Hina Party (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Love%20Hina%20Party%20%28Japan%29.png",
    size: "286 KB",
    link1: "https://drive.google.com/file/d/1q-W_c0RN1ncgEE6V3GFrRWSxPgVpa609/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Love Hina Pocket (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Love%20Hina%20Pocket%20%28Japan%29.png",
    size: "2423 KB",
    link1: "https://drive.google.com/file/d/10LgTH5KJXqy7-va-10lxjg6Z8fFKw3ei/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Love Hina Pocket (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Love%20Hina%20Pocket%20%28Japan%29%20%28Rev%201%29.png",
    size: "2844 KB",
    link1: "https://drive.google.com/file/d/17roB6oGM-G2OXLY24bfqJs6Mm39dKe11/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Luca no Puzzle de Daibouken! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Luca%20no%20Puzzle%20de%20Daibouken%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "121 KB",
    link1: "https://drive.google.com/file/d/1raU5vhH9eDaQyPRKL_pqTL5ZILBf73Nq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lucky Luke (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Lucky%20Luke%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1SIP1u1RFGHEjbcKZOjViA7i1Goo-N_g9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lucky Luke (USA) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Lucky%20Luke%20%28USA%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1x_h0ldlxwL2X1eUEZzChPCTsZ5vQuiFo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lucky Luke - Desperado Train (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Lucky%20Luke%20-%20Desperado%20Train%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "435 KB",
    link1: "https://drive.google.com/file/d/1ciEw92gqwnRr5mQjUvQvwVaN1Urnmt3_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lufia - The Legend Returns",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Lufia%20-%20The%20Legend%20Returns%20%28USA%29.png",
    size: "1004 KB",
    link1: "https://drive.google.com/file/d/11Sw4aqKRLgfdWFjJtKzEBGZefGwiLqxD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Lufia - The Legend Returns (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Lufia%20-%20The%20Legend%20Returns%20%28USA%29.png",
    size: "1011 KB",
    link1: "https://drive.google.com/file/d/1iOhehCu6-3uiZ3nOgmyVjaC7RhCFPZbZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "M&M's Minis Madness (USA)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "200 KB",
    link1: "https://drive.google.com/file/d/1Tct5yRnvt8k2HRx5mLigCuXLlmBOfYks/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "M&M's Minis Madness (USA) (Sample)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1DTwwJiIktwrVxi9CNDygzUintKbmvXFB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MTV Sports - Pure Ride (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/MTV%20Sports%20-%20Pure%20Ride%20%28USA%2C%20Europe%29.png",
    size: "270 KB",
    link1: "https://drive.google.com/file/d/1PG_l-As65fze1vqj99rOZ4y1y0pEPRQ6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MTV Sports - Skateboarding Featuring Andy MacDonald (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/MTV%20Sports%20-%20Skateboarding%20featuring%20Andy%20MacDonald%20%28USA%2C%20Europe%29.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1t918Sb-zTTAddsap_3Ota4Op_5tJsoVR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MTV Sports - T.J. Lavin's Ultimate BMX (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/MTV%20Sports%20-%20T.J.%20Lavin%27s%20Ultimate%20BMX%20%28USA%2C%20Europe%29.png",
    size: "433 KB",
    link1: "https://drive.google.com/file/d/19fwKd8I3O7puUz6kurnirShUCCKKJ-lB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Macross 7 - Ginga no Heart o Furuwasero!! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Macross%207%20-%20Ginga%20no%20Heart%20o%20Furuwasero%21%21%20%28Japan%29.png",
    size: "457 KB",
    link1: "https://drive.google.com/file/d/1r9eyL8dgaiALZWVTJU0pnTPlONAyuCnt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 2000 (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Madden%20NFL%202000%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "314 KB",
    link1: "https://drive.google.com/file/d/1fHzcDPWIVK-YsNtjgV6RsGzkb9503QJ6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 2001 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Madden%20NFL%202001%20%28USA%29.png",
    size: "314 KB",
    link1: "https://drive.google.com/file/d/1GHPlnHiCSsdTW3qY1YcDROQZQiTqTGlq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Madden NFL 2002 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Madden%20NFL%202002%20%28USA%29.png",
    size: "346 KB",
    link1: "https://drive.google.com/file/d/1DzJSrLcyObR1fPt1iPaflDv8HRBXqB9W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magi Nation (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Magi%20Nation%20%28USA%29.png",
    size: "946 KB",
    link1: "https://drive.google.com/file/d/1NC8tcIVh8zyyQbPTY67-2I0xBwOcyM9y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magi Nation [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Magi%20Nation%20%28USA%29.png",
    size: "951 KB",
    link1: "https://drive.google.com/file/d/1mtK8qDAKQDklfPOlwrBwBfZHyqonsPzF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Chase GB - Minarai Mahoutsukai Kenja no Tani e (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Magical%20Chase%20GB%20-%20Minarai%20Mahoutsukai%20Kenja%20no%20Tani%20e%20%28Japan%29.png",
    size: "190 KB",
    link1: "https://drive.google.com/file/d/1dZP_rwd8GnCybjhDxDF8aVV5E28TDOGr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Drop (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Magical%20Drop%20%28USA%29.png",
    size: "252 KB",
    link1: "https://drive.google.com/file/d/1NcEX-4EG4e6Tkyy8kzjba4e2KxdJFvor/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Tetris Challenge (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Magical%20Tetris%20Challenge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.png",
    size: "340 KB",
    link1: "https://drive.google.com/file/d/1N_f3ygZ15zxI2b5KlT8yE6LpikoTn9Wk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Magical Tetris Challenge (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Magical%20Tetris%20Challenge%20%28USA%29.png",
    size: "340 KB",
    link1: "https://drive.google.com/file/d/13V4PZAD3POQw-AsX2dEiIqH86QmnER-J/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mahjong Joou (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mahjong%20Joou%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "322 KB",
    link1: "https://drive.google.com/file/d/1Q6xkO65BoHbw5qmDgcHgUZq2OthLJ_tQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Majokko Mari-chan no Kisekae Monogatari (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Majokko%20Mari-chan%20no%20Kisekae%20Monogatari%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1033 KB",
    link1: "https://drive.google.com/file/d/10A0OynuUuqdUHV_-v8RKpNLuTfv9Ci_B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Majokko Mari-chan no Kisekae Monogatari (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Majokko%20Mari-chan%20no%20Kisekae%20Monogatari%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1033 KB",
    link1: "https://drive.google.com/file/d/1OCkGDu_VmnNHWqsm94YpWvNe725viG0l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marble Madness (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Marble%20Madness%20%28USA%2C%20Europe%29.png",
    size: "196 KB",
    link1: "https://drive.google.com/file/d/1386-rloWHGTePeGCOOPWQH7a4TX7beMO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marie no Atelier GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Marie%20no%20Atelier%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "560 KB",
    link1: "https://drive.google.com/file/d/1Tov9eEjt0G6bnoSLlNNL1OTNdDxZwWoq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Golf (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mario%20Golf%20%28USA%29.png",
    size: "1065 KB",
    link1: "https://drive.google.com/file/d/1JfiOXvwzfNK4FOqSZP0igDkUsZ38-RWA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Golf GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mario%20Golf%20GB%20%28Japan%29.png",
    size: "1064 KB",
    link1: "https://drive.google.com/file/d/1f6LYJnuOYglvw9e_4nX23_QMNiuEW5Wo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Tennis (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mario%20Tennis%20%28USA%29.png",
    size: "778 KB",
    link1: "https://drive.google.com/file/d/1sQ3aVmRAhfzOvN8qcBiuYn4qWHyhzhnj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mario Tennis GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mario%20Tennis%20GB%20%28Japan%29.png",
    size: "778 KB",
    link1: "https://drive.google.com/file/d/136zGB0FrMiX0VBz1BEfXStj4eXPILz0a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Marvin Strikes Back! (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Marvin%20Strikes%20Back%21%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "1048 KB",
    link1: "https://drive.google.com/file/d/175WfsmYUTcfHPMxLmcxetybDf_l0qzN6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mary-Kate & Ashley - Get a Clue! (USA, Europe) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "370 KB",
    link1: "https://drive.google.com/file/d/1RzEYFmuhmDiWMzhWCqc8D_bUw0V9Mrct/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mary-Kate and Ashley - Crush Course (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mary-Kate%20and%20Ashley%20-%20Crush%20Course%20%28USA%2C%20Europe%29.png",
    size: "414 KB",
    link1: "https://drive.google.com/file/d/1dgzrELr_8P7I59FJwk0CJdiIvdAM4NZ1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mary-Kate and Ashley - Pocket Planner (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mary-Kate%20and%20Ashley%20-%20Pocket%20Planner%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "392 KB",
    link1: "https://drive.google.com/file/d/1837pD51nR9RwwtXxNm7PEai4vJCst6FS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mary-Kate and Ashley - Winners Circle (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mary-Kate%20and%20Ashley%20-%20Winners%20Circle%20%28USA%2C%20Europe%29.png",
    size: "320 KB",
    link1: "https://drive.google.com/file/d/1awv27_MWLejNYzSOMHWKUuZofPZsKdWq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mask of Zorro, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mask%20of%20Zorro%2C%20The%20%28USA%29.png",
    size: "400 KB",
    link1: "https://drive.google.com/file/d/1AcJxF6Z_DMAm7j_5r_doC94vIXiSDcrZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mat Hoffman's Pro BMX (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mat%20Hoffman%27s%20Pro%20BMX%20%28USA%2C%20Europe%29.png",
    size: "283 KB",
    link1: "https://drive.google.com/file/d/1cZTq1E1ofIF5M6OD8V2uWbq4aSUtYBF0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Matchbox Emergency Patrol (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Matchbox%20Emergency%20Patrol%20%28USA%2C%20Europe%29.png",
    size: "896 KB",
    link1: "https://drive.google.com/file/d/1bUwOEw4u_BSTusLzZwIyAXuXufmfLpXH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maus, Die (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Maus%2C%20Die%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "150 KB",
    link1: "https://drive.google.com/file/d/1t-5pmAuw8LsbdawYL2rVrLreG9kfw6oO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Maya The Bee - Garden Adventures (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Maya%20the%20Bee%20-%20Garden%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1-7XUUSNIJJa8zo6czp5x0495-J6XKQ_9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "McDonald's Monogatari - Honobono Tenchou Ikusei Game (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/McDonald%27s%20Monogatari%20-%20Honobono%20Tenchou%20Ikusei%20Game%20%28Japan%29.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/15GibKcZrccjtvtwQ7k5GbTnbzAO2PVmy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot 2 - Kuwagata Version (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%202%20-%20Kuwagata%20Version%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "753 KB",
    link1: "https://drive.google.com/file/d/1Ph9dd-T7EP7OwRhKo8pBbgVsYPcYQ9Jr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot 2 - Parts Collection (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%202%20-%20Parts%20Collection%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "646 KB",
    link1: "https://drive.google.com/file/d/1cAaKn0P5juuQad0rvTmtFU4icp11jlMb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot 3 - Kabuto Version (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%203%20-%20Kabuto%20Version%20%28Japan%29.png",
    size: "1372 KB",
    link1: "https://drive.google.com/file/d/1s0RxWBkZsqQwz2esvI73kCQPjmR1zNOw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot 3 - Kuwagata Version (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%203%20-%20Kuwagata%20Version%20%28Japan%29.png",
    size: "1372 KB",
    link1: "https://drive.google.com/file/d/1tNwzJp1oDmOU6u85M-xrr55zLIjgxPPr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot 3 - Parts Collection - Z kara no Chousenjou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%203%20-%20Parts%20Collection%20-%20Z%20kara%20no%20Chousenjou%20%28Japan%29.png",
    size: "734 KB",
    link1: "https://drive.google.com/file/d/1t7lm9Ptz7vxXlmypJ6YfNgDZc509Gyh1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot 4 - Kabuto Version (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%204%20-%20Kabuto%20Version%20%28Japan%29.png",
    size: "1806 KB",
    link1: "https://drive.google.com/file/d/1yFdJ8h5gUh68wWh140xeE066OmCML2j7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot 4 - Kuwagata Version (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%204%20-%20Kuwagata%20Version%20%28Japan%29.png",
    size: "1800 KB",
    link1: "https://drive.google.com/file/d/1WYXihV2xjMNHIxwprDGABDNu1ROiiXFF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot 5 - Susutake Mura no Tenkousei - Kabuto (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%205%20-%20Susutake%20Mura%20no%20Tenkousei%20-%20Kabuto%20%28Japan%29.png",
    size: "1409 KB",
    link1: "https://drive.google.com/file/d/1dwsTrikTDexo2TmEZpK-vF-GJUEdY_a0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot 5 - Susutake Mura no Tenkousei - Kuwagata (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%205%20-%20Susutake%20Mura%20no%20Tenkousei%20-%20Kuwagata%20%28Japan%29.png",
    size: "1409 KB",
    link1: "https://drive.google.com/file/d/1iAAF_P-3VSvbDkY8s0o1hpM4jsOoVu8e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot Cardrobottle - Kabuto Version (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%20Cardrobottle%20-%20Kabuto%20Version%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "772 KB",
    link1: "https://drive.google.com/file/d/1iGDhG1us4wlLafewcoclruro0SDkwVw9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Medarot Cardrobottle - Kuwagata Version (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Medarot%20Cardrobottle%20-%20Kuwagata%20Version%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "772 KB",
    link1: "https://drive.google.com/file/d/1s1OHrZZtHdh69QCZuoTMu9nlIC-h304y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man Xtreme",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mega%20Man%20Xtreme%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "495 KB",
    link1: "https://drive.google.com/file/d/1vXqlvr4bPSFGVLPLbj6FrbdyJmHtyjwQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man Xtreme (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mega%20Man%20Xtreme%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "495 KB",
    link1: "https://drive.google.com/file/d/15YHwfHoR0v8EgNGa1LcRwAC9KA1L4xjY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man Xtreme 2 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mega%20Man%20Xtreme%202%20%28USA%2C%20Europe%29.png",
    size: "529 KB",
    link1: "https://drive.google.com/file/d/1tWXAjzG34WfL6lCFScu-PiIV6Z--Lm9c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Man Xtreme 2 [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mega%20Man%20Xtreme%202%20%28USA%2C%20Europe%29.png",
    size: "530 KB",
    link1: "https://drive.google.com/file/d/1tQtmYdoEhgXeRuZYiKYLsyn4dof0ccw0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mega Memory Card (USA) (GB Compatible) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "5 KB",
    link1: "https://drive.google.com/file/d/1sMN1D_eDlNIdKv_SS6hmAI0LJYB0q5dG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Megami Tensei Gaiden - Last Bible (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Megami%20Tensei%20Gaiden%20-%20Last%20Bible%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "276 KB",
    link1: "https://drive.google.com/file/d/1MQXwdgeUqIC2yUh1P2tDy3CI22tjAKHh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meitantei Conan - Karakuri Jiin Satsujin Jiken (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Meitantei%20Conan%20-%20Karakuri%20Jiin%20Satsujin%20Jiken%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "324 KB",
    link1: "https://drive.google.com/file/d/1YO7cwZxzK7sxDp0lGqUzrAUgRcE0bnCg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meitantei Conan - Kigantou Hihou Densetsu (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Meitantei%20Conan%20-%20Kigantou%20Hihou%20Densetsu%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "298 KB",
    link1: "https://drive.google.com/file/d/1qbaJNZm10dJzDcrs3AcfRvANnWsbQFp7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Meitantei Conan - Norowareta Kouro (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Meitantei%20Conan%20-%20Norowareta%20Kouro%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "552 KB",
    link1: "https://drive.google.com/file/d/1tEKUrOD4lzf2vhRP-Cd2waQR6TZbbutw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Men in Black - The Series (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Men%20in%20Black%20-%20The%20Series%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "404 KB",
    link1: "https://drive.google.com/file/d/1t7NisdgiwXgg2utN0EYl2UJuBufQGgm9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Men in Black 2 - The Series (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Men%20in%20Black%202%20-%20The%20Series%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "193 KB",
    link1: "https://drive.google.com/file/d/1LP9718K2JSJl9K0AABjlIea24prU51HV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Merlin (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Merlin%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "429 KB",
    link1: "https://drive.google.com/file/d/1CQ0TaxDZWQOFgUOUMX_Zu0Xa7mKYtVqm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "MetaFight EX (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/MetaFight%20EX%20%28Japan%29.png",
    size: "297 KB",
    link1: "https://drive.google.com/file/d/1NsZnSBRDOrsWnmMQ9sQ3v-smNBf9oHrT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Gear Solid (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Metal%20Gear%20Solid%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1439 KB",
    link1: "https://drive.google.com/file/d/1acFpzuHOeT6C9sz4Rch1ngz7t3qIe5_o/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Gear Solid (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Metal%20Gear%20Solid%20%28USA%29.png",
    size: "849 KB",
    link1: "https://drive.google.com/file/d/1rW-JC_dSLxNan5AI051hFsEVTFzxCfcw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Walker (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Metal%20Walker%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "395 KB",
    link1: "https://drive.google.com/file/d/1rnwkGm6KbA0EcfrNUSZ_CcUDgWJ-YdqL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metal Walker [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Metal%20Walker%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "401 KB",
    link1: "https://drive.google.com/file/d/1Bdo8cq1Bf9YLXQ5UjN_v_4phi5TOXUfN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Metamode (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Metamode%20%28Japan%29.png",
    size: "1218 KB",
    link1: "https://drive.google.com/file/d/1maYUGkUJcrvDJ9zqm5BybkPGbl5jMd0n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mia Hamm Soccer Shootout (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mia%20Hamm%20Soccer%20Shootout%20%28USA%29.png",
    size: "225 KB",
    link1: "https://drive.google.com/file/d/1iQA30alPBsXAO1FqTKVlNcWHov3wpipp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mia Hamm Soccer Shootout [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mia%20Hamm%20Soccer%20Shootout%20%28USA%29.png",
    size: "225 KB",
    link1: "https://drive.google.com/file/d/1G-cc-esFVhZ0ssuCdll5iqwyZ1L4rlRz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Racing Adventure (USA, Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mickey%27s%20Racing%20Adventure%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1060 KB",
    link1: "https://drive.google.com/file/d/1CdOJQ4-HRpRiIsfAmY9hKKUAJHztl3yC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Racing Adventure (Usa, Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mickey%27s%20Racing%20Adventure%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1060 KB",
    link1: "https://drive.google.com/file/d/17T14yw-H5DKLs8_5t2pDM9JEQZ3sPsGE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Speedway USA (USA, Europe) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mickey%27s%20Speedway%20USA%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "1129 KB",
    link1: "https://drive.google.com/file/d/1RHhCWj5Annm_8PDmqfC_OLp1NCiMPlNC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mickey's Speedway Usa (Usa, Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mickey%27s%20Speedway%20USA%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "1129 KB",
    link1: "https://drive.google.com/file/d/179Rh7UdBrjd54jrobpNH3NPyBK2c29mm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Machines 1 and 2 - Twin Turbo (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Micro%20Machines%201%20and%202%20-%20Twin%20Turbo%20%28USA%2C%20Europe%29.png",
    size: "497 KB",
    link1: "https://drive.google.com/file/d/1OM3_brbATJt5U8bxdKNUFfnkylFEZzTy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Micro Machines V3 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Micro%20Machines%20V3%20%28USA%2C%20Europe%29.png",
    size: "1165 KB",
    link1: "https://drive.google.com/file/d/1ZRiuNmk2-ng0DfWlP2ePN-3jjoWRyRMS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Microsoft - The 6 in 1 Puzzle Collection Entertainment Pack (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Microsoft%20-%20The%206%20in%201%20Puzzle%20Collection%20Entertainment%20Pack%20%28USA%29.png",
    size: "168 KB",
    link1: "https://drive.google.com/file/d/1-GcrYyDjnaxVkJVU4YJeFdTKkGoLVHUe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Microsoft - The Best of Entertainment Pack (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Microsoft%20-%20The%20Best%20of%20Entertainment%20Pack%20%28USA%29.png",
    size: "114 KB",
    link1: "https://drive.google.com/file/d/184M7FO4u0MxwpUk300LQPXC5y_4rql-l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Microsoft Pinball Arcade (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Microsoft%20Pinball%20Arcade%20%28USA%29.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/1XmGjGvxsq0yPjX7I3sAINW_khSJol042/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Microsoft Puzzle Collection (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "181 KB",
    link1: "https://drive.google.com/file/d/1u_jYVaD25Vk0pA7RyHKWkSEJMUb-YAb-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Midway Presents Arcade Hits - Joust & Defender (USA, Europe) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "241 KB",
    link1: "https://drive.google.com/file/d/1NtZW3g1d4ZCPVX4fJM0Fe6NjkxDDkD-I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Midway Presents Arcade Hits - Moon Patrol & Spy Hunter (USA, Europe) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "198 KB",
    link1: "https://drive.google.com/file/d/1BGP7tw2E-3PQcSA2ruwYNcQTW5VawF4i/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Millennium Winter Sports (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Millennium%20Winter%20Sports%20%28USA%29.png",
    size: "314 KB",
    link1: "https://drive.google.com/file/d/1qdjNAdckN1KaAsHegmqELqwe1HA86s5v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Minna no Shougi - Shokyuu Hen (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Minna%20no%20Shougi%20-%20Shokyuu%20Hen%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1-CTrkyFM5GcxWEEOUrFp60rN7Q9FBgdC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Minna no Shougi - Shokyuu Hen (Japan) (Rev 1) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Minna%20no%20Shougi%20-%20Shokyuu%20Hen%20%28Japan%29%20%28Rev%201%29%20%28GB%20Compatible%29.png",
    size: "302 KB",
    link1: "https://drive.google.com/file/d/16UzBz01LtHxlrKKt21fSd_Kz0DSE_KvA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Minnie & Friends - Yume no Kuni o Sagashite (Japan)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "488 KB",
    link1: "https://drive.google.com/file/d/1WcTpmBtyKumLtBXqlXSZmw1dIrNi3AnY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Missile Command (USA) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Missile%20Command%20%28USA%29%20%28Rumble%20Version%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/1qSvuqEW5OIKY0DLPaRM068qb_YK9c92v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mission - Impossible (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mission%20-%20Impossible%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "268 KB",
    link1: "https://drive.google.com/file/d/1_DhvG3TTuv96GaPxDuJwcJw3rH6G9v1b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mission Impossible (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mission%20-%20Impossible%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/16Oki9q9YJqL4ToG7vQc4ZogM99gXqyCh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mizuki Shigeru no Shin Youkaiden (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mizuki%20Shigeru%20no%20Shin%20Youkaiden%20%28Japan%29.png",
    size: "594 KB",
    link1: "https://drive.google.com/file/d/1qcntuv_ICfO41tM9WTcnDJwPITjwC_d1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mobile Golf (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mobile%20Golf%20%28Japan%29.png",
    size: "1728 KB",
    link1: "https://drive.google.com/file/d/1BGxu00Kt9GfUujYfslqv2V--8cg6t-YZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mobile Trainer (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mobile%20Trainer%20%28Japan%29.png",
    size: "400 KB",
    link1: "https://drive.google.com/file/d/1X7gcHkgy09iPv6bnS_TsBn3j5HDp2sj3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Momotarou Densetsu 1-2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Momotarou%20Densetsu%201-2%20%28Japan%29.png",
    size: "553 KB",
    link1: "https://drive.google.com/file/d/1v-DdMMVwUs0lsTJIiIW0F5w2GHGy8PdO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monkey Puncher [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Monkey%20Puncher%20%28Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/1cNDcRBTE3SnvsGG0sNH_8pUCs1FJ6tcD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Monopoly%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "169 KB",
    link1: "https://drive.google.com/file/d/1now8RBVhUb0W801CSI6PNj7faQekRJvE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monopoly (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Monopoly%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "104 KB",
    link1: "https://drive.google.com/file/d/10WJBTaguuYX9Dm8qYPv20B6HPVHtIoRV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monster Farm Battle Card GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Monster%20Farm%20Battle%20Card%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "559 KB",
    link1: "https://drive.google.com/file/d/18zi_xdkDdP-7E1iW9brc6IvTKOnx-eNs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monster Race 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Monster%20Race%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "593 KB",
    link1: "https://drive.google.com/file/d/1nqthRX366wFfj82DFV7Fcxr-dRQgg44P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monster Rancher Battle Card GB (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Monster%20Rancher%20Battle%20Card%20GB%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "555 KB",
    link1: "https://drive.google.com/file/d/1v3pfWldbBtcTgzKj6iknEHbSA0M-7hIj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monster Rancher Explorer (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Monster%20Rancher%20Explorer%20%28USA%29.png",
    size: "274 KB",
    link1: "https://drive.google.com/file/d/1ZfbEGJEjzPtfC_a6Zyos19SkrT-_4VWw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monster Traveler (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Monster%20Traveler%20%28Japan%29%20%28Rev%201%29.png",
    size: "1224 KB",
    link1: "https://drive.google.com/file/d/1AkJWeCpyZR9FW2f4IEUSRPNc4EgI1nv9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monsters, Inc. (Europe) (En,es,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Monsters%2C%20Inc.%20%28Europe%29%20%28En%2CEs%2CNl%29.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/19Ashd6rMP_DvClxeaa04RONwLkEbG4YL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Monsters, Inc. (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Monsters%2C%20Inc.%20%28USA%2C%20Europe%29.png",
    size: "329 KB",
    link1: "https://drive.google.com/file/d/1wRhuwwZ1CX8dBYzYnM3y4PVwcrXjhJOc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Montezuma's Return! (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Montezuma%27s%20Return%21%20%28USA%29%20%28En%2CEs%29%20%28GB%20Compatible%29.png",
    size: "227 KB",
    link1: "https://drive.google.com/file/d/1B5ayXQqZiulz6BxQrLzJU5C4XGp7LSdy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Montezuma's Return! (USA) (En,Es) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Montezuma%27s%20Return%21%20%28USA%29%20%28En%2CEs%29%20%28GB%20Compatible%29.png",
    size: "225 KB",
    link1: "https://drive.google.com/file/d/1oGC8aastou8tOfB03k2DKVtSWZ-43oV8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moomin no Daibouken (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Moomin%20no%20Daibouken%20%28Japan%29.png",
    size: "641 KB",
    link1: "https://drive.google.com/file/d/1oEkbscwbtSzV39fQAgTUsxedlt3BfNfc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Moorhen 3 - The Chicken Chase! (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "157 KB",
    link1: "https://drive.google.com/file/d/11zoNf5jz7DqQuYO-5eIYVsv1JPuz0rY9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mortal Kombat 4 (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mortal%20Kombat%204%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "369 KB",
    link1: "https://drive.google.com/file/d/1t5g9heTkO_bbi-jVhJs2HlzDsgblCqKT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Motocross Maniacs 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Motocross%20Maniacs%202%20%28USA%29.png",
    size: "302 KB",
    link1: "https://drive.google.com/file/d/1mGwRiZnleTVoS4n1QqfIzjqwB5I_kgkK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr Nutz (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mr.%20Nutz%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "350 KB",
    link1: "https://drive.google.com/file/d/1HoOPHXTO4hlIuOtwC94-Otp6JnUQFfzq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Driller (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mr.%20Driller%20%28Japan%29.png",
    size: "126 KB",
    link1: "https://drive.google.com/file/d/1CoDWhXjZOuaoht2uv8aH9GEykuy4u1SR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Driller (Japan) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mr.%20Driller%20%28Japan%29%20%28NP%29.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/1V7t-OeG09DTD2JY80stBZxpark6EhwsL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Driller (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mr.%20Driller%20%28USA%29.png",
    size: "167 KB",
    link1: "https://drive.google.com/file/d/1EF0X0WUSitHb2eSDwk0H7JLDM5B_4A4E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mr. Nutz (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mr.%20Nutz%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "350 KB",
    link1: "https://drive.google.com/file/d/1IgFuY1bOIzOdlMVXziHjOmZSaA569yRR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ms. Pac-Man - Special Color Edition (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ms.%20Pac-Man%20-%20Special%20Color%20Edition%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1bn-CYpcDRq7Bzi44B9jYFlr8Xw8Zti9v/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mummy Returns, The (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mummy%20Returns%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "479 KB",
    link1: "https://drive.google.com/file/d/1NiTEDbG33KpOc9StH0xPImXRPPHFgwrq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mummy Returns, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mummy%20Returns%2C%20The%20%28USA%29.png",
    size: "433 KB",
    link1: "https://drive.google.com/file/d/1abMiOkuGchBpApq-LkqbSfezMPmBER7c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Mummy, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Mummy%2C%20The%20%28USA%29.png",
    size: "499 KB",
    link1: "https://drive.google.com/file/d/1OS8vLLeCNSTFN1dIcqC7bQg2OHxT5Kqs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Muppets, The (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1033 KB",
    link1: "https://drive.google.com/file/d/1HatJoP2RWBOSMJjm6NgA1P2A8aJuz4N0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Muteki Ou Tri-Zenon (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Muteki%20Ou%20Tri-Zenon%20%28Japan%29.png",
    size: "445 KB",
    link1: "https://drive.google.com/file/d/1z0GqK4LISOBzSMZ1tKcDtj58ICca6yqM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "N.Y. Race (Europe) (En,fr,de,es,it,pt)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "455 KB",
    link1: "https://drive.google.com/file/d/1Dho5fy5HTtcqy8kwmrnGDwikt-jCX0m3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NASCAR 2000 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NASCAR%202000%20%28USA%2C%20Europe%29.png",
    size: "452 KB",
    link1: "https://drive.google.com/file/d/1F6Uu8uJW-iB3NOadHoY6yM38azRE311-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NASCAR Challenge (USA) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NASCAR%20Challenge%20%28USA%29%20%28Rumble%20Version%29.png",
    size: "109 KB",
    link1: "https://drive.google.com/file/d/1J9e0H8DPb8rMw5Nz48SVhc491whALYRm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NASCAR Heat (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NASCAR%20Heat%20%28USA%29.png",
    size: "281 KB",
    link1: "https://drive.google.com/file/d/1bnda7fHk6oU_E5MFYaugvBbYJq_DEfk2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NASCAR Racers (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NASCAR%20Racers%20%28USA%29.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1zTbauyvE58UU0X6tug12geAdbSLL0k-y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA 3 on 3 Featuring Kobe Bryant (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NBA%203%20on%203%20featuring%20Kobe%20Bryant%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "545 KB",
    link1: "https://drive.google.com/file/d/1iTY79e7LGnTNRGeoB_NLQgKZp0tkD9ao/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Hoopz (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NBA%20Hoopz%20%28USA%29.png",
    size: "515 KB",
    link1: "https://drive.google.com/file/d/1NbIIo-h0FzGQdkXoajIGhNKRznIuDb8r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam 2001 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NBA%20Jam%202001%20%28USA%2C%20Europe%29.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/11sPJ45hTzcpRnIWPEWVQfV2FUVAofPJa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Jam 99 (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NBA%20Jam%2099%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "289 KB",
    link1: "https://drive.google.com/file/d/1O00ScEniAHIt2ArQxYFfpRWds9Abbnat/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA Show Time - NBA on NBC (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NBA%20Show%20Time%20-%20NBA%20on%20NBC%20%28USA%29.png",
    size: "253 KB",
    link1: "https://drive.google.com/file/d/1Dj42Eyt3bD_H2YB60kB5TAh3M8soR4IS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA in the Zone (USA) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NBA%20in%20the%20Zone%20%28USA%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/1bJkWPTbgb04ba_yTgvNGDPY-shPK4bYn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NBA in the Zone 2000 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NBA%20in%20the%20Zone%202000%20%28USA%29.png",
    size: "393 KB",
    link1: "https://drive.google.com/file/d/1PniLL3_LVjq69kyusCFtKr8gCjRVKmoX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL Blitz (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NFL%20Blitz%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "158 KB",
    link1: "https://drive.google.com/file/d/1hHwVetJsgCrCgPEiE-Vq4GazXbBzSVzG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL Blitz (USA, Europe) (Rev 1) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NFL%20Blitz%20%28USA%2C%20Europe%29%20%28Rev%201%29%20%28GB%20Compatible%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1MM99pEAHUkC7EOTJVrzFxCKiDCrYl2lk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL Blitz 2000 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NFL%20Blitz%202000%20%28USA%29.png",
    size: "295 KB",
    link1: "https://drive.google.com/file/d/1Dl1twwxOqCzLOyOOvpJAt-8k5zIF9dJ8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NFL Blitz 2001 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NFL%20Blitz%202001%20%28USA%29.png",
    size: "606 KB",
    link1: "https://drive.google.com/file/d/1TbjwACRlIyzkR1CVLvbqjSB5MdGCpMgv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL 2000 (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NHL%202000%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "278 KB",
    link1: "https://drive.google.com/file/d/1eQSC6_4QmrPHWBKkCrluydqiBjoEnfPC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL Blades of Steel (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NHL%20Blades%20of%20Steel%20%28USA%29.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1z7WBt5dnUDxsU0JmDgD4KpUcnJGnjM-Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NHL Blades of Steel 2000 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NHL%20Blades%20of%20Steel%202000%20%28USA%29.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1fodRtEoOOy1R7QUAO63mIchdw_CoY4bY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "NSYNC - Get to the Show (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/NSYNC%20-%20Get%20to%20the%20Show%20%28USA%29.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1gpLaHk3ChxO7t2RUKHTEYHObh5UoM1iF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nakayoshi Cooking Series 1 - Oishii Cake-ya-san (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nakayoshi%20Cooking%20Series%201%20-%20Oishii%20Cake-ya-san%20%28Japan%29.png",
    size: "237 KB",
    link1: "https://drive.google.com/file/d/1mqSHKF2D0vXjs-i9DsaZgLTTbERFgPaP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nakayoshi Cooking Series 2 - Oishii Panya-san (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nakayoshi%20Cooking%20Series%202%20-%20Oishii%20Panya-san%20%28Japan%29.png",
    size: "290 KB",
    link1: "https://drive.google.com/file/d/12gmGOhOXVYSaHPGUDoUIsJ5sYRVv20ZA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nakayoshi Cooking Series 3 - Tanoshii Obentou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nakayoshi%20Cooking%20Series%203%20-%20Tanoshii%20Obentou%20%28Japan%29.png",
    size: "376 KB",
    link1: "https://drive.google.com/file/d/144PjgAjmnL4SKBtayOLDn_20sds-EilG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nakayoshi Cooking Series 4 - Tanoshii Dessert (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nakayoshi%20Cooking%20Series%204%20-%20Tanoshii%20Dessert%20%28Japan%29.png",
    size: "433 KB",
    link1: "https://drive.google.com/file/d/1qzmjAc-LdPZWuhBkLBtvnKAEUxev1N91/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nakayoshi Cooking Series 5 - Cake o Tsukurou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nakayoshi%20Cooking%20Series%205%20-%20Cake%20o%20Tsukurou%20%28Japan%29.png",
    size: "679 KB",
    link1: "https://drive.google.com/file/d/1pDODUUoz6feVDNWafoKpKGfz9idvr1TW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nakayoshi Pet Series 1 - Kawaii Hamster (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nakayoshi%20Pet%20Series%201%20-%20Kawaii%20Hamster%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "214 KB",
    link1: "https://drive.google.com/file/d/1KD2KK-x1D7GSzGJMz8huKZfqcxk0aPZh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nakayoshi Pet Series 2 - Kawaii Usagi (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nakayoshi%20Pet%20Series%202%20-%20Kawaii%20Usagi%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "226 KB",
    link1: "https://drive.google.com/file/d/1rPlPq5fuKnd_dk_261VlCsxx3dOBf7qY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nakayoshi Pet Series 3 - Kawaii Koinu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nakayoshi%20Pet%20Series%203%20-%20Kawaii%20Koinu%20%28Japan%29.png",
    size: "302 KB",
    link1: "https://drive.google.com/file/d/17J4KYz8rCWNs2qV2xlUMvqFNrD4_7ebC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nakayoshi Pet Series 4 - Kawaii Koneko (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nakayoshi%20Pet%20Series%204%20-%20Kawaii%20Koneko%20%28Japan%29.png",
    size: "398 KB",
    link1: "https://drive.google.com/file/d/1otCVyNqZqP_v9NbS27Z82gm8608yN9Qk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nakayoshi Pet Series 5 - Kawaii Hamster 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nakayoshi%20Pet%20Series%205%20-%20Kawaii%20Hamster%202%20%28Japan%29.png",
    size: "271 KB",
    link1: "https://drive.google.com/file/d/13UKis1-OG6qNdo3NZ9Z8XwcyXRBeuEUj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Naminori Yarou! (Japan) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Naminori%20Yarou%21%20%28Japan%29%20%28NP%29.png",
    size: "176 KB",
    link1: "https://drive.google.com/file/d/1rLhBHlos_h_rM1q5ZS2eVgkYJgO9wY5B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Net de Get - Minigame @ 100 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Net%20de%20Get%20-%20Minigame%20%40%20100%20%28Japan%29.png",
    size: "257 KB",
    link1: "https://drive.google.com/file/d/1J4Tea4dxq3-ZxqU63LTPfa8doofsB_7V/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Network Boukenki Bugsite - Alpha Version (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Network%20Boukenki%20Bugsite%20-%20Alpha%20Version%20%28Japan%29.png",
    size: "693 KB",
    link1: "https://drive.google.com/file/d/1gVyQcm2AmOv2vsFhxYeh6AMXTbulVOyH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "New Addams Family Series, The (Europe) (En,fr,de,es,it,pt)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/New%20Addams%20Family%20Series%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.png",
    size: "743 KB",
    link1: "https://drive.google.com/file/d/1L1xXZm4Ng2Vv9z1m3pLzyxL22sQ8AUnA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "New Adventures of Mary-Kate & Ashley, The (USA, Europe) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "448 KB",
    link1: "https://drive.google.com/file/d/1k_b86W-MeKa-MCqODUHKOpEF5TGJBH3U/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "New Batman Adventures, The - Chaos In Gotham (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "377 KB",
    link1: "https://drive.google.com/file/d/1dEfNFl5jTBallYcjCvm5aCwp0B_xWdlw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nicktoons Racing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nicktoons%20Racing%20%28USA%29.png",
    size: "220 KB",
    link1: "https://drive.google.com/file/d/1aba7olsGBiPG0yVPY-LoO3Pl6s_PWEZu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ninja JaJaMaru - The Great World Adventure DX (USA, Europe) (Ninja JaJaMaru Retro Collection) (Switch)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1AcTP2C93K00AvLpxbb_9DB3H-6Au3gAr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nintama Rantarou - Ninjutsu Gakuen ni Nyuugaku Shiyou no Dan (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nintama%20Rantarou%20-%20Ninjutsu%20Gakuen%20ni%20Nyuugaku%20Shiyou%20no%20Dan%20%28Japan%29.png",
    size: "216 KB",
    link1: "https://drive.google.com/file/d/1gWcypQs4wE7qSawtpRM5Za-4oGLspQ0n/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nisemon Puzzle da Mon! - Feromon Kyuushutsu Daisakusen! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nisemon%20Puzzle%20da%20Mon%21%20-%20Feromon%20Kyuushutsu%20Daisakusen%21%20%28Japan%29.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/1f1hBRz-JxXtF8b4tyFBQJ-Idi-Pro4jt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nobunaga no Yabou - Game Boy Ban 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nobunaga%20no%20Yabou%20-%20Game%20Boy%20Ban%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/1q-W20L_gJcviaK3XVhDcE4XQJjqCxqfI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Noddy And The Birthday Party (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Noddy%20and%20the%20Birthday%20Party%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "326 KB",
    link1: "https://drive.google.com/file/d/1peMeH-1NlNJKpkP2uXQ0piHcXzggln9y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Nushi Tsuri Adventure - Kite no Bouken (Japan) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Nushi%20Tsuri%20Adventure%20-%20Kite%20no%20Bouken%20%28Japan%29%20%28Rumble%20Version%29.png",
    size: "529 KB",
    link1: "https://drive.google.com/file/d/1o3tys3x1pZu_33do71QXv9zTv8hcc18l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "O'leary Manager 2000 (Europe) (En,fr,de,es,it,nl,ca)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/O%27Leary%20Manager%202000%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CCa%29.png",
    size: "208 KB",
    link1: "https://drive.google.com/file/d/1d1FMc2XHlF6U_DjysofG191ML0bLlPXD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Oddworld Adventures 2 (USA) (En,Fr,De,Es,It) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Oddworld%20Adventures%202%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28GB%20Compatible%29.png",
    size: "478 KB",
    link1: "https://drive.google.com/file/d/1pssXZMtgdbBeXRckwScqPq2qbeT0oShU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Oddworld Adventures Ii (Usa, Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "478 KB",
    link1: "https://drive.google.com/file/d/1tkhrzJ-7eKVYgAx7oB97aiQ3K2rhzY5t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ohasuta Dance Dance Revolution GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ohasuta%20Dance%20Dance%20Revolution%20GB%20%28Japan%29.png",
    size: "295 KB",
    link1: "https://drive.google.com/file/d/19P7SXVYz5GyRPYzLiwJU8czG6IQ7sv-f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ohasuta Yama-chan & Raymond (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1pOlL0PdD-xH0a4tYuyyz8Ry2phHGrkn1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Oide Rascal (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Oide%20Rascal%20%28Japan%29.png",
    size: "172 KB",
    link1: "https://drive.google.com/file/d/1My4cSv89liSVOQVdTHs6CM1fAQS2i22x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ojarumaru - Mangan Jinja no Ennichi de Ojaru! (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ojarumaru%20-%20Mangan%20Jinja%20no%20Ennichi%20de%20Ojaru%21%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/1okSy8buy_bNIDV9ATSiglLtDmv4A-ZET/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ojarumaru - Tsukiyo ga Ike no Takaramono (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ojarumaru%20-%20Tsukiyo%20ga%20Ike%20no%20Takaramono%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "678 KB",
    link1: "https://drive.google.com/file/d/14MJgV1ZUGbLVShaMwR1GU_y7xY1O1yrc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Othello Millennium (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Othello%20Millennium%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "175 KB",
    link1: "https://drive.google.com/file/d/1iuEfzFtkcmBRyupO9ppG43HHHv9hB0Bj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Other Life - Azure Dreams GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Other%20Life%20-%20Azure%20Dreams%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "560 KB",
    link1: "https://drive.google.com/file/d/1fsh5T6O2zyCSxvEKhsXfIWMR0qZMgFiv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ou Dorobou Jing - Angel Version (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ou%20Dorobou%20Jing%20-%20Angel%20Version%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "540 KB",
    link1: "https://drive.google.com/file/d/1eVLpQwD7gYzoXbfNqCg1AHAH4oG8iHWA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ou Dorobou Jing - Devil Version (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ou%20Dorobou%20Jing%20-%20Devil%20Version%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "540 KB",
    link1: "https://drive.google.com/file/d/1B0Bm73UBct0leVsQKL2zePE51kS7kmSa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Owarai Yoiko no Geemumichi - Oyaji Sagashite 3 Choume (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Owarai%20Yoiko%20no%20Geemumichi%20-%20Oyaji%20Sagashite%203%20Choume%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "474 KB",
    link1: "https://drive.google.com/file/d/1Mf228aeUfbIsjmya0-BLnkLlWCBnLyFu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pac-Man - Special Color Edition (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pac-Man%20-%20Special%20Color%20Edition%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "68 KB",
    link1: "https://drive.google.com/file/d/1E9ulwZdolfRcAHpirxf8YXkOfgiARTZP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pachinko CR Mouretsu Genshijin T (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pachinko%20CR%20Mouretsu%20Genshijin%20T%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "91 KB",
    link1: "https://drive.google.com/file/d/1MPpr3BZ_wJgbuscYH8HVhqKoXvPD-35E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pachinko Hisshou Guide - Data no Ousama (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pachinko%20Hisshou%20Guide%20-%20Data%20no%20Ousama%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "287 KB",
    link1: "https://drive.google.com/file/d/1pFdAuEyj4BYbg6Q3tPchuAlrXZ610FRW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pachipachi Pachisurou - New Pulsar Hen (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pachipachi%20Pachisurou%20-%20New%20Pulsar%20Hen%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/1KkD7at_GmQsOMl8HTzEMWrkmMrzLgxdT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Paperboy (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Paperboy%20%28USA%2C%20Europe%29.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/1PPgPJhtTzIrqK4IIxCwVTquaupOxX3PB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Papyrus (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Papyrus%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "325 KB",
    link1: "https://drive.google.com/file/d/1Nbjb3AB1KZn_9XzNqtqshIxgw7asLYFR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Perfect Choro Q (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Perfect%20Choro%20Q%20%28Japan%29.png",
    size: "400 KB",
    link1: "https://drive.google.com/file/d/1hk_55nPv3Gw4Um0wt-xwF4qQaxB4JLjE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Perfect Dark (USA, Europe) (En,Fr,De,Es,It) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Perfect%20Dark%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rumble%20Version%29.png",
    size: "2152 KB",
    link1: "https://drive.google.com/file/d/1injRUZxgKaq1QR439QJPznWUFyNT6awy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Perfect Dark (Usa, Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Perfect%20Dark%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28Rumble%20Version%29.png",
    size: "2152 KB",
    link1: "https://drive.google.com/file/d/1neP0kkWUPa-1cumB6i1c9MkeEsFtABfO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Phantom Zona (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Phantom%20Zona%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "746 KB",
    link1: "https://drive.google.com/file/d/1_heMTW8OJJ_TuFXueFxtCc18rAv2jV7y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pia Carrot e Youkoso!! 2.2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pia%20Carrot%20e%20Youkoso%21%21%202.2%20%28Japan%29.png",
    size: "1505 KB",
    link1: "https://drive.google.com/file/d/1S96za8xHgWkDzGGxPTSayKANLJaQx_-8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pitfall - Beyond the Jungle (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pitfall%20-%20Beyond%20the%20Jungle%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "166 KB",
    link1: "https://drive.google.com/file/d/1Q4zuAo5qjujoVOvtBTMHNLaIwK1bFKq8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pitfall GB (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pitfall%20GB%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "165 KB",
    link1: "https://drive.google.com/file/d/1GWohAMjyiFM295T_bYcGJ7aaGH7WiLVE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Planet Of The Apes (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Planet%20of%20the%20Apes%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "468 KB",
    link1: "https://drive.google.com/file/d/1BQnww2dU-YtMifbAS0Rh-BoPyekI5rqe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Planet of the Apes (USA) (En,Fr,De,Es,It,Nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Planet%20of%20the%20Apes%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "468 KB",
    link1: "https://drive.google.com/file/d/1nGu3IzkZZ22XMXTNDHu9L-5npYPLzpkP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Billiards - Funk the 9 Ball (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Billiards%20-%20Funk%20the%209%20Ball%20%28Japan%29.png",
    size: "261 KB",
    link1: "https://drive.google.com/file/d/1bEjMsZ_UqRQmvTB3a4bxN7JhPPXPepaH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Bomberman (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Bomberman%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "171 KB",
    link1: "https://drive.google.com/file/d/1Fg3FWGraS8EltPw0s4qODHq0d-AjIxOy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Bowling (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Bowling%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "291 KB",
    link1: "https://drive.google.com/file/d/1IMaPKtcV7HR8rqgc42IiRDICHjrR0OO6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Bowling (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Bowling%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1dS2osputYYY9zNgsS-i7OI49dwXX25wF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Color Billiards (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Color%20Billiards%20%28Japan%29.png",
    size: "79 KB",
    link1: "https://drive.google.com/file/d/1ODyEX_EKfVes0celYNsimD0NU3GetFmL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Color Block (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Color%20Block%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "65 KB",
    link1: "https://drive.google.com/file/d/13LrUDonQ_hCKHNRhVpLEqjc3v-D7LL6W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Color Mahjong (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Color%20Mahjong%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "76 KB",
    link1: "https://drive.google.com/file/d/1tcFlwgWumPmkylJQLM9LdJU0qRPsLXR1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Color Trump (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Color%20Trump%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "89 KB",
    link1: "https://drive.google.com/file/d/13QmuHu_UusiWHVx8YXarZ9n-38VIfWM8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Cooking (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Cooking%20%28Japan%29.png",
    size: "1157 KB",
    link1: "https://drive.google.com/file/d/1EbrtFP9otCze-Ld-Z_ysHcsDqCaY-U9s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Densha 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Densha%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "203 KB",
    link1: "https://drive.google.com/file/d/1RBmnQMePXYbrmHO4MkwHd3E9lFpYADjK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Family GB 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Family%20GB%202%20%28Japan%29.png",
    size: "738 KB",
    link1: "https://drive.google.com/file/d/1evZzZmIFSZaHI2qHztSnLDOpxMN7tfno/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket GI Stable (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20GI%20Stable%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "766 KB",
    link1: "https://drive.google.com/file/d/1eXthh5WaRd71hNcteWaRaAdh6pEIPW-s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket GT (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20GT%20%28Japan%29.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/128Fg_DQc1Pzm2UIpimwdQmC5YuB5AYbm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Hanafuda (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Hanafuda%20%28Japan%29.png",
    size: "58 KB",
    link1: "https://drive.google.com/file/d/18MPEmrNOav2zxuZ8Ql9UESfTQA8gcH8B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket King (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20King%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "832 KB",
    link1: "https://drive.google.com/file/d/1F67Qatbe8TmsL2IAMwaor_rWXn8sUpzv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Lure Boy (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Lure%20Boy%20%28Japan%29.png",
    size: "271 KB",
    link1: "https://drive.google.com/file/d/14gJtR8EdFw5jRFJf3PoPyMUKdHn5iIW3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Monsters - Crystal Version (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Monsters%20-%20Crystal%20Version%20%28Japan%29.png",
    size: "960 KB",
    link1: "https://drive.google.com/file/d/1ogULosV-yErGyzSEABFyUVXeoXQVf2D8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Monsters Gin (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Monsters%20Gin%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "699 KB",
    link1: "https://drive.google.com/file/d/1RtB6wxoib-ohWBNA-i-Hbr2fn_3MqaNE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Monsters Gin (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Monsters%20Gin%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "701 KB",
    link1: "https://drive.google.com/file/d/1V39ESZxF15ByOGS7-WP9jtV_joIxLNwY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Monsters Kin (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Monsters%20Kin%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "699 KB",
    link1: "https://drive.google.com/file/d/1forihB76k8JWdaRv8ExXZGnPmDSadsCV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Monsters Kin (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Monsters%20Kin%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "699 KB",
    link1: "https://drive.google.com/file/d/1fbmh4XnAYxbdned_rqz7Bg3HBKxTZniw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Music (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Music%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "275 KB",
    link1: "https://drive.google.com/file/d/13G6N1_KM4OZbP4otXFkjOD7N3dqkTmRf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Pro Wrestling - Perfect Wrestler (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Pro%20Wrestling%20-%20Perfect%20Wrestler%20%28Japan%29.png",
    size: "490 KB",
    link1: "https://drive.google.com/file/d/1cX8aKC4Fpl5Ga9Tjsl2NyyONfTpgfY32/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Pro Wrestling - Perfect Wrestler (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Pro%20Wrestling%20-%20Perfect%20Wrestler%20%28Japan%29.png",
    size: "490 KB",
    link1: "https://drive.google.com/file/d/1sgkPbUzd4Pw2A2nvYwT7CNgCpiUPJG59/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Pro Yakyuu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Pro%20Yakyuu%20%28Japan%29.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1XofzbHfzJ5wjHHo1wUv8pEHB66VVzdpP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Puyo Puyo Sun (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Puyo%20Puyo%20Sun%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "380 KB",
    link1: "https://drive.google.com/file/d/1sCo7xpL8TqZyUWpZWNABuqyzqTZsESkC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Puyo Puyo-n (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Puyo%20Puyo-n%20%28Japan%29.png",
    size: "583 KB",
    link1: "https://drive.google.com/file/d/1SzgIQWDwGzFSeo4lzdr3WKgM2FdVz7Xi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Puyo Puyo-n (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Puyo%20Puyo-n%20%28Japan%29%20%28Rev%201%29.png",
    size: "583 KB",
    link1: "https://drive.google.com/file/d/1tutbKkYETU-kbu3H5OFEUo8Hv2HNXt7c/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Puyo Puyo-n (Japan) (Rev 2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Puyo%20Puyo-n%20%28Japan%29%20%28Rev%202%29.png",
    size: "584 KB",
    link1: "https://drive.google.com/file/d/1vhhFnhKWWxWm5bj6Ao07nBQRuKhNTEB9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pocket Soccer (Europe) (En,fr,de,es,it,pt)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pocket%20Soccer%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.png",
    size: "551 KB",
    link1: "https://drive.google.com/file/d/1IfzIWcqTNdof3nkXkpC2RiPlQX4VIYlc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon - Crystal Version (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20-%20Crystal%20Version%20%28USA%29.png",
    size: "1005 KB",
    link1: "https://drive.google.com/file/d/1lJ7XBVvrVO4JmiLFMj_aecZhWKOjJ1Sm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon - Crystal Version (USA, Europe) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20-%20Crystal%20Version%20%28USA%2C%20Europe%29%20%28Rev%201%29.png",
    size: "1005 KB",
    link1: "https://drive.google.com/file/d/17PRK60X7e7IrBN_oFAx0zXYkJhVUVrfy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon - Gold Version (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20-%20Gold%20Version%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "730 KB",
    link1: "https://drive.google.com/file/d/17hbgErPTtrbqZ8crdeGVnkRO1V2wXF4x/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon - Sapphire Version (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "761 KB",
    link1: "https://drive.google.com/file/d/1Eu_g0xTf1yGCgCWchvIzd4lWXATUFljD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon - Silver Version (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20-%20Silver%20Version%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "730 KB",
    link1: "https://drive.google.com/file/d/17pa4chXiN3rCbUpwRarfpvn1GrQIEFkX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Card GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20Card%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "449 KB",
    link1: "https://drive.google.com/file/d/1UuApzetH-YyHepi3uvr_8y90VNo0wN70/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Cristal",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "1008 KB",
    link1: "https://drive.google.com/file/d/1_NfpCfg2nOqvFBxQWawAxwSSjEa0UAYI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Jade Version - Special Pikachu Edition (USA) (Pirate)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "188 KB",
    link1: "https://drive.google.com/file/d/1c2CuW_O1YO7fzeJLtwQDh58IValm0nnO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Oro",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "731 KB",
    link1: "https://drive.google.com/file/d/1HYAuRNNG9GJ7uiCn5lsPPuQ1hH_iekNK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Pinball (Europe) (En,fr,de,es,it) (Sgb Enhanced)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20Pinball%20%28USA%2C%20Australia%29%20%28Rumble%20Version%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "408 KB",
    link1: "https://drive.google.com/file/d/1QugDhLdpY9N9dEpvbn24Fr7EFmyck7Yp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Pinball (Japan) (Rumble Version) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20Pinball%20%28Japan%29%20%28Rumble%20Version%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "306 KB",
    link1: "https://drive.google.com/file/d/1Bb7FBoY1f55Eu8jRFpsq12OjSRMz9MIm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Pinball (USA, Australia) (Rumble Version) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20Pinball%20%28USA%2C%20Australia%29%20%28Rumble%20Version%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "307 KB",
    link1: "https://drive.google.com/file/d/1mk-TSUkqaz6YjUqSJz9CuFc8AdP9MhcX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Plata",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "730 KB",
    link1: "https://drive.google.com/file/d/1W-8nIcyPZheuxVI0QoeoTCIl4k6fkgaC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Puzzle Challenge (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20Puzzle%20Challenge%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "789 KB",
    link1: "https://drive.google.com/file/d/1uKQAOJzk7o5wQqLWVOAZEHFMcNn0fnW1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Puzzle Challenge (USA, Australia)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20Puzzle%20Challenge%20%28USA%2C%20Australia%29.png",
    size: "660 KB",
    link1: "https://drive.google.com/file/d/1eAfXcQWZwaeiqzGbORLTQIT-CIEuB8WM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Trading Card Game (Europe) (En,es,it) (Sgb Enhanced)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20Trading%20Card%20Game%20%28USA%2C%20Australia%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "601 KB",
    link1: "https://drive.google.com/file/d/1JCwoYXiPZ-kZZsxYCFgNzy7pqTT72_3j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pokemon Trading Card Game (USA, Australia) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20Trading%20Card%20Game%20%28USA%2C%20Australia%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "457 KB",
    link1: "https://drive.google.com/file/d/1i7nl_W_Je6fLejsPvUldXrRz-522SGUc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Polaris SnoCross (USA) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Polaris%20SnoCross%20%28USA%29%20%28Rumble%20Version%29.png",
    size: "301 KB",
    link1: "https://drive.google.com/file/d/11dtbcrKZ6LGwhqTwSBcHMnwRrCw83Gf1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pong - The Next Level (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pong%20-%20The%20Next%20Level%20%28USA%2C%20Europe%29.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1xTib38Tp8em32YYCYUKjIjcC7HxmLOfS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pooh And Tigger's Hunny Safari (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pooh%20and%20Tigger%27s%20Hunny%20Safari%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "477 KB",
    link1: "https://drive.google.com/file/d/1MNLfwigNzRbUhlOgJhCT_2VMW2O4PnmK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pooh and Tigger's Hunny Safari (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pooh%20and%20Tigger%27s%20Hunny%20Safari%20%28USA%29.png",
    size: "478 KB",
    link1: "https://drive.google.com/file/d/1MbyhYuNw9yJTU3L_orS1BP3ZI0L7fP1u/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pop'n Music GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pop%27n%20Music%20GB%20%28Japan%29.png",
    size: "383 KB",
    link1: "https://drive.google.com/file/d/1SZR3BMcg05c7MWXnng4CunHnmU2MlAxO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pop'n Music GB - Animation Melody (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pop%27n%20Music%20GB%20-%20Animation%20Melody%20%28Japan%29.png",
    size: "457 KB",
    link1: "https://drive.google.com/file/d/1-SwzDCjPqPWhnjtEzfsVgodLEIwaBBjz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pop'n Music GB - Disney Tunes (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pop%27n%20Music%20GB%20-%20Disney%20Tunes%20%28Japan%29.png",
    size: "343 KB",
    link1: "https://drive.google.com/file/d/1-LVNxrvHhuaxD5ikjc_tcfS4P5043oPp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pop'n Pop (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pop%27n%20Pop%20%28Japan%29.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1-n48XiZwFKtJguaTS2UOyWzc54QR-bWE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Portal Runner (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Portal%20Runner%20%28USA%29.png",
    size: "645 KB",
    link1: "https://drive.google.com/file/d/1oiob-QZufopMwkpIKUwiunGLCnUBhXxN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Pro Kun Pocket (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Power%20Pro%20Kun%20Pocket%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "812 KB",
    link1: "https://drive.google.com/file/d/1fpICoe9Q-4Sxiir5EIGZnCbNWEwf0McN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Pro Kun Pocket (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Power%20Pro%20Kun%20Pocket%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "812 KB",
    link1: "https://drive.google.com/file/d/1gST2Rh8Jv-9r96gWqYufKKthVXkURGEl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Pro Kun Pocket 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Power%20Pro%20Kun%20Pocket%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "969 KB",
    link1: "https://drive.google.com/file/d/1u01ho0Yuulau7QCZor_Q-v-NAiZam7Hl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Quest (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Power%20Quest%20%28USA%29%20%28En-US%2CEn-GB%2CFr%2CDe%2CEs%2CIt%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "257 KB",
    link1: "https://drive.google.com/file/d/1ZDpMqWe-i23xWuVWbnIVTjG_Io9LDhI-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Quest (USA) (En-US,En-GB,Fr,De,Es,It) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Power%20Quest%20%28USA%29%20%28En-US%2CEn-GB%2CFr%2CDe%2CEs%2CIt%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "257 KB",
    link1: "https://drive.google.com/file/d/1XHIEF9CMEcst0lwPLWZRb3rFMQ_vQ4Em/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Power Spike - Pro Beach Volleyball (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Power%20Spike%20-%20Pro%20Beach%20Volleyball%20%28USA%29.png",
    size: "327 KB",
    link1: "https://drive.google.com/file/d/1O-esCNtaCi7boDTKJYJ6TCR-Kcg2BMjx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Powerpuff Girls, The - Bad Mojo Jojo (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Powerpuff%20Girls%2C%20The%20-%20Bad%20Mojo%20Jojo%20%28USA%29.png",
    size: "596 KB",
    link1: "https://drive.google.com/file/d/1ZGmO9CNTPe58x7gLtoEMhtQ_6ECV9sRh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Powerpuff Girls, The - Bad Mojo Jojo (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Powerpuff%20Girls%2C%20The%20-%20Bad%20Mojo%20Jojo%20%28USA%29%20%28Rev%201%29.png",
    size: "593 KB",
    link1: "https://drive.google.com/file/d/1vyYBumiomVPKCxxihzi2DLiP3KMxqRJa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Powerpuff Girls, The - Bad Mojo Jojo (USA) (Rev 2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Powerpuff%20Girls%2C%20The%20-%20Bad%20Mojo%20Jojo%20%28USA%29%20%28Rev%202%29.png",
    size: "570 KB",
    link1: "https://drive.google.com/file/d/1lqFMtGVJuFe-oC-76obxxlNp0e4FuizJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Powerpuff Girls, The - Battle Him (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Powerpuff%20Girls%2C%20The%20-%20Battle%20Him%20%28USA%29.png",
    size: "594 KB",
    link1: "https://drive.google.com/file/d/1S1v0rTrrC7b9bnPcpR9PwD1Ln851q7z1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Powerpuff Girls, The - Battle Him (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Powerpuff%20Girls%2C%20The%20-%20Battle%20Him%20%28USA%29%20%28Rev%201%29.png",
    size: "573 KB",
    link1: "https://drive.google.com/file/d/1fK09U2kv7C_mRH-YJn6OfnXT-_PBO4qN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Powerpuff Girls, The - Paint the Townsville Green (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Powerpuff%20Girls%2C%20The%20-%20Paint%20the%20Townsville%20Green%20%28USA%29.png",
    size: "575 KB",
    link1: "https://drive.google.com/file/d/1TUJnopWv8YLDEKCnmMmMNztsi195epma/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Powerpuff Girls, The - Paint the Townsville Green (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Powerpuff%20Girls%2C%20The%20-%20Paint%20the%20Townsville%20Green%20%28USA%29%20%28Rev%201%29.png",
    size: "572 KB",
    link1: "https://drive.google.com/file/d/1goBeBj-GwTZ75A-d21E34WTUkspb51yC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Powerpuff Girls, The - Paint the Townsville Green (USA) (Rev 2)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Powerpuff%20Girls%2C%20The%20-%20Paint%20the%20Townsville%20Green%20%28USA%29%20%28Rev%202%29.png",
    size: "551 KB",
    link1: "https://drive.google.com/file/d/1AFJFYwWBwvwva3J39yDRr-ObUWaMIjLD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince Of Persia (Usa, Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Prince%20of%20Persia%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28GB%20Compatible%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1m2PMOz-JgJwAb9Ds3hnWJA2j6PCn7ENx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Prince of Persia (USA, Europe) (En,Fr,De,Es,It) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Prince%20of%20Persia%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28GB%20Compatible%29.png",
    size: "128 KB",
    link1: "https://drive.google.com/file/d/1ZXdGg-LiAYzJanMO2zqSVAJM4r841TCK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Darts (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pro%20Darts%20%28USA%29.png",
    size: "271 KB",
    link1: "https://drive.google.com/file/d/1G0_jYssMbusY1wu_V4p_Nb09APXd5sSa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Foot (France) (En,fr,de,es,it,nl,sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pro%20Foot%20%28France%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29%20%28GB%20Compatible%29.png",
    size: "278 KB",
    link1: "https://drive.google.com/file/d/17pl7WZnQTM-jjmwN4jb8r4D8E2uny3nD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Mahjong Kiwame II GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pro%20Mahjong%20Kiwame%20II%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "298 KB",
    link1: "https://drive.google.com/file/d/1vcKOqqN4DQD1WA6HoJYh9bCwVoV9Z8VB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Mahjong Tsuwamono GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pro%20Mahjong%20Tsuwamono%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "162 KB",
    link1: "https://drive.google.com/file/d/17PMJ793ns30WC686m-_9i3lHEYZ6whwq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Mahjong Tsuwamono GB 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pro%20Mahjong%20Tsuwamono%20GB%202%20%28Japan%29.png",
    size: "195 KB",
    link1: "https://drive.google.com/file/d/1HUD-uIsPoyCjLcrqABnx0kfRRegDBnfi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Pro Pool (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pro%20Pool%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "75 KB",
    link1: "https://drive.google.com/file/d/1v75XEYtCoE4cPS065fJBJko2Omg9bUXu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Project S-11 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Project%20S-11%20%28USA%29.png",
    size: "166 KB",
    link1: "https://drive.google.com/file/d/1oJVulJ3CKW7xxeJrBXMzKM6Se2foeNmC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puchi Carat (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Puchi%20Carat%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "296 KB",
    link1: "https://drive.google.com/file/d/1sHr17jDP0R2d_LC-5CW74quJA1cgHT1j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puyo Puyo Gaiden - Puyo Wars (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Puyo%20Puyo%20Gaiden%20-%20Puyo%20Wars%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "418 KB",
    link1: "https://drive.google.com/file/d/1DTsbBhqbSl76MFr0jyE8jgWBQulj88Hs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzz Loop (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Puzz%20Loop%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "208 KB",
    link1: "https://drive.google.com/file/d/1iMhy9l5Fdfm3KtV4XoZAE4D1ZjzTi9RJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle Bobble 4 (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Puzzle%20Bobble%204%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "209 KB",
    link1: "https://drive.google.com/file/d/1JHt0w3eNznnT3vyCQf-2X-yTFKnlG0Ti/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle Bobble Millennium (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Puzzle%20Bobble%20Millennium%20%28Japan%29.png",
    size: "164 KB",
    link1: "https://drive.google.com/file/d/1W4aBuyXQXeqoipNQpoIvUs2FIUAzwW-8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle Master (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Puzzle%20Master%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "188 KB",
    link1: "https://drive.google.com/file/d/1bIrR29ZzbiGslAsWcdzNLe0z2ZmAS_ou/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzle de Shoubuyo! - Wootama-chan (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Puzzle%20de%20Shoubuyo%21%20-%20Wootama-chan%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "138 KB",
    link1: "https://drive.google.com/file/d/1vcrH_i_2rfJY5NCrIdE1EfpXCVoTKSsx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Puzzled (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Puzzled%20%28USA%29.png",
    size: "145 KB",
    link1: "https://drive.google.com/file/d/1MpuyRTVE0NKYq5GiHVxkGZeI1WtjYrNI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Q-bert (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Q-bert%20%28USA%29.png",
    size: "219 KB",
    link1: "https://drive.google.com/file/d/1jm5LoTN5GZLImvzU6Is6OgZDq5AIPowi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Qix Adventure (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Qix%20Adventure%20%28Japan%29.png",
    size: "325 KB",
    link1: "https://drive.google.com/file/d/12CFvJ_JWQxfyWp42U09LVVYElF4QfQ0m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest - Brian's Journey (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Quest%20-%20Brian%27s%20Journey%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1L97DbhhoZ34UDFL_km5UFAxAql3VzmGw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest - Fantasy Challenge (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Quest%20-%20Fantasy%20Challenge%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "66 KB",
    link1: "https://drive.google.com/file/d/1ThcmVkM3spWiUfDC_477fTSWq58QJ1H6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest For Camelot (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Quest%20for%20Camelot%20%28USA%2C%20Australia%29%20%28En%2CFr%2CEs%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "598 KB",
    link1: "https://drive.google.com/file/d/1Ga_rksNj4hPmzmE7kETLR0sgbe4ED9vM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Quest for Camelot (USA, Australia) (En,Fr,Es) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Quest%20for%20Camelot%20%28USA%2C%20Australia%29%20%28En%2CFr%2CEs%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "532 KB",
    link1: "https://drive.google.com/file/d/1uc3QaWh9Bl5IjwuwitfcGzfdDxUySmuK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Qui Qui (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Qui%20Qui%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "344 KB",
    link1: "https://drive.google.com/file/d/1Hp5xjlzp7XRRbuwflfi2-Hv8eGczcrJL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type DX (Japan) (En) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/R-Type%20DX%20%28Japan%29%20%28En%29%20%28GB%20Compatible%29.png",
    size: "317 KB",
    link1: "https://drive.google.com/file/d/1JPJJjzcZl2ZrmbEFCgAhpjPfQ9tTkzCd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "R-Type DX (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/R-Type%20DX%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "317 KB",
    link1: "https://drive.google.com/file/d/1o24G8VoZpheLv0N8bMmwRjRv6M8_PkIF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "RPG Tsukuru GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/RPG%20Tsukuru%20GB%20%28Japan%29.png",
    size: "481 KB",
    link1: "https://drive.google.com/file/d/1U-8do9U1VyY3TTJ3qS6n_U_zphrco-p6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Racin' Ratz (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Racin%27%20Ratz%20%28USA%29.png",
    size: "627 KB",
    link1: "https://drive.google.com/file/d/1_WMT4cAAj9gSrQe-IiR5SGJDAhK-IxWv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Radikal Bikers (Europe) (En,fr,de,es) (Proto)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "945 KB",
    link1: "https://drive.google.com/file/d/1crXCX3llHq4ee9h8_03BMwZxY-l5iLLk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rainbow Islands (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rainbow%20Islands%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/1mozw71yUIAVqtaGf-3fUmHdOGuh5ydF7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raku x Raku - Mishin (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Raku%20x%20Raku%20-%20Mishin%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/1XBixUWMkd_Do9t_nsHuWlyObpzexJekH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Raku x Raku - Moji (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Raku%20x%20Raku%20-%20Moji%20%28Japan%29.png",
    size: "280 KB",
    link1: "https://drive.google.com/file/d/1R8xsdRMlF-JoaVOfbq5Y6czPhCBAeHZ7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampage - World Tour (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rampage%20-%20World%20Tour%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "156 KB",
    link1: "https://drive.google.com/file/d/1HYJwPxT4UqVQw436hipPXPbP43HmG1SH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampage 2 - Universal Tour (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rampage%202%20-%20Universal%20Tour%20%28USA%2C%20Europe%29.png",
    size: "474 KB",
    link1: "https://drive.google.com/file/d/1poFj8yXOugM6RDwbjwYu8sfPUeP4p0ya/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rampart (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rampart%20%28USA%29.png",
    size: "378 KB",
    link1: "https://drive.google.com/file/d/1gbUYlZNDs5jULrvpDWjZtwQ5MpjxcrQQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rats! (USA) (En,Es) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rats%21%20%28USA%29%20%28En%2CEs%29%20%28GB%20Compatible%29.png",
    size: "371 KB",
    link1: "https://drive.google.com/file/d/14l75DTlfGUQ-EKpeuS2Du4FacuCp9z4N/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rats! (Usa) (En,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rats%21%20%28USA%29%20%28En%2CEs%29%20%28GB%20Compatible%29.png",
    size: "371 KB",
    link1: "https://drive.google.com/file/d/1fLqn3dy3gGmKLZqBLV0r071J5pzy9ZeM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rayman%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "1202 KB",
    link1: "https://drive.google.com/file/d/1-A0i58RszjEG-d7ndjnwaPnL6RuEQY6X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman (USA) (En,Fr,De,Es,It,Nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rayman%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "1202 KB",
    link1: "https://drive.google.com/file/d/1_AAMR8dUN1s-Ggbq9MYPENOJFTXdFSjs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman - Mister Dark no Wana (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rayman%20-%20Mister%20Dark%20no%20Wana%20%28Japan%29.png",
    size: "1078 KB",
    link1: "https://drive.google.com/file/d/1zFSBXXEcbS88wpDFzb42OdVqW5ZDCqGt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman 2 (USA) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rayman%202%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "861 KB",
    link1: "https://drive.google.com/file/d/1R5-H-lPmWu2gMq2kCBI5kRsndvlqMNzc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rayman 2 - The Great Escape (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "861 KB",
    link1: "https://drive.google.com/file/d/15boEdY2ZeDfC4DmAC5qJDDKMvgUagslv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Razor Freestyle Scooter (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Razor%20Freestyle%20Scooter%20%28USA%29.png",
    size: "312 KB",
    link1: "https://drive.google.com/file/d/1wacRZjVe2tYUfY-pQJNhwO8UpCwxdd6K/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ready 2 Rumble Boxing (USA) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ready%202%20Rumble%20Boxing%20%28USA%29%20%28Rumble%20Version%29.png",
    size: "1480 KB",
    link1: "https://drive.google.com/file/d/1n1F2vHjZXpKUGIHF6fdkIURFQ9YqzRsB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Real Pro Yakyuu! - Central League Hen (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Real%20Pro%20Yakyuu%21%20-%20Central%20League%20Hen%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "176 KB",
    link1: "https://drive.google.com/file/d/1o0uqg7h0gaRux1ABnY0bkNtGY9OvQjXz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Real Pro Yakyuu! - Pacific League Hen (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Real%20Pro%20Yakyuu%21%20-%20Pacific%20League%20Hen%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "176 KB",
    link1: "https://drive.google.com/file/d/129IHLUGAVmywAf5Jm8bm1XY9S5sQGt9H/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rescue Heroes - Fire Frenzy (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rescue%20Heroes%20-%20Fire%20Frenzy%20%28USA%29.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/1AbPMhRueuGPznYBfFCKc4QY6koNGb3Ih/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Reservoir Rat (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Reservoir%20Rat%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28GB%20Compatible%29.png",
    size: "376 KB",
    link1: "https://drive.google.com/file/d/1jaFY_f-SjS5bK_9I_mSe8J9ud3bT7AXf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Resident Evil Gaiden (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Resident%20Evil%20Gaiden%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "669 KB",
    link1: "https://drive.google.com/file/d/1INFcAk2PNsTghRUvbzig6Br46saFRtA-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Resident Evil Gaiden (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Resident%20Evil%20Gaiden%20%28USA%29.png",
    size: "694 KB",
    link1: "https://drive.google.com/file/d/1jl9HV_J5ajbTf7c99mkA2PL91In5reZG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Return of the Ninja (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Return%20of%20the%20Ninja%20%28USA%29.png",
    size: "298 KB",
    link1: "https://drive.google.com/file/d/1gSf-THXb-3wCfD43v5a4uIHT0Fw7c3h9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Revelations - The Demon Slayer (U) [C][!]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Revelations%20-%20The%20Demon%20Slayer%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1n7kXRNuowc1zfWbL87jL7wfQAxN4kxVa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Revelations - The Demon Slayer (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Revelations%20-%20The%20Demon%20Slayer%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "192 KB",
    link1: "https://drive.google.com/file/d/1wkvEt9-YqTRyjUd90uR0Fl7mgAbvCEGH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rhino Rumble (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rhino%20Rumble%20%28USA%2C%20Europe%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1--g7wFahMK70wBIfk5eQEGGJ6f1wR2VW/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Champs - BXS Stunt Biking (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Road%20Champs%20-%20BXS%20Stunt%20Biking%20%28USA%2C%20Europe%29.png",
    size: "224 KB",
    link1: "https://drive.google.com/file/d/1CopTShPISOU-oKWqZI7ow869nlevqJbI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Road Rash (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Road%20Rash%20%28USA%2C%20Europe%29.png",
    size: "236 KB",
    link1: "https://drive.google.com/file/d/1sFYAZZZ30_fp6B44c1lBX9Ed1U-o-tAD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roadsters (USA) (En,Fr,De,Es,It,Nl) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Roadsters%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29%20%28GB%20Compatible%29.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/1e8EJRI_jNT9pUiXu6IbIewXOLn1u8saf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roadsters Trophy (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "277 KB",
    link1: "https://drive.google.com/file/d/1eNxYxAsDGkOaPJYmleAt9yXzBjOwf0LV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robin Hood (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Robin%20Hood%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "501 KB",
    link1: "https://drive.google.com/file/d/1s69PmlQV2A0VIYQSV01moXeo33wHxlOF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robocop (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/RoboCop%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "415 KB",
    link1: "https://drive.google.com/file/d/16yzBo3X6Wo9U2mnKBCDbKX1ERSbyiD5s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robopon - Sun Version (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Robopon%20-%20Sun%20Version%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "535 KB",
    link1: "https://drive.google.com/file/d/1cqg3CMiSK9W3fqRU5s7GdGuk-HdvxGj-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robot Poncots - Comic Bom Bom Special Version (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Robot%20Poncots%20-%20Comic%20Bom%20Bom%20Special%20Version%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "544 KB",
    link1: "https://drive.google.com/file/d/1hSSRoxekHQtJhKb_Wg0VjNjv7iTSvWPe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robot Poncots - Moon Version (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Robot%20Poncots%20-%20Moon%20Version%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "543 KB",
    link1: "https://drive.google.com/file/d/1owAls7cvRIdb1yS8QSkFryPHnldN1qik/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robot Poncots - Star Version (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Robot%20Poncots%20-%20Star%20Version%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "526 KB",
    link1: "https://drive.google.com/file/d/15habETzWMTx_9bTwVEIMhLIFaJaUg3en/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Robot Poncots - Sun Version (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Robot%20Poncots%20-%20Sun%20Version%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "526 KB",
    link1: "https://drive.google.com/file/d/1vVpx5hbu9fZtMnKSoajACzzQg82vYRgJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocket Power - Gettin' Air (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rocket%20Power%20-%20Gettin%27%20Air%20%28USA%2C%20Europe%29.png",
    size: "308 KB",
    link1: "https://drive.google.com/file/d/1oR_W5rBft7_D8QdTb-OqzIuE6j7V9rPJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rockman X - Cyber Mission (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rockman%20X%20-%20Cyber%20Mission%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "496 KB",
    link1: "https://drive.google.com/file/d/1it6tiBwOvqn34r21nYYd6Y1Kd8Rm6FNl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rockman X2 - Soul Eraser (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rockman%20X2%20-%20Soul%20Eraser%20%28Japan%29.png",
    size: "530 KB",
    link1: "https://drive.google.com/file/d/1L75poJVUfyyapJwTC1NSUVwOvSDlgfJH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rocky Mountain - Trophy Hunter (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rocky%20Mountain%20-%20Trophy%20Hunter%20%28USA%29.png",
    size: "240 KB",
    link1: "https://drive.google.com/file/d/1QnOfkHUd26w5WmsD0SbFJCeud8CcykIL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rokumon Tengai Mon-Colle-Knight GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rokumon%20Tengai%20Mon-Colle-Knight%20GB%20%28Japan%29.png",
    size: "455 KB",
    link1: "https://drive.google.com/file/d/1G2WttbZKCnr4ivw5SPH-mGjGJsN_0cqR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roland Garros French Open (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Roland%20Garros%20French%20Open%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "338 KB",
    link1: "https://drive.google.com/file/d/1uh2paA1GFZoOvIcHhT21UfQeGVf_HWVF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ronaldo V-Football (Europe) (En,fr,de,es,it,pt,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ronaldo%20V-Football%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CPt%29%20%28GB%20Compatible%29.png",
    size: "349 KB",
    link1: "https://drive.google.com/file/d/1u0Uo5tuClnd-S8Y3LbLf_AXUYOYUmo-W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ronaldo V-Soccer (USA) (En,Fr,Es,Pt) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ronaldo%20V-Soccer%20%28USA%29%20%28En%2CFr%2CEs%2CPt%29%20%28GB%20Compatible%29.png",
    size: "353 KB",
    link1: "https://drive.google.com/file/d/1ZL7Y-nVUecNyrcofxlGoLScNRpL-T_CL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Roswell Conspiracies - Aliens, Myths & Legends (USA) (En,Fr,De)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/1bbQ_MogvhTGF0RPVF77NCArR-YY0X7dj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rox (Japan) (En) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rox%20%28Japan%29%20%28En%29%20%28GB%20Compatible%29.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/1oEqsNvGZ6CpdgExDI28AfBqcmDHZFK9X/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rox (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rox%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "26 KB",
    link1: "https://drive.google.com/file/d/1nssDu3tWnNaGVSMgnKd416bgVO0YaHB4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rugrats - Time Travelers (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rugrats%20-%20Time%20Travelers%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "526 KB",
    link1: "https://drive.google.com/file/d/1z2wbpKOWVFQsdlksddObI8IAE9lchRxn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rugrats - Totally Angelica (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rugrats%20-%20Totally%20Angelica%20%28USA%2C%20Europe%29.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1uIB8V7DrrWSRKBH0kOcL6E277p2l8r6t/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rugrats In Paris - The Movie (Europe) (En,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rugrats%20in%20Paris%20-%20The%20Movie%20%28USA%2C%20Europe%29.png",
    size: "514 KB",
    link1: "https://drive.google.com/file/d/1y1jKwOW1UJWQkcmyZFaqIIbFSar9AXAR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rugrats Movie, The (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rugrats%20Movie%2C%20The%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "388 KB",
    link1: "https://drive.google.com/file/d/1_k4nbW3BimtLYmqe-ECb2Y-pnnIubxhl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rugrats in Paris - The Movie (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Rugrats%20in%20Paris%20-%20The%20Movie%20%28USA%2C%20Europe%29.png",
    size: "505 KB",
    link1: "https://drive.google.com/file/d/1genOanfsjJrTbMexda5QGmm6hxOarRyH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Rumble & Tumble (USA) (Demo) (E3 2001)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "20 KB",
    link1: "https://drive.google.com/file/d/1_XxrBqjX8bSLrDi0ymK47StF51CVs9NJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SD Hiryuu no Ken EX (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/SD%20Hiryuu%20no%20Ken%20EX%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "382 KB",
    link1: "https://drive.google.com/file/d/1fU12ol-qrdk2BpHyuYfY6Gzb3z0VzY9g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Saban's Power Rangers - Lightspeed Rescue (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Saban%27s%20Power%20Rangers%20-%20Lightspeed%20Rescue%20%28USA%2C%20Europe%29.png",
    size: "349 KB",
    link1: "https://drive.google.com/file/d/1_nBuWAz7rgXPyDhfhdxIhzM0R4IxRF_g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Saban's Power Rangers - Time Force (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Saban%27s%20Power%20Rangers%20-%20Time%20Force%20%28USA%2C%20Europe%29.png",
    size: "436 KB",
    link1: "https://drive.google.com/file/d/1rTfzN7cdn-erk02T3VhBKU0JHrDv0WfN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sabrina - The Animated Series - Spooked! (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sabrina%20-%20The%20Animated%20Series%20-%20Spooked%21%20%28USA%2C%20Europe%29.png",
    size: "341 KB",
    link1: "https://drive.google.com/file/d/1fV7vlrCIdz5aFKEzvvIg-eWZA-eyOxrn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sabrina - The Animated Series - Zapped! (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sabrina%20-%20The%20Animated%20Series%20-%20Zapped%21%20%28USA%2C%20Europe%29.png",
    size: "454 KB",
    link1: "https://drive.google.com/file/d/173Wv1gYUjtfiblZpxUMpLE1ymOsw4oI5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sakata Gorou Kudan no Renju Kyoushitsu (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sakata%20Gorou%20Kudan%20no%20Renju%20Kyoushitsu%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "31 KB",
    link1: "https://drive.google.com/file/d/1i0T_7xDTZn0P6rnE1HCGnVNxYzq_GoiV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sakura Taisen GB - Geki Hana Gumi Nyuutai! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sakura%20Taisen%20GB%20-%20Geki%20Hana%20Gumi%20Nyuutai%21%20%28Japan%29.png",
    size: "1892 KB",
    link1: "https://drive.google.com/file/d/1Y1XXq1ZxHh23J1i3nTX5BGN1cSfpFtjG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sakura Taisen GB 2 - Thunderbolt Sakusen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sakura%20Taisen%20GB%202%20-%20Thunderbolt%20Sakusen%20%28Japan%29.png",
    size: "1188 KB",
    link1: "https://drive.google.com/file/d/1jYsYuXjt9lp9tVVydA0hDGznStNiF2OM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Samurai Kid (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Samurai%20Kid%20%28Japan%29.png",
    size: "425 KB",
    link1: "https://drive.google.com/file/d/1Vg9AARxkXCK61cj8MTefSnKvnjHk2q3T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "San Francisco Rush 2049 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/San%20Francisco%20Rush%202049%20%28USA%2C%20Europe%29.png",
    size: "223 KB",
    link1: "https://drive.google.com/file/d/1dfqdMoo7ugBf5HMmYecBunlvS_b1JVp9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sangokushi - Game Boy Ban 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sangokushi%20-%20Game%20Boy%20Ban%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "273 KB",
    link1: "https://drive.google.com/file/d/128mS2ciL8_RVHOSz4roipOg5ujgtGm6I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanrio Timenet - Kako Hen (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sanrio%20Timenet%20-%20Kako%20Hen%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "404 KB",
    link1: "https://drive.google.com/file/d/12ZNHhkGPUtZLtlrmbspU0RwDAWDr4Nbi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanrio Timenet - Kako Hen (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sanrio%20Timenet%20-%20Kako%20Hen%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "404 KB",
    link1: "https://drive.google.com/file/d/1pYH2NjUVhPN3LNjfaVAl270fVPVGbaGi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanrio Timenet - Mirai Hen (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sanrio%20Timenet%20-%20Mirai%20Hen%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "403 KB",
    link1: "https://drive.google.com/file/d/10zkSz6De-zO4Gg_gQ3_V-KPn71AEH1PY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sanrio Timenet - Mirai Hen (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sanrio%20Timenet%20-%20Mirai%20Hen%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "403 KB",
    link1: "https://drive.google.com/file/d/1egUVKZs8VbAIfyTy4o_iJAjCWXy6x3I3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Saru Puncher (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Saru%20Puncher%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "639 KB",
    link1: "https://drive.google.com/file/d/1nY1UR-dQIh307g9F_q1A_X39QUUULGOu/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Scooby-Doo! - Classic Creep Capers (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Scooby-Doo%21%20-%20Classic%20Creep%20Capers%20%28USA%2C%20Europe%29.png",
    size: "410 KB",
    link1: "https://drive.google.com/file/d/1fj3TXtVwW176VBUZy-G_IJoUFX7e2spk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Second Edition Harry Boy, The - The Secret of the Chamber of Secrets (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "716 KB",
    link1: "https://drive.google.com/file/d/1ERMN_9PkVOESLBeSiEuRhgqmxLGI4p4a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sei Hai Densetsu (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sei%20Hai%20Densetsu%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "243 KB",
    link1: "https://drive.google.com/file/d/1GkT0cICqfGVF20OWaOwD8yrftfRQeXaz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Seme COM Dungeon - Drururuaga (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Seme%20COM%20Dungeon%20-%20Drururuaga%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "730 KB",
    link1: "https://drive.google.com/file/d/1fNJu-6BbJErJS7zen9qQPHMnLx4qBiql/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Senkai Ibunroku Juntei Taisen - TV Animation Senkaiden Houshin Engi Yori (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Senkai%20Ibunroku%20Juntei%20Taisen%20-%20TV%20Animation%20Senkaiden%20Houshin%20Engi%20Yori%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/12Ms52ePVQdnNs6Jc6fEOImoQiwW7W5bA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sesame Street - Elmo's 123s (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sesame%20Street%20-%20Elmo%27s%20123s%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "55 KB",
    link1: "https://drive.google.com/file/d/1Rj9O4ChrRBV4d-KZtKhCDyNzdPiEhqAH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sesame Street - Elmo's ABCs (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sesame%20Street%20-%20Elmo%27s%20ABCs%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "50 KB",
    link1: "https://drive.google.com/file/d/1twziLXfXUfgg9ePTJfANVxN7KUALH1qk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sesame Street - The Adventures of Elmo in Grouchland (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sesame%20Street%20-%20The%20Adventures%20of%20Elmo%20in%20Grouchland%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "82 KB",
    link1: "https://drive.google.com/file/d/1gTtVrRpz7f3clW8dwnpHCvc2kK9TgASs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sesame Street Sports (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sesame%20Street%20Sports%20%28USA%29.png",
    size: "99 KB",
    link1: "https://drive.google.com/file/d/1ytQcBxif3xCRlfnbKqPIGM3_Df4Cq2V7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sewing Machine Operation Software (USA) (En,Fr,Es) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sewing%20Machine%20Operation%20Software%20%28USA%29%20%28En%2CFr%2CEs%29%20%28GB%20Compatible%29.png",
    size: "198 KB",
    link1: "https://drive.google.com/file/d/1WvPxPb3oPLevQQ8WOUGvhNFUxz1tVRIk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sgt. Rock - On the Frontline (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sgt.%20Rock%20-%20On%20the%20Frontline%20%28USA%29.png",
    size: "173 KB",
    link1: "https://drive.google.com/file/d/1OUdGBYtbGBZIboXj1O2DdDG--uCYQ_cc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadowgate Classic (USA, Europe) (En,Fr,De,Es,Sv) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shadowgate%20Classic%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CSv%29%20%28GB%20Compatible%29.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1SQx4HGMakblq2PKC0rDtTW3N2y2FQOVx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadowgate Classic (Usa, Europe) (En,fr,de,es,sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shadowgate%20Classic%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CSv%29%20%28GB%20Compatible%29.png",
    size: "355 KB",
    link1: "https://drive.google.com/file/d/1sBdLNe1GhHFk5F50_ErR9IEG_jKdPw5d/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shadowgate Return (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shadowgate%20Return%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "245 KB",
    link1: "https://drive.google.com/file/d/1SGDpAlIm5ZLfqgF6GOvg2tqWbbOxGTPG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shaman King Card Game - Chou Senjiryakketsu - Meramera Hen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shaman%20King%20Card%20Game%20-%20Chou%20Senjiryakketsu%20-%20Meramera%20Hen%20%28Japan%29.png",
    size: "1296 KB",
    link1: "https://drive.google.com/file/d/15dpfyHxidJP18B1YCIlByit1qJtZ5rbp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shamus (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shamus%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "223 KB",
    link1: "https://drive.google.com/file/d/1P8awc8jo29Fo5eRjp4gpYuN3uNdtaeW6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shanghai Pocket (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shanghai%20Pocket%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "142 KB",
    link1: "https://drive.google.com/file/d/1Hz-tMKtSj7XfgB23NEu5dXBW61jnvjXs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shantae (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shantae%20%28USA%29.png",
    size: "1266 KB",
    link1: "https://drive.google.com/file/d/1x9ii_aLR4eaj6MVlRu-vh0QEgq68juWd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shantae (Usa)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shantae%20%28USA%29.png",
    size: "1266 KB",
    link1: "https://drive.google.com/file/d/1WBMerPW24ELnUijzjvZ_sf9p3if5EC0O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shantae [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shantae%20%28USA%29.png",
    size: "1301 KB",
    link1: "https://drive.google.com/file/d/1AFrj_SmHSGGnwmu3q0HLSClv7yB1r9DQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shaun Palmer's Pro Snowboarder (USA, Australia)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shaun%20Palmer%27s%20Pro%20Snowboarder%20%28USA%2C%20Australia%29.png",
    size: "548 KB",
    link1: "https://drive.google.com/file/d/1_z6Jqq9juyGZ2HNM427cZowBLT9nKKdM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Megami Tensei Devil Children - Aka no Sho (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shin%20Megami%20Tensei%20Devil%20Children%20-%20Aka%20no%20Sho%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1052 KB",
    link1: "https://drive.google.com/file/d/1LV5XvpYAZdemQBcgedAoL3T8tBWbaC3B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Megami Tensei Devil Children - Aka no Sho (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shin%20Megami%20Tensei%20Devil%20Children%20-%20Aka%20no%20Sho%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1052 KB",
    link1: "https://drive.google.com/file/d/1JqU0GAz2he1jeHpibh3REqNC-wUlEWOc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Megami Tensei Devil Children - Kuro no Sho (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shin%20Megami%20Tensei%20Devil%20Children%20-%20Kuro%20no%20Sho%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1053 KB",
    link1: "https://drive.google.com/file/d/14QwEFr50LDeRdOdsC0hxm9fY8kWDJA8r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Megami Tensei Devil Children - Kuro no Sho (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shin%20Megami%20Tensei%20Devil%20Children%20-%20Kuro%20no%20Sho%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "1053 KB",
    link1: "https://drive.google.com/file/d/1ntH_VWUh6V3pnmqdJS7qrB78liRBoLin/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Megami Tensei Devil Children - Shiro no Sho (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shin%20Megami%20Tensei%20Devil%20Children%20-%20Shiro%20no%20Sho%20%28Japan%29.png",
    size: "1078 KB",
    link1: "https://drive.google.com/file/d/1N1qSogGffjyDlflWZDQEqXg5g-SvpYCL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shin Megami Tensei Trading Card - Card Summoner (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shin%20Megami%20Tensei%20Trading%20Card%20-%20Card%20Summoner%20%28Japan%29.png",
    size: "930 KB",
    link1: "https://drive.google.com/file/d/1-4-aLZRB0YXsdbjnnzReFBjr4f7SUPjl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shougi 2 (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shougi%202%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "87 KB",
    link1: "https://drive.google.com/file/d/1fVV5auMUDWtB_xgX-EeQomepJ7QGZHNY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shougi 3 (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shougi%203%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "64 KB",
    link1: "https://drive.google.com/file/d/18FGhR1oXvv8FzaRSJmhCo4oHBpQSA20P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shrek - Fairy Tale Freakdown (USA, Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shrek%20-%20Fairy%20Tale%20Freakdown%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "630 KB",
    link1: "https://drive.google.com/file/d/1pTDurViMbLtwggJ4VsYXPQ43FRRTcgNc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shrek - Fairy Tale Freakdown (Usa, Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shrek%20-%20Fairy%20Tale%20Freakdown%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "630 KB",
    link1: "https://drive.google.com/file/d/1RRO4nUrP24lY_nfYjIEtKqMMrwiwgi8q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Shutokou Racing, The (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shutokou%20Racing%2C%20The%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/1f7nvla9fRQqn_CgeyrKKLwqHAAcUxf0j/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Simpsons, The - Night of the Living Treehouse of Horror (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Simpsons%2C%20The%20-%20Night%20of%20the%20Living%20Treehouse%20of%20Horror%20%28USA%2C%20Europe%29.png",
    size: "463 KB",
    link1: "https://drive.google.com/file/d/18dfbISb50zE3wed98yWQwGXQYi__KE0R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smurfs Nightmare, The (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Smurfs%20Nightmare%2C%20The%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "175 KB",
    link1: "https://drive.google.com/file/d/1Kne-4zmuk11UmJCVAede3F3MCBcr_-y7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Smurfs Nightmare, The (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Smurfs%20Nightmare%2C%20The%20%28USA%29.png",
    size: "175 KB",
    link1: "https://drive.google.com/file/d/1AYrjxLKp0ImyBfu91jYZcNcSCM5h16R_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snobow Champion (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Snobow%20Champion%20%28Japan%29.png",
    size: "107 KB",
    link1: "https://drive.google.com/file/d/1EW1xaiFSBWoOWkupnvkkhR6sOQMkfujk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snoopy Tennis (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Snoopy%20Tennis%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "267 KB",
    link1: "https://drive.google.com/file/d/1w2pe1k25jrQTPT41nypcKFMCVDEi44s0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snoopy Tennis (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Snoopy%20Tennis%20%28Japan%29.png",
    size: "247 KB",
    link1: "https://drive.google.com/file/d/1iXgGjvlGimxEtlKauEUyd8xHEyUc8CnC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snoopy Tennis (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Snoopy%20Tennis%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "266 KB",
    link1: "https://drive.google.com/file/d/1-7M_nppsXCs7Wq_HM3MDyyDlVQX6-HMB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snow White And The Seven Dwarfs (Europe) (En,fr,de,es,it,nl,sv,no,da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Snow%20White%20and%20the%20Seven%20Dwarfs%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%2CNo%2CDa%29.png",
    size: "534 KB",
    link1: "https://drive.google.com/file/d/1N-pJbt58HNE_GgwS-AOIkxz1Eq_xDKvV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snow White and the Seven Dwarfs (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Snow%20White%20and%20the%20Seven%20Dwarfs%20%28USA%29.png",
    size: "534 KB",
    link1: "https://drive.google.com/file/d/1BkUfh9BLEEFEUsb3HF5z0k19aLDkYspG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Snowcross (Europe) (En,fr,de,es,it,pt)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/SnowCross%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CPt%29.png",
    size: "330 KB",
    link1: "https://drive.google.com/file/d/1MvIZAa5io1ZU9RzD1eXVYdEDdGzjKogl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soccer Manager (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Soccer%20Manager%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "127 KB",
    link1: "https://drive.google.com/file/d/1U8jCd9W-KGJkAaGpR-827xr3lVNoEDXG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Solomon (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Solomon%20%28Japan%29.png",
    size: "276 KB",
    link1: "https://drive.google.com/file/d/18iFQd7SbYgLG4lk_b2PZRqke3tYpEUGP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman - 5-tsu no Tou no Ousama (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Soreike%21%20Anpanman%20-%205-tsu%20no%20Tou%20no%20Ousama%20%28Japan%29.png",
    size: "156 KB",
    link1: "https://drive.google.com/file/d/1ovocA4tAyWspF-X8SU949Tmt4fG6mVY2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soreike! Anpanman - Fushigi na Nikoniko Album (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Soreike%21%20Anpanman%20-%20Fushigi%20na%20Nikoniko%20Album%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "211 KB",
    link1: "https://drive.google.com/file/d/12IWthoy6vRqkY9YMsnFXaAXRlcixNXXx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soukoban Densetsu - Hikari to Yami no Kuni (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Soukoban%20Densetsu%20-%20Hikari%20to%20Yami%20no%20Kuni%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "144 KB",
    link1: "https://drive.google.com/file/d/1Wf5jHiqgY0pdmwoFpUFFzyy0lKOxoHwt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Soul Getter - Houkago Bouken RPG (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Soul%20Getter%20-%20Houkago%20Bouken%20RPG%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "518 KB",
    link1: "https://drive.google.com/file/d/1OEQXqFllNATcnvRjvgEDTXzMz9u8rGFK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Baby (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "702 KB",
    link1: "https://drive.google.com/file/d/1oYk7husCFki4-iw7iVe6tvJiIGOB_dRh/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Invaders (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Space%20Invaders%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "86 KB",
    link1: "https://drive.google.com/file/d/1nzFXXPDUKzEiOEds0SYhu6WExQnuwgNd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Invaders X (Japan) (En) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Space%20Invaders%20X%20%28Japan%29%20%28En%29%20%28GB%20Compatible%29.png",
    size: "87 KB",
    link1: "https://drive.google.com/file/d/1H95J8G__N5D25n9LCKzOH0NHhzpig94e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space Marauder (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Space%20Marauder%20%28USA%29.png",
    size: "52 KB",
    link1: "https://drive.google.com/file/d/1MPpAevho0bF5oePXRLJkzH-12GONUSkb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space-Net - Cosmo Blue (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Space-Net%20-%20Cosmo%20Blue%20%28Japan%29.png",
    size: "988 KB",
    link1: "https://drive.google.com/file/d/11-ohXq2gp8ENRVnwcGfsCPA_fOCMauIV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Space-Net - Cosmo Red (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Space-Net%20-%20Cosmo%20Red%20%28Japan%29.png",
    size: "988 KB",
    link1: "https://drive.google.com/file/d/1vQxIETf0tlseyxkzggD4foWLPe2_ZKAN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spacestation Silicon Valley (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Spacestation%20Silicon%20Valley%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29%20%28GB%20Compatible%29.png",
    size: "977 KB",
    link1: "https://drive.google.com/file/d/1BUtNbxhIVvoPqKsNfS7wdqj01uFaUoiG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spawn (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Spawn%20%28USA%29.png",
    size: "1084 KB",
    link1: "https://drive.google.com/file/d/1UExNoUFiOBB5MEqYpxLVanieTRL-g2Aw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Speedy Gonzales - Aztec Adventure (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Speedy%20Gonzales%20-%20Aztec%20Adventure%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "462 KB",
    link1: "https://drive.google.com/file/d/1lC44VLjwSfWngqMhpdHZIe0QDf16sHDP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Spider-Man%20%28Japan%29.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/1RPr0Ch-jeABQFIrsMfG_7v8kox7hsEhN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Spider-Man%20%28USA%2C%20Europe%29.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/12mDC2mlpQnpaYHPgIT3p2c6up6O1T1mB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man 2 - The Sinister Six (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Spider-Man%202%20-%20The%20Sinister%20Six%20%28USA%2C%20Europe%29.png",
    size: "536 KB",
    link1: "https://drive.google.com/file/d/1Ra2uulsK48Sc-pRAtfje0H2HOc25NLy4/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man 3 - Movie Version (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "941 KB",
    link1: "https://drive.google.com/file/d/1FgC4ripwCeNOAKlFfBv3-oSYkJA5plrF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spider-Man [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Spider-Man%20%28USA%2C%20Europe%29.png",
    size: "390 KB",
    link1: "https://drive.google.com/file/d/155vJ9QabKBad1Nw9CvZ20Er5O3gu9Epg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spirou Robbedoes - The Robot Invasion (Europe) (En,fr,de,es,it,nl,da)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "344 KB",
    link1: "https://drive.google.com/file/d/1zzhdfrdK3T0ymHlz0-KCun-yQR6RfNw_/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "SpongeBob SquarePants - Legend of the Lost Spatula (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/SpongeBob%20SquarePants%20-%20Legend%20of%20the%20Lost%20Spatula%20%28USA%2C%20Europe%29.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/1H_E2DGgGWdiVyqqiMZv34DyaMPEN-S5Q/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy Vs. Spy (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Spy%20vs%20Spy%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29.png",
    size: "284 KB",
    link1: "https://drive.google.com/file/d/19fxMYYr8P8_DmaTAZ0Q_P9UvFtjf0Tdc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy vs Spy (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Spy%20vs%20Spy%20%28Japan%29.png",
    size: "288 KB",
    link1: "https://drive.google.com/file/d/1F7pLQfEutGROxnGlleSjwm4QdRCAnVjt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy vs Spy (Japan) (Rev 1) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Spy%20vs%20Spy%20%28Japan%29%20%28Rev%201%29%20%28NP%29.png",
    size: "340 KB",
    link1: "https://drive.google.com/file/d/1LQv0rr8BSSF1dZ_cnx-zBRuthM2m_0uc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Spy vs Spy (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Spy%20vs%20Spy%20%28USA%29.png",
    size: "228 KB",
    link1: "https://drive.google.com/file/d/1D0SPfhxavnGutKFYlW0xtOTTc7c6azZG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Ocean - Blue Sphere (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Star%20Ocean%20-%20Blue%20Sphere%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "2074 KB",
    link1: "https://drive.google.com/file/d/1QJ5gc0nq_EEizR2VQP_-DvTxipPLuLKB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars - Yoda Stories (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Star%20Wars%20-%20Yoda%20Stories%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "579 KB",
    link1: "https://drive.google.com/file/d/16KwkQqREfIYVI-LnltOydgmEj_G4NiJl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars Episode I - Obi-Wan's Adventures (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Star%20Wars%20Episode%20I%20-%20Obi-Wan%27s%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "692 KB",
    link1: "https://drive.google.com/file/d/1ffc9veDVXRsnIZsysvponPoufACdQ209/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars Episode I - Obi-Wan's Adventures (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Star%20Wars%20Episode%20I%20-%20Obi-Wan%27s%20Adventures%20%28USA%29.png",
    size: "691 KB",
    link1: "https://drive.google.com/file/d/14Ffy4044cA4Maczw5iL6f7lXt4O-44VL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Star Wars Episode I - Racer (USA, Europe) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Star%20Wars%20Episode%20I%20-%20Racer%20%28USA%2C%20Europe%29%20%28Rumble%20Version%29.png",
    size: "664 KB",
    link1: "https://drive.google.com/file/d/1GwUpxQSEHn3SZ4aU39DumycjA4UttNmk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stranded Kids [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Stranded%20Kids%20%28Europe%29%20%28En%2CFr%2CDe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "396 KB",
    link1: "https://drive.google.com/file/d/18vbptpUlERbdfSFzUTVF5JARDPuoryXS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter Alpha - Warriors' Dreams (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Street%20Fighter%20Alpha%20-%20Warriors%27%20Dreams%20%28Japan%29.png",
    size: "529 KB",
    link1: "https://drive.google.com/file/d/1P7QoOPe-os0804VJrrwa06sb3ObPzRmJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Street Fighter Alpha - Warriors' Dreams (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Street%20Fighter%20Alpha%20-%20Warriors%27%20Dreams%20%28USA%29.png",
    size: "522 KB",
    link1: "https://drive.google.com/file/d/10ryDXIXFhNI2sOYvJml9DfT_ZmjdAUJp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Stuart Little - The Journey Home (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Stuart%20Little%20-%20The%20Journey%20Home%20%28USA%2C%20Europe%29.png",
    size: "353 KB",
    link1: "https://drive.google.com/file/d/1pcs0HkMEiCL2XqS5UwQwb660ow2egpRv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Black Bass - Real Fight (Japan) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Black%20Bass%20-%20Real%20Fight%20%28Japan%29%20%28Rumble%20Version%29.png",
    size: "1527 KB",
    link1: "https://drive.google.com/file/d/1_9WZqwdmGBUPF6sjg1kOjjUnqUwRcK6e/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Black Bass Pocket 3 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Black%20Bass%20Pocket%203%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "435 KB",
    link1: "https://drive.google.com/file/d/1FGPbIV9h2a10DbYMOUc7ypS6pGhuYMNO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Bombliss DX (Japan) (En) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Bombliss%20DX%20%28Japan%29%20%28En%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "78 KB",
    link1: "https://drive.google.com/file/d/1emlL9hhGtgCDOL8_HYHA2HjURky1llOj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Breakout! (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Breakout%21%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "25 KB",
    link1: "https://drive.google.com/file/d/14tTHLdK3gAeDfHBbEeRe_9JH8p76DhmY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Breakout! (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Breakout%21%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "21 KB",
    link1: "https://drive.google.com/file/d/13kNNXPsYq0frJagwYD48_JMeuRaQGCue/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Chinese Fighter EX (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Chinese%20Fighter%20EX%20%28Japan%29.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1aaf5P3kuku1yxB6q5hbUqP_DmReuFmNY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Doll Licca-chan - Kisekae Daisakusen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Doll%20Licca-chan%20-%20Kisekae%20Daisakusen%20%28Japan%29.png",
    size: "346 KB",
    link1: "https://drive.google.com/file/d/1gfexOXV0CzD6fC7WU7lsDkkq0QUUHWbK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Gals! Kotobuki Ran (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Gals%21%20Kotobuki%20Ran%20%28Japan%29.png",
    size: "693 KB",
    link1: "https://drive.google.com/file/d/1tD_zhqstKT9iXo7h-3vOqStT5pBZFRaK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Gals! Kotobuki Ran 2 - Miracle Getting (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Gals%21%20Kotobuki%20Ran%202%20-%20Miracle%20Getting%20%28Japan%29.png",
    size: "255 KB",
    link1: "https://drive.google.com/file/d/1fn3SXjvb2fH3SdLeARJb-9Ipr4WeifBL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Bros Deluxe [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Mario%20Bros.%20Deluxe%20%28USA%2C%20Europe%29%20%28Rev%201%29.png",
    size: "343 KB",
    link1: "https://drive.google.com/file/d/1iOElHerECOg4GurJ0ou4HhxFd0zSZ-Uv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Bros. Deluxe (Japan) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Mario%20Bros.%20Deluxe%20%28Japan%29%20%28NP%29.png",
    size: "346 KB",
    link1: "https://drive.google.com/file/d/1HnnchUmsHLRBlKtx3TEsujPW_DkkAdCd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Bros. Deluxe (Japan) (Rev 1) (NP)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Mario%20Bros.%20Deluxe%20%28Japan%29%20%28Rev%201%29%20%28NP%29.png",
    size: "346 KB",
    link1: "https://drive.google.com/file/d/1EJoXsKMpdXrWiAawCJp9zim4QIhufWMZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Bros. Deluxe (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Mario%20Bros.%20Deluxe%20%28USA%2C%20Europe%29.png",
    size: "343 KB",
    link1: "https://drive.google.com/file/d/1JL3PFru2Kz6cl-1iEho8VonNTmEtqLtb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Mario Bros. Deluxe (USA, Europe) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Mario%20Bros.%20Deluxe%20%28USA%2C%20Europe%29%20%28Rev%201%29.png",
    size: "343 KB",
    link1: "https://drive.google.com/file/d/1GZ4fg_4Mge3isX-s1ZQEHHiSXRFJsw6T/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Nenas, Las - Lucha Con Ese (Spain)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Nenas%2C%20Las%20-%20Lucha%20Con%20Ese%20%28Spain%29.png",
    size: "570 KB",
    link1: "https://drive.google.com/file/d/1q8YSNuf-ksnkKD8pXMwWMqR6pgx8jaVR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Real Fishing (Japan) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Real%20Fishing%20%28Japan%29%20%28Rumble%20Version%29.png",
    size: "208 KB",
    link1: "https://drive.google.com/file/d/1yFaG8Soa3Fm4wgAv-Jj8KACgWhF4u899/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Robot Pinball (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Robot%20Pinball%20%28Japan%29.png",
    size: "638 KB",
    link1: "https://drive.google.com/file/d/1GyMeRsrtQ1bcGcU5JL40O9h2Oft_WmdB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Super Robot Taisen - Link Battler (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Super%20Robot%20Taisen%20-%20Link%20Battler%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "438 KB",
    link1: "https://drive.google.com/file/d/193DlhE9GG3HAEnD02Tbc81aBUvRbXihg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Supercross Freestyle (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Supercross%20Freestyle%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1205 KB",
    link1: "https://drive.google.com/file/d/18YZP90FvqA1xcIaQuQx3q9WzKa4jgAm-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Survival Kids (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Survival%20Kids%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "369 KB",
    link1: "https://drive.google.com/file/d/1Gy8BG6oBRb_3tu7RHkK-0-tuZ1OtCYrb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Survival Kids 2 - Dasshutsu!! Futago-Jima! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Survival%20Kids%202%20-%20Dasshutsu%21%21%20Futago-Jima%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "420 KB",
    link1: "https://drive.google.com/file/d/15inrwkM5FWhhbiMfMmi4hBfWRQzbt6HN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Suzuki Alstare Extreme Racing (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Suzuki%20Alstare%20Extreme%20Racing%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "160 KB",
    link1: "https://drive.google.com/file/d/1mhTH4Mv10AD_o3vx2t8P5mNQicPsSttd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sweet Ange (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sweet%20Ange%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "331 KB",
    link1: "https://drive.google.com/file/d/1N6jc9Vfu4MpPxI7ZEI4jMHs5wSvPpLmB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Swiv (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/SWiV%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "240 KB",
    link1: "https://drive.google.com/file/d/1bZoTBu5s-R8FxL6UhqctxhdfmpZ5dBLB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sylvanian Families - Otogi no Kuni no Pendant (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sylvanian%20Families%20-%20Otogi%20no%20Kuni%20no%20Pendant%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "431 KB",
    link1: "https://drive.google.com/file/d/1xG37ddiBTOxUlEczd7gX00mvOEwZ6pgj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sylvanian Families 2 - Irozuku Mori no Fantasy (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sylvanian%20Families%202%20-%20Irozuku%20Mori%20no%20Fantasy%20%28Japan%29.png",
    size: "615 KB",
    link1: "https://drive.google.com/file/d/162-EOSZgT8Q0TJTgVLM0uQH6aGjBMUaC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sylvanian Families 3 - Hoshi Furu Yoru no Sunadokei (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sylvanian%20Families%203%20-%20Hoshi%20Furu%20Yoru%20no%20Sunadokei%20%28Japan%29.png",
    size: "591 KB",
    link1: "https://drive.google.com/file/d/1Vjpnj2xVHC6IO8IxmPwcel5CeTMl514O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sylvanian Melodies - Mori no Nakama to Odori Masho! (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Sylvanian%20Melodies%20-%20Mori%20no%20Nakama%20to%20Odori%20Masho%21%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "263 KB",
    link1: "https://drive.google.com/file/d/1WrbDMVE0oXuzTCnHns5PYp_UWRZlajZo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Sylvester And Tweety - Breakfast On The Run (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "217 KB",
    link1: "https://drive.google.com/file/d/1Le_UjB07fM68HJvlz7HbAdaH3iXywWMM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TNN Outdoors Fishing Champ (USA) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/TNN%20Outdoors%20Fishing%20Champ%20%28USA%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "429 KB",
    link1: "https://drive.google.com/file/d/1OinUvyj7QG0ihFu-dL8zEokBekhbElEp/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "TOCA Touring Car Championship (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/TOCA%20Touring%20Car%20Championship%20%28USA%2C%20Europe%29.png",
    size: "360 KB",
    link1: "https://drive.google.com/file/d/1OMYGlHMLflgAp7PxI_XI7or1w53z4lyf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taisen Tsume Shougi (Japan) (NP) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "347 KB",
    link1: "https://drive.google.com/file/d/1VC9eRUa_kzZtyhztbERhDvFmceNZ-uU2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taito Memorial - Bubble Bobble (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Taito%20Memorial%20-%20Bubble%20Bobble%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "209 KB",
    link1: "https://drive.google.com/file/d/1-R8pocJTApuioTsj2enjJnY24yjEYXUZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Taito Memorial - Chase H.Q. - Secret Police (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Taito%20Memorial%20-%20Chase%20H.Q.%20-%20Secret%20Police%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "102 KB",
    link1: "https://drive.google.com/file/d/1NoSVwWe609Ttjk-ShGp1yakp_Ri_dR2W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tales of Phantasia - Narikiri Dungeon (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tales%20of%20Phantasia%20-%20Narikiri%20Dungeon%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "881 KB",
    link1: "https://drive.google.com/file/d/1lfRVq7PgA0NcpdBGFXikDPv9HooEiE8s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tanimura Hitoshi Ryuu Pachinko Kouryaku Daisakusen - Don Quijote ga Iku (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tanimura%20Hitoshi%20Ryuu%20Pachinko%20Kouryaku%20Daisakusen%20-%20Don%20Quijote%20ga%20Iku%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "645 KB",
    link1: "https://drive.google.com/file/d/1siEPo0V95C66YEWI89w2_h-QIs3O2mAd/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tarzan (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tarzan%20%28Japan%29.png",
    size: "959 KB",
    link1: "https://drive.google.com/file/d/1sbNNerpX__a3NrdcaqmRCarieqpwF7SA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tarzan (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tarzan%20%28USA%2C%20Europe%29.png",
    size: "956 KB",
    link1: "https://drive.google.com/file/d/1PupIt3LlUEN2EYsUFC_pwq9YoNY3eqeG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tasmanian Devil - Munching Madness (USA) (En,Fr,De,Es,It) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tasmanian%20Devil%20-%20Munching%20Madness%20%28USA%29%20%28En%2CFr%2CDe%2CEs%2CIt%29%20%28GB%20Compatible%29.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1qj0FNViTG5_kH8COSrjFOxxblZbPoYuw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tazmanian Devil - Munching Madness (Europe) (En,fr,de,es,it)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1dhLZzrfosubqWudSY2Wuzics0j6I6z1l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tech Deck Skateboarding (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tech%20Deck%20Skateboarding%20%28USA%2C%20Europe%29.png",
    size: "234 KB",
    link1: "https://drive.google.com/file/d/1kQuZSkY82iXsmcWykgnyjRo_rmV5yed1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Test Drive 2001 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Test%20Drive%202001%20%28USA%29.png",
    size: "515 KB",
    link1: "https://drive.google.com/file/d/11D1QqdTnZFDMWXKvwSX86Urm-duHcgg2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Test Drive 6 (Europe) (En,fr,de,es,it) (Destinations Toutes Sensations)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Test%20Drive%206%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "619 KB",
    link1: "https://drive.google.com/file/d/14BM7Aee4gFAGzcqtjBdx5WGkANKsay0y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Test Drive 6 (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Test%20Drive%206%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "636 KB",
    link1: "https://drive.google.com/file/d/1UY1H_0EAc-iVd2ffd0tyP9XrT5X_EjUf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Test Drive Cycles (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Test%20Drive%20Cycles%20%28USA%29.png",
    size: "382 KB",
    link1: "https://drive.google.com/file/d/1OYjZe1hP7uYdtY81AcXK5QPuYBrQFlJ2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Test Drive Le Mans (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Test%20Drive%20Le%20Mans%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "513 KB",
    link1: "https://drive.google.com/file/d/1KmSJlySCRsAmA4AMibxpW_nezuYI3tkO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Test Drive Le Mans (Usa) (En,fr,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Test%20Drive%20Le%20Mans%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "513 KB",
    link1: "https://drive.google.com/file/d/1wcejTPqjzWQVdUeW3Rv-0oKj1hse8Cb2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Test Drive Off-Road 3 (USA) (Rumble Version) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Test%20Drive%20Off-Road%203%20%28USA%29%20%28Rumble%20Version%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "604 KB",
    link1: "https://drive.google.com/file/d/1KGtITSzjtJZ9h2k3h8caL1JbFWae_x7R/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetris Adventure - Susume Mickey to Nakama-tachi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tetris%20Adventure%20-%20Susume%20Mickey%20to%20Nakama-tachi%20%28Japan%29.png",
    size: "340 KB",
    link1: "https://drive.google.com/file/d/1BUJiQDSStrR7Qcqsj4a_JaFRUNgK3h50/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tetris Adventure - Susume Mickey to Nakama-tachi (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tetris%20Adventure%20-%20Susume%20Mickey%20to%20Nakama-tachi%20%28Japan%29%20%28Rev%201%29.png",
    size: "339 KB",
    link1: "https://drive.google.com/file/d/1gKjx8HEiYLNDlaGo-aufJ1W3SzP7I2Ci/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend Of Zelda - Link's Awakening Dx [Gbc]",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "486 KB",
    link1: "https://drive.google.com/file/d/1w8-fgAZkMPSfSBG5Fn-Gf7ykYMrXWvAl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend Of Zelda - Oracle Of Ages [Gbc]",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "990 KB",
    link1: "https://drive.google.com/file/d/14J2LTd-dLriQ2JoX7-j5sgaD7uY8XYKl/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "The Legend Of Zelda - Oracle Of Seasons [Gbc]",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "910 KB",
    link1: "https://drive.google.com/file/d/12koenTNPTfys5GfLvH507le9b7XrRVSQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Three Lions (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Three%20Lions%20%28United%20Kingdom%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CSv%29%20%28GB%20Compatible%29.png",
    size: "302 KB",
    link1: "https://drive.google.com/file/d/1DKbdtTT54K30IK6sTZTfzUj6JaXQSRAf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Thunderbirds (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Thunderbirds%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "666 KB",
    link1: "https://drive.google.com/file/d/13Y-WB7a4qZ-ZBL-GuruEHlwf-t29fdvb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiger Woods PGA Tour 2000 (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tiger%20Woods%20PGA%20Tour%202000%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "710 KB",
    link1: "https://drive.google.com/file/d/1Am3e-zcpSJmfXR9ie9F2lD4OycqId9jS/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tintin In Tibet (Europe) (En,fr,de,es,it,nl,sv)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "438 KB",
    link1: "https://drive.google.com/file/d/1oNvdkpKCb8u5rKgDduaka3tF1iiADcGa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiny Toon Adventures - Buster Saves The Day (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tiny%20Toon%20Adventures%20-%20Buster%20Saves%20the%20Day%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "197 KB",
    link1: "https://drive.google.com/file/d/19e18-AeVeetG9cRdfH1_pyv3koE5AlCn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiny Toon Adventures - Buster Saves the Day (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tiny%20Toon%20Adventures%20-%20Buster%20Saves%20the%20Day%20%28USA%29.png",
    size: "197 KB",
    link1: "https://drive.google.com/file/d/16xuAYI2Hrr35v3mAMxnhb_mK72BLUeHv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tiny Toon Adventures - Dizzy's Candy Quest (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tiny%20Toon%20Adventures%20-%20Dizzy%27s%20Candy%20Quest%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/1_fdjqrdjB6OwzKO9M2EsE9W0G4LQiez9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Titus the Fox (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Titus%20the%20Fox%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "153 KB",
    link1: "https://drive.google.com/file/d/1WmOvN7JRwRMIgQBWO3XNIyeQtSKJveyf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tloz Oracle Of Ages Gbc Palettes",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "990 KB",
    link1: "https://drive.google.com/file/d/1defLGrGKuiClquta3Jtlunc_cR5NhhkZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tloz Oracle Of Seasons Gbc Palettes",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "661 KB",
    link1: "https://drive.google.com/file/d/1sYiLuaF8UY_TfMdx2VtFzfXQ4Z170H53/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toki Tori (USA, Europe) (En,Ja,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Toki%20Tori%20%28USA%2C%20Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%29.png",
    size: "242 KB",
    link1: "https://drive.google.com/file/d/1qO51X6x8uvjrrEIXwENN37KrqcUsEU7A/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toki Tori (Usa, Europe) (En,ja,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Toki%20Tori%20%28USA%2C%20Europe%29%20%28En%2CJa%2CFr%2CDe%2CEs%29.png",
    size: "242 KB",
    link1: "https://drive.google.com/file/d/1ztLvK7SOlrf7P69h3Pf1A4RzwG55MMmw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tokimeki Memorial Pocket - Culture Hen - Komorebi no Melody (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tokimeki%20Memorial%20Pocket%20-%20Culture%20Hen%20-%20Komorebi%20no%20Melody%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "2792 KB",
    link1: "https://drive.google.com/file/d/1t0z9L79uguDrrwECGabfucSdvHORqrSD/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tokimeki Memorial Pocket - Sport Hen - Koutei no Photograph (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tokimeki%20Memorial%20Pocket%20-%20Sport%20Hen%20-%20Koutei%20no%20Photograph%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "2778 KB",
    link1: "https://drive.google.com/file/d/1cxKvdH0jiWpIWIByCE1io7U3Q0_kj-G0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tokoro-san no Setagaya C.C. (Japan) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tokoro-san%20no%20Setagaya%20C.C.%20%28Japan%29%20%28GB%20Compatible%29.png",
    size: "205 KB",
    link1: "https://drive.google.com/file/d/1gT3IetL1EZ4EfOu7GV-02M-jucOUBOku/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom And Jerry - Mousehunt (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tom%20and%20Jerry%20-%20Mousehunt%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "343 KB",
    link1: "https://drive.google.com/file/d/1rDdVk5rVrfFucJJ9eTto9EBl4X-ovxzA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom And Jerry In Mouse Attacks! (Europe) (En,fr,de,es,it,nl,da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tom%20and%20Jerry%20in%20-%20Mouse%20Attacks%21%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.png",
    size: "855 KB",
    link1: "https://drive.google.com/file/d/1s9C2zqfL2ZVqiSl6EUJVFGNt1rOxn5wP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom Clancy's Rainbow Six (USA, Europe) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tom%20Clancy%27s%20Rainbow%20Six%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%29.png",
    size: "498 KB",
    link1: "https://drive.google.com/file/d/1Qe-udmTqZAIqTUVhd6aA8nLsK4h8uCxi/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tom%20and%20Jerry%20%28USA%2C%20Europe%29.png",
    size: "180 KB",
    link1: "https://drive.google.com/file/d/1-p4RHHTFm9TWJeXheCiIxybsrpxc9rMa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry - Mouse Hunt (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tom%20and%20Jerry%20-%20Mouse%20Hunt%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "344 KB",
    link1: "https://drive.google.com/file/d/1UfBjjBAIuX6xG2Nlw6FhGQp5FpxrK5tM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry in - Mouse Attacks! (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tom%20and%20Jerry%20in%20-%20Mouse%20Attacks%21%20%28USA%29.png",
    size: "855 KB",
    link1: "https://drive.google.com/file/d/1ZEE7enfFSxECBLFXye3oO9MIH-07hUcq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tom and Jerry in - Mouse Attacks! (USA) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tom%20and%20Jerry%20in%20-%20Mouse%20Attacks%21%20%28USA%29%20%28Rev%201%29.png",
    size: "837 KB",
    link1: "https://drive.google.com/file/d/1htma4BoYj5fZd-gVMCHueU9FdtXMrGog/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tomb Raider (USA, Europe) (En,Fr,De,Es,It)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tomb%20Raider%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1598 KB",
    link1: "https://drive.google.com/file/d/1DwdvIk9Zr25fN4BqmBeAsQ8b7MqAINj0/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tomb Raider (Usa, Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tomb%20Raider%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "1598 KB",
    link1: "https://drive.google.com/file/d/1Z0j_dqg_hXyaTXgmcI_uOFzrasLgjorR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tomb Raider - Curse of the Sword (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tomb%20Raider%20-%20Curse%20of%20the%20Sword%20%28USA%2C%20Europe%29.png",
    size: "1633 KB",
    link1: "https://drive.google.com/file/d/1JCoeL0iHpCfD4_A45P8m28GPRknBTpHP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonic Trouble (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tonic%20Trouble%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/1j7avln60iKOMcecFaZakgFdlzLMzbujQ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonka Construction Site (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tonka%20Construction%20Site%20%28USA%29.png",
    size: "564 KB",
    link1: "https://drive.google.com/file/d/16Bov1foHWDifZ4izeT-_k0yS4-8mNilk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonka Raceway (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tonka%20Raceway%20%28USA%29.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1BOphauJU62PseuAlXesWYPaFQAIYrvGT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tonka Raceway (USA) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tonka%20Raceway%20%28USA%29%20%28Rumble%20Version%29.png",
    size: "123 KB",
    link1: "https://drive.google.com/file/d/1oDg717MjWvhBtbBWO-xou35-yOTJm29I/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tony Hawk's Pro Skater (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tony%20Hawk%27s%20Pro%20Skater%20%28USA%2C%20Europe%29.png",
    size: "203 KB",
    link1: "https://drive.google.com/file/d/1eivm0wPDl6s9OuBj-AWFXr-eTd6saAmG/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tony Hawk's Pro Skater 2 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tony%20Hawk%27s%20Pro%20Skater%202%20%28USA%2C%20Europe%29.png",
    size: "723 KB",
    link1: "https://drive.google.com/file/d/1sQkwvVcZ6mqP-5hYk9-yo-klp7QbYRMe/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tony Hawk's Pro Skater 3 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tony%20Hawk%27s%20Pro%20Skater%203%20%28USA%2C%20Europe%29.png",
    size: "521 KB",
    link1: "https://drive.google.com/file/d/1R2x_haW_Vx-WijZeIe4oPUhZXVLXirYf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toobin' (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Toobin%27%20%28USA%29.png",
    size: "251 KB",
    link1: "https://drive.google.com/file/d/1WRMdSjWDt0Xe0VVTK8CgcYuyft5MNz6g/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toonsylvania (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Toonsylvania%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "525 KB",
    link1: "https://drive.google.com/file/d/1IgvXzzp0x-M_g_9ab_bNSNlIjZwxFDBK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toonsylvania (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Toonsylvania%20%28USA%29.png",
    size: "525 KB",
    link1: "https://drive.google.com/file/d/1cpxrqLOwWt6x4Qb8_zbKVY12dOVijChH/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tootuff (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tootuff%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "398 KB",
    link1: "https://drive.google.com/file/d/1x1jH7hTQcf2aBzr1QC0UvvrB4SGhOdX9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear Pocket (Japan) (En) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Top%20Gear%20Pocket%20%28Japan%29%20%28En%29%20%28Rumble%20Version%29.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/16ckYVMoUX501qoQKZ7D4BE9_fivd_2KN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear Pocket (USA) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Top%20Gear%20Pocket%20%28USA%29%20%28Rumble%20Version%29.png",
    size: "125 KB",
    link1: "https://drive.google.com/file/d/1jWf9setOmhON1QSFTKrrR-7U6Nr0jnAz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear Pocket 2 (Japan) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Top%20Gear%20Pocket%202%20%28Japan%29%20%28Rumble%20Version%29.png",
    size: "251 KB",
    link1: "https://drive.google.com/file/d/1UC2CzpPswvtVamtIUrA9pFmrGtXgU9jf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gear Pocket 2 (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Top%20Gear%20Pocket%202%20%28USA%29.png",
    size: "251 KB",
    link1: "https://drive.google.com/file/d/1CdFOhzTRgGid3-kCHMtkEoOFwPvMbbid/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gun - Fire Storm (USA, Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Top%20Gun%20-%20Fire%20Storm%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "417 KB",
    link1: "https://drive.google.com/file/d/1LBLMkaN_dzqGcYEZDMXNL7TSOTfoLfsN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Top Gun - Fire Storm (Usa, Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Top%20Gun%20-%20Fire%20Storm%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "417 KB",
    link1: "https://drive.google.com/file/d/1rB_QKpjZomAD_FReFRvEalMSyoYQi0E5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Total Soccer 2000 (Europe) (En,fr,de,es,it,nl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "95 KB",
    link1: "https://drive.google.com/file/d/18heBtzudHSsbsoVwLRAsUtU7b37jbYzq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Totsugeki! Papparatai (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Totsugeki%21%20Papparatai%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "812 KB",
    link1: "https://drive.google.com/file/d/12kLRLdg1UVnmaZt3ULI9g-DWd9QdMAHw/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tottoko Hamutarou - Tomodachi Daisakusen Dechu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tottoko%20Hamutarou%20-%20Tomodachi%20Daisakusen%20Dechu%20%28Japan%29.png",
    size: "445 KB",
    link1: "https://drive.google.com/file/d/10Bf4cbGTXCUXKmrGtyAf6PgPSVG1qSIE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tottoko Hamutarou 2 - Hamu-chan Zu Daishuugou Dechu (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tottoko%20Hamutarou%202%20-%20Hamu-chan%20Zu%20Daishuugou%20Dechu%20%28Japan%29.png",
    size: "936 KB",
    link1: "https://drive.google.com/file/d/1eBXzm_vHeS07K7O8Qi63eVJjHMkPAlGn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Towers - Lord Baniff's Deceit (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Towers%20-%20Lord%20Baniff%27s%20Deceit%20%28USA%2C%20Europe%29.png",
    size: "383 KB",
    link1: "https://drive.google.com/file/d/1UD9zHBrzaophfN9UUaVDWhPO-aNOLgWz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toy Story 2 (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Toy%20Story%202%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "343 KB",
    link1: "https://drive.google.com/file/d/1RIOtYtWfUAZuYXxLijumMUUolQiYl8Z2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Toy Story Racer (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Toy%20Story%20Racer%20%28USA%2C%20Europe%29.png",
    size: "961 KB",
    link1: "https://drive.google.com/file/d/1I9RakNwNDRp98_-_YWoy8EebtCuINF3G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trade & Battle Card Hero (Japan) (Rev 1) (3DS Virtual Console) (SGB Enhanced) (GB Compatible)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "939 KB",
    link1: "https://drive.google.com/file/d/1d-kYsG6C_DS3kanAPqKusmhJnVfZxXsm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trick Boarder (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Trick%20Boarder%20%28USA%29.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/12wCziiYNFIyZTFWHZnywDFGgRuymXD2m/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trickboarder GP (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Trickboarder%20GP%20%28Japan%29.png",
    size: "269 KB",
    link1: "https://drive.google.com/file/d/1MasxJuTSKBbnqk4NdTp7RVDsCP76f6KA/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Triple Play 2001 (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Triple%20Play%202001%20%28USA%2C%20Europe%29.png",
    size: "222 KB",
    link1: "https://drive.google.com/file/d/1AkNpjv89zl23i31s43OAdFNQjhuqMgdY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Trouballs (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Trouballs%20%28USA%29.png",
    size: "111 KB",
    link1: "https://drive.google.com/file/d/1rKzrD26MzojqcsdnHbfXLEQERXcPETn5/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tsuri Sensei 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tsuri%20Sensei%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "609 KB",
    link1: "https://drive.google.com/file/d/1kELicOSA9dziGkCJcmAYFufZVgQUhL2M/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tsuriiko!! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tsuriiko%21%21%20%28Japan%29.png",
    size: "702 KB",
    link1: "https://drive.google.com/file/d/1NU6yQtJ83soKp4dSuAIv5rsT4Vnp-R7l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok - Rage Wars (USA, Europe) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Turok%20-%20Rage%20Wars%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/1avoZRmrObbWldHHefvIns20OkJMPgsxz/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok - Rage Wars (Usa, Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Turok%20-%20Rage%20Wars%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "279 KB",
    link1: "https://drive.google.com/file/d/1078qACC4XuF0MITlwPy-Ogqhy_AcsUTT/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok 2 - Seeds Of Evil (Usa, Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Turok%202%20-%20Seeds%20of%20Evil%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%29%20%28GB%20Compatible%29.png",
    size: "189 KB",
    link1: "https://drive.google.com/file/d/1XxcKruQfxGbcTPe1GVE9TWz_eJtEXWMZ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok 2 - Seeds of Evil (USA, Europe) (En,Fr,De,Es) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Turok%202%20-%20Seeds%20of%20Evil%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%29%20%28GB%20Compatible%29.png",
    size: "189 KB",
    link1: "https://drive.google.com/file/d/1snchJnozqzIxaf3wWCGl3-UbCY6-FoEU/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok 3 - Shadow Of Oblivion (Usa, Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Turok%203%20-%20Shadow%20of%20Oblivion%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "285 KB",
    link1: "https://drive.google.com/file/d/1R_KFOngI5MCnbhpV1mf2t2Dyly0o_aYs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Turok 3 - Shadow of Oblivion (USA, Europe) (En,Fr,De,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Turok%203%20-%20Shadow%20of%20Oblivion%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "285 KB",
    link1: "https://drive.google.com/file/d/1GXPsG85p1O2UUHFdcCTq4smJNT7hoJlq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tweenies - Doodles' Bones (Europe) (En,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tweenies%20-%20Doodles%27%20Bones%20%28Europe%29%20%28En%2CDe%2CEs%2CIt%29.png",
    size: "334 KB",
    link1: "https://drive.google.com/file/d/1bA72CxODH_5TjCJeVhfirGMVgsHSuYGV/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tweety's High-Flying Adventure (Europe) (En,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tweety%27s%20High-Flying%20Adventure%20%28Europe%29%20%28En%2CEs%2CIt%29.png",
    size: "459 KB",
    link1: "https://drive.google.com/file/d/1YKFQJjwO8O_yYjX8Y0E7HYV1y2VL6v0a/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Tweety's High-Flying Adventure (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Tweety%27s%20High-Flying%20Adventure%20%28USA%29.png",
    size: "436 KB",
    link1: "https://drive.google.com/file/d/1tC0M-NB7cfk4khSUPklvaA5QPPYP1_BN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uchuujin Tanaka Tarou de - RPG Tsukuru GB 2 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Uchuujin%20Tanaka%20Tarou%20de%20-%20RPG%20Tsukuru%20GB%202%20%28Japan%29.png",
    size: "941 KB",
    link1: "https://drive.google.com/file/d/1wmf0UATuo2ECibqhXVmQW8fqpIJkDOw7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uefa 2000 (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/UEFA%202000%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "413 KB",
    link1: "https://drive.google.com/file/d/1yqDQIBg99nFVzZ1SZz443sCyGMgVU5mR/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultimate Fighting Championship (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ultimate%20Fighting%20Championship%20%28USA%29.png",
    size: "323 KB",
    link1: "https://drive.google.com/file/d/1qyiLA8jDencnsrRCfQzw30AJ7V8mJW_9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultimate Paintball (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ultimate%20Paintball%20%28USA%2C%20Europe%29.png",
    size: "122 KB",
    link1: "https://drive.google.com/file/d/1qsBFNXsur9apd7fkq5v0QlhIriVaow-k/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Ultimate Surfing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Ultimate%20Surfing%20%28USA%29.png",
    size: "175 KB",
    link1: "https://drive.google.com/file/d/16i30RjRvaKl0cYeMLVqedwztZ3H0OM1P/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uno (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Uno%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "246 KB",
    link1: "https://drive.google.com/file/d/1DomjwMEdfrQoKmiSPs4-K3L7ggFSvOHo/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Uno (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Uno%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "242 KB",
    link1: "https://drive.google.com/file/d/1mpb9R_oelgTIau_-NDV6shM1cALGGW_G/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "V-Rally - Championship Edition (Europe) (En,fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/V-Rally%20-%20Championship%20Edition%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%29.png",
    size: "179 KB",
    link1: "https://drive.google.com/file/d/1ykh_XhEuq4qwLX2UWFiby1F38quwjR4s/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "V-Rally - Championship Edition (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/V-Rally%20-%20Championship%20Edition%20%28Japan%29.png",
    size: "182 KB",
    link1: "https://drive.google.com/file/d/1zxaIZKW4wWh7-wJomZ7OjzfG6GjzgJYI/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "V-Rally - Edition 99 (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/V-Rally%20-%20Edition%2099%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "179 KB",
    link1: "https://drive.google.com/file/d/1gsGnYLGEvw7wn-xXN46QagmhqISTqLSP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "VIP (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/VIP%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/1UWekEDWj8f-5A6b5Ure7rs7ABvGclZbE/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vegas Games (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Vegas%20Games%20%28USA%29.png",
    size: "159 KB",
    link1: "https://drive.google.com/file/d/1aQzPIwci7AXzYnRuccHoOTrpncRhZTnN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vigilante 8 (USA) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Vigilante%208%20%28USA%29%20%28Rumble%20Version%29.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/10drCV7e71AkAqPx9Ko9gkg82cz8vEoIY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Vip (Usa, Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/VIP%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "391 KB",
    link1: "https://drive.google.com/file/d/1YbyvIYnavRHIfN30iihKBvf86yxRMQVf/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WCW Mayhem (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/WCW%20Mayhem%20%28USA%2C%20Europe%29.png",
    size: "340 KB",
    link1: "https://drive.google.com/file/d/1WyBcAKZ1Pufz6ZlJYvvTx1mEq83qMH1Y/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WDL - World Destruction League - Thunder Tanks (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/WDL%20-%20World%20Destruction%20League%20-%20Thunder%20Tanks%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "445 KB",
    link1: "https://drive.google.com/file/d/1ifaIm-XLjc5GyUefC41NUvSXXFBoeZPq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Attitude (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/WWF%20Attitude%20%28USA%2C%20Europe%29.png",
    size: "385 KB",
    link1: "https://drive.google.com/file/d/1h7m5040GOBEF8DsNRiw4kpxjHvcfT94B/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF Betrayal (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/WWF%20Betrayal%20%28USA%2C%20Europe%29.png",
    size: "313 KB",
    link1: "https://drive.google.com/file/d/1sH8D4h-n_m4cVeAurjDpH4WHfez0YDen/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF WrestleMania 2000 (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/WWF%20WrestleMania%202000%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "311 KB",
    link1: "https://drive.google.com/file/d/1sWMcBUgXEXsN7ZM_RavALW33nPDHPqmn/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "WWF WrestleMania 2000 (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/WWF%20WrestleMania%202000%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "311 KB",
    link1: "https://drive.google.com/file/d/1KqOE5sZ732YQZH9KltL8VAULVxpIRyH3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wacky Races (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wacky%20Races%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "486 KB",
    link1: "https://drive.google.com/file/d/1335z9lcQVStYimCm_Wh4PTbqB4yiR-dq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wacky Races (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wacky%20Races%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "486 KB",
    link1: "https://drive.google.com/file/d/1RsM1tu3-zLxYOdER0HFNBgW7-dDKCrI8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Walt Disney World Quest - Magical Racing Tour (Europe) (Fr,de,es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Walt%20Disney%20World%20Quest%20-%20Magical%20Racing%20Tour%20%28Europe%29%20%28Fr%2CDe%2CEs%29.png",
    size: "463 KB",
    link1: "https://drive.google.com/file/d/1tJuzVLCVHpfKMzuNT88VHimMFpduHtfc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Walt Disney World Quest - Magical Racing Tour (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Walt%20Disney%20World%20Quest%20-%20Magical%20Racing%20Tour%20%28USA%2C%20Europe%29.png",
    size: "397 KB",
    link1: "https://drive.google.com/file/d/1tMN7j9Oa8obIZ8wQwSutwle7CCaX3alk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warau Inu no Bouken - Silly Go Lucky! (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Warau%20Inu%20no%20Bouken%20-%20Silly%20Go%20Lucky%21%20%28Japan%29.png",
    size: "364 KB",
    link1: "https://drive.google.com/file/d/1aRn0LPJpdu3FfWOekQN_X_grJaVjFcXt/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wario Land 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wario%20Land%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "521 KB",
    link1: "https://drive.google.com/file/d/17fe9C6Bpzi0RlozQcLcZra5lvOawFXhO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wario Land 3 [Gbc]",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wario%20Land%203%20%28World%29%20%28En%2CJa%29.png",
    size: "624 KB",
    link1: "https://drive.google.com/file/d/169vFfEqgmQqG2XNyE__XkptCZjFEapdv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wario Land II (USA, Europe) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wario%20Land%20II%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "517 KB",
    link1: "https://drive.google.com/file/d/1Ujnm71X7dMKQ7Yll0Q4pDmi_A51Fwq6l/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warlocked (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Warlocked%20%28USA%29.png",
    size: "420 KB",
    link1: "https://drive.google.com/file/d/1p_b3RDKAl-NDqGgs1gp5ZHaPADXFYXWs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Warriors of Might and Magic (USA) (En,Fr,De)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Warriors%20of%20Might%20and%20Magic%20%28USA%29%20%28En%2CFr%2CDe%29.png",
    size: "447 KB",
    link1: "https://drive.google.com/file/d/1gxG4jWdoivWFOa6oqzJPT8hYgVFBgNLK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Watashi no Kitchen (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Watashi%20no%20Kitchen%20%28Japan%29.png",
    size: "199 KB",
    link1: "https://drive.google.com/file/d/18qV7sth32B2DBir0Eh-mv4P08wkhOoTM/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Watashi no Kitchen (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Watashi%20no%20Kitchen%20%28Japan%29%20%28Rev%201%29.png",
    size: "249 KB",
    link1: "https://drive.google.com/file/d/1EX_AEGFioGaZ-kGnh09yai_m25xxApz8/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Watashi no Restaurant (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Watashi%20no%20Restaurant%20%28Japan%29.png",
    size: "254 KB",
    link1: "https://drive.google.com/file/d/1ImQ6oT0xaLw49jQOB3JHnujRe_xMf9tL/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wendy - Every Witch Way (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wendy%20-%20Every%20Witch%20Way%20%28USA%2C%20Europe%29.png",
    size: "240 KB",
    link1: "https://drive.google.com/file/d/1A2DvjqA4WsvLlbDKfSRsBNQIP1X_Ce0Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wendy - Every Witch Way (Usa, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wendy%20-%20Every%20Witch%20Way%20%28USA%2C%20Europe%29.png",
    size: "240 KB",
    link1: "https://drive.google.com/file/d/1nYFSaxsX-NXpKbAUuhuEzOt-q8Xj8Q31/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wetrix GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wetrix%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "77 KB",
    link1: "https://drive.google.com/file/d/16nL8Z_wzW9IBzGr18FhugYARpxpX0qR3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Who Wants to Be a Millionaire - 2nd Edition (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Who%20Wants%20to%20Be%20a%20Millionaire%20-%202nd%20Edition%20%28USA%29.png",
    size: "440 KB",
    link1: "https://drive.google.com/file/d/1fGDjTf90GC4_uLU2oU4D34lj1RsFSXSr/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wild Thornberrys, The - Rambler (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wild%20Thornberrys%2C%20The%20-%20Rambler%20%28USA%29.png",
    size: "436 KB",
    link1: "https://drive.google.com/file/d/1ynvJtPifVeBEQTOwxO-M_4sSolV7gMVB/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wings of Fury (USA) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wings%20of%20Fury%20%28USA%29%20%28GB%20Compatible%29.png",
    size: "88 KB",
    link1: "https://drive.google.com/file/d/1EFiWrmCkb08U5r3aOGWkURgIJfUPIG_r/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winnie The Pooh - Adventures In The 100 Acre Wood (Europe) (En,fr,de,es,it,nl,da)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Winnie%20the%20Pooh%20-%20Adventures%20in%20the%20100%20Acre%20Wood%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%2CDa%29.png",
    size: "631 KB",
    link1: "https://drive.google.com/file/d/1wESqWJrjiD8nK3gApJqv9F3Ztof6c6Xk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Winnie the Pooh - Adventures in the 100 Acre Wood (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Winnie%20the%20Pooh%20-%20Adventures%20in%20the%20100%20Acre%20Wood%20%28USA%29.png",
    size: "487 KB",
    link1: "https://drive.google.com/file/d/1rOBDJ3_C90pwUByDg4-N4RsQ77PP4x1f/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizardry Empire (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wizardry%20Empire%20%28Japan%29.png",
    size: "368 KB",
    link1: "https://drive.google.com/file/d/1kpuAD7_ZxDpa9IHShyJG8K5XjI-7asFg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizardry Empire (Japan) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wizardry%20Empire%20%28Japan%29%20%28Rev%201%29.png",
    size: "368 KB",
    link1: "https://drive.google.com/file/d/1pax-i5q37_HW1gF-7s2ik3RMaxJlm3d3/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizardry Empire - Fukkatsu no Tsue (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wizardry%20Empire%20-%20Fukkatsu%20no%20Tsue%20%28Japan%29.png",
    size: "398 KB",
    link1: "https://drive.google.com/file/d/1L_sBGRBURERX-ZsL1CXv_jI4Ipa2Hwbg/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizardry I - Proving Grounds of the Mad Overlord (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wizardry%20I%20-%20Proving%20Grounds%20of%20the%20Mad%20Overlord%20%28Japan%29.png",
    size: "284 KB",
    link1: "https://drive.google.com/file/d/1feqBK_spluEb3q-UAJknK78K6oZJt55W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizardry II - Llylgamyn no Isan (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wizardry%20II%20-%20Llylgamyn%20no%20Isan%20%28Japan%29.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1VwmN8IRJASeP9LJG3qoSprLlqnayBvI2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Wizardry III - Diamond no Kishi (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Wizardry%20III%20-%20Diamond%20no%20Kishi%20%28Japan%29.png",
    size: "330 KB",
    link1: "https://drive.google.com/file/d/1ZAjGIWc6kb0kPN4LJvJK6e9Wghy-xVvj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Woody Woodpecker (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Woody%20Woodpecker%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "378 KB",
    link1: "https://drive.google.com/file/d/1q3iyxUZHP8gps0J_AvcYXkOfxi0sPIyF/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Woody Woodpecker (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Woody%20Woodpecker%20%28USA%29.png",
    size: "379 KB",
    link1: "https://drive.google.com/file/d/1XtCuaGCSJGoxl4gloD2mQXag3QeMz7hk/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Woody Woodpecker Racing (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Woody%20Woodpecker%20Racing%20%28USA%29.png",
    size: "335 KB",
    link1: "https://drive.google.com/file/d/15Mv9j44Ub4L2-NIRN6kf1BzKTUVl6p7O/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Soccer GB 2 (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/World%20Soccer%20GB%202%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "241 KB",
    link1: "https://drive.google.com/file/d/1UsmwZAX9_rea1Xk8WmBwKiplINU_JULC/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "World Soccer GB 2000 (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/World%20Soccer%20GB%202000%20%28Japan%29.png",
    size: "399 KB",
    link1: "https://drive.google.com/file/d/1oxF2ntknGaG44d4hWVTSx2b-Zk4X8w_C/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Worms Armageddon (Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Worms%20Armageddon%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "345 KB",
    link1: "https://drive.google.com/file/d/1UdKKbBcaII2B-ihHRmskBxlPquaU-dfc/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Worms Armageddon (USA) (En,Fr,Es)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Worms%20Armageddon%20%28USA%29%20%28En%2CFr%2CEs%29.png",
    size: "345 KB",
    link1: "https://drive.google.com/file/d/1gkcqKbl1Dz_SajzD6X4tMDBNcooplhUN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Mutant Academy (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/X-Men%20-%20Mutant%20Academy%20%28Japan%29.png",
    size: "585 KB",
    link1: "https://drive.google.com/file/d/1H-Z_rNDRf7mkW9INEgDyVAnzhqF_9_kJ/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Mutant Academy (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/X-Men%20-%20Mutant%20Academy%20%28USA%2C%20Europe%29.png",
    size: "588 KB",
    link1: "https://drive.google.com/file/d/12vLLtOz0DrUY09Bp_4HMApXIyaMedS-Z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Mutant Academy (USA, Europe) (Rev 1)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/X-Men%20-%20Mutant%20Academy%20%28USA%2C%20Europe%29%20%28Rev%201%29.png",
    size: "589 KB",
    link1: "https://drive.google.com/file/d/1HxEVR-CGDNnjkS7onF1lJ0nEcc_rRsIY/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Mutant Wars (USA, Europe)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/X-Men%20-%20Mutant%20Wars%20%28USA%2C%20Europe%29.png",
    size: "258 KB",
    link1: "https://drive.google.com/file/d/10R_LeVpsnOmqIzWNagk99C085DQ6rwoa/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "X-Men - Wolverine's Rage (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/X-Men%20-%20Wolverine%27s%20Rage%20%28USA%29.png",
    size: "426 KB",
    link1: "https://drive.google.com/file/d/18qUntW8VPhgPKptr9UcGAbgoVDNF0WT9/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xena - Warrior Princess (USA, Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Xena%20-%20Warrior%20Princess%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "558 KB",
    link1: "https://drive.google.com/file/d/1bjjQqbzJsU-Vy12rbcY3PrcKU84zdLWy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xena - Warrior Princess (USA, Europe) (En,Fr,De,Es,It,Nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Xena%20-%20Warrior%20Princess%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "558 KB",
    link1: "https://drive.google.com/file/d/1081YRUwF3M4lUj6zgCsVF5_nnci_3yJy/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xena - Warrior Princess (Usa, Europe) (En,fr,de,es,it,nl)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Xena%20-%20Warrior%20Princess%20%28USA%2C%20Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%2CNl%29.png",
    size: "558 KB",
    link1: "https://drive.google.com/file/d/1Mp9BwD6apQJWNWS31GHNDunIXf8oLbUq/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xtreme Sports (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Xtreme%20Sports%20%28USA%29.png",
    size: "698 KB",
    link1: "https://drive.google.com/file/d/1WcnBfh2v9lEAZKCAtLr7WP1-2TfmvYdj/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xtreme Sports (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Xtreme%20Sports%20%28USA%29.png",
    size: "698 KB",
    link1: "https://drive.google.com/file/d/1de9cU9RNZfyaPBnK59Fl5YNkHG-WxQzO/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Xtreme Wheels (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Xtreme%20Wheels%20%28USA%29.png",
    size: "241 KB",
    link1: "https://drive.google.com/file/d/1U-G3C0HOGchBPjMoK1JI7LU0icPrtvM7/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yakouchuu GB (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Yakouchuu%20GB%20%28Japan%29.png",
    size: "1037 KB",
    link1: "https://drive.google.com/file/d/131fYrq5lDxXnB01yt-LjviQQ5_lGPHTN/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yars' Revenge (USA, Europe) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Yars%27%20Revenge%20%28USA%2C%20Europe%29%20%28GB%20Compatible%29.png",
    size: "351 KB",
    link1: "https://drive.google.com/file/d/1iSG9JIdlOpPRr7fohcbfPq2CvMyf7M2b/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yogi Bear - Great Balloon Blast (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Yogi%20Bear%20-%20Great%20Balloon%20Blast%20%28USA%29.png",
    size: "149 KB",
    link1: "https://drive.google.com/file/d/1GG2ZfxriUukKfCRI_BJJ8abX8wKiArh-/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! - Dark Duel Stories (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Yu-Gi-Oh%21%20-%20Dark%20Duel%20Stories%20%28USA%29.png",
    size: "1629 KB",
    link1: "https://drive.google.com/file/d/1c7V1nawCSqBk5Vf2A4YlHkI4eAk7D5Te/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! - Duelo En Las Tinieblas (Spain)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Yu-Gi-Oh%21%20-%20Duelo%20en%20las%20Tinieblas%20%28Spain%29.png",
    size: "1628 KB",
    link1: "https://drive.google.com/file/d/1mwKija3YcyGFOxgGy67drRPDq9mKv84z/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! - Monster Capsule GB (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Yu-Gi-Oh%21%20-%20Monster%20Capsule%20GB%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "437 KB",
    link1: "https://drive.google.com/file/d/1ocZMU3FAX-0qu01ZeFZzJKDUOGQpm6Cb/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! Duel Monsters 4 - Battle of Great Duelist - Kaiba Deck (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Yu-Gi-Oh%21%20Duel%20Monsters%204%20-%20Battle%20of%20Great%20Duelist%20-%20Kaiba%20Deck%20%28Japan%29.png",
    size: "1653 KB",
    link1: "https://drive.google.com/file/d/1Bez06TwGeUezLPhKsGK2NWbaUQxwAfRK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! Duel Monsters 4 - Battle of Great Duelist - Yuugi Deck (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Yu-Gi-Oh%21%20Duel%20Monsters%204%20-%20Battle%20of%20Great%20Duelist%20-%20Yuugi%20Deck%20%28Japan%29.png",
    size: "1653 KB",
    link1: "https://drive.google.com/file/d/1AW-OzLOWoEJC8wBYcx7Tj_lMtmGS_9i2/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Yu-Gi-Oh! Duel Monsters III - Tri Holy God Advant (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Yu-Gi-Oh%21%20Duel%20Monsters%20III%20-%20Tri%20Holy%20God%20Advant%20%28Japan%29.png",
    size: "1633 KB",
    link1: "https://drive.google.com/file/d/1cyaKvnby6qjX0Cd4oeRtlA1fOaIjHmO1/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zebco Fishing! (USA) (Rumble Version)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zebco%20Fishing%21%20%28USA%29%20%28Rumble%20Version%29.png",
    size: "184 KB",
    link1: "https://drive.google.com/file/d/1UFX3YrOdoJoCvwnY4fsT83Zfzmp1YzEP/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda no Densetsu - Fushigi no Kinomi - Daichi no Shou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zelda%20no%20Densetsu%20-%20Fushigi%20no%20Kinomi%20-%20Daichi%20no%20Shou%20%28Japan%29.png",
    size: "658 KB",
    link1: "https://drive.google.com/file/d/1lDOafz6P1yEsa1lGqsaTgijIdRsFoRll/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda no Densetsu - Fushigi no Kinomi - Jikuu no Shou (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zelda%20no%20Densetsu%20-%20Fushigi%20no%20Kinomi%20-%20Jikuu%20no%20Shou%20%28Japan%29.png",
    size: "683 KB",
    link1: "https://drive.google.com/file/d/1gb1kIGQGjPYceDz5uKS7Skz1WgyZlj3E/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda no Densetsu - Yume o Miru Shima DX (Japan) (Rev 1) (Demo) (Special Version 1) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zelda%20no%20Densetsu%20-%20Yume%20o%20Miru%20Shima%20DX%20%28Japan%29%20%28Beta%29%20%281998-06-30%29%20%28GB%20Compatible%29.png",
    size: "382 KB",
    link1: "https://drive.google.com/file/d/1eNuuiAZj6o5ADCwsz_sYDe7z6ydyeOse/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda no Densetsu - Yume o Miru Shima DX (Japan) (Rev 1) (Demo) (Special Version 2) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zelda%20no%20Densetsu%20-%20Yume%20o%20Miru%20Shima%20DX%20%28Japan%29%20%28Beta%29%20%281998-06-30%29%20%28GB%20Compatible%29.png",
    size: "382 KB",
    link1: "https://drive.google.com/file/d/1wDH6VMMk0OoL4zBqmD7FOw1d1bc9uvEX/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda no Densetsu - Yume o Miru Shima DX (Japan) (Rev 2) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zelda%20no%20Densetsu%20-%20Yume%20o%20Miru%20Shima%20DX%20%28Japan%29%20%28Rev%202%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "483 KB",
    link1: "https://drive.google.com/file/d/1Gd4r-S5K6gKHw8nOA0uWHhinhwKdxf0W/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zelda no Densetsu - Yume o Miru Shima DX (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zelda%20no%20Densetsu%20-%20Yume%20o%20Miru%20Shima%20DX%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "483 KB",
    link1: "https://drive.google.com/file/d/1_kYG-1oJSUZ8dRELAkszEDU8ocNIR6by/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zidane Football Generation (Europe) (En,fr,de,es,it)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zidane%20-%20Football%20Generation%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png",
    size: "221 KB",
    link1: "https://drive.google.com/file/d/1LtFOU6qAU-DmPHQYwosoyn-Zon22MfOs/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zoboomafoo - Playtime in Zobooland (USA)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zoboomafoo%20-%20Playtime%20in%20Zobooland%20%28USA%29.png",
    size: "330 KB",
    link1: "https://drive.google.com/file/d/14KY7KnBDMmuTbEngRlCoHIY-uwlqw3Lx/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zoids - Jashin Fukkatsu! Genobreaker Hen (Japan) (Rev 1) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zoids%20-%20Jashin%20Fukkatsu%21%20Genobreaker%20Hen%20%28Japan%29%20%28Rev%201%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "536 KB",
    link1: "https://drive.google.com/file/d/1CbKCpit63gLEwve37SVdCRAr4e-hoJZm/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zoids - Jashin Fukkatsu! Genobreaker Hen (Japan) (SGB Enhanced) (GB Compatible)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zoids%20-%20Jashin%20Fukkatsu%21%20Genobreaker%20Hen%20%28Japan%29%20%28SGB%20Enhanced%29%20%28GB%20Compatible%29.png",
    size: "536 KB",
    link1: "https://drive.google.com/file/d/1T7EzdgAG_s3pUQgHXh4xItTijp8ChoT6/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zoids - Shirogane no Juukishin Liger Zero (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zoids%20-%20Shirogane%20no%20Juukishin%20Liger%20Zero%20%28Japan%29.png",
    size: "531 KB",
    link1: "https://drive.google.com/file/d/1OiwMOwRfsy0uMyF0btDL3WuAWdkXjAgv/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zok Zok Heroes (Japan)",
    image: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Zok%20Zok%20Heroes%20%28Japan%29.png",
    size: "697 KB",
    link1: "https://drive.google.com/file/d/1-lh19iK2aF4iVbjvDTlj8t_ZWR1xMhKK/view?usp=drivesdk",
    link2: ""
  },
  {
    name: "Zook Z (USA) (Unl)",
    image: "https://i.postimg.cc/HLgJzWzm/game-boy-color-logo-png-seeklogo-520855.png",
    size: "336 KB",
    link1: "https://drive.google.com/file/d/1SBvDuhb16QMZN6y9C7YPhrioEOH39x2Q/view?usp=drivesdk",
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
