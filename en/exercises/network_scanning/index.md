---
Approach:
- Technical
Authors:
- SAFETAG
Org_size_under:
- 100
Remote_options:
- with-support
Skills_required:
- Network Mapping
Time_required_minutes:
- 120
---

#### Network Scanning

##### Summary
Network scanning is a technique used to gather information about devices connected on a certain network. It involves enumerating open ports and services running to determine the type of device, the operating system it is running, the applications that is it running and a lot more. There are a lot of open source tools that you can used to perform this technique. Though it may look like simple and ordinary technique, it may be used for both good and bad intentions.

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

##### Overview

* Confirm what devices and servers are in scope of the audit, and confirm that any service providers (website hosts, cloud hosts, etc.) are informed and OK with any scanning to be conducted.
  * Enumerate and categorize all devices connected to the organization's network. Note that this could include IoT (Internet of Things) devices, such as IP cameras used for security, "Smart" devices, and personal devices such as mobile phones which may not be in scope. **Discuss the scope of the audit as it applied to devices connected to the work network and ensure the staff understand what you are doing.**
  * In some cases, the audit scope may include external devices. The scanning in these cases will be very targeted. If your auditee agreed to have their public facing machines scanned, keep in mind that you need to consider asking your auditee for whitelisting options for shunning IDS/IPS, firewalls and other blocking mechanisms during your scan. Also make sure that you have verified the target in-scope. This is to avoid scanning out-of-scope targets that may lead you to other problems.
* Categorize and gather additional detail on the devices that you will discover
* Explore potential vulnerabilities, unexpected devices, and suspicious open ports

##### Materials Needed

* Laptop or appliance that can scan the network
* nmap/zenmap

##### Considerations
* **In Scope Devices** Just always remember that some may not want you to scan everything on their network. To avoid this, always ask your auditee if there are specific devices that needs exclusion. These machine can be critical to their operation or they just don't want to get scanned. If your auditee have exclusions, explain the consequences possible if a machine does not undergo vulnerability assessment. If scanning public servers, verify that the server host (web company, cloud provider, etc.) has approved of the scan, and than remote scanning is legal in the jurisdiction you are performing it from and in the location of the remote server.

##### Walkthrough

Local networks often have a variety of devices connected to them - servers, laptops, printers, and user devices such as cellphones and tablets. Scanning the connected devices can reveal potential areas for further research such as odd ports being open, out of date devices/services, forgotten servers/services etc. These information are then reviewed in vulnerability research exercise, and then (if required) validated in the penetration testing exercise.

Using a network scanning tool (**nmap/zenmap** work well), discover the devices connected to the organization's network, and explore further information such as services, service banners, and operating systems. More intense scans can be too time-consuming to run across the entire network, so target those to higher value systems. As always, be aware of the scans and additional scripts you choose, and focus your exploration (in nmap) on scripts categorized as "safe".

###### Overall Process

 1. Using zenmap/nmap, identify all of the devices currently active on the network.  It is worth repeating a quick scan at different times of the day and on different days to get a more complete view of the network.
    * Discover network-connected devices, including servers and workstations, but also smartphones, printers, security cameras, voip phones, and other devices.
    * Record the version and patch levels of software on the device. [^identifying-software-versions]

 2. For the active, in-scope devices, the next step is to gather additional details including hostnames, mac addresses (useful for tracking devices over multiple days, as their IP address may change), operating system and versions, port numbers, and any running services such as shared drives, remote management services and old or legacy services. Doing host enumeration sometimes takes time, as not all devices may respond to your scans in the same way. To overcome this, there are variant tools with the steps on how to perform an efficient network scan.
    * Run OS detection options
    * Scan for open ports and service banners (not all ports correctly map to their "expected" services, also provides service version information)
    * select additional nmap scripts and more exhaustive port scanning as needed. Filter for safe scripts!

 3. Categorize the devices that you will discover. This is to make it more efficient later when runing vulnerability scans, enabling you to target them effectively. For devices which are not easily categorized, see the IoT section below

 4. **Port/Service research, and How to decide if an open port is suspicious**  If a port is open in a personal computer or mobile device, this should be immediately considered suspicious and investigated.
     * Inspect all systems providing internal services to the host organization.
     * Identify weak ports or services available under the current device's firewall configuration. [^examining-firewalls-across-os]
     * Identify and investigate any open ports that should not be open (e.g.: almost no ports should be open in personal computers, see below)
     * Identify all odd/obscure/one-off services. [^identifying-oddone-off-services]

 5. Using the list of software versions and patches identify attacks and, if possible, identified malware that devices in the office are vulnerable to.

###### Custom instructions per type of device

**Servers **

An open port in a server or IoT device should be investigated if it doesn't correspond to a known service. For example, if the open port is 80, 8080, or 443, it's supposed to be open for a web server, so you can try to browse it by pasting the IP address in your browser address bar.

If it's for SSH (port 22), try to log into it through SSH.  If the service isn't supposed to be running in the identified device, you can run a scan of the open ports and request service banners, and/or try to telnet directly to the IP:port to identify what service they are connected to.
To identify what a port might be used for, look at the complete list at [IANA.org](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml). Using nmap's banner scripts will also reveal what the service reports itself as (for example, you can run ssh, usually port 22, on port 443, usually https). Once you have identified what service that port might be used for, always check that that service is actually running in the machine and that the user or sysadmin is aware of it.

In general, these are ports that might be open in a server:

| Port  | Service |
|-------|-------------------------------|
|  21   |  FTP    |
|  22   |  SSH    |
|  23   |  Telnet |
|  25   |  SMTP   |
|  53   |  DNS    |
|  80   |  HTTP   |
|  110  |  POP    |
|  139  |  SMB    |
|  143  |  IMAP   |
|  194  |  IRC    |
|  443  |  HTTPS  |
|  465  |  SMTP   |
|  530  |  CUPS   |
|  587  |  SMTP   |
|  667  |  IRC    |
|  993  |  IMAP   |
|  995  |  POP    |
|  1900 |  port authority |
|  3306 |  MySQL  |
|  6881 to 6889 |  Torrent|
|  6969 |  Torrent |
|  8080 |  HTTP   |

**IoT Devices**

IoT (Internet of Things) is getting popular in use because of it's ease of use and ability to address certain needs. (e.g. use of IP camera instead of CCTV). As classes of network appliances become common, additional exercises (such as the VOIP assessment) can be created.  For others, it is still worth conducting a basic assessment to determine what security implications network-connected devices may have.

In the course of network scanning, watch for devices without clear operating system identification (from nmap/zenmap), and/or devices registering as Linux or unknown (particularly if there are not Linux users or servers), and use hostnames and MAC address lookups [Wireshark](https://www.wireshark.org/tools/oui-lookup.html), [MACVendors](https://macvendors.com/) for "hints".

Follow up on these devices with more intensive, specific scans to positively identify them, and/or follow up with staff to help physically locate the devices. Some devices, such as Smart TVs, may not even be normally thought of as devices worth considering, but if they are connected to the work network, they can add vulnerabilities.

Once any IoT devices have been identified, follow up with research as to their current and possible patch level/software update, what vulnerabilities they may have even if fully updated, and if there have been any known attacks against the platform.  Check their configuration to see if they are accessible from the Internet (directly, via UPnP, or via an external service that the device connects out to). Check to see that default passwords have been updated, and any service-connected devices have strong, unique and not-previously-breached passwords.

If there are un-mitigateable vulnerabilities, consider suggesting removing the IoT device from the network or creating a separate network disconnected from organizational resources for non-work devices.

**Windows / SMB Networks**

 - SNMP
 - SMB
 - NetBIOS
 - Shared Folders
 - RDP
 - Telnet
 - Password Sniffing

You can use smbtree to request a list of all smb network device names and nmblookup to connect them to their IP address.

Unsigned NTLM authentication messages vulnerable to Man-in-the-Middle attack on SMB file servers. It also allow an attacker on the LAN to add, remove or copy files to and from the organization’s file servers (and workstations with filesharing enabled).

- On Windows, use netstat from the command prompt as an administrator: the command would be `netstat -ab` - this will show you the name of the process running on the open port.
- To identify the process on the open port more in-depth, run the official [Microsoft Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer) (right-click a process to see the Properties - the port will be visible in the TCP/IP tab and you will find more information on the path of the process in the "Image" tab).
- You can investigate the process on Virustotal directly from Process Explorer, by right-clicking on the process and then clicking "Check VirusTotal".

**MacOS**

- On Mac, launch `netstat lsof` - this will show you the path of the process running on the open port.

**GNULinux**

- On Linux, follow [these instructions](https://www.cyberciti.biz/faq/what-process-has-open-linux-port/).


###### External Network Scanning

Selected scanning of external network devices (websites, webmail, extranet services) may also reveal vulnerabilities or other areas of concern. However, it is important that you seek approval or any written document that proves you have the authority to scan your target organization along with its web resources and services.

External network scans are different for local network scans. This is because you are scanning devices that are publicly available, and can be done remotely outside the organization's premise. If your auditee agreed to have their public facing machines scanned, keep in mind that you need to consider asking your auditee for whitelisting options for shunning IDS/IPS, firewalls and other blocking mechanisms during your scan. Also make sure that you have verified the target in-scope. This is to avoid scanning out-of-scope targets that may lead you to other problems.

Most of the machines you'll encounter over external network scans were:

  - Web servers
  - DNS servers
  - Mail servers
  - Gateway devices
  - FTP Servers
  - Cloud servers

###### Using nmap/zenmap


Using a network scanning tool (**nmap/zenmap** work well), discover the devices connected to the organization's network, and explore further information such as services, service banners, and operating systems.  More intense scans can be too time-consuming to run across the entire network, so target those to higher value systems.  As always, be aware of the scans and additional scripts you choose, and focus your exploration (in nmap) on scripts categorized as safe or "non-disruptive".

  * Discover network-connected devices, including servers and workstations, but also smartphones, voip phones, and other devices.
  * Open ports
  * OS detection
  * Capture banners (not all ports correctly map to their "expected" services, also provides service version information)
  * additional Scripts and more exhaustive port scanning as needed (See different variants)


According to it's nmap's website:

> "Nmap ("Network Mapper") is a free and open source (license) utility for network discovery and security auditing. Many systems and network administrators also find it useful for tasks such as network inventory, managing service upgrade schedules, and monitoring host or service uptime. Nmap uses raw IP packets in novel ways to determine what hosts are available on the network, what services (application name and version) those hosts are offering, what operating systems (and OS versions) they are running, what type of packet filters/firewalls are in use, and dozens of other characteristics. It was designed to rapidly scan large networks, but works fine against single hosts". It's considered as the most popular network mapping tool available.

Below are commands to perform network scanning using Nmap.

  - **Basic Nmap Commands**

|Command|Description|
|--|----------------------------------------------------------|
|nmap ```192.168.1.1``` |Scan a single specific IP/target|
|nmap ```www.targetdomain.com``` |Scan a specific domain|
|nmap ```172.16.1.1-35``` |Scan the IP range from 192.168.1.1 to 192.168.1.35|
|nmap ```172.16.1.1/24```|Scan a network subnet|
|nmap **-iL** ```target-IPs.txt```|Scan a list of IP from the list file ```target-ip.txt```|
|nmap **-p 80** ```172.16.1.1``` |Scan specific port/s on a target or IP range or a list file|
|nmap **-p 21-80** ```172.16.1.1``` |Scan target, IP range or list file with a specific port range|
|nmap **-F** ```172.16.1.1``` |Scan target with 100 most common ports (FAST)|
|nmap **-p-** ```172.16.1.1``` |Scan all 65,535 ports on a target|


  - **Advance Nmap Host Discovery and Port Scanning**

|Option|Command|Description|
|--|-------------|--------------------------------------------------------|
|**-sT**|nmap **-sT** ```172.16.1.1```|TCP connect port scan (with root privilege by default)|
|**-sS**|nmap **-sS** ```172.16.1.1```|Scan using TCP SYN port Scan|
|**-sU**|nmap **-sU** ```172.16.1.1```|Scan UDP ports|
|**-sA**|nmap **-sA** ```172.16.1.1```|Scan using TCP ACK port scan|
|**-sn**|nmap **-sn** ```172.16.1.1/24```|Host discovery scan IP subnet range - port scanning disabled|
|**-Pn**|nmap **-Pn** ```172.16.1.1/24```|Port scan IP subnet range - host discovery disabled|
|**-n**|nmap **-n** ```172.16.1.1```|Scan target without DNS resolution|
|**-PR**|nmap **-PR** ```172.16.1.1```|Perform ARP discovery on local network|

  - **Nmap Version Detection and Service enumeration**

|Option|Command|Description|
|--|-------------|--------------------------------------------------------|
|**-sV**|nmap **-sV** ```172.16.1.1```|Perform version detection of services running on ports|
|**-O**|nmap **-O** ```172.16.1.1```|Remote OS detection using the TCP/IP stack fingerprinting method|
|**-A**|nmap **-A** ```172.16.1.1```|Enable OS detection, version detection and traceroute|


  - **Nmap Version Detection and Service enumeration**

|Option|Command|Description|
|--|-------------|--------------------------------------------------------|
|**-T0**|nmap **-T0** ```172.16.1.1```|PARANOID scan - Evade IDS|
|**-T1**|nmap **-T1** ```172.16.1.1```|SNEAKY scan - Evade IDS|
|**-T2**|nmap **-T2** ```172.16.1.1```|POLITE scan - Slow scan for less bandwidth and use less target machine resources |
|**-T3**|nmap **-T3** ```172.16.1.1```|NORMAL scan - Default speed|
|**-T4**|nmap **-T4** ```172.16.1.1```|AGGRESSIVE scan - speed scan assuming your on a fast and reliable network|
|**-T5**|nmap **-T5** ```172.16.1.1```|INSANE scan - Extraordinary fast network and trades off with accuracy|

  - **Scanning using Nmap Scripting Engine**

|Option|Command|Description|
|--|-------------|--------------------------------------------------------|
|**-sV -sC**|nmap **-sV -sC** ```172.16.1.1```|Scan using default safe scripts|
|**-sV --script=```scriptname```&ast;**|**-sV --script=smb&ast;** ```172.16.1.1```|Scan target with a set of script (for this example, smb scripts|
|**--script=```script-name```.nse**|nmap -sV -p 443 **--script=ssl-heartbleed.nse** ```172.16.1.1```|Scan using a specific script (for this example, we used the ```ssl-heartbleed.nse``` script|
|**--script=```script1```,```script2```,```script3```**|nmap **--script=asn-query,whois,ip-geolocation-maxmind** ```172.16.1.1```|Scan using a multiple different scripts combined|

  - **Scanning using Nmap Firewall/IDS Evasion & Spoofing Options**

|Option|Command|Description|
|--|-------------|--------------------------------------------------------|
|**-f**|nmap **-f** ```172.16.1.1```|Scan using small fragmented IP packets for evading packet filtering|
|**-mtu ```value```**|nmap **-mtu 64** ```172.16.1.1```|Scan using custom MTU size|
|**-D ```IP address to spoof``` **|nmap **-D 172.16.1.200, 172.16.100**  ```172.16.1.1```|Scan using set spoofed IP addresses|
|**-S ```fakesource.com``` **|nmap **-S fakesource.com** ```targetdomain.com```|Scan from ```fakesource.com```. (May require egress interface (e.g. ```eth0```) and ```-Pn``` option)|
|**-g ```port number``` **|nmap **-g 53** ```172.16.1.1```|Scan using port ```53``` as source port number (making it look like a regular DNS traffic)|
|**-proxies ```http://1.2.3.4:8080```,```http://4.3.2.1:8080``` **|nmap **-proxies http://123.12.23.10:8080,
http://211.212.101.22:8080** ```172.16.1.1```|Relay nmap scans through HTTP/SOCKS4 proxies|

  - **Nmap Scan Output Results**

|Option|Command|Description|
|--|-------------|--------------------------------------------------------|
|**-oN ```name.file```**|nmap ```172.16.1.1``` **-oN result.file** |Generate normal output to file ```result.file```|
|**-oX ```file.xml```**|nmap ```172.16.1.1``` **-oX result.xml** |XML output to file ```result.xml```|
|**-oG ```name.file```**|nmap ```172.16.1.1``` **-oG result.grep** |Generate grep-pable output to file ```result.grep```|
|**-oA ```results```**|nmap ```172.16.1.1``` **-oA results** |Generate output to 3 different major formal|


**Working with GUI using Zenmap**

While Nmap may seem to be intimidating to some specially with all those commands and options, you can use a GUI-based Nmap called ```Zenmap```. You can download Zenmap from this [link](https://nmap.org/zenmap/)

Zenmap has different features that helps you manage scans to importing and exporting of results.

It comes with a pre-set scan settings that you can choose. Depending on your target environment and your agreement with the client, you can select from:

|Option|Command|
|--|-------------|--------------------------------------------------------|
|**Intense Scan**|```nmap -T4 -A -v```|
|**Intense Scan + UDP**|```nmap -sS -sU -T4 -A -v```|
|**Intense Scan + all TCP ports**|```nmap -p 1-65535 -T4 -A -v```|
|**Intense Scan - No ping**|```nmap -T4 -A -v -Pn```|
|**Ping Scan**|```nmap -sn```|
|**Quick Scan**|```nmap -T4 -F```|
|**Quick Scan Plus**|```nmap -sV -T4 -O -F --version-light```|
|**Quick Traceroute**|```nmap -sn --traceroute```|
|**Regular Scan**|```nmap```|
|**Slow Comprehensive Scan**|```nmap -sS -sU -T4 -A -v -PE -PP -PS80,443 -PA3389 -PU40125 -PY -g 53 --script "default or (discovery and safe)"```|

##### Recommendation

While office networks are often treated as "trusted" spaces, measures should be in place to reduce the potential harm of an attacker who gains access.  In addition, devices that "travel"  -- such as laptops and mobile phones -- should have adequate security settings (generally, firewalls) to protect them on other networks.

A policy should be in place for connecting personal devices to work networks, as well as work devices to non-work networks.
