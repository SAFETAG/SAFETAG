
#### Open or MAC-address-filtered network

The purpose of this exercise is to walk participants through attaining access to a MAC address filtered access point.

  * MAC-Address Spoofing
    * Start the wireless interface in monitor mode
    * Identify MAC addresses that are on the whitelist

```bash
airodump-ng
```
    * Change our MAC address to one that’s on the whitelist
	
```bash
ifconfig mon0 down
macchanger -m [MAC ADDRESS IDENTIFIED] mon0
ifconfig mon0 up
```

  * Documenting Finding [STUB]
  * Connecting to Assets and Processes mapping [STUB]

##### Material that may be Useful:

  * *Tutorial:* [“Bypassing MAC Filters on WiFi Networks”](http://blog.techorganic.com/2010/12/21/bypassing-mac-filters-on-wifi-networks/) (techorganic.com)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)

#### WEP Networks

The purpose of this exercise is to walk participants through attaining access to a WEP protected access point by cracking the WEP key.

*NOTE:* [ TODO NEED SEPARATE INSTRUCTIONS ] If no WEP network is available, you can use [this](http://download.aircrack-ng.org/wiki-files/other/test.ivs) pre-build airodump-ng capture file and skip the airodump-ng and aireplay-ng packet injection steps.

  * Start the wireless interface in monitor mode on the specific AP channel
  * Use aireplay-ng to do a fake authentication with the access point
  * Start airodump-ng on AP channel with a bssid filter to collect the new unique IVs
  * Start aireplay-ng in ARP request replay mode to inject packets
  * Run aircrack-ng to crack key using the IVs collected
  * Documenting Finding [STUB]
  * Connecting to Assets and Processes mapping [STUB]

##### Material that may be Useful:

  * *Tutorial:* [“Simple WEP Crack”](http://www.aircrack-ng.org/doku.php?id=simple_wep_crack) (Aircrack-ng Wiki)
  * *Tutorial:* [“Simple Wep Cracking with a flowchart”](http://www.aircrack-ng.org/doku.php?id=flowchart) (Aircrack-ng Wiki)
  * *Documentation:* [“Aircrack-ng”](http://www.aircrack-ng.org/doku.php?id=aircrack-ng)  (Aircrack-ng Wiki)
  * *Documentation:* [“Aireplay-ng”](http://www.aircrack-ng.org/doku.php?id=aireplay-ng) (Aircrack-ng Wiki)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)


#### WPS Networks

  * Find the BSSID of the target routerr
  * Use Wash to find WPS Routers
  * Start Reaver
    * Estimated Time: Between 2 and 10 hours
  * Documenting Finding [STUB]
    * Provide Example data they can use to document findings if needed.
  * Connecting to Assets and Processes [STUB]

##### Material that may be Useful:

  * *Guide:* [“Hacking my own router with Reaver, guide to brute forcing Wifi Protected Setup”](http://nathanheafner.com/home/2013/01/11/hacking-my-own-router-with-reaver-guide-to-brute-forcing-wifi-protected-setup/) (Nathan Heafner)
  * *Guide:* [“WPS – How to install and use Reaver to detect the WPS on your home router”](http://uwnthesis.wordpress.com/2013/07/11/wps-how-to-install-and-use-reaver-to-detect-the-wps-on-your-home-router/) (University of South Wales)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)
* *Tutorial:* [“Resetting WPS Lockouts”](https://forums.kali.org/showthread.php?19498-MDK3-Secret-Destruction-Mode) (Kali Linux Forums)

#### Router Based Attacks

  * Default Passwords
  * Un-patched Vulnerabilities and Backdoors
  * What to grab while you are on the router
    * Currently connected clients
  * Documenting Finding [STUB]
  * Connecting to Assets and Processes [STUB]

##### Material that may be Useful:

  * *Search Engine:* [“Router Default Password Search”](http://www.routerpasswords.com/) (RouterPasswords.com)

