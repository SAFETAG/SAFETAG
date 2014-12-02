### Deepening

This portion of the module covers scanning an internal network once you have gained access. We tried to tie each exercise to an existing guide or tutorial so that we could support existing translation efforts for the tools used.

##### What trainees will need

  * Computer running Kali Linux
  * Wireless card that can be set to monitor mode

##### What you will need

  * Pre-configure a wireless access point to serve WEP and WPA networks, and enable WPS for WPA. The WPA password should be quickly crackable based on the password attacks above. The WEP network should be configured to use 64 bit encryption to speed the practice.
  * Network to target (with permission)
  * It may be helpful to print out copies of the guides tied to each section before hand if there will be limited internet access at the training site.



#### MACs and wireless beacons

After documenting and discussing access, you can turn your attention to mapping out the network. Your airodump logs should already have a wealth of devices listed by MAC address, their beacons, and the APs they're connected to. This is a great first step in identifying the users of various devices. In addition, you should note down the MAC addresses of any network devices the auditor(s) are using, so as to be able to easily filter those out of later analysis.

  * airodump logging (handshakes, beacons, macs)
    * Identifying applicable clients
	  * Ones attached to the organizations wifi-router
    * Documenting Finding [STUB]
  * Connecting to Assets and Processes [STUB]
   
##### Material that may be Useful:

  * *Documentation:* [“Airodump-ng”](http://www.aircrack-ng.org/doku.php?id=airodump-ng) (Aircrack-ng Wiki)

#### Setting up Exploitation VM [STUB]

Before you start the mapping exercises you will need to set up a laptop with multiple vulnerable virtual machines.

  * Set up virtual machines [TODO]
  * Connect a computer with multiple exploitable virtual machines to the router.
  * Have one or two of the virtual machines not respond to ping's or other ICMP traffic. [TODO]

##### Material that may be Useful:

  * *Guide:* [“********”](********) (******)

#### Host Discovery [STUB]

The next step is to use the nmap network scanning tool to discover other hosts on the network. We will mostly use ZenMap (a graphical frontend to nmap) because it makes documentation easier.

*NOTE:*{.note} Because we are going to be using the graphical front end we will not be discussing how to collect command line output.

  * Turn on virtual environments
  * Identify hosts that are responding to pings
	
	```bash
	nmap -v -sP x.x.x.0/24
	```

  * Have the participants use the "no ping" flag (-Pn) to allow them to continue without a ping request. This will increase the time of these scans significantly so guide the participants in how to do this quickly.

  * Interpreting Results
	* Don't forget that other participants might show up on the network.
  * Documenting Finding
  * Capturing Results
    * Customizing and outputting topology for further use and documentation
  * Connecting to Assets and Processes


##### Material that may be Useful:

  * *Guide:* [“Zenmap GUI Users' Guide”](http://nmap.org/book/zenmap.html) (Zenmap GUI Users' Guide)
  * *Guide:* [“Surfing the Network Topology”](http://nmap.org/book/zenmap-topology.html) (Zenmap GUI Users' Guide)
  * *Overview:* [“The Purpose of a Graphical Frontend for Nmap”](http://nmap.org/book/zenmap.html#zenmap-purpose) (Zenmap GUI Users' Guide)
  * *Guide:* [“Host Detection”](http://nmap.org/book/man-host-discovery.html) (nmap Reference Guide)

#### OS Detection

  * Turn on virtual environments
  * Run an OS detection scan against the network.
  
    ```bash
	nmap -v -O --osscan-guess -sSU x.x.x.0/24
	```
	
  * Interpreting Results
    * Using beacon information gathered earlier, in combination with the computer hostnames identify what devices belong to which individual.
  * Capturing Results [STUB]
  * Documenting Finding [STUB]
  * Connecting to Assets and Processes [STUB]

##### Material that may be Useful:

  * *Guide:* [“Zenmap GUI Users' Guide”](http://nmap.org/book/zenmap.html) (Zenmap GUI Users' Guide)
  * *Guide:* [“OS Detection”](http://nmap.org/book/man-os-detection.html) (nmap Reference Guide)

#### Identifying servers and network hardware [STUB]

  * Turn on virtual environments
  * Identifying up-stream devices with traceroute
    * No, we are serious were going to cover traceroute. Just as a reminder to use it.
  * Enumerating the mapping techniques used earlier in this section up the network chain
    *NOTE:*{.note} ONLY do this with approval and within the LAN that are owned by the organization.)
  * Documenting Finding
  * Connecting to Assets and Processes

##### Material that may be Useful:

  * *Guide:* [“Zenmap GUI Users' Guide”](http://nmap.org/book/zenmap.html) (Zenmap GUI Users' Guide)
  * *Guide:* [“OS Detection”](http://nmap.org/book/man-os-detection.html) (nmap Reference Guide)
