---
title: Infrastructure and Cloud Service Assessment
position: 71
summary: |
  This component allows the auditor to discover and conduct initial assessessment of the assets used in the organization, for instance network and cloud infrastructure, servers, databases and other internal applications, cloud services and applications, mail/office suite providers, AI services, domain services or endpoint management, security products, communications tools, and social media platforms. This component can be considered as consisting of a discovery phase and an assessment phase. Discovery can take place through interviews, OSINT, network mapping and scanning, surveys, group discussions. Assessment takes place through inspection, configuration review, and checklists. In-depth automated or manual vulnerability scanning is handled separately in the [Vulnerability Scanning & Assessment](../vulnerability_scanning/) method.
short_summary: Discover and assess the security of infrastructure and cloud services used in the organization.
the_flow_of_information: "![](/img/org_device_assessment.png)"
guiding_questions: |
  * What are the the key systems and services used by the organization to manage their operations and enable their processes?
  * What work and personal devices do staff use to accomplish their work, store work related files, or engage in work communications?
  * Are there unexpected/unusual devices or services on the network?
  * How do staff communicate internally and externally? What tools do they use?
  * What are the existing in/formal security practices that the participants use to address risks.
  * If they have a physical office, what is the topology of the network? What are the routers and modems managing it?
  * What network assets does an attacker have access to once they have gained access to the internal network?
  * Who has physical access to what? Who has remote access to what? How does the choice of external service providers (local or cloud) affect autonomy and confidentiality for the organization?
  * When are , applicacations, devices, and data not monitored by trusted staff?
  * What is the level and standard of security configuration on this infrastructure? 
  * How could adversaries gain access? (forced entry, theft, social engineering, seizure)
  * Are there mitigation procedures if devices are lost or taken by adversaries? (e.g.: encrypted drives, offsite backups?)
authors:
  - SAFETAG
activities:
  - Device and Behaviour Assessment
  - Auditing Authentication for Account Security
  - A Day in the Life
  - A Night in the Life
  - Assessing Usage of Cloud Services
  - Network Scanning
  - Guided Tour
  - Network Access
  - Network Traffic Analysis
  - Remote Network and User Device Assessment
  - Router Based Attacks
  - VoIP Security Assessment
  - Wireless Range Mapping
  - Monitor Open Wireless Traffic
references:
  - Device Assessment
  - Password Security
  - Privilege Separation Across OS
  - Examining Firewalls Across OS
  - Identifying Software Versions
  - Device Encryption By OS
  - Anti-Virus Updates
  - Identifying Odd/One-Off Services
  - Physical Assessment
  - Network Mapping Methods
  - Network Access
  - Network Discovery Methods
  - Nmap Scanning
operational_security: |
  * Treat the information learned/collected with the utmost sensitivity and
  security. Physical notes should be destroyed immediately after use and digital
  notes should be kept in line with overall SAFETAG standards.
  * Clarify timing and seek permission with staff where necessary - some activities can tax the network or cause disruptions.
  * Study outputs for any obviously embarrassing personal information (especially traffic sniffing or personal devices connected to the network) before sharing in a report.
  * Treat captured traffic with the utmost security and empathetic responsibility. They may contain very personal data, passwords, and more. These should not be shared except in specific, intentional samples with anyone, including the organization itself.
info_required: []
outputs: |
  * List of all assets in the organization (including physical, digital, and cloud assets) including technical information such as hostname/address, owner/responsible person or department, service provider, dependencies, and associated notes.
  * A list of hosts, servers, and other network hardware on a LAN or part of cloud infrastructure.
  * Report section overviewing the organizational infrastructure and (idealized) systems of control currently put in place.
  * Notes on documented or undocumented access and security controls measures for physical and virtual assets.
  * List of identified vulnerabilities, misconfigurations, identifiable malware, that the office is vulnerable to.
  * List of malware found by running updated anti-virus on office computers (if anti-virus installed during device inspection.)
  * List of specific unsecured servers, workstations, external hard drives and any other digital resources
  * List of 'Shadow IT' found, e.g. unplanned and unsanctioned uses of IT devices or services found in the organization or among cloud services used.
  * Notes on existing security measures, procedures, for all digital systems
info_provided: []
method_icon: /img/org_device_icon.png
purpose: |
  Organizations rely on systems to support and enable efficient operations, and these assets constitute an attack surface which needs to be well understood by the auditor. Compromised infrastructure risks undermining nearly any other organizational attempt at securing information, safeguarding their team, and achieving their mission. Discovery of both the on-site and remote or cloud-based infrastructure and services used by the organization is a necessary prerequisite to assessing those systems. Many organizations do not have a strong understanding of their own infrastructure nor visibility of all devices/hosts connected to it, and simply presenting to them this architectural overview and how they currently seek to secure it is a helpful output in itself.
  
  Once discovery is complete (or iteratively begun), individual assets can be inspected for security status. This process will depend on the type of asset inspected and the ability of the auditor to review configurations against best practices/checklists. This process also surfaces important insights on the organization's existing procedures and capacity to maintain awareness of their assets and apply security management and controls to them. 

  The findings of this section will directly contribute to the audit report, presenting both the overview of infrastructure and services used by the organization, and the vulnerabilities found thus far. The same discovery information will be utilized in the next method using automated and manual tools for [Vulnerability Scanning & Assessment](../vulnerability_scanning/), as well as [Data Assessment](../data_assesment).
preparation: |
  The more systems administration and infrastructure/asset security assessment experience you have, the easier it will be for you to understand and review the discvered systems and assets.
  
  Baseline skills include:
  
  * Basic systems administration experience for common operating systems
  * Monitoring and analyzing wireless network traffic
  * Skill with using nmap/zenmap and its scripting options
  * Skill with Wireshark or other packet-capturing tool, as well as possibly more advanced traffic interception tools.
---