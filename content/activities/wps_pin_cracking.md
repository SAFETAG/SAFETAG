---
title: WPS PIN Cracking
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

  WPS was built as an addition to WPA to make it easier to add devices without
  typing in secure passwords, but this ease of use means that a malicious actor
  can pose as a device and effectively reduce the potentially very difficult
  passwords WPA allows down to a simple numeric-only 8 character PIN. Further,
  the WPS system allows an attacker to work on this PIN in two parallel chunks,
  further reducing its security. This, like WEP, is a &quot;live&quot; attack -
  you have to stay connected to the network - but also like WEP, it is a
  guaranteed attack; your brute forcing of the WPS system will eventually (2-10
  hours) allow you network access. 
overview: ''
materials_needed: ''
considerations: ''
walk_through: |2

    * Find the BSSID of the target routerr
    * Use Wash to find WPS Routers
    * Start Reaver : estimated time: Between 2 and 10 hours
recommendations: >-

  WPS Pin entry should be disabled on the wireless router, or only enabled
  temporarily to add new devices to the network.
organization_size_under: 1000
time_required_minutes: 60
---

