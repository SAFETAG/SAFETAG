
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
