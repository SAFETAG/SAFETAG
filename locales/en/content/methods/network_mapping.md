---
title: Network Mapping
summary: >

  This component allows the auditor to identify security issues with the host's network and map the devices on a host's network, the services that are being used by those devices, and any protections in place.
the_flow_of_information: "![](/img/network_mapping.png)"
method_icon: "/img/network_mapping_icon.png"
guiding_questions: >

  * What operating systems, and services being hosted or used by an organization? Are any hosts running unusual, custom, or outdated operating systems and services?

  * Are there unexpected/unusual devices or services on the network?

  * What is the topology of the network? What are the routers and modems

  managing it?

  * What services (e.g. dropbox, web-mail, etc.) are running on the network that have not been mentioned by the organizational staff?

  * What network assets does an attacker have access to once they have gained access to the internal network?
authors:
  - SAFETAG
activities:
  - Network Scanning
  - Network Access
  - Network Traffic Analysis
  - Remote Network and User Device Assessment
  - Router Based Attacks
  - VoIP Security Assessment
  - Wireless Range Mapping
  - Monitor Open Wireless Traffic
references:
  - Network Mapping Methods
  - network_access
  - Network Discovery Methods
  - Nmap Scanning
outputs: >2

    * The reach of and security protections in place on any wireless networks
    * A list of hosts, servers, and other network hardware on LAN
    * The operating systems and services on each host.
    * Services used by the host as identified by decrypted wireless network traffic.
    * Possible vulnerable services and practices.[^vulnerability_analysis]
operational_security: >2

    * Clarify timing and seek permission with staff - some activities can tax the network or cause disruptions.
    * Confirm that all devices you are accessing/scanning belong to the organization.
    * Delete all devices from your scan that do not belong to the organization.
    * Study outputs for any obviously embarrassing personal information (especially traffic sniffing or personal devices connected to the network) before sharing.
    * Treat captured network traffic with the utmost security and empathetic responsibility. They may contain very personal data, passwords, and more. These should not be shared except in specific, intentional samples with anyone, including the organization itself.
info_required: []
info_provided: []
purpose: >
  Mapping an organization's network exposes the multitude of devices connected
  to it -- including mostly forgotten servers -- and provides the baseline for
  later work on device assessment and vulnerability research.


  This process also reveals outside service usage (such as google services, dropbox, or others) which serve -- intentionally or not -- as shadow infrastructure for the organization. In combination with beacon research from the *Monitor Open Wireless Traffic* exercise, many devices can be associated with users.
preparation: >

  #### Baseline Skills

  * Monitoring and analyzing wireless network traffic

  * Skill with using nmap/zenmap and its scripting options

  * Skill with Wireshark or other packet-capturing tool, as well as possibly more advanced traffic interception tools.
position: 60
---
