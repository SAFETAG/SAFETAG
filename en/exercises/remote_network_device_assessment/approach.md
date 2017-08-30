There can be several approaches for this exercise, depending on the scenario.

###### Scenario 0

The organization has contacted the auditor through an intermediary who is 
familiar with tech and can follow SAFETAG instructions, or the organization has 
a tech person among their employees.

This scenario is comparable to a situation where the auditor is on site. In this
case, the auditor will instruct the intermediary or the tech person in the 
organization to follow the instructions in the exercise on 
[Network mapping](../../methods/network_mapping) and on [User device 
assessment](../../methods/network_mapping).


###### Scenario 1

The organization has someone among their employees who is ready to follow simple
instructions, including opening a terminal and pasting commands we will provide
them.

In this scenario, the auditor will send simple instructions to the auditee, so
as to be able to access the organization's network through a reverse SSH tunnel
and assess the LAN and single devices from there. To run the computer used 
within the organization's network to establish the tunnel, a UNIX system is
needed. This will be a Linux live distribution or a Mac computer.


###### Scenario 2

In this scenario, no one at the organization is ready to apply complex
instructions. Instead of relying on an individual, the auditor will rely on 
tunneling into a device located in the physical space of the auditee. This can
be done in two ways:

1. Remote Desktop or remote VPN into targeted Network. Remote Desktop is 
tunneling into a targeted machine that lives on the same targeted LAN network 
and you wish to scan its network and do the assessment, and control the machine 
remotely and use it as the auditor machine.
2. VPN to a trusted VPN server. In this case, the auditee will connect one of
their machines to a trusted VPN server, and the auditor will connect to the same
VPN server, allowing both LANs at the auditee's and auditor's ends to connect.
