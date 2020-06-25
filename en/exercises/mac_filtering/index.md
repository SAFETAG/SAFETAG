---
Approach:
- Technical
Authors:
- SAFETAG
Org_size_under:
- 50
Remote_options:
- with-support
Skills_required:
- Wireless, Traffic Analysis
Time_required_minutes:
- 30
---

#### Accessing a MAC-filtered Network

##### Summary

Open and MAC-address-filtered wireless access points are not only open to anyone within range to join and listen in to, but also do not provide protection to those on the network itself, even if they do not "broadcast" their name.  These may seem like great ways to prevent unauthorized users from accessing your network without resorting to passwords, but they are trivial to overcome.

##### Overview

##### Materials Needed

##### Considerations

##### Walkthrough

The auditor can easily gain access to an open or MAC address filtered access point.

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

##### Material that may be Useful:

  * *Tutorial:* [“Bypassing MAC Filters on WiFi Networks”](http://blog.techorganic.com/2010/12/21/bypassing-mac-filters-on-wifi-networks/) (techorganic.com)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)

##### Recommendation

Transitioning to WPA networks with strong passwords, even for guest networks, is recommended.  