---
title: Device and Behaviour Assessment
approaches:
  - Research
  - Interpersonal
authors:
  - SAFETAG
remote_options:
  - with-support
skills_required:
  - System Administration
skills_trained: []
summary: >

  The auditor checks staff devices for updated systems and software, anti-virus
  and other security capabilities, and identifies software running on computers
  and its current version.  The auditor checks for known vulnerabilities to any
  out of date software.


  This is used to develop a report component exposing how un-updated software
  can lead to large vulnerabilities.
overview: |2+

   * Identify what privilege level services are running under -- Are users using accounts with admin privileges, or are they using another user and have to type in a password to get admin rights? [^privilege-separation-across-os]
   * Check for existence and status of anti-virus (and anti-malware tools) on the device. [^anti-virus-updates]
   * Record the version and patch levels of software on the device. [^identifying-software-versions]
   * Identify what level of encryption is being used and is available for data storage on the device. [^device_encryption_by_os]
   * Using the list of software versions and patches identify attacks and, if possible, identified malware that devices in the office are vulnerable to.

materials_needed: |

  * A notepad may be useful
considerations: >

  * Communicate with the staff members the level of confidentiality you are
  treating discussions around their device and technology usage with - i.e.
  explain what incident response triggers you have agreed upon with the
  organization, and that anything not triggering that is to be only reported in
  aggregate.
walk_through: >

  The auditor inspects a subset of key and/or representative user devices (work
  & personal).  The auditor should focus on the work devices to limit scope
  creep, but if the office has many personal devices accessing organizational
  accounts/data, the auditor should share what "red flags" they are looking for
  and work in tandem with device owners and/or IT staff. For a small office, it
  may be possible to check every machine. For larger offices, the auditor should
  use a subset to get a feel for the overall security stance of user devices.


  As you work with staff members, also interview them about the other devices
  they use such as phones and tablets, and how they connect to work services -
  email/webmail, chat Apps, intra/extranet tools, Constituent Relationship
  Management (CRM) tools like CiviCRM or Salesforce, financial tracking tools,
  and website management tools.


  Below is a checklist to assist in checking across different platforms/versions
  for common security needs.



  ___


  ###### Variant: OS X



   * OS Security Updates

  GUI: Choose System Preferences from the Apple () menu, then click Software
  Update to check for updates

   * Firewall

   See http://support.apple.com/en-us/HT1810 for cross-version guidance

  GUI: Choose System Preferences from the Apple menu, Security (10.5 and before)
  or Security & Privacy (10.6 and later), then the Firewall tab.

   * Anti-Virus Version

   * User privilege

   * Drive Encryption

  CLI:

  ```sudo fdesetup status```


  GUI: Choose System Preferences from the Apple menu, Security (10.5 and before)
  or Security & Privacy (10.6 and later), then the FileVault tab.  Also check
  for VeraCrypt

   * Services Running

  CLI:

  ```sudo launchctl list```


  CLI:

  ```ps -ef```


  GUI: The "Activity Monitor" application is located in /Applications/Utilities
  provides a similar interface to "top"


  ___


  ###### Variant: Windows



  If Windows is not your primary OS, you can download sample Virtual Machines
  (with time limitations) from Microsoft through their project to improve IE
  support via https://www.modern.ie/en-us/virtualization-tools#downloads (see
  also
  http://www.makeuseof.com/tag/download-windows-xp-for-free-and-legally-straight-from-microsoft-si/
  and
  https://modernievirt.blob.core.windows.net/vhd/virtualmachine_instructions_2014-01-21.pdf)


  **Windows 10**


  * OS Security Updates


  GUI: Start --Settings --Update & Security --Windows Update


  * Firewall


  GUI: Start, type Firewall (select Windows Firewall)


  * Privacy


  GUI: Start --Settings -- Privacy


  * Anti-Virus Version


  * User privilege


  GUI: Start, type 'User Account', select "Change User Account Control settings"


  * Drive Encryption


  GUI: Bitlocker 
  https://docs.microsoft.com/en-us/windows/device-security/bitlocker/bitlocker-device-encryption-overview-windows-10


  * Services Running


  GUI: Start, type "Task Manager"


  **Windows 8**

   * OS Security Updates

   Control Panel Programs and features installed updates

   CLI:
   http://www.techsupportalert.com/en/quick-and-easy-way-list-all-windows-updates-installed-your-system.htm


   * Firewall

  GUI: Start (or Down Arrow Icon, PC Settings) -- Control Panel -- Windows
  Firewall

  CLI:

  ```Netsh Advfirewall show allprofiles```


  more detail:
  http://windows.microsoft.com/en-us/windows-8/windows-firewall-from-start-to-finish

   * Anti-Virus Version

   * User privilege

   * Drive Encryption

  Look for: Bitlocker, VeraCrypt. https://diskcryptor.net/wiki/Main_Page

   * Services Running

  GUI: Right-Click on bottom taskbar, select "Task Manager"



  **Windows 7**


  In Windows 7, (GUI) Control Panel -- All Control Panel Items -- Action Center
  (Security tab) provides a quick run-down of most security features installed
  and their update status. It does not show drive encryption or specific
  versions.

   * OS Security Updates


   * Firewall

  GUI: Control Panel -- All Control Panel Items -- Windows Firewall


  CLI:

  ```Netsh Advfirewall show allprofiles```

   * Anti-Virus Version

   * User privilege

  GUI: Control Panel -- All Control Panel Items -- User Accounts and checking
  also the User Account Control settings.

   * Drive Encryption

  GUI: Control Panel -- All Control Panel Items -- BitLocker Drive Encryption;
  also look for VeraCrypt, https://diskcryptor.net/wiki/Main_Page

   * Services Running
  CLI:

  ```tasklist```


  GUI: Right-click on task bar, select "Start Task Manager"


  Advanced: Use TechNet/SysInternal's Process Explorer:
  http://technet.microsoft.com/en-us/sysinternals/bb896653.aspx


  **Windows XP**


  If user is still operating on windows XP, recommendation is to upgrade to
  later windows. Windows XP is no longer supported and is not receiving security
  updates: https://www.microsoft.com/windows/en-us/xp/end-of-xp-support.aspx


  If there is an organizationally critical system relying on Windows XP,
  removing it from the network and carefully managing data exchange with it may
  provide a bridge solution until a replacement process can be funded and rolled
  out.


  ###### Variant: Linux

   * OS Security Updates

   * Firewall

  CLI:

  ```sudo iptables -L -n```


  CLI:   (Ubuntu, and only if installed)

  ```sudo ufw status```


  GUI: (Ubuntu, and only if installed)

  ```gufw```
   * Anti-Virus Version

  CLI deb:

  ```dpkg-query -l | grep virus``` rpm: ```yum list installed | grep virus```


  See also: https://en.wikipedia.org/wiki/Linux_malware#Anti-virus_applications

   * User privilege

  CLI:

  ```groups```

   * Drive Encryption

  CLI:

  ```sudo dmsetup status```

   * Services Running

  CLI:

  ```top```


  CLI:

  ```ps -ef```



  -----
recommendations: >

  **If Unsupported Operating System - Upgrade to Recent Version**


  Popular operating systems like Windows XP are, sadly, no longer receiving
  security updates. Upgrade to the latest version keeping in mind the system
  requirements of the version selected. For Windows, review the [Windows
  lifecycle fact
  sheet](https://support.microsoft.com/en-ph/help/13853/windows-lifecycle-fact-sheet)
  for upcoming "EOLs" (End of Life). Apple does not publish EOL schedules, but
  historically releases security updates for their current and two prior
  releases.


  While "pirated" operating systems and software are extremely common
  (especially for Windows) they often leave much to be desired in terms of
  security.  If the OS or Software is not receiving regular updates from the
  software creator, it is extremely vulnerable to thousands of potential
  attacks. Switch to licensed software or recommended Free Open Source Software


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


  Many critical software components, such as Java or Adobe Flash, have many
  vulnerabilities and need to be aggressively updated. If there are not needed
  for work by the users, uninstall them


  **If No Anti-Virus and Anti-Malware Scanner - Install Anti-Virus and
  Anti-Maware Scanner**


  An Anti-virus and Anti-malware offer some minimal protection to the system and
  therefore is important to have them installed.


  **If Outdated Anti-Virus - Update Anti-Virus**


  Most AV tools automatically update, but this can sometimes get out of sync, or
  if the AV was a pre-installed trial system, it will stop updating after its
  trial period.  An out of date anti-virus is worthless. Therefore ensure that
  continuous udpdating of AV is done.


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

