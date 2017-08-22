## Scenario 1

- A machine accessible globally via ssh. It could be a machine or a virtual server
- A GNULinux machine on the auditor's side
- A machine running Linux or Mac with ssh on the auditee's end. If the audited
organization only has Windows computers, they can use a live distribution, for
example [Ubuntu Live](https://tutorials.ubuntu.com/tutorial/try-ubuntu-before-you-install?_ga=2.100677957.597084418.1503414810-670812192.1503414810#0).
    - If you're using a live Linux distribution, you will probably need to guide
    the auditee into changing the BIOS settings for enabling the computer to
    boot from a USB stick.
- If we use sshuttle, `net-tools` needs to be installed on the auditee's side.
This package is installed by default in Ubuntu.

## Scenario 2

### In the case of remote desktop:

- Clean PC connected to the local auditee LAN network
- Stable and fast Internet connection at both ends
- TeamViewer client installed on the local clean machine #Let's write other alternatives
- TeamViewer installed on the auditor's machine


In the case of remote desktop:
    Requirements:
- Clean PC connected to the local auditee LAN network
- Stable and fast Internet connection at both ends
- TeamViewer client installed on the local clean machine #Let's write other alternatives
- TeamViewer installed on the auditor's machine

In the case of using in the middle trusted VPN server:
    
    Requirements:
- A PC connected to the local auditee LAN network
- Stable and fast Internet connection at both ends 
- OpenVPN client installed on the local clean machine 
- OpenVPN client installed on the auditor's machine
- A trusted OpenVPN Server

**Applications to use**:
[TightVNC](http://www.tightvnc.com/)
[TeamViewer](https://www.teamviewer.com/en/)

potential to send a preconfigured wifi router otr usb with tamper-proof tape? 
risks: time, tampering, cost, troubleshooting/device failure -- or culd a local tech intermediary "hold" this device, and/or build it locally (e.g. SD card into a RPi with USB wifi....?) freedombox, netaidkit? 
