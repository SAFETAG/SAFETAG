### INPUT

This section includes reccomended case studies, key messages and some materials to get the point across.

### Accessing a Wireless Network

*Introduction:* Organizations approach their wireless setup in a myriad of different ways based on how and where they work.  However, with wireless networks in almost every case being treated as trusted internal networks, so we need to ensure that they provide a reasonable level of equivalent security as well as using the failings of wireless networks to have further discussions with organizations over defense in depth concepts.

#### Encrypted Networks

Encrypted networks take a bit more directed effort to access without being given the password, but many wireless networks are protected by weak passwords.  Given the value of the information inside the network, it is worthwhile to test the strength of the network password, and use it as ax way to begin a disucssion on password strength in general, as well as concepts around defense in depth, and not relying on any one "point of failure" to secure your information.

##### Interaction with the Participants: [STUB]

Sonet mediocrem et sea, vix at inani falli disputationi.

  * We focus on using aircrack-ng.

  * The SAFETAG team has yet to encounter a WEP network in the field, but we presume there are still some out there, and WEP can be reliably broken through brute-force attacks. While WPA is a significant improvement over WEP's security, weak passwords are extremely common, and even the simplest dictionary attacks can open a network in minutes.	

  * WPA provides the best option for securing a wireless network, but it is susceptible to weak passwords, or leaving WPS active.

  * WPS was built as an addition to WPA to make it easier to add devices without typing in secure passwords, but this ease of use means that a malicious actor can pose as a device and effectively reduce the potentially very difficult passwords WPA allows down to a simple numeric-only 8 character PIN.  Further, the WPS system allows an attacker to work on this PIN in two parallel chunks, further reducing its security.  This, like WEP, is a "live" attack - you have to stay connected to the network - but also like WEP, it is a guaranteed attack; your brute forcing of the WPS system will eventually (2-10 hours) allow you network access.

  * If an office had an open or MAC-address-filtering network, you can first see if you can access the office's network from a public space nearby (a street, a park, or even a shared hallway in a building).  MAC address filtering seems like a good idea, but these can be spoofed quite easily (and new Apple devices use fake MAC addresses when looking for networks to reduce beacon privacy problems).

  * After gathering some screenshots/photos of accessing the network from outside the office if possible, you should skip straight to the network sniffing stage.

  * While outside the scope of SAFETAG audits, if you have spare time, you might help them implement WPA encryption, combined with an Internet-access-only guest network if their wireless router supports that, walking through some of the wireless network password discussions.

##### Talking points for the trainer [STUB]

With the case study concluded, the trainer now directs participants to their Class Notes.

1. Pro solum postea cetero at, volutpat dissentiunt sed eu. Ad has illud repudiandae, nec labore alienum liberavisse ea, at per ponderum tincidunt deseruisse.
    * Sonet mediocrem et sea, vix at inani falli disputationi. Eos efficiantur necessitatibus id.
	* Consul instructior his an, vel dico epicurei ea, cu vis saepe dicant qualisque. Quod ancillae salutandi cu vim, feugait postulant eu nec.


##### Compiled from: [STUB]

  * *Article*: ["How things happen with stuff."](https://things.stuff.edu) (Things International)

