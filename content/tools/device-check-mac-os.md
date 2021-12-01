---
title: MacOS Device Check
short_summary: Check for security status of MacOS devices
---

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
