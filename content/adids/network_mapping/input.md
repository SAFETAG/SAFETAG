### INPUT


#### Mapping the Network

After documenting and discussing access, you can turn your attention to mapping out the network.  Your airodump logs from the Network Discovery phase should already have a wealth of devices listed by MAC address, their beacons, and the APs they're connected to.  This is a great first step in identifying the users of various devices.  In addition, you should note down the MAC addresses of any network devices the auditor(s) are using, so as to be able to easily filter those out of later analysis.

The next step is to use a network scanning tool, such as ZenMap (a graphical frontend to nmap) to match MAC addresses with IPs and computer details.  This paints a more complete picture of the office's network setup. Using beacon information, in combination with the computer hostnames, you can often map most devices to their owners.

##### C. Identifying servers and network hardware, Upstream hardware

Note which hosts on the network do not appear to be standard workstations - are there webservers?  Fileservers? Other non-user devices? If it is a Microsoft-heavy network, exploring the workgroup/domain landscape is also useful (both inside nmap and using smbtree)

It is also useful to note down network hardware - what is at 192.168.0.1, 10.0.0.1, and so on.  Determining the wireless router, and what it connects to (often it is behind a cablemodem or DSL modem itself).  

Checking in to see if these routers are still set up with the default passwords strays into the work of vulnerability mapping, but also provides a great chance to discuss the value of multiple lines of defense, and not just relying on the fact that someone "has to be on the network already" before they can access the router. http://www.defaultpassword.com/ and http://www.routerpasswords.com/ are your friends here.

#### Listening to the Network

Taking a sample packet capture while you're otherwise engaged is a sometime valuable insight into the network as well.  Analyzing it in the evening for unusual traffic or services that have not yet been enumerated (e.g. dropbox) is useful.  Some caveats here are that the majority of the traffic you will likely see is broadcast information, unless you are particularly centrally located.

Wireshark is the preferred tool for this.  It has powerful (if not the most user friendly) filtering tools.  A useful filter is:

!(udp.dstport == 1900 && http) && !dhcpv6 && !db-lsp-disc && !icmpv6 && !arp && !nbns && !dns && !((eth.addr == AA:BB:CC:DD:EE:FF) || (eth.addr == FF:EE:CC:DD:BB:AA))

replacing the AA... and FF... with the mac addresses of the auditors.  The rest of the filters crop out much of the most "boring" network traffic, though at the outset, it's best to just filter out the auditor traffic and then begin tuning out other noisy protocols.

##### Operational Security and Responsibility Note

It is entirely possible that you could capture **extremely sensitive information** with this packet capture - anything from unencrypted personal chats to passwords to work and non-work services, or worse.  **Never share the raw packet capture** - Wireshark has a powerful export functionality to export filtered views, specific ranges and only selected packets. If you need data from the capture, export only what you need and carefully examine the export to ensure nothing sensitive is accidentally included.  Consider deleting the raw packet capture file after you have studied and exported filtered versions of it. 

### Discovering Vulnerabilities

Once you've mapped the network and discovered some potentially more interesting hosts to focus on for a second look, nmap offers a great deal of more powerful (and more invasive) scan options to provide more comprehensive results.  These options tend to vastly increase the time of the scan, so for many reasons, running them against the entire network may be ill advised.

Pulling "banners" and doing OS/Version detection against selected hosts can reveal many otherwise hidden services running on the network.  Checking these against online vulnerability databases for current CVEs often reveals some issues the host organization may want to resolve.

For a very comprehensive scan that's especially valuable against complex servers, OpenVAS provides a difficult -- and dangerous -- solution.  OpenVAS is the open source fork of the now-proprietary Nessus vulnerability scanner.  It can be highly aggressive, and so we will walk through some of the settings of its default scans.
