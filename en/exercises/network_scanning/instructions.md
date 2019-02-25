
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

!INCLUDE "variant_nmap.md"
