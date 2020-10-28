---
title: WEP Password Cracking
approaches:
  - Technical
authors:
  - SAFETAG
remote_options:
  - None
skills_required:
  - Wireless
  - Traffic Analysis
  - Password auditing
skills_trained: []
summary: >

  WEP provides no effective protection for a wifi network. Most wifi routers
  offer WPA encryption as an option, and if this is available it should be
  immediately implemented. Some older routers (and wifi devices) do not support
  WPA. It is highly recommended to upgrade immediately to hardware that supports
  WPA and to eliminate all WEP network access.
overview: ''
materials_needed: ''
considerations: ''
walk_through: >


  The auditor can be guaranteed to access a WEP network with sufficient time by
  cracking the WEP key.

    * Start the wireless interface in monitor mode on the specific AP channel
    * Use aireplay-ng to do a fake authentication with the access point
    * Start airodump-ng on AP channel with a bssid filter to collect the new unique IVs
    * Start aireplay-ng in ARP request replay mode to inject packets
    * Run aircrack-ng to crack key using the IVs collected
recommendations: >

  **Upgrade to WPA2 oe 3 Encryption**


  WEP provides no effective protection for a wifi network. Most wifi routers
  offer WPA encryption as an option, and if this is available it should be
  immediately implemented. Some older routers (and wifi devices) do not support
  WPA. It is highly recommended to upgrade immediately to hardware that supports
  WPA and to eliminate all WEP network access. Very few devices still functional
  do not support WPA2.
organization_size_under: 1000
time_required_minutes: 120
---

