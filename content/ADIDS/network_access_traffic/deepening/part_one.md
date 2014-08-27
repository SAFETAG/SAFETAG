---
type: ADIDS
...

### PART I: Accessing a Wireless Network

Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse. Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id. Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.

*Overview:* Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse. Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id. Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.

*Note:*{.note} Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id. Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.

#### Setting up Aircrack-ng

  * Injection Test

##### Material that may be Useful:

  * *Guide:* [“Injection test”](http://www.aircrack-ng.org/doku.php?id=injection_test) (Aircrack-ng Wiki)

#### Reconnaissance

Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse. Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id. Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.

  * Scanning for networks
    * Documenting Finding
  * determine/guess the office network - some are obfuscated
    * Documenting Finding (show them whats around and how easy it was to find them)
  * confirm the office network before proceeding
      * Documenting Finding
  * Identify range of wireless network outside of office space.
    * Documenting findings
  * Connecting to Assets and Processes

##### Material that may be Useful:

  * *Video:* [“How to do things with this tool”](https://link.com) (organization name)

#### Open or MAC-address-filtered network

  * MAC-Address Spoofing
  * Documenting Finding
  * Connecting to Assets and Processes

##### Material that may be Useful:

  * *Video:* [“How to do things with this tool”](https://link.com) (organization name)

#### WEP Networks

  * 
  * 
  * Documenting Finding
  * Connecting to Assets and Processes

##### Material that may be Useful:

  * *Tutorial:* [“Simple WEP Crack”](http://www.aircrack-ng.org/doku.php?id=simple_wep_crack) (Aircrack-ng Wiki)

#### WPA Networks

  * 
  * 
  * Documenting Finding
  * Connecting to Assets and Processes

##### Material that may be Useful:

  * *Tutorial:* [“How to Crack WPA/WPA2”](http://www.aircrack-ng.org/doku.php?id=cracking_wpa) (Aircrack-ng Wiki)

#### WPS Networks

  * 
  *
  * Documenting Finding
  * Connecting to Assets and Processes

##### Material that may be Useful:

  * *Guide:* [“Hacking my own router with Reaver, guide to brute forcing Wifi Protected Setup”](http://nathanheafner.com/home/2013/01/11/hacking-my-own-router-with-reaver-guide-to-brute-forcing-wifi-protected-setup/) (Nathan Heafner)
  * *Guide:* [“WPS – How to install and use Reaver to detect the WPS on your home router”](http://uwnthesis.wordpress.com/2013/07/11/wps-how-to-install-and-use-reaver-to-detect-the-wps-on-your-home-router/) (University of South Wales)

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

Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse. Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id. Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.

*Overview:* Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse. Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id. Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.

*Note:*{.note} Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id. Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.


#### nmap & Zenmap

The next step is to use a network scanning tool, such as ZenMap (a graphical frontend to nmap) to match MAC addresses with IPs and computer details.  This paints a more complete picture of the office's network setup. Using beacon information, in combination with the computer hostnames, you can often map most devices to their owners.

  * Network exploration with nmap/Zenmap
    * Don't forget that your device is on the network. :)
  * Comparing Scans
    * Documenting Finding
  * Capturing Results
  * Customizing and outputting topology for further use and documentation
  * Documenting Finding
  * Connecting to Assets and Processes

##### Material that may be Useful:

  * *Video:* [“How to do things with this tool”](https://link.com) (organization name)

#### MACs and wireless beacons

After documenting and discussing access, you can turn your attention to mapping out the network.  Your airodump logs should already have a wealth of devices listed by MAC address, their beacons, and the APs they're connected to.  This is a great first step in identifying the users of various devices.  In addition, you should note down the MAC addresses of any network devices the auditor(s) are using, so as to be able to easily filter those out of later analysis.

  * airodump logging (handshakes, beacons, macs)
    * Identifying applicable clients
	  * Ones attached to the organizations wifi-router
    * Documenting Finding
  * Client fingerprinting with p0f
    * Documenting Finding
  * Connecting to Assets and Processes
  
##### Material that may be Useful:

  * *Video:* [“How to do things with this tool”](https://link.com) (organization name)
