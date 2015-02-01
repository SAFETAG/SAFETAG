### INPUT



#### Network Mapping and Service Discovery

After documenting and discussing access, you can turn your attention to mapping out the network.  Your airodump logs from the Network Discovery phase should already have a wealth of devices listed by MAC address, their beacons, and the APs they're connected to.  This is a great first step in identifying the users of various devices.  In addition, you should note down the MAC addresses of any network devices the auditor(s) are using, so as to be able to easily filter those out of later analysis.

The next step now that the auditor has access to the network is to use a network scanning tool, such as ZenMap (a graphical frontend to nmap) to match MAC addresses with IPs and computer details.  Note that while IP addresses are much more convenient to keep track of, they tend to change throughout the course of an audit, so ensure that you keep track of MAC addresses as well as the IP addresses of devices of interest.

The next step is to use a network scanning tool, such as ZenMap (a graphical frontend to nmap) to match MAC addresses with IPs and computer details.  This paints a more complete picture of the office's network setup. Using beacon information, in combination with the computer hostnames, you can often map most devices to their owners.

In the Deepening, we will work through more advanced nmap usage, OS detection and more.

##### Identifying network hardware

Note which hosts on the network do not appear to be standard workstations - are there webservers?  Fileservers? Other non-user devices? If it is a Microsoft-heavy network, exploring the workgroup/domain landscape is also useful (both inside nmap and using smbtree)

It is also useful to note down network hardware - what is at 192.168.0.1, 10.0.0.1, and so on.  Determining the wireless router, and what it connects to (often it is behind a cablemodem or DSL modem itself).  

Checking in to see if these routers are still set up with the default passwords strays into the work of vulnerability mapping, but also provides a great chance to discuss the value of multiple lines of defense, and not just relying on the fact that someone "has to be on the network already" before they can access the router. http://www.defaultpassword.com/ and http://www.routerpasswords.com/ are your friends here.

##### Material that may be Useful:
  * *Guide:* [nmap](http://nmap.org/book/vscan.html)
  * *Guide:* [Using Scripts](http://nmap.org/nsedoc/index.html)
  * *Guide:* ["Diagnosing Network Issues with mtr"](https://www.linode.com/docs/networking/diagnosing-network-issues-with-mtr) (Linode)
  * *Guide* [nmap Reference Guide](http://bandwidthco.com/whitepapers/netforensics/recon/nmap/NMAP%20Reference%20Guide.pdf) (BandwidthCo)
  * *Guide:* [“Zenmap GUI Users' Guide”](http://nmap.org/book/zenmap.html) (Zenmap GUI Users' Guide)
  * *Guide:* [“Surfing the Network Topology”](http://nmap.org/book/zenmap-topology.html) (Zenmap GUI Users' Guide)
  * *Overview:* [“The Purpose of a Graphical Frontend for Nmap”](http://nmap.org/book/zenmap.html#zenmap-purpose) (Zenmap GUI Users' Guide)
  * *Guide:* [“Host Detection”](http://nmap.org/book/man-host-discovery.html) (nmap Reference Guide)
  * *Guide:* [“OS Detection”](http://nmap.org/book/man-os-detection.html) (nmap Reference Guide)
* *Guide:* [“Vendor Lookup by MAC address”](http://www.coffer.com/mac_find/) **Note** Only use the first 4 to 6 characters of the MAC address

#### Network Traffic Analysis: Listening to the Network

Taking a sample packet capture while you're otherwise engaged is a sometime valuable insight into the network as well.  Analyzing it in the evening for unusual traffic or services that have not yet been enumerated (e.g. dropbox) is useful.  Some caveats here are that the majority of the traffic you will likely see is broadcast information, unless you are particularly centrally located.

Wireshark is the preferred tool for this.  It has powerful (if not the most user friendly) filtering tools.  A useful filter is:

!(udp.dstport == 1900 && http) && !dhcpv6 && !db-lsp-disc && !icmpv6 && !arp && !nbns && !dns && !((eth.addr == AA:BB:CC:DD:EE:FF) || (eth.addr == FF:EE:CC:DD:BB:AA))

replacing the AA... and FF... with the mac addresses of the auditors.  The rest of the filters crop out much of the most "boring" network traffic, though at the outset, it's best to just filter out the auditor traffic and then begin tuning out other noisy protocols.

##### Operational Security and Responsibility Note

It is entirely possible that you could capture **extremely sensitive information** with this packet capture - anything from unencrypted personal chats to passwords to work and non-work services, or worse.  **Never share the raw packet capture** - Wireshark has a powerful export functionality to export filtered views, specific ranges and only selected packets. If you need data from the capture, export only what you need and carefully examine the export to ensure nothing sensitive is accidentally included.  Consider deleting the raw packet capture file after you have studied and exported filtered versions of it. 

#### Vulnerability Scanning

Once you've mapped the network and discovered some potentially more interesting hosts to focus on for a second look, nmap offers a great deal of more powerful (and more invasive) scan options to provide more comprehensive results.  These options tend to vastly increase the time of the scan, so for many reasons, running them against the entire network may be ill advised.

##### Using OpenVas

For a very comprehensive scan that's especially valuable against complex servers, OpenVAS provides a difficult -- and dangerous -- solution.  OpenVAS is the open source fork of the now-proprietary Nessus vulnerability scanner.  It can be highly aggressive, and so we will walk through some of the settings of its default scans.


##### Other Tools

We will also play with some alternatives to these tools which often provide the most valuable information without being quite so invasive.


##### Operational Security and Responsibility Note

OpenVAS and other vulnerability scanners can be highly aggressive in their tactics.  Tools like Metasploit come with a library of active, functional exploits to "prove" that a system is actively vulnerable.  As such, these can be tricky to use.  Even OpenVAS on a safe-only scan can appear to a host as an active attack, blocking further access from your IP (this can cause some annoyance if you are, for example, scanning your host organization's website from their network).  Some of these scans and techniques -- again, even the "safe" ones -- can also be a violation of local hacking laws.  Get explicit permission, give warnings, and be careful.

##### Material that may be Useful:

  * *Guide:* ["Creating OpenVAS "Only Safe Checks" Policy"](http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines#Appendix_A_-_Creating_OpenVAS_.22Only_Safe_Checks.22_Policy) (PTES Technical Guide)


#### Vulnerability Research

Drawing from the information gleaned from network mapping and vulnerability scanning, audtiors should (using a VPN) do some light follow-on research during the audit to uncover known vulnerabilities of their existing systems.

Pulling "banners" and doing OS/Version detection against selected hosts can reveal many otherwise hidden services running on the network.  Checking these against online vulnerability databases for current CVEs often reveals some issues the host organization may want to resolve.

  * Service Identification
  * Vulnerability Databases
  * Default Configurations

##### Service Identification

  * Mapping Versions
  * Identifying Patch Levels - Secunia?
  * Identify Weak ports or services
  * Identify Lockout Threshhold
  * Identifying all odd/obscure/one-off Services


##### Vulnerability Databases

Comparing the services, applications, and operating systems of identified hosts against vulnerability databases.  In the Deepening component we will explore some of these specifically.


##### Default Configurations

Identifying vulnerabilities in Default Configurations & common pitfalls


##### Material that may be Useful:

  * *Standard* [Vulnerability Analysis -  Research Phase](http://www.pentest-standard.org/index.php/Vulnerability_Analysis#Research) (Penetration Testing Execution Standard)
  
  * *Framework* [Vulnerability Assessment](http://www.vulnerabilityassessment.co.uk/Penetration%20Test.html#FMFreemind_Link_1513945467FM) (http://www.vulnerabilityassessment.co.uk)
  
  * *Poster* [Ultimate Pen Test 2013](https://www.sans.org/security-resources/posters/ultimate-pen-test-2013-45) (SANS Institute)
  
  * *Report* [The Common Vulnerability Scoring System (CVSS) and Its Applicability to Federal Agency Systems](http://csrc.nist.gov/publications/nistir/ir7435/NISTIR-7435.pdf) (NIST - National Institute of Standards and Technology)

  * *Report* [The Common Configuration Scoring System (CCSS): Metrics for Software Security Configuration Vulnerabilities](http://csrc.nist.gov/publications/nistir/ir7502/nistir-7502_CCSS.pdf) (NIST - National Institute of Standards and Technology)

  * *Directory* [Standardization Activities and Initiatives](http://measurablesecurity.mitre.org/directory/categories/) (The MITRE Corporation)
