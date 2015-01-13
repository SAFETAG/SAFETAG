### Deepening

This section covers discovering wireless networks. We tried to tie each exercises to an existing guide or tutorial so that we could support existing translation efforts for the tools used.

##### What trainees will need

  * Computer running Kali Linux
  * Wireless card that can be set to monitor mode

##### What you will need

  * Pre-configure a wireless access point to serve WEP and WPA networks, and enable WPS for WPA. The WPA password should be quickly crackable based on the password attacks above. The WEP network should be configured to use 64 bit encryption to speed the practice.
  * If no WEP network is available, you can use [this pre-build airodump-ng capture file](http://download.aircrack-ng.org/wiki-files/other/test.ivs) and skip the airodump-ng capture.
  * If no WPA network is available, you can use [this file](http://wiki.wireshark.org/SampleCaptures?action=AttachFile&do=get&target=wpa-Induction.pcap).
  * Network to target (with permission)
  * It may be helpful to print out copies of the guides tied to each section before hand if there will be limited internet access at the training site.

#### Setting up Aircrack-ng

We also recommend that the links for this section are sent out to participants beforehand to check their devices and inform the trainer if they do not work. This will allow a trainer to bring any required external wireless devices or extra laptops. If the trainees will be provided computers tests and fixes should carried about before the training to avoid delays for this training.

Packet injection is used in order to speed up the process of cracking a WEP and WPA-PSK keys. Not all wireless cards have drivers that support packet injection. This short injection test is used to ensure the trainee's machines are capable of injecting packets.

  * Start airmon-ng on the computers wireless interface.
  
```bash
airmon-ng start wlan0
```

  * Broadcast probe requests using aireplay-ng. 
  
```
aireplay-ng -9 wlan0
```

  * Give the "Intalling Drivers" link to any trainees whose install failed so that they can install the appropriate drivers over a break, or in the evening. If possible give those trainees another device to use until they have had a chance to update their drivers outside of class.

##### Material that may be Useful:

  * *Guide:* [“Aircrack-ng Newbie Guide for Linux”](http://www.aircrack-ng.org/doku.php?id=newbie_guide) (Aircrack-ng Wiki)  
  * *Tutorial:* [“Injection test”](http://www.aircrack-ng.org/doku.php?id=injection_test) (Aircrack-ng Wiki)
  * *Tutorial:* [“Is My Wireless Card Compatible?”](http://www.aircrack-ng.org/doku.php?id=compatible_cards) (Aircrack-ng Wiki)
  * *Guide:* [“Compatibility, Drivers, Which Card to Purchase”](http://www.aircrack-ng.org/doku.php?id=compatibility_drivers) (Aircrack-ng Wiki)
  * *Guide:* [“Installing Drivers”](http://www.aircrack-ng.org/doku.php?id=install_drivers) (Aircrack-ng Wiki)
  * *Guide:* [“Tutorial: How To Patch Drivers”](http://www.aircrack-ng.org/doku.php?id=patching) (Aircrack-ng Wiki)

#### Reconnaissance

The purpose of this exercise is to walk participants through the identification of a network.

Set up a wireless access point with an appropriate AP name and connect some devices to it before beginning this activity.

  * Scanning for networks
    * Start the wireless interface in monitor mode
	* Identify all nearby wireless
  * Identify possible wireless AP of organization
    * By name / identifiers
    * Watching Client probes and what they connect to (The waiting game)
  * Documenting Finding
    * Nearby APs (show them whats around and how easy it was to find them)
    * Clients Connected
  * Confirm the office network before proceeding
  * Identify range of wireless network outside of office space.
    * Wifi-Stregth (if you have a phone and wifi analyzer)
    * Documenting findings
	  * Google maps
	  * Photos of locations that are unassuming
  * Connecting to Assets and Processes mapping

##### Material that may be Useful:

  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)
