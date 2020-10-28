---
title: Wireless Range Mapping
approaches:
  - Technical
authors:
  - SAFETAG
remote_options:
  - None
skills_required:
  - Wireless
skills_trained: []
summary: >
  This component allows the auditor to show the "visibility" of an
  organization's wireless network to determine how far the organization's
  wireless network extends beyond a controlled area. Wireless networks are often
  trusted as equivalent to the hardwired office networks they have largely
  replaced, but they have important differences. Wireless networks are often
  "visible" from outside the walls of the office - from common spaces or even
  the street. Without further access, this reveals a wealth of information about
  the organization's size and the type of devices connecting to their network.
overview: >
  This component consists of wireless scanning and wireless signal mapping.  It
  is useful for organizations with offices in shared spaces/buildings/apartment
  complexes or near locations where an adversary could easily "listen" to
  network traffic. In conjuction with Monitoring Open Wireless Traffic exercise,
  it can also identify devices using that network. It is useful to do this in
  parallel with Office Mapping to build a more comprehensive view of the
  information assets of the organization.


  * Identify and verify the network(s) belonging to the organization

  * Create a map or photos indicating the range of each relevant wireless access
  point.
materials_needed: >

  * A portable wireless device (like an Android phone/tablet) is useful to map
  the network boundaries without causing undue suspicion. Some Apps like [Wifi
  analyzer](https://play.google.com/store/apps/details?id=cz.webprovider.wifianalyzer)
  and [Wifi
  Mapper](https://play.google.com/store/apps/details?id=com.osiris_mobile.wifimapper&hl=en)
  can help.
considerations: >

  * Despite this exercise covering only broadcast data, check the local laws
  which might cover this process before conducting it.

  * Consider how it looks to third parties as you are scanning a network,
  especially from outside an office.
walk_through: >

  Map the range of the organizations wireless network outside of office space,
  using wifite or other tools to track network strength.


  A variety of apps and tools can support this work without resorting to
  professional "wifi site survey" tools. If the Office Mapping exercise has
  taken place, that map can serve as the starting point to expand the map
  outside the office. If using a third party tool or app, ensure that the app is
  not sharing sensitive data.  Using simple signal strength monitors in
  combination with location notes is more than sufficient. In Linux systems, one
  can use wavemon, kismet, wifite, and even the networkmanager command line
  tools to track visible networks and their strengths [as described on
  StackExchange](https://askubuntu.com/questions/237777/is-there-a-tool-like-wifi-analyzer-for-ubuntu):


  ```

  watch  "nmcli -f "CHAN,BARS,SIGNAL,SSID" d wifi list ifname wlx10feed21ae1d  |
  sort -n"

  ```


  * https://www.netspotapp.com/ (OSX, Windows, free for non-commercial uses)

  * http://wifianalyzer.mobi,  http://wifiheat.com/ (Android)
recommendations: >

  Depending on office layout, moving the wireless access point may help to
  reduce how far the network is transmitted outside of the office space, and
  changing devices which do not move to better enable this without loss of
  functionality.


  See also Monitoring Open Wireless Traffic recommendations and Network Access
  security recommendations.
organization_size_under: 500
time_required_minutes: 30
---

