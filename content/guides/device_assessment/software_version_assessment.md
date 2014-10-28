---
type: guide
id: audit-internal-software-version-index
...

Software Version Assessment (Handout/Activity)
Identify software run on computers and the current version of that software. Check this against (handout) "software current version" to identify attacks that the office is vulnerable to. This is used to develop a report component exposing how un-updated software can lead to large vulnerabilities.


  * Interview individual staff
    * Identify the work and personal devices that they use to accomplish their work.
  * Inspect a subset user devices (work & personal).  The auditor should focus on the work devices to limit scope creep, but if the office has many personal devices accessing organizational accounts/data, the auditor should share what "red flags" they are looking for and work in tandem with device owners and/or IT staff. For a small office, it may be possible to check every machine. For larger offices, the auditor should use a subset to get a feel for the overall security stance of user devices.
    * Record the version and patch levels of software on the device. [^identifying-software-versions]
	* Identify what privilege level the user is operating the computer with normally. [^privilege-separation-across-os]
	* Identify what level of encryption is being used and is available for data storage on the device. [^device_encryption_by_os]
	* Identify weak ports or services available under the current device's firewall configuration. [^examining-firewalls-across-os]
	* Check for existence and status of anti-virus on the device. [^anti-virus-updates]
  * Inspect all devices providing services to the host organization.
    * Record the version and patch levels of software on the device. [^identifying-software-versions]
	* Identify what privilege level services are running under. [^privilege-separation-across-os]
	* Identify what level of encryption is being used and is available for data storage on the device. [^device_encryption_by_os]
	* Identify weak ports or services available under the current device's firewall configuration. [^examining-firewalls-across-os]
	* Check for existence and status of anti-virus on the device. [^anti-virus-updates]
    * Identify all odd/obscure/one-off services. [^identifying-oddone-off-services]
  * Using the list of software versions and patches identify attacks and, if possible, identified malware that devices in the office are vulnerable to.

