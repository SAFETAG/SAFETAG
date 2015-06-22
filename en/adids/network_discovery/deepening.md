### Deepening

The purpose of this exercise is to walk participants through the identification of a network.

#### Scanning for networks

Instructions are in the Beacon example of the Network Access section of the full guide

  * Booted into Kali, identify all nearby wireless using wifite
  * airodump logging (handshakes, beacons, macs)
  * Identify possible wireless AP of "organization" (the training router), confirm before proceeding
    * By name / identifiers
    * Watching Client probes and what they connect to (The waiting game)
    * Using de-auth packets (see the Beacons vulnerability in the full guide)
    * EXERCISE: Guess who is who based on beacon probes

We also recommend that the links for this section are sent out to participants beforehand to check their devices and inform the trainer if they do not work. This will allow a trainer to bring any required external wireless devices or extra laptops. If the trainees will be provided computers tests and fixes should carried about before the training to avoid delays for this training.

Packet injection is used in order to speed up the process of cracking a WEP and WPA-PSK keys. Not all wireless cards have drivers that support packet injection. This short injection test is used to ensure the trainee's machines are capable of injecting packets.

#### Documenting Finding (Synthesis step)

Review nearby APs, notinghow easy it was to find them.  Discuss the clients connected to the training router and the network histories and their stories

#### Walkabout (Activity)
You can first see if you can access the office's network from a public space nearby (a street, a park, or even a shared hallway in a building).  MAC address filtering seems like a good idea, but these can be spoofed quite easily (and new Apple devices use fake MAC addresses when looking for networks to reduce beacon privacy problems).

After gathering some screenshots/photos of accessing the network from outside the office if possible, you should skip straight to the network sniffing stage.


  * Identify range of wireless network outside of office space.
    * Wifi-Stregth (if you have a phone and wifi analyzer)
    * Documenting findings
	  * Google maps
	  * Photos of locations that are unassuming
  * Connecting to Assets and Processes mapping




##### Material that may be Useful:

  * *Guide:* [“Aircrack-ng Newbie Guide for Linux”](http://www.aircrack-ng.org/doku.php?id=newbie_guide) (Aircrack-ng Wiki)  
  * *Tutorial:* [“Injection test”](http://www.aircrack-ng.org/doku.php?id=injection_test) (Aircrack-ng Wiki)
  * *Tutorial:* [“Is My Wireless Card Compatible?”](http://www.aircrack-ng.org/doku.php?id=compatible_cards) (Aircrack-ng Wiki)
  * *Guide:* [“Compatibility, Drivers, Which Card to Purchase”](http://www.aircrack-ng.org/doku.php?id=compatibility_drivers) (Aircrack-ng Wiki)
  * *Guide:* [“Installing Drivers”](http://www.aircrack-ng.org/doku.php?id=install_drivers) (Aircrack-ng Wiki)
  * *Guide:* [“Tutorial: How To Patch Drivers”](http://www.aircrack-ng.org/doku.php?id=patching) (Aircrack-ng Wiki)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)
