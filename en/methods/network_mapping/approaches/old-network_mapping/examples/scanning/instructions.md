
#### Walkthrough

zenmap

 * OS detection
 * banners
 * additional Scripts and more exhaustive port scanning

SMB Network tools
 
 * smbtree

Service research

  * Inspect all systems providing internal services to the host organization.
    * Record the version and patch levels of software on the device. [^identifying-software-versions]
    * Identify weak ports or services available under the current device's firewall configuration. [^examining-firewalls-across-os]
    * Identify all odd/obscure/one-off services. [^identifying-oddone-off-services]
  
  * Using the list of software versions and patches identify attacks and, if possible, identified malware that devices in the office are vulnerable to.


exploit/vuln db research

* OpenVas Scans against selected internal and public servers

!INCLUDE "openvas.md"