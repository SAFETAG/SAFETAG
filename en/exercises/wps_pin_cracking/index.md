---
Approach:
- Technical
Authors:
- SAFETAG
Org_size_under:
- 1000
Remote_options:
- None
Skills_required:
- Wireless, Traffic Analysis, Password auditing
Time_required_minutes:
- 60
---

#### WPS PIN Cracking

##### Summary

WPS was built as an addition to WPA to make it easier to add devices without typing in secure passwords, but this ease of use means that a malicious actor can pose as a device and effectively reduce the potentially very difficult passwords WPA allows down to a simple numeric-only 8 character PIN. Further, the WPS system allows an attacker to work on this PIN in two parallel chunks, further reducing its security. This, like WEP, is a &quot;live&quot; attack - you have to stay connected to the network - but also like WEP, it is a guaranteed attack; your brute forcing of the WPS system will eventually (2-10 hours) allow you network access. 

##### Walkthrough

  * Find the BSSID of the target routerr
  * Use Wash to find WPS Routers
  * Start Reaver : estimated time: Between 2 and 10 hours

##### Material that may be Useful:

  * *Guide:* [“Hacking my own router with Reaver, guide to brute forcing Wifi Protected Setup”](http://nathanheafner.com/home/2013/01/11/hacking-my-own-router-with-reaver-guide-to-brute-forcing-wifi-protected-setup/) (Nathan Heafner)
  * *Guide:* [“WPS – How to install and use Reaver to detect the WPS on your home router”](http://uwnthesis.wordpress.com/2013/07/11/wps-how-to-install-and-use-reaver-to-detect-the-wps-on-your-home-router/) (University of South Wales)
  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)
* *Tutorial:* [“Resetting WPS Lockouts”](https://forums.kali.org/showthread.php?19498-MDK3-Secret-Destruction-Mode) (Kali Linux Forums)

##### Recommendation

WPS Pin entry should be disabled on the wireless router, or only enabled temporarily to add new devices to the network.