---
type: ADIDS
id: adids-traffic-assessment-index
...

# 8. Accessing and Exploring a Network [stub]

<!-- ![](content/images/network_access.png "") -->

  *  Access
    * Wifi Access Assessment
      * WEP
      * WPA
      * WPS
  * Internal
  	* Exploring a Network
	* Routers and Firewalls

!INCLUDE "ADIDS/network_access_traffic/context/summary.md"

### Why The Topic Matters [stub]

Wireless networks are often trusted as equivalent to the hardwired office networks they have largely replaced, but they have important differences. Wireless networks are often "visible" from outside the walls of the office - from common spaces or even the street, and even a few minutes of network "sniffing" by an adversary can enable them to work offline to reveal the network password.  Knowing this password would let someone then access the entire internal network, files shared internally, and even change network settings to enable remote access.  While in an ideal setup, this would give no further access to sensitive documents, it's not uncommon to find shared file folders, or to gain access to the firewall or network routers (often set to the default password, because they're only accessible from inside the network...).

By walking organizations through the vulnerabilities of wireless networks, you have the opportunity to discuss password strength, and the power that having "offline" access to a password means in terms of brute forcing it, as well as the importance of defense in depth even within their trusted work network - reducing the services computers and servers are sharing, setting up local firewalls on computers, and requiring authentication to access files.

!INCLUDE "ADIDS/network_access_traffic/context/why_it_matters.md"

### What Participants Will Learn [stub]

Participants will learn the basics of listening to wireless network traffic to identify an organization's network, acquiring the information needed to break in to the network, suggested approaches for password recovery, and guidance on things to look for once you're inside the network.

!INCLUDE "ADIDS/network_access_traffic/context/what_participants_will_learn.md"

### Objectives {.sidebar}

Identify an organization's network
Determine its security type
Acquire the data necessary for password discovery
Use password recovery tools to find passwords
Access the network
Scan the network for devices (computers, servers, network hardware)
Observe network traffic for further investigation

!INCLUDE "ADIDS/network_access_traffic/context/objectives.md"

### Baseline Skills

!INCLUDE "ADIDS/network_access_traffic/context/baseline_skills.md"

### Before you Start [stub]

<?trainer resources?>

Materials below installed and tested with necessary modules/patches applied
Preparation of a router (ideally) with WPA, WPS, and WEP networks set up, with a set of passphrases that seem secure, but can be broken with good password attacking procedures.

!INCLUDE "ADIDS/network_access_traffic/context/before_you_start.md"

### Materials Needed [stub]

Computer running Kali Linux
Wireless card than can be set to monitor mode
Password and "normal" dictionaries downloaded for the relevant language(s)
Wireless network(s) with permission to try and break into (the trainer should have a travel router to use for backup.  If neither of these are possible, capture files of relevant networks can  be substituted.chrochrch)
Whiteboard or poster notes and markers

!INCLUDE "ADIDS/network_access_traffic/context/materials_needed.md"

## Activity [stub] {.activity}

Auditor provides scenerios that allow a trainee to explore ways they would use/focus a auditing technique with the identified risks in the case study provided.  While going through these scenarios, build a "generic" network map with the organization's laptops, mail server, router, wifi hotspot, and cloud services. Identify potentially unencrypted or unauthenticated network traffic (file shares, website logins).  While the firewall is a great front-line defense against attacks coming across the Internet, a snoopy neighrbor or actual adversary can use the wireless network to jump straight past it with very little effort.

Sample scenarios:
  * Organization with a large in-office staff using the wifi which gives them access to internal services.
  * Organization that uses mostly google docs with documents either shared ad-hoc between indiviudals personal or work gmail accounts, or under a organizational account that shares everything with staff.
  * Organization with mostly in-field staff who use an internal mail service and VPN.

## Discussion [stub] {.discussion}

  * How do wireless networks impact security differently from wired?  Note that this extends beyond the LAN/location of the office through the beaconing of wireless devices.
  * How do the various types of internal privlage separation change what "access" means?
  * Where do hosted services help?  Where do they hurt?

## Input [stub] {.input}

<?This is usually the lecture part of the session. The trainer presents on issues, sub-topics and more advanced concepts related to focus of the session.?>

### Accessing a Wireless Network ###

  * Introduction to aircrack-ng
    * Wifi Access Assessment
    * airodump-ng
      * Open and MAC-filtered networks
      * WEP
	    * WEP cracking tools
      * WPA
	    * Password Cracking
		  * Building password dictionaries
      * WPS
	    * PIN choice, etc

Organizations approach their wireless setup in a myriad of different ways based on how and where they work.  However, with wireless networks in almost every case being treated as trusted internal networks, so we need to ensure that they provide a reasonable level of equivalent security as well as using the failings of wireless networks to have further discussions with organizations over defense in depth concepts.

The ideal first step is to be able to go in prepared, and with zero knowledge of their network, connect to it.  This comes with quite a few gotchas to having it work right, and won't always work, but certainly can underline the importance of password security if it does.

First steps

Scan for networks
determine/guess the office network - some are obfuscated
confirm the office network before proceeding
airodump logging (handshakes, beacons, macs)


#### Open or MAC-address-filtered network ####

If an office had an open or MAC-address-filtering network, you can first see if you can access the office's network from a public space nearby (a street, a park, or even a shared hallway in a building).  MAC address filtering seems like a good idea, but these can be spoofed quite easily (and new Apple devices use fake MAC addresses when looking for networks to reduce beacon privacy problems).

After gathering some screenshots/photos of accessing the network from outside the office if possible, you should skip straight to the network sniffing stage.

While outside the scope of SAFETAG audits, if you have spare time, you might help them implement WPA encryption, combined with an Internet-access-only guest network if their wireless router supports that, walking through some of the wireless network password discussions.

#### Encrypted Networks ####

Encrypted networks take a bit more directed effort to access without being given the password, but many wireless networks are protected by weak passwords.  Given the value of the information inside the network, it is worthwhile to test the strength of the network password, and use it as ax way to begin a disucssion on password strength in general, as well as concepts around defense in depth, and not relying on any one "point of failure" to secure your information.

We focus on using aircrack-ng.

#### WEP Networks #####
The SAFETAG team has yet to encounter a WEP network in the field, but we presume there are still some out there, and WEP can be reliably broken through brute-force attacks. While WPA is a significant improvement over WEP's security, weak passwords are extremely common, and even the simplest dictionary attacks can open a network in minutes.	

Step 1....
  * WEP Cracking - http://www.aircrack-ng.org/doku.php?id=simple_wep_crack


#### WPA Networks ####

WPA provides the best option for securing a wireless network, but it is susceptible to weak passwords, or leaving WPS active.

##### WPS Attacks #####

Let's first cover WPS.  It was built as an addition to WPA to make it easier to add devices without typing in secure passwords, but this ease of use means that a malicious actor can pose as a device and effectively reduce the potentially very difficult passwords WPA allows down to a simple numeric-only 8 character PIN.  Further, the WPS system allows an attacker to work on this PIN in two parallel chunks, further reducing its security.  This, like WEP, is a "live" attack - you have to stay connected to the network - but also like WEP, it is a guaranteed attack; your brute forcing of the WPS system will eventually (2-10 hours) allow you network access.

Step 1....


##### WPA Attacks #####

The beauty of breaking in to a WPA protected network is that it is an offline attack.  Once you collect a WPA handshake from the network, you no longer need to be in the network's vicinity.  The challenge is that a sufficiently secure password can prevent you from accessing the network.  The reality is that most passwords are not very secure against "offline" password cracking programs.

  * WPA / Password Cracking - http://www.aircrack-ng.org/doku.php?id=cracking_wpa

(Bring in John and Crunch details from safetag section)


### Mapping the Network ###

Once you have access to the network, you need to first document how you managed that and share it with the hosts.  This is a great moment to discuss passwords in many cases.  If you didn't manage to break through the password it's not worth the precious audit time to brute force it - simply ask for the password and move on.  If it's a WPA network, you can work on cracking the password after hours, if only to demonstrate the amount of time their current password would "protect" them for against a dedicated attacker.

#### MACs and beacons

After documenting and discussing access, you can turn your attention to mapping out the network.  Your airodump logs should already have a wealth of devices listed by MAC address, their beacons, and the APs they're connected to.  This is a great first step in identifying the users of various devices.  In addition, you should note down the MAC addresses of any network devices the auditor(s) are using, so as to be able to easily filter those out of later analysis.

#### Mapping the network: nmap/ZenMap

The next step is to use a network scanning tool, such as ZenMap (a graphical frontend to nmap) to match MAC addresses with IPs and computer details.  This paints a more complete picture of the office's network setup. Using beacon information, in combination with the computer hostnames, you can often map most devices to their owners.

#### Passive OS detection:

"P0f is a tool that utilizes an array of sophisticated, purely passive traffic fingerprinting mechanisms to identify the players behind any incidental TCP/IP communications (often as little as a single normal SYN) without interfering in any way." - [P0f v3 Release Announcement](http://lcamtuf.coredump.cx/p0f3/)

#### Identifying servers and network hardware, Upstream hardware (traceroute)

It is also useful to note down network hardware - what is at 192.168.0.1, 10.0.0.1, and so on.  Determining the wireless router, and what it connects to (often it is behind a cablemodem or DSL modem itself).  Checking in to see if these are still set up with the default passwords strays into the work of vulnerability mapping, but also provides a great chance to discuss the value of multiple lines of defense, and not just relying on the fact that someone "has to be on the network already" before they can access the router. http://www.defaultpassword.com/ and http://www.routerpasswords.com/ are your friends here.

<!-- ## Deepening [stub] {.deepening} -->

!INCLUDE "ADIDS/network_access_traffic/deepening/index.md"

## Synthesis [stub] {.synthesis}

<?A good training habit is to always summarize the session. Talk about what happened in the session, some of the results of the discussion, what issues were discussed, what solutions were made, and give some more time for participants to ask more questions before the session is closed.?>

* Limits of wireless cracking in the field (and when to give up)
* Password security
* Defense in depth
