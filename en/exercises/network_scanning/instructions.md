Using a network scanning tool (**nmap/zenmap** work well), discover the devices connected to the organization's network, and explore further information such as services, service banners, and operating systems.  More intense scans can be too time-consuming to run across the entire network, so target those to higher value systems.  As always, be aware of the scans and additional scripts you choose, and focus your exploration (in nmap) on scripts categorized as "safe".

 * Discover network-connected devices, including servers and workstations, but also smartphones, voip phones, and other devices.
 * Open ports
 * OS detection
 * banners (not all ports corectly map to their "expected" services, also provides service version information)
 * additional Scripts and more exhaustive port scanning as needed

**Service research**

  * Inspect all systems providing internal services to the host organization.
    * Record the version and patch levels of software on the device. [^identifying-software-versions]
    * Identify weak ports or services available under the current device's firewall configuration. [^examining-firewalls-across-os]
    * Identify all odd/obscure/one-off services. [^identifying-oddone-off-services]
  
  * Using the list of software versions and patches identify attacks and, if possible, identified malware that devices in the office are vulnerable to.


**SMB Network tools**
 
 * smbtree

**Shared Folders Enumeration**

Unsigned NTLM authentication messages vulnerable to Man-in-the-Middle attack on SMB file servers

Unsigned NTLM authentication messages allow an attacker on the LAN to add, remove or copy files to and from the organization’s file servers (and workstations with filesharing enabled).


