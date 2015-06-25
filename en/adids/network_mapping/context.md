### Why The Topic Matters

Wireless networks are often trusted as equivalent to the hardwired office networks they have largely replaced, but they have important differences. Wireless networks are often "visible" from outside the walls of the office - from common spaces or even the street, and even a few minutes of network "sniffing" by an adversary can enable them to work offline to reveal the network password.  Knowing this password would let someone then access the entire internal network, files shared internally, and even change network settings to enable remote access.  While in an ideal setup, this would give no further access to sensitive documents, it's not uncommon to find shared file folders, or to gain access to the firewall or network routers (often set to the default password, because they're only accessible from inside the network...).

By walking organizations through the vulnerabilities of wireless networks, you have the opportunity to discuss password strength, and the power that having "offline" access to a password means in terms of brute forcing it, as well as the importance of defense in depth even within their trusted work network - reducing the services computers and servers are sharing, setting up local firewalls on computers, and requiring authentication to access files.

### What Participants Will Learn

Participants will learn the basics of listening to wireless network traffic to identify an organization's network, acquiring the information needed to break in to the network, suggested approaches for password recovery, and guidance on things to look for once you're inside the network.

### Objectives

  * Scan the network for devices (computers, servers, network hardware)
  * Observe network traffic for further investigation

### Before you Start

  * Materials below installed and tested with necessary modules/patches applied
  * Preparation of a router (ideally) with WPA, WPS, and WEP networks set up, with a set of passphrases that seem secure, but can be broken with good password cracking procedures.
  * Multiple virtual machines with various OS's set up on a laptop.

### Materials Needed

  * Computer running Kali Linux
  * Multiple virtual machines.
  * Wireless card than can be set to monitor mode
  * Password and "normal" dictionaries downloaded for the relevant language(s)
  * Wireless network(s) with permission to try and break into ( the trainer should have a travel router to use for backup.  If neither of these are possible, capture files of relevant networks can  be substituted.)
  * Whiteboard or poster notes and markers

### Baseline Skills

##### Wireless Scanning

General knowledge of computing and radio transmissions in addition to specific knowledge of wireless protocols, services, and architectures; ability to use automated wireless scanning and sniffing tools 

##### Network Sniffing

General Transmission Control Protocol/Internet Protocol (TCP/IP) and networking knowledge; ability to interpret and analyze network traffic; ability to deploy and use network sniffing tools
