**Approach**

DNS Enumeration can be accomplished with different number of tools along with different approaches. This guide will discuss some of the approaches and the tools required to perform each of the activities.

There's 2 way you can perform DNS enumeration: 
- Passive
- Active

Passive:

Passive technique, or "indirect" approach refers to the enumeration process that doesn't send any traffic or packets from your machine, directly to your target. This can be done using 3rd tools such as online tools and cloud based scanners.

Active:

Active technique, or "direct" approach refers to sending DNS queries and enumeration tests directly to the target. Consider that traffic is send over the target which may leave traces or traffic logs coming from your source IP.


*NOTE: It is always good to ask to whitelisting your IPs whenever you perform assessments. This rules out the idea of attackers having able to avoid shunning. Whitelisting your IPs also removes false positive reports and inaccurate results*



DNS Enumerations Tools:

| Tools | Description | Type | Technique |
|-------|-------------|------|-----------|
|[Robtex](https://www.robtex.com/)|Gathers public information about IP numbers, domain names, host names, Autonomous systems, routes etc, then indexes the data in a big database and provide free access to that data | Online | Passive |
|[DNSdumpster](https://dnsdumpster.com/)|Free domain research tool that can discover hosts related to a domain, results with banners for HTTP, FTP, SSH & Telnet |Online | Passive |
|[CentralOps-Domain Dossier](https://centralops.net/co/)|Investigates domains and IP addresses. Gathers registrant information, DNS records, Network and Domain Whois Records, services scans and traceroutes | Online | Passive |  
|[DNSSEC Analyzer](http://dnssec-debugger.verisignlabs.com/)| Checks for DNSSEC keys managment and configurations records | Online | Passive |
|[Recon-ng](https://bitbucket.org/LaNMaSteR53/recon-ng)| Automared web reconnaissance framework written in Python. Complete with independent modules, database interaction, built-in convenience functions, interactive help and command completion. | Script | Active |  
