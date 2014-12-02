### Deepening

This section covers discovering accessing networks. We have only included the WPA cracking section in this default adids guide. You can find WEP, WPA, MAC filtered, and default admin password techniques in the network discovery adids content folder. We tried to tie each exercise to an existing guide or tutorial so that we could support existing translation efforts for the tools used.

##### What trainees will need

  * Computer running Kali Linux
  * Wireless card that can be set to monitor mode

##### What you will need

  * Pre-configure a wireless access point to serve WEP and WPA networks, and enable WPS for WPA. The WPA password should be quickly crackable based on the password attacks above. The WEP network should be configured to use 64 bit encryption to speed the practice.
  * If no WEP network is available, you can use [this pre-build airodump-ng capture file](http://download.aircrack-ng.org/wiki-files/other/test.ivs) and skip the airodump-ng capture.
  * If no WPA network is available, you can use [this file](http://wiki.wireshark.org/SampleCaptures?action=AttachFile&do=get&target=wpa-Induction.pcap).
  * Network to target (with permission)
  * It may be helpful to print out copies of the guides tied to each section before hand if there will be limited internet access at the training site.

#### WPA Networks

The purpose of this exercise is to walk participants through attaining access to a WEP protected access point by cracking the WEP key.

*NOTE:* [ TODO NEED SEPARATE INSTRUCTIONS ] If no WPA network is available, you can use [this](http://wiki.wireshark.org/SampleCaptures?action=AttachFile&do=get&target=wpa-Induction.pcap) file:

  * Start the wireless interface in monitor mode on the specific AP channel
  * Start airodump-ng on AP channel with filter for bssid to collect authentication handshake
  * Use aireplay-ng to deauthenticate the wireless client
  * Run aircrack-ng to crack the pre-shared key using the authentication handshake
    * Use your earlier generated (See: 6. Audit Preparation) "John the Ripper" password dictionary
  * Documenting Finding [STUB]
  * Connecting to Assets and Processes [STUB]

##### Material that may be Useful:

  * *Tutorial:* [“How to Crack WPA/WPA2”](http://www.aircrack-ng.org/doku.php?id=cracking_wpa) (Aircrack-ng Wiki)
[“Aircrack-ng”](http://www.aircrack-ng.org/doku.php?id=aircrack-ng) (Aircrack-ng Wiki)
  * *Documentation:* [“Aireplay-ng”](http://www.aircrack-ng.org/doku.php?id=aireplay-ng) (Aircrack-ng Wiki)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)
