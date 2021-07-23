---
title: Network Traffic Analysis
approaches:
  - Technical
authors:
  - SAFETAG
remote_options:
  - with-support
skills_required:
  - Traffic Analysis
  - Malware Analysis
skills_trained: []
summary: >+

  Any content that is sent out over the network without encryption is easy to
  intercept; this includes email, web passwords, and chat messages.


  This attacker could be someone, such as a patron of the Internet cafe where a
  staff member is working, who just happens to be using the same local network
  to connect to the Internet. Or, she could work for an organization with
  privileged access to the relevant network, such as the Internet Service
  Provider (ISP) of either the sender or receiver and other network-backbone
  connections made along the way.

overview: >

  * Intercept network traffic

  * Review it for security concerns

  * Watch for unencrypted email (POP/SMTP/IMAP) connections, unencrypted website
  logins (for blogs, websites, and webmail in particular)
materials_needed: >

  * Wifi device and drivers supporting "promiscuous mode" (see
  http://www.aircrack-ng.org/doku.php?id=compatible_cards&DokuWiki=a36042531edb54f9b95a76ff61d77d14)
considerations: >

  * Treat captured network traffic with the utmost security and empathetic

  responsibility. They may contain very personal data, passwords, and more.
  These

  should not be shared except in specific, intentional samples with anyone,
  including

  the organization itself.
walk_through: ''
recommendations: >

  Only use services with ["SSL"
  encryption](https://securityinabox.org/en/guide/secure-communication)
  ("HTTPS"), and consider adding [HTTPS
  Everywhere](https://www.eff.org/https-everywhere) to browsers. This does not
  itself guarantee protection from all attacks, but it is a good first-step in
  protecting information (such as passwords or email) in transit from your
  computer to the service provider.
organization_size_under: 100
time_required_minutes: 240
---

