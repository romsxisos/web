const folderHTML = `
<div class="folder" onclick="toggleFolder('folder1')">📁 /3DO BIOS</div>
<ul id="folder1" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1RiNMrKBve65WRiyclpWInl29P2sh09p5/view?usp=drivesdk" target="_blank">3DO - FZ-10.bin</a>
    <span class="size">1024 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder2')">📁 /Amiga BIOS</div>
<ul id="folder2" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1ijkNoBKVbXgEZXSLubEPoh9x6PURXALU/view?usp=drivesdk" target="_blank">Kickstart 2.0.rom</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1DiQKOqNLS_BtvKRQAF7ldJCSCzugHKUN/view?usp=drivesdk" target="_blank">Kickstart 1.2.rom</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/176QusBG6FI5usWmaTk4h35GTeZDbq2P2/view?usp=drivesdk" target="_blank">Kickstart 4.0.rom</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qrG76Yq3DJB5W8PYar06g2I0qu3QtpHn/view?usp=drivesdk" target="_blank">Kickstart 3.1.rom</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1386JiP_iqlev85oMfBjEvg5rq4_3tEqp/view?usp=drivesdk" target="_blank">Kickstart 1.3.rom</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/19jW-OFDb7krhu8_32pjnAhLFIn26Uz4h/view?usp=drivesdk" target="_blank">Kickstart 3.0.rom</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder3')">📁 /Atari 5200 BIOS</div>
<ul id="folder3" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1fbp_8jkerPX26MQAjSSIqy24v38bmwqE/view?usp=drivesdk" target="_blank">5200Opsys.bin</a>
    <span class="size">2 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder4')">📁 /Atari 7800 BIOS</div>
<ul id="folder4" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1s5s4Zwj3TLwYIEFjSW9vFM-Ql_qWGGLq/view?usp=drivesdk" target="_blank">7800.rom</a>
    <span class="size">4 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder5')">📁 /Atari BIOS Collection</div>
<ul id="folder5" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1GQWaEd1aikxVARqsCKBa02ycOqUSAPkn/view?usp=drivesdk" target="_blank">Jaguar CD BIOS.rom</a>
    <span class="size">256 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1NktQ8joU8xY16NxfyFpqXPCmij6V2u3k/view?usp=drivesdk" target="_blank">Lynx Boot Image.bin</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1fuVumnmRKwnlBMVExJywyCXCgi_AQx0w/view?usp=drivesdk" target="_blank">Lynx 2 Boot Image.bin</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1jGpAJoRNhEXwb7eawxOyuUeSG-eoS_a_/view?usp=drivesdk" target="_blank">Jaguar BIOS.rom</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1JtBK5c5tGDs20d0by8755azQH6UEYCil/view?usp=drivesdk" target="_blank">Jaguar Boot.rom</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1NObcxQP3Ni1LFwhiNAgS08hUvev-XhPD/view?usp=drivesdk" target="_blank">7800 BIOS (U).rom</a>
    <span class="size">4 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1fXsuNYiyrAnBmF5d4vtvazWD6-4kVTd0/view?usp=drivesdk" target="_blank">7800 BIOS (E).rom</a>
    <span class="size">16 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1fEiVGb7ei9gvGhzMglk_5uV9S1Dif8rr/view?usp=drivesdk" target="_blank">5200 BIOS.rom</a>
    <span class="size">2 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder6')">📁 /Atari Jaguar BIOS</div>
<ul id="folder6" class="files">
  <li>
    <a href="https://drive.google.com/file/d/13XLS6FC8q3LygBeRBZDi57iSzQ4IqENm/view?usp=drivesdk" target="_blank">Jaguar.rom</a>
    <span class="size">128 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder7')">📁 /Atari Lynx BIOS</div>
<ul id="folder7" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1Dwx415fhYLJe9EaOYSLCwRo5dysX8V0Q/view?usp=drivesdk" target="_blank">boot.rom</a>
    <span class="size">1 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder8')">📁 /Atari TOS 206 US BIOS</div>
<ul id="folder8" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1LNr_Y84uhhMRmAAvpFt5ESIL7MeSmpLf/view?usp=drivesdk" target="_blank">Tos206.img</a>
    <span class="size">256 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder9')">📁 /Atari jaguar boot cd BIOS</div>
<ul id="folder9" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1v5YAQHCpmjVvEHVvyfBGDDDBWLLk2Meh/view?usp=drivesdk" target="_blank">jagcd.rom</a>
    <span class="size">256 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder10')">📁 /Atari jaguar console BIOS</div>
<ul id="folder10" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1Ur-vcpSwZO-i51FLBpnvSoRRyw5FaBMw/view?usp=drivesdk" target="_blank">jagboot.rom</a>
    <span class="size">128 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder11')">📁 /BSX satellaview BIOS</div>
<ul id="folder11" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1-Ffs1q7qhpvu7MitWs8nY48v-8UEd59r/view?usp=drivesdk" target="_blank">BS Satellaview BS-X (O.S.rom).smc</a>
    <span class="size">1025 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder12')">📁 /CD-i BIOS</div>
<ul id="folder12" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1Rlpon-CinVXG3vpEfg2eZtFjlFeshZEX/view?usp=drivesdk" target="_blank">CD-I 910.rom</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1VDsQC26MSzHrF93EXYBA2KKfilLE1-NC/view?usp=drivesdk" target="_blank">CD-I 220.rom</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1aj9lvktwKiVVP71d-2tOX5woluG4AkZv/view?usp=drivesdk" target="_blank">CD-I 200.rom</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1KwmlIMZU27uB-l1NDkz2kQnNolbB0ix8/view?usp=drivesdk" target="_blank">CD-I 490.rom</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1gy2GCrF6Jgd7RmMCIuDMKtwXLMXrWMm_/view?usp=drivesdk" target="_blank">CD-I 205.rom</a>
    <span class="size">511 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder13')">📁 /ColecoVision BIOS</div>
<ul id="folder13" class="files">
  <li>
    <a href="https://drive.google.com/file/d/13IQhl6j-bT75ycRQbkOhPvclYeUQU1dH/view?usp=drivesdk" target="_blank">ColecoVision.rom</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1H3ss_NKEA5043mf8RaAUdmAcArQFVBeq/view?usp=drivesdk" target="_blank">ColecoVision (Different Font).rom</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1phZ7rV8S98y_jv5eYz73iokSI3BDfkY0/view?usp=drivesdk" target="_blank">ColecoVision (No Intro).rom</a>
    <span class="size">8 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder14')">📁 /Dreamcast BIOS</div>
<ul id="folder14" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1zK_JrqHIRc9KpJp5qGoWh13CYjeIhyBw/view?usp=drivesdk" target="_blank">DC - Utopia CD Loader V1.1.nrg</a>
    <span class="size">3769 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1wdWqwHF-e37WJJFaCpvKsRWf239wxm1r/view?usp=drivesdk" target="_blank">DC - BIOS (All).bin</a>
    <span class="size">4102 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1s_z2XUr61o0WZAXbGWlTmDNNYuWl4xGr/view?usp=drivesdk" target="_blank">DC - BIOS.bin</a>
    <span class="size">2048 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1WnETjsjEQj9iO6XqF_O9Rmr3A7oyyb1x/view?usp=drivesdk" target="_blank">DC - Utopia CD Loader V1.1.cdi</a>
    <span class="size">4061 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1J3ItPSsPZ1Th7G_EMPUo4cWTwM8r5ZWE/view?usp=drivesdk" target="_blank">DC - VMS BIOS (Full).bin</a>
    <span class="size">64 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/135n7N3hnbwY8uD0xht9vvqce2dhLoFZS/view?usp=drivesdk" target="_blank">DC - Flash (All).bin</a>
    <span class="size">256 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1gKBwhHhT7rc_heXhITNSoAr-fL2eil-4/view?usp=drivesdk" target="_blank">DC - Flash.bin</a>
    <span class="size">128 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder15')">📁 /Fujitsu FM-7 ROMS</div>
<ul id="folder15" class="files">
  <li>
    <a href="https://drive.google.com/file/d/16Hf0Q4nqbRH2Auv8C58swg88dIDBePaA/view?usp=drivesdk" target="_blank">Fbasic30.rom</a>
    <span class="size">31 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/18DQxbyKN4QVtO9yO-ZatOX9zKtq-bOmR/view?usp=drivesdk" target="_blank">ExtSub.rom</a>
    <span class="size">48 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/19auGMLu52yc3KQldkHZYfe5tEAJ0imV1/view?usp=drivesdk" target="_blank">DicRom.rom</a>
    <span class="size">256 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Avm4WBD6UdV4EclFn9BKNwBeEit7rymo/view?usp=drivesdk" target="_blank">Subsys_c.rom</a>
    <span class="size">10 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1F1mXWxXli2m9oCFhYAvLlWVy0pJ_d-4v/view?usp=drivesdk" target="_blank">Initiate.rom</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1OE-C6Kpqjc0ndPQVxInjJOf8h5l977UL/view?usp=drivesdk" target="_blank">Kanji2.rom</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1q_tCs8Uee5o3PuaeWEf2J8MWZ1Bww4MG/view?usp=drivesdk" target="_blank">SubsysCg.rom</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1rgdzwfhq905NHdkJJ_FkAX8VqIPPtZlV/view?usp=drivesdk" target="_blank">Kanji.rom</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1sLQwC_HCqdohV4bdxlRF5yeye9nBk_r4/view?usp=drivesdk" target="_blank">Subsys_a.rom</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1uoavvIzGeVJorCYjh8EqgCjXpVU4ZLjq/view?usp=drivesdk" target="_blank">Subsys_b.rom</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1mVnmWzKVwNdY-fDR9Te2g6xL-y1AI2zE/view?usp=drivesdk" target="_blank">Boot_bas.rom</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1mo6I8UAMedS1eDMVvnVByeKoRf-Jn3Op/view?usp=drivesdk" target="_blank">Boot_dos.rom</a>
    <span class="size">1 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder16')">📁 /GBA BIOS</div>
<ul id="folder16" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1h1ioyN23E2aN2G2WGT9l4Jz-Wx086Auv/view?usp=drivesdk" target="_blank">gba_bios.bin</a>
    <span class="size">16 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder17')">📁 /GBC Bios</div>
<ul id="folder17" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1ECzPRaagZ0MWT4daGO-g45Vxwp3CmZsa/view?usp=drivesdk" target="_blank">gbc_bios.bin</a>
    <span class="size">2 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder18')">📁 /Gamars copier BIOS</div>
<ul id="folder18" class="files">
  <li>
    <a href="https://drive.google.com/file/d/18HHLd7LGcSHyVh4nRYcSuHDOKWavvr5u/view?usp=drivesdk" target="_blank">Gamars (Copier Bios).smc</a>
    <span class="size">1024 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder19')">📁 /MAME BIOS/BIOSmame133u4</div>
<ul id="folder19" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1bRt7XqQj0TNday0eiSfIQ4SrbbKDuS6A/view?usp=drivesdk" target="_blank">naomi.zip</a>
    <span class="size">4238 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qYT9JxEBsNFgZpMURiN7SCngMS-ad9h-/view?usp=drivesdk" target="_blank">hikaru.zip</a>
    <span class="size">513 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1H2HMJQc8FHxmW3BL5KxH7bFGm1ZpuEZ8/view?usp=drivesdk" target="_blank">naomigd.zip</a>
    <span class="size">3409 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SLQqai3S2kpcxEdDqzgs2w19jqm2lq_K/view?usp=drivesdk" target="_blank">pgm.zip</a>
    <span class="size">1917 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1jLIwXWFpEE3NZsVc8oE6Da66RNa72dLH/view?usp=drivesdk" target="_blank">stvbios.zip</a>
    <span class="size">2153 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1t4a91leVn9tGPu8xp-tBM6G0upAUlQ88/view?usp=drivesdk" target="_blank">f355bios.zip</a>
    <span class="size">899 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1vMiMMeGXLdSJKDb_ejfWIvIKfy0MGJl5/view?usp=drivesdk" target="_blank">naomi2.zip</a>
    <span class="size">4196 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/13DTAW6z2sUWD1A_N9rHnSLDUbh62g7Zb/view?usp=drivesdk" target="_blank">maxaflex.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/13HaInSOZfGGSDoFk60AMI6F5sHuMqJOH/view?usp=drivesdk" target="_blank">cd32.zip</a>
    <span class="size">658 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/17axLqQM6b4khkyVEn_91aNRcs6r6_MMa/view?usp=drivesdk" target="_blank">hng64.zip</a>
    <span class="size">16 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1KiFFS0kDNPmILtAHaZe6fXWGxLsyAGY7/view?usp=drivesdk" target="_blank">kviper.zip</a>
    <span class="size">16 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1aUTyPhauPHq8ATcnoY8fTdxqOJFdxrzS/view?usp=drivesdk" target="_blank">awbios.zip</a>
    <span class="size">17 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1lRlWj5bUKpg18vU2zby0XiW97acDV5XI/view?usp=drivesdk" target="_blank">neogeo.zip</a>
    <span class="size">1232 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qnR0OCk7hWpOARcFQLI1u9H8yt2EcGGk/view?usp=drivesdk" target="_blank">konamigx.zip</a>
    <span class="size">9 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FiOtqVSV4XZDUSC3OThNCBJeoXqM_Z-_/view?usp=drivesdk" target="_blank">gq863.zip</a>
    <span class="size">73 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1bI8u8c139qRhWMLd9wSOO6yZS4G1zcLk/view?usp=drivesdk" target="_blank">sys573.zip</a>
    <span class="size">62 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1rXJToIDpp34HK6bG-jl8iDzyBb7q-6o6/view?usp=drivesdk" target="_blank">triforce.zip</a>
    <span class="size">1999 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/13SoR_CQDBRpc_gaPBTRB7m0NDKB-hTS_/view?usp=drivesdk" target="_blank">crysbios.zip</a>
    <span class="size">42 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Iv53_HsKneqDFcgTyQ4PWztgBIl-sQRR/view?usp=drivesdk" target="_blank">atarisy1.zip</a>
    <span class="size">48 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1OgL7Wi5-TT5SSR3hL8VqsqOFIi_LaESD/view?usp=drivesdk" target="_blank">skns.zip</a>
    <span class="size">765 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Awcj1EmkMvqAOQCTutjzeUzM_PDP344D/view?usp=drivesdk" target="_blank">cpzn1.zip</a>
    <span class="size">123 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1nkOEYWfIBG6WWXsi9bw9hckQti-6qkhH/view?usp=drivesdk" target="_blank">atpsx.zip</a>
    <span class="size">123 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/10R5F7MePI8ivf4xl4iTvjugnwKnWrRFw/view?usp=drivesdk" target="_blank">nss.zip</a>
    <span class="size">34 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/19sCCW8MJKXMvyOgD3eAEZ8pPBr98rDUi/view?usp=drivesdk" target="_blank">cpzn2.zip</a>
    <span class="size">135 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1b2EaTMqsSv7gwbXqDBwsj57KP5bSslXP/view?usp=drivesdk" target="_blank">playch10.zip</a>
    <span class="size">23 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1v3TotBhosFyhxPMZ2IeLmk1XlJCNKE3K/view?usp=drivesdk" target="_blank">hod2bios.zip</a>
    <span class="size">797 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1OCgW7L7hBtQQ16uUY_smkQmSloOL0zyJ/view?usp=drivesdk" target="_blank">tps.zip</a>
    <span class="size">135 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1PwigsNYVRPC9nGTngOA816u7O9o_blcb/view?usp=drivesdk" target="_blank">alg_bios.zip</a>
    <span class="size">140 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1cd-KFOVN_DQ8cwP4ciz8P2McECtoIMhf/view?usp=drivesdk" target="_blank">macsbios.zip</a>
    <span class="size">298 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1fyuahN7z_azmtDVhaZzlzkiaaAMEIiSg/view?usp=drivesdk" target="_blank">taitogn.zip</a>
    <span class="size">324 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1i65EgD7NAwSuYIKdPq-0vXpMZVskDl4a/view?usp=drivesdk" target="_blank">ar_bios.zip</a>
    <span class="size">372 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/19OeA79OjaBerGKT8BaR249bShpD6cFZU/view?usp=drivesdk" target="_blank">acpsx.zip</a>
    <span class="size">123 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1apT8HVJYmyNP-iI_TJYn-xrJiEJJ5kLL/view?usp=drivesdk" target="_blank">taitofx1.zip</a>
    <span class="size">123 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1f_yfbfUQysj9HjOIAhR0Cr_wRWQb8K9Q/view?usp=drivesdk" target="_blank">galgbios.zip</a>
    <span class="size">657 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/10R3EN5TXgkfeRQEl6HvL7QMcjbeVgpxW/view?usp=drivesdk" target="_blank">megaplay.zip</a>
    <span class="size">49 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/11hegzrmnZI8rE0d7bIeDh7GgIub3SOLo/view?usp=drivesdk" target="_blank">konamigv.zip</a>
    <span class="size">79 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1KHuTNkfZHQ0YPuv7ZON2jMzv4P3F73N3/view?usp=drivesdk" target="_blank">atluspsx.zip</a>
    <span class="size">123 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/168A0xvQrB1GNVLkaiLmGoNx1q-yaYxtx/view?usp=drivesdk" target="_blank">psarc95.zip</a>
    <span class="size">125 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Wa6OdOGbnxySV3WLh53tlWRpGlJNpUqa/view?usp=drivesdk" target="_blank">vspsx.zip</a>
    <span class="size">123 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/14KYN3tsMEf7QyPY-hB-S6uoiw2avOSu9/view?usp=drivesdk" target="_blank">bctvidbs.zip</a>
    <span class="size">4 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1TjrBthZByNpBfOH1Uy8BedVbotcUoPMm/view?usp=drivesdk" target="_blank">decocass.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1UC-gjd3UaCujSyystciiJ-UTUqBjWLom/view?usp=drivesdk" target="_blank">megatech.zip</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1XJyhHjtEGWmQJAxk2U8fAPoKzcNrB4ax/view?usp=drivesdk" target="_blank">mac2bios.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1kgWeeOEOPB2dWShJH9rlyFmS943A-_EG/view?usp=drivesdk" target="_blank">aleck64.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1n9kSQPEYvZksbkShpkUn7AuMTnk8GyN2/view?usp=drivesdk" target="_blank">BIOS_Report.txt</a>
    <span class="size">3 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder20')">📁 /MESS BIOS/MESS</div>
<ul id="folder20" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1INhEuSr32hPB7rabNKJ68uarKxlMS4i5/view?usp=drivesdk" target="_blank">cbm610.zip</a>
    <span class="size">20 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1J_uj65z5GX5-OwReghxjn84Isn9lI0Rl/view?usp=drivesdk" target="_blank">cbm720.zip</a>
    <span class="size">20 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Sl0U4RM77B75Jx7KLFOxqXDnoQqwG_p7/view?usp=drivesdk" target="_blank">cbm710.zip</a>
    <span class="size">20 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1W1DocAIOrMC8qu1sbm7pF7Lm6HgaPBix/view?usp=drivesdk" target="_blank">cbm40b.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1XFDnzSKgfoxbIFFP6J3e1adQHU-Zxprq/view?usp=drivesdk" target="_blank">cbm620hu.zip</a>
    <span class="size">19 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1nsbw8JCLbYn3bUqGDUIKRXDbrn_Ko1Ed/view?usp=drivesdk" target="_blank">cbm500.zip</a>
    <span class="size">20 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qgHS7pVPPYoAnM-G_G0IZCikYnml_p3D/view?usp=drivesdk" target="_blank">cbm620.zip</a>
    <span class="size">19 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1xxY2ssP3KQB6W10d9wPr5eyW5s6YJL3e/view?usp=drivesdk" target="_blank">cbm40pal.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1NRdZzNRXKTknDt9S-Xs1TL3WMvyFvy9U/view?usp=drivesdk" target="_blank">hbf1xd.zip</a>
    <span class="size">50 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1oMEnkUC2TSp9_ospB7ElcRV4NFvLNaRa/view?usp=drivesdk" target="_blank">hbf12.zip</a>
    <span class="size">71 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1t4XRrrXzBAOb62rUgD-FNsZuI-J5p51f/view?usp=drivesdk" target="_blank">hbf1xdj.zip</a>
    <span class="size">577 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1eABMUYHeV1yuCjwFLtb5BWxCHVUP6vQ4/view?usp=drivesdk" target="_blank">hisaturn.zip</a>
    <span class="size">440 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FQyAE-TLHEv4_pPrhrmjrHwST8aH8Bs-/view?usp=drivesdk" target="_blank">raaspec.zip</a>
    <span class="size">18 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1kY9DcbMlP0xl-xcS2_Uud1LEFwbf5ej4/view?usp=drivesdk" target="_blank">saturn.zip</a>
    <span class="size">892 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qqUsAog8lb9EP_3eLuWjlOhH0M0VO-Un/view?usp=drivesdk" target="_blank">ql_mgs.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1uII1tBtiNSV5UwUyyx9UynKQW7Mr7a-U/view?usp=drivesdk" target="_blank">ql_tb.zip</a>
    <span class="size">35 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1yT1wh0_7vCPFQZl2PE0nFS-5NuwEKmbu/view?usp=drivesdk" target="_blank">ql_mgi.zip</a>
    <span class="size">37 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1-wIQKmKy-8QhEpDpzJLcawHABvze1DD4/view?usp=drivesdk" target="_blank">dpc180.zip</a>
    <span class="size">30 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Eg_q4vf4RQHzm_b8wmHNFVwKV7j1Eyb9/view?usp=drivesdk" target="_blank">dgnalpha.zip</a>
    <span class="size">20 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FOzYz6GeaEJ7FAHocpQxKSAAzylOwSll/view?usp=drivesdk" target="_blank">cpc664.zip</a>
    <span class="size">37 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1XixuZwNsuRxaZFhw94TS1E6ilyYvJAF0/view?usp=drivesdk" target="_blank">dpc100.zip</a>
    <span class="size">30 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1XtXzZXcCIoS2OD5uoOdwrGLTZSwEWuQM/view?usp=drivesdk" target="_blank">dai.zip</a>
    <span class="size">21 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1dXnqc1oL296oX7K2ye-HO5k1JLez6L04/view?usp=drivesdk" target="_blank">dgnbeta.zip</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1w1bOLUT3i3MlKMvFK68UfUrDqJQKPw3L/view?usp=drivesdk" target="_blank">d64plus.zip</a>
    <span class="size">34 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1LycGjSR_OhogTysRaueeEExUG7cmC2Ng/view?usp=drivesdk" target="_blank">saturnjp.zip</a>
    <span class="size">885 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SSuvw4n9g1xEe9G29MyFQySsbzRQgVMI/view?usp=drivesdk" target="_blank">saturneu.zip</a>
    <span class="size">892 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/18HzmefRmuc_1GQ66x3q2mZF0cvnRr-9P/view?usp=drivesdk" target="_blank">mo5e.zip</a>
    <span class="size">24 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/19osIBX7TeqZJkXa4iq4q3hMpG37PM16C/view?usp=drivesdk" target="_blank">mo5.zip</a>
    <span class="size">24 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1D6c5lGaBV2A5rsSy7-8sWcNRhH6550Uu/view?usp=drivesdk" target="_blank">mo5nr.zip</a>
    <span class="size">57 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1VPKLi_Qs-m4srI6ywnJKQ9oKw-2oVqCI/view?usp=drivesdk" target="_blank">mo6.zip</a>
    <span class="size">61 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1-M-c85UP5KpXTWK53uClhQ_yfkJg39H1/view?usp=drivesdk" target="_blank">specgrot.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/14b0cMEi_PEQmLmVu6wKbXhHbyUUYdskq/view?usp=drivesdk" target="_blank">snes.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ElhbFU0-B58QT2em-Yv36j2avVQJJiEP/view?usp=drivesdk" target="_blank">smspal.zip</a>
    <span class="size">391 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Kpv3SpHq9r7E_sXzETmLE4k1iqNBq4ue/view?usp=drivesdk" target="_blank">spec128s.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SW_CA_s6KJiGGAU-Z5ek25xGpqxSTsBs/view?usp=drivesdk" target="_blank">snespal.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1YxD7RGpKlw_22Y1-MHp7prS7BssPe9Ed/view?usp=drivesdk" target="_blank">sordm5.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ZFxgUsV3dDQ0jt6xktuEerzrhCaeDStu/view?usp=drivesdk" target="_blank">specbusy.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1fyxWOrKkvtaUbKW9m2dnin4xvPL45JaC/view?usp=drivesdk" target="_blank">spec128.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1P_gEGyZBwgHisysQOjnoRz4imKVl3Sls/view?usp=drivesdk" target="_blank">bbcm.zip</a>
    <span class="size">98 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1VS0Cecp-31XZ6-fqBAU8pt7aEfxf3qMb/view?usp=drivesdk" target="_blank">bbcbp128.zip</a>
    <span class="size">38 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1vskvFOol1wjpnRxH4xn8QjhJ5ZkD58Ut/view?usp=drivesdk" target="_blank">bebox.zip</a>
    <span class="size">58 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/14YfixpXQqBzd4t3NJ_Tk9mNUq47ATpvk/view?usp=drivesdk" target="_blank">intvsrs.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Al36KUE7JIp5mktdpqmtDDp7PJDIyMY0/view?usp=drivesdk" target="_blank">inves.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1LEZ68UDDF6jm1i87kLIhhLFJGj5L2Htn/view?usp=drivesdk" target="_blank">intvkbd.zip</a>
    <span class="size">18 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1VNS6aMbyKS0qlB-k5NCy6FrYJG6USjVe/view?usp=drivesdk" target="_blank">ip204415.zip</a>
    <span class="size">180 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15IY4pn-mHtiqk1h8-77eZFA0Bz3CG9AU/view?usp=drivesdk" target="_blank">ibmxt.zip</a>
    <span class="size">46 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/18Q2BsYhZBodxgbxZmSDHf8USuPKOfKEB/view?usp=drivesdk" target="_blank">psxj21.zip</a>
    <span class="size">239 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/19k2qik1jLqMZxUnIn72-aRO31CViY4-1/view?usp=drivesdk" target="_blank">intv.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1oMnXShY73NPz0nDZbU4ngfME4gCsm6Rm/view?usp=drivesdk" target="_blank">psxj11.zip</a>
    <span class="size">241 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1LdezTH6eSaxxArHiyyp8IbdMRGY-ZNE_/view?usp=drivesdk" target="_blank">ti85v50.zip</a>
    <span class="size">88 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1bG2CvGDG1DD8SM5U1G0Z6-DHS-CPuObV/view?usp=drivesdk" target="_blank">ti85v40.zip</a>
    <span class="size">88 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ubipsN6u_2dQcn07pglfolPbwwck7JWe/view?usp=drivesdk" target="_blank">ti85v100.zip</a>
    <span class="size">89 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1O4tbvq8yIvvM0k1XyUUk0LOj5VXv43ZH/view?usp=drivesdk" target="_blank">psxe30.zip</a>
    <span class="size">227 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1jk3KHd1w-DHIai1tGiSDhPN627_aD1ku/view?usp=drivesdk" target="_blank">psxe41.zip</a>
    <span class="size">280 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1aOKJVTBZQPvanEx69B_K3u5dTT9H-Zdl/view?usp=drivesdk" target="_blank">ibmpca.zip</a>
    <span class="size">40 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1AtfrrRn1E3vJK-mlnnMR2QZUPOQC_PMq/view?usp=drivesdk" target="_blank">ql_jsu.zip</a>
    <span class="size">36 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1PtU9G1BE_QRVylpniZb4CnO37XVzPYJn/view?usp=drivesdk" target="_blank">ql_efp.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SyKkcXYiYWEKWaHJ7vhfokedmM1eMjWY/view?usp=drivesdk" target="_blank">sfzch.zip</a>
    <span class="size">3811 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1T7EJL-xtxNEVH7ihC7pkkzEAVY0jz2OS/view?usp=drivesdk" target="_blank">ql.zip</a>
    <span class="size">34 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1YVtZjJvNqFHr5qJcCQFAdJl6J9ht7woj/view?usp=drivesdk" target="_blank">psxj40.zip</a>
    <span class="size">282 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1d9Mxmjz8lecqD-5viIcuegeycB_8pvtR/view?usp=drivesdk" target="_blank">ql_jm.zip</a>
    <span class="size">34 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1kWHc04aOg1nhl8haIjyK9knY2MQSnc0G/view?usp=drivesdk" target="_blank">ql_js.zip</a>
    <span class="size">36 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1uwcOXUnK362rBviIKHwlA9NwJoLtl8rE/view?usp=drivesdk" target="_blank">fsa1f.zip</a>
    <span class="size">162 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1xtu2E6LGWAu7VXArdjZsOfYpZyJEZnfc/view?usp=drivesdk" target="_blank">fsa1fm.zip</a>
    <span class="size">712 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1bOUDCqKETYBwiAhGeL3lXfJcd9IfXYxy/view?usp=drivesdk" target="_blank">atvga.zip</a>
    <span class="size">66 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1zatTI2fbbfwSg3hVGdaLHoILHRl8D3oM/view?usp=drivesdk" target="_blank">avigo.zip</a>
    <span class="size">402 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1UWp-2valjQjN0EdoalSioZaA_BLDsIIH/view?usp=drivesdk" target="_blank">atomeb.zip</a>
    <span class="size">41 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/13gPD3Ni5n3SielSNjRWQEuftEciUDCZe/view?usp=drivesdk" target="_blank">a800.zip</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/141yJTgH6an7DgBIAhvFAy5_l37NHoHF4/view?usp=drivesdk" target="_blank">a800xl.zip</a>
    <span class="size">18 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15Jvn1SUXRMvP4khRJCAoaH_jxgrNaa4S/view?usp=drivesdk" target="_blank">a800pal.zip</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FGQ8e9svhdgnySt9fEGqovuuCaJQ1Blx/view?usp=drivesdk" target="_blank">a7800p.zip</a>
    <span class="size">10 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1I4tgzUnKYI4zGy6aHZOseOANqRXs49Hv/view?usp=drivesdk" target="_blank">a7800.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1h_lpB-_9R12VEp6AbX7aBo3ZZ7wPHGYL/view?usp=drivesdk" target="_blank">abc800m.zip</a>
    <span class="size">27 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1nnNq7juzCRFl-hEE5k51yydZAAzbls1Q/view?usp=drivesdk" target="_blank">abc80.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1r61JNQDqierf36NYXMR_nHho8TPAsKzF/view?usp=drivesdk" target="_blank">abc800c.zip</a>
    <span class="size">23 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ybJsVIKOraCeBUVGXjGPTQlN79e3c6Yu/view?usp=drivesdk" target="_blank">a5200a.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1PaPXKhyQfEKx-QAz78Ho_Q0of2BZZCvK/view?usp=drivesdk" target="_blank">fsa1wsx.zip</a>
    <span class="size">828 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15jxA0mPPCiYbQkIiG2udJcBV0TFfVpkz/view?usp=drivesdk" target="_blank">a5200.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/18bTWreFRBTo91Dnd8prBGPcJjg6lSwj7/view?usp=drivesdk" target="_blank">a500p.zip</a>
    <span class="size">871 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1yi4ysSwMYZtulO2tAo1Yh1A1cBmQtcIr/view?usp=drivesdk" target="_blank">fs4600.zip</a>
    <span class="size">583 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Cgv4sxsdC_1WKFQUaaXOjVgVgDQ4SQO5/view?usp=drivesdk" target="_blank">expertdp.zip</a>
    <span class="size">38 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1KawPPIdde87uBBn6X4sDvV1J9pOwAxsd/view?usp=drivesdk" target="_blank">expert10.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SkGi3fuF9CIq19dixYtQpEvRO86UZcRg/view?usp=drivesdk" target="_blank">expert11.zip</a>
    <span class="size">34 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1dift7Gzort8I76Lc89aYkCS8mp1uYr4D/view?usp=drivesdk" target="_blank">famicom.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1hOqG90w9RrAk83WBUaoQpT2XCQ-ssja_/view?usp=drivesdk" target="_blank">famitwin.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1kmDrKObwWhxDwl5bGIGbjIna2YXw0qhB/view?usp=drivesdk" target="_blank">exidyd.zip</a>
    <span class="size">4 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qqsDmnFUcjXoEGopem6wT0LaFfRWUv9s/view?usp=drivesdk" target="_blank">exidy.zip</a>
    <span class="size">4 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1y_4vehdJR4MojONswiHcMqOSrrxXBpbG/view?usp=drivesdk" target="_blank">europc.zip</a>
    <span class="size">21 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/11iTzCxMWBEx1OimqMOVbq5z67iKJxB_I/view?usp=drivesdk" target="_blank">c16c.zip</a>
    <span class="size">36 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1INoInwf36aW8xrCf-8xcHDxIC0KhtT-c/view?usp=drivesdk" target="_blank">c364.zip</a>
    <span class="size">62 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1S_QQiV5GxPy4k3B_rmvgEgAr3aS7s5sW/view?usp=drivesdk" target="_blank">c16hun.zip</a>
    <span class="size">24 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1oRIznXQO6nFcASqvcVBM1iuowsVvJSmN/view?usp=drivesdk" target="_blank">c16.zip</a>
    <span class="size">24 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1w4ljGEDx5YwPpEaGwLwsUQI04-aI9zRy/view?usp=drivesdk" target="_blank">c64.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Eb9kPO4cJrbeMAQFW9R1zSsyNGcONzbu/view?usp=drivesdk" target="_blank">psxe20.zip</a>
    <span class="size">228 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FhNojD_bn8-wAFjP1dC2K_I0j9VMDh7S/view?usp=drivesdk" target="_blank">psxa45.zip</a>
    <span class="size">292 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/151uxquH_gjxQ2EGdPnfyPvjRabrwt74F/view?usp=drivesdk" target="_blank">vsaturn.zip</a>
    <span class="size">440 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Fr-vD0Clx2Mk-_OaWRYGVLwCNLhuZnmr/view?usp=drivesdk" target="_blank">vz200.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/17UMdAb2_Ct1DV9t6vLvMRWp6pPFzw_y5/view?usp=drivesdk" target="_blank">pmd852.zip</a>
    <span class="size">11 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1kY8cL7SFKTzgHmSgT0AHeqy-M51epRUY/view?usp=drivesdk" target="_blank">pow3000.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1r4YYcUx70npol_zetv7Cj5Jgl7jWzyAQ/view?usp=drivesdk" target="_blank">pmd852a.zip</a>
    <span class="size">11 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1-afpt0t86JGo3TzuOlf2r1xuNaXdX387/view?usp=drivesdk" target="_blank">pmd852b.zip</a>
    <span class="size">11 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15v8zXiMrKXT8AClCyF8255rS5XzhBIMu/view?usp=drivesdk" target="_blank">pmd851.zip</a>
    <span class="size">10 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1B3yiyLya5AZMhp9dmqPMCgWv_5FdZpRs/view?usp=drivesdk" target="_blank">pmd853.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Bw8yGX1h-UVji0nAF3GM-qZlJvuqnm7F/view?usp=drivesdk" target="_blank">prav8d.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Fs38Rwye0vPKTdpDQWXzBZYpJ8-BHQ6W/view?usp=drivesdk" target="_blank">prav8dda.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1JG43EYiS7GiYaN4foCSwyC0LA-38mg1H/view?usp=drivesdk" target="_blank">prav8dd.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1nxwSpxPyNPpvFnJkpIs10si7WlgaY4Pi/view?usp=drivesdk" target="_blank">plus4c.zip</a>
    <span class="size">58 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Di4QsA8hbJVJ83RUnRs4Rnfw6qCu-h9Y/view?usp=drivesdk" target="_blank">hbf1xv.zip</a>
    <span class="size">577 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1pxr7irNp5T_-RJviTUnHXksPesgg8dgl/view?usp=drivesdk" target="_blank">fsa1.zip</a>
    <span class="size">64 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qGRByh53L5fRmDkdu_YNL5WqcsCCY4LO/view?usp=drivesdk" target="_blank">fs5500.zip</a>
    <span class="size">143 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1upkjkEv9v4N0AFod8OH2ay-vE6VmYtIH/view?usp=drivesdk" target="_blank">fsa1a.zip</a>
    <span class="size">64 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/19Naea_V7e9zl60Ca_cmkba0OOnC2tRzr/view?usp=drivesdk" target="_blank">psxa41.zip</a>
    <span class="size">280 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1YuPtIfb9b5MtbcRRyIjl7t1v-xkREnVo/view?usp=drivesdk" target="_blank">gameboy.zip</a>
    <span class="size">0 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ZfLJpjjqJBos1ckpPVVEi6AYpToX_hCj/view?usp=drivesdk" target="_blank">gamecom.zip</a>
    <span class="size">142 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1eihzInCMT-QW2d3nJsk7D_GWHjfZbTLs/view?usp=drivesdk" target="_blank">fsa1wxa.zip</a>
    <span class="size">882 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1rt5udpcWx-FNfMBW9ti50KtERDDNHSdg/view?usp=drivesdk" target="_blank">galaxy.zip</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/12bZX8vYpRLYv-lRQucT40jICPDOdj3OV/view?usp=drivesdk" target="_blank">aszmic.zip</a>
    <span class="size">3 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1774AYcVeBbLn5i8z00Oz3XnmyTXL1VCR/view?usp=drivesdk" target="_blank">at.zip</a>
    <span class="size">52 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/17iCR_ddUN-r89u36n15CbDgHzYO7s5oo/view?usp=drivesdk" target="_blank">apple2p.zip</a>
    <span class="size">12 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Kg5Ex_xDBAr7O4GpX6CgTJ_GrwqUHoyx/view?usp=drivesdk" target="_blank">apple2gs.zip</a>
    <span class="size">166 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1V6ng3EjwweZe4eITFPXJ3AawWBFI2uES/view?usp=drivesdk" target="_blank">astrocdw.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1gxBkHBuvLSOOp0Y_bqjr8SFsIOdl-anT/view?usp=drivesdk" target="_blank">apple2jp.zip</a>
    <span class="size">9 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1nP7xhh3wA1A4EMG7CATgqjahJmkwOswh/view?usp=drivesdk" target="_blank">aquarius.zip</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qG7NkGkBqUeyv-0iFZWyEM8mRUf-dN1S/view?usp=drivesdk" target="_blank">apple3.zip</a>
    <span class="size">3 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qkjc3C5xD5EvkgqF98-qac7IBM34mkTL/view?usp=drivesdk" target="_blank">astrocde.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1HnSSKcdeQyao1qJFDZv3HZImYBZS41LD/view?usp=drivesdk" target="_blank">psx.zip</a>
    <span class="size">242 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1JWIopAjS11-Gno3mBQjq9BjQyfIbvq7o/view?usp=drivesdk" target="_blank">primoa64.zip</a>
    <span class="size">14 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1M490M0vt45cdTihBUCnJxemakt1xIebt/view?usp=drivesdk" target="_blank">pro128.zip</a>
    <span class="size">58 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1NJK_OitdI8JBlsyIrQNk10717YBqQ83Y/view?usp=drivesdk" target="_blank">primob64.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1zzmkYaR2_j6GPlt2T_JkB6su-0f1aX_H/view?usp=drivesdk" target="_blank">primoa48.zip</a>
    <span class="size">14 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1sTvMHA4plECVH7NyvYlyiKeX4_tVDNxU/view?usp=drivesdk" target="_blank">fsa1wx.zip</a>
    <span class="size">881 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1DM3HrF_T5L92NSOdSETyfHN3A-KvVvBw/view?usp=drivesdk" target="_blank">hb201.zip</a>
    <span class="size">35 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Jzin8sg3D-6F6jG_7461WooSJc8M6r-W/view?usp=drivesdk" target="_blank">gamegeaj.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SGG9cUa6N_D9Hfx2odMd4hgI2yM4YnzF/view?usp=drivesdk" target="_blank">geneve.zip</a>
    <span class="size">59 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1W4d-KAv5nWU1k-6j-G0-dcAyvSuH5ZTJ/view?usp=drivesdk" target="_blank">gamegear.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1oUu4S1g-yTxPyewWixg1l8uypmNdBRCo/view?usp=drivesdk" target="_blank">a500n.zip</a>
    <span class="size">871 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1D8LJ_E9-gO9JkrmMfClmAURAJtn-udp0/view?usp=drivesdk" target="_blank">nms8255.zip</a>
    <span class="size">50 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1EwOpbkG7yG925DA74Ya4yc8jIPtlb36q/view?usp=drivesdk" target="_blank">odyssey2.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1WsJiGq1xtbY_IAHniEfD6QRmU0tSZjTb/view?usp=drivesdk" target="_blank">nms8280.zip</a>
    <span class="size">50 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1_VRXGOpP9xUb9Ua-GpF2TpuIKwvajHwg/view?usp=drivesdk" target="_blank">orica.zip</a>
    <span class="size">16 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1m5ohWKuDWD5HHhzo2g6WGRV3-F3lIsUq/view?usp=drivesdk" target="_blank">oric1.zip</a>
    <span class="size">16 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1tphF8XvLPWhtvkXDQGKc1ksGI2JlSD3f/view?usp=drivesdk" target="_blank">p2000m.zip</a>
    <span class="size">17 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/17-3bODx027MHG7-EeAv4kA1a2AykO-jq/view?usp=drivesdk" target="_blank">hbf500p.zip</a>
    <span class="size">49 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1KrCY29euhXOqPI4y7jma4vkq5AFbM3xv/view?usp=drivesdk" target="_blank">hbf500.zip</a>
    <span class="size">117 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1413j1wRmpc9fq0HHzmKIWfR_HHW-_xNC/view?usp=drivesdk" target="_blank">cf3300.zip</a>
    <span class="size">38 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1F417tHGmPctOEHD2XmIkKpkM0AkAgzJ6/view?usp=drivesdk" target="_blank">coco2b.zip</a>
    <span class="size">21 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FuvjD1aPcjXWLGaa5r2ZMtqMQsTQ3PDP/view?usp=drivesdk" target="_blank">coco3.zip</a>
    <span class="size">28 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1LcI8Idyx1EOOV9saVP4K3p3LoetGfXo3/view?usp=drivesdk" target="_blank">coco.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1adNRZtPY7pU4DKGGtPK_bd2pIexkytdL/view?usp=drivesdk" target="_blank">cgenie.zip</a>
    <span class="size">21 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1i0SLYj157iLqfPB0O7nLCg-wBbzna5PC/view?usp=drivesdk" target="_blank">channelf.zip</a>
    <span class="size">3 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1x3oopOetEQCCHGGXEIB59EjyuzJxqSHN/view?usp=drivesdk" target="_blank">coco2.zip</a>
    <span class="size">21 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1dF4cSjDKXjXyMGgvDu-QmEex3robwuyS/view?usp=drivesdk" target="_blank">ti86.zip</a>
    <span class="size">669 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FWMLkOTjJqVQGFjd-1-iCD26vna1Wz9x/view?usp=drivesdk" target="_blank">ti85v60.zip</a>
    <span class="size">88 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Gp1X9z4e5wDi5X_odngqzgomzQ0hg_0n/view?usp=drivesdk" target="_blank">abc802.zip</a>
    <span class="size">31 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SU35R3lSr9sSCNHcYSjI6wEuMFKRg3qS/view?usp=drivesdk" target="_blank">ace100.zip</a>
    <span class="size">11 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1X4B6TdnqCATaVN3h4uOmdmN3JL_r6_nG/view?usp=drivesdk" target="_blank">abc806.zip</a>
    <span class="size">28 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1_Szf2J7GtIe1uLhUhGLr1tr6D73qB9SH/view?usp=drivesdk" target="_blank">adam.zip</a>
    <span class="size">29 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1_wj80TYHf8AH2Tl7QbVxUWgATWAOOdXp/view?usp=drivesdk" target="_blank">alfa.zip</a>
    <span class="size">10 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1f166r5n0iZPUXQkUbBTqMfR7EHH19l0J/view?usp=drivesdk" target="_blank">apfimag.zip</a>
    <span class="size">10 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1xL-XAb5IqGy1XMSryiGCFYYVQcES8lC3/view?usp=drivesdk" target="_blank">advision.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/11KBlT991Hporj0AhiczLf8L3BRn1YiET/view?usp=drivesdk" target="_blank">to8d.zip</a>
    <span class="size">67 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1QxtnSuQPy1TKm7S71YkIAUMGh5LIiTOE/view?usp=drivesdk" target="_blank">to9.zip</a>
    <span class="size">112 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1g0qHhJpDfVJtMBpTG1JKtIwqGwU11tCJ/view?usp=drivesdk" target="_blank">to8.zip</a>
    <span class="size">67 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1GfLgWZPFBwXlYHEgbcVweKkH695xb02k/view?usp=drivesdk" target="_blank">990189v.zip</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1QOHasngoX0L7lHGV3F1HE08RNzOzxxwn/view?usp=drivesdk" target="_blank">a400pal.zip</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1T7iO3PyqpAyRnh4lLd1FWNWYnTtIvLyP/view?usp=drivesdk" target="_blank">a400.zip</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1cf_U8Z3x8FD0zZq2LSCKqS3kyZQNV7-9/view?usp=drivesdk" target="_blank">a1000n.zip</a>
    <span class="size">5 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1lg7_jVBz1uRkIDd99jj3GLGTnlvvjh1U/view?usp=drivesdk" target="_blank">990189.zip</a>
    <span class="size">5 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1WOSN9wzim0AV9OIIhoslxwgKGAki_6tv/view?usp=drivesdk" target="_blank">ip224613.zip</a>
    <span class="size">288 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Hq6ZxMc-IiT6ASnGmmoPm8q8vWOuOcd5/view?usp=drivesdk" target="_blank">psxe22.zip</a>
    <span class="size">234 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1LbPdRX4fwNnni94BgNSiwKkFVgQP3Q3T/view?usp=drivesdk" target="_blank">nc100a.zip</a>
    <span class="size">158 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1VuEvmRlfddtfrqpfi2CCUe_3pQOrSPKg/view?usp=drivesdk" target="_blank">nms8220.zip</a>
    <span class="size">46 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1aRrESEowZIU58rvyoFohfz-cJBwM7wg5/view?usp=drivesdk" target="_blank">nms8220a.zip</a>
    <span class="size">46 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1GphqV81B_zgrKNFdesGM6izf5hpDcLfP/view?usp=drivesdk" target="_blank">bbcb.zip</a>
    <span class="size">98 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1_x_J4PUIgLiQEHB339vCAQ0HxqxZ4Q6M/view?usp=drivesdk" target="_blank">bbca.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1HL15ohvhfZhxiWhdurD_NAieAJsqpm3j/view?usp=drivesdk" target="_blank">bebox2.zip</a>
    <span class="size">58 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1U4qeYfVvCz-Fm1_L6cbZ-m5jqJruRrc2/view?usp=drivesdk" target="_blank">c128.zip</a>
    <span class="size">50 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1MhIlHyj8-6Klz07vRvHXSee2tTFLgNpw/view?usp=drivesdk" target="_blank">tk90x.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1S_aPmbUd3JgDtHVysvAVO546VOig7JZI/view?usp=drivesdk" target="_blank">tmc600a.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1WedoxykGgm8X7cpex3v-S-rd1csMLsrD/view?usp=drivesdk" target="_blank">to770.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1aFU3ifbO2x_CJBnU2nKkGND_ZlAuNxBy/view?usp=drivesdk" target="_blank">tk95.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1eQZ5elwy3rIVIj_PRPyDs5FTKYAK0Yiz/view?usp=drivesdk" target="_blank">ti99_8e.zip</a>
    <span class="size">56 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1i64wOkP3U5ozPYXQM9i8Mv0eAcj0KVli/view?usp=drivesdk" target="_blank">tmc600.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1u0R8E5uhfEpNjSxd3_D9zyU5PHegfm1R/view?usp=drivesdk" target="_blank">to7.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1wnEydKzcF9B7Bi56mxqMUKKmm6mJNhPg/view?usp=drivesdk" target="_blank">to770a.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1YQ7Oni225XMMl8JYtFWNuEYCt67JgDSQ/view?usp=drivesdk" target="_blank">psxa30.zip</a>
    <span class="size">236 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Oe-b4kKvITjO3IL4wm9icbhlkHCN0ZxP/view?usp=drivesdk" target="_blank">ti85v90.zip</a>
    <span class="size">89 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1DTCmLmwnijXCdtqleEzMa3XRmo4lw2Pq/view?usp=drivesdk" target="_blank">smsj21.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SbBJ9mIyECFMdaAQHK5tA_jRMm6o8m5i/view?usp=drivesdk" target="_blank">sms.zip</a>
    <span class="size">251 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1u9Q5kqCK7Eyegj8jnYJcAwy9kibN1hL-/view?usp=drivesdk" target="_blank">smsm3.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qlEIrBe1brKEbv6_fGtxlMc0ND-qpO-g/view?usp=drivesdk" target="_blank">ti85.zip</a>
    <span class="size">618 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1JTyuvmIsRLPLOOE0vvzyq3RZi0gc5HXl/view?usp=drivesdk" target="_blank">hbf900a.zip</a>
    <span class="size">121 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1lageZlIXmOXHqIwPt0BelpZ-rjeckV9y/view?usp=drivesdk" target="_blank">hbf9p.zip</a>
    <span class="size">62 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1wFhEhehx5ey8tjbQj6DZCflil9DBsBXC/view?usp=drivesdk" target="_blank">hbg900p.zip</a>
    <span class="size">59 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1wByg9pWCFITvpABCpCUiAsaRpZ3sOztK/view?usp=drivesdk" target="_blank">ip244415.zip</a>
    <span class="size">268 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1PfQ_rLbCa2UHd4nrCwWaw9Fnb2rIEWG-/view?usp=drivesdk" target="_blank">cpc400s.zip</a>
    <span class="size">116 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1a1zhUsSSJVc5Wcu4D-B5UdMmeFa4kGAd/view?usp=drivesdk" target="_blank">cpc464.zip</a>
    <span class="size">36 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1V250UlN4iyV94QA_NMjLxOnl2Xhv46-1/view?usp=drivesdk" target="_blank">vip.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1_kXWlA3hxY5VSAbrNGQBRimnvs06n0w2/view?usp=drivesdk" target="_blank">vic20i.zip</a>
    <span class="size">16 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1nafGd6sJgOF5_mcKJ0xgYEyYlSN09pOz/view?usp=drivesdk" target="_blank">vic20swe.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/17bjFiUzkzyMAe74EHX_t80Daj9AOXpUh/view?usp=drivesdk" target="_blank">vic64s.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1DdEh9XOB7xXl_xahMzwQMhTn5JLHvGlE/view?usp=drivesdk" target="_blank">vic20.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FuepA6wQ0uRrZ_yQNaJK8gdpgumwJnti/view?usp=drivesdk" target="_blank">fs5000.zip</a>
    <span class="size">143 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1kZsx1IhN7PjQ_jUT-sjAphdFs3B77n3G/view?usp=drivesdk" target="_blank">fs4700.zip</a>
    <span class="size">327 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/179Mr213gl3Bl6Gxrku0o-AjQh5qrbX_3/view?usp=drivesdk" target="_blank">pcmda.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FzIi65SnL5Die8O9Q7JYPbTzFSsxUIgX/view?usp=drivesdk" target="_blank">pet.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1gOOl3q7ULSCKmNGxwHySK0qHlJ07BkfV/view?usp=drivesdk" target="_blank">pc88srl.zip</a>
    <span class="size">139 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15mAhAfWbhsMAgMb9-zszFIrAcc44Pgo6/view?usp=drivesdk" target="_blank">xtvga.zip</a>
    <span class="size">27 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1dl6MtMQF-3yk3xRvmoZSx63py8DuTfIW/view?usp=drivesdk" target="_blank">vz200de.zip</a>
    <span class="size">0 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1rb-rRoYRFpejRxmLHq2B98Jq5WTrC_Iy/view?usp=drivesdk" target="_blank">z88.zip</a>
    <span class="size">94 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1wCRo17LT15WRO9OwB3N6jMi4yV1wzBzc/view?usp=drivesdk" target="_blank">vz300.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1fAoN4PcSbCDadfZKK3CP5TmbtH_KmSk5/view?usp=drivesdk" target="_blank">vg8235.zip</a>
    <span class="size">50 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qYDlvukBrz6WlRJ8aFBNofBxjiu6TAZ-/view?usp=drivesdk" target="_blank">vic1001.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1LL42fGjGH0ID0-Jw74TV5GDG9aofvUnf/view?usp=drivesdk" target="_blank">vectrex.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1q1TgFCMBdJL5BQOnrJlBPETMGzIOqUvx/view?usp=drivesdk" target="_blank">vc20.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1i5MDKntdDKQgK-kWLSz_IQcH3Yh7ZyPG/view?usp=drivesdk" target="_blank">to9p.zip</a>
    <span class="size">67 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1iHpgp21aDG4-2lVaVlF_yWJt3a_NYT21/view?usp=drivesdk" target="_blank">hbf900.zip</a>
    <span class="size">121 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1WrEMMjKzRqob2L-5sYfbcLLk8Z6bHtQ-/view?usp=drivesdk" target="_blank">cpc6128f.zip</a>
    <span class="size">43 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1cR3nnW4ncInpgL6pazGjRY55Mq6-KBYt/view?usp=drivesdk" target="_blank">cpc6128.zip</a>
    <span class="size">43 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/14kd4xESZ66vAYIvNRp2BgcePVmCkbJuY/view?usp=drivesdk" target="_blank">cf3000.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ZJByWx12EMbY2lP1sQB8D-SZhhqR7E_o/view?usp=drivesdk" target="_blank">cf2700.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1jPaQ1kSa4XlFq29iLismfCe5f9oD7wOH/view?usp=drivesdk" target="_blank">cf1200.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1wb82daC0RzAndxrTu48GHKzIEM2_yXTp/view?usp=drivesdk" target="_blank">cdtv.zip</a>
    <span class="size">314 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1y613_gC6cIvP-H7W_hq1qPxeHUXjr8Rt/view?usp=drivesdk" target="_blank">cf2000.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/18IvUa39kSvd-IvQMmWnwirF1YHYgdIe2/view?usp=drivesdk" target="_blank">spectrum.zip</a>
    <span class="size">12 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1LV3GUe1Goj9bYYRHLtl_yH9sUeWA7xCT/view?usp=drivesdk" target="_blank">superpet.zip</a>
    <span class="size">31 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1MhU9guvNSIyca-Bwccf9HBzIMwB67YWV/view?usp=drivesdk" target="_blank">svi318.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1O-KTrPlnzcTuOaNa0HVFbwlU-rU6WHuz/view?usp=drivesdk" target="_blank">studio2.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/14Nibd6zjZR7bVt6nv1XZrr6mR3a-Fcss/view?usp=drivesdk" target="_blank">specpls4.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1eyWJ0yu1Q8EvnKUO1qOyOixwlJwve2i8/view?usp=drivesdk" target="_blank">specpsch.zip</a>
    <span class="size">12 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1PUIScgi2ANXlYCjLgshWXjyEkVn2cTC6/view?usp=drivesdk" target="_blank">specpls3.zip</a>
    <span class="size">40 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Qwl48y60fPZoRTyiFhRODkEt47Nez7Em/view?usp=drivesdk" target="_blank">nms8250.zip</a>
    <span class="size">50 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1u0kQfK-3pU4TRHNIs43rpvWaTahZA5If/view?usp=drivesdk" target="_blank">nms8245.zip</a>
    <span class="size">50 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1y76EVNmbOSXaWvzPiL0xRcAsAUVk5YqR/view?usp=drivesdk" target="_blank">ql_mgg.zip</a>
    <span class="size">37 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1omCIZHm5NTX1Q0VTxmYy32FTRbf6E36B/view?usp=drivesdk" target="_blank">specpls2.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/11WJQRvLIC_nYcMOr2d8xxmoijpcC-Mw9/view?usp=drivesdk" target="_blank">ql_mgf.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15HHUZY5EZc5nOiahpTQGPYxnIaFdcUTN/view?usp=drivesdk" target="_blank">specimc.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1C7sjUlBA9BZTJFrzLqA_4X1i_gXUwjQE/view?usp=drivesdk" target="_blank">specp2fr.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1JzZJnUqKU530KhxObaXc84DWetB5E0Os/view?usp=drivesdk" target="_blank">speclec.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1OnauacFk9wbMzRWHskeLmweTQoM1TCjX/view?usp=drivesdk" target="_blank">specp3sp.zip</a>
    <span class="size">41 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1RSrwl0lOl_3ctio5BnPs2HThFgTE6LE7/view?usp=drivesdk" target="_blank">specp2sp.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SoCmZf3ksT-4wrdZqpxmCiMUGzNRVfG3/view?usp=drivesdk" target="_blank">specp3es.zip</a>
    <span class="size">43 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1eWCciwmEVEHHNOkKVkIZ92GsOh_cSG5r/view?usp=drivesdk" target="_blank">ql_mge.zip</a>
    <span class="size">37 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1YvS9KQCNA6JX8XDL1WJs8lFNQk69bRLc/view?usp=drivesdk" target="_blank">fs4500.zip</a>
    <span class="size">315 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ebdMQgndvFiqR7PizAfuOn4Tf-TuR6xP/view?usp=drivesdk" target="_blank">fs4000.zip</a>
    <span class="size">136 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1MBKT7KwoOTLHcogQyhE_xkaj09JP6lWK/view?usp=drivesdk" target="_blank">colecoa.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1V78YG-0-Vp9KEdAt7bJx-nwu_Lnev63T/view?usp=drivesdk" target="_blank">colecob.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1VlZmGissvwFRyrd8g5m9xTOpWJrp56PN/view?usp=drivesdk" target="_blank">coleco.zip</a>
    <span class="size">5 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1_uMeLmaRDYRjgQRCeTDL6WZPEP20RIpb/view?usp=drivesdk" target="_blank">coco3h.zip</a>
    <span class="size">28 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1i5mSCS3CqILlTp8W04So2yFwJ9WM9fPB/view?usp=drivesdk" target="_blank">compis.zip</a>
    <span class="size">45 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1iz4JnMiGHxkW8Rk3UGQODbJ6h_iKaaM5/view?usp=drivesdk" target="_blank">coco3p.zip</a>
    <span class="size">30 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1mEMQtGUrZRtR0wrxdoZLZsONw26l_QGG/view?usp=drivesdk" target="_blank">cocoe.zip</a>
    <span class="size">21 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1cYthmyGJYTG7BFoDtiiYZhDtfGPMJTz1/view?usp=drivesdk" target="_blank">phc35j.zip</a>
    <span class="size">131 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1igoStPvuF1iUNMANuZe2gB7MgKmOjbyu/view?usp=drivesdk" target="_blank">psxa22.zip</a>
    <span class="size">236 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/17nCMOFjbcg_bCpDe_RBr6ThLLEfDDeQI/view?usp=drivesdk" target="_blank">cbm80pal.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Ny-mA0xF6dw0JE2BaC7q1vGnNCuDHCMx/view?usp=drivesdk" target="_blank">cbm80swe.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1UnHVReRGVvuPxy3Ve9rrQoiM5lV_J7QV/view?usp=drivesdk" target="_blank">cbm80.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1aIOslr9MpcOoUGUA3xWUg06abz9ukLKC/view?usp=drivesdk" target="_blank">cbm720se.zip</a>
    <span class="size">20 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1x-2Ow78DWxLaJAAywsUTytz1Fgc1D_wU/view?usp=drivesdk" target="_blank">cbm80ger.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1DDHp_DGp0DSK8xi6j-3vk1L1teYu92qQ/view?usp=drivesdk" target="_blank">phc23.zip</a>
    <span class="size">38 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ha3N0yuZZoRvfooivToKYgusMCpdyC0O/view?usp=drivesdk" target="_blank">ip225015.zip</a>
    <span class="size">287 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1GPXb8olFqKg8hDbIPs_xkgCbn6-N97HC/view?usp=drivesdk" target="_blank">ti86grom.zip</a>
    <span class="size">3 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1iCG8QdHCDXpLq-tEtvR-b99CgMcH57mA/view?usp=drivesdk" target="_blank">ti86v13.zip</a>
    <span class="size">134 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1pfuicOHnMneKesKcJnQcHGmCAbf8r7wq/view?usp=drivesdk" target="_blank">atom.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/17zEp_JJXuSZWJftRHGQoiofes9ZYgX00/view?usp=drivesdk" target="_blank">las128ex.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FmIB81a5D6iH7ewduhAA7xtS-mSTIbPw/view?usp=drivesdk" target="_blank">laser210.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1RTPfA5_jS2IvrqrBWvfe_iagKHiYX81d/view?usp=drivesdk" target="_blank">laser200.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1YIna0TJcEw7EdbzVKK9Ds34jYkRjPz2s/view?usp=drivesdk" target="_blank">laser110.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1aLcy2IOqhjtk9cHFHHFqcLJCJSgYoz_Q/view?usp=drivesdk" target="_blank">laser128.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1jxQIklpGs-yD_V5dqX98eSelKj3zD9bT/view?usp=drivesdk" target="_blank">laser350.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1oRgHLdUBBjHtFbNDfVduhvuj2nm7x9VT/view?usp=drivesdk" target="_blank">las210de.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1vMyDMa3QY0Hf1ROQIpcIxMRyH78xDVTn/view?usp=drivesdk" target="_blank">laser310.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1mTw9X_TKPf9oBKdm28PReRBzaD6IiJwW/view?usp=drivesdk" target="_blank">at586.zip</a>
    <span class="size">92 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1IpFbie27005P_4AipAILVg3E6COPgowS/view?usp=drivesdk" target="_blank">kaypro.zip</a>
    <span class="size">5 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1K9oaZueOG8nmcwDWpfVLDU1a2AWLsM6F/view?usp=drivesdk" target="_blank">kccomp.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1U_qKTLU4bH6tLsKQgyC303L8GnNgcMC9/view?usp=drivesdk" target="_blank">las110de.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1cKzAr0H1ZmI01bPbp3U_0Q_oOYL_frdp/view?usp=drivesdk" target="_blank">kc85_4.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1q7P_RQ93LOElX3DoQlRR-hTMVi4NQ5Qr/view?usp=drivesdk" target="_blank">lambda.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qX4QkuEK2ENaeg88k63Vf7ega-GYbaHa/view?usp=drivesdk" target="_blank">jaguar.zip</a>
    <span class="size">47 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qZTQOGh1eLlF0ODTJ4dFp4wzWau6l7mZ/view?usp=drivesdk" target="_blank">kim1.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1s3_E-Ps79hGHIk9Xn56CBHKs3QOAPyMY/view?usp=drivesdk" target="_blank">jupiter.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1w0DWS74vJx5PmHdphmt5kiZ65p6EU-Z-/view?usp=drivesdk" target="_blank">kc85_3.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15-q5M-d0QAsGwt7iLsPlPb8KZpK0MhNm/view?usp=drivesdk" target="_blank">pc1401.zip</a>
    <span class="size">24 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/198owoBNY2fGm2NT9AyAG5MjH9W7jLbHF/view?usp=drivesdk" target="_blank">pc1402.zip</a>
    <span class="size">24 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1IPY1Ud1rhtiRKtHLAh5zQHV9rtHsRvIN/view?usp=drivesdk" target="_blank">pc1350.zip</a>
    <span class="size">31 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ImJDYNKyG0QW_5lsHqX8_D3C0ilGiqrg/view?usp=drivesdk" target="_blank">pc.zip</a>
    <span class="size">14 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1XqiMLDGc1V7dPmUrmUAFgIXzwcOznQq4/view?usp=drivesdk" target="_blank">pc1251.zip</a>
    <span class="size">19 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1zCk01LuyBboF3ndV4_8fL0wzZ1n0UiPJ/view?usp=drivesdk" target="_blank">p2000t.zip</a>
    <span class="size">17 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/158C1jz-1ejZb-mDR6o0eL_xZlH0hWeho/view?usp=drivesdk" target="_blank">mbee.zip</a>
    <span class="size">20 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/16S-9Y7RMb5OfnrDMSvAjgLPaXhV5i-RS/view?usp=drivesdk" target="_blank">mk2.zip</a>
    <span class="size">4 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ETzzgJycZdwyBuDX8_Ilt-jVXCIzgzmM/view?usp=drivesdk" target="_blank">mato.zip</a>
    <span class="size">12 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1G4xYq5JEB-t___81Fh6TzBGWBFE0cSRh/view?usp=drivesdk" target="_blank">mbeepc.zip</a>
    <span class="size">21 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1IwwtKIt74PH_yZ4sszpNevKgnsqS_oHJ/view?usp=drivesdk" target="_blank">mbeepc85.zip</a>
    <span class="size">20 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1KK83bLcFQqSUXEUN7uJ9MUCSG8pwOHkF/view?usp=drivesdk" target="_blank">matoh.zip</a>
    <span class="size">11 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SJAAz_iHwbIYDRdqOY6CiNOhaHSLL7Na/view?usp=drivesdk" target="_blank">MESS BIOS.txt</a>
    <span class="size">17 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1aVwsrB9whe05DOtTF90qT848WPCbl_GX/view?usp=drivesdk" target="_blank">microtan.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1mdE-C3KluT4X5u-Lku8onoPXqZ1AQdps/view?usp=drivesdk" target="_blank">mbee56.zip</a>
    <span class="size">5 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1wa_1YlMWKGtYoGfC-8hLFLfJP0LaxURl/view?usp=drivesdk" target="_blank">mc10.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1NtOxKw-aAOFEmyo4co2FWKJtCUoSVqc1/view?usp=drivesdk" target="_blank">pc20.zip</a>
    <span class="size">21 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1a1UuqhEX8DYSksN1GbID37TiXCQ9fqSs/view?usp=drivesdk" target="_blank">pc200.zip</a>
    <span class="size">21 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/133-ZZSLTXcpmXblixmaLV70jmqI0V6du/view?usp=drivesdk" target="_blank">pc1512v2.zip</a>
    <span class="size">20 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1JwOReYxL6yWkTihGffN9PXxXK3rPBgBU/view?usp=drivesdk" target="_blank">pc88srh.zip</a>
    <span class="size">139 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1TZZbSmsZcEbjeovzWXbHSK9w4TOYfiU6/view?usp=drivesdk" target="_blank">pc1640.zip</a>
    <span class="size">28 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1dVyLMqohtzDKYQ-IX_mDk2lQ6pozgxjk/view?usp=drivesdk" target="_blank">pc8300.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/11oi_ydsXozbe1OoRo1JSzatqNUJmAm3A/view?usp=drivesdk" target="_blank">cbm30b.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Bq0btJHaAnW2sw1O46C1AWfU1WSm9-Gz/view?usp=drivesdk" target="_blank">c65ger.zip</a>
    <span class="size">67 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1XOEKc5-dGgok2dxi7mqX_YULF4ib4L0f/view?usp=drivesdk" target="_blank">cbm30.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1c_fGpuMttPIJr440lH8tctwcRdKxUKmf/view?usp=drivesdk" target="_blank">cbm4064.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1f8VALCt908834hIn1DX6pmmk6nNKO9PH/view?usp=drivesdk" target="_blank">cbm40.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1CcR8nloELRpR69ABmr_Fk74_6OuqzoIH/view?usp=drivesdk" target="_blank">c128fra.zip</a>
    <span class="size">52 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1osD0VkC6jKVNt7DJBEWJuN5v8mWECPwt/view?usp=drivesdk" target="_blank">c128ger.zip</a>
    <span class="size">50 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/13uxS8kD5pEDjeuCbpXGGDKCPfmV7ey8Q/view?usp=drivesdk" target="_blank">ibmpc.zip</a>
    <span class="size">40 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/103W9ZS-3VYrMWbMnadagJUddjudhIocL/view?usp=drivesdk" target="_blank">fsa1fx.zip</a>
    <span class="size">163 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/133dHB9ICZH8hzoyqZVLev1e-cqUNmW2F/view?usp=drivesdk" target="_blank">ti990_10.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/19QOPLVuQs81U6ben__bqECQP86PYUAnW/view?usp=drivesdk" target="_blank">ti990_4.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Xqst85H8Zz_tQFibGOcBowUvjrsYoAQ3/view?usp=drivesdk" target="_blank">ti99_4a.zip</a>
    <span class="size">81 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1b7bZ8MansDuh1CzQK5qJMt9oYWZHZwTL/view?usp=drivesdk" target="_blank">ti99_4.zip</a>
    <span class="size">76 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1zqpsiaT63FrAHi02ERVl-V2mYLxE0_71/view?usp=drivesdk" target="_blank">ti86v16.zip</a>
    <span class="size">134 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1t3sa6-wpf76DyoAjbS3rrSXqcCB6UeBU/view?usp=drivesdk" target="_blank">ibmat.zip</a>
    <span class="size">53 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1cMWoLUnxcJBs3qbt-IqXrzjQE1sNjq0r/view?usp=drivesdk" target="_blank">uk2086.zip</a>
    <span class="size">17 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1wb4US9td7Ta7pDeOdJp1785346dSwWxN/view?usp=drivesdk" target="_blank">hotbit12.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1sc0wrPAyKt2XP-0ml2shml4zvxcvWjjf/view?usp=drivesdk" target="_blank">psxj30.zip</a>
    <span class="size">239 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1MYXtPieiIQxT4ZP0YeeXzgeX3f1YVSnq/view?usp=drivesdk" target="_blank">nc100.zip</a>
    <span class="size">157 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1DfMTLVJWLecVKWmD6uyYO1_F4wP9T9YY/view?usp=drivesdk" target="_blank">fsa1mk2.zip</a>
    <span class="size">71 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/18ziw1MajqARUYfNOYedonD3jkNTIKG0q/view?usp=drivesdk" target="_blank">trs80.zip</a>
    <span class="size">4 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1M7cUwY9cyxQc11-PvyXM5K-46kecaxCW/view?usp=drivesdk" target="_blank">ts1000.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1eOcpK9HiUsuQ_RKIb81FMfYqjKxlLrKy/view?usp=drivesdk" target="_blank">trs80l2.zip</a>
    <span class="size">11 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1g6r1K0lK6J4yfU3V4yrBgwr-_bWFdZtU/view?usp=drivesdk" target="_blank">trs80l2a.zip</a>
    <span class="size">11 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1hBlRrnfaa_duj99oloh9DfekYdFmwXf4/view?usp=drivesdk" target="_blank">tutor.zip</a>
    <span class="size">33 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1j_zfYLvYAox-kHCfbVMz1tuiHRKACaFX/view?usp=drivesdk" target="_blank">ts2068.zip</a>
    <span class="size">17 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1AodFVRMr1SMLUUUl7iaHsh47fjPzI6lj/view?usp=drivesdk" target="_blank">t9000.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1hzPPLCI3MvJnEjKG9lo1Cck9AJIijLev/view?usp=drivesdk" target="_blank">t1000hx.zip</a>
    <span class="size">94 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ir_uZnrlsVvXBndVkCBy13SW_LRHRCVg/view?usp=drivesdk" target="_blank">tanodr64.zip</a>
    <span class="size">34 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1EYfyNNKHUY0GZ89MloSg8B6B0nOScktS/view?usp=drivesdk" target="_blank">uk101.zip</a>
    <span class="size">10 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Jbyf4HRgcP7rzoMtXRhGia945o7vai5Y/view?usp=drivesdk" target="_blank">hotbit11.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1DQVKB_S6rU9Ceh18HZso161NjndVB7cj/view?usp=drivesdk" target="_blank">mtx512.zip</a>
    <span class="size">20 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FL0frSDln9Kg9daJve44mzrKGJoVzIr0/view?usp=drivesdk" target="_blank">nascom2a.zip</a>
    <span class="size">10 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FrOXIf-Oh8X7XOlQlm2EIFgzsiOB3mKq/view?usp=drivesdk" target="_blank">nascom2.zip</a>
    <span class="size">10 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SPHdv-drkYYqFlKzkzWvC7V1AjgmtWRl/view?usp=drivesdk" target="_blank">mz700j.zip</a>
    <span class="size">5 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Wp7VgQPwy3qMAEbydh5SaCLb4oTzic3n/view?usp=drivesdk" target="_blank">nascom1a.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1iITSHivavWIUeQD8wlVg8XGlEXino-uS/view?usp=drivesdk" target="_blank">nascom1.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1oeoNnDPAu-SvCLH6QP30n_SS1pGrG-8H/view?usp=drivesdk" target="_blank">mz700.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1y3n7olAMcuDCluknBgo7uiA9Pl0US2gs/view?usp=drivesdk" target="_blank">nascom1b.zip</a>
    <span class="size">3 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1gCxaSnQBtEixvjMRh8mSejZffyK9fkW2/view?usp=drivesdk" target="_blank">msx2p.zip</a>
    <span class="size">167 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1M43C_4oJVMGHycpm0s897J7yUt5-fW-g/view?usp=drivesdk" target="_blank">tx8000.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/18K9Ftb3BKrrPJm7kh_30UjhkTlC2NexE/view?usp=drivesdk" target="_blank">laser700.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1C7e0Ujqs2jKE_Zrpx1VO7oLbPmjKMmrn/view?usp=drivesdk" target="_blank">lviv.zip</a>
    <span class="size">37 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1CBSPNsQdEYIlXiHgvfrhr8phOwHhblGK/view?usp=drivesdk" target="_blank">lisa210.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1W0MY9oDSrG-kqZeQrEW434xM3inh3SFB/view?usp=drivesdk" target="_blank">lnw80.zip</a>
    <span class="size">12 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1dCQMHsai60TnpWArqIFaB55REwuSaU5P/view?usp=drivesdk" target="_blank">laser500.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1hbP7noc_DnIHiIsE8FeQd-Nc9OLaZ2ug/view?usp=drivesdk" target="_blank">lisa2.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1QL2ssHkdF9pIhJUbOtSjcnGeitpL9Mb6/view?usp=drivesdk" target="_blank">ti99_4ae.zip</a>
    <span class="size">81 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1h5tD2iz0wVBS7urEmiTvwHjC1xHmzJG8/view?usp=drivesdk" target="_blank">ti99_4e.zip</a>
    <span class="size">76 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/10Q-x9c4TePLeaz60emc3LpGWx-pwCHE3/view?usp=drivesdk" target="_blank">c65.zip</a>
    <span class="size">74 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1QXIJVIz3XcJMouNOt6UHNB90T_Dy93m8/view?usp=drivesdk" target="_blank">c64gs.zip</a>
    <span class="size">14 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1o_RbU-ksEujKzHVL1W_fp2vb3Wet-z-W/view?usp=drivesdk" target="_blank">c64pal.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1paI-mjsI5W835ICesV0JckLhx-DMRYtc/view?usp=drivesdk" target="_blank">c65a.zip</a>
    <span class="size">65 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ulDISHF9A_nQh8LMdWRwGTbEHHF_TEyI/view?usp=drivesdk" target="_blank">psxj22.zip</a>
    <span class="size">239 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/18jNvzzpNf0EJK_CdoQ7qOOntifxPMg_A/view?usp=drivesdk" target="_blank">hb201p.zip</a>
    <span class="size">35 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1BAlSnCLBA65DvZ05z1Lwqx4Yz16cwRHP/view?usp=drivesdk" target="_blank">hb75d.zip</a>
    <span class="size">35 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1CWnp9J2bA3_Y2F-D6S6M98yNQ-h6gAqh/view?usp=drivesdk" target="_blank">hb501p.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ph9_6haWZSLmqQpV-UgKHvgsYWkou-tj/view?usp=drivesdk" target="_blank">hb75p.zip</a>
    <span class="size">35 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1G5w4O55zAe8orrbP648cqZJsmxA37izF/view?usp=drivesdk" target="_blank">macse.zip</a>
    <span class="size">174 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qGZXW0VT5MGHwmM41DPILHDuEcJD8p0Y/view?usp=drivesdk" target="_blank">macplus.zip</a>
    <span class="size">91 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/16JzifhfpIUq3_x6-MaWyIx8RhBrcwRDy/view?usp=drivesdk" target="_blank">apple2g1.zip</a>
    <span class="size">88 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1M32NIPnJyB8WVEH0AUUthdsSyjBAZl2-/view?usp=drivesdk" target="_blank">c128ita.zip</a>
    <span class="size">52 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SK5ehFFVlYy4SiK58WgEYGxX5RG2FUBV/view?usp=drivesdk" target="_blank">c128swe.zip</a>
    <span class="size">48 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1d0F0dtqLxvzf7HLEKdYpSTBrtvkVPRy8/view?usp=drivesdk" target="_blank">phc70fd2.zip</a>
    <span class="size">228 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1kftr6av7NVvb_oQNtsyM30nrG6LJNmXl/view?usp=drivesdk" target="_blank">plus4.zip</a>
    <span class="size">47 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1J9UuJjJJp3eYWkLvmUa7yVVPn_7ESXVl/view?usp=drivesdk" target="_blank">ti85v80.zip</a>
    <span class="size">88 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1gjjqhUHfRYVlbFEP_t_VxCXaaA0BViZh/view?usp=drivesdk" target="_blank">bbcbp.zip</a>
    <span class="size">38 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/13_yTh1JvkzI5L5w65Di4grUFqRMTpNJz/view?usp=drivesdk" target="_blank">phc70fd.zip</a>
    <span class="size">163 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1-HYobYqvgryWxLCvQ95xVEq6Wnixp0jc/view?usp=drivesdk" target="_blank">hbf700s.zip</a>
    <span class="size">50 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/11bOH-_Y-Kf0av9U7UwOHZ0NC811y47kG/view?usp=drivesdk" target="_blank">msx2.zip</a>
    <span class="size">74 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1IhlEJbeIxc1GE0xm_IhH-QOxBag3fyJ7/view?usp=drivesdk" target="_blank">electron.zip</a>
    <span class="size">24 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1gTAJfSbziNuBiDVMHdLf0_uOiSbr_c8P/view?usp=drivesdk" target="_blank">ep128.zip</a>
    <span class="size">53 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1j-wAtounjFAMNOFTy-18maDg4QMMdpgE/view?usp=drivesdk" target="_blank">ep128a.zip</a>
    <span class="size">53 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1nPPmeOLC08zuZDZpPDbKVzUiN1hvwPcf/view?usp=drivesdk" target="_blank">ti86v14.zip</a>
    <span class="size">134 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Y4aT3y6D7ULw4NoEKVj4DswPG7gLVpb-/view?usp=drivesdk" target="_blank">hbf1.zip</a>
    <span class="size">70 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SD3bFjlW-8g9t2H642O8oXmdTmu2C3k0/view?usp=drivesdk" target="_blank">pc1512.zip</a>
    <span class="size">19 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1e2ZkIP7WyTaH82SE9PQZLQuRrmDmPFqI/view?usp=drivesdk" target="_blank">pc1403.zip</a>
    <span class="size">46 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1nuoGSbWT0n4AgEu9ulW4_eGpLzpQynBi/view?usp=drivesdk" target="_blank">pc1403h.zip</a>
    <span class="size">46 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1kvW_hark5RnaaAzAfs-oEcIQhiH0RGuh/view?usp=drivesdk" target="_blank">cpc400.zip</a>
    <span class="size">116 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1TkHgHBZojlwdcfnOCC5i9G3HqUThbfhl/view?usp=drivesdk" target="_blank">cpc300.zip</a>
    <span class="size">60 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1rTlT9c6oarKxzhxlPkrgAspUki-c6fQX/view?usp=drivesdk" target="_blank">ti99_4ev.zip</a>
    <span class="size">98 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1AimTsKqkJb1IUa8K653ASEXxXruJDS3s/view?usp=drivesdk" target="_blank">hbf700d.zip</a>
    <span class="size">49 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Xg1XPNanRz8chjgBqnFhql_w2PWXRusp/view?usp=drivesdk" target="_blank">hbf700p.zip</a>
    <span class="size">49 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1TuTCsLIfh8wJS9pfKWDSv1ZM2DuE6-Yg/view?usp=drivesdk" target="_blank">at386.zip</a>
    <span class="size">36 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1UNUBHGWzXaTIH5Qj8xsn2eHie_eejryN/view?usp=drivesdk" target="_blank">at486.zip</a>
    <span class="size">44 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/18IBBIunUOjMxtHXTsNVY-MzrJd9toMvC/view?usp=drivesdk" target="_blank">lynx.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1bONqyIBG4T8u5irasWX3cTeSXhE_HrvD/view?usp=drivesdk" target="_blank">mac512ke.zip</a>
    <span class="size">91 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1rNVTWk9BwfC5if8V9nVj3d4yWzjyCaza/view?usp=drivesdk" target="_blank">lynxa.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1wof_EdTpD7edFUABNIMevoAqFBzYWiPL/view?usp=drivesdk" target="_blank">lynx2.zip</a>
    <span class="size">0 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1HwM-3GekkruGoz1O_wqIMA57vAPcBnnB/view?usp=drivesdk" target="_blank">apple2e.zip</a>
    <span class="size">17 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Svb3w-hMiRxNnXt_Ip9s6V6ZbJgEOjPs/view?usp=drivesdk" target="_blank">apple2cp.zip</a>
    <span class="size">27 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1VJuAU9jM_2cg8unkHePQCr4A3MsuBcmy/view?usp=drivesdk" target="_blank">apple2ee.zip</a>
    <span class="size">18 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1fjKCdnhcpmbqbhiN7qmVzqX2af4p83vE/view?usp=drivesdk" target="_blank">apple2ep.zip</a>
    <span class="size">18 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1asYzh7BARu1fqgFndh9toIYuCdSERxjc/view?usp=drivesdk" target="_blank">svi328a.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1bqrMBRggT7o7yXHYp7gWHNpJgQul6M6n/view?usp=drivesdk" target="_blank">sys80.zip</a>
    <span class="size">11 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1yo5jjcJi-Qr4E0RGK_l62_15HNXpkMaP/view?usp=drivesdk" target="_blank">svi738.zip</a>
    <span class="size">41 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1METjmR1uutl4dsfXaVI3C84bJApLbuJJ/view?usp=drivesdk" target="_blank">ti81.zip</a>
    <span class="size">24 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1o6glcyw6P70gruyGjgRUmVf5LGW2hUXh/view?usp=drivesdk" target="_blank">telstrat.zip</a>
    <span class="size">42 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1wjo5ltzinfN-jA1aL4iYU_o2vGt8TZoR/view?usp=drivesdk" target="_blank">tc2048.zip</a>
    <span class="size">12 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qCfSp8Hf70IZXQX_B7n0E-KqHSdp_R4p/view?usp=drivesdk" target="_blank">svi328.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1LBBKieuvPXbbo3iBzPEGQKptENwTaVf6/view?usp=drivesdk" target="_blank">c65e.zip</a>
    <span class="size">68 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1jEH0xvkRqsWtZUYN3GMKU3OKIQIZs5e6/view?usp=drivesdk" target="_blank">c65d.zip</a>
    <span class="size">67 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15A73XsXYpxs41fqh99mtXVpwmBhiq9ff/view?usp=drivesdk" target="_blank">apple2c0.zip</a>
    <span class="size">22 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1A03Pyq2mkH4vQcsiUTLXGlcc9XrNZudG/view?usp=drivesdk" target="_blank">apple2c3.zip</a>
    <span class="size">23 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1f76yIiUU_oFoI8o6vRYVCBi3Ko7F8Ys1/view?usp=drivesdk" target="_blank">apple2c4.zip</a>
    <span class="size">23 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1OF9FBOir1N26u-QNQ2sPqVJScSuS5t3V/view?usp=drivesdk" target="_blank">zx81a.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Tw2hK3XcaXKoeNTo_G9wTaQFtL8r_udN/view?usp=drivesdk" target="_blank">zx80.zip</a>
    <span class="size">3 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1balmxSN7TYxQEBUczYLmPGmZTsrNKywK/view?usp=drivesdk" target="_blank">zx81b.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1lzKop_MiEtDyVNltHYdULISaxJZ6CWEE/view?usp=drivesdk" target="_blank">zx81.zip</a>
    <span class="size">7 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Xb8juzWFKojR-KAkdHI9odtaZ4wXe1L0/view?usp=drivesdk" target="_blank">hbf1xdm2.zip</a>
    <span class="size">50 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/10ILkLPGEyN1I7C-wrmIpc6Tj2D9NotJ9/view?usp=drivesdk" target="_blank">apple2c.zip</a>
    <span class="size">18 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Ccek-XZdZx5w4Jm1zSO9Byz5SQg94VgX/view?usp=drivesdk" target="_blank">apple2.zip</a>
    <span class="size">10 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ghYGB1FbwjFKf6716HPt_ygysDspdA5f/view?usp=drivesdk" target="_blank">apfm1000.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1oAHWA4o1_zr2XBFjMGVoEBJqi_Nwlf2U/view?usp=drivesdk" target="_blank">apple1.zip</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1owU6czj1HbeAbdfoEpSHmNCMV-mD6Ydl/view?usp=drivesdk" target="_blank">fellow.zip</a>
    <span class="size">13 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1rja3lktMnQd0wnN42RimbKveEw80CqlK/view?usp=drivesdk" target="_blank">fs1300.zip</a>
    <span class="size">26 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1w--wYdhHNT4mzpFsvNUAvvO-2fjHdDJI/view?usp=drivesdk" target="_blank">fnvision.zip</a>
    <span class="size">2 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1I2bUGJQ2zfNXTlQNfEYzVFheEHGdhvfK/view?usp=drivesdk" target="_blank">coupe.zip</a>
    <span class="size">27 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1IEqm1f0VRNWJbHFy8F3vLjx-snjMiiQb/view?usp=drivesdk" target="_blank">cp400.zip</a>
    <span class="size">21 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1uIN1iAkjE6tQCjrfxYbdWwaORCtPqW3K/view?usp=drivesdk" target="_blank">concept.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SdJTa1VIivecGoHOuurnIsdCWEgLVgyN/view?usp=drivesdk" target="_blank">msx.zip</a>
    <span class="size">25 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1bnWTIU8NhqBhOrJcnSUk63JGd-oyHRaH/view?usp=drivesdk" target="_blank">mpf1.zip</a>
    <span class="size">3 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1tgYNVng2PalIwG0GVBe_VLa2p9Po_Dad/view?usp=drivesdk" target="_blank">mpf1b.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1iPgCauoKMQ9clbMJGt7qEaCkt57UEnLH/view?usp=drivesdk" target="_blank">macxl.zip</a>
    <span class="size">15 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/10F_IL5ajjEwmTHEKkh4YI1K7h2Ki5qnR/view?usp=drivesdk" target="_blank">specpl2a.zip</a>
    <span class="size">41 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1424dqgXtNDJM7pTEegkLKnrZanJUPSQK/view?usp=drivesdk" target="_blank">specpl3e.zip</a>
    <span class="size">43 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1eiowT0R6QE7boSyKaeuE94OQ89R-iYXN/view?usp=drivesdk" target="_blank">c65c.zip</a>
    <span class="size">66 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ksQAGEdWcmyk1eFP9ZB_dM5xioRvqGfC/view?usp=drivesdk" target="_blank">ti99_8.zip</a>
    <span class="size">56 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1CrVVENrsfysDiTaCBXeZRbHXojIFxe68/view?usp=drivesdk" target="_blank">sb2m600b.zip</a>
    <span class="size">10 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15GdGdpZW9EbNPcxEFdb8eiYcVRBmZ8km/view?usp=drivesdk" target="_blank">dragon64.zip</a>
    <span class="size">34 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15_Tu2XVImPbYE-gpUvMCslsVk2eW2xWG/view?usp=drivesdk" target="_blank">einstein.zip</a>
    <span class="size">6 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1A9-GexGUj7b93JsDt47CxrigJ9faPcmE/view?usp=drivesdk" target="_blank">dpc200.zip</a>
    <span class="size">30 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ii1wRlGLUc5CI35uhktvnhJEsxCofOMx/view?usp=drivesdk" target="_blank">dragon32.zip</a>
    <span class="size">20 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder21')">📁 /Mac Quadra BIOS</div>
<ul id="folder21" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1ebPAwliybbFDQ6IF6qSAi2olSXjOdKWW/view?usp=drivesdk" target="_blank">mac.rom</a>
    <span class="size">1024 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder22')">📁 /Magnavox Odyssey 2 BIOS</div>
<ul id="folder22" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1XYlDFqoqucDVnIbSktPuITtt8BAlVzbX/view?usp=drivesdk" target="_blank">[BIOS] Philips C52 (France).bin</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ff-tUfAxuo2mKYu4boKO3NgH1sGqZQnB/view?usp=drivesdk" target="_blank">[BIOS] Magnavox Odyssey2 (USA, Europe).bin</a>
    <span class="size">1 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder23')">📁 /Memotech MTX512 BIOS</div>
<ul id="folder23" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1RsFvKtug74GHPeBU8H6x453KcEbuvyhN/view?usp=drivesdk" target="_blank">assemrom</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1V-7ksfu9J_plH6gB57PYIE7pbatA6-sR/view?usp=drivesdk" target="_blank">osrom</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1u8Z4Pd37chp74P94telv2k05kgLa72td/view?usp=drivesdk" target="_blank">basicrom</a>
    <span class="size">8 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder24')">📁 /Microsoft XBox BIOS</div>
<ul id="folder24" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1OH8vXcUr_MYAnlr2BoZ5ZuJfvciE7bR_/view?usp=drivesdk" target="_blank">xbox.bin</a>
    <span class="size">1024 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder25')">📁 /NDS Firmware BIOS</div>
<ul id="folder25" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1iRDzOFkKmEIJSfOIztNWYENDaDTTsALH/view?usp=drivesdk" target="_blank">firmware.bin</a>
    <span class="size">256 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1KBjllFvHjKEFl9uKrVlkdiQdSG3xUfac/view?usp=drivesdk" target="_blank">key.cfg</a>
    <span class="size">0 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1DEXqc7hTC_UiVt73IUV9w0-eNhm0nae4/view?usp=drivesdk" target="_blank">biosnds9.rom</a>
    <span class="size">4 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1uZgDSB9D7hLXvQgNHmunu466yUyqMID3/view?usp=drivesdk" target="_blank">biosnds7.rom</a>
    <span class="size">16 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/18NzwtTATzkcFxcz3ezj8tExaFxzJ07u7/view?usp=drivesdk" target="_blank">BIOSGBA.ROM</a>
    <span class="size">16 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder26')">📁 /NES to SNES adapter BIOS</div>
<ul id="folder26" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1HsLIOVpSTZpXqaE3mllOZ-73WsXovea1/view?usp=drivesdk" target="_blank">Tri-Star Dos - NES-SNES (Adaptor Bios).smc</a>
    <span class="size">513 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder27')">📁 /NeoGeo BIOS</div>
<ul id="folder27" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1ZuCghLg5ai3p5hVyQ5CbI_wx1LzVKkvm/view?usp=drivesdk" target="_blank">ng-sm1.rom</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FDZ0W8SR-v1WtoSFT1_Bv_shlRbDn4gB/view?usp=drivesdk" target="_blank">ng-sfix.rom</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1pxWMD6F00f4MXsB0C1RRFTtWqoi_VAco/view?usp=drivesdk" target="_blank">ng-lo.rom</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SO6o7XNEUs50N7obHBJnjxElHm78W1DP/view?usp=drivesdk" target="_blank">neo-geo.rom</a>
    <span class="size">128 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder28')">📁 /Nintendo Disk System Boot Sector BIOS</div>
<ul id="folder28" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1jEhCZAmz0O8A21W6Hwb3PUZYdz4OqwH7/view?usp=drivesdk" target="_blank">DISKSYS.ROM</a>
    <span class="size">8 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder29')">📁 /Nintendo Gamecube BIOS/EUR</div>
<ul id="folder29" class="files">
  <li>
    <a href="https://drive.google.com/file/d/194La7RP2Ftowq3GCDQXhSCuMSIICZb9u/view?usp=drivesdk" target="_blank">IPL.bin</a>
    <span class="size">2048 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder30')">📁 /Nintendo Gamecube BIOS/JAP</div>
<ul id="folder30" class="files">
  <li>
    <a href="https://drive.google.com/file/d/10oVRwCoo5o6h_scAyJGXPGNAZoXLuKk6/view?usp=drivesdk" target="_blank">IPL.bin</a>
    <span class="size">2048 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder31')">📁 /Nintendo Gamecube BIOS/USA</div>
<ul id="folder31" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1A4HOf4kLjLvveX262RQnBGzEBBxYlFy-/view?usp=drivesdk" target="_blank">IPL.bin</a>
    <span class="size">2048 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder32')">📁 /PCE CD-ROM System BIOS</div>
<ul id="folder32" class="files">
  <li>
    <a href="https://drive.google.com/file/d/18X4cj8VwTRKLD5cJR1VUoX3Uo3mpvdu8/view?usp=drivesdk" target="_blank">CD-ROM System V2.10.pce</a>
    <span class="size">257 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1g2L-rgd9q6ZJ8pRmtS9yP36T9d2AFoHO/view?usp=drivesdk" target="_blank">CD-ROM System V3.00.pce</a>
    <span class="size">257 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/10u9cOqRg5EFhsnds-rMN9gYReKnhpUmE/view?usp=drivesdk" target="_blank">CD-ROM System V1.00.pce</a>
    <span class="size">257 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1bBcCdjCd2u9bQIGwUugduoPCuL-DN-ks/view?usp=drivesdk" target="_blank">CD-ROM System V2.00.pce</a>
    <span class="size">257 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1qqZ2s9vYCkOXij7rkMHrkdX8rNlUf-tp/view?usp=drivesdk" target="_blank">CD-ROM System V2.01.pce</a>
    <span class="size">256 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ok3nQKC98eF5Y2KfxOcRpC9nAb65IORe/view?usp=drivesdk" target="_blank">CD-ROM System V3.01.pce</a>
    <span class="size">256 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder33')">📁 /PCE System Card 1 BIOS</div>
<ul id="folder33" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1QEgHSPY5SlLTmQbFRwXXm4vkv5zsMK9x/view?usp=drivesdk" target="_blank">SYSCARD1.PCE</a>
    <span class="size">257 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder34')">📁 /PCE System Card 2 BIOS</div>
<ul id="folder34" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1WrR_ztVCdyPCqjUmQpjQF9TDw7Bx0W8H/view?usp=drivesdk" target="_blank">syscard2.pce</a>
    <span class="size">256 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder35')">📁 /PS One BIOS</div>
<ul id="folder35" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1GucfBytxaTju-RfDc5Xner0pupmwVywA/view?usp=drivesdk" target="_blank">PSO - DTLH3002.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1clHf387WtEWrzCbIkzOEpACAw2qSN-jD/view?usp=drivesdk" target="_blank">PSO - DTLH3000.BIN</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder36')">📁 /PS2 BIOS</div>
<ul id="folder36" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1qYBrWMwLGXforSHiAOSx-0E8FF6VN0Td/view?usp=drivesdk" target="_blank">scph10000.NVM</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1aN5hl_hYitEb2BdpULz16ziJbvm4682i/view?usp=drivesdk" target="_blank">scph10000.MEC</a>
    <span class="size">0 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1QddSwBSjoqazZxD3QRawfJg5v4naMe2z/view?usp=drivesdk" target="_blank">scph10000.bin</a>
    <span class="size">4096 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder37')">📁 /PSX 41a BIOS</div>
<ul id="folder37" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1fvfOvKSi-j8hRGqdGnTpYcloNbE95EX5/view?usp=drivesdk" target="_blank">bios41A.bin</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder38')">📁 /PSX BIOS</div>
<ul id="folder38" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1FoA2kUkXJKd7oVL9GOEFRa7fTedoBZTa/view?usp=drivesdk" target="_blank">PSX - SCPH101.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1TimmoT_bKQKAcZEARI6BeYil4dT6wXX_/view?usp=drivesdk" target="_blank">PSX - SCPH5500.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1J04Jsnhu-zSfyeNTM2WmbBqozmqUqPVX/view?usp=drivesdk" target="_blank">PSX - SCPH1002.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1w7ccDEUkS6MxKQftwDQkzgOfFtblX20E/view?usp=drivesdk" target="_blank">PSX - SCPH7001.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1P8rCZZ8fIlsj10uNxoYcwvIMT_X94XoH/view?usp=drivesdk" target="_blank">PSX - SCPH5000.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1NIB4DIPLxGC-8VMZaz0-0Y1ETXngUugK/view?usp=drivesdk" target="_blank">PSX - SCPH1001.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1K7N0-eJxZ18qSa7Qn5z9HnMgGODK3ngu/view?usp=drivesdk" target="_blank">PSX - BIOS41A.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1r7tRH0geQ26T4KyExlfItrI1t2nPUjfX/view?usp=drivesdk" target="_blank">PSX - SCPH1000.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Sh6eT8NRTOWT0Wi7SOkuFRXwyQDVC6Ms/view?usp=drivesdk" target="_blank">PSX - SCPH3000.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/197HOOXr8xCEA84CD3jURUN3yZxPkSSCI/view?usp=drivesdk" target="_blank">PSX - SCPH7000.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1aBVvteFmh87XOQmfnJadcq4Fnvl_QePt/view?usp=drivesdk" target="_blank">PSX - SCPH3500.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/11p1damFlF84PHM3si6jJK8X24qQsBNSc/view?usp=drivesdk" target="_blank">PSX - SCPH7502.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1c6tIlBGcN9e1HFQUsIj6XkiieuRzKohp/view?usp=drivesdk" target="_blank">PSX - SCPH7003.BIN</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1fJ0MS1JUK5eeCujbKu3Ces1WbZgzlfKA/view?usp=drivesdk" target="_blank">PSX - SCPH5552.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1LIcitGrMT1k_p3ZzPsdsHYQJZMTGsesC/view?usp=drivesdk" target="_blank">PSX - SCPH5502.BIN</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder39')">📁 /PSX SCPH1001 BIOS</div>
<ul id="folder39" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1xtEeFGK8oEaw23gz6np2KOq6ko4AEByc/view?usp=drivesdk" target="_blank">SCPH1001.BIN</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder40')">📁 /SEGA 32X BIOS</div>
<ul id="folder40" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1Djn-tsg41zqmVhrovDGHIjGVPQrC0Xxy/view?usp=drivesdk" target="_blank">32X - Genesis BIOS.bin</a>
    <span class="size">0 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1FlyffPc6uSMvArRpCICEfz1o1BGPzgMK/view?usp=drivesdk" target="_blank">32X - Slave BIOS.bin</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1eO3Xx8kl6Ml4HlO5z4MsBkUOGYPS-iNb/view?usp=drivesdk" target="_blank">32X - Master BIOS.bin</a>
    <span class="size">2 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder41')">📁 /Scph1000 BIOS</div>
<ul id="folder41" class="files">
  <li>
    <a href="https://drive.google.com/file/d/12F5Ohnw4qEiWrb9ZtckztMDmSfnuO6gq/view?usp=drivesdk" target="_blank">SCPH1000.BIN</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder42')">📁 /Scph7502 BIOS</div>
<ul id="folder42" class="files">
  <li>
    <a href="https://drive.google.com/file/d/12U7CdrvWvECNVmhoKOXR9YGK6Sgt2BI9/view?usp=drivesdk" target="_blank">SCPH7502.BIN</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder43')">📁 /Sega 101 BIOS</div>
<ul id="folder43" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1d6leF1ESIHmS4pLSw8OSfccBP-lLWwCe/view?usp=drivesdk" target="_blank">SEGA_101.BIN</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder44')">📁 /Sega CD BIOS/CD</div>
<ul id="folder44" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1rTWCyNTUDpqOHkCVxhMg8lGEGSrjyztk/view?usp=drivesdk" target="_blank">Mega CD - M2 V2.00.bin</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1_Idv9dYjnhxw9V4U3cRN_bbJw5z-Pl25/view?usp=drivesdk" target="_blank">Mega CD - M1 V1.00s.bin</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1jesckbX4FesVKulanS--mts0mcLMSRUl/view?usp=drivesdk" target="_blank">Mega CD - M1 V1.00p.bin</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1zsthGNSQI6nNyYedVmwfgLWen2u9hwVB/view?usp=drivesdk" target="_blank">Sega CD - M2 V2.00w.bin</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1UZpFye6D3TlNdKEOEl4a1cxBdXiM8MCA/view?usp=drivesdk" target="_blank">Mega CD - M2 V2.00w.bin</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1jTRO2kBxSIucxvkzbnyrD53vldCTZUxO/view?usp=drivesdk" target="_blank">Sega CD - M1 V1.10.bin</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/19KbVPMInUXk5Luw20fFvQqQBKG67NXJC/view?usp=drivesdk" target="_blank">Sega CD - M2 V2.00.bin</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1PE-8SrqbEI7BnqTsoyiRdXRS7kEJTUIi/view?usp=drivesdk" target="_blank">Mega CD - M1 V1.00.bin</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Gq9EfAcnSCJH5EkwvhQY3sH8BukGPDHS/view?usp=drivesdk" target="_blank">Sega CD - M2 V2.21.bin</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1JigXzHjf6jE36EEY9bj6y4KlS5Z9mDra/view?usp=drivesdk" target="_blank">Sega CD - M2 V2.11x.bin</a>
    <span class="size">128 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder45')">📁 /Sega Master System - GameGear BIOS</div>
<ul id="folder45" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1LfD_X2tPE3T1nlVoLLaF34LxDac0-VyE/view?usp=drivesdk" target="_blank">GameGear BIOS (E-U).rom</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1cwNY06tSw3ysIe85Dh0psxxoXA6nu2UN/view?usp=drivesdk" target="_blank">GameGear BIOS (J).rom</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1hD_NYq_AciX8V7nDCxlfFd9Q9ZU26xoi/view?usp=drivesdk" target="_blank">SMS  BIOS + Missile Defense.sms</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1sYGmxxFMtZ8jduZ5q4ML-N20KyoiiSKE/view?usp=drivesdk" target="_blank">Mark III  BIOS V2.1.sms</a>
    <span class="size">8 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1L4k9cbcCptdzr1TE8QLiHU5DMr2JKBXd/view?usp=drivesdk" target="_blank">SMS  BIOS + Sonic the Hedgehog.sms</a>
    <span class="size">256 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1XY3o2g4p6cHrgZnpfnyWBCE4Gis75G_T/view?usp=drivesdk" target="_blank">SMS BIOS + Alex Kidd in Miracle World.sms</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1q0O9v9ZpDB4_zcBDIo_GHdjfqEePaKQS/view?usp=drivesdk" target="_blank">SMS BIOS V2.4 + Hang On & Safari Hunt.sms</a>
    <span class="size">128 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1R73qJbSxvh3_6AkHvEZpgbn2z5_WKGuh/view?usp=drivesdk" target="_blank">SMS BIOS V3.4 + Hang On.sms</a>
    <span class="size">128 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder46')">📁 /Sega Mega-CD Japan BIOS</div>
<ul id="folder46" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1wInndXJkS3xfSewMhQd3EspJuwApxy5H/view?usp=drivesdk" target="_blank">jap_bios.bin</a>
    <span class="size">128 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder47')">📁 /Sega Saturn Action Replay ROM BIOS</div>
<ul id="folder47" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1jRnPXlxjkll2Q2yRJPMRD29zc11_TM27/view?usp=drivesdk" target="_blank">Action Replay ROM.bin</a>
    <span class="size">82 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder48')">📁 /Sega Saturn BIOS</div>
<ul id="folder48" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1R7UKQ0qXawwc9J-uBZJxWv0VvIw_mezE/view?usp=drivesdk" target="_blank">SS - Boot Disc.img</a>
    <span class="size">10384 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/12XTkij8-e0CZzvFGTPCnhDMen7ooOabo/view?usp=drivesdk" target="_blank">SS - BIOS (E).bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/14pUjZtef6h7C-jfCq-Kb2wKROY1A2TA-/view?usp=drivesdk" target="_blank">SS - BIOS V1.01.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1G_AizIalfOdqFULCTEoHo6SLprzgPsgP/view?usp=drivesdk" target="_blank">SS - BIOS V1.00.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1nkP6sYGVFgJyyRFTzUBVGN12rRi28vfm/view?usp=drivesdk" target="_blank">SS - BIOS (U).bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1dfrLqyyXV4sAOvUkIfkx3C0z-jkzYZGn/view?usp=drivesdk" target="_blank">SS - Boot Disc.sub</a>
    <span class="size">424 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1UcXWXWUkBwWeoCBl4iZbVZusJYJvN1er/view?usp=drivesdk" target="_blank">SS - Boot Disc.ccd</a>
    <span class="size">3 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder49')">📁 /Sega Saturn BIOS (EUR)</div>
<ul id="folder49" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1wmb36yirFOvX0LmI8CZ463VwAWls5wls/view?usp=drivesdk" target="_blank">Sega Saturn BIOS (EUR).bin</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder50')">📁 /Sega Saturn BIOS v1.00 (JAP)</div>
<ul id="folder50" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1x2A5OM7VfF0LfRDQ2NwjJdNQlrFosNsI/view?usp=drivesdk" target="_blank">Sega Saturn BIOS v1.00 (JAP).bin</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder51')">📁 /Sega Saturn BIOS v1.01 (JAP)</div>
<ul id="folder51" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1m20bOYHkfV5RpsaFBs8W8_HTrp9Rm7EV/view?usp=drivesdk" target="_blank">Sega Saturn BIOS v1.01 (JAP).bin</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder52')">📁 /Sega Titan Video BIOS</div>
<ul id="folder52" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1CvvvKpqoN18wZhqtbgC0JEuYqNHTKJ0E/view?usp=drivesdk" target="_blank">README.TXT</a>
    <span class="size">1 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/15Je7H8V6_Mh6SJXK5bMU_cl-ShQ3xMeD/view?usp=drivesdk" target="_blank">MP17952A.S</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1nVSIYSkS5CjuriZyHYuiBYrCypfUTSqy/view?usp=drivesdk" target="_blank">MP17951A.S</a>
    <span class="size">512 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder53')">📁 /Sega-CD Europe BIOS</div>
<ul id="folder53" class="files">
  <li>
    <a href="https://drive.google.com/file/d/10kmbD91zh-Er1ECrYOJAMEQgqw4Asb1k/view?usp=drivesdk" target="_blank">EUR_BIOS.BIN</a>
    <span class="size">128 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder54')">📁 /Sega-CD USA BIOS</div>
<ul id="folder54" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1KLZILCUtgpw_kJ_8chnf2k5GXqN-v1HO/view?usp=drivesdk" target="_blank">us_bios.bin</a>
    <span class="size">128 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder55')">📁 /Syscard3 BIOS</div>
<ul id="folder55" class="files">
  <li>
    <a href="https://drive.google.com/file/d/17RpVqQGtSJUCxH7Z5XdHXJoz1kooQyE0/view?usp=drivesdk" target="_blank">syscard3.pce</a>
    <span class="size">257 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder56')">📁 /Xband modem bios BIOS</div>
<ul id="folder56" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1NTFn73nxV0v0ll02upRYHHZgRxGnzZBu/view?usp=drivesdk" target="_blank">XBand Modem Bios (US).smc</a>
    <span class="size">1025 KB</span>
  </li>
</ul>

<div class="folder" onclick="toggleFolder('folder57')">📁 /Z64 BIOS</div>
<ul id="folder57" class="files">
  <li>
    <a href="https://drive.google.com/file/d/1r_2ynxzu-xo3nK5ZZHI8uF0SmwLG5eNM/view?usp=drivesdk" target="_blank">Z64 BIOS V2.18.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/13Zd4E1_EPtf-6jmRrZXA6mP8tzRJIium/view?usp=drivesdk" target="_blank">Z64 BIOS V2.20cf.rom</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1zzZJB10-52bxtVsFS2h0zpauK7MlQtdM/view?usp=drivesdk" target="_blank">Z64 BIOS V2.00b (Ravemax Hack).bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1GfIkZDZNLDKeOEMYS04enSKMXc4S2s5-/view?usp=drivesdk" target="_blank">Z64 BIOS V2.17 by zmod.onestop.net (ORB HDisk ZIP250 2.18zd Hack).bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ATUZyGpskr5vmRGspve_5WnDKQEiBe0g/view?usp=drivesdk" target="_blank">Z64 BIOS V2.17 [h1].bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1GtDihFq119L6chvi3ykAAsWpW9vbxLNY/view?usp=drivesdk" target="_blank">Z64 BIOS V2.17 by zmod.onestop.net (ORB HDisk ZIP250 Hack).bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/14SUqRUNN3HV8ue6UXD0hxNS1jdTbQHhh/view?usp=drivesdk" target="_blank">Z64 BIOS V2.17.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1l2ccBC9UFdYyPUZ-kFzP90TdoEjJBBmz/view?usp=drivesdk" target="_blank">Z64 BIOS V2.16.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/179l4EUU_CA4C4rOL-cBNt3iUp5TCNBSM/view?usp=drivesdk" target="_blank">Z64 BIOS V2.16b.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1xGmRAyly0Wy08jqugccjOJDGUBF56zOV/view?usp=drivesdk" target="_blank">Z64 BIOS V2.15.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1pePrSB6_BpzVh-t3g_UpkSK3Q9C96A4n/view?usp=drivesdk" target="_blank">Z64 BIOS V2.13.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1JGRvMyq57GJem5EKTTHOtU8SOwwkQQ5E/view?usp=drivesdk" target="_blank">Z64 BIOS V2.12NTSC.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Le2CdaavWZU2ttI6Y5ciVBK9ZYJe8gD7/view?usp=drivesdk" target="_blank">Z64 BIOS V2.12PAL.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1zyVh7Mgt3S8i1FEJRxaqqUfTjIPedfcA/view?usp=drivesdk" target="_blank">Z64 BIOS V2.12b4.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1-Qabpc0wUP3kZNBhFjrZmqjK1MCD2GyO/view?usp=drivesdk" target="_blank">Z64 BIOS V2.12b3.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1GMN1zG8Qo2CeQbIimtKvYgHIgdozc6ZG/view?usp=drivesdk" target="_blank">Z64 BIOS V2.12b (Nintendo Backup Crew Hack).bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1v0ATN4SsfdFlrL0SvSN7NQzdY_v246hC/view?usp=drivesdk" target="_blank">Z64 BIOS V2.11NTSC.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1YdzHx95izqfFvE5ZUy0rotDnoMZ39bSu/view?usp=drivesdk" target="_blank">Z64 BIOS V2.11PAL.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1dN2aFGEYG-erNCsYEUEUQLD4aEEnxz-9/view?usp=drivesdk" target="_blank">Z64 BIOS V2.10NTSC.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Kax1ngtBBzidm_DuHD8KnaDV-aNiWu1X/view?usp=drivesdk" target="_blank">Z64 BIOS V2.10PAL.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1bfMi4ZSWXbFKlzJFno9W8vcXbf2TtnFJ/view?usp=drivesdk" target="_blank">Z64 BIOS V2.00.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1sjHKRxfrOiBiLjJM-FmDrIx88Rk3GWG8/view?usp=drivesdk" target="_blank">Z64 BIOS V1.12.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1SdOrrd_L9YOQLz-Ysj69GTZW7JrRS73R/view?usp=drivesdk" target="_blank">Z64 BIOS V1.08 (Ravemax Hack V1.00b).bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1ksjBOnLJ4qTNcDDSG4Puzuhw-x0zBPjl/view?usp=drivesdk" target="_blank">Z64 BIOS V1.11.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1h_L5c2h9HB8iqBmj12l1kgWZ2A-W0kf8/view?usp=drivesdk" target="_blank">Z64 BIOS V1.10b.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1r3l1yxAsDdkZxtkcq2cRhm3d4Z99pqXp/view?usp=drivesdk" target="_blank">Z64 BIOS V1.09.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1fygqccqhDhaoynD2eU-m-GG0xsOixdtt/view?usp=drivesdk" target="_blank">Z64 BIOS V1.08.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1pS92QxObuRo0fY3pXN_RV5a1YJ166FiH/view?usp=drivesdk" target="_blank">Z64 BIOS V1.07.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/1Edi7GRdPKMwYvD41sE02BoB70LAKJyrO/view?usp=drivesdk" target="_blank">Z64 BIOS V1.05.bin</a>
    <span class="size">512 KB</span>
  </li>
  <li>
    <a href="https://drive.google.com/file/d/11AMtm0j3_XqyNibSTRS0AvZ5ouWZyTax/view?usp=drivesdk" target="_blank">Z64 BIOS V2.00 (Barebones).bin</a>
    <span class="size">64 KB</span>
  </li>
</ul>

`;
