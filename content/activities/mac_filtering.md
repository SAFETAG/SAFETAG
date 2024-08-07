---
title: Accessing a MAC-filtered Network
approaches:
  - Technical
position: 50
authors:
  - SAFETAG
remote_options:
  - with-support
skills_required:
  - Wireless
  - Traffic Analysis
skills_trained: []
summary: |
  Open and MAC-address-filtered wireless access points are not only open to
  anyone within range to join and listen in to, but also do not provide
  protection to those on the network itself, even if they do not "broadcast"
  their name.  These may seem like great ways to prevent unauthorized users from
  accessing your network without resorting to passwords, but they are trivial to
  overcome.
overview: ''
materials_needed: ''
considerations: ''
walk_through: |
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
recommendations: |
  Transitioning to WPA networks with strong passwords, even for guest networks,
  is recommended.  
organization_size_under: 50
time_required_minutes: 30
---
