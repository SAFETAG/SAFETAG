### INPUT

Why? Defense in depth - “behind the firewall”

Why / pentesty?

* Password discussion with staff
* Alternative password conversation (CUPS survey)
* The conversation needs to happen and be in the report, so find a way.

Network Access Timelines and role in the Audit lifecycle

* airodumping (-w!) and wiresharking
* Grab a connection handshake
* Grab traffic for later monitoring

* Discussion of the sensitivities and opsec

A powerful first step in an audit is to be able to go in prepared, and with zero knowledge of their network, connect to it.  This comes with quite a few gotchas to having it work right, and won't always work, but certainly can underline the importance of password security if it does.

It is important to be prepared for this to not work and to not waste too much time on it.  While often, wireless networks will be secured with an easy to guess password, the laptop of an auditor is not necesarily the most powerful password-cracking device in the world. Depending on your location in the office, you may not be able to harvest the encryption handshakes you will need without being overly disruptive.

#### Accessing a Wireless Network

Organizations approach their wireless setup in a myriad of different ways based on how and where they work.  However, with wireless networks in almost every case being treated as trusted internal networks, so we need to ensure that they provide a reasonable level of equivalent security as well as using the failings of wireless networks to have further discussions with organizations over defense in depth concepts.

Encrypted networks take a bit more directed effort to access without being given the password, but many wireless networks are protected by weak passwords.  Given the value of the information inside the network, it is worthwhile to test the strength of the network password, and use it as ax way to begin a disucssion on password strength in general, as well as concepts around defense in depth, and not relying on any one "point of failure" to secure your information.

The SAFETAG team has yet to encounter a WEP network in the field, but we presume there are still some out there, and WEP can be reliably broken through brute-force attacks. While WPA is a significant improvement over WEP's security, weak passwords or WPS access are extremely common, and even the simplest dictionary attacks can open a network in minutes.	

WPS was built as an addition to WPA to make it easier to add devices without typing in secure passwords, but this ease of use means that a malicious actor can pose as a device and effectively reduce the potentially very difficult passwords WPA allows down to a simple numeric-only 8 character PIN.  Further, the WPS system allows an attacker to work on this PIN in two parallel chunks, further reducing its security.  This, like WEP, is a "live" attack - you have to stay connected to the network - but also like WEP, it is a guaranteed attack; your brute forcing of the WPS system will eventually (2-10 hours) allow you network access.


#### Password Dictionary Creation

* Using "blah" with hashcat and john
* Go through the Password Dictionary Example under the Preparation section of the full guide