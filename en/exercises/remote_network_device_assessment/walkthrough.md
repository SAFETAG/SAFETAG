## Scenario 0
Instruct the intermediary or the tech person in the organization to follow the instructions in the exercise on [Network mapping](../methods/network_mapping) and on [User device assessment](../methods/network_mapping).

## Scenario 1

**Legend**

- S: Server - a machine accessible globally via ssh. It could be a machine or a virtual server
- A: Auditor's GNULinux machine
- C: A machine running Linux or Mac with ssh on the auditee's end

Instruct the auditee to initiate a connection to the server (S) and set up a reverse ssh server:

Let's assume we have a server named safetag-audit.org (S), and usernames for each auditee called auditee1, auditee2, etc.
        
- on the auditee's machine (C); the auditee will need to be instructed to run the following commands:

        *service sshd start*
        ssh -R 2200:localhost:22 auditee1@safetag-audit.org
        
    (the auditor has to provide the auditee with a password for the password prompt that will appear when this command is entered.)

    this will allow any connection to port 2200 on safetag-audit.org (S) to be sent to port 22 on the auditee's machine (C). The remote port is an arbitrary high number port (> 1023); a practice can be established to assign a number to each location and machine.
                
    **example**:

    the auditee on machine on site 0 could be instructed to run:

        ssh -R 2200:localhost:22 auditee0@hubby.safetag-now.org

    this will allow the auditee to connect to port 2200 from within safetag-audit.org (S) and have traffic forwarded to port 22 on the auditee's machine (C).
    
    the auditee on machine on site 1 will run:

        ssh -R 2210:localhost:22 auditee1@safetag-audit.org
         
**Important**: make sure that the ports you use don't conflict with ports by other services or auditees, i.e. don't use a port number twice.

Once this session is open, the auditor can take control of the machine; access the auditee's machine (C). At this point there are a few powerful options:

* simply ssh from S to C via the tunnel (port defined in the reverse tunnel on the server localhost interface); 
    **example**:
    
    to connect to site 0:
    
        ssh clientUser@localhost -p 2200

    with site 1 in the previous example, the port would be 2210 (or whatever the auditee used in her command).

* Create a VPN-like connection to site:
    - create a forward tunnel from A to S that is "piped" into the reverse tunnel:

            ssh -L 2200:localhost:2200 user@hubby.safetag-now.org

    now you have a tunnel from your localhost:2200 to  safetag-audit.org:2200, which in turn has a tunnel from  safetag-audit.org:2200 to the client machine on port 22.

    - once you have that, you can use [sshuttle](https://sshuttle.readthedocs.io) (needs to be installed, it's in most Linux standard repositories) on the auditor's machine (A) to access additional resources in the auditee's network (as long as they are non-ICMP) directly from the Auditor's machine (A). Such resources might include web-based resources (router web interface for example) or remote desktop (to assess windows or mac clients) or accessing file shares on the auditee's network, etc... 

        to do this, you would need to use client credentials through the tunnel you just created, and provide the client subnet to route traffic correctly through that "VPN":
        
            sshuttle -r user@localhost:2200 192.168.1.0/24
            
        once this tunnel is created, you should be able to access any resource on the remote network by its IP and port (for example, through the browser for http(s))
    
An additional thing that one might want to do is making the connection from C to S passwordless and automatic (this can be accomplished with tools or scripts readily available on the internet).

***WARNING***: Make sure to remove/clean any persistent connections once you are done with auditing.

There should be no need for multiple reverse tunnels, as multiple forward tunnels can be set up from S to C if needed (eg. VNC or RDP); this requires multiple forward tunnels from A to S though.


## Scenario 2

**Legend**:

- A: Auditee's local machine; a clean machine, connected to the Internet through the auditee's LAN network
- B: Auditor machine

Someone at the auditee's side will prepare machine A in coordination with the auditor, then install [TeamViewer](https://www.teamviewer.com/en/).

After that, and using a trusted communication method, TeamViewer ID and passcode will be sent to the Auditor.

The auditor will use the ID and passcode to connect to the machine and start using machine A as the auditing machine.
 
There are pros and cons for this: 

**Cons**:

1. Internet speed: You will need a high speed Internet connection to achieve such task, as the remote access will be transferring the desktop of the targeted machine to you in order to do the tasks.
2. Connection interruption: While you are working remotely, you might face some connection interruptions during your session, and restarting the remote access will be a challenge because in most of the cases you will need someone at the other end to authorize you to tunnel into the machine.
3. Physical limitations: You are still physically far from the machine, which means you cannot connect a USB drive to boot from it or do any other tasks that require you to be near the device.
4. Installing Kali Linux might be hard: It might be hard for a non-technical person to prepare a Kali Linux machine

**Pros**:

1. Usability: TeamViewer easy to install and use. Anyone with basic knowledge on how to install software can assist you with preparing the auditing machine.
2. Network speed: Technically, your auditing machine is the machine you are connected to, which is physically located in the targeted office and connected to the LAN network. This means that you will have full speed running your audit tasks.

**Note**: Some remote assistant software provides VPN solutions that turn Machine A into a VPN Server and allow Machine B to VPN into it. Tunneling into that VPN server will allow you to connect to the local LAN network, which will allow you to use Machine B to run the audit.


#### Using in the middle trusted VPN server

**Legend**:
    
- A : Auditee's local machine; a clean machine, connected to the Internet through the auditee's LAN network
- B: Auditor's machine
- C: OpenVPN Server

Auditee's Network --------- (A) ---------- C ---------- (B) ---------- Auditor's Network

The auditor will put efforts preparing an OpenVPN server (C) and create 2 profiles (Keys and configurations) to allow machines A and B to connect to C.

Get a VPS from your favorite and trusted VPS provider and keep in mind the physical location of the server, then install OpenVPN Server by following the instructions contained in [this guide on Ubuntu Server](https://help.ubuntu.com/lts/serverguide/openvpn.html).

The default configuration of OpenVPN will not allow the clients (A-B) to see each other on the network. To allow that, you have to enable client-to-client directive and enable your both subnets (Auditee and Auditor) to see each others networks. To do so, follow [these instruction](https://community.openvpn.net/openvpn/wiki/RoutedLans).

After finishing the installation and testing it, the auditor will pass the .ovpn file to the person at the auditee's site through a trusted way, and provide instructions on how to install and connect to the server. After connecting A and B to C, the auditor will be able to start the network and device assessment at the other end.

**Note**: In case the VPN is censored in A or B's countries, or in both, you can follow [these instructions](https://www.pluggabletransports.info/implement/openvpn/) on how to bypass it by using pluggable transports.   
