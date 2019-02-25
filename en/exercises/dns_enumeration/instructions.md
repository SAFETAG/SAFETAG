The flexibility of having multiple options in performing a DNS enumeration activity is the key for a successful enumeration. As a practice, comparing results can help in assuring that the information we gather is accurate. Your investigation may be blocked by CloudFlare, a popular DDoS protection service. ["CloudFlair"](https://blog.christophetd.fr/bypassing-cloudflare-using-internet-wide-scan-data/) provides some options in this case.


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

Specific instructions for selected tools/techniques follows:

###### Passive: Third Party and Online Tools

!INCLUDE "variant_using_online_tools_resources.md"

###### Active: DNSrecon

!INCLUDE "variant_dns_recon.md"

###### Active: DNSenum

!INCLUDE "variant_dns_enum.md"

###### Active:DNS Zone Transfer

!INCLUDE "variant_dns_zonetransfer.md"

###### Active: MX Records

!INCLUDE "variant_mx_records.md"
