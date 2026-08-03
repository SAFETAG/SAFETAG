---
title: Device and Behaviour Assessment
approaches:
  - Research
  - Interpersonal
position: 50
authors:
  - SAFETAG
remote_options:
  - with-support
skills_required:
  - System Administration
skills_trained: []
summary: |
  The auditor checks staff devices to make sure systems are up-to-date, and anti-malware
  enabled. The auditor checks for known vulnerabilities to any out of date software.

  This is used to develop a report component exposing how un-updated software
  can lead to large vulnerabilities.
overview: |
   * Identify what privilege level services are running under—Are users using accounts with admin privileges, or are they using another user and have to type in a password to get admin rights? [^privilege-separation-across-os]
   * Check for existence and status of anti-virus (and anti-malware tools) on the device. In most cases, the built-in antivirus protections in Windows and macOS should be enough. Make sure that those are enabled. [^anti-virus-updates]
   * Record the version and patch levels of software on the device. Make sure to check that the operating system, browser, and office software are up to date. If the device can no longer receive security patches, consider whether it would be possible to replace the device with a newer one that does. [^identifying-software-versions]
   * Identify what level of encryption is being used and is available for data storage on the device. Most modern operating systems should encrypt the drive by default. Check how the organization encrypts external drives, if it does so at all. [^device_encryption_by_os]
   
materials_needed: |
  * A notepad may be useful
considerations: |
  * Communicate with the staff members the level of confidentiality you are
  treating discussions around their device and technology usage with - i.e.
  explain what incident response triggers you have agreed upon with the
  organization, and that anything not triggering that is to be only reported in
  aggregate.
walk_through: |
  The auditor inspects a subset of key and/or representative user devices (work
  & personal).  The auditor should focus on the work devices to limit scope
  creep, but if the office has many personal devices accessing organizational
  accounts/data, the auditor should share what "red flags" they are looking for
  and work in tandem with device owners and/or IT staff. For a small office, it
  may be possible to check every machine. For larger offices, the auditor should
  use a subset to get a feel for the overall security stance of user devices.

  As you work with staff members, also interview them about the other devices
  they use such as phones and tablets, and how they connect to work services -
  email/webmail, chat apps, intra/extranet tools, Constituent Relationship
  Management (CRM) tools like CiviCRM or Salesforce, financial tracking tools,
  and website management tools.

  In the Tools section are checklist to assist in checking across different platforms/versions
  for common security needs.


tools:
  - MacOS Device Check
  - Windows Device Check
  - Linux Device Check

recommendations: |
  **If Unsupported Operating System - Upgrade to Recent Version**

  Popular operating systems like Windows 7 (and, from October 2025, Windows 10)
  are, sadly, no longer receiving security updates. Upgrade to the latest version
  keeping in mind the system requirements of the version selected. For Windows, review the [Windows
  lifecycle factsheet](https://support.microsoft.com/en-ph/help/13853/windows-lifecycle-fact-sheet)
  for upcoming "EOLs" (End of Life). Apple does not publish EOL schedules, but
  historically releases security updates for their current and two prior
  releases.

  **If Pirated Software - Move to Licensed Software Systems**

  While "pirated" operating systems and software are extremely common
  (especially for Windows) they often leave much to be desired in terms of
  security.  If the OS or Software is not receiving regular updates from the
  software creator, it is extremely vulnerable to thousands of potential
  attacks. Switch to licensed software or recommended Free Open Source Software

  **If Outdated - Update Operating Systems and Other Software**

  Operating Systems and Softwares of all varieties - Windows, Mac, Linux, and
  others, are constantly being updated.  These updates often fix bugs, but they
  also protect the system from newly discovered vulnerabilities.  It can seem
  difficult to keep updating constantly, but this is very important to protect
  even non-sensitive systems.

  **If Vulnerable Software - Update Vulnerable Software**

  Many critical software components, such as web browsers, have many
  vulnerabilities and need to be aggressively updated. If there are not needed
  for work by the users, uninstall them

  **If No Anti-Virus and Anti-Malware Scanner - Install Anti-Virus and
  Anti-Malware Scanner, or enable the built-in OS ones**

  An Anti-virus and Anti-malware offer some minimal protection to the system and
  therefore is important to have them installed. In most cases, the default anti-malware
  tool installed with the operating system offers sufficiently good protection.
  Make sure that it is turned on and working. In Windows, it's Windows Defender.
  In macOS, it's a series of tools, including XProtect and Gatekeeper. All of them
  should be enabled and working out-of-the box.

  **If Unencrypted Drive  - Encrypt Hard Drives**

  When possible, build-in drive encryption (Filevault on OSX, BitLockeron
  Windows, and LUKS on Linux) tend to offer the most seamless, user-friendly
  experiences. VeraCrypt offers free cross-platform drive encryption and cna
  also create encrypted drives which can be shared across platforms.

  **If Inactive firewall - Activate both personal and server firewall (If
  present)**

  Again, where present, use built-in firewalls and configure them for both
  office and public network options. Testing to ensure systems can still perform
  expected office natworking (file sharing, printing, etc.) is essential unless
  alternatives are created.
organization_size_under: 25
time_required_minutes: 120
---
