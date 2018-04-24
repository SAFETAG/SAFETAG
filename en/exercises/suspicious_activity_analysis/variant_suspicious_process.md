
If you find suspicious open ports, follow the instructions in the Network Scanning activity section "How to decide if an open port is suspicious".

It can also be useful to follow these steps:

- On every operating system, check if the device OS and the installed software are up-to-date and where possible set to automatically update.

**Windows, Mac, Android**

* On Windows, use [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer) to dig into further details on each process.
* Check that antivirus is installed in the device and is updated.
  * If an antivirus is installed, and it is up-to-date, launch a scan - this will help as a diagnostic tool, to identify any already known malware, not necessarily to remove it.
        - if malware is identified:
            - for commercial, known malware - get rid of it through the antivirus
* If the the antivirus is disabled or not updated:
        - Try to understand if the user disabled it, and why.
            - if the user hasn't disabled it, a computer compromise is likely.

**Android, iOS**

- Check if the device is rooted or jailbroken - this might be an indicator of compromise.
- Check if any suspicious applications have been installed from outside the official app stores, and on android, if this has been enabled.

*See the User Device Assessment and Mobile Device Assessment activities for more in-depth device analysis.*
