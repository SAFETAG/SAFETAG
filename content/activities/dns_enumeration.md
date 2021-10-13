---
title: DNS Enumeration
approaches:
  - Technical
  - Research
position: 50
authors:
  - SAFETAG
remote_options:
  - Complete
skills_required:
  - DNS
  - OSINT
skills_trained: []
summary: |
  DNS Stands for Domain Name Service. In a nutshell, what it does is translate
  hosts/computer's name into it's IP addresses. It provides a way to know the IP
  address of any given machine on the internet, with the corresponding URL, or
  domain. You can consider it as telephone directory of the Internet.

  DNS enumeration is one of your initial steps in your overall vulnerability
  assessment and audit. It is one stage where it will allow you to discover more
  potential targets. Upon completion of this assessment stage, you may find
  issues such as leaked information caused by default settings and server
  misconfigurations. Along with these, you can also have a broader scope of
  targets, such as internal server IP addresses, company netblocks and
  domain/subdomain names.

  DNS Enumeration can be accomplished with different number of tools along with
  different approaches. This guide will discuss some of the approaches and the
  tools required to perform each of the activities. You can perform DNS
  enumeration passively or actively, depending on your operational security
  needs.

  **Passive**, or "indirect" approach refers to the enumeration process that
  doesn't send any traffic or packets from your machine, directly to your
  target. This can be done using 3rd tools such as online tools and cloud based
  scanners.

  **Active**, or "direct" approach refers to sending DNS queries and enumeration
  tests directly to the target. Consider that traffic is send over the target
  which may leave traces or traffic logs coming from your source IP. Active
  techniques include Zone Transfer, Reverse Lookup, Domain and Host
  Brute-Forcing, Standard Record Enumeration (wildcard, SOA, MX, A, TXT etc),
  Cache snooping, and Zone Walking
overview: |
  * Using a variety of passive and active techniques, uncover as many
  domains/subdomains linked to the target organization as possible.
  * Use these to advance other aspects of your work to discover additional
  credentials and potential vulnerable or outdated services.

  **Expected Outputs**

  * A fuller map of the organization's online presence, including additional
  (potentially forgotten) hosts/services connected with the organization.
  *Domains + IP addresses
  * Subdomains + IP addresses
  * MX Records + IP addresses
  * DNSKeys
  * SOA records, DNS records and registrar
  * Domains hosted within the same IP address
  * DNS history Records
  * Domain Reputation (Web of Trust)
  * Some of this information may already give you an idea of how your target's
  infrastructure setup. For example, you may see if the target domain goes into
  a CDN (Content Delivery Network) or sometimes DDoS mitigations services by
  finding out it's NS records. You can also identify if the target's MX records
  are behind a DLP (Data Leakage Prevention) systems.
  * The output of your DNS enumeration might contain "more" information about
  the client organization (internal DNS records, hostnames, router names,
  additional IP addresses). This data is sometimes caused by misconfigured DNS
  or default service configurations, so look for misleading and false-positive
  results.
materials_needed: |
  * System or VM running [Kali Linux.](https://www.kali.org/downloads/)
  * Internet Connection (and possibly a VPN or tor setup)
  * Target domain(s)
  * Secure notetaking tool
considerations: |
  * These techniques can reveal your interest in the target organization to
  anyone in your network path, so consider using a VPN or tor to conduct
  searches.
  * When performing "active enumeration" it is always good to ask to
  whitelisting your IPs whenever you perform assessments. This rules out the
  idea of attackers having able to avoid shunning. Whitelisting your IPs also
  removes false positive reports and inaccurate results
  * It is important that we verify that we have the correct target domain(s)
  before proceeding with any of the scans/audits/assessments exercises within
  SAFETAG Framework. The last thing we wouldn't want to happen is to scan and
  enumerate target which is out of scope!)
walk_through: |
  The flexibility of having multiple options in performing a DNS enumeration activity is the key for a successful enumeration. As a practice, comparing results can help in assuring that the information we gather is accurate.

  **A note on DDoS Protection Services** Your investigation may be blocked by DDoS protection services which operate at the DNS level such as Deflect or CloudFlare. ["CloudFlair"](https://blog.christophetd.fr/bypassing-cloudflare-using-internet-wide-scan-data/) provides some options in this case, as does tracking DNS and IP history to see if only DNS records changed.

  One way to identify if a website is using DDoS service or not is by investigating it's DNS record. Since that we're working with organizations may not have enough funding to subscribe to a DNS mitigation service, lot's of time you will see them not using DDoS protection.

    - [Into DNS](https://intodns.com)

  Looking up ```Server Names``` or your ```A Record``` that points to a particular 3rd party CDN DDoS service such as the following examples:

      - brianna.ns.cloudflare.com (Cloudflare)
      - toby.ns.cloudflare.com (Cloudflare)
      - 4k9o.x.incapdns.net (Incapsula)
      - e3396.dscx.akamaiedge.net (Akamai)

  If these appears on your result, then there's a high probability that your target is behind DDoS service



  **DNS Enumerations Tools:**

  | Tools | Description | Type | Technique |
  |-------|------------------------------------------------------|------|------|
  |[Robtex](https://www.robtex.com/)|Gathers public information about IP numbers, domain names, host names, Autonomous systems, routes etc, then indexes the data in a big database and provide free access to that data | Online | Passive |
  |[DNSdumpster](https://dnsdumpster.com/)|Free domain research tool that can discover hosts related to a domain, results with banners for HTTP, FTP, SSH & Telnet |Online | Passive |
  |[CentralOps-Domain Dossier](https://centralops.net/co/)|Investigates domains and IP addresses. Gathers registrant information, DNS records, Network and Domain Whois Records, services scans and traceroutes | Online | Passive |
  |[DNSSEC Analyzer](http://dnssec-debugger.verisignlabs.com/)| Checks for DNSSEC keys managment and configurations records | Online | Passive |
  |[Recon-ng](https://bitbucket.org/LaNMaSteR53/recon-ng)| Automated web reconnaissance framework written in Python. Complete with independent modules, database interaction, built-in convenience functions, interactive help and command completion. | Script | Active |
  [IntoDNS](https://intodns.com/) | IntoDNS checks the health and configuration of your DNS and provides report on MX records too. Provides suggestions to fix and improve findings | Online | Passive |
  |[YougetSignal](https://www.yougetsignal.com/tools/web-sites-on-web-server/)| Helps you find other sites being hosted on a particular IP address, verifying if the target is using a shared hosting service | Online | Passive |
  |[DNSRecon](https://github.com/darkoperator/dnsrecon)|A Python script written by Carlos Perez for conducting DNS reconnaissance. It can enumerate general DNS records, perform zone transfers, perform reverse lookups, and brute-force subdomains among other functions. It will even perform Google scanning, automating the process we discussed in the Using Google to find subdomains section. | Script | Active |
  |[DNSenum](https://github.com/fwaeytens/dnsenum)|multithreaded perl script to enumerate DNS information of a domain and to discover non-contiguous ip blocks.|Script|Online|
tools:
  - Third Party and Online Tools
  - DNSrecon
  - DNSenum
  - DNS Zone Transfer
  - MX Records
recommendations: |
  DNS is inherently public information, but we can still do a lot of steps to
  secure any parts of it which are revealing more private information. Fortinet
  provides a set of good recommendations:

  https://blog.fortinet.com/2016/03/10/10-simple-ways-to-mitigate-dns-based-ddos-attacks

  If the site is not protected from DDoS attacks, there are multiple resources
  which provide not only DDoS protection but additional security against
  attacks, such as:
  - [Deflect.ca](https://deflect.ca)
  - [Project Galileo by Cloudflare](https://www.cloudflare.com/galileo)
  - [Project Shield by Google](https://projectshield.withgoogle.com/public)

  If a zone transfer was successful, (most providers automatically limit
  anonymous zone transfers), you will need to work with their support team to
  prevent this, or switch to a different DNS provider. If your organization
  maintains its own DNS servers, the administrator of those servers should check
  the zone transfer policies to prevent anonymous transfers.
organization_size_under: 1000
time_required_minutes: 45
---
