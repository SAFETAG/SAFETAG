---
title: Windows Device Check
short_summary: Check for security status of Windows devices
---


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
