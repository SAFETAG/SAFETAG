---
type: ADIDS
...

### PART I: Accessing a Wireless Network

This portion of the module covers identifying and accessing wireless networks.

#### Setting up Aircrack-ng

Packet injection is used in order to speed up the process of cracking a WEP and WPA-PSK keys. Not all wireless cards have drivers that support packet injection. This short injection test is used to ensure the trainee's machines are capable of injecting packets.

If the trainees will be provided computers this test, and any fixes that need to be made, should be done on those devices before the training.

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

  * Scanning for networks
    * Start the wireless interface in monitor mode
	* Identify all nearby wireless
  * Identify possible wireless AP of organization
    * By name / identifiers
    * Watching Client probes and what they connect to (The waiting game)
  * Documenting Finding
    * Nearby AP's (show them whats around and how easy it was to find them)
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

  * Documenting Finding
  * Connecting to Assets and Processes mapping

##### Material that may be Useful:

  * *Tutorial:* [“Bypassing MAC Filters on WiFi Networks”](http://blog.techorganic.com/2010/12/21/bypassing-mac-filters-on-wifi-networks/) (techorganic.com)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)

#### WEP Networks

The purpose of this exercise is to walk participants through attaining access to a WEP protected access point by cracking the WEP key.

  * Start the wireless interface in monitor mode on the specific AP channel
  * Use aireplay-ng to do a fake authentication with the access point
  * Start airodump-ng on AP channel with a bssid filter to collect the new unique IVs
  * Start aireplay-ng in ARP request replay mode to inject packets
  * Run aircrack-ng to crack key using the IVs collected
  * Documenting Finding
  * Connecting to Assets and Processes mapping

##### Material that may be Useful:

  * *Tutorial:* [“Simple WEP Crack”](http://www.aircrack-ng.org/doku.php?id=simple_wep_crack) (Aircrack-ng Wiki)
  * *Tutorial:* [“Simple Wep Cracking with a flowchart”](http://www.aircrack-ng.org/doku.php?id=flowchart) (Aircrack-ng Wiki)
  * *Documentation:* [“Aircrack-ng”](http://www.aircrack-ng.org/doku.php?id=aircrack-ng)  (Aircrack-ng Wiki)
  * *Documentation:* [“Aireplay-ng”](http://www.aircrack-ng.org/doku.php?id=aireplay-ng) (Aircrack-ng Wiki)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)

#### WPA Networks

  * Start the wireless interface in monitor mode on the specific AP channel
  * Start airodump-ng on AP channel with filter for bssid to collect authentication handshake
  * Use aireplay-ng to deauthenticate the wireless client
  * Run aircrack-ng to crack the pre-shared key using the authentication handshake
    * Use your earlier generated (See: 6. Audit Preparation) "John the Ripper" password dictionary
  * Documenting Finding
  * Connecting to Assets and Processes

##### Material that may be Useful:

  * *Tutorial:* [“How to Crack WPA/WPA2”](http://www.aircrack-ng.org/doku.php?id=cracking_wpa) (Aircrack-ng Wiki)
[“Aircrack-ng”](http://www.aircrack-ng.org/doku.php?id=aircrack-ng) (Aircrack-ng Wiki)
  * *Documentation:* [“Aireplay-ng”](http://www.aircrack-ng.org/doku.php?id=aireplay-ng) (Aircrack-ng Wiki)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)

#### WPS Networks

  * Find the BSSID of the target routerr
  * Use Wash to find WPS Routers
  * Start Reaver
    * Estimated Time: Between 2 and 10 hours
  * Documenting Finding
    * Provide Example data they can use to document findings if needed.
  * Connecting to Assets and Processes

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
  * Documenting Finding
  * Connecting to Assets and Processes

##### Material that may be Useful:

  * *Search Engine:* [“Router Default Password Search”](http://www.routerpasswords.com/) (RouterPasswords.com)

### PART II: Mapping the network

This portion of the module covers scanning an internal network once you have gained access. 

#### MACs and wireless beacons

After documenting and discussing access, you can turn your attention to mapping out the network. Your airodump logs should already have a wealth of devices listed by MAC address, their beacons, and the APs they're connected to. This is a great first step in identifying the users of various devices. In addition, you should note down the MAC addresses of any network devices the auditor(s) are using, so as to be able to easily filter those out of later analysis.

  * airodump logging (handshakes, beacons, macs)
    * Identifying applicable clients
	  * Ones attached to the organizations wifi-router
    * Documenting Finding
  * Client fingerprinting with p0f
    * Documenting Finding
  * Connecting to Assets and Processes
  
##### Material that may be Useful:

  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)

#### Host Discovery

The next step is to use the nmap network scanning tool to discover other hosts on the network. We will mostly use ZenMap (a graphical frontend to nmap) because it makes documentation easier.

*NOTE:*{.note} Because we are going to be using the graphical front end we will not be discussing how to collect command line output.


  * Identify what services are up and running
	
	```bash
	nmap -v -sP x.x.x.0/24
	```

*NOTE:* If no machines respond to ping the LAN may filter ICMP requests locally or the machines themselves may be set to not respond. You can use the "no ping" flag (-Pn) in your further scans to allow them to continue without a ping request. This will increase the time of these scans significantly.	
  
  * Run OS detection against the local network

Use a "TCP SYN + UDP" scan against the local network to identify hosts.
  
    ```bash
	nmap -v -O --osscan-guess -sSU x.x.x.0/24
	```
	
  * Interpreting Results
	* Don't forget that your device is on the network.
    * Using beacon information gathered earlier, in combination with the computer hostnames identify what devices belong to which individual.
  * Documenting Finding
  * Capturing Results
    * Customizing and outputting topology for further use and documentation
  * Connecting to Assets and Processes

##### Material that may be Useful:

  * *Guide:* [“Zenmap GUI Users' Guide”](http://nmap.org/book/zenmap.html) (Zenmap GUI Users' Guide)
  * *Guide:* [“Surfing the Network Topology”](http://nmap.org/book/zenmap-topology.html) (Zenmap GUI Users' Guide)
  * *Overview:* [“The Purpose of a Graphical Frontend for Nmap”](http://nmap.org/book/zenmap.html#zenmap-purpose) (Zenmap GUI Users' Guide)
  * *Guide:* [“Host Detection”](http://nmap.org/book/man-host-discovery.html) (nmap Reference Guide)
  * *Guide:* [“OS Detection”](http://nmap.org/book/man-os-detection.html) (nmap Reference Guide)


