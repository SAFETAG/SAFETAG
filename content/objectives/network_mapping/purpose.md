TODO \n

The value of the network discovery component depends on the risk assessment of the organization. In many cases, an organization may not want the name of their wireless network to be associated with to their organization. 

Device beacons are also of interest, as they can reveal organizational links, as well as travel, favorite hotspots, and more.  Beacons can "de-anonymize" an obfuscated network name as well as provide rich content for social engineering attacks. This provides an only-lightly-invasive introduction to discuss the trackability of devices, particularly mobiles and laptops.

Wireless networks are often trusted as equivalent to the hardwired office networks they have largely replaced, but they have important differences. Wireless networks are often "visible" from outside the walls of the office - from common spaces or even the street. Without further access, this step along reveals a wealth of information about the organization's size and the type of devices connecting to their network.

Further exploration, covered in the Network Access section, goes further to explore the risks of a more dedicated adversary can use against a wireless netrwork.



This section is one of the few sections where the SAFETAG audit does go through attack scenarios, from attempting to "break in" to the wireless network to testing exposed ethernet jacks for connectivity. 

The reasons for this are threefold.  First, access to an organization's internal network tends to reveal sensitive data and "shadow" infrastructures (such as dropbox usage) that lead to many recommendations to improve access control and discussions of the value of defense in depth.  Second, the specific act of breaking the wifi password allows for a discussion on password security without attacking any specific user's password. Finally, with wireless networks treated as equivalent to wired networks in many offices, reminding the organization that wireless networks extend beyond the physical walls of the office is useful in discussing password rotation and guest network policies.

By walking organizations through the vulnerabilities of wireless networks, you have the opportunity to discuss password strength, and the power that having "offline" access to a password means in terms of brute forcing it, as well as the importance of defense in depth even within their trusted work network - reducing the services computers and servers are sharing, setting up local firewalls on computers, and requiring authentication to access files.

Even a few minutes of network "sniffing" by an adversary can enable them to work offline to reveal the network password.  Knowing this password would let someone then access the entire internal network, files shared internally, and even change network settings to enable remote access.  While in an ideal setup, this would give no further access to sensitive documents, it is not uncommon to find shared file folders, or to gain access to the firewall or network routers (often set to the default password, because they're only accessible from inside the network...).





Mapping an organization's network exposes the multitude of devices connected to it -- including mostly forgotten servers -- and provides the baseline for later work on device assessment. This process also reveals outside service usage (such as google services, dropbox, or others) which serve -- intentionally or not -- as shadow infrastructure for the organization. In combination with beacon research from the network discovery process, many devices can be associated with users.





