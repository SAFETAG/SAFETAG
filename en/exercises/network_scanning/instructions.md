##### Internal Network scanning

Local networks often have a variety of devices connected to them - servers, user devices such as cellphones, tablets, laptops and printers. Scanning the connected devices can reveal potential areas for further research such as odd ports being open, out of date devices/services, forgotten servers/services etc. These information are then reviewed in vulnerability research exercise, and then (if required) validated in the penetration testing exercise.

**Host Identification**

Identifying ALL devices connected to the network is important for this exercise. This is to avoiding to miss any devices that may contain vulnerabilities in your scan, and later on, these devices are attacked. Since that you have no records of these hosts, you won't be able to provide recommendation and fix vulnerabilities on these missed hosts.

**Host Enumeration**

Now you have identified all of the devices live (either by using nmap or other tools), the next step is to enumerate these discovered devices. Enumeration usually involves the identification the following information such as hostnames, port numbers and running services, operating system versions and platforms, shared resources, remote management services and old or legacy services. Doing host enumeration sometimes takes time, as not all devices may respond to your scans in the same way. To overcome this, there are variant tools with the steps on how to perform an efficient network scan.

**Host Categorization**

It is important to categorize the devices that you will discover. This is to make it easier for you later on on the following stages of vulnerability assessment to scan and analyze these devices.

For example: If you will scan a big chunk of IP addresses without categorizing devices by Operating system, your vulnerability scanner will run Windows vulnerability scan on a Linux machine and vice versa making it spend more time as your vulnerability scanner needs to run all plugins or vulnerability list against it's target system.

Running selected scan and selecting specific vulnerability scans (e.g., Windows exploits against Windows systems) can decrease the time spent in your scan as it will only run relevant vulnerabilities against it's targets.


**Application and Services Analysis**

Using a network scanning tool (**nmap/zenmap** work well), discover the devices connected to the organization's network, and explore further information such as services, service banners, and operating systems. More intense scans can be too time-consuming to run across the entire network, so target those to higher value systems. As always, be aware of the scans and additional scripts you choose, and focus your exploration (in nmap) on scripts categorized as "safe".

* Discover network-connected devices, including servers and workstations, but also smartphones, printers, security cameras, voip phones, and other devices.
* OS detection
* Open ports and banners (not all ports correctly map to their "expected" services, also provides service version information)
* additional scripts and more exhaustive port scanning as needed

**Port/Service research**

 * Inspect all systems providing internal services to the host organization.
 * Record the version and patch levels of software on the device. [^identifying-software-versions]
 * Identify weak ports or services available under the current device's firewall configuration. [^examining-firewalls-across-os]
   * Using the list of software versions and patches identify attacks and, if possible, identified malware that devices in the office are vulnerable to.
   * Identify and investigate any open ports that should not be open (e.g.: almost no ports should be open in personal computers, see below)

**SMB Network tools**

 - Inspect all systems providing internal services to the host organization.
 - Record the version and patch levels of software on the device. [^identifying-software-versions]
 - Identify weak ports or services available under the current device's firewall configuration. [^examining-firewalls-across-os]
 - Identify all odd/obscure/one-off services. [^identifying-oddone-off-services]
 - Using the list of software versions and patches identify attacks and, if possible, identified malware that devices in the office are vulnerable to.

**Windows Services**

 - SNMP
 - SMB
 - NetBIOS
 - Shared Folders
 - RDP
 - Telnet
 - Password Sniffing

Unsigned NTLM authentication messages vulnerable to Man-in-the-Middle attack on SMB file servers. It also allow an attacker on the LAN to add, remove or copy files to and from the organization’s file servers (and workstations with filesharing enabled).

**How to decide if an open port is suspicious**

If a port is open in a personal computer or mobile device, this should be immediately considered suspicious and investigated.

An open port in a server or IoT device should be investigated if it doesn't correspond to a known service. For example, if the open port is 80, 8080, or 443, it's supposed to be open for a web server, so you can try to browse it by pasting the IP address in your browser address bar. If it's for SSH (port 22), try to log into it through SSH.

In general, these are ports that might be open in a server:

| Port  | Service |
|-------|--------------|
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

To identify what a port might be used for, look at the complete list at [IANA.org](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml). Using nmap's banner scripts will also reveal what the service reports itself as (for example, you can run ssh, usually port 22, on port 443, usually https). Once you have identified what service that port might be used for, always check that that service is actually running in the machine and that the user or sysadmin is aware of it.

If the service isn't supposed to be running in the identified device, you can run a scan of the open ports to identify what service they are connected to.

**Windows**

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

!INCLUDE "variant_nmap.md"
