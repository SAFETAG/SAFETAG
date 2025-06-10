---
title: MacOS Device Check
short_summary: Check for security status of MacOS devices
---

* Software version

  GUI: Choose About from the Apple menu, and check the version of your system.
  Make sure that your operating system version is still maintained. You can do so
  by comparing your system version to the
  [list of maintained versions](https://en.wikipedia.org/wiki/MacOS_version_history#Releases) on Wikipedia.

* OS Security Updates

  GUI: Choose System Preferences from the Apple () menu, then click Software
  Update to check for updates. Install any updates that might be needed

* Firewall

  Configure your firewall by following [those](https://support.apple.com/pl-pl/guide/mac-help/mh34041/mac)
  instructions

* Anti-malware mechanisms

  [Read about](https://support.apple.com/pl-pl/guide/security/sec469d47bd8/web)
  the built-in anti-malware mechanisms in macOS.

  XProtect should be enabled by default. It loads up new malware definitions every
  time you update your software.

  Gatekeeper will prevent macOS from running applications unless they are either
  from the App Store or from identified developers. It can be temporarily bypassed
  to run non-authorized applications, but we strongly discourage people from doing so
  unless they can definitely confirm the application is safe. For more info, check
  out [this guide](https://support.apple.com/en-us/102445). 

* Drive Encryption

  On every modern macOS system, the internal drive is encrypted by default. For more
  information on that, check out the summary we wrote in
  [SaferJourno](https://saferjourno.org/chapter-5/#training-digital-security-for-the-first-time).
  
  If you want to encrypt external drives, then you can either use macOS
  [Disk Utility](https://support.apple.com/pl-pl/guide/disk-utility/dskutl35612/mac)
  if you only share with other mac users, or VeraCrypt, if you will also
  share with people who use other operating systems.

* Services Running

  GUI: The "Activity Monitor" application is located in /Applications/Utilities
  provides a similar interface to "top"

* Startup items

  GUI: System Settings —> General —> Login Items & Extensions
