### Activity

Instruct participants to boot into Kali and connect to the private wireless network you have set up.  Warn them that we will be mapping out this network and discovering open ports on the machines, including their own, if they are not booted into Kali.

This can be invasive, enlightening, and embarassing - many systems, even Linux, come pre-configured with open services (such as printer sharing via SMB). Any other devices connected to this network (phones, VMs) will also be targeted.

Ask participants to open up *zenmap* and run the "Quick Scan Plus" profile against the local network (e.g. 192.168.0.*) and to let you know when it has completed.