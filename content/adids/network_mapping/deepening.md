### Deepening

This portion of the module covers mapping a network as well as running deeper scans on selected targets once you have gained access. This exercise covers both using nmap and common command-line network utilities as well as using OpenVAS for vulnerability detection.

#### Mapping the network

  * airodump logging (handshakes, beacons, macs)
    * Identifying applicable clients
	  * Ones attached to the organizations wifi-router
 

##### Mapping the Network

*NOTE:*{.note} Because we are going to be using the graphical front end we will not be discussing how to collect command line output.

  * Identify hosts that are responding to pings
	```bash
	nmap -v -sP x.x.x.0/24
	```
  * Have the participants use the "no ping" flag (-Pn) to allow them to continue without a ping request. This will increase the time of these scans significantly so guide the participants in how to do this quickly.
  * Have the participants edit the scan profile to begin adding additional features such as basic OS and Version detection
  * Have the participants begin adding script functions, such as banners and smb-os-discovery - note where scripts alert the user to their safety levels.

  * Interpreting Results
	* Don't forget that other participants might show up on the network.
  * Capturing Results
    * Customizing and outputting topology for further use and documentation
    * Remember that client IP addresses will likely change over time!
 

##### Identifying servers and network hardware [STUB]

 * smbtree and nmlookup

  * Identifying up-stream devices with traceroute
    * No, we are serious, we are going to cover traceroute. Just as a reminder to use it, and to use ICMP (-I) and TCP (-T / tcptraceroute)
    * route, mtr (-rwc 10) are also useful
  * Enumerating the mapping techniques used earlier in this section up the network chain
    *NOTE:*{.note} ONLY do this with approval and within the LAN that are owned by the organization.)


##### Material that may be Useful:
  * *Guide:* ["Diagnosing Network Issues with mtr"](https://www.linode.com/docs/networking/diagnosing-network-issues-with-mtr) (Linode)
  * *Guide:* [“Zenmap GUI Users' Guide”](http://nmap.org/book/zenmap.html) (Zenmap GUI Users' Guide)
  * *Guide:* [“Surfing the Network Topology”](http://nmap.org/book/zenmap-topology.html) (Zenmap GUI Users' Guide)
  * *Overview:* [“The Purpose of a Graphical Frontend for Nmap”](http://nmap.org/book/zenmap.html#zenmap-purpose) (Zenmap GUI Users' Guide)
  * *Guide:* [“Host Detection”](http://nmap.org/book/man-host-discovery.html) (nmap Reference Guide)
  * *Guide:* [“OS Detection”](http://nmap.org/book/man-os-detection.html) (nmap Reference Guide)

#### Listening to the Network [STUB]

 * Wireshark
 * Filters
 * Privacy
 
#### Vulnerability Scanning [STUB]

  * Get OpenVAS running (see example docs)
  * Scanning with OpenVAS
  	* Scan settings , Only-Safe Checks
  	* Caveats - blocking, crashing, breaking things
  * Target one of the VMs on the network (TODO: add one with fail2ban??)


  	##### Material that may be Useful:
  * *Guide:* ["Creating OpenVAS "Only Safe Checks" Policy"](http://www.pentest-standard.org/index.php/PTES_Technical_Guidelines#Appendix_A_-_Creating_OpenVAS_.22Only_Safe_Checks.22_Policy) (PTES Technical Guide)
