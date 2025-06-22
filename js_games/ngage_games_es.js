const roms = [
    {
      name: "Alien Front",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "5785 KB",
      link1: "https://drive.google.com/file/d/1p6DBlTQObCyj9NqWFno7z2ePe8ROuwWE/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Ashen",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "13403 KB",
      link1: "https://drive.google.com/file/d/16KdcWIBph0ZBS6POvBq4PMUP4qBzX9Zm/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Asphalt Urban GT",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "7394 KB",
      link1: "https://drive.google.com/file/d/1kskQj1uzX-PTE3O0paYEAZUJv6jjdSyN/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Asphalt Urban GT 2",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "19969 KB",
      link1: "https://drive.google.com/file/d/12nz29TOMVT5HUw1E_sWvEtnrjaDwHYK9/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Atari Masterpieces Vol. 2",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "22257 KB",
      link1: "https://drive.google.com/file/d/11uCycv95WSAL3JcrvnW6YbeCyfIxdPLO/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Bomberman",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "10005 KB",
      link1: "https://drive.google.com/file/d/1OS_q7wrlKa1NfJANS9zmMAJYKOGvCaRz/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Call Of Duty",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "21678 KB",
      link1: "https://drive.google.com/file/d/19MBFv2lqxJTs1croAhkl-411WI7Ciwml/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Colin McRae Rally 2005",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "29955 KB",
      link1: "https://drive.google.com/file/d/1_H6a4DwNwGKRXivv5uuhCJiU7HxmJ6j-/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Crash Nitro Kart",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "5793 KB",
      link1: "https://drive.google.com/file/d/1rPdizhnhWjSg7AKoEocaufzViqxda8O9/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Exclusive (Asia) - Hinter Wars",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "10482 KB",
      link1: "https://drive.google.com/file/d/1i5AFYvrLAsgMFqrK8u7LtuJ0wtZkYkGg/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Exclusive (China) - Sango",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "11182 KB",
      link1: "https://drive.google.com/file/d/1kNy98sbaBupBUqVd7I_PVO_yMR_CvbcR/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Exclusive (Spanish) -  Barakel - The Fallen Angel",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "6456 KB",
      link1: "https://drive.google.com/file/d/1Mgi2MVwxbmbpMsiw4h47HI224t4FxZU1/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Exclusive (Spanish) -  N-Gage Freestyle",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "2614 KB",
      link1: "https://drive.google.com/file/d/1-HtjxSS12mSMMmKYkKUnXrPdEtV0VL_s/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Exclusive (Spanish) -  Pool Friction ",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "7753 KB",
      link1: "https://drive.google.com/file/d/1krVeE97-1CbDfrS6lkS-XS65pOBQnFHV/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Exclusive (Spanish) -  TechWars",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "1346 KB",
      link1: "https://drive.google.com/file/d/1_sNc35nYMkkOvUM3W7g5CAdlmTF_40pa/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Exclusive (UK) - Space Impact Evolution X",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "450 KB",
      link1: "https://drive.google.com/file/d/1GCAk1BGaJv-l_wrTkiUj3pE5yC69PKdE/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Exclusive (UK-German) - Flo Boarding",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "7751 KB",
      link1: "https://drive.google.com/file/d/1W9IAU7unA7ludq-Q6p_rVgzspRXPzosT/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "FIFA 2004",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "4337 KB",
      link1: "https://drive.google.com/file/d/1Tz1poNtW7nK0fpbY_7-7_Vqj6W7SBAnz/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "FIFA 2005",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "8708 KB",
      link1: "https://drive.google.com/file/d/1c2I2MBNQ2C2iPiWTUgz4Amg0E-Uy3Q3w/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Habbo Island",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "5400 KB",
      link1: "https://drive.google.com/file/d/1Kou2NmUE-e_8z0E2JbWX8YykQd899a73/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "High Seize",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "24141 KB",
      link1: "https://drive.google.com/file/d/1VHnxs_71aVFUXdO6NR-O1cE9OTDt7miT/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "MLB Slam!",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "2109 KB",
      link1: "https://drive.google.com/file/d/1xGPSHsSmJqnPjzCC8VNHXN9W6xcvrW6T/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Marcel Desailly Pro Soccer",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "8098 KB",
      link1: "https://drive.google.com/file/d/1NovAdTlk1KqSltNK1VkfDUKdGGr_-lud/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Mile High Pinball",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "13871 KB",
      link1: "https://drive.google.com/file/d/11SXs_pY9SjFAUZ2myIaNg1cMKRKh0pho/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Moto GP Improved",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "6595 KB",
      link1: "https://drive.google.com/file/d/1vygPKKljw8CSVvIfauPYZ-iFdqw78Qpz/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "MotoGP",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "6590 KB",
      link1: "https://drive.google.com/file/d/1Ne1JVY9M7-TP4QcLuR3cKbI9Y2e3cwJb/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "NCAA Football",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "3411 KB",
      link1: "https://drive.google.com/file/d/1hF7vAl2g4IfTACtOM-i9fiSYI_cy88Yh/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Operation Shadow",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "11015 KB",
      link1: "https://drive.google.com/file/d/1hQRFqu4xjcvlID8ThANmDLwk7qRYq3N-/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Pandemonium!",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "7475 KB",
      link1: "https://drive.google.com/file/d/11RV8QUP3vMh00BqVTYikSSoQeM5zJ1dJ/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Pathway To Glory",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "48842 KB",
      link1: "https://drive.google.com/file/d/18VC0AbahwtYMsvjkV4RQ5MnUVy6NZcxY/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Pathway To Glory Ikusa Islands",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "49912 KB",
      link1: "https://drive.google.com/file/d/1GaITp6gKYafp9S6QiK_6jqC4R5UK_cAn/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Payload",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "3616 KB",
      link1: "https://drive.google.com/file/d/1ZPwlGc132KYZaolPTJVqKQLqizhrKpFv/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Pocket Kingdom",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "10328 KB",
      link1: "https://drive.google.com/file/d/1gztfW3KEjqd8jJ4Z6Jv-EFvKbjZiqsse/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Puyo Pop",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "1113 KB",
      link1: "https://drive.google.com/file/d/13AbGkaxit8NSRsQS8St09LSzVLZc6Thr/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Puzzle Bobble VS",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "2422 KB",
      link1: "https://drive.google.com/file/d/12LM1bfmNFUTP0plBLqrQCv7jENfJwBth/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Rally Pro Contest",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "247 KB",
      link1: "https://drive.google.com/file/d/1mpOBa7IFOVt7nGtsGmOamykLf8u0qx-X/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Rayman 3",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "5493 KB",
      link1: "https://drive.google.com/file/d/1Xv7q6BKT8bVpIws84erSiKBiK09aTOzG/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Requiem Of Hell",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "13013 KB",
      link1: "https://drive.google.com/file/d/1zcRYrGYfG9LLeCOcM3mjiDjPkg0gBvTl/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "SSX Out Of Bounds",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "21935 KB",
      link1: "https://drive.google.com/file/d/1tNC06SYTddn7gR5y5yoC29vwHHOjpmqg/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Sega Rally Championship",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "5601 KB",
      link1: "https://drive.google.com/file/d/1xEOw-iaJ4mC_ft3aGVfBeoEkFGRfm6eq/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Snake 3D",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "883 KB",
      link1: "https://drive.google.com/file/d/10S94G9YVSjPt87m_MjlCwR8xXvX74PYv/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "SonicN",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "3304 KB",
      link1: "https://drive.google.com/file/d/1HhPzhlR_rUVd3eCCzUtTruQkYudxgEll/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Spiderman 2",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "20931 KB",
      link1: "https://drive.google.com/file/d/1_97IYK4BV-vpmjkbbCkzWD1q3KmVCx8m/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Stuntcar Extreme",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "2969 KB",
      link1: "https://drive.google.com/file/d/1LeqRFE9HQpMMM_bdQRSgikSHPXYjxzeQ/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Super Monkey Ball Jr.",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "8993 KB",
      link1: "https://drive.google.com/file/d/1TKEcYh7-sa5Pqjoi2tNTaAT9d9_bfXOf/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "System Rush",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "20548 KB",
      link1: "https://drive.google.com/file/d/1EiFycbLJCFYZmm8fSgely48luYmYZZRS/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "The Elder Scrolls Travels Shadowkey",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "11942 KB",
      link1: "https://drive.google.com/file/d/1wHmuCAtWhEvf-d9LoInhpdf-todjABSb/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "The King of Fighters - Extreme",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "16763 KB",
      link1: "https://drive.google.com/file/d/1FuaIDHgX-xidi_8eGnV29JGjDHTNMqu7/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "The Root - Gates Of Chaos",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "27755 KB",
      link1: "https://drive.google.com/file/d/1eGSjBiGlFb5tXrsrJRiJ8VgQHzE5mD_T/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "The Sims Bustin' Out",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "12598 KB",
      link1: "https://drive.google.com/file/d/1BiWvke53pYqNf6MQvUtwYb8T-NNNH4SC/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Tiger Woods PGA Tour",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "17427 KB",
      link1: "https://drive.google.com/file/d/1iyUOtCYtyeuscx7RaRIlW8G2ksgki_cD/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Tom Clancy's Ghost Recon - Jungle Storm",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "12426 KB",
      link1: "https://drive.google.com/file/d/1QCw7ytDBY4CI3nXtCej33FNZLPDVhVXv/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Tom Clancy's Splinter Cell",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "6336 KB",
      link1: "https://drive.google.com/file/d/15R0XXWjCmDOAJjA8buXBWUtOW8rliHn1/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Tom Clancy's Splinter Cell - Chaos Theory",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "24801 KB",
      link1: "https://drive.google.com/file/d/1ImjjyHNI6baL1CEMQNhkknCLphuT_GBf/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Tomb Raider Starring Lara Croft",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "7336 KB",
      link1: "https://drive.google.com/file/d/1ezEzchFoAdiEgMpDdQQfU42u-gwq8D0X/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Tony Hawk's Pro Skater",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "14762 KB",
      link1: "https://drive.google.com/file/d/1GL4t4lZPP760fKqQ50i7rYUe6aa4AZYW/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Virtua Cop",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "3632 KB",
      link1: "https://drive.google.com/file/d/1drLoIdKfPnftfhfOLTzFpSpDUSD5t9oX/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Virtua Tennis",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "8880 KB",
      link1: "https://drive.google.com/file/d/1CAFM1y-gKbvljH_dvQBt_dgi-Ni3YX4Y/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "WWE Aftershock",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "11391 KB",
      link1: "https://drive.google.com/file/d/1ji3KVPqhDneyzN6toE12lo6Q9qySsCFp/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Warhammer 40,000 - Glory in Death",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "24393 KB",
      link1: "https://drive.google.com/file/d/1eU3aShFKRdhg6ADV2JxZE-ZjsULCJ0-m/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Worms World Party",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "19761 KB",
      link1: "https://drive.google.com/file/d/1k7h6Avkz3rsDz1iSogVEuGGgT5VT84qB/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "X-Men Legends",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "29227 KB",
      link1: "https://drive.google.com/file/d/1Ci4hNKuuaz0f98pjLd-M6q03wqdjOdbN/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "X-Men Legends II",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "25803 KB",
      link1: "https://drive.google.com/file/d/1keKk7Ymd3OgZscD5pd7OU7XdmB_Enyaj/view?usp=drivesdk",
      link2: ""
    },
    {
      name: "Xanadu Next",
      image: "https://i.postimg.cc/CL7pxXSF/1200px-Ngage-logo-svg.png",
      size: "10794 KB",
      link1: "https://drive.google.com/file/d/16mZpOFKATNqzqF-5kstOnsXgmlIM3N8L/view?usp=drivesdk",
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