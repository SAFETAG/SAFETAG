Instructions

Scenario 1
Instruct the intermediary or the tech person in the organization to follow the instructions in the exercise on [Network mapping](https://github.com/florianap/SAFETAG/tree/master/en/methods/network_mapping) and on [User device assessment](https://github.com/florianap/SAFETAG/tree/master/en/methods/network_mapping).

Scenario 2

### Summary
In this scenario the auditor will 


# Materials Needed
Requirements:
    - a server (S) with sshd running that the auditor has access to
    - a GNU/Linux machine (C) on the auditee's site (if no machine is available, the auditor will instruct the client on how to set up a Linux live distribution on a USB stick and launch sshd)
    - in the auditor's machine (A), ssh that is capable of doing tunneling (this is always possible on Linux and Mac; for Windows you will need an ssh client that allows tunneling)

# Instructions (Walkthrough)

BIOS lock problems - can they boot from USB?
Lightweight VM (limitations to netwok access, no wifi monitor mode scanning)
https://www.lifewire.com/create-uefi-bootable-linux-mint-usb-2202084
putty for windows and reverse ssh?

OSX options? (Terminal + ssh)


Legend:
    
    S : Server; a machine accessible globally via ssh, could be a machine or virtual server
    A: Auditor machine
    C: a machine running linux with ssh on the Auditee end
    
    
Synopsis:
    Get the AUDITEE/CLIENT to initiate a connection to the SERVER and set up a reverse ssh server, this can be done with a command with the structure:
        
        
        Lets assume we have a serverr named hubby.safetag-now.org (S); and usernames for each auditee called auditee1,auditee2,...etc
        
        on the Auditee machine (C); the auditee will need to be instructured to run:
        ssh -R 2200:localhost:22 auditee1@hubby.safetag-now.org
        the auditor has to provide the auditee with a password for the password prompt that will appear when this command is entered.
        
        this will allow any connection to port 2200 on hubby.safetag-now.org (S) to be sent to port 22 on Auditee machine (C). The remote port is an arbitrary high number port (> 1023); a practice can be established to assign a number to each location and machine
                
        example:
            the auditee on machine on site 0 could be instructed to run:  
        ssh -R 2200:localhost:22 auditee0@hubby.safetag-now.org
  this will allow the auditee to connect to port 2200 from within hubby.safetag-now.org (S) and have traffic forwarded to port 22 on auditee machine (C)
the auditee on machine on site 1 will run:
ssh -R 2210:localhost:22 auditee1@hubby.safetag-now.org
         
**Important**: make sure that the ports you use don't conflict with ports by other services or auditees, i.e. don't use a port number twice.


In case the auditor needs to access a different device on the network, they can do a forward tunnel to S with the following commands:
        
   in A:
       $ ssh -L 2200:localhost:2200 auditer@S (Auditor forward tunnel from A to S)
  in C:
      $ ssh -R 2200:localhost:22 client@S (Client reverse tunnel from S to C)
  in A:
      $ ssh client@localhost -p 2200 (Auditor using forward tunnel to connect to reverse tunnel; reaching from A to C via S)

[sshuttle](https://sshuttle.readthedocs.io) ?
    sshuttle -r root@localhost:6666 192.168.1.0/24

        
        There should be no need for multiple reverse tunnels, as multiple forward tunnels can be set up from S to C if needed (eg. VNC or RDP); this requires multiple forward tunnels from A to S though.
        
        
        
        
        if we don't need to access auditee linux machine (C) via ssh, but want, say access port 80 on a device, we will run on S : 
         ssh -R 8025:deviceIP:80  auditee5@hubby.safetag-now.org
         you can replace deviceIP with say the IP address of a router.
         
1) C:--------------------------------------->S:ssh (client initates connection to S ssh server)
2) C::80<---==================--S::8000 (server to client reverse tunnel)


once connection is established, A can connect to S, and from S reverse ssh into C 
        3) A: -------------------------------------->S:ssh (Auditor to S ssh connection)
        4) A on S ------------------------------->C
    
Scenario 3


# Instructions (Walkthrough)
Synopsis

Legend:
    
    A : Auditee's local machine ; a clean machine, connected to the Internet through the auditee's LAN network  
    B: Auditor machine

Synopsis:
Someone at auditee's side will prepare machine A in coordination with the auditor, then install TeamViewer https://www.teamviewer.com/en/ 
After that, and using a trusted communication method, TeamViewer ID and passcode will be sent to the Auditor.
The auditor will use the ID and Passcode to connect to the machine and start using machine A as the auditing machine. 
There are pros and cons for this: 
Cons:
1- Internet speed: You need will need a high speed Internet to achieve such task as the remote access will be transferring the targeted machine’s desktop to you in order to do the tasks
2- connection interruption: While you are working remotely, you might face some connection interruption during your session, restarting the remote access will be a challenge because in most of the cases you will need someone at the other end to authorize you to tunnel into the machine.
3- Physical limitation: You are still physically not near the machine, which means you can not connect a USB drive to boot from it or do any other tasks that requires you to be near the device.
4- Installing Kali Linux might be hard: It might be hard for non-technical person to prepare a Kali Linux machine

Pros:
1- Usability: It’s easy to install and use, anyone with basic knowledge on how to install software can assist you with preparing the auditing machine  
2- Network speed: Technically, your auditing machine is the machine is the one you are connected to which is physically located in the targeted office and connected to the LAN network, which means you will have full speed running your audit tasks.

Note: Some remote assistant software provides VPN solutions that turns Machine A into a VPN Server and allows Machine B to VPN into it. Tunneling into that VPN server will allow you to connect to the local LAN network which will allow you to use Machine B to run the audit.

Applications to use:
TightVNC
TeamViewer

In the case of using in the middle trusted VPN server:
    
 

# Instructions (Walkthrough)
Synopsis

Legend:
    
    A : Auditee's local machine ; a clean machine, connected to the Internet through the auditee's LAN network  
    B: Auditor machine
    C: OpenVPN Server
    
Auditee's Network----------(A)----------C----------(B)----------Auditor's Network

Synopsis:
The auditor will put efforts preparing OpenVPN server (C) and create 2 profiles (Keys and configurations) to allow machines A-B connecting to C. 
You get a VPS from your favorite and trusted VPS provider and keep in mind the physical location of the server, then install OpenVPN Server by following the instructions here: 
   Ubuntu Server:  https://help.ubuntu.com/lts/serverguide/openvpn.html . The default configuration of OpenVPN will not allow clients (A-B) to see each others on the network, to allow that you have to enable client-to-client directive and enable your both subnets (Auditee and Auditor) to see each others networks, follow the instruction here: 
https://community.openvpn.net/openvpn/wiki/RoutedLans 
After finishing the installation and testing it, the auditor will pass the (.ovpn) file to the person at the auditee site through a trusted way then provide instructions on how to install and connect to the server and after connecting A and B to C, the auditor will be able to start network and device assessment at the other end.

Note: In case VPN is censored in A or B  countries or both, you can follow the instructions here on how to bypass it by using pluggable transports:   https://www.pluggabletransports.info/implement/openvpn/ 
