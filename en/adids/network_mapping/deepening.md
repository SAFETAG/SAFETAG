### Deepening

This portion of the module covers mapping a network as well as running deeper scans on selected targets once you have gained access. This exercise covers both using nmap and common command-line network utilities as well as using OpenVAS for vulnerability detection.  This section is split into the same sub-divisions as the Input section:


  * Network Mapping and Service Discovery
    * Basic Network Mapping
    * Identifying Network Hardware
  * Network Traffic Analysis
  * Vulnerability Scanning
    * Using OpenVAS
    * Other tools
  * Vulnerability Research
    * Service Identification
    * Vulnerability Databases
    * Default Configurations

**Note** {.note} Don't forget that other participants will show up on the network.

#### Network Mapping and Service Discovery

Continuing from the *zenmap* Activity, we will now dive deeper into network scanning; first by more advanced and precise *nmap* scannning.

##### Basic Network Mapping

  * Basic Scanning
    * Default profiles
  * Saving Scans & Results
  * Creating Profiles
    * Un-targeted Scans for easier re-use
  * Saving Profiles for later
  * Searching & Comparing Scans
  * Interpreting Results
  * Capturing Results
    * Customizing and outputting topology for further use and documentation
    * Remember that client IP addresses will likely change over time!

  * Have the participants use the "no ping" flag (-Pn) to allow them to continue without a ping request. This will increase the time of these scans significantly so guide the participants in how to do this quickly.
  * Have the participants edit the scan profile to begin adding additional features such as basic OS and Version detection
  * Encourage targeted deep scans against the VMs to save time.
  * Have the participants begin adding script functions, such as banners and smb-os-discovery - note where scripts alert the user to their safety levels
  * While zenmap has useful SMB information, also discuss  *smbtree* and *nmlookup* as useful network-mapping/exploration tools

##### Identifying Network Hardware

  * Identifying up-stream devices with traceroute
    * No, we are serious, we are going to cover traceroute. Just as a reminder to use it, and to use ICMP (-I) and TCP (-T / tcptraceroute)
    * route, mtr (-rwc 10) are also useful
  * Enumerating the mapping techniques used earlier in this section up the network chain
    *NOTE:*{.note} ONLY do this with approval and within the LAN that are owned by the organization.)
  * Identifying the network's public IP (via whatismyipaddress, skype resolvers, discuss other methods)
  * With permission, run an nmap scan (via a VPN) against this external-facing IP. 


#### Network Traffic Analysis: Listening to the Network

 * Wireshark
 * Working with Filters
 
#### Server Vulnerability Scanning

##### Using OpenVas
  * Setting up OpenVAS running (see example docs)
  * Running a scan using the Greenbone Security Assistant
  * Creating a custom scan
  * Scanning with OpenVAS
  	* Scan settings , Only-Safe Checks
  	* Caveats - blocking, crashing, breaking things
  * Target one of the VMs on the network (TODO: add one with fail2ban??)
  * Documenting Scans and Results

##### Other Tools

 * Light-touch Website tools: Builtwith, (DrupalVersionCheck site?)
 * SkipFish,  OwaspZAP, ProxyStrike 


#### Vulnerability Research

Database Exploration

* Vulnerability Databases
  * [NVD / National Vulnerability Database](https://web.nvd.nist.gov/view/vuln/search-advanced)
  * Search [OVAL Database by platform and software](http://oval.mitre.org/repository/data/search/)
    * CVE - Use platform, software, CVE# or OVAL#
  * CCE is transitioning the information currently located at the [CCE MITRE site](http://cce.mitre.org/) to the [NIST CCE index](https://nvd.nist.gov/cce/index.cfm). In the meantime the existing MITRE site still serves as a source of information about CCE.
    * CVSS and connecting vulns to risks
    * CPE
      * Refining searches by platform.
* [OSVDB](http://osvdb.org/)
* [Exploit DB](http://www.exploit-db.com/search)
* [Security Tracker](http://securitytracker.com/topics/topics.html)
* [CERT CC Advisories](https://www.cert.org/historical/advisories/)
* Vendor Info
  * (http://oss-security.openwall.org/wiki/vendors)
  * (https://protect.iu.edu/cybersecurity/indepth)
  * [Microsoft](https://technet.microsoft.com/en-us/security/bulletin)
  * Search for recent vendor advisories for software (http://oss-security.openwall.org/wiki/vendors)
  * (https://protect.iu.edu/cybersecurity/indepth)
  * Just google search for "[SOFTWARE] advisory" or "vulnerability"

##### Default Configurations

  * Find Default Passwords
    * [DefaultPassword](http://www.defaultpassword.com/)
  * Identify Hardening Guides
  * Find Common Mis-Configurations
  * Verify Vulnerabilities
