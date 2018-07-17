**Objective**

The goal for this exercise is to identify, enumerate and categorize all devices connected to the network. Any device that has an IP address is our target. This may include:

  - Desktop computers
  - Laptop computers
  - Tablet devices
  - Mobile phones
  - Printers
  - Wireless routers
  - VoIP devices
  - Smart TVs and appliances
  - Servers and storage devices

**Host Identification**

Identifying ALL devices connected to the network is important for this exercise. This is to avoiding to miss any devices that may contain vulnerabilities in your scan, and later on, these devices are attacked. Since that you have no records of these hosts, you won't be able to provide recommendation and fix vulnerabilities on these missed hosts.

**Host Enumeration**

Now you have identified all of the devices live (either by using nmap or other tools), the next step is to enumerate these discovered devices. Enumeration usually involves the identification the following information such as hostnames, port numbers and running services, operating system versions and platforms, shared resources, remote management services and old or legacy services. Doing host enumeration sometimes takes time, as not all devices may respond to your scans in the same way. To overcome this, there are variant tools with the steps on how to perform an effecient network scan. 

**Host Categorization**

It is important to categorize the devices that you will discover. This is to make it easier for you later on on the following stages of vulnerability assessment to scan and analyze these devices.

For example: If you will scan a big chunk of IP addresses without cagetorizing devices by Operating system, your vulnerability scanner will run Windows vulnerability scan on a Linux machine and vice versa making it spend more time as your vulnerability scanner needs to run all plugins or vulnerability list against it's target system.

Running selected scan and selecting specific vulnerabilitity scans (e.g., Windows exploits against Windows systems) can decrease the time spent in your scan as it will only run relevant vulnerabilities against it's targets.

**In Scope Devices**

Just always remember that some may not want you to scan everything on their network. To avoid this, always ask your auditee if there are specific devices that needs exclusion. These machine can be critical to their operation or they just don't want to get scanned. If your auditee have exclusions, explain the consequences possible if a machine does not undergo vulnerability assessment.


**External Network Scans**

External network scans are different for local network scans. This is because you are scanning devices that are publicly available, and can be done remotely outside the organization's premise. If your auditee agreed to have their public facing machines scanned, keep in mind that you need to consider asking your auditee for whitelisting options for shunning IDS/IPS, firewalls and other blocking mechanisms during your scan. Also make sure that you have verified the target in-scope. This is to avoid scanning out-of-scope targets that may lead you to other problems.

Most of the machines you'll encounter over external network scans were:

  - Web servers
  - DNS servers
  - Mail servers
  - Gateway devices
  - FTP Servers
  - Cloud servers
  

Now we know that network scanning technique can be used for either good and bad intentions, let's see how these actors use network scanning:

  - **Attackers/cybercriminals**

    For attackers and cyber criminals, they use network scanning to perform reconnaissance on certain target network. Looking for devices that are running outdated versions of services and applications can be considered as vulnerable and a possible entry point to get access to the network and it's resources. 
    
  - **Administrators**
  
    Administrators use network scanning technique to perform maintenance and verifying security policy.  
  
  - **Auditors**
    
    Auditors both act as an attacker in a sense that we find possible vulnerabilities present on a network and attempt verify the vulnerability if it really exists, and as an administrator documenting findings and discovered outdated and non-compliant systems and provide recommendation and solution to the vulnerabilities they discover.


**Local Network Environment**

Local networks often have a variety of devices connected to them - servers, user devices such as cellphones, tablets, laptops and printers. Scanning the connected devices can reveal potential areas for further research such as odd ports being open, out of date devices/services, forgotten servers/services etc. These information are then reviewed in vulnerability research exercise, and then (if required) validated in the penetration testing exercise. 


**Public Network Environment**

Selected scanning of external network devices (websites, webmail, extranet services) may also reveal vulnerabilities or other areas of concern. However, it is important that you seek approval or any written document that proves you have the authority to scan your target organization along with its web resources and services. 
  
  
  
  
