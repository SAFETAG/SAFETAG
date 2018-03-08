
The auditor inspects a subset of key and/or representative user devices (work & personal).  The auditor should focus on the work devices to limit scope creep, but if the office has many personal devices accessing organizational accounts/data, the auditor should share what "red flags" they are looking for and work in tandem with device owners and/or IT staff. For a small office, it may be possible to check every machine. For larger offices, the auditor should use a subset to get a feel for the overall security stance of user devices.

As you work with staff members, also interview them about the other devices they use such as phones and tablets, and how they connect to work services - email/webmail, chat Apps, intra/extranet tools, Constituent Relationship Management (CRM) tools like CiviCRM or Salesforce, financial tracking tools, and website management tools.

Below is a checklist to assist in checking across different platforms/versions for common security needs.

###### OSX
 * OS Security Updates

 * Firewall
    * See http://support.apple.com/en-us/HT1810 for cross-version guidance
    * (GUI) Choose System Preferences from the Apple menu, Security (10.5 and before) or Security & Privacy (10.6 and later), then the Firewall tab.
 * Anti-Virus Version
    *
 * User privilege
    *
 * Drive Encryption
   * (CLI)
```sudo fdesetup status```
   * (GUI) Choose System Preferences from the Apple menu, Security (10.5 and before) or Security & Privacy (10.6 and later), then the FileVault tab.
   * (VeraCrypt)
 * Services Running
   * (Command line)
```sudo launchctl list```
   * (Command line)
```ps -ef```
   * (GUI) The "Activity Monitor" application is located in /Applications/Utilities provides a similar interface to "top"

###### Windows
If Windows is not your primary OS, you can download sample Virtual Machines (with time limitations) from Microsoft through their project to improve IE support via https://www.modern.ie/en-us/virtualization-tools#downloads (see also http://www.makeuseof.com/tag/download-windows-xp-for-free-and-legally-straight-from-microsoft-si/ and https://modernievirt.blob.core.windows.net/vhd/virtualmachine_instructions_2014-01-21.pdf)

**Windows 10**

* OS Security Updates
  * Start --Settings --Update & Security --Windows Update
* Firewall
  * Start, type Firewall (select Windows Firewall)
* Privacy
  * Start --Settings -- Privacy
* Anti-Virus Version
  *
* Privacy
  * (GUI) Start --Settings -- Privacy
* User privilege
  * Start, type 'User Account', select "Change User Account Control settings"
* Drive Encryption
  * (Bitlocker), https://docs.microsoft.com/en-us/windows/device-security/bitlocker/bitlocker-device-encryption-overview-windows-10
* Services Running
  * Start, type "Task Manager"


**Windows 8**

 * OS Security Updates
 * Firewall
   *  (GUI) Start (or Down Arrow Icon, PC Settings) -- Control Panel -- Windows Firewall
   *  (CLI)
```Netsh Advfirewall show allprofiles```
   *  (more detail: http://windows.microsoft.com/en-us/windows-8/windows-firewall-from-start-to-finish)
 * Anti-Virus Version
   *
 * User privilege
   *
 * Drive Encryption
   *
   * https://diskcryptor.net/wiki/Main_Page
 * Services Running
   * Right-Click on bottom taskbar, select "Task Manager"

Installed updates

Control Panel Programs and features installed updates
CLI:
http://www.techsupportalert.com/en/quick-and-easy-way-list-all-windows-updates-installed-your-system.htm

**Windows 7**

In Windows 7, (GUI) Control Panel -- All Control Panel Items -- Action Center (Security tab) provides a quick run-down of most security features installed and their update status. It does not show drive encryption or specific versions.

 * OS Security Updates
   *
 * Firewall
   * (GUI) Control Panel -- All Control Panel Items -- Windows Firewall
   * (CLI)
```Netsh Advfirewall show allprofiles```
 * Anti-Virus Version
   *
 * User privilege
   * (GUI) Control Panel -- All Control Panel Items -- User Accounts and checking also the User Account Control settings.
 * Drive Encryption
   * (GUI) Control Panel -- All Control Panel Items -- BitLocker Drive Encryption
   * (VeraCrypt) , https://diskcryptor.net/wiki/Main_Page
 * Services Running
   * (CLI)
```tasklist```
   * (GUI) Right-click on task bar, select "Start Task Manager"
   * (Advanced) Use TechNet/SysInternal's Process Explorer: http://technet.microsoft.com/en-us/sysinternals/bb896653.aspx

**Windows XP**

If user is still operating on windows XP, recommendation is to upgrade to later windows. Windows XP is no longer supported and is not receiving security updates: https://www.microsoft.com/windows/en-us/xp/end-of-xp-support.aspx

If there is an organizationally critical system relying on Windows XP, removing it from the network and carefully managing data exchange with it may provide a bridge solution until a replacement process can be funded and rolled out.

###### Linux
 * Firewall
   * (CLI)
```sudo iptables -L -n```
   * (CLI)   (Ubuntu, and only if installed)
```sudo ufw status```
   * (GUI) (Ubuntu, and only if installed)
```gufw```
 * Anti-Virus Version
   * (CLI) deb:
```dpkg-query -l | grep virus``` rpm: ```yum list installed | grep virus```
   * See also: https://en.wikipedia.org/wiki/Linux_malware#Anti-virus_applications
 * User privilege
   * (CLI)
```groups```

 * Drive Encryption
   *
   * (VeraCrypt)
 * Services Running
  * (CLI)
```ps -ef```
  * (CLI)
```top```
