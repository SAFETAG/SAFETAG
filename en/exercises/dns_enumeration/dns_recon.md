**DNS enumeration with DNSrecon**

DNSrecon (available in Kali 2017 Release) is a powerful DNS enumeration script that can help and auditor in gathering information during the recon stage. This tool checks all NS records for Zone transfers, enumerate general DNS records for a given domain (MX, SOA, NS, A, AAAA, SPF and TXT). Performs SRV record enumeration and TLD (Top Level Domain) Expansion to name some.

This exercise will help you in performing some of the DNS enumeration methods using DNSrecon and generate information which you can add to your database to be used for other avenues of testing.

Below are some of the types of DNS Enumeration:

- Zone Transfer
- Reverse Lookup
- Domain and Host Brute-Force 
- Standard Record Enumeration (wildcard, SOA, MX, A, TXT etc)
- Cache snooping
- Zone Walking
- Google Lookup

**DNSrecon**

DNSrecon is located in your /usr/bin/ folder. you can execute dnsrecon directly from the Kali terminal:

root@kali:~# dnsrecon -h

|Command|Description|
|-----|-----|
|dnsrecon -d ```target.domain```|Perform basic DNS enumeration on target|
|dnsrecon -d ```target.domain``` -t axfr|Perform DNS zone transfer enumeration|
|dnsrecon -r ```<start-IP-to-end-IP>``` |Perform reverse lookup|
|dnsrecon -d ```<target.domain>``` -D <namelist> -t brt |Domain brute-force|
|dnsrecon -t snoop -n Sever -D ```Dictionary``` |Cache snooping|
|dnsrecon -d ```<target.domain>``` -t zonewalk | Perform DNS zone walking|
|dnsrecon -d ```target.domain``` -t rvl| Perform a reverse lookup of a given CIDR or IP range.|
|dnsrecon -d ```target.domain``` -t brt -D ```/path/to/subdomains.wd```|Perform brute force domains and hosts using a given dictionary.|
|dnsrecon -d ```target.domain``` -t brt -D ```/path/to/subdomains.wd``` --iw|Brute force domains and hosts using a given dictionary. `Continue brute forcing a domain even if a wildcard records are discovered.`|
|dnsrecon -d ```target.domain``` -t axfr|Test all NS servers for a zone transfer.|
|dnsrecon -d ```target.domain``` -t goo|Perform Google search for subdomains and hosts.|
|dnsrecon -d ```target.domain``` -t tld|Remove the TLD of given domain and test against all TLDs registered in IANA.|
|dnsrecon -d ```target.domain``` -t zonewalk|Perform a DNSSEC zone walk using NSEC records.|
|dnsrecon -d ```target.domain``` --db ```/path/to/report.sqlite```|Save enumeration results in a sqlite file.|
|dnsrecon -d ```target.domain``` --xml ```/path/to/report.xml```|Save enumeration results in a xml file.|
|dnsrecon -d ```target.domain``` -c ```/path/to/report.csv```|Save enumeration results in a csv file.|
