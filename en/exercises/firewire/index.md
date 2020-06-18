---
Approach:
- Technical
Authors:
- SAFETAG
Org_size_under:
- 25
Remote_options:
- None
Skills_required:
- CLI
Time_required_minutes:
- 30
---

#### Firewire Access to Encrypted/Locked computers

##### Summary

Firewire ports and expansion slots can be abused to obtain data that are thought to be encrypted

Any attacker who obtains a running (including sleeping and hibernating!) Windows, Mac, or even Linux laptop with a Firewire port, an ExpressCard expansion slot, or a Thunderbolt port will be able to read, record or modify any sensitive information on the device, even if the screen is “locked” and the information is stored on an encrypted volume or in an encrypted folder. This applies to threats involving loss, theft and confiscation, but also to “checkpoint” scenarios in which the attacker may only have access for a few minutes.

This attack requires physical control of a machine that is not powered off. Full details of the scope of the attack are available at http://www.breaknenter.org/projects/inception/ .

##### Overview

##### Materials Needed

* A system with a firewire port, a thunderbolt port, or a PCMCIA slot and a firewire card. See http://www.breaknenter.org/projects/inception/#Requirements

##### Considerations

##### Walkthrough

Firewire ports and expansion slots can be abused to obtain data that are thought to be encrypted

The threat describe in this section is more complex than it needs to be. In fact, unencrypted data are vulnerable to any number of simple attacks, the two most straightforward being: 1) rebooting the computer from a USB stick CD-ROM or DVD containing an alternate operating system, then copying all of the data; or 2) removing the hard drive, inserting it into a different machine, then copying all of the data. These techniques, which work on nearly any computer, even if a strong login password has been set, are effective and widely used, but they require extended physical access to the device. A slightly different attack is described below, one that only requires physical access for a few minutes. It, too, works regardless of login/screen-lock passwords, though only devices with Firewire ports or expansion slots (ExpressCard, CardBus, PCMCIA, etc.) are vulnerable.

The steps required to defend against all of these threats is the same: encrypt your data using a tool like Microsoft’s BitLocker, Apple’s FileVaule or the open-source Truecrypt application. The Firewire attack highlighted here is particularly illustrative, however, because it serves as a reminder that merely setting up an encrypted volume is not enough. In much the same way that a lock does little to protect your home if the door to which it is attached remains open, data encryption is rarely effective while you are logged into your computer. Even if the screen is locked (which would foil the “reboot” and “hard drive removal” attacks described briefly above), an attacker may still find a way to access your sensitive data, while the computer is up and running, because the decryption key is present in the computer’s memory. (This is how large-scale encryption actually works. Information remains encrypted at all times, on the storage device where it lives, but you are able to access it while you are logged in, or while your encrypted volume is “open,” because your computer decrypts and encrypts it on the fly.)
Walkthrough

Step 1: First, the attacker would connect her computer to the victim’s using a Firewire cable. Either or both machines could be using a true Firewire port or a Firewire expansion card. When a Firewire ExpressCard expansion card is inserted, Windows automatically installs and configures the necessary drivers, even if nobody is logged into the laptop.

Step 2: Once connected, the attacker simply runs the Inception tool, selects the operating system of the target machine and waits a minute or two for the attack to complete (depending on the amount of RAM present):

```
$ incept

 _|  _|      _|    _|_|_|  _|_|_|_|  _|_|_|    _|_|_|  _|    _|_|    _|      _|
 _|  _|_|    _|  _|        _|        _|    _|    _|    _|  _|    _|  _|_|    _|
 _|  _|  _|  _|  _|        _|_|_|    _|_|_|      _|    _|  _|    _|  _|  _|  _|
 _|  _|    _|_|  _|        _|        _|          _|    _|  _|    _|  _|    _|_|
 _|  _|      _|    _|_|_|  _|_|_|_|  _|          _|    _|    _|_|    _|      _|

v.0.2.0 (C) Carsten Maartmann-Moe 2012
Download: http://breaknenter.org/projects/inception | Twitter: @breaknenter

[*] FireWire devices on the bus (names may appear blank):
--------------------------------------------------------------------------------
[1] Vendor (ID): MICROSOFT CORP. (0x50f2) | Product (ID):  (0x0)
--------------------------------------------------------------------------------
[*] Only one device present, device auto-selected as target
[*] Selected device: MICROSOFT CORP.
[*] Available targets:
--------------------------------------------------------------------------------
[1] Windows 8: msv1_0.dll MsvpPasswordValidate unlock/privilege escalation
[2] Windows 7: msv1_0.dll MsvpPasswordValidate unlock/privilege escalation
[3] Windows Vista: msv1_0.dll MsvpPasswordValidate unlock/privilege escalation
[4] Windows XP: msv1_0.dll MsvpPasswordValidate unlock/privilege escalation
[5] Mac OS X: DirectoryService/OpenDirectory unlock/privilege escalation
[6] Ubuntu: libpam unlock/privilege escalation
--------------------------------------------------------------------------------
[!] Please select target (or enter 'q' to quit): 2
[*] Selected target: Windows 7: msv1_0.dll MsvpPasswordValidate unlock/privilege escalation
[*] Initializing bus and enabling SBP-2, please wait  1 seconds or press Ctrl+C
[*] DMA shields should be down by now. Attacking...
[*] Searching, 1328 MiB so far
[*] Signature found at 0x8b50c321 (in page # 570636)
[*] Write-back verified; patching successful
[*] BRRRRRRRAAAAAWWWWRWRRRMRMRMMRMRMMMMM!!!
```

*In the case of the laptops tested, Inception took approximately two minutes to reach the final, somewhat self-congratulatory line shown above. At that point, we were able to login using any password. (Entering “asdf” worked just fine, and gave us full access to all data on the computer.) Inception works by temporarily replacing authentication code using the Firewire’s protocol’s direct memory access (DMA). After a reboot, everything is restored to its original state.*

Once again, it is worth noting that successful mitigation of this issue requires a combination of technology (data encryption) and some level of behavior change (shutting down laptops at the end of the day, when traveling and at any time when confiscation, theft, loss or tampering are particularly likely.)

##### Recommendation


**Remove FireWire Drivers, completely turn off computer when at risk**

The easiest protection against this is to completely shut down your computer any time there is a chance of confiscation, and to make this a regular practice at night and when traveling.

If possible, the best protection against this is to remove or disable the SBP-2 and the FireWire drivers (Windows: http://support.microsoft.com/kb/2516445 , Linux: http://www.hermann-uwe.de/blog/physical-memory-attacks-via-firewire-dma-part-1-overview-and-mitigation) . For Mac, upgrading to the most recent operating system (but at least 10.7.2/Lion!).
