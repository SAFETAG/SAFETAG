---
Authors:
- SAFETAG
Info_provided:
- unknown
Info_required:
- unknown
---

## Network Mapping

### Summary

This component allows the auditor to identify security issues with the host's network and map the devices on a host's network, the services that are being used by those devices, and any protections in place.

### Purpose
Mapping an organization's network exposes the multitude of devices connected to it -- including mostly forgotten servers -- and provides the baseline for later work on device assessment and vulnerability research.

This process also reveals outside service usage (such as google services, dropbox, or others) which serve -- intentionally or not -- as shadow infrastructure for the organization. In combination with beacon research from the *Monitor Open Wireless Traffic* exercise, many devices can be associated with users.

### The Flow Of Information
![Network Mapping Information Flow](images/info_flows/network_mapping.svg)

### Guiding Questions

* What operating systems, and services being hosted or used by an organization? Are any hosts running unusual, custom, or outdated operating systems and services?
* Are there unexpected/unusual devices or services on the network?
* What is the topology of the network? What are the routers and modems 
managing it?
* What services (e.g. dropbox, web-mail, etc.) are running on the network that have not been mentioned by the organizational staff?
* What network assets does an attacker have access to once they have gained access to the internal network?




### Outputs

  * The reach of and security protections in place on any wireless networks
  * A list of hosts, servers, and other network hardware on LAN
  * The operating systems and services on each host.
  * Services used by the host as identified by decrypted wireless network traffic.
  * Possible vulnerable services and practices.[^vulnerability_analysis]

### Operational Security

  * Clarify timing and seek permission with staff - some activities can tax the network or cause disruptions.
  * Confirm that all devices you are accessing/scanning belong to the organization.
  * Delete all devices from your scan that do not belong to the organization.
  * Study outputs for any obviously embarrassing personal information (especially traffic sniffing or personal devices connected to the network) before sharing.
  * Treat captured network traffic with the utmost security and empathetic responsibility. They may contain very personal data, passwords, and more. These should not be shared except in specific, intentional samples with anyone, including the organization itself.

### Preparation

#### Baseline Skills
* Monitoring and analyzing wireless network traffic
* Skill with using nmap/zenmap and its scripting options
* Skill with Wireshark or other packet-capturing tool, as well as possibly more advanced traffic interception tools.

### Resources
<div class="greybox">

  * *Guide:* ["10 Techniques for Blindly Mapping Internal Networks"](https://www.netspi.com/blog/entryid/135/10-techniques-for-blindly-mapping-internal-networks)

  * *Resource List:* [Wireless Access Guides & Resources](#wireless-access-guides-resources) (SAFETAG)

  * *Resource List:* [nmap Scanning Resources](#nmap-scanning) (SAFETAG)

  * *Resource List:* [System Vulnerability Scanning Resources](#system-vulnerability-scanning) (SAFETAG)


#### Network Mapping Methods

  * *Guide:* ["10 Techniques for Blindly Mapping Internal Networks"](https://www.netspi.com/blog/entryid/135/10-techniques-for-blindly-mapping-internal-networks)

  * *Directory:* ["Network Forensics Packages and Appliances"](http://www.forensicswiki.org/wiki/Tools:Network_Forensics) (Forensics Wiki)

  * *Directory:* ["Scripts and tools related to Wireshark"](http://wiki.wireshark.org/Tools) (Wireshark Wiki)



#### Wireless Access Guides & Resources

  * *Documentation:* [“Aircrack-ng”](http://www.aircrack-ng.org/doku.php?id=aircrack-ng)  (Aircrack-ng Wiki)

  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)

  * *Documentation:* [“Aireplay-ng”](http://www.aircrack-ng.org/doku.php?id=aireplay-ng) (Aircrack-ng Wiki)

  * *Tutorial:* [“Bypassing MAC Filters on WiFi Networks”](http://blog.techorganic.com/2010/12/21/bypassing-mac-filters-on-wifi-networks/) (techorganic.com)

  * *Tutorial:* [“Simple WEP Crack”](http://www.aircrack-ng.org/doku.php?id=simple_wep_crack) (Aircrack-ng Wiki)

  * *Tutorial:* [“Simple Wep Cracking with a flowchart”](http://www.aircrack-ng.org/doku.php?id=flowchart) (Aircrack-ng Wiki)

  * *Tutorial:* [“How to Crack WPA/WPA2”](http://www.aircrack-ng.org/doku.php?id=cracking_wpa) (Aircrack-ng Wiki)

  * *Guide:* [“Hacking my own router with Reaver, guide to brute forcing Wifi Protected Setup”](http://nathanheafner.com/home/2013/01/11/hacking-my-own-router-with-reaver-guide-to-brute-forcing-wifi-protected-setup/) (Nathan Heafner)

  * *Guide:* [“WPS – How to install and use Reaver to detect the WPS on your home router”](http://uwnthesis.wordpress.com/2013/07/11/wps-how-to-install-and-use-reaver-to-detect-the-wps-on-your-home-router/) (University of South Wales)

  * *Tutorial:* [“Resetting WPS Lockouts”](https://forums.kali.org/showthread.php?19498-MDK3-Secret-Destruction-Mode) (Kali Linux Forums)

  * *References:* ["Links, References and Other Learning Materials"](http://www.aircrack-ng.org/doku.php?id=links) (Aircrack-ng Wiki)

  * *Project Site:* ["wifite: automated wireless auditor"](https://code.google.com/p/wifite/) (Google code)

  * *Source Code:* ["wifite"](https://github.com/derv82/wifite) (GitHub)

  * *Guide:* ["Cracking WPA2 WPA with Hashcat in Kali Linux"](http://www.darkmoreops.com/2014/08/18/cracking-wpa2-wpa-with-hashcat-kali-linux/?PageSpeed=noscript) (darkmoreops.com)

  * *Guide:* ["Cracking WPA/WPA2 with oclHashcat"](http://hashcat.net/wiki/doku.php?id=cracking_wpawpa2) (Hashcat wiki)

  * *Documentation:* ["Wireless Network Review"](http://www.amanhardikar.com/mindmaps/Wireless.html) (amanhardikar.com)

  * *References:* ["Router Hacking"](https://github.com/justinbeatz/Stockpile)

  * *Guide:* ["Common/default passwords"](http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines#Common.2Fdefault_passwords) (Penetration Execution Standard)

  * *List:* ["Default Password List"](http://www.defaultpassword.com/) (defaultpassword.com)
  
  * *List:* ["Default Password List"](http://www.phenoelit-us.org/dpl/dpl.html) (CIRT.net)

  * *List:* ["Default Password List - 2007"](http://www.phenoelit-us.org/dpl/dpl.html) (Phenoelit)



#### Nmap Scanning {#nmap-scanning}

  * *Guide:* ["The Official Nmap Project Guide to Network Discovery and Security Scanning"](http://nmap.org/book/toc.html) (Gordon “Fyodor” Lyon)

  * *Cheat Sheet:* [“Part 1: Introduction to Nmap”](http://resources.infosecinstitute.com/nmap-cheat-sheet/) (Nmap Cheat Sheet: From Discovery to Exploits)

  * *Cheat Sheet:* [“Part 2: Advance Port Scanning with Nmap And Custom Idle Scan”](http://resources.infosecinstitute.com/nmap-cheat-sheet-discovery-exploits-part-2-advance-port-scanning-nmap-custom-idle-scan/) (Nmap Cheat Sheet: From Discovery to Exploits)

  * *Cheat Sheet:* [“Part 3: Gathering Additional Information about Host and Network”](http://resources.infosecinstitute.com/nmap-cheat-sheet-discovery-exploits-part-3-gathering-additional-information-host-network-2/) (Nmap Cheat Sheet: From Discovery to Exploits)

  * *Cheat Sheet:* [“Part 4”](http://resources.infosecinstitute.com/nmap-cheat-sheet-part-4/) (Nmap Cheat Sheet: From Discovery to Exploits)

  * *Cheat Sheet:* [“Nmap Cheat Sheet”](http://hackingdefined.org/publications/nmap-cheat-sheet.pdf) (See-Security Technologies)

  * *Overview:* [“The Purpose of a Graphical Frontend for Nmap”](http://nmap.org/book/zenmap.html#zenmap-purpose) (Zenmap GUI Users' Guide)

  * *Guide:* [“Zenmap GUI Users' Guide”](http://nmap.org/book/zenmap.html) (Zenmap GUI Users' Guide)
  
  * *Guide:* [“Surfing the Network Topology”](http://nmap.org/book/zenmap-topology.html) (Zenmap GUI Users' Guide)
  
  * *Guide:* [“Host Detection”](http://nmap.org/book/man-host-discovery.html) (nmap Reference Guide)

</div>

### Activities
