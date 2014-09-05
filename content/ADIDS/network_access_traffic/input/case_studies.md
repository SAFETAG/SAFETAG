---
type: ADIDS
id: adids-input-case_studies
...

### Accessing a Wireless Network

*Introduction:* Organizations approach their wireless setup in a myriad of different ways based on how and where they work.  However, with wireless networks in almost every case being treated as trusted internal networks, so we need to ensure that they provide a reasonable level of equivalent security as well as using the failings of wireless networks to have further discussions with organizations over defense in depth concepts.

The ideal first step is to be able to go in prepared, and with zero knowledge of their network, connect to it.  This comes with quite a few gotchas to having it work right, and won't always work, but certainly can underline the importance of password security if it does.

*First steps:*

  * Scan for networks
  * determine/guess the office network - some are obfuscated
  * confirm the office network before proceeding
  * airodump logging (handshakes, beacons, macs)

#### A. Open or MAC-address-filtered network

If an office had an open or MAC-address-filtering network, you can first see if you can access the office's network from a public space nearby (a street, a park, or even a shared hallway in a building).  MAC address filtering seems like a good idea, but these can be spoofed quite easily (and new Apple devices use fake MAC addresses when looking for networks to reduce beacon privacy problems).

After gathering some screenshots/photos of accessing the network from outside the office if possible, you should skip straight to the network sniffing stage.

While outside the scope of SAFETAG audits, if you have spare time, you might help them implement WPA encryption, combined with an Internet-access-only guest network if their wireless router supports that, walking through some of the wireless network password discussions.

##### Interaction with the Participants: [STUB]

Using the 

  * Ad usu latine voluptatibus, vim elit homero at, sit prima eruditi legimus id.

##### Talking points for the trainer [STUB]

With the case study concluded, the trainer now directs participants to their Class Notes.

1. Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse.
    * Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id.
	* Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.


##### Compiled from: [STUB]

  * *Article*: ["How things happen with stuff."](https://things.stuff.edu) (Things International)

#### B. Encrypted Networks

Encrypted networks take a bit more directed effort to access without being given the password, but many wireless networks are protected by weak passwords.  Given the value of the information inside the network, it is worthwhile to test the strength of the network password, and use it as ax way to begin a disucssion on password strength in general, as well as concepts around defense in depth, and not relying on any one "point of failure" to secure your information.

We focus on using aircrack-ng.

##### Interaction with the Participants: [STUB]

Sonet mediocrem et sea, vix at inani falli disputationi.

  * Ad usu latine voluptatibus, vim elit homero at, sit prima eruditi legimus id.


##### Talking points for the trainer [STUB]

With the case study concluded, the trainer now directs participants to their Class Notes.

1. Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse.
    * Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id.
	* Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.


##### Compiled from: [STUB]

  * *Article*: ["How things happen with stuff."](https://things.stuff.edu) (Things International)

#### C. WEP Networks

The SAFETAG team has yet to encounter a WEP network in the field, but we presume there are still some out there, and WEP can be reliably broken through brute-force attacks. While WPA is a significant improvement over WEP's security, weak passwords are extremely common, and even the simplest dictionary attacks can open a network in minutes.	

##### Interaction with the Participants: [STUB]

Sonet mediocrem et sea, vix at inani falli disputationi.

  * Ad usu latine voluptatibus, vim elit homero at, sit prima eruditi legimus id.

##### Talking points for the trainer [STUB]

With the case study concluded, the trainer now directs participants to their Class Notes.

1. Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse.
    * Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id.
	* Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.


##### Compiled from: [STUB]

  * *Article*: ["How things happen with stuff."](https://things.stuff.edu) (Things International)

#### D. WPA Networks

WPA provides the best option for securing a wireless network, but it is susceptible to weak passwords, or leaving WPS active.

##### WPS Attacks

Let's first cover WPS.  It was built as an addition to WPA to make it easier to add devices without typing in secure passwords, but this ease of use means that a malicious actor can pose as a device and effectively reduce the potentially very difficult passwords WPA allows down to a simple numeric-only 8 character PIN.  Further, the WPS system allows an attacker to work on this PIN in two parallel chunks, further reducing its security.  This, like WEP, is a "live" attack - you have to stay connected to the network - but also like WEP, it is a guaranteed attack; your brute forcing of the WPS system will eventually (2-10 hours) allow you network access.

##### Interaction with the Participants: [STUB]

Sonet mediocrem et sea, vix at inani falli disputationi.

  * Ad usu latine voluptatibus, vim elit homero at, sit prima eruditi legimus id.


##### Talking points for the trainer [STUB]

With the case study concluded, the trainer now directs participants to their Class Notes.

1. Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse.
    * Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id.
	* Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.

##### Compiled from: [STUB]

  * *Article*: ["How things happen with stuff."](https://things.stuff.edu) (Things International)


### Mapping the Network

*Introduction:* Once you have access to the network, you need to first document how you managed that and share it with the hosts.  This is a great moment to discuss passwords in many cases.  If you didn't manage to break through the password it's not worth the precious audit time to brute force it - simply ask for the password and move on.  If it's a WPA network, you can work on cracking the password after hours, if only to demonstrate the amount of time their current password would "protect" them for against a dedicated attacker.

#### A. MACs and beacons

After documenting and discussing access, you can turn your attention to mapping out the network.  Your airodump logs should already have a wealth of devices listed by MAC address, their beacons, and the APs they're connected to.  This is a great first step in identifying the users of various devices.  In addition, you should note down the MAC addresses of any network devices the auditor(s) are using, so as to be able to easily filter those out of later analysis.

##### Compiled from: [STUB]

  * *Article*: ["How things happen with stuff."](https://things.stuff.edu) (Things International)

##### Interaction with the Participants: [STUB]

Sonet mediocrem et sea, vix at inani falli disputationi.

  * Ad usu latine voluptatibus, vim elit homero at, sit prima eruditi legimus id.

##### Talking points for the trainer [STUB]

With the case study concluded, the trainer now directs participants to their Class Notes.

1. Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse.
    * Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id.
	* Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.

#### B. Mapping the network: nmap/ZenMap

The next step is to use a network scanning tool, such as ZenMap (a graphical frontend to nmap) to match MAC addresses with IPs and computer details.  This paints a more complete picture of the office's network setup. Using beacon information, in combination with the computer hostnames, you can often map most devices to their owners.

##### Compiled from: [STUB]

  * *Article*: ["How things happen with stuff."](https://things.stuff.edu) (Things International)

##### Interaction with the Participants: [STUB]

Sonet mediocrem et sea, vix at inani falli disputationi.

  * Ad usu latine voluptatibus, vim elit homero at, sit prima eruditi legimus id.

##### Talking points for the trainer [STUB]

With the case study concluded, the trainer now directs participants to their Class Notes.

1. Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse.
    * Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id.
	* Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.


#### C. Identifying servers and network hardware, Upstream hardware (traceroute)

It is also useful to note down network hardware - what is at 192.168.0.1, 10.0.0.1, and so on.  Determining the wireless router, and what it connects to (often it is behind a cablemodem or DSL modem itself).  Checking in to see if these are still set up with the default passwords strays into the work of vulnerability mapping, but also provides a great chance to discuss the value of multiple lines of defense, and not just relying on the fact that someone "has to be on the network already" before they can access the router. http://www.defaultpassword.com/ and http://www.routerpasswords.com/ are your friends here.

##### Interaction with the Participants: [STUB]

Sonet mediocrem et sea, vix at inani falli disputationi.

  * Ad usu latine voluptatibus, vim elit homero at, sit prima eruditi legimus id.


##### Talking points for the trainer [STUB]

With the case study concluded, the trainer now directs participants to their Class Notes.

1. Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse.
    * Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id.
	* Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.

##### Compiled from: [STUB]

  * *Article*: ["How things happen with stuff."](https://things.stuff.edu) (Things International)
